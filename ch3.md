# 챕터3

### 3.3 식별자 이름
- 변수, 상수, 함수 이름을 식별자라고 한다.
  - 식별자는 반드시 글자, 달러기호($), 밑줄(_)로 시작
  - 식별자는 글자, 숫자, $, _ 으로만 구성
  - 예약어 사용 X

- 카멜 케이스
  - currentTempC
  - anIdentifierName 

- 스네이크 케이스
  - current_temp_c
  - an_identifier_name

- 위 2개를 혼용하지말자
- 식별자는 대문자로 시작하면 안된다. (클래스 제외)
- 밑줄 한 개 또는 두 개로 시작하는 식별자는 아주 특별한 상황, 또는 "내부" 변수에서만 사용

### 3.4 리터럴
- 리터럴이라는 단어는 값을 프로그램 안에서 직접 지정한다는 의미.
- 리터럴은 값을 만드는 방법
```
let room1 = "conference_room_a";
```
- room1은 식별자이다
- "conference_room_a"는 문자열 리터럴이다

### 3.5 원사타입과 객체
- 자바스크립트의 값은 원시 값( primitive ) 혹은 객체(object)이다.
- 문자열과 숫자 같은 원시 타입은 불변(immutable)이다.
- 원시타입에는 6가지가 있다
  - 숫자
  - 문자열
  - 불리언
  - null
  - undefined
  - Symbol
- 불변성이라는 말이 변수의 값이 바뀔 수 없다는 뜻은 아니다.
```
let str = "hello";
str = "world";
```
- 변수 str은 불변값인 "hello"로 초기화 되었고
- 다시 "world"라는 불변값을 할당 받았다.
- "hello", "world"는 서로 다른 불변의 문자열이다.
- 단지, str 변수가 저장 하는 값이 바뀐 것이다.

- 객체는 여러 가지 형태와 값을 가질 수 있다.
- 자바 스크립트에는 몇 가지 내장 객체가 있다.
  - Array
  - Date
  - RegExp
  - Map, WeakMap
  - Set, WeakSet
  - Number
  - String
  - Boolean

### 3.6 숫자
- 자바스크립트는 부동소수점 숫자 형식을 사용
  - 0.1 + 0.2 = 0.3000000000000004 와 같이 반환한다
    - 이는 무한한 값을 유한한 메모리 안에서 가능한 한 정확히 짐작하려다가 생긴 결과일 뿐이다.
- 자바스크립트는 숫자형 데이터 타입이 딱 하나이다.
  - 다른 언어는 정수형, 더블형, 등등이 있다.

