# Museum Outdoor

## Live Demo
[Museum Outdoor](http://museum-outdoor.surge.sh/)

## Contents
  * What It Is
  * What We Used
  * Challenges and Solutions
  * MVP
  * Our Stretch Goals
  * Authors
  * Screenshots
  * Github Link
  * Code Examples
  
## What Is It
Museum Outdoor (MO) is a social project where street art enthusiasts, lovers, and even casual admirers can find local street art and engage with the artists responsible for it. We created MO as a platform of expression driven by a communal ideal built to challenge modern art and society. We wanted to give the people behind the murals that decorate our great city of Houston a platform to be recognized, connected to fans and, possibly, be a marketplace for future work.

## What We Used
  * HTML5
  * CSS3
  * JavaScript
  * jQuery
  * Firebase
  
## Challenges and Solutions

Once we had a concept of what the project will entail, the key was to figure out how to make it work. Here are some challenges encountered and their solutions.

Challenge #1 - Database to store user information

In order to have a proper social platform working the way we intended it to, we needed somewhere to store user information (e.g. usernames, passwords, location, emails, etc.). Being that this was being developed on the client-side and not on a server, we had to find the easiest, and probably, most efficient way to capture that data. And so, we were introduced to Google's BaaS called Firebase. We used Firebase's Authentication module for user sign-up and login process, Realtime Database for data storage and Cloud Storage for saving images. We had to learn specific Firebase syntax for saving and fetching data. However, once we spent time learning that, we were able to save data without further issues.

Challenge #2 - Google Maps integration

We wanted to show a map of Houston and pinpoint specific locations for each mural featured in the website. The challenge was not so much related to embedding Google Maps into our code, but feeding Google Maps with specific data created by users. We found a way to feed Google Maps with directions using latitude and longitude on both the main page and each individual user by running a loop that captures the longitude and latitude values of each painting. We are considering using specific addresses (i.e. 1401 McKinney) to populate the map as opposed to latitude and longitude.

## Minimum Viable Product (MVP)

Our first iteration included:

  * Landing page explaining the goals and features of the app
  * Featured art
  * Map with location of all saved art
  * Ability to create new users
  * Save user data
  * Sign In to user profiles
  * Profiles that include profile picture, contact information, art location and maps.
  
## Our Stretch Goals

Here are various features that we will work on our second iteration:

  * Ability to upload pictures directly to profile (currently using image URL)
  * Password encryption using bcrypt
  * Public profile pages
  
## Authors

[Gabriel Frontera](https://github.com/Unclechamps)
[Sean Johnson-Sippial](https://github.com/jetsetta)
[Conor Bellchambers](https://github.com/Conorrific)

## Github Link

[Museum Outdoor Github](https://github.com/Unclechamps/MuseumOutdoorFinal)

## Screenshots


