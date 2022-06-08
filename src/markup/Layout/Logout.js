import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { isAuthenticated } from '../../store/selectors/AuthSelectors'

function LogoutPage(props) {
  return (
    <>
      <Link to={'#'} title="READ MORE" className="site-button">
        <i className="fa fa-lock"></i> Logout
      </Link>
    </>
  )
}
const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
}

export default withRouter(connect(mapStateToProps)(LogoutPage))
