import { useAuth0 } from '@auth0/auth0-react';
import  Header from './Header';
import ADDUSER from './ADDUSER'
import AllProjects from './AllProjects';
import Tab from './Tab'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
           
                
                <div>
                    <Header />
                    <Tab />
                </div>
           
           
        )
    )
}

export default Profile
