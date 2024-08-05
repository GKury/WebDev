import { links } from '../data';

const Navbar =() => {
    return (
      <nav className="bg-emerald-100">
        <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
            <h2 className="text-3xl font-bold">
                Web<span className="text-emerald-600">Dev</span>
            </h2>
            <div className="grid grid-cols-2 sm:flex sm:gap-x-3">
                {links.map((link)=> {
                    return (
                        <a key={link.id} href={link.href} className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>
                            {link.text}
                        </a>
                    );
                })}
            </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  