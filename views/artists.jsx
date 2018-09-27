import React from 'react';

export default ({ title, artists }) => (
  <DefaultLayout title="NYC Artists">
  	artists.map(artists => (
	<h1>{artists.name}</h1>	
  	))

  </DefaultLayout>

  )