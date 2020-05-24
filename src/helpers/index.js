
export let IS_LOGGED_IN = false;

export const isTokenPresent = () => {
    const token = window.localStorage.getItem("token");
     if(token){
        IS_LOGGED_IN  = true;
     }
    
    return token ? token : false;
}

export const setToken = (token) => {
     window.localStorage.setItem("token", token);
     IS_LOGGED_IN  = true;
}

export const removeToken = () => {
    window.localStorage.removeItem("token");
    IS_LOGGED_IN  = false;
}