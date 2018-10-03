function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
      return new Handlebars.SafeString(this.body);
  })

  Handlebars.registerHelper('recipeDetailsPartial')

  function createRecipe() {
    let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    let html = template({name: 'Gordon Ramsay'});
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
