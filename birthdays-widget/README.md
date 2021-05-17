# Birthdays Widget
This widget displays the past, current and upcoming birthdays of users.

### Project structure
📦birthdays-widget
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┣ 📜VodafoneRg-Bold.woff
 ┃ ┃ ┃ ┣ 📜VodafoneRg-Bold.woff2
 ┃ ┃ ┃ ┣ 📜VodafoneRg-Regular.woff
 ┃ ┃ ┃ ┗ 📜VodafoneRg-Regular.woff2
 ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┗ 📜gift.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂TabPane
 ┃ ┃ ┃ ┣ 📜TabPane.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂Tabs
 ┃ ┃ ┃ ┣ 📜Tabs.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┣ 📜ErrorPage.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📂BirthdaysWidget
 ┃ ┃ ┃ ┃ ┣ 📜BirthdaysWidget.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂UsersList
 ┃ ┃ ┃ ┃ ┣ 📜UsersList.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂UsersListItem
 ┃ ┃ ┃ ┃ ┣ 📜UsersListItem.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂UsersShortList
 ┃ ┃ ┃ ┃ ┣ 📜UsersShortList.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📜actions.js
 ┃ ┃ ┃ ┣ 📜constants.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜reducer.js
 ┃ ┃ ┃ ┗ 📜selectors.js
 ┃ ┃ ┗ 📜Router.js
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📜reducer.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜api.js
 ┃ ┣ 📜history.js
 ┃ ┣ 📜index.js

### Diagram draft 
x-special/nautilus-clipboard
copy
file:///home/valentin/Desktop/ANROM%20materials/ANROM_diagram.jpg


## Available Scripts

In the project directory, you can run:

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
