(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r,n=i(a("v06X")),o=i(a("XEEL")),l=i(a("uDP2")),s=i(a("j8BX")),c=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=A(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function w(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+l+a+i+t+n+r+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=c.default.createElement(z,(0,s.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,i(a),n):n},z=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,A=e.draggable,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:a,srcSet:i,src:r},f,{onLoad:o,onError:d,ref:t,loading:u,draggable:A,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&m&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,I=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,s.default)({opacity:L?1:0,transition:N?"opacity "+m+"ms":"none"},l),R="boolean"==typeof h?"lightgray":h,C={transitionDelay:m+"ms"},O=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&C,{},l,{},A),x={title:t,alt:this.state.isVisible?"":a,style:O,className:f,itemProp:v};if(p){var V=p,q=V[0];return c.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),R&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&C)}),q.base64&&c.default.createElement(j,{src:q.base64,spreadProps:x,imageVariants:V,generateSources:y}),q.tracedSVG&&c.default.createElement(j,{src:q.tracedSVG,spreadProps:x,imageVariants:V,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(V),c.default.createElement(z,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,s.default)({alt:a,title:t,loading:w},q,{imageVariants:V}))}}))}if(g){var D=g,G=D[0],P=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete P.display,c.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},R&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:R,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},N&&C)}),G.base64&&c.default.createElement(j,{src:G.base64,spreadProps:x,imageVariants:D,generateSources:y}),G.tracedSVG&&c.default.createElement(j,{src:G.tracedSVG,spreadProps:x,imageVariants:D,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(D),c.default.createElement(z,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,s.default)({alt:a,title:t,loading:w},G,{imageVariants:D}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),Q=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:N,sizes:Q,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([Q,d.default.arrayOf(Q)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=L;t.default=R},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),o=/"/g,l=function(e,t,a,i){var r=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),o=a("Bl7J"),l=a("njbD"),s=a("9eSz"),c=a.n(s),d=function(){var e=l.data;return r.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},u=a("vrFN");t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(u.a,{title:"Homepage - Bucchianico.net"}),r.a.createElement("h1",null,"L’Internet a Bucchianico"),r.a.createElement("p",null,"Ciao! Sei arrivato qui perché sei alla ricerca di qualcosa o qualcuno legato alla città di ",r.a.createElement("strong",null,"Bucchianico"),", in Abruzzo. Vero? Hai quasi fatto centro. Su questo sito trovi ció che resta dell’Associazione Bucchianico.net. Di cosa si tratta? Bucchianico.net è stata parte delle attività culturali e sociali della città di Bucchianico per più di 10 anni. In molti a Bucchianico l'hanno notata e se la ricordano. Su Internet in milioni."),r.a.createElement("p",null," Nata inizialmente come un semplice “",r.a.createElement("i",null,"forum"),"” nell’Aprile 2001, quando un gruppo di ragazzi di Bucchianico decisero di scoprire le potenzialità della rete attraverso il sito Internet http://bucchianico.net. "),r.a.createElement("p",null,"La Festa dei Banderesi e la presenza della Chiesa dedicata a San Camillo de Lellis, concittadino di Bucchianico, sono stati i due principali temi curati dall’Associazione. Inoltre mostre e concorsi fotografici, streaming online degli eventi principali, attività culturali, campagne promozionali sui principali social media e un vasto archivio di foto e video tutti dedicati al piccolo centro Abruzzese. "),r.a.createElement("p",null,"Nel 2015 l’Associazione ha smesso di operare per mancanza di persone che si mettessero in gioco per il bene del paese, per la sua crescita culturale e sociale. Molti ragazzi che erano parte di questo gruppo hanno lasciato Bucchianico, la regione e come nel mio caso, l’Italia. "),r.a.createElement("p",null,"Non eravamo quelli che sapevamo usare il computer ma piuttosto coloro che hanno promosso l’Internet come valido strumento per la crescita culturale e sociale di un piccolo paese come Bucchianico. Quando Internet non era fruibile nelle nostre mani come oggi. Ne è valsa la pena fin quando la rete ha per davvero cambiato la vita di tutti, anche delle persone che non ci credevano."),r.a.createElement("p",null,"Vuoi saperne di più? Bucchianico.net cerca di coinvolgere tutti coloro interessati alla vera potenzialità della rete, ovvero quella di collaborare l'una/l'uno con l'altra/l'altro per il bene comune. Abbiamo aperto di nuovo questa pagina, l'abbiamo pubblicata su ",r.a.createElement(n.Link,{to:"https://github.com/tadan/bucchianico"},"GitHub")," dove anche tu puoi contribuire a questa iniziativa. L'abbiamo fatta con ",r.a.createElement(n.Link,{to:"https://it.reactjs.org/"},"React"),", ovvero una delle più recenti piattaforme per costruire siti initernet. Dagli un'occhiata, ti potrebbe aprire un nuovo mondo."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(d,null)),r.a.createElement(n.Link,{to:"/page-2/"},"Qui trovi di più"))}},njbD:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB15vJVGKP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIREiD/2gAIAQEAAQUC2aGei8f/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwEJ/8QAGBAAAwEBAAAAAAAAAAAAAAAAACExAiD/2gAIAQEABj8Cg8onH//EABoQAQEAAgMAAAAAAAAAAAAAAAERACAhYXH/2gAIAQEAAT8hi6noxnNMJFY90//aAAwDAQACAAMAAAAQu8//xAAWEQEBAQAAAAAAAAAAAAAAAAABEFH/2gAIAQMBAT8QUyf/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQIBAT8QQ1n/xAAcEAACAgIDAAAAAAAAAAAAAAABIQAREDFBkeH/2gAIAQEAAT8Qo4HQAwX53KUWaNhTnYoE5Wf/2Q==","aspectRatio":2,"src":"/static/906cb4760e2624201044e8a0be1f1c5f/58d6d/bucchianiconet-logo.jpg","srcSet":"/static/906cb4760e2624201044e8a0be1f1c5f/c6f75/bucchianiconet-logo.jpg 75w,\\n/static/906cb4760e2624201044e8a0be1f1c5f/421ae/bucchianiconet-logo.jpg 150w,\\n/static/906cb4760e2624201044e8a0be1f1c5f/58d6d/bucchianiconet-logo.jpg 300w,\\n/static/906cb4760e2624201044e8a0be1f1c5f/3643e/bucchianiconet-logo.jpg 450w,\\n/static/906cb4760e2624201044e8a0be1f1c5f/f5db2/bucchianiconet-logo.jpg 600w,\\n/static/906cb4760e2624201044e8a0be1f1c5f/0f962/bucchianiconet-logo.jpg 2048w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-456b8a2bb735872bd850.js.map