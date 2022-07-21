import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogOut }) => {

  return (
    <nav class="navbar is-primary has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/" class="navbar-item">
          <img src="https://i.postimg.cc/R0SznM9x/CINEMADB.png" width="112" height="28" alt="" />
        </Link>

        <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

          <Link to="/" class="navbar-item">
            <p>
              Home
            </p>
          </Link>

          <Link to="/404" class="navbar-item">
            <p>
              Peliculas
            </p>
          </Link>

          <Link to="/404" class="navbar-item">
            <p>
              Programas de TV
            </p>
          </Link>

          <Link to="/404" class="navbar-item">
            <p>
              Personas
            </p>
          </Link>

          <div class="navbar-item has-dropdown is-hoverable">
            <p class="navbar-link">
              Mas...
            </p>

            <div class="navbar-dropdown">
              <Link to="/404" class="navbar-item">
                <p>
                  Jobs
                </p>
              </Link>
              <Link to="/404" class="navbar-item">
                <p>
                  Contact
                </p>
              </Link>

              <hr class="navbar-divider" />
              <Link to="/404" class="navbar-item">
                <p>
                  Report an issue
                </p>
              </Link>

            </div>
          </div>
        </div>


        <div class="navbar-end">
          <div class="navbar-item">

            {user ?
              <div class="buttons">
                <div style={{ paddingRight: 13 }}>
                  <p class="title is-6">{user}</p>
                </div>
                <p class="button is-light" onClick={handleLogOut}>
                  Log out
                </p>
              </div>
              :

              <div class="buttons">

                <Link to="/signup">
                  <a href="" class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                </Link>

                <Link to="/login">
                  <a href="/" class="button is-light">
                    Log in
                  </a>
                </Link>

              </div>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar