import React from 'react';
import Exercise from '../components/Exercise.jsx';

const MainContainer = () => {
  // insert any logic for the MainContainer here, including (potentially):
  // 
  return (
  <div>
    {/* this p tag just helps us see where this MainContainer is being rendered */}
    <p>This is the MainContainer in Client/containers/MainContainer.jsx</p>
    {/* insert search bar here (input textbox and submit button) */}
    <label name="searchBar">
        Search:
        <input id="searchQ" />
    </label>
    
    
    {/* Exercises are individual search results from query to database/API */}
    <Exercise/>
  </div>)
}
export default MainContainer;