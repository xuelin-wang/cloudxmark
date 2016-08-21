// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args31954 = [];
var len__22773__auto___31960 = arguments.length;
var i__22774__auto___31961 = (0);
while(true){
if((i__22774__auto___31961 < len__22773__auto___31960)){
args31954.push((arguments[i__22774__auto___31961]));

var G__31962 = (i__22774__auto___31961 + (1));
i__22774__auto___31961 = G__31962;
continue;
} else {
}
break;
}

var G__31956 = args31954.length;
switch (G__31956) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31954.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31957 = (function (f,blockable,meta31958){
this.f = f;
this.blockable = blockable;
this.meta31958 = meta31958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31959,meta31958__$1){
var self__ = this;
var _31959__$1 = this;
return (new cljs.core.async.t_cljs$core$async31957(self__.f,self__.blockable,meta31958__$1));
});

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31959){
var self__ = this;
var _31959__$1 = this;
return self__.meta31958;
});

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31958","meta31958",219323704,null)], null);
});

cljs.core.async.t_cljs$core$async31957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31957";

cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async31957");
});

cljs.core.async.__GT_t_cljs$core$async31957 = (function cljs$core$async$__GT_t_cljs$core$async31957(f__$1,blockable__$1,meta31958){
return (new cljs.core.async.t_cljs$core$async31957(f__$1,blockable__$1,meta31958));
});

}

return (new cljs.core.async.t_cljs$core$async31957(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31966 = [];
var len__22773__auto___31969 = arguments.length;
var i__22774__auto___31970 = (0);
while(true){
if((i__22774__auto___31970 < len__22773__auto___31969)){
args31966.push((arguments[i__22774__auto___31970]));

var G__31971 = (i__22774__auto___31970 + (1));
i__22774__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var G__31968 = args31966.length;
switch (G__31968) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31966.length)].join('')));

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
var args31973 = [];
var len__22773__auto___31976 = arguments.length;
var i__22774__auto___31977 = (0);
while(true){
if((i__22774__auto___31977 < len__22773__auto___31976)){
args31973.push((arguments[i__22774__auto___31977]));

var G__31978 = (i__22774__auto___31977 + (1));
i__22774__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var G__31975 = args31973.length;
switch (G__31975) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31973.length)].join('')));

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
var args31980 = [];
var len__22773__auto___31983 = arguments.length;
var i__22774__auto___31984 = (0);
while(true){
if((i__22774__auto___31984 < len__22773__auto___31983)){
args31980.push((arguments[i__22774__auto___31984]));

var G__31985 = (i__22774__auto___31984 + (1));
i__22774__auto___31984 = G__31985;
continue;
} else {
}
break;
}

var G__31982 = args31980.length;
switch (G__31982) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31980.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31987 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31987);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31987,ret){
return (function (){
return fn1.call(null,val_31987);
});})(val_31987,ret))
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
var args31988 = [];
var len__22773__auto___31991 = arguments.length;
var i__22774__auto___31992 = (0);
while(true){
if((i__22774__auto___31992 < len__22773__auto___31991)){
args31988.push((arguments[i__22774__auto___31992]));

var G__31993 = (i__22774__auto___31992 + (1));
i__22774__auto___31992 = G__31993;
continue;
} else {
}
break;
}

var G__31990 = args31988.length;
switch (G__31990) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31988.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6550__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6550__auto__)){
var ret = temp__6550__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6550__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6550__auto__)){
var retb = temp__6550__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6550__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6550__auto__))
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
var n__22603__auto___31995 = n;
var x_31996 = (0);
while(true){
if((x_31996 < n__22603__auto___31995)){
(a[x_31996] = (0));

var G__31997 = (x_31996 + (1));
x_31996 = G__31997;
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

var G__31998 = (i + (1));
i = G__31998;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32002 = (function (alt_flag,flag,meta32003){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32003 = meta32003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32004,meta32003__$1){
var self__ = this;
var _32004__$1 = this;
return (new cljs.core.async.t_cljs$core$async32002(self__.alt_flag,self__.flag,meta32003__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32004){
var self__ = this;
var _32004__$1 = this;
return self__.meta32003;
});})(flag))
;

cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32002.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32003","meta32003",-434586424,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32002";

cljs.core.async.t_cljs$core$async32002.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async32002");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32002 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32002(alt_flag__$1,flag__$1,meta32003){
return (new cljs.core.async.t_cljs$core$async32002(alt_flag__$1,flag__$1,meta32003));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32002(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32008 = (function (alt_handler,flag,cb,meta32009){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32009 = meta32009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32010,meta32009__$1){
var self__ = this;
var _32010__$1 = this;
return (new cljs.core.async.t_cljs$core$async32008(self__.alt_handler,self__.flag,self__.cb,meta32009__$1));
});

cljs.core.async.t_cljs$core$async32008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32010){
var self__ = this;
var _32010__$1 = this;
return self__.meta32009;
});

cljs.core.async.t_cljs$core$async32008.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32008.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32009","meta32009",-309219596,null)], null);
});

cljs.core.async.t_cljs$core$async32008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32008";

cljs.core.async.t_cljs$core$async32008.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async32008");
});

cljs.core.async.__GT_t_cljs$core$async32008 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32008(alt_handler__$1,flag__$1,cb__$1,meta32009){
return (new cljs.core.async.t_cljs$core$async32008(alt_handler__$1,flag__$1,cb__$1,meta32009));
});

}

