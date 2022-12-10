import React from "react";
import { Button ,Text} from "@chakra-ui/react";
import Resume from "./Sonia_Saini_Resume.pdf"

// import { NavLink as Link, useLocation } from "react-router-dom";
import  {Link} from "react-scroll"
function NavLink({ to, name, onClose, ...rest }) {
  // const location = useLocation();

  // const isActive = location.pathname === to;

  return (
   name=="RESUME"?<Button border={"2px solid blue"}  color="blue" as="a" bg={"blue.200"} href={Resume} download={"Sonia_Saini_Resume.pdf"}>{name}</Button>: <Link to={to} spy={true} smooth={true} offset={-15} duration={1000} onClick={onClose}>
      <Text
      color={"white"}
        _hover={{
            color:"blue",
            borderBottom:"2px solid blue",
            cursor:"pointer"
        }}
        size="sm"
         
        {...rest}
      >
        {name}
      </Text>
    </Link>
  );
}

export default NavLink;