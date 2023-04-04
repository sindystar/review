const ul = document.querySelector("ul");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lis = ul.querySelectorAll("li");
let len = lis.length; //추가가 되도 자동 li의 갯수를 세어줌 

ul.style.left = "-100%"; //ul의 초기 위치값을 정해주는 코드 
ul.prepend(ul.lastElementChild); //로딩후 첫번째 li가 frame에 보이도록 초기화 하는 코드

//ul의 너비값을 li의 갯수에 맞춰서 자동 계산 코드
ul.style.width = `${100 * len}%`;
//각 li의 너비값을 자동 계산 해주는 코드 
lis.forEach((el) => {
  el.style.left = `${100 / len}%`;
})


//next 슬라이드 이동 코드
next.addEventListener("click", (e) => {
  e.preventDefault();

  new Anim(ul, {
    prop: 'left',
    value: "-200%",
    duration: 1000,
    callback: () => {

      ul.append(ul.firstElementChild);  //첫번째 li를 뒤쪽으로 보내는 코드 
      ul.style.left = "-100%"; // -200%에서 초기 위치 값으로 복귀 하도록 하는 코드 
    }
  })
})

//prev 슬라이드 이동 코드 
prev.addEventListener("click", (e) => {
  e.preventDefault();

  new Anim(ul, {
    prop: "left",
    value: "0%",
    duration:1000,
    callback: () => {
      ul.style.left = "-100%"; // 0%에서 초기 위치 값으로 복귀하는 코드 
      ul.prepend(ul.lastElementChild); //마지막 li를 맨앞으로 보내는 코드 
    }
  })
})


