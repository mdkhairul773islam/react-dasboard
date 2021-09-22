import {SIDEBAR_COLLAPS, SIDEBAR_COLLAPS_ERROR} from '../types';

export  const sideBarAction = () =>{
    return async (dispatch) => {
        try {
            dispatch({
                type: SIDEBAR_COLLAPS,
                //payload: true
            })

        } catch (error){
            dispatch({
                type: SIDEBAR_COLLAPS_ERROR,
                payload: error.message
            })
        };
    }
}