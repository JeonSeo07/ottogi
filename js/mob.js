window.addEventListener('load',()=>{

//moblie
const body = document.querySelector('body');
const mobBg = document.querySelector('.bg');

const mobBtn = document.querySelector('.mobBtn');
const mobMenuAll = document.querySelector('.mob');
const mobMainMenu = document.querySelectorAll('nav.mob_gnb > ul > li');
const mobInMenu = document.querySelectorAll('nav.mob_gnb > ul > li > div > ul > li');


mobBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  e.currentTarget.classList.toggle('on');

  if(mobBtn.classList.contains('on')){
    mobBtn.setAttribute('title',"메뉴 전체보기 닫기");
    body.classList.add('on');
    mobBg.classList.add('on');
    mobMenuAll.classList.add('on');
  }else{
    mobBtn.setAttribute('title',"메뉴 전체보기 열기");
    body.classList.remove('on');
    mobBg.classList.remove('on');
    mobMenuAll.classList.remove('on');
  }
});

for(var i=0; i<mobMainMenu.length; i++){
  mobMainMenu[i].addEventListener('click',(e)=>{
    e.preventDefault();

    mobMainMenu.forEach(item=>{
      item.classList.remove('on');
    });
  
    e.currentTarget.classList.add('on');
  });
}

for(var i=0; i<mobInMenu.length; i++){
  mobInMenu[i].addEventListener('click',(e)=>{
    e.preventDefault();

    mobInMenu.forEach(item=>{
      item.classList.remove('on');
    });
  
    e.currentTarget.classList.add('on');
  });
}

});