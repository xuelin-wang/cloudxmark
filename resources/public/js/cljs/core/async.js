// Compiled by ClojureScript 1.9.211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30088 = [];
var len__22772__auto___30094 = arguments.length;
var i__22773__auto___30095 = (0);
while(true){
if((i__22773__auto___30095 < len__22772__auto___30094)){
args30088.push((arguments[i__22773__auto___30095]));

var G__30096 = (i__22773__auto___30095 + (1));
i__22773__auto___30095 = G__30096;
continue;
} else {
}
break;
}

var G__30090 = args30088.length;
switch (G__30090) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30088.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30091 = (function (f,blockable,meta30092){
this.f = f;
this.blockable = blockable;
this.meta30092 = meta30092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30093,meta30092__$1){
var self__ = this;
var _30093__$1 = this;
return (new cljs.core.async.t_cljs$core$async30091(self__.f,self__.blockable,meta30092__$1));
});

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30093){
var self__ = this;
var _30093__$1 = this;
return self__.meta30092;
});

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30092","meta30092",-358273054,null)], null);
});

cljs.core.async.t_cljs$core$async30091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30091";

cljs.core.async.t_cljs$core$async30091.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async30091");
});

cljs.core.async.__GT_t_cljs$core$async30091 = (function cljs$core$async$__GT_t_cljs$core$async30091(f__$1,blockable__$1,meta30092){
return (new cljs.core.async.t_cljs$core$async30091(f__$1,blockable__$1,meta30092));
});

}

return (new cljs.core.async.t_cljs$core$async30091(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30100 = [];
var len__22772__auto___30103 = arguments.length;
var i__22773__auto___30104 = (0);
while(true){
if((i__22773__auto___30104 < len__22772__auto___30103)){
args30100.push((arguments[i__22773__auto___30104]));

var G__30105 = (i__22773__auto___30104 + (1));
i__22773__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var G__30102 = args30100.length;
switch (G__30102) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30100.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30107 = [];
var len__22772__auto___30110 = arguments.length;
var i__22773__auto___30111 = (0);
while(true){
if((i__22773__auto___30111 < len__22772__auto___30110)){
args30107.push((arguments[i__22773__auto___30111]));

var G__30112 = (i__22773__auto___30111 + (1));
i__22773__auto___30111 = G__30112;
continue;
} else {
}
break;
}

var G__30109 = args30107.length;
switch (G__30109) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30107.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30114 = [];
var len__22772__auto___30117 = arguments.length;
var i__22773__auto___30118 = (0);
while(true){
if((i__22773__auto___30118 < len__22772__auto___30117)){
args30114.push((arguments[i__22773__auto___30118]));

var G__30119 = (i__22773__auto___30118 + (1));
i__22773__auto___30118 = G__30119;
continue;
} else {
}
break;
}

var G__30116 = args30114.length;
switch (G__30116) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30114.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30121 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30121);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30121,ret){
return (function (){
return fn1.call(null,val_30121);
});})(val_30121,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30122 = [];
var len__22772__auto___30125 = arguments.length;
var i__22773__auto___30126 = (0);
while(true){
if((i__22773__auto___30126 < len__22772__auto___30125)){
args30122.push((arguments[i__22773__auto___30126]));

var G__30127 = (i__22773__auto___30126 + (1));
i__22773__auto___30126 = G__30127;
continue;
} else {
}
break;
}

var G__30124 = args30122.length;
switch (G__30124) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30122.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6501__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6501__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22602__auto___30129 = n;
var x_30130 = (0);
while(true){
if((x_30130 < n__22602__auto___30129)){
(a[x_30130] = (0));

var G__30131 = (x_30130 + (1));
x_30130 = G__30131;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30132 = (i + (1));
i = G__30132;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30136 = (function (alt_flag,flag,meta30137){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30137 = meta30137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30138,meta30137__$1){
var self__ = this;
var _30138__$1 = this;
return (new cljs.core.async.t_cljs$core$async30136(self__.alt_flag,self__.flag,meta30137__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30138){
var self__ = this;
var _30138__$1 = this;
return self__.meta30137;
});})(flag))
;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30136.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30137","meta30137",534204260,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30136";

cljs.core.async.t_cljs$core$async30136.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async30136");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30136 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30136(alt_flag__$1,flag__$1,meta30137){
return (new cljs.core.async.t_cljs$core$async30136(alt_flag__$1,flag__$1,meta30137));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30136(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30142 = (function (alt_handler,flag,cb,meta30143){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30143 = meta30143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30144,meta30143__$1){
var self__ = this;
var _30144__$1 = this;
return (new cljs.core.async.t_cljs$core$async30142(self__.alt_handler,self__.flag,self__.cb,meta30143__$1));
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30144){
var self__ = this;
var _30144__$1 = this;
return self__.meta30143;
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30143","meta30143",1793134969,null)], null);
});

cljs.core.async.t_cljs$core$async30142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30142";

cljs.core.async.t_cljs$core$async30142.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async30142");
});

cljs.core.async.__GT_t_cljs$core$async30142 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30142(alt_handler__$1,flag__$1,cb__$1,meta30143){
return (new cljs.core.async.t_cljs$core$async30142(alt_handler__$1,flag__$1,cb__$1,meta30143));
});

}

