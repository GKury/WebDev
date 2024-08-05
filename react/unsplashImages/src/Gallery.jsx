import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=`;

const Gallery = () => {
    const {searchTerm} = useGlobalContext();

    const response = useQuery({
        queryKey:['images', searchTerm],
        queryFn: async() => {
            const result = await axios.get(`${url}${searchTerm}`);

            return result.data
        }
    });

    if(response.isLoading){
        return(
            <section className="image-container">
                <h4>Carregando...</h4>
            </section>
        );
    }

    if(response.isError){
        return(
            <section className="image-container">
                <h4>Um erro ocorreu... Tente mais tarde</h4>
            </section>
        );
    }

    if(response.data.results < 1){
        return(
            <section className="image-container">
                <h4>Nenhuma imagem encontrada</h4>
            </section>
        );
    }

    return(
        <section className="image-container">
            {response.data.results.map((img)=>{
                return <img className="img" key={img.id} src={img.urls.regular} alt={img.alt_description} />
            })}
        </section>
    );
};

export default Gallery
