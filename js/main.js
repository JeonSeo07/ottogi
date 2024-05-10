window.addEventListener('load',()=>{


// 탑메뉴
const languageBtn = document.querySelector("dl.top_menu > dd:nth-of-type(1)");

languageBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  e.currentTarget.classList.toggle("on");

  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute("title","언어설정 닫기");
  }else{
    e.currentTarget.children[0].setAttribute("title","언어설정 열기");
  }
});

// 주메뉴
const gnbBtn = document.querySelectorAll(".gnb > ul > li");
const mainMenu = document.querySelectorAll(".gnb > ul > li > div");
const headerWrap = document.querySelector(".header_wrap");


for(let i=0; i<gnbBtn.length; i++){
  gnbBtn[i].addEventListener("mouseover",(e)=>{
    e.currentTarget.classList.add("on");
    
    var ht = e.currentTarget.children[1].offsetHeight;
    console.log(ht);

    headerWrap.style.height = `${ht+191}px`;

  });

  gnbBtn[i].addEventListener("mouseout",(e)=>{

    e.currentTarget.classList.remove("on");
    
    headerWrap.style.height = "191px";
  });

  gnbBtn[i].children[0].addEventListener("focus",(e)=>{
    
    e.currentTarget.parentElement.classList.add("on");
    
    var ht = e.currentTarget.nextElementSibling.offsetHeight;

    headerWrap.style.height = `${ht+191}px`;

  });

  gnbBtn[i].children[0].addEventListener("blur",(e)=>{
    e.currentTarget.parentElement.classList.remove("on");
    
    headerWrap.style.height = "191px";

  });

  window.addEventListener('resize',()=>{
    eventW = document.body.clientWidth;
    
    if(eventW < 640){
      //모바일
      headerWrap.style.height = '90px';
  
    }else{
      headerWrap.style.height = '191px';
    }
  });


}




// main_visual
const bnnSlide = document.querySelectorAll("li.slide");
const bnnBtnPrev = document.querySelector("a.btn_prev");
const bnnBtnNext = document.querySelector("a.btn_next");
const bnnBtnRoll = document.querySelectorAll("div.slide_roll > ul > li");
const btnPlay = document.querySelector("a.btn_play");

const bnnImage = document.querySelectorAll("li.slide > a > img");

let bnnNum = 0;
let bnnLast = bnnSlide.length-1

window.addEventListener('resize',()=>{
  eventW = document.body.clientWidth;

  if(eventW < 640){
    //모바일
    bnnImage[0].src = './images/mob_main_visual_01.jpg';
    bnnImage[1].src = './images/mob_main_visual_02.jpg';
    bnnImage[2].src = './images/mob_main_visual_03.jpg';

  }else{
    bnnImage[0].src = './images/main_visual_01.jpg';
    bnnImage[1].src = './images/main_visual_02.jpg';
    bnnImage[2].src = './images/main_visual_03.jpg';
  }
});

//함수지정
function slide(name,number,value){
  name.forEach((item)=>{
    item.classList.remove(value);
  });

  name[number].classList.add(value);
}

// white
const bnnBtnAll = document.querySelectorAll("div.slide_arrow > a");

let secWhite = (bannerNumber)=>{

  if(bnnSlide[bannerNumber].classList.contains('white')){
    bnnBtnAll.forEach(item => {
      item.classList.add("white");
    });
    bnnBtnRoll.forEach(item => {
      item.classList.add("white");
    });
    btnPlay.classList.add("white");
  }else{
    bnnBtnAll.forEach(item => {
      item.classList.remove("white");
    });
    bnnBtnRoll.forEach((item)=>{
    item.classList.remove("white");
    });
    btnPlay.classList.remove("white");
  }

  bnnBtnRoll.forEach((item)=>{
  item.classList.remove("on");
});

bnnBtnRoll[bannerNumber].classList.add("on");
}

