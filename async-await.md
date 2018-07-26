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
foo(); 
// Promise {<resolved>: "foo"} 를 리턴.
// return "foo"에서 non-promise를 리턴하므로 resolved된 promise로 감싸서 리턴
```

혹은 직접 함수에서 Promise값을 리턴 가능하다.

```
async function bar() {
  return Promise.resolve("hello");
}

bar().then(alert); // hello
```

## Await
- await 키워드는 async함수 안에서 사용한다.
- await 키워드는 promise가 준비될때까지 기다린 후에 그 결과를 리턴한다.

```
async function foo() {
  let time = 2000;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`I've been waiting for ${time}`), time);
  });
  
  console.log("it's been come up first"); // 먼저 출력 된다.
  let result = await promise; // 프로미스가 resolve될 때까지 기다린다
  console.log("After await keyword, however, wait for it"); //await키워드 뒤의 코드들은 기다렸다가 resolve되면 이어진다.
  alert(result); // I've been waiting for 2000
  
}

function isInterrupted() {
   console.log("It's not interrupted");
}

foo();
isInterrupted(); 
```

- ```let result = await promise; // 프로미스가 resolve될 때까지 기다린다``` 여기에서 await 키워드로인해 promise가 resolve될 때까지 기다렸다가 값을 리턴한다.
- await으로 자바스크립트가 기다린다고 해서, 다른 코드가 실행되지 않는것이 아니다. 다른 스크립와, 이벤트 핸들링등은 계속 이뤄진다.
- 즉, foo()함수가 먼저 실행되고 await키워드로 값을 기다릴지라도, isInterrupted()함수는 계속 실행된다.
- await 키워드는 오직 async function안에서만 사용가능하다. 그렇지 않으면 Syntax error가 발생한다.


### github Profile Image를 가져오는 예제 based on async/await
```
async function showAvatar() {

  // read github user
  let gitResponse = await fetch('https://api.github.com/users/arclien');
  let gitUser = await gitResponse.json();

  // 깃유저의 프로필 이미지를 dom에 추가
  let image = document.createElement('img');
  image.src = gitUser.avatar_url;
  document.body.append(image);

  // 3초 후에 promise resolve
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  image.remove(); // await키워드 때문에 Promise가 resolve 되면 실행된다.

  return gitUser;
}

showAvatar();
```

## Error handling

async함수 안에서 try..catch를 사용하여 에러를 처리할 수 있다.

```
async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

만약 여러개의 promises를 기다려야 한다면, Promise.all을 사용하여 await을 할 수 있다.

```
// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
```



[참고 사이트](https://javascript.info/async-await#await)


