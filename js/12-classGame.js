/*
    CLASS
    일종의 설계 도면 또는 템플릿
    => class를 통해 생산된 생산품 : 인스턴스
*/

// class 사용법
// 키워드, 이름, 중괄호
// 중괄호 안에는 생성자(constructor), 메서드(method)
// 클래스의 결과물 => 인스턴스 생성
function RobotExample() {
    class Robot {
        constructor(name) {
            // 생성자 함수라고 합니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
            // 생성자 함수는 new 키워드가 호출될 때 자동으로 실행됩니다.
            this.name = name;
        }

        sayYourName() {
            // 메소드 정의
            // 메소드는 클래스가 생성한 인스턴스를 통해 사용
            console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
        }
    }

    // 클래스를 통해 인스턴스를 생성
    const bot = new Robot('mura');
    bot.sayYourName(); // 삐리비리. 제 이름은 mura입니다. 주인님.
}

// 클래스 상속
// extends
// 상속 받는 클래스 => 파생 클래스(derived classes)
function ExtendsTest(){
    // animal이라는 기본 동물이 있고, dog는 animal에서 기능을 상속받음
    class Animal {
        constructor(name) {
            this.name = name;
        }

    sayHello() {
        console.log(`Hello, I'm ${this.name}.`);
    }
    }

    class Dog extends Animal {
        constructor(name, breed) {
            super(name);
            this.breed = breed;
        }

        bark() {
            console.log('Woof!');
        }
    }

    const dog = new Dog('Buddy', 'Labrador');
    dog.sayHello(); // Hello, I'm Buddy.
    dog.bark(); // Woof!
}

// 비공개(private) 프로퍼티
function privateTest(){
    class Robot {
        #password;

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }

    get password() {
        return this.#password;
    }

    set password(pw) {
        this.#password = pw;
    }
    }

    const bot = new Robot("토비", 1234);

    console.log(bot.name);       // 토비
    console.log(bot.password);   // 1234 (getter로 확인)
    bot.password = 5678;         // (setter로 수정)
    console.log(bot.password);   // 5678
}
// #password는 외부에서 직접 접근 x
// get과 set을 사용해서만 확인 또는 수정 가능
// getter(값을 꺼냄) / setter(값을 바꿈)