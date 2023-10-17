import { Badge } from "@mui/material";
import React from "react";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CardWidget() {
  return (
    <Link to="/card">
      <Badge badgeContent={0}>
        <FaOpencart />
      </Badge>
    </Link>
  );
}

export default CardWidget;
