# 알고리즘 풀면서 공용으로 사용하면 좋은 함수형 프로그래밍 모음

## 문자열(string)
### 문자열 => 배열 변환 => 문자열
```
const string = "Hello World";
const array = string.split(''); // ['H','e','l','l','o',' ','w','o','r','l','d']
const newString = array.join(','); // H,e,l,l,o, ,w,o,r,l,d
const set = new Set(array); // Set(8) {"H", "e", "l", "o", " ", "w", "r", "l", "d"}
```

### 문자열 캐릭터 개수 카운팅
```
function counter(str) {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};
counter("hackerrank");  // {h: 1, a: 2, c: 1, k: 2, e: 1, r: 1, n: 1}
```

### replace all
```
let string = "test here there ";
console.log(string.replace(/here/, "HERE")); // "test HERE there"
console.log(string.replace(/here/g, "HERE")); // "test HERE tHERE"
```

### substr, substring
```
TODO
```

### uppercase check
```
function isUpperCaseAt(str, index) {
  return str.charAt(index).toUpperCase() === str.charAt(index);
}
isUpperCaseAt("aBc",0); // false;
isUpperCaseAt("aBc",1); // true;
```


## 배열(array)
### 숫자 배열 요소의 합 구하기) // Reduce() method
```
function getSumOfArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
getSumOfArray([1,2,3,4,5,6,7,8,9,10]); // 55
```

### 배열 요소 개수 카운팅
```
function counter(arr) {
    return arr.reduce((total, el) => {
        total[el] ? total[el]++ : total[el] = 1;
        return total;
    }, {});
};
counter([1,1,1,2,3,4,4,4,4,5]); // {1: 3, 2: 1, 3: 1, 4: 4, 5: 1}
```
 
### 배열 필터링 //  Filter() 
- 조건에 맞는 새로운 배열을 만들어 리턴
```
[1,2,3,4,5,6,7,8,9,10].filter((el)=> el > 5 ); // [6, 7, 8, 9, 10]
[ { key : 1, val : 5 }, { key : 5, val : 111 }, { key : 100, val : 544 }].filter( (el) => el.key > 50) // [{ key : 100, val : 544 }]
```

### Map() method
- elements를 조건에 맞게 변경 후 새로운 배열로 리턴
```
[1,2,3,4,5].map( (el) => el *2 ); // [2,4,6,8,10];
```

### 배열 정렬(sorting)
```
[1,1,1,2,3,4,4,4,4,5].sort( (a,b) => a-b ); //  [1, 1, 1, 2, 3, 4, 4, 4, 4, 5]
[1,1,1,2,3,4,4,4,4,5].sort( (a,b) => b-a ); //  [5, 4, 4, 4, 4, 3, 2, 1, 1, 1]
[1, 11, 111,101, 2, 20, 11234].sort( (a,b) => b-a ); //  [11234, 111, 101, 20, 11, 2, 1]
['1','11','111','101','2','20','11234'].sort( (a,b) => Number(b) - Number(a) ); //  [11234, 111, 101, 20, 11, 2, 1]
[ { key : 113, val : 5 }, { key : 5, val : 111 }, { key : 100, val : 544 } ].sort( (a,b) => b.key - a.key ); //  [ { key : 113, val : 5 }, { key : 100, val : 544 }, { key : 5, val : 111 } ]
[ { key : "abc" }, { key : "d1bc" }, { key : "e1s" } ].sort( (a,b) => b.key - a.key ); //  [ { key : 113, val : 5 }, { key : 100, val : 544 }, { key : 5, val : 111 } ]
```

## 루프(Loop)
### 객체 프로퍼티 루프  for ... in
```
const obj =  {h: 1, a: 2, c: 1, k: 2, e: 1, r: 1, n: 1};
for(let c in obj){
  console.log(c, obj[c]); // h, 1 ... n, 1
}
```

### forEach



## ES5, ES6

### Includes() method
- collection에서 찾고자하는 문자열이 있는지 check
```
const food =["beer", "wine", "pizza"];
const findFood = food.includes["beer"];
console.log(findFood); // true
```

### Some() method
- 배열에서 찾고자하는게 있는지 check / Includes와 다르게 parameter는 함수
```
const score = [11,51,25,100];
score.some((val) => val >= 50); // true
```

### Every() method
- 배열에서 모든 조건에 맞는지 check / Includes와 다르게 parameter는 함수
```
const score = [11,51,25,100];
score.every((val) => val >= 50); // false
```