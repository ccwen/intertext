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
	}
	,componentDidMount:function() {
		actions_texts.add({column:"left",title:"法會因由",id:"t1",content:{db:"ds",uti:"1"}});
		actions_texts.add({column:"right",title:"t2",id:"t2",content:{db:"ds",uti:"3"}});
		// actions_texts.add({column:"left",title:"t3",id:"t3",content:{db:"ds",uti:"10"}});
		// actions_texts.add({column:"right",title:"t4",id:"t4",content:{db:"ds",uti:"3"}});

	}
	,render:function() {
		return <div>
			<Col md={10}>
			InterText <BreadcrumbTOC toc={tocdata} theme={theme}/>
			<Button onClick={this.addText}>Open</Button>
			</Col>
			<Col md={2} pullRight>
				<SearchBox/>
			</Col>
		</div>
	}
});
module.exports=MainMenu;