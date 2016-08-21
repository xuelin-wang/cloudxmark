// Compiled by ClojureScript 1.9.225 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__35734_35738 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__35735_35739 = null;
var count__35736_35740 = (0);
var i__35737_35741 = (0);
while(true){
if((i__35737_35741 < count__35736_35740)){
var k_35742 = cljs.core._nth.call(null,chunk__35735_35739,i__35737_35741);
var v_35743 = (b[k_35742]);
(a[k_35742] = v_35743);

var G__35744 = seq__35734_35738;
var G__35745 = chunk__35735_35739;
var G__35746 = count__35736_35740;
var G__35747 = (i__35737_35741 + (1));
seq__35734_35738 = G__35744;
chunk__35735_35739 = G__35745;
count__35736_35740 = G__35746;
i__35737_35741 = G__35747;
continue;
} else {
var temp__6552__auto___35748 = cljs.core.seq.call(null,seq__35734_35738);
if(temp__6552__auto___35748){
var seq__35734_35749__$1 = temp__6552__auto___35748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35734_35749__$1)){
var c__22493__auto___35750 = cljs.core.chunk_first.call(null,seq__35734_35749__$1);
var G__35751 = cljs.core.chunk_rest.call(null,seq__35734_35749__$1);
var G__35752 = c__22493__auto___35750;
var G__35753 = cljs.core.count.call(null,c__22493__auto___35750);
var G__35754 = (0);
seq__35734_35738 = G__35751;
chunk__35735_35739 = G__35752;
count__35736_35740 = G__35753;
i__35737_35741 = G__35754;
continue;
} else {
var k_35755 = cljs.core.first.call(null,seq__35734_35749__$1);
var v_35756 = (b[k_35755]);
(a[k_35755] = v_35756);

var G__35757 = cljs.core.next.call(null,seq__35734_35749__$1);
var G__35758 = null;
var G__35759 = (0);
var G__35760 = (0);
seq__35734_35738 = G__35757;
chunk__35735_35739 = G__35758;
count__35736_35740 = G__35759;
i__35737_35741 = G__35760;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args35761 = [];
var len__22773__auto___35764 = arguments.length;
var i__22774__auto___35765 = (0);
while(true){
if((i__22774__auto___35765 < len__22773__auto___35764)){
args35761.push((arguments[i__22774__auto___35765]));

var G__35766 = (i__22774__auto___35765 + (1));
i__22774__auto___35765 = G__35766;
continue;
} else {
}
break;
}

var G__35763 = args35761.length;
switch (G__35763) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35761.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__35768 = (i + (2));
var G__35769 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__35768;
ret = G__35769;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35770_35774 = cljs.core.seq.call(null,v);
var chunk__35771_35775 = null;
var count__35772_35776 = (0);
var i__35773_35777 = (0);
while(true){
if((i__35773_35777 < count__35772_35776)){
var x_35778 = cljs.core._nth.call(null,chunk__35771_35775,i__35773_35777);
ret.push(x_35778);

var G__35779 = seq__35770_35774;
var G__35780 = chunk__35771_35775;
var G__35781 = count__35772_35776;
var G__35782 = (i__35773_35777 + (1));
seq__35770_35774 = G__35779;
chunk__35771_35775 = G__35780;
count__35772_35776 = G__35781;
i__35773_35777 = G__35782;
continue;
} else {
var temp__6552__auto___35783 = cljs.core.seq.call(null,seq__35770_35774);
if(temp__6552__auto___35783){
var seq__35770_35784__$1 = temp__6552__auto___35783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35770_35784__$1)){
var c__22493__auto___35785 = cljs.core.chunk_first.call(null,seq__35770_35784__$1);
var G__35786 = cljs.core.chunk_rest.call(null,seq__35770_35784__$1);
var G__35787 = c__22493__auto___35785;
var G__35788 = cljs.core.count.call(null,c__22493__auto___35785);
var G__35789 = (0);
seq__35770_35774 = G__35786;
chunk__35771_35775 = G__35787;
count__35772_35776 = G__35788;
i__35773_35777 = G__35789;
continue;
} else {
var x_35790 = cljs.core.first.call(null,seq__35770_35784__$1);
ret.push(x_35790);

var G__35791 = cljs.core.next.call(null,seq__35770_35784__$1);
var G__35792 = null;
var G__35793 = (0);
var G__35794 = (0);
seq__35770_35774 = G__35791;
chunk__35771_35775 = G__35792;
count__35772_35776 = G__35793;
i__35773_35777 = G__35794;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35795_35799 = cljs.core.seq.call(null,v);
var chunk__35796_35800 = null;
var count__35797_35801 = (0);
var i__35798_35802 = (0);
while(true){
if((i__35798_35802 < count__35797_35801)){
var x_35803 = cljs.core._nth.call(null,chunk__35796_35800,i__35798_35802);
ret.push(x_35803);

var G__35804 = seq__35795_35799;
var G__35805 = chunk__35796_35800;
var G__35806 = count__35797_35801;
var G__35807 = (i__35798_35802 + (1));
seq__35795_35799 = G__35804;
chunk__35796_35800 = G__35805;
count__35797_35801 = G__35806;
i__35798_35802 = G__35807;
continue;
} else {
var temp__6552__auto___35808 = cljs.core.seq.call(null,seq__35795_35799);
if(temp__6552__auto___35808){
var seq__35795_35809__$1 = temp__6552__auto___35808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35795_35809__$1)){
var c__22493__auto___35810 = cljs.core.chunk_first.call(null,seq__35795_35809__$1);
var G__35811 = cljs.core.chunk_rest.call(null,seq__35795_35809__$1);
var G__35812 = c__22493__auto___35810;
var G__35813 = cljs.core.count.call(null,c__22493__auto___35810);
var G__35814 = (0);
seq__35795_35799 = G__35811;
chunk__35796_35800 = G__35812;
count__35797_35801 = G__35813;
i__35798_35802 = G__35814;
continue;
} else {
var x_35815 = cljs.core.first.call(null,seq__35795_35809__$1);
ret.push(x_35815);

var G__35816 = cljs.core.next.call(null,seq__35795_35809__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35795_35799 = G__35816;
chunk__35796_35800 = G__35817;
count__35797_35801 = G__35818;
i__35798_35802 = G__35819;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35820_35824 = cljs.core.seq.call(null,v);
var chunk__35821_35825 = null;
var count__35822_35826 = (0);
var i__35823_35827 = (0);
while(true){
if((i__35823_35827 < count__35822_35826)){
var x_35828 = cljs.core._nth.call(null,chunk__35821_35825,i__35823_35827);
ret.push(x_35828);

var G__35829 = seq__35820_35824;
var G__35830 = chunk__35821_35825;
var G__35831 = count__35822_35826;
var G__35832 = (i__35823_35827 + (1));
seq__35820_35824 = G__35829;
chunk__35821_35825 = G__35830;
count__35822_35826 = G__35831;
i__35823_35827 = G__35832;
continue;
} else {
var temp__6552__auto___35833 = cljs.core.seq.call(null,seq__35820_35824);
if(temp__6552__auto___35833){
var seq__35820_35834__$1 = temp__6552__auto___35833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35820_35834__$1)){
var c__22493__auto___35835 = cljs.core.chunk_first.call(null,seq__35820_35834__$1);
var G__35836 = cljs.core.chunk_rest.call(null,seq__35820_35834__$1);
var G__35837 = c__22493__auto___35835;
var G__35838 = cljs.core.count.call(null,c__22493__auto___35835);
var G__35839 = (0);
seq__35820_35824 = G__35836;
chunk__35821_35825 = G__35837;
count__35822_35826 = G__35838;
i__35823_35827 = G__35839;
continue;
} else {
var x_35840 = cljs.core.first.call(null,seq__35820_35834__$1);
ret.push(x_35840);

var G__35841 = cljs.core.next.call(null,seq__35820_35834__$1);
var G__35842 = null;
var G__35843 = (0);
var G__35844 = (0);
seq__35820_35824 = G__35841;
chunk__35821_35825 = G__35842;
count__35822_35826 = G__35843;
i__35823_35827 = G__35844;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args35845 = [];
var len__22773__auto___35860 = arguments.length;
var i__22774__auto___35861 = (0);
while(true){
if((i__22774__auto___35861 < len__22773__auto___35860)){
args35845.push((arguments[i__22774__auto___35861]));

var G__35862 = (i__22774__auto___35861 + (1));
i__22774__auto___35861 = G__35862;
continue;
} else {
}
break;
}

var G__35847 = args35845.length;
switch (G__35847) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35845.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__35848 = obj;
G__35848.push(kfn.call(null,k),vfn.call(null,v));

return G__35848;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x35849 = cljs.core.clone.call(null,handlers);
x35849.forEach = ((function (x35849,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__35850 = cljs.core.seq.call(null,coll);
var chunk__35851 = null;
var count__35852 = (0);
var i__35853 = (0);
while(true){
if((i__35853 < count__35852)){
var vec__35854 = cljs.core._nth.call(null,chunk__35851,i__35853);
var k = cljs.core.nth.call(null,vec__35854,(0),null);
var v = cljs.core.nth.call(null,vec__35854,(1),null);
f.call(null,v,k);

var G__35864 = seq__35850;
var G__35865 = chunk__35851;
var G__35866 = count__35852;
var G__35867 = (i__35853 + (1));
seq__35850 = G__35864;
chunk__35851 = G__35865;
count__35852 = G__35866;
i__35853 = G__35867;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__35850);
if(temp__6552__auto__){
var seq__35850__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35850__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__35850__$1);
var G__35868 = cljs.core.chunk_rest.call(null,seq__35850__$1);
var G__35869 = c__22493__auto__;
var G__35870 = cljs.core.count.call(null,c__22493__auto__);
var G__35871 = (0);
seq__35850 = G__35868;
chunk__35851 = G__35869;
count__35852 = G__35870;
i__35853 = G__35871;
continue;
} else {
var vec__35857 = cljs.core.first.call(null,seq__35850__$1);
var k = cljs.core.nth.call(null,vec__35857,(0),null);
var v = cljs.core.nth.call(null,vec__35857,(1),null);
f.call(null,v,k);

var G__35872 = cljs.core.next.call(null,seq__35850__$1);
var G__35873 = null;
var G__35874 = (0);
var G__35875 = (0);
seq__35850 = G__35872;
chunk__35851 = G__35873;
count__35852 = G__35874;
i__35853 = G__35875;
continue;
}
} else {
return null;
}
}
break;
}
});})(x35849,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x35849;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args35876 = [];
var len__22773__auto___35882 = arguments.length;
var i__22774__auto___35883 = (0);
while(true){
if((i__22774__auto___35883 < len__22773__auto___35882)){
args35876.push((arguments[i__22774__auto___35883]));

var G__35884 = (i__22774__auto___35883 + (1));
i__22774__auto___35883 = G__35884;
continue;
} else {
}
break;
}

var G__35878 = args35876.length;
switch (G__35878) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35876.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit35879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit35879 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta35880){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta35880 = meta35880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit35879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35881,meta35880__$1){
var self__ = this;
var _35881__$1 = this;
return (new cognitect.transit.t_cognitect$transit35879(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta35880__$1));
});

cognitect.transit.t_cognitect$transit35879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35881){
var self__ = this;
var _35881__$1 = this;
return self__.meta35880;
});

cognitect.transit.t_cognitect$transit35879.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35879.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35879.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35879.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta35880","meta35880",1135195430,null)], null);
});

cognitect.transit.t_cognitect$transit35879.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit35879.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit35879";

cognitect.transit.t_cognitect$transit35879.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cognitect.transit/t_cognitect$transit35879");
});

cognitect.transit.__GT_t_cognitect$transit35879 = (function cognitect$transit$__GT_t_cognitect$transit35879(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35880){
return (new cognitect.transit.t_cognitect$transit35879(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35880));
});

}

return (new cognitect.transit.t_cognitect$transit35879(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__21590__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1471653233865