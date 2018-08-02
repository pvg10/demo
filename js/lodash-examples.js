// // compact
// // concat
// // difference
// // flatten
// // .without
// // intersection
// // _.join
// // remove
// // .uniq
// // .uniqBy

// // All collection methods

// // bind
// // debounce
// // once
// // partial

// // All Lang methods
// // All Object methods


// // 1) Some lodash array methods :
// var arr1 = [ 0, '', 1, 'a', null, 'r', false, 2, NaN];
// var arr3 = [ 1, 2, 4, 'p', 'q', 'r' ];
// var arr4 = [ 1, 2, 3, 4, [[5],6,7], 8, 9 ];
// var arr5 = [ 1, 2, 3, 4, 5, 6, 7];
// var arr6 = [ 1, 2, 3, 4, 5, 2, 6];
// var arr_obj1 = [ { 'a' :'xy' , b:0},{ 'a': 'pq', 'b':1 },{ 'a': 'pq', 'b':1 },{ 'a': 'rs', 'b':3 }];
// // var arr7 = [{'abc'}, {'pqr'}, 'mn' ];

// console.log(arr1, 'arr1');
// console.log(arr3,'arr3');
// //._compact:Removes falsey values. 
// var arr2= _.compact(arr1);
// console.log(arr2,'compact arr2');
// //._concat:Concatenates array.
// console.log(_.concat(arr2, arr3, 'concatenation'));
// //_.difference:it shows element of 1st array which are missing in second array. 
// console.log(_.difference(arr2, arr3), 'difference between arr2 and arr3');
// //_.flatten:Flattens array to single level.
// console.log(arr4,"arr4");
// console.log(_.flatten(arr4), 'flatten array arr4');
// //_.without: It shows array without common  values which are passed in method.
// console.log(_.without( arr3, 'p', 'q', 'r' ), 'without');
// //_.intersection: returns array with common values.
// console.log(_.intersection(arr3, arr4), 'intersection');
// //_.join: Converts array into string divided by separator.
// console.log(_.join(arr3, ','), 'join');
// //_.remove: Removes elements from array. 
// var removed= _.remove(arr5, function(x){
//   return x % 2 == 0
// });
// console.log(removed, 'removed elements');
// console.log(arr5, 'remaining elements');
// //_.uniq:Removes duplicate elements.
// console.log(_.uniq(arr6), 'uniq');
// //_.uniqBy:Removes duplicate elements based on iteratee.
// console.log(_.uniqBy(arr_obj1, 'a'), 'uniqBy');
 
