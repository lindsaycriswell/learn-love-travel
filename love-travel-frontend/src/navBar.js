import React from "react";

const NavBar = props => {
  return (
    <div class="ui inverted menu">
      <a class="active item">Home</a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon" />
          </div>
        </div>
        <a class="ui item">Logout</a>
      </div>
    </div>
  );
};

export default NavBar;
