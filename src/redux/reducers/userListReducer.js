import {user_request_type, get_user_success, get_user_field} from '../types';

const initalState = {
    loading: false,
    getUserList: [
        {
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            userId: 1
        }
    ],
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