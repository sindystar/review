const slider = document.querySelector("#slider");
const slider2 = document.querySelector("#slider2");
let speed = 500;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let enableClick = true;
init(slider);
init(slider2);

next.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    nextSlide(slider);
    nextSlide(slider2);
    enableClick = false;
  }

})

prev.addEventListener("click", (e) => {
  e.preventDefault(); 
  if (enableClick) {
    prevSlide(slider);
    prevSlide(slider2);
    enableClick = false;
  }
})

/*
동일한 기능을 복수개 이상의 요소에 적용해야 할때 
자주 쓰는 기능 들은 함수로 미리 정의 하여 호출 하면 
전역 변수와 이벤트 구문을 훨씬 깔끔하게 정리 할수 있다 
*/

// 1.초기화 함수

function init(frame) {
  const ul = frame.querySelector("ul");
  const lis = ul.querySelectorAll("li");
  const len = lis.lengh;

  ul.style.marginLeft = "-100%";
  ul.prepend(ul.lastElementChild);
  ul.style.width = `${100 * len}%`;
  lis.forEach((el) => {
    el.style.width = `${100 / len}%`;
  })
}

// 2. prev slider 함수
function prevSlide(frame) {
  const ul = frame.querySelector("ul");
  new Anim(ul, {
    prop: "margin-left",
    value: "0%",
    duration: speed,
    callback: () => {
      ul.style.marginLeft = "-100%";
      ul.prepend(ul.lastElementChild);
      enableClick = true;
    }
  })
} 

// 3. next slider 함수
function nextSlide(frame) {
  const ul = frame.querySelector("ul");
  new Anim(ul, {
    prop: "margin-left",
    value: "-200%",
    duration: speed,
    callback: () => {
      ul.style.marginLeft = "-100%";
      ul.append(ul.firstElementChild);
      enableClick = true;
    }
  })
}