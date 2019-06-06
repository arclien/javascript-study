# javascript

## This 의 정의

대부분의 경우, this 의 값은 함수를 호출하는 방법에 의해 결정된다. 실행하는 동안의 할당에 의해 설정될수 없고, 함수가 호출될 때 마다 다를 수 있다. ES5 는 함수의 this 값이 함수가 어떻게 호출되었는지 개의치 않고 설정할 수 있는 bind 메소드를 소개했다.

```
var someone = {
    name : 'aaa',
    whoAmI : function(){
        console.log(this);
    }
}
someone.whoAmI(); // {name: "aaa", whoAmI: ƒ}
// whoAmI 메소드를 부른 대상은 someone객체이고, 여기에서의 this는 마찬가지로 someone객체이다.


var myWhoAmI = someone.whoAmI; // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
myWhoAmI();
// someone객체에 있는 whoAmI 메서드를 부른 대상은 myWhoAmI라는 전역객체이고, 이 때의 this는 브라우저이자 Window이다.


var btn = document.getElementById('btn');
btn.addEventListener('click', someone.whoAmI);
// 버튼을 클릭하면  <button id="btn">...</button>이 console에 나옴
// addEventListener에 someone.whoAmI함수를 넘겼을 뿐, 실제로 저 함수를 호출한 객체는 btn 엘레멘트이다.


var bindedWhoAMI = myWhoAmI.bind(someone);

var btn = document.getElementById('btn');
btn.addEventListener('click', bindedWhoAMI);
// 버튼을 클릭하면 {name: "aaa", whoAmI: ƒ} 이 console에 나옴
```

### this 예제. arrow function 과 this

- es6 에서는 this 를 window 오브젝트로 부르면 strict 모드가 적용되어서 에러가난다
- es5 에서는( 일반브라우저 콘솔 ) strict 모드가 아니라서 this 가 window 오브젝트를 가르켜도 상관없다.

```javascript
var test = function() {
  console.log("call as function", this);
};
// es5에서는 잘 나옴
// es6에서는 에러
//test();// error
```

- 이 처럼, 오브젝트의 메서드를 부르는 경우에 해당 메서드를 부르는 녀석을 this 로 참조한다

```javascript
objectA = {
  asd: function() {
    console.log("call from obj", this);
  },
  ccc: () => {
    console.log("call from obj, but arrow function", this);
  }
};
objectA.asd(); // call from obj {asd: ƒ, ccc: ƒ}
objectA.ccc(); // window obj => in es5, error in es6
```

### bind method

- test 전역 함수를 불러서 this 를 다른 녀석으로 참조시키는 방법은, 다음과 같이 bind 를 통해서 가능하다.

```javascript
test = test.bind(objecta);
test();
```

### Arrow function 과 this 관계

- 정의 : 화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고 자신의 this, arguments, super 또는 new.target 을 바인딩 하지 않습니다. 화살표 함수는 항상 익명입니다. 이 함수 표현은 메소드 함수가 아닌 곳에 가장 적당합니다. 그래서 생성자로서 사용할 수 없습니다.

* Arrow 함수에는 this 바인딩이 없습니다. 즉, Arrow 함수 안에있는 this 의 값은 Scope 체인을 찾는 것으로만 결정될 수 있습니다. Arrow 함수가 nonarrow 함수 내에 포함되어 있다면, this 는 포함 함수와 같습니다. 그렇지 않으면 this 는 전역 Scope 에서 this 의 값과 같습니다

```javascript
let person = {
  name: "asdasd",
  aaa: function() {
    let ccc = () => {
      console.log(`Hi i am ${this.name}`); // Hi i am asdasd
    };
    return ccc();
  },
  sayName: () => {
    console.log(`Hi i am ${this.name}`); // Hi i am undefined
  },

  sayName2: function() {
    console.log(`Hi i am ${this.name}`); // Hi i am asdasd
  }
};

person.aaa(); // Hi i am asdasd
person.sayName(); // Hi i am undefined
person.sayName2(); // Hi i am asdasd
```
