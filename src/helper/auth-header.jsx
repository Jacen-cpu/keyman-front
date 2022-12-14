export function authHeader() {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) {
        return {
            'Content-Type': 'application/json', 
            'Authorization': 'Basic ' + user.authdata
        };
    } else {
        return {};
    }
}