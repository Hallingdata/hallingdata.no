import { Grid, Icon, Typography } from "material-ui"
import { map } from "ramda"
import * as React from "react"

import * as styles from "./our-services.module.css"

type Props = {
  services: Array<Service>
}

const renderServices = (services: Array<Service>) =>
  map(
    (service: Service) => (
      <Grid item xs={12} md={3} sm={4} key={service.header + service.icon}>
        <div className={styles.item}>
          <Icon color="primary" style={{ fontSize: 80 }}>
            {service.icon}
          </Icon>
          <Typography type="headline" gutterBottom align="center">
            {service.header}
          </Typography>
          <Typography type="body1" gutterBottom align="center">
            {service.description}
          </Typography>
        </div>
      </Grid>
    ),
    services
  )

export const OurServices = ({ services }: Props) => (
  <Grid container justify="center" className={styles.outer}>
    {renderServices(services)}
  </Grid>
)

type Service = {
  header: string
  icon: string
  description: string
}
