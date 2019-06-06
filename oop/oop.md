# javascript OOP

```javascript
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const another = new Circle(1);
```

[Object-oriented Programming in JavaScript: Made Super Simple](https://www.youtube.com/watch?v=PFmuCDHHpwk&t=799s)
