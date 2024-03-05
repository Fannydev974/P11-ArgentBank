import React from 'react'

function login() {
    return (
        <main className="main-nav">

            <div className="form_header">
                <i className="fa fa-user-circle"></i>
                <h2>Sign In</h2>
            </div>

            <Field label="Username" content="email" type="email" />
            <Field label="Password" content="password" type="password" />

            <div className="login_check">
                <input type="checkbox" id="remember" name="check-remember" />
                <label htmlFor="remember">Remember me</label>
            </div>

            <Button content="Sign In" className="btn-login" />


        </main>

    )
}

export default login
