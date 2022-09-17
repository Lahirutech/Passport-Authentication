import React from 'react'

export default function Login() {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }
    const googleLogout = () => {
        window.open("http://localhost:5000/auth/logout", "_self")
    }
    return (
        <div>
            <button onClick={google}>Google Login</button>
            <button onClick={googleLogout}>Google Logout</button>

        </div>
    )
}
 