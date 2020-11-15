import React from 'react';
import "../App.css";
import "./OrganizationCard.css";
import { Link } from "react-router-dom";


export default function OrgCard({orgName}) {
  return(
    <div className="card">
      <Link to="/history">
        <img src="https://source.unsplash.com/random/150x150" alt="random" /> 
        <h2>{orgName}</h2>
      </Link>
    </div>
  );
}