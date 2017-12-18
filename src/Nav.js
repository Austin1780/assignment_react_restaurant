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
    <nav className="navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-center">{navLinks1}</ul>
      </div>
    </nav>
  );
};

export default Nav;
