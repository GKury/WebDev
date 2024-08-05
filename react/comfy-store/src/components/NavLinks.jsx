import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
    { id: 1, url: '/', text: 'inicio' },
    { id: 2, url: 'about', text: 'sobre' },
    { id: 3, url: 'products', text: 'produtos' },
    { id: 4, url: 'cart', text: 'carrinho' },
    { id: 5, url: 'checkout', text: 'checkout' },
    { id: 6, url: 'orders', text: 'pedidos' },
  ];

// eslint-disable-next-line react/prop-types
const NavLinks = ({ onLinkClick}) => {
    const user = useSelector((state) => state.userState.user);

    return(
        <>
            {links.map((link) => {
                if((link.url === 'checkout' || link.url === 'orders') && !user) return null;
                return <li key={link.id}> <NavLink className='capitalize' to={link.url} onClick={onLinkClick} >{link.text}</NavLink> </li>
            })}
        </>
    );
};

export default NavLinks;
