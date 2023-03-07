import NavMenu from "../Components/NavMenu";
import SocialMenu from "../Components/SocialMenu";

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
