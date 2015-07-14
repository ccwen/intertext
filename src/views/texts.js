var React=require("react/addons");
var E=React.createElement;
var Reflux=require("reflux");
var store=require("../stores/texts");
var PT=React.PropTypes;
var TextPanel=require("./textpanel");
var PanelGroup=require("react-bootstrap").PanelGroup;

var Texts=React.createClass({
	mixins:[Reflux.listenTo(store,"onData")]
	,getInitialState:function() {
		return {texts:[]};
	}
	,propTypes:{
		id:PT.string.isRequired
	}
	,onData:function(texts) {
		var id=this.props.id;
		this.setState({texts:texts.filter(function(text){
				return text.column===id;
			})
		});
	}
	,renderItem:function(item,idx){
		return E(TextPanel,item);
	}
	,render:function() {
		return E(PanelGroup,null,this.state.texts.map(this.renderItem));
	}
});
module.exports=Texts;