//arr 버튼
bnnBtnNext.addEventListener('click',(e)=>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum > bnnLast){bnnNum = 0}

  slide(bnnSlide, bnnNum, "active");
  slide(bnnBtnRoll, bnnNum, "on");
  secWhite(bnnNum);
});

bnnBtnPrev.addEventListener('click',(e)=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum < 0){bnnNum = bnnLast}

  slide(bnnSlide, bnnNum, "active");
  slide(bnnBtnRoll, bnnNum, "on");
  secWhite(bnnNum);
});

//roll버튼
for(let i=0; i < bnnBtnRoll.length; i++){
  bnnBtnRoll[i].addEventListener("click",(e)=>{
    e.preventDefault();
    slide(bnnSlide, i, "active");
    slide(bnnBtnRoll, i, "on");
    secWhite(i);
  });
}

//auto배너
function autoBnn(){
  bnnNum++;
  if(bnnNum > bnnLast){bnnNum = 0}

  slide(bnnSlide, bnnNum, "active");
  slide(bnnBtnRoll, bnnNum, "on");
  secWhite(bnnNum);

  bnnAni = setTimeout(autoBnn,5000);
}

let bnnAni = setTimeout(autoBnn,5000);

//play버튼
let flag = true;

btnPlay.addEventListener('click',(e)=>{
  e.preventDefault();
  if(flag){
    clearTimeout(bnnAni);
    e.currentTarget.classList.add('on');
    flag = false;
  }else{
    bnnAni = setTimeout(autoBnn,5000);
    e.currentTarget.classList.remove('on');
    flag = true;
  }
});


//신제품 slide
const newWrap = document.querySelector("ul.new_slide");
const newSection = document.querySelectorAll("ul.new_slide > li");

let newBnn = 0;
let newLast = newSection.length-1

let newW = document.querySelector(".content3 > ul > li:first-child").offsetWidth;

function newAni(){
  newBnn++;
  if(newBnn > newLast){newBnn = 0}

  newWrap.style.transform = `translateX(${newW*-newBnn}px)`;

  autoNew = setTimeout(newAni, 5000);
}

let autoNew = setTimeout(newAni, 6000);

//new에 마우스 오버 시 재생 멈춤
newWrap.addEventListener('mouseover',()=>{
  clearTimeout(autoNew);
});

newWrap.addEventListener('mouseout',()=>{
  autoNew = setTimeout(newAni, 5000);
});


//event slide
const eventWrap = document.querySelector(".content4 > ul");
const eventSection = document.querySelectorAll(".content4 > ul > li");
const eventImage = document.querySelectorAll(".content4 > ul > li > a > img");

const eventPrev = document.querySelector("a.event_prev");
const eventNext = document.querySelector("a.event_next");

let eventNum = 0;
let eventLast = eventSection.length-1

let eventW = document.body.clientWidth;

// white
const eventBtnAll = document.querySelectorAll(".content4 > div.event_arrow");

let eventWhite = (eventNumber)=>{

  if(eventSection[eventNumber].classList.contains('white')){
    eventBtnAll.forEach(item => {
      item.classList.add("white");
    });
  }else{
    eventBtnAll.forEach(item => {
      item.classList.remove("white");
    });
  }
}

window.addEventListener('resize',()=>{
  eventW = document.body.clientWidth;

  if(eventW < 640){
    //모바일
    eventImage[0].src = './images/mob_event_01.jpg';
    eventImage[1].src = './images/mob_event_02.jpg';

  }else{
    eventImage[0].src = './images/event_01.jpg';
    eventImage[1].src = './images/event_02.jpg';
  }
});

eventNext.addEventListener('click',(e)=>{
  e.preventDefault();
  eventNum++;

  if(eventNum > eventLast){eventNum = 0}

  eventWrap.style.transform = `translateX(${eventW*-eventNum}px)`;

  eventWhite(eventNum);
});

eventPrev.addEventListener('click',(e)=>{
  e.preventDefault();
  eventNum--;

  if(eventNum < 0){eventNum = eventLast}

  eventWrap.style.transform = `translateX(${eventW*-eventNum}px)`;

  eventWhite(eventNum);
});

