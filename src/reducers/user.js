import { LOGIN_INPUT_CHANGE, LOGIN_INPUT_SUBMIT,LOGIN_INPUT_LOGOUT } from '../actions/user-actions';

const initialState = {
  email: 'toto@toto.com',
  password: 'hey',
  isLogged: false,
  loggedMessage: 'Bienvenue lulu',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return{
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;
