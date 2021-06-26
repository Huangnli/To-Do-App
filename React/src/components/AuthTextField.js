import './AuthTextField.css'

const AuthTextField = ({
  type,
  value,
  onChange,
  placeholder,
  onPressEnter
  }) => {
  return (
    <>
      <input
        className="textinput--auth"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => e.key === "Enter" && onPressEnter()}
        required
      />
    </>
  );
}

export default AuthTextField;
