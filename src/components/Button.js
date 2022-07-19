import PropTypes from "prop-types";
import React from "react";
import { Grid } from "@mui/material";
export const Button = ({ color, text, onClick }) => {
  return (
    <Grid container justify="flex-end">
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </Grid>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
