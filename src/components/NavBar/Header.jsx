import favicon from "../../assets/favicon.ico";

export const Header = () => {
  return (
    <div className="header">
      <span>Kick</span>
      <img className="favicon" src={favicon} />
      <input id="input-search" type="search"></input>
    </div>
  );
};
