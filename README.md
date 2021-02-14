## [My Movies](https://rachel-blue.github.io/my-movies/#/)
View the webpage on github pages https://rachel-blue.github.io/my-movies/#/
This project utilizes the ombdAPI, redux, and local storage to search, view, and favorite movies.

This project was generated with React version 16.12.0 and `create-react-app`

## How to run the project locally
### `Local Setup`
1. Install Node.js (recommended version v13.4.0)
2. Clone this repo
3. Run `npm install` in the cloned repo's root
4. Run `npm start` to view the locally hosted site in the browser

### `Development server`
Run `npm start` for a dev server. 
Page will automatically open in browser, 
or navigate to http://localhost:300 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `Create a Build`
Run `npm run build` to build the project for produciton. The build artifacts will be stored
in the `build/` directory. 

### `Deploy to GitHub Pages`
To deploy to gh pages you must have read/write access to this repo. You must als have the
gh-pages dependency installed. 

`npm run deploy` 


## Project Notes
### `Thought Process`
The goal was to have a clean looking site that would view well on mobile as well as web. 
I would have liked to return 12 results per page (rather than the api default of 10).
Because 12 would have worked better with my grid layout. However this would have required 
doubling the api calls as anything over the default 10 requires another api call. 
I deemed the layout movie result number not as important as minimizing api calls and potentially 
effecting loading times.

### `With more time`
Visually, with more time I would have like to make the design more fun. 
A custom footer with a theater theme, particle effects in the background,
and a more topical loading icon. Adding a favicon similar to the logo.

With code, I possibly would have approached local storage in a different way.
While using localStorage itself as an object was fairly clean and made for good logic flow,
localStorage does have it's own issues (especially with chrome extensions). 
The other solution I'd considered, creating an empty array and using .push() or 
.splice() to manage that array, may have been a bit more logic up front, but may
have been cleaner on the implementation. I do wonder if I made the best choice. 
