import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  // empty search term state & function to set searchTerm
  const [searchTerm, setSearchTerm] = useState([]);

  // function to navigate to specific url
  const navigate = useNavigate();

  // handling submission of searchTerm
  const handleSubmit = (e) => {
    // statement to prevent web refresh on new searchTerm submitted
    e.preventDefault();

    // navigate to specific url if searchTerm exists
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      // resets searchTerm to empty string once navigated
      setSearchTerm('');
    }
  }

  return (
    <Paper 
     component="form"
     onSubmit={handleSubmit}
     sx={{ borderRadius:20, border:'1px solid #ee3e3e3', pl: 2, boxShadow:'none', mr: { sm: 5 } }}
    >
      <input
       className='search-bar'
       placeholder='Search'
       value={searchTerm}
       onChange={(e) => {setSearchTerm(e.target.value)}} 
      />
      <IconButton type='submit' sx={{ p:'10px', color: 'red'}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar