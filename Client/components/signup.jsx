import React from 'react';

const signup = () => {
    const signupFunc = (event) => {
        const username = document.getElementById('usernameSignup').value;
        const password1 = document.getElementById('passwordSignup').value;
        const password2 = document.getElementById('passwordSignupConfirm').value;

        // check if passwords match
        if (password1 !== password2) {
            return alert("Sign up passwords do not match")
        }

        fetch('http://localhost:3000/user', {
            method: "POST",
            body: JSON.stringify({username, password: password1})
        })
            .then(
                // do something
            )
            .catch(error => alert(error))
    }

    return (
        <div>
            <form>
                <input type='text' id='usernameSignup' placeholder='Username'></input>
                <input type='password' id='passwordSignup' placeholder='Password'></input>
                <input type='password' id='passwordSignupConfirm' placeholder='Confirm Password'></input>
                <button onClick={event => signupFunc(event)}>Login</button>
            </form>
        </div>
    )
}

export default signup