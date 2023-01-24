import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  console.log({ countries });
  const handleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="select country"
        value={countries}
        fullWidth
        SelectProps={{ multiple: true }}
        onChange={handleChange}
        select
        size="small"
        color="secondary"
        helperText='please select your country'
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
};
