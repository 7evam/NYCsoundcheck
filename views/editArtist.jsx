const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';


function editArtist ({ artists }) {
  const artistID = artists.id;
const putURL ="/artists/" + artistID.toString()+ "/edit?_method=PUT";
console.log(putURL + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  return (
  <DefaultLayout title="">
     <div>
     <div className="columns">
     <div className="column is-one-third">
     <h1>Edit information for {artists.name}</h1>
     <form method="POST" action={putURL}>
          <div className="field">
            <div className="control">
              <input className="input" name="name" type="text" placeholder="Artist Name"/>
            </div>
          </div>
           <div className="field">
            <div className="control">
              <input className="input" name="img_url" type="text" placeholder="Image URL"/>
            </div>
          </div>
           <div className="field">
            <div className="control">
              <input className="input" name="desc" type="text" placeholder="Description"/>
            </div>
          </div>

          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
    </form>
    </div>
    </div>
    </div>
      </DefaultLayout>
      );
}

module.exports = editArtist;