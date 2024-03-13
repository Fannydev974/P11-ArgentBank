import React from 'react'
import './login.css'


function login() {
    return (
        <main className="main-login">
            <section className="section-login">

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

                <Button style={{ textDecoration: "underline" }} content="Sign In" className="btn-login" />

            </section>
        </main>

    )
}

export default login
