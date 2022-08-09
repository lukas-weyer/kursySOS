import { useState } from "react";

import { useUser } from "../hooks/User";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from "../public/logo.jpeg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const user = useUser();

  const triger = useScrollTrigger();

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

  return (
    <>
      <Slide appear={false} direction="down" in={!triger}>
        <AppBar
          color="inherit"
          sx={{
            boxShadow: "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
            color: "rgb(45, 55, 72)",
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
          <Container component="nav" maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  display: { xs: "none", md: "flex" }
                }}
              >
                <Image
                  src={logo}
                  alt="logo Kursy SOS"
                  layout="fixed"
                  width={30}
                  height={30}
                />
                <Link scroll={false} href="/" passHref>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      ml: 2,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                      cursor: "pointer"
                    }}
                  >
                    KURSY SOS
                  </Typography>
                </Link>
              </Box>

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
                    horizontal: "left"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" }
                  }}
                >
                  <Link scroll={false} href="/blog" passHref>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Blog</Typography>
                    </MenuItem>
                  </Link>
                  <Link scroll={false} href="/kursy" passHref>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Kursy</Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </Box>
              <Link scroll={false} href="/" passHref>
                <Typography
                  variant="h5"
                  noWrap
                  component="span"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                >
                  KURSY SOS
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link scroll={false} href="/blog" passHref>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "inherit", display: "block" }}
                  >
                    blog
                  </Button>
                </Link>
                <Link scroll={false} href="/kursy" passHref>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "inherit", display: "block" }}
                  >
                    kursy
                  </Button>
                </Link>
              </Box>

              {user && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
              {!user && (
                <>
                  <Box
                    sx={{
                      flexGrow: 0,
                      display: { xs: "none", md: "inline-flex" }
                    }}
                  >
                    <Link href="/logowanie" passHref>
                      <Button>zaloguj się</Button>
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 0,
                      display: { xs: "inline-flex", md: "none" }
                    }}
                  >
                    <Link href="/logowanie" passHref>
                      <IconButton aria-label="zaloguj się">
                        <LoginIcon color="primary" />
                      </IconButton>
                    </Link>
                  </Box>
                </>
              )}
            </Toolbar>
          </Container>
          <Divider />
        </AppBar>
      </Slide>
    </>
  );
};
export default ResponsiveAppBar;
