import { SectionTitle, ProductsGrid } from "./index";

const FeaturedProducts = () => {
    return(
        <div className="pt-24">
            <SectionTitle text='Produtos em destaque'/>
            <ProductsGrid />
        </div>
    );
};

export default FeaturedProducts;
