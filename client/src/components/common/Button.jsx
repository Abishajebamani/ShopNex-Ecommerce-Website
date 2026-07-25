const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const base = "rounded-xl px-4 py-2 font-semibold transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    ghost: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
