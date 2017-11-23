import { navigateTo } from "gatsby-link"
import { Button, Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"
import MessageButton from "./FacebookMessageButton"

type Props = {
  text: string
}

const promoText: React.SFC<Props & { classes: StyleClassNames }> = ({ text, classes }) => (
  <Typography className={classes.text} type="headline">{text}</Typography>
)

type StyleClassNames = {
    text: string
}

const styles: StyleRulesCallback = theme => ({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    paddingBottom: 30,
    textShadow: "-5px -5px 10px #000, 5px 5px 10px #000",
    maxWidth: 500,
    textAlign: "center",
    margin: "auto"
  },
})

export default withStyles(styles)<Props>(promoText)
