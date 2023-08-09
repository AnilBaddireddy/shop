
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
        break;

        case "password" : return {
            ...state,
            password:action.payload
        }

        break;
        

        default: return state;
        break;

        
    }
}

export default user;