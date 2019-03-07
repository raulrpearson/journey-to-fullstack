(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"_frontmatter",function(){return u});n(87);var a=n(88),o=n.n(a),c=n(8),s=n.n(c),m=n(4),r=n(0),p=n.n(r),i=n(31),l=n(173),d={},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return Object(m.c)(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:t},Object(m.c)(i.MDXTag,{name:"h1",components:t},"React"),Object(m.c)(i.MDXTag,{name:"ul",components:t},Object(m.c)(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Read through the ",Object(m.c)(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://reactjs.org/docs/getting-started.html"}},"docs")),Object(m.c)(i.MDXTag,{name:"li",components:t,parentName:"ul"},Object(m.c)(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://overreacted.io/"}},"Dan Abramov's blog")," is amazing."),Object(m.c)(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Build a CLI application using ",Object(m.c)(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vadimdemedes/ink"}},"Ink"),"."),Object(m.c)(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Check out ",Object(m.c)(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://preactjs.com/"}},"Preact"),".")),Object(m.c)(i.MDXTag,{name:"h2",components:t},"React as a UI runtime"),Object(m.c)(i.MDXTag,{name:"p",components:t},"Dan Abramov posted this ",Object(m.c)(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://overreacted.io/react-as-a-ui-runtime/"}},"great overview of\nReact"),"."),Object(m.c)(i.MDXTag,{name:"p",components:t},"Some programs output numbers. Other programs output poems. Different languages\nand their runtimes are often optimized for a particular set of use cases, and\nReact is no exception to that."),Object(m.c)(i.MDXTag,{name:"p",components:t},Object(m.c)(i.MDXTag,{name:"strong",components:t,parentName:"p"},"React programs usually output a tree that may change over time"),". Let's call\nthis the host tree, because it's part of the host environment, like DOM or iOS.\nIt usually has it's own imperative API (",Object(m.c)(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"appendChild()")," in DOM, for example)."),Object(m.c)(i.MDXTag,{name:"p",components:t},"React can be more performant by assuming that the host tree is ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"stable")," (not\nchanging too much over time) and ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"regular")," (can be broken down in components an\npatterns). In the case of most UIs, these reasonable assumptions are correct."),Object(m.c)(i.MDXTag,{name:"p",components:t},"A ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"host instance")," is a node in the ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"host tree"),". Host instances have properties\nand can have other host instances as children. As mentioned above, there usually\nexists an API to manipulate these host instances."),Object(m.c)(i.MDXTag,{name:"p",components:t},"A ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"renderer")," teaches React to talk to a specific host environment and manage its\nhost instances. React renderers can work in ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"mutating")," or ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"persistent")," mode.\nMutating mode is what you'd expect (host instances are completely mutable) and\npersistent mode is for host environments that don’t provide methods like\n",Object(m.c)(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"appendChild()")," but instead clone the parent tree and always replace the\ntop-level child."),Object(m.c)(i.MDXTag,{name:"p",components:t},"In the host environment, a host instance (like a DOM node) is the smallest\nbuilding block. In React, the smallest building block is a ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"React element"),".\nReact element is a plain JavaScript object that can ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"describe")," a host instance:"),Object(m.c)(i.MDXTag,{name:"pre",components:t},Object(m.c)(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// JSX is a syntax sugar for these objects.\n// <button className=\"blue\" />\n{\n  type: 'button',\n  props: { className: 'blue' }\n}\n")),Object(m.c)(i.MDXTag,{name:"p",components:t},"A React element is lightweight and has no host instance tied to it. Again, it is\nmerely a description of what you want to see on the screen. They are immutable.\nIf you want to render something different later, you will describe it with a new\nReact element tree created from scratch. They are like frames in a movie."),Object(m.c)(i.MDXTag,{name:"p",components:t},"Each React renderer has an ",Object(m.c)(i.MDXTag,{name:"em",components:t,parentName:"p"},"entry point"),". It’s the API that lets us tell React\nto render a particular React element tree inside a container host instance. For\nexample, in React DOM, ",Object(m.c)(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ReactDOM.render")," is the entry point:"),Object(m.c)(i.MDXTag,{name:"pre",components:t},Object(m.c)(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"ReactDOM.render(\n  // { type: 'button', props: { className: 'blue' } }\n  <button className=\"blue\" />,\n  document.getElementById('container')\n);\n")),Object(m.c)(i.MDXTag,{name:"p",components:t},"React’s job is to make the host tree match the provided React element tree. The\nprocess of figuring out what to do to the host instance tree in response to new\ninformation is sometimes called reconciliation."),Object(m.c)(i.MDXTag,{name:"p",components:t},"When ",Object(m.c)(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ReactDOM.render")," is called is called twice with the same container, React\nneeds to decide when to update the existing host instance to match a the React\nelement, and when to create a new one."),Object(m.c)(i.MDXTag,{name:"p",components:t},"An example:"),Object(m.c)(i.MDXTag,{name:"pre",components:t},Object(m.c)(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"// let domNode = document.createElement('button');\n// domNode.className = 'blue';\n// domContainer.appendChild(domNode);\nReactDOM.render(\n  <button className=\"blue\" />,\n  document.getElementById('container')\n);\n\n// Can reuse host instance? Yes! (button → button)\n// domNode.className = 'red';\nReactDOM.render(\n  <button className=\"red\" />,\n  document.getElementById('container')\n);\n\n// Can reuse host instance? No! (button → p)\n// domContainer.removeChild(domNode);\n// domNode = document.createElement('p');\n// domNode.textContent = 'Hello';\n// domContainer.appendChild(domNode);\nReactDOM.render(<p>Hello</p>, document.getElementById('container'));\n\n// Can reuse host instance? Yes! (p → p)\n// domNode.textContent = 'Goodbye';\nReactDOM.render(<p>Goodbye</p>, document.getElementById('container'));\n")),Object(m.c)(i.MDXTag,{name:"p",components:t},"This raises a question of identity. The React element may be different every\ntime, but when does it refer to the same host instance conceptually? React is\nquite smart and figures things out most of the time but with dynamic lists, it\nneeds a little help."),Object(m.c)(i.MDXTag,{name:"p",components:t},"This is why React nags you to specify a special property called key every time\nyou include an array of elements in your output. A key tells React that it\nshould consider an item to be conceptually the same even if it has different\npositions inside its parent element between renders."),Object(m.c)(i.MDXTag,{name:"h2",components:t},"Gatsby"),Object(m.c)(i.MDXTag,{name:"ul",components:t},Object(m.c)(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Project: build a site ",Object(m.c)(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.npmjs.com/package/gatsby-source-google-sheets"}},"sourcing from google\nsheets"))))},t}(p.a.Component),u={}}}]);
//# sourceMappingURL=component---src-pages-programming-react-mdx-f5f06fd51909cd08808f.js.map