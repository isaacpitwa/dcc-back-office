import { generateAuthActions } from 'redux-token-auth';

const config = {
  authUrl: '//add url',
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}