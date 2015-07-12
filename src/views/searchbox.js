
var React=require("react/addons");
var reactbs=require("react-bootstrap");
var E=React.createElement;
var SearchResult=require("./searchresult");
var Input=reactbs.Input;

var SearchBox=React.createClass({
	mixins:[React.addons.PureRenderer]
	,getInitialState:function(){
		return {hit:100}
	}
	,onChange:function(e) {
		this.setState({hit:Math.round(Math.random()*1000)});
	}
	,render:function() {
		return <Input type="text" onChange={this.onChange}
		buttonAfter={E(SearchResult,{hit:this.state.hit})}/>
	}
});
module.exports=SearchBox;