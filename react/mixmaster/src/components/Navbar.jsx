import { NavLink } from "react-router-dom";
import Wrapper from '../assets/wrappers/Navbar'

const NavBar = () => {
    return(
        <Wrapper>
            <div className="nav-center">
                <span className="logo">MixMaster</span>
                <div className="nav-links">
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/sobre' className='nav-link'>Sobre</NavLink>
                    <NavLink to='/novidades' className='nav-link'>Novidades</NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

export default NavBar;
