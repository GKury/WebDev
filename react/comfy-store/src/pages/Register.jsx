import { Link, Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from "../utils";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        // eslint-disable-next-line no-unused-vars
        const response = await customFetch.post('/auth/local/register', data);
        toast.success('Conta criada');
        return redirect('/login');
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'Cheque suas credenciais';
        toast.error(errorMessage);
        return null;
    }
}

const Register = () => {
    return(
        <section className="h-screen grid place-items-center">
            <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gao-y-4" >
                <h4 className="text-center text-3xl font-bold">Criar conta</h4>
                <FormInput type='text' label='Nome de usuário' name='username'/>
                <FormInput type='email' label='Email' name='email'/>
                <FormInput type='password' label='Senha' name='password'/>

                <div className="mt-4">
                    <SubmitBtn text='Criar conta' />
                </div>

                <p className="text-center">Já tem conta? <Link className="ml-2 link link-hover link-primary capitalize" to='/login'>logar</Link> </p>
            </Form>
        </section>
    );
};

export default Register;
