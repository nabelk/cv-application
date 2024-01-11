export function Input({ label, placeholder, value, onChange }) {
    const id = label.replace(/\s+/g, '');
    return (
        <>
            <label htmlFor={id}>{label}</label>
            {label.includes('date') ? (
                <input type='date' id={id} />
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
