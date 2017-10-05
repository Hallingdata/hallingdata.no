import * as React from "react"
import Link from "gatsby-link"
import { Grid, Row, Col } from "react-flexbox-grid"
import { List, ListItem } from "material-ui/List"
import ContentInbox from "material-ui/svg-icons/content/inbox"
import ActionGrade from "material-ui/svg-icons/action/grade"
import ContentSend from "material-ui/svg-icons/content/send"
import ContentDrafts from "material-ui/svg-icons/content/drafts"
import Divider from "material-ui/Divider"
import ActionInfo from "material-ui/svg-icons/action/info"

import * as styles from "./services.module.css"

type Props = {}

const ServicesComponent = (props: Props) => (
  <Grid fluid className={styles.outer}>
    <Row around="xs">
      <Col sm={2}>
        <h2>Systemutvikling</h2>
        <List>
          <ListItem
            primaryText="Utvikling av nye IT-løsninger"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Programmering"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Databaser"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Rapportering"
            disabled={true}
            className={styles.listItem}
          />
        </List>
      </Col>
      <Col sm={2}>
        <h2>Web</h2>
        <List>
          <ListItem
            primaryText="Websider / Hjemmesider"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Webshop / butikk"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Mobile applikasjoner (iOS/Android)"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Sosiale medier (fb, t, etc.)"
            disabled={true}
            className={styles.listItem}
          />
        </List>
      </Col>
      <Col sm={2}>
        <h2>Datasikkerhet</h2>
        <List>
          <ListItem
            primaryText="Situasjonsbilde"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Penetration Testing"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Opplæring"
            disabled={true}
            className={styles.listItem}
          />
          <ListItem
            primaryText="Handlingsplan"
            disabled={true}
            className={styles.listItem}
          />
        </List>
      </Col>
    </Row>
  </Grid>
)

export default ServicesComponent
