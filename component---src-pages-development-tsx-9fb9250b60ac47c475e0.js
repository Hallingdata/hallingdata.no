webpackJsonp([8401069360376],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(2);
	const bigImg = ({ img }) => React.createElement("div", { style: backgroundStyle(img) });
	const backgroundStyle = image => {
	    return {
	        backgroundImage: `url(${image})`,
	        backgroundSize: "cover",
	        height: 600
	    };
	};
	exports.BigImg = bigImg;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const material_ui_1 = __webpack_require__(18);
	const styles_1 = __webpack_require__(17);
	const ramda_1 = __webpack_require__(32);
	const React = __webpack_require__(2);
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

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const PageSection_1 = __webpack_require__(65);
	const material_ui_1 = __webpack_require__(18);
	const styles_1 = __webpack_require__(17);
	const React = __webpack_require__(2);
	const ramda_1 = __webpack_require__(32);
	const chipGrid = ({ classes, header, items }) => React.createElement(PageSection_1.PageSection, { header: header, className: classes.outer }, React.createElement("div", { className: classes.chipsGrid }, ramda_1.map(item => React.createElement(material_ui_1.Chip, { key: item, label: item, className: classes.chip }), items)));
	const backgroundStyle = image => {
	    return {
	        backgroundImage: `url(${image})`,
	        backgroundSize: "cover",
	        backgroundPosition: "bottom"
	    };
	};
	const styles = theme => ({
	    outer: {
	        backgroundColor: "#F9F7F3"
	    },
	    chip: {
	        margin: theme.spacing.unit
	    },
	    header: {
	        textAlign: "center"
	    },
	    chipsGrid: {
	        display: "flex",
	        justifyContent: "center",
	        flexWrap: "wrap",
	        maxWidth: theme.custom.pageMaxWith,
	        margin: "auto"
	    }
	});
	exports.ChipGrid = styles_1.withStyles(styles)(chipGrid);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const ChecklistCard_1 = __webpack_require__(76);
	const React = __webpack_require__(2);
	const styles_1 = __webpack_require__(17);
	const material_ui_1 = __webpack_require__(18);
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

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const styles_1 = __webpack_require__(17);
	const React = __webpack_require__(2);
	const ChipGrid_1 = __webpack_require__(362);
	const BigImg_1 = __webpack_require__(134);
	const Hero_1 = __webpack_require__(64);
	const InfoWithCard_1 = __webpack_require__(77);
	const heroImg = __webpack_require__(951);
	const bottomImg = __webpack_require__(954);
	// https://github.com/callemall/material-ui/issues/7466
	const gridFix = {
	  width: "100%",
	  overflowX: "hidden"
	};
	const developmentPage = ({ data, classes }) => {
	  const { checklist, header, checklistHeader, technologiesHeader, technologies } = data.developmentPage.childMarkdownRemark.frontmatter;
	  const html = data.developmentPage.childMarkdownRemark.html;
	  return React.createElement("div", { style: gridFix }, React.createElement(Hero_1.Hero, { header: header, type: "small", img: heroImg, imgPosition: "center" }), React.createElement(InfoWithCard_1.InfoWithCard, { htmlContent: html, checklistItems: checklist }), React.createElement(ChipGrid_1.ChipGrid, { header: technologiesHeader, items: technologies }), React.createElement(BigImg_1.BigImg, { img: bottomImg }));
	};
	const styles = theme => ({});
	exports.default = styles_1.withStyles(styles)(developmentPage);
	exports.pageQuery = "** extracted graphql fragment **";

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/code1.104e08ae.jpeg";

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/dev1.d04ca08c.jpeg";

/***/ })

});
//# sourceMappingURL=component---src-pages-development-tsx-9fb9250b60ac47c475e0.js.map