import React from 'react';
import "./Profile.css";

export default function Profile(props) {
  return (
    <>
      <div class="card-container">
        <h3>{`
          ${props.formValues.firstName} 
          ${props.formValues.lastName}
          `}</h3>
        <h6>New York</h6>
        <p>User interface designer and <br /> front-end developer</p>
        <div class="buttons">
          <button class="primary ghost">
          Email: {props.formValues.email}
          </button>
        </div>
        <div class="skills">
          <h6>Other Details</h6>
          <ul>
            <li>Gender: </li>
            <li>Interests: </li>
          </ul>
        </div>
      </div>
    </>
  );
}
