import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Team } from "../components/Team"
import { Sponsors } from "../components/Sponsors"
import { Explainer } from "../components/Explainer"

import headerImage from "../images/nerds-against-corona-header.png"

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
        Check dan{" "}
        <a href="https://www.iwillhelpyou.nl/" target="_blank">
          iWillHelpYou.nl
        </a>
      </p>
    </section>
  </Layout>
)

export default IndexPage
