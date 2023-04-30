import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';

const Dropdownsignup=()=> {
  const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
    console.log(selected);
  };

  return (
    <FormControl style={{ marginRight: 400,color:'white' }} required>
  <InputLabel style={{color:'white'}} shrink>Role</InputLabel>
  <Select style={{color:'white'}} displayEmpty value={selected} onChange={selectionChangeHandler}>
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={1}>user</MenuItem>
    <MenuItem value={2}>maker</MenuItem>
  </Select>
  <FormHelperText style={{color:'white'}}>Select a role</FormHelperText>
</FormControl>
  );
}

export default Dropdownsignup;