import { Link, useNavigate, useParams } from "react-router-dom";

const Navbar = ({ user, handleLogOut, handleMediaChange, media }) => {

  let params = useParams()
  let navigate = useNavigate()

  const handleScroll = (med) => {
    if (params !== "/") navigate("/")
    if (med !== media) handleMediaChange(media)
    setTimeout(() => {
      window.scrollTo({ top: 1850, behavior: 'smooth' })
    }, 500)

  }

  const handleScrollTop = () => {
    if (params !== "/") navigate("/")
     setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 500)
  }


  return (
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation" style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }}>
      <div class="navbar-brand">
        <Link to="/" class="navbar-item">
          <img src="https://i.postimg.cc/R0SznM9x/CINEMADB.png" width="112" height="28" alt="" />
        </Link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

          <a class="navbar-item"  onClick={() => handleScrollTop()}>
            Home
          </a>

         { user && <Link to="/favourites" class="navbar-item">
            <p>
              Favoritos
            </p>
          </Link>}

          <a class="navbar-item" onClick={() => handleScroll("movie")}>
            Peliculas
          </a>

          <a class="navbar-item" onClick={() => handleScroll("tv")}>
              Programas de TV
          </a>


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
                  <p class="title is-6">{user.email}</p>
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