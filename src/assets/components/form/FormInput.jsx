// components/form/FormInput.jsx
const FormInput = ({ label, name, value, onChange, error, type = "text", placeholder }) => (
  <div className="flex flex-col w-full">
    <label htmlFor={name} className="text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded"
      placeholder={placeholder}
    />
    {error && <span className="text-red-500">{error}</span>}
  </div>
);
export default FormInput;