return (new cljs.core.async.t_cljs$core$async32008(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32011_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32011_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32012_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32012_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21590__auto__ = wport;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32013 = (i + (1));
i = G__32013;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21590__auto__ = ret;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6552__auto__ = (function (){var and__21578__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(temp__6552__auto__)){
var got = temp__6552__auto__;
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
var args__22780__auto__ = [];
var len__22773__auto___32019 = arguments.length;
var i__22774__auto___32020 = (0);
while(true){
if((i__22774__auto___32020 < len__22773__auto___32019)){
args__22780__auto__.push((arguments[i__22774__auto___32020]));

var G__32021 = (i__22774__auto___32020 + (1));
i__22774__auto___32020 = G__32021;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((1) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22781__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32016){
var map__32017 = p__32016;
var map__32017__$1 = ((((!((map__32017 == null)))?((((map__32017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32017):map__32017);
var opts = map__32017__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32014){
var G__32015 = cljs.core.first.call(null,seq32014);
var seq32014__$1 = cljs.core.next.call(null,seq32014);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32015,seq32014__$1);
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
var args32022 = [];
var len__22773__auto___32072 = arguments.length;
var i__22774__auto___32073 = (0);
while(true){
if((i__22774__auto___32073 < len__22773__auto___32072)){
args32022.push((arguments[i__22774__auto___32073]));

var G__32074 = (i__22774__auto___32073 + (1));
i__22774__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var G__32024 = args32022.length;
switch (G__32024) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32022.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31895__auto___32076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___32076){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___32076){
return (function (state_32048){
var state_val_32049 = (state_32048[(1)]);
if((state_val_32049 === (7))){
var inst_32044 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
var statearr_32050_32077 = state_32048__$1;
(statearr_32050_32077[(2)] = inst_32044);

(statearr_32050_32077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (1))){
var state_32048__$1 = state_32048;
var statearr_32051_32078 = state_32048__$1;
(statearr_32051_32078[(2)] = null);

(statearr_32051_32078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (4))){
var inst_32027 = (state_32048[(7)]);
var inst_32027__$1 = (state_32048[(2)]);
var inst_32028 = (inst_32027__$1 == null);
var state_32048__$1 = (function (){var statearr_32052 = state_32048;
(statearr_32052[(7)] = inst_32027__$1);

return statearr_32052;
})();
if(cljs.core.truth_(inst_32028)){
var statearr_32053_32079 = state_32048__$1;
(statearr_32053_32079[(1)] = (5));

} else {
var statearr_32054_32080 = state_32048__$1;
(statearr_32054_32080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (13))){
var state_32048__$1 = state_32048;
var statearr_32055_32081 = state_32048__$1;
(statearr_32055_32081[(2)] = null);

(statearr_32055_32081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (6))){
var inst_32027 = (state_32048[(7)]);
var state_32048__$1 = state_32048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32048__$1,(11),to,inst_32027);
} else {
if((state_val_32049 === (3))){
var inst_32046 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32048__$1,inst_32046);
} else {
if((state_val_32049 === (12))){
var state_32048__$1 = state_32048;
var statearr_32056_32082 = state_32048__$1;
(statearr_32056_32082[(2)] = null);

(statearr_32056_32082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (2))){
var state_32048__$1 = state_32048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32048__$1,(4),from);
} else {
if((state_val_32049 === (11))){
var inst_32037 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
if(cljs.core.truth_(inst_32037)){
var statearr_32057_32083 = state_32048__$1;
(statearr_32057_32083[(1)] = (12));

} else {
var statearr_32058_32084 = state_32048__$1;
(statearr_32058_32084[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (9))){
var state_32048__$1 = state_32048;
var statearr_32059_32085 = state_32048__$1;
(statearr_32059_32085[(2)] = null);

(statearr_32059_32085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (5))){
var state_32048__$1 = state_32048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32060_32086 = state_32048__$1;
(statearr_32060_32086[(1)] = (8));

} else {
var statearr_32061_32087 = state_32048__$1;
(statearr_32061_32087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (14))){
var inst_32042 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
var statearr_32062_32088 = state_32048__$1;
(statearr_32062_32088[(2)] = inst_32042);

(statearr_32062_32088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (10))){
var inst_32034 = (state_32048[(2)]);
var state_32048__$1 = state_32048;
var statearr_32063_32089 = state_32048__$1;
(statearr_32063_32089[(2)] = inst_32034);

(statearr_32063_32089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32049 === (8))){
var inst_32031 = cljs.core.async.close_BANG_.call(null,to);
var state_32048__$1 = state_32048;
var statearr_32064_32090 = state_32048__$1;
(statearr_32064_32090[(2)] = inst_32031);

(statearr_32064_32090[(1)] = (10));


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
});})(c__31895__auto___32076))
;
return ((function (switch__31781__auto__,c__31895__auto___32076){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_32068 = [null,null,null,null,null,null,null,null];
(statearr_32068[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_32068[(1)] = (1));

return statearr_32068;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_32048){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32069){if((e32069 instanceof Object)){
var ex__31785__auto__ = e32069;
var statearr_32070_32091 = state_32048;
(statearr_32070_32091[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32092 = state_32048;
state_32048 = G__32092;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_32048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_32048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___32076))
})();
var state__31897__auto__ = (function (){var statearr_32071 = f__31896__auto__.call(null);
(statearr_32071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___32076);

return statearr_32071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___32076))
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
return (function (p__32280){
var vec__32281 = p__32280;
var v = cljs.core.nth.call(null,vec__32281,(0),null);
var p = cljs.core.nth.call(null,vec__32281,(1),null);
var job = vec__32281;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31895__auto___32467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___32467,res,vec__32281,v,p,job,jobs,results){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___32467,res,vec__32281,v,p,job,jobs,results){
return (function (state_32288){
var state_val_32289 = (state_32288[(1)]);
if((state_val_32289 === (1))){
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32288__$1,(2),res,v);
} else {
if((state_val_32289 === (2))){
var inst_32285 = (state_32288[(2)]);
var inst_32286 = cljs.core.async.close_BANG_.call(null,res);
var state_32288__$1 = (function (){var statearr_32290 = state_32288;
(statearr_32290[(7)] = inst_32285);

return statearr_32290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32288__$1,inst_32286);
} else {
return null;
}
}
});})(c__31895__auto___32467,res,vec__32281,v,p,job,jobs,results))
;
return ((function (switch__31781__auto__,c__31895__auto___32467,res,vec__32281,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0 = (function (){
var statearr_32294 = [null,null,null,null,null,null,null,null];
(statearr_32294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__);

(statearr_32294[(1)] = (1));

return statearr_32294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1 = (function (state_32288){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32295){if((e32295 instanceof Object)){
var ex__31785__auto__ = e32295;
var statearr_32296_32468 = state_32288;
(statearr_32296_32468[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32469 = state_32288;
state_32288 = G__32469;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = function(state_32288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1.call(this,state_32288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___32467,res,vec__32281,v,p,job,jobs,results))
})();
var state__31897__auto__ = (function (){var statearr_32297 = f__31896__auto__.call(null);
(statearr_32297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___32467);

return statearr_32297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___32467,res,vec__32281,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32298){
var vec__32299 = p__32298;
var v = cljs.core.nth.call(null,vec__32299,(0),null);
var p = cljs.core.nth.call(null,vec__32299,(1),null);
var job = vec__32299;
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
var n__22603__auto___32470 = n;
var __32471 = (0);
while(true){
if((__32471 < n__22603__auto___32470)){
var G__32302_32472 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32302_32472) {
case "compute":
var c__31895__auto___32474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32471,c__31895__auto___32474,G__32302_32472,n__22603__auto___32470,jobs,results,process,async){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (__32471,c__31895__auto___32474,G__32302_32472,n__22603__auto___32470,jobs,results,process,async){
return (function (state_32315){
var state_val_32316 = (state_32315[(1)]);
if((state_val_32316 === (1))){
var state_32315__$1 = state_32315;
var statearr_32317_32475 = state_32315__$1;
(statearr_32317_32475[(2)] = null);

(statearr_32317_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32316 === (2))){
var state_32315__$1 = state_32315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32315__$1,(4),jobs);
} else {
if((state_val_32316 === (3))){
var inst_32313 = (state_32315[(2)]);
var state_32315__$1 = state_32315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32315__$1,inst_32313);
} else {
if((state_val_32316 === (4))){
var inst_32305 = (state_32315[(2)]);
var inst_32306 = process.call(null,inst_32305);
var state_32315__$1 = state_32315;
if(cljs.core.truth_(inst_32306)){
var statearr_32318_32476 = state_32315__$1;
(statearr_32318_32476[(1)] = (5));

} else {
var statearr_32319_32477 = state_32315__$1;
(statearr_32319_32477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32316 === (5))){
var state_32315__$1 = state_32315;
var statearr_32320_32478 = state_32315__$1;
(statearr_32320_32478[(2)] = null);

(statearr_32320_32478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32316 === (6))){
var state_32315__$1 = state_32315;
var statearr_32321_32479 = state_32315__$1;
(statearr_32321_32479[(2)] = null);

(statearr_32321_32479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32316 === (7))){
var inst_32311 = (state_32315[(2)]);
var state_32315__$1 = state_32315;
var statearr_32322_32480 = state_32315__$1;
(statearr_32322_32480[(2)] = inst_32311);

(statearr_32322_32480[(1)] = (3));


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
});})(__32471,c__31895__auto___32474,G__32302_32472,n__22603__auto___32470,jobs,results,process,async))
;
return ((function (__32471,switch__31781__auto__,c__31895__auto___32474,G__32302_32472,n__22603__auto___32470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0 = (function (){
var statearr_32326 = [null,null,null,null,null,null,null];
(statearr_32326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__);

(statearr_32326[(1)] = (1));

return statearr_32326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1 = (function (state_32315){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32327){if((e32327 instanceof Object)){
var ex__31785__auto__ = e32327;
var statearr_32328_32481 = state_32315;
(statearr_32328_32481[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32482 = state_32315;
state_32315 = G__32482;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = function(state_32315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1.call(this,state_32315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__;
})()
;})(__32471,switch__31781__auto__,c__31895__auto___32474,G__32302_32472,n__22603__auto___32470,jobs,results,process,async))
})();
var state__31897__auto__ = (function (){var statearr_32329 = f__31896__auto__.call(null);
(statearr_32329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___32474);

return statearr_32329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(__32471,c__31895__auto___32474,G__32302_32472,n__22603__auto___32470,jobs,results,process,async))
);


break;
case "async":
var c__31895__auto___32483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32471,c__31895__auto___32483,G__32302_32472,n__22603__auto___32470,jobs,results,process,async){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (__32471,c__31895__auto___32483,G__32302_32472,n__22603__auto___32470,jobs,results,process,async){
return (function (state_32342){
var state_val_32343 = (state_32342[(1)]);
if((state_val_32343 === (1))){
var state_32342__$1 = state_32342;
var statearr_32344_32484 = state_32342__$1;
(statearr_32344_32484[(2)] = null);

(statearr_32344_32484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (2))){
var state_32342__$1 = state_32342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32342__$1,(4),jobs);
} else {
if((state_val_32343 === (3))){
var inst_32340 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32342__$1,inst_32340);
} else {
if((state_val_32343 === (4))){
var inst_32332 = (state_32342[(2)]);
var inst_32333 = async.call(null,inst_32332);
var state_32342__$1 = state_32342;
if(cljs.core.truth_(inst_32333)){
var statearr_32345_32485 = state_32342__$1;
(statearr_32345_32485[(1)] = (5));

} else {
var statearr_32346_32486 = state_32342__$1;
(statearr_32346_32486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (5))){
var state_32342__$1 = state_32342;
var statearr_32347_32487 = state_32342__$1;
(statearr_32347_32487[(2)] = null);

(statearr_32347_32487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (6))){
var state_32342__$1 = state_32342;
var statearr_32348_32488 = state_32342__$1;
(statearr_32348_32488[(2)] = null);

(statearr_32348_32488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32343 === (7))){
var inst_32338 = (state_32342[(2)]);
var state_32342__$1 = state_32342;
var statearr_32349_32489 = state_32342__$1;
(statearr_32349_32489[(2)] = inst_32338);

(statearr_32349_32489[(1)] = (3));


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
});})(__32471,c__31895__auto___32483,G__32302_32472,n__22603__auto___32470,jobs,results,process,async))
;
return ((function (__32471,switch__31781__auto__,c__31895__auto___32483,G__32302_32472,n__22603__auto___32470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0 = (function (){
var statearr_32353 = [null,null,null,null,null,null,null];
(statearr_32353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__);

(statearr_32353[(1)] = (1));

return statearr_32353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1 = (function (state_32342){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32354){if((e32354 instanceof Object)){
var ex__31785__auto__ = e32354;
var statearr_32355_32490 = state_32342;
(statearr_32355_32490[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32491 = state_32342;
state_32342 = G__32491;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = function(state_32342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1.call(this,state_32342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__;
})()
;})(__32471,switch__31781__auto__,c__31895__auto___32483,G__32302_32472,n__22603__auto___32470,jobs,results,process,async))
})();
var state__31897__auto__ = (function (){var statearr_32356 = f__31896__auto__.call(null);
(statearr_32356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___32483);

return statearr_32356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(__32471,c__31895__auto___32483,G__32302_32472,n__22603__auto___32470,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32492 = (__32471 + (1));
__32471 = G__32492;
continue;
} else {
}
break;
}

var c__31895__auto___32493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___32493,jobs,results,process,async){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___32493,jobs,results,process,async){
return (function (state_32378){
var state_val_32379 = (state_32378[(1)]);
if((state_val_32379 === (1))){
var state_32378__$1 = state_32378;
var statearr_32380_32494 = state_32378__$1;
(statearr_32380_32494[(2)] = null);

(statearr_32380_32494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (2))){
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32378__$1,(4),from);
} else {
if((state_val_32379 === (3))){
var inst_32376 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32378__$1,inst_32376);
} else {
if((state_val_32379 === (4))){
var inst_32359 = (state_32378[(7)]);
var inst_32359__$1 = (state_32378[(2)]);
var inst_32360 = (inst_32359__$1 == null);
var state_32378__$1 = (function (){var statearr_32381 = state_32378;
(statearr_32381[(7)] = inst_32359__$1);

return statearr_32381;
})();
if(cljs.core.truth_(inst_32360)){
var statearr_32382_32495 = state_32378__$1;
(statearr_32382_32495[(1)] = (5));

} else {
var statearr_32383_32496 = state_32378__$1;
(statearr_32383_32496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (5))){
var inst_32362 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32378__$1 = state_32378;
var statearr_32384_32497 = state_32378__$1;
(statearr_32384_32497[(2)] = inst_32362);

(statearr_32384_32497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (6))){
var inst_32364 = (state_32378[(8)]);
var inst_32359 = (state_32378[(7)]);
var inst_32364__$1 = cljs.core.async.chan.call(null,(1));
var inst_32365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32366 = [inst_32359,inst_32364__$1];
var inst_32367 = (new cljs.core.PersistentVector(null,2,(5),inst_32365,inst_32366,null));
var state_32378__$1 = (function (){var statearr_32385 = state_32378;
(statearr_32385[(8)] = inst_32364__$1);

return statearr_32385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32378__$1,(8),jobs,inst_32367);
} else {
if((state_val_32379 === (7))){
var inst_32374 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32386_32498 = state_32378__$1;
(statearr_32386_32498[(2)] = inst_32374);

(statearr_32386_32498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (8))){
var inst_32364 = (state_32378[(8)]);
var inst_32369 = (state_32378[(2)]);
var state_32378__$1 = (function (){var statearr_32387 = state_32378;
(statearr_32387[(9)] = inst_32369);

return statearr_32387;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32378__$1,(9),results,inst_32364);
} else {
if((state_val_32379 === (9))){
var inst_32371 = (state_32378[(2)]);
var state_32378__$1 = (function (){var statearr_32388 = state_32378;
(statearr_32388[(10)] = inst_32371);

return statearr_32388;
})();
var statearr_32389_32499 = state_32378__$1;
(statearr_32389_32499[(2)] = null);

(statearr_32389_32499[(1)] = (2));


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
});})(c__31895__auto___32493,jobs,results,process,async))
;
return ((function (switch__31781__auto__,c__31895__auto___32493,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0 = (function (){
var statearr_32393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__);

(statearr_32393[(1)] = (1));

return statearr_32393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1 = (function (state_32378){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32394){if((e32394 instanceof Object)){
var ex__31785__auto__ = e32394;
var statearr_32395_32500 = state_32378;
(statearr_32395_32500[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32378;
state_32378 = G__32501;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = function(state_32378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1.call(this,state_32378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___32493,jobs,results,process,async))
})();
var state__31897__auto__ = (function (){var statearr_32396 = f__31896__auto__.call(null);
(statearr_32396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___32493);

return statearr_32396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___32493,jobs,results,process,async))
);


var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__,jobs,results,process,async){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__,jobs,results,process,async){
return (function (state_32434){
var state_val_32435 = (state_32434[(1)]);
if((state_val_32435 === (7))){
var inst_32430 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32436_32502 = state_32434__$1;
(statearr_32436_32502[(2)] = inst_32430);

(statearr_32436_32502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (20))){
var state_32434__$1 = state_32434;
var statearr_32437_32503 = state_32434__$1;
(statearr_32437_32503[(2)] = null);

(statearr_32437_32503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (1))){
var state_32434__$1 = state_32434;
var statearr_32438_32504 = state_32434__$1;
(statearr_32438_32504[(2)] = null);

(statearr_32438_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (4))){
var inst_32399 = (state_32434[(7)]);
var inst_32399__$1 = (state_32434[(2)]);
var inst_32400 = (inst_32399__$1 == null);
var state_32434__$1 = (function (){var statearr_32439 = state_32434;
(statearr_32439[(7)] = inst_32399__$1);

return statearr_32439;
})();
if(cljs.core.truth_(inst_32400)){
var statearr_32440_32505 = state_32434__$1;
(statearr_32440_32505[(1)] = (5));

} else {
var statearr_32441_32506 = state_32434__$1;
(statearr_32441_32506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (15))){
var inst_32412 = (state_32434[(8)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32434__$1,(18),to,inst_32412);
} else {
if((state_val_32435 === (21))){
var inst_32425 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32442_32507 = state_32434__$1;
(statearr_32442_32507[(2)] = inst_32425);

(statearr_32442_32507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (13))){
var inst_32427 = (state_32434[(2)]);
var state_32434__$1 = (function (){var statearr_32443 = state_32434;
(statearr_32443[(9)] = inst_32427);

return statearr_32443;
})();
var statearr_32444_32508 = state_32434__$1;
(statearr_32444_32508[(2)] = null);

(statearr_32444_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (6))){
var inst_32399 = (state_32434[(7)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32434__$1,(11),inst_32399);
} else {
if((state_val_32435 === (17))){
var inst_32420 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
if(cljs.core.truth_(inst_32420)){
var statearr_32445_32509 = state_32434__$1;
(statearr_32445_32509[(1)] = (19));

} else {
var statearr_32446_32510 = state_32434__$1;
(statearr_32446_32510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (3))){
var inst_32432 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32434__$1,inst_32432);
} else {
if((state_val_32435 === (12))){
var inst_32409 = (state_32434[(10)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32434__$1,(14),inst_32409);
} else {
if((state_val_32435 === (2))){
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32434__$1,(4),results);
} else {
if((state_val_32435 === (19))){
var state_32434__$1 = state_32434;
var statearr_32447_32511 = state_32434__$1;
(statearr_32447_32511[(2)] = null);

(statearr_32447_32511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (11))){
var inst_32409 = (state_32434[(2)]);
var state_32434__$1 = (function (){var statearr_32448 = state_32434;
(statearr_32448[(10)] = inst_32409);

return statearr_32448;
})();
var statearr_32449_32512 = state_32434__$1;
(statearr_32449_32512[(2)] = null);

(statearr_32449_32512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (9))){
var state_32434__$1 = state_32434;
var statearr_32450_32513 = state_32434__$1;
(statearr_32450_32513[(2)] = null);

(statearr_32450_32513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (5))){
var state_32434__$1 = state_32434;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32451_32514 = state_32434__$1;
(statearr_32451_32514[(1)] = (8));

} else {
var statearr_32452_32515 = state_32434__$1;
(statearr_32452_32515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (14))){
var inst_32414 = (state_32434[(11)]);
var inst_32412 = (state_32434[(8)]);
var inst_32412__$1 = (state_32434[(2)]);
var inst_32413 = (inst_32412__$1 == null);
var inst_32414__$1 = cljs.core.not.call(null,inst_32413);
var state_32434__$1 = (function (){var statearr_32453 = state_32434;
(statearr_32453[(11)] = inst_32414__$1);

(statearr_32453[(8)] = inst_32412__$1);

return statearr_32453;
})();
if(inst_32414__$1){
var statearr_32454_32516 = state_32434__$1;
(statearr_32454_32516[(1)] = (15));

} else {
var statearr_32455_32517 = state_32434__$1;
(statearr_32455_32517[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (16))){
var inst_32414 = (state_32434[(11)]);
var state_32434__$1 = state_32434;
var statearr_32456_32518 = state_32434__$1;
(statearr_32456_32518[(2)] = inst_32414);

(statearr_32456_32518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (10))){
var inst_32406 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32457_32519 = state_32434__$1;
(statearr_32457_32519[(2)] = inst_32406);

(statearr_32457_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (18))){
var inst_32417 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32458_32520 = state_32434__$1;
(statearr_32458_32520[(2)] = inst_32417);

(statearr_32458_32520[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (8))){
var inst_32403 = cljs.core.async.close_BANG_.call(null,to);
var state_32434__$1 = state_32434;
var statearr_32459_32521 = state_32434__$1;
(statearr_32459_32521[(2)] = inst_32403);

(statearr_32459_32521[(1)] = (10));


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
});})(c__31895__auto__,jobs,results,process,async))
;
return ((function (switch__31781__auto__,c__31895__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0 = (function (){
var statearr_32463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__);

(statearr_32463[(1)] = (1));

return statearr_32463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1 = (function (state_32434){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32464){if((e32464 instanceof Object)){
var ex__31785__auto__ = e32464;
var statearr_32465_32522 = state_32434;
(statearr_32465_32522[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32523 = state_32434;
state_32434 = G__32523;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__ = function(state_32434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1.call(this,state_32434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__,jobs,results,process,async))
})();
var state__31897__auto__ = (function (){var statearr_32466 = f__31896__auto__.call(null);
(statearr_32466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_32466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__,jobs,results,process,async))
);

return c__31895__auto__;
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
var args32524 = [];
var len__22773__auto___32527 = arguments.length;
var i__22774__auto___32528 = (0);
while(true){
if((i__22774__auto___32528 < len__22773__auto___32527)){
args32524.push((arguments[i__22774__auto___32528]));

var G__32529 = (i__22774__auto___32528 + (1));
i__22774__auto___32528 = G__32529;
continue;
} else {
}
break;
}

var G__32526 = args32524.length;
switch (G__32526) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32524.length)].join('')));

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
var args32531 = [];
var len__22773__auto___32534 = arguments.length;
var i__22774__auto___32535 = (0);
while(true){
if((i__22774__auto___32535 < len__22773__auto___32534)){
args32531.push((arguments[i__22774__auto___32535]));

var G__32536 = (i__22774__auto___32535 + (1));
i__22774__auto___32535 = G__32536;
continue;
} else {
}
break;
}

var G__32533 = args32531.length;
switch (G__32533) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32531.length)].join('')));

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
var args32538 = [];
var len__22773__auto___32591 = arguments.length;
var i__22774__auto___32592 = (0);
while(true){
if((i__22774__auto___32592 < len__22773__auto___32591)){
args32538.push((arguments[i__22774__auto___32592]));

var G__32593 = (i__22774__auto___32592 + (1));
i__22774__auto___32592 = G__32593;
continue;
} else {
}
break;
}

var G__32540 = args32538.length;
switch (G__32540) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32538.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31895__auto___32595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___32595,tc,fc){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___32595,tc,fc){
return (function (state_32566){
var state_val_32567 = (state_32566[(1)]);
if((state_val_32567 === (7))){
var inst_32562 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32568_32596 = state_32566__$1;
(statearr_32568_32596[(2)] = inst_32562);

(statearr_32568_32596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (1))){
var state_32566__$1 = state_32566;
var statearr_32569_32597 = state_32566__$1;
(statearr_32569_32597[(2)] = null);

(statearr_32569_32597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (4))){
var inst_32543 = (state_32566[(7)]);
var inst_32543__$1 = (state_32566[(2)]);
var inst_32544 = (inst_32543__$1 == null);
var state_32566__$1 = (function (){var statearr_32570 = state_32566;
(statearr_32570[(7)] = inst_32543__$1);

return statearr_32570;
})();
if(cljs.core.truth_(inst_32544)){
var statearr_32571_32598 = state_32566__$1;
(statearr_32571_32598[(1)] = (5));

} else {
var statearr_32572_32599 = state_32566__$1;
(statearr_32572_32599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (13))){
var state_32566__$1 = state_32566;
var statearr_32573_32600 = state_32566__$1;
(statearr_32573_32600[(2)] = null);

(statearr_32573_32600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (6))){
var inst_32543 = (state_32566[(7)]);
var inst_32549 = p.call(null,inst_32543);
var state_32566__$1 = state_32566;
if(cljs.core.truth_(inst_32549)){
var statearr_32574_32601 = state_32566__$1;
(statearr_32574_32601[(1)] = (9));

} else {
var statearr_32575_32602 = state_32566__$1;
(statearr_32575_32602[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (3))){
var inst_32564 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32566__$1,inst_32564);
} else {
if((state_val_32567 === (12))){
var state_32566__$1 = state_32566;
var statearr_32576_32603 = state_32566__$1;
(statearr_32576_32603[(2)] = null);

(statearr_32576_32603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (2))){
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32566__$1,(4),ch);
} else {
if((state_val_32567 === (11))){
var inst_32543 = (state_32566[(7)]);
var inst_32553 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32566__$1,(8),inst_32553,inst_32543);
} else {
if((state_val_32567 === (9))){
var state_32566__$1 = state_32566;
var statearr_32577_32604 = state_32566__$1;
(statearr_32577_32604[(2)] = tc);

(statearr_32577_32604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (5))){
var inst_32546 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32547 = cljs.core.async.close_BANG_.call(null,fc);
var state_32566__$1 = (function (){var statearr_32578 = state_32566;
(statearr_32578[(8)] = inst_32546);

return statearr_32578;
})();
var statearr_32579_32605 = state_32566__$1;
(statearr_32579_32605[(2)] = inst_32547);

(statearr_32579_32605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (14))){
var inst_32560 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32580_32606 = state_32566__$1;
(statearr_32580_32606[(2)] = inst_32560);

(statearr_32580_32606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (10))){
var state_32566__$1 = state_32566;
var statearr_32581_32607 = state_32566__$1;
(statearr_32581_32607[(2)] = fc);

(statearr_32581_32607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (8))){
var inst_32555 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
if(cljs.core.truth_(inst_32555)){
var statearr_32582_32608 = state_32566__$1;
(statearr_32582_32608[(1)] = (12));

} else {
var statearr_32583_32609 = state_32566__$1;
(statearr_32583_32609[(1)] = (13));

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
});})(c__31895__auto___32595,tc,fc))
;
return ((function (switch__31781__auto__,c__31895__auto___32595,tc,fc){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_32587 = [null,null,null,null,null,null,null,null,null];
(statearr_32587[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_32587[(1)] = (1));

return statearr_32587;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_32566){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32588){if((e32588 instanceof Object)){
var ex__31785__auto__ = e32588;
var statearr_32589_32610 = state_32566;
(statearr_32589_32610[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32611 = state_32566;
state_32566 = G__32611;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_32566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_32566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___32595,tc,fc))
})();
var state__31897__auto__ = (function (){var statearr_32590 = f__31896__auto__.call(null);
(statearr_32590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___32595);

return statearr_32590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___32595,tc,fc))
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
var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__){
return (function (state_32675){
var state_val_32676 = (state_32675[(1)]);
if((state_val_32676 === (7))){
var inst_32671 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32677_32698 = state_32675__$1;
(statearr_32677_32698[(2)] = inst_32671);

(statearr_32677_32698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (1))){
var inst_32655 = init;
var state_32675__$1 = (function (){var statearr_32678 = state_32675;
(statearr_32678[(7)] = inst_32655);

return statearr_32678;
})();
var statearr_32679_32699 = state_32675__$1;
(statearr_32679_32699[(2)] = null);

(statearr_32679_32699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (4))){
var inst_32658 = (state_32675[(8)]);
var inst_32658__$1 = (state_32675[(2)]);
var inst_32659 = (inst_32658__$1 == null);
var state_32675__$1 = (function (){var statearr_32680 = state_32675;
(statearr_32680[(8)] = inst_32658__$1);

return statearr_32680;
})();
if(cljs.core.truth_(inst_32659)){
var statearr_32681_32700 = state_32675__$1;
(statearr_32681_32700[(1)] = (5));

} else {
var statearr_32682_32701 = state_32675__$1;
(statearr_32682_32701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (6))){
var inst_32655 = (state_32675[(7)]);
var inst_32658 = (state_32675[(8)]);
var inst_32662 = (state_32675[(9)]);
var inst_32662__$1 = f.call(null,inst_32655,inst_32658);
var inst_32663 = cljs.core.reduced_QMARK_.call(null,inst_32662__$1);
var state_32675__$1 = (function (){var statearr_32683 = state_32675;
(statearr_32683[(9)] = inst_32662__$1);

return statearr_32683;
})();
if(inst_32663){
var statearr_32684_32702 = state_32675__$1;
(statearr_32684_32702[(1)] = (8));

} else {
var statearr_32685_32703 = state_32675__$1;
(statearr_32685_32703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (3))){
var inst_32673 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32675__$1,inst_32673);
} else {
if((state_val_32676 === (2))){
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32675__$1,(4),ch);
} else {
if((state_val_32676 === (9))){
var inst_32662 = (state_32675[(9)]);
var inst_32655 = inst_32662;
var state_32675__$1 = (function (){var statearr_32686 = state_32675;
(statearr_32686[(7)] = inst_32655);

return statearr_32686;
})();
var statearr_32687_32704 = state_32675__$1;
(statearr_32687_32704[(2)] = null);

(statearr_32687_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (5))){
var inst_32655 = (state_32675[(7)]);
var state_32675__$1 = state_32675;
var statearr_32688_32705 = state_32675__$1;
(statearr_32688_32705[(2)] = inst_32655);

(statearr_32688_32705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (10))){
var inst_32669 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32689_32706 = state_32675__$1;
(statearr_32689_32706[(2)] = inst_32669);

(statearr_32689_32706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (8))){
var inst_32662 = (state_32675[(9)]);
var inst_32665 = cljs.core.deref.call(null,inst_32662);
var state_32675__$1 = state_32675;
var statearr_32690_32707 = state_32675__$1;
(statearr_32690_32707[(2)] = inst_32665);

(statearr_32690_32707[(1)] = (10));


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
});})(c__31895__auto__))
;
return ((function (switch__31781__auto__,c__31895__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31782__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31782__auto____0 = (function (){
var statearr_32694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32694[(0)] = cljs$core$async$reduce_$_state_machine__31782__auto__);

(statearr_32694[(1)] = (1));

return statearr_32694;
});
var cljs$core$async$reduce_$_state_machine__31782__auto____1 = (function (state_32675){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32695){if((e32695 instanceof Object)){
var ex__31785__auto__ = e32695;
var statearr_32696_32708 = state_32675;
(statearr_32696_32708[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32709 = state_32675;
state_32675 = G__32709;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31782__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31782__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31782__auto____0;
cljs$core$async$reduce_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31782__auto____1;
return cljs$core$async$reduce_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__))
})();
var state__31897__auto__ = (function (){var statearr_32697 = f__31896__auto__.call(null);
(statearr_32697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_32697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__))
);

return c__31895__auto__;
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
var args32710 = [];
var len__22773__auto___32762 = arguments.length;
var i__22774__auto___32763 = (0);
while(true){
if((i__22774__auto___32763 < len__22773__auto___32762)){
args32710.push((arguments[i__22774__auto___32763]));

var G__32764 = (i__22774__auto___32763 + (1));
i__22774__auto___32763 = G__32764;
continue;
} else {
}
break;
}

var G__32712 = args32710.length;
switch (G__32712) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32710.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__){
return (function (state_32737){
var state_val_32738 = (state_32737[(1)]);
if((state_val_32738 === (7))){
var inst_32719 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32739_32766 = state_32737__$1;
(statearr_32739_32766[(2)] = inst_32719);

(statearr_32739_32766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (1))){
var inst_32713 = cljs.core.seq.call(null,coll);
var inst_32714 = inst_32713;
var state_32737__$1 = (function (){var statearr_32740 = state_32737;
(statearr_32740[(7)] = inst_32714);

return statearr_32740;
})();
var statearr_32741_32767 = state_32737__$1;
(statearr_32741_32767[(2)] = null);

(statearr_32741_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (4))){
var inst_32714 = (state_32737[(7)]);
var inst_32717 = cljs.core.first.call(null,inst_32714);
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32737__$1,(7),ch,inst_32717);
} else {
if((state_val_32738 === (13))){
var inst_32731 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32742_32768 = state_32737__$1;
(statearr_32742_32768[(2)] = inst_32731);

(statearr_32742_32768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (6))){
var inst_32722 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
if(cljs.core.truth_(inst_32722)){
var statearr_32743_32769 = state_32737__$1;
(statearr_32743_32769[(1)] = (8));

} else {
var statearr_32744_32770 = state_32737__$1;
(statearr_32744_32770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (3))){
var inst_32735 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32737__$1,inst_32735);
} else {
if((state_val_32738 === (12))){
var state_32737__$1 = state_32737;
var statearr_32745_32771 = state_32737__$1;
(statearr_32745_32771[(2)] = null);

(statearr_32745_32771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (2))){
var inst_32714 = (state_32737[(7)]);
var state_32737__$1 = state_32737;
if(cljs.core.truth_(inst_32714)){
var statearr_32746_32772 = state_32737__$1;
(statearr_32746_32772[(1)] = (4));

} else {
var statearr_32747_32773 = state_32737__$1;
(statearr_32747_32773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (11))){
var inst_32728 = cljs.core.async.close_BANG_.call(null,ch);
var state_32737__$1 = state_32737;
var statearr_32748_32774 = state_32737__$1;
(statearr_32748_32774[(2)] = inst_32728);

(statearr_32748_32774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (9))){
var state_32737__$1 = state_32737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32749_32775 = state_32737__$1;
(statearr_32749_32775[(1)] = (11));

} else {
var statearr_32750_32776 = state_32737__$1;
(statearr_32750_32776[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (5))){
var inst_32714 = (state_32737[(7)]);
var state_32737__$1 = state_32737;
var statearr_32751_32777 = state_32737__$1;
(statearr_32751_32777[(2)] = inst_32714);

(statearr_32751_32777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (10))){
var inst_32733 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32752_32778 = state_32737__$1;
(statearr_32752_32778[(2)] = inst_32733);

(statearr_32752_32778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (8))){
var inst_32714 = (state_32737[(7)]);
var inst_32724 = cljs.core.next.call(null,inst_32714);
var inst_32714__$1 = inst_32724;
var state_32737__$1 = (function (){var statearr_32753 = state_32737;
(statearr_32753[(7)] = inst_32714__$1);

return statearr_32753;
})();
var statearr_32754_32779 = state_32737__$1;
(statearr_32754_32779[(2)] = null);

(statearr_32754_32779[(1)] = (2));


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
});})(c__31895__auto__))
;
return ((function (switch__31781__auto__,c__31895__auto__){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_32737){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_32737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e32759){if((e32759 instanceof Object)){
var ex__31785__auto__ = e32759;
var statearr_32760_32780 = state_32737;
(statearr_32760_32780[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32781 = state_32737;
state_32737 = G__32781;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_32737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_32737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__))
})();
var state__31897__auto__ = (function (){var statearr_32761 = f__31896__auto__.call(null);
(statearr_32761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__))
);

return c__31895__auto__;
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
var x__22303__auto__ = (((_ == null))?null:_);
var m__22304__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,_);
} else {
var m__22304__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,_);
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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22304__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch);
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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m);
} else {
var m__22304__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33007 = (function (mult,ch,cs,meta33008){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33008 = meta33008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33009,meta33008__$1){
var self__ = this;
var _33009__$1 = this;
return (new cljs.core.async.t_cljs$core$async33007(self__.mult,self__.ch,self__.cs,meta33008__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33009){
var self__ = this;
var _33009__$1 = this;
return self__.meta33008;
});})(cs))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33007.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33008","meta33008",-1569820904,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33007";

cljs.core.async.t_cljs$core$async33007.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async33007");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33007 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33007(mult__$1,ch__$1,cs__$1,meta33008){
return (new cljs.core.async.t_cljs$core$async33007(mult__$1,ch__$1,cs__$1,meta33008));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33007(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31895__auto___33232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___33232,cs,m,dchan,dctr,done){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___33232,cs,m,dchan,dctr,done){
return (function (state_33144){
var state_val_33145 = (state_33144[(1)]);
if((state_val_33145 === (7))){
var inst_33140 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33146_33233 = state_33144__$1;
(statearr_33146_33233[(2)] = inst_33140);

(statearr_33146_33233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (20))){
var inst_33043 = (state_33144[(7)]);
var inst_33055 = cljs.core.first.call(null,inst_33043);
var inst_33056 = cljs.core.nth.call(null,inst_33055,(0),null);
var inst_33057 = cljs.core.nth.call(null,inst_33055,(1),null);
var state_33144__$1 = (function (){var statearr_33147 = state_33144;
(statearr_33147[(8)] = inst_33056);

return statearr_33147;
})();
if(cljs.core.truth_(inst_33057)){
var statearr_33148_33234 = state_33144__$1;
(statearr_33148_33234[(1)] = (22));

} else {
var statearr_33149_33235 = state_33144__$1;
(statearr_33149_33235[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (27))){
var inst_33087 = (state_33144[(9)]);
var inst_33092 = (state_33144[(10)]);
var inst_33012 = (state_33144[(11)]);
var inst_33085 = (state_33144[(12)]);
var inst_33092__$1 = cljs.core._nth.call(null,inst_33085,inst_33087);
var inst_33093 = cljs.core.async.put_BANG_.call(null,inst_33092__$1,inst_33012,done);
var state_33144__$1 = (function (){var statearr_33150 = state_33144;
(statearr_33150[(10)] = inst_33092__$1);

return statearr_33150;
})();
if(cljs.core.truth_(inst_33093)){
var statearr_33151_33236 = state_33144__$1;
(statearr_33151_33236[(1)] = (30));

} else {
var statearr_33152_33237 = state_33144__$1;
(statearr_33152_33237[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (1))){
var state_33144__$1 = state_33144;
var statearr_33153_33238 = state_33144__$1;
(statearr_33153_33238[(2)] = null);

(statearr_33153_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (24))){
var inst_33043 = (state_33144[(7)]);
var inst_33062 = (state_33144[(2)]);
var inst_33063 = cljs.core.next.call(null,inst_33043);
var inst_33021 = inst_33063;
var inst_33022 = null;
var inst_33023 = (0);
var inst_33024 = (0);
var state_33144__$1 = (function (){var statearr_33154 = state_33144;
(statearr_33154[(13)] = inst_33022);

(statearr_33154[(14)] = inst_33024);

(statearr_33154[(15)] = inst_33021);

(statearr_33154[(16)] = inst_33023);

(statearr_33154[(17)] = inst_33062);

return statearr_33154;
})();
var statearr_33155_33239 = state_33144__$1;
(statearr_33155_33239[(2)] = null);

(statearr_33155_33239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (39))){
var state_33144__$1 = state_33144;
var statearr_33159_33240 = state_33144__$1;
(statearr_33159_33240[(2)] = null);

(statearr_33159_33240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (4))){
var inst_33012 = (state_33144[(11)]);
var inst_33012__$1 = (state_33144[(2)]);
var inst_33013 = (inst_33012__$1 == null);
var state_33144__$1 = (function (){var statearr_33160 = state_33144;
(statearr_33160[(11)] = inst_33012__$1);

return statearr_33160;
})();
if(cljs.core.truth_(inst_33013)){
var statearr_33161_33241 = state_33144__$1;
(statearr_33161_33241[(1)] = (5));

} else {
var statearr_33162_33242 = state_33144__$1;
(statearr_33162_33242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (15))){
var inst_33022 = (state_33144[(13)]);
var inst_33024 = (state_33144[(14)]);
var inst_33021 = (state_33144[(15)]);
var inst_33023 = (state_33144[(16)]);
var inst_33039 = (state_33144[(2)]);
var inst_33040 = (inst_33024 + (1));
var tmp33156 = inst_33022;
var tmp33157 = inst_33021;
var tmp33158 = inst_33023;
var inst_33021__$1 = tmp33157;
var inst_33022__$1 = tmp33156;
var inst_33023__$1 = tmp33158;
var inst_33024__$1 = inst_33040;
var state_33144__$1 = (function (){var statearr_33163 = state_33144;
(statearr_33163[(13)] = inst_33022__$1);

(statearr_33163[(18)] = inst_33039);

(statearr_33163[(14)] = inst_33024__$1);

(statearr_33163[(15)] = inst_33021__$1);

(statearr_33163[(16)] = inst_33023__$1);

return statearr_33163;
})();
var statearr_33164_33243 = state_33144__$1;
(statearr_33164_33243[(2)] = null);

(statearr_33164_33243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (21))){
var inst_33066 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33168_33244 = state_33144__$1;
(statearr_33168_33244[(2)] = inst_33066);

(statearr_33168_33244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (31))){
var inst_33092 = (state_33144[(10)]);
var inst_33096 = done.call(null,null);
var inst_33097 = cljs.core.async.untap_STAR_.call(null,m,inst_33092);
var state_33144__$1 = (function (){var statearr_33169 = state_33144;
(statearr_33169[(19)] = inst_33096);

return statearr_33169;
})();
var statearr_33170_33245 = state_33144__$1;
(statearr_33170_33245[(2)] = inst_33097);

(statearr_33170_33245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (32))){
var inst_33086 = (state_33144[(20)]);
var inst_33087 = (state_33144[(9)]);
var inst_33084 = (state_33144[(21)]);
var inst_33085 = (state_33144[(12)]);
var inst_33099 = (state_33144[(2)]);
var inst_33100 = (inst_33087 + (1));
var tmp33165 = inst_33086;
var tmp33166 = inst_33084;
var tmp33167 = inst_33085;
var inst_33084__$1 = tmp33166;
var inst_33085__$1 = tmp33167;
var inst_33086__$1 = tmp33165;
var inst_33087__$1 = inst_33100;
var state_33144__$1 = (function (){var statearr_33171 = state_33144;
(statearr_33171[(20)] = inst_33086__$1);

(statearr_33171[(9)] = inst_33087__$1);

(statearr_33171[(22)] = inst_33099);

(statearr_33171[(21)] = inst_33084__$1);

(statearr_33171[(12)] = inst_33085__$1);

return statearr_33171;
})();
var statearr_33172_33246 = state_33144__$1;
(statearr_33172_33246[(2)] = null);

(statearr_33172_33246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (40))){
var inst_33112 = (state_33144[(23)]);
var inst_33116 = done.call(null,null);
var inst_33117 = cljs.core.async.untap_STAR_.call(null,m,inst_33112);
var state_33144__$1 = (function (){var statearr_33173 = state_33144;
(statearr_33173[(24)] = inst_33116);

return statearr_33173;
})();
var statearr_33174_33247 = state_33144__$1;
(statearr_33174_33247[(2)] = inst_33117);

(statearr_33174_33247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (33))){
var inst_33103 = (state_33144[(25)]);
var inst_33105 = cljs.core.chunked_seq_QMARK_.call(null,inst_33103);
var state_33144__$1 = state_33144;
if(inst_33105){
var statearr_33175_33248 = state_33144__$1;
(statearr_33175_33248[(1)] = (36));

} else {
var statearr_33176_33249 = state_33144__$1;
(statearr_33176_33249[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (13))){
var inst_33033 = (state_33144[(26)]);
var inst_33036 = cljs.core.async.close_BANG_.call(null,inst_33033);
var state_33144__$1 = state_33144;
var statearr_33177_33250 = state_33144__$1;
(statearr_33177_33250[(2)] = inst_33036);

(statearr_33177_33250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (22))){
var inst_33056 = (state_33144[(8)]);
var inst_33059 = cljs.core.async.close_BANG_.call(null,inst_33056);
var state_33144__$1 = state_33144;
var statearr_33178_33251 = state_33144__$1;
(statearr_33178_33251[(2)] = inst_33059);

(statearr_33178_33251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (36))){
var inst_33103 = (state_33144[(25)]);
var inst_33107 = cljs.core.chunk_first.call(null,inst_33103);
var inst_33108 = cljs.core.chunk_rest.call(null,inst_33103);
var inst_33109 = cljs.core.count.call(null,inst_33107);
var inst_33084 = inst_33108;
var inst_33085 = inst_33107;
var inst_33086 = inst_33109;
var inst_33087 = (0);
var state_33144__$1 = (function (){var statearr_33179 = state_33144;
(statearr_33179[(20)] = inst_33086);

(statearr_33179[(9)] = inst_33087);

(statearr_33179[(21)] = inst_33084);

(statearr_33179[(12)] = inst_33085);

return statearr_33179;
})();
var statearr_33180_33252 = state_33144__$1;
(statearr_33180_33252[(2)] = null);

(statearr_33180_33252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (41))){
var inst_33103 = (state_33144[(25)]);
var inst_33119 = (state_33144[(2)]);
var inst_33120 = cljs.core.next.call(null,inst_33103);
var inst_33084 = inst_33120;
var inst_33085 = null;
var inst_33086 = (0);
var inst_33087 = (0);
var state_33144__$1 = (function (){var statearr_33181 = state_33144;
(statearr_33181[(20)] = inst_33086);

(statearr_33181[(27)] = inst_33119);

(statearr_33181[(9)] = inst_33087);

(statearr_33181[(21)] = inst_33084);

(statearr_33181[(12)] = inst_33085);

return statearr_33181;
})();
var statearr_33182_33253 = state_33144__$1;
(statearr_33182_33253[(2)] = null);

(statearr_33182_33253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (43))){
var state_33144__$1 = state_33144;
var statearr_33183_33254 = state_33144__$1;
(statearr_33183_33254[(2)] = null);

(statearr_33183_33254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (29))){
var inst_33128 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33184_33255 = state_33144__$1;
(statearr_33184_33255[(2)] = inst_33128);

(statearr_33184_33255[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (44))){
var inst_33137 = (state_33144[(2)]);
var state_33144__$1 = (function (){var statearr_33185 = state_33144;
(statearr_33185[(28)] = inst_33137);

return statearr_33185;
})();
var statearr_33186_33256 = state_33144__$1;
(statearr_33186_33256[(2)] = null);

(statearr_33186_33256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (6))){
var inst_33076 = (state_33144[(29)]);
var inst_33075 = cljs.core.deref.call(null,cs);
var inst_33076__$1 = cljs.core.keys.call(null,inst_33075);
var inst_33077 = cljs.core.count.call(null,inst_33076__$1);
var inst_33078 = cljs.core.reset_BANG_.call(null,dctr,inst_33077);
var inst_33083 = cljs.core.seq.call(null,inst_33076__$1);
var inst_33084 = inst_33083;
var inst_33085 = null;
var inst_33086 = (0);
var inst_33087 = (0);
var state_33144__$1 = (function (){var statearr_33187 = state_33144;
(statearr_33187[(20)] = inst_33086);

(statearr_33187[(9)] = inst_33087);

(statearr_33187[(29)] = inst_33076__$1);

(statearr_33187[(30)] = inst_33078);

(statearr_33187[(21)] = inst_33084);

(statearr_33187[(12)] = inst_33085);

return statearr_33187;
})();
var statearr_33188_33257 = state_33144__$1;
(statearr_33188_33257[(2)] = null);

(statearr_33188_33257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (28))){
var inst_33084 = (state_33144[(21)]);
var inst_33103 = (state_33144[(25)]);
var inst_33103__$1 = cljs.core.seq.call(null,inst_33084);
var state_33144__$1 = (function (){var statearr_33189 = state_33144;
(statearr_33189[(25)] = inst_33103__$1);

return statearr_33189;
})();
if(inst_33103__$1){
var statearr_33190_33258 = state_33144__$1;
(statearr_33190_33258[(1)] = (33));

} else {
var statearr_33191_33259 = state_33144__$1;
(statearr_33191_33259[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (25))){
var inst_33086 = (state_33144[(20)]);
var inst_33087 = (state_33144[(9)]);
var inst_33089 = (inst_33087 < inst_33086);
var inst_33090 = inst_33089;
var state_33144__$1 = state_33144;
if(cljs.core.truth_(inst_33090)){
var statearr_33192_33260 = state_33144__$1;
(statearr_33192_33260[(1)] = (27));

} else {
var statearr_33193_33261 = state_33144__$1;
(statearr_33193_33261[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (34))){
var state_33144__$1 = state_33144;
var statearr_33194_33262 = state_33144__$1;
(statearr_33194_33262[(2)] = null);

(statearr_33194_33262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (17))){
var state_33144__$1 = state_33144;
var statearr_33195_33263 = state_33144__$1;
(statearr_33195_33263[(2)] = null);

(statearr_33195_33263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (3))){
var inst_33142 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33144__$1,inst_33142);
} else {
if((state_val_33145 === (12))){
var inst_33071 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33196_33264 = state_33144__$1;
(statearr_33196_33264[(2)] = inst_33071);

(statearr_33196_33264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (2))){
var state_33144__$1 = state_33144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33144__$1,(4),ch);
} else {
if((state_val_33145 === (23))){
var state_33144__$1 = state_33144;
var statearr_33197_33265 = state_33144__$1;
(statearr_33197_33265[(2)] = null);

(statearr_33197_33265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (35))){
var inst_33126 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33198_33266 = state_33144__$1;
(statearr_33198_33266[(2)] = inst_33126);

(statearr_33198_33266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (19))){
var inst_33043 = (state_33144[(7)]);
var inst_33047 = cljs.core.chunk_first.call(null,inst_33043);
var inst_33048 = cljs.core.chunk_rest.call(null,inst_33043);
var inst_33049 = cljs.core.count.call(null,inst_33047);
var inst_33021 = inst_33048;
var inst_33022 = inst_33047;
var inst_33023 = inst_33049;
var inst_33024 = (0);
var state_33144__$1 = (function (){var statearr_33199 = state_33144;
(statearr_33199[(13)] = inst_33022);

(statearr_33199[(14)] = inst_33024);

(statearr_33199[(15)] = inst_33021);

(statearr_33199[(16)] = inst_33023);

return statearr_33199;
})();
var statearr_33200_33267 = state_33144__$1;
(statearr_33200_33267[(2)] = null);

(statearr_33200_33267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (11))){
var inst_33043 = (state_33144[(7)]);
var inst_33021 = (state_33144[(15)]);
var inst_33043__$1 = cljs.core.seq.call(null,inst_33021);
var state_33144__$1 = (function (){var statearr_33201 = state_33144;
(statearr_33201[(7)] = inst_33043__$1);

return statearr_33201;
})();
if(inst_33043__$1){
var statearr_33202_33268 = state_33144__$1;
(statearr_33202_33268[(1)] = (16));

} else {
var statearr_33203_33269 = state_33144__$1;
(statearr_33203_33269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (9))){
var inst_33073 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33204_33270 = state_33144__$1;
(statearr_33204_33270[(2)] = inst_33073);

(statearr_33204_33270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (5))){
var inst_33019 = cljs.core.deref.call(null,cs);
var inst_33020 = cljs.core.seq.call(null,inst_33019);
var inst_33021 = inst_33020;
var inst_33022 = null;
var inst_33023 = (0);
var inst_33024 = (0);
var state_33144__$1 = (function (){var statearr_33205 = state_33144;
(statearr_33205[(13)] = inst_33022);

(statearr_33205[(14)] = inst_33024);

(statearr_33205[(15)] = inst_33021);

(statearr_33205[(16)] = inst_33023);

return statearr_33205;
})();
var statearr_33206_33271 = state_33144__$1;
(statearr_33206_33271[(2)] = null);

(statearr_33206_33271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (14))){
var state_33144__$1 = state_33144;
var statearr_33207_33272 = state_33144__$1;
(statearr_33207_33272[(2)] = null);

(statearr_33207_33272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (45))){
var inst_33134 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33208_33273 = state_33144__$1;
(statearr_33208_33273[(2)] = inst_33134);

(statearr_33208_33273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (26))){
var inst_33076 = (state_33144[(29)]);
var inst_33130 = (state_33144[(2)]);
var inst_33131 = cljs.core.seq.call(null,inst_33076);
var state_33144__$1 = (function (){var statearr_33209 = state_33144;
(statearr_33209[(31)] = inst_33130);

return statearr_33209;
})();
if(inst_33131){
var statearr_33210_33274 = state_33144__$1;
(statearr_33210_33274[(1)] = (42));

} else {
var statearr_33211_33275 = state_33144__$1;
(statearr_33211_33275[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (16))){
var inst_33043 = (state_33144[(7)]);
var inst_33045 = cljs.core.chunked_seq_QMARK_.call(null,inst_33043);
var state_33144__$1 = state_33144;
if(inst_33045){
var statearr_33212_33276 = state_33144__$1;
(statearr_33212_33276[(1)] = (19));

} else {
var statearr_33213_33277 = state_33144__$1;
(statearr_33213_33277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (38))){
var inst_33123 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33214_33278 = state_33144__$1;
(statearr_33214_33278[(2)] = inst_33123);

(statearr_33214_33278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (30))){
var state_33144__$1 = state_33144;
var statearr_33215_33279 = state_33144__$1;
(statearr_33215_33279[(2)] = null);

(statearr_33215_33279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (10))){
var inst_33022 = (state_33144[(13)]);
var inst_33024 = (state_33144[(14)]);
var inst_33032 = cljs.core._nth.call(null,inst_33022,inst_33024);
var inst_33033 = cljs.core.nth.call(null,inst_33032,(0),null);
var inst_33034 = cljs.core.nth.call(null,inst_33032,(1),null);
var state_33144__$1 = (function (){var statearr_33216 = state_33144;
(statearr_33216[(26)] = inst_33033);

return statearr_33216;
})();
if(cljs.core.truth_(inst_33034)){
var statearr_33217_33280 = state_33144__$1;
(statearr_33217_33280[(1)] = (13));

} else {
var statearr_33218_33281 = state_33144__$1;
(statearr_33218_33281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (18))){
var inst_33069 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33219_33282 = state_33144__$1;
(statearr_33219_33282[(2)] = inst_33069);

(statearr_33219_33282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (42))){
var state_33144__$1 = state_33144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33144__$1,(45),dchan);
} else {
if((state_val_33145 === (37))){
var inst_33112 = (state_33144[(23)]);
var inst_33103 = (state_33144[(25)]);
var inst_33012 = (state_33144[(11)]);
var inst_33112__$1 = cljs.core.first.call(null,inst_33103);
var inst_33113 = cljs.core.async.put_BANG_.call(null,inst_33112__$1,inst_33012,done);
var state_33144__$1 = (function (){var statearr_33220 = state_33144;
(statearr_33220[(23)] = inst_33112__$1);

return statearr_33220;
})();
if(cljs.core.truth_(inst_33113)){
var statearr_33221_33283 = state_33144__$1;
(statearr_33221_33283[(1)] = (39));

} else {
var statearr_33222_33284 = state_33144__$1;
(statearr_33222_33284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (8))){
var inst_33024 = (state_33144[(14)]);
var inst_33023 = (state_33144[(16)]);
var inst_33026 = (inst_33024 < inst_33023);
var inst_33027 = inst_33026;
var state_33144__$1 = state_33144;
if(cljs.core.truth_(inst_33027)){
var statearr_33223_33285 = state_33144__$1;
(statearr_33223_33285[(1)] = (10));

} else {
var statearr_33224_33286 = state_33144__$1;
(statearr_33224_33286[(1)] = (11));

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
});})(c__31895__auto___33232,cs,m,dchan,dctr,done))
;
return ((function (switch__31781__auto__,c__31895__auto___33232,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31782__auto__ = null;
var cljs$core$async$mult_$_state_machine__31782__auto____0 = (function (){
var statearr_33228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33228[(0)] = cljs$core$async$mult_$_state_machine__31782__auto__);

(statearr_33228[(1)] = (1));

return statearr_33228;
});
var cljs$core$async$mult_$_state_machine__31782__auto____1 = (function (state_33144){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_33144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e33229){if((e33229 instanceof Object)){
var ex__31785__auto__ = e33229;
var statearr_33230_33287 = state_33144;
(statearr_33230_33287[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33288 = state_33144;
state_33144 = G__33288;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31782__auto__ = function(state_33144){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31782__auto____1.call(this,state_33144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31782__auto____0;
cljs$core$async$mult_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31782__auto____1;
return cljs$core$async$mult_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___33232,cs,m,dchan,dctr,done))
})();
var state__31897__auto__ = (function (){var statearr_33231 = f__31896__auto__.call(null);
(statearr_33231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___33232);

return statearr_33231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___33232,cs,m,dchan,dctr,done))
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
var args33289 = [];
var len__22773__auto___33292 = arguments.length;
var i__22774__auto___33293 = (0);
while(true){
if((i__22774__auto___33293 < len__22773__auto___33292)){
args33289.push((arguments[i__22774__auto___33293]));

var G__33294 = (i__22774__auto___33293 + (1));
i__22774__auto___33293 = G__33294;
continue;
} else {
}
break;
}

var G__33291 = args33289.length;
switch (G__33291) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33289.length)].join('')));

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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch);
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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch);
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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m);
} else {
var m__22304__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m);
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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,state_map);
} else {
var m__22304__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,state_map);
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
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,mode);
} else {
var m__22304__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___33306 = arguments.length;
var i__22774__auto___33307 = (0);
while(true){
if((i__22774__auto___33307 < len__22773__auto___33306)){
args__22780__auto__.push((arguments[i__22774__auto___33307]));

var G__33308 = (i__22774__auto___33307 + (1));
i__22774__auto___33307 = G__33308;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33300){
var map__33301 = p__33300;
var map__33301__$1 = ((((!((map__33301 == null)))?((((map__33301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33301):map__33301);
var opts = map__33301__$1;
var statearr_33303_33309 = state;
(statearr_33303_33309[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6552__auto__ = cljs.core.async.do_alts.call(null,((function (map__33301,map__33301__$1,opts){
return (function (val){
var statearr_33304_33310 = state;
(statearr_33304_33310[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33301,map__33301__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6552__auto__)){
var cb = temp__6552__auto__;
var statearr_33305_33311 = state;
(statearr_33305_33311[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33296){
var G__33297 = cljs.core.first.call(null,seq33296);
var seq33296__$1 = cljs.core.next.call(null,seq33296);
var G__33298 = cljs.core.first.call(null,seq33296__$1);
var seq33296__$2 = cljs.core.next.call(null,seq33296__$1);
var G__33299 = cljs.core.first.call(null,seq33296__$2);
var seq33296__$3 = cljs.core.next.call(null,seq33296__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33297,G__33298,G__33299,seq33296__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33477 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33478){
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
this.meta33478 = meta33478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33479,meta33478__$1){
var self__ = this;
var _33479__$1 = this;
return (new cljs.core.async.t_cljs$core$async33477(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33478__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33479){
var self__ = this;
var _33479__$1 = this;
return self__.meta33478;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33477.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33478","meta33478",-869309637,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33477";

cljs.core.async.t_cljs$core$async33477.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async33477");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33477 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33477(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33478){
return (new cljs.core.async.t_cljs$core$async33477(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33478));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33477(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31895__auto___33642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___33642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___33642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33579){
var state_val_33580 = (state_33579[(1)]);
if((state_val_33580 === (7))){
var inst_33495 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
var statearr_33581_33643 = state_33579__$1;
(statearr_33581_33643[(2)] = inst_33495);

(statearr_33581_33643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (20))){
var inst_33507 = (state_33579[(7)]);
var state_33579__$1 = state_33579;
var statearr_33582_33644 = state_33579__$1;
(statearr_33582_33644[(2)] = inst_33507);

(statearr_33582_33644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (27))){
var state_33579__$1 = state_33579;
var statearr_33583_33645 = state_33579__$1;
(statearr_33583_33645[(2)] = null);

(statearr_33583_33645[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (1))){
var inst_33483 = (state_33579[(8)]);
var inst_33483__$1 = calc_state.call(null);
var inst_33485 = (inst_33483__$1 == null);
var inst_33486 = cljs.core.not.call(null,inst_33485);
var state_33579__$1 = (function (){var statearr_33584 = state_33579;
(statearr_33584[(8)] = inst_33483__$1);

return statearr_33584;
})();
if(inst_33486){
var statearr_33585_33646 = state_33579__$1;
(statearr_33585_33646[(1)] = (2));

} else {
var statearr_33586_33647 = state_33579__$1;
(statearr_33586_33647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (24))){
var inst_33539 = (state_33579[(9)]);
var inst_33553 = (state_33579[(10)]);
var inst_33530 = (state_33579[(11)]);
var inst_33553__$1 = inst_33530.call(null,inst_33539);
var state_33579__$1 = (function (){var statearr_33587 = state_33579;
(statearr_33587[(10)] = inst_33553__$1);

return statearr_33587;
})();
if(cljs.core.truth_(inst_33553__$1)){
var statearr_33588_33648 = state_33579__$1;
(statearr_33588_33648[(1)] = (29));

} else {
var statearr_33589_33649 = state_33579__$1;
(statearr_33589_33649[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (4))){
var inst_33498 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33498)){
var statearr_33590_33650 = state_33579__$1;
(statearr_33590_33650[(1)] = (8));

} else {
var statearr_33591_33651 = state_33579__$1;
(statearr_33591_33651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (15))){
var inst_33524 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33524)){
var statearr_33592_33652 = state_33579__$1;
(statearr_33592_33652[(1)] = (19));

} else {
var statearr_33593_33653 = state_33579__$1;
(statearr_33593_33653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (21))){
var inst_33529 = (state_33579[(12)]);
var inst_33529__$1 = (state_33579[(2)]);
var inst_33530 = cljs.core.get.call(null,inst_33529__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33531 = cljs.core.get.call(null,inst_33529__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33532 = cljs.core.get.call(null,inst_33529__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33579__$1 = (function (){var statearr_33594 = state_33579;
(statearr_33594[(13)] = inst_33531);

(statearr_33594[(12)] = inst_33529__$1);

(statearr_33594[(11)] = inst_33530);

return statearr_33594;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33579__$1,(22),inst_33532);
} else {
if((state_val_33580 === (31))){
var inst_33561 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33561)){
var statearr_33595_33654 = state_33579__$1;
(statearr_33595_33654[(1)] = (32));

} else {
var statearr_33596_33655 = state_33579__$1;
(statearr_33596_33655[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (32))){
var inst_33538 = (state_33579[(14)]);
var state_33579__$1 = state_33579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33579__$1,(35),out,inst_33538);
} else {
if((state_val_33580 === (33))){
var inst_33529 = (state_33579[(12)]);
var inst_33507 = inst_33529;
var state_33579__$1 = (function (){var statearr_33597 = state_33579;
(statearr_33597[(7)] = inst_33507);

return statearr_33597;
})();
var statearr_33598_33656 = state_33579__$1;
(statearr_33598_33656[(2)] = null);

(statearr_33598_33656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (13))){
var inst_33507 = (state_33579[(7)]);
var inst_33514 = inst_33507.cljs$lang$protocol_mask$partition0$;
var inst_33515 = (inst_33514 & (64));
var inst_33516 = inst_33507.cljs$core$ISeq$;
var inst_33517 = (inst_33515) || (inst_33516);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33517)){
var statearr_33599_33657 = state_33579__$1;
(statearr_33599_33657[(1)] = (16));

} else {
var statearr_33600_33658 = state_33579__$1;
(statearr_33600_33658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (22))){
var inst_33539 = (state_33579[(9)]);
var inst_33538 = (state_33579[(14)]);
var inst_33537 = (state_33579[(2)]);
var inst_33538__$1 = cljs.core.nth.call(null,inst_33537,(0),null);
var inst_33539__$1 = cljs.core.nth.call(null,inst_33537,(1),null);
var inst_33540 = (inst_33538__$1 == null);
var inst_33541 = cljs.core._EQ_.call(null,inst_33539__$1,change);
var inst_33542 = (inst_33540) || (inst_33541);
var state_33579__$1 = (function (){var statearr_33601 = state_33579;
(statearr_33601[(9)] = inst_33539__$1);

(statearr_33601[(14)] = inst_33538__$1);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33542)){
var statearr_33602_33659 = state_33579__$1;
(statearr_33602_33659[(1)] = (23));

} else {
var statearr_33603_33660 = state_33579__$1;
(statearr_33603_33660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (36))){
var inst_33529 = (state_33579[(12)]);
var inst_33507 = inst_33529;
var state_33579__$1 = (function (){var statearr_33604 = state_33579;
(statearr_33604[(7)] = inst_33507);

return statearr_33604;
})();
var statearr_33605_33661 = state_33579__$1;
(statearr_33605_33661[(2)] = null);

(statearr_33605_33661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (29))){
var inst_33553 = (state_33579[(10)]);
var state_33579__$1 = state_33579;
var statearr_33606_33662 = state_33579__$1;
(statearr_33606_33662[(2)] = inst_33553);

(statearr_33606_33662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (6))){
var state_33579__$1 = state_33579;
var statearr_33607_33663 = state_33579__$1;
(statearr_33607_33663[(2)] = false);

(statearr_33607_33663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (28))){
var inst_33549 = (state_33579[(2)]);
var inst_33550 = calc_state.call(null);
var inst_33507 = inst_33550;
var state_33579__$1 = (function (){var statearr_33608 = state_33579;
(statearr_33608[(7)] = inst_33507);

(statearr_33608[(15)] = inst_33549);

return statearr_33608;
})();
var statearr_33609_33664 = state_33579__$1;
(statearr_33609_33664[(2)] = null);

(statearr_33609_33664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (25))){
var inst_33575 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
var statearr_33610_33665 = state_33579__$1;
(statearr_33610_33665[(2)] = inst_33575);

(statearr_33610_33665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (34))){
var inst_33573 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
var statearr_33611_33666 = state_33579__$1;
(statearr_33611_33666[(2)] = inst_33573);

(statearr_33611_33666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (17))){
var state_33579__$1 = state_33579;
var statearr_33612_33667 = state_33579__$1;
(statearr_33612_33667[(2)] = false);

(statearr_33612_33667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (3))){
var state_33579__$1 = state_33579;
var statearr_33613_33668 = state_33579__$1;
(statearr_33613_33668[(2)] = false);

(statearr_33613_33668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (12))){
var inst_33577 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33579__$1,inst_33577);
} else {
if((state_val_33580 === (2))){
var inst_33483 = (state_33579[(8)]);
var inst_33488 = inst_33483.cljs$lang$protocol_mask$partition0$;
var inst_33489 = (inst_33488 & (64));
var inst_33490 = inst_33483.cljs$core$ISeq$;
var inst_33491 = (inst_33489) || (inst_33490);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33491)){
var statearr_33614_33669 = state_33579__$1;
(statearr_33614_33669[(1)] = (5));

} else {
var statearr_33615_33670 = state_33579__$1;
(statearr_33615_33670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (23))){
var inst_33538 = (state_33579[(14)]);
var inst_33544 = (inst_33538 == null);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33544)){
var statearr_33616_33671 = state_33579__$1;
(statearr_33616_33671[(1)] = (26));

} else {
var statearr_33617_33672 = state_33579__$1;
(statearr_33617_33672[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (35))){
var inst_33564 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33564)){
var statearr_33618_33673 = state_33579__$1;
(statearr_33618_33673[(1)] = (36));

} else {
var statearr_33619_33674 = state_33579__$1;
(statearr_33619_33674[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (19))){
var inst_33507 = (state_33579[(7)]);
var inst_33526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33507);
var state_33579__$1 = state_33579;
var statearr_33620_33675 = state_33579__$1;
(statearr_33620_33675[(2)] = inst_33526);

(statearr_33620_33675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (11))){
var inst_33507 = (state_33579[(7)]);
var inst_33511 = (inst_33507 == null);
var inst_33512 = cljs.core.not.call(null,inst_33511);
var state_33579__$1 = state_33579;
if(inst_33512){
var statearr_33621_33676 = state_33579__$1;
(statearr_33621_33676[(1)] = (13));

} else {
var statearr_33622_33677 = state_33579__$1;
(statearr_33622_33677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (9))){
var inst_33483 = (state_33579[(8)]);
var state_33579__$1 = state_33579;
var statearr_33623_33678 = state_33579__$1;
(statearr_33623_33678[(2)] = inst_33483);

(statearr_33623_33678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (5))){
var state_33579__$1 = state_33579;
var statearr_33624_33679 = state_33579__$1;
(statearr_33624_33679[(2)] = true);

(statearr_33624_33679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (14))){
var state_33579__$1 = state_33579;
var statearr_33625_33680 = state_33579__$1;
(statearr_33625_33680[(2)] = false);

(statearr_33625_33680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (26))){
var inst_33539 = (state_33579[(9)]);
var inst_33546 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33539);
var state_33579__$1 = state_33579;
var statearr_33626_33681 = state_33579__$1;
(statearr_33626_33681[(2)] = inst_33546);

(statearr_33626_33681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (16))){
var state_33579__$1 = state_33579;
var statearr_33627_33682 = state_33579__$1;
(statearr_33627_33682[(2)] = true);

(statearr_33627_33682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (38))){
var inst_33569 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
var statearr_33628_33683 = state_33579__$1;
(statearr_33628_33683[(2)] = inst_33569);

(statearr_33628_33683[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (30))){
var inst_33531 = (state_33579[(13)]);
var inst_33539 = (state_33579[(9)]);
var inst_33530 = (state_33579[(11)]);
var inst_33556 = cljs.core.empty_QMARK_.call(null,inst_33530);
var inst_33557 = inst_33531.call(null,inst_33539);
var inst_33558 = cljs.core.not.call(null,inst_33557);
var inst_33559 = (inst_33556) && (inst_33558);
var state_33579__$1 = state_33579;
var statearr_33629_33684 = state_33579__$1;
(statearr_33629_33684[(2)] = inst_33559);

(statearr_33629_33684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (10))){
var inst_33483 = (state_33579[(8)]);
var inst_33503 = (state_33579[(2)]);
var inst_33504 = cljs.core.get.call(null,inst_33503,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33505 = cljs.core.get.call(null,inst_33503,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33506 = cljs.core.get.call(null,inst_33503,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33507 = inst_33483;
var state_33579__$1 = (function (){var statearr_33630 = state_33579;
(statearr_33630[(7)] = inst_33507);

(statearr_33630[(16)] = inst_33506);

(statearr_33630[(17)] = inst_33505);

(statearr_33630[(18)] = inst_33504);

return statearr_33630;
})();
var statearr_33631_33685 = state_33579__$1;
(statearr_33631_33685[(2)] = null);

(statearr_33631_33685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (18))){
var inst_33521 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
var statearr_33632_33686 = state_33579__$1;
(statearr_33632_33686[(2)] = inst_33521);

(statearr_33632_33686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (37))){
var state_33579__$1 = state_33579;
var statearr_33633_33687 = state_33579__$1;
(statearr_33633_33687[(2)] = null);

(statearr_33633_33687[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (8))){
var inst_33483 = (state_33579[(8)]);
var inst_33500 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33483);
var state_33579__$1 = state_33579;
var statearr_33634_33688 = state_33579__$1;
(statearr_33634_33688[(2)] = inst_33500);

(statearr_33634_33688[(1)] = (10));


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
});})(c__31895__auto___33642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31781__auto__,c__31895__auto___33642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31782__auto__ = null;
var cljs$core$async$mix_$_state_machine__31782__auto____0 = (function (){
var statearr_33638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33638[(0)] = cljs$core$async$mix_$_state_machine__31782__auto__);

(statearr_33638[(1)] = (1));

return statearr_33638;
});
var cljs$core$async$mix_$_state_machine__31782__auto____1 = (function (state_33579){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_33579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e33639){if((e33639 instanceof Object)){
var ex__31785__auto__ = e33639;
var statearr_33640_33689 = state_33579;
(statearr_33640_33689[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33690 = state_33579;
state_33579 = G__33690;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31782__auto__ = function(state_33579){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31782__auto____1.call(this,state_33579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31782__auto____0;
cljs$core$async$mix_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31782__auto____1;
return cljs$core$async$mix_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___33642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31897__auto__ = (function (){var statearr_33641 = f__31896__auto__.call(null);
(statearr_33641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___33642);

return statearr_33641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___33642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22304__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p,v,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33691 = [];
var len__22773__auto___33694 = arguments.length;
var i__22774__auto___33695 = (0);
while(true){
if((i__22774__auto___33695 < len__22773__auto___33694)){
args33691.push((arguments[i__22774__auto___33695]));

var G__33696 = (i__22774__auto___33695 + (1));
i__22774__auto___33695 = G__33696;
continue;
} else {
}
break;
}

var G__33693 = args33691.length;
switch (G__33693) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33691.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p);
} else {
var m__22304__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p);
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
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p,v);
} else {
var m__22304__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p,v);
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
var args33699 = [];
var len__22773__auto___33824 = arguments.length;
var i__22774__auto___33825 = (0);
while(true){
if((i__22774__auto___33825 < len__22773__auto___33824)){
args33699.push((arguments[i__22774__auto___33825]));

var G__33826 = (i__22774__auto___33825 + (1));
i__22774__auto___33825 = G__33826;
continue;
} else {
}
break;
}

var G__33701 = args33699.length;
switch (G__33701) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33699.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21590__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21590__auto__,mults){
return (function (p1__33698_SHARP_){
if(cljs.core.truth_(p1__33698_SHARP_.call(null,topic))){
return p1__33698_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33698_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21590__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33702 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33703){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33703 = meta33703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33704,meta33703__$1){
var self__ = this;
var _33704__$1 = this;
return (new cljs.core.async.t_cljs$core$async33702(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33703__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33704){
var self__ = this;
var _33704__$1 = this;
return self__.meta33703;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6552__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6552__auto__)){
var m = temp__6552__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33703","meta33703",-452909916,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33702";

cljs.core.async.t_cljs$core$async33702.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async33702");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33702 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33703){
return (new cljs.core.async.t_cljs$core$async33702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33703));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33702(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31895__auto___33828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___33828,mults,ensure_mult,p){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___33828,mults,ensure_mult,p){
return (function (state_33776){
var state_val_33777 = (state_33776[(1)]);
if((state_val_33777 === (7))){
var inst_33772 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33778_33829 = state_33776__$1;
(statearr_33778_33829[(2)] = inst_33772);

(statearr_33778_33829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (20))){
var state_33776__$1 = state_33776;
var statearr_33779_33830 = state_33776__$1;
(statearr_33779_33830[(2)] = null);

(statearr_33779_33830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (1))){
var state_33776__$1 = state_33776;
var statearr_33780_33831 = state_33776__$1;
(statearr_33780_33831[(2)] = null);

(statearr_33780_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (24))){
var inst_33755 = (state_33776[(7)]);
var inst_33764 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33755);
var state_33776__$1 = state_33776;
var statearr_33781_33832 = state_33776__$1;
(statearr_33781_33832[(2)] = inst_33764);

(statearr_33781_33832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (4))){
var inst_33707 = (state_33776[(8)]);
var inst_33707__$1 = (state_33776[(2)]);
var inst_33708 = (inst_33707__$1 == null);
var state_33776__$1 = (function (){var statearr_33782 = state_33776;
(statearr_33782[(8)] = inst_33707__$1);

return statearr_33782;
})();
if(cljs.core.truth_(inst_33708)){
var statearr_33783_33833 = state_33776__$1;
(statearr_33783_33833[(1)] = (5));

} else {
var statearr_33784_33834 = state_33776__$1;
(statearr_33784_33834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (15))){
var inst_33749 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33785_33835 = state_33776__$1;
(statearr_33785_33835[(2)] = inst_33749);

(statearr_33785_33835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (21))){
var inst_33769 = (state_33776[(2)]);
var state_33776__$1 = (function (){var statearr_33786 = state_33776;
(statearr_33786[(9)] = inst_33769);

return statearr_33786;
})();
var statearr_33787_33836 = state_33776__$1;
(statearr_33787_33836[(2)] = null);

(statearr_33787_33836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (13))){
var inst_33731 = (state_33776[(10)]);
var inst_33733 = cljs.core.chunked_seq_QMARK_.call(null,inst_33731);
var state_33776__$1 = state_33776;
if(inst_33733){
var statearr_33788_33837 = state_33776__$1;
(statearr_33788_33837[(1)] = (16));

} else {
var statearr_33789_33838 = state_33776__$1;
(statearr_33789_33838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (22))){
var inst_33761 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33761)){
var statearr_33790_33839 = state_33776__$1;
(statearr_33790_33839[(1)] = (23));

} else {
var statearr_33791_33840 = state_33776__$1;
(statearr_33791_33840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (6))){
var inst_33757 = (state_33776[(11)]);
var inst_33707 = (state_33776[(8)]);
var inst_33755 = (state_33776[(7)]);
var inst_33755__$1 = topic_fn.call(null,inst_33707);
var inst_33756 = cljs.core.deref.call(null,mults);
var inst_33757__$1 = cljs.core.get.call(null,inst_33756,inst_33755__$1);
var state_33776__$1 = (function (){var statearr_33792 = state_33776;
(statearr_33792[(11)] = inst_33757__$1);

(statearr_33792[(7)] = inst_33755__$1);

return statearr_33792;
})();
if(cljs.core.truth_(inst_33757__$1)){
var statearr_33793_33841 = state_33776__$1;
(statearr_33793_33841[(1)] = (19));

} else {
var statearr_33794_33842 = state_33776__$1;
(statearr_33794_33842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (25))){
var inst_33766 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33795_33843 = state_33776__$1;
(statearr_33795_33843[(2)] = inst_33766);

(statearr_33795_33843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (17))){
var inst_33731 = (state_33776[(10)]);
var inst_33740 = cljs.core.first.call(null,inst_33731);
var inst_33741 = cljs.core.async.muxch_STAR_.call(null,inst_33740);
var inst_33742 = cljs.core.async.close_BANG_.call(null,inst_33741);
var inst_33743 = cljs.core.next.call(null,inst_33731);
var inst_33717 = inst_33743;
var inst_33718 = null;
var inst_33719 = (0);
var inst_33720 = (0);
var state_33776__$1 = (function (){var statearr_33796 = state_33776;
(statearr_33796[(12)] = inst_33719);

(statearr_33796[(13)] = inst_33742);

(statearr_33796[(14)] = inst_33717);

(statearr_33796[(15)] = inst_33720);

(statearr_33796[(16)] = inst_33718);

return statearr_33796;
})();
var statearr_33797_33844 = state_33776__$1;
(statearr_33797_33844[(2)] = null);

(statearr_33797_33844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (3))){
var inst_33774 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33776__$1,inst_33774);
} else {
if((state_val_33777 === (12))){
var inst_33751 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33798_33845 = state_33776__$1;
(statearr_33798_33845[(2)] = inst_33751);

(statearr_33798_33845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (2))){
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33776__$1,(4),ch);
} else {
if((state_val_33777 === (23))){
var state_33776__$1 = state_33776;
var statearr_33799_33846 = state_33776__$1;
(statearr_33799_33846[(2)] = null);

(statearr_33799_33846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (19))){
var inst_33757 = (state_33776[(11)]);
var inst_33707 = (state_33776[(8)]);
var inst_33759 = cljs.core.async.muxch_STAR_.call(null,inst_33757);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33776__$1,(22),inst_33759,inst_33707);
} else {
if((state_val_33777 === (11))){
var inst_33731 = (state_33776[(10)]);
var inst_33717 = (state_33776[(14)]);
var inst_33731__$1 = cljs.core.seq.call(null,inst_33717);
var state_33776__$1 = (function (){var statearr_33800 = state_33776;
(statearr_33800[(10)] = inst_33731__$1);

return statearr_33800;
})();
if(inst_33731__$1){
var statearr_33801_33847 = state_33776__$1;
(statearr_33801_33847[(1)] = (13));

} else {
var statearr_33802_33848 = state_33776__$1;
(statearr_33802_33848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (9))){
var inst_33753 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33803_33849 = state_33776__$1;
(statearr_33803_33849[(2)] = inst_33753);

(statearr_33803_33849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (5))){
var inst_33714 = cljs.core.deref.call(null,mults);
var inst_33715 = cljs.core.vals.call(null,inst_33714);
var inst_33716 = cljs.core.seq.call(null,inst_33715);
var inst_33717 = inst_33716;
var inst_33718 = null;
var inst_33719 = (0);
var inst_33720 = (0);
var state_33776__$1 = (function (){var statearr_33804 = state_33776;
(statearr_33804[(12)] = inst_33719);

(statearr_33804[(14)] = inst_33717);

(statearr_33804[(15)] = inst_33720);

(statearr_33804[(16)] = inst_33718);

return statearr_33804;
})();
var statearr_33805_33850 = state_33776__$1;
(statearr_33805_33850[(2)] = null);

(statearr_33805_33850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (14))){
var state_33776__$1 = state_33776;
var statearr_33809_33851 = state_33776__$1;
(statearr_33809_33851[(2)] = null);

(statearr_33809_33851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (16))){
var inst_33731 = (state_33776[(10)]);
var inst_33735 = cljs.core.chunk_first.call(null,inst_33731);
var inst_33736 = cljs.core.chunk_rest.call(null,inst_33731);
var inst_33737 = cljs.core.count.call(null,inst_33735);
var inst_33717 = inst_33736;
var inst_33718 = inst_33735;
var inst_33719 = inst_33737;
var inst_33720 = (0);
var state_33776__$1 = (function (){var statearr_33810 = state_33776;
(statearr_33810[(12)] = inst_33719);

(statearr_33810[(14)] = inst_33717);

(statearr_33810[(15)] = inst_33720);

(statearr_33810[(16)] = inst_33718);

return statearr_33810;
})();
var statearr_33811_33852 = state_33776__$1;
(statearr_33811_33852[(2)] = null);

(statearr_33811_33852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (10))){
var inst_33719 = (state_33776[(12)]);
var inst_33717 = (state_33776[(14)]);
var inst_33720 = (state_33776[(15)]);
var inst_33718 = (state_33776[(16)]);
var inst_33725 = cljs.core._nth.call(null,inst_33718,inst_33720);
var inst_33726 = cljs.core.async.muxch_STAR_.call(null,inst_33725);
var inst_33727 = cljs.core.async.close_BANG_.call(null,inst_33726);
var inst_33728 = (inst_33720 + (1));
var tmp33806 = inst_33719;
var tmp33807 = inst_33717;
var tmp33808 = inst_33718;
var inst_33717__$1 = tmp33807;
var inst_33718__$1 = tmp33808;
var inst_33719__$1 = tmp33806;
var inst_33720__$1 = inst_33728;
var state_33776__$1 = (function (){var statearr_33812 = state_33776;
(statearr_33812[(12)] = inst_33719__$1);

(statearr_33812[(17)] = inst_33727);

(statearr_33812[(14)] = inst_33717__$1);

(statearr_33812[(15)] = inst_33720__$1);

(statearr_33812[(16)] = inst_33718__$1);

return statearr_33812;
})();
var statearr_33813_33853 = state_33776__$1;
(statearr_33813_33853[(2)] = null);

(statearr_33813_33853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (18))){
var inst_33746 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33814_33854 = state_33776__$1;
(statearr_33814_33854[(2)] = inst_33746);

(statearr_33814_33854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (8))){
var inst_33719 = (state_33776[(12)]);
var inst_33720 = (state_33776[(15)]);
var inst_33722 = (inst_33720 < inst_33719);
var inst_33723 = inst_33722;
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33723)){
var statearr_33815_33855 = state_33776__$1;
(statearr_33815_33855[(1)] = (10));

} else {
var statearr_33816_33856 = state_33776__$1;
(statearr_33816_33856[(1)] = (11));

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
});})(c__31895__auto___33828,mults,ensure_mult,p))
;
return ((function (switch__31781__auto__,c__31895__auto___33828,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_33820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33820[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_33820[(1)] = (1));

return statearr_33820;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_33776){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_33776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e33821){if((e33821 instanceof Object)){
var ex__31785__auto__ = e33821;
var statearr_33822_33857 = state_33776;
(statearr_33822_33857[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33858 = state_33776;
state_33776 = G__33858;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_33776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_33776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___33828,mults,ensure_mult,p))
})();
var state__31897__auto__ = (function (){var statearr_33823 = f__31896__auto__.call(null);
(statearr_33823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___33828);

return statearr_33823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___33828,mults,ensure_mult,p))
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
var args33859 = [];
var len__22773__auto___33862 = arguments.length;
var i__22774__auto___33863 = (0);
while(true){
if((i__22774__auto___33863 < len__22773__auto___33862)){
args33859.push((arguments[i__22774__auto___33863]));

var G__33864 = (i__22774__auto___33863 + (1));
i__22774__auto___33863 = G__33864;
continue;
} else {
}
break;
}

var G__33861 = args33859.length;
switch (G__33861) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33859.length)].join('')));

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
var args33866 = [];
var len__22773__auto___33869 = arguments.length;
var i__22774__auto___33870 = (0);
while(true){
if((i__22774__auto___33870 < len__22773__auto___33869)){
args33866.push((arguments[i__22774__auto___33870]));

var G__33871 = (i__22774__auto___33870 + (1));
i__22774__auto___33870 = G__33871;
continue;
} else {
}
break;
}

var G__33868 = args33866.length;
switch (G__33868) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33866.length)].join('')));

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
var args33873 = [];
var len__22773__auto___33944 = arguments.length;
var i__22774__auto___33945 = (0);
while(true){
if((i__22774__auto___33945 < len__22773__auto___33944)){
args33873.push((arguments[i__22774__auto___33945]));

var G__33946 = (i__22774__auto___33945 + (1));
i__22774__auto___33945 = G__33946;
continue;
} else {
}
break;
}

var G__33875 = args33873.length;
switch (G__33875) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33873.length)].join('')));

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
var c__31895__auto___33948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___33948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___33948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33914){
var state_val_33915 = (state_33914[(1)]);
if((state_val_33915 === (7))){
var state_33914__$1 = state_33914;
var statearr_33916_33949 = state_33914__$1;
(statearr_33916_33949[(2)] = null);

(statearr_33916_33949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (1))){
var state_33914__$1 = state_33914;
var statearr_33917_33950 = state_33914__$1;
(statearr_33917_33950[(2)] = null);

(statearr_33917_33950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (4))){
var inst_33878 = (state_33914[(7)]);
var inst_33880 = (inst_33878 < cnt);
var state_33914__$1 = state_33914;
if(cljs.core.truth_(inst_33880)){
var statearr_33918_33951 = state_33914__$1;
(statearr_33918_33951[(1)] = (6));

} else {
var statearr_33919_33952 = state_33914__$1;
(statearr_33919_33952[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (15))){
var inst_33910 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
var statearr_33920_33953 = state_33914__$1;
(statearr_33920_33953[(2)] = inst_33910);

(statearr_33920_33953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (13))){
var inst_33903 = cljs.core.async.close_BANG_.call(null,out);
var state_33914__$1 = state_33914;
var statearr_33921_33954 = state_33914__$1;
(statearr_33921_33954[(2)] = inst_33903);

(statearr_33921_33954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (6))){
var state_33914__$1 = state_33914;
var statearr_33922_33955 = state_33914__$1;
(statearr_33922_33955[(2)] = null);

(statearr_33922_33955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (3))){
var inst_33912 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33914__$1,inst_33912);
} else {
if((state_val_33915 === (12))){
var inst_33900 = (state_33914[(8)]);
var inst_33900__$1 = (state_33914[(2)]);
var inst_33901 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33900__$1);
var state_33914__$1 = (function (){var statearr_33923 = state_33914;
(statearr_33923[(8)] = inst_33900__$1);

return statearr_33923;
})();
if(cljs.core.truth_(inst_33901)){
var statearr_33924_33956 = state_33914__$1;
(statearr_33924_33956[(1)] = (13));

} else {
var statearr_33925_33957 = state_33914__$1;
(statearr_33925_33957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (2))){
var inst_33877 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33878 = (0);
var state_33914__$1 = (function (){var statearr_33926 = state_33914;
(statearr_33926[(7)] = inst_33878);

(statearr_33926[(9)] = inst_33877);

return statearr_33926;
})();
var statearr_33927_33958 = state_33914__$1;
(statearr_33927_33958[(2)] = null);

(statearr_33927_33958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (11))){
var inst_33878 = (state_33914[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33914,(10),Object,null,(9));
var inst_33887 = chs__$1.call(null,inst_33878);
var inst_33888 = done.call(null,inst_33878);
var inst_33889 = cljs.core.async.take_BANG_.call(null,inst_33887,inst_33888);
var state_33914__$1 = state_33914;
var statearr_33928_33959 = state_33914__$1;
(statearr_33928_33959[(2)] = inst_33889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (9))){
var inst_33878 = (state_33914[(7)]);
var inst_33891 = (state_33914[(2)]);
var inst_33892 = (inst_33878 + (1));
var inst_33878__$1 = inst_33892;
var state_33914__$1 = (function (){var statearr_33929 = state_33914;
(statearr_33929[(7)] = inst_33878__$1);

(statearr_33929[(10)] = inst_33891);

return statearr_33929;
})();
var statearr_33930_33960 = state_33914__$1;
(statearr_33930_33960[(2)] = null);

(statearr_33930_33960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (5))){
var inst_33898 = (state_33914[(2)]);
var state_33914__$1 = (function (){var statearr_33931 = state_33914;
(statearr_33931[(11)] = inst_33898);

return statearr_33931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33914__$1,(12),dchan);
} else {
if((state_val_33915 === (14))){
var inst_33900 = (state_33914[(8)]);
var inst_33905 = cljs.core.apply.call(null,f,inst_33900);
var state_33914__$1 = state_33914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33914__$1,(16),out,inst_33905);
} else {
if((state_val_33915 === (16))){
var inst_33907 = (state_33914[(2)]);
var state_33914__$1 = (function (){var statearr_33932 = state_33914;
(statearr_33932[(12)] = inst_33907);

return statearr_33932;
})();
var statearr_33933_33961 = state_33914__$1;
(statearr_33933_33961[(2)] = null);

(statearr_33933_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (10))){
var inst_33882 = (state_33914[(2)]);
var inst_33883 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33914__$1 = (function (){var statearr_33934 = state_33914;
(statearr_33934[(13)] = inst_33882);

return statearr_33934;
})();
var statearr_33935_33962 = state_33914__$1;
(statearr_33935_33962[(2)] = inst_33883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (8))){
var inst_33896 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
var statearr_33936_33963 = state_33914__$1;
(statearr_33936_33963[(2)] = inst_33896);

(statearr_33936_33963[(1)] = (5));


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
});})(c__31895__auto___33948,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31781__auto__,c__31895__auto___33948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_33940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33940[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_33940[(1)] = (1));

return statearr_33940;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_33914){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_33914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e33941){if((e33941 instanceof Object)){
var ex__31785__auto__ = e33941;
var statearr_33942_33964 = state_33914;
(statearr_33942_33964[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33965 = state_33914;
state_33914 = G__33965;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_33914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_33914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___33948,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31897__auto__ = (function (){var statearr_33943 = f__31896__auto__.call(null);
(statearr_33943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___33948);

return statearr_33943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___33948,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33967 = [];
var len__22773__auto___34025 = arguments.length;
var i__22774__auto___34026 = (0);
while(true){
if((i__22774__auto___34026 < len__22773__auto___34025)){
args33967.push((arguments[i__22774__auto___34026]));

var G__34027 = (i__22774__auto___34026 + (1));
i__22774__auto___34026 = G__34027;
continue;
} else {
}
break;
}

var G__33969 = args33967.length;
switch (G__33969) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33967.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31895__auto___34029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___34029,out){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___34029,out){
return (function (state_34001){
var state_val_34002 = (state_34001[(1)]);
if((state_val_34002 === (7))){
var inst_33981 = (state_34001[(7)]);
var inst_33980 = (state_34001[(8)]);
var inst_33980__$1 = (state_34001[(2)]);
var inst_33981__$1 = cljs.core.nth.call(null,inst_33980__$1,(0),null);
var inst_33982 = cljs.core.nth.call(null,inst_33980__$1,(1),null);
var inst_33983 = (inst_33981__$1 == null);
var state_34001__$1 = (function (){var statearr_34003 = state_34001;
(statearr_34003[(7)] = inst_33981__$1);

(statearr_34003[(8)] = inst_33980__$1);

(statearr_34003[(9)] = inst_33982);

return statearr_34003;
})();
if(cljs.core.truth_(inst_33983)){
var statearr_34004_34030 = state_34001__$1;
(statearr_34004_34030[(1)] = (8));

} else {
var statearr_34005_34031 = state_34001__$1;
(statearr_34005_34031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (1))){
var inst_33970 = cljs.core.vec.call(null,chs);
var inst_33971 = inst_33970;
var state_34001__$1 = (function (){var statearr_34006 = state_34001;
(statearr_34006[(10)] = inst_33971);

return statearr_34006;
})();
var statearr_34007_34032 = state_34001__$1;
(statearr_34007_34032[(2)] = null);

(statearr_34007_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (4))){
var inst_33971 = (state_34001[(10)]);
var state_34001__$1 = state_34001;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34001__$1,(7),inst_33971);
} else {
if((state_val_34002 === (6))){
var inst_33997 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34008_34033 = state_34001__$1;
(statearr_34008_34033[(2)] = inst_33997);

(statearr_34008_34033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (3))){
var inst_33999 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34001__$1,inst_33999);
} else {
if((state_val_34002 === (2))){
var inst_33971 = (state_34001[(10)]);
var inst_33973 = cljs.core.count.call(null,inst_33971);
var inst_33974 = (inst_33973 > (0));
var state_34001__$1 = state_34001;
if(cljs.core.truth_(inst_33974)){
var statearr_34010_34034 = state_34001__$1;
(statearr_34010_34034[(1)] = (4));

} else {
var statearr_34011_34035 = state_34001__$1;
(statearr_34011_34035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (11))){
var inst_33971 = (state_34001[(10)]);
var inst_33990 = (state_34001[(2)]);
var tmp34009 = inst_33971;
var inst_33971__$1 = tmp34009;
var state_34001__$1 = (function (){var statearr_34012 = state_34001;
(statearr_34012[(10)] = inst_33971__$1);

(statearr_34012[(11)] = inst_33990);

return statearr_34012;
})();
var statearr_34013_34036 = state_34001__$1;
(statearr_34013_34036[(2)] = null);

(statearr_34013_34036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (9))){
var inst_33981 = (state_34001[(7)]);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34001__$1,(11),out,inst_33981);
} else {
if((state_val_34002 === (5))){
var inst_33995 = cljs.core.async.close_BANG_.call(null,out);
var state_34001__$1 = state_34001;
var statearr_34014_34037 = state_34001__$1;
(statearr_34014_34037[(2)] = inst_33995);

(statearr_34014_34037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (10))){
var inst_33993 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34015_34038 = state_34001__$1;
(statearr_34015_34038[(2)] = inst_33993);

(statearr_34015_34038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (8))){
var inst_33971 = (state_34001[(10)]);
var inst_33981 = (state_34001[(7)]);
var inst_33980 = (state_34001[(8)]);
var inst_33982 = (state_34001[(9)]);
var inst_33985 = (function (){var cs = inst_33971;
var vec__33976 = inst_33980;
var v = inst_33981;
var c = inst_33982;
return ((function (cs,vec__33976,v,c,inst_33971,inst_33981,inst_33980,inst_33982,state_val_34002,c__31895__auto___34029,out){
return (function (p1__33966_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33966_SHARP_);
});
;})(cs,vec__33976,v,c,inst_33971,inst_33981,inst_33980,inst_33982,state_val_34002,c__31895__auto___34029,out))
})();
var inst_33986 = cljs.core.filterv.call(null,inst_33985,inst_33971);
var inst_33971__$1 = inst_33986;
var state_34001__$1 = (function (){var statearr_34016 = state_34001;
(statearr_34016[(10)] = inst_33971__$1);

return statearr_34016;
})();
var statearr_34017_34039 = state_34001__$1;
(statearr_34017_34039[(2)] = null);

(statearr_34017_34039[(1)] = (2));


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
});})(c__31895__auto___34029,out))
;
return ((function (switch__31781__auto__,c__31895__auto___34029,out){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_34021 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34021[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_34021[(1)] = (1));

return statearr_34021;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_34001){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_34001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e34022){if((e34022 instanceof Object)){
var ex__31785__auto__ = e34022;
var statearr_34023_34040 = state_34001;
(statearr_34023_34040[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34041 = state_34001;
state_34001 = G__34041;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_34001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_34001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___34029,out))
})();
var state__31897__auto__ = (function (){var statearr_34024 = f__31896__auto__.call(null);
(statearr_34024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___34029);

return statearr_34024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___34029,out))
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
var args34042 = [];
var len__22773__auto___34091 = arguments.length;
var i__22774__auto___34092 = (0);
while(true){
if((i__22774__auto___34092 < len__22773__auto___34091)){
args34042.push((arguments[i__22774__auto___34092]));

var G__34093 = (i__22774__auto___34092 + (1));
i__22774__auto___34092 = G__34093;
continue;
} else {
}
break;
}

var G__34044 = args34042.length;
switch (G__34044) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34042.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31895__auto___34095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___34095,out){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___34095,out){
return (function (state_34068){
var state_val_34069 = (state_34068[(1)]);
if((state_val_34069 === (7))){
var inst_34050 = (state_34068[(7)]);
var inst_34050__$1 = (state_34068[(2)]);
var inst_34051 = (inst_34050__$1 == null);
var inst_34052 = cljs.core.not.call(null,inst_34051);
var state_34068__$1 = (function (){var statearr_34070 = state_34068;
(statearr_34070[(7)] = inst_34050__$1);

return statearr_34070;
})();
if(inst_34052){
var statearr_34071_34096 = state_34068__$1;
(statearr_34071_34096[(1)] = (8));

} else {
var statearr_34072_34097 = state_34068__$1;
(statearr_34072_34097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (1))){
var inst_34045 = (0);
var state_34068__$1 = (function (){var statearr_34073 = state_34068;
(statearr_34073[(8)] = inst_34045);

return statearr_34073;
})();
var statearr_34074_34098 = state_34068__$1;
(statearr_34074_34098[(2)] = null);

(statearr_34074_34098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (4))){
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34068__$1,(7),ch);
} else {
if((state_val_34069 === (6))){
var inst_34063 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34075_34099 = state_34068__$1;
(statearr_34075_34099[(2)] = inst_34063);

(statearr_34075_34099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (3))){
var inst_34065 = (state_34068[(2)]);
var inst_34066 = cljs.core.async.close_BANG_.call(null,out);
var state_34068__$1 = (function (){var statearr_34076 = state_34068;
(statearr_34076[(9)] = inst_34065);

return statearr_34076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34068__$1,inst_34066);
} else {
if((state_val_34069 === (2))){
var inst_34045 = (state_34068[(8)]);
var inst_34047 = (inst_34045 < n);
var state_34068__$1 = state_34068;
if(cljs.core.truth_(inst_34047)){
var statearr_34077_34100 = state_34068__$1;
(statearr_34077_34100[(1)] = (4));

} else {
var statearr_34078_34101 = state_34068__$1;
(statearr_34078_34101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (11))){
var inst_34045 = (state_34068[(8)]);
var inst_34055 = (state_34068[(2)]);
var inst_34056 = (inst_34045 + (1));
var inst_34045__$1 = inst_34056;
var state_34068__$1 = (function (){var statearr_34079 = state_34068;
(statearr_34079[(10)] = inst_34055);

(statearr_34079[(8)] = inst_34045__$1);

return statearr_34079;
})();
var statearr_34080_34102 = state_34068__$1;
(statearr_34080_34102[(2)] = null);

(statearr_34080_34102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (9))){
var state_34068__$1 = state_34068;
var statearr_34081_34103 = state_34068__$1;
(statearr_34081_34103[(2)] = null);

(statearr_34081_34103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (5))){
var state_34068__$1 = state_34068;
var statearr_34082_34104 = state_34068__$1;
(statearr_34082_34104[(2)] = null);

(statearr_34082_34104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (10))){
var inst_34060 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34083_34105 = state_34068__$1;
(statearr_34083_34105[(2)] = inst_34060);

(statearr_34083_34105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (8))){
var inst_34050 = (state_34068[(7)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34068__$1,(11),out,inst_34050);
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
});})(c__31895__auto___34095,out))
;
return ((function (switch__31781__auto__,c__31895__auto___34095,out){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_34087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34087[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_34087[(1)] = (1));

return statearr_34087;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_34068){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_34068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e34088){if((e34088 instanceof Object)){
var ex__31785__auto__ = e34088;
var statearr_34089_34106 = state_34068;
(statearr_34089_34106[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34107 = state_34068;
state_34068 = G__34107;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_34068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_34068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___34095,out))
})();
var state__31897__auto__ = (function (){var statearr_34090 = f__31896__auto__.call(null);
(statearr_34090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___34095);

return statearr_34090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___34095,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34115 = (function (map_LT_,f,ch,meta34116){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34116 = meta34116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34117,meta34116__$1){
var self__ = this;
var _34117__$1 = this;
return (new cljs.core.async.t_cljs$core$async34115(self__.map_LT_,self__.f,self__.ch,meta34116__$1));
});

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34117){
var self__ = this;
var _34117__$1 = this;
return self__.meta34116;
});

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34118 = (function (map_LT_,f,ch,meta34116,_,fn1,meta34119){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34116 = meta34116;
this._ = _;
this.fn1 = fn1;
this.meta34119 = meta34119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34120,meta34119__$1){
var self__ = this;
var _34120__$1 = this;
return (new cljs.core.async.t_cljs$core$async34118(self__.map_LT_,self__.f,self__.ch,self__.meta34116,self__._,self__.fn1,meta34119__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34120){
var self__ = this;
var _34120__$1 = this;
return self__.meta34119;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34108_SHARP_){
return f1.call(null,(((p1__34108_SHARP_ == null))?null:self__.f.call(null,p1__34108_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34118.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34116","meta34116",-1424359723,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34115","cljs.core.async/t_cljs$core$async34115",1797146506,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34119","meta34119",-1482079878,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34118";

cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34118");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34118 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34118(map_LT___$1,f__$1,ch__$1,meta34116__$1,___$2,fn1__$1,meta34119){
return (new cljs.core.async.t_cljs$core$async34118(map_LT___$1,f__$1,ch__$1,meta34116__$1,___$2,fn1__$1,meta34119));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34118(self__.map_LT_,self__.f,self__.ch,self__.meta34116,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21578__auto__ = ret;
if(cljs.core.truth_(and__21578__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21578__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34116","meta34116",-1424359723,null)], null);
});

cljs.core.async.t_cljs$core$async34115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34115";

cljs.core.async.t_cljs$core$async34115.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34115");
});

cljs.core.async.__GT_t_cljs$core$async34115 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34115(map_LT___$1,f__$1,ch__$1,meta34116){
return (new cljs.core.async.t_cljs$core$async34115(map_LT___$1,f__$1,ch__$1,meta34116));
});

}

return (new cljs.core.async.t_cljs$core$async34115(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34124 = (function (map_GT_,f,ch,meta34125){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34125 = meta34125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34126,meta34125__$1){
var self__ = this;
var _34126__$1 = this;
return (new cljs.core.async.t_cljs$core$async34124(self__.map_GT_,self__.f,self__.ch,meta34125__$1));
});

cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34126){
var self__ = this;
var _34126__$1 = this;
return self__.meta34125;
});

cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34125","meta34125",-1201992459,null)], null);
});

cljs.core.async.t_cljs$core$async34124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34124";

cljs.core.async.t_cljs$core$async34124.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34124");
});

cljs.core.async.__GT_t_cljs$core$async34124 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34124(map_GT___$1,f__$1,ch__$1,meta34125){
return (new cljs.core.async.t_cljs$core$async34124(map_GT___$1,f__$1,ch__$1,meta34125));
});

}

return (new cljs.core.async.t_cljs$core$async34124(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34130 = (function (filter_GT_,p,ch,meta34131){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34131 = meta34131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34132,meta34131__$1){
var self__ = this;
var _34132__$1 = this;
return (new cljs.core.async.t_cljs$core$async34130(self__.filter_GT_,self__.p,self__.ch,meta34131__$1));
});

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34132){
var self__ = this;
var _34132__$1 = this;
return self__.meta34131;
});

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34131","meta34131",-1368441011,null)], null);
});

cljs.core.async.t_cljs$core$async34130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34130";

cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34130");
});

cljs.core.async.__GT_t_cljs$core$async34130 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34130(filter_GT___$1,p__$1,ch__$1,meta34131){
return (new cljs.core.async.t_cljs$core$async34130(filter_GT___$1,p__$1,ch__$1,meta34131));
});

}

return (new cljs.core.async.t_cljs$core$async34130(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34133 = [];
var len__22773__auto___34177 = arguments.length;
var i__22774__auto___34178 = (0);
while(true){
if((i__22774__auto___34178 < len__22773__auto___34177)){
args34133.push((arguments[i__22774__auto___34178]));

var G__34179 = (i__22774__auto___34178 + (1));
i__22774__auto___34178 = G__34179;
continue;
} else {
}
break;
}

var G__34135 = args34133.length;
switch (G__34135) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34133.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31895__auto___34181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___34181,out){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___34181,out){
return (function (state_34156){
var state_val_34157 = (state_34156[(1)]);
if((state_val_34157 === (7))){
var inst_34152 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34158_34182 = state_34156__$1;
(statearr_34158_34182[(2)] = inst_34152);

(statearr_34158_34182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (1))){
var state_34156__$1 = state_34156;
var statearr_34159_34183 = state_34156__$1;
(statearr_34159_34183[(2)] = null);

(statearr_34159_34183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (4))){
var inst_34138 = (state_34156[(7)]);
var inst_34138__$1 = (state_34156[(2)]);
var inst_34139 = (inst_34138__$1 == null);
var state_34156__$1 = (function (){var statearr_34160 = state_34156;
(statearr_34160[(7)] = inst_34138__$1);

return statearr_34160;
})();
if(cljs.core.truth_(inst_34139)){
var statearr_34161_34184 = state_34156__$1;
(statearr_34161_34184[(1)] = (5));

} else {
var statearr_34162_34185 = state_34156__$1;
(statearr_34162_34185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (6))){
var inst_34138 = (state_34156[(7)]);
var inst_34143 = p.call(null,inst_34138);
var state_34156__$1 = state_34156;
if(cljs.core.truth_(inst_34143)){
var statearr_34163_34186 = state_34156__$1;
(statearr_34163_34186[(1)] = (8));

} else {
var statearr_34164_34187 = state_34156__$1;
(statearr_34164_34187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (3))){
var inst_34154 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34156__$1,inst_34154);
} else {
if((state_val_34157 === (2))){
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34156__$1,(4),ch);
} else {
if((state_val_34157 === (11))){
var inst_34146 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34165_34188 = state_34156__$1;
(statearr_34165_34188[(2)] = inst_34146);

(statearr_34165_34188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (9))){
var state_34156__$1 = state_34156;
var statearr_34166_34189 = state_34156__$1;
(statearr_34166_34189[(2)] = null);

(statearr_34166_34189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (5))){
var inst_34141 = cljs.core.async.close_BANG_.call(null,out);
var state_34156__$1 = state_34156;
var statearr_34167_34190 = state_34156__$1;
(statearr_34167_34190[(2)] = inst_34141);

(statearr_34167_34190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (10))){
var inst_34149 = (state_34156[(2)]);
var state_34156__$1 = (function (){var statearr_34168 = state_34156;
(statearr_34168[(8)] = inst_34149);

return statearr_34168;
})();
var statearr_34169_34191 = state_34156__$1;
(statearr_34169_34191[(2)] = null);

(statearr_34169_34191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (8))){
var inst_34138 = (state_34156[(7)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34156__$1,(11),out,inst_34138);
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
});})(c__31895__auto___34181,out))
;
return ((function (switch__31781__auto__,c__31895__auto___34181,out){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_34173 = [null,null,null,null,null,null,null,null,null];
(statearr_34173[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_34173[(1)] = (1));

return statearr_34173;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_34156){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_34156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e34174){if((e34174 instanceof Object)){
var ex__31785__auto__ = e34174;
var statearr_34175_34192 = state_34156;
(statearr_34175_34192[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34193 = state_34156;
state_34156 = G__34193;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_34156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_34156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___34181,out))
})();
var state__31897__auto__ = (function (){var statearr_34176 = f__31896__auto__.call(null);
(statearr_34176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___34181);

return statearr_34176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___34181,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34194 = [];
var len__22773__auto___34197 = arguments.length;
var i__22774__auto___34198 = (0);
while(true){
if((i__22774__auto___34198 < len__22773__auto___34197)){
args34194.push((arguments[i__22774__auto___34198]));

var G__34199 = (i__22774__auto___34198 + (1));
i__22774__auto___34198 = G__34199;
continue;
} else {
}
break;
}

var G__34196 = args34194.length;
switch (G__34196) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34194.length)].join('')));

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
var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__){
return (function (state_34366){
var state_val_34367 = (state_34366[(1)]);
if((state_val_34367 === (7))){
var inst_34362 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34368_34409 = state_34366__$1;
(statearr_34368_34409[(2)] = inst_34362);

(statearr_34368_34409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (20))){
var inst_34332 = (state_34366[(7)]);
var inst_34343 = (state_34366[(2)]);
var inst_34344 = cljs.core.next.call(null,inst_34332);
var inst_34318 = inst_34344;
var inst_34319 = null;
var inst_34320 = (0);
var inst_34321 = (0);
var state_34366__$1 = (function (){var statearr_34369 = state_34366;
(statearr_34369[(8)] = inst_34318);

(statearr_34369[(9)] = inst_34319);

(statearr_34369[(10)] = inst_34321);

(statearr_34369[(11)] = inst_34320);

(statearr_34369[(12)] = inst_34343);

return statearr_34369;
})();
var statearr_34370_34410 = state_34366__$1;
(statearr_34370_34410[(2)] = null);

(statearr_34370_34410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (1))){
var state_34366__$1 = state_34366;
var statearr_34371_34411 = state_34366__$1;
(statearr_34371_34411[(2)] = null);

(statearr_34371_34411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (4))){
var inst_34307 = (state_34366[(13)]);
var inst_34307__$1 = (state_34366[(2)]);
var inst_34308 = (inst_34307__$1 == null);
var state_34366__$1 = (function (){var statearr_34372 = state_34366;
(statearr_34372[(13)] = inst_34307__$1);

return statearr_34372;
})();
if(cljs.core.truth_(inst_34308)){
var statearr_34373_34412 = state_34366__$1;
(statearr_34373_34412[(1)] = (5));

} else {
var statearr_34374_34413 = state_34366__$1;
(statearr_34374_34413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (15))){
var state_34366__$1 = state_34366;
var statearr_34378_34414 = state_34366__$1;
(statearr_34378_34414[(2)] = null);

(statearr_34378_34414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (21))){
var state_34366__$1 = state_34366;
var statearr_34379_34415 = state_34366__$1;
(statearr_34379_34415[(2)] = null);

(statearr_34379_34415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (13))){
var inst_34318 = (state_34366[(8)]);
var inst_34319 = (state_34366[(9)]);
var inst_34321 = (state_34366[(10)]);
var inst_34320 = (state_34366[(11)]);
var inst_34328 = (state_34366[(2)]);
var inst_34329 = (inst_34321 + (1));
var tmp34375 = inst_34318;
var tmp34376 = inst_34319;
var tmp34377 = inst_34320;
var inst_34318__$1 = tmp34375;
var inst_34319__$1 = tmp34376;
var inst_34320__$1 = tmp34377;
var inst_34321__$1 = inst_34329;
var state_34366__$1 = (function (){var statearr_34380 = state_34366;
(statearr_34380[(8)] = inst_34318__$1);

(statearr_34380[(9)] = inst_34319__$1);

(statearr_34380[(10)] = inst_34321__$1);

(statearr_34380[(11)] = inst_34320__$1);

(statearr_34380[(14)] = inst_34328);

return statearr_34380;
})();
var statearr_34381_34416 = state_34366__$1;
(statearr_34381_34416[(2)] = null);

(statearr_34381_34416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (22))){
var state_34366__$1 = state_34366;
var statearr_34382_34417 = state_34366__$1;
(statearr_34382_34417[(2)] = null);

(statearr_34382_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (6))){
var inst_34307 = (state_34366[(13)]);
var inst_34316 = f.call(null,inst_34307);
var inst_34317 = cljs.core.seq.call(null,inst_34316);
var inst_34318 = inst_34317;
var inst_34319 = null;
var inst_34320 = (0);
var inst_34321 = (0);
var state_34366__$1 = (function (){var statearr_34383 = state_34366;
(statearr_34383[(8)] = inst_34318);

(statearr_34383[(9)] = inst_34319);

(statearr_34383[(10)] = inst_34321);

(statearr_34383[(11)] = inst_34320);

return statearr_34383;
})();
var statearr_34384_34418 = state_34366__$1;
(statearr_34384_34418[(2)] = null);

(statearr_34384_34418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (17))){
var inst_34332 = (state_34366[(7)]);
var inst_34336 = cljs.core.chunk_first.call(null,inst_34332);
var inst_34337 = cljs.core.chunk_rest.call(null,inst_34332);
var inst_34338 = cljs.core.count.call(null,inst_34336);
var inst_34318 = inst_34337;
var inst_34319 = inst_34336;
var inst_34320 = inst_34338;
var inst_34321 = (0);
var state_34366__$1 = (function (){var statearr_34385 = state_34366;
(statearr_34385[(8)] = inst_34318);

(statearr_34385[(9)] = inst_34319);

(statearr_34385[(10)] = inst_34321);

(statearr_34385[(11)] = inst_34320);

return statearr_34385;
})();
var statearr_34386_34419 = state_34366__$1;
(statearr_34386_34419[(2)] = null);

(statearr_34386_34419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (3))){
var inst_34364 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34366__$1,inst_34364);
} else {
if((state_val_34367 === (12))){
var inst_34352 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34387_34420 = state_34366__$1;
(statearr_34387_34420[(2)] = inst_34352);

(statearr_34387_34420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (2))){
var state_34366__$1 = state_34366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34366__$1,(4),in$);
} else {
if((state_val_34367 === (23))){
var inst_34360 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34388_34421 = state_34366__$1;
(statearr_34388_34421[(2)] = inst_34360);

(statearr_34388_34421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (19))){
var inst_34347 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34389_34422 = state_34366__$1;
(statearr_34389_34422[(2)] = inst_34347);

(statearr_34389_34422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (11))){
var inst_34318 = (state_34366[(8)]);
var inst_34332 = (state_34366[(7)]);
var inst_34332__$1 = cljs.core.seq.call(null,inst_34318);
var state_34366__$1 = (function (){var statearr_34390 = state_34366;
(statearr_34390[(7)] = inst_34332__$1);

return statearr_34390;
})();
if(inst_34332__$1){
var statearr_34391_34423 = state_34366__$1;
(statearr_34391_34423[(1)] = (14));

} else {
var statearr_34392_34424 = state_34366__$1;
(statearr_34392_34424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (9))){
var inst_34354 = (state_34366[(2)]);
var inst_34355 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34366__$1 = (function (){var statearr_34393 = state_34366;
(statearr_34393[(15)] = inst_34354);

return statearr_34393;
})();
if(cljs.core.truth_(inst_34355)){
var statearr_34394_34425 = state_34366__$1;
(statearr_34394_34425[(1)] = (21));

} else {
var statearr_34395_34426 = state_34366__$1;
(statearr_34395_34426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (5))){
var inst_34310 = cljs.core.async.close_BANG_.call(null,out);
var state_34366__$1 = state_34366;
var statearr_34396_34427 = state_34366__$1;
(statearr_34396_34427[(2)] = inst_34310);

(statearr_34396_34427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (14))){
var inst_34332 = (state_34366[(7)]);
var inst_34334 = cljs.core.chunked_seq_QMARK_.call(null,inst_34332);
var state_34366__$1 = state_34366;
if(inst_34334){
var statearr_34397_34428 = state_34366__$1;
(statearr_34397_34428[(1)] = (17));

} else {
var statearr_34398_34429 = state_34366__$1;
(statearr_34398_34429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (16))){
var inst_34350 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34399_34430 = state_34366__$1;
(statearr_34399_34430[(2)] = inst_34350);

(statearr_34399_34430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (10))){
var inst_34319 = (state_34366[(9)]);
var inst_34321 = (state_34366[(10)]);
var inst_34326 = cljs.core._nth.call(null,inst_34319,inst_34321);
var state_34366__$1 = state_34366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34366__$1,(13),out,inst_34326);
} else {
if((state_val_34367 === (18))){
var inst_34332 = (state_34366[(7)]);
var inst_34341 = cljs.core.first.call(null,inst_34332);
var state_34366__$1 = state_34366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34366__$1,(20),out,inst_34341);
} else {
if((state_val_34367 === (8))){
var inst_34321 = (state_34366[(10)]);
var inst_34320 = (state_34366[(11)]);
var inst_34323 = (inst_34321 < inst_34320);
var inst_34324 = inst_34323;
var state_34366__$1 = state_34366;
if(cljs.core.truth_(inst_34324)){
var statearr_34400_34431 = state_34366__$1;
(statearr_34400_34431[(1)] = (10));

} else {
var statearr_34401_34432 = state_34366__$1;
(statearr_34401_34432[(1)] = (11));

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
});})(c__31895__auto__))
;
return ((function (switch__31781__auto__,c__31895__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31782__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31782__auto____0 = (function (){
var statearr_34405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34405[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31782__auto__);

(statearr_34405[(1)] = (1));

return statearr_34405;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31782__auto____1 = (function (state_34366){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_34366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e34406){if((e34406 instanceof Object)){
var ex__31785__auto__ = e34406;
var statearr_34407_34433 = state_34366;
(statearr_34407_34433[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34434 = state_34366;
state_34366 = G__34434;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31782__auto__ = function(state_34366){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31782__auto____1.call(this,state_34366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31782__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31782__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__))
})();
var state__31897__auto__ = (function (){var statearr_34408 = f__31896__auto__.call(null);
(statearr_34408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_34408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__))
);

return c__31895__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34435 = [];
var len__22773__auto___34438 = arguments.length;
var i__22774__auto___34439 = (0);
while(true){
if((i__22774__auto___34439 < len__22773__auto___34438)){
args34435.push((arguments[i__22774__auto___34439]));

var G__34440 = (i__22774__auto___34439 + (1));
i__22774__auto___34439 = G__34440;
continue;
} else {
}
break;
}

var G__34437 = args34435.length;
switch (G__34437) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34435.length)].join('')));

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
var args34442 = [];
var len__22773__auto___34445 = arguments.length;
var i__22774__auto___34446 = (0);
while(true){
if((i__22774__auto___34446 < len__22773__auto___34445)){
args34442.push((arguments[i__22774__auto___34446]));

var G__34447 = (i__22774__auto___34446 + (1));
i__22774__auto___34446 = G__34447;
continue;
} else {
}
break;
}

var G__34444 = args34442.length;
switch (G__34444) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34442.length)].join('')));

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
var args34449 = [];
var len__22773__auto___34500 = arguments.length;
var i__22774__auto___34501 = (0);
while(true){
if((i__22774__auto___34501 < len__22773__auto___34500)){
args34449.push((arguments[i__22774__auto___34501]));

var G__34502 = (i__22774__auto___34501 + (1));
i__22774__auto___34501 = G__34502;
continue;
} else {
}
break;
}

var G__34451 = args34449.length;
switch (G__34451) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34449.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31895__auto___34504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___34504,out){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___34504,out){
return (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (7))){
var inst_34470 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34477_34505 = state_34475__$1;
(statearr_34477_34505[(2)] = inst_34470);

(statearr_34477_34505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (1))){
var inst_34452 = null;
var state_34475__$1 = (function (){var statearr_34478 = state_34475;
(statearr_34478[(7)] = inst_34452);

return statearr_34478;
})();
var statearr_34479_34506 = state_34475__$1;
(statearr_34479_34506[(2)] = null);

(statearr_34479_34506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (4))){
var inst_34455 = (state_34475[(8)]);
var inst_34455__$1 = (state_34475[(2)]);
var inst_34456 = (inst_34455__$1 == null);
var inst_34457 = cljs.core.not.call(null,inst_34456);
var state_34475__$1 = (function (){var statearr_34480 = state_34475;
(statearr_34480[(8)] = inst_34455__$1);

return statearr_34480;
})();
if(inst_34457){
var statearr_34481_34507 = state_34475__$1;
(statearr_34481_34507[(1)] = (5));

} else {
var statearr_34482_34508 = state_34475__$1;
(statearr_34482_34508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (6))){
var state_34475__$1 = state_34475;
var statearr_34483_34509 = state_34475__$1;
(statearr_34483_34509[(2)] = null);

(statearr_34483_34509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (3))){
var inst_34472 = (state_34475[(2)]);
var inst_34473 = cljs.core.async.close_BANG_.call(null,out);
var state_34475__$1 = (function (){var statearr_34484 = state_34475;
(statearr_34484[(9)] = inst_34472);

return statearr_34484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34475__$1,inst_34473);
} else {
if((state_val_34476 === (2))){
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34475__$1,(4),ch);
} else {
if((state_val_34476 === (11))){
var inst_34455 = (state_34475[(8)]);
var inst_34464 = (state_34475[(2)]);
var inst_34452 = inst_34455;
var state_34475__$1 = (function (){var statearr_34485 = state_34475;
(statearr_34485[(10)] = inst_34464);

(statearr_34485[(7)] = inst_34452);

return statearr_34485;
})();
var statearr_34486_34510 = state_34475__$1;
(statearr_34486_34510[(2)] = null);

(statearr_34486_34510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (9))){
var inst_34455 = (state_34475[(8)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34475__$1,(11),out,inst_34455);
} else {
if((state_val_34476 === (5))){
var inst_34455 = (state_34475[(8)]);
var inst_34452 = (state_34475[(7)]);
var inst_34459 = cljs.core._EQ_.call(null,inst_34455,inst_34452);
var state_34475__$1 = state_34475;
if(inst_34459){
var statearr_34488_34511 = state_34475__$1;
(statearr_34488_34511[(1)] = (8));

} else {
var statearr_34489_34512 = state_34475__$1;
(statearr_34489_34512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (10))){
var inst_34467 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34490_34513 = state_34475__$1;
(statearr_34490_34513[(2)] = inst_34467);

(statearr_34490_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (8))){
var inst_34452 = (state_34475[(7)]);
var tmp34487 = inst_34452;
var inst_34452__$1 = tmp34487;
var state_34475__$1 = (function (){var statearr_34491 = state_34475;
(statearr_34491[(7)] = inst_34452__$1);

return statearr_34491;
})();
var statearr_34492_34514 = state_34475__$1;
(statearr_34492_34514[(2)] = null);

(statearr_34492_34514[(1)] = (2));


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
});})(c__31895__auto___34504,out))
;
return ((function (switch__31781__auto__,c__31895__auto___34504,out){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_34496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34496[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_34496[(1)] = (1));

return statearr_34496;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_34475){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_34475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e34497){if((e34497 instanceof Object)){
var ex__31785__auto__ = e34497;
var statearr_34498_34515 = state_34475;
(statearr_34498_34515[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34516 = state_34475;
state_34475 = G__34516;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___34504,out))
})();
var state__31897__auto__ = (function (){var statearr_34499 = f__31896__auto__.call(null);
(statearr_34499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___34504);

return statearr_34499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___34504,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34517 = [];
var len__22773__auto___34587 = arguments.length;
var i__22774__auto___34588 = (0);
while(true){
if((i__22774__auto___34588 < len__22773__auto___34587)){
args34517.push((arguments[i__22774__auto___34588]));

var G__34589 = (i__22774__auto___34588 + (1));
i__22774__auto___34588 = G__34589;
continue;
} else {
}
break;
}

var G__34519 = args34517.length;
switch (G__34519) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34517.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31895__auto___34591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___34591,out){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___34591,out){
return (function (state_34557){
var state_val_34558 = (state_34557[(1)]);
if((state_val_34558 === (7))){
var inst_34553 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34559_34592 = state_34557__$1;
(statearr_34559_34592[(2)] = inst_34553);

(statearr_34559_34592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (1))){
var inst_34520 = (new Array(n));
var inst_34521 = inst_34520;
var inst_34522 = (0);
var state_34557__$1 = (function (){var statearr_34560 = state_34557;
(statearr_34560[(7)] = inst_34521);

(statearr_34560[(8)] = inst_34522);

return statearr_34560;
})();
var statearr_34561_34593 = state_34557__$1;
(statearr_34561_34593[(2)] = null);

(statearr_34561_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (4))){
var inst_34525 = (state_34557[(9)]);
var inst_34525__$1 = (state_34557[(2)]);
var inst_34526 = (inst_34525__$1 == null);
var inst_34527 = cljs.core.not.call(null,inst_34526);
var state_34557__$1 = (function (){var statearr_34562 = state_34557;
(statearr_34562[(9)] = inst_34525__$1);

return statearr_34562;
})();
if(inst_34527){
var statearr_34563_34594 = state_34557__$1;
(statearr_34563_34594[(1)] = (5));

} else {
var statearr_34564_34595 = state_34557__$1;
(statearr_34564_34595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (15))){
var inst_34547 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34565_34596 = state_34557__$1;
(statearr_34565_34596[(2)] = inst_34547);

(statearr_34565_34596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (13))){
var state_34557__$1 = state_34557;
var statearr_34566_34597 = state_34557__$1;
(statearr_34566_34597[(2)] = null);

(statearr_34566_34597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (6))){
var inst_34522 = (state_34557[(8)]);
var inst_34543 = (inst_34522 > (0));
var state_34557__$1 = state_34557;
if(cljs.core.truth_(inst_34543)){
var statearr_34567_34598 = state_34557__$1;
(statearr_34567_34598[(1)] = (12));

} else {
var statearr_34568_34599 = state_34557__$1;
(statearr_34568_34599[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (3))){
var inst_34555 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34557__$1,inst_34555);
} else {
if((state_val_34558 === (12))){
var inst_34521 = (state_34557[(7)]);
var inst_34545 = cljs.core.vec.call(null,inst_34521);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34557__$1,(15),out,inst_34545);
} else {
if((state_val_34558 === (2))){
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34557__$1,(4),ch);
} else {
if((state_val_34558 === (11))){
var inst_34537 = (state_34557[(2)]);
var inst_34538 = (new Array(n));
var inst_34521 = inst_34538;
var inst_34522 = (0);
var state_34557__$1 = (function (){var statearr_34569 = state_34557;
(statearr_34569[(7)] = inst_34521);

(statearr_34569[(8)] = inst_34522);

(statearr_34569[(10)] = inst_34537);

return statearr_34569;
})();
var statearr_34570_34600 = state_34557__$1;
(statearr_34570_34600[(2)] = null);

(statearr_34570_34600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (9))){
var inst_34521 = (state_34557[(7)]);
var inst_34535 = cljs.core.vec.call(null,inst_34521);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34557__$1,(11),out,inst_34535);
} else {
if((state_val_34558 === (5))){
var inst_34521 = (state_34557[(7)]);
var inst_34525 = (state_34557[(9)]);
var inst_34522 = (state_34557[(8)]);
var inst_34530 = (state_34557[(11)]);
var inst_34529 = (inst_34521[inst_34522] = inst_34525);
var inst_34530__$1 = (inst_34522 + (1));
var inst_34531 = (inst_34530__$1 < n);
var state_34557__$1 = (function (){var statearr_34571 = state_34557;
(statearr_34571[(12)] = inst_34529);

(statearr_34571[(11)] = inst_34530__$1);

return statearr_34571;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34572_34601 = state_34557__$1;
(statearr_34572_34601[(1)] = (8));

} else {
var statearr_34573_34602 = state_34557__$1;
(statearr_34573_34602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (14))){
var inst_34550 = (state_34557[(2)]);
var inst_34551 = cljs.core.async.close_BANG_.call(null,out);
var state_34557__$1 = (function (){var statearr_34575 = state_34557;
(statearr_34575[(13)] = inst_34550);

return statearr_34575;
})();
var statearr_34576_34603 = state_34557__$1;
(statearr_34576_34603[(2)] = inst_34551);

(statearr_34576_34603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (10))){
var inst_34541 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34577_34604 = state_34557__$1;
(statearr_34577_34604[(2)] = inst_34541);

(statearr_34577_34604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (8))){
var inst_34521 = (state_34557[(7)]);
var inst_34530 = (state_34557[(11)]);
var tmp34574 = inst_34521;
var inst_34521__$1 = tmp34574;
var inst_34522 = inst_34530;
var state_34557__$1 = (function (){var statearr_34578 = state_34557;
(statearr_34578[(7)] = inst_34521__$1);

(statearr_34578[(8)] = inst_34522);

return statearr_34578;
})();
var statearr_34579_34605 = state_34557__$1;
(statearr_34579_34605[(2)] = null);

(statearr_34579_34605[(1)] = (2));


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
});})(c__31895__auto___34591,out))
;
return ((function (switch__31781__auto__,c__31895__auto___34591,out){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_34583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34583[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_34557){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_34557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e34584){if((e34584 instanceof Object)){
var ex__31785__auto__ = e34584;
var statearr_34585_34606 = state_34557;
(statearr_34585_34606[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34607 = state_34557;
state_34557 = G__34607;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_34557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_34557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___34591,out))
})();
var state__31897__auto__ = (function (){var statearr_34586 = f__31896__auto__.call(null);
(statearr_34586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___34591);

return statearr_34586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___34591,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34608 = [];
var len__22773__auto___34682 = arguments.length;
var i__22774__auto___34683 = (0);
while(true){
if((i__22774__auto___34683 < len__22773__auto___34682)){
args34608.push((arguments[i__22774__auto___34683]));

var G__34684 = (i__22774__auto___34683 + (1));
i__22774__auto___34683 = G__34684;
continue;
} else {
}
break;
}

var G__34610 = args34608.length;
switch (G__34610) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34608.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31895__auto___34686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___34686,out){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___34686,out){
return (function (state_34652){
var state_val_34653 = (state_34652[(1)]);
if((state_val_34653 === (7))){
var inst_34648 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34654_34687 = state_34652__$1;
(statearr_34654_34687[(2)] = inst_34648);

(statearr_34654_34687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (1))){
var inst_34611 = [];
var inst_34612 = inst_34611;
var inst_34613 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34652__$1 = (function (){var statearr_34655 = state_34652;
(statearr_34655[(7)] = inst_34613);

(statearr_34655[(8)] = inst_34612);

return statearr_34655;
})();
var statearr_34656_34688 = state_34652__$1;
(statearr_34656_34688[(2)] = null);

(statearr_34656_34688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (4))){
var inst_34616 = (state_34652[(9)]);
var inst_34616__$1 = (state_34652[(2)]);
var inst_34617 = (inst_34616__$1 == null);
var inst_34618 = cljs.core.not.call(null,inst_34617);
var state_34652__$1 = (function (){var statearr_34657 = state_34652;
(statearr_34657[(9)] = inst_34616__$1);

return statearr_34657;
})();
if(inst_34618){
var statearr_34658_34689 = state_34652__$1;
(statearr_34658_34689[(1)] = (5));

} else {
var statearr_34659_34690 = state_34652__$1;
(statearr_34659_34690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (15))){
var inst_34642 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34660_34691 = state_34652__$1;
(statearr_34660_34691[(2)] = inst_34642);

(statearr_34660_34691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (13))){
var state_34652__$1 = state_34652;
var statearr_34661_34692 = state_34652__$1;
(statearr_34661_34692[(2)] = null);

(statearr_34661_34692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (6))){
var inst_34612 = (state_34652[(8)]);
var inst_34637 = inst_34612.length;
var inst_34638 = (inst_34637 > (0));
var state_34652__$1 = state_34652;
if(cljs.core.truth_(inst_34638)){
var statearr_34662_34693 = state_34652__$1;
(statearr_34662_34693[(1)] = (12));

} else {
var statearr_34663_34694 = state_34652__$1;
(statearr_34663_34694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (3))){
var inst_34650 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34652__$1,inst_34650);
} else {
if((state_val_34653 === (12))){
var inst_34612 = (state_34652[(8)]);
var inst_34640 = cljs.core.vec.call(null,inst_34612);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34652__$1,(15),out,inst_34640);
} else {
if((state_val_34653 === (2))){
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34652__$1,(4),ch);
} else {
if((state_val_34653 === (11))){
var inst_34616 = (state_34652[(9)]);
var inst_34620 = (state_34652[(10)]);
var inst_34630 = (state_34652[(2)]);
var inst_34631 = [];
var inst_34632 = inst_34631.push(inst_34616);
var inst_34612 = inst_34631;
var inst_34613 = inst_34620;
var state_34652__$1 = (function (){var statearr_34664 = state_34652;
(statearr_34664[(11)] = inst_34632);

(statearr_34664[(7)] = inst_34613);

(statearr_34664[(12)] = inst_34630);

(statearr_34664[(8)] = inst_34612);

return statearr_34664;
})();
var statearr_34665_34695 = state_34652__$1;
(statearr_34665_34695[(2)] = null);

(statearr_34665_34695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (9))){
var inst_34612 = (state_34652[(8)]);
var inst_34628 = cljs.core.vec.call(null,inst_34612);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34652__$1,(11),out,inst_34628);
} else {
if((state_val_34653 === (5))){
var inst_34616 = (state_34652[(9)]);
var inst_34613 = (state_34652[(7)]);
var inst_34620 = (state_34652[(10)]);
var inst_34620__$1 = f.call(null,inst_34616);
var inst_34621 = cljs.core._EQ_.call(null,inst_34620__$1,inst_34613);
var inst_34622 = cljs.core.keyword_identical_QMARK_.call(null,inst_34613,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34623 = (inst_34621) || (inst_34622);
var state_34652__$1 = (function (){var statearr_34666 = state_34652;
(statearr_34666[(10)] = inst_34620__$1);

return statearr_34666;
})();
if(cljs.core.truth_(inst_34623)){
var statearr_34667_34696 = state_34652__$1;
(statearr_34667_34696[(1)] = (8));

} else {
var statearr_34668_34697 = state_34652__$1;
(statearr_34668_34697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (14))){
var inst_34645 = (state_34652[(2)]);
var inst_34646 = cljs.core.async.close_BANG_.call(null,out);
var state_34652__$1 = (function (){var statearr_34670 = state_34652;
(statearr_34670[(13)] = inst_34645);

return statearr_34670;
})();
var statearr_34671_34698 = state_34652__$1;
(statearr_34671_34698[(2)] = inst_34646);

(statearr_34671_34698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (10))){
var inst_34635 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34672_34699 = state_34652__$1;
(statearr_34672_34699[(2)] = inst_34635);

(statearr_34672_34699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (8))){
var inst_34616 = (state_34652[(9)]);
var inst_34620 = (state_34652[(10)]);
var inst_34612 = (state_34652[(8)]);
var inst_34625 = inst_34612.push(inst_34616);
var tmp34669 = inst_34612;
var inst_34612__$1 = tmp34669;
var inst_34613 = inst_34620;
var state_34652__$1 = (function (){var statearr_34673 = state_34652;
(statearr_34673[(14)] = inst_34625);

(statearr_34673[(7)] = inst_34613);

(statearr_34673[(8)] = inst_34612__$1);

return statearr_34673;
})();
var statearr_34674_34700 = state_34652__$1;
(statearr_34674_34700[(2)] = null);

(statearr_34674_34700[(1)] = (2));


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
});})(c__31895__auto___34686,out))
;
return ((function (switch__31781__auto__,c__31895__auto___34686,out){
return (function() {
var cljs$core$async$state_machine__31782__auto__ = null;
var cljs$core$async$state_machine__31782__auto____0 = (function (){
var statearr_34678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34678[(0)] = cljs$core$async$state_machine__31782__auto__);

(statearr_34678[(1)] = (1));

return statearr_34678;
});
var cljs$core$async$state_machine__31782__auto____1 = (function (state_34652){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_34652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e34679){if((e34679 instanceof Object)){
var ex__31785__auto__ = e34679;
var statearr_34680_34701 = state_34652;
(statearr_34680_34701[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34702 = state_34652;
state_34652 = G__34702;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
cljs$core$async$state_machine__31782__auto__ = function(state_34652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31782__auto____1.call(this,state_34652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31782__auto____0;
cljs$core$async$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31782__auto____1;
return cljs$core$async$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___34686,out))
})();
var state__31897__auto__ = (function (){var statearr_34681 = f__31896__auto__.call(null);
(statearr_34681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___34686);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___34686,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471653231263