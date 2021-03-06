import React from 'react'
import ReactDOM from 'react-dom'
import { Provider}  from 'react-redux'
import{store} from './store'
import App from './components/app'
import './css/style.css'



const rootElement = document.getElementById('root')

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), rootElement)


















// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Presentational from './App';
// import ReactRedux from './react-redux'
// // import Redux from './redux'


// ReactDOM.render(
//   <React.StrictMode>
//     <Presentational/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA

