import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage - Bucchianico.net" />
    <h1>L’Internet portata a Bucchianico</h1>
    <p>Ciao! Sei arrivato qui perché sei alla ricerca di qualcosa o qualcuno legato alla città di Bucchianico, in Abruzzo. Vero? Hai quasi fatto centro. Su questo sito trovi ció che resta dell’Associazione Bucchianico.net. Di cosa si tratta? Bucchianico.net è stata parte delle attività culturali e sociali della città di Bucchianico per più di 10 anni. In molti a Bucchianico l'hanno notata e se la ricordano. Su Internet in milioni.
    </p> 
    <p> Nata inizialmente come un semplice “forum” nell’Aprile 2001, quando un gruppo di ragazzi di Bucchianico decisero di scoprire le potenzialità della rete attraverso il sito Internet http://bucchianico.net. </p>
    <p>La Festa dei Banderesi e la presenza della Chiesa dedicata a San Camillo de Lellis, concittadino di Bucchianico, sono stati i due principali temi curati dall’Associazione. Inoltre mostre e concorsi fotografici, streaming online degli eventi principali, attività culturali, campagne promozionali sui principali social media e un vasto archivio di foto e video tutti dedicati al piccolo centro Abruzzese. </p>
    <p>Nel 2015 l’Associazione ha smesso di operare per mancanza di persone che si mettessero in gioco per il bene del paese, per la sua crescita culturale e sociale. Molti ragazzi che erano parte di questo gruppo hanno lasciato Bucchianico, la regione e come nel mio caso, l’Italia. </p>
    <p>Non eravamo quelli che sapevamo usare il computer ma piuttosto coloro che hanno promosso l’Internet come valido strumento per la crescita culturale e sociale di un piccolo paese come Bucchianico. Quando Internet non era fruibile nelle nostre mani come oggi. Ne è valsa la pena fin quando la rete ha per davvero cambiato la vita di tutti, anche delle persone che non ci credevano.</p>
    <p>Vuoi saperne di più? Bucchianico.net cerca di coinvolgere tutti coloro interessati alla vera potenzialità della rete, ovvero quella di collaborare l'uno/l'una con l'altro per il bene comune. Abbiamo aperto di nuovo questa pagina, l'abbiamo pubblicata su GitHub dove anche tu puoi contribuire a costruire qualcosa di nuovo. L'abbiamo costruita con React e qualora lo volessi, ti potrebbe aprire un nuovo mondo.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Qui trovi di più</Link>
  </Layout>
)

export default IndexPage
