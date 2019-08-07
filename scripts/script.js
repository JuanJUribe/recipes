const recipes = document.querySelectorAll('.recipeResults');

recipes.forEach(r =>
  r.addEventListener('click', e =>{
  r.style.backgroundColor = 'red';
}));
