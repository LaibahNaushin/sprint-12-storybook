import "./Input.css";

export default function Input({
  label = "Email",
  placeholder = "Enter your email",
  type = "text",
  disabled = false,
  error = false,
  errorMessage = "Please enter a valid value",
}) {
  return (
    <div className="ui-input-wrapper">
      <label className="ui-input-label">{label}</label>

      <input
        className={`ui-input ${error ? "ui-input--error" : ""}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error}
      />

      {error && (
        <span className="ui-input-error">
          {errorMessage}
        </span>
      )}
    </div>
  );
}