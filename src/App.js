import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from 'markup/Pages/login'
import Routes from 'markup/Markup'
import './css/plugins.css'
import './css/style.css'
import './css/templete.css'
import './css/skin/skin-1.css'
import './plugins/slick/slick.min.css'
import './plugins/slick/slick-theme.min.css'
import './index.css'
import { useSelector } from 'react-redux'

const App = () => {
  const { user } = useSelector(state => state.auth)

  if (user?.id) {
    return (
      <>
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1" />
                <div className="sk-child sk-bounce2" />
                <div className="sk-child sk-bounce3" />
              </div>
            </div>
          }
        >
          <Routes />
        </Suspense>
      </>
    )
  }
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  )
}

export default App

// import React, { Suspense, useEffect } from 'react'
// import Index from './markup/Markup'
// import { connect, useDispatch } from 'react-redux'
// import { Route, Switch, Redirect } from 'react-router-dom'
// import Login from './markup/Pages/login'
// import { checkAutoLogin } from './services/AuthService'
// import { isAuthenticated } from './store/selectors/AuthSelectors'
// import './css/plugins.css'
// import './css/style.css'
// import './css/templete.css'
// import './css/skin/skin-1.css'
// import './plugins/slick/slick.min.css'
// import './plugins/slick/slick-theme.min.css'
// import './index.css'

// function App(props) {
//   const dispatch = useDispatch()
//   const isAuthenticated = false
//   useEffect(() => {
//     checkAutoLogin(dispatch, props.history)
//   }, [dispatch, props.history])

//   if (isAuthenticated) {
//     return (
//       <>
//         <Suspense
//           fallback={
//             <div id="preloader">
//               <div className="sk-three-bounce">
//                 <div className="sk-child sk-bounce1" />
//                 <div className="sk-child sk-bounce2" />
//                 <div className="sk-child sk-bounce3" />
//               </div>
//             </div>
//           }
//         >
//           <Index />
//         </Suspense>
//       </>
//     )
//   }
//   return (
//     <Switch>
//       <Route path="/login" component={Login} />
//       <Redirect to="/login" />
//     </Switch>
//   )
// }

// export default App
