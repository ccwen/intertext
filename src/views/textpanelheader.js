var React=require("react/addons");
var E=React.createElement;
var reactbs=require("react-bootstrap");

var DropdownButton=reactbs.DropdownButton;
var MenuItem=reactbs.MenuItem;
var Glyphicon=reactbs.Glyphicon;
var Button=reactbs.Button;

var TextPanelHeader=React.createClass({
	mixins:[React.addons.PureRender]
	,otherside:function(){
		return this.props.column=="right"?"left":"right"
	}
	,Otherside:function(){
		var r=this.otherside();
		return r[0].toUpperCase()+r.substr(1);
	}
	,render:function(){
		return <div>
		{this.props.children}

		<span className="pull-right">
		<DropdownButton pullRight bsStyle='link' title={E(Glyphicon,{glyph:'option-horizontal'})} noCaret>
      <MenuItem eventKey='1'><Glyphicon glyph="arrow-up"/>Move Up</MenuItem>
      <MenuItem eventKey='2'><Glyphicon glyph={"arrow-"+this.otherside()}/>Move {this.Otherside()}</MenuItem>
      <MenuItem eventKey='3'><Glyphicon glyph="arrow-down"/>Move Down</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey='4'>Separated link</MenuItem>
    </DropdownButton>
		<Button bsStyle='link'>{E(Glyphicon,{glyph:'remove'})}</Button>
		</span>
		</div>
	}
});

module.exports=TextPanelHeader;
