import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import PostsReducer from './reducers/PostsReducer'
import { AuthReducer } from './reducers/AuthReducer'
import todoReducers from './reducers/Reducers'
import { reducer as reduxFormReducer } from 'redux-form'
import { reducer as utilsReducer } from './reducers/UtilsReducer'
const middleware = applyMiddleware(thunk)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  todoReducers,
  form: reduxFormReducer,
  utils: utilsReducer,
})

// this configuration has a white list and a black list to discriminate the persistence of the data
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['recoverPassword'],
}

//const store = createStore(rootReducers);

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, composeEnhancers(middleware))
export const persistor = persistStore(store)
