import NavLink from "./NavLink";

export const navLinks = [
  { name: "Menu", 
   path: "/" 
  },
  {
    name: "Charcuteria",
    path: "/charcuteria",
  },
  {
    name: "Carniceria",
    path: "/carniceria",
  },
  {
    name: "",
    path: "/blog",
  },
  {
    name: <NavLink item="Contact Us" />,
    path: "#contact",
  },
];