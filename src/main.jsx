var React=require("react");
var ksa=require("ksana-simple-api");
var PanelGroup=require("react-bootstrap").PanelGroup;
var Panel=require("react-bootstrap").Panel;
var BreadcrumbTOC=require("ksana2015-breadcrumbtoc");
var theme=require("ksana2015-breadcrumbtoc/theme_bootstrap");

var testdata=require("./testdata");
var maincomponent = React.createClass({
  getInitialState:function() {
    return {result:[],tofind:"君子"};
  },
  search:function() {
    ksa.excerpt({db:"sample",q:this.state.tofind},function(err,data){
      if (err) console.error(err);
      else this.setState({result:data});
    }.bind(this));
  },
  highlight:function(text,hits){
    var ex=0,out=[];
    for (var i=0;i<hits.length;i++) {
      var now=hits[i][0];
      if (now>ex) {
        out.push(<span key={ex}>{text.substring(ex,now)}</span>);
      }
      out.push(<span key={"h"+ex} className={"hl"+hits[i][2]}>
        {text.substr(now,hits[i][1])}</span>);
      ex=now+=hits[i][1];
    }
    out.push(<span key={ex}>{text.substr(ex)}</span>);
    return out;
  }  
  ,renderItem:function(item,idx) {
    return <div>{this.highlight(item.text,item.hits)}</div>
  },
  setTofind:function(e) {
    this.setState({tofind:e.target.value})
  },
  render: function() {
    return <div><BreadcrumbTOC toc={testdata} theme={theme} />
    </div>;
  }
});
module.exports=maincomponent;