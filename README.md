Prompt discrepancy:

- JSON data/files typically can't hold functions so I kept `./src/data/formData.js` as a js object and stayed away from stringifying it again and parsing because it wouldn't parse the function.

Extras:

1. Validation would be able to handled through a map of different validation functions or regex (inputs contains..., is at least 3 chars); React Form has a good implementation of this and lets you customize validation ui feedback.
   1a. We can follow the current data structure and add a "validation" property and pass in the function that we'd compare against. This would toggle an `invalid` state for the input and we'd have custom css for user feedback and text bellow to describe the requirement.
2. I would try improving the design by not having each input maintain a full row and share their rows by 2 depending whether they're related.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
