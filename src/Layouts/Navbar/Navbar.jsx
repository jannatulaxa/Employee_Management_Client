import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link, NavLink } from "react-router-dom";
import useAuthProvider from "../../Components/Hooks/useAuthProvider/useAuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "../../Components/Hooks/useAxiousPublic/useAxiousPublic";

const settings = ["Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const axiosPublic = useAxiousPublic();
  const { user, logOut } = useAuthProvider();
  let pages;
  if (user) {
    pages = ["Home", "Dashboard", "ContactUs"];
  } else {
    pages = ["Home", "Dashboard", "ContactUs", "Login", "Registration"];
  }

  // Authentic Rout Setup
  const { data: UserRole = [], refetch } = useQuery({
    queryKey: ["UserRole",user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(user);
  console.log(UserRole);
  if (user) {
    refetch();
  }

  const handleLogout = () => {
    logOut();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (user) {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AccountBalanceIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pay Role
            </Typography>

            {/* For Small Device Navbar Sidebar */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) =>
                  page === "Home" ? (
                    <NavLink to={"/"} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "blue", display: "block" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  ) : page === "ContactUs" ? (
                    <NavLink to={"/ContactUs"} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "blue", display: "block" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  ) : page === "Dashboard" && UserRole.role === "admin" ? (
                    <NavLink to={`/${page}`} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "blue", display: "block" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  ) : page === "Dashboard" && UserRole.role === "Hr" ? (
                    <NavLink to={`/HRDashboard`} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "blue", display: "block" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  ) : (
                    <NavLink to={`/EMPDashboard`} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "blue", display: "block" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  )
                )}
              </Menu>
            </Box>
            <AccountBalanceIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pay Role
            </Typography>

            {/* changing  dashboard+contactus+home*/}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) =>
                page === "Home" ? (
                  <NavLink to={"/"} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ) : page === "ContactUs" ? (
                  <NavLink to={"/ContactUs"} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ) : page === "Dashboard" && UserRole.role === "admin" ? (
                  <NavLink to={`/${page}`} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ) : page === "Dashboard" && UserRole.role === "Hr" ? (
                  <NavLink to={`/HRDashboard`} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ) : (
                  <NavLink to={`/EMPDashboard`} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                )
              )}
            </Box>
            {/* changing */}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user ? (
                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                  ) : (
                    <Avatar alt="Remy Sharp" src="" />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {user ? (
                      <Typography onClick={handleLogout} textAlign="center">
                        {setting}
                      </Typography>
                    ) : (
                      <Link to={"/login"}>
                        <Typography textAlign="center">Login</Typography>
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AccountBalanceIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pay Role
            </Typography>

            {/* For Small Device Navbar Sidebar */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", color: "black" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) =>
                  page === "Home" ? (
                    <NavLink to={"/"} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: "block", color: "black" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  ) : page === "ContactUs" ? (
                    <NavLink to={"/ContactUs"} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: "block", color: "black" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  ) : page === "Registration" ? (
                    <NavLink
                      onClick={handleLogout}
                      to={`/Registration`}
                      key={page}
                    >
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: "block", color: "black" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  ) : (
                    <NavLink onClick={handleLogout} to={"/login"} key={page}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: "block", color: "black" }}
                      >
                        {page}
                      </Button>
                    </NavLink>
                  )
                )}
              </Menu>
            </Box>
            <AccountBalanceIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pay Role
            </Typography>

            {/* changing  dashboard+contactus+home*/}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) =>
                page === "Home" ? (
                  <NavLink to={"/"} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ) : page === "ContactUs" ? (
                  <NavLink to={"/ContactUs"} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ) : page === "Registration" ? (
                  <NavLink
                    onClick={handleLogout}
                    to={`/Registration`}
                    key={page}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, display: "block", color: "white" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ) : (
                  <NavLink onClick={handleLogout} to={"/login"} key={page}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, display: "block", color: "white" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                )
              )}
            </Box>
            {/* changing */}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user ? (
                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                  ) : (
                    <Avatar alt="Remy Sharp" src="" />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {user ? (
                      <Typography onClick={handleLogout} textAlign="center">
                        {setting}
                      </Typography>
                    ) : (
                      <Link to={"/login"}>
                        <Typography textAlign="center">Login</Typography>
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
export default ResponsiveAppBar;
