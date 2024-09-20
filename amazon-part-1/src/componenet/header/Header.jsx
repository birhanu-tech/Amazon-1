import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css"
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import Lowerheader from './Lowerheader';

function Header() {
  const [{basket},dispatch] = useContext(DataContext)
  console.log(basket)
  return (
    <>
      <section className={classes.fixed}>
        <dev className={classes.header__container}>
          <div className={classes}>
            {/* logo */}
            <div className={classes.logo__container}>
              <Link to="/">
                {" "}
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon log"
                />
              </Link>
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
              <Link to="" className={classes.language}>
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg"
                  alt=""
                />
                <section>
                  <option value="">EN</option>
                </section>
              </Link>
            </div>
            {/* three component */}
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Liats</span>
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </dev>
        <Lowerheader />
      </section>
    </>
  );
}

export default Header