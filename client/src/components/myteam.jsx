import React from 'react';
import ProfileCard from './profileCard.jsx';
import TeamTable from './teamTable.jsx';


const MyTeam = (props) => {
  return (
  <div>

   <ProfileCard/>

   <TeamTable players={props.players}/>

  </div>

    );
  }

export default MyTeam
