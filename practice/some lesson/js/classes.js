'use strict';

// создаём экземпляры треугольника
class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }
   // создаем методы:
   calcArea() {
      return this.height * this.width;
   }
}

class ColoredRectangleWithText extends Rectangle {
   constructor(height, width, text, bgColor) {
      super(height, width); //* должна быть на первом месте в наследуемом классе
      this.text = text;
      this.bgColor = bgColor;
   }

   showMyProps() {
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());