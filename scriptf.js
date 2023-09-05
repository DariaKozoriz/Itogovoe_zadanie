let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let time = document.querySelector('#time');
let submit = document.querySelector('#submit');

let users = {};

function User(name, phone, time) {
  this.name = name;
  this.phone = phone;
  this.time = time;
}

function createId(users) {
  return Object.keys(users).length;
}

submit.addEventListener('cklick', () => {
  const nameUser = name.value;
  const phoneUser = phone.value;
  const timeUser = time.value;

  const user = new User(nameUser, phoneUser, timeUser);

  const userId = 'User' + createId(users);
  users[userId] = user;

  console.log(users);

})
