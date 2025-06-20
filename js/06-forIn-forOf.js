/*
    for in
    - 객체의 속성(키)을 순회하는데 사용
    - 각 반복 단계에서 객체의 키가 변수에 할당
*/
function Forin(){
    const person = {
    name: 'licat',
    age: 10,
    city: 'Jeju'
    };

    for (let key in person) {
    console.log(key + ': ' + person[key]);
    }
    //name: licat
    // age: 10
    // city: Jeju
}

// 예제 함수 호출
Forin()