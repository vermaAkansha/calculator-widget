Please note that this project has been created as a showcase POC and is NOT currently bootstrapped/deployed.
The project is ONLY avaliable for the purpose of evaluation of my coding and development skills

# How to RUN
  1. Download the project from https://github.com/vermaAkansha/calculator-widget
  2. Unzip and Open a Command Line/Terminal and traverse at ROOT directory
  3. RUN `npm install` to install all dependencies specified in PACKAGE.JSON. This step is VERY IMPORTANT
  4. Run `npm start` in the same terminal. 
  5. The application will open in a browser tab at `http://localhost:3000/`
  6. The project is already built and contains build folder to launch the index.html file in the browser without having to run it locally.

# The Application consists of -
## Views
  - Calculator : which is a form that allows user input amount and duration
  - Display Information : which shows the monthly installment returned by the api when amount and duration are passed
  
## Authentication and Validations -
  - All fields in Calculator validate user input
  - Required and number validations display appropriate messages for the user
 
## Resonsiveness and Styling
The Applcation is responsive and is styled using Flexbox CSS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run coverage`

This creates the coverage folder and shows the coverage report of the application. this command can be run on terminal or to look at the coverage report launch index.html file located at coverage/lcov-report/index.html in the browser to look at all the components and statements covered.

### `npm run build`

Builds the app for production to the `build` folder.<br />
