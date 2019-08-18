# 챕터4

### 4.2.6 for ... in 루프
-객체 프로퍼티에 루프를 실행하도록 설계
```
const player = { name:"Sam", rank:"premier",age:5};

for( let prop in player) {
  if( !player.hasOwnProperty(prop)) continue;
  console.log(prop + " : " + player[prop]);
}
```
- 생각 보다 자주 쓰게되므로 hasOwnProperty 사용 방법을 공부해 놓기

### 4.2.7 for ... of 루프
- ES6에서 새로 생긴 반복문, 컬렉션 요소에 루프를 실행하는 방법이다.
- 배열은 물론 Iterable 객체에 모두 사용 가능하다
```
const hand = [ randFace(), randFace(), randFace()];
for( let face of hand )
  console.log(`you rolled... ${face}!`);
```
- for ... of는  루프를 실행하지만, 각 요소의 인덱스를 알 필요가 없을때 사용하면 좋다

### 4.3 유용한 제어문 페턴

- 4.3.1 Continue 문을 사용하여 조건 중첩 줄이기

```
while( funds > 1 && funds < 100 ){
  let totalBet = rand(1, funds);
  if(totalBet === 13){
    console.log("Unlucky!");
  } else {
    // 플레이
  }
}

// 위 예제에서 while loop의 body의 else statement 에서 대부분의 로직을 처리하고, if statement에서는 오직 console.log만 호출하는 것이다.
// 이럴 경우에는, continue statement를 사용하여 구조를 간결하게 만들 수 있다.

while( funds > 1 && funds < 100 ){
  let totalBet = rand(1, funds);
  if(totalBet === 13){
    console.log("Unlucky!");
    continue;
  } 

   // 플레이
}
```

- 4.3.2 break, return을 사용하여 불필요한 연산 줄이기
  - loop를 돌면서 가장 처음으로 조건에 맞는 경우를 찾는게 목적이라면, 바로 해당 로직을 만족하는 순간 break를 통해서 loop를 탈출한다.

- 4.3.4 배열을 수정할 때 감소하는 인덱스 사용하기
  - 배열에 루프를 실행하면서 루프 바디에서 배열을 수정하는 건 위험하다.
    - length값이 바뀌면서 index로 배열 요소를 참조하지 못해서 무한루프나 에러가 날 가능성이 크다.
    - 이럴 경우 루프를 실행 할 때, 증가하는 index가 아닌 감소하는 index를 통해서 해결하면 배열에 요소를 추가하거나 제거해도 종료 조건이 바뀌는 일은 없다.

  ```
  for( let i=0; i < bigArrayOfNumbers.length; i++){
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i,1);
  }

  for( let i=bigArrayOfNumbers.length-1; i >=0; i--){
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i,1);
  }

  ```