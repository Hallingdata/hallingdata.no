webpackJsonp([147894599050189],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const PageSection_1 = __webpack_require__(65);
	const material_ui_1 = __webpack_require__(18);
	const styles_1 = __webpack_require__(17);
	const React = __webpack_require__(2);
	const Hero_1 = __webpack_require__(64);
	const heroImg = __webpack_require__(202);
	const hallingdalLogo = __webpack_require__(950);
	// https://github.com/callemall/material-ui/issues/7466
	const gridFix = {
	    width: "100%",
	    overflowX: "hidden"
	};
	const webpagesPage = ({ data, classes }) => {
	    const { header: headerPart1 } = data.aboutPage1.childMarkdownRemark.frontmatter;
	    const { header: headerPart2 } = data.aboutPage2.childMarkdownRemark.frontmatter;
	    const html = data.aboutPage1.childMarkdownRemark.html;
	    return React.createElement("div", { style: gridFix }, React.createElement(Hero_1.Hero, { header: headerPart1, type: "small", img: heroImg, imgPosition: "center" }), React.createElement(material_ui_1.Grid, { container: true, className: classes.contentContainer, spacing: 0 }, React.createElement(material_ui_1.Grid, { item: true, xs: 12 }, React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, align: "justify", className: classes.content, dangerouslySetInnerHTML: { __html: html } }))), React.createElement(PageSection_1.PageSection, { header: headerPart2, className: classes.reginalSection }, React.createElement("div", { className: classes.hallingdalLogoContainer }, React.createElement("img", { src: hallingdalLogo, alt: "Hallingdal logo", className: classes.hallingdalLogo })), React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, align: "justify", className: `${classes.contentContainer} ${classes.content}`, dangerouslySetInnerHTML: { __html: html } })), React.createElement("div", { dangerouslySetInnerHTML: {
	            __html: `
	            <iframe 
	            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272542.8852827196!2d8.675458863205185!3d60.700397816894636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463ff4885b8e13a7%3A0x27e4c964520d2cd!2sGamlevegen+6%2C+3550+Gol!5e0!3m2!1sen!2sno!4v1508334100413" 
	            width="100%" 
	            height="450" 
	            frameborder="0" 
	            style="border:0" 
	            allowfullscreen></iframe>
	      `
	        } }));
	};
	const styles = theme => ({
	    contentContainer: {
	        maxWidth: 850,
	        margin: "auto"
	    },
	    content: {
	        fontSize: 16,
	        padding: 20
	    },
	    hallingdalLogo: {
	        height: 60,
	        marginBottom: 20
	    },
	    hallingdalLogoContainer: {
	        textAlign: "center"
	    },
	    reginalSection: {
	        backgroundColor: "#F9F7F3"
	    }
	});
	exports.default = styles_1.withStyles(styles)(webpagesPage);
	exports.pageQuery = "** extracted graphql fragment **";

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/hallingdal-logo.7aa75c6f.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/hallingskarvet.7cfcd475.jpg";

/***/ })

});
//# sourceMappingURL=component---src-pages-about-tsx-1f34b48fa521b20ed017.js.map