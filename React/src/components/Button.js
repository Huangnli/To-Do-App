import './Button.css';

const Button = ({
  children,
  onClick,
  type,
  className
  }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
