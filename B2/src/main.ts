// let width: number;
// let height:number;
// width=10.5;
// height=20;
// let area:number =width*height;
// console.log(`Diện tích hình chữ nhật : ${area}`);
import {Rectangle} from "./rectangle";

const rectangle = new Rectangle(5,5,10,20);
console.log(rectangle.toString());
console.log(rectangle.area());

