import React from 'react'
import PropTypes from 'prop-types'

import Grow from '@material-ui/core/Grow'

import { useTheme } from '@material-ui/styles'

const SplashLogo = ({minHeight=100}) => {
  const theme = useTheme()
  const timeout = theme.transitions.duration.dramatic // Catalyst specific
    || theme.transitions.duration.complex // fallback, material-ui standard
  var logo
  if (theme.branding && theme.branding.splash) {
    const { node, url } = theme.branding.splash
    logo = node || <div style={{ minHeight, height : '100%', background : `transparent url(${url}) 50% 50% no-repeat` }} />
  }

  return (
    <Grow in timeout={timeout}>
      {logo}
    </Grow>
  )
}

if (process.env.NODE_ENV !== 'production') {
  SplashLogo.propTypes = {
    // TODO: match against 'css length' regex
    minHeight : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  }
}

export { SplashLogo }
