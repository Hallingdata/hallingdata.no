import { Grid, Typography } from "material-ui"
import { map, test } from "ramda"
import * as React from "react"

import * as asgeirImg from "./asgeir.jpg"
import * as eilevImg from "./eilev.jpg"
import * as ingerImg from "./inger.jpg"
import * as style from "./team.module.css"

type Props = {
  people: Array<Person>
}

export const Team = (props: Props) => (
  <div className={style.outer}>
    <Typography
      type="display1"
      color="inherit"
      className={style.header}
      gutterBottom
    >
      Team
    </Typography>

    <Grid container direction="row" justify="center">
      {map(
        (person: Person) => (
          <Grid
            item
            xs={12}
            md={3}
            sm={4}
            key={person.name}
            className={style.personOuter}
          >
            <div className={style.item}>
              {personPhoto(person.name)}
              <Typography type="headline" color="inherit" gutterBottom>
                {person.name}
              </Typography>
              <Typography
                type="body1"
                color="inherit"
                gutterBottom
                align="center"
              >
                {person.description}
              </Typography>
              <div className={style.icons}>{renderIcons(person)}</div>
            </div>
          </Grid>
        ),
        props.people
      )}
    </Grid>
  </div>
)

const personPhoto = (name: string) => {
  if (test(/^Asgeir/, name)) {
    return <img src={asgeirImg} alt="Ansatt" className={style.img} />
  }
  else if (test(/^Inger/, name)) {
    return <img src={ingerImg} alt="Ansatt" className={style.img} />
  }
  else if (test(/^Eilev/, name)) {
    return <img src={eilevImg} alt="Ansatt" className={style.img} />
  }
  else {
    return <img src="https://www.sideshowtoy.com/photo_902662_thumb.jpg" alt="Ansatt" className={style.img} />
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
      <a href={person.githubUrl} target="_blank" key={person.githubUrl}>
        <i
          className="ion-social-github"
          style={{ margin: "5px", color: "#fff" }}
        />
      </a>
    )
  }
  if (person.linkedinUrl) {
    icons.push(
      <a href={person.linkedinUrl} target="_blank" key={person.linkedinUrl}>
        <i
          className="ion-social-linkedin"
          style={{ margin: "5px", color: "#fff" }}
        />
      </a>
    )
  }
  return icons
}
