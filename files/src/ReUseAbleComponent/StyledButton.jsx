import React from "react";
import { Button } from "@mui/material";

const StyledButton = ({ title, validation, onClick, width, mode, size, font }) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: size ? "8px" : "12px",
        cursor: "pointer",
        backgroundColor: mode ? "white" : "#5081ff",
        color: mode ? "black" : "white",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2);",
        "&:hover,& .css-hnghlo-MuiButtonBase-root-MuiButton-root": {
          color: "white",
          backgroundColor: "#285de2",
        },
        width: width || "100%",
        fontFamily: "Poppins, sans-serif",
        fontSize: font ? font : '13px'
      }}
      className="swiper-btn"
      size={size ? "small" : "medium"}
      disabled={validation}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default StyledButton;
