
var randomName = faker.name.firstName();
var faker = require('faker');
var arr = []

var joseph = function(){
  arr.push(document.getElementById("title").innerHTML)
  console.log(arr)
}
document.getElementById("title").innerHTML = randomName
joseph()