### 3.7 문자열
- 문자열 리터럴에는 작은따옴표, 큰따옴표, 백틱(`)이 있다.

### 3.7.1 이스케이프
```
const dialog = 'I said "Hello there", then he got surprised.";
const imperative = "Dont't do that!";
// 작은 따옴표에 감싸인 큰따옴표
// 큰 따옴표에 감싸인 작은 따옴표는 문제 없다

const errorDialog = "I said "Hello there"."
// 이렇게 큰 따옴표 안에 큰 따옴표를 써야만 한다면, errorDialog는 에러가 난다

const dialog1 = "I said \"Hello there\".";
// 이 처럼 역슬래시(\)를 사용해서 문자열 이스케이프를 하면 사용 가능하다
```
- 만약 문자열에서 역슬래시를 써야한 다면?
```
const s = "In Javascript, use \\ as an escape character in strings.";
```

### 3.8.1 템플릿 문자열
- 값을 문자열 안에 써야 하는 일이 아주 많다. 이때 문자열 병합(concatenation)을 통해 변수나 상수를 문자열 안에 쓸 수 있다.
```
let currentTemp = 19.5;
const message = "The current temperature is " + currentTemp + "c";
```
- ES6에서는 문자열 템플릿을 사용해서 위 코드를 더 간략하게 변경 할 수 있다 == Interpolation
```
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}c`;
```
- 이처럼 백틱(`)과 ${}를 사용하여 concatenation의 번거로움을 없앨 수 있다.

### 3.8.3 숫자와 문자열
- 숫자를 따옴표 안에 넣으면 그건 숫자가 아니라 문자열이다
- 자바스크립트는 숫자가 들어 있는 문자열을 자동으로 숫자로 바꾼다
```
const result1 = 3 + '30'; // 문자열 '330'
const result2 = 3 * '30'; // 숫자 90
```

### 3.11 null과 undefined
- null이 가질 수 있는 값은 null 하나
- undefined가 가질 수 있는 값은 undefined 하나
- 둘 다 존재하지 않음을 나타낸다.
- null은 허용된 데이터 타입인 반면, undefined는 자바스크립트 자체에서 사용한다고 생각하자
- 변수 값을 모르거나 아직 적용 할 수 없는 경우에는 null을 넣자
- 변수를 선언하기만 하고 명시적으로 값을 할당하지 않으면 그 변수는 undefined이다( 자바스크립트가 처리 )

### 3.12 객체
- 원시 타입은 단 하나의 값만 나타낼 수 있고 불변이지만, 객체는 여러가지 값을 나타낼 수 있으며 변할 수도 있다.
- 객체의 본질은 컨테이너이다.
- 객체의 내용이 변하더라도, 객체가 바뀌는것은 아니다. 여전히 같은 객체이다.
- 객체의 컨텐츠는 프로퍼티(property), 혹은 멤버(member)라고 부란다.
- 프로퍼티는 이름(키)와 값으로 구성된다.
- 프로퍼티 이름은 반드시 문자열 혹은 심볼이어야 한다.
- 값은 어떤 타임이든 상관 없고 다른 객체도 가능하다.
- 프로퍼티 이름에 유효한 식별자를 써야 멤버 접근 연산자(member access operator . )을 사용 가능하다.
- 프로퍼티 이름에 유효한 식별자가 아닌 이름을 쓴다면 계산된 멤버 접근 연산자(computed member access operator [])를 써야 한다.
```
const object = {};
object.color = "yellow";
object["aaaa"] = 3;
```

```
const test1 = {
  name: 'Sam',
  age:4,
}
const test2 = { name: 'Sam', age: 4};
```
- test1과 test2는 프로퍼티는 똑같지만, 둘은 서로 다른 객체이다.
- 원시 값의 경우 각 변수가 같은 값을 가지면, 둘은 서로 같다.

### 3.13 Number, String, Boolean 객체
```
const s = "hello";
s.toUpperCase(); // HELLO
```
- 이 예제의 s는 마치 객체처럼, 즉 함수 프로퍼티를 가진 것 처럼 보인다.
- s는 분명 원시 문자열 타입이다.
- 자바스크립트는 일시적인 String 객체를 만든다.
- 이 임시 String 객체에 toUpperCase 함수가 있다.
- 자바스크립트는 이 함수를 호출하는 즉시 임시 객체를 파괴한다.
```
const s = "hello";
s.rating = 3;
s.rating; //undefined
```
- 임시 객체이므로, s 문자열 타입에 rating프로퍼티로 3을 대입해도, 임시 객체는 파괴되므로, 해당 프로터피가 없으므로 undefined를 리턴한다

### 3.14 배열
- 자바스크립트 배열은 크기가 고정되지 않는다.
  - 즉, 언제든 요소를 추가하거나 제거 할 수 있다.
- 요소의 데이터 타입을 가리지 않는다.
  - 문자열만 넣을 수 있는 배열이라거나, 숫자만 넣을 수 있는 배열 같은게 아니라, 혼용 가능하다.
- 배열 요소는 0으로 인덱스가 시작한다.

### 3.15 Trailing comma, dangling comma
- 객체와 배열 요소를 여러 행에 나눠 쓸때 마지막에 쉼표가 있는 경우가 있다.
```
const arr = [
  1,
  2,
  3,
];
const obj = {
  one:1,
  two:2,
}
```
- 자바스크립트에서는 마지막 쉼표를 허용한다.
- 익스플로러는 에러가 나는 경우가 있다( 구 버전 익스플로러 )
- 선택사항이면서도 논란사항이다

### 3.19.1 숫자타입으로 바꾸기
- 문자열을 숫자로 바꿀 경우가 많다.
```
const numStr = "33.3";
const num = Number(numStr);
```
- Number객체 생성자를 사용하여 문자열을 숫자로 바꾼다.
- 숫자로 바꿀 수 없는 문자열의 경우 NaN이 반환

```
const a = parseInt("16", 10); // 10진수를 10진수로
const b = parseInt("3a", 16); // 16진수 3a를 10진수로 바꾼다
const c = parseInt("5 volts",10); // " volts"는 무시된다
```
- 이 처럼 내장 함수인 parseInt, parseFloat를 사용하여 문자열을 숫자로 변경 가능하다.

### 3.19.2 문자열으로 변환
- 자바스크립트의 모든 객체에는 문자열 표현을 반환하는 toString() 메서드가 있다.
```
const n = 33.5;
n.toString(); // "33.5"문자열

const arr = [1,true,"hello"];
arr.toString(); // "1,true,hello";
```
