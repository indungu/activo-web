// helper function
import { authService } from 'utils/auth';

const authInitialState = {
  userDetail: authService.getUser(),
};

// reducer
/**
 * This reducer changes the authentication state of the application
 * @param {object} [state=authInitialState]
 * @param action = authAction
 * @returns {object} state
 */
const auth = (state = authInitialState, action) => state;
export default auth;
