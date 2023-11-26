const menu_btn=document.querySelector(".hamburger");
const mobile_menu=document.querySelector(".mobile-menu");
menu_btn.addEventListener('click',function(){
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
document.querySelectorAll(".links").forEach(n=>n.addEventListener("click",()=>{
  menu_btn.classList.remove("is-active");
  mobile_menu.classList.remove("is-active");
}))

document.addEventListener('DOMContentLoaded', () => {
    const returnButton = document.getElementById('return-to-top');
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        returnButton.style.display = 'block';
      } else {
        returnButton.style.display = 'none';
      }
    });
  
    returnButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });