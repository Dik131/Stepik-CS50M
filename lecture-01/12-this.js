const person = {
  name: 'John',
  greet: function () {
    console.log('Hi, ' + this.name + '!')
  },
}

person.greet()

const friend = {
  name: 'Jane',
}

friend.greet = person.greet

friend.greet()

const greet = person.greet
greet()