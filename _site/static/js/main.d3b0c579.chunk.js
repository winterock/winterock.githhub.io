(this["webpackJsonplife-in-weeks"]=this["webpackJsonplife-in-weeks"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),i=n.n(o),s=(n(15),n(2)),l=n(3),c=n(5),u=n(4),d=n(6),v=(n(16),n(17),n(18),n(7)),_=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={events:[],lookup:{},loaded:!1,today:new Date,last_event_date:new Date},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.events.length>0?this.got_events(this.props.events):null!==this.props.get_events&&this.props.get_events(this.got_events.bind(this))}},{key:"componentWillReceiveProps",value:function(e){null===this.props.get_events&&e.events.length!==this.state.events.length&&this.got_events(e.events)}},{key:"event_end_date",value:function(e){return e.date_end?new Date(e.date_end):new Date(e.date_start)}},{key:"got_events",value:function(e){var t=this,n=new Date;if(e.length>0){var a=e.sort((function(e,n){var a=t.event_end_date(e),r=t.event_end_date(n);return r>a?1:r<a?-1:0}))[0],r=this.event_end_date(a);r>n&&(n=r)}this.setState({events:e,loaded:!0,last_event_date:n},(function(){t.generate_lookup()}))}},{key:"print_date",value:function(e){var t=e.getDate(),n=e.getMonth()+1,a=t<10?"0"+t:""+t;return n<10&&(n="0"+n),e.getFullYear()+"-"+n+"-"+a}},{key:"generate_lookup",value:function(){var e=this,t={};this.all_weeks((function(n,a){t[e.print_date(n)]=e.get_events_in_week(n,a)})),this.setState({lookup:t},(function(){v.a.rebuild()}))}},{key:"single_event",value:function(e){return(e.single||!e.date_end||e.date_start===e.date_end)&&!e.ongoing}},{key:"get_events_in_week",value:function(e,t){var n=this,a=this.state,r=a.events,o=a.today,i=this.props,s=i.birthday,l=i.subject_name,c=o>=e&&o<=t,u=null,d=!1,v=r.filter((function(a){var r=new Date(a.date_start),o=new Date(a.date_end);a.ongoing&&(o=new Date);var i=r>=e&&r<t||o>=e&&o<t||r<=e&&o>=t;return i&&(a.color&&(u=a.color),n.single_event(a)&&(d=!0)),i}));if(s){for(var _=0,h=!1;e<t;){if(e.getMonth()===s.getMonth()&&e.getDate()===s.getDate()){h=!0,_=e.getFullYear()-s.getFullYear();break}e.setDate(e.getDate()+1)}if(h){u=this.props.birthday_color;var g,p=null===l,f=p?"I":l;if(0===_){var w=p?"am":"is";g="".concat(f," ").concat(w," born!")}else{var k=p?"turn":"turns";g="".concat(f," ").concat(k," ").concat(_," on ").concat(s.getMonth()+1,"/").concat(s.getDate())}v.push({title:g,color:u})}}return c&&(u="white",v.push({title:"This week",color:u})),{events:v,color:u,single:d}}},{key:"get_end",value:function(){var e=this.state.last_event_date,t=new Date(e.getTime());return t.setDate(t.getDate()+this.props.project_days),t}},{key:"all_weeks",value:function(e){for(var t=this.props.birthday,n=(this.state.today,this.get_end()),a=new Date(t.getTime());a<=n;){var r=new Date(a.getTime());a.setDate(a.getDate()+7),e(r,new Date(a.getTime()))}}},{key:"render_week",value:function(e,t){var n,a,o=this.print_date(e),i=this.state.today,s=this.state.lookup[o],l=[],c=!1;null!=s&&(l=s.events,a=s.color,c=s.single);var u=e>i,d={};l.length>0&&(d.backgroundColor=a);var v=[o].concat(l.map((function(e){return e.title}))),_="week";return u&&(_+=" future"),c&&(n=r.a.createElement("span",{className:"singleEvents"})),r.a.createElement("div",{className:_,key:o,style:d,"data-tip":v.join(", ")},n)}},{key:"render_all_weeks",value:function(){var e=this,t=[];return this.all_weeks((function(n,a){t.push(e.render_week(n,a))})),t}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{place:"top",effect:"solid"}),r.a.createElement("div",{className:"LifeTimeline"},this.render_all_weeks()))}}]),n}(r.a.Component);_.defaultProps={birthday:null,birthday_color:"#F89542",events:[],project_days:365*(2072-(new Date).getFullYear()),subject_name:null,get_events:null};var h,g=_,p=["#D8DEE9","#E5E9F0","#ECEFF4"],f=["#8FBCBB","#88C0D0","#81A1C1","#5E81AC"],w=["#BF616A","#D08770","#EBCB8B","#A3BE8C","#B48EAD"],k=[{date_start:new Date("2006-09-01"),date_end:new Date("2010-06-01"),title:"SYSU",color:w[1]},{date_start:new Date("2010-07-01"),date_end:new Date("2011-12-07"),title:"Shenzhen"},{date_start:new Date("2011-12-07"),date_end:new Date("2013-12-01"),title:"Beijing",color:f[1]},(h={date_start:new Date("2013-12-01")},Object(d.a)(h,"date_start",new Date("2014-10-01")),Object(d.a)(h,"title","Mianyang"),h),{date_start:new Date("2014-10-01"),date_end:"2017-10-01",title:"Beijing again",color:f[1]},{date_start:new Date("2017-10-01"),date_end:new Date,title:"Amsterdam",color:w[0]}],D=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"generate_events",value:function(e){e(k)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Life by Weeks"),r.a.createElement(g,{subject_name:"Wentao",birthday:new Date("1987-12-07"),birthday_color:p[0],get_events:this.generate_events.bind(this)}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d3b0c579.chunk.js.map