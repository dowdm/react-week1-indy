
# Tap Room

#### A React App that allows users to view a list of beers that updates. (_This is an Epicodus exercise that is a work in progress_)

#### By _**Matt Dowdney**_

## Description

This application will allow users view a list of beers and admin will be allowed to add kegs to the beer list. Differing from Angular, React components may be more granular. Since objects aren't the focus of React, items that may normally exist as a component in Angular may be subdivided in React to allow for more efficient DOM mutations.
![Diagram](https://github.com/dowdm/react-week1-indy/blob/master/src/assets/images/IMG-4379.jpg)


#### User Story

A. As a user, I want to see all beers on tap<br>
B. As an admin, I want to be able to add a keg of beer

<!-- ## Data relationship
![alt tag](screenshots/data.png "Data Model") -->

## Setup/Installation Requirements
VIEW at https://dowdm.github.io/react-week1-indy
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
* UUID

### License

This software is licensed under the GPL license.

## Notes:
1. How to properly arrange subcomponent tags within a supercomponent was a good challenge. I don't think we did it in class, and the looping syntax with map is particular about it too. React documentation only shows how to do it outside of a mapping. Trial and error.
2. Are proptypes required on a sub-subcomponent since the subcomponent itself requires the type, according to eslint?
3. Should the abv be its own component to dynamically update CSS?
4. Started gh-pages branch and worked on that branch and deployment from approx 4PM onward  
5. Initially all keg profiles had a buy button, that had 2 stacked click events for a: setting the selectedKeg state and b: subtracting 1 pint. Since the synthetic events need to be chained async, and I didn't have enough time to explore that, I just conditionally render a buy button.
6. I lost an hour because 'return' wasn't spelled correctly.
