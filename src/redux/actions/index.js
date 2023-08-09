export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const email = (data) => {
    console.log(data);
    return {
        type : "email",
        payload : data
    }
}
export const password = (data) => {
    return {
        type : "password",
        payload : data
    }
}


export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}