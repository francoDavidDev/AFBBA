// components/form/FormSelect.jsx
const FormSelect = ({ label, name, value, onChange, options, error }) => (
  <div className="flex flex-col w-full">
    <label htmlFor={name} className="text-sm font-medium text-gray-600">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded"
    >
      <option value="">Seleccionar {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <span className="text-red-500">{error}</span>}
  </div>
);
export default FormSelect;