//auto event
function eventAni(){
  eventNum++;

  if(eventNum > eventLast){eventNum = 0}

  eventWrap.style.transform = `translateX(${eventW*-eventNum}px)`;

  eventAuto = setTimeout(eventAni, 5000);

  eventWhite(eventNum);
}

let eventAuto = setTimeout(eventAni, 5000);


//인기상품
const bestWrap = document.querySelector("div.best_items > ul");
const bestSection = document.querySelectorAll("div.best_items > ul > li");
const bestPrev = document.querySelector("a.best_prev");
const bestNext = document.querySelector("a.best_next");

window.addEventListener('resize',()=>{
  
  //인기상품
  let bestNum = 0;
  let bestCount = bestSection.length;

  let bestWrapWidth = 344;
  let bestWrapMargin = 68;

  bestWrap.style.width = (bestWrapWidth + bestWrapMargin)*bestCount - bestWrapMargin + 'px';

  eventW = document.body.clientWidth;


  if(eventW < 640){
    //모바일
    bestWrap.style.transform = `translateX(140px)`;
    bestSlide(140);

  }else if(eventW > 640 && eventW < 1024){
    //태블릿
    bestWrap.style.transform = `translateX(320px)`;
    bestSlide(320);

  }else{
    //pc
    bestWrap.style.transform = `translateX(430px)`;
    bestSlide(430);

  }

  function bestSlide(liWidth){
    function moveSlide(num){
      bestWrap.style.transform = `translateX(${(-num*412)+liWidth}px)`;
      bestWrap.style.transition = 'transform 0.3s linear 0.1s';
      bestNum = num;
    }

    bestSection.forEach(item =>{
      item.classList.remove("on");
    });
  
    bestSection[0].classList.add("on");

  
    bestNext.addEventListener('click',(e)=>{
      e.preventDefault();
    
      if(bestNum < bestCount-1){
        moveSlide(bestNum+1);
        console.log(bestNum+1);
      }else{
        moveSlide(bestNum);
      }
    
      bestSection.forEach(item =>{
        item.classList.remove("on");
      });
    
      bestSection[bestNum].classList.add("on");
      
    });
    
    bestPrev.addEventListener('click',(e)=>{
      e.preventDefault();
    
      if(bestNum <= 0){
        moveSlide(bestNum);
      }else{
        moveSlide(bestNum-1);
        console.log(bestNum-1);
      }
    
      bestSection.forEach(item =>{
        item.classList.remove("on");
      });
    
      bestSection[bestNum].classList.add("on");
      
    });
  }
});

//인기상품
let bestNum = 0;
let bestCount = bestSection.length;

let bestWrapWidth = 344;
let bestWrapMargin = 68;

bestWrap.style.width = (bestWrapWidth + bestWrapMargin)*bestCount - bestWrapMargin + 'px';

eventW = document.body.clientWidth;


if(eventW < 640){
  //모바일
  bestWrap.style.transform = `translateX(140px)`;
  bestSlide(140);

}else if(eventW > 640 && eventW < 1024){
  //태블릿
  bestWrap.style.transform = `translateX(320px)`;
  bestSlide(320);

}else{
  //pc
  bestWrap.style.transform = `translateX(430px)`;
  bestSlide(430);

}

