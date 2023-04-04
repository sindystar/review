const ul = document.querySelector("ul");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lis = ul.querySelectorAll("li");
let len = lis.length; //추가가 되도 자동 li의 갯수를 세어줌 
let enableClick = true;
let speed = 500;

//초기화 함수를 호출 
init();

//next 슬라이드 이동 코드 
next.addEventListener("click", (e) => {
  e.preventDefault();

  //재이벤트 방지 구문 (재클릭 방지)
  if(enableClick) {

    nextSlide();
    enableClick = false;
    // 함수 호출과 함께 false로 바꾸면서 모션 진행 시간을 보호해 준다 
    // 그 시간동안은 버튼은 무력화된 상태
  }
})

//prev 슬라이드 이동 코드 
prev.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    prevSlide();
    enableClick = false;
  }
})


function init() {
  ul.style.left = "-100%";
  ul.prepend(ul.lastElementChild);
  ul.style.width = `${100 * len}%`;
  lis.forEach((el) => { el.style.width = `${100 / len}%`; })
}
//next 슬라이드 함수 정의 
function nextSlide() {
  new Anim(ul, {
    prop: 'left',
    value: "-200%",
    duration: speed,
    callback: () => {

      ul.append(ul.firstElementChild);  //첫번째 li를 뒤쪽으로 보내는 코드 
      ul.style.left = "-100%"; // -200%에서 초기 위치 값으로 복귀 하도록 하는 코드 
      enableClick = true;
      //모션이 끝나고 다시 true바꾸면서 이벤트가 가능 하도록 한다 
    }
  })
}

function prevSlide() {
  new Anim(ul, {
    prop: 'left',
    value: "0%",
    duration: speed,
    callback: () => {
      ul.style.left = "-100%"; //0%에서 초기 위치 값으로 복귀 하는 코드 
      ul.prepend(ul.lastElementChild); //마지막 li를 맨앞으로 보내는 코드
      enableClick = true;
    }
  })
}