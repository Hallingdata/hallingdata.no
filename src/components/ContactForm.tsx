import { Button, TextField } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

type Props = {}

const contactForm: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <div>
  
  <form
    className={classes.form}
    name="Kontakt"
    method="post"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>
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

  <div
  dangerouslySetInnerHTML={{
    __html:
      `
      <form name="tryer" action="thank-you" netlify>
      <p>
        <label>Your Name: <input type="text" name="name"></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
      `,
  }}
/>
  </div>
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
