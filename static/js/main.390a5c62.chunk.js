(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(3),i=a.n(s),r=(a(12),a(4)),o=a(5),l=a(7),d=a(6),u=(a(13),a(0)),b=function(e){var t=e.message;return Object(u.jsx)("p",{className:"notifications",children:t})},j=(a(15),function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(u.jsx)("div",{children:t>0||a>0||c>0?Object(u.jsxs)("ul",{className:"stats__list",children:[Object(u.jsxs)("li",{className:"stats__item",children:["Good: ",t]}),Object(u.jsxs)("li",{className:"stats__item",children:["Neutral: ",a]}),Object(u.jsxs)("li",{className:"stats__item",children:["Bad: ",c]}),Object(u.jsxs)("li",{className:"stats__item",children:["Total: ",n]}),Object(u.jsxs)("li",{className:"stats__item",children:["Positive feedback: ",s,"%"]})]}):Object(u.jsx)(b,{message:"No feedback given"})})}),f=(a(16),function(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)("ul",{className:"feedback__list",children:Object.keys(t).map((function(e){return Object(u.jsx)("li",{className:"feedback__item",children:Object(u.jsx)("button",{type:"button",className:"feedback__btn",onClick:a,children:e})},e)}))})}),h=(a(17),function(e){var t=e.title,a=e.children;return Object(u.jsxs)("section",{className:"Section",children:[Object(u.jsx)("h2",{className:"Section__title",children:t}),a]})}),v=h;h.defaultProps={title:""};a(18);var O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){var a=t.target.textContent;"good"!==a?"neutral"!==a?"bad"!==a||e.setState((function(e){return{bad:e.bad+1}})):e.setState((function(e){return{neutral:e.neutral+1}})):e.setState((function(e){return{good:e.good+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return Math.ceil(e.state.good/t*100)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(u.jsxs)("div",{className:"feedback__wrapper",children:[Object(u.jsx)(v,{title:"Please leave feedback",children:Object(u.jsx)(f,{options:this.state,onLeaveFeedback:this.addFeedback})}),Object(u.jsx)(v,{title:"Statistics",children:Object(u.jsx)(j,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component);O.defaultProps={good:0,neutral:0,bad:0};var m=O;a(19);var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(m,{})})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.390a5c62.chunk.js.map