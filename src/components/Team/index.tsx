import { Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { map, test } from "ramda"
import * as React from "react"

import { PageSection } from "../PageSection"
import * as asgeirImg from "./asgeir.jpg"
import * as eilevImg from "./eilev.jpg"
import * as ingerImg from "./inger.jpg"
import * as designerImg from "./designer.jpg"
import * as developerImg from "./developer.jpg"


type Props = {
  header: string
  people: Array<Person>
}

const team: React.SFC<Props & { classes: StyleClassNames }> = ({
  header,
  classes,
  people,
}) => (
  <PageSection
    header={header}
    headerColor="inherit"
    className={classes.pageSection}
  >
    <Grid container direction="row" justify="center">
      <Typography type="subheading" color="inherit" gutterBottom>
        Vi er lokalisert i Hallingdal med kontorer på Gol
      </Typography>
    </Grid>
    <Grid container direction="row" justify="center">
      {map(
        (person: Person) => (
          <Grid
            item
            xs={12}
            md={4}
            sm={4}
            key={person.name}
            className={classes.personOuter}
          >
            <div className={classes.item}>
              <a href={person.linkedinUrl} target="_blank">
                {personPhoto(person.name, classes.img)}
              </a>
              <Typography type="headline" color="inherit" gutterBottom>
                <a className={classes.name} href={person.linkedinUrl}>
                  {person.name}
                </a>
              </Typography>
              <Typography
                type="body1"
                color="inherit"
                gutterBottom
                align="center"
              >
                {person.description}
              </Typography>
              <div className={classes.icons}>{renderIcons(person)}</div>
            </div>
          </Grid>
        ),
        people
      )}
    </Grid>
  </PageSection>
)

type StyleClassNames = {
  personOuter: string
  img: string
  header: string
  pageSection: string
  item: string
  name: string
  icons: string
}

const styles: StyleRulesCallback = theme => ({
  personOuter: {
    textAlign: "center",
  },
  img: {
    borderRadius: "100%",
    width: 150,
    height: 150,
  },
  pageSection: {
    backgroundColor: "#2c2b2d",
    color: "#fff",
  },
  item: {
    textAlign: "center",
    padding: "2em",
    maxWidth: 250,
    margin: "auto",
  },
  name: {
    textDecoration: "none",
    color: "#fff",
  },
  icons: {
    fontSize: 20,
  },
})

export const Team = withStyles(styles)<Props>(team)

const personPhoto = (name: string, imgClassName: string) => {
  if (test(/^Asgeir/i, name)) {
    return <img src={asgeirImg} alt="Ansatt" className={imgClassName} />
  } else if (test(/^Inger/i, name)) {
    return <img src={ingerImg} alt="Ansatt" className={imgClassName} />
  } else if (test(/^Eilev/i, name)) {
    return <img src={eilevImg} alt="Ansatt" className={imgClassName} />
  } else if (test(/^Designer/i, name)) {
    return <img src={designerImg} alt="Designer" className={imgClassName} />
  } else if (test(/^Programmerer/i, name)) {
    return <img src={developerImg} alt="Developer" className={imgClassName} />
  } else {
    return (
      <img
        src="https://www.sideshowtoy.com/photo_902662_thumb.jpg"
        alt="Ansatt"
        className={imgClassName}
      />
    )
  }
}

type Person = {
  name: string
  img: string
  description: string
  linkedinUrl?: string
  githubUrl?: string
}

const renderIcons = (person: Person) => {
  const icons = []
  if (person.githubUrl) {
    icons.push(
      <a
        href={person.githubUrl}
        title={person.name.split(" ")[0] + "'s GitHub profil"}
        target="_blank"
        key={person.githubUrl}
      >
        <i
          className="ion-social-github"
          style={{ margin: "5px", color: "#fff" }}
        />
      </a>
    )
  }
  if (person.linkedinUrl) {
    icons.push(
      <a
        href={person.linkedinUrl}
        target="_blank"
        title={person.name.split(" ")[0] + "'s LinkedIn profil"}
        key={person.linkedinUrl}
      >
        <i
          className="ion-social-linkedin"
          style={{ margin: "5px", color: "#fff" }}
        />
      </a>
    )
  }
  return icons
}
