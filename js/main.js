// var arr=["a", "b", "c", "d", "c", 1, 2, [2,"v"], {id:2,name:"parth",dob:"1994"}, null, undefined, "", false];
// var output=[] ;
// var arr3 = [ 1, 2, 10, 4 ];
// var arr4 = [ 5, 6, 7 ];
// var arr5 = [ "p", "q", "r"];
// console.log(arr,"arr");
// arr.forEach(function(element){
//     console.log(element);
//     output.push(element)
// })
// // console.log(output,"output");
// var sort=arr.map(function(element){
//    return element;
// })
// console.log(sort);
// var result = arr3.filter(num => num > 2 );
// console.log(result);
// var filter_str=arr.filter(function(element){
//     return typeof element == "string";
// } );
// console.log(filter_str);
// var obj1={
// }
// obj1.a = "aa";
// obj1.print=function(){console.log(obj1.a)};
// var collection=[{id:1},{id:2},{id:3}];
// console.log(collection,"collection");
// collection.forEach(function(element){
//     console.log(element);
// })
// var collection_map=collection.map(function(element){
//     return element.id;
//  })
//  console.log(collection_map,"id");
//  console.log(arr3.concat(arr4),"concatenated");
// console.log(arr4);
// var found = arr3.find(function(element) {
//   return element > 2;
// });
// console.log(found,"found");
// console.log(arr3.fill(3, 2, 4),"fill");
// console.log(arr3.join(" , "));
// console.log(arr3.includes(10));
// console.log(arr3.pop());
// console.log(arr4.reverse());
// var arr6 = [5, 30, 4, 21];
// var sort_asc= arr6.sort(function(a,b){
//     return a - b
// });
// console.log(sort_asc,"sort_asc");
// console.log(sort_asc.reverse(),"descending sorted array");
// var arr = [ 'a', 'b', 'z', '@' ];
// var iterator = arr.values();
// console.log(iterator.next().value);
// arr.forEach(function(iterator){
//     console.log(iterator,"iterator");
// });

//String Functions
var x = new String("Yo this is javascript");
var str1 = ' The morning the is upon us. ';
var str2 = 'Rise up';
var str3 = str1.slice(6,15);
console.log(str1, "str1");
console.log(str1.concat(" ", str2));
console.log(str3, "slice");
console.log(str1.substr(6,15), "substr");
console.log(str1.substring(6,15), "substring");
console.log(str1.length);
console.log(str1.includes('the'), "includes");
var res = str1.replace('morning', 'sun');
console.log(res,"replace");
console.log(str1.indexOf('is'), "indexOf");
console.log(str1.lastIndexOf('is'), "lastIndexOf");
console.log(x.valueOf(), "Value of");
console.log(str1.trim(), "'trim'");
console.log("trimmed in start:",str1.trimStart(), "'trimStart'");
console.log("trimEnd",str1.trimEnd(), "':trimmed in end'");
console.log(str1.split(' '));
'my name is parth'.substring(1,6);
var output= 'my name is parth'.substring(1,6);
console.log(output,"output")
// ['my' , 'name' , 'is' , 'parth']
let index = 0;
const array = [1,2,3,4,5,6];
console.log("while loop");
while (index < array.length) {
  console.log(array[index]);
  index++;
}
console.log("for loop")
for(var i=0; i<array.length; i++){
  console.log(array[i]);
}
console.log("forEach loop")
array.forEach(function(element){
  console.log(element)
});
console.log("map")
var arr_map=array.map(function(x){
  return Math.pow(x, 2)
})
console.log(arr_map);
console.log("reduce");
const array_sum = array.reduce(function(x, y){
  return x + y;
},0);
console.log(array_sum, "array_sum")
console.log("filter");
var even_arr = array.filter(function(x){
  return x % 2 == 0
});
console.log(even_arr,"even_arr");
console.log("every");
var check = array.every(function(number){
  return number > 1
});
console.log(check);
console.log("some");
var check_some = array.some(function(number){
  return number > 5
});
console.log(check_some);
