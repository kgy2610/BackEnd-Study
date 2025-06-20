/*
    DOM(Document Object Model) API
    
    *** DOM ***
    HTML 문서를 트리(나무) 구조로 만들어서 자바 스크립트가 그 문저를 이해하고 바꾸게 도와주는 모델

    예를들어,
    index.html
    <body>
        <h1>안녕하세요</h1>
        <p>오늘 날씨가 좋아요.</p>
    </body>

    -> DOM 트리
    body
    ├── h1
    │   └── "안녕하세요"
    └── p
        └── "오늘 날씨가 좋아요."

    큰 상자(body) 안에 제목(h1)과 문장(p)이 들어있는 구조
*/
/*
    *** DOM API ***
    DOM 트리를 자바스크립트 코드로 변환 또는 조작을 가능하게 해주는 도구
*/

// 1. 글자 바꾸기
document.querySelector('h1').textContent = '반가워요!';
// h1 제목을 ``안녕하세요`` 에서 ``반가워요!``로 바꿔줌
//        => <h1>반가워요!</h1>

// 2. 새로운 문장 추가하기
const newP = document.createElement('p');     // <p> 만들고
newP.textContent = '공부를 열심히 해봐요!';      // 글자 넣고
document.body.appendChild(newP);              // body 안에 추가

// 3. 특정 요소 없애기
const oldP = document.querySelector('p');
oldP.remove();

/*
    동적이다 : 사용자의 행동이나 상황에 따라 화면이 바뀌다
    DOM -> javaScript

    ex)
        채팅창에 글을 입력하면 -> 새로운 채팅이 화면에 올라온다
        검색창에 입력하면 -> 검색 결과가 리스트로 나온다
        버튼을 누르면 -> 그림이 바뀐다

    HTML : 레고 블록 설명서
    브라우저 : 레고를 조립한 완성품
    DOM : 레고 완성품의 구조를 보여주는 그림(트리)
    DOM API : 레고를 조립하고 다시 뜯고 고칠 수 있는 도구 상자
*/