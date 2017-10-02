import * as React from "react"

import Container from "../components/container"

declare const require: (path: string) => any
const styles = require("./about-css-modules.module.css");

export default () =>
  <Container>
    <h1>About CSS Modules</h1>
    <p className={styles.paragraph}>CSS Modules are cool</p>
  </Container>