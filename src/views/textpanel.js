var React=require("react/addons");
var Panel=require("react-bootstrap").Panel;
var E=React.createElement;
var PT=React.PropTypes;
var TextPanelHeader=require("./textpanelheader");
var TextPanelContent=require("./textpanelcontent");

var TextPanel=React.createClass({
	mixins:[React.PureRenderer]
	,render:function() {
		 return E(Panel,{
		 	collapsible:true
		 	,defaultExpanded:true
		 	,header:E(TextPanelHeader,this.props,this.props.title)
		 	,eventKey:this.props.key
		 	,bsStyle:this.props.active?'success':'default'
		 },E(TextPanelContent,this.props));
	}
});

module.exports=TextPanel;