import {
  Accordion,
  AccordionSummary,
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";

const NavItem = ({ items }) => {
  const navigate = useNavigate();
  const [selectedList, setSelectedList] = useState(0);
  const handleSelect = (item) => {
    setSelectedList(item.key);
    navigate(item.path);
  };

  return (
    <ListItem sx={{ flexDirection: "column" }}>
      {items.map((item, index) => (
        <Accordion sx={{ width: "100%", boxShadow: 0 }} key={index}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDown />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>{item.panel}</Typography>
          </AccordionSummary>
          {item.childItems.map((nav) => (
            <ListItemButton
              selected={selectedList === nav.key}
              key={nav.key}
              onClick={() => handleSelect(nav)}>
              <IconButton>{nav.icon}</IconButton>
              <Typography>{nav.title}</Typography>
            </ListItemButton>
          ))}
        </Accordion>
      ))}
    </ListItem>
  );
};

export default NavItem;
