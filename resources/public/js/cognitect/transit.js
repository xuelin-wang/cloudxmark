// Compiled by ClojureScript 1.9.89 {}
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
var seq__29586_29590 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29587_29591 = null;
var count__29588_29592 = (0);
var i__29589_29593 = (0);
while(true){
if((i__29589_29593 < count__29588_29592)){
var k_29594 = cljs.core._nth.call(null,chunk__29587_29591,i__29589_29593);
var v_29595 = (b[k_29594]);
(a[k_29594] = v_29595);

var G__29596 = seq__29586_29590;
var G__29597 = chunk__29587_29591;
var G__29598 = count__29588_29592;
var G__29599 = (i__29589_29593 + (1));
seq__29586_29590 = G__29596;
chunk__29587_29591 = G__29597;
count__29588_29592 = G__29598;
i__29589_29593 = G__29599;
continue;
} else {
var temp__6369__auto___29600 = cljs.core.seq.call(null,seq__29586_29590);
if(temp__6369__auto___29600){
var seq__29586_29601__$1 = temp__6369__auto___29600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29586_29601__$1)){
var c__22337__auto___29602 = cljs.core.chunk_first.call(null,seq__29586_29601__$1);
var G__29603 = cljs.core.chunk_rest.call(null,seq__29586_29601__$1);
var G__29604 = c__22337__auto___29602;
var G__29605 = cljs.core.count.call(null,c__22337__auto___29602);
var G__29606 = (0);
seq__29586_29590 = G__29603;
chunk__29587_29591 = G__29604;
count__29588_29592 = G__29605;
i__29589_29593 = G__29606;
continue;
} else {
var k_29607 = cljs.core.first.call(null,seq__29586_29601__$1);
var v_29608 = (b[k_29607]);
(a[k_29607] = v_29608);

var G__29609 = cljs.core.next.call(null,seq__29586_29601__$1);
var G__29610 = null;
var G__29611 = (0);
var G__29612 = (0);
seq__29586_29590 = G__29609;
chunk__29587_29591 = G__29610;
count__29588_29592 = G__29611;
i__29589_29593 = G__29612;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/VectorBuilder");
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
var args29613 = [];
var len__22617__auto___29616 = arguments.length;
var i__22618__auto___29617 = (0);
while(true){
if((i__22618__auto___29617 < len__22617__auto___29616)){
args29613.push((arguments[i__22618__auto___29617]));

var G__29618 = (i__22618__auto___29617 + (1));
i__22618__auto___29617 = G__29618;
continue;
} else {
}
break;
}

var G__29615 = args29613.length;
switch (G__29615) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29613.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
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
var G__29620 = (i + (2));
var G__29621 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29620;
ret = G__29621;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/SymbolHandler");
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
var seq__29622_29626 = cljs.core.seq.call(null,v);
var chunk__29623_29627 = null;
var count__29624_29628 = (0);
var i__29625_29629 = (0);
while(true){
if((i__29625_29629 < count__29624_29628)){
var x_29630 = cljs.core._nth.call(null,chunk__29623_29627,i__29625_29629);
ret.push(x_29630);

var G__29631 = seq__29622_29626;
var G__29632 = chunk__29623_29627;
var G__29633 = count__29624_29628;
var G__29634 = (i__29625_29629 + (1));
seq__29622_29626 = G__29631;
chunk__29623_29627 = G__29632;
count__29624_29628 = G__29633;
i__29625_29629 = G__29634;
continue;
} else {
var temp__6369__auto___29635 = cljs.core.seq.call(null,seq__29622_29626);
if(temp__6369__auto___29635){
var seq__29622_29636__$1 = temp__6369__auto___29635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29622_29636__$1)){
var c__22337__auto___29637 = cljs.core.chunk_first.call(null,seq__29622_29636__$1);
var G__29638 = cljs.core.chunk_rest.call(null,seq__29622_29636__$1);
var G__29639 = c__22337__auto___29637;
var G__29640 = cljs.core.count.call(null,c__22337__auto___29637);
var G__29641 = (0);
seq__29622_29626 = G__29638;
chunk__29623_29627 = G__29639;
count__29624_29628 = G__29640;
i__29625_29629 = G__29641;
continue;
} else {
var x_29642 = cljs.core.first.call(null,seq__29622_29636__$1);
ret.push(x_29642);

var G__29643 = cljs.core.next.call(null,seq__29622_29636__$1);
var G__29644 = null;
var G__29645 = (0);
var G__29646 = (0);
seq__29622_29626 = G__29643;
chunk__29623_29627 = G__29644;
count__29624_29628 = G__29645;
i__29625_29629 = G__29646;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/MapHandler");
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
var seq__29647_29651 = cljs.core.seq.call(null,v);
var chunk__29648_29652 = null;
var count__29649_29653 = (0);
var i__29650_29654 = (0);
while(true){
if((i__29650_29654 < count__29649_29653)){
var x_29655 = cljs.core._nth.call(null,chunk__29648_29652,i__29650_29654);
ret.push(x_29655);

var G__29656 = seq__29647_29651;
var G__29657 = chunk__29648_29652;
var G__29658 = count__29649_29653;
var G__29659 = (i__29650_29654 + (1));
seq__29647_29651 = G__29656;
chunk__29648_29652 = G__29657;
count__29649_29653 = G__29658;
i__29650_29654 = G__29659;
continue;
} else {
var temp__6369__auto___29660 = cljs.core.seq.call(null,seq__29647_29651);
if(temp__6369__auto___29660){
var seq__29647_29661__$1 = temp__6369__auto___29660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29647_29661__$1)){
var c__22337__auto___29662 = cljs.core.chunk_first.call(null,seq__29647_29661__$1);
var G__29663 = cljs.core.chunk_rest.call(null,seq__29647_29661__$1);
var G__29664 = c__22337__auto___29662;
var G__29665 = cljs.core.count.call(null,c__22337__auto___29662);
var G__29666 = (0);
seq__29647_29651 = G__29663;
chunk__29648_29652 = G__29664;
count__29649_29653 = G__29665;
i__29650_29654 = G__29666;
continue;
} else {
var x_29667 = cljs.core.first.call(null,seq__29647_29661__$1);
ret.push(x_29667);

var G__29668 = cljs.core.next.call(null,seq__29647_29661__$1);
var G__29669 = null;
var G__29670 = (0);
var G__29671 = (0);
seq__29647_29651 = G__29668;
chunk__29648_29652 = G__29669;
count__29649_29653 = G__29670;
i__29650_29654 = G__29671;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/SetHandler");
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
var seq__29672_29676 = cljs.core.seq.call(null,v);
var chunk__29673_29677 = null;
var count__29674_29678 = (0);
var i__29675_29679 = (0);
while(true){
if((i__29675_29679 < count__29674_29678)){
var x_29680 = cljs.core._nth.call(null,chunk__29673_29677,i__29675_29679);
ret.push(x_29680);

var G__29681 = seq__29672_29676;
var G__29682 = chunk__29673_29677;
var G__29683 = count__29674_29678;
var G__29684 = (i__29675_29679 + (1));
seq__29672_29676 = G__29681;
chunk__29673_29677 = G__29682;
count__29674_29678 = G__29683;
i__29675_29679 = G__29684;
continue;
} else {
var temp__6369__auto___29685 = cljs.core.seq.call(null,seq__29672_29676);
if(temp__6369__auto___29685){
var seq__29672_29686__$1 = temp__6369__auto___29685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29672_29686__$1)){
var c__22337__auto___29687 = cljs.core.chunk_first.call(null,seq__29672_29686__$1);
var G__29688 = cljs.core.chunk_rest.call(null,seq__29672_29686__$1);
var G__29689 = c__22337__auto___29687;
var G__29690 = cljs.core.count.call(null,c__22337__auto___29687);
var G__29691 = (0);
seq__29672_29676 = G__29688;
chunk__29673_29677 = G__29689;
count__29674_29678 = G__29690;
i__29675_29679 = G__29691;
continue;
} else {
var x_29692 = cljs.core.first.call(null,seq__29672_29686__$1);
ret.push(x_29692);

var G__29693 = cljs.core.next.call(null,seq__29672_29686__$1);
var G__29694 = null;
var G__29695 = (0);
var G__29696 = (0);
seq__29672_29676 = G__29693;
chunk__29673_29677 = G__29694;
count__29674_29678 = G__29695;
i__29675_29679 = G__29696;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/UUIDHandler");
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
var args29697 = [];
var len__22617__auto___29712 = arguments.length;
var i__22618__auto___29713 = (0);
while(true){
if((i__22618__auto___29713 < len__22617__auto___29712)){
args29697.push((arguments[i__22618__auto___29713]));

var G__29714 = (i__22618__auto___29713 + (1));
i__22618__auto___29713 = G__29714;
continue;
} else {
}
break;
}

var G__29699 = args29697.length;
switch (G__29699) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29697.length)].join('')));

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
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__29700 = obj;
G__29700.push(kfn.call(null,k),vfn.call(null,v));

return G__29700;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x29701 = cljs.core.clone.call(null,handlers);
x29701.forEach = ((function (x29701,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29702 = cljs.core.seq.call(null,coll);
var chunk__29703 = null;
var count__29704 = (0);
var i__29705 = (0);
while(true){
if((i__29705 < count__29704)){
var vec__29706 = cljs.core._nth.call(null,chunk__29703,i__29705);
var k = cljs.core.nth.call(null,vec__29706,(0),null);
var v = cljs.core.nth.call(null,vec__29706,(1),null);
f.call(null,v,k);

var G__29716 = seq__29702;
var G__29717 = chunk__29703;
var G__29718 = count__29704;
var G__29719 = (i__29705 + (1));
seq__29702 = G__29716;
chunk__29703 = G__29717;
count__29704 = G__29718;
i__29705 = G__29719;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__29702);
if(temp__6369__auto__){
var seq__29702__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29702__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__29702__$1);
var G__29720 = cljs.core.chunk_rest.call(null,seq__29702__$1);
var G__29721 = c__22337__auto__;
var G__29722 = cljs.core.count.call(null,c__22337__auto__);
var G__29723 = (0);
seq__29702 = G__29720;
chunk__29703 = G__29721;
count__29704 = G__29722;
i__29705 = G__29723;
continue;
} else {
var vec__29709 = cljs.core.first.call(null,seq__29702__$1);
var k = cljs.core.nth.call(null,vec__29709,(0),null);
var v = cljs.core.nth.call(null,vec__29709,(1),null);
f.call(null,v,k);

var G__29724 = cljs.core.next.call(null,seq__29702__$1);
var G__29725 = null;
var G__29726 = (0);
var G__29727 = (0);
seq__29702 = G__29724;
chunk__29703 = G__29725;
count__29704 = G__29726;
i__29705 = G__29727;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29701,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29701;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
var args29728 = [];
var len__22617__auto___29734 = arguments.length;
var i__22618__auto___29735 = (0);
while(true){
if((i__22618__auto___29735 < len__22617__auto___29734)){
args29728.push((arguments[i__22618__auto___29735]));

var G__29736 = (i__22618__auto___29735 + (1));
i__22618__auto___29735 = G__29736;
continue;
} else {
}
break;
}

var G__29730 = args29728.length;
switch (G__29730) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29728.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit29731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit29731 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta29732){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta29732 = meta29732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit29731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29733,meta29732__$1){
var self__ = this;
var _29733__$1 = this;
return (new cognitect.transit.t_cognitect$transit29731(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta29732__$1));
});

cognitect.transit.t_cognitect$transit29731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29733){
var self__ = this;
var _29733__$1 = this;
return self__.meta29732;
});

cognitect.transit.t_cognitect$transit29731.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29731.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29731.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29731.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta29732","meta29732",-1516632499,null)], null);
});

cognitect.transit.t_cognitect$transit29731.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit29731.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit29731";

cognitect.transit.t_cognitect$transit29731.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cognitect.transit/t_cognitect$transit29731");
});

cognitect.transit.__GT_t_cognitect$transit29731 = (function cognitect$transit$__GT_t_cognitect$transit29731(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29732){
return (new cognitect.transit.t_cognitect$transit29731(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29732));
});

}

return (new cognitect.transit.t_cognitect$transit29731(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__21434__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1467159061193