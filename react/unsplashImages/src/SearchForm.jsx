import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalContext } from './context';

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        let searchValue = event.target.elements.search.value;
        if(!searchValue){
            toast.error("Digite algo");
            return;
        }
        setSearchTerm(searchValue);
        event.target.elements.search.placeholder = searchValue;
        event.target.elements.search.value = '';
    };

    return(
        <section>
            <h1 className="title">Unsplash Images</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='search'
                    placeholder='Gato'
                    className='form-input search-input'
                />
                <button className="btn" type="submit">Procurar</button>
            </form>
            <ToastContainer position="top-center" limit={2} autoClose={2500}/>
        </section>
    );
};

export default SearchForm
