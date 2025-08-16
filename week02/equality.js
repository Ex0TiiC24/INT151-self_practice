//shallow equality
function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

let book1 = {
  isbn: 123456789,
  title: "JavaScript",
};

let book2 = {
  isbn: 123456789,
  title: "JavaScript",
};
console.log("shallow equality: " + shallowEquality(book1, book2)); //works fine

let objA = {
  name: "Alice",
  address: { city: "Bangkok", zip: 10100 } //same value
};

let objB = {
  name: "Alice",
  address: { city: "Bangkok", zip: 10100 } //same value 
};

console.log("shallow equality: " + shallowEquality(objA,objB)); //return false but should be true
//because of the value's object of each objA,objB is refering 
//to a different memory address 
