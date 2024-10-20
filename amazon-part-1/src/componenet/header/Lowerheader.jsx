// import React from 'react'
// import { IoMdMenu } from "react-icons/io";
// import classes from "./header.module.css";

// function Lowerheader() {
//   return (
//     <div className={classes.lower_container}>
//       <ul>
//         <li>
//           <IoMdMenu />
//           <p>All</p>
//         </li>
//         <li>Today's deal</li>
//         <li>costumer service</li>
//         <li>Registry</li>
//         <li>Gift card</li>
//         <li>sell</li>
//       </ul>
//     </div>
//   );
// }

// export default Lowerheader

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import classes from "./header.module.css";

function Lowerheader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={classes.lower_container}>
       {/* Hamburger icon */}
      <div className={classes.hamburger} onClick={toggleMenu}>
        <IoMdMenu size={30} />
        <p>All</p>
      </div>

      <ul className={`${classes.menu} ${isMenuOpen ? classes.show : ""}`}>
        <li>Today's deal</li>
        <li>Customer service</li>
        <li>Registry</li>
        <li>Gift card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default Lowerheader;

