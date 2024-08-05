import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from '../assets/not-found.svg'

const Error = () => {
    const error = useRouteError();

    if(error.status === 404){
        return(
            <Wrapper>
                <div>
                    <img src={img} alt="Erro 404 - Página não encontrada" />
                    <h3>Essa não!</h3>
                    <p>Não foi possível encontrar a página você que está procurando</p>
                    <Link to='/'>Voltar para página inicial</Link>
                </div>
            </Wrapper>
        );
    };

    return(
        <Wrapper>
            <div>
                <h3>
                    Um erro ocorreu!
                </h3>
            </div>
        </Wrapper>
    );
};

export default Error;
