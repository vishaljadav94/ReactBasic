import React from 'react';

export default class Body extends React.Component {


    onLogin() {
        let name = document.getElementById("username");
        let password = document.getElementById("password");

        alert(name.value + "   " + password.value);

    }

    render() {
        return <div className="body">
            <form>
                <label>Username</label><br/>
                <input id="username" type="text" name="firstname"/><br/>

                <label>Password</label><br/>
                <input id="password" type="password" name="lastname"/><br/>

                <button onClick={this.onLogin}>Login</button>
            </form>

        </div>
    }

}







