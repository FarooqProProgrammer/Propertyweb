import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const features = [
    {
      title: "Investing in USA",
      data: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      title: "Purchase Process",
      data: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      title: "Residency Permits & Visas",
      data: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      title: "Your Pets & Cars",
      data: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      title: "Property Taxes",
      data: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      title: "Living in USA",
      data: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
  ];
  return (
    <Box
      sx={{
        width: "300px",
        height: "90vh",
        background: "#e6e2d7",
        padding: "10px 5px",
      }}
    >
      <Typography variant="h4" sx={{ color: "#72685f", fontFamily: "serif" }}>
        Turkish Property Investment
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        {features.map((feature, i) => (
          <Accordion
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            sx={{ boxShadow: "none", backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                {feature.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{feature.data}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        {/* <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              Investing in turkey
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              Purchase Process
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              Residency Permits & Visas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              Your Pets & Cars
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          sx={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              Property Taxes
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          sx={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              Living in turkey
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        <Link style={{ color: "black" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "600", paddingLeft: "16px", paddingTop: "5px" }}
          >
            Download complete buyer guide
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
