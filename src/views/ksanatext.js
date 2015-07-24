/*
	pure component to display markupable rich text
*/
var React=require("react/addons");
var Panel=require("react-bootstrap").Panel;
var E=React.createElement;
var update=React.addons.update;
var PT=React.PropTypes;
var action=require("../actions/texts");

var KsanaLayerReact=require("ksana-layer-react");
var InterlineView=KsanaLayerReact.InterlineView;


var KsanaText=React.createClass({
	mixins:[React.addons.PureRender]
	,propTypes:{
		hits:PT.array
		,markups:PT.string
		,text:PT.string.isRequired
		,id:PT.string.isRequired
	}
	,appendHitToMarkup:function(hits) { //interlineview markups is in Object format
		var markups={};
		if (this.props.markups) {
			for (var key in this.props.markups) markups[key]=this.props.markups[key];
		}
		for (var i=0;i<hits.length;i++) {
			markups[Math.random()]=hits[i];
		}
		return markups;
	}
	,onFocus:function() {
		action.activate(this.props.id);
	}
	,onSelectText:function() {
		console.log(arguments)
	}
	,render:function(){
		var markups=this.appendHitToMarkup(this.props.hits);
		return E(InterlineView,{text:this.props.text, markups:markups
		,onFocus:this.onFocus,onBlur:this.onBlur,
		onSelectText:this.onSelectText});
	}
})
module.exports=KsanaText;