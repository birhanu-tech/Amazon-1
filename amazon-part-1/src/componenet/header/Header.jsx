import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css"

function Header() {
  return (
    <>
      <section>
        <dev className={classes.header__container}>
          <div className={classes}>
            {/* logo */}
            <div className={classes.logo__container}>
              <a href="">
                {" "}
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon log"
                />
              </a>
              <dev className={classes.delivery}>
                {/* delivery */}
                <span>
                  <CiLocationOn />
                </span>
                <div>
                  <p>deliverd to</p>
                  <span>Ethiopia</span>
                </div>
              </dev>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}

            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <FaSearch size={23} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <div>
              <a href="" className={classes.language}>
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg"
                  alt=""
                />
                <section>
                  <option value="">EN</option>
                </section>
              </a>
            </div>
            {/* three component */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Liats</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </dev>
      </section>
    </>
  );
}

export default Header