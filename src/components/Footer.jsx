import { NavLink } from 'react-router-dom';
import './footer.css';
const Footer = () => {
    return (
        <div className='footer container'>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Valilik Sosyal Hizmetler Yardımlaşma </p>
                <div className="footer-links">
                    <NavLink to={'/'}>Anasayfa</NavLink>
                    <NavLink to={'/services'}>Hizmetler</NavLink>
                    <NavLink to={'/contact'}>İletişim</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer;