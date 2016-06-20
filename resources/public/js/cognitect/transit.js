// Compiled by ClojureScript 1.8.51 {}
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
var seq__25345_25349 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25346_25350 = null;
var count__25347_25351 = (0);
var i__25348_25352 = (0);
while(true){
if((i__25348_25352 < count__25347_25351)){
var k_25353 = cljs.core._nth.call(null,chunk__25346_25350,i__25348_25352);
var v_25354 = (b[k_25353]);
(a[k_25353] = v_25354);

var G__25355 = seq__25345_25349;
var G__25356 = chunk__25346_25350;
var G__25357 = count__25347_25351;
var G__25358 = (i__25348_25352 + (1));
seq__25345_25349 = G__25355;
chunk__25346_25350 = G__25356;
count__25347_25351 = G__25357;
i__25348_25352 = G__25358;
continue;
} else {
var temp__4657__auto___25359 = cljs.core.seq.call(null,seq__25345_25349);
if(temp__4657__auto___25359){
var seq__25345_25360__$1 = temp__4657__auto___25359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25345_25360__$1)){
var c__19279__auto___25361 = cljs.core.chunk_first.call(null,seq__25345_25360__$1);
var G__25362 = cljs.core.chunk_rest.call(null,seq__25345_25360__$1);
var G__25363 = c__19279__auto___25361;
var G__25364 = cljs.core.count.call(null,c__19279__auto___25361);
var G__25365 = (0);
seq__25345_25349 = G__25362;
chunk__25346_25350 = G__25363;
count__25347_25351 = G__25364;
i__25348_25352 = G__25365;
continue;
} else {
var k_25366 = cljs.core.first.call(null,seq__25345_25360__$1);
var v_25367 = (b[k_25366]);
(a[k_25366] = v_25367);

var G__25368 = cljs.core.next.call(null,seq__25345_25360__$1);
var G__25369 = null;
var G__25370 = (0);
var G__25371 = (0);
seq__25345_25349 = G__25368;
chunk__25346_25350 = G__25369;
count__25347_25351 = G__25370;
i__25348_25352 = G__25371;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/VectorBuilder");
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
var args25372 = [];
var len__19538__auto___25375 = arguments.length;
var i__19539__auto___25376 = (0);
while(true){
if((i__19539__auto___25376 < len__19538__auto___25375)){
args25372.push((arguments[i__19539__auto___25376]));

var G__25377 = (i__19539__auto___25376 + (1));
i__19539__auto___25376 = G__25377;
continue;
} else {
}
break;
}

var G__25374 = args25372.length;
switch (G__25374) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25372.length)].join('')));

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
var G__25379 = (i + (2));
var G__25380 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25379;
ret = G__25380;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/SymbolHandler");
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
var seq__25381_25385 = cljs.core.seq.call(null,v);
var chunk__25382_25386 = null;
var count__25383_25387 = (0);
var i__25384_25388 = (0);
while(true){
if((i__25384_25388 < count__25383_25387)){
var x_25389 = cljs.core._nth.call(null,chunk__25382_25386,i__25384_25388);
ret.push(x_25389);

var G__25390 = seq__25381_25385;
var G__25391 = chunk__25382_25386;
var G__25392 = count__25383_25387;
var G__25393 = (i__25384_25388 + (1));
seq__25381_25385 = G__25390;
chunk__25382_25386 = G__25391;
count__25383_25387 = G__25392;
i__25384_25388 = G__25393;
continue;
} else {
var temp__4657__auto___25394 = cljs.core.seq.call(null,seq__25381_25385);
if(temp__4657__auto___25394){
var seq__25381_25395__$1 = temp__4657__auto___25394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25381_25395__$1)){
var c__19279__auto___25396 = cljs.core.chunk_first.call(null,seq__25381_25395__$1);
var G__25397 = cljs.core.chunk_rest.call(null,seq__25381_25395__$1);
var G__25398 = c__19279__auto___25396;
var G__25399 = cljs.core.count.call(null,c__19279__auto___25396);
var G__25400 = (0);
seq__25381_25385 = G__25397;
chunk__25382_25386 = G__25398;
count__25383_25387 = G__25399;
i__25384_25388 = G__25400;
continue;
} else {
var x_25401 = cljs.core.first.call(null,seq__25381_25395__$1);
ret.push(x_25401);

var G__25402 = cljs.core.next.call(null,seq__25381_25395__$1);
var G__25403 = null;
var G__25404 = (0);
var G__25405 = (0);
seq__25381_25385 = G__25402;
chunk__25382_25386 = G__25403;
count__25383_25387 = G__25404;
i__25384_25388 = G__25405;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/MapHandler");
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
var seq__25406_25410 = cljs.core.seq.call(null,v);
var chunk__25407_25411 = null;
var count__25408_25412 = (0);
var i__25409_25413 = (0);
while(true){
if((i__25409_25413 < count__25408_25412)){
var x_25414 = cljs.core._nth.call(null,chunk__25407_25411,i__25409_25413);
ret.push(x_25414);

var G__25415 = seq__25406_25410;
var G__25416 = chunk__25407_25411;
var G__25417 = count__25408_25412;
var G__25418 = (i__25409_25413 + (1));
seq__25406_25410 = G__25415;
chunk__25407_25411 = G__25416;
count__25408_25412 = G__25417;
i__25409_25413 = G__25418;
continue;
} else {
var temp__4657__auto___25419 = cljs.core.seq.call(null,seq__25406_25410);
if(temp__4657__auto___25419){
var seq__25406_25420__$1 = temp__4657__auto___25419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25406_25420__$1)){
var c__19279__auto___25421 = cljs.core.chunk_first.call(null,seq__25406_25420__$1);
var G__25422 = cljs.core.chunk_rest.call(null,seq__25406_25420__$1);
var G__25423 = c__19279__auto___25421;
var G__25424 = cljs.core.count.call(null,c__19279__auto___25421);
var G__25425 = (0);
seq__25406_25410 = G__25422;
chunk__25407_25411 = G__25423;
count__25408_25412 = G__25424;
i__25409_25413 = G__25425;
continue;
} else {
var x_25426 = cljs.core.first.call(null,seq__25406_25420__$1);
ret.push(x_25426);

var G__25427 = cljs.core.next.call(null,seq__25406_25420__$1);
var G__25428 = null;
var G__25429 = (0);
var G__25430 = (0);
seq__25406_25410 = G__25427;
chunk__25407_25411 = G__25428;
count__25408_25412 = G__25429;
i__25409_25413 = G__25430;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/SetHandler");
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
var seq__25431_25435 = cljs.core.seq.call(null,v);
var chunk__25432_25436 = null;
var count__25433_25437 = (0);
var i__25434_25438 = (0);
while(true){
if((i__25434_25438 < count__25433_25437)){
var x_25439 = cljs.core._nth.call(null,chunk__25432_25436,i__25434_25438);
ret.push(x_25439);

var G__25440 = seq__25431_25435;
var G__25441 = chunk__25432_25436;
var G__25442 = count__25433_25437;
var G__25443 = (i__25434_25438 + (1));
seq__25431_25435 = G__25440;
chunk__25432_25436 = G__25441;
count__25433_25437 = G__25442;
i__25434_25438 = G__25443;
continue;
} else {
var temp__4657__auto___25444 = cljs.core.seq.call(null,seq__25431_25435);
if(temp__4657__auto___25444){
var seq__25431_25445__$1 = temp__4657__auto___25444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25431_25445__$1)){
var c__19279__auto___25446 = cljs.core.chunk_first.call(null,seq__25431_25445__$1);
var G__25447 = cljs.core.chunk_rest.call(null,seq__25431_25445__$1);
var G__25448 = c__19279__auto___25446;
var G__25449 = cljs.core.count.call(null,c__19279__auto___25446);
var G__25450 = (0);
seq__25431_25435 = G__25447;
chunk__25432_25436 = G__25448;
count__25433_25437 = G__25449;
i__25434_25438 = G__25450;
continue;
} else {
var x_25451 = cljs.core.first.call(null,seq__25431_25445__$1);
ret.push(x_25451);

var G__25452 = cljs.core.next.call(null,seq__25431_25445__$1);
var G__25453 = null;
var G__25454 = (0);
var G__25455 = (0);
seq__25431_25435 = G__25452;
chunk__25432_25436 = G__25453;
count__25433_25437 = G__25454;
i__25434_25438 = G__25455;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/UUIDHandler");
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
var args25456 = [];
var len__19538__auto___25467 = arguments.length;
var i__19539__auto___25468 = (0);
while(true){
if((i__19539__auto___25468 < len__19538__auto___25467)){
args25456.push((arguments[i__19539__auto___25468]));

var G__25469 = (i__19539__auto___25468 + (1));
i__19539__auto___25468 = G__25469;
continue;
} else {
}
break;
}

var G__25458 = args25456.length;
switch (G__25458) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25456.length)].join('')));

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
var G__25459 = obj;
G__25459.push(kfn.call(null,k),vfn.call(null,v));

return G__25459;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25460 = cljs.core.clone.call(null,handlers);
x25460.forEach = ((function (x25460,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25461 = cljs.core.seq.call(null,coll);
var chunk__25462 = null;
var count__25463 = (0);
var i__25464 = (0);
while(true){
if((i__25464 < count__25463)){
var vec__25465 = cljs.core._nth.call(null,chunk__25462,i__25464);
var k = cljs.core.nth.call(null,vec__25465,(0),null);
var v = cljs.core.nth.call(null,vec__25465,(1),null);
f.call(null,v,k);

var G__25471 = seq__25461;
var G__25472 = chunk__25462;
var G__25473 = count__25463;
var G__25474 = (i__25464 + (1));
seq__25461 = G__25471;
chunk__25462 = G__25472;
count__25463 = G__25473;
i__25464 = G__25474;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25461);
if(temp__4657__auto__){
var seq__25461__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25461__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__25461__$1);
var G__25475 = cljs.core.chunk_rest.call(null,seq__25461__$1);
var G__25476 = c__19279__auto__;
var G__25477 = cljs.core.count.call(null,c__19279__auto__);
var G__25478 = (0);
seq__25461 = G__25475;
chunk__25462 = G__25476;
count__25463 = G__25477;
i__25464 = G__25478;
continue;
} else {
var vec__25466 = cljs.core.first.call(null,seq__25461__$1);
var k = cljs.core.nth.call(null,vec__25466,(0),null);
var v = cljs.core.nth.call(null,vec__25466,(1),null);
f.call(null,v,k);

var G__25479 = cljs.core.next.call(null,seq__25461__$1);
var G__25480 = null;
var G__25481 = (0);
var G__25482 = (0);
seq__25461 = G__25479;
chunk__25462 = G__25480;
count__25463 = G__25481;
i__25464 = G__25482;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25460,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25460;
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
var args25483 = [];
var len__19538__auto___25489 = arguments.length;
var i__19539__auto___25490 = (0);
while(true){
if((i__19539__auto___25490 < len__19538__auto___25489)){
args25483.push((arguments[i__19539__auto___25490]));

var G__25491 = (i__19539__auto___25490 + (1));
i__19539__auto___25490 = G__25491;
continue;
} else {
}
break;
}

var G__25485 = args25483.length;
switch (G__25485) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25483.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit25486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit25486 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta25487){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta25487 = meta25487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit25486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25488,meta25487__$1){
var self__ = this;
var _25488__$1 = this;
return (new cognitect.transit.t_cognitect$transit25486(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta25487__$1));
});

cognitect.transit.t_cognitect$transit25486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25488){
var self__ = this;
var _25488__$1 = this;
return self__.meta25487;
});

cognitect.transit.t_cognitect$transit25486.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25486.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25486.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25486.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta25487","meta25487",-389016154,null)], null);
});

cognitect.transit.t_cognitect$transit25486.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit25486.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit25486";

cognitect.transit.t_cognitect$transit25486.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cognitect.transit/t_cognitect$transit25486");
});

cognitect.transit.__GT_t_cognitect$transit25486 = (function cognitect$transit$__GT_t_cognitect$transit25486(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25487){
return (new cognitect.transit.t_cognitect$transit25486(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25487));
});

}

return (new cognitect.transit.t_cognitect$transit25486(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__18468__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
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

//# sourceMappingURL=transit.js.map