import "./Button.css";

export default function Button({
  label = "Button",
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`ui-button ui-button--${variant} ui-button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}