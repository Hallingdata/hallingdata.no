webpackJsonp([112414088238615],{

/***/ "./src/components/ChecklistCard.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const ramda_1 = __webpack_require__("./node_modules/ramda/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const checklistCard = ({ header = "", list, icon = "check_circle", classes }) => {
	    return React.createElement(material_ui_1.Card, { className: classes.card }, React.createElement(material_ui_1.CardContent, null, React.createElement(material_ui_1.Typography, { type: "body1", className: classes.title }, header), React.createElement(material_ui_1.List, null, ramda_1.map(item => React.createElement(material_ui_1.ListItem, { key: item }, React.createElement(material_ui_1.ListItemIcon, null, React.createElement(material_ui_1.Icon, null, icon)), React.createElement(material_ui_1.ListItemText, { primary: item })), list))));
	};
	const styles = theme => ({
	    card: {
	        width: 300,
	        float: "right",
	        [theme.breakpoints.up("sm")]: {
	            marginTop: "-100px"
	        },
	        [theme.breakpoints.only("xs")]: {
	            margin: "auto",
	            float: "initial"
	        }
	    },
	    title: {
	        marginBottom: 16,
	        fontSize: 14,
	        color: theme.palette.text.secondary
	    }
	});
	exports.ChecklistCard = styles_1.withStyles(styles)(checklistCard);

/***/ }),

/***/ "./src/components/InfoWithCard.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const ChecklistCard_1 = __webpack_require__("./src/components/ChecklistCard.tsx");
	const React = __webpack_require__("./node_modules/react/index.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const infoWithCard = ({ classes, htmlContent, checklistHeader, checkListIcon, checklistItems }) => React.createElement(material_ui_1.Grid, { container: true, justify: "space-around", className: classes.infoContainer }, React.createElement(material_ui_1.Grid, { item: true, sm: 6, md: 5, xs: 10 }, React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, align: "justify", className: classes.content, dangerouslySetInnerHTML: { __html: htmlContent } })), React.createElement(material_ui_1.Grid, { item: true, sm: 5, md: 4, xs: 10 }, React.createElement(ChecklistCard_1.ChecklistCard, { header: checklistHeader, list: checklistItems, icon: checkListIcon })));
	const styles = theme => ({
	    infoContainer: {
	        maxWidth: theme.custom.pageMaxWith,
	        margin: "auto"
	    },
	    content: {
	        fontSize: "16px"
	    }
	});
	exports.InfoWithCard = styles_1.withStyles(styles)(infoWithCard);

/***/ }),

/***/ "./src/components/Portfolio/img/fargerikehemsedal.png":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fargerikehemsedal.a904408c.png";

/***/ }),

/***/ "./src/components/Portfolio/img/haraldset.jpg":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/haraldset.375e2115.jpg";

/***/ }),

/***/ "./src/components/Portfolio/img/nhage.png":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/nhage.bbc89e8b.png";

/***/ }),

/***/ "./src/components/Portfolio/img/saga-bil.jpg":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/saga-bil.78c6944b.jpg";

/***/ }),

/***/ "./src/components/Portfolio/img/smart-dekk.jpg":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/smart-dekk.6b36b365.jpg";

/***/ }),

/***/ "./src/components/Portfolio/img/stolsrock.png":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/stolsrock.2091ebd2.png";

/***/ }),

