import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Update state with the new input value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    // Handle search logic here
    if (searchTerm){
      navigate(`/search/${searchTerm}`)


    }
    
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm} // Set the value to the state variable
        onChange={handleInputChange} // Update state on input change
        style={{ border: 'none', outline: 'none', flex: 1 }} // Ensure input takes available space and looks integrated
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
