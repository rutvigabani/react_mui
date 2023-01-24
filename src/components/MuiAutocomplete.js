import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

// type Skill = {
//     id:number
//     label: string
// }
const skills = ["HTML", "css", "javascript", "typescript", "react"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
export const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log(skill);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        // freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={handleChange}
      />
    </Stack>
  );
};
