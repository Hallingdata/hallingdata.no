import * as React from "react"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import Button from "material-ui/Button"
import List from "material-ui/List"
import Divider from "material-ui/Divider"
import { ListItem, ListItemIcon, ListItemText } from "material-ui"
import InboxIcon from "material-ui-icons/Inbox"
import { Toolbar, IconButton, Hidden } from "material-ui"
import MenuIcon from "material-ui-icons/Menu"

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: "auto"
  }
}

class NavDrawerNoStyle extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { open: false }
  }

  state: {
    open: false
  }

  openDrawer = (open: boolean) => () => {
    this.setState({
      open
    })
  }

  public render() {
    const { classes }: any = this.props

    const fullList = (
      <div className={classes.listFull}>
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    )

    return (
      <div>
        <IconButton
          color="contrast"
          aria-label="Menu"
          onClick={this.openDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={this.state.open}
          onRequestClose={this.openDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.openDrawer(false)}
            onKeyDown={this.openDrawer(false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    )
  }
}

export const NavDrawer = withStyles(styles)(NavDrawerNoStyle)
