import { Button, TextField } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

type Props = {}

const contactForm: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <form
    autoComplete="off"
    className={classes.form}
    name="Kontakt"
    action="thank-you"
    data-netlify="true"
  >
    <TextField
      id="name"
      label="Navn"
      name="Navn"
      className={classes.textField}
      margin="normal"
      required
    />
    <TextField
      id="contact"
      label="Kontakt"
      name="Kontakt"
      placeholder="Epost eller telefonnummer"
      className={classes.textField}
      margin="normal"
      required
    />
    <br />
    <TextField
      id="message"
      label="Din melding"
      name="Melding"
      multiline
      rows="8"
      rowsMax="50"
      className={classes.textField}
      margin="normal"
      required
    />
    <Button raised color="primary" type="submit" className={classes.sendButton}>
      Send
    </Button>
  </form>
)

type StyleClassNames = {
  form: string
  textField: string
  sendButton: string
}

const styles: StyleRulesCallback = theme => ({
  form: {
    maxWidth: 500,
    margin: "auto",
    paddingLeft: 30,
    paddingRight: 30,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
  sendButton: {
    height: 50,
    width: 120,
    fontSize: 16,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

export const ContactForm = withStyles(styles)<Props>(contactForm)
