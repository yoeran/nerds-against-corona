import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Team } from "../components/Team"
import { Sponsors } from "../components/Sponsors"
import { Explainer } from "../components/Explainer"

import headerImage from "../images/nerds-against-corona-header.png"

import coronaCommunityCare from "../images/corona-community-care_logo.png"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Hulp nodig?"
      meta={[{ property: "og:image", content: headerImage }]}
    />

    <Explainer />
    <Team />
    <Sponsors />

    <section className="row">
      <p>
        Ben je geen nerd maar wil je wel helpen?
        <br />
        Of heb je hulp nodig, maar niet op digitaal vlak?
        <br />
        Ga dan naar:
        <a
          href="https://coronacommunitycare.nl/"
          className="ccc-logo"
          target="_blank"
          rel="noreferer"
        >
          <img src={coronaCommunityCare} alt="Corona Community Care" />
        </a>
      </p>
    </section>
  </Layout>
)

export default IndexPage
