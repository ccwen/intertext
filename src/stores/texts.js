var Reflux=require("reflux");
var actions=require("../actions/texts");
var MAXPANEL=10;
var Texts=Reflux.createStore({
	listenables:actions
	,texts:[]
	,find:function(texts,id) {
		for (var i=0;i<texts.length;i++) {
			if (texts[i].id==id) return i;
		}
		return -1;
	}
	,add_replace:function(trait) {
		var i=this.find(this.texts,trait.id);
		if (i>-1) this.texts.splice(i,1);
		if (this.texts.length>=MAXPANEL) this.texts.pop();
	 	this.texts.unshift(trait);
	}
	,onReplace:function(oldid,trait) {
		var i=this.find(this.texts,oldid);
		if (i==-1)	return ;
		this.texts[i]=trait;
		this.trigger(this.texts,trait.id);
	}
	,splitAndSortTexts:function() {
		var texts=this.texts.sort(function(a,b){
			if (a.column==b.column) return 0;
			else if (a.column=="right")return 1;
			else return -1;
		});

		var right=[],left=[];
		texts.forEach(function(t){
			if (t.column=="right") right.push(t);
			if (t.column=="left") left.push(t);
		});
		return [left,right];
	}
	,onSwap:function(id) {
		var idx=this.find(this.texts,id);
		if (idx==-1) return;
		//split texts to 2 arrays
		var panel=this.texts[idx];

		var bothside=this.splitAndSortTexts();
		var from=bothside[0], to=bothside[1];
		if (panel.column=="right") {
			from=bothside[1];
			to=bothside[0];
		} 

		var idx=this.find(from,id);

		from.splice(idx,1);
		panel.column=(panel.column=="right")?"left":"right";
		to.splice(idx,0,panel);
		this.texts=from.concat(to);
		this.trigger(this.texts,id);
	}
	,onMoveup:function(id) {
		console.log("moveup",id);
	}
	,onMovedown:function(id) {
		console.log("movedown",id);
	}
	,onAdd:function(trait) {
		this.add_replace(trait);
		this.trigger(this.texts,trait.id);
	}
	,onRemove:function(id) {
		var i=this.find(this.texts,id);
		if (i>-1) this.texts.splice(i,1);
		this.trigger(this.texts,id);
	}
})
module.exports=Texts;