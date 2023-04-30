// main.js

window.addEventListener('load',() => {

  /* 주메뉴 */
const gnbMenu = document.querySelectorAll(".gnb>ul>li>a");
let headerWrap = document.querySelector(".header_wrap");
let height = document.querySelectorAll(".gnb>ul>li>div");

gnbMenu.forEach((el,i)=>{
  el.addEventListener("mouseenter", e => {
    e.preventDefault();
    activation(gnbMenu,i);
    headerWrap.style.height = height[i].offsetHeight+70+"px";    
  });
  el.addEventListener("focus", e => {
    e.preventDefault();
    activation(gnbMenu,i);
    headerWrap.style.height = height[i].offsetHeight+70+"px";  
  });
  el.addEventListener("mouseleave", e =>{
    for(let el of gnbMenu) el.closest("li").classList.remove("on");
    headerWrap.style.height = 70+"px";
  });
})

/* 검색박스 */
const srchBtn = document.querySelector(".btn_srch");
const srchWrap = document.querySelector(".srch_wrap");
const srchBtnClose = document.querySelector(".btn_srch_close");

srchBtn.addEventListener("click", e => {
  e.preventDefault();
  srchWrap.classList.add("on");  
});
srchBtnClose.addEventListener("click", e=> {
  e.preventDefault();
  srchWrap.classList.remove("on");
})

/* 탑메뉴 */
// const topBtn = document.querySelectorAll(".top_menu>dd>a");

// topBtn.forEach((el, i)=>{
//   el.addEventListener("click", e => {
//     el.nextElementSibling.classList.add("on");
//     console.log(el.nextElementSibling);
//   })
// })

// activation
function activation(a, idx){
  for(let el of a) el.closest("li").classList.remove("on");
  a[idx].closest("li").classList.add("on");
}

/* 오토배너 */
const btnNext = document.querySelector(".btn_next");
const btnPrev = document.querySelector(".btn_prev");
let slides = document.querySelectorAll("li.slide")
let slideRolls = document.querySelectorAll(".slide_roll li");

let bnnNum=0;
let lastNum = document.querySelectorAll(".slide_wrap>li").length-1;

// activation2
function activation2(idx, list){
  for(let el of list){
    el.classList.remove("on", "active");
  }
  list[idx].classList.add("on", "active");
}

//next 버튼 클릭
btnNext.addEventListener("click", e => {
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation2(bnnNum, slides);
  activation2(bnnNum, slideRolls);
})

//prev버튼 클릭
btnPrev.addEventListener("click", e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  activation2(bnnNum, slides);
  activation2(bnnNum, slideRolls);
})

//오토배너 5초마다 
function autoBanner(){
 bnnNum++;
 if(bnnNum>lastNum) bnnNum=0;
 activation2(bnnNum, slides);
 activation2(bnnNum, slideRolls);
autoBnn = setTimeout(autoBanner,5000);//재귀함수
}

let autoBnn = setTimeout(autoBanner, 5000); //최초호출

// 배너 재생 멈춤 버튼 클릭
// 배너 멈추고 버튼 이미지 바뀜

let flag = true;
const btnPlay = document.querySelector("a.btn_play");

btnPlay.addEventListener("click", e =>{
  e.preventDefault();
  if(flag){//멈춤
    btnPlay.classList.add("on");
    clearTimeout(autoBnn);
    flag = false;
  }else{//재생
    btnPlay.classList.remove("on");
    autoBnn = setTimeout(autoBanner,5000);
    flag = true;
  }
})

// 롤링 버튼 클릭
// 해당 배너 이동

for(let i=0; i<slideRolls.length; i++){
  slideRolls[i].addEventListener("click", e => {
    e.preventDefault();
    activation2(i,slides);
    activation2(i,slideRolls);
  })
}

// top 버튼 클릭
// 클릭하면 스크롤이 맨위로 올라감
// 스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜
const btnTop = document.querySelector("a.btn_top");

btnTop.addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
    });
})

// top버튼 pr버튼 위치 조정
const btnArea = document.querySelector("div.btn_area");

window.addEventListener("scroll", () => {
  let scroll = document.querySelector("html").scrollTop;
  console.log(scroll);
  if(scroll<=0){
    btnArea.classList.remove("on", "ab");
  }else if(scroll > 4300){
    btnArea.classList.add("on");
    btnArea.classList.add("ab");
  }else{
    btnArea.classList.remove("ab");
    btnArea.classList.add("on")
  }

});

// 페이지 새로고침 애니메이션

const sections = document.querySelectorAll("section");
console.log(sections);


window.addEventListener("scroll", ()=>{
  let scroll = document.querySelector("html").scrollTop;
 
  if(scroll>2200){
sections[2].classList.add("on");
}else if(scroll>1200){
  sections[1].classList.add("on");
}else if(scroll>500){
  sections[0].classList.add("on")
}else{

}
});


});




