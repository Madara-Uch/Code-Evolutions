import React from 'react';
import Link from '@mui/material/Link';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar(props) {
  console.log(props);
  return (
    <div>
    <nav className="navbar">
        <div className="links">
        <Link href="signin" variant="body2">
            <LoginIcon></LoginIcon>
        </Link>
        <Link href="signup" variant="body2">
            <LogoutIcon></LogoutIcon>
        </Link>
        </div>
    </nav>
    {props.children}
    </div>

  )
}

export default NavBar