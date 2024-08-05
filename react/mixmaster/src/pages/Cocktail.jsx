import { Link, useLoaderData, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
    return{
        queryKey:['cocktail', id],
        queryFn: async () => {
            const {data} = await axios.get(`${singleCocktailUrl}${id}`);
            return data;
        }
    }
}

export const loader = (queryClient) =>async({params}) => {
    const {id} = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return {id};
}

const Cocktail = () => {
    const { id } = useLoaderData();

    const {data} = useQuery(singleCocktailQuery(id))

    if(!data) return <Navigate to='/' />;

    const singleDrink = data.drinks[0];

    const{strDrink:name, strDrinkThumb:image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions} = singleDrink;

    const ingredients = [];
    for (let ingridient = 1; ingridient < 16; ingridient++) {
        const key = 'strIngredient' + ingridient
        if(singleDrink[key] === null) continue;
        ingredients.push(singleDrink[key])
    }

    return(
        <Wrapper>
            <header>
                <Link to='/' className="btn">Voltar para página inicial</Link>
                <h3>{name}</h3>
            </header>
            <div className="drink">
                <img src={image} alt={name} className="img"/>
                <div className="drink-info">
                    <p>
                        <span className="drink-data">nome:</span>{name}
                    </p>
                    <p>
                        <span className="drink-data">categoria:</span>{category}
                    </p>
                    <p>
                        <span className="drink-data">info:</span>{info}
                    </p>
                    <p>
                        <span className="drink-data">Recipiente:</span>{glass}
                    </p>
                    <p>
                        <span className="drink-data">Ingredientes:</span>{ingredients.map((ingredient, index) => {
                            if(index === ingredients.length - 1) return <span key={ingredient} className="ing">{ingredient}</span>;
                            return (<span className="ing" key={ingredient}>{(ingredient + ',')}</span>)
                        })}
                    </p>
                    <p>
                        <span className="drink-data">instruções:</span>{instructions}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Cocktail;
