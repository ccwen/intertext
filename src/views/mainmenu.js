var React=require("react/addons");
var reactbs=require("react-bootstrap");
var E=React.createElement;
var Button=reactbs.Button;

var Col=reactbs.Col;

var BreadcrumbTOC=require("ksana2015-breadcrumbtoc");
var theme=require("ksana2015-breadcrumbtoc/theme_bootstrap");
var tocdata=require("../maintoc");
var SearchBox=require("./searchbox");
var actions_texts=require("../actions/texts");
var MainMenu=React.createClass({
	addText:function() {
		actions_texts.add({panel:"left",title:"abc",key:"t1",content:"xxx"});
	}
	,render:function() {
		return <div inverse>
			<Col md={10}>
			<BreadcrumbTOC toc={tocdata} theme={theme}/>
			<Button onClick={this.addText}>Open</Button>
			</Col>
			<Col md={2} pullRight>
				<SearchBox/>
			</Col>
		</div>
	}
});
module.exports=MainMenu;