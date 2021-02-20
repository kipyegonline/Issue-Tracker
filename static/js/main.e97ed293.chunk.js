(this.webpackJsonpissue=this.webpackJsonpissue||[]).push([[0],{159:function(e,t,n){},187:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var r,a,s=n(0),c=n.n(s),i=n(18),o=n.n(i),l=(n(159),n(68)),j=n(20),d=n(60),b=n(220),u=n(223),h=n(77),m=n(229),O=n(230),x=n(241),p=n(106),g=n(40),v=Object(g.a)(r||(r=Object(p.a)(["\n    query($search_term: String!) {\n        search(query: $search_term, type: REPOSITORY, first: 20) {\n            repositoryCount,\n            edges {\n                node {\n                    ... on Repository {\n                        name,\n                        owner {\n                          login  \n                        },\n                        stargazers {\n                            totalCount\n                        },\n                        descriptionHTML,\n                    }\n                }\n            }\n        }\n    }\n"]))),f=Object(g.a)(a||(a=Object(p.a)(["\n    query($name: String!, $owner: String!) {\n        repository(name: $name, owner: $owner) {\n            issues(first: 20, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {\n                nodes {\n                    title,\n                    bodyHTML,\n                    createdAt\n                }\n            }\n        }\n    }\n"]))),y=n(231),T=n(225),C=n(226),N=n(236),w=n(228),k=n(5),S=Object(b.a)({title:{marginTop:"1rem",marginBottom:"1rem",textAlign:"center",backgroundColor:"white"}}),I=function(e){var t=e.title,n=e.bodyHTML,r=S(),a=Object(s.useState)(!1),c=Object(d.a)(a,2),i=c[0],o=c[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(T.a,{button:!0,onClick:function(){return o(!0)},className:r.title,children:Object(k.jsx)(C.a,{children:t})}),Object(k.jsx)(N.a,{maxWidth:"xl",open:i,onClose:function(){return o(!1)},children:Object(k.jsx)(w.a,{children:Object(k.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})})]})})},L=Object(b.a)({root:{flexDirection:"column"},spinnerContainer:{display:"flex",justifyContent:"space-around"},issues:{backgroundColor:"white"},issues1:{backgroundColor:"#d3d3d3"},hr:{color:"white"}}),A=function(e){var t=e.repoName,n=e.repoOwner,r=L(),a=Object(m.useQuery)(f,{variables:{name:t,owner:n}}),s=a.data,c=a.loading,i=a.error;return c?Object(k.jsx)("div",{className:r.spinnerContainer,children:Object(k.jsx)(O.a,{})}):i?Object(k.jsx)(h.a,{variant:"overline",component:"div",color:"error",children:i}):s.repository.issues.nodes.length?Object(k.jsxs)("div",{className:r.root,children:[Object(k.jsx)(h.a,{variant:"h5",children:"Latest issues: "}),Object(k.jsxs)("select",{children:[Object(k.jsx)("option",{value:"Bug",children:"Bug"}),Object(k.jsx)("option",{value:"dependency",children:"dependency"})]}),Object(k.jsxs)(y.a,{className:r.issues1,children:[s.repository.issues.nodes.map((function(e){return Object(k.jsx)(I,{className:r.issues1,title:e.title,bodyHTML:e.bodyHTML})})),Object(k.jsx)("br",{})]})]}):Object(k.jsx)(h.a,{variant:"overline",component:"div",children:"There are no issues!"})},H=n(237),B=n(238),M=n(239),E=n(232),R=n(141),_=n.n(R),D=n(140),P=n.n(D),$=Object(b.a)({root:{marginTop:"1rem",backgroundColor:"#d3d3d3"},summaryContainer:{flexDirection:"column"},summaryHeader:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"1rem"},issues1:{backgroundColor:"white"},issues2:{backgroundColor:"#d3d3d3"},chip:{marginLeft:"0.5rem"},chip1:{marginLeft:"0.5rem",width:"100px"}}),F=function(e){var t=e.repo,n=e.expanded,r=e.onToggled,a=t.node,s=a.name,c=a.descriptionHTML,i=a.owner.login,o=a.stargazers.totalCount,l=$();return Object(k.jsxs)(H.a,{expanded:n,onChange:r,className:l.root,children:[Object(k.jsxs)(B.a,{classes:{content:l.summaryContainer},children:[Object(k.jsxs)("div",{className:l.summaryHeader,children:[Object(k.jsx)(h.a,{variant:"h6",children:s}),Object(k.jsxs)("div",{children:[Object(k.jsx)(M.a,{label:"by ".concat(i),avatar:Object(k.jsx)(P.a,{}),className:l.chip}),Object(k.jsx)(M.a,{label:o,avatar:Object(k.jsx)(_.a,{}),className:l.chip})]})]}),Object(k.jsx)(h.a,{variant:"caption",dangerouslySetInnerHTML:{__html:c},component:"div"}),Object(k.jsx)(M.a,{label:"ISSUES",className:l.chip1})]}),Object(k.jsx)(E.a,{className:l.issues1,children:n&&Object(k.jsx)(A,{className:l.issues2,repoName:s,repoOwner:i})})]})},q=Object(b.a)({note:{marginTop:"1rem",textAlign:"center"},spinnerContainer:{display:"flex",justifyContent:"space-around",marginTop:"1rem"}}),J=function(e){var t=e.searchTerm,n=q(),r=Object(s.useState)(null),a=Object(d.a)(r,2),c=a[0],i=a[1],o=Object(x.a)(t,1e3),l=Object(d.a)(o,1)[0],j=Object(m.useQuery)(v,{variables:{search_term:l}}),b=j.data,u=j.loading,p=j.error;return Object(s.useEffect)((function(){i(null)}),[b]),u?Object(k.jsx)("div",{className:n.spinnerContainer,children:Object(k.jsx)(O.a,{})}):p?Object(k.jsx)(h.a,{variant:"overline",className:n.note,component:"div",color:"error",children:p}):b.search.repositoryCount?Object(k.jsx)("div",{children:b.search.edges.map((function(e,t){return Object(k.jsx)(F,{repo:e,expanded:c===t,onToggled:function(){return i(t)}},t)}))}):Object(k.jsx)(h.a,{variant:"overline",className:n.note,component:"div",children:"Search for github repositories!"})},z=n(234),U=n(233),W=n(142),G=n.n(W),Q=Object(b.a)({input:{width:"100%"}}),Y=function(e){var t=e.value,n=e.onChange,r=Q();return Object(k.jsx)(z.a,{className:r.input,label:"Search for repos...",type:"search",placeholder:"search",name:"search",variant:"outlined",InputProps:{endAdornment:Object(k.jsx)(U.a,{position:"end","data-testid":"search-button",children:Object(k.jsx)(G.a,{})})},value:t,onChange:function(e){return n(e.target.value)}})},K=new(n(147).a)({uri:"https://api.github.com/graphql",headers:{Authorization:"bearer ".concat("3c6fa4beca57a5c34f93224f3665d75e9374380a")}}),V=(n(168),n(146)),X=n.n(V),Z=(n(187),Object(b.a)({title:{marginTop:"1rem",marginBottom:"1rem",textAlign:"center"},body:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center",marginTop:"70px",marginBottom:"70px",backgroundColor:"#d3d3d3"}})),ee=function(){var e=Z();return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)("form",{className:e.body,children:[Object(k.jsx)("h1",{children:"Issue Tracker Login "}),Object(k.jsx)("br",{}),Object(k.jsx)("img",{src:"/Issue-Trackergithub.png",style:{width:"100px",height:"100px",borderRadius:"35%"},alt:"MercyJemosop",className:"Issue Tracker"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)(X.a,{clientId:"3d4f3c95e01bb93e6906",onSuccess:function(e){console.log(e.code)},buttonText:"LOGIN WITH GITHUB",className:"btn",valid:!0,redirectUri:"http://localhost:3000/search"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})})},te=Object(b.a)({title:{marginTop:"1rem",marginBottom:"1rem",textAlign:"center",backgroundColor:"grey"},body:{width:"50%",marginLeft:"auto",marginRight:"auto"}}),ne=function(){var e=te(),t=Object(s.useState)(""),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(k.jsxs)(u.a,{maxWidth:"xl",className:e.main,children:[Object(k.jsx)(m.ApolloProvider,{client:K,children:Object(k.jsxs)("div",{className:e.body,children:[Object(k.jsx)("span",{className:"input-group-btn",children:Object(k.jsx)(l.b,{to:"/login",children:"Click to login"})}),Object(k.jsxs)(h.a,{variant:"h3",className:e.title,children:["Issue Tracker ",Object(k.jsx)("br",{}),Object(k.jsx)("img",{src:"/Issue-Trackergithub.png",style:{width:"100px",height:"100px",borderRadius:"35%"},alt:"MercyJemosop",className:"Issue Tracker"})]}),Object(k.jsx)(Y,{value:r,onChange:a}),Object(k.jsx)(J,{searchTerm:r})]})}),"  "]})},re=function(){return Object(k.jsx)("div",{className:"wrapper",children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{path:"/search",children:Object(k.jsx)(ne,{})}),Object(k.jsx)(j.a,{path:"/",children:Object(k.jsx)(ee,{})})]})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(re,{})}),document.getElementById("root")),ae()}},[[189,1,2]]]);
//# sourceMappingURL=main.e97ed293.chunk.js.map