// var request = require('superagent');
//
// request
//   .get('http://www.behindthename.com/api/random.php')
//   .end(function(err, res){
//     console.log(res)
//   });
//
// console.log("HELP!")
var faker = require('faker');
var arr = []

var randomName = faker.name.firstName();

document.getElementById("title").innerHTML = randomName
// console.log(faker.name.firstName())
var joseph = function(){
  arr.push(document.getElementById("title").innerHTML)
  console.log(arr)
}
joseph()
