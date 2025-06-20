/*
    전개 구문(Spread syntax)
    - 배열이나 객체와 같은 데이터 구조를 확장할 때 사용하는 문법
    - 복사, 새로운 객체 또는 배열 생성 가능
    => 전개식
*/

// 배열 전개구문
// 배열 합치기
function CombineArray(){
    const fruit = ['사과', '배', '파인애플', '수박'];
    const fish = ['조기', '광어', '갈치'];
    const comb = [...fruit, ...fish];
    console.log(comb);
    // ['사과', '배', '파인애플', '수박', '조기', '광어', '갈치']
}

// 배열 복사
function CopyArray(){
    const fruit = ['사과', '배', '파인애플', '수박'];
    const fruit2 = [...fruit];
    fruit2.push('키위');
    console.log(fruit);
    console.log(fruit2);
    // ['사과', '배', '파인애플', '수박']
    // ['사과', '배', '파인애플', '수박', '키위']
}

// 객체 전개구문
function PlusObject(){
    const weniv1 = { 개리: 1, 빙키: 2 };
    const weniv2 = { 라이캣: 3};
    const weniv = {...weniv1, ...weniv2};
    console.log(weniv);
    // {개리: 1, 빙키: 2, 라이캣: 3}
}

/*
    디스트럭처링(Destructuring)
    - 배열, 객체와 같은 데이터 구조를 분해하여 변수에 할당하는 표현식
    - 변수에 속성이나 요소를 간편하게 할당가능
    => 구조 분해 할당
    >>> 배열 또는 객체를 분해하여 안에 있는 데이터를 변수에 순서대로 할당해주는 문법
*/
// 기본구조
function destr1(){
    const {food1, food2, food3} = {food1: '과일', food2: '채소', food3: '생선'};

    console.log(food1);
    console.log(food2);
    console.log(food3);
    // 과일
    // 채소
    // 생선
}

function destr2(){
    const obj = {food1: '과일', food2: '채소', food3: '생선'};

    // 디스트럭쳐링 함수를 만들어 코드를 간단화, 반복 작업 최소화
    function objReturn(){
        return obj;
    }

    // 반환 값을 바로 디스트럭쳐링
    const {food1, food2, food3} = objReturn();

    console.log(food1);
    console.log(food2);
    console.log(food3);
    // 과일
    // 채소
    // 생선
}

// 배열의 디스트럭쳐링
function destrArray(){
    const arr = [1, 2, 3];
    const [a, b, c] = arr;

    console.log(a);
    console.log(b);
    console.log(c);
    // 1
    // 2
    // 3
}






// 예제 함수 호출
destr2();