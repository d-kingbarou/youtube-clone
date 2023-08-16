import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../constants/constants';
import { SearchBar } from '../components';

const Navbar = () => (
  
  // Stack style navigation
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', background: '#000', top:0, justifyContent:'space-between' }}
    >
      <Link to="/" style={{ display: 'flex', alignItems:'center'}}>
        <img src={logo} alt='logo' height={45} />
      </Link>

      {/* importing SearchBar function -- file located in components folder */}
      <SearchBar />
    </Stack>
)

export default Navbar;