import { Button, Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"
import * as messengerButton from "./button.png"

type Props = {}

const facebookMessageButton: React.SFC<
  Props & { classes: StyleClassNames }
> = ({ classes }) => {
  const className = `${classes.button} animated pulse`
  return (
  <Button
    raised
    color="accent"
    className={className}
    href="https://m.me/hallingdata"
    target="_blank"
    title="Send en meding til oss på Facebook Messenger"
  >
    Send oss en melding
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="96 93 322 324"
      className={classes.leftIcon}
    >
      <path
        d="M257 93c-88.918 0-161 67.157-161 150 0 47.205 23.412 89.311 60 116.807V417l54.819-30.273C225.449 390.801 240.948 393 257 393c88.918 0 161-67.157 161-150S345.918 93 257 93zm16 202l-41-44-80 44 88-94 42 44 79-44-88 94z"
        fill="#00000099"
      />
    </svg>
  </Button>
)}
///#007ff

type StyleClassNames = {
  button: string
  leftIcon: string
}

const styles: StyleRulesCallback = theme => ({
  button: {},
  leftIcon: {
    marginLeft: theme.spacing.unit,
  },
})

export default withStyles(styles)<Props>(facebookMessageButton)
