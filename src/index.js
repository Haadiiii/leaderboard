import './index.css';

import { list } from './modules/Elements.js';

document.addEventListener('DOMContentLoaded', () => {
  let str = '';

  str
    += `<ul id="items">
              <li>Name: 200</li>
              <li>Name: 100</li>
              <li>Name: 350</li>
              <li>Name: 150</li>
              <li>Name: 70</li>
            </ul>
    `;
  list.innerHTML = str;
});