import "../../styles/headerComponent.css";

const Header = ({ headerValue }) => {
  return (
    <div className="header">
      <h1>{headerValue.toUpperCase()}</h1>
    </div>
  );
};

export default Header;
