function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial')

  Handlebars.registerHelper('displayIngredient', function() {
      return new Handlebars.SafeString(this.body);
  })

  function createRecipe() {
    let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    let recipeResult = recipeTemplate(recipe);

    const recipe = {
      name: document.getElementById("name").value,
      description: document.getElementById("recipeDescription").value,
      ingredients: []
      }
    let ingredients = document.getElementsByName("ingredients")
    for (let i=0; i < ingredients.length; i++) {
      if (ingredients[i]) {
        recipe['ingredients'].push(ingredients[i].value)
      }
    }

    document.getElementsByTagName("main")[0].innerHTML = recipeResult
  }

  function displayEditForm(){

  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
