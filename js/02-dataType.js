/*
    자료형(데이터타입)
    1234 -> 숫자형(number)
    'javaScript' -> 문자열(string)
*/
// 숫자형과 문자열의 차이
let num = 1234;
let str = 'javasrip';
console.log(num + 1); // 숫자 더하기 : 1235
console.log(str + 't'); // 문자열 연결 : javascript
// 숫자는 더하기, 문자열은 이어붙이기

/*
    자료형 확인하기
    console.log(typeof '변수');
*/
console.log(typeof num); // 'number'
console.log(typeof str); // 'string'
// 배열, 객체는 정확하게 구분 x -> object 출력

/*
    1. 원시 타입(primitive)
    - 간단한 값, 한 번 정하면 바뀌지 않음
    number | 숫자 | let age = 20;
    string | 문자열 | let name = '짱구';
    boolean | 참/거짓 | let isStudent = true;
    undefined | 값이 없음 | let x;
    null | 의도적으로 비워둠 | let y = null;
    symbol | 유일한 값 | let id = Symbol('id');
*/

/*
    2. 참조 타입(Reference)
    - 복잡한 데이터, 값이 저장된 위치
    object | 키: 값 구조 | let person = {name: '짱구'};
    array | 순서가 있는 값 목록 | let arr = [1, 2, 3];
    function | 실행 가능한 코드(함수) | function hello(){};
*/

// 문자열
let text = 'Hello World';

// index
// -> 0부터 시작
console.log(text[0]); // 'h'
console.log(text[6]); // 'w'

// 문자열 길이
console.log(text.length); // 11

// 문자열은 변경 불가능
text[0] = 'h'; // 안 바뀜
console.log(text); // 그대로 'hello'

// 문자열 메소드
// indexOf()
// -> 입력한 문자열이 처음 나오는 위치
let song = 'La la la la';
console.log(song.indexOf('la')); // 처음 나온 위치

// replace()
// -> 문자열 변경
let line = '하하하 웃겨 하하하';
console.log(line.replace('하하하', '호호호')); // 첫 번째만 바꿈
console.log(line.replace(/하하하/g, '호호호')); // 모두 바꿈

// slice()
// -> 인덱스 숫자에 맞춰 글씨 잘라냄(시작 인덱스 번호, 끝 인덱스 번호+1)
let word = '자바스크립트';
console.log(word.slice(2, 5)); // '스크립'

// split()
// -> 설정한 문자 기준으로 글자 잘라내기
let sentence = '나는,지금,자고싶다';
console.log(sentence.split(',')); // ['나는', '지금', '자고싶다']

// toUpperCase(), toLowerCase()
// -> 대소문자 변경
console.log('hello'.toUpperCase()); // 'HELLO'
console.log('WORLD'.toLowerCase()); // 'world'

// trim()
// -> 공백 제거
console.log('   hi!   '.trim()); // 'hi!'

// [ 템플릿 리터럴 ]
// 백틱(`) 사용
let name = '맹구';
let age = 20;
console.log(`안녕하세요, 제 이름은 ${name}이고 나이는 ${age}살입니다.`);

// ${} 안에 변수 또는 수식 입력 가능
let a = 5;
let b = 3;
console.log(`합계는 ${a + b}입니다.`);