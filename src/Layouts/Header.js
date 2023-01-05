import NavMenu from "../Components/NavMenu";
import SocialMenu from "../Components/SocialMenu";

const Header = () => {
  return (
    <header className="backgroundHeader">
      <div className="navMenuWrapper">
        <div className="navMenus">
          <NavMenu />
          <SocialMenu />
        </div>
      </div>
      <section className="home">
        <h1>Gabriel Costa Gimenes</h1>
        <h2>Junior software developer</h2>
      </section>
    </header>
  );
};
export default Header;
