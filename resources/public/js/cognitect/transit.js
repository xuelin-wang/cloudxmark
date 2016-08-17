// Compiled by ClojureScript 1.9.211 {}
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
var seq__33868_33872 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__33869_33873 = null;
var count__33870_33874 = (0);
var i__33871_33875 = (0);
while(true){
if((i__33871_33875 < count__33870_33874)){
var k_33876 = cljs.core._nth.call(null,chunk__33869_33873,i__33871_33875);
var v_33877 = (b[k_33876]);
(a[k_33876] = v_33877);

var G__33878 = seq__33868_33872;
var G__33879 = chunk__33869_33873;
var G__33880 = count__33870_33874;
var G__33881 = (i__33871_33875 + (1));
seq__33868_33872 = G__33878;
chunk__33869_33873 = G__33879;
count__33870_33874 = G__33880;
i__33871_33875 = G__33881;
continue;
} else {
var temp__6503__auto___33882 = cljs.core.seq.call(null,seq__33868_33872);
if(temp__6503__auto___33882){
var seq__33868_33883__$1 = temp__6503__auto___33882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33868_33883__$1)){
var c__22492__auto___33884 = cljs.core.chunk_first.call(null,seq__33868_33883__$1);
var G__33885 = cljs.core.chunk_rest.call(null,seq__33868_33883__$1);
var G__33886 = c__22492__auto___33884;
var G__33887 = cljs.core.count.call(null,c__22492__auto___33884);
var G__33888 = (0);
seq__33868_33872 = G__33885;
chunk__33869_33873 = G__33886;
count__33870_33874 = G__33887;
i__33871_33875 = G__33888;
continue;
} else {
var k_33889 = cljs.core.first.call(null,seq__33868_33883__$1);
var v_33890 = (b[k_33889]);
(a[k_33889] = v_33890);

var G__33891 = cljs.core.next.call(null,seq__33868_33883__$1);
var G__33892 = null;
var G__33893 = (0);
var G__33894 = (0);
seq__33868_33872 = G__33891;
chunk__33869_33873 = G__33892;
count__33870_33874 = G__33893;
i__33871_33875 = G__33894;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/VectorBuilder");
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
var args33895 = [];
var len__22772__auto___33898 = arguments.length;
var i__22773__auto___33899 = (0);
while(true){
if((i__22773__auto___33899 < len__22772__auto___33898)){
args33895.push((arguments[i__22773__auto___33899]));

var G__33900 = (i__22773__auto___33899 + (1));
i__22773__auto___33899 = G__33900;
continue;
} else {
}
break;
}

var G__33897 = args33895.length;
switch (G__33897) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33895.length)].join('')));

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
var G__33902 = (i + (2));
var G__33903 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__33902;
ret = G__33903;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/SymbolHandler");
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
var seq__33904_33908 = cljs.core.seq.call(null,v);
var chunk__33905_33909 = null;
var count__33906_33910 = (0);
var i__33907_33911 = (0);
while(true){
if((i__33907_33911 < count__33906_33910)){
var x_33912 = cljs.core._nth.call(null,chunk__33905_33909,i__33907_33911);
ret.push(x_33912);

var G__33913 = seq__33904_33908;
var G__33914 = chunk__33905_33909;
var G__33915 = count__33906_33910;
var G__33916 = (i__33907_33911 + (1));
seq__33904_33908 = G__33913;
chunk__33905_33909 = G__33914;
count__33906_33910 = G__33915;
i__33907_33911 = G__33916;
continue;
} else {
var temp__6503__auto___33917 = cljs.core.seq.call(null,seq__33904_33908);
if(temp__6503__auto___33917){
var seq__33904_33918__$1 = temp__6503__auto___33917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33904_33918__$1)){
var c__22492__auto___33919 = cljs.core.chunk_first.call(null,seq__33904_33918__$1);
var G__33920 = cljs.core.chunk_rest.call(null,seq__33904_33918__$1);
var G__33921 = c__22492__auto___33919;
var G__33922 = cljs.core.count.call(null,c__22492__auto___33919);
var G__33923 = (0);
seq__33904_33908 = G__33920;
chunk__33905_33909 = G__33921;
count__33906_33910 = G__33922;
i__33907_33911 = G__33923;
continue;
} else {
var x_33924 = cljs.core.first.call(null,seq__33904_33918__$1);
ret.push(x_33924);

var G__33925 = cljs.core.next.call(null,seq__33904_33918__$1);
var G__33926 = null;
var G__33927 = (0);
var G__33928 = (0);
seq__33904_33908 = G__33925;
chunk__33905_33909 = G__33926;
count__33906_33910 = G__33927;
i__33907_33911 = G__33928;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/MapHandler");
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
var seq__33929_33933 = cljs.core.seq.call(null,v);
var chunk__33930_33934 = null;
var count__33931_33935 = (0);
var i__33932_33936 = (0);
while(true){
if((i__33932_33936 < count__33931_33935)){
var x_33937 = cljs.core._nth.call(null,chunk__33930_33934,i__33932_33936);
ret.push(x_33937);

var G__33938 = seq__33929_33933;
var G__33939 = chunk__33930_33934;
var G__33940 = count__33931_33935;
var G__33941 = (i__33932_33936 + (1));
seq__33929_33933 = G__33938;
chunk__33930_33934 = G__33939;
count__33931_33935 = G__33940;
i__33932_33936 = G__33941;
continue;
} else {
var temp__6503__auto___33942 = cljs.core.seq.call(null,seq__33929_33933);
if(temp__6503__auto___33942){
var seq__33929_33943__$1 = temp__6503__auto___33942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33929_33943__$1)){
var c__22492__auto___33944 = cljs.core.chunk_first.call(null,seq__33929_33943__$1);
var G__33945 = cljs.core.chunk_rest.call(null,seq__33929_33943__$1);
var G__33946 = c__22492__auto___33944;
var G__33947 = cljs.core.count.call(null,c__22492__auto___33944);
var G__33948 = (0);
seq__33929_33933 = G__33945;
chunk__33930_33934 = G__33946;
count__33931_33935 = G__33947;
i__33932_33936 = G__33948;
continue;
} else {
var x_33949 = cljs.core.first.call(null,seq__33929_33943__$1);
ret.push(x_33949);

var G__33950 = cljs.core.next.call(null,seq__33929_33943__$1);
var G__33951 = null;
var G__33952 = (0);
var G__33953 = (0);
seq__33929_33933 = G__33950;
chunk__33930_33934 = G__33951;
count__33931_33935 = G__33952;
i__33932_33936 = G__33953;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/SetHandler");
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
var seq__33954_33958 = cljs.core.seq.call(null,v);
var chunk__33955_33959 = null;
var count__33956_33960 = (0);
var i__33957_33961 = (0);
while(true){
if((i__33957_33961 < count__33956_33960)){
var x_33962 = cljs.core._nth.call(null,chunk__33955_33959,i__33957_33961);
ret.push(x_33962);

var G__33963 = seq__33954_33958;
var G__33964 = chunk__33955_33959;
var G__33965 = count__33956_33960;
var G__33966 = (i__33957_33961 + (1));
seq__33954_33958 = G__33963;
chunk__33955_33959 = G__33964;
count__33956_33960 = G__33965;
i__33957_33961 = G__33966;
continue;
} else {
var temp__6503__auto___33967 = cljs.core.seq.call(null,seq__33954_33958);
if(temp__6503__auto___33967){
var seq__33954_33968__$1 = temp__6503__auto___33967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33954_33968__$1)){
var c__22492__auto___33969 = cljs.core.chunk_first.call(null,seq__33954_33968__$1);
var G__33970 = cljs.core.chunk_rest.call(null,seq__33954_33968__$1);
var G__33971 = c__22492__auto___33969;
var G__33972 = cljs.core.count.call(null,c__22492__auto___33969);
var G__33973 = (0);
seq__33954_33958 = G__33970;
chunk__33955_33959 = G__33971;
count__33956_33960 = G__33972;
i__33957_33961 = G__33973;
continue;
} else {
var x_33974 = cljs.core.first.call(null,seq__33954_33968__$1);
ret.push(x_33974);

var G__33975 = cljs.core.next.call(null,seq__33954_33968__$1);
var G__33976 = null;
var G__33977 = (0);
var G__33978 = (0);
seq__33954_33958 = G__33975;
chunk__33955_33959 = G__33976;
count__33956_33960 = G__33977;
i__33957_33961 = G__33978;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/UUIDHandler");
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
var args33979 = [];
var len__22772__auto___33994 = arguments.length;
var i__22773__auto___33995 = (0);
while(true){
if((i__22773__auto___33995 < len__22772__auto___33994)){
args33979.push((arguments[i__22773__auto___33995]));

var G__33996 = (i__22773__auto___33995 + (1));
i__22773__auto___33995 = G__33996;
continue;
} else {
}
break;
}

var G__33981 = args33979.length;
switch (G__33981) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33979.length)].join('')));

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
var G__33982 = obj;
G__33982.push(kfn.call(null,k),vfn.call(null,v));

return G__33982;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x33983 = cljs.core.clone.call(null,handlers);
x33983.forEach = ((function (x33983,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__33984 = cljs.core.seq.call(null,coll);
var chunk__33985 = null;
var count__33986 = (0);
var i__33987 = (0);
while(true){
if((i__33987 < count__33986)){
var vec__33988 = cljs.core._nth.call(null,chunk__33985,i__33987);
var k = cljs.core.nth.call(null,vec__33988,(0),null);
var v = cljs.core.nth.call(null,vec__33988,(1),null);
f.call(null,v,k);

var G__33998 = seq__33984;
var G__33999 = chunk__33985;
var G__34000 = count__33986;
var G__34001 = (i__33987 + (1));
seq__33984 = G__33998;
chunk__33985 = G__33999;
count__33986 = G__34000;
i__33987 = G__34001;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__33984);
if(temp__6503__auto__){
var seq__33984__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33984__$1)){
var c__22492__auto__ = cljs.core.chunk_first.call(null,seq__33984__$1);
var G__34002 = cljs.core.chunk_rest.call(null,seq__33984__$1);
var G__34003 = c__22492__auto__;
var G__34004 = cljs.core.count.call(null,c__22492__auto__);
var G__34005 = (0);
seq__33984 = G__34002;
chunk__33985 = G__34003;
count__33986 = G__34004;
i__33987 = G__34005;
continue;
} else {
var vec__33991 = cljs.core.first.call(null,seq__33984__$1);
var k = cljs.core.nth.call(null,vec__33991,(0),null);
var v = cljs.core.nth.call(null,vec__33991,(1),null);
f.call(null,v,k);

var G__34006 = cljs.core.next.call(null,seq__33984__$1);
var G__34007 = null;
var G__34008 = (0);
var G__34009 = (0);
seq__33984 = G__34006;
chunk__33985 = G__34007;
count__33986 = G__34008;
i__33987 = G__34009;
continue;
}
} else {
return null;
}
}
break;
}
});})(x33983,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x33983;
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
var args34010 = [];
var len__22772__auto___34016 = arguments.length;
var i__22773__auto___34017 = (0);
while(true){
if((i__22773__auto___34017 < len__22772__auto___34016)){
args34010.push((arguments[i__22773__auto___34017]));

var G__34018 = (i__22773__auto___34017 + (1));
i__22773__auto___34017 = G__34018;
continue;
} else {
}
break;
}

var G__34012 = args34010.length;
switch (G__34012) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34010.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit34013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit34013 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta34014){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta34014 = meta34014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit34013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34015,meta34014__$1){
var self__ = this;
var _34015__$1 = this;
return (new cognitect.transit.t_cognitect$transit34013(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta34014__$1));
});

cognitect.transit.t_cognitect$transit34013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34015){
var self__ = this;
var _34015__$1 = this;
return self__.meta34014;
});

cognitect.transit.t_cognitect$transit34013.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34013.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34013.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34013.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta34014","meta34014",-902102490,null)], null);
});

cognitect.transit.t_cognitect$transit34013.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit34013.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit34013";

cognitect.transit.t_cognitect$transit34013.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cognitect.transit/t_cognitect$transit34013");
});

cognitect.transit.__GT_t_cognitect$transit34013 = (function cognitect$transit$__GT_t_cognitect$transit34013(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34014){
return (new cognitect.transit.t_cognitect$transit34013(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34014));
});

}

return (new cognitect.transit.t_cognitect$transit34013(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__21589__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1471419417465