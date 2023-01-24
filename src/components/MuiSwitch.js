import { Box } from "@mui/system";
import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};
