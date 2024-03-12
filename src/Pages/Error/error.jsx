import React from "react"

import "./error.css"

export default Error

function Error() {
    return (
        <main className="main-error">
            <section className="container-error">
                <h2 className="title-error">Error 404 !</h2>
                <p className="error">La page demandée n'existe pas</p>
            </section>
        </main>
    )
}