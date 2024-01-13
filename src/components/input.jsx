import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Input({ label, placeholder, value, onChange }) {
    const id = label.replace(/\s+/g, '');
    return (
        <>
            <label htmlFor={id}>{label}</label>
            {label.includes('date') ? (
                <div>
                    <DatePicker selected={value} onChange={onChange}></DatePicker>
                </div>
            ) : (
                <input
                    id={id}
                    type='text'
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            )}
        </>
    );
}
