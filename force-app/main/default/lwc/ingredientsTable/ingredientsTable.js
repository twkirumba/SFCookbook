import { LightningElement, wire, track, api } from "lwc";
import insertRecipe from "@salesforce/apex/RecipeEntryWizardController.insertRecipe";
//import getAccountList from "@salesforce/apex/AccountController.getAccList";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ingredientsTable extends LightningElement {
  @track dragStart;
  @api ingredientsList;
  @track iList2;
  @api updateIngredientsList(ingredient) {
    console.log("update method--> " + ingredient.item);
    if (this.iList2 == null) {
      this.iList2 = [
        {
          quantity: ingredient.quantity,
          measure: ingredient.measure,
          item: ingredient.item
          
        }
      ];
    } else {
      this.iList2.push({
          quantity: ingredient.quantity,
          measure: ingredient.measure,
          item: ingredient.item
      });
    }
  }
  @api insertRecipe(recipe){
    console.log('Recipe --> ' + recipe);
    console.log('Ingredients --> ' + JSON.stringify(this.iList2));
    insertRecipe({rW: recipe, oListString: JSON.stringify(this.iList2)})
      .then((data) => {
        const evt = new ShowToastEvent({
          title: "Success",
          message: "Recipe successfully created",
          variant: "success",
          mode: "dismissable"
        });
        this.dispatchEvent(evt);
        this.dispatchEvent(new CustomEvent('success'));

        //this.refreshComponent();
      })
      .catch((error) => {
        const evt = new ShowToastEvent({
          title: "Error",
          message: "Recipe creation failed - " + JSON.stringify(error),
          variant: "error",
          mode: "dismissable"
        });
        this.dispatchEvent(evt);
        this.dispatchEvent(new CustomEvent('fail'));

      });
  }
  
  DragStart(event) {
    this.dragStart = event.target.title;
    event.target.classList.add("drag");
  }

  DragOver(event) {
    event.preventDefault();
    return false;
  }

  Drop(event) {
    event.stopPropagation();
    const DragValName = this.dragStart;
    const DropValName = event.target.title;
    if (DragValName === DropValName) {
      return false;
    }
    const index = DropValName;
    const currentIndex = DragValName;
    const newIndex = DropValName;
    Array.prototype.move = function (from, to) {
      this.splice(to, 0, this.splice(from, 1)[0]);
    };
    this.iList2.move(currentIndex, newIndex);
  }
}
