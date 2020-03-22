import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Team } from "../components/Team"
import { Sponsors } from "../components/Sponsors"
import { Explainer } from "../components/Explainer"

const IndexPage = () => (
  <Layout>
    <Seo title="Hulp nodig?" />

    <Explainer />
    <Team />
    <Sponsors />
  </Layout>
)

export default IndexPage
