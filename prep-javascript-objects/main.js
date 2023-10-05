const person = { firstName: 'Tai', lastName: 'Doan', hobby: 'Cooking' };
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('Full name: ', fullName);

person.job = 'Valet';
console.log('Job: ', person.job);

person['previousJob'] = 'Warehouse worker';
console.log('Previous Job: ', person['previousJob']);

console.log(person);
