import React from 'react'

import { AppMenu } from '../components/widgets/AppMenu'
import { SplashLogo } from '../components/widgets/SplashLogo'

import { createCatalystTheme } from '@liquid-labs/catalyst-theme'
import merge from 'lodash.merge'

const splashSpec = {
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
      appMenu  : { node : <AppMenu style={{ position : 'fixed', top : 0, right : 0 }} /> },
      children : <SplashLogo />,
      props    : {
        style              : { flexGrow : 4 },
        ToolbarProps       : { style : { height : '100%' } },
        NavigationBarProps : {
          style           : { height : '100%' },
          LeftGridProps   : { style : { flexBasis : '0' } },
          CenterGridProps : { style : { flexBasis : '100%', maxWidth : 'unset', padding : '15px 0', height : '100%' } },
          RightGridProps  : { style : { flexBasis : '0' } }
        }
      }
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
