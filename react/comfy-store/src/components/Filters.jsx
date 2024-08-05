import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
    const { meta, params } = useLoaderData();
    const {search, company, category, shipping, order, price} = params;
    return(
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            <FormInput type='search' label='procurar produto' name='search' size='input-sm' defaultValue={search} />

            <FormSelect label='selecionar categoria' name='category' list={meta.categories} size='select-sm' defaultValue={category}/>

            <FormSelect label='selecionar empresa' name='company' list={meta.companies} size='select-sm' defaultValue={company}/>

            <FormSelect label='ordenar por' name='order' list={["a-z", "z-a", "Maior preço", "Menor preço"]} size='select-sm' defaultValue={order}/>

            <FormRange label='Selecionar preço' name='price' size='range-sm' price={price}/>

            <FormCheckbox label='Frete grátis' name='shipping' defaultValue={shipping} size='checkbox-sm' />

            <button type='submit' className="btn btn-primary btn-sm"> Procurar </button>
            <Link to='/products' className='btn btn-accent btn-sm'> Limpar filtros</Link>
        </Form>
    );
};

export default Filters;
