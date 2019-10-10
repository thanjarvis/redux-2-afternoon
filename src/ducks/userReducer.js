import axios from 'axios'

const REQUEST_USER_DATE = 'REQUEST_USER_DATA'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}


export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return{    
        type: REQUEST_USER_DATE,
        payload: data
    
    }
}

export default function (state = initialState, action){
    switch(action.type){
        case REQUEST_USER_DATE + '_FULFILLED':
            const{email, firstName, lastName} = action.payload.user
            return{email, firstName, lastName}
        default:
            return state
    }
    
}