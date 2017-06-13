'use strict';

import Navigo from 'navigo';
import { authCheck } from './auth';
import { signupView } from '../components/signup';
import { home } from '../components/home';


// let router = new Navigo(null, true, '#!'); // using hash
let router = new Navigo(null, false); // using HTML5 History API
router.on({
  // main pages
  'signup': () => { signupView() },
  'home': () => { home() },
});

// default route
router.on(() => { document.getElementById('view').innerHTML = '<h3>Greetings!</h3>' });

// 404 route
router.notFound((query) => { document.getElementById('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>' })

router.resolve();

export { router };