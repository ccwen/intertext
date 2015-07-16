var Reflux=require("reflux");
var actions=require("../actions/texts");
var MAXPANEL=10;
var Texts=Reflux.createStore({
	listenables:actions
	,texts_right:[]
	,texts_left:[]
	,find:function(texts,id) {
		for (var i=0;i<texts.length;i++) {
			if (texts[i].id==id) return i;
		}
		return -1;
	}
	,get:function(id) {
		var idx=this.find(this.texts_right,id);
		if (idx>-1) return this.texts_right[idx]
		var idx=this.find(this.texts_left,id);
		if (idx>-1) return this.texts_left[idx]
	}
	,add_replace:function(trait) {
		var i=this.find(this.texts_right,trait.id);
		if (i>-1) this.texts_right.splice(i,1);

		var i=this.find(this.texts_left,trait.id);
		if (i>-1) this.texts_left.splice(i,1);

		if (trait.column==="right") {
			this.texts_right.unshift(trait);
		} else{
			this.texts_left.unshift(trait);
		}
	}
	,onReplace:function(oldid,trait) {
		var i=this.find(this.texts_right,oldid);
		if (i>-1)	this.texts_right[i]=trait;

		var i=this.find(this.texts_left,oldid);
		if (i>-1)	this.texts_left[i]=trait;
		
		this.triggerall(trait.id);
	}
	,onSwap:function(id) {
		var from=this.texts_left, to=this.texts_right;

		var idx=this.find(from,id);
		if (idx==-1) {
			to=this.texts_left, from=this.texts_right;
			idx=this.find(from,id);
			var panel=from[idx];
		} else {
			var panel=from[idx];
		}

		var idx=this.find(from,id);
		if (idx==-1) return;
		var panel=from[idx];

		from.splice(idx,1);
		panel.column=(panel.column=="right")?"left":"right";
		to.splice(idx,0,panel);
		this.triggerall(id);
	}
	,onMoveup:function(id) {
		var idx=this.find(this.texts_right,id);
		var from=this.texts_right;
		if (idx==-1) {
			from=this.texts_left;
			idx=this.find(this.texts_left,id);
		}
		var panel=from[idx];

		if (idx>0 && from.length>1) {
			var t=from[idx-1];
			from[idx-1]=panel;
			from[idx]=t;
		}
		this.triggerall(id);
	}
	,onMovedown:function(id) {
		var idx=this.find(this.texts_right,id);
		var from=this.texts_right;
		if (idx==-1) {
			from=this.texts_left;
			idx=this.find(this.texts_left,id);
		}
		var panel=from[idx];

		if (idx<from.length-1 && from.length>1) {
			var t=from[idx+1];
			from[idx+1]=panel;
			from[idx]=t;
		}
		this.triggerall(id);
	}
	,onAdd:function(trait) {
		this.add_replace(trait);
		this.triggerall(trait.id);
	}
	,onRemove:function(id) {
		var i=this.find(this.texts_right,id);
		if (i>-1) this.texts_right.splice(i,1);

		i=this.find(this.texts_left,id);
		if (i>-1) this.texts_left.splice(i,1);

		this.triggerall(id);
	}
	,onActivate:function(id) {
		this.texts_right.forEach(function(text){text.active=false});
		this.texts_left.forEach(function(text){text.active=false});
		var panel=this.get(id);
		if (panel) panel.active=true;
		this.triggerall(id);
	}
	,triggerall:function(id) {

		this.trigger(this.texts_right.concat(this.texts_left),id);
	}
})
module.exports=Texts;