/***/ "./src/components/Portfolio/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const ramda_1 = __webpack_require__("./node_modules/ramda/index.js");
	const fargerikehemsedalImg = __webpack_require__("./src/components/Portfolio/img/fargerikehemsedal.png");
	const stolsrockImg = __webpack_require__("./src/components/Portfolio/img/stolsrock.png");
	const nhageImg = __webpack_require__("./src/components/Portfolio/img/nhage.png");
	const smartdekkImg = __webpack_require__("./src/components/Portfolio/img/smart-dekk.jpg");
	const sagabilImg = __webpack_require__("./src/components/Portfolio/img/saga-bil.jpg");
	const haraldestImg = __webpack_require__("./src/components/Portfolio/img/haraldset.jpg");
	const Card_1 = __webpack_require__("./node_modules/material-ui/Card/index.js");
	const PageSection_1 = __webpack_require__("./src/components/PageSection.tsx");
	const portfolio = ({ classes, header, portfolioItems }) => React.createElement(PageSection_1.PageSection, { header: header, className: classes.outer }, React.createElement(material_ui_1.Grid, { container: true, direction: "row", alignItems: "stretch", justify: "center", className: classes.grid }, ramda_1.map(portfolioItem => React.createElement(material_ui_1.Grid, { item: true, xs: 12, sm: 6, md: 4, key: portfolioItem.url, className: classes.gridItem }, React.createElement(Card_1.default, { className: classes.card }, itemPicture(portfolioItem.title, classes.media), React.createElement(Card_1.CardContent, null, React.createElement(material_ui_1.Typography, { type: "headline", component: "h2" }, portfolioItem.title), React.createElement(material_ui_1.Typography, { component: "p" }, portfolioItem.description)), React.createElement(Card_1.CardActions, null, React.createElement(material_ui_1.Button, { dense: true, color: "primary", href: portfolioItem.url, target: "_blank" }, "G\u00E5 til nettsiden")))), portfolioItems)));
	const styles = theme => ({
	    gridItem: {
	        padding: "20px !important"
	    },
	    card: {
	        maxWidth: 290,
	        height: "100%",
	        margin: "auto"
	    },
	    media: {
	        height: 200
	    },
	    header: {
	        textAlign: "center",
	        marginBottom: 40
	    },
	    outer: {
	        backgroundColor: "#F9F7F3",
	        width: "100%",
	        paddingTop: 100,
	        paddingBottom: 100
	    },
	    grid: {
	        maxWidth: 1000,
	        margin: "auto"
	    }
	});
	exports.Portfolio = styles_1.withStyles(styles)(portfolio);
	const itemPicture = (name, imgClassName) => {
	    if (ramda_1.test(/Fargerike/i, name)) {
	        return React.createElement(Card_1.CardMedia, { className: imgClassName, image: fargerikehemsedalImg, title: "Skjerm bilde av nettside" });
	    } else if (ramda_1.test(/Stølsrock/i, name)) {
	        return React.createElement(Card_1.CardMedia, { className: imgClassName, image: stolsrockImg, title: "Skjerm bilde av nettside" });
	    } else if (ramda_1.test(/Næringshage/i, name)) {
	        return React.createElement(Card_1.CardMedia, { className: imgClassName, image: nhageImg, title: "Skjerm bilde av nettside" });
	    } else if (ramda_1.test(/Smart dekk/i, name)) {
	        return React.createElement(Card_1.CardMedia, { className: imgClassName, image: smartdekkImg, title: "Skjerm bilde av nettside" });
	    } else if (ramda_1.test(/^Saga bil/i, name)) {
	        return React.createElement(Card_1.CardMedia, { className: imgClassName, image: sagabilImg, title: "Skjerm bilde av nettside" });
	    } else if (ramda_1.test(/Haraldset/i, name)) {
	        return React.createElement(Card_1.CardMedia, { className: imgClassName, image: haraldestImg, title: "Skjerm bilde av nettside" });
	    } else {
	        throw new Error("Every webiste needs a picture");
	    }
	};

/***/ }),

/***/ "./src/pages/img/hero/code15.jpeg":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/code15.365bf2c0.jpeg";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/sogasg/dev/halling/hallingdata.no/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/nettsider.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const Hero_1 = __webpack_require__("./src/components/Hero.tsx");
	const InfoWithCard_1 = __webpack_require__("./src/components/InfoWithCard.tsx");
	const Portfolio_1 = __webpack_require__("./src/components/Portfolio/index.tsx");
	const heroImg = __webpack_require__("./src/pages/img/hero/code15.jpeg");
	// https://github.com/callemall/material-ui/issues/7466
	const gridFix = {
	  width: "100%",
	  overflow: "hidden"
	};
	const WebpagesPage = ({ data }) => {
	  const { header, checklist, checklistHeader, portfolio, portfolioHeader } = data.webpagesPage.childMarkdownRemark.frontmatter;
	  const html = data.webpagesPage.childMarkdownRemark.html;
	  return React.createElement("div", { style: gridFix }, React.createElement(Hero_1.Hero, { header: header, type: "small", img: heroImg, imgPosition: "bottom" }), React.createElement(InfoWithCard_1.InfoWithCard, { htmlContent: html, checklistHeader: checklistHeader, checklistItems: checklist }), React.createElement(Portfolio_1.Portfolio, { portfolioItems: portfolio, header: portfolioHeader }));
	};
	exports.default = WebpagesPage;
	exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-pages-nettsider-tsx-fab4e0a12e850ab1f9e0.js.map