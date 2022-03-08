## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `Docker`
####build docker image
`docker build -t jegorovje/my-page-nginx:tag .`

### `Git Hub Pages`

`npm run deploy`

#### If there are errors acquired 

##### Cleaning Cache and Node_module are not enough. Follow this steps:

`npm cache clean --force`
`delete node_modules folder`
`delete package-lock.json file`
`npm install`

