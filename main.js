const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");

wrap.addEventListener("click", () => {
  // wrap.classList.toggle("on");

  let ison = wrap.classList.contains("on");
  //wrap에 클래스 on이 존재 하는지를 물어봄 => 불린값으로 반환해줌

  //if (ison) {
  //   wrap.classList.remove("on"); // 참인 경우 실행할 코드 
  //   // ison이 참이면, wrap에 on 클래스가 붙어 있다는 뜻이 므로 on클래스를 없애준다.
  // } else {
  //   wrap.classList.add("on"); //거짓인 경우 실행할 코드
  // }

  // 삼항 연산자 
  //조건식 ? 참일때 값 또는 연산식  : 거짓일때 값 또는 연산식;
  // (조건식) ? 참 : 거짓 ;

  (ison) ? wrap.classList.remove("on") : wrap.classList.add("on");
  
})