# 챕터2

### 용어 정리
- 깃
  - 프로젝트가 커져도 쉽게 관리 할 수 있고 다른 개발자와 협력할 수 있게 돕는 버전 컨트롤 도구
- 노드
  - 브라우저 밖에서 자바스크립트를 실행할 수 있게 하는 도구.
  - 노드와 함께 설치되는 npm은 이 리스트의 다른 도구를 설치할 때 필요하다.
- 걸프
  - 반복적인 개발 작업을 자동화하는 빌드 도구. 그런트도 많이 사용 됨.
- 바벨
  - ES6 코드를 ES5 코드로 변환 하는 트랜스컴파일러
- ES린트
  - 자주 하는 실수를 피하고, 정의한 문법 외 사항(오류)를 보여줌


### 2.1 ES6
- 아직 ES6를 모든 브라우저에서 사용 할 수 없다. 그래서 안전하게 ES5 코드로 트랜스컴파일을 해야한다

### 2.2.4 깃과 버전 컨트롤
- 깃을 사용하다보면 깃에서 추적하지 않았으면 하는 파일( 깃에 올리고 싶지 않은 파일 - 빌드 과정에서 생기는 파일, 임시 파일, 로그 등 )이 있다.
- .gitignore 파일을 만들어서 추적을 제외할 파일을 정할 수 있다.
- 깃 프로젝트의 루트에 .gitignore 파일을 만들어 다음과 같이 한다.
```
# npm debug history
npm-debug.log*

# 프로젝트 의존성
node_modules

# macOS 폴더 속성
.DS_Store

# 임시 파일
*.tmp
*~
```

### 2.2.5 npm Package 관리
- npm은 노드를 설치할 때 함께 설치된다.
```
$ node -v
v4.2.2
$ npm -v
2.14.7
```
- npm의 목적은 설치된 패키지 관리이다
  - 패키지는 완전한 애플리케이션일 수도 있고, 코드 샘플일 수도 있고, 프로젝트에서 사용할 모듈 또는 라이브러리일 수 있다.
-  npm으로 패키지를 설치할 때 전역(globally) 혹은 로컬(locally) 설치 가능하다.
  - 전역 설치 패키지는 보통 개발 과정에서 사용하는, 터미널에서 실행되는 도구
  - 로컬 패키지는 각 프로젝트에 종속되는 패키지다

```
$ npm install underscore
// 언더스코어 최신 버전 설치
$ npm install underscore@1.8.0
// 언더스코어 특정 버전(1.8.0) 버전 설치
```
- 위와 같이 터미널에서 명령을 입력하면 모듈은 해당 프로젝트( 터미널 위치 )의 루트에 새 서브디렉터리로 node_modules를 생성하고 이 디렉터리에 설치 한다
- 다양한 모듈을 설치하다 보면 모듈간의 의존성을 관리해야한다.
  - package.json 파일을 통해서 의존성을 관리한다
  - 의존성은 일반 의존성과 개발 의존성으로 나뉜다.
  - 개발 의존성은 앱을 실행할 때는 필요 없지만, 프로젝트를 개발할 때 필요하거나 도움이 되는 패키지를 의미
  - 로컬 패키지를 설치할 때는 --save or --save-dev 플래그를 사용
  -이 플래그를 쓰지 않아도 설치 되지만, package.json파일에는 등록 안된다

- TODO
  - npm에 대해 조금 더 공부
    - 버전 컨트롤
    - 의존성 관리
    - package.json 이해

### 2.2.6 빌드 도구: 걸프/그런트
- 개발과정에서 반복 작업을 자동화 하는 빌드 도구

- TODO
  - 웹팩에 대한 공부도 하자
  - [웹팩이란?](https://eggplantwo.github.io/2017/04/21/%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80/)

### 2.3 트랜스컴파일러
```
$ npm install --save-dev babel-preset-es2015
```

- 다음과 같이 .babelrc 파일을 프로젝트 루트에 생성한다
```
{ "presets": ["es2015"]}
```

### 2.3.1 바벨을 걸프와 함께 사용하기
- 걸프를 통해 할 일
  - ES6코드를 ES5코드로 변환
  - es6, public/es6 코드를 ES5코드로 변환해서 dist, public/dist에 저장

```
$ npm install -save-dev gulp-babel
```