// // 2) Collection methods :
// console.log('Lodash Collection methods :');
// //_.countBy:Creates object having keys.
// console.log(_.countBy(arr_obj1,'a'),'countBy');
// //_.forEach:Iterates over elements of collection and invokes iteratee for each element.
// console.log('forEach');
// _.forEach(arr_obj1, function(obj) {
//   console.log(obj);
// });
// //_.forEachRight:Iterates over elements of collection and invokes iteratee for each element but from RIGHT - LEFT.
// console.log('forEachRight');
// _.forEachRight(arr_obj1, function(obj) {
//   console.log(obj);
// });
// //_.every:Checks if all elements of collection pass the given condition or not, result is shown as true or false. 
// console.log(_.every(arr_obj1, { 'a': 'xy', 'b': 1 }), 'every');
// //_.filters:Filters as per condition and returns new array.
// console.log(_.filter(arr_obj1,{'a':'xy', 'b':1 }),'filter');
// //_.find:It returns the first element from left which satisfies the condition.
// console.log(_.find(arr_obj1,{'a':'xy'}),'find');
// //_.findLast:It returns the first element from right which satisfies the condition.
// console.log(_.findLast(arr_obj1,{'a':'xy'}),'findLast');
// //_.flatMap:Returns 1 level flat mapped array.
// console.log('flatMap');
// console.log(_.flatMap(arr_obj1,function(obj){
//  return [obj];
// }));
// //flatMapDeep:Returns deep level flat mapped array.
// console.log('flatMapDeep');
// console.log(_.flatMapDeep(arr_obj1,function(obj){
//   return [[[obj]]];
// }));
// //_.groupBy:Returns aggregate object grouped by iteratee.
// var grouped = _.groupBy(arr_obj1, function(obj) {
//   return obj.a;
// });
// console.log(grouped, 'grouped');
// //_.includes:It returns boolean value if the certain value is in the collection.
// console.log('includes');
// var includes;
// _.forEach(arr_obj1, function(obj) {
//   console.log(obj,'xy');
//   if(_.includes(obj.a,'pq')){
//    includes =_.includes(obj.a,'pq');
//   }
// });
// console.log(includes, 'includes');
// //_.invokeMap:Invokes method at path of each element in collection.
// console.log(_.invokeMap([arr_obj1], 'reverse'), 'invokeMap');
// //_.keyBy:Creates an object composed of keys generated from the results of running each element of collection through iteratee
// console.log(_.keyBy(arr_obj1, 'a'), '_keyBy');
// //_.map:Creates an array of values by running each element in collection thru iteratee.
// console.log(_.map(arr_obj1, 'a'), 'map');
// //_.orderBy:Sorts collection in certain order of keys in ascending or descending as per requirement.
// console.log(_.orderBy(arr_obj1,['a'], ['desc']),'orderBy');
// //partition:Partions in two arrays first array returns elements having truthy condition and other array having falsey condition 
// console.log(_.partition(arr_obj1, {'a':'pq'}), 'partition');
// //reduce: Returns accumulated result.
// var arr = [{x:1, y:8}, {x:2, y:5}, {x:4, y:0}];
// console.log(arr.reduce(function (acc, obj) { 
//   return acc + obj.x 
//  }, 0), 'reduce'); 
//  //reduceRight: Returns accumulated result from right to left.
//  console.log(arr.reduceRight(function (acc, obj) { 
//   return acc + obj.x 
//  }, 0), 'reduceRight');
//  //reject:It shows all elements in collection except rejected.
//  console.log(_.reject(arr_obj1, ['a', 'pq']), 'reject');
// //sample:Returns random element.
// console.log(_.sample(arr_obj1), 'sample');
// //sampleSize:Returns random elements upto the size of collection.
// console.log(_.sampleSize(arr_obj1, 3), 'sampleSize');
// //shuffle:Shuffles position of elements and returns shuffled array.
// console.log(_.shuffle(arr_obj1),'shuffle');
// //size:Returns size of collection.
// console.log(_.size(arr_obj1),'size');
// //some:Returns boolean value true if at least one element passes condition. 
// console.log(_.some(arr_obj1,{'a':'pq'}),'some');
// //sortBy:Sorts by given condition in ascending order
// console.log(_.sortBy(arr_obj1,'b'),'sortBy');

// //3)
// //bind:Creates a 0function that invokes function with the this binding of thisArg and partials prepended to the arguments it receives.


// function show(greet, hobby){
//   return greet + ' ' + this.name + hobby;
// }
// var object = { 'name': 'Sachin' };
// // Bound with placeholders.
// var bound = _.bind(show, object, _, ' plays Cricket.');
// console.log(bound('Hi'),'bound');

// //Debounce:
// function run(a) {
//   console.log(a);
// }
// var realFunction = _.debounce(run, 1500);
// realFunction('a'); 
// realFunction('b'); 
// realFunction('c');
// // once;
// function createApplication (){
//   console.log('createApplication');
//  }
// var initialize = _.once(createApplication);
// initialize();

// //4) All lang methods
// //_.castArray:Creates array of any added value.
// console.log(_.castArray({'a':1}));
// var obj1 = [{ 'a': 1 }, { 'b': 2 }];
// var obj  = [{ 'a': 1}, { 'b': 2 }];
// var obj2  = { 'a': 1, 'b':3 };

