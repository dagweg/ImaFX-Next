import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login'

const GOOGLE_CLIENT_ID = '121002502349-3mivivkll4r0va7pkkee8opbadb6g4pc.apps.googleusercontent.com'

function MyComponent() {


    const handleLoginSuccess = (response) => {
        console.log("Logged in successfully!", response.json())
    }
    const handleLoginFaliure = () => {
        console.log("Faliure")
    }

    return (
        <div>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText='Login with Google'
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFaliure} />
        </div >
    );
}

export default MyComponent;
