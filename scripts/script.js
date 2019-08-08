const recipes = document.querySelectorAll('.recipeResults');

recipes.forEach(r =>
  r.addEventListener('click', e =>{
  recipes.forEach(function(element, index){
    if (element === r){
      element.style.order = 1;
    }
    else{
      element.style.order += 1;
    }
  })}));
