import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { CardContainer } from '@liquid-labs/mui-extensions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles, useTheme } from '@material-ui/styles'

// import { SetupInstructions } from './SetupInstructions'
/*
import Markdown from 'react-markdown'
import * as Sqrl from 'squirrelly'

const MarkdownPOC = () => {
  const testMd = `# Hi!
* this is a list

*bold* words!

template var foo: {{foo}}`
  const firstPass = Sqrl.Render(testMd, { foo: 'is Foo!' })

  return <Markdown source={firstPass} />
}
*/

const cardStyles = (theme) => ({
  root : {
  },
  action : {
    // outlineColor : `${theme.palette.secondary.main}`,
    // height : '100%',
  },
  content : {
    // height : '100%',
  },
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
            <CardActionArea className={cardClasses.action} onClick={onClick} style={{height : '100%'}}>
              <CardContent className={cardClasses.content} style={{height : '100%'}}>
                <Grid component={Typography} variant="h5" container>
                  {Icon && <Icon />}{label}
                </Grid>
                <Typography component="div">
                  {summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        })
      }
    </CardContainer>
  )
}

export { Dashboard }
