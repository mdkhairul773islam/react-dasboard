import {SIDEBAR_COLLAPS, SIDEBAR_COLLAPS_ERROR} from '../types';

const initalState = {

    getSideBarCollaps: false,
    error:''
}

export default  function (state =initalState, action){
    switch (action.type){
        case SIDEBAR_COLLAPS:
            const colapasDataItem = state.getSideBarCollaps = !state.getSideBarCollaps;
            return{
                ...state,
                getSideBarCollaps: colapasDataItem,
            }

        case SIDEBAR_COLLAPS_ERROR:
            return{
                ...state,
                getSideBarCollaps: '',
                error: action.payload
            }
        default:
            return state;
    }
}