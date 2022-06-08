import React, { Suspense, useCallback, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { simpleClient } from 'utils/axios'
import { urls } from 'api/ulrs'
import Login from 'markup/Pages/login'
import Routes from 'markup/Markup'
import { Loader } from 'components/loader'
import { CANDIDATE } from 'constants/rol'
import { logOut } from 'store/actions/AuthActions'
import './css/plugins.css'
import './css/style.css'
import './css/templete.css'
import './css/skin/skin-1.css'
import './plugins/slick/slick.min.css'
import './plugins/slick/slick-theme.min.css'
import './index.css'
import './general.css'

const App = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    auth: { user },
    utils: { showLoader },
  } = useSelector(state => state)

  const rol = user?.rol

  const validateToken = useCallback(async () => {
    const token = localStorage['token']
    const { getCandidate, getEmployer } = urls.auth
    const url = rol === CANDIDATE ? getCandidate : getEmployer
    const isValidToken = await simpleClient(url, { token }, 'POST')
    if (!isValidToken) dispatch(logOut(history))
  }, [rol, dispatch, history])

  useEffect(() => {
    validateToken()
  }, [validateToken])

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
