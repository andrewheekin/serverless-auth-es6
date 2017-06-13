'use strict';

import { AuthenticationDetails, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import './router';
import { $id } from './util.js';
import config from './config.js';


// confirmSignup(newUser, '');

let newUser = null;
let token = null;
let username = null;
let password = null;
let confcode = null;

$id('register').onclick = () => {
  username = $id('email').value;
  password = $id('password').value;
  createUser(username, password).then(result => {
    newUser = result;
    console.log('newUser in the onclick: ', newUser);
  });
}

$id('confirm').onclick = () => {
  confcode = $id('confcode').value;
  console.log('in confirm onclick, args: ', newUser, confcode, username, password);
  confirmSignup(newUser, confcode, username, password).then(result => {
    token = result;
    console.log('token in the onclick: ', token);
  });
}


async function createUser(username, password) {
  console.log('in createUser: ', username, password);
  try {
    const newUser = await signup(username, password);
    console.log('newUser: ', newUser);
    return newUser;
  }
  catch(e) {
    console.log('error in createUser');
    alert(e);
    return;
  }  
}

function signup(username, password) {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  console.log('in signup: ', userPool);
  const attributeEmail = new CognitoUserAttribute({ Name : 'email', Value : username });

  return new Promise((resolve, reject) => (
    userPool.signUp(username, password, [attributeEmail], null, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result.user);
    })
  ));
}

async function confirmSignup(newUser, confirmationCode, username, password) {
  try {
    let confirmation = await confirm(newUser, confirmationCode);
    console.log('confirmation: ', confirmation);
    const userToken = await authenticate(newUser, username, password);
    console.log('userToken: ', userToken);
    return userToken;
  }
  catch(e) {
    alert(e);
    return;
  }
}

function confirm(user, confirmationCode) {
  return new Promise((resolve, reject) => (
    user.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    })
  ));
}

function authenticate(user, username, password) {
  const authenticationData = {
    Username: username,
    Password: password
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise((resolve, reject) => (
    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
      onFailure: (err) => reject(err),
    })
  ));
}
