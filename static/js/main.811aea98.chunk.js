(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(t,e,a){t.exports=a(22)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(10),s=a.n(r),c=(a(17),a(1)),i=a(2),u=a(4),l=a(3),h=a(5),p=(a(18),a(11)),d=a(7),f=(a(19),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"darVuelta",value:function(){!this.props.bocaArriba&&this.props.alDarseVuelta&&this.props.alDarseVuelta(this.props.contenido,this.props.id)}},{key:"render",value:function(){var t=["ficha"];this.props.resuelta&&t.push("resuelta"),this.props.bocaArriba||t.push("boca-abajo");var e=t.join(" ");return o.a.createElement("div",{className:e,onClick:this.darVuelta.bind(this)},this.props.bocaArriba?this.props.contenido:"")}}]),e}(o.a.Component));f.defaultProps={bocaArriba:!1,resuelta:!1};var b=a(6),m=a.n(b),v=(a(21),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={contenidosMezclados:m.a.shuffle(t.contenidos.concat(t.contenidos)),fichasActuales:[],fichasBocaArriba:[],paresEncontrados:[]},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"isBocaArriba",value:function(t){return m.a.includes(this.state.fichasBocaArriba,t)}},{key:"contenidoDe",value:function(t){return this.state.contenidosMezclados[t]}},{key:"ponerBocaAbajo",value:function(t){this.setState(Object(d.a)({},this.state,{fichasBocaArriba:this.state.fichasBocaArriba.filter(function(e){return!m.a.includes(t,e)})}))}},{key:"procesarPar",value:function(t){var e=this;if(this.contenidoDe(t[0])===this.contenidoDe(t[1])){var a=[].concat(Object(p.a)(this.state.paresEncontrados),[t]);return a.length===this.props.contenidos.length&&m.a.isFunction(this.props.onCompletado)&&this.props.onCompletado.call(a),a}return setTimeout(function(){return e.ponerBocaAbajo(t)},2e3),this.state.paresEncontrados}},{key:"agregarAParDeFichas",value:function(t){var e=this.state.fichasActuales.concat(t);return 2===e.length?{paresEncontrados:this.procesarPar(e),fichasActuales:[]}:{fichasActuales:e}}},{key:"seleccionarFicha",value:function(t,e){this.setState(Object(d.a)({},this.state,{fichasBocaArriba:this.state.fichasBocaArriba.concat(e)},this.agregarAParDeFichas(e)))}},{key:"calculateStyle",value:function(){return{gridTemplateColumns:"repeat(".concat(this.props.columnas,", fit-content(120px))")}}},{key:"isResuelta",value:function(t){return m.a.flatten(this.state.paresEncontrados).includes(t)}},{key:"render",value:function(){var t=this,e=this.state.contenidosMezclados.map(function(e,a){return o.a.createElement(f,{alDarseVuelta:t.seleccionarFicha.bind(t),id:a,key:a,resuelta:t.isResuelta(a),bocaArriba:t.isBocaArriba(a),contenido:e})});return o.a.createElement("div",{style:this.calculateStyle(),className:"tablero"},e)}}]),e}(o.a.Component));v.defaultProps={columnas:3};var A=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Small Memotest"),o.a.createElement(v,{columnas:4,contenidos:["\ud83e\udd21","\ud83d\udc79","\ud83d\udc7b","\ud83d\udc7d","\ud83d\udc7e","\ud83e\udd16","\ud83d\ude3a","\ud83d\ude4a"],onCompletado:function(){return window.alert("Ganaste!!")}})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.811aea98.chunk.js.map