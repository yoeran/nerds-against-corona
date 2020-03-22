import React from "react"

import styles from "./Screenreader.module.scss"

interface Props extends React.ComponentProps<"span"> {
  focusable?: boolean
}

export const Screenreader = ({ focusable, children }: Props) => (
  <span
    className={[styles.wrap, focusable ? styles.isFocusable : ""].join(" ")}
    tabIndex={focusable ? 0 : undefined}
  >
    {children}
  </span>
)
