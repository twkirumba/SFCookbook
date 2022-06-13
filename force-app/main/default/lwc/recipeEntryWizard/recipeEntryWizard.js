/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, track } from "lwc";
//import { loadScript } from "lightning/platformResourceLoader";
import parseIngredientInput from "@salesforce/apex/RecipeEntryWizardController.parseIngredientInput";
import insertRecipe from "@salesforce/apex/RecipeEntryWizardController.insertRecipe";
//import wordsToNumbers from "@salesforce/resourceUrl/wordsToNumbers";
//import HELLOWORLD from "@salesforce/resourceUrl/helloWorld";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const columns = [
  { label: "Ingredient", fieldName: "ingredient", type: "text" }
];

export default class RecipeEntryWizard extends LightningElement {
  currentIngredientInput = "";
  newVal;
  wordsToNumbersInitialized = false;
  @track name;
  @track description;
  @track servingSize;
  get recipe() {
    return {
      name: this.name,
      description: this.description,
      servingSize: this.servingSize
    };
  }

  @track ingredientList = [
    {
      name: "abc"
    },
    {
      name: "def"
    }
  ];
  get ingredientListString() {
    return this.ingredientList.join(", ");
  }
  @track inputError;

  handleAddRow(event) {
    if (event.keyCode === 13) {
      console.log("calling apex");
      let tempvar = event.target.value;
      event.target.value = "";
      parseIngredientInput({ ingredientInput: tempvar })
        .then((data) => {
          console.log("apex successful, passing data to child cmp");
          this.inputError = null;
          this.template
            .querySelector("c-ingredients-table")
            .updateIngredientsList(data);
        })
        .catch((error) => {
          console.log("apex unsuccessful, displaying error");
          this.inputError = JSON.stringify(error);
        });
    }
  }

  //pass recipe fields and list of ingredients to apex insertRecipe(), show toastEvent, refresh component
  // handleSaveRecipe() {
  //   console.log('Recipe --> ' + this.recipe);
  //   console.log('Ingredients --> ' + JSON.stringify(this.template.querySelector('.iTable').iList2));
  //   insertRecipe({rW: this.recipe, oList: this.template.querySelector('.iTable').iList2})
  //     .then((data) => {
  //       const evt = new ShowToastEvent({
  //         title: "Success",
  //         message: "This is a success message",
  //         variant: "success",
  //         mode: "dismissable"
  //       });
  //       this.dispatchEvent(evt);
  //       this.refreshComponent();
  //     })
  //     .catch((error) => {
  //       const evt = new ShowToastEvent({
  //         title: "Error",
  //         message: JSON.stringify(error),
  //         variant: "error",
  //         mode: "dismissable"
  //       });
  //       this.dispatchEvent(evt);
  //     })
  //     .finally(() => {});
  // }
  handleSaveRecipe() {
    this.template
      .querySelector("c-ingredients-table")
      .insertRecipe(this.recipe);
  }
  handleSaveRecipeComplete() {
    console.log("Success Save");
    this.refreshComponent();
  }
  handleSaveRecipeFail(){
    console.log("Recipe Save Fail");
  }

  handleRecipeChange(event) {
    this[event.target.name] = event.target.value;
  }

  refreshComponent() {
    setTimeout(() => {
      eval("$A.get('e.force:refreshView').fire();");
    }, 1000);
  }

  renderedCallback() {
    // if (!this.wordsToNumbersInitialized) {
    //   loadScript(this, wordsToNumbers)
    //     .then(() => {
    //       this.wordsToNumbersInitialized = true;
    //       console.log("w2n loaded, executing. ");
    //       let x1 = wordsToNumbers("twelve");
    //       console.log(x1);
    //     })
    //     .catch((error) => {
    //       console.log("error loading wordsToNumbers script");
    //       console.log("Error --> " + JSON.stringify(error, null, 2));
    //     });
    // }
  }
}
