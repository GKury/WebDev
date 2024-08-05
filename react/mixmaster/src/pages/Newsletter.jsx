import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async({request}) =>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await axios.post(newsletterUrl, data);
        toast.success('Inscrição feita! Cheque seu email!');
        return redirect('/');
    } catch (error) {
        toast.error(error?.data?.msg)
        return error;
    }
};

const Newsletter = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return(
        <Form className="form" method="POST">
            <h4 style={{textAlign:'center', marginBottom:'2rem'}}>Nosso newsletter</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">nome</label>
                <input type="text" required className="form-input" name="name" id="name"/>
            </div>

            <div className="form-row">
                <label htmlFor="LastName" className="form-label">sobrenome</label>
                <input type="text" required className="form-input" name="lastName" id="LastName"/>
            </div>

            <div className="form-row">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" value='test@test.com' readOnly className="form-input" name="email" id="email"/>
            </div>

            <button type="submit" disabled={isSubmitting} style={{marginTop:'0.5rem'}} className="btn btn-block">{isSubmitting? 'Enviando' : 'Enviar'}</button>
        </Form>
    );
};

export default Newsletter;
