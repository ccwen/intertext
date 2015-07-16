var React=require("react/addons");
var Panel=require("react-bootstrap").Panel;
var E=React.createElement;
var update=React.addons.update;
var PT=React.PropTypes;
var KsanaText=require("./ksanatext");
var ksa=require("ksana-simple-api");

var TextPanelContent=React.createClass({
	mixins:[React.addons.PureRender]
	,fetchtext:function(opts) {
		console.log("fetch",opts.uti)
		ksa.fetch(opts,function(err,data){
			if (!err) this.setState({text:data[0].text,hits:data[0].hits});
			else console.error(err);
		}.bind(this));
	}
	,getInitialState:function() {
		return {text:"",hits:[]};
	}
	,componentWillReceiveProps:function(nextprops){
		if (nextprops.content && this.props.content &&
			this.props.content.uti!=nextprops.content.uti) {
			this.fetchtext(nextprops.content);			
		}
	}
	,componentDidMount:function() {
		this.fetchtext(this.props.content);
	}
	,render:function(){
		var props=update(this.props.content,{ 
			text:{$set:this.state.text} 
			,hits:{$set:this.state.hits}
			,id:{$set:this.props.id}
		});
		return E(KsanaText,props);
	}
})
module.exports=TextPanelContent;