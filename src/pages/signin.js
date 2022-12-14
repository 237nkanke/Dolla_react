import { useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { NavLogo } from "./signinElement";
import "./signin.css";
const Signin = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const history =   useNavigate();
  const Submit = (event) => {
    event.preventDefault();
    // the preventdefault method will prevent the default reaction to occure and can do your own
    const enteredname = nameRef.current.value;
    const enteredemail = emailRef.current.value;
    const enteredcountry = countryRef.current.value;

    const meetup = {
      name: enteredname,
      email: enteredemail,
      country: enteredcountry,
    };
    console.log("go");
    fetch(
      "https://ncoding-f83b2-default-rtdb.firebaseio.com/signin.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history('/Dolla_react', {replace: true}); 
      // history.push will help us go to the next page but we could still use the back button to come back
      // history.replace will help us go to the next page but we could not come back to the prviose page
  });

  };
  return (
    <div className="sign">
      <div className="lk">
        <NavLogo to="/Dolla_react">N-CODING</NavLogo>
      </div>
      <div className="login_card">
        <h1>Welcome</h1>
        <form onSubmit={Submit}>
          <div className="input_field">
            <input type="text" id="name" name="name" required ref={nameRef} />
            {/* <span></span> */}
            <label htmlFor="name">name</label>
          </div>
          <div className="input_field">
            <input
              type="email"
              id="email"
              name="email"
              required
              ref={emailRef}
            />
            {/* <span></span> */}
            <label htmlFor="email">Email</label>
          </div>
          <div className="input_field">
            <input
              type="text"
              id="country"
              name="tel"
              required
              ref={countryRef}
            />
            {/* <span></span> */}
            <label htmlFor="country">country</label>
          </div>
          <button>Submit</button>
          {/* <input type="submit" name="submit" value="Send" /> */}
        </form>
      </div>
    </div>
  );
};

export default Signin;
