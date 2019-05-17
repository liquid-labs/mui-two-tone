import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { CardContainer } from '@liquid-labs/mui-extensions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { makeStyles, useTheme } from '@material-ui/styles'

const cardStyles = (theme) => ({
  root : {
  },
  action : {
    // outlineColor : `${theme.palette.secondary.main}`,
    height : '100%',
  },
  content : {
    height : '100%',
    color : theme.palette.primary.main,
  },
  title : {
    color : 'inherit !important',
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  },
  summary : {
    color : 'inherit !important',
  },
  icon : {
    float : 'right',
    backgroundColor : theme.palette.primary.main,
    color : theme.palette.primary.contrastText,
    fontSize: '48px !important',
    borderRadius : '50%',
    padding: 8,
    marginTop: 8,
    clear: 'both',
  },
  spacer : {
    content: '',
    display : 'block',
    float: 'right',
    height: 'calc(100% - 88px)'
  }
})

const useCardStyles = makeStyles(cardStyles)

const Dashboard = () => {
  const theme = useTheme()
  const cardClasses = useCardStyles()
  return (
    <CardContainer>
      {
        theme.sections.map((sectionDef, i) => {
          const { Icon, label, summary, path, onClick } = sectionDef
          return <Card key={path} className={cardClasses.root}>
            <CardActionArea className={cardClasses.action} onClick={onClick}>
              <CardContent className={cardClasses.content}>
                <Typography className={cardClasses.title} variant="h5">
                  {label}
                </Typography>
                {Icon && <><div className={cardClasses.spacer} /><Icon className={cardClasses.icon} /></>}
                <Typography className={cardClasses.summary} component="div">
                  {summary}
                </Typography>
                <div style={{ clear: 'both' }} />
              </CardContent>
            </CardActionArea>
          </Card>
        })
      }
    </CardContainer>
  )
}

export { Dashboard }
