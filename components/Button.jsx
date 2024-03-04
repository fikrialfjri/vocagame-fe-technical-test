const Button = ({
  type,
  onClick,
  children,
  block = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`inline-block rounded-full bg-primary-100 px-6 py-3 text-base font-medium text-primary-400 duration-150 hover:brightness-90 disabled:bg-gray-200 disabled:text-neutral-600 disabled:hover:brightness-100 disabled:transform-none disabled:transition-none disabled:cursor-not-allowed disabled:hover: dark:bg-primary-400 dark:text-primary-100 ${
        block ? "w-full" : "w-fit"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
