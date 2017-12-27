import { Grid } from "material-ui"
import { GridList, GridListTile } from "material-ui/GridList"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { FacebookPost } from "./FacebookPost"
import { PageSection } from "./PageSection"

type Props = {
  header: string
  posts: Array<string>
}

const facebookPosts: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
  header,
  posts,
}) => (
  <PageSection header={header}>
    <Grid container style={{}}>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.2}>
          {posts.map(postId => (
            <GridListTile key={postId} className={classes.gridListTile}>
              <FacebookPost postId={postId} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Grid>
  </PageSection>
)

const backgroundStyle = (image: any) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  }
}

type StyleClassNames = {
  root: string
  gridList: string
  title: string
  chipsGrid: string
  gridListTile: string
}

const styles: StyleRulesCallback = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: theme.palette.background.paper,
    width: "100%",
  },
  gridList: {
    flexWrap: "nowrap",
    height: 430,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary[200],
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  gridListTile: {
    height: "unset !important",
    maxWidth: "500px !important",
    minWidth: "350px !important",
  },
})

export const FacebookPosts = withStyles(styles)<Props>(facebookPosts)
