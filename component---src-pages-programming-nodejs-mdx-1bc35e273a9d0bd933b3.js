(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"Heading",function(){return u}),t.d(n,"default",function(){return g}),t.d(n,"_frontmatter",function(){return b});t(87);var a=t(88),o=t.n(a),c=t(8),s=t.n(c),r=t(4),m=t(0),p=t.n(m),i=t(31),l=t(173),u=function(e){var n=e.text;return Object(r.c)("h1",null,n)},h={Heading:u},g=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return Object(r.c)(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},h,t),components:n},Object(r.c)(u,{text:t.pageContext.frontmatter.title}),Object(r.c)(i.MDXTag,{name:"h2",components:n},"Environment variables"),Object(r.c)(i.MDXTag,{name:"p",components:n},Object(r.c)(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786"}},"This\narticle"),"\nmakes a case for environment variables."),Object(r.c)(i.MDXTag,{name:"h3",components:n},"Why?"),Object(r.c)(i.MDXTag,{name:"p",components:n},"Because they externalize all environment specific aspects of your app and\nkeep your app encapsulated. Now you can run your app anywhere by modifying the\nenvironment variables ",Object(r.c)(i.MDXTag,{name:"em",components:n,parentName:"p"},"without changing your code and without rebuilding it"),"!"),Object(r.c)(i.MDXTag,{name:"h3",components:n},"When?"),Object(r.c)(i.MDXTag,{name:"p",components:n},"Some examples:"),Object(r.c)(i.MDXTag,{name:"ul",components:n},Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Which HTTP port to listen on"),Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"What path and folder your files are located in, that you want to serve"),Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Pointing to a development, staging, test, or production database"),Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"URLs to server resources"),Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"CDNs for testing vs. production"),Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Even a marker to label your app in the UI by the environment it lives in")),Object(r.c)(i.MDXTag,{name:"h3",components:n},"How?"),Object(r.c)(i.MDXTag,{name:"ul",components:n},Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Using the local environment (duh) and/or command line. We're talking about\n",Object(r.c)(i.MDXTag,{name:"em",components:n,parentName:"li"},"environment")," variables, after all. They could be present in memory as part of\nthe execution context or you can pass them through the command line. Assuming\nyou use bash:")),Object(r.c)(i.MDXTag,{name:"pre",components:n},Object(r.c)(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"PORT=8626 node server.js\n")),Object(r.c)(i.MDXTag,{name:"ul",components:n},Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Using .env file. Keeps things tidy and convenient and avoids typing mistakes.\nI also think the previous solution has a higher risk of leaking data to the\nenvironment. When you add a variable to bash, other processes might be able to\naccess that value. When you use dotenv, I think the variables are attached to\nyour application process and can only be seen by it.")),Object(r.c)(i.MDXTag,{name:"p",components:n},"In any case, just use dotenv. Add your ",Object(r.c)(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".env")," file to your ",Object(r.c)(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".gitignore")," and you\nalso have a convenient way of keeping your secrets accessible and (somewhat)\nprotected."),Object(r.c)(i.MDXTag,{name:"p",components:n},"Read the ",Object(r.c)(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.npmjs.com/package/dotenv"}},"dotenv docs")," for details on how\nto use it. I've seen two different ways of accessing values:"),Object(r.c)(i.MDXTag,{name:"ol",components:n},Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Using the dot notation: ",Object(r.c)(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"process.env.PORT")),Object(r.c)(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Using the bracket notation: ",Object(r.c)(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"process.env['PORT']"))),Object(r.c)(i.MDXTag,{name:"p",components:n},"I'm assuming they're equivalent and who cares, but I like bracket notation\nbetter. It would make it easier to use them programmatically like this:"),Object(r.c)(i.MDXTag,{name:"pre",components:n},Object(r.c)(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"const keys = ['PORT', 'ENDPOINT', 'SECRET'];\nfor (key of keys) {\n  let value = process.env[key];\n  // do something with value\n}\n")),Object(r.c)(i.MDXTag,{name:"p",components:n},"For consistency, why not use that notation everywhere."),Object(r.c)(i.MDXTag,{name:"p",components:n},"Also follow the recommendation of a single .env file per environment. From ",Object(r.c)(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://12factor.net/config"}},"The\nTwelve-Factor App"),":"),Object(r.c)(i.MDXTag,{name:"blockquote",components:n},Object(r.c)(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"In a twelve-factor app, env vars are granular controls, each fully orthogonal\nto other env vars. They are never grouped together as “environments”, but\ninstead are independently managed for each deploy. This is a model that scales\nup smoothly as the app naturally expands into more deploys over its lifetime.")))},n}(p.a.Component),b={}}}]);
//# sourceMappingURL=component---src-pages-programming-nodejs-mdx-1bc35e273a9d0bd933b3.js.map