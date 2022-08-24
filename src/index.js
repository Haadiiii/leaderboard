import './index.css';
import { list, button, form } from './modules/Elements.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/F320Bghj02145Qwer76T/scores/';

button.addEventListener('click', () => {
  fetch(url, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      list.innerHTML = '';
      return data.result.forEach((el) => {
        const div = document.createElement('div');
        const user = document.createElement('h1');
        const scores = document.createElement('h1');
        div.className = 'items';
        user.innerHTML = el.user;
        scores.innerHTML = el.score;
        div.append(user);
        div.append(scores);
        list.append(div);
      });
    });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const payLoad = formData;
  console.log(payLoad);
  console.log('this shown content', ...payLoad);

  const extractedPayLoad = [...payLoad];
  const userValue = extractedPayLoad[0][1];
  const scoreValue = extractedPayLoad[1][1];

  const payLoadObject = {
    user: userValue,
    score: scoreValue,
  };
  console.log(payLoadObject);

  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payLoadObject),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data);
    });
  user.value = '';
  score.value = '';
});
