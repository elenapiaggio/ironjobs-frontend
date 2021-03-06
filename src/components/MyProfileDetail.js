import React from 'react';
import itemsProfile from '../data/items-profile.json';

const myProfileDetails = (props) => {
  console.log(props);

  const getProfile = id => {
    const theProfile = oneProfile => {
      return oneProfile.view === id;
    }
    return itemsProfile.find(theProfile)
  };

  const { params } = props.match;
  const foundProfile = getProfile(params.id);

  return (
    <div >
      <h1>{foundProfile.view}</h1>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>View</td>
            <td>{foundProfile.view}</td>
          </tr>
          <tr>
            <td>View</td>
            <td>{foundProfile.view}
            </td>
          </tr>
          <tr>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default myProfileDetails;

