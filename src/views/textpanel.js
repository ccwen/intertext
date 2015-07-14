var React=require("react/addons");
var Panel=require("react-bootstrap").Panel;
var E=React.createElement;
var Reflux=require("reflux");
var PT=React.PropTypes;
var TextPanelHeader=require("./textpanelheader");

var TextPanel=React.createClass({
	mixins:[React.PureRenderer]
	,render:function() {
		 return E(Panel,{
		 	collapsible:true
		 	,defaultExpanded:true
		 	,header:E(TextPanelHeader,{column:this.props.column},this.props.title)
		 	,eventKey:this.props.key
		 },this.props.content);
	}
});

module.exports=TextPanel;