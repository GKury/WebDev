/* eslint-disable react-refresh/only-export-components */
import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action = (store) => async({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        // eslint-disable-next-line no-unused-vars
        const response = await customFetch.post('/auth/local', data);
        store.dispatch(loginUser(response.data));
        toast.success('Login realizado');
        return redirect('/');
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'Cheque suas credenciais';
        toast.error(errorMessage);
        return null;
    }
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginGuestUser = async() => {
        try {
            const response = await customFetch.post('/auth/local', {
                identifier:'test@test.com',
                password: 'secret'
            });
            dispatch(loginUser(response.data));
            toast.success('Logado como convidado');
            navigate('/');
        } catch (error) {
            toast.error("Um erro ocorreu. Tente novamente mais tarde");
        }
    };

    return(
        <section className="h-screen grid place-items-center">
            <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput type='email' label='Email' name='identifier' />
                <FormInput type='password' label='Senha' name='password' />
                <div className="mt-4">
                    <SubmitBtn text='Login' />
                </div>
                <button type="button" className="btn btn-secondary btn-block" onClick={loginGuestUser}>Entrar como convidado</button>
                <p className="text-center">
                    Ainda não têm conta? <Link to='/register' className="ml-2 link link-hover link-primary capitalize" >Criar conta</Link>
                </p>
            </Form>
        </section>
    );
};

export default Login;
