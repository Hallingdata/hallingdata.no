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
    <Typography type="display1" color="inherit" className={style.header} gutterBottom>
      Team
    </Typography>

    <Grid container justify="space-around">
      {map(
        (person: Person) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={person.name}
            className={style.personOuter}
          >
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
    description: "Prosjektleder Administrator"
  },
  {
    name: "Eilev Halbjørhus",
    img: eilevImg,
    description: " Databaseutvikler Oracle-ekspert Daglig leder "
  },
  {
    name: "Asgeir Sognefest",
    img: asgeirImg,
    description: "Full-stack utvikler Blockchain-entusiast Konsulent"
  }
]
