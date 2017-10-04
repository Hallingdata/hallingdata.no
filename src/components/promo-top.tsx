import * as React from "react"
import Link from "gatsby-link"
import { Grid, Row, Col } from "react-flexbox-grid"
import RaisedButton from "material-ui/RaisedButton"
import * as phoneImage from "./phone2@2x.png"

import * as styles from "./promo-top.module.css"

type Props = {}

const PromoTopComponent = (props: Props) => (
  <Grid fluid className={styles.outer}>
    <Row middle="xs" start="xs">
      <Col sm={6} xs={12} className={styles.hero}>
        <h1 className={styles.heroHeader}>Ny nettside eller app?</h1>
        <RaisedButton secondary={true} label="Kontakt oss" />
      </Col>
      <Col sm={6} xs={12}>
        <Row>
          <img src="http://placehold.it/600x600" alt="" />
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default PromoTopComponent
