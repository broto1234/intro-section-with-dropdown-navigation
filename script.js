const  openMenu = document.querySelector('.icon-openMenu');
const  closeMenu = document.querySelector('.icon-CloseMenu');
const  navContainer = document.querySelector('.nav-container');
const  featureItem = document.querySelector('.features-item');
const  featureUp = document.querySelector('.features-arrowup');
const  featureDown = document.querySelector('.features-arrowdown');
const  companyItem = document.querySelector('.company-item');
const  companyUp = document.querySelector('.company-arrowup');
const  companyDown = document.querySelector('.company-arrowdown');
const btns = document.querySelectorAll('.feature-company');
const hero = document.querySelector('.hero-container');



openMenu.addEventListener('click', () => {
  closeMenu.style.display = 'block';
  navContainer.style.display = 'block';
  openMenu.style.display = 'none';
  hero.style.backgroundColor = 'rgba(0,0,0,1)';
})

closeMenu.addEventListener('click', () => {
  closeMenu.style.display = 'none';
  navContainer.style.display = 'none';
  openMenu.style.display = 'block'; 
  hero.style.backgroundColor = 'rgba(0,0,0,0)';
})

btns.forEach( (item) => {
  item.addEventListener('click', (e) => {
    const toggleItem = e.target.classList;
    if (toggleItem.contains("features")) {
      functionToggle(featureItem, featureUp, featureDown);
    } 
    if (toggleItem.contains("company")) {
      functionToggle(companyItem, companyUp, companyDown);
    }
  })
})

const functionToggle = (itemOne, itemTwo, itemThree) => {
  itemOne.classList.toggle("active");
  itemTwo.classList.toggle("active");
  itemThree.classList.toggle("active");
}