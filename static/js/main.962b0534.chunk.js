(this.webpackJsonprandomquotegen=this.webpackJsonprandomquotegen||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(8),i=o.n(r),u=(o(14),o(1)),c=o(2),s=o(4),l=o(3),h=o(6),m=o(5),d=(o(15),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.divStyle={backgroundColor:this.props.color}}},{key:"componentDidUpdate",value:function(){this.divStyle={backgroundColor:this.props.color}}},{key:"render",value:function(){return a.a.createElement("div",{className:"quoteHolder"},a.a.createElement("div",{className:"QuoteboxShadow"}),a.a.createElement("div",{className:"Quotebox",style:this.divStyle},a.a.createElement("div",{className:"QuoteArea"},a.a.createElement("h2",{className:"Quote"},this.props.quote.quote),a.a.createElement("p",{className:"Author"},this.props.quote.author))))}}]),t}(n.Component)),p=function(e){function t(){var e,o;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).divStyle={backgroundColor:o.props.color},o}return Object(m.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.divStyle={backgroundColor:this.props.color}}},{key:"componentDidUpdate",value:function(){this.divStyle={backgroundColor:this.props.color}}},{key:"render",value:function(){return a.a.createElement("div",{className:"buttonHolder"},a.a.createElement("button",{onClick:this.props.newquote,style:this.divStyle},"Get me a new quote!"))}}]),t}(n.Component),b=[{quote:"What a heavy burden is a name that has become too famous.",author:"Voltaire"},{quote:"If you are a leader, you should never forget that everyone needs encouragement. And everyone who receives it - young or old, successful or... ",author:"John C. Maxwell "},{quote:"America is known as a country that welcomes people to its shores. All kinds of people. The image of the Statue of Liberty with Emma Lazarus famous... ",author:"Ruth Bader Ginsburg"},{quote:"To be famous, in fact, one has only to kill ones landlady.",author:"Albert Camus"},{quote:"I remember debating the finer points of flaky pastry with my chicken-pot-pie-obsessed American dad. I remember the divine mix of Thai food, TV...",author:"Chrissy Teigen"},{quote:"You might not make it to the top, but if you are doing what you love, there is much more happiness there than being rich or famous.",author:"Tony Hawk"},{quote:"The nice thing about being a celebrity is that, if you bore people, they think its their fault.",author:"Henry Kissinger "}],f=function(){var e=Math.floor(Math.random()*Math.floor(b.length));return b[e]},y=function(){return Math.floor(Math.random()*Math.floor(255))},v=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={color:"rgb(208,92,154)"},e.newquote.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.newquote()}},{key:"newquote",value:function(){var e=f();this.setState({quote:e}),this.setState(this.returnColorObject())}},{key:"returnColor",value:function(){return"rgb(".concat(y(),",").concat(y(),",").concat(y(),")")}},{key:"returnColorObject",value:function(){return{color:this.returnColor()}}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,{color:this.state.color,quote:f()}),a.a.createElement(p,{color:this.state.color,newquote:this.newquote.bind(this)}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,o){e.exports=o(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.962b0534.chunk.js.map