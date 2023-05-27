// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations.
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${process.env.REACT_APP_MAIN_API}`,
  withCredentials: true,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// Also add/ configure interceptors && all the other cool stuff

export default instance;
