const initalState={
    addItem :[],
    
}


const addItems = (state = initalState, action) => {

    switch (action.type) {
        case "ADDITEM" : return [
            ...state.addItem,
            action.payload
        ]
        break;
                case "DELITEM" :
            return state.addItem = state.addItem.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

export default addItems;