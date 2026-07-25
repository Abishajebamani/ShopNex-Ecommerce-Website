const Input = ({ label, ...props }) => {
  return (
    <label className="block text-sm font-medium text-slate-700">
      <span className="mb-2 block">{label}</span>
      <input
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500"
        {...props}
      />
    </label>
  );
};

export default Input;
