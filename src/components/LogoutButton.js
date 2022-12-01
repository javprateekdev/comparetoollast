import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
      console.log(isAuthenticated)
    return (
        isAuthenticated && (
            <>
             <Header />
             <div style={{marginTop:'60px',display:"flex",justifyContent:"space-between"}}>
             <div><h3>Comparision Tool Project Module</h3></div>
             <div style={{float:"right",padding:"15px"}}><button onClick={() => logout()} style={{height:"30px",width:"100px"}}>
                Sign Out
            </button></div>
            </div>
           
            </>
        )
    )
}

export default LogoutButton
