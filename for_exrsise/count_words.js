let sentense = '  some text  for test';

// Not show corect answer
console.log(sentense.split(" ").length);

//close to corect but use regex
console.log(sentense.split(/\s+/).length);

//Maybe use this without regex
console.log(sentense.split(' ').filter(x => x.trim()).length);
