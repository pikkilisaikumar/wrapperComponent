import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const getCookieData = Cookies.get('jwt_token')

  if (getCookieData === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
