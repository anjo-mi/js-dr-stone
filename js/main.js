const moment = require('moment');

console.log('this is from the js file');

console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());