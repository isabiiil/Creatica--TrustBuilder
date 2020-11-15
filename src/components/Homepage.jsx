import React from 'react';
import "../App.css";
import OrgCard from "./OrganizationCard";

export default function Home() {
  return (
    <div className="homepage">
      <h1>Choose which nonprofit/politician to investigate:</h1>
      <div className="cardRow">
        <OrgCard orgName="UNICEF" />
        <OrgCard orgName="WHO" />
        <OrgCard orgName="St. Jude's" />
        <OrgCard orgName="HackGuild" />
        <OrgCard orgName="Andrew Cuomo" />
        <OrgCard orgName="Kamala Harris" />
      </div>
  </div>
  );
}