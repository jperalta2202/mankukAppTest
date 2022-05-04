export const b2cConfig = {
  auth: {
    clientId: 'f94ac460-560f-48f2-957e-d7e8a2877f0b',
    authorityBase:
      'https://mankukb2c.b2clogin.com/tfp/mankukb2c.onmicrosoft.com/',
    policies: {
      signInSignUp: 'B2C_1_susi',
      //passwordReset: 'B2C_1_PasswordReset',
    },
    // redirectUri: Platform.select({ default: undefined }),
  },
  // web only:
  cache: {cacheLocation: 'localStorage'},
};

export const b2cScopes = [
  'https://mankukb2c.onmicrosoft.com/mankuk-api/api.read',
  'https://mankukb2c.onmicrosoft.com/mankuk-api/api.write',
];

/* 
export const b2cConfig = {
  auth: {
    clientId: 'f94ac460-560f-48f2-957e-d7e8a2877f0b',
    authority: 'https://mankukb2c.b2clogin.com',
    authorityBase:
      'https://mankukb2c.b2clogin.com/tfp/mankukb2c.onmicrosoft.com/',
    policies: {
      signInSignUp: 'B2C_1_SISOPolicy',
      //passwordReset: 'B2C_1_PasswordReset',
    },
    redirectUri: Platform.select({
      android: 'msauth://com.mankukapp/2jmj7l5rSw0yVb%2FvlWAYkK%2FYBwk%3D',
      default: undefined,
    }),
  },
  // web only:
  cache: {cacheLocation: 'localStorage'},
};

export const b2cScopes = ['api.read']; */
