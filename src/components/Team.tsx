import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./Team.module.scss"

import { MEMBERS } from "../members"

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
      allFile(filter: { dir: { regex: "/team/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="row">
      <h2 className="row-title">Meet the nerds</h2>

      <p className="row-para">
        Ben je creatief en vind je het leuk om in korte tijd oplossingen te
        verzinnen en uit te werken? Wil je je digitale skills vrijwillig
        inzetten om anderen te helpen? Meld je dan aan als nerd en doe met ons
        mee! Klik op de aanmeld knop en vul het formulier in.
      </p>

      <div className={styles.wrap}>
        {MEMBERS.map(member => {
          const image = data.allFile.edges.find(
            edge => edge.node.name === member.id
          )

          return (
            <div key={member.id} className={styles.member}>
              <Img
                className={styles.memberImage}
                fluid={image.node.childImageSharp.fluid}
              />
              <div className={styles.memberInfo}>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberTitle}>{member.title}</p>
                <p className={styles.memberSkills}>{member.skills}</p>
              </div>
            </div>
          )
        })}
      </div>

      <a
        className="cta-btn row-btn"
        href="https://forms.gle/cBtEH6AsgDcjgF5z8"
        target="_blank"
        rel="noreferrer"
      >
        <span>Aanmelden als nerd!</span>
      </a>
    </section>
  )
}
