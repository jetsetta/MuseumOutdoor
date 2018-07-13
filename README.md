# Museum Outdoor

## [Website](http://museum-outdoor.surge.sh/)

## [Demo Video](https://youtu.be/7MV-wgJPMCw)

## Contents
  * Screenshots
  * What It Is
  * What We Used
  * Challenges and Solutions
  * MVP
  * Our Stretch Goals
  * Authors
  * Github Link

## Screenshots

#### _**Landing Page**_

![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.22.30%20PM.png?raw=true)

#### _**About Us Section**_

![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.23.22%20PM.png?raw=true)

#### _**Featured Artworks**_

![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.23.46%20PM.png?raw=true)

#### _**Google Map**_

![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.24.01%20PM.png?raw=true)

#### _**Sign Up Modal**_
![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.24.17%20PM.png?raw=true)

#### _**Profile Setup**_

![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.24.45%20PM.png?raw=true)

#### _**Profile Page**_
![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.25.12%20PM.png?raw=true)
![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.25.28%20PM.png?raw=true)
![alt text](https://github.com/Unclechamps/MuseumOutdoorFinal/blob/master/css/pics/Screenshots/Screen%20Shot%202018-07-09%20at%2012.25.45%20PM.png?raw=true)

## What It Is
Museum Outdoor (MO) is a proof-of-concept social project in which street art enthusiasts or even casual admirers can find local street art and engage with the artists responsible for it. We created MO as a platform of expression driven by a communal ideal to challenge modern art and share these free masterpieces. We wanted to give the people behind the murals that decorate our great city of Houston a platform to be recognized, connected to fans and, possibly, be a marketplace for future work.

## What We Used
  * HTML5
  * CSS3
  * JavaScript
  * jQuery
  * Firebase
  
## Challenges and Solutions

Once we conceived the project and decided what it would entail, the key was to figuring out how to build and deploy it. Below are some challenges we encountered and the solutions we found.

Challenge #1 - Database to store user information

In order to have our platform work as intended, we needed somewhere to store the user submitted information (e.g. usernames, passwords, location, emails, etc.). Since MO was developed on the client-side and not on a server, we had to find the easiest and most efficient way to capture that data. After being introduced to Google's BaaS, Firebase, we decided this would serve our purposes. We used Firebase's Authentication module for user sign-up and login process, Realtime Database for data storage and Cloud Storage for saving images. We had to learn specific Firebase syntax for saving and fetching data. However, once we spent the time learning that, we were able to save data without further issues.

Challenge #2 - Google Maps integration

We wanted to show a map of Houston and pinpoint specific locations for each mural featured in the website. The challenge was not so much related to embedding Google Maps into our code, but feeding Google Maps with specific data created by users. We found a way to feed Google Maps with directions using latitude and longitude on both the main page and each individual user by running a loop that captures the longitude and latitude values of each painting. As a further improvement, we have considered using specific addresses (i.e. 1401 McKinney) to populate the map as opposed to latitude and longitude.

## Minimum Viable Product (MVP)

Our first iteration included:

  * Landing page explaining the goals and features of the app
  * Featured art
  * Map with location of all saved art
  * Ability to create new users
  * Ability to save user data
  * Sign In to user profiles
  * Profiles that include profile picture, contact information, art location and maps
  * Ability to add and remove murals
  
## Our Stretch Goals

Various features for our second iteration:

  * Ability to upload pictures directly to profile (currently using image URL)
  * Password encryption using bcrypt
  * Public profile pages
  * Integrate a payment API to allow for artist commissioning
  
## Authors

   [Gabriel Frontera](https://github.com/Unclechamps)
   
   [Sean Johnson-Sippial](https://github.com/jetsetta) 
   
   [Conor Bellchambers](https://github.com/Conorrific)  

## Github Link

[Museum Outdoor Github](https://github.com/Unclechamps/MuseumOutdoorFinal)


