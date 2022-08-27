import './index.css';
import { list, button, form } from './modules/Elements.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bvRoUK8AQ25sBMa8EMPl/scores/';

button.addEventListener('click', async () => {
  list.innerHTML = '';
  const data = await fetch(url);
  const { result } = await data.json();
  result.map((data) => {
    const div = document.createElement('div');
    const user = document.createElement('h1');
    const scores = document.createElement('h1');
    div.className = 'items';
    user.innerHTML = data.user;
    user.className = 'user';
    scores.className = 'score';
    scores.innerHTML = data.score;
    div.append(user);
    div.append(scores);
    list.append(div);
    return result;
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const payLoad = formData;

  const extractedPayLoad = [...payLoad];
  const userValue = extractedPayLoad[0][1];
  const scoreValue = extractedPayLoad[1][1];

  const payLoadObject = {
    user: userValue,
    score: scoreValue,
  };

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
