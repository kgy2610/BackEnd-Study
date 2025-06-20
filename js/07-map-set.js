/*
    Map
    Map 객체는 키-값 쌍을 저장할 수 있는 구조
    각 키와 값의 쌍을 유지하며, 객체보다 유연하고 강력한 기능 제공
*/
function MapTest(){
    let m = new Map();
    console.log(m); // Map(0) {size: 0}
}

// set
// Map에 값을 추가할 때 사용하는 메서드
// 객체 : 문자열만 키로 사용 가능
// Map: 어떤 타입이든 키로 사용 가능
function MSetTest(){
    let m = new Map();

    m.set('하나', '1');
    m.set(1, '하나');
    m.set(true, 1);
    m.set(false, 0);

    console.log(m); // Map(4) {'하나' => '1', 1 => '하나', true => 1, false => 0}
}


// get :map에서 값을 가져올 때 사용하는 메서드
function MGetTest(){
    let m = new Map();
    m.set('하나', '1');
    m.set(true, 1);

    console.log(m.get('하나')); // '1'
    console.log(m.get(true)); // 1
}

// has : map에 특정 키가 있는지 확인할 때 사용하는 메서드
function MHasTest(){
    let m = new Map();

    m.set('하나', '1');

    console.log(m.has('하나')); // true
    console.log(m.has(2)); // false
}


// delete : map에서 값을 제거할 때 사용하는 메서드
function MDeleteTest(){
    let m = new Map();
    m.set('하나', '1');

    console.log(m.delete('하나')); // true
    console.log(m.has('하나')); // false
}


// size : map에서 크기를 확인할 때 쓰는 메서드
function MSizeTest(){
    let m = new Map();
    m.set('하나', '1');
    m.set(1, '하나');

    console.log(m.size); // 2
}


// clear : map의 모든 데이터를 삭제할 때 쓰는 메서드
function MClearTest(){
    let m = new Map();
    m.set('하나', '1');
    m.set(1, '하나');

    m.clear();
    console.log(m.size); // 0
}


// for...of : map을 순회하는 반복문

function ForOfTest(){
    const data = new Map().set('name', 'licat').set('age', 10).set('height', 180);

    for (const value of data) {
    console.log(value[0]); 
    console.log(value[1]); 
    }

    for (const [key, value] of data) {
    console.log(key);
    console.log(value);
    // name
    // licat
    // age
    // 10
    // height
    // 180
    // name
    // licat
    // age
    // 10
    // height
    // 180
    }
}

// keys, values : map의 키와 값에 각각 접근할 때 사용하는 메서드들
function KeyValueTest(){
    const data = new Map().set('name', 'hojun').set('age', 10).set('height', 180);

    console.log([...data.keys()]); // ["name", "age", "height"]
    console.log([...data.values()]); // ["hojun", 10, 180]
}

// 배열-map 변환 : 배열 -> map
//                map -> 배열 변환 가능
function MTransTest(){
    // 배열을 Map으로 변환
    let temp = new Map([
    [1, 10],
    [2, 20],
    [3, 30],
    [4, 40],
    ]);
    console.log(temp); // Map(4) {1 => 10, 2 => 20, 3 => 30, 4 => 40}

    // 객체를 Map으로 변환
    let temp2 = new Map(Object.entries({ one: 1, two: 2 }));
    console.log(temp2); // Map(2) {'one' => 1, 'two' => 2}

    // Map을 객체로 변환
    const temp3 = Object.fromEntries(temp2);
    console.log(temp3); // {one: 1, two: 2}
}

/*
    Map과 Object의 차이
    모두 키-값 쌍을 저장하지만
            |       key 값        |     크기계산
    Object  |  문자열과 심볼타입    |       수동
    Map     |       모든 값        |  size속성 사용
*/
function MOTest(){
    // key값
    let objMap = new Map();
    objMap.set('one', 1);
    objMap.set(2, 'two');
    objMap.set(true, 3);

    console.log(objMap); // Map(3) {"one" => 1, 2 => "two", true => 3}

    // 크기계산
    let obj = { hi: 1, hi2: 2, hi3: 3, hi4: 4 };
    console.log(Object.keys(obj).length); // 4

    console.log(objMap.size); // 3
}

// =========================================================================

/*
    SET
    중복되지 않는 값들의 집합을 저장할 수 있는 구조
    각 값을 유일하게 유지, 중복된 값 허용X
*/
function SetTest(){
    let s = new Set();
    console.log(s); // Set(0) {size: 0}
}

// add : Set에 값을 추가할 때 사용하는 메서드
function AddTest(){
    let s = new Set();

    s.add('apple');
    s.add('banana');
    s.add('orange');

    console.log(s); // Set(3) {'apple', 'banana', 'orange'}
}

// 중복 허용 확인하기
function OverlapTest(){
    let s = new Set();
    s.add(1);
    s.add(1);
    s.add(2);
    s.add(2);
    s.add(3);

    console.log(s); // Set(3) {1, 2, 3} : 중복된 숫자 제거 후 출력

    let ss = new Set('abcdeeeeeeeee');
    console.log(ss); // Set(5) {'a', 'b', 'c', 'd', 'e'} : 중복된 문자열 제거 후 출력
    console.log(ss.size); // 5
}

// has : set에 특정 값이 있는지 확인하는 메서드
function SHasTest(){
    let s = new Set(['apple', 'banana', 'orange']);

    console.log(s.has('apple')); // true
    console.log(s.has('grape')); // false
}

// delete : set에서 특정 값을 제거할 때 사용하는 메서드
function SDeleteTest(){
    let s = new Set(['apple', 'banana', 'orange']);

    console.log(s.delete('banana')); // true
    console.log(s.has('banana')); // false
}

// size : set의 크기를 확인할 때 사용하는 메서드
function SSizeTest(){
    let s = new Set(['apple', 'banana', 'orange']);

    console.log(s.size); // 3
}

// clear : set의 모든 데이터를 삭제할 때 사용하는 메서드
function SClearTest(){
    let s = new Set(['apple', 'banana', 'orange']);

    s.clear();
    console.log(s.size); // 0
}

// for...of : set을 순회할 때 사용하는 반복문
function SForOfTest(){
    let s = new Set(['apple', 'banana', 'orange']);

    for (let value of s) {
        console.log(value);
        // apple
        // banana
        // orange
    }
}

// 배열-set 변환 : 배열 -> set
//                set -> 배열 변환 가능
function STransTest(){
    // 배열을 Set으로 변환
    let arr = ['apple', 'banana', 'orange', 'banana'];
    let s = new Set(arr);
    console.log(s); // Set(3) {"apple", "banana", "orange"}

    // Set을 배열로 변환
    let newArr = [...s];
    console.log(newArr); // ["apple", "banana", "orange"]
}

// set을 이용한 중복 제거
function SRemoveTest(){
    let arr = ['apple', 'banana', 'orange', 'banana'];
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr); // ["apple", "banana", "orange"]
}

// set의 교집합, 합집합, 차집합
function SSetsTest(){
    let setA = new Set(['apple', 'banana', 'orange']);
    let setB = new Set(['banana', 'kiwi', 'orange']);

    // 교집합
    let intersection = new Set([...setA].filter(x => setB.has(x)));
    console.log(intersection); // Set(2) {'banana', 'orange'}

    // 합집합
    let union = new Set([...setA, ...setB]);
    console.log(union); // Set(4) {'apple', 'banana', 'orange', 'kiwi'}

    // 차집합
    let difference = new Set([...setA].filter(x => !setB.has(x)));
    console.log(difference); // Set(1) {'apple'}
}


// 예제 함수 호출
SSetsTest();