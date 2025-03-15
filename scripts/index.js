const navItems = document.querySelector('.logo');
function navTransition(){
  document.querySelector('.btn-primary').style.display = "none";
  const navRight = document.querySelector('.nav-list');
  if(navRight.style.justifyContent === "flex-end"){
    navItems.style.order = "1";
    navRight.style.order = "0";
    navRight.style.justifyContent = "flex-start";
    navItems.style.display = 'block';
  }
  else{
    navItems.style.order = "0";
    navRight.style.order = "1";
    navRight.style.justifyContent = "flex-end";
    navItems.style.display = 'block';
  }
}
navItems.addEventListener('click',function(){
  document.querySelector('.btn-primary').style.display = "block";
  navItems.style.display = 'none';
  setTimeout(navTransition,800);
})

