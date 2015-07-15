var React=require("react/addons");
var E=React.createElement;
var reactbs=require("react-bootstrap");

var DropdownButton=reactbs.DropdownButton;
var MenuItem=reactbs.MenuItem;
var Glyphicon=reactbs.Glyphicon;
var Button=reactbs.Button;
var action=require("../actions/texts");

var TextPanelHeader=React.createClass({
	mixins:[React.addons.PureRender]
	,otherside:function(){
		return this.props.column=="right"?"left":"right"
	}
	,Otherside:function(){
		var r=this.otherside();
		return r[0].toUpperCase()+r.substr(1);
	}
	,onMenuSelect:function(e) {
		action[e](this.props.id);
	}
	,render:function(){
		return <div>
		{this.props.children}

		<span className="pull-right">
		<DropdownButton onSelect={this.onMenuSelect} pullRight bsStyle='link' title={E(Glyphicon,{glyph:'option-horizontal'})} noCaret>
      <MenuItem key="1" eventKey='moveup'><Glyphicon glyph="arrow-up"/>Move Up</MenuItem>
      <MenuItem key="2" eventKey='swap'><Glyphicon glyph={"arrow-"+this.otherside()}/>Move {this.Otherside()}</MenuItem>
      <MenuItem key="3" eventKey='movedown'><Glyphicon glyph="arrow-down"/>Move Down</MenuItem>
      <MenuItem key="4" divider />
      <MenuItem key="5" eventKey='4'><Glyphicon glyph="arrow-up"/><Glyphicon glyph="remove"/>close all above</MenuItem>
      <MenuItem key="6" eventKey='5'><Glyphicon glyph="arrow-down"/><Glyphicon glyph="remove"/>close all below</MenuItem>
    </DropdownButton>
		<Button bsStyle='link'>{E(Glyphicon,{glyph:'remove'})}</Button>
		</span>
		</div>
	}
});

module.exports=TextPanelHeader;
