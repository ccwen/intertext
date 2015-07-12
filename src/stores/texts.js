var Reflux=require("reflux");
var actions=require("../actions/texts");
var MAXPANEL=10;
var Texts=Reflux.createStore({
	listenables:actions
	,texts:[]
	,find:function(key) {
		for (var i=0;i<this.texts.length;i++) {
			if (this.texts[i].key==key) return i;
		}
		return -1;
	}
	,add_replace:function(trait) {
		var i=this.find(trait.key);
		if (i>-1) this.texts.splice(i,1);
		if (this.texts.length>=MAXPANEL) this.texts.pop();
	 	this.texts.unshift(trait);
	}
	,onReplace:function(oldkey,trait) {
		var i=this.find(oldkey);
		if (i==-1)	return ;
		this.texts[i]=trait;
		this.trigger(this.texts,trait.key);
	}
	,onAdd:function(trait) {
		this.add_replace(trait);
		this.trigger(this.texts,trait.key);
	}
	,onRemove:function(key) {
		var i=this.find(key);
		if (i>-1) this.texts.splice(i,1);
		this.trigger(this.texts,key);
	}
})
module.exports=Texts;