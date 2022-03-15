Spot
===============
Spot is an app meant to be a self serve pet grooming service. 
The user would reserve a location near them and then be charge for being there for a set amount of time.


Installation of code
-------------------------------------

Install Node
We recommend using [Node16].

[Node16]: https://nodejs.org/en/download/current/


Clone the code

go to file directory

install all necessary Node modules

```
npm i
```

run the app in a local host
```
npm start
```
go to Localhost:3000

For a more indepth explanation of Getting started with React see **Available Scripts**


Configure your own firebase
-----------------------
This app relies on firebase to get location and user data. Authentication is done with firebase's sign in with google authentication.

If you want to use your own firebase database you can use the file provided in the git hub repo titles **Database.json**.
To edit Spot to contain your firebaseConfig edit **firebase.js**
You will also need to edit **firebase.json**.
initialize firebase in your machine. You can use this [guide]

[guide]: https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425


CI
--
To edit your CI files please go to .github/workflows/main.yml


License
-------

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

About
-----

Created in CS394 @ Northwestern.

Thank you Chris Reisbek!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
