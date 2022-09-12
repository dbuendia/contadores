// Crear el boton
// Implementarlo primero como componente sin mas
// Luego probar lo de children
// Luego crear clases dinámicas "bonitas"

function Button({ type, onClick, children }) {
  function getButtonStyle() {
    let buttonStyle;
    if (type === "primary") buttonStyle = "primary";
    if (type === "danger") buttonStyle = "danger";
    return `btn ${buttonStyle}`;
  }
  return (
    <button className={getButtonStyle()} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
