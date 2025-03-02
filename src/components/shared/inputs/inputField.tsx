function InputField({ label, type, placeholder, value, onChange, id }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border rounded-lg border-red-400 "
      />
    </div>
  );
}

export default InputField;
