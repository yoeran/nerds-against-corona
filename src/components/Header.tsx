import { Link } from "gatsby"
import React from "react"

import { Screenreader } from "./Screenreader"

import logoSrc from "../images/logo-nerds-against-corona.svg"

import styles from "./Header.module.scss"

export const Header = () => (
  <header className={styles.wrap}>
    <h1>
      <Link to="/" className={styles.link}>
        <img src={logoSrc} className={styles.logo} alt="Nerds Against Corona" />
        <Screenreader>Nerds Against Corona</Screenreader>
      </Link>
    </h1>
  </header>
)
