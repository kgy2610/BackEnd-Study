// getElementById("아이디")
// id는 유일
const title = document.getElementById("title");
console.log(title.textContent);  // "안녕하세요!"

// getElementsByTagName("태그이름")
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].textContent); // "오늘은 금요일입니다."
console.log(paragraphs[1].textContent); // "비가 많이 옵니다." 

// getElementsByClassName("클래스이름")
const msgs = document.getElementsByClassName("msg");
console.log(msgs[1].textContent); // "비가 많이 옵니다."
console.log(msgs[0].textContent); // "오늘은 금요일입니다."

// querySelector("CSS 선택자")
// css에서 쓰는 선택자처럼, 가장 위에 있는 선택자 하나만 가져온다
const msg = document.querySelector(".msg");
console.log(msg.textContent);  // "오늘은 금요일입니다."

// querySelectorAll("CSS 선택자")
// css 선택자 조건에 맞는 모든 요소를 다 가져옴
const allMsgs = document.querySelectorAll(".msg");
allMsgs.forEach(m => console.log(m.textContent));
// "오늘은 금요일입니다."
// "비가 많이 옵니다."