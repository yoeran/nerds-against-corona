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
          digitale skills vrijwillig in te zetten. Denk daarbij aan een soort
          mini-hackathons, waar we in korte tijd een probleem proberen op te
          lossen met alle expertises uit ons team.
        </p>
      </div>

      <h4>💭 Hulp nodig? Dit gratis initiatief is bedoeld voor:</h4>
      <ul>
        <li>
          Goede doelen / projecten die anderen proberen te helpen in deze crisis
        </li>
        <li>
          Bedrijven en ondernemers die geraakt worden door nieuwe beperkende
          wetgeving
        </li>
      </ul>

      <h4>✅ Spelregels</h4>
      <ul>
        <li>
          Houd de aanvraag klein. Het liefst helpen we zoveel mogelijk mensen,
          dat werkt beter met behapbare en haalbare taken. Idealiter is een
          aanvraag in maximaal 1 werkdag af te ronden.
        </li>
        <li>Vul het formulier in, aanvragen via mail worden genegeerd</li>
      </ul>

      <h4>💡 Voorbeelden</h4>
      <ul>
        <li>Een simpele webpagina om je nieuwe initatief uit te leggen</li>
        <li>
          Advies en opzetten van videochat om je bedrijf draaiende te houden
          (bijvoorbeeld lessen via videochat)
        </li>
        <li>Online tool inrichten om je vrijwilligers te managen</li>
        <li>Visuals voor je project</li>
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