// console.log(obj1, 'obj1');
// //_.clone:Returns clone values.
// var clone1 = _.clone(obj1);
// console.log(clone1, 'clone');
// console.log(clone1[0]== obj1[0], 'clone');
// //_.cloneDeep:It recursively clones.
// var clone2 = _.cloneDeep(obj1);
// console.log(clone2, 'cloneDeep');
// console.log(clone2[0] == obj1[0], 'clone');
// //_.eq:Checks if two vaules are equivalent or not.
// console.log(_.eq(5, 5),'eq');
// //_.gt:Checks if value is greater than other.
// console.log(_.gt(12, 8), 'gt');
// //gte:
// console.log(_.gte(10, 12), 'gte');
// //isArgument:
// console.log(_.isArguments(function() { return arguments; }()), 'isArguments');
// //isArray:Checks if value is array.
// console.log(_.isArray(obj1), 'isArray');
// //isArrayBuffer:Checks if value is classified as an ArrayBuffer object.
// console.log(_.isArrayBuffer(new ArrayBuffer(2)), 'isArrayBuffer');
// //isArrayLike
// console.log(_.isArrayLike(obj1), 'isArrayLike');
// //isArrayLikeObject
// console.log(_.isArrayLikeObject(obj1), 'isArrayLikeObject');
// //isBoolean:Checks if the value is boolean.
// console.log(_.isBoolean(false), 'isBoolean');
// //isDate:Checks if value is date object.
// console.log(_.isDate(new Date), 'isDate');
// //isEmpty:
// console.log(_.isEmpty(null), 'isEmpty');
// //isEqual:Checks if both values are equal.
// console.log(_.isEqual(obj, obj1), 'isEqual');
// //isError:
// console.log(_.isError(new Error), 'isError');
// //isFinite:Checks if value is finite.
// console.log(_.isFinite(2), 'isFinite');
// //_.isFunction:Checks if value is function.
// console.log(_.isFunction(function add(){}), 'isFunction');
// //isInteger:
// console.log(_.isInteger(2), 'isInteger');
// //isLength:
// console.log(_.isLength(3), 'isLength');
// ///toString:
// console.log(_.toString([1, 2, 3]), 'toString');
// //isMatch:
// console.log(_.isMatch(obj2,{'a': 1}), 'isMatch');
// //isNan:Checks if value is Nan. 
// console.log(_.isNaN(NaN), 'isNaN');
// //isNil:Checks if value is null or undefined.
// console.log(_.isNil(undefined), 'isNil');
// //isNull:Checks if value is null.
// console.log(_.isNull(null), 'isNull');
// //isNumber:Checks if value is number.
// console.log(_.isNumber(2), 'isNumber');
// //isObject:Checks if value is array,objects,functions.
// console.log(_.isObject(obj2), 'isObject');
// //isObjectLike Checks if value is object-like means value is not null and has a typeof result of "object".

// console.log(_.isObjectLike(obj2), 'isObjectLike');
// //isPlainObject:It checks if value is plain object means having key and values.
// console.log(_.isPlainObject(obj2), 'isPlainObject');
// //_.isRegExp:Checks if value is reqular expression
// console.log(_.isRegExp(/abc/), 'isRegExp');
// //isSafeInteger:Checks if value is a safe integer.
// console.log(_.isSafeInteger(3), 'isSafeInteger');
// //isSet:
// console.log(_.isSet(new Set), 'isSet');
// //isString:
// console.log(_.isString('arr1'), 'isString');
// //isSymbol:
// // console.log(_.isSymbol(Symbol.iterator), 'isSymbol');

// //isUndefined:Checks if value is undeifined.
// console.log(_.isUndefined(undefined), 'isUndefined');
// //isWeakMap:
// console.log(_.isWeakMap(new WeakMap), 'isWeakMap');
// //isWeakSet:
// console.log(_.isWeakSet(new WeakSet), 'isWeakSet');
// //lt:Checks if value is less than other.
// console.log(_.lt(2, 6), 'lt');
// //lte:Checks if value is less than or equal to other.
// console.log(_.lte(3, 3), 'lte');
// //toArray:Converts value to Array.
// console.log(_.toArray('abc'), 'toArray');
// //toFinite:Converts value to a finite number.
// console.log(_.toFinite(3.2), 'toFinite');
// //toInteger: Converts value to integer.
// console.log(_.toInteger(3.2), 'toInteger');
// //toLength:Converts value to length.
// console.log(_.toLength(3.2), 'toLength');
// //toNumber:Converts value to number.
// console.log(_.toNumber(3.2), 'toNumber');
// //toPlainObject:Converts value to plain object. 
// console.log(_.toPlainObject(arr2), 'toPlainObject');
// //Converts value to a safe integer. A safe integer can be compared and represented correctly.
// console.log(_.toSafeInteger(3.2), 'toSafeInteger');

function notifyAll(fnSms, fnEmail, fnWhatsapp) {   
  console.log('starting notification process');   
  fnSms();   
  fnEmail();   
}   
notifyAll(function() {   
  console.log("Sms send ..");   
},
function () {   
  console.log("email send ..");   
});   
console.log("End of script"); 
//executes last or blocked by other methods   