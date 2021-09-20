import {user_request_type, get_user_success, get_user_field} from '../types';

const initalState = {
    loading: false,
    getUserList: [],
    error:''
}

export default  function (state =initalState, action){
    switch (action.type){
        case user_request_type:
            return{
                ...state,
                loading: true,
            }
        case get_user_success:
            return{
                ...state,
                loading: false,
                getUserList: action.payload
            }
        case get_user_field:
            return{
                ...state,
                loading: false,
                getUserList: [],
                error: action.payload
            }
        default:
            return state;
    }
}