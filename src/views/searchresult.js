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
		return <DropdownButton pullRight title={[E(Glyphicon,{glyph:'search'}),this.props.hit]}>
			<MenuItem>xxx</MenuItem>
			<MenuItem>xxx</MenuItem>
			<MenuItem>xxx</MenuItem>
		</DropdownButton>
	}
});
module.exports=SearchResult;