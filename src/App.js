import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from 'markup/Pages/login'
import Routes from 'markup/Markup'
import { Loader } from 'components/loader'
// import './css/plugins.css'
// import './css/style.css'
// import './css/templete.css'
// import './css/skin/skin-1.css'
// import './plugins/slick/slick.min.css'
// import './plugins/slick/slick-theme.min.css'
import './index.css'
import './general.css'

const App = () => {
  const {
    auth: { user },
    utils: { showLoader },
  } = useSelector(state => state)

  if (user?.id) {
    return (
      <>
        {showLoader && <Loader />}
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
      {showLoader && <Loader />}
      <Route path="/iniciar-sesion" component={Login} />
      <Redirect to="/iniciar-sesion" />
    </Switch>
  )
}

export default App
