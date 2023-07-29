// import { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaPlayCircle, FaUserTie } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
// import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  //   const { user, logoutUser } = useContext(AuthContext);

  //   const handleLogout = () => {
  //     logoutUser()
  //       .then(() => {
  //         // Sign-out successful.
  //       })
  //       .catch(() => {
  //         // An error happened.
  //       });
  //   };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <img src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" className="text-white-dim border-0"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-md-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-green"
                    : "navlink me-md-4 mb-md-0 mb-2 text-white-dim"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/all-toys"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-green"
                    : "navlink me-md-4 mb-md-0 mb-2 text-white-dim"
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/my-toys"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-green"
                    : "navlink me-md-4 mb-md-0 mb-2 text-white-dim"
                }
              >
                Benefit
              </NavLink>
              <NavLink
                to="/add-toy"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-green"
                    : "navlink me-md-4 mb-md-0 mb-2 text-white-dim"
                }
              >
                Pricing
              </NavLink>
            </Nav>
            <Link to="/" className="text-white-dim me-4">
                How it works
                <FaPlayCircle className="ms-2 text-green bg-white rounded-circle"/>
            </Link>

            {/* {user ? (
              <>
                {!user.photoURL ? (
                  <FaUserTie className="user me-md-3" />
                ) : (
                  <Image
                    src={user?.photoURL}
                    className="profile-picture mx-md-3"
                    roundedCircle
                    title={user?.displayName}
                  />
                )} */}
            {/* <Link to="/login">
              <Button
                className="btn btn-solid-secondary py-2 px-4 d-block d-md-inline-block mt-2 mt-md-0 shadow-lg btn-sm"
                // onClick={handleLogout}
              >
                Log out
              </Button>
            </Link> */}
            {/* </>
            ) : ( */}
            <Link to="/login">
              <Button className="btn-solid-secondary py-2 px-4 d-block d-md-inline-block mt-2 mt-md-0 shadow-lg btn-sm">
                Login
              </Button>
            </Link>
            {/* )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
