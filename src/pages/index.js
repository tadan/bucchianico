import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <p>Ciao! Sei arrivato qui perché sei alla ricerca di qualcosa o qualcuno legato alla città di <strong>Bucchianico</strong>, in Abruzzo. </p>
    <p><i>...vero?</i></p> 
    <p>Su questo sito trovi ció che resta dell’Associazione Bucchianico.net. Di cosa si tratta? Bucchianico.net è stata parte delle attività artistiche, culturali e sociali della città di Bucchianico per più di 10 anni. In paese in molti la notarono e se la ricordano. Su Internet sono in milioni.
    </p> 
    <p> Nata inizialmente come un semplice “<i>forum</i>” nell’Aprile 2001, quando un gruppo di ragazzi di Bucchianico decisero di scoprire le potenzialità della rete attraverso il sito Internet http://bucchianico.net. </p>
    <p>Dopo il forum, un nuovo sito, un blog e diverse attività il gruppo decise di trasformare il progetto in una reale associazione no-profit, era il 2007. L’obiettivo era quello di promuovere la città di Bucchianico come destinazione turistica e culturale esclusivamente attraverso Internet.</p>
    <p>La Festa dei Banderesi e la presenza della Chiesa dedicata a San Camillo de Lellis, concittadino di Bucchianico, sono stati i due principali temi curati dall’Associazione. Inoltre mostre e concorsi fotografici, streaming online degli eventi principali, attività culturali, campagne promozionali sui principali social media e un vasto archivio di foto e video tutti dedicati al piccolo centro Abruzzese. </p>
    <p>Nel 2015 l’Associazione ha smesso di operare per mancanza di persone che si mettessero in gioco per il bene del paese, per la sua crescita culturale e sociale. Molti ragazzi che erano parte di questo gruppo hanno lasciato Bucchianico, la regione e come nel mio caso, l’Italia. </p>
    <p>Non eravamo quelli che sapevamo usare il computer ma piuttosto coloro che hanno promosso l’Internet come valido strumento per la crescita culturale e sociale di un piccolo paese come Bucchianico. Quando Internet non era fruibile nelle nostre mani come oggi. Ne è valsa la pena fin quando la rete ha per davvero cambiato la vita di tutti, anche delle persone che non ci credevano.</p>
    <p>Vuoi saperne di più? Bucchianico.net cerca di coinvolgere tutti coloro interessati alla vera potenzialità della rete, ovvero quella di collaborare l'una/l'uno con l'altra/l'altro per il bene comune. Abbiamo aperto di nuovo questa pagina, l'abbiamo pubblicata su <Link to="https://github.com/tadan/bucchianico">GitHub</Link> dove anche tu puoi contribuire a questa iniziativa. L'abbiamo fatta con <Link to="https://it.reactjs.org/">React</Link>, ovvero una delle più recenti piattaforme per costruire siti initernet. Dagli un'occhiata, ti potrebbe aprire un nuovo mondo.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
