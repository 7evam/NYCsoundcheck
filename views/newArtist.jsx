const React = require('react');
const PropTypes = require('prop-types');

import DefaultLayout from './DefaultLayout';

export default ({  }) => (
  <DefaultLayout title="Books!">
     <div>
     <div className="columns">
     <div className="column is-one-third">
     <h1>Add a New Artist</h1>
     <form method="POST" action="/artists">
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
)