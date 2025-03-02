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
        className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
      />
    </div>
  );
}

export default InputField;
