import React from "react";

const Nav = ({ navLinks }) => {
  const navLinks1 = navLinks.map(links => {
    const { name, link } = links;

    return (
      <li>
        <a href={link}>{name}</a>
      </li>
    );
  });

  return (
    <nav className="navbar sticky-top" role="navigation">
      <div>
        <ul className="nav navbar-nav navbar-center">{navLinks1}</ul>
      </div>
    </nav>
  );
};

export default Nav;
