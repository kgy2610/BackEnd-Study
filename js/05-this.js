/*
    this
    - 함수 호출 방식에 따라 다르게 동작
    => 함수가 호출되는 방식에 따라 달라지는 특수한 키워드
*/

// 전역 범위 호출
// 브라우저에서는 window 객체가 전역 객체
console.log(this);
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// 함수 범위 호출
function range(){
    console.log(this);
    // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}

// 화살표 함수 호출
function ArrowFunc(){
    const obj = {
        f : function() {
            const ff = () => {
                console.log(this);
            };
            ff(); // {f: ƒ}

            const fff = function(){
                console.log(this);
            };
            fff(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        },
    };
    obj.f();
}

// 매서드 호출
function MethodThis(){
    const obj = {
        name: 'licat',
        f: function () {
            console.log(this);
        },
    };
    obj.f(); // {name: 'licat', f: ƒ}
}

// 생성자 함수 호출
function Creator(){
    function Person(name) {
        this.name = name;
        console.log(this);
    }
        
    const person1 = new Person('licat'); // Person { name: "licat" }
    const person2 = new Person('mura'); // Person { name: "mura" }
    const value = Person('test'); // Window 객체를 출력하고 undefined를 반환
}

function event(){
    const button = document.getElementById('btn');
    button.addEventListener('click',
                            function(){
                                console.log(this);
                            });
    // <button id="btn">Hello World!</button>
}

// 예제 함수 호출
MethodThis();