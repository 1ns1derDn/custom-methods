// my ForEach
Array.prototype.myForEach = function (callback, thisArg) {

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }

};

// ForEach testing 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr.myForEach((item) => {
  console.log(item)
})

// ForEach testing 1 thisArg

const Person = function (name) {
  this.name = name;
};

Person.prototype.say = function (phrase) {
  console.log(this.name + ' says ' + phrase);
}

Person.prototype.mumble = function (phrases) {
  phrases.myForEach(function (phrase) {
    this.say(phrase);
  }, this);
}

const johnDoe = new Person('John Doe');

johnDoe.mumble(['Hello, World!', 'JS is great', 'I\'m designer and i don\'t have job']);


// my Filter

Array.prototype.myfilter = function (callback, thisArg) {

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  let results = []
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      results.push(this[i]);
    }
  }

  return results;
};

// Filter testing 1

let numbers = [1, -2, 3, -4, 5, -56, 67, 8, 9, -65, 4, -1, 12, -31, -3]

negNumber = numbers.myfilter((item) => item < 0)

console.log(negNumber);

const person = [
  { name: 'Nikita', job: 'Front-end' },
  { name: 'Liza', job: 'Front-end' },
  { name: 'Mark', job: 'Back-end' }
]

const Nikita = person.myfilter((item) => item.name === 'Nikita')
console.log(Nikita);

//  my FindIndex 
Array.prototype.myFindIndex = function (callback, thisArg) {

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  
  return -1;
};

// FindIndex testing 1

console.log(person.myFindIndex(item => item.name === 'Liza'));

