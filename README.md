## [My Movies](https://rachel-blue.github.io/my-movies/#/)

This project utilizes the ombdAPI, redux, and local storage to search, view, and favorite movies.

### How to run the project locally
### `Installing Dependencies`
   "bootstrap": "^4.4.1",
   "eslint-plugin-jest-dom": "^1.4.2",
   "local-storage": "^2.0.0",
   "node-sass": "^4.13.1",
   "prop-types": "^15.7.2",
   "react": "^16.12.0",
   "react-dom": "^16.12.0",
   "react-fontawesome": "^1.7.1",
   "react-particles-js": "^2.7.1",
   "react-redux": "^7.2.0",
   "react-router": "^5.1.2",
   "react-router-dom": "^5.1.2",
   "react-scripts": "3.3.0",
   "redux": "^4.0.5"
   "@fortawesome/free-solid-svg-icons": "^5.12.1",

### `npm start`
Runs the app in the development mode.
Open http://localhost:300 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `View the dev build`
View the webpage on github pages https://rachel-blue.github.io/my-movies/#/


## Thought Process
The goal was to have a clean looking site that would view well on mobile as well as web. 
I would have liked to return 12 results per page (rather than the api default of 10).
Because 12 would have worked better with my grid layout. However this would have required 
doubling the api calls as anything over the default 10 requires another api call. 
I deemed the layout movie result number not as important as minimizing api calls and potentially effecting loading times.


### With more time
Visually, with more time I would have like to make the design more fun. 
A custom footer with a theater theme, particle effects in the background,
and a more topical loading icon. Adding a favicon similar to the logo.

With code, I possibly would have approached local storage in a different way.
While using localStorage itself as an object was fairly clean and made for good logic flow,
localStorage does have it's own issues (especially with chrome extensions). 
The other solution I'd considered, creating an empty array and using .push() or 
.splice() to manage that array, may have been a bit more logic up front, but may
have been cleaner on the implementation. I do wonder if I made the best choice. 
