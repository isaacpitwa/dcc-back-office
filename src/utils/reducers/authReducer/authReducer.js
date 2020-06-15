import {
    LOGIN_FAILURE, LOGIN_SUCCESS, REGISTRATION_REQUEST_SENT, SIGNOUT_REQUEST_SENT, SIGNIN_REQUEST_SENT, REGISTRATION_FAILURE, REGISTRATION_SUCCESS
    , PASSWORDRESET_REQUEST_SENT, PASSWORDRESET_FAILURE, PASSWORDRESET_SUCCESS

} from '../../actions/types'

const initialState = {
    authStatus: {
        isLoading: false,
        isSignedIn: false,
        isregistered: false,
        resetLinkSent: false,
        currentUser: {
            attributes: {
                name: null
            }
        },
        error: ''
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_REQUEST_SENT:
        case SIGNIN_REQUEST_SENT:
        case SIGNOUT_REQUEST_SENT:
        case PASSWORDRESET_REQUEST_SENT:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                isLoading: false,
                error:'',
                currentUser: action.payload
            }
        case LOGIN_FAILURE:
        case REGISTRATION_FAILURE:
            return {
                ...state,
                isSignedIn: false,
                isLoading: false,
                error: action.payload
            }

        case REGISTRATION_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                isLoading: false,
                isregistered: true,
                error:'',
            }

        case PASSWORDRESET_FAILURE:
            return {
                ...state,
                isLoading: false,
                resetLinkSent: false,
                error: action.payload
            }

        case PASSWORDRESET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error:'',
                resetLinkSent: true
            }

        default:
            return state;
    }

}