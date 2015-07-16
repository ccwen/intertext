var React=require("react/addons");
var Panel=require("react-bootstrap").Panel;
var E=React.createElement;
var update=React.addons.update;
var PT=React.PropTypes;
var action=require("../actions/texts");

var KsanaLayerReact=require("ksana-layer-react");
var InterlineView=KsanaLayerReact.InterlineView;


/*
	,editorReceiveFocus:function(e) {
		action.activate(this.props.id);
	}

*/
var KsanaText=React.createClass({
	mixins:[React.addons.PureRender]
	,hit2markup:function(hits) {
		var markups={};
		for (var i=0;i<hits.length;i++) {
			markups[Math.random()]=hits[i];
		}
		return markups;
	}
	,onFocus:function() {
		action.activate(this.props.id);
	}
	,render:function(){
		var markups=this.hit2markup(this.props.hits);
		return <InterlineView text={this.props.text} markups={markups}
		onFocus={this.onFocus} onBlur={this.onBlur}/>
	}
})
module.exports=KsanaText;