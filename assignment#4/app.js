function changeClass(className) {
  // class name get karny ka function
  var div = document.getElementById("div"); // div ko get Kar rahy hain id se
  div.className = className; // div ki class ko change kar rahy hain function k parameter className k sath
  console.log("className", className);
}

// function add(a, b) {
//   var c = a + b;
//   return c;
// }

// var d = add(2,3) //5
// add(5,3) //8
// add(2,4) //6
// 

var price = 0;

function setPrice(p,d){
    price = p - d
}

setPrice(100,20)
console.log(price) //80

setPrice(500,100)
console.log(price) // 400

setPrice(1000,500)
console.log(price) //500