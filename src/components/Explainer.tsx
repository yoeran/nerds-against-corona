import React from "react"

import styles from "./Explainer.module.scss"

export const Explainer = () => {
  return (
    <section className="row">
      <div className={styles.intro}>
        <p>
          Momenteel houdt COVID-19 de wereld in zijn greep. Het heeft impact op
          allerlei onderdelen van het dagelijks leven. Om anderen te helpen
          hebben we besloten om een gedeelte van onze tijd vrij te maken en onze
          digitale skills in te zetten. Denk daarbij aan een soort
          mini-hackathons, waar we in korte tijd een probleem proberen op te
          lossen met alle expertises uit ons team.
        </p>

        <p>
          Het is tijd om onze handen (in gedachten en{" "}
          <a
            target="_blank"
            href="https://www.rijksoverheid.nl/onderwerpen/coronavirus-covid-19/veelgestelde-vragen-over-de-aanpak-van-het-nieuwe-coronavirus-in-nederland"
          >
            met gepaste afstand
          </a>
          ) ineen te slaan en elkaar te helpen.
        </p>
      </div>

      <h4>Hulp nodig? Dit initiatief is bedoeld voor:</h4>
      <ul>
        <li>
          Goede doelen / initiatieven die anderen proberen te helpen in deze
          crisis
        </li>
        <li>Bedrijven en ondernemers die geraakt worden door de crisis</li>
      </ul>

      <h4>Spelregels</h4>
      <ul>
        <li>
          Houd de aanvraag beknopt qua werkzaamheden. Het liefst helpen we
          zoveel mogelijk mensen, dat werkt beter met behapbare en realistische
          taken
        </li>
        <li>Toon indien mogelijk aan dat er draagvlak voor je aanvraag is</li>
        <li>Vul het formulier in, aanvragen via mail worden genegeerd</li>
      </ul>

      <div className={styles.cta}>
        <a
          className="cta-btn cta-btn--big"
          href="https://forms.gle/fZSvfvtdH7cxduaNA"
          target="_blank"
          rel="noreferrer"
        >
          <span>Aanvraag insturen</span>
        </a>
      </div>
    </section>
  )
}
