// const anonymous = () => 'anonymous';

const greeter = (name = 'anonymous', age) => {
  console.log('Hello ' + name);
}

greeter('John');
greeter();


