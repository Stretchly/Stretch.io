import React from 'react';

const login = () => {
    const loginFunc = (event) => {
        event.preventDefault()
        const username = document.getElementById('usernameLogin').value;
        const password = document.getElementById('passwordLogin').value;
        
        fetch('http://localhost:3000/user', {
            method: 'GET',
            body: JSON.stringify({username, password})
        })
            .then(
                // Do something
            )
            .catch(error => alert(error))
    }

    return(
        <div>
            <form>
                <input type='text' id='usernameLogin' placeholder='Username'></input>
                <input type='password' id='passwordLogin' placeholder='Password'></input>
                <button onClick={event => loginFunc(event)}>Login</button>
            </form>
        </div>
    )
}

export default login;