return (new cljs.core.async.t_cljs$core$async30142(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30145_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30145_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30146_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30146_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21589__auto__ = wport;
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30147 = (i + (1));
i = G__30147;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21589__auto__ = ret;
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__21577__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21577__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21577__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22779__auto__ = [];
var len__22772__auto___30153 = arguments.length;
var i__22773__auto___30154 = (0);
while(true){
if((i__22773__auto___30154 < len__22772__auto___30153)){
args__22779__auto__.push((arguments[i__22773__auto___30154]));

var G__30155 = (i__22773__auto___30154 + (1));
i__22773__auto___30154 = G__30155;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((1) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22780__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30150){
var map__30151 = p__30150;
var map__30151__$1 = ((((!((map__30151 == null)))?((((map__30151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30151):map__30151);
var opts = map__30151__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30148){
var G__30149 = cljs.core.first.call(null,seq30148);
var seq30148__$1 = cljs.core.next.call(null,seq30148);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30149,seq30148__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30156 = [];
var len__22772__auto___30206 = arguments.length;
var i__22773__auto___30207 = (0);
while(true){
if((i__22773__auto___30207 < len__22772__auto___30206)){
args30156.push((arguments[i__22773__auto___30207]));

var G__30208 = (i__22773__auto___30207 + (1));
i__22773__auto___30207 = G__30208;
continue;
} else {
}
break;
}

var G__30158 = args30156.length;
switch (G__30158) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30156.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30029__auto___30210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30210){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___30210){
return (function (state_30182){
var state_val_30183 = (state_30182[(1)]);
if((state_val_30183 === (7))){
var inst_30178 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30184_30211 = state_30182__$1;
(statearr_30184_30211[(2)] = inst_30178);

(statearr_30184_30211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (1))){
var state_30182__$1 = state_30182;
var statearr_30185_30212 = state_30182__$1;
(statearr_30185_30212[(2)] = null);

(statearr_30185_30212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (4))){
var inst_30161 = (state_30182[(7)]);
var inst_30161__$1 = (state_30182[(2)]);
var inst_30162 = (inst_30161__$1 == null);
var state_30182__$1 = (function (){var statearr_30186 = state_30182;
(statearr_30186[(7)] = inst_30161__$1);

return statearr_30186;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30187_30213 = state_30182__$1;
(statearr_30187_30213[(1)] = (5));

} else {
var statearr_30188_30214 = state_30182__$1;
(statearr_30188_30214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (13))){
var state_30182__$1 = state_30182;
var statearr_30189_30215 = state_30182__$1;
(statearr_30189_30215[(2)] = null);

(statearr_30189_30215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (6))){
var inst_30161 = (state_30182[(7)]);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30182__$1,(11),to,inst_30161);
} else {
if((state_val_30183 === (3))){
var inst_30180 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30182__$1,inst_30180);
} else {
if((state_val_30183 === (12))){
var state_30182__$1 = state_30182;
var statearr_30190_30216 = state_30182__$1;
(statearr_30190_30216[(2)] = null);

(statearr_30190_30216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (2))){
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30182__$1,(4),from);
} else {
if((state_val_30183 === (11))){
var inst_30171 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
if(cljs.core.truth_(inst_30171)){
var statearr_30191_30217 = state_30182__$1;
(statearr_30191_30217[(1)] = (12));

} else {
var statearr_30192_30218 = state_30182__$1;
(statearr_30192_30218[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (9))){
var state_30182__$1 = state_30182;
var statearr_30193_30219 = state_30182__$1;
(statearr_30193_30219[(2)] = null);

(statearr_30193_30219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (5))){
var state_30182__$1 = state_30182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30194_30220 = state_30182__$1;
(statearr_30194_30220[(1)] = (8));

} else {
var statearr_30195_30221 = state_30182__$1;
(statearr_30195_30221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (14))){
var inst_30176 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30196_30222 = state_30182__$1;
(statearr_30196_30222[(2)] = inst_30176);

(statearr_30196_30222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (10))){
var inst_30168 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30197_30223 = state_30182__$1;
(statearr_30197_30223[(2)] = inst_30168);

(statearr_30197_30223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (8))){
var inst_30165 = cljs.core.async.close_BANG_.call(null,to);
var state_30182__$1 = state_30182;
var statearr_30198_30224 = state_30182__$1;
(statearr_30198_30224[(2)] = inst_30165);

(statearr_30198_30224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___30210))
;
return ((function (switch__29915__auto__,c__30029__auto___30210){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_30202 = [null,null,null,null,null,null,null,null];
(statearr_30202[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_30202[(1)] = (1));

return statearr_30202;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_30182){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30203){if((e30203 instanceof Object)){
var ex__29919__auto__ = e30203;
var statearr_30204_30225 = state_30182;
(statearr_30204_30225[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30226 = state_30182;
state_30182 = G__30226;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_30182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_30182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___30210))
})();
var state__30031__auto__ = (function (){var statearr_30205 = f__30030__auto__.call(null);
(statearr_30205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30210);

return statearr_30205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30210))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30414){
var vec__30415 = p__30414;
var v = cljs.core.nth.call(null,vec__30415,(0),null);
var p = cljs.core.nth.call(null,vec__30415,(1),null);
var job = vec__30415;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30029__auto___30601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30601,res,vec__30415,v,p,job,jobs,results){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___30601,res,vec__30415,v,p,job,jobs,results){
return (function (state_30422){
var state_val_30423 = (state_30422[(1)]);
if((state_val_30423 === (1))){
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30422__$1,(2),res,v);
} else {
if((state_val_30423 === (2))){
var inst_30419 = (state_30422[(2)]);
var inst_30420 = cljs.core.async.close_BANG_.call(null,res);
var state_30422__$1 = (function (){var statearr_30424 = state_30422;
(statearr_30424[(7)] = inst_30419);

return statearr_30424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30422__$1,inst_30420);
} else {
return null;
}
}
});})(c__30029__auto___30601,res,vec__30415,v,p,job,jobs,results))
;
return ((function (switch__29915__auto__,c__30029__auto___30601,res,vec__30415,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0 = (function (){
var statearr_30428 = [null,null,null,null,null,null,null,null];
(statearr_30428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__);

(statearr_30428[(1)] = (1));

return statearr_30428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1 = (function (state_30422){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30429){if((e30429 instanceof Object)){
var ex__29919__auto__ = e30429;
var statearr_30430_30602 = state_30422;
(statearr_30430_30602[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30603 = state_30422;
state_30422 = G__30603;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = function(state_30422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1.call(this,state_30422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___30601,res,vec__30415,v,p,job,jobs,results))
})();
var state__30031__auto__ = (function (){var statearr_30431 = f__30030__auto__.call(null);
(statearr_30431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30601);

return statearr_30431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30601,res,vec__30415,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30432){
var vec__30433 = p__30432;
var v = cljs.core.nth.call(null,vec__30433,(0),null);
var p = cljs.core.nth.call(null,vec__30433,(1),null);
var job = vec__30433;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22602__auto___30604 = n;
var __30605 = (0);
while(true){
if((__30605 < n__22602__auto___30604)){
var G__30436_30606 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30436_30606) {
case "compute":
var c__30029__auto___30608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30605,c__30029__auto___30608,G__30436_30606,n__22602__auto___30604,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (__30605,c__30029__auto___30608,G__30436_30606,n__22602__auto___30604,jobs,results,process,async){
return (function (state_30449){
var state_val_30450 = (state_30449[(1)]);
if((state_val_30450 === (1))){
var state_30449__$1 = state_30449;
var statearr_30451_30609 = state_30449__$1;
(statearr_30451_30609[(2)] = null);

(statearr_30451_30609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (2))){
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30449__$1,(4),jobs);
} else {
if((state_val_30450 === (3))){
var inst_30447 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30449__$1,inst_30447);
} else {
if((state_val_30450 === (4))){
var inst_30439 = (state_30449[(2)]);
var inst_30440 = process.call(null,inst_30439);
var state_30449__$1 = state_30449;
if(cljs.core.truth_(inst_30440)){
var statearr_30452_30610 = state_30449__$1;
(statearr_30452_30610[(1)] = (5));

} else {
var statearr_30453_30611 = state_30449__$1;
(statearr_30453_30611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (5))){
var state_30449__$1 = state_30449;
var statearr_30454_30612 = state_30449__$1;
(statearr_30454_30612[(2)] = null);

(statearr_30454_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (6))){
var state_30449__$1 = state_30449;
var statearr_30455_30613 = state_30449__$1;
(statearr_30455_30613[(2)] = null);

(statearr_30455_30613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (7))){
var inst_30445 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30456_30614 = state_30449__$1;
(statearr_30456_30614[(2)] = inst_30445);

(statearr_30456_30614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30605,c__30029__auto___30608,G__30436_30606,n__22602__auto___30604,jobs,results,process,async))
;
return ((function (__30605,switch__29915__auto__,c__30029__auto___30608,G__30436_30606,n__22602__auto___30604,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0 = (function (){
var statearr_30460 = [null,null,null,null,null,null,null];
(statearr_30460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__);

(statearr_30460[(1)] = (1));

return statearr_30460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1 = (function (state_30449){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30461){if((e30461 instanceof Object)){
var ex__29919__auto__ = e30461;
var statearr_30462_30615 = state_30449;
(statearr_30462_30615[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30616 = state_30449;
state_30449 = G__30616;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = function(state_30449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1.call(this,state_30449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__;
})()
;})(__30605,switch__29915__auto__,c__30029__auto___30608,G__30436_30606,n__22602__auto___30604,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30463 = f__30030__auto__.call(null);
(statearr_30463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30608);

return statearr_30463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(__30605,c__30029__auto___30608,G__30436_30606,n__22602__auto___30604,jobs,results,process,async))
);


break;
case "async":
var c__30029__auto___30617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30605,c__30029__auto___30617,G__30436_30606,n__22602__auto___30604,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (__30605,c__30029__auto___30617,G__30436_30606,n__22602__auto___30604,jobs,results,process,async){
return (function (state_30476){
var state_val_30477 = (state_30476[(1)]);
if((state_val_30477 === (1))){
var state_30476__$1 = state_30476;
var statearr_30478_30618 = state_30476__$1;
(statearr_30478_30618[(2)] = null);

(statearr_30478_30618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (2))){
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30476__$1,(4),jobs);
} else {
if((state_val_30477 === (3))){
var inst_30474 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30476__$1,inst_30474);
} else {
if((state_val_30477 === (4))){
var inst_30466 = (state_30476[(2)]);
var inst_30467 = async.call(null,inst_30466);
var state_30476__$1 = state_30476;
if(cljs.core.truth_(inst_30467)){
var statearr_30479_30619 = state_30476__$1;
(statearr_30479_30619[(1)] = (5));

} else {
var statearr_30480_30620 = state_30476__$1;
(statearr_30480_30620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (5))){
var state_30476__$1 = state_30476;
var statearr_30481_30621 = state_30476__$1;
(statearr_30481_30621[(2)] = null);

(statearr_30481_30621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (6))){
var state_30476__$1 = state_30476;
var statearr_30482_30622 = state_30476__$1;
(statearr_30482_30622[(2)] = null);

(statearr_30482_30622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (7))){
var inst_30472 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30483_30623 = state_30476__$1;
(statearr_30483_30623[(2)] = inst_30472);

(statearr_30483_30623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30605,c__30029__auto___30617,G__30436_30606,n__22602__auto___30604,jobs,results,process,async))
;
return ((function (__30605,switch__29915__auto__,c__30029__auto___30617,G__30436_30606,n__22602__auto___30604,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0 = (function (){
var statearr_30487 = [null,null,null,null,null,null,null];
(statearr_30487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__);

(statearr_30487[(1)] = (1));

return statearr_30487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1 = (function (state_30476){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30488){if((e30488 instanceof Object)){
var ex__29919__auto__ = e30488;
var statearr_30489_30624 = state_30476;
(statearr_30489_30624[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30625 = state_30476;
state_30476 = G__30625;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = function(state_30476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1.call(this,state_30476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__;
})()
;})(__30605,switch__29915__auto__,c__30029__auto___30617,G__30436_30606,n__22602__auto___30604,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30490 = f__30030__auto__.call(null);
(statearr_30490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30617);

return statearr_30490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(__30605,c__30029__auto___30617,G__30436_30606,n__22602__auto___30604,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30626 = (__30605 + (1));
__30605 = G__30626;
continue;
} else {
}
break;
}

var c__30029__auto___30627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30627,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___30627,jobs,results,process,async){
return (function (state_30512){
var state_val_30513 = (state_30512[(1)]);
if((state_val_30513 === (1))){
var state_30512__$1 = state_30512;
var statearr_30514_30628 = state_30512__$1;
(statearr_30514_30628[(2)] = null);

(statearr_30514_30628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30513 === (2))){
var state_30512__$1 = state_30512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30512__$1,(4),from);
} else {
if((state_val_30513 === (3))){
var inst_30510 = (state_30512[(2)]);
var state_30512__$1 = state_30512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30512__$1,inst_30510);
} else {
if((state_val_30513 === (4))){
var inst_30493 = (state_30512[(7)]);
var inst_30493__$1 = (state_30512[(2)]);
var inst_30494 = (inst_30493__$1 == null);
var state_30512__$1 = (function (){var statearr_30515 = state_30512;
(statearr_30515[(7)] = inst_30493__$1);

return statearr_30515;
})();
if(cljs.core.truth_(inst_30494)){
var statearr_30516_30629 = state_30512__$1;
(statearr_30516_30629[(1)] = (5));

} else {
var statearr_30517_30630 = state_30512__$1;
(statearr_30517_30630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30513 === (5))){
var inst_30496 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30512__$1 = state_30512;
var statearr_30518_30631 = state_30512__$1;
(statearr_30518_30631[(2)] = inst_30496);

(statearr_30518_30631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30513 === (6))){
var inst_30498 = (state_30512[(8)]);
var inst_30493 = (state_30512[(7)]);
var inst_30498__$1 = cljs.core.async.chan.call(null,(1));
var inst_30499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30500 = [inst_30493,inst_30498__$1];
var inst_30501 = (new cljs.core.PersistentVector(null,2,(5),inst_30499,inst_30500,null));
var state_30512__$1 = (function (){var statearr_30519 = state_30512;
(statearr_30519[(8)] = inst_30498__$1);

return statearr_30519;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30512__$1,(8),jobs,inst_30501);
} else {
if((state_val_30513 === (7))){
var inst_30508 = (state_30512[(2)]);
var state_30512__$1 = state_30512;
var statearr_30520_30632 = state_30512__$1;
(statearr_30520_30632[(2)] = inst_30508);

(statearr_30520_30632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30513 === (8))){
var inst_30498 = (state_30512[(8)]);
var inst_30503 = (state_30512[(2)]);
var state_30512__$1 = (function (){var statearr_30521 = state_30512;
(statearr_30521[(9)] = inst_30503);

return statearr_30521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30512__$1,(9),results,inst_30498);
} else {
if((state_val_30513 === (9))){
var inst_30505 = (state_30512[(2)]);
var state_30512__$1 = (function (){var statearr_30522 = state_30512;
(statearr_30522[(10)] = inst_30505);

return statearr_30522;
})();
var statearr_30523_30633 = state_30512__$1;
(statearr_30523_30633[(2)] = null);

(statearr_30523_30633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___30627,jobs,results,process,async))
;
return ((function (switch__29915__auto__,c__30029__auto___30627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0 = (function (){
var statearr_30527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__);

(statearr_30527[(1)] = (1));

return statearr_30527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1 = (function (state_30512){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30528){if((e30528 instanceof Object)){
var ex__29919__auto__ = e30528;
var statearr_30529_30634 = state_30512;
(statearr_30529_30634[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30635 = state_30512;
state_30512 = G__30635;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = function(state_30512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1.call(this,state_30512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___30627,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30530 = f__30030__auto__.call(null);
(statearr_30530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30627);

return statearr_30530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30627,jobs,results,process,async))
);


var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__,jobs,results,process,async){
return (function (state_30568){
var state_val_30569 = (state_30568[(1)]);
if((state_val_30569 === (7))){
var inst_30564 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30570_30636 = state_30568__$1;
(statearr_30570_30636[(2)] = inst_30564);

(statearr_30570_30636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (20))){
var state_30568__$1 = state_30568;
var statearr_30571_30637 = state_30568__$1;
(statearr_30571_30637[(2)] = null);

(statearr_30571_30637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (1))){
var state_30568__$1 = state_30568;
var statearr_30572_30638 = state_30568__$1;
(statearr_30572_30638[(2)] = null);

(statearr_30572_30638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (4))){
var inst_30533 = (state_30568[(7)]);
var inst_30533__$1 = (state_30568[(2)]);
var inst_30534 = (inst_30533__$1 == null);
var state_30568__$1 = (function (){var statearr_30573 = state_30568;
(statearr_30573[(7)] = inst_30533__$1);

return statearr_30573;
})();
if(cljs.core.truth_(inst_30534)){
var statearr_30574_30639 = state_30568__$1;
(statearr_30574_30639[(1)] = (5));

} else {
var statearr_30575_30640 = state_30568__$1;
(statearr_30575_30640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (15))){
var inst_30546 = (state_30568[(8)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30568__$1,(18),to,inst_30546);
} else {
if((state_val_30569 === (21))){
var inst_30559 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30576_30641 = state_30568__$1;
(statearr_30576_30641[(2)] = inst_30559);

(statearr_30576_30641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (13))){
var inst_30561 = (state_30568[(2)]);
var state_30568__$1 = (function (){var statearr_30577 = state_30568;
(statearr_30577[(9)] = inst_30561);

return statearr_30577;
})();
var statearr_30578_30642 = state_30568__$1;
(statearr_30578_30642[(2)] = null);

(statearr_30578_30642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (6))){
var inst_30533 = (state_30568[(7)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(11),inst_30533);
} else {
if((state_val_30569 === (17))){
var inst_30554 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30554)){
var statearr_30579_30643 = state_30568__$1;
(statearr_30579_30643[(1)] = (19));

} else {
var statearr_30580_30644 = state_30568__$1;
(statearr_30580_30644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (3))){
var inst_30566 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30568__$1,inst_30566);
} else {
if((state_val_30569 === (12))){
var inst_30543 = (state_30568[(10)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(14),inst_30543);
} else {
if((state_val_30569 === (2))){
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(4),results);
} else {
if((state_val_30569 === (19))){
var state_30568__$1 = state_30568;
var statearr_30581_30645 = state_30568__$1;
(statearr_30581_30645[(2)] = null);

(statearr_30581_30645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (11))){
var inst_30543 = (state_30568[(2)]);
var state_30568__$1 = (function (){var statearr_30582 = state_30568;
(statearr_30582[(10)] = inst_30543);

return statearr_30582;
})();
var statearr_30583_30646 = state_30568__$1;
(statearr_30583_30646[(2)] = null);

(statearr_30583_30646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (9))){
var state_30568__$1 = state_30568;
var statearr_30584_30647 = state_30568__$1;
(statearr_30584_30647[(2)] = null);

(statearr_30584_30647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (5))){
var state_30568__$1 = state_30568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30585_30648 = state_30568__$1;
(statearr_30585_30648[(1)] = (8));

} else {
var statearr_30586_30649 = state_30568__$1;
(statearr_30586_30649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (14))){
var inst_30546 = (state_30568[(8)]);
var inst_30548 = (state_30568[(11)]);
var inst_30546__$1 = (state_30568[(2)]);
var inst_30547 = (inst_30546__$1 == null);
var inst_30548__$1 = cljs.core.not.call(null,inst_30547);
var state_30568__$1 = (function (){var statearr_30587 = state_30568;
(statearr_30587[(8)] = inst_30546__$1);

(statearr_30587[(11)] = inst_30548__$1);

return statearr_30587;
})();
if(inst_30548__$1){
var statearr_30588_30650 = state_30568__$1;
(statearr_30588_30650[(1)] = (15));

} else {
var statearr_30589_30651 = state_30568__$1;
(statearr_30589_30651[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (16))){
var inst_30548 = (state_30568[(11)]);
var state_30568__$1 = state_30568;
var statearr_30590_30652 = state_30568__$1;
(statearr_30590_30652[(2)] = inst_30548);

(statearr_30590_30652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (10))){
var inst_30540 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30591_30653 = state_30568__$1;
(statearr_30591_30653[(2)] = inst_30540);

(statearr_30591_30653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (18))){
var inst_30551 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30592_30654 = state_30568__$1;
(statearr_30592_30654[(2)] = inst_30551);

(statearr_30592_30654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (8))){
var inst_30537 = cljs.core.async.close_BANG_.call(null,to);
var state_30568__$1 = state_30568;
var statearr_30593_30655 = state_30568__$1;
(statearr_30593_30655[(2)] = inst_30537);

(statearr_30593_30655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto__,jobs,results,process,async))
;
return ((function (switch__29915__auto__,c__30029__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0 = (function (){
var statearr_30597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__);

(statearr_30597[(1)] = (1));

return statearr_30597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1 = (function (state_30568){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30598){if((e30598 instanceof Object)){
var ex__29919__auto__ = e30598;
var statearr_30599_30656 = state_30568;
(statearr_30599_30656[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30657 = state_30568;
state_30568 = G__30657;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__ = function(state_30568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1.call(this,state_30568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29916__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30600 = f__30030__auto__.call(null);
(statearr_30600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_30600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,jobs,results,process,async))
);

return c__30029__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30658 = [];
var len__22772__auto___30661 = arguments.length;
var i__22773__auto___30662 = (0);
while(true){
if((i__22773__auto___30662 < len__22772__auto___30661)){
args30658.push((arguments[i__22773__auto___30662]));

var G__30663 = (i__22773__auto___30662 + (1));
i__22773__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var G__30660 = args30658.length;
switch (G__30660) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30658.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30665 = [];
var len__22772__auto___30668 = arguments.length;
var i__22773__auto___30669 = (0);
while(true){
if((i__22773__auto___30669 < len__22772__auto___30668)){
args30665.push((arguments[i__22773__auto___30669]));

var G__30670 = (i__22773__auto___30669 + (1));
i__22773__auto___30669 = G__30670;
continue;
} else {
}
break;
}

var G__30667 = args30665.length;
switch (G__30667) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30665.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30672 = [];
var len__22772__auto___30725 = arguments.length;
var i__22773__auto___30726 = (0);
while(true){
if((i__22773__auto___30726 < len__22772__auto___30725)){
args30672.push((arguments[i__22773__auto___30726]));

var G__30727 = (i__22773__auto___30726 + (1));
i__22773__auto___30726 = G__30727;
continue;
} else {
}
break;
}

var G__30674 = args30672.length;
switch (G__30674) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30672.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30029__auto___30729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30729,tc,fc){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___30729,tc,fc){
return (function (state_30700){
var state_val_30701 = (state_30700[(1)]);
if((state_val_30701 === (7))){
var inst_30696 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30702_30730 = state_30700__$1;
(statearr_30702_30730[(2)] = inst_30696);

(statearr_30702_30730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (1))){
var state_30700__$1 = state_30700;
var statearr_30703_30731 = state_30700__$1;
(statearr_30703_30731[(2)] = null);

(statearr_30703_30731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (4))){
var inst_30677 = (state_30700[(7)]);
var inst_30677__$1 = (state_30700[(2)]);
var inst_30678 = (inst_30677__$1 == null);
var state_30700__$1 = (function (){var statearr_30704 = state_30700;
(statearr_30704[(7)] = inst_30677__$1);

return statearr_30704;
})();
if(cljs.core.truth_(inst_30678)){
var statearr_30705_30732 = state_30700__$1;
(statearr_30705_30732[(1)] = (5));

} else {
var statearr_30706_30733 = state_30700__$1;
(statearr_30706_30733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (13))){
var state_30700__$1 = state_30700;
var statearr_30707_30734 = state_30700__$1;
(statearr_30707_30734[(2)] = null);

(statearr_30707_30734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (6))){
var inst_30677 = (state_30700[(7)]);
var inst_30683 = p.call(null,inst_30677);
var state_30700__$1 = state_30700;
if(cljs.core.truth_(inst_30683)){
var statearr_30708_30735 = state_30700__$1;
(statearr_30708_30735[(1)] = (9));

} else {
var statearr_30709_30736 = state_30700__$1;
(statearr_30709_30736[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (3))){
var inst_30698 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30700__$1,inst_30698);
} else {
if((state_val_30701 === (12))){
var state_30700__$1 = state_30700;
var statearr_30710_30737 = state_30700__$1;
(statearr_30710_30737[(2)] = null);

(statearr_30710_30737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (2))){
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30700__$1,(4),ch);
} else {
if((state_val_30701 === (11))){
var inst_30677 = (state_30700[(7)]);
var inst_30687 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30700__$1,(8),inst_30687,inst_30677);
} else {
if((state_val_30701 === (9))){
var state_30700__$1 = state_30700;
var statearr_30711_30738 = state_30700__$1;
(statearr_30711_30738[(2)] = tc);

(statearr_30711_30738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (5))){
var inst_30680 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30681 = cljs.core.async.close_BANG_.call(null,fc);
var state_30700__$1 = (function (){var statearr_30712 = state_30700;
(statearr_30712[(8)] = inst_30680);

return statearr_30712;
})();
var statearr_30713_30739 = state_30700__$1;
(statearr_30713_30739[(2)] = inst_30681);

(statearr_30713_30739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (14))){
var inst_30694 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30714_30740 = state_30700__$1;
(statearr_30714_30740[(2)] = inst_30694);

(statearr_30714_30740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (10))){
var state_30700__$1 = state_30700;
var statearr_30715_30741 = state_30700__$1;
(statearr_30715_30741[(2)] = fc);

(statearr_30715_30741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (8))){
var inst_30689 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
if(cljs.core.truth_(inst_30689)){
var statearr_30716_30742 = state_30700__$1;
(statearr_30716_30742[(1)] = (12));

} else {
var statearr_30717_30743 = state_30700__$1;
(statearr_30717_30743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___30729,tc,fc))
;
return ((function (switch__29915__auto__,c__30029__auto___30729,tc,fc){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_30721 = [null,null,null,null,null,null,null,null,null];
(statearr_30721[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_30721[(1)] = (1));

return statearr_30721;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_30700){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30722){if((e30722 instanceof Object)){
var ex__29919__auto__ = e30722;
var statearr_30723_30744 = state_30700;
(statearr_30723_30744[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30745 = state_30700;
state_30700 = G__30745;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_30700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_30700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___30729,tc,fc))
})();
var state__30031__auto__ = (function (){var statearr_30724 = f__30030__auto__.call(null);
(statearr_30724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30729);

return statearr_30724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30729,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__){
return (function (state_30809){
var state_val_30810 = (state_30809[(1)]);
if((state_val_30810 === (7))){
var inst_30805 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30811_30832 = state_30809__$1;
(statearr_30811_30832[(2)] = inst_30805);

(statearr_30811_30832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (1))){
var inst_30789 = init;
var state_30809__$1 = (function (){var statearr_30812 = state_30809;
(statearr_30812[(7)] = inst_30789);

return statearr_30812;
})();
var statearr_30813_30833 = state_30809__$1;
(statearr_30813_30833[(2)] = null);

(statearr_30813_30833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (4))){
var inst_30792 = (state_30809[(8)]);
var inst_30792__$1 = (state_30809[(2)]);
var inst_30793 = (inst_30792__$1 == null);
var state_30809__$1 = (function (){var statearr_30814 = state_30809;
(statearr_30814[(8)] = inst_30792__$1);

return statearr_30814;
})();
if(cljs.core.truth_(inst_30793)){
var statearr_30815_30834 = state_30809__$1;
(statearr_30815_30834[(1)] = (5));

} else {
var statearr_30816_30835 = state_30809__$1;
(statearr_30816_30835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (6))){
var inst_30789 = (state_30809[(7)]);
var inst_30796 = (state_30809[(9)]);
var inst_30792 = (state_30809[(8)]);
var inst_30796__$1 = f.call(null,inst_30789,inst_30792);
var inst_30797 = cljs.core.reduced_QMARK_.call(null,inst_30796__$1);
var state_30809__$1 = (function (){var statearr_30817 = state_30809;
(statearr_30817[(9)] = inst_30796__$1);

return statearr_30817;
})();
if(inst_30797){
var statearr_30818_30836 = state_30809__$1;
(statearr_30818_30836[(1)] = (8));

} else {
var statearr_30819_30837 = state_30809__$1;
(statearr_30819_30837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (3))){
var inst_30807 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30809__$1,inst_30807);
} else {
if((state_val_30810 === (2))){
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30809__$1,(4),ch);
} else {
if((state_val_30810 === (9))){
var inst_30796 = (state_30809[(9)]);
var inst_30789 = inst_30796;
var state_30809__$1 = (function (){var statearr_30820 = state_30809;
(statearr_30820[(7)] = inst_30789);

return statearr_30820;
})();
var statearr_30821_30838 = state_30809__$1;
(statearr_30821_30838[(2)] = null);

(statearr_30821_30838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (5))){
var inst_30789 = (state_30809[(7)]);
var state_30809__$1 = state_30809;
var statearr_30822_30839 = state_30809__$1;
(statearr_30822_30839[(2)] = inst_30789);

(statearr_30822_30839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (10))){
var inst_30803 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30823_30840 = state_30809__$1;
(statearr_30823_30840[(2)] = inst_30803);

(statearr_30823_30840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (8))){
var inst_30796 = (state_30809[(9)]);
var inst_30799 = cljs.core.deref.call(null,inst_30796);
var state_30809__$1 = state_30809;
var statearr_30824_30841 = state_30809__$1;
(statearr_30824_30841[(2)] = inst_30799);

(statearr_30824_30841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto__))
;
return ((function (switch__29915__auto__,c__30029__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29916__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29916__auto____0 = (function (){
var statearr_30828 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30828[(0)] = cljs$core$async$reduce_$_state_machine__29916__auto__);

(statearr_30828[(1)] = (1));

return statearr_30828;
});
var cljs$core$async$reduce_$_state_machine__29916__auto____1 = (function (state_30809){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30829){if((e30829 instanceof Object)){
var ex__29919__auto__ = e30829;
var statearr_30830_30842 = state_30809;
(statearr_30830_30842[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30843 = state_30809;
state_30809 = G__30843;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29916__auto__ = function(state_30809){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29916__auto____1.call(this,state_30809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29916__auto____0;
cljs$core$async$reduce_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29916__auto____1;
return cljs$core$async$reduce_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_30831 = f__30030__auto__.call(null);
(statearr_30831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_30831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30844 = [];
var len__22772__auto___30896 = arguments.length;
var i__22773__auto___30897 = (0);
while(true){
if((i__22773__auto___30897 < len__22772__auto___30896)){
args30844.push((arguments[i__22773__auto___30897]));

var G__30898 = (i__22773__auto___30897 + (1));
i__22773__auto___30897 = G__30898;
continue;
} else {
}
break;
}

var G__30846 = args30844.length;
switch (G__30846) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30844.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__){
return (function (state_30871){
var state_val_30872 = (state_30871[(1)]);
if((state_val_30872 === (7))){
var inst_30853 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30873_30900 = state_30871__$1;
(statearr_30873_30900[(2)] = inst_30853);

(statearr_30873_30900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (1))){
var inst_30847 = cljs.core.seq.call(null,coll);
var inst_30848 = inst_30847;
var state_30871__$1 = (function (){var statearr_30874 = state_30871;
(statearr_30874[(7)] = inst_30848);

return statearr_30874;
})();
var statearr_30875_30901 = state_30871__$1;
(statearr_30875_30901[(2)] = null);

(statearr_30875_30901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (4))){
var inst_30848 = (state_30871[(7)]);
var inst_30851 = cljs.core.first.call(null,inst_30848);
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30871__$1,(7),ch,inst_30851);
} else {
if((state_val_30872 === (13))){
var inst_30865 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30876_30902 = state_30871__$1;
(statearr_30876_30902[(2)] = inst_30865);

(statearr_30876_30902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (6))){
var inst_30856 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
if(cljs.core.truth_(inst_30856)){
var statearr_30877_30903 = state_30871__$1;
(statearr_30877_30903[(1)] = (8));

} else {
var statearr_30878_30904 = state_30871__$1;
(statearr_30878_30904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (3))){
var inst_30869 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30871__$1,inst_30869);
} else {
if((state_val_30872 === (12))){
var state_30871__$1 = state_30871;
var statearr_30879_30905 = state_30871__$1;
(statearr_30879_30905[(2)] = null);

(statearr_30879_30905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (2))){
var inst_30848 = (state_30871[(7)]);
var state_30871__$1 = state_30871;
if(cljs.core.truth_(inst_30848)){
var statearr_30880_30906 = state_30871__$1;
(statearr_30880_30906[(1)] = (4));

} else {
var statearr_30881_30907 = state_30871__$1;
(statearr_30881_30907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (11))){
var inst_30862 = cljs.core.async.close_BANG_.call(null,ch);
var state_30871__$1 = state_30871;
var statearr_30882_30908 = state_30871__$1;
(statearr_30882_30908[(2)] = inst_30862);

(statearr_30882_30908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (9))){
var state_30871__$1 = state_30871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30883_30909 = state_30871__$1;
(statearr_30883_30909[(1)] = (11));

} else {
var statearr_30884_30910 = state_30871__$1;
(statearr_30884_30910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (5))){
var inst_30848 = (state_30871[(7)]);
var state_30871__$1 = state_30871;
var statearr_30885_30911 = state_30871__$1;
(statearr_30885_30911[(2)] = inst_30848);

(statearr_30885_30911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (10))){
var inst_30867 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30886_30912 = state_30871__$1;
(statearr_30886_30912[(2)] = inst_30867);

(statearr_30886_30912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (8))){
var inst_30848 = (state_30871[(7)]);
var inst_30858 = cljs.core.next.call(null,inst_30848);
var inst_30848__$1 = inst_30858;
var state_30871__$1 = (function (){var statearr_30887 = state_30871;
(statearr_30887[(7)] = inst_30848__$1);

return statearr_30887;
})();
var statearr_30888_30913 = state_30871__$1;
(statearr_30888_30913[(2)] = null);

(statearr_30888_30913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto__))
;
return ((function (switch__29915__auto__,c__30029__auto__){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_30892 = [null,null,null,null,null,null,null,null];
(statearr_30892[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_30892[(1)] = (1));

return statearr_30892;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_30871){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_30871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e30893){if((e30893 instanceof Object)){
var ex__29919__auto__ = e30893;
var statearr_30894_30914 = state_30871;
(statearr_30894_30914[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30915 = state_30871;
state_30871 = G__30915;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_30871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_30871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_30895 = f__30030__auto__.call(null);
(statearr_30895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_30895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22302__auto__ = (((_ == null))?null:_);
var m__22303__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,_);
} else {
var m__22303__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22303__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m,ch);
} else {
var m__22303__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m);
} else {
var m__22303__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31141 = (function (mult,ch,cs,meta31142){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31142 = meta31142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31143,meta31142__$1){
var self__ = this;
var _31143__$1 = this;
return (new cljs.core.async.t_cljs$core$async31141(self__.mult,self__.ch,self__.cs,meta31142__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31143){
var self__ = this;
var _31143__$1 = this;
return self__.meta31142;
});})(cs))
;

cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31141.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31141.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31142","meta31142",-126430304,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31141";

cljs.core.async.t_cljs$core$async31141.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async31141");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31141 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31141(mult__$1,ch__$1,cs__$1,meta31142){
return (new cljs.core.async.t_cljs$core$async31141(mult__$1,ch__$1,cs__$1,meta31142));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31141(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30029__auto___31366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___31366,cs,m,dchan,dctr,done){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___31366,cs,m,dchan,dctr,done){
return (function (state_31278){
var state_val_31279 = (state_31278[(1)]);
if((state_val_31279 === (7))){
var inst_31274 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31280_31367 = state_31278__$1;
(statearr_31280_31367[(2)] = inst_31274);

(statearr_31280_31367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (20))){
var inst_31177 = (state_31278[(7)]);
var inst_31189 = cljs.core.first.call(null,inst_31177);
var inst_31190 = cljs.core.nth.call(null,inst_31189,(0),null);
var inst_31191 = cljs.core.nth.call(null,inst_31189,(1),null);
var state_31278__$1 = (function (){var statearr_31281 = state_31278;
(statearr_31281[(8)] = inst_31190);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31191)){
var statearr_31282_31368 = state_31278__$1;
(statearr_31282_31368[(1)] = (22));

} else {
var statearr_31283_31369 = state_31278__$1;
(statearr_31283_31369[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (27))){
var inst_31219 = (state_31278[(9)]);
var inst_31146 = (state_31278[(10)]);
var inst_31221 = (state_31278[(11)]);
var inst_31226 = (state_31278[(12)]);
var inst_31226__$1 = cljs.core._nth.call(null,inst_31219,inst_31221);
var inst_31227 = cljs.core.async.put_BANG_.call(null,inst_31226__$1,inst_31146,done);
var state_31278__$1 = (function (){var statearr_31284 = state_31278;
(statearr_31284[(12)] = inst_31226__$1);

return statearr_31284;
})();
if(cljs.core.truth_(inst_31227)){
var statearr_31285_31370 = state_31278__$1;
(statearr_31285_31370[(1)] = (30));

} else {
var statearr_31286_31371 = state_31278__$1;
(statearr_31286_31371[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (1))){
var state_31278__$1 = state_31278;
var statearr_31287_31372 = state_31278__$1;
(statearr_31287_31372[(2)] = null);

(statearr_31287_31372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (24))){
var inst_31177 = (state_31278[(7)]);
var inst_31196 = (state_31278[(2)]);
var inst_31197 = cljs.core.next.call(null,inst_31177);
var inst_31155 = inst_31197;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31278__$1 = (function (){var statearr_31288 = state_31278;
(statearr_31288[(13)] = inst_31157);

(statearr_31288[(14)] = inst_31158);

(statearr_31288[(15)] = inst_31155);

(statearr_31288[(16)] = inst_31156);

(statearr_31288[(17)] = inst_31196);

return statearr_31288;
})();
var statearr_31289_31373 = state_31278__$1;
(statearr_31289_31373[(2)] = null);

(statearr_31289_31373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (39))){
var state_31278__$1 = state_31278;
var statearr_31293_31374 = state_31278__$1;
(statearr_31293_31374[(2)] = null);

(statearr_31293_31374[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (4))){
var inst_31146 = (state_31278[(10)]);
var inst_31146__$1 = (state_31278[(2)]);
var inst_31147 = (inst_31146__$1 == null);
var state_31278__$1 = (function (){var statearr_31294 = state_31278;
(statearr_31294[(10)] = inst_31146__$1);

return statearr_31294;
})();
if(cljs.core.truth_(inst_31147)){
var statearr_31295_31375 = state_31278__$1;
(statearr_31295_31375[(1)] = (5));

} else {
var statearr_31296_31376 = state_31278__$1;
(statearr_31296_31376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (15))){
var inst_31157 = (state_31278[(13)]);
var inst_31158 = (state_31278[(14)]);
var inst_31155 = (state_31278[(15)]);
var inst_31156 = (state_31278[(16)]);
var inst_31173 = (state_31278[(2)]);
var inst_31174 = (inst_31158 + (1));
var tmp31290 = inst_31157;
var tmp31291 = inst_31155;
var tmp31292 = inst_31156;
var inst_31155__$1 = tmp31291;
var inst_31156__$1 = tmp31292;
var inst_31157__$1 = tmp31290;
var inst_31158__$1 = inst_31174;
var state_31278__$1 = (function (){var statearr_31297 = state_31278;
(statearr_31297[(13)] = inst_31157__$1);

(statearr_31297[(18)] = inst_31173);

(statearr_31297[(14)] = inst_31158__$1);

(statearr_31297[(15)] = inst_31155__$1);

(statearr_31297[(16)] = inst_31156__$1);

return statearr_31297;
})();
var statearr_31298_31377 = state_31278__$1;
(statearr_31298_31377[(2)] = null);

(statearr_31298_31377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (21))){
var inst_31200 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31302_31378 = state_31278__$1;
(statearr_31302_31378[(2)] = inst_31200);

(statearr_31302_31378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (31))){
var inst_31226 = (state_31278[(12)]);
var inst_31230 = done.call(null,null);
var inst_31231 = cljs.core.async.untap_STAR_.call(null,m,inst_31226);
var state_31278__$1 = (function (){var statearr_31303 = state_31278;
(statearr_31303[(19)] = inst_31230);

return statearr_31303;
})();
var statearr_31304_31379 = state_31278__$1;
(statearr_31304_31379[(2)] = inst_31231);

(statearr_31304_31379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (32))){
var inst_31220 = (state_31278[(20)]);
var inst_31219 = (state_31278[(9)]);
var inst_31218 = (state_31278[(21)]);
var inst_31221 = (state_31278[(11)]);
var inst_31233 = (state_31278[(2)]);
var inst_31234 = (inst_31221 + (1));
var tmp31299 = inst_31220;
var tmp31300 = inst_31219;
var tmp31301 = inst_31218;
var inst_31218__$1 = tmp31301;
var inst_31219__$1 = tmp31300;
var inst_31220__$1 = tmp31299;
var inst_31221__$1 = inst_31234;
var state_31278__$1 = (function (){var statearr_31305 = state_31278;
(statearr_31305[(20)] = inst_31220__$1);

(statearr_31305[(9)] = inst_31219__$1);

(statearr_31305[(21)] = inst_31218__$1);

(statearr_31305[(11)] = inst_31221__$1);

(statearr_31305[(22)] = inst_31233);

return statearr_31305;
})();
var statearr_31306_31380 = state_31278__$1;
(statearr_31306_31380[(2)] = null);

(statearr_31306_31380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (40))){
var inst_31246 = (state_31278[(23)]);
var inst_31250 = done.call(null,null);
var inst_31251 = cljs.core.async.untap_STAR_.call(null,m,inst_31246);
var state_31278__$1 = (function (){var statearr_31307 = state_31278;
(statearr_31307[(24)] = inst_31250);

return statearr_31307;
})();
var statearr_31308_31381 = state_31278__$1;
(statearr_31308_31381[(2)] = inst_31251);

(statearr_31308_31381[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (33))){
var inst_31237 = (state_31278[(25)]);
var inst_31239 = cljs.core.chunked_seq_QMARK_.call(null,inst_31237);
var state_31278__$1 = state_31278;
if(inst_31239){
var statearr_31309_31382 = state_31278__$1;
(statearr_31309_31382[(1)] = (36));

} else {
var statearr_31310_31383 = state_31278__$1;
(statearr_31310_31383[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (13))){
var inst_31167 = (state_31278[(26)]);
var inst_31170 = cljs.core.async.close_BANG_.call(null,inst_31167);
var state_31278__$1 = state_31278;
var statearr_31311_31384 = state_31278__$1;
(statearr_31311_31384[(2)] = inst_31170);

(statearr_31311_31384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (22))){
var inst_31190 = (state_31278[(8)]);
var inst_31193 = cljs.core.async.close_BANG_.call(null,inst_31190);
var state_31278__$1 = state_31278;
var statearr_31312_31385 = state_31278__$1;
(statearr_31312_31385[(2)] = inst_31193);

(statearr_31312_31385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (36))){
var inst_31237 = (state_31278[(25)]);
var inst_31241 = cljs.core.chunk_first.call(null,inst_31237);
var inst_31242 = cljs.core.chunk_rest.call(null,inst_31237);
var inst_31243 = cljs.core.count.call(null,inst_31241);
var inst_31218 = inst_31242;
var inst_31219 = inst_31241;
var inst_31220 = inst_31243;
var inst_31221 = (0);
var state_31278__$1 = (function (){var statearr_31313 = state_31278;
(statearr_31313[(20)] = inst_31220);

(statearr_31313[(9)] = inst_31219);

(statearr_31313[(21)] = inst_31218);

(statearr_31313[(11)] = inst_31221);

return statearr_31313;
})();
var statearr_31314_31386 = state_31278__$1;
(statearr_31314_31386[(2)] = null);

(statearr_31314_31386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (41))){
var inst_31237 = (state_31278[(25)]);
var inst_31253 = (state_31278[(2)]);
var inst_31254 = cljs.core.next.call(null,inst_31237);
var inst_31218 = inst_31254;
var inst_31219 = null;
var inst_31220 = (0);
var inst_31221 = (0);
var state_31278__$1 = (function (){var statearr_31315 = state_31278;
(statearr_31315[(20)] = inst_31220);

(statearr_31315[(9)] = inst_31219);

(statearr_31315[(21)] = inst_31218);

(statearr_31315[(11)] = inst_31221);

(statearr_31315[(27)] = inst_31253);

return statearr_31315;
})();
var statearr_31316_31387 = state_31278__$1;
(statearr_31316_31387[(2)] = null);

(statearr_31316_31387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (43))){
var state_31278__$1 = state_31278;
var statearr_31317_31388 = state_31278__$1;
(statearr_31317_31388[(2)] = null);

(statearr_31317_31388[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (29))){
var inst_31262 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31318_31389 = state_31278__$1;
(statearr_31318_31389[(2)] = inst_31262);

(statearr_31318_31389[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (44))){
var inst_31271 = (state_31278[(2)]);
var state_31278__$1 = (function (){var statearr_31319 = state_31278;
(statearr_31319[(28)] = inst_31271);

return statearr_31319;
})();
var statearr_31320_31390 = state_31278__$1;
(statearr_31320_31390[(2)] = null);

(statearr_31320_31390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (6))){
var inst_31210 = (state_31278[(29)]);
var inst_31209 = cljs.core.deref.call(null,cs);
var inst_31210__$1 = cljs.core.keys.call(null,inst_31209);
var inst_31211 = cljs.core.count.call(null,inst_31210__$1);
var inst_31212 = cljs.core.reset_BANG_.call(null,dctr,inst_31211);
var inst_31217 = cljs.core.seq.call(null,inst_31210__$1);
var inst_31218 = inst_31217;
var inst_31219 = null;
var inst_31220 = (0);
var inst_31221 = (0);
var state_31278__$1 = (function (){var statearr_31321 = state_31278;
(statearr_31321[(20)] = inst_31220);

(statearr_31321[(30)] = inst_31212);

(statearr_31321[(9)] = inst_31219);

(statearr_31321[(29)] = inst_31210__$1);

(statearr_31321[(21)] = inst_31218);

(statearr_31321[(11)] = inst_31221);

return statearr_31321;
})();
var statearr_31322_31391 = state_31278__$1;
(statearr_31322_31391[(2)] = null);

(statearr_31322_31391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (28))){
var inst_31218 = (state_31278[(21)]);
var inst_31237 = (state_31278[(25)]);
var inst_31237__$1 = cljs.core.seq.call(null,inst_31218);
var state_31278__$1 = (function (){var statearr_31323 = state_31278;
(statearr_31323[(25)] = inst_31237__$1);

return statearr_31323;
})();
if(inst_31237__$1){
var statearr_31324_31392 = state_31278__$1;
(statearr_31324_31392[(1)] = (33));

} else {
var statearr_31325_31393 = state_31278__$1;
(statearr_31325_31393[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (25))){
var inst_31220 = (state_31278[(20)]);
var inst_31221 = (state_31278[(11)]);
var inst_31223 = (inst_31221 < inst_31220);
var inst_31224 = inst_31223;
var state_31278__$1 = state_31278;
if(cljs.core.truth_(inst_31224)){
var statearr_31326_31394 = state_31278__$1;
(statearr_31326_31394[(1)] = (27));

} else {
var statearr_31327_31395 = state_31278__$1;
(statearr_31327_31395[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (34))){
var state_31278__$1 = state_31278;
var statearr_31328_31396 = state_31278__$1;
(statearr_31328_31396[(2)] = null);

(statearr_31328_31396[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (17))){
var state_31278__$1 = state_31278;
var statearr_31329_31397 = state_31278__$1;
(statearr_31329_31397[(2)] = null);

(statearr_31329_31397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (3))){
var inst_31276 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31278__$1,inst_31276);
} else {
if((state_val_31279 === (12))){
var inst_31205 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31330_31398 = state_31278__$1;
(statearr_31330_31398[(2)] = inst_31205);

(statearr_31330_31398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (2))){
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31278__$1,(4),ch);
} else {
if((state_val_31279 === (23))){
var state_31278__$1 = state_31278;
var statearr_31331_31399 = state_31278__$1;
(statearr_31331_31399[(2)] = null);

(statearr_31331_31399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (35))){
var inst_31260 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31332_31400 = state_31278__$1;
(statearr_31332_31400[(2)] = inst_31260);

(statearr_31332_31400[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (19))){
var inst_31177 = (state_31278[(7)]);
var inst_31181 = cljs.core.chunk_first.call(null,inst_31177);
var inst_31182 = cljs.core.chunk_rest.call(null,inst_31177);
var inst_31183 = cljs.core.count.call(null,inst_31181);
var inst_31155 = inst_31182;
var inst_31156 = inst_31181;
var inst_31157 = inst_31183;
var inst_31158 = (0);
var state_31278__$1 = (function (){var statearr_31333 = state_31278;
(statearr_31333[(13)] = inst_31157);

(statearr_31333[(14)] = inst_31158);

(statearr_31333[(15)] = inst_31155);

(statearr_31333[(16)] = inst_31156);

return statearr_31333;
})();
var statearr_31334_31401 = state_31278__$1;
(statearr_31334_31401[(2)] = null);

(statearr_31334_31401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (11))){
var inst_31177 = (state_31278[(7)]);
var inst_31155 = (state_31278[(15)]);
var inst_31177__$1 = cljs.core.seq.call(null,inst_31155);
var state_31278__$1 = (function (){var statearr_31335 = state_31278;
(statearr_31335[(7)] = inst_31177__$1);

return statearr_31335;
})();
if(inst_31177__$1){
var statearr_31336_31402 = state_31278__$1;
(statearr_31336_31402[(1)] = (16));

} else {
var statearr_31337_31403 = state_31278__$1;
(statearr_31337_31403[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (9))){
var inst_31207 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31338_31404 = state_31278__$1;
(statearr_31338_31404[(2)] = inst_31207);

(statearr_31338_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (5))){
var inst_31153 = cljs.core.deref.call(null,cs);
var inst_31154 = cljs.core.seq.call(null,inst_31153);
var inst_31155 = inst_31154;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31278__$1 = (function (){var statearr_31339 = state_31278;
(statearr_31339[(13)] = inst_31157);

(statearr_31339[(14)] = inst_31158);

(statearr_31339[(15)] = inst_31155);

(statearr_31339[(16)] = inst_31156);

return statearr_31339;
})();
var statearr_31340_31405 = state_31278__$1;
(statearr_31340_31405[(2)] = null);

(statearr_31340_31405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (14))){
var state_31278__$1 = state_31278;
var statearr_31341_31406 = state_31278__$1;
(statearr_31341_31406[(2)] = null);

(statearr_31341_31406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (45))){
var inst_31268 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31342_31407 = state_31278__$1;
(statearr_31342_31407[(2)] = inst_31268);

(statearr_31342_31407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (26))){
var inst_31210 = (state_31278[(29)]);
var inst_31264 = (state_31278[(2)]);
var inst_31265 = cljs.core.seq.call(null,inst_31210);
var state_31278__$1 = (function (){var statearr_31343 = state_31278;
(statearr_31343[(31)] = inst_31264);

return statearr_31343;
})();
if(inst_31265){
var statearr_31344_31408 = state_31278__$1;
(statearr_31344_31408[(1)] = (42));

} else {
var statearr_31345_31409 = state_31278__$1;
(statearr_31345_31409[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (16))){
var inst_31177 = (state_31278[(7)]);
var inst_31179 = cljs.core.chunked_seq_QMARK_.call(null,inst_31177);
var state_31278__$1 = state_31278;
if(inst_31179){
var statearr_31346_31410 = state_31278__$1;
(statearr_31346_31410[(1)] = (19));

} else {
var statearr_31347_31411 = state_31278__$1;
(statearr_31347_31411[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (38))){
var inst_31257 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31348_31412 = state_31278__$1;
(statearr_31348_31412[(2)] = inst_31257);

(statearr_31348_31412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (30))){
var state_31278__$1 = state_31278;
var statearr_31349_31413 = state_31278__$1;
(statearr_31349_31413[(2)] = null);

(statearr_31349_31413[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (10))){
var inst_31158 = (state_31278[(14)]);
var inst_31156 = (state_31278[(16)]);
var inst_31166 = cljs.core._nth.call(null,inst_31156,inst_31158);
var inst_31167 = cljs.core.nth.call(null,inst_31166,(0),null);
var inst_31168 = cljs.core.nth.call(null,inst_31166,(1),null);
var state_31278__$1 = (function (){var statearr_31350 = state_31278;
(statearr_31350[(26)] = inst_31167);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31168)){
var statearr_31351_31414 = state_31278__$1;
(statearr_31351_31414[(1)] = (13));

} else {
var statearr_31352_31415 = state_31278__$1;
(statearr_31352_31415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (18))){
var inst_31203 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31353_31416 = state_31278__$1;
(statearr_31353_31416[(2)] = inst_31203);

(statearr_31353_31416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (42))){
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31278__$1,(45),dchan);
} else {
if((state_val_31279 === (37))){
var inst_31246 = (state_31278[(23)]);
var inst_31146 = (state_31278[(10)]);
var inst_31237 = (state_31278[(25)]);
var inst_31246__$1 = cljs.core.first.call(null,inst_31237);
var inst_31247 = cljs.core.async.put_BANG_.call(null,inst_31246__$1,inst_31146,done);
var state_31278__$1 = (function (){var statearr_31354 = state_31278;
(statearr_31354[(23)] = inst_31246__$1);

return statearr_31354;
})();
if(cljs.core.truth_(inst_31247)){
var statearr_31355_31417 = state_31278__$1;
(statearr_31355_31417[(1)] = (39));

} else {
var statearr_31356_31418 = state_31278__$1;
(statearr_31356_31418[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (8))){
var inst_31157 = (state_31278[(13)]);
var inst_31158 = (state_31278[(14)]);
var inst_31160 = (inst_31158 < inst_31157);
var inst_31161 = inst_31160;
var state_31278__$1 = state_31278;
if(cljs.core.truth_(inst_31161)){
var statearr_31357_31419 = state_31278__$1;
(statearr_31357_31419[(1)] = (10));

} else {
var statearr_31358_31420 = state_31278__$1;
(statearr_31358_31420[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___31366,cs,m,dchan,dctr,done))
;
return ((function (switch__29915__auto__,c__30029__auto___31366,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29916__auto__ = null;
var cljs$core$async$mult_$_state_machine__29916__auto____0 = (function (){
var statearr_31362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31362[(0)] = cljs$core$async$mult_$_state_machine__29916__auto__);

(statearr_31362[(1)] = (1));

return statearr_31362;
});
var cljs$core$async$mult_$_state_machine__29916__auto____1 = (function (state_31278){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_31278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e31363){if((e31363 instanceof Object)){
var ex__29919__auto__ = e31363;
var statearr_31364_31421 = state_31278;
(statearr_31364_31421[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31422 = state_31278;
state_31278 = G__31422;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29916__auto__ = function(state_31278){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29916__auto____1.call(this,state_31278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29916__auto____0;
cljs$core$async$mult_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29916__auto____1;
return cljs$core$async$mult_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___31366,cs,m,dchan,dctr,done))
})();
var state__30031__auto__ = (function (){var statearr_31365 = f__30030__auto__.call(null);
(statearr_31365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___31366);

return statearr_31365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___31366,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31423 = [];
var len__22772__auto___31426 = arguments.length;
var i__22773__auto___31427 = (0);
while(true){
if((i__22773__auto___31427 < len__22772__auto___31426)){
args31423.push((arguments[i__22773__auto___31427]));

var G__31428 = (i__22773__auto___31427 + (1));
i__22773__auto___31427 = G__31428;
continue;
} else {
}
break;
}

var G__31425 = args31423.length;
switch (G__31425) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31423.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m,ch);
} else {
var m__22303__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m,ch);
} else {
var m__22303__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m);
} else {
var m__22303__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m,state_map);
} else {
var m__22303__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22302__auto__ = (((m == null))?null:m);
var m__22303__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,m,mode);
} else {
var m__22303__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22779__auto__ = [];
var len__22772__auto___31440 = arguments.length;
var i__22773__auto___31441 = (0);
while(true){
if((i__22773__auto___31441 < len__22772__auto___31440)){
args__22779__auto__.push((arguments[i__22773__auto___31441]));

var G__31442 = (i__22773__auto___31441 + (1));
i__22773__auto___31441 = G__31442;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((3) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22780__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31434){
var map__31435 = p__31434;
var map__31435__$1 = ((((!((map__31435 == null)))?((((map__31435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31435):map__31435);
var opts = map__31435__$1;
var statearr_31437_31443 = state;
(statearr_31437_31443[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__31435,map__31435__$1,opts){
return (function (val){
var statearr_31438_31444 = state;
(statearr_31438_31444[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31435,map__31435__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_31439_31445 = state;
(statearr_31439_31445[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31430){
var G__31431 = cljs.core.first.call(null,seq31430);
var seq31430__$1 = cljs.core.next.call(null,seq31430);
var G__31432 = cljs.core.first.call(null,seq31430__$1);
var seq31430__$2 = cljs.core.next.call(null,seq31430__$1);
var G__31433 = cljs.core.first.call(null,seq31430__$2);
var seq31430__$3 = cljs.core.next.call(null,seq31430__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31431,G__31432,G__31433,seq31430__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31611 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31612){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31612 = meta31612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31613,meta31612__$1){
var self__ = this;
var _31613__$1 = this;
return (new cljs.core.async.t_cljs$core$async31611(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31612__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31613){
var self__ = this;
var _31613__$1 = this;
return self__.meta31612;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31612","meta31612",1741113697,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31611";

cljs.core.async.t_cljs$core$async31611.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async31611");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31611 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31611(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31612){
return (new cljs.core.async.t_cljs$core$async31611(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31612));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31611(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30029__auto___31776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___31776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___31776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31713){
var state_val_31714 = (state_31713[(1)]);
if((state_val_31714 === (7))){
var inst_31629 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31715_31777 = state_31713__$1;
(statearr_31715_31777[(2)] = inst_31629);

(statearr_31715_31777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (20))){
var inst_31641 = (state_31713[(7)]);
var state_31713__$1 = state_31713;
var statearr_31716_31778 = state_31713__$1;
(statearr_31716_31778[(2)] = inst_31641);

(statearr_31716_31778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (27))){
var state_31713__$1 = state_31713;
var statearr_31717_31779 = state_31713__$1;
(statearr_31717_31779[(2)] = null);

(statearr_31717_31779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (1))){
var inst_31617 = (state_31713[(8)]);
var inst_31617__$1 = calc_state.call(null);
var inst_31619 = (inst_31617__$1 == null);
var inst_31620 = cljs.core.not.call(null,inst_31619);
var state_31713__$1 = (function (){var statearr_31718 = state_31713;
(statearr_31718[(8)] = inst_31617__$1);

return statearr_31718;
})();
if(inst_31620){
var statearr_31719_31780 = state_31713__$1;
(statearr_31719_31780[(1)] = (2));

} else {
var statearr_31720_31781 = state_31713__$1;
(statearr_31720_31781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (24))){
var inst_31664 = (state_31713[(9)]);
var inst_31687 = (state_31713[(10)]);
var inst_31673 = (state_31713[(11)]);
var inst_31687__$1 = inst_31664.call(null,inst_31673);
var state_31713__$1 = (function (){var statearr_31721 = state_31713;
(statearr_31721[(10)] = inst_31687__$1);

return statearr_31721;
})();
if(cljs.core.truth_(inst_31687__$1)){
var statearr_31722_31782 = state_31713__$1;
(statearr_31722_31782[(1)] = (29));

} else {
var statearr_31723_31783 = state_31713__$1;
(statearr_31723_31783[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (4))){
var inst_31632 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31632)){
var statearr_31724_31784 = state_31713__$1;
(statearr_31724_31784[(1)] = (8));

} else {
var statearr_31725_31785 = state_31713__$1;
(statearr_31725_31785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (15))){
var inst_31658 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31658)){
var statearr_31726_31786 = state_31713__$1;
(statearr_31726_31786[(1)] = (19));

} else {
var statearr_31727_31787 = state_31713__$1;
(statearr_31727_31787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (21))){
var inst_31663 = (state_31713[(12)]);
var inst_31663__$1 = (state_31713[(2)]);
var inst_31664 = cljs.core.get.call(null,inst_31663__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31665 = cljs.core.get.call(null,inst_31663__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31666 = cljs.core.get.call(null,inst_31663__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31713__$1 = (function (){var statearr_31728 = state_31713;
(statearr_31728[(9)] = inst_31664);

(statearr_31728[(13)] = inst_31665);

(statearr_31728[(12)] = inst_31663__$1);

return statearr_31728;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31713__$1,(22),inst_31666);
} else {
if((state_val_31714 === (31))){
var inst_31695 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31695)){
var statearr_31729_31788 = state_31713__$1;
(statearr_31729_31788[(1)] = (32));

} else {
var statearr_31730_31789 = state_31713__$1;
(statearr_31730_31789[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (32))){
var inst_31672 = (state_31713[(14)]);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31713__$1,(35),out,inst_31672);
} else {
if((state_val_31714 === (33))){
var inst_31663 = (state_31713[(12)]);
var inst_31641 = inst_31663;
var state_31713__$1 = (function (){var statearr_31731 = state_31713;
(statearr_31731[(7)] = inst_31641);

return statearr_31731;
})();
var statearr_31732_31790 = state_31713__$1;
(statearr_31732_31790[(2)] = null);

(statearr_31732_31790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (13))){
var inst_31641 = (state_31713[(7)]);
var inst_31648 = inst_31641.cljs$lang$protocol_mask$partition0$;
var inst_31649 = (inst_31648 & (64));
var inst_31650 = inst_31641.cljs$core$ISeq$;
var inst_31651 = (inst_31649) || (inst_31650);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31651)){
var statearr_31733_31791 = state_31713__$1;
(statearr_31733_31791[(1)] = (16));

} else {
var statearr_31734_31792 = state_31713__$1;
(statearr_31734_31792[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (22))){
var inst_31672 = (state_31713[(14)]);
var inst_31673 = (state_31713[(11)]);
var inst_31671 = (state_31713[(2)]);
var inst_31672__$1 = cljs.core.nth.call(null,inst_31671,(0),null);
var inst_31673__$1 = cljs.core.nth.call(null,inst_31671,(1),null);
var inst_31674 = (inst_31672__$1 == null);
var inst_31675 = cljs.core._EQ_.call(null,inst_31673__$1,change);
var inst_31676 = (inst_31674) || (inst_31675);
var state_31713__$1 = (function (){var statearr_31735 = state_31713;
(statearr_31735[(14)] = inst_31672__$1);

(statearr_31735[(11)] = inst_31673__$1);

return statearr_31735;
})();
if(cljs.core.truth_(inst_31676)){
var statearr_31736_31793 = state_31713__$1;
(statearr_31736_31793[(1)] = (23));

} else {
var statearr_31737_31794 = state_31713__$1;
(statearr_31737_31794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (36))){
var inst_31663 = (state_31713[(12)]);
var inst_31641 = inst_31663;
var state_31713__$1 = (function (){var statearr_31738 = state_31713;
(statearr_31738[(7)] = inst_31641);

return statearr_31738;
})();
var statearr_31739_31795 = state_31713__$1;
(statearr_31739_31795[(2)] = null);

(statearr_31739_31795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (29))){
var inst_31687 = (state_31713[(10)]);
var state_31713__$1 = state_31713;
var statearr_31740_31796 = state_31713__$1;
(statearr_31740_31796[(2)] = inst_31687);

(statearr_31740_31796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (6))){
var state_31713__$1 = state_31713;
var statearr_31741_31797 = state_31713__$1;
(statearr_31741_31797[(2)] = false);

(statearr_31741_31797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (28))){
var inst_31683 = (state_31713[(2)]);
var inst_31684 = calc_state.call(null);
var inst_31641 = inst_31684;
var state_31713__$1 = (function (){var statearr_31742 = state_31713;
(statearr_31742[(7)] = inst_31641);

(statearr_31742[(15)] = inst_31683);

return statearr_31742;
})();
var statearr_31743_31798 = state_31713__$1;
(statearr_31743_31798[(2)] = null);

(statearr_31743_31798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (25))){
var inst_31709 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31744_31799 = state_31713__$1;
(statearr_31744_31799[(2)] = inst_31709);

(statearr_31744_31799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (34))){
var inst_31707 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31745_31800 = state_31713__$1;
(statearr_31745_31800[(2)] = inst_31707);

(statearr_31745_31800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (17))){
var state_31713__$1 = state_31713;
var statearr_31746_31801 = state_31713__$1;
(statearr_31746_31801[(2)] = false);

(statearr_31746_31801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (3))){
var state_31713__$1 = state_31713;
var statearr_31747_31802 = state_31713__$1;
(statearr_31747_31802[(2)] = false);

(statearr_31747_31802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (12))){
var inst_31711 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31713__$1,inst_31711);
} else {
if((state_val_31714 === (2))){
var inst_31617 = (state_31713[(8)]);
var inst_31622 = inst_31617.cljs$lang$protocol_mask$partition0$;
var inst_31623 = (inst_31622 & (64));
var inst_31624 = inst_31617.cljs$core$ISeq$;
var inst_31625 = (inst_31623) || (inst_31624);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31625)){
var statearr_31748_31803 = state_31713__$1;
(statearr_31748_31803[(1)] = (5));

} else {
var statearr_31749_31804 = state_31713__$1;
(statearr_31749_31804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (23))){
var inst_31672 = (state_31713[(14)]);
var inst_31678 = (inst_31672 == null);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31678)){
var statearr_31750_31805 = state_31713__$1;
(statearr_31750_31805[(1)] = (26));

} else {
var statearr_31751_31806 = state_31713__$1;
(statearr_31751_31806[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (35))){
var inst_31698 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31698)){
var statearr_31752_31807 = state_31713__$1;
(statearr_31752_31807[(1)] = (36));

} else {
var statearr_31753_31808 = state_31713__$1;
(statearr_31753_31808[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (19))){
var inst_31641 = (state_31713[(7)]);
var inst_31660 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31641);
var state_31713__$1 = state_31713;
var statearr_31754_31809 = state_31713__$1;
(statearr_31754_31809[(2)] = inst_31660);

(statearr_31754_31809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (11))){
var inst_31641 = (state_31713[(7)]);
var inst_31645 = (inst_31641 == null);
var inst_31646 = cljs.core.not.call(null,inst_31645);
var state_31713__$1 = state_31713;
if(inst_31646){
var statearr_31755_31810 = state_31713__$1;
(statearr_31755_31810[(1)] = (13));

} else {
var statearr_31756_31811 = state_31713__$1;
(statearr_31756_31811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (9))){
var inst_31617 = (state_31713[(8)]);
var state_31713__$1 = state_31713;
var statearr_31757_31812 = state_31713__$1;
(statearr_31757_31812[(2)] = inst_31617);

(statearr_31757_31812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (5))){
var state_31713__$1 = state_31713;
var statearr_31758_31813 = state_31713__$1;
(statearr_31758_31813[(2)] = true);

(statearr_31758_31813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (14))){
var state_31713__$1 = state_31713;
var statearr_31759_31814 = state_31713__$1;
(statearr_31759_31814[(2)] = false);

(statearr_31759_31814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (26))){
var inst_31673 = (state_31713[(11)]);
var inst_31680 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31673);
var state_31713__$1 = state_31713;
var statearr_31760_31815 = state_31713__$1;
(statearr_31760_31815[(2)] = inst_31680);

(statearr_31760_31815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (16))){
var state_31713__$1 = state_31713;
var statearr_31761_31816 = state_31713__$1;
(statearr_31761_31816[(2)] = true);

(statearr_31761_31816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (38))){
var inst_31703 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31762_31817 = state_31713__$1;
(statearr_31762_31817[(2)] = inst_31703);

(statearr_31762_31817[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (30))){
var inst_31664 = (state_31713[(9)]);
var inst_31665 = (state_31713[(13)]);
var inst_31673 = (state_31713[(11)]);
var inst_31690 = cljs.core.empty_QMARK_.call(null,inst_31664);
var inst_31691 = inst_31665.call(null,inst_31673);
var inst_31692 = cljs.core.not.call(null,inst_31691);
var inst_31693 = (inst_31690) && (inst_31692);
var state_31713__$1 = state_31713;
var statearr_31763_31818 = state_31713__$1;
(statearr_31763_31818[(2)] = inst_31693);

(statearr_31763_31818[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (10))){
var inst_31617 = (state_31713[(8)]);
var inst_31637 = (state_31713[(2)]);
var inst_31638 = cljs.core.get.call(null,inst_31637,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31639 = cljs.core.get.call(null,inst_31637,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31640 = cljs.core.get.call(null,inst_31637,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31641 = inst_31617;
var state_31713__$1 = (function (){var statearr_31764 = state_31713;
(statearr_31764[(16)] = inst_31638);

(statearr_31764[(7)] = inst_31641);

(statearr_31764[(17)] = inst_31640);

(statearr_31764[(18)] = inst_31639);

return statearr_31764;
})();
var statearr_31765_31819 = state_31713__$1;
(statearr_31765_31819[(2)] = null);

(statearr_31765_31819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (18))){
var inst_31655 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31766_31820 = state_31713__$1;
(statearr_31766_31820[(2)] = inst_31655);

(statearr_31766_31820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (37))){
var state_31713__$1 = state_31713;
var statearr_31767_31821 = state_31713__$1;
(statearr_31767_31821[(2)] = null);

(statearr_31767_31821[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (8))){
var inst_31617 = (state_31713[(8)]);
var inst_31634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31617);
var state_31713__$1 = state_31713;
var statearr_31768_31822 = state_31713__$1;
(statearr_31768_31822[(2)] = inst_31634);

(statearr_31768_31822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___31776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29915__auto__,c__30029__auto___31776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29916__auto__ = null;
var cljs$core$async$mix_$_state_machine__29916__auto____0 = (function (){
var statearr_31772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31772[(0)] = cljs$core$async$mix_$_state_machine__29916__auto__);

(statearr_31772[(1)] = (1));

return statearr_31772;
});
var cljs$core$async$mix_$_state_machine__29916__auto____1 = (function (state_31713){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_31713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e31773){if((e31773 instanceof Object)){
var ex__29919__auto__ = e31773;
var statearr_31774_31823 = state_31713;
(statearr_31774_31823[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31824 = state_31713;
state_31713 = G__31824;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29916__auto__ = function(state_31713){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29916__auto____1.call(this,state_31713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29916__auto____0;
cljs$core$async$mix_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29916__auto____1;
return cljs$core$async$mix_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___31776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30031__auto__ = (function (){var statearr_31775 = f__30030__auto__.call(null);
(statearr_31775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___31776);

return statearr_31775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___31776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22302__auto__ = (((p == null))?null:p);
var m__22303__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22303__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22302__auto__ = (((p == null))?null:p);
var m__22303__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,p,v,ch);
} else {
var m__22303__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31825 = [];
var len__22772__auto___31828 = arguments.length;
var i__22773__auto___31829 = (0);
while(true){
if((i__22773__auto___31829 < len__22772__auto___31828)){
args31825.push((arguments[i__22773__auto___31829]));

var G__31830 = (i__22773__auto___31829 + (1));
i__22773__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var G__31827 = args31825.length;
switch (G__31827) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31825.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22302__auto__ = (((p == null))?null:p);
var m__22303__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,p);
} else {
var m__22303__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22302__auto__ = (((p == null))?null:p);
var m__22303__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,p,v);
} else {
var m__22303__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31833 = [];
var len__22772__auto___31958 = arguments.length;
var i__22773__auto___31959 = (0);
while(true){
if((i__22773__auto___31959 < len__22772__auto___31958)){
args31833.push((arguments[i__22773__auto___31959]));

var G__31960 = (i__22773__auto___31959 + (1));
i__22773__auto___31959 = G__31960;
continue;
} else {
}
break;
}

var G__31835 = args31833.length;
switch (G__31835) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31833.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21589__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21589__auto__,mults){
return (function (p1__31832_SHARP_){
if(cljs.core.truth_(p1__31832_SHARP_.call(null,topic))){
return p1__31832_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31832_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21589__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31836 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31837){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31837 = meta31837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31838,meta31837__$1){
var self__ = this;
var _31838__$1 = this;
return (new cljs.core.async.t_cljs$core$async31836(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31837__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31838){
var self__ = this;
var _31838__$1 = this;
return self__.meta31837;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31837","meta31837",404994191,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31836";

cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async31836");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31836 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31836(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31837){
return (new cljs.core.async.t_cljs$core$async31836(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31837));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31836(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30029__auto___31962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___31962,mults,ensure_mult,p){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___31962,mults,ensure_mult,p){
return (function (state_31910){
var state_val_31911 = (state_31910[(1)]);
if((state_val_31911 === (7))){
var inst_31906 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31912_31963 = state_31910__$1;
(statearr_31912_31963[(2)] = inst_31906);

(statearr_31912_31963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (20))){
var state_31910__$1 = state_31910;
var statearr_31913_31964 = state_31910__$1;
(statearr_31913_31964[(2)] = null);

(statearr_31913_31964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (1))){
var state_31910__$1 = state_31910;
var statearr_31914_31965 = state_31910__$1;
(statearr_31914_31965[(2)] = null);

(statearr_31914_31965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (24))){
var inst_31889 = (state_31910[(7)]);
var inst_31898 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31889);
var state_31910__$1 = state_31910;
var statearr_31915_31966 = state_31910__$1;
(statearr_31915_31966[(2)] = inst_31898);

(statearr_31915_31966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (4))){
var inst_31841 = (state_31910[(8)]);
var inst_31841__$1 = (state_31910[(2)]);
var inst_31842 = (inst_31841__$1 == null);
var state_31910__$1 = (function (){var statearr_31916 = state_31910;
(statearr_31916[(8)] = inst_31841__$1);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31842)){
var statearr_31917_31967 = state_31910__$1;
(statearr_31917_31967[(1)] = (5));

} else {
var statearr_31918_31968 = state_31910__$1;
(statearr_31918_31968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (15))){
var inst_31883 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31919_31969 = state_31910__$1;
(statearr_31919_31969[(2)] = inst_31883);

(statearr_31919_31969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (21))){
var inst_31903 = (state_31910[(2)]);
var state_31910__$1 = (function (){var statearr_31920 = state_31910;
(statearr_31920[(9)] = inst_31903);

return statearr_31920;
})();
var statearr_31921_31970 = state_31910__$1;
(statearr_31921_31970[(2)] = null);

(statearr_31921_31970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (13))){
var inst_31865 = (state_31910[(10)]);
var inst_31867 = cljs.core.chunked_seq_QMARK_.call(null,inst_31865);
var state_31910__$1 = state_31910;
if(inst_31867){
var statearr_31922_31971 = state_31910__$1;
(statearr_31922_31971[(1)] = (16));

} else {
var statearr_31923_31972 = state_31910__$1;
(statearr_31923_31972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (22))){
var inst_31895 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31895)){
var statearr_31924_31973 = state_31910__$1;
(statearr_31924_31973[(1)] = (23));

} else {
var statearr_31925_31974 = state_31910__$1;
(statearr_31925_31974[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (6))){
var inst_31889 = (state_31910[(7)]);
var inst_31841 = (state_31910[(8)]);
var inst_31891 = (state_31910[(11)]);
var inst_31889__$1 = topic_fn.call(null,inst_31841);
var inst_31890 = cljs.core.deref.call(null,mults);
var inst_31891__$1 = cljs.core.get.call(null,inst_31890,inst_31889__$1);
var state_31910__$1 = (function (){var statearr_31926 = state_31910;
(statearr_31926[(7)] = inst_31889__$1);

(statearr_31926[(11)] = inst_31891__$1);

return statearr_31926;
})();
if(cljs.core.truth_(inst_31891__$1)){
var statearr_31927_31975 = state_31910__$1;
(statearr_31927_31975[(1)] = (19));

} else {
var statearr_31928_31976 = state_31910__$1;
(statearr_31928_31976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (25))){
var inst_31900 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31929_31977 = state_31910__$1;
(statearr_31929_31977[(2)] = inst_31900);

(statearr_31929_31977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (17))){
var inst_31865 = (state_31910[(10)]);
var inst_31874 = cljs.core.first.call(null,inst_31865);
var inst_31875 = cljs.core.async.muxch_STAR_.call(null,inst_31874);
var inst_31876 = cljs.core.async.close_BANG_.call(null,inst_31875);
var inst_31877 = cljs.core.next.call(null,inst_31865);
var inst_31851 = inst_31877;
var inst_31852 = null;
var inst_31853 = (0);
var inst_31854 = (0);
var state_31910__$1 = (function (){var statearr_31930 = state_31910;
(statearr_31930[(12)] = inst_31851);

(statearr_31930[(13)] = inst_31852);

(statearr_31930[(14)] = inst_31853);

(statearr_31930[(15)] = inst_31876);

(statearr_31930[(16)] = inst_31854);

return statearr_31930;
})();
var statearr_31931_31978 = state_31910__$1;
(statearr_31931_31978[(2)] = null);

(statearr_31931_31978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (3))){
var inst_31908 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31910__$1,inst_31908);
} else {
if((state_val_31911 === (12))){
var inst_31885 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31932_31979 = state_31910__$1;
(statearr_31932_31979[(2)] = inst_31885);

(statearr_31932_31979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (2))){
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31910__$1,(4),ch);
} else {
if((state_val_31911 === (23))){
var state_31910__$1 = state_31910;
var statearr_31933_31980 = state_31910__$1;
(statearr_31933_31980[(2)] = null);

(statearr_31933_31980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (19))){
var inst_31841 = (state_31910[(8)]);
var inst_31891 = (state_31910[(11)]);
var inst_31893 = cljs.core.async.muxch_STAR_.call(null,inst_31891);
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31910__$1,(22),inst_31893,inst_31841);
} else {
if((state_val_31911 === (11))){
var inst_31851 = (state_31910[(12)]);
var inst_31865 = (state_31910[(10)]);
var inst_31865__$1 = cljs.core.seq.call(null,inst_31851);
var state_31910__$1 = (function (){var statearr_31934 = state_31910;
(statearr_31934[(10)] = inst_31865__$1);

return statearr_31934;
})();
if(inst_31865__$1){
var statearr_31935_31981 = state_31910__$1;
(statearr_31935_31981[(1)] = (13));

} else {
var statearr_31936_31982 = state_31910__$1;
(statearr_31936_31982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (9))){
var inst_31887 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31937_31983 = state_31910__$1;
(statearr_31937_31983[(2)] = inst_31887);

(statearr_31937_31983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (5))){
var inst_31848 = cljs.core.deref.call(null,mults);
var inst_31849 = cljs.core.vals.call(null,inst_31848);
var inst_31850 = cljs.core.seq.call(null,inst_31849);
var inst_31851 = inst_31850;
var inst_31852 = null;
var inst_31853 = (0);
var inst_31854 = (0);
var state_31910__$1 = (function (){var statearr_31938 = state_31910;
(statearr_31938[(12)] = inst_31851);

(statearr_31938[(13)] = inst_31852);

(statearr_31938[(14)] = inst_31853);

(statearr_31938[(16)] = inst_31854);

return statearr_31938;
})();
var statearr_31939_31984 = state_31910__$1;
(statearr_31939_31984[(2)] = null);

(statearr_31939_31984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (14))){
var state_31910__$1 = state_31910;
var statearr_31943_31985 = state_31910__$1;
(statearr_31943_31985[(2)] = null);

(statearr_31943_31985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (16))){
var inst_31865 = (state_31910[(10)]);
var inst_31869 = cljs.core.chunk_first.call(null,inst_31865);
var inst_31870 = cljs.core.chunk_rest.call(null,inst_31865);
var inst_31871 = cljs.core.count.call(null,inst_31869);
var inst_31851 = inst_31870;
var inst_31852 = inst_31869;
var inst_31853 = inst_31871;
var inst_31854 = (0);
var state_31910__$1 = (function (){var statearr_31944 = state_31910;
(statearr_31944[(12)] = inst_31851);

(statearr_31944[(13)] = inst_31852);

(statearr_31944[(14)] = inst_31853);

(statearr_31944[(16)] = inst_31854);

return statearr_31944;
})();
var statearr_31945_31986 = state_31910__$1;
(statearr_31945_31986[(2)] = null);

(statearr_31945_31986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (10))){
var inst_31851 = (state_31910[(12)]);
var inst_31852 = (state_31910[(13)]);
var inst_31853 = (state_31910[(14)]);
var inst_31854 = (state_31910[(16)]);
var inst_31859 = cljs.core._nth.call(null,inst_31852,inst_31854);
var inst_31860 = cljs.core.async.muxch_STAR_.call(null,inst_31859);
var inst_31861 = cljs.core.async.close_BANG_.call(null,inst_31860);
var inst_31862 = (inst_31854 + (1));
var tmp31940 = inst_31851;
var tmp31941 = inst_31852;
var tmp31942 = inst_31853;
var inst_31851__$1 = tmp31940;
var inst_31852__$1 = tmp31941;
var inst_31853__$1 = tmp31942;
var inst_31854__$1 = inst_31862;
var state_31910__$1 = (function (){var statearr_31946 = state_31910;
(statearr_31946[(12)] = inst_31851__$1);

(statearr_31946[(13)] = inst_31852__$1);

(statearr_31946[(17)] = inst_31861);

(statearr_31946[(14)] = inst_31853__$1);

(statearr_31946[(16)] = inst_31854__$1);

return statearr_31946;
})();
var statearr_31947_31987 = state_31910__$1;
(statearr_31947_31987[(2)] = null);

(statearr_31947_31987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (18))){
var inst_31880 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31948_31988 = state_31910__$1;
(statearr_31948_31988[(2)] = inst_31880);

(statearr_31948_31988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (8))){
var inst_31853 = (state_31910[(14)]);
var inst_31854 = (state_31910[(16)]);
var inst_31856 = (inst_31854 < inst_31853);
var inst_31857 = inst_31856;
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31857)){
var statearr_31949_31989 = state_31910__$1;
(statearr_31949_31989[(1)] = (10));

} else {
var statearr_31950_31990 = state_31910__$1;
(statearr_31950_31990[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___31962,mults,ensure_mult,p))
;
return ((function (switch__29915__auto__,c__30029__auto___31962,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_31954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31954[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_31954[(1)] = (1));

return statearr_31954;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_31910){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_31910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e31955){if((e31955 instanceof Object)){
var ex__29919__auto__ = e31955;
var statearr_31956_31991 = state_31910;
(statearr_31956_31991[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31992 = state_31910;
state_31910 = G__31992;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_31910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_31910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___31962,mults,ensure_mult,p))
})();
var state__30031__auto__ = (function (){var statearr_31957 = f__30030__auto__.call(null);
(statearr_31957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___31962);

return statearr_31957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___31962,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31993 = [];
var len__22772__auto___31996 = arguments.length;
var i__22773__auto___31997 = (0);
while(true){
if((i__22773__auto___31997 < len__22772__auto___31996)){
args31993.push((arguments[i__22773__auto___31997]));

var G__31998 = (i__22773__auto___31997 + (1));
i__22773__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var G__31995 = args31993.length;
switch (G__31995) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31993.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32000 = [];
var len__22772__auto___32003 = arguments.length;
var i__22773__auto___32004 = (0);
while(true){
if((i__22773__auto___32004 < len__22772__auto___32003)){
args32000.push((arguments[i__22773__auto___32004]));

var G__32005 = (i__22773__auto___32004 + (1));
i__22773__auto___32004 = G__32005;
continue;
} else {
}
break;
}

var G__32002 = args32000.length;
switch (G__32002) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32000.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32007 = [];
var len__22772__auto___32078 = arguments.length;
var i__22773__auto___32079 = (0);
while(true){
if((i__22773__auto___32079 < len__22772__auto___32078)){
args32007.push((arguments[i__22773__auto___32079]));

var G__32080 = (i__22773__auto___32079 + (1));
i__22773__auto___32079 = G__32080;
continue;
} else {
}
break;
}

var G__32009 = args32007.length;
switch (G__32009) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32007.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30029__auto___32082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___32082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32048){
var state_val_32049 = (state_32048[(1)]);
if((state_val_32049 === (7))){
var state_32048__$1 = state_32048;
var statearr_32050_32083 = state_32048__$1;
(statearr_32050_32083[(2)] = null);

(statearr_32050_32083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (1))){
var state_32048__$1 = state_32048;
var statearr_32051_32084 = state_32048__$1;
(statearr_32051_32084[(2)] = null);

(statearr_32051_32084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (4))){
var inst_32012 = (state_32048[(7)]);
var inst_32014 = (inst_32012 < cnt);
var state_32048__$1 = state_32048;
if(cljs.core.truth_(inst_32014)){
var statearr_32052_32085 = state_32048__$1;
(statearr_32052_32085[(1)] = (6));

} else {
var statearr_32053_32086 = state_32048__$1;
(statearr_32053_32086[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (15))){
var inst_32044 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
var statearr_32054_32087 = state_32048__$1;
(statearr_32054_32087[(2)] = inst_32044);

(statearr_32054_32087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (13))){
var inst_32037 = cljs.core.async.close_BANG_.call(null,out);
var state_32048__$1 = state_32048;
var statearr_32055_32088 = state_32048__$1;
(statearr_32055_32088[(2)] = inst_32037);

(statearr_32055_32088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (6))){
var state_32048__$1 = state_32048;
var statearr_32056_32089 = state_32048__$1;
(statearr_32056_32089[(2)] = null);

(statearr_32056_32089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (3))){
var inst_32046 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32048__$1,inst_32046);
} else {
if((state_val_32049 === (12))){
var inst_32034 = (state_32048[(8)]);
var inst_32034__$1 = (state_32048[(2)]);
var inst_32035 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32034__$1);
var state_32048__$1 = (function (){var statearr_32057 = state_32048;
(statearr_32057[(8)] = inst_32034__$1);

return statearr_32057;
})();
if(cljs.core.truth_(inst_32035)){
var statearr_32058_32090 = state_32048__$1;
(statearr_32058_32090[(1)] = (13));

} else {
var statearr_32059_32091 = state_32048__$1;
(statearr_32059_32091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (2))){
var inst_32011 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32012 = (0);
var state_32048__$1 = (function (){var statearr_32060 = state_32048;
(statearr_32060[(9)] = inst_32011);

(statearr_32060[(7)] = inst_32012);

return statearr_32060;
})();
var statearr_32061_32092 = state_32048__$1;
(statearr_32061_32092[(2)] = null);

(statearr_32061_32092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (11))){
var inst_32012 = (state_32048[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32048,(10),Object,null,(9));
var inst_32021 = chs__$1.call(null,inst_32012);
var inst_32022 = done.call(null,inst_32012);
var inst_32023 = cljs.core.async.take_BANG_.call(null,inst_32021,inst_32022);
var state_32048__$1 = state_32048;
var statearr_32062_32093 = state_32048__$1;
(statearr_32062_32093[(2)] = inst_32023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (9))){
var inst_32012 = (state_32048[(7)]);
var inst_32025 = (state_32048[(2)]);
var inst_32026 = (inst_32012 + (1));
var inst_32012__$1 = inst_32026;
var state_32048__$1 = (function (){var statearr_32063 = state_32048;
(statearr_32063[(7)] = inst_32012__$1);

(statearr_32063[(10)] = inst_32025);

return statearr_32063;
})();
var statearr_32064_32094 = state_32048__$1;
(statearr_32064_32094[(2)] = null);

(statearr_32064_32094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (5))){
var inst_32032 = (state_32048[(2)]);
var state_32048__$1 = (function (){var statearr_32065 = state_32048;
(statearr_32065[(11)] = inst_32032);

return statearr_32065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32048__$1,(12),dchan);
} else {
if((state_val_32049 === (14))){
var inst_32034 = (state_32048[(8)]);
var inst_32039 = cljs.core.apply.call(null,f,inst_32034);
var state_32048__$1 = state_32048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32048__$1,(16),out,inst_32039);
} else {
if((state_val_32049 === (16))){
var inst_32041 = (state_32048[(2)]);
var state_32048__$1 = (function (){var statearr_32066 = state_32048;
(statearr_32066[(12)] = inst_32041);

return statearr_32066;
})();
var statearr_32067_32095 = state_32048__$1;
(statearr_32067_32095[(2)] = null);

(statearr_32067_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (10))){
var inst_32016 = (state_32048[(2)]);
var inst_32017 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32048__$1 = (function (){var statearr_32068 = state_32048;
(statearr_32068[(13)] = inst_32016);

return statearr_32068;
})();
var statearr_32069_32096 = state_32048__$1;
(statearr_32069_32096[(2)] = inst_32017);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (8))){
var inst_32030 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
var statearr_32070_32097 = state_32048__$1;
(statearr_32070_32097[(2)] = inst_32030);

(statearr_32070_32097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___32082,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29915__auto__,c__30029__auto___32082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_32074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32074[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_32074[(1)] = (1));

return statearr_32074;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_32048){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32075){if((e32075 instanceof Object)){
var ex__29919__auto__ = e32075;
var statearr_32076_32098 = state_32048;
(statearr_32076_32098[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32099 = state_32048;
state_32048 = G__32099;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_32048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_32048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___32082,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30031__auto__ = (function (){var statearr_32077 = f__30030__auto__.call(null);
(statearr_32077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32082);

return statearr_32077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32082,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32101 = [];
var len__22772__auto___32159 = arguments.length;
var i__22773__auto___32160 = (0);
while(true){
if((i__22773__auto___32160 < len__22772__auto___32159)){
args32101.push((arguments[i__22773__auto___32160]));

var G__32161 = (i__22773__auto___32160 + (1));
i__22773__auto___32160 = G__32161;
continue;
} else {
}
break;
}

var G__32103 = args32101.length;
switch (G__32103) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32101.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32163,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___32163,out){
return (function (state_32135){
var state_val_32136 = (state_32135[(1)]);
if((state_val_32136 === (7))){
var inst_32114 = (state_32135[(7)]);
var inst_32115 = (state_32135[(8)]);
var inst_32114__$1 = (state_32135[(2)]);
var inst_32115__$1 = cljs.core.nth.call(null,inst_32114__$1,(0),null);
var inst_32116 = cljs.core.nth.call(null,inst_32114__$1,(1),null);
var inst_32117 = (inst_32115__$1 == null);
var state_32135__$1 = (function (){var statearr_32137 = state_32135;
(statearr_32137[(7)] = inst_32114__$1);

(statearr_32137[(8)] = inst_32115__$1);

(statearr_32137[(9)] = inst_32116);

return statearr_32137;
})();
if(cljs.core.truth_(inst_32117)){
var statearr_32138_32164 = state_32135__$1;
(statearr_32138_32164[(1)] = (8));

} else {
var statearr_32139_32165 = state_32135__$1;
(statearr_32139_32165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (1))){
var inst_32104 = cljs.core.vec.call(null,chs);
var inst_32105 = inst_32104;
var state_32135__$1 = (function (){var statearr_32140 = state_32135;
(statearr_32140[(10)] = inst_32105);

return statearr_32140;
})();
var statearr_32141_32166 = state_32135__$1;
(statearr_32141_32166[(2)] = null);

(statearr_32141_32166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (4))){
var inst_32105 = (state_32135[(10)]);
var state_32135__$1 = state_32135;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32135__$1,(7),inst_32105);
} else {
if((state_val_32136 === (6))){
var inst_32131 = (state_32135[(2)]);
var state_32135__$1 = state_32135;
var statearr_32142_32167 = state_32135__$1;
(statearr_32142_32167[(2)] = inst_32131);

(statearr_32142_32167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (3))){
var inst_32133 = (state_32135[(2)]);
var state_32135__$1 = state_32135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32135__$1,inst_32133);
} else {
if((state_val_32136 === (2))){
var inst_32105 = (state_32135[(10)]);
var inst_32107 = cljs.core.count.call(null,inst_32105);
var inst_32108 = (inst_32107 > (0));
var state_32135__$1 = state_32135;
if(cljs.core.truth_(inst_32108)){
var statearr_32144_32168 = state_32135__$1;
(statearr_32144_32168[(1)] = (4));

} else {
var statearr_32145_32169 = state_32135__$1;
(statearr_32145_32169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (11))){
var inst_32105 = (state_32135[(10)]);
var inst_32124 = (state_32135[(2)]);
var tmp32143 = inst_32105;
var inst_32105__$1 = tmp32143;
var state_32135__$1 = (function (){var statearr_32146 = state_32135;
(statearr_32146[(10)] = inst_32105__$1);

(statearr_32146[(11)] = inst_32124);

return statearr_32146;
})();
var statearr_32147_32170 = state_32135__$1;
(statearr_32147_32170[(2)] = null);

(statearr_32147_32170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (9))){
var inst_32115 = (state_32135[(8)]);
var state_32135__$1 = state_32135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32135__$1,(11),out,inst_32115);
} else {
if((state_val_32136 === (5))){
var inst_32129 = cljs.core.async.close_BANG_.call(null,out);
var state_32135__$1 = state_32135;
var statearr_32148_32171 = state_32135__$1;
(statearr_32148_32171[(2)] = inst_32129);

(statearr_32148_32171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (10))){
var inst_32127 = (state_32135[(2)]);
var state_32135__$1 = state_32135;
var statearr_32149_32172 = state_32135__$1;
(statearr_32149_32172[(2)] = inst_32127);

(statearr_32149_32172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (8))){
var inst_32114 = (state_32135[(7)]);
var inst_32105 = (state_32135[(10)]);
var inst_32115 = (state_32135[(8)]);
var inst_32116 = (state_32135[(9)]);
var inst_32119 = (function (){var cs = inst_32105;
var vec__32110 = inst_32114;
var v = inst_32115;
var c = inst_32116;
return ((function (cs,vec__32110,v,c,inst_32114,inst_32105,inst_32115,inst_32116,state_val_32136,c__30029__auto___32163,out){
return (function (p1__32100_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32100_SHARP_);
});
;})(cs,vec__32110,v,c,inst_32114,inst_32105,inst_32115,inst_32116,state_val_32136,c__30029__auto___32163,out))
})();
var inst_32120 = cljs.core.filterv.call(null,inst_32119,inst_32105);
var inst_32105__$1 = inst_32120;
var state_32135__$1 = (function (){var statearr_32150 = state_32135;
(statearr_32150[(10)] = inst_32105__$1);

return statearr_32150;
})();
var statearr_32151_32173 = state_32135__$1;
(statearr_32151_32173[(2)] = null);

(statearr_32151_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___32163,out))
;
return ((function (switch__29915__auto__,c__30029__auto___32163,out){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_32155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32155[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_32155[(1)] = (1));

return statearr_32155;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_32135){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32156){if((e32156 instanceof Object)){
var ex__29919__auto__ = e32156;
var statearr_32157_32174 = state_32135;
(statearr_32157_32174[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32175 = state_32135;
state_32135 = G__32175;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_32135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_32135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___32163,out))
})();
var state__30031__auto__ = (function (){var statearr_32158 = f__30030__auto__.call(null);
(statearr_32158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32163);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32163,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32176 = [];
var len__22772__auto___32225 = arguments.length;
var i__22773__auto___32226 = (0);
while(true){
if((i__22773__auto___32226 < len__22772__auto___32225)){
args32176.push((arguments[i__22773__auto___32226]));

var G__32227 = (i__22773__auto___32226 + (1));
i__22773__auto___32226 = G__32227;
continue;
} else {
}
break;
}

var G__32178 = args32176.length;
switch (G__32178) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32176.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32229,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___32229,out){
return (function (state_32202){
var state_val_32203 = (state_32202[(1)]);
if((state_val_32203 === (7))){
var inst_32184 = (state_32202[(7)]);
var inst_32184__$1 = (state_32202[(2)]);
var inst_32185 = (inst_32184__$1 == null);
var inst_32186 = cljs.core.not.call(null,inst_32185);
var state_32202__$1 = (function (){var statearr_32204 = state_32202;
(statearr_32204[(7)] = inst_32184__$1);

return statearr_32204;
})();
if(inst_32186){
var statearr_32205_32230 = state_32202__$1;
(statearr_32205_32230[(1)] = (8));

} else {
var statearr_32206_32231 = state_32202__$1;
(statearr_32206_32231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (1))){
var inst_32179 = (0);
var state_32202__$1 = (function (){var statearr_32207 = state_32202;
(statearr_32207[(8)] = inst_32179);

return statearr_32207;
})();
var statearr_32208_32232 = state_32202__$1;
(statearr_32208_32232[(2)] = null);

(statearr_32208_32232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (4))){
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32202__$1,(7),ch);
} else {
if((state_val_32203 === (6))){
var inst_32197 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32209_32233 = state_32202__$1;
(statearr_32209_32233[(2)] = inst_32197);

(statearr_32209_32233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (3))){
var inst_32199 = (state_32202[(2)]);
var inst_32200 = cljs.core.async.close_BANG_.call(null,out);
var state_32202__$1 = (function (){var statearr_32210 = state_32202;
(statearr_32210[(9)] = inst_32199);

return statearr_32210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32202__$1,inst_32200);
} else {
if((state_val_32203 === (2))){
var inst_32179 = (state_32202[(8)]);
var inst_32181 = (inst_32179 < n);
var state_32202__$1 = state_32202;
if(cljs.core.truth_(inst_32181)){
var statearr_32211_32234 = state_32202__$1;
(statearr_32211_32234[(1)] = (4));

} else {
var statearr_32212_32235 = state_32202__$1;
(statearr_32212_32235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (11))){
var inst_32179 = (state_32202[(8)]);
var inst_32189 = (state_32202[(2)]);
var inst_32190 = (inst_32179 + (1));
var inst_32179__$1 = inst_32190;
var state_32202__$1 = (function (){var statearr_32213 = state_32202;
(statearr_32213[(8)] = inst_32179__$1);

(statearr_32213[(10)] = inst_32189);

return statearr_32213;
})();
var statearr_32214_32236 = state_32202__$1;
(statearr_32214_32236[(2)] = null);

(statearr_32214_32236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (9))){
var state_32202__$1 = state_32202;
var statearr_32215_32237 = state_32202__$1;
(statearr_32215_32237[(2)] = null);

(statearr_32215_32237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (5))){
var state_32202__$1 = state_32202;
var statearr_32216_32238 = state_32202__$1;
(statearr_32216_32238[(2)] = null);

(statearr_32216_32238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (10))){
var inst_32194 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32217_32239 = state_32202__$1;
(statearr_32217_32239[(2)] = inst_32194);

(statearr_32217_32239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (8))){
var inst_32184 = (state_32202[(7)]);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32202__$1,(11),out,inst_32184);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___32229,out))
;
return ((function (switch__29915__auto__,c__30029__auto___32229,out){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_32221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32221[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_32221[(1)] = (1));

return statearr_32221;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_32202){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32222){if((e32222 instanceof Object)){
var ex__29919__auto__ = e32222;
var statearr_32223_32240 = state_32202;
(statearr_32223_32240[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32241 = state_32202;
state_32202 = G__32241;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_32202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_32202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___32229,out))
})();
var state__30031__auto__ = (function (){var statearr_32224 = f__30030__auto__.call(null);
(statearr_32224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32229);

return statearr_32224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32229,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32249 = (function (map_LT_,f,ch,meta32250){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32250 = meta32250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32251,meta32250__$1){
var self__ = this;
var _32251__$1 = this;
return (new cljs.core.async.t_cljs$core$async32249(self__.map_LT_,self__.f,self__.ch,meta32250__$1));
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32251){
var self__ = this;
var _32251__$1 = this;
return self__.meta32250;
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32252 = (function (map_LT_,f,ch,meta32250,_,fn1,meta32253){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32250 = meta32250;
this._ = _;
this.fn1 = fn1;
this.meta32253 = meta32253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32254,meta32253__$1){
var self__ = this;
var _32254__$1 = this;
return (new cljs.core.async.t_cljs$core$async32252(self__.map_LT_,self__.f,self__.ch,self__.meta32250,self__._,self__.fn1,meta32253__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32254){
var self__ = this;
var _32254__$1 = this;
return self__.meta32253;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32242_SHARP_){
return f1.call(null,(((p1__32242_SHARP_ == null))?null:self__.f.call(null,p1__32242_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32252.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32250","meta32250",-1353888277,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32249","cljs.core.async/t_cljs$core$async32249",-449558263,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32253","meta32253",-48257420,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32252";

cljs.core.async.t_cljs$core$async32252.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async32252");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32252 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32252(map_LT___$1,f__$1,ch__$1,meta32250__$1,___$2,fn1__$1,meta32253){
return (new cljs.core.async.t_cljs$core$async32252(map_LT___$1,f__$1,ch__$1,meta32250__$1,___$2,fn1__$1,meta32253));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32252(self__.map_LT_,self__.f,self__.ch,self__.meta32250,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21577__auto__ = ret;
if(cljs.core.truth_(and__21577__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21577__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32250","meta32250",-1353888277,null)], null);
});

cljs.core.async.t_cljs$core$async32249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32249";

cljs.core.async.t_cljs$core$async32249.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async32249");
});

cljs.core.async.__GT_t_cljs$core$async32249 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32249(map_LT___$1,f__$1,ch__$1,meta32250){
return (new cljs.core.async.t_cljs$core$async32249(map_LT___$1,f__$1,ch__$1,meta32250));
});

}

return (new cljs.core.async.t_cljs$core$async32249(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32258 = (function (map_GT_,f,ch,meta32259){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32259 = meta32259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32260,meta32259__$1){
var self__ = this;
var _32260__$1 = this;
return (new cljs.core.async.t_cljs$core$async32258(self__.map_GT_,self__.f,self__.ch,meta32259__$1));
});

cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32260){
var self__ = this;
var _32260__$1 = this;
return self__.meta32259;
});

cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32259","meta32259",-450042833,null)], null);
});

cljs.core.async.t_cljs$core$async32258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32258";

cljs.core.async.t_cljs$core$async32258.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async32258");
});

cljs.core.async.__GT_t_cljs$core$async32258 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32258(map_GT___$1,f__$1,ch__$1,meta32259){
return (new cljs.core.async.t_cljs$core$async32258(map_GT___$1,f__$1,ch__$1,meta32259));
});

}

return (new cljs.core.async.t_cljs$core$async32258(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32264 = (function (filter_GT_,p,ch,meta32265){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32265 = meta32265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32266,meta32265__$1){
var self__ = this;
var _32266__$1 = this;
return (new cljs.core.async.t_cljs$core$async32264(self__.filter_GT_,self__.p,self__.ch,meta32265__$1));
});

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32266){
var self__ = this;
var _32266__$1 = this;
return self__.meta32265;
});

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32265","meta32265",-1918300522,null)], null);
});

cljs.core.async.t_cljs$core$async32264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32264";

cljs.core.async.t_cljs$core$async32264.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"cljs.core.async/t_cljs$core$async32264");
});

cljs.core.async.__GT_t_cljs$core$async32264 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32264(filter_GT___$1,p__$1,ch__$1,meta32265){
return (new cljs.core.async.t_cljs$core$async32264(filter_GT___$1,p__$1,ch__$1,meta32265));
});

}

return (new cljs.core.async.t_cljs$core$async32264(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32267 = [];
var len__22772__auto___32311 = arguments.length;
var i__22773__auto___32312 = (0);
while(true){
if((i__22773__auto___32312 < len__22772__auto___32311)){
args32267.push((arguments[i__22773__auto___32312]));

var G__32313 = (i__22773__auto___32312 + (1));
i__22773__auto___32312 = G__32313;
continue;
} else {
}
break;
}

var G__32269 = args32267.length;
switch (G__32269) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32267.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32315,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___32315,out){
return (function (state_32290){
var state_val_32291 = (state_32290[(1)]);
if((state_val_32291 === (7))){
var inst_32286 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32292_32316 = state_32290__$1;
(statearr_32292_32316[(2)] = inst_32286);

(statearr_32292_32316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (1))){
var state_32290__$1 = state_32290;
var statearr_32293_32317 = state_32290__$1;
(statearr_32293_32317[(2)] = null);

(statearr_32293_32317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (4))){
var inst_32272 = (state_32290[(7)]);
var inst_32272__$1 = (state_32290[(2)]);
var inst_32273 = (inst_32272__$1 == null);
var state_32290__$1 = (function (){var statearr_32294 = state_32290;
(statearr_32294[(7)] = inst_32272__$1);

return statearr_32294;
})();
if(cljs.core.truth_(inst_32273)){
var statearr_32295_32318 = state_32290__$1;
(statearr_32295_32318[(1)] = (5));

} else {
var statearr_32296_32319 = state_32290__$1;
(statearr_32296_32319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (6))){
var inst_32272 = (state_32290[(7)]);
var inst_32277 = p.call(null,inst_32272);
var state_32290__$1 = state_32290;
if(cljs.core.truth_(inst_32277)){
var statearr_32297_32320 = state_32290__$1;
(statearr_32297_32320[(1)] = (8));

} else {
var statearr_32298_32321 = state_32290__$1;
(statearr_32298_32321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (3))){
var inst_32288 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32290__$1,inst_32288);
} else {
if((state_val_32291 === (2))){
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32290__$1,(4),ch);
} else {
if((state_val_32291 === (11))){
var inst_32280 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32299_32322 = state_32290__$1;
(statearr_32299_32322[(2)] = inst_32280);

(statearr_32299_32322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (9))){
var state_32290__$1 = state_32290;
var statearr_32300_32323 = state_32290__$1;
(statearr_32300_32323[(2)] = null);

(statearr_32300_32323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (5))){
var inst_32275 = cljs.core.async.close_BANG_.call(null,out);
var state_32290__$1 = state_32290;
var statearr_32301_32324 = state_32290__$1;
(statearr_32301_32324[(2)] = inst_32275);

(statearr_32301_32324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (10))){
var inst_32283 = (state_32290[(2)]);
var state_32290__$1 = (function (){var statearr_32302 = state_32290;
(statearr_32302[(8)] = inst_32283);

return statearr_32302;
})();
var statearr_32303_32325 = state_32290__$1;
(statearr_32303_32325[(2)] = null);

(statearr_32303_32325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (8))){
var inst_32272 = (state_32290[(7)]);
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32290__$1,(11),out,inst_32272);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___32315,out))
;
return ((function (switch__29915__auto__,c__30029__auto___32315,out){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_32307 = [null,null,null,null,null,null,null,null,null];
(statearr_32307[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_32307[(1)] = (1));

return statearr_32307;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_32290){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32308){if((e32308 instanceof Object)){
var ex__29919__auto__ = e32308;
var statearr_32309_32326 = state_32290;
(statearr_32309_32326[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32327 = state_32290;
state_32290 = G__32327;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_32290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_32290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___32315,out))
})();
var state__30031__auto__ = (function (){var statearr_32310 = f__30030__auto__.call(null);
(statearr_32310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32315);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32315,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32328 = [];
var len__22772__auto___32331 = arguments.length;
var i__22773__auto___32332 = (0);
while(true){
if((i__22773__auto___32332 < len__22772__auto___32331)){
args32328.push((arguments[i__22773__auto___32332]));

var G__32333 = (i__22773__auto___32332 + (1));
i__22773__auto___32332 = G__32333;
continue;
} else {
}
break;
}

var G__32330 = args32328.length;
switch (G__32330) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32328.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__){
return (function (state_32500){
var state_val_32501 = (state_32500[(1)]);
if((state_val_32501 === (7))){
var inst_32496 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32502_32543 = state_32500__$1;
(statearr_32502_32543[(2)] = inst_32496);

(statearr_32502_32543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (20))){
var inst_32466 = (state_32500[(7)]);
var inst_32477 = (state_32500[(2)]);
var inst_32478 = cljs.core.next.call(null,inst_32466);
var inst_32452 = inst_32478;
var inst_32453 = null;
var inst_32454 = (0);
var inst_32455 = (0);
var state_32500__$1 = (function (){var statearr_32503 = state_32500;
(statearr_32503[(8)] = inst_32454);

(statearr_32503[(9)] = inst_32453);

(statearr_32503[(10)] = inst_32477);

(statearr_32503[(11)] = inst_32452);

(statearr_32503[(12)] = inst_32455);

return statearr_32503;
})();
var statearr_32504_32544 = state_32500__$1;
(statearr_32504_32544[(2)] = null);

(statearr_32504_32544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (1))){
var state_32500__$1 = state_32500;
var statearr_32505_32545 = state_32500__$1;
(statearr_32505_32545[(2)] = null);

(statearr_32505_32545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (4))){
var inst_32441 = (state_32500[(13)]);
var inst_32441__$1 = (state_32500[(2)]);
var inst_32442 = (inst_32441__$1 == null);
var state_32500__$1 = (function (){var statearr_32506 = state_32500;
(statearr_32506[(13)] = inst_32441__$1);

return statearr_32506;
})();
if(cljs.core.truth_(inst_32442)){
var statearr_32507_32546 = state_32500__$1;
(statearr_32507_32546[(1)] = (5));

} else {
var statearr_32508_32547 = state_32500__$1;
(statearr_32508_32547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (15))){
var state_32500__$1 = state_32500;
var statearr_32512_32548 = state_32500__$1;
(statearr_32512_32548[(2)] = null);

(statearr_32512_32548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (21))){
var state_32500__$1 = state_32500;
var statearr_32513_32549 = state_32500__$1;
(statearr_32513_32549[(2)] = null);

(statearr_32513_32549[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (13))){
var inst_32454 = (state_32500[(8)]);
var inst_32453 = (state_32500[(9)]);
var inst_32452 = (state_32500[(11)]);
var inst_32455 = (state_32500[(12)]);
var inst_32462 = (state_32500[(2)]);
var inst_32463 = (inst_32455 + (1));
var tmp32509 = inst_32454;
var tmp32510 = inst_32453;
var tmp32511 = inst_32452;
var inst_32452__$1 = tmp32511;
var inst_32453__$1 = tmp32510;
var inst_32454__$1 = tmp32509;
var inst_32455__$1 = inst_32463;
var state_32500__$1 = (function (){var statearr_32514 = state_32500;
(statearr_32514[(14)] = inst_32462);

(statearr_32514[(8)] = inst_32454__$1);

(statearr_32514[(9)] = inst_32453__$1);

(statearr_32514[(11)] = inst_32452__$1);

(statearr_32514[(12)] = inst_32455__$1);

return statearr_32514;
})();
var statearr_32515_32550 = state_32500__$1;
(statearr_32515_32550[(2)] = null);

(statearr_32515_32550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (22))){
var state_32500__$1 = state_32500;
var statearr_32516_32551 = state_32500__$1;
(statearr_32516_32551[(2)] = null);

(statearr_32516_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (6))){
var inst_32441 = (state_32500[(13)]);
var inst_32450 = f.call(null,inst_32441);
var inst_32451 = cljs.core.seq.call(null,inst_32450);
var inst_32452 = inst_32451;
var inst_32453 = null;
var inst_32454 = (0);
var inst_32455 = (0);
var state_32500__$1 = (function (){var statearr_32517 = state_32500;
(statearr_32517[(8)] = inst_32454);

(statearr_32517[(9)] = inst_32453);

(statearr_32517[(11)] = inst_32452);

(statearr_32517[(12)] = inst_32455);

return statearr_32517;
})();
var statearr_32518_32552 = state_32500__$1;
(statearr_32518_32552[(2)] = null);

(statearr_32518_32552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (17))){
var inst_32466 = (state_32500[(7)]);
var inst_32470 = cljs.core.chunk_first.call(null,inst_32466);
var inst_32471 = cljs.core.chunk_rest.call(null,inst_32466);
var inst_32472 = cljs.core.count.call(null,inst_32470);
var inst_32452 = inst_32471;
var inst_32453 = inst_32470;
var inst_32454 = inst_32472;
var inst_32455 = (0);
var state_32500__$1 = (function (){var statearr_32519 = state_32500;
(statearr_32519[(8)] = inst_32454);

(statearr_32519[(9)] = inst_32453);

(statearr_32519[(11)] = inst_32452);

(statearr_32519[(12)] = inst_32455);

return statearr_32519;
})();
var statearr_32520_32553 = state_32500__$1;
(statearr_32520_32553[(2)] = null);

(statearr_32520_32553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (3))){
var inst_32498 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32500__$1,inst_32498);
} else {
if((state_val_32501 === (12))){
var inst_32486 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32521_32554 = state_32500__$1;
(statearr_32521_32554[(2)] = inst_32486);

(statearr_32521_32554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (2))){
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32500__$1,(4),in$);
} else {
if((state_val_32501 === (23))){
var inst_32494 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32522_32555 = state_32500__$1;
(statearr_32522_32555[(2)] = inst_32494);

(statearr_32522_32555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (19))){
var inst_32481 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32523_32556 = state_32500__$1;
(statearr_32523_32556[(2)] = inst_32481);

(statearr_32523_32556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (11))){
var inst_32466 = (state_32500[(7)]);
var inst_32452 = (state_32500[(11)]);
var inst_32466__$1 = cljs.core.seq.call(null,inst_32452);
var state_32500__$1 = (function (){var statearr_32524 = state_32500;
(statearr_32524[(7)] = inst_32466__$1);

return statearr_32524;
})();
if(inst_32466__$1){
var statearr_32525_32557 = state_32500__$1;
(statearr_32525_32557[(1)] = (14));

} else {
var statearr_32526_32558 = state_32500__$1;
(statearr_32526_32558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (9))){
var inst_32488 = (state_32500[(2)]);
var inst_32489 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32500__$1 = (function (){var statearr_32527 = state_32500;
(statearr_32527[(15)] = inst_32488);

return statearr_32527;
})();
if(cljs.core.truth_(inst_32489)){
var statearr_32528_32559 = state_32500__$1;
(statearr_32528_32559[(1)] = (21));

} else {
var statearr_32529_32560 = state_32500__$1;
(statearr_32529_32560[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (5))){
var inst_32444 = cljs.core.async.close_BANG_.call(null,out);
var state_32500__$1 = state_32500;
var statearr_32530_32561 = state_32500__$1;
(statearr_32530_32561[(2)] = inst_32444);

(statearr_32530_32561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (14))){
var inst_32466 = (state_32500[(7)]);
var inst_32468 = cljs.core.chunked_seq_QMARK_.call(null,inst_32466);
var state_32500__$1 = state_32500;
if(inst_32468){
var statearr_32531_32562 = state_32500__$1;
(statearr_32531_32562[(1)] = (17));

} else {
var statearr_32532_32563 = state_32500__$1;
(statearr_32532_32563[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (16))){
var inst_32484 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32533_32564 = state_32500__$1;
(statearr_32533_32564[(2)] = inst_32484);

(statearr_32533_32564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (10))){
var inst_32453 = (state_32500[(9)]);
var inst_32455 = (state_32500[(12)]);
var inst_32460 = cljs.core._nth.call(null,inst_32453,inst_32455);
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32500__$1,(13),out,inst_32460);
} else {
if((state_val_32501 === (18))){
var inst_32466 = (state_32500[(7)]);
var inst_32475 = cljs.core.first.call(null,inst_32466);
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32500__$1,(20),out,inst_32475);
} else {
if((state_val_32501 === (8))){
var inst_32454 = (state_32500[(8)]);
var inst_32455 = (state_32500[(12)]);
var inst_32457 = (inst_32455 < inst_32454);
var inst_32458 = inst_32457;
var state_32500__$1 = state_32500;
if(cljs.core.truth_(inst_32458)){
var statearr_32534_32565 = state_32500__$1;
(statearr_32534_32565[(1)] = (10));

} else {
var statearr_32535_32566 = state_32500__$1;
(statearr_32535_32566[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto__))
;
return ((function (switch__29915__auto__,c__30029__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29916__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29916__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29916__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29916__auto____1 = (function (state_32500){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__29919__auto__ = e32540;
var statearr_32541_32567 = state_32500;
(statearr_32541_32567[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32568 = state_32500;
state_32500 = G__32568;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29916__auto__ = function(state_32500){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29916__auto____1.call(this,state_32500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29916__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29916__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_32542 = f__30030__auto__.call(null);
(statearr_32542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32569 = [];
var len__22772__auto___32572 = arguments.length;
var i__22773__auto___32573 = (0);
while(true){
if((i__22773__auto___32573 < len__22772__auto___32572)){
args32569.push((arguments[i__22773__auto___32573]));

var G__32574 = (i__22773__auto___32573 + (1));
i__22773__auto___32573 = G__32574;
continue;
} else {
}
break;
}

var G__32571 = args32569.length;
switch (G__32571) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32569.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32576 = [];
var len__22772__auto___32579 = arguments.length;
var i__22773__auto___32580 = (0);
while(true){
if((i__22773__auto___32580 < len__22772__auto___32579)){
args32576.push((arguments[i__22773__auto___32580]));

var G__32581 = (i__22773__auto___32580 + (1));
i__22773__auto___32580 = G__32581;
continue;
} else {
}
break;
}

var G__32578 = args32576.length;
switch (G__32578) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32576.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32583 = [];
var len__22772__auto___32634 = arguments.length;
var i__22773__auto___32635 = (0);
while(true){
if((i__22773__auto___32635 < len__22772__auto___32634)){
args32583.push((arguments[i__22773__auto___32635]));

var G__32636 = (i__22773__auto___32635 + (1));
i__22773__auto___32635 = G__32636;
continue;
} else {
}
break;
}

var G__32585 = args32583.length;
switch (G__32585) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32583.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32638,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___32638,out){
return (function (state_32609){
var state_val_32610 = (state_32609[(1)]);
if((state_val_32610 === (7))){
var inst_32604 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32611_32639 = state_32609__$1;
(statearr_32611_32639[(2)] = inst_32604);

(statearr_32611_32639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (1))){
var inst_32586 = null;
var state_32609__$1 = (function (){var statearr_32612 = state_32609;
(statearr_32612[(7)] = inst_32586);

return statearr_32612;
})();
var statearr_32613_32640 = state_32609__$1;
(statearr_32613_32640[(2)] = null);

(statearr_32613_32640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (4))){
var inst_32589 = (state_32609[(8)]);
var inst_32589__$1 = (state_32609[(2)]);
var inst_32590 = (inst_32589__$1 == null);
var inst_32591 = cljs.core.not.call(null,inst_32590);
var state_32609__$1 = (function (){var statearr_32614 = state_32609;
(statearr_32614[(8)] = inst_32589__$1);

return statearr_32614;
})();
if(inst_32591){
var statearr_32615_32641 = state_32609__$1;
(statearr_32615_32641[(1)] = (5));

} else {
var statearr_32616_32642 = state_32609__$1;
(statearr_32616_32642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (6))){
var state_32609__$1 = state_32609;
var statearr_32617_32643 = state_32609__$1;
(statearr_32617_32643[(2)] = null);

(statearr_32617_32643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (3))){
var inst_32606 = (state_32609[(2)]);
var inst_32607 = cljs.core.async.close_BANG_.call(null,out);
var state_32609__$1 = (function (){var statearr_32618 = state_32609;
(statearr_32618[(9)] = inst_32606);

return statearr_32618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32609__$1,inst_32607);
} else {
if((state_val_32610 === (2))){
var state_32609__$1 = state_32609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32609__$1,(4),ch);
} else {
if((state_val_32610 === (11))){
var inst_32589 = (state_32609[(8)]);
var inst_32598 = (state_32609[(2)]);
var inst_32586 = inst_32589;
var state_32609__$1 = (function (){var statearr_32619 = state_32609;
(statearr_32619[(7)] = inst_32586);

(statearr_32619[(10)] = inst_32598);

return statearr_32619;
})();
var statearr_32620_32644 = state_32609__$1;
(statearr_32620_32644[(2)] = null);

(statearr_32620_32644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (9))){
var inst_32589 = (state_32609[(8)]);
var state_32609__$1 = state_32609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32609__$1,(11),out,inst_32589);
} else {
if((state_val_32610 === (5))){
var inst_32586 = (state_32609[(7)]);
var inst_32589 = (state_32609[(8)]);
var inst_32593 = cljs.core._EQ_.call(null,inst_32589,inst_32586);
var state_32609__$1 = state_32609;
if(inst_32593){
var statearr_32622_32645 = state_32609__$1;
(statearr_32622_32645[(1)] = (8));

} else {
var statearr_32623_32646 = state_32609__$1;
(statearr_32623_32646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (10))){
var inst_32601 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32624_32647 = state_32609__$1;
(statearr_32624_32647[(2)] = inst_32601);

(statearr_32624_32647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (8))){
var inst_32586 = (state_32609[(7)]);
var tmp32621 = inst_32586;
var inst_32586__$1 = tmp32621;
var state_32609__$1 = (function (){var statearr_32625 = state_32609;
(statearr_32625[(7)] = inst_32586__$1);

return statearr_32625;
})();
var statearr_32626_32648 = state_32609__$1;
(statearr_32626_32648[(2)] = null);

(statearr_32626_32648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___32638,out))
;
return ((function (switch__29915__auto__,c__30029__auto___32638,out){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_32630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32630[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_32630[(1)] = (1));

return statearr_32630;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_32609){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32631){if((e32631 instanceof Object)){
var ex__29919__auto__ = e32631;
var statearr_32632_32649 = state_32609;
(statearr_32632_32649[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32650 = state_32609;
state_32609 = G__32650;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_32609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_32609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___32638,out))
})();
var state__30031__auto__ = (function (){var statearr_32633 = f__30030__auto__.call(null);
(statearr_32633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32638);

return statearr_32633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32638,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32651 = [];
var len__22772__auto___32721 = arguments.length;
var i__22773__auto___32722 = (0);
while(true){
if((i__22773__auto___32722 < len__22772__auto___32721)){
args32651.push((arguments[i__22773__auto___32722]));

var G__32723 = (i__22773__auto___32722 + (1));
i__22773__auto___32722 = G__32723;
continue;
} else {
}
break;
}

var G__32653 = args32651.length;
switch (G__32653) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32651.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32725,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___32725,out){
return (function (state_32691){
var state_val_32692 = (state_32691[(1)]);
if((state_val_32692 === (7))){
var inst_32687 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32693_32726 = state_32691__$1;
(statearr_32693_32726[(2)] = inst_32687);

(statearr_32693_32726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (1))){
var inst_32654 = (new Array(n));
var inst_32655 = inst_32654;
var inst_32656 = (0);
var state_32691__$1 = (function (){var statearr_32694 = state_32691;
(statearr_32694[(7)] = inst_32655);

(statearr_32694[(8)] = inst_32656);

return statearr_32694;
})();
var statearr_32695_32727 = state_32691__$1;
(statearr_32695_32727[(2)] = null);

(statearr_32695_32727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (4))){
var inst_32659 = (state_32691[(9)]);
var inst_32659__$1 = (state_32691[(2)]);
var inst_32660 = (inst_32659__$1 == null);
var inst_32661 = cljs.core.not.call(null,inst_32660);
var state_32691__$1 = (function (){var statearr_32696 = state_32691;
(statearr_32696[(9)] = inst_32659__$1);

return statearr_32696;
})();
if(inst_32661){
var statearr_32697_32728 = state_32691__$1;
(statearr_32697_32728[(1)] = (5));

} else {
var statearr_32698_32729 = state_32691__$1;
(statearr_32698_32729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (15))){
var inst_32681 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32699_32730 = state_32691__$1;
(statearr_32699_32730[(2)] = inst_32681);

(statearr_32699_32730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (13))){
var state_32691__$1 = state_32691;
var statearr_32700_32731 = state_32691__$1;
(statearr_32700_32731[(2)] = null);

(statearr_32700_32731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (6))){
var inst_32656 = (state_32691[(8)]);
var inst_32677 = (inst_32656 > (0));
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32677)){
var statearr_32701_32732 = state_32691__$1;
(statearr_32701_32732[(1)] = (12));

} else {
var statearr_32702_32733 = state_32691__$1;
(statearr_32702_32733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (3))){
var inst_32689 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32691__$1,inst_32689);
} else {
if((state_val_32692 === (12))){
var inst_32655 = (state_32691[(7)]);
var inst_32679 = cljs.core.vec.call(null,inst_32655);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32691__$1,(15),out,inst_32679);
} else {
if((state_val_32692 === (2))){
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32691__$1,(4),ch);
} else {
if((state_val_32692 === (11))){
var inst_32671 = (state_32691[(2)]);
var inst_32672 = (new Array(n));
var inst_32655 = inst_32672;
var inst_32656 = (0);
var state_32691__$1 = (function (){var statearr_32703 = state_32691;
(statearr_32703[(7)] = inst_32655);

(statearr_32703[(10)] = inst_32671);

(statearr_32703[(8)] = inst_32656);

return statearr_32703;
})();
var statearr_32704_32734 = state_32691__$1;
(statearr_32704_32734[(2)] = null);

(statearr_32704_32734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (9))){
var inst_32655 = (state_32691[(7)]);
var inst_32669 = cljs.core.vec.call(null,inst_32655);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32691__$1,(11),out,inst_32669);
} else {
if((state_val_32692 === (5))){
var inst_32655 = (state_32691[(7)]);
var inst_32659 = (state_32691[(9)]);
var inst_32664 = (state_32691[(11)]);
var inst_32656 = (state_32691[(8)]);
var inst_32663 = (inst_32655[inst_32656] = inst_32659);
var inst_32664__$1 = (inst_32656 + (1));
var inst_32665 = (inst_32664__$1 < n);
var state_32691__$1 = (function (){var statearr_32705 = state_32691;
(statearr_32705[(12)] = inst_32663);

(statearr_32705[(11)] = inst_32664__$1);

return statearr_32705;
})();
if(cljs.core.truth_(inst_32665)){
var statearr_32706_32735 = state_32691__$1;
(statearr_32706_32735[(1)] = (8));

} else {
var statearr_32707_32736 = state_32691__$1;
(statearr_32707_32736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (14))){
var inst_32684 = (state_32691[(2)]);
var inst_32685 = cljs.core.async.close_BANG_.call(null,out);
var state_32691__$1 = (function (){var statearr_32709 = state_32691;
(statearr_32709[(13)] = inst_32684);

return statearr_32709;
})();
var statearr_32710_32737 = state_32691__$1;
(statearr_32710_32737[(2)] = inst_32685);

(statearr_32710_32737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (10))){
var inst_32675 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32711_32738 = state_32691__$1;
(statearr_32711_32738[(2)] = inst_32675);

(statearr_32711_32738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (8))){
var inst_32655 = (state_32691[(7)]);
var inst_32664 = (state_32691[(11)]);
var tmp32708 = inst_32655;
var inst_32655__$1 = tmp32708;
var inst_32656 = inst_32664;
var state_32691__$1 = (function (){var statearr_32712 = state_32691;
(statearr_32712[(7)] = inst_32655__$1);

(statearr_32712[(8)] = inst_32656);

return statearr_32712;
})();
var statearr_32713_32739 = state_32691__$1;
(statearr_32713_32739[(2)] = null);

(statearr_32713_32739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___32725,out))
;
return ((function (switch__29915__auto__,c__30029__auto___32725,out){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_32717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32717[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_32717[(1)] = (1));

return statearr_32717;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_32691){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32718){if((e32718 instanceof Object)){
var ex__29919__auto__ = e32718;
var statearr_32719_32740 = state_32691;
(statearr_32719_32740[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32741 = state_32691;
state_32691 = G__32741;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_32691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_32691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___32725,out))
})();
var state__30031__auto__ = (function (){var statearr_32720 = f__30030__auto__.call(null);
(statearr_32720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32725);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32725,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32742 = [];
var len__22772__auto___32816 = arguments.length;
var i__22773__auto___32817 = (0);
while(true){
if((i__22773__auto___32817 < len__22772__auto___32816)){
args32742.push((arguments[i__22773__auto___32817]));

var G__32818 = (i__22773__auto___32817 + (1));
i__22773__auto___32817 = G__32818;
continue;
} else {
}
break;
}

var G__32744 = args32742.length;
switch (G__32744) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32742.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32820,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___32820,out){
return (function (state_32786){
var state_val_32787 = (state_32786[(1)]);
if((state_val_32787 === (7))){
var inst_32782 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32788_32821 = state_32786__$1;
(statearr_32788_32821[(2)] = inst_32782);

(statearr_32788_32821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (1))){
var inst_32745 = [];
var inst_32746 = inst_32745;
var inst_32747 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32786__$1 = (function (){var statearr_32789 = state_32786;
(statearr_32789[(7)] = inst_32746);

(statearr_32789[(8)] = inst_32747);

return statearr_32789;
})();
var statearr_32790_32822 = state_32786__$1;
(statearr_32790_32822[(2)] = null);

(statearr_32790_32822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (4))){
var inst_32750 = (state_32786[(9)]);
var inst_32750__$1 = (state_32786[(2)]);
var inst_32751 = (inst_32750__$1 == null);
var inst_32752 = cljs.core.not.call(null,inst_32751);
var state_32786__$1 = (function (){var statearr_32791 = state_32786;
(statearr_32791[(9)] = inst_32750__$1);

return statearr_32791;
})();
if(inst_32752){
var statearr_32792_32823 = state_32786__$1;
(statearr_32792_32823[(1)] = (5));

} else {
var statearr_32793_32824 = state_32786__$1;
(statearr_32793_32824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (15))){
var inst_32776 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32794_32825 = state_32786__$1;
(statearr_32794_32825[(2)] = inst_32776);

(statearr_32794_32825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (13))){
var state_32786__$1 = state_32786;
var statearr_32795_32826 = state_32786__$1;
(statearr_32795_32826[(2)] = null);

(statearr_32795_32826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (6))){
var inst_32746 = (state_32786[(7)]);
var inst_32771 = inst_32746.length;
var inst_32772 = (inst_32771 > (0));
var state_32786__$1 = state_32786;
if(cljs.core.truth_(inst_32772)){
var statearr_32796_32827 = state_32786__$1;
(statearr_32796_32827[(1)] = (12));

} else {
var statearr_32797_32828 = state_32786__$1;
(statearr_32797_32828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (3))){
var inst_32784 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32786__$1,inst_32784);
} else {
if((state_val_32787 === (12))){
var inst_32746 = (state_32786[(7)]);
var inst_32774 = cljs.core.vec.call(null,inst_32746);
var state_32786__$1 = state_32786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32786__$1,(15),out,inst_32774);
} else {
if((state_val_32787 === (2))){
var state_32786__$1 = state_32786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32786__$1,(4),ch);
} else {
if((state_val_32787 === (11))){
var inst_32750 = (state_32786[(9)]);
var inst_32754 = (state_32786[(10)]);
var inst_32764 = (state_32786[(2)]);
var inst_32765 = [];
var inst_32766 = inst_32765.push(inst_32750);
var inst_32746 = inst_32765;
var inst_32747 = inst_32754;
var state_32786__$1 = (function (){var statearr_32798 = state_32786;
(statearr_32798[(11)] = inst_32766);

(statearr_32798[(12)] = inst_32764);

(statearr_32798[(7)] = inst_32746);

(statearr_32798[(8)] = inst_32747);

return statearr_32798;
})();
var statearr_32799_32829 = state_32786__$1;
(statearr_32799_32829[(2)] = null);

(statearr_32799_32829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (9))){
var inst_32746 = (state_32786[(7)]);
var inst_32762 = cljs.core.vec.call(null,inst_32746);
var state_32786__$1 = state_32786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32786__$1,(11),out,inst_32762);
} else {
if((state_val_32787 === (5))){
var inst_32750 = (state_32786[(9)]);
var inst_32754 = (state_32786[(10)]);
var inst_32747 = (state_32786[(8)]);
var inst_32754__$1 = f.call(null,inst_32750);
var inst_32755 = cljs.core._EQ_.call(null,inst_32754__$1,inst_32747);
var inst_32756 = cljs.core.keyword_identical_QMARK_.call(null,inst_32747,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32757 = (inst_32755) || (inst_32756);
var state_32786__$1 = (function (){var statearr_32800 = state_32786;
(statearr_32800[(10)] = inst_32754__$1);

return statearr_32800;
})();
if(cljs.core.truth_(inst_32757)){
var statearr_32801_32830 = state_32786__$1;
(statearr_32801_32830[(1)] = (8));

} else {
var statearr_32802_32831 = state_32786__$1;
(statearr_32802_32831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (14))){
var inst_32779 = (state_32786[(2)]);
var inst_32780 = cljs.core.async.close_BANG_.call(null,out);
var state_32786__$1 = (function (){var statearr_32804 = state_32786;
(statearr_32804[(13)] = inst_32779);

return statearr_32804;
})();
var statearr_32805_32832 = state_32786__$1;
(statearr_32805_32832[(2)] = inst_32780);

(statearr_32805_32832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (10))){
var inst_32769 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32806_32833 = state_32786__$1;
(statearr_32806_32833[(2)] = inst_32769);

(statearr_32806_32833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (8))){
var inst_32750 = (state_32786[(9)]);
var inst_32754 = (state_32786[(10)]);
var inst_32746 = (state_32786[(7)]);
var inst_32759 = inst_32746.push(inst_32750);
var tmp32803 = inst_32746;
var inst_32746__$1 = tmp32803;
var inst_32747 = inst_32754;
var state_32786__$1 = (function (){var statearr_32807 = state_32786;
(statearr_32807[(14)] = inst_32759);

(statearr_32807[(7)] = inst_32746__$1);

(statearr_32807[(8)] = inst_32747);

return statearr_32807;
})();
var statearr_32808_32834 = state_32786__$1;
(statearr_32808_32834[(2)] = null);

(statearr_32808_32834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30029__auto___32820,out))
;
return ((function (switch__29915__auto__,c__30029__auto___32820,out){
return (function() {
var cljs$core$async$state_machine__29916__auto__ = null;
var cljs$core$async$state_machine__29916__auto____0 = (function (){
var statearr_32812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32812[(0)] = cljs$core$async$state_machine__29916__auto__);

(statearr_32812[(1)] = (1));

return statearr_32812;
});
var cljs$core$async$state_machine__29916__auto____1 = (function (state_32786){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_32786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e32813){if((e32813 instanceof Object)){
var ex__29919__auto__ = e32813;
var statearr_32814_32835 = state_32786;
(statearr_32814_32835[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32836 = state_32786;
state_32786 = G__32836;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cljs$core$async$state_machine__29916__auto__ = function(state_32786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29916__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29916__auto____1.call(this,state_32786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29916__auto____0;
cljs$core$async$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29916__auto____1;
return cljs$core$async$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___32820,out))
})();
var state__30031__auto__ = (function (){var statearr_32815 = f__30030__auto__.call(null);
(statearr_32815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32820);

return statearr_32815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32820,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471419415027