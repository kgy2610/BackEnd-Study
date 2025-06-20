/*
    DOM 제어
    웹페이지에서 자바 스크립트로 동작할 수 있게 만드는 기술
    ex)
        버튼을 클릭했을 때 글자가 바뀌게 만들기
        문장을 추가하거나 삭제하기
        글자 색, 크기, 스타일 바꾸기
        어떤 동작이 일어나면 클래스 이름 바꾸기
*/

// 이벤트 삽입
// 어떤 일이 생겼을 때 실행
// 어떤 일 => click, mouseover, keydown 등
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    alert("버튼을 클릭했습니다."); 
});

// 클래스 제어
// html 코드의 요소에 class를 부여
function highlight() {
    const t = document.getElementById("text");
    t.classList.add("highlight");  // 클래스 추가
}

// 요소 제어(추가, 삭제, 변경)
// 생성 및 추가
function addBox() {
    const box = document.createElement("div");
    box.textContent = "새로 생성된 박스";
    box.style.border = "1px solid black";
    box.style.margin = "10px";
    document.getElementById("container").appendChild(box);
}

// 삭제
function removeText() {
    const p = document.getElementById("delTarget");
    p.remove();
}

// 속성 제어하기
// style 객체로 바꾸기
function changeColor() {
    document.getElementById("styleMe").style.color = "red";
}

// setAttribute()
function changeImg() {
    document.getElementById("myImg").setAttribute("src", "./image/lightbulb_r.png");
}