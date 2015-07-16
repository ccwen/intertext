var React=require("react");
var MainMenu=require("./views/mainmenu");
var MarkupMenu=require("./views/markupmenu");
var Texts=require("./views/texts");

var Col=require("react-bootstrap").Col;
//var ksa=require("ksana-simple-api");
//var PanelGroup=require("react-bootstrap").PanelGroup;
//var Panel=require("react-bootstrap").Panel;
//var BreadcrumbTOC=require("ksana2015-breadcrumbtoc");
//var theme=require("ksana2015-breadcrumbtoc/theme_bootstrap");

//var testdata=require("./testdata");
var maincomponent = React.createClass({
  getInitialState:function() {
    return {};
  },
  render: function() {
    return <div>
      <MainMenu/>
      <MarkupMenu/>
      <Col md={4}><Texts id="left"/></Col>
      <Col md={8}><Texts id="right"/></Col>
    </div>;
  }
});
module.exports=maincomponent;
//<BreadcrumbTOC toc={testdata} theme={theme} />