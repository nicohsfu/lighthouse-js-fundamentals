let counter = 100;

while (counter < 201) {
  if (counter % 3 === 0 && counter % 4 === 0) {
    console.log('LoopyLighthouse');
    counter++;
  } else if (counter % 4 === 0) {
    console.log('Lighthouse');
    counter++;
  } else if (counter % 3 === 0) {
    console.log('Loopy');
    counter++;
  } else {
    console.log(counter);
    counter++;
  }

}