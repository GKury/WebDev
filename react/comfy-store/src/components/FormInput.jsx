// eslint-disable-next-line react/prop-types
const FormInpunt = ({ label, name, type, defaultValue, size }) => {
    return(
        <div className="form-control">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input className={`input input-bordered ${size}`} type={type} name={name} defaultValue={defaultValue}/>
        </div>
    );
};

export default FormInpunt;
