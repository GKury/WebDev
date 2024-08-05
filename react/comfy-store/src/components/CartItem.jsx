import { useDispatch } from "react-redux";
import { removeItem, editItem } from '../features/cart/cartSlice'
import { formatPrice, generateAmountOptions } from "../utils";

/* eslint-disable react/prop-types */
const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(removeItem({ cartID:cartItem.cartID }));
    }

    const handleAmount = (e) => {
        dispatch(editItem({cartID: cartItem.cartID, amount: parseInt(e.target.value)}))
    }

    return(
            <article key={cartItem.cartID} className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
                <img src={cartItem.image} alt={cartItem.title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover' />
                <div className='sm:ml-16 sm:w-48'>
                    <h3 className='capitalize font-medium'>{cartItem.title}</h3>

                    <h4 className='mt-2 capitalize text-sm text-neutral-content'>{cartItem.company}</h4>

                    <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
                        Cor: <span className="badge badge-sm" style={{backgroundColor:cartItem.currentColor}}></span>
                    </p>
                </div>

                <div className="sm:ml-12">
                    <div className="form-control max-w-xs">
                        <label htmlFor="amount" className="label p-0">
                            <span className="label-text">Quantidade</span>
                        </label>
                        <select name="amount" id="amount" className="mt-2 select select-base select-bordered select-xs" value={cartItem.amount} onChange={handleAmount}>
                            {generateAmountOptions(cartItem.amount + 4)}
                        </select>
                    </div>
                    <button className="mt-2 link-primary link-hover text-sm" onClick={removeItemFromCart}>Remover</button>
                </div>

                <p className="font-medium sm:ml-auto">{formatPrice(cartItem.price)}</p>

            </article>
    );
};

export default CartItem;
