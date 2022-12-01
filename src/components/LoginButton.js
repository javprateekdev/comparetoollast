import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <>
            <Header />
            <button onClick={() => loginWithRedirect()}>
                Sign In
            </button>
            </>
        )
    )
}

export default LoginButton
