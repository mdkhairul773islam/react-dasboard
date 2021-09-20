import {user_type} from '../types';

const initalState = {
    userList: [
        {
            id: 1,
            name: 'Khairul Islam Tonmoy',
            phone: '01636882947',
            address: 'Mymensingh Sadar'
        }
    ]
}

export default  function (state =initalState, action){
    switch (action.type){
        case user_type:
            return{
                ...state,
                userList: [
                    {
                        id: 1,
                        name: 'Khairul Islam',
                        phone: '01636882947',
                        address: 'Mymensingh Sadar'
                    },
                    {
                        id: 2,
                        name: 'Kabir',
                        phone: '01636882940',
                        address: 'Mymensingh'
                    }
                ]
            }

        default:
            return state;

    }
}