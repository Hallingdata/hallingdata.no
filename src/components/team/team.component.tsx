import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/grid"
import { map } from "ramda"
import { Typography, Paper } from "material-ui"
import * as asgeirImg from "./asgeir.jpg"
import * as eilevImg from "./eilev.jpg"
import * as ingerImg from "./inger.jpg"
import * as style from "./team.module.css"

type Props = {}

const TeamComponent = (props: Props) => (
  <div className={style.outer}>
    <Typography
      type="display1"
      color="inherit"
      className={style.header}
      gutterBottom
    >
      Team
    </Typography>

    <Grid container justify="center">
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
            </div>
          </Grid>
        ),
        people
      )}
    </Grid>
  </div>
)

export default TeamComponent

type Person = {
  name: string
  img: string
  description: string
}

const people: Array<Person> = [
  {
    name: "Inger Vik",
    img: ingerImg,
    description: "Inger er prosjektleder og administrator."
  },
  {
    name: "Eilev Halbjørhus",
    img: eilevImg,
    description: "Eilev er databaseutvikler, Oracle-ekspert og vår daglig leder."
  },
  {
    name: "Asgeir Sognefest",
    img: asgeirImg,
    description: "Asgeir er full-stack utvikler, blockchain-entusiast og har mastergrad i programutvikling."
  }
]
