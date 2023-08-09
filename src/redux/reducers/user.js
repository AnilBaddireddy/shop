/* eslint-disable no-unreachable */

const userState={
    email:'',
    password:''
}


const user = (state = userState, action) => {

    switch (action.type) {
       
        case "email" : return {
            ...state,
            email:action.payload
        }
        // eslint-disable-next-line no-unreachable
        break;

        case "password" : return {
            ...state,
            password:action.payload
        }

        // eslint-disable-next-line no-unreachable
        break;
        

        default: return state;
        break;

        
    }
}

export default user;