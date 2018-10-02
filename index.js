function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    if(this.state === "closed") {
      return new Handlebars.SafeString(this.body)
    } else {
      return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
    }
  })

  function renderMain() {
    let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    let html = template({name: 'Gordon Ramsay'});
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
