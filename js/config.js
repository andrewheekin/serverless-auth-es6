export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'notes-app-uploads-heekin'
  },
  apiGateway: {
    URL: 'https://rspjd7ff2c.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    USER_POOL_ID : 'us-east-1_2He7VEzOX',
    APP_CLIENT_ID : '6t6ej2cgclvl6rm48in01m6tdo',
    REGION: 'us-east-1',
    IDENTITY_POOL_ID: 'us-east-1:3503f9da-b69a-4e20-afc9-b22d8f6631de',    
  }
};