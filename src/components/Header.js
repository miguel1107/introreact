function Header({onLogoClick,onProfileClick,token}) {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      {token != null? <div className="container-fluid">
        <button className="navbar-brand" style={{background: "#222828",border: "0"}} onClick={onLogoClick}>
          <i className="fas fa-"></i> Three pics
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          onClick={onProfileClick}
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <i className="fas fa-user-circle"></i>
        </button>
      </div>: <div className="container-fluid navbar-brand"><h4>Logeate para continuar</h4> </div>}
    </nav>
  );
}

export default Header;
