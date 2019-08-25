# 사용하면 좋은 JS 테크닉

## Double Negation Operator(!!)
- converts a non-boolean object to an inverted boolean, then boolean inverts
- 0, null, "", undefined, NaN을 false(boolean)으로 변환 한다. 그 외의 값은 true(boolean)으로 변환한다.
- 원 값이 falsy이면 false로 반환 , truthy이면 true로 반환한다
```
!null // true
!(!null) ==> !(true) ==> false

!0 // true
!(!0) ==> !(true) ==> false

!"" // true
!(!"") ==> !(true) ==> false

!undefined // true
!(!undefined) ==> !(true) ==> false

!1 // false
!(!1) ==> !(false) ==> true

!"asd" // false
!(!"asd") ==> !(false) ==> true

!{} // false
!(!{}) ==> !(false) ==> true

let obj = {key:1};
!obj // false
!obj.key // false
!!obj.key // true
!!obj.key > 0 // true
!!obj.key > 1 // false

if(obj && obj.key>0){
  return true;
}
```

```
user.tryAgain = !!remainTrial;
user.tryAgain = remainTrial != 0 ? true : false;
user.tryAgain = (remainTrial != 0);
```

```
if( user && user.remainTrial != 0){
  doSometing();
}

!!user.remainTrial && doSomething();
```

## || 를 사용하여 default value initialize
- or operator(||)는 만약 첫번째 판단 값이 falsy 이면 두번째 판단 값을 읽는다.
- 첫번째 값이 truthy이면 첫번째 값만 읽고 끝낸다.
```

async testFunction(){
  let userCount = await getUserCountFromServer() || 1;
  // || 1 을 통해서 디폴트 값을 초기화 안했다면, userCount는 undefined일 것이다.
  if(userCount > 0){
    // do something
  }
}

let willBeUndefined;
let test = willBeUndefined || 1;
!!test ? console.log(`test: ${test}`) : false; // test 1

let willBeUndefined2;
let test2 = willBeUndefined2;
!!test2 ? console.log(`test2: ${test}`) : false; // false
```


## NodeList를 배열로 변환하기 / HTML Collection을 배열로 변환하기
- querySelectAll로 반환된 NodeList / getElementsByClassName,getElementsByTagName 등으로 반환된 HTML Collection에 대해서 루프를 돌 필요가 있다. 이럴때 array로 변환해서 쉽게 처리 가능하다.
```
let elements = document.querySelectorAll("div"); // NodeList
var arrayElements = Array.from(elements); //  NodeList => Array


let classCollections = document.getElementsByClassName("content"); // HTML Collection
var arrayClasses = Array.from(classCollections); //   HTML Collection => Array

```
