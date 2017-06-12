'use strict';

import Navigo from 'navigo';

//components scripts
// import { about } from '../components/about';


// let router = new Navigo(null, true, '#!'); // using hash
let router = new Navigo(null, false); // using HTML5 History API
router.on({
  // main pages
  // 'about': () => { about() }
});

// default route
router.on(() => { document.getElementById('view').innerHTML = '<h3>Greetings!</h3>' });

// 404 route
router.notFound((query) => { document.getElementById('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>' })

router.resolve();

export { router };