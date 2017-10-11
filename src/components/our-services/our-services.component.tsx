import { Grid, Icon, Typography } from "material-ui"
import { map } from "ramda"
import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"

type Props = {
  services: Array<Service>
}

const ourServices: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
  services,
}) => (
  <Grid container justify="center" className={classes.outer}>
    {map(
      (service: Service) => (
        <Grid item xs={12} md={3} sm={4} key={service.header + service.icon}>
          <div className={classes.item}>
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
    )}
  </Grid>
)

type StyleClassNames = {
  outer: string
  item: string
}

const styles: StyleRulesCallback = theme => ({
  outer: {
    backgroundColor: "#FAFAFA",
  },
  item: {
    textAlign: "center",
    padding: "2em",
    maxWidth: 250,
    margin: "auto",
  },
})

export const OurServices = withStyles(styles)<Props>(ourServices)

type Service = {
  header: string
  icon: string
  description: string
}
