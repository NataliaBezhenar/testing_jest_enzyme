import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Box } from "../Layout/Box";

const navItems = [
  { href: "about", text: "About" },
  { href: "counter", text: "Counter" },
  { href: "jotto", text: "Jotto" },
  { href: "map", text: "Map" },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #795548;
  &.active {
    background-color: yellow;
    color: orange;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #07575b;
  }
`;

export const AppBar = () => {
  return (
    <Box as="header" p={4} height="100vh" borderRight="1px solid black">
      <Box as="nav" display="flex" flexDirection="column">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
