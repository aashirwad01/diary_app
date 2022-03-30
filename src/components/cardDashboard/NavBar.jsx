import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../modals/modalReducer";
import { signInUser, signOutUser } from "../auth/authActions";
import { toast } from "react-toastify";
import { currentAppUser, signOutFirebase } from "../firestore/firebaseServices";
import { handleUserCard } from "../../pages/DashBoard";

const settings = [
  {
    id: "1",
    value: "Home",
  },
  {
    id: "2",
    value: "Dashboard",
  },
  {
    id: "3",
    value: "LogOut",
  },
  {
    id: "4",
    value: "Close ✖",
  },
];

function LinkTab(props) {
  let navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        navigate(`${props.href}`);
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavBar() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [toggleMenu,setToggleMenu]=React.useState(false)
  const [tabvalue, setTabValue] = React.useState(0);
  // const [authenticated,setAuthentication]=React.useState(false);

  const { authenticated } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.auth);

  async function handleSignOut() {
    try {
      await signOutFirebase();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleLoginCard = () => {
    dispatch(openModal({ modalType: "LoginForm" }));
    // handleUserCard();
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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

  const handleCloseUserMenu = (event) => {
    var menuValDom = event.currentTarget.querySelector("li span");
    if (menuValDom) {
      var menuVal = menuValDom.innerText;
    }

    if (menuVal === "LogOut") {
      handleSignOut();
      // setAuthentication(false)
      navigate("/");
    }
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={currentUser ? currentUser.email : "e"}
                  src="/static/images/avatar/2.jpg"
                />
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
              // Boolean(anchorElUser)
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  {authenticated ? (
                    <Typography
                      component={"span"}
                      textAlign="center"
                      onClick={() => navigate(`/${setting.value}`)}
                    >
                      {setting.value}
                    </Typography>
                  ) : (
                    <Typography component={"span"} textAlign="center">
                      {setting.id === "3" ? (
                        <Typography
                          component={"span"}
                          onClick={() => handleLoginCard()}
                        >
                          Login
                        </Typography>
                      ) : (
                        setting.value
                      )}
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {!authenticated && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                handleLoginCard();
              }}
            >
              Login
            </Button>
          )}
          {!authenticated && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatch(openModal({ modalType: "RegisterForm" }));
              }}
            >
              Register
            </Button>
          )}

          {authenticated && (
            <Box>
              <Tabs
                value={tabvalue}
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <LinkTab label="Add Diary" href="/add" />
                <LinkTab label="View Diary" href="/" />
              </Tabs>
            </Box>
          )}

          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/sandbox")}
          >
            SandBox
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
