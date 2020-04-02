
[Live Demo](https://glacial-falls-33377.herokuapp.com/)

## Open Call

A marketplace web app allowing artists to submit works for review and selection by institutions. There are two types of users, artists and organizations. Artists can signup and upload their artworks into portfolios. Organizations can signup and post open calls for artwork submissions. Artists can submit selected portfolio images to an open call for review by the organization. An organization can select a finalist artist for each of their respective open calls.

Built at [@flatiron-school](https://github.com/flatiron-school) with [@wrfeng](https://github.com/wrfeng).


## Key Technologies, Packages, and Gems

* Front End

  * React.js

* Back End

  * Rails 5 API
  * JWT token authentication
  * BCrypt
  * Postgres database
  * fast_jsonapi serializer


## Core Features

* Unregistered users can view all active open calls on the front page.
* A call to action directs users to each of their appropriate signup flows. 
* Artists can upload and add metadata to images of their artwork. They are store in groups called portfolios
* Organizations can publish a form based open call, including setting a deadline date for the closure of the open call.
* Artist can apply once to each available open call.
* Artists submit a selection of pre-uploaded portfolio images.
* An organization chooses the finalist artist for each of their open calls

## Install

* The App is built to deploy in one place (currently Heroku) with the React frontend located in the /client folder.  To get this running on a local machine: 

-Clone this repository and:

Backend port: 3001
Frontend port: 3000
```
cd open-call
bundle install
rake db:create db:migrate db:seed
rails s -p 3001
```
Endpoints: 
```
/artists
/artworks
/calls
/orgs
```

-Open a new terminal with the same directory location:
```
cd client
yarn install
yarn start
```




## Demo

[Live Demo](https://glacial-falls-33377.herokuapp.com/)
