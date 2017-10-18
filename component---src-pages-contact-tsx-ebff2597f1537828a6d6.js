webpackJsonp([257507169568505],{

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const PageSection_1 = __webpack_require__(65);
	const material_ui_1 = __webpack_require__(18);
	const styles_1 = __webpack_require__(17);
	const React = __webpack_require__(2);
	const ramda_1 = __webpack_require__(32);
	const Hero_1 = __webpack_require__(64);
	const heroImg = __webpack_require__(202);
	// https://github.com/callemall/material-ui/issues/7466
	const gridFix = {
	    width: "100%",
	    overflowX: "hidden"
	};
	const contactPage = ({ data, classes }) => {
	    const { header, contactList, contactFormHeader } = data.contactPage.childMarkdownRemark.frontmatter;
	    const html = data.contactPage.childMarkdownRemark.html;
	    return React.createElement("div", { style: gridFix }, React.createElement(Hero_1.Hero, { header: header, type: "small", img: heroImg, imgPosition: "center", hideButton: true }), React.createElement(material_ui_1.Grid, { container: true, spacing: 0 }, React.createElement(material_ui_1.Grid, { item: true, xs: 12, sm: 6 }, React.createElement(PageSection_1.PageSection, { header: contactFormHeader }, React.createElement("form", { autoComplete: "off", className: classes.form, action: "https://formspree.io/post@hallingdata.no", method: "POST" }, React.createElement(material_ui_1.TextField, { id: "name", label: "Navn", className: classes.textField, margin: "normal", required: true }), React.createElement(material_ui_1.TextField, { id: "contact", label: "Kontakt", placeholder: "Epost eller telefonnummer", className: classes.textField, margin: "normal", required: true }), React.createElement("br", null), React.createElement(material_ui_1.TextField, { id: "message", label: "Din melding", multiline: true, rows: "8", rowsMax: "50", className: classes.textField, margin: "normal", required: true }), React.createElement(material_ui_1.Button, { raised: true, color: "primary", type: "submit", className: classes.sendButton }, "Send")))), React.createElement(material_ui_1.Grid, { item: true, xs: 12, sm: 6 }, React.createElement(material_ui_1.Grid, { container: true, spacing: 0, alignItems: "center", style: { height: "100%", maxWidth: 780 } }, ramda_1.map(({ header, info, contact, icon }) => React.createElement(material_ui_1.Grid, { item: true, xs: 12, md: 6, lg: 4, className: classes.contactTile, key: contact }, React.createElement("div", { className: classes.contactTileInner }, React.createElement(material_ui_1.Icon, { color: "primary", className: classes.contactIcon }, icon), React.createElement(material_ui_1.Typography, { type: "headline", gutterBottom: true, align: "center" }, header), React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, align: "center", className: classes.contactTileInfo }, info), React.createElement(material_ui_1.Typography, { type: "body2", gutterBottom: true, align: "center", className: classes.contactTileContact }, contact))), contactList)))));
	};
	const styles = theme => ({
	    contactIcon: {
	        fontSize: 60
	    },
	    form: {
	        maxWidth: 500,
	        margin: "auto",
	        paddingLeft: 30,
	        paddingRight: 30
	    },
	    textField: {
	        marginLeft: theme.spacing.unit,
	        marginRight: theme.spacing.unit,
	        width: "100%"
	    },
	    sendButton: {
	        height: 50,
	        width: 120,
	        fontSize: 16,
	        marginLeft: theme.spacing.unit,
	        marginRight: theme.spacing.unit
	    },
	    contactTile: {
	        height: 250,
	        textAlign: "center"
	    },
	    contactTileInner: {
	        padding: 40
	    },
	    contactTileInfo: {
	        color: "rgba(0, 0, 0, 0.44)"
	    },
	    contactTileContact: {
	        fontSize: 16
	    },
	    contactTileIcon: {
	        color: "rgba(0, 0, 0, 0.44)"
	    }
	});
	exports.default = styles_1.withStyles(styles)(contactPage);
	exports.pageQuery = "** extracted graphql fragment **";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/hallingskarvet.7cfcd475.jpg";

/***/ })

});
//# sourceMappingURL=component---src-pages-contact-tsx-ebff2597f1537828a6d6.js.map