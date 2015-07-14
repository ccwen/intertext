var React=require("react/addons");
var reactbs=require("react-bootstrap");
var E=React.createElement;
var PT=React.PropTypes;

var DropdownButton=reactbs.DropdownButton;
var Glyphicon=reactbs.Glyphicon;
var Button=reactbs.Button;
var MenuItem=reactbs.MenuItem;

var SearchResult=React.createClass({
	propTypes:{
		hit:PT.number.isRequired
	}
	,render:function() {
		return <DropdownButton pullRight title={[E(Glyphicon,{key:1,glyph:'search'}),E("span",{key:2},this.props.hit)]}>
			<MenuItem key="1">xxx</MenuItem>
			<MenuItem key="2">xxx</MenuItem>
			<MenuItem key="3">xxx</MenuItem>
		</DropdownButton>
	}
});
module.exports=SearchResult;