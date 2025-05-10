import  { useContext } from 'react'
import UserContext from '../ContextAPI/UserContext';

function Profile() {
    const {user} = useContext(UserContext);
    
    if(!user) return <div>Please Login</div>

    return(
        <div>Welcome {user}</div>
    )
    
  
}

export default Profile