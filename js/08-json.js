/*
    JSON
    데이터를 저장하고 전송하는 데 사용되는 가벼운 텍스트 기반의 데이터 교환 형식
    다른 방식에 비해 가볍고 읽기 쉬워 널리 사용
*/
// json의 기본 형태
/* 
    {
        "squadName": "슈퍼히어로",
        "members": [
            {
                "name": "아이언맨",
                "age": 29,
                "realName": "토니 스타크"
            },
            {
                "name": "헐크",
                "age": 39,
                "realName": "브루스 배너"
            }
        ]
    }
*/

// json 데이터 순회
function JsonTest(){
    const data = {
        "name": "licat",
        "age": 25,
        "hobby": ["낚시", "독서", "등산", "요리"],
        "relationship": {
            "friend": ["뮤라", "빙키", "개리"],
            "enemy": ["라이언"]
            }
        }

    console.log(data["hobby"][0]); // 낚시
}

/*
    JSON 메서드
    JSON은 자바스크립트 객체와 JSON 문자열을 변환하는 메서드 제공

    JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환하는 코드
*/
function JsonTransTest1(){
    const json = '{"result":true, "count":42}';
    // 문자열인 json 데이터
    // console.log(json[0]);
    // console.log(json[1]);
    const obj = JSON.parse(json);
    console.log(obj); // {result: true, count: 42} : 문자열에서 객체로 변환
}
function JsonTransTest2(){
    const json = '[1, 2, 3]';
    // 문자열인 json 데이터
    // console.log(json[0]);
    // console.log(json[1]);
    const obj = JSON.parse(json); 
    console.log(obj); // (3) [1, 2, 3] : 문자열에서 배열(객체)로 변환
}
function JsonTransTest3(){
    const json = '[1, 2, [1, 2, 3]]';
    const obj = JSON.parse(json); 
    console.log(obj); // (3) [1, 2, Array(3)]
}
function JsonTransTest4(){
    const obj = { result: true, count: 42 };
    const json = JSON.stringify(obj);
    // JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.
    console.log(json[0]); // '{' : 객체에서 문자열로 변환
    console.log(json[1]); // "
}
function JsonTransTest5(){
    const arr = [1, 2, 3];
    const json = JSON.stringify(arr);
    console.log(json); // [1,2,3] : 배열(객체)에서 문자열로 변환
}
/*
    Map에서는 JSON.stringify()를 사용할 수 없다.
    변경이 필요하다면 다른 자료형으로 변환 후 JSON.stringify() 사용
    *** 다른 자료형으로 변경 과정에서 숫자로 된 key가 문자열로 변경 되는 등의 문제 발생 가능 ***
*/
function JsonTransTest6(){
    let map = new Map([['key1', 'value1'], ['key2', 'value2']]);
    let json = JSON.stringify(Array.from(map.entries()));
    console.log(json); // [["key1","value1"],["key2","value2"]]
}
// 예제 함수 호출
JsonTransTest6();