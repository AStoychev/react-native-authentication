import axios from "axios";

const URL_SIGN_UP = process.env.EXPO_PUBLIC_URL_SIGN_UP;
const URL_SIGN_IN = process.env.EXPO_PUBLIC_URL_SIGN_IN;

async function authenticate(mode, email, password) {
    const response = await axios.post(mode === 'signUp' ? URL_SIGN_UP : URL_SIGN_IN, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    const token = response.data.idToken;
    
    return token;
}

export function createUser(email, password) {
    return authenticate('signUp', email, password);
};

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
};