function bestSlide(liWidth){
  function moveSlide(num){
    bestWrap.style.transform = `translateX(${(-num*412)+liWidth}px)`;
    bestWrap.style.transition = 'transform 0.3s linear 0.1s';
    bestNum = num;
  }

  bestSection.forEach(item =>{
    item.classList.remove("on");
  });

  bestSection[0].classList.add("on");


  bestNext.addEventListener('click',(e)=>{
    e.preventDefault();
  
    if(bestNum < bestCount-1){
      moveSlide(bestNum+1);
      console.log(bestNum+1);
    }else{
      moveSlide(bestNum);
    }
  
    bestSection.forEach(item =>{
      item.classList.remove("on");
    });
  
    bestSection[bestNum].classList.add("on");
    
  });
  
  bestPrev.addEventListener('click',(e)=>{
    e.preventDefault();
  
    if(bestNum <= 0){
      moveSlide(bestNum);
    }else{
      moveSlide(bestNum-1);
      console.log(bestNum-1);
    }
  
    bestSection.forEach(item =>{
      item.classList.remove("on");
    });
  
    bestSection[bestNum].classList.add("on");
    
  });
}



//O'Kitchen
const kitchenItems = document.querySelector(".content6 > div");
const kitchenItem = document.querySelectorAll(".content6 > div > ul > li > div");

let isDown = false;

let startX;
let scrollLeft;


kitchenItems.addEventListener('mousedown',(e)=>{
  e.preventDefault();
  
  isDown=true;
  kitchenItems.classList.add("active");

  startX = e.pageX - kitchenItems.offsetLeft;
  console.log(startX);
  
  scrollLeft = kitchenItems.scrollLeft;

  kitchenItem.unbind("click").bind('dblclick',(e)=>{
    e.preventDefault();
  });
});

kitchenItems.addEventListener('mouseleave',(e)=>{
  e.preventDefault();

  isDown = false;
  kitchenItems.classList.remove("active");
});

kitchenItems.addEventListener('mouseup',()=>{
  isDown = false;
  kitchenItems.classList.remove("active");
});

kitchenItems.addEventListener('mousemove',(e)=>{
  if(!isDown) return;

  e.preventDefault();

  const x = e.pageX - kitchenItems.offsetLeft;
  const walk = (x - startX)*2;

  kitchenItems.scrollLeft = scrollLeft - walk;

  kitchenItem.unbind("click").bind('dblclick',(e)=>{
    e.preventDefault();
  });
  // console.log({x, startX});

  // console.count(isDown);
  // console.log(startX);
});



//오뚜기 SNS
const snsMenu = document.querySelectorAll(".content7 > ul.sns_menu > li > a");
const snsAll = document.querySelectorAll(".content7 > div > ul");
const daily = document.querySelector(".content7 > div > ul.daily");
const today= document.querySelector(".content7 > div > ul.today");
const plate = document.querySelector(".content7 > div > ul.plate");
const yellows = document.querySelector(".content7 > div > ul.yellows");

for(let s=0; s<snsMenu.length; s++){
  snsMenu[s].addEventListener("click",(e)=>{
    e.preventDefault();

    snsMenu.forEach(item=>{
      item.classList.remove("on");
    });

    e.currentTarget.classList.add('on');

    snsAll.forEach(item=>{
      item.classList.remove('on');
    });

    if(snsMenu[s].classList.contains('on')){
      snsAll[s].classList.add('on');
    }

  });
}


//top 버튼

const topBtn = document.querySelector('a.btn_top');

topBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

});

window.addEventListener('scroll',()=>{
  let scrollHt = window.scrollY;
  console.log(scrollHt);
  
  eventW = document.body.clientWidth;

  let ht;
  let footerHt = document.querySelector('#footer').offsetHeight;

  function topScroll(topHt){
    if(scrollHt <= 0){
      topBtn.classList.remove("on","ab");
    }else if(scrollHt > 0 && scrollHt <= topHt){
      topBtn.classList.add("on");
      topBtn.classList.remove("ab");
    }else{
      topBtn.classList.add("ab");
    }
  }

  if(eventW < 640){
    //모바일
    ht = document.body.clientHeight - footerHt - 1000;
    topScroll(ht)

  }else if(eventW > 641 && eventW < 1024){
    //태블릿
    ht = document.body.clientHeight - footerHt - 1000;
    topScroll(ht)

  }else{
    //pc
    ht = document.body.clientHeight - footerHt - 1000;
    topScroll(ht)
  }
});

  
});