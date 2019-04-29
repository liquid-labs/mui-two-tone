import React from 'react'

import { AppMenu } from '../components/widgets/AppMenu'

import { createCatalystTheme } from '@liquid-labs/catalyst-theme'
import merge from 'lodash.merge'

const splashSpec = {
  palette : {
    background : { default : '#fff' },
  },
  overrides : {
    AppMenuBar : {
      root        : { boxShadow : 'none', border : 'none' },
      lightNavbar : { borderBottom : 'none' },
    },
    MuiIconButton : { root : {} },
    MuiToolbar    : {
      root  : { border : 'none', minHeight : 'unset' },
      dense : { minHeight : '36px' },
    },
  },
  layout : {
    header : {
      showLogo : false,
      variant  : 'dense',
      appMenu  : { node : <AppMenu /> },
    },
    navigation : {
      visible : false,
    },
  },
}

const defSpec = {
  layout : {
    header : {
      appMenu : { node : <AppMenu /> }
    }
  }
}

const createMuiTwoToneTheme = (themeSpec) => {
  themeSpec = themeSpec || {}
  const splashTheme = createCatalystTheme(merge({}, splashSpec, themeSpec))
  const defaultTheme = createCatalystTheme(merge({}, defSpec, themeSpec))

  const themeRouter = [
    [/^[/]$/, splashTheme],
    [/.*/, defaultTheme]
  ]

  return {
    themeRouter,
  }
}

export {
  createMuiTwoToneTheme
}
