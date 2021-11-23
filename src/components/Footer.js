import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Footer = () => {
    const { currentUser} = useAuth()
    const location = useLocation();
    return (

        <footer>
            {currentUser ?
            <p>Copyright &copy; 2021</p> :<></>}
            
        </footer>
    )
}

export default Footer
