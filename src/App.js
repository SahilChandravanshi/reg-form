import { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    interests: [],
    location: "",
    about: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
//  for validating interests 
  const [readingBooks, setReadingBooks] = useState(false);
  const [watchingMovies, setWatchingMovies] = useState(false);
  const [others, setOthers] = useState(false);

  // for validating gender
  const [gender, setGender] = useState("");


  const handleGender = () => {
    
  }

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.contact) {
      errors.lastName = "Last Name is required!";
    }

    if (!isChecked) {
      errors.gender = "Gender is required!";
    }
    if (!values.about) {
      errors.about = "About is missing";
    }
    if (values.about.length > 100) {
      errors.about = "About can be of maximum 100 characters";
    }
    if (gender.length === 0) {
      console.log("Error");
    } else {
      console.log(gender);
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>FirstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.firstName}</p>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastName}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formValues.contact}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.contact}</p>

          <div className="field">
          <input
          type="radio"
          value="Male"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <input
          type="radio"
          value="Other"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Other
          </div>
        </div>

        <div className="select">
          <br />
          <input
            type="checkbox"
            checked={readingBooks}
            onChange={(e) => {
              setReadingBooks(e.target.checked);
            }}
          />
          <label htmlFor="">Reading Books</label>

          <br />
          <input
            type="checkbox"
            checked={watchingMovies}
            onChange={(e) => {
              setWatchingMovies(e.target.checked);
            }}
          />
          <label htmlFor="">Watching Movies</label>
          <br />
          <input
            type="checkbox"
            checked={others}
            onChange={(e) => {
              setOthers(e.target.checked);
            }}
          />
          <label htmlFor="">Others</label>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            About
          </label>
          <textarea
            className="form-control"
            id="message"
            name="about"
            value={formValues.about}
            onChange={handleChange}
          />
        </div>

        <p>{formErrors.about}</p>

        <button className="fluid ui button blue primary">Submit</button>
      </form>

      {/* <Profile formValues={formValues} /> */}
      
    </div>
  );
}

export default App;
