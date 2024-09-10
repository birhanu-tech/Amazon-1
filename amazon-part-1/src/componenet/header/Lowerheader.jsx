import React from 'react'
import { IoMdMenu } from "react-icons/io";
import classes from "./header.module.css";

function Lowerheader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <IoMdMenu />
          <p>All</p>
        </li>
        <li>Today's deal</li>
        <li>costumer service</li>
        <li>Registry</li>
        <li>Gift card</li>
        <li>sell</li>
      </ul>
    </div>
  );
}

export default Lowerheader