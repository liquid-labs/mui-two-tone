import React from 'react'

import { AppMenu } from '../components/widgets/AppMenu'
import { SplashLogo } from '../components/widgets/SplashLogo'

import { createCatalystTheme } from '@liquid-labs/catalyst-theme'
import merge from 'lodash.merge'

// https://stackoverflow.com/a/5624139/929494
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) throw new Error("Expect primary color to be defined as hex.")
  return `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},`
}

// TODO: make this configurable; this is double standard for the LL theme
const shadowKeyUmbraOpacity = 0.4;
const shadowKeyPenumbraOpacity = 0.28;
const shadowAmbientShadowOpacity = 0.24;

function createShadow(c, ...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px ${hexToRgb(c)}${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px ${hexToRgb(c)}${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px ${hexToRgb(c)}${shadowAmbientShadowOpacity})`,
  ].join(',');
}

const shadows = (c) => [
  'none',
  createShadow(c, 0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  createShadow(c, 0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  createShadow(c, 0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  createShadow(c, 0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  createShadow(c, 0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(c, 0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  createShadow(c, 0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(c, 0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  createShadow(c, 0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  createShadow(c, 0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(c, 0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(c, 0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  createShadow(c, 0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(c, 0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(c, 0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(c, 0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  createShadow(c, 0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(c, 0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(c, 0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(c, 0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(c, 0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(c, 0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(c, 0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(c, 0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
]

const splashSpec = (shadowColor) => ({
  shadows: shadows(shadowColor),
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
        ToolbarProps       : { style : { flexGrow : 1 } },
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
})

const defSpec = {
  layout : {
    header : {
      appMenu : { node : <AppMenu /> }
    }
  }
}

const createMuiTwoToneTheme = (themeSpec) => {
  themeSpec = themeSpec || {}

  const splashTheme = createCatalystTheme(merge({}, splashSpec(themeSpec.palette.primary.main), themeSpec))
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
