# Async/await

## Async-functions
```
async function foo() {
  return "foo";
}

foo().then(alert); // alert("foo")를 실행.
foo().then(console.log); // console.log("foo")를 실행.
```

async 키워드를 함수 앞에 붙이면
- 함수는 항상 promise를 리턴한다.
- 만약 위 예제처럼 "return <non-promise>", 이렇게 리턴 값이 non-promise이면 자바스크립트는 자동으로 resolved된 promise로 감싸서 리턴을 한다.
```
foo(); // Promise {<resolved>: "foo"} 를 리턴.
// return "foo"에서 non-promise를 리턴하므로 resolved된 promise로 감싸서 리턴.ㅇ
```

혹은 직접 함수에서 Promise값을 리턴 가능하다.
```
async function bar() {
  return Promise.resolve("hello");
}

bar().then(alert); // hello
```

