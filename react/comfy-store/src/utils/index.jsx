import axios  from "axios";

const productsUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: productsUrl
});

export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD',
    }).format((price/100).toFixed(2));

    return dollarsAmount;
};

export const generateAmountOptions = (number) => {
    return Array.from({ length: number }, (_, index) => {
      const amount = index + 1;
  
      return (
        <option key={amount} value={amount}>
          {amount}
        </option>
      );
    });
};
