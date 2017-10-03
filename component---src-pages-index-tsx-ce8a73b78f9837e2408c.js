webpackJsonp([221374088121123],{

/***/ "./src/components/html-render.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const HtmlRenderComponent = props => {
	    return React.createElement("div", null, React.createElement("div", { className: "blog-post-content", dangerouslySetInnerHTML: { __html: props.content } }));
	};
	exports.default = HtmlRenderComponent;

/***/ }),

/***/ "./src/components/image.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const ImageComponent = props => {
	    return React.createElement("div", null, React.createElement("img", { src: props.url }));
	};
	exports.default = ImageComponent;

/***/ }),

/***/ "./src/components/page-row.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const PageRowComponent = props => {
	    return React.createElement("div", null, props.children);
	};
	exports.default = PageRowComponent;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/sogasg/halling/hallingdata.no/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const page_row_1 = __webpack_require__("./src/components/page-row.tsx");
	const image_1 = __webpack_require__("./src/components/image.tsx");
	const html_render_1 = __webpack_require__("./src/components/html-render.tsx");
	const IndexPage = ({ data }) => {
	  console.log(JSON.stringify(data, null, "  "));
	  return React.createElement("div", null, React.createElement(page_row_1.default, null, React.createElement(image_1.default, { url: data.row1.childMarkdownRemark.frontmatter.imgUrl }), React.createElement(html_render_1.default, { content: data.row1.childMarkdownRemark.html })));
	};
	exports.default = IndexPage;
	exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-ce8a73b78f9837e2408c.js.map