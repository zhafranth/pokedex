import React from "react";
import { Wrapper, Select } from "./_components";
import LanguageIcon from "@mui/icons-material/Language";

const TopNavbar = () => {
  return (
    <Wrapper>
      <LanguageIcon fontSize="small" color="disabled" />
      <Select>
        <option value="en">English</option>
        <option value="id">Indonesia</option>
      </Select>
    </Wrapper>
  );
};

export default TopNavbar;
