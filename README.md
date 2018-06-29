
# Tap Room

#### A React App that allows users to view a list of beers that updates. (_This is an Epicodus exercise that is a work in progress_)

#### By _**Matt Dowdney**_

## Description

This application will allow users view a list of beers and admin will be allowed to add kegs to the beer list. Differing from Angular, React components may be more granular. Since objects aren't the focus of React, items that may normally exist as a component in Angular may be subdivided in React to allow for more efficient DOM mutations. For example, although "price" and "pints remaining" are 'properties' of a keg, their DOM mutation may be more frequent than the change of the entire keg, therefore necessitating more granular components for those properties to update at shorter time intervals.


#### User Story

A. As a user, I want to see all beers on tap<br>
B. As an admin, I want to be able to add a keg of beer

<!-- ## Data relationship
![alt tag](screenshots/data.png "Data Model") -->

## Setup/Installation Requirements
1. Clone repository from https://github.com/dowdm/react-week1-indy.git
2. Navigate into project folder from terminal
3. Run npm install, assuming npm exists on your device
4. A web client window should open to localhost:8080



## Known Bugs

* N/A

## Support and contact details

For support contact: theofficialmatt@gmail.com

## Technologies Used

* CSS
* React 15.5.4
* PropTypes 15.5.10
* ReactRouter 4.0.0
* ESLint 5.0.0
* File-Loader 1.1.11
* CSS-Loader 0.28.11
* React Hot Loader 3.0.0b7
* Babel Core 6.24.1
* Webpack 3.4.0

### License

This software is licensed under the GPL license.

## Notes:
