# javascript

## This의 정의
대부분의 경우, this 의 값은 함수를 호출하는 방법에 의해 결정된다. 실행하는 동안의 할당에 의해 설정될수 없고, 함수가 호출될 때 마다 다를 수 있다. ES5 는 함수의 this 값이 함수가 어떻게 호출되었는지 개의치 않고 설정할 수 있는 bind메소드를 소개했다.
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

