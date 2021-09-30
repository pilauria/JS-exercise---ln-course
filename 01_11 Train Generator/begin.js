/*
  WRITE YOUR SOLUTION HERE
*/
function* getStop() {
  yield 'Poughkeepsie';
  yield 'Newburgh';
  yield 'Peekskill';
  yield 'Yonkers';
  yield 'Bronx';
  yield 'Grand Central';
}

const nyTrain = getStop();
let stop = document.querySelector('#next-stop');

stop.addEventListener('click', () => {
  let currStop = nyTrain.next();

  if (currStop.done) {
    console.log('we made it!');
    stop.setAttribute('disabled', true);
    const text = document.createElement('p');
    const newText = document.createTextNode(`New York`);
    text.style.fontSize = '3rem';
    text.style.color = 'red';
    text.appendChild(newText);
    const div = document.querySelector('.main');
    document.body.appendChild(text, div);
  } else {
    console.log(currStop.value);
    const text = document.createElement('p');
    const newText = document.createTextNode(`${currStop.value}`);
    text.style.fontSize = '3rem';
    text.appendChild(newText);
    const div = document.querySelector('.main');
    document.body.appendChild(text);
  }
});
