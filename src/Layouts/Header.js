import { useLocation } from "react-router-dom";
import NavMenu from "../Components/NavMenu";

const Header = () => {
  return (
    <header className="backgroundHeader">
      <div className="navMenuWrapper">
        <div className="navMenus">
          <NavMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
