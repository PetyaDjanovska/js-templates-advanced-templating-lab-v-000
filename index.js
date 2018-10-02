function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderMain() {
    var template = Handlebars.compile(document.getElementById("main-template").innerHTML);
    var html = template({name: 'Gordon Ramsay'});
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
