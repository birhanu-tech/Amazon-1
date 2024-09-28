import React from 'react'
import "./sighnup.module.css"
import LayOut from '../../componenet/LayOut/LayOut'
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <LayOut>
      <section>
        {/* logo */}
        <Link>
          {/* <img src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" alt="" /> */}
        </Link>
        {/* form */}
        <div className={ClassNames.login_container}>
          <h1>sign In</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button>Sign In</button>
          </form>
        </div>
      </section>
    </LayOut>
  );
}

export default Signup