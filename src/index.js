import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SimpleReactLightbox>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SimpleReactLightbox>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
