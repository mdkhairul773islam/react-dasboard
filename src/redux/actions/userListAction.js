import {user_request_type, get_user_success, get_user_field} from '../types';
import axios from "axios";

export  const userList = () =>{
    return async (dispatch) => {
        try {
            dispatch({
                type: user_request_type,
            })
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res.data);
            dispatch({
                type: get_user_success,
                payload: res.data
            })
        } catch (error){
            dispatch({
                type: get_user_field,
                payload: error.message
            })
        };
    }
}