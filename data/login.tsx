
type UserLogin = {
    email: string;
    password: string;
};

const login = async(userLoginDetails: UserLogin) : Promise<Response> => {
    return await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: userLoginDetails.email,
            password: userLoginDetails.password,
        })
    });
}
export default login;