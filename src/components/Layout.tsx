import React from "react"

import { Header } from "./Header"
import { Footer } from "./Footer"

import "../styles/default.scss"
import styles from "./Layout.module.scss"

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  )
}
