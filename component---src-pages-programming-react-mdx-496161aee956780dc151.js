(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return h});n(83);var a=n(84),o=n.n(a),r=n(8),i=n.n(r),s=n(5),c=n(0),l=n.n(c),p=n(165),m=n(167),u={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return Object(s.c)(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,n),components:t},Object(s.c)(p.MDXTag,{name:"h1",components:t,props:{id:"react"}},Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#react","aria-label":"react permalink",className:"anchor"}}),"React"),Object(s.c)(p.MDXTag,{name:"ul",components:t},Object(s.c)(p.MDXTag,{name:"li",components:t,parentName:"ul"},"Read through the ",Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://reactjs.org/docs/getting-started.html"}},"docs")),Object(s.c)(p.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://overreacted.io/"}},"Dan Abramov's blog")," is amazing."),Object(s.c)(p.MDXTag,{name:"li",components:t,parentName:"ul"},"Build a CLI application using ",Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vadimdemedes/ink"}},"Ink"),"."),Object(s.c)(p.MDXTag,{name:"li",components:t,parentName:"ul"},"Check out ",Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://preactjs.com/"}},"Preact"),".")),Object(s.c)(p.MDXTag,{name:"h2",components:t,props:{id:"react-as-a-ui-runtime"}},Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#react-as-a-ui-runtime","aria-label":"react as a ui runtime permalink",className:"anchor"}}),"React as a UI runtime"),Object(s.c)(p.MDXTag,{name:"p",components:t},"Dan Abramov posted this ",Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://overreacted.io/react-as-a-ui-runtime/"}},"great overview of\nReact"),"."),Object(s.c)(p.MDXTag,{name:"p",components:t},"Some programs output numbers. Other programs output poems. Different languages\nand their runtimes are often optimized for a particular set of use cases, and\nReact is no exception to that."),Object(s.c)(p.MDXTag,{name:"p",components:t},Object(s.c)(p.MDXTag,{name:"strong",components:t,parentName:"p"},"React programs usually output a tree that may change over time"),". Let's call\nthis the host tree, because it's part of the host environment, like DOM or iOS.\nIt usually has it's own imperative API (",Object(s.c)(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"appendChild()")," in DOM, for example)."),Object(s.c)(p.MDXTag,{name:"p",components:t},"React can be more performant by assuming that the host tree is ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"stable")," (not\nchanging too much over time) and ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"regular")," (can be broken down in components an\npatterns). In the case of most UIs, these reasonable assumptions are correct."),Object(s.c)(p.MDXTag,{name:"p",components:t},"A ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"host instance")," is a node in the ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"host tree"),". Host instances have properties\nand can have other host instances as children. As mentioned above, there usually\nexists an API to manipulate these host instances."),Object(s.c)(p.MDXTag,{name:"p",components:t},"A ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"renderer")," teaches React to talk to a specific host environment and manage its\nhost instances. React renderers can work in ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"mutating")," or ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"persistent")," mode.\nMutating mode is what you'd expect and persistent mode is for host environments\nthat don’t provide methods like ",Object(s.c)(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"appendChild()")," but instead clone the parent\ntree and always replace the top-level child."),Object(s.c)(p.MDXTag,{name:"p",components:t},"In the host environment, a host instance (like a DOM node) is the smallest\nbuilding block. In React, the smallest building block is a ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"React element"),".\nReact element is a plain JavaScript object:"),Object(s.c)(p.MDXTag,{name:"pre",components:t},Object(s.c)(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// JSX is a syntax sugar for these objects.\n// <button className=\"blue\" />\n{\n  type: 'button',\n  props: { className: 'blue' }\n}\n")),Object(s.c)(p.MDXTag,{name:"p",components:t},"A React element is lightweight and has no host instance tied to it. Again, it is\nmerely a description of what you want to see on the screen. They are immutable.\nIf you want to render something different later, you will describe it with a new\nReact element tree created from scratch. They are like frames in a movie."),Object(s.c)(p.MDXTag,{name:"p",components:t},"Each React renderer has an ",Object(s.c)(p.MDXTag,{name:"em",components:t,parentName:"p"},"entry point"),". It’s the API that lets us tell React\nto render a particular React element tree inside a container host instance. For\nexample, in React DOM:"),Object(s.c)(p.MDXTag,{name:"pre",components:t},Object(s.c)(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"ReactDOM.render(\n  // { type: 'button', props: { className: 'blue' } }\n  <button className=\"blue\" />,\n  document.getElementById('container')\n);\n")),Object(s.c)(p.MDXTag,{name:"h2",components:t,props:{id:"gatsby"}},Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#gatsby","aria-label":"gatsby permalink",className:"anchor"}}),"Gatsby"),Object(s.c)(p.MDXTag,{name:"ul",components:t},Object(s.c)(p.MDXTag,{name:"li",components:t,parentName:"ul"},"Project: build a site ",Object(s.c)(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.npmjs.com/package/gatsby-source-google-sheets"}},"sourcing from google\nsheets"))))},t}(l.a.Component),h={}},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(0),i=(a=r)&&a.__esModule?a:{default:a};var s=i.default.createContext({}),c=s.Provider,l=s.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return i.default.createElement(l,null,function(t){return i.default.createElement(e,o({components:n||t},a))})}};t.default=function(e){var t=e.components,n=e.children;return i.default.createElement(c,{value:t},n)}},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(166);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(164);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=(a=i)&&a.__esModule?a:{default:a},c=n(164);var l={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,r=void 0===a?{}:a,i=e.children,c=e.components,p=void 0===c?{}:c,m=e.Layout,u=e.layoutProps,d=p[n+"."+t]||p[t]||l[t]||t;return m?s.default.createElement(m,o({components:p},u),s.default.createElement(d,r,i)):s.default.createElement(d,r,i)}}]),t}();t.default=(0,c.withMDXComponents)(p)},167:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(63),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(r.a)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),c=n(62),l=n.n(c),p=n(5),m=n(18),u=n(13),d=s,h=function(e){return"theme"!==e&&"innerRef"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?d:h},g=function e(t,n){var o,r,i;void 0!==n&&(o=n.label,i=n.target,r=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var s=t.__emotion_real===t,c=s&&t.__emotion_base||t;"function"!=typeof r&&s&&(r=t.__emotion_forwardProp);var d=r||f(c),h=!d("as");return function(){var g=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&b.push("label:"+o+";"),null==g[0]||void 0===g[0].raw)b.push.apply(b,g);else{b.push(g[0][0]);for(var y=g.length,v=1;v<y;v++)b.push(g[v],g[0][v])}var O=Object(p.d)(function(e,t,n){return Object(a.createElement)(p.b.Consumer,null,function(o){var s=h&&e.as||c,l="",p=[],g=e;if(null==e.theme){for(var y in g={},e)g[y]=e[y];g.theme=o}"string"==typeof e.className&&(l+=Object(m.a)(t.registered,p,e.className));var v=Object(u.a)(b.concat(p),t.registered,g);Object(m.b)(t,v,"string"==typeof s),l+=t.key+"-"+v.name,void 0!==i&&(l+=" "+i);var O=h&&void 0===r?f(s):d,j={};for(var M in e)h&&"as"===M||O(M)&&(j[M]=e[M]);return j.className=l,j.ref=n||e.innerRef,Object(a.createElement)(s,j)})});return O.displayName=void 0!==o?o:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",O.defaultProps=t.defaultProps,O.__emotion_real=O,O.__emotion_base=c,O.__emotion_styles=b,O.__emotion_forwardProp=r,Object.defineProperty(O,"toString",{value:function(){return"."+i}}),O.withComponent=function(t,a){return e(t,void 0!==a?l()({},n||{},a):n).apply(void 0,b)},O}}("main",{target:"eos24br0"})({name:"1xi27x0",styles:"max-width:700px;margin:0 auto;"}),b={name:"lnc4d1",styles:"*{font-family:sans-serif;line-height:1.1;}h1,h2,h3,h4,h5,h6{font-weight:normal;}p{}pre{background:lightgray;overflow:scroll;padding:1em;}code{font-family:monospace;}"};t.a=function(e){return Object(p.c)(o.a.Fragment,null,Object(p.c)(p.a,{styles:b}),Object(p.c)(g,null,e.children))}}}]);
//# sourceMappingURL=component---src-pages-programming-react-mdx-496161aee956780dc151.js.map