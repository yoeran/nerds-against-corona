import React from "react"

import styles from "./Footer.module.scss"

export const Footer = () => (
  <footer className={styles.wrap}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)
