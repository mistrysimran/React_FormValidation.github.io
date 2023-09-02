
export default function Input({ id, type, label, placeholder, register, errorMessage }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} {...register} />
            <span className="error-message">{errorMessage}</span>
        </div>
    )
}