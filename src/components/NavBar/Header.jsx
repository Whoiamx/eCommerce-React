import favicon from "../../assets/favicon.ico";

export const Header = () => {
  return (
    <div className="header">
      <span className="max-letter">Kick</span>
      <img className="favicon" src={favicon} />
      <input id="input-search" type="search"></input>
    </div>
  );
};
