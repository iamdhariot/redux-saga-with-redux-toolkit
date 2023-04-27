# Project Name: redux-saga-with-redux-toolkit

This is a React project created with `create-react-app` that demonstrates how to use Redux Toolkit with Redux Saga. In this project, a reusable API call code has been implemented to handle API requests separately, including login requests. The API accepts parameters such as method type, body, token, and query parameters with endpoint URL, and it uses Axios to call the API and parse the data according to the status code, returning it to Saga. Saga, in turn, returns the data to the UI.

## Dependencies

The project uses the following dependencies:

- "@redux-saga/core": "^1.2.3"
- "@reduxjs/toolkit": "^1.9.3"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-scripts": "5.0.1"
- "redux": "^4.2.1"
- "redux-first-history": "^5.1.1"
- "redux-logger": "^3.0.6"
- "redux-saga": "^1.2.3"
- "react-redux": "^8.0.5"
- "axios": "^1.3.4"

## How to Run the Project

To run this project on your local machine:

1. Clone the repository using `git clone`.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the project.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use the API

For demonstration purposes, the project uses the following API: https://date.nager.at/api/v2/publicholidays/2020/US

The API can be dispatched using `dispatch(testRequest(payload))` with the `payload` containing the parameters accepted by the API.

## Conclusion

This project is an example of how to use Redux Toolkit with Redux Saga to manage API requests separately and efficiently in a React application.
