import {
  Card,
  CardContent,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { map } from "ramda"
import * as React from "react"

type Props = {
  list: Array<string>
}

const checklistCard: React.SFC<Props & { classes: StyleClassNames }> = ({
  list,
  classes
}) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography type="body1" className={classes.title}>
          Våre nettsider leveres alltid med
        </Typography>
        <List>
          {map(
            item => (
              <ListItem key={item}>
                <ListItemIcon>
                  <Icon>check_circle</Icon>
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ),
            list
          )}
        </List>
      </CardContent>
    </Card>
  )
}

type StyleClassNames = {
  card: string
  title: string
}

const styles: StyleRulesCallback = theme => ({
  card: {
    width: 300,
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: "-100px"
    }
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  }
})

export const ChecklistCard = withStyles(styles)<Props>(checklistCard)
