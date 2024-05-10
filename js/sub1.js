 /* sub1.js */
window.addEventListener('load',()=>{
// sub_navi

const subNavBtn = document.querySelectorAll('div.sub_navi_inner > ul > li');

for(var i=1; i<subNavBtn.length; i++){
  subNavBtn[i].addEventListener("click",(e)=>{
    e.preventDefault();

    if(e.currentTarget.classList.contains('on')){
      e.currentTarget.classList.remove('on');
    }else{
      subNavBtn.forEach(item=>{
        item.classList.remove('on');
      });
    
      e.currentTarget.classList.toggle('on');
    }
  });
}

// career_btn

const careerBtn = document.querySelectorAll('div.career_btn > ul > li');

for(var i=0; i<careerBtn.length; i++){
  careerBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    careerBtn.forEach(item=>{
      item.classList.remove("on");
    });

    e.currentTarget.classList.add('on');
  });
}


// ul:nth-of-type(2) : 테이블 페이지 버튼
const pageBtn = document.querySelectorAll('div.btn_page > ul > li');
const pagePrevBtn = document.querySelector('a.btn_prev');
const pageNextBtn = document.querySelector('a.btn_next');
const careerTable = document.querySelectorAll('.career_notice');

let lastBtn = pageBtn.length-1

for(let i=0; i<pageBtn.length; i++){
  pageBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    pageBtn.forEach(item=>{
      item.classList.remove('on');
    });
    pageBtn[i].classList.add('on');

    if(pageBtn[0].classList.contains('on')){
      pagePrevBtn.classList.remove('on');
      pageNextBtn.classList.add('on');
    }else if(pageBtn[lastBtn].classList.contains('on')){
      pagePrevBtn.classList.add('on');
      pageNextBtn.classList.remove('on');
    }else{
      pagePrevBtn.classList.add('on');
      pageNextBtn.classList.add('on');
    }
    
    careerTable.forEach(item=>{
      item.classList.remove('on');
    });

    careerTable[i].classList.add('on');

  });
}

let pageRoll = 0;
let lastNum = pageBtn.length-1;

pageNextBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  pageRoll++;

  if(pageRoll > lastNum){pageRoll = lastNum}

  pageBtn.forEach(item=>{
    item.classList.remove('on');
  });

  pageBtn[pageRoll].classList.add('on');

  careerTable.forEach(item=>{
    item.classList.remove('on');
  });

  careerTable[pageRoll].classList.add('on');

});

pagePrevBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  pageRoll--;

  if(pageRoll < 0){pageRoll = 0}

  pageBtn.forEach(item=>{
    item.classList.remove('on');
  });

  pageBtn[pageRoll].classList.add('on');

  careerTable.forEach(item=>{
    item.classList.remove('on');
  });

  careerTable[pageRoll].classList.add('on');

});

});
