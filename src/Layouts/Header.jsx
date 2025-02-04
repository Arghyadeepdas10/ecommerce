import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux toolkit/Slice/authSlice';

const Header = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const settings = ['Logout'];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseUserMenu = (setting) => {
        if(setting === 'Logout')
        {
            dispatch(logout());
            navigate("/login");
        }
        setAnchorElUser(null);
      };

  return (
    <>
    <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                    <Link className="text-dark" to="">FAQs</Link>
                    <span className="text-muted px-2">|</span>
                    <Link className="text-dark" to="">Help</Link>
                    <span className="text-muted px-2">|</span>
                    <Link className="text-dark" to="">Support</Link>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="text-dark pl-2" to="">
                        <i className="fab fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <Link to="" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </Link>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=> handleCloseUserMenu(setting)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            </div>
        </div>
    </div>
   

    <div className="container-fluid">
        <div className="row border-top px-xl-5">
           
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <Link to="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav me-auto py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                                    <Link to="/cart" className="nav-item nav-link">Shopping Cart</Link>
                                    <Link to="/checkout" className="nav-item nav-link">Checkout</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        {/* <div className="navbar-nav ms-auto py-0">
                            <Link to="/register" className="nav-item nav-link">Register</Link>
                        </div> */}
                    </div>
                </nav>
                
        </div>
    </div>
    </>
  )
}

export default Header