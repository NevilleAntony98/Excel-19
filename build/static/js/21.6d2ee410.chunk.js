(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{180:function(e,t,n){e.exports={loader:"style_loader__2so5H","event-grid":"style_event-grid__1nBWP",header:"style_header__2Zb4q",title:"style_title__dUwz5",subtitle:"style_subtitle__1SdNg",underline:"style_underline__1dXC-"}},237:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var a=n(14),r=n.n(a),i=n(20),l=n(10),s=n(9),c=n(12),o=n(11),d=n(13),u=n(0),v=n.n(u),m=n(4),f=n(15),h=n(6),p=n(180),_=n.n(p),b=(n(50),n(53)),E=Object(m.a)(function(){return n.e(1).then(n.bind(null,80))}),w=Object(m.a)(function(){return n.e(2).then(n.bind(null,81))}),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={events:[],loading:!0,scrollPos:window.scrollY},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({events:b.filter(function(e){return"Event"===e.type}),loading:!1});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=[],t=this.state.events,a=!0;for(var r in t){var i=v.a.createElement("div",{key:r,className:_.a.events},v.a.createElement(f.b,{to:"events/".concat(t[r].codename),style:{textDecoration:"none"}},v.a.createElement(w,{details:t[r],direction:a})));a=!a,e.push(i)}return v.a.createElement("div",null,v.a.createElement("div",{className:_.a.header},v.a.createElement("div",{className:_.a.title},"Events"),v.a.createElement("div",{className:_.a.subtitle},"Excel 2019")),v.a.createElement("div",{className:_.a.underline}),this.state.loading&&v.a.createElement("div",{id:_.a["event-grid"]},v.a.createElement("img",{className:_.a.loader,src:n(51),alt:""})),!this.state.loading&&v.a.createElement("div",{id:_.a["event-grid"]},e),v.a.createElement(h.a,{path:"/events/:event",component:E}))}}]),t}(v.a.Component)}}]);
//# sourceMappingURL=21.6d2ee410.chunk.js.map