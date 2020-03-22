import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./Team.module.scss"

const MEMBERS = [
  {
    id: "yoeran",
    name: "Yoeran Luteijn",
    title: "Creative Developer",
    skills:
      "Bouwen van websites en digitale tools, hulp met hosting, prototypes en IT advies.",
  },
]

export const Team = () => {
  const data = useStaticQuery(graphql`
    fragment squareImage on File {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    query {
      yoeran: file(relativePath: { eq: "team/yoeran-luteijn.jpg" }) {
        ...squareImage
      }
    }
  `)

  return (
    <section className="row">
      <h2 className="row-title">Team</h2>
      <a
        className="cta-btn"
        href="https://forms.gle/cBtEH6AsgDcjgF5z8"
        target="_blank"
        rel="noreferrer"
      >
        <span>Join the team!</span>
      </a>
      <p className="row-para">
        Wil jij je digitale skills ook inzetten om anderen te helpen? Stuur dan
        een bericht, we nemen dan zsm contact op.
      </p>

      <div className={styles.wrap}>
        {MEMBERS.map(member => (
          <div key={member.id} className={styles.member}>
            <Img
              className={styles.memberImage}
              fluid={data[member.id].childImageSharp.fluid}
            />
            <div className={styles.memberInfo}>
              <h4 className={styles.memberName}>{member.name}</h4>
              <p className={styles.memberTitle}>{member.title}</p>
              <p className={styles.memberSkills}>{member.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
