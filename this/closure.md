# javascript

## Scope 정의
- 자바스크립트는 함수단위로 scope가 생성된다
- scope에는 가상의 테이블이 생기며, 그 테이블에는 그 함수에서 정의된 변수와 값이 정리되어있다.
```

function outer(){
    var a = 1;
    console.log(a);
}

outer(); // 1

// 여기에서 출력되는 a는 1을 가리키며, scope에 정리되어있다.
```

- 함수 단위로 스코프가 따로 있다
```

function outer(){
    var a = 1;
    function inner(){
        var a = 2;
        console.log(a);
    }
    inner();
}

outer(); // 2

// 여기에서 출력되는 a는 2를 가리키며, inner함수의 scope에 정리되어있다.
```

- 해당 스코프에 값이 없는 경우
```

function outer(){
    var a = 1;
    var b = 'B';
    function inner(){
        var a = 2;
        console.log(b);
    }
    inner();
}

outer(); // B

// inner scope에서 b값을 찾는다.
// 그러나 inner scope에는 a만 정리되어있고, 자바스크립트는 inner scope에 값이 없으면, 그 상위 scope인 outer scope를 찾아보며, 그곳에 b가 정리되어있으므로 찾아서 출력한다.
```

- 글로벌 스코프 와 스코프 체인

```
var d = 'X';
function outer(){
    var a = 1;
    var b = 'B';
    function inner(){
        var a = 2;
        console.log(d);
    }
    inner();
}

outer(); // B

// inner scope에서 b값을 찾는다.
// 그러나 inner scope에는 a만 정리되어있고, 자바스크립트는 inner scope에 값이 없으면, 그 상위 scope인 outer scope를 찾아본다.
// outer scope에 d가 없으므로 마지막으로 global scope에서 찾으며, 그곳에는 d가 정리되어있다.
// 이처럼 스코프를 찾아서 계속 올라가는 것을 스코프체인이라고 한다.
```

## 클로져
- 우선적으로 함수는 실행완료되면, 사라지고 그 안에있는 내부 변수들도 메모리에서 사라진다.
- 그러나 아래 예제처럼 스코프체인으로 연결된 경우를 클로져라고 한다.
- 이처럼 클로져로 인해, outer함수는 이미 실행 완료 되었음에도 불구하고, inner함수를 실행할 경우에 outer scope를 접근할 수 있다.

```
var d = 'X';
function outer(){
    var a = 1;
    var b = 'B';
    function inner(){
        var a = 2;
        console.log(b);
    }
    return inner;
}

var someFun = outer();
someFunc(); // B
```