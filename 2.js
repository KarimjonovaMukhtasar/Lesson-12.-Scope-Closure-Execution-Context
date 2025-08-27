/*
x va y koordinatalarni qabul qiluvchi Point nomli class yozing. 
Shuningdek ushbu class ikki nuqta orasidagi masofani hisoblovchi distance nomli static metodga ega bo'lsin.
    Input:
      let p1 = new Point(5, 5);
      let p2 = new Point(9, 8);
      console.log(Point.distance(p1, p2));

*/
//
class Point {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    static distance(p1,p2){
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2).toFixed(2)
    }
    }

let p1 = new Point(5, 5)
let p2 = new Point(9, 8)
console.log(Point.distance(p1, p2))
