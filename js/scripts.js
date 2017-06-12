import './router';

const userPool = new CognitoUserPool({
   UserPoolId: 'us-east-1_2He7VEzOX',
   ClientId: '6t6ej2cgclvl6rm48in01m6tdo'
});

// const attributeEmail = new CognitoUserAttribute({ Name : 'email', Value : username });

//     return new Promise((resolve, reject) => (
//       userPool.signUp(username, password, [attributeEmail], null, (err, result) => {
//         if (err) {
//           reject(err);
//           return;
//         }

//         resolve(result.user);
//       })
//     ));

//     // confirmation code is emailed out...
//     return new Promise((resolve, reject) => (
//       user.confirmRegistration(confirmationCode, true, function(err, result) {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(result);
//       })
//     ));


//     const authenticationData = {
//       Username: username,
//       Password: password
//     };
//     const authenticationDetails = new AuthenticationDetails(authenticationData);

//     return new Promise((resolve, reject) => (
//       user.authenticateUser(authenticationDetails, {
//         onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
//         onFailure: (err) => reject(err),
//       })
//     ));