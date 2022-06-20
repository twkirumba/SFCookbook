/*
 *Purpose: Convert Words (e.g. 'twelve') To Numbers ('12')
 */

public class WordsToNumbers {
  
  public static string apiKey = ''; //replace with your api Key for the Words2Numbers app on RapidAPI.com
  
  public static Decimal wordsToNumbers(String s) {
    HttpRequest request = getWordsToNumberRequest(s);
    HttpResponse response = getWordsToNumbersResponse(request);
    return getDecimal(response);
  }

  public static HttpRequest getWordsToNumberRequest(String s) {
    HttpRequest request = new HttpRequest();
    s = EncodingUtil.urlEncode(s,'UTF-8');
    system.debug(s);
    request.setEndpoint(
      'https://words-to-numbers.p.rapidapi.com/wordsToNumber?query=' +
      s +
      '&lang=en'
    );
    request.setHeader('X-RapidAPI-Host', 'words-to-numbers.p.rapidapi.com');
    request.setHeader(
      'X-RapidAPI-Key',
      apiKey);
    request.setMethod('GET');
    request.setTimeout(10000);
    return request;
  }
  public static HttpResponse getWordsToNumbersResponse(HttpRequest request) {
    Http http = new Http();

    return http.send(request);
  }
  public static Decimal getDecimal(HttpResponse response) {
    if (response.getStatusCode() == 200) {
        system.debug(response);
      WordsToNumbersResult w = (WordsToNumbersResult) JSON.deserialize(
        response.getBody(),
        WordsToNumbersResult.class
      );
      return w.result;
    } else {
      System.debug(response);
      throw new AuraHandledException(response.getStatus());
    }
  }

  public WordsToNumbers() {
  }
  public class WordsToNumbersResult {
    public Decimal result;
  }
}
