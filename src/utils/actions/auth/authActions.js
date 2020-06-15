import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTRATION_REQUEST_SENT, SIGNIN_REQUEST_SENT ,REGISTRATION_SUCCESS,REGISTRATION_FAILURE
    ,PASSWORDRESET_REQUEST_SENT,PASSWORDRESET_FAILURE,PASSWORDRESET_SUCCESS
} from '../types'
import axios from 'axios'

export const signInUser = ({ email, password }) => async (dispatch) => {
    dispatch(LoginRequestSent());
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://backend-norblemart.herokuapp.com/api/user/signup',
            data: {
                email, password
            }
        }
        );
        const userAttributesToSave = getUserAttribitesFromResponse(response);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: userAttributesToSave
        }
        );
    }
    catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message
        })
        throw error;
    }

}

export const registerUser = ({name, email, password }) => async (dispatch) => {
    dispatch(registrationRequestSent());
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://backend-norblemart.herokuapp.com/api/user/signup',
            data: {
                name,
                email, password
            }
        }
        );
        const userAttributesToSave = getUserAttribitesFromResponse(response);
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: userAttributesToSave
        }
        );
    }
    catch (error) {
        dispatch({
            type: REGISTRATION_FAILURE,
            payload: error.message
        })
        throw error;
    }

}

export const passwordReset = ({ email}) => async (dispatch) => {
    dispatch(passwordResetRequestSent());
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://backend-norblemart.herokuapp.com/api/user/signup',
            data: {
                email,
            }
        }
        );
        const userAttributesToSave = getUserAttribitesFromResponse(response);
        dispatch({
            type: PASSWORDRESET_SUCCESS,
            payload: userAttributesToSave
        }
        );
    }
    catch (error) {
        dispatch({
            type: PASSWORDRESET_FAILURE,
            payload: error.message
        })
        throw error;
    }

}

const getUserAttribitesFromResponse = (response) => {
    return response.JSON();
}
export const registrationRequestSent = () =>
    ({
        type: REGISTRATION_REQUEST_SENT,
    })

export const LoginRequestSent = () =>
    ({
        type: SIGNIN_REQUEST_SENT,
    })


    export const passwordResetRequestSent = () =>
    ({
        type: PASSWORDRESET_REQUEST_SENT,
    })