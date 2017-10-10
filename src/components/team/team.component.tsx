import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/grid"
import { map } from "ramda"
import { Typography, Paper, Icon } from "material-ui"
import * as asgeirImg from "./asgeir.jpg"
import * as eilevImg from "./eilev.jpg"
import * as ingerImg from "./inger.jpg"
import * as style from "./team.module.css"

type Props = {}

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
              <img src={person.img} alt="Ansatt" className={style.img} />
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
        people
      )}
    </Grid>
  </div>
)

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
        <i className="ion-social-github" style={{ margin: "5px", color: "#fff" }}/>
      </a>
    )
  }
  if (person.linkedinUrl) {
    icons.push(
      <a href={person.linkedinUrl} target="_blank" key={person.linkedinUrl}>
        <i className="ion-social-linkedin" style={{ margin: "5px", color: "#fff" }} />
      </a>
    )
  }
  return icons
}

const people: Array<Person> = [
  {
    name: "Inger Vik",
    img: ingerImg,
    description: "Inger er prosjektleder og administrator.",
    linkedinUrl:
      "https://www.linkedin.com/in/inger-vik-halbj%C3%B8rhus-99713939/?ppe=1"
  },
  {
    name: "Eilev Halbjørhus",
    img: eilevImg,
    description:
      "Eilev er databaseutvikler, Oracle-ekspert og vår daglig leder.",
    linkedinUrl: "https://www.linkedin.com/in/eilevhalbjorhus/"
  },
  {
    name: "Asgeir Sognefest",
    img: asgeirImg,
    description:
      "Asgeir er full-stack utvikler, blockchain-entusiast og har mastergrad i programutvikling.",
    linkedinUrl: "https://www.linkedin.com/in/sogasg",
    githubUrl: "https://github.com/sogasg"
  }
]
