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
var args32030 = [];
var len__22773__auto___32036 = arguments.length;
var i__22774__auto___32037 = (0);
while(true){
if((i__22774__auto___32037 < len__22773__auto___32036)){
args32030.push((arguments[i__22774__auto___32037]));

var G__32038 = (i__22774__auto___32037 + (1));
i__22774__auto___32037 = G__32038;
continue;
} else {
}
break;
}

var G__32032 = args32030.length;
switch (G__32032) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32030.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32033 = (function (f,blockable,meta32034){
this.f = f;
this.blockable = blockable;
this.meta32034 = meta32034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32035,meta32034__$1){
var self__ = this;
var _32035__$1 = this;
return (new cljs.core.async.t_cljs$core$async32033(self__.f,self__.blockable,meta32034__$1));
});

cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32035){
var self__ = this;
var _32035__$1 = this;
return self__.meta32034;
});

cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32034","meta32034",1826902452,null)], null);
});

cljs.core.async.t_cljs$core$async32033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32033";

cljs.core.async.t_cljs$core$async32033.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async32033");
});

cljs.core.async.__GT_t_cljs$core$async32033 = (function cljs$core$async$__GT_t_cljs$core$async32033(f__$1,blockable__$1,meta32034){
return (new cljs.core.async.t_cljs$core$async32033(f__$1,blockable__$1,meta32034));
});

}

return (new cljs.core.async.t_cljs$core$async32033(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args32042 = [];
var len__22773__auto___32045 = arguments.length;
var i__22774__auto___32046 = (0);
while(true){
if((i__22774__auto___32046 < len__22773__auto___32045)){
args32042.push((arguments[i__22774__auto___32046]));

var G__32047 = (i__22774__auto___32046 + (1));
i__22774__auto___32046 = G__32047;
continue;
} else {
}
break;
}

var G__32044 = args32042.length;
switch (G__32044) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32042.length)].join('')));

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
var args32049 = [];
var len__22773__auto___32052 = arguments.length;
var i__22774__auto___32053 = (0);
while(true){
if((i__22774__auto___32053 < len__22773__auto___32052)){
args32049.push((arguments[i__22774__auto___32053]));

var G__32054 = (i__22774__auto___32053 + (1));
i__22774__auto___32053 = G__32054;
continue;
} else {
}
break;
}

var G__32051 = args32049.length;
switch (G__32051) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32049.length)].join('')));

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
var args32056 = [];
var len__22773__auto___32059 = arguments.length;
var i__22774__auto___32060 = (0);
while(true){
if((i__22774__auto___32060 < len__22773__auto___32059)){
args32056.push((arguments[i__22774__auto___32060]));

var G__32061 = (i__22774__auto___32060 + (1));
i__22774__auto___32060 = G__32061;
continue;
} else {
}
break;
}

var G__32058 = args32056.length;
switch (G__32058) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32056.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32063 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32063);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32063,ret){
return (function (){
return fn1.call(null,val_32063);
});})(val_32063,ret))
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
var args32064 = [];
var len__22773__auto___32067 = arguments.length;
var i__22774__auto___32068 = (0);
while(true){
if((i__22774__auto___32068 < len__22773__auto___32067)){
args32064.push((arguments[i__22774__auto___32068]));

var G__32069 = (i__22774__auto___32068 + (1));
i__22774__auto___32068 = G__32069;
continue;
} else {
}
break;
}

var G__32066 = args32064.length;
switch (G__32066) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32064.length)].join('')));

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
var n__22603__auto___32071 = n;
var x_32072 = (0);
while(true){
if((x_32072 < n__22603__auto___32071)){
(a[x_32072] = (0));

var G__32073 = (x_32072 + (1));
x_32072 = G__32073;
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

var G__32074 = (i + (1));
i = G__32074;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32078 = (function (alt_flag,flag,meta32079){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32079 = meta32079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32080,meta32079__$1){
var self__ = this;
var _32080__$1 = this;
return (new cljs.core.async.t_cljs$core$async32078(self__.alt_flag,self__.flag,meta32079__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32080){
var self__ = this;
var _32080__$1 = this;
return self__.meta32079;
});})(flag))
;

cljs.core.async.t_cljs$core$async32078.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32078.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32079","meta32079",-1321533446,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32078";

cljs.core.async.t_cljs$core$async32078.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async32078");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32078 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32078(alt_flag__$1,flag__$1,meta32079){
return (new cljs.core.async.t_cljs$core$async32078(alt_flag__$1,flag__$1,meta32079));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32078(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32084 = (function (alt_handler,flag,cb,meta32085){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32085 = meta32085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32086,meta32085__$1){
var self__ = this;
var _32086__$1 = this;
return (new cljs.core.async.t_cljs$core$async32084(self__.alt_handler,self__.flag,self__.cb,meta32085__$1));
});

cljs.core.async.t_cljs$core$async32084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32086){
var self__ = this;
var _32086__$1 = this;
return self__.meta32085;
});

cljs.core.async.t_cljs$core$async32084.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32085","meta32085",1697114772,null)], null);
});

cljs.core.async.t_cljs$core$async32084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32084";

cljs.core.async.t_cljs$core$async32084.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async32084");
});

cljs.core.async.__GT_t_cljs$core$async32084 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32084(alt_handler__$1,flag__$1,cb__$1,meta32085){
return (new cljs.core.async.t_cljs$core$async32084(alt_handler__$1,flag__$1,cb__$1,meta32085));
});

}

return (new cljs.core.async.t_cljs$core$async32084(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32087_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32087_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32088_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32088_SHARP_,port], null));
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
var G__32089 = (i + (1));
i = G__32089;
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
var len__22773__auto___32095 = arguments.length;
var i__22774__auto___32096 = (0);
while(true){
if((i__22774__auto___32096 < len__22773__auto___32095)){
args__22780__auto__.push((arguments[i__22774__auto___32096]));

var G__32097 = (i__22774__auto___32096 + (1));
i__22774__auto___32096 = G__32097;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((1) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22781__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32092){
var map__32093 = p__32092;
var map__32093__$1 = ((((!((map__32093 == null)))?((((map__32093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32093):map__32093);
var opts = map__32093__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32090){
var G__32091 = cljs.core.first.call(null,seq32090);
var seq32090__$1 = cljs.core.next.call(null,seq32090);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32091,seq32090__$1);
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
var args32098 = [];
var len__22773__auto___32148 = arguments.length;
var i__22774__auto___32149 = (0);
while(true){
if((i__22774__auto___32149 < len__22773__auto___32148)){
args32098.push((arguments[i__22774__auto___32149]));

var G__32150 = (i__22774__auto___32149 + (1));
i__22774__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var G__32100 = args32098.length;
switch (G__32100) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32098.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31971__auto___32152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___32152){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___32152){
return (function (state_32124){
var state_val_32125 = (state_32124[(1)]);
if((state_val_32125 === (7))){
var inst_32120 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32126_32153 = state_32124__$1;
(statearr_32126_32153[(2)] = inst_32120);

(statearr_32126_32153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (1))){
var state_32124__$1 = state_32124;
var statearr_32127_32154 = state_32124__$1;
(statearr_32127_32154[(2)] = null);

(statearr_32127_32154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (4))){
var inst_32103 = (state_32124[(7)]);
var inst_32103__$1 = (state_32124[(2)]);
var inst_32104 = (inst_32103__$1 == null);
var state_32124__$1 = (function (){var statearr_32128 = state_32124;
(statearr_32128[(7)] = inst_32103__$1);

return statearr_32128;
})();
if(cljs.core.truth_(inst_32104)){
var statearr_32129_32155 = state_32124__$1;
(statearr_32129_32155[(1)] = (5));

} else {
var statearr_32130_32156 = state_32124__$1;
(statearr_32130_32156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (13))){
var state_32124__$1 = state_32124;
var statearr_32131_32157 = state_32124__$1;
(statearr_32131_32157[(2)] = null);

(statearr_32131_32157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (6))){
var inst_32103 = (state_32124[(7)]);
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32124__$1,(11),to,inst_32103);
} else {
if((state_val_32125 === (3))){
var inst_32122 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32124__$1,inst_32122);
} else {
if((state_val_32125 === (12))){
var state_32124__$1 = state_32124;
var statearr_32132_32158 = state_32124__$1;
(statearr_32132_32158[(2)] = null);

(statearr_32132_32158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (2))){
var state_32124__$1 = state_32124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32124__$1,(4),from);
} else {
if((state_val_32125 === (11))){
var inst_32113 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
if(cljs.core.truth_(inst_32113)){
var statearr_32133_32159 = state_32124__$1;
(statearr_32133_32159[(1)] = (12));

} else {
var statearr_32134_32160 = state_32124__$1;
(statearr_32134_32160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (9))){
var state_32124__$1 = state_32124;
var statearr_32135_32161 = state_32124__$1;
(statearr_32135_32161[(2)] = null);

(statearr_32135_32161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (5))){
var state_32124__$1 = state_32124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32136_32162 = state_32124__$1;
(statearr_32136_32162[(1)] = (8));

} else {
var statearr_32137_32163 = state_32124__$1;
(statearr_32137_32163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (14))){
var inst_32118 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32138_32164 = state_32124__$1;
(statearr_32138_32164[(2)] = inst_32118);

(statearr_32138_32164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (10))){
var inst_32110 = (state_32124[(2)]);
var state_32124__$1 = state_32124;
var statearr_32139_32165 = state_32124__$1;
(statearr_32139_32165[(2)] = inst_32110);

(statearr_32139_32165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32125 === (8))){
var inst_32107 = cljs.core.async.close_BANG_.call(null,to);
var state_32124__$1 = state_32124;
var statearr_32140_32166 = state_32124__$1;
(statearr_32140_32166[(2)] = inst_32107);

(statearr_32140_32166[(1)] = (10));


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
});})(c__31971__auto___32152))
;
return ((function (switch__31857__auto__,c__31971__auto___32152){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_32144 = [null,null,null,null,null,null,null,null];
(statearr_32144[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_32144[(1)] = (1));

return statearr_32144;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_32124){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32145){if((e32145 instanceof Object)){
var ex__31861__auto__ = e32145;
var statearr_32146_32167 = state_32124;
(statearr_32146_32167[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32168 = state_32124;
state_32124 = G__32168;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_32124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_32124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___32152))
})();
var state__31973__auto__ = (function (){var statearr_32147 = f__31972__auto__.call(null);
(statearr_32147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___32152);

return statearr_32147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___32152))
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
return (function (p__32356){
var vec__32357 = p__32356;
var v = cljs.core.nth.call(null,vec__32357,(0),null);
var p = cljs.core.nth.call(null,vec__32357,(1),null);
var job = vec__32357;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31971__auto___32543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___32543,res,vec__32357,v,p,job,jobs,results){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___32543,res,vec__32357,v,p,job,jobs,results){
return (function (state_32364){
var state_val_32365 = (state_32364[(1)]);
if((state_val_32365 === (1))){
var state_32364__$1 = state_32364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32364__$1,(2),res,v);
} else {
if((state_val_32365 === (2))){
var inst_32361 = (state_32364[(2)]);
var inst_32362 = cljs.core.async.close_BANG_.call(null,res);
var state_32364__$1 = (function (){var statearr_32366 = state_32364;
(statearr_32366[(7)] = inst_32361);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32364__$1,inst_32362);
} else {
return null;
}
}
});})(c__31971__auto___32543,res,vec__32357,v,p,job,jobs,results))
;
return ((function (switch__31857__auto__,c__31971__auto___32543,res,vec__32357,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0 = (function (){
var statearr_32370 = [null,null,null,null,null,null,null,null];
(statearr_32370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__);

(statearr_32370[(1)] = (1));

return statearr_32370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1 = (function (state_32364){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32371){if((e32371 instanceof Object)){
var ex__31861__auto__ = e32371;
var statearr_32372_32544 = state_32364;
(statearr_32372_32544[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32545 = state_32364;
state_32364 = G__32545;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = function(state_32364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1.call(this,state_32364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___32543,res,vec__32357,v,p,job,jobs,results))
})();
var state__31973__auto__ = (function (){var statearr_32373 = f__31972__auto__.call(null);
(statearr_32373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___32543);

return statearr_32373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___32543,res,vec__32357,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32374){
var vec__32375 = p__32374;
var v = cljs.core.nth.call(null,vec__32375,(0),null);
var p = cljs.core.nth.call(null,vec__32375,(1),null);
var job = vec__32375;
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
var n__22603__auto___32546 = n;
var __32547 = (0);
while(true){
if((__32547 < n__22603__auto___32546)){
var G__32378_32548 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32378_32548) {
case "compute":
var c__31971__auto___32550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32547,c__31971__auto___32550,G__32378_32548,n__22603__auto___32546,jobs,results,process,async){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (__32547,c__31971__auto___32550,G__32378_32548,n__22603__auto___32546,jobs,results,process,async){
return (function (state_32391){
var state_val_32392 = (state_32391[(1)]);
if((state_val_32392 === (1))){
var state_32391__$1 = state_32391;
var statearr_32393_32551 = state_32391__$1;
(statearr_32393_32551[(2)] = null);

(statearr_32393_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (2))){
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32391__$1,(4),jobs);
} else {
if((state_val_32392 === (3))){
var inst_32389 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32391__$1,inst_32389);
} else {
if((state_val_32392 === (4))){
var inst_32381 = (state_32391[(2)]);
var inst_32382 = process.call(null,inst_32381);
var state_32391__$1 = state_32391;
if(cljs.core.truth_(inst_32382)){
var statearr_32394_32552 = state_32391__$1;
(statearr_32394_32552[(1)] = (5));

} else {
var statearr_32395_32553 = state_32391__$1;
(statearr_32395_32553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (5))){
var state_32391__$1 = state_32391;
var statearr_32396_32554 = state_32391__$1;
(statearr_32396_32554[(2)] = null);

(statearr_32396_32554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (6))){
var state_32391__$1 = state_32391;
var statearr_32397_32555 = state_32391__$1;
(statearr_32397_32555[(2)] = null);

(statearr_32397_32555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (7))){
var inst_32387 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32398_32556 = state_32391__$1;
(statearr_32398_32556[(2)] = inst_32387);

(statearr_32398_32556[(1)] = (3));


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
});})(__32547,c__31971__auto___32550,G__32378_32548,n__22603__auto___32546,jobs,results,process,async))
;
return ((function (__32547,switch__31857__auto__,c__31971__auto___32550,G__32378_32548,n__22603__auto___32546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0 = (function (){
var statearr_32402 = [null,null,null,null,null,null,null];
(statearr_32402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__);

(statearr_32402[(1)] = (1));

return statearr_32402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1 = (function (state_32391){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32403){if((e32403 instanceof Object)){
var ex__31861__auto__ = e32403;
var statearr_32404_32557 = state_32391;
(statearr_32404_32557[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32558 = state_32391;
state_32391 = G__32558;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = function(state_32391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1.call(this,state_32391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__;
})()
;})(__32547,switch__31857__auto__,c__31971__auto___32550,G__32378_32548,n__22603__auto___32546,jobs,results,process,async))
})();
var state__31973__auto__ = (function (){var statearr_32405 = f__31972__auto__.call(null);
(statearr_32405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___32550);

return statearr_32405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(__32547,c__31971__auto___32550,G__32378_32548,n__22603__auto___32546,jobs,results,process,async))
);


break;
case "async":
var c__31971__auto___32559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32547,c__31971__auto___32559,G__32378_32548,n__22603__auto___32546,jobs,results,process,async){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (__32547,c__31971__auto___32559,G__32378_32548,n__22603__auto___32546,jobs,results,process,async){
return (function (state_32418){
var state_val_32419 = (state_32418[(1)]);
if((state_val_32419 === (1))){
var state_32418__$1 = state_32418;
var statearr_32420_32560 = state_32418__$1;
(statearr_32420_32560[(2)] = null);

(statearr_32420_32560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (2))){
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32418__$1,(4),jobs);
} else {
if((state_val_32419 === (3))){
var inst_32416 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32418__$1,inst_32416);
} else {
if((state_val_32419 === (4))){
var inst_32408 = (state_32418[(2)]);
var inst_32409 = async.call(null,inst_32408);
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32409)){
var statearr_32421_32561 = state_32418__$1;
(statearr_32421_32561[(1)] = (5));

} else {
var statearr_32422_32562 = state_32418__$1;
(statearr_32422_32562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (5))){
var state_32418__$1 = state_32418;
var statearr_32423_32563 = state_32418__$1;
(statearr_32423_32563[(2)] = null);

(statearr_32423_32563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (6))){
var state_32418__$1 = state_32418;
var statearr_32424_32564 = state_32418__$1;
(statearr_32424_32564[(2)] = null);

(statearr_32424_32564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (7))){
var inst_32414 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32425_32565 = state_32418__$1;
(statearr_32425_32565[(2)] = inst_32414);

(statearr_32425_32565[(1)] = (3));


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
});})(__32547,c__31971__auto___32559,G__32378_32548,n__22603__auto___32546,jobs,results,process,async))
;
return ((function (__32547,switch__31857__auto__,c__31971__auto___32559,G__32378_32548,n__22603__auto___32546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0 = (function (){
var statearr_32429 = [null,null,null,null,null,null,null];
(statearr_32429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__);

(statearr_32429[(1)] = (1));

return statearr_32429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1 = (function (state_32418){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32430){if((e32430 instanceof Object)){
var ex__31861__auto__ = e32430;
var statearr_32431_32566 = state_32418;
(statearr_32431_32566[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32567 = state_32418;
state_32418 = G__32567;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__;
})()
;})(__32547,switch__31857__auto__,c__31971__auto___32559,G__32378_32548,n__22603__auto___32546,jobs,results,process,async))
})();
var state__31973__auto__ = (function (){var statearr_32432 = f__31972__auto__.call(null);
(statearr_32432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___32559);

return statearr_32432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(__32547,c__31971__auto___32559,G__32378_32548,n__22603__auto___32546,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32568 = (__32547 + (1));
__32547 = G__32568;
continue;
} else {
}
break;
}

var c__31971__auto___32569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___32569,jobs,results,process,async){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___32569,jobs,results,process,async){
return (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (1))){
var state_32454__$1 = state_32454;
var statearr_32456_32570 = state_32454__$1;
(statearr_32456_32570[(2)] = null);

(statearr_32456_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32454__$1,(4),from);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (4))){
var inst_32435 = (state_32454[(7)]);
var inst_32435__$1 = (state_32454[(2)]);
var inst_32436 = (inst_32435__$1 == null);
var state_32454__$1 = (function (){var statearr_32457 = state_32454;
(statearr_32457[(7)] = inst_32435__$1);

return statearr_32457;
})();
if(cljs.core.truth_(inst_32436)){
var statearr_32458_32571 = state_32454__$1;
(statearr_32458_32571[(1)] = (5));

} else {
var statearr_32459_32572 = state_32454__$1;
(statearr_32459_32572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (5))){
var inst_32438 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32454__$1 = state_32454;
var statearr_32460_32573 = state_32454__$1;
(statearr_32460_32573[(2)] = inst_32438);

(statearr_32460_32573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32440 = (state_32454[(8)]);
var inst_32435 = (state_32454[(7)]);
var inst_32440__$1 = cljs.core.async.chan.call(null,(1));
var inst_32441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32442 = [inst_32435,inst_32440__$1];
var inst_32443 = (new cljs.core.PersistentVector(null,2,(5),inst_32441,inst_32442,null));
var state_32454__$1 = (function (){var statearr_32461 = state_32454;
(statearr_32461[(8)] = inst_32440__$1);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32454__$1,(8),jobs,inst_32443);
} else {
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32462_32574 = state_32454__$1;
(statearr_32462_32574[(2)] = inst_32450);

(statearr_32462_32574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32440 = (state_32454[(8)]);
var inst_32445 = (state_32454[(2)]);
var state_32454__$1 = (function (){var statearr_32463 = state_32454;
(statearr_32463[(9)] = inst_32445);

return statearr_32463;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32454__$1,(9),results,inst_32440);
} else {
if((state_val_32455 === (9))){
var inst_32447 = (state_32454[(2)]);
var state_32454__$1 = (function (){var statearr_32464 = state_32454;
(statearr_32464[(10)] = inst_32447);

return statearr_32464;
})();
var statearr_32465_32575 = state_32454__$1;
(statearr_32465_32575[(2)] = null);

(statearr_32465_32575[(1)] = (2));


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
});})(c__31971__auto___32569,jobs,results,process,async))
;
return ((function (switch__31857__auto__,c__31971__auto___32569,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0 = (function (){
var statearr_32469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__);

(statearr_32469[(1)] = (1));

return statearr_32469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1 = (function (state_32454){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32470){if((e32470 instanceof Object)){
var ex__31861__auto__ = e32470;
var statearr_32471_32576 = state_32454;
(statearr_32471_32576[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32577 = state_32454;
state_32454 = G__32577;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___32569,jobs,results,process,async))
})();
var state__31973__auto__ = (function (){var statearr_32472 = f__31972__auto__.call(null);
(statearr_32472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___32569);

return statearr_32472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___32569,jobs,results,process,async))
);


var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__,jobs,results,process,async){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__,jobs,results,process,async){
return (function (state_32510){
var state_val_32511 = (state_32510[(1)]);
if((state_val_32511 === (7))){
var inst_32506 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32512_32578 = state_32510__$1;
(statearr_32512_32578[(2)] = inst_32506);

(statearr_32512_32578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (20))){
var state_32510__$1 = state_32510;
var statearr_32513_32579 = state_32510__$1;
(statearr_32513_32579[(2)] = null);

(statearr_32513_32579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (1))){
var state_32510__$1 = state_32510;
var statearr_32514_32580 = state_32510__$1;
(statearr_32514_32580[(2)] = null);

(statearr_32514_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (4))){
var inst_32475 = (state_32510[(7)]);
var inst_32475__$1 = (state_32510[(2)]);
var inst_32476 = (inst_32475__$1 == null);
var state_32510__$1 = (function (){var statearr_32515 = state_32510;
(statearr_32515[(7)] = inst_32475__$1);

return statearr_32515;
})();
if(cljs.core.truth_(inst_32476)){
var statearr_32516_32581 = state_32510__$1;
(statearr_32516_32581[(1)] = (5));

} else {
var statearr_32517_32582 = state_32510__$1;
(statearr_32517_32582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (15))){
var inst_32488 = (state_32510[(8)]);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32510__$1,(18),to,inst_32488);
} else {
if((state_val_32511 === (21))){
var inst_32501 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32518_32583 = state_32510__$1;
(statearr_32518_32583[(2)] = inst_32501);

(statearr_32518_32583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (13))){
var inst_32503 = (state_32510[(2)]);
var state_32510__$1 = (function (){var statearr_32519 = state_32510;
(statearr_32519[(9)] = inst_32503);

return statearr_32519;
})();
var statearr_32520_32584 = state_32510__$1;
(statearr_32520_32584[(2)] = null);

(statearr_32520_32584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (6))){
var inst_32475 = (state_32510[(7)]);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32510__$1,(11),inst_32475);
} else {
if((state_val_32511 === (17))){
var inst_32496 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
if(cljs.core.truth_(inst_32496)){
var statearr_32521_32585 = state_32510__$1;
(statearr_32521_32585[(1)] = (19));

} else {
var statearr_32522_32586 = state_32510__$1;
(statearr_32522_32586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (3))){
var inst_32508 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32510__$1,inst_32508);
} else {
if((state_val_32511 === (12))){
var inst_32485 = (state_32510[(10)]);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32510__$1,(14),inst_32485);
} else {
if((state_val_32511 === (2))){
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32510__$1,(4),results);
} else {
if((state_val_32511 === (19))){
var state_32510__$1 = state_32510;
var statearr_32523_32587 = state_32510__$1;
(statearr_32523_32587[(2)] = null);

(statearr_32523_32587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (11))){
var inst_32485 = (state_32510[(2)]);
var state_32510__$1 = (function (){var statearr_32524 = state_32510;
(statearr_32524[(10)] = inst_32485);

return statearr_32524;
})();
var statearr_32525_32588 = state_32510__$1;
(statearr_32525_32588[(2)] = null);

(statearr_32525_32588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (9))){
var state_32510__$1 = state_32510;
var statearr_32526_32589 = state_32510__$1;
(statearr_32526_32589[(2)] = null);

(statearr_32526_32589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (5))){
var state_32510__$1 = state_32510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32527_32590 = state_32510__$1;
(statearr_32527_32590[(1)] = (8));

} else {
var statearr_32528_32591 = state_32510__$1;
(statearr_32528_32591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (14))){
var inst_32488 = (state_32510[(8)]);
var inst_32490 = (state_32510[(11)]);
var inst_32488__$1 = (state_32510[(2)]);
var inst_32489 = (inst_32488__$1 == null);
var inst_32490__$1 = cljs.core.not.call(null,inst_32489);
var state_32510__$1 = (function (){var statearr_32529 = state_32510;
(statearr_32529[(8)] = inst_32488__$1);

(statearr_32529[(11)] = inst_32490__$1);

return statearr_32529;
})();
if(inst_32490__$1){
var statearr_32530_32592 = state_32510__$1;
(statearr_32530_32592[(1)] = (15));

} else {
var statearr_32531_32593 = state_32510__$1;
(statearr_32531_32593[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (16))){
var inst_32490 = (state_32510[(11)]);
var state_32510__$1 = state_32510;
var statearr_32532_32594 = state_32510__$1;
(statearr_32532_32594[(2)] = inst_32490);

(statearr_32532_32594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (10))){
var inst_32482 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32533_32595 = state_32510__$1;
(statearr_32533_32595[(2)] = inst_32482);

(statearr_32533_32595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (18))){
var inst_32493 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32534_32596 = state_32510__$1;
(statearr_32534_32596[(2)] = inst_32493);

(statearr_32534_32596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (8))){
var inst_32479 = cljs.core.async.close_BANG_.call(null,to);
var state_32510__$1 = state_32510;
var statearr_32535_32597 = state_32510__$1;
(statearr_32535_32597[(2)] = inst_32479);

(statearr_32535_32597[(1)] = (10));


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
});})(c__31971__auto__,jobs,results,process,async))
;
return ((function (switch__31857__auto__,c__31971__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1 = (function (state_32510){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__31861__auto__ = e32540;
var statearr_32541_32598 = state_32510;
(statearr_32541_32598[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32599 = state_32510;
state_32510 = G__32599;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__ = function(state_32510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1.call(this,state_32510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__,jobs,results,process,async))
})();
var state__31973__auto__ = (function (){var statearr_32542 = f__31972__auto__.call(null);
(statearr_32542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__,jobs,results,process,async))
);

return c__31971__auto__;
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
var args32600 = [];
var len__22773__auto___32603 = arguments.length;
var i__22774__auto___32604 = (0);
while(true){
if((i__22774__auto___32604 < len__22773__auto___32603)){
args32600.push((arguments[i__22774__auto___32604]));

var G__32605 = (i__22774__auto___32604 + (1));
i__22774__auto___32604 = G__32605;
continue;
} else {
}
break;
}

var G__32602 = args32600.length;
switch (G__32602) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32600.length)].join('')));

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
var args32607 = [];
var len__22773__auto___32610 = arguments.length;
var i__22774__auto___32611 = (0);
while(true){
if((i__22774__auto___32611 < len__22773__auto___32610)){
args32607.push((arguments[i__22774__auto___32611]));

var G__32612 = (i__22774__auto___32611 + (1));
i__22774__auto___32611 = G__32612;
continue;
} else {
}
break;
}

var G__32609 = args32607.length;
switch (G__32609) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32607.length)].join('')));

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
var args32614 = [];
var len__22773__auto___32667 = arguments.length;
var i__22774__auto___32668 = (0);
while(true){
if((i__22774__auto___32668 < len__22773__auto___32667)){
args32614.push((arguments[i__22774__auto___32668]));

var G__32669 = (i__22774__auto___32668 + (1));
i__22774__auto___32668 = G__32669;
continue;
} else {
}
break;
}

var G__32616 = args32614.length;
switch (G__32616) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32614.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31971__auto___32671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___32671,tc,fc){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___32671,tc,fc){
return (function (state_32642){
var state_val_32643 = (state_32642[(1)]);
if((state_val_32643 === (7))){
var inst_32638 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
var statearr_32644_32672 = state_32642__$1;
(statearr_32644_32672[(2)] = inst_32638);

(statearr_32644_32672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (1))){
var state_32642__$1 = state_32642;
var statearr_32645_32673 = state_32642__$1;
(statearr_32645_32673[(2)] = null);

(statearr_32645_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (4))){
var inst_32619 = (state_32642[(7)]);
var inst_32619__$1 = (state_32642[(2)]);
var inst_32620 = (inst_32619__$1 == null);
var state_32642__$1 = (function (){var statearr_32646 = state_32642;
(statearr_32646[(7)] = inst_32619__$1);

return statearr_32646;
})();
if(cljs.core.truth_(inst_32620)){
var statearr_32647_32674 = state_32642__$1;
(statearr_32647_32674[(1)] = (5));

} else {
var statearr_32648_32675 = state_32642__$1;
(statearr_32648_32675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (13))){
var state_32642__$1 = state_32642;
var statearr_32649_32676 = state_32642__$1;
(statearr_32649_32676[(2)] = null);

(statearr_32649_32676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (6))){
var inst_32619 = (state_32642[(7)]);
var inst_32625 = p.call(null,inst_32619);
var state_32642__$1 = state_32642;
if(cljs.core.truth_(inst_32625)){
var statearr_32650_32677 = state_32642__$1;
(statearr_32650_32677[(1)] = (9));

} else {
var statearr_32651_32678 = state_32642__$1;
(statearr_32651_32678[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (3))){
var inst_32640 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32642__$1,inst_32640);
} else {
if((state_val_32643 === (12))){
var state_32642__$1 = state_32642;
var statearr_32652_32679 = state_32642__$1;
(statearr_32652_32679[(2)] = null);

(statearr_32652_32679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (2))){
var state_32642__$1 = state_32642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32642__$1,(4),ch);
} else {
if((state_val_32643 === (11))){
var inst_32619 = (state_32642[(7)]);
var inst_32629 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32642__$1,(8),inst_32629,inst_32619);
} else {
if((state_val_32643 === (9))){
var state_32642__$1 = state_32642;
var statearr_32653_32680 = state_32642__$1;
(statearr_32653_32680[(2)] = tc);

(statearr_32653_32680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (5))){
var inst_32622 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32623 = cljs.core.async.close_BANG_.call(null,fc);
var state_32642__$1 = (function (){var statearr_32654 = state_32642;
(statearr_32654[(8)] = inst_32622);

return statearr_32654;
})();
var statearr_32655_32681 = state_32642__$1;
(statearr_32655_32681[(2)] = inst_32623);

(statearr_32655_32681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (14))){
var inst_32636 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
var statearr_32656_32682 = state_32642__$1;
(statearr_32656_32682[(2)] = inst_32636);

(statearr_32656_32682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (10))){
var state_32642__$1 = state_32642;
var statearr_32657_32683 = state_32642__$1;
(statearr_32657_32683[(2)] = fc);

(statearr_32657_32683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (8))){
var inst_32631 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
if(cljs.core.truth_(inst_32631)){
var statearr_32658_32684 = state_32642__$1;
(statearr_32658_32684[(1)] = (12));

} else {
var statearr_32659_32685 = state_32642__$1;
(statearr_32659_32685[(1)] = (13));

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
});})(c__31971__auto___32671,tc,fc))
;
return ((function (switch__31857__auto__,c__31971__auto___32671,tc,fc){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_32663 = [null,null,null,null,null,null,null,null,null];
(statearr_32663[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_32663[(1)] = (1));

return statearr_32663;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_32642){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32664){if((e32664 instanceof Object)){
var ex__31861__auto__ = e32664;
var statearr_32665_32686 = state_32642;
(statearr_32665_32686[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32687 = state_32642;
state_32642 = G__32687;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_32642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_32642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___32671,tc,fc))
})();
var state__31973__auto__ = (function (){var statearr_32666 = f__31972__auto__.call(null);
(statearr_32666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___32671);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___32671,tc,fc))
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
var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__){
return (function (state_32751){
var state_val_32752 = (state_32751[(1)]);
if((state_val_32752 === (7))){
var inst_32747 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32753_32774 = state_32751__$1;
(statearr_32753_32774[(2)] = inst_32747);

(statearr_32753_32774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (1))){
var inst_32731 = init;
var state_32751__$1 = (function (){var statearr_32754 = state_32751;
(statearr_32754[(7)] = inst_32731);

return statearr_32754;
})();
var statearr_32755_32775 = state_32751__$1;
(statearr_32755_32775[(2)] = null);

(statearr_32755_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (4))){
var inst_32734 = (state_32751[(8)]);
var inst_32734__$1 = (state_32751[(2)]);
var inst_32735 = (inst_32734__$1 == null);
var state_32751__$1 = (function (){var statearr_32756 = state_32751;
(statearr_32756[(8)] = inst_32734__$1);

return statearr_32756;
})();
if(cljs.core.truth_(inst_32735)){
var statearr_32757_32776 = state_32751__$1;
(statearr_32757_32776[(1)] = (5));

} else {
var statearr_32758_32777 = state_32751__$1;
(statearr_32758_32777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (6))){
var inst_32731 = (state_32751[(7)]);
var inst_32734 = (state_32751[(8)]);
var inst_32738 = (state_32751[(9)]);
var inst_32738__$1 = f.call(null,inst_32731,inst_32734);
var inst_32739 = cljs.core.reduced_QMARK_.call(null,inst_32738__$1);
var state_32751__$1 = (function (){var statearr_32759 = state_32751;
(statearr_32759[(9)] = inst_32738__$1);

return statearr_32759;
})();
if(inst_32739){
var statearr_32760_32778 = state_32751__$1;
(statearr_32760_32778[(1)] = (8));

} else {
var statearr_32761_32779 = state_32751__$1;
(statearr_32761_32779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (3))){
var inst_32749 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32751__$1,inst_32749);
} else {
if((state_val_32752 === (2))){
var state_32751__$1 = state_32751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32751__$1,(4),ch);
} else {
if((state_val_32752 === (9))){
var inst_32738 = (state_32751[(9)]);
var inst_32731 = inst_32738;
var state_32751__$1 = (function (){var statearr_32762 = state_32751;
(statearr_32762[(7)] = inst_32731);

return statearr_32762;
})();
var statearr_32763_32780 = state_32751__$1;
(statearr_32763_32780[(2)] = null);

(statearr_32763_32780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (5))){
var inst_32731 = (state_32751[(7)]);
var state_32751__$1 = state_32751;
var statearr_32764_32781 = state_32751__$1;
(statearr_32764_32781[(2)] = inst_32731);

(statearr_32764_32781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (10))){
var inst_32745 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32765_32782 = state_32751__$1;
(statearr_32765_32782[(2)] = inst_32745);

(statearr_32765_32782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (8))){
var inst_32738 = (state_32751[(9)]);
var inst_32741 = cljs.core.deref.call(null,inst_32738);
var state_32751__$1 = state_32751;
var statearr_32766_32783 = state_32751__$1;
(statearr_32766_32783[(2)] = inst_32741);

(statearr_32766_32783[(1)] = (10));


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
});})(c__31971__auto__))
;
return ((function (switch__31857__auto__,c__31971__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31858__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31858__auto____0 = (function (){
var statearr_32770 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32770[(0)] = cljs$core$async$reduce_$_state_machine__31858__auto__);

(statearr_32770[(1)] = (1));

return statearr_32770;
});
var cljs$core$async$reduce_$_state_machine__31858__auto____1 = (function (state_32751){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32771){if((e32771 instanceof Object)){
var ex__31861__auto__ = e32771;
var statearr_32772_32784 = state_32751;
(statearr_32772_32784[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32785 = state_32751;
state_32751 = G__32785;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31858__auto__ = function(state_32751){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31858__auto____1.call(this,state_32751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31858__auto____0;
cljs$core$async$reduce_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31858__auto____1;
return cljs$core$async$reduce_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__))
})();
var state__31973__auto__ = (function (){var statearr_32773 = f__31972__auto__.call(null);
(statearr_32773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__))
);

return c__31971__auto__;
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
var args32786 = [];
var len__22773__auto___32838 = arguments.length;
var i__22774__auto___32839 = (0);
while(true){
if((i__22774__auto___32839 < len__22773__auto___32838)){
args32786.push((arguments[i__22774__auto___32839]));

var G__32840 = (i__22774__auto___32839 + (1));
i__22774__auto___32839 = G__32840;
continue;
} else {
}
break;
}

var G__32788 = args32786.length;
switch (G__32788) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32786.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__){
return (function (state_32813){
var state_val_32814 = (state_32813[(1)]);
if((state_val_32814 === (7))){
var inst_32795 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
var statearr_32815_32842 = state_32813__$1;
(statearr_32815_32842[(2)] = inst_32795);

(statearr_32815_32842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (1))){
var inst_32789 = cljs.core.seq.call(null,coll);
var inst_32790 = inst_32789;
var state_32813__$1 = (function (){var statearr_32816 = state_32813;
(statearr_32816[(7)] = inst_32790);

return statearr_32816;
})();
var statearr_32817_32843 = state_32813__$1;
(statearr_32817_32843[(2)] = null);

(statearr_32817_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (4))){
var inst_32790 = (state_32813[(7)]);
var inst_32793 = cljs.core.first.call(null,inst_32790);
var state_32813__$1 = state_32813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32813__$1,(7),ch,inst_32793);
} else {
if((state_val_32814 === (13))){
var inst_32807 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
var statearr_32818_32844 = state_32813__$1;
(statearr_32818_32844[(2)] = inst_32807);

(statearr_32818_32844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (6))){
var inst_32798 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
if(cljs.core.truth_(inst_32798)){
var statearr_32819_32845 = state_32813__$1;
(statearr_32819_32845[(1)] = (8));

} else {
var statearr_32820_32846 = state_32813__$1;
(statearr_32820_32846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (3))){
var inst_32811 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32813__$1,inst_32811);
} else {
if((state_val_32814 === (12))){
var state_32813__$1 = state_32813;
var statearr_32821_32847 = state_32813__$1;
(statearr_32821_32847[(2)] = null);

(statearr_32821_32847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (2))){
var inst_32790 = (state_32813[(7)]);
var state_32813__$1 = state_32813;
if(cljs.core.truth_(inst_32790)){
var statearr_32822_32848 = state_32813__$1;
(statearr_32822_32848[(1)] = (4));

} else {
var statearr_32823_32849 = state_32813__$1;
(statearr_32823_32849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (11))){
var inst_32804 = cljs.core.async.close_BANG_.call(null,ch);
var state_32813__$1 = state_32813;
var statearr_32824_32850 = state_32813__$1;
(statearr_32824_32850[(2)] = inst_32804);

(statearr_32824_32850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (9))){
var state_32813__$1 = state_32813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32825_32851 = state_32813__$1;
(statearr_32825_32851[(1)] = (11));

} else {
var statearr_32826_32852 = state_32813__$1;
(statearr_32826_32852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (5))){
var inst_32790 = (state_32813[(7)]);
var state_32813__$1 = state_32813;
var statearr_32827_32853 = state_32813__$1;
(statearr_32827_32853[(2)] = inst_32790);

(statearr_32827_32853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (10))){
var inst_32809 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
var statearr_32828_32854 = state_32813__$1;
(statearr_32828_32854[(2)] = inst_32809);

(statearr_32828_32854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (8))){
var inst_32790 = (state_32813[(7)]);
var inst_32800 = cljs.core.next.call(null,inst_32790);
var inst_32790__$1 = inst_32800;
var state_32813__$1 = (function (){var statearr_32829 = state_32813;
(statearr_32829[(7)] = inst_32790__$1);

return statearr_32829;
})();
var statearr_32830_32855 = state_32813__$1;
(statearr_32830_32855[(2)] = null);

(statearr_32830_32855[(1)] = (2));


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
});})(c__31971__auto__))
;
return ((function (switch__31857__auto__,c__31971__auto__){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_32834 = [null,null,null,null,null,null,null,null];
(statearr_32834[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_32834[(1)] = (1));

return statearr_32834;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_32813){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_32813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e32835){if((e32835 instanceof Object)){
var ex__31861__auto__ = e32835;
var statearr_32836_32856 = state_32813;
(statearr_32836_32856[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_32813;
state_32813 = G__32857;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_32813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_32813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__))
})();
var state__31973__auto__ = (function (){var statearr_32837 = f__31972__auto__.call(null);
(statearr_32837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_32837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__))
);

return c__31971__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async33083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33083 = (function (mult,ch,cs,meta33084){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33084 = meta33084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33085,meta33084__$1){
var self__ = this;
var _33085__$1 = this;
return (new cljs.core.async.t_cljs$core$async33083(self__.mult,self__.ch,self__.cs,meta33084__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33085){
var self__ = this;
var _33085__$1 = this;
return self__.meta33084;
});})(cs))
;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33083.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33084","meta33084",-1775002230,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33083";

cljs.core.async.t_cljs$core$async33083.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async33083");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33083 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33083(mult__$1,ch__$1,cs__$1,meta33084){
return (new cljs.core.async.t_cljs$core$async33083(mult__$1,ch__$1,cs__$1,meta33084));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33083(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31971__auto___33308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___33308,cs,m,dchan,dctr,done){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___33308,cs,m,dchan,dctr,done){
return (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (7))){
var inst_33216 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33222_33309 = state_33220__$1;
(statearr_33222_33309[(2)] = inst_33216);

(statearr_33222_33309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (20))){
var inst_33119 = (state_33220[(7)]);
var inst_33131 = cljs.core.first.call(null,inst_33119);
var inst_33132 = cljs.core.nth.call(null,inst_33131,(0),null);
var inst_33133 = cljs.core.nth.call(null,inst_33131,(1),null);
var state_33220__$1 = (function (){var statearr_33223 = state_33220;
(statearr_33223[(8)] = inst_33132);

return statearr_33223;
})();
if(cljs.core.truth_(inst_33133)){
var statearr_33224_33310 = state_33220__$1;
(statearr_33224_33310[(1)] = (22));

} else {
var statearr_33225_33311 = state_33220__$1;
(statearr_33225_33311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (27))){
var inst_33088 = (state_33220[(9)]);
var inst_33163 = (state_33220[(10)]);
var inst_33168 = (state_33220[(11)]);
var inst_33161 = (state_33220[(12)]);
var inst_33168__$1 = cljs.core._nth.call(null,inst_33161,inst_33163);
var inst_33169 = cljs.core.async.put_BANG_.call(null,inst_33168__$1,inst_33088,done);
var state_33220__$1 = (function (){var statearr_33226 = state_33220;
(statearr_33226[(11)] = inst_33168__$1);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33169)){
var statearr_33227_33312 = state_33220__$1;
(statearr_33227_33312[(1)] = (30));

} else {
var statearr_33228_33313 = state_33220__$1;
(statearr_33228_33313[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (1))){
var state_33220__$1 = state_33220;
var statearr_33229_33314 = state_33220__$1;
(statearr_33229_33314[(2)] = null);

(statearr_33229_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (24))){
var inst_33119 = (state_33220[(7)]);
var inst_33138 = (state_33220[(2)]);
var inst_33139 = cljs.core.next.call(null,inst_33119);
var inst_33097 = inst_33139;
var inst_33098 = null;
var inst_33099 = (0);
var inst_33100 = (0);
var state_33220__$1 = (function (){var statearr_33230 = state_33220;
(statearr_33230[(13)] = inst_33099);

(statearr_33230[(14)] = inst_33138);

(statearr_33230[(15)] = inst_33100);

(statearr_33230[(16)] = inst_33098);

(statearr_33230[(17)] = inst_33097);

return statearr_33230;
})();
var statearr_33231_33315 = state_33220__$1;
(statearr_33231_33315[(2)] = null);

(statearr_33231_33315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (39))){
var state_33220__$1 = state_33220;
var statearr_33235_33316 = state_33220__$1;
(statearr_33235_33316[(2)] = null);

(statearr_33235_33316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (4))){
var inst_33088 = (state_33220[(9)]);
var inst_33088__$1 = (state_33220[(2)]);
var inst_33089 = (inst_33088__$1 == null);
var state_33220__$1 = (function (){var statearr_33236 = state_33220;
(statearr_33236[(9)] = inst_33088__$1);

return statearr_33236;
})();
if(cljs.core.truth_(inst_33089)){
var statearr_33237_33317 = state_33220__$1;
(statearr_33237_33317[(1)] = (5));

} else {
var statearr_33238_33318 = state_33220__$1;
(statearr_33238_33318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (15))){
var inst_33099 = (state_33220[(13)]);
var inst_33100 = (state_33220[(15)]);
var inst_33098 = (state_33220[(16)]);
var inst_33097 = (state_33220[(17)]);
var inst_33115 = (state_33220[(2)]);
var inst_33116 = (inst_33100 + (1));
var tmp33232 = inst_33099;
var tmp33233 = inst_33098;
var tmp33234 = inst_33097;
var inst_33097__$1 = tmp33234;
var inst_33098__$1 = tmp33233;
var inst_33099__$1 = tmp33232;
var inst_33100__$1 = inst_33116;
var state_33220__$1 = (function (){var statearr_33239 = state_33220;
(statearr_33239[(18)] = inst_33115);

(statearr_33239[(13)] = inst_33099__$1);

(statearr_33239[(15)] = inst_33100__$1);

(statearr_33239[(16)] = inst_33098__$1);

(statearr_33239[(17)] = inst_33097__$1);

return statearr_33239;
})();
var statearr_33240_33319 = state_33220__$1;
(statearr_33240_33319[(2)] = null);

(statearr_33240_33319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (21))){
var inst_33142 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33244_33320 = state_33220__$1;
(statearr_33244_33320[(2)] = inst_33142);

(statearr_33244_33320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (31))){
var inst_33168 = (state_33220[(11)]);
var inst_33172 = done.call(null,null);
var inst_33173 = cljs.core.async.untap_STAR_.call(null,m,inst_33168);
var state_33220__$1 = (function (){var statearr_33245 = state_33220;
(statearr_33245[(19)] = inst_33172);

return statearr_33245;
})();
var statearr_33246_33321 = state_33220__$1;
(statearr_33246_33321[(2)] = inst_33173);

(statearr_33246_33321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (32))){
var inst_33160 = (state_33220[(20)]);
var inst_33163 = (state_33220[(10)]);
var inst_33162 = (state_33220[(21)]);
var inst_33161 = (state_33220[(12)]);
var inst_33175 = (state_33220[(2)]);
var inst_33176 = (inst_33163 + (1));
var tmp33241 = inst_33160;
var tmp33242 = inst_33162;
var tmp33243 = inst_33161;
var inst_33160__$1 = tmp33241;
var inst_33161__$1 = tmp33243;
var inst_33162__$1 = tmp33242;
var inst_33163__$1 = inst_33176;
var state_33220__$1 = (function (){var statearr_33247 = state_33220;
(statearr_33247[(22)] = inst_33175);

(statearr_33247[(20)] = inst_33160__$1);

(statearr_33247[(10)] = inst_33163__$1);

(statearr_33247[(21)] = inst_33162__$1);

(statearr_33247[(12)] = inst_33161__$1);

return statearr_33247;
})();
var statearr_33248_33322 = state_33220__$1;
(statearr_33248_33322[(2)] = null);

(statearr_33248_33322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (40))){
var inst_33188 = (state_33220[(23)]);
var inst_33192 = done.call(null,null);
var inst_33193 = cljs.core.async.untap_STAR_.call(null,m,inst_33188);
var state_33220__$1 = (function (){var statearr_33249 = state_33220;
(statearr_33249[(24)] = inst_33192);

return statearr_33249;
})();
var statearr_33250_33323 = state_33220__$1;
(statearr_33250_33323[(2)] = inst_33193);

(statearr_33250_33323[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (33))){
var inst_33179 = (state_33220[(25)]);
var inst_33181 = cljs.core.chunked_seq_QMARK_.call(null,inst_33179);
var state_33220__$1 = state_33220;
if(inst_33181){
var statearr_33251_33324 = state_33220__$1;
(statearr_33251_33324[(1)] = (36));

} else {
var statearr_33252_33325 = state_33220__$1;
(statearr_33252_33325[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (13))){
var inst_33109 = (state_33220[(26)]);
var inst_33112 = cljs.core.async.close_BANG_.call(null,inst_33109);
var state_33220__$1 = state_33220;
var statearr_33253_33326 = state_33220__$1;
(statearr_33253_33326[(2)] = inst_33112);

(statearr_33253_33326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (22))){
var inst_33132 = (state_33220[(8)]);
var inst_33135 = cljs.core.async.close_BANG_.call(null,inst_33132);
var state_33220__$1 = state_33220;
var statearr_33254_33327 = state_33220__$1;
(statearr_33254_33327[(2)] = inst_33135);

(statearr_33254_33327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (36))){
var inst_33179 = (state_33220[(25)]);
var inst_33183 = cljs.core.chunk_first.call(null,inst_33179);
var inst_33184 = cljs.core.chunk_rest.call(null,inst_33179);
var inst_33185 = cljs.core.count.call(null,inst_33183);
var inst_33160 = inst_33184;
var inst_33161 = inst_33183;
var inst_33162 = inst_33185;
var inst_33163 = (0);
var state_33220__$1 = (function (){var statearr_33255 = state_33220;
(statearr_33255[(20)] = inst_33160);

(statearr_33255[(10)] = inst_33163);

(statearr_33255[(21)] = inst_33162);

(statearr_33255[(12)] = inst_33161);

return statearr_33255;
})();
var statearr_33256_33328 = state_33220__$1;
(statearr_33256_33328[(2)] = null);

(statearr_33256_33328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (41))){
var inst_33179 = (state_33220[(25)]);
var inst_33195 = (state_33220[(2)]);
var inst_33196 = cljs.core.next.call(null,inst_33179);
var inst_33160 = inst_33196;
var inst_33161 = null;
var inst_33162 = (0);
var inst_33163 = (0);
var state_33220__$1 = (function (){var statearr_33257 = state_33220;
(statearr_33257[(20)] = inst_33160);

(statearr_33257[(10)] = inst_33163);

(statearr_33257[(21)] = inst_33162);

(statearr_33257[(27)] = inst_33195);

(statearr_33257[(12)] = inst_33161);

return statearr_33257;
})();
var statearr_33258_33329 = state_33220__$1;
(statearr_33258_33329[(2)] = null);

(statearr_33258_33329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (43))){
var state_33220__$1 = state_33220;
var statearr_33259_33330 = state_33220__$1;
(statearr_33259_33330[(2)] = null);

(statearr_33259_33330[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (29))){
var inst_33204 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33260_33331 = state_33220__$1;
(statearr_33260_33331[(2)] = inst_33204);

(statearr_33260_33331[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (44))){
var inst_33213 = (state_33220[(2)]);
var state_33220__$1 = (function (){var statearr_33261 = state_33220;
(statearr_33261[(28)] = inst_33213);

return statearr_33261;
})();
var statearr_33262_33332 = state_33220__$1;
(statearr_33262_33332[(2)] = null);

(statearr_33262_33332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (6))){
var inst_33152 = (state_33220[(29)]);
var inst_33151 = cljs.core.deref.call(null,cs);
var inst_33152__$1 = cljs.core.keys.call(null,inst_33151);
var inst_33153 = cljs.core.count.call(null,inst_33152__$1);
var inst_33154 = cljs.core.reset_BANG_.call(null,dctr,inst_33153);
var inst_33159 = cljs.core.seq.call(null,inst_33152__$1);
var inst_33160 = inst_33159;
var inst_33161 = null;
var inst_33162 = (0);
var inst_33163 = (0);
var state_33220__$1 = (function (){var statearr_33263 = state_33220;
(statearr_33263[(30)] = inst_33154);

(statearr_33263[(20)] = inst_33160);

(statearr_33263[(10)] = inst_33163);

(statearr_33263[(21)] = inst_33162);

(statearr_33263[(12)] = inst_33161);

(statearr_33263[(29)] = inst_33152__$1);

return statearr_33263;
})();
var statearr_33264_33333 = state_33220__$1;
(statearr_33264_33333[(2)] = null);

(statearr_33264_33333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (28))){
var inst_33179 = (state_33220[(25)]);
var inst_33160 = (state_33220[(20)]);
var inst_33179__$1 = cljs.core.seq.call(null,inst_33160);
var state_33220__$1 = (function (){var statearr_33265 = state_33220;
(statearr_33265[(25)] = inst_33179__$1);

return statearr_33265;
})();
if(inst_33179__$1){
var statearr_33266_33334 = state_33220__$1;
(statearr_33266_33334[(1)] = (33));

} else {
var statearr_33267_33335 = state_33220__$1;
(statearr_33267_33335[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (25))){
var inst_33163 = (state_33220[(10)]);
var inst_33162 = (state_33220[(21)]);
var inst_33165 = (inst_33163 < inst_33162);
var inst_33166 = inst_33165;
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33166)){
var statearr_33268_33336 = state_33220__$1;
(statearr_33268_33336[(1)] = (27));

} else {
var statearr_33269_33337 = state_33220__$1;
(statearr_33269_33337[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (34))){
var state_33220__$1 = state_33220;
var statearr_33270_33338 = state_33220__$1;
(statearr_33270_33338[(2)] = null);

(statearr_33270_33338[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (17))){
var state_33220__$1 = state_33220;
var statearr_33271_33339 = state_33220__$1;
(statearr_33271_33339[(2)] = null);

(statearr_33271_33339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (3))){
var inst_33218 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33220__$1,inst_33218);
} else {
if((state_val_33221 === (12))){
var inst_33147 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33272_33340 = state_33220__$1;
(statearr_33272_33340[(2)] = inst_33147);

(statearr_33272_33340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (2))){
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33220__$1,(4),ch);
} else {
if((state_val_33221 === (23))){
var state_33220__$1 = state_33220;
var statearr_33273_33341 = state_33220__$1;
(statearr_33273_33341[(2)] = null);

(statearr_33273_33341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (35))){
var inst_33202 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33274_33342 = state_33220__$1;
(statearr_33274_33342[(2)] = inst_33202);

(statearr_33274_33342[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (19))){
var inst_33119 = (state_33220[(7)]);
var inst_33123 = cljs.core.chunk_first.call(null,inst_33119);
var inst_33124 = cljs.core.chunk_rest.call(null,inst_33119);
var inst_33125 = cljs.core.count.call(null,inst_33123);
var inst_33097 = inst_33124;
var inst_33098 = inst_33123;
var inst_33099 = inst_33125;
var inst_33100 = (0);
var state_33220__$1 = (function (){var statearr_33275 = state_33220;
(statearr_33275[(13)] = inst_33099);

(statearr_33275[(15)] = inst_33100);

(statearr_33275[(16)] = inst_33098);

(statearr_33275[(17)] = inst_33097);

return statearr_33275;
})();
var statearr_33276_33343 = state_33220__$1;
(statearr_33276_33343[(2)] = null);

(statearr_33276_33343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (11))){
var inst_33119 = (state_33220[(7)]);
var inst_33097 = (state_33220[(17)]);
var inst_33119__$1 = cljs.core.seq.call(null,inst_33097);
var state_33220__$1 = (function (){var statearr_33277 = state_33220;
(statearr_33277[(7)] = inst_33119__$1);

return statearr_33277;
})();
if(inst_33119__$1){
var statearr_33278_33344 = state_33220__$1;
(statearr_33278_33344[(1)] = (16));

} else {
var statearr_33279_33345 = state_33220__$1;
(statearr_33279_33345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (9))){
var inst_33149 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33280_33346 = state_33220__$1;
(statearr_33280_33346[(2)] = inst_33149);

(statearr_33280_33346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (5))){
var inst_33095 = cljs.core.deref.call(null,cs);
var inst_33096 = cljs.core.seq.call(null,inst_33095);
var inst_33097 = inst_33096;
var inst_33098 = null;
var inst_33099 = (0);
var inst_33100 = (0);
var state_33220__$1 = (function (){var statearr_33281 = state_33220;
(statearr_33281[(13)] = inst_33099);

(statearr_33281[(15)] = inst_33100);

(statearr_33281[(16)] = inst_33098);

(statearr_33281[(17)] = inst_33097);

return statearr_33281;
})();
var statearr_33282_33347 = state_33220__$1;
(statearr_33282_33347[(2)] = null);

(statearr_33282_33347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (14))){
var state_33220__$1 = state_33220;
var statearr_33283_33348 = state_33220__$1;
(statearr_33283_33348[(2)] = null);

(statearr_33283_33348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (45))){
var inst_33210 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33284_33349 = state_33220__$1;
(statearr_33284_33349[(2)] = inst_33210);

(statearr_33284_33349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (26))){
var inst_33152 = (state_33220[(29)]);
var inst_33206 = (state_33220[(2)]);
var inst_33207 = cljs.core.seq.call(null,inst_33152);
var state_33220__$1 = (function (){var statearr_33285 = state_33220;
(statearr_33285[(31)] = inst_33206);

return statearr_33285;
})();
if(inst_33207){
var statearr_33286_33350 = state_33220__$1;
(statearr_33286_33350[(1)] = (42));

} else {
var statearr_33287_33351 = state_33220__$1;
(statearr_33287_33351[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (16))){
var inst_33119 = (state_33220[(7)]);
var inst_33121 = cljs.core.chunked_seq_QMARK_.call(null,inst_33119);
var state_33220__$1 = state_33220;
if(inst_33121){
var statearr_33288_33352 = state_33220__$1;
(statearr_33288_33352[(1)] = (19));

} else {
var statearr_33289_33353 = state_33220__$1;
(statearr_33289_33353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (38))){
var inst_33199 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33290_33354 = state_33220__$1;
(statearr_33290_33354[(2)] = inst_33199);

(statearr_33290_33354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (30))){
var state_33220__$1 = state_33220;
var statearr_33291_33355 = state_33220__$1;
(statearr_33291_33355[(2)] = null);

(statearr_33291_33355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (10))){
var inst_33100 = (state_33220[(15)]);
var inst_33098 = (state_33220[(16)]);
var inst_33108 = cljs.core._nth.call(null,inst_33098,inst_33100);
var inst_33109 = cljs.core.nth.call(null,inst_33108,(0),null);
var inst_33110 = cljs.core.nth.call(null,inst_33108,(1),null);
var state_33220__$1 = (function (){var statearr_33292 = state_33220;
(statearr_33292[(26)] = inst_33109);

return statearr_33292;
})();
if(cljs.core.truth_(inst_33110)){
var statearr_33293_33356 = state_33220__$1;
(statearr_33293_33356[(1)] = (13));

} else {
var statearr_33294_33357 = state_33220__$1;
(statearr_33294_33357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (18))){
var inst_33145 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33295_33358 = state_33220__$1;
(statearr_33295_33358[(2)] = inst_33145);

(statearr_33295_33358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (42))){
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33220__$1,(45),dchan);
} else {
if((state_val_33221 === (37))){
var inst_33179 = (state_33220[(25)]);
var inst_33088 = (state_33220[(9)]);
var inst_33188 = (state_33220[(23)]);
var inst_33188__$1 = cljs.core.first.call(null,inst_33179);
var inst_33189 = cljs.core.async.put_BANG_.call(null,inst_33188__$1,inst_33088,done);
var state_33220__$1 = (function (){var statearr_33296 = state_33220;
(statearr_33296[(23)] = inst_33188__$1);

return statearr_33296;
})();
if(cljs.core.truth_(inst_33189)){
var statearr_33297_33359 = state_33220__$1;
(statearr_33297_33359[(1)] = (39));

} else {
var statearr_33298_33360 = state_33220__$1;
(statearr_33298_33360[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (8))){
var inst_33099 = (state_33220[(13)]);
var inst_33100 = (state_33220[(15)]);
var inst_33102 = (inst_33100 < inst_33099);
var inst_33103 = inst_33102;
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33103)){
var statearr_33299_33361 = state_33220__$1;
(statearr_33299_33361[(1)] = (10));

} else {
var statearr_33300_33362 = state_33220__$1;
(statearr_33300_33362[(1)] = (11));

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
});})(c__31971__auto___33308,cs,m,dchan,dctr,done))
;
return ((function (switch__31857__auto__,c__31971__auto___33308,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31858__auto__ = null;
var cljs$core$async$mult_$_state_machine__31858__auto____0 = (function (){
var statearr_33304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33304[(0)] = cljs$core$async$mult_$_state_machine__31858__auto__);

(statearr_33304[(1)] = (1));

return statearr_33304;
});
var cljs$core$async$mult_$_state_machine__31858__auto____1 = (function (state_33220){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_33220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e33305){if((e33305 instanceof Object)){
var ex__31861__auto__ = e33305;
var statearr_33306_33363 = state_33220;
(statearr_33306_33363[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33364 = state_33220;
state_33220 = G__33364;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31858__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31858__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31858__auto____0;
cljs$core$async$mult_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31858__auto____1;
return cljs$core$async$mult_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___33308,cs,m,dchan,dctr,done))
})();
var state__31973__auto__ = (function (){var statearr_33307 = f__31972__auto__.call(null);
(statearr_33307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___33308);

return statearr_33307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___33308,cs,m,dchan,dctr,done))
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
var args33365 = [];
var len__22773__auto___33368 = arguments.length;
var i__22774__auto___33369 = (0);
while(true){
if((i__22774__auto___33369 < len__22773__auto___33368)){
args33365.push((arguments[i__22774__auto___33369]));

var G__33370 = (i__22774__auto___33369 + (1));
i__22774__auto___33369 = G__33370;
continue;
} else {
}
break;
}

var G__33367 = args33365.length;
switch (G__33367) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33365.length)].join('')));

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
var len__22773__auto___33382 = arguments.length;
var i__22774__auto___33383 = (0);
while(true){
if((i__22774__auto___33383 < len__22773__auto___33382)){
args__22780__auto__.push((arguments[i__22774__auto___33383]));

var G__33384 = (i__22774__auto___33383 + (1));
i__22774__auto___33383 = G__33384;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33376){
var map__33377 = p__33376;
var map__33377__$1 = ((((!((map__33377 == null)))?((((map__33377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33377):map__33377);
var opts = map__33377__$1;
var statearr_33379_33385 = state;
(statearr_33379_33385[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6552__auto__ = cljs.core.async.do_alts.call(null,((function (map__33377,map__33377__$1,opts){
return (function (val){
var statearr_33380_33386 = state;
(statearr_33380_33386[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33377,map__33377__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6552__auto__)){
var cb = temp__6552__auto__;
var statearr_33381_33387 = state;
(statearr_33381_33387[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33372){
var G__33373 = cljs.core.first.call(null,seq33372);
var seq33372__$1 = cljs.core.next.call(null,seq33372);
var G__33374 = cljs.core.first.call(null,seq33372__$1);
var seq33372__$2 = cljs.core.next.call(null,seq33372__$1);
var G__33375 = cljs.core.first.call(null,seq33372__$2);
var seq33372__$3 = cljs.core.next.call(null,seq33372__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33373,G__33374,G__33375,seq33372__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33553 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33554){
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
this.meta33554 = meta33554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33555,meta33554__$1){
var self__ = this;
var _33555__$1 = this;
return (new cljs.core.async.t_cljs$core$async33553(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33554__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33555){
var self__ = this;
var _33555__$1 = this;
return self__.meta33554;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33553.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33554","meta33554",308718366,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33553";

cljs.core.async.t_cljs$core$async33553.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async33553");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33553 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33553(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33554){
return (new cljs.core.async.t_cljs$core$async33553(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33554));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33553(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31971__auto___33718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___33718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___33718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33655){
var state_val_33656 = (state_33655[(1)]);
if((state_val_33656 === (7))){
var inst_33571 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33657_33719 = state_33655__$1;
(statearr_33657_33719[(2)] = inst_33571);

(statearr_33657_33719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (20))){
var inst_33583 = (state_33655[(7)]);
var state_33655__$1 = state_33655;
var statearr_33658_33720 = state_33655__$1;
(statearr_33658_33720[(2)] = inst_33583);

(statearr_33658_33720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (27))){
var state_33655__$1 = state_33655;
var statearr_33659_33721 = state_33655__$1;
(statearr_33659_33721[(2)] = null);

(statearr_33659_33721[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (1))){
var inst_33559 = (state_33655[(8)]);
var inst_33559__$1 = calc_state.call(null);
var inst_33561 = (inst_33559__$1 == null);
var inst_33562 = cljs.core.not.call(null,inst_33561);
var state_33655__$1 = (function (){var statearr_33660 = state_33655;
(statearr_33660[(8)] = inst_33559__$1);

return statearr_33660;
})();
if(inst_33562){
var statearr_33661_33722 = state_33655__$1;
(statearr_33661_33722[(1)] = (2));

} else {
var statearr_33662_33723 = state_33655__$1;
(statearr_33662_33723[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (24))){
var inst_33615 = (state_33655[(9)]);
var inst_33629 = (state_33655[(10)]);
var inst_33606 = (state_33655[(11)]);
var inst_33629__$1 = inst_33606.call(null,inst_33615);
var state_33655__$1 = (function (){var statearr_33663 = state_33655;
(statearr_33663[(10)] = inst_33629__$1);

return statearr_33663;
})();
if(cljs.core.truth_(inst_33629__$1)){
var statearr_33664_33724 = state_33655__$1;
(statearr_33664_33724[(1)] = (29));

} else {
var statearr_33665_33725 = state_33655__$1;
(statearr_33665_33725[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (4))){
var inst_33574 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33574)){
var statearr_33666_33726 = state_33655__$1;
(statearr_33666_33726[(1)] = (8));

} else {
var statearr_33667_33727 = state_33655__$1;
(statearr_33667_33727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (15))){
var inst_33600 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33600)){
var statearr_33668_33728 = state_33655__$1;
(statearr_33668_33728[(1)] = (19));

} else {
var statearr_33669_33729 = state_33655__$1;
(statearr_33669_33729[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (21))){
var inst_33605 = (state_33655[(12)]);
var inst_33605__$1 = (state_33655[(2)]);
var inst_33606 = cljs.core.get.call(null,inst_33605__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33607 = cljs.core.get.call(null,inst_33605__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33608 = cljs.core.get.call(null,inst_33605__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33655__$1 = (function (){var statearr_33670 = state_33655;
(statearr_33670[(12)] = inst_33605__$1);

(statearr_33670[(11)] = inst_33606);

(statearr_33670[(13)] = inst_33607);

return statearr_33670;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33655__$1,(22),inst_33608);
} else {
if((state_val_33656 === (31))){
var inst_33637 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33637)){
var statearr_33671_33730 = state_33655__$1;
(statearr_33671_33730[(1)] = (32));

} else {
var statearr_33672_33731 = state_33655__$1;
(statearr_33672_33731[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (32))){
var inst_33614 = (state_33655[(14)]);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33655__$1,(35),out,inst_33614);
} else {
if((state_val_33656 === (33))){
var inst_33605 = (state_33655[(12)]);
var inst_33583 = inst_33605;
var state_33655__$1 = (function (){var statearr_33673 = state_33655;
(statearr_33673[(7)] = inst_33583);

return statearr_33673;
})();
var statearr_33674_33732 = state_33655__$1;
(statearr_33674_33732[(2)] = null);

(statearr_33674_33732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (13))){
var inst_33583 = (state_33655[(7)]);
var inst_33590 = inst_33583.cljs$lang$protocol_mask$partition0$;
var inst_33591 = (inst_33590 & (64));
var inst_33592 = inst_33583.cljs$core$ISeq$;
var inst_33593 = (inst_33591) || (inst_33592);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33593)){
var statearr_33675_33733 = state_33655__$1;
(statearr_33675_33733[(1)] = (16));

} else {
var statearr_33676_33734 = state_33655__$1;
(statearr_33676_33734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (22))){
var inst_33614 = (state_33655[(14)]);
var inst_33615 = (state_33655[(9)]);
var inst_33613 = (state_33655[(2)]);
var inst_33614__$1 = cljs.core.nth.call(null,inst_33613,(0),null);
var inst_33615__$1 = cljs.core.nth.call(null,inst_33613,(1),null);
var inst_33616 = (inst_33614__$1 == null);
var inst_33617 = cljs.core._EQ_.call(null,inst_33615__$1,change);
var inst_33618 = (inst_33616) || (inst_33617);
var state_33655__$1 = (function (){var statearr_33677 = state_33655;
(statearr_33677[(14)] = inst_33614__$1);

(statearr_33677[(9)] = inst_33615__$1);

return statearr_33677;
})();
if(cljs.core.truth_(inst_33618)){
var statearr_33678_33735 = state_33655__$1;
(statearr_33678_33735[(1)] = (23));

} else {
var statearr_33679_33736 = state_33655__$1;
(statearr_33679_33736[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (36))){
var inst_33605 = (state_33655[(12)]);
var inst_33583 = inst_33605;
var state_33655__$1 = (function (){var statearr_33680 = state_33655;
(statearr_33680[(7)] = inst_33583);

return statearr_33680;
})();
var statearr_33681_33737 = state_33655__$1;
(statearr_33681_33737[(2)] = null);

(statearr_33681_33737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (29))){
var inst_33629 = (state_33655[(10)]);
var state_33655__$1 = state_33655;
var statearr_33682_33738 = state_33655__$1;
(statearr_33682_33738[(2)] = inst_33629);

(statearr_33682_33738[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (6))){
var state_33655__$1 = state_33655;
var statearr_33683_33739 = state_33655__$1;
(statearr_33683_33739[(2)] = false);

(statearr_33683_33739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (28))){
var inst_33625 = (state_33655[(2)]);
var inst_33626 = calc_state.call(null);
var inst_33583 = inst_33626;
var state_33655__$1 = (function (){var statearr_33684 = state_33655;
(statearr_33684[(7)] = inst_33583);

(statearr_33684[(15)] = inst_33625);

return statearr_33684;
})();
var statearr_33685_33740 = state_33655__$1;
(statearr_33685_33740[(2)] = null);

(statearr_33685_33740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (25))){
var inst_33651 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33686_33741 = state_33655__$1;
(statearr_33686_33741[(2)] = inst_33651);

(statearr_33686_33741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (34))){
var inst_33649 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33687_33742 = state_33655__$1;
(statearr_33687_33742[(2)] = inst_33649);

(statearr_33687_33742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (17))){
var state_33655__$1 = state_33655;
var statearr_33688_33743 = state_33655__$1;
(statearr_33688_33743[(2)] = false);

(statearr_33688_33743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (3))){
var state_33655__$1 = state_33655;
var statearr_33689_33744 = state_33655__$1;
(statearr_33689_33744[(2)] = false);

(statearr_33689_33744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (12))){
var inst_33653 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33655__$1,inst_33653);
} else {
if((state_val_33656 === (2))){
var inst_33559 = (state_33655[(8)]);
var inst_33564 = inst_33559.cljs$lang$protocol_mask$partition0$;
var inst_33565 = (inst_33564 & (64));
var inst_33566 = inst_33559.cljs$core$ISeq$;
var inst_33567 = (inst_33565) || (inst_33566);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33567)){
var statearr_33690_33745 = state_33655__$1;
(statearr_33690_33745[(1)] = (5));

} else {
var statearr_33691_33746 = state_33655__$1;
(statearr_33691_33746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (23))){
var inst_33614 = (state_33655[(14)]);
var inst_33620 = (inst_33614 == null);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33620)){
var statearr_33692_33747 = state_33655__$1;
(statearr_33692_33747[(1)] = (26));

} else {
var statearr_33693_33748 = state_33655__$1;
(statearr_33693_33748[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (35))){
var inst_33640 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33640)){
var statearr_33694_33749 = state_33655__$1;
(statearr_33694_33749[(1)] = (36));

} else {
var statearr_33695_33750 = state_33655__$1;
(statearr_33695_33750[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (19))){
var inst_33583 = (state_33655[(7)]);
var inst_33602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33583);
var state_33655__$1 = state_33655;
var statearr_33696_33751 = state_33655__$1;
(statearr_33696_33751[(2)] = inst_33602);

(statearr_33696_33751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (11))){
var inst_33583 = (state_33655[(7)]);
var inst_33587 = (inst_33583 == null);
var inst_33588 = cljs.core.not.call(null,inst_33587);
var state_33655__$1 = state_33655;
if(inst_33588){
var statearr_33697_33752 = state_33655__$1;
(statearr_33697_33752[(1)] = (13));

} else {
var statearr_33698_33753 = state_33655__$1;
(statearr_33698_33753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (9))){
var inst_33559 = (state_33655[(8)]);
var state_33655__$1 = state_33655;
var statearr_33699_33754 = state_33655__$1;
(statearr_33699_33754[(2)] = inst_33559);

(statearr_33699_33754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (5))){
var state_33655__$1 = state_33655;
var statearr_33700_33755 = state_33655__$1;
(statearr_33700_33755[(2)] = true);

(statearr_33700_33755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (14))){
var state_33655__$1 = state_33655;
var statearr_33701_33756 = state_33655__$1;
(statearr_33701_33756[(2)] = false);

(statearr_33701_33756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (26))){
var inst_33615 = (state_33655[(9)]);
var inst_33622 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33615);
var state_33655__$1 = state_33655;
var statearr_33702_33757 = state_33655__$1;
(statearr_33702_33757[(2)] = inst_33622);

(statearr_33702_33757[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (16))){
var state_33655__$1 = state_33655;
var statearr_33703_33758 = state_33655__$1;
(statearr_33703_33758[(2)] = true);

(statearr_33703_33758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (38))){
var inst_33645 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33704_33759 = state_33655__$1;
(statearr_33704_33759[(2)] = inst_33645);

(statearr_33704_33759[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (30))){
var inst_33615 = (state_33655[(9)]);
var inst_33606 = (state_33655[(11)]);
var inst_33607 = (state_33655[(13)]);
var inst_33632 = cljs.core.empty_QMARK_.call(null,inst_33606);
var inst_33633 = inst_33607.call(null,inst_33615);
var inst_33634 = cljs.core.not.call(null,inst_33633);
var inst_33635 = (inst_33632) && (inst_33634);
var state_33655__$1 = state_33655;
var statearr_33705_33760 = state_33655__$1;
(statearr_33705_33760[(2)] = inst_33635);

(statearr_33705_33760[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (10))){
var inst_33559 = (state_33655[(8)]);
var inst_33579 = (state_33655[(2)]);
var inst_33580 = cljs.core.get.call(null,inst_33579,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33581 = cljs.core.get.call(null,inst_33579,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33582 = cljs.core.get.call(null,inst_33579,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33583 = inst_33559;
var state_33655__$1 = (function (){var statearr_33706 = state_33655;
(statearr_33706[(7)] = inst_33583);

(statearr_33706[(16)] = inst_33582);

(statearr_33706[(17)] = inst_33581);

(statearr_33706[(18)] = inst_33580);

return statearr_33706;
})();
var statearr_33707_33761 = state_33655__$1;
(statearr_33707_33761[(2)] = null);

(statearr_33707_33761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (18))){
var inst_33597 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33708_33762 = state_33655__$1;
(statearr_33708_33762[(2)] = inst_33597);

(statearr_33708_33762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (37))){
var state_33655__$1 = state_33655;
var statearr_33709_33763 = state_33655__$1;
(statearr_33709_33763[(2)] = null);

(statearr_33709_33763[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (8))){
var inst_33559 = (state_33655[(8)]);
var inst_33576 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33559);
var state_33655__$1 = state_33655;
var statearr_33710_33764 = state_33655__$1;
(statearr_33710_33764[(2)] = inst_33576);

(statearr_33710_33764[(1)] = (10));


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
});})(c__31971__auto___33718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31857__auto__,c__31971__auto___33718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31858__auto__ = null;
var cljs$core$async$mix_$_state_machine__31858__auto____0 = (function (){
var statearr_33714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33714[(0)] = cljs$core$async$mix_$_state_machine__31858__auto__);

(statearr_33714[(1)] = (1));

return statearr_33714;
});
var cljs$core$async$mix_$_state_machine__31858__auto____1 = (function (state_33655){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_33655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e33715){if((e33715 instanceof Object)){
var ex__31861__auto__ = e33715;
var statearr_33716_33765 = state_33655;
(statearr_33716_33765[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33766 = state_33655;
state_33655 = G__33766;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31858__auto__ = function(state_33655){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31858__auto____1.call(this,state_33655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31858__auto____0;
cljs$core$async$mix_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31858__auto____1;
return cljs$core$async$mix_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___33718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31973__auto__ = (function (){var statearr_33717 = f__31972__auto__.call(null);
(statearr_33717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___33718);

return statearr_33717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___33718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args33767 = [];
var len__22773__auto___33770 = arguments.length;
var i__22774__auto___33771 = (0);
while(true){
if((i__22774__auto___33771 < len__22773__auto___33770)){
args33767.push((arguments[i__22774__auto___33771]));

var G__33772 = (i__22774__auto___33771 + (1));
i__22774__auto___33771 = G__33772;
continue;
} else {
}
break;
}

var G__33769 = args33767.length;
switch (G__33769) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33767.length)].join('')));

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
var args33775 = [];
var len__22773__auto___33900 = arguments.length;
var i__22774__auto___33901 = (0);
while(true){
if((i__22774__auto___33901 < len__22773__auto___33900)){
args33775.push((arguments[i__22774__auto___33901]));

var G__33902 = (i__22774__auto___33901 + (1));
i__22774__auto___33901 = G__33902;
continue;
} else {
}
break;
}

var G__33777 = args33775.length;
switch (G__33777) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33775.length)].join('')));

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
return (function (p1__33774_SHARP_){
if(cljs.core.truth_(p1__33774_SHARP_.call(null,topic))){
return p1__33774_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33774_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21590__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33778 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33779){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33779 = meta33779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33780,meta33779__$1){
var self__ = this;
var _33780__$1 = this;
return (new cljs.core.async.t_cljs$core$async33778(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33779__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33780){
var self__ = this;
var _33780__$1 = this;
return self__.meta33779;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33778.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33779","meta33779",1666470495,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33778";

cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async33778");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33778 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33778(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33779){
return (new cljs.core.async.t_cljs$core$async33778(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33779));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33778(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31971__auto___33904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___33904,mults,ensure_mult,p){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___33904,mults,ensure_mult,p){
return (function (state_33852){
var state_val_33853 = (state_33852[(1)]);
if((state_val_33853 === (7))){
var inst_33848 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
var statearr_33854_33905 = state_33852__$1;
(statearr_33854_33905[(2)] = inst_33848);

(statearr_33854_33905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (20))){
var state_33852__$1 = state_33852;
var statearr_33855_33906 = state_33852__$1;
(statearr_33855_33906[(2)] = null);

(statearr_33855_33906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (1))){
var state_33852__$1 = state_33852;
var statearr_33856_33907 = state_33852__$1;
(statearr_33856_33907[(2)] = null);

(statearr_33856_33907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (24))){
var inst_33831 = (state_33852[(7)]);
var inst_33840 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33831);
var state_33852__$1 = state_33852;
var statearr_33857_33908 = state_33852__$1;
(statearr_33857_33908[(2)] = inst_33840);

(statearr_33857_33908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (4))){
var inst_33783 = (state_33852[(8)]);
var inst_33783__$1 = (state_33852[(2)]);
var inst_33784 = (inst_33783__$1 == null);
var state_33852__$1 = (function (){var statearr_33858 = state_33852;
(statearr_33858[(8)] = inst_33783__$1);

return statearr_33858;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33859_33909 = state_33852__$1;
(statearr_33859_33909[(1)] = (5));

} else {
var statearr_33860_33910 = state_33852__$1;
(statearr_33860_33910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (15))){
var inst_33825 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
var statearr_33861_33911 = state_33852__$1;
(statearr_33861_33911[(2)] = inst_33825);

(statearr_33861_33911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (21))){
var inst_33845 = (state_33852[(2)]);
var state_33852__$1 = (function (){var statearr_33862 = state_33852;
(statearr_33862[(9)] = inst_33845);

return statearr_33862;
})();
var statearr_33863_33912 = state_33852__$1;
(statearr_33863_33912[(2)] = null);

(statearr_33863_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (13))){
var inst_33807 = (state_33852[(10)]);
var inst_33809 = cljs.core.chunked_seq_QMARK_.call(null,inst_33807);
var state_33852__$1 = state_33852;
if(inst_33809){
var statearr_33864_33913 = state_33852__$1;
(statearr_33864_33913[(1)] = (16));

} else {
var statearr_33865_33914 = state_33852__$1;
(statearr_33865_33914[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (22))){
var inst_33837 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
if(cljs.core.truth_(inst_33837)){
var statearr_33866_33915 = state_33852__$1;
(statearr_33866_33915[(1)] = (23));

} else {
var statearr_33867_33916 = state_33852__$1;
(statearr_33867_33916[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (6))){
var inst_33783 = (state_33852[(8)]);
var inst_33831 = (state_33852[(7)]);
var inst_33833 = (state_33852[(11)]);
var inst_33831__$1 = topic_fn.call(null,inst_33783);
var inst_33832 = cljs.core.deref.call(null,mults);
var inst_33833__$1 = cljs.core.get.call(null,inst_33832,inst_33831__$1);
var state_33852__$1 = (function (){var statearr_33868 = state_33852;
(statearr_33868[(7)] = inst_33831__$1);

(statearr_33868[(11)] = inst_33833__$1);

return statearr_33868;
})();
if(cljs.core.truth_(inst_33833__$1)){
var statearr_33869_33917 = state_33852__$1;
(statearr_33869_33917[(1)] = (19));

} else {
var statearr_33870_33918 = state_33852__$1;
(statearr_33870_33918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (25))){
var inst_33842 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
var statearr_33871_33919 = state_33852__$1;
(statearr_33871_33919[(2)] = inst_33842);

(statearr_33871_33919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (17))){
var inst_33807 = (state_33852[(10)]);
var inst_33816 = cljs.core.first.call(null,inst_33807);
var inst_33817 = cljs.core.async.muxch_STAR_.call(null,inst_33816);
var inst_33818 = cljs.core.async.close_BANG_.call(null,inst_33817);
var inst_33819 = cljs.core.next.call(null,inst_33807);
var inst_33793 = inst_33819;
var inst_33794 = null;
var inst_33795 = (0);
var inst_33796 = (0);
var state_33852__$1 = (function (){var statearr_33872 = state_33852;
(statearr_33872[(12)] = inst_33818);

(statearr_33872[(13)] = inst_33796);

(statearr_33872[(14)] = inst_33793);

(statearr_33872[(15)] = inst_33794);

(statearr_33872[(16)] = inst_33795);

return statearr_33872;
})();
var statearr_33873_33920 = state_33852__$1;
(statearr_33873_33920[(2)] = null);

(statearr_33873_33920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (3))){
var inst_33850 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33852__$1,inst_33850);
} else {
if((state_val_33853 === (12))){
var inst_33827 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
var statearr_33874_33921 = state_33852__$1;
(statearr_33874_33921[(2)] = inst_33827);

(statearr_33874_33921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (2))){
var state_33852__$1 = state_33852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33852__$1,(4),ch);
} else {
if((state_val_33853 === (23))){
var state_33852__$1 = state_33852;
var statearr_33875_33922 = state_33852__$1;
(statearr_33875_33922[(2)] = null);

(statearr_33875_33922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (19))){
var inst_33783 = (state_33852[(8)]);
var inst_33833 = (state_33852[(11)]);
var inst_33835 = cljs.core.async.muxch_STAR_.call(null,inst_33833);
var state_33852__$1 = state_33852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33852__$1,(22),inst_33835,inst_33783);
} else {
if((state_val_33853 === (11))){
var inst_33807 = (state_33852[(10)]);
var inst_33793 = (state_33852[(14)]);
var inst_33807__$1 = cljs.core.seq.call(null,inst_33793);
var state_33852__$1 = (function (){var statearr_33876 = state_33852;
(statearr_33876[(10)] = inst_33807__$1);

return statearr_33876;
})();
if(inst_33807__$1){
var statearr_33877_33923 = state_33852__$1;
(statearr_33877_33923[(1)] = (13));

} else {
var statearr_33878_33924 = state_33852__$1;
(statearr_33878_33924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (9))){
var inst_33829 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
var statearr_33879_33925 = state_33852__$1;
(statearr_33879_33925[(2)] = inst_33829);

(statearr_33879_33925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (5))){
var inst_33790 = cljs.core.deref.call(null,mults);
var inst_33791 = cljs.core.vals.call(null,inst_33790);
var inst_33792 = cljs.core.seq.call(null,inst_33791);
var inst_33793 = inst_33792;
var inst_33794 = null;
var inst_33795 = (0);
var inst_33796 = (0);
var state_33852__$1 = (function (){var statearr_33880 = state_33852;
(statearr_33880[(13)] = inst_33796);

(statearr_33880[(14)] = inst_33793);

(statearr_33880[(15)] = inst_33794);

(statearr_33880[(16)] = inst_33795);

return statearr_33880;
})();
var statearr_33881_33926 = state_33852__$1;
(statearr_33881_33926[(2)] = null);

(statearr_33881_33926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (14))){
var state_33852__$1 = state_33852;
var statearr_33885_33927 = state_33852__$1;
(statearr_33885_33927[(2)] = null);

(statearr_33885_33927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (16))){
var inst_33807 = (state_33852[(10)]);
var inst_33811 = cljs.core.chunk_first.call(null,inst_33807);
var inst_33812 = cljs.core.chunk_rest.call(null,inst_33807);
var inst_33813 = cljs.core.count.call(null,inst_33811);
var inst_33793 = inst_33812;
var inst_33794 = inst_33811;
var inst_33795 = inst_33813;
var inst_33796 = (0);
var state_33852__$1 = (function (){var statearr_33886 = state_33852;
(statearr_33886[(13)] = inst_33796);

(statearr_33886[(14)] = inst_33793);

(statearr_33886[(15)] = inst_33794);

(statearr_33886[(16)] = inst_33795);

return statearr_33886;
})();
var statearr_33887_33928 = state_33852__$1;
(statearr_33887_33928[(2)] = null);

(statearr_33887_33928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (10))){
var inst_33796 = (state_33852[(13)]);
var inst_33793 = (state_33852[(14)]);
var inst_33794 = (state_33852[(15)]);
var inst_33795 = (state_33852[(16)]);
var inst_33801 = cljs.core._nth.call(null,inst_33794,inst_33796);
var inst_33802 = cljs.core.async.muxch_STAR_.call(null,inst_33801);
var inst_33803 = cljs.core.async.close_BANG_.call(null,inst_33802);
var inst_33804 = (inst_33796 + (1));
var tmp33882 = inst_33793;
var tmp33883 = inst_33794;
var tmp33884 = inst_33795;
var inst_33793__$1 = tmp33882;
var inst_33794__$1 = tmp33883;
var inst_33795__$1 = tmp33884;
var inst_33796__$1 = inst_33804;
var state_33852__$1 = (function (){var statearr_33888 = state_33852;
(statearr_33888[(13)] = inst_33796__$1);

(statearr_33888[(14)] = inst_33793__$1);

(statearr_33888[(17)] = inst_33803);

(statearr_33888[(15)] = inst_33794__$1);

(statearr_33888[(16)] = inst_33795__$1);

return statearr_33888;
})();
var statearr_33889_33929 = state_33852__$1;
(statearr_33889_33929[(2)] = null);

(statearr_33889_33929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (18))){
var inst_33822 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
var statearr_33890_33930 = state_33852__$1;
(statearr_33890_33930[(2)] = inst_33822);

(statearr_33890_33930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (8))){
var inst_33796 = (state_33852[(13)]);
var inst_33795 = (state_33852[(16)]);
var inst_33798 = (inst_33796 < inst_33795);
var inst_33799 = inst_33798;
var state_33852__$1 = state_33852;
if(cljs.core.truth_(inst_33799)){
var statearr_33891_33931 = state_33852__$1;
(statearr_33891_33931[(1)] = (10));

} else {
var statearr_33892_33932 = state_33852__$1;
(statearr_33892_33932[(1)] = (11));

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
});})(c__31971__auto___33904,mults,ensure_mult,p))
;
return ((function (switch__31857__auto__,c__31971__auto___33904,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_33896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33896[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_33896[(1)] = (1));

return statearr_33896;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_33852){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_33852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e33897){if((e33897 instanceof Object)){
var ex__31861__auto__ = e33897;
var statearr_33898_33933 = state_33852;
(statearr_33898_33933[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33934 = state_33852;
state_33852 = G__33934;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_33852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_33852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___33904,mults,ensure_mult,p))
})();
var state__31973__auto__ = (function (){var statearr_33899 = f__31972__auto__.call(null);
(statearr_33899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___33904);

return statearr_33899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___33904,mults,ensure_mult,p))
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
var args33935 = [];
var len__22773__auto___33938 = arguments.length;
var i__22774__auto___33939 = (0);
while(true){
if((i__22774__auto___33939 < len__22773__auto___33938)){
args33935.push((arguments[i__22774__auto___33939]));

var G__33940 = (i__22774__auto___33939 + (1));
i__22774__auto___33939 = G__33940;
continue;
} else {
}
break;
}

var G__33937 = args33935.length;
switch (G__33937) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33935.length)].join('')));

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
var args33942 = [];
var len__22773__auto___33945 = arguments.length;
var i__22774__auto___33946 = (0);
while(true){
if((i__22774__auto___33946 < len__22773__auto___33945)){
args33942.push((arguments[i__22774__auto___33946]));

var G__33947 = (i__22774__auto___33946 + (1));
i__22774__auto___33946 = G__33947;
continue;
} else {
}
break;
}

var G__33944 = args33942.length;
switch (G__33944) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33942.length)].join('')));

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
var args33949 = [];
var len__22773__auto___34020 = arguments.length;
var i__22774__auto___34021 = (0);
while(true){
if((i__22774__auto___34021 < len__22773__auto___34020)){
args33949.push((arguments[i__22774__auto___34021]));

var G__34022 = (i__22774__auto___34021 + (1));
i__22774__auto___34021 = G__34022;
continue;
} else {
}
break;
}

var G__33951 = args33949.length;
switch (G__33951) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33949.length)].join('')));

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
var c__31971__auto___34024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___34024,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___34024,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33990){
var state_val_33991 = (state_33990[(1)]);
if((state_val_33991 === (7))){
var state_33990__$1 = state_33990;
var statearr_33992_34025 = state_33990__$1;
(statearr_33992_34025[(2)] = null);

(statearr_33992_34025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (1))){
var state_33990__$1 = state_33990;
var statearr_33993_34026 = state_33990__$1;
(statearr_33993_34026[(2)] = null);

(statearr_33993_34026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (4))){
var inst_33954 = (state_33990[(7)]);
var inst_33956 = (inst_33954 < cnt);
var state_33990__$1 = state_33990;
if(cljs.core.truth_(inst_33956)){
var statearr_33994_34027 = state_33990__$1;
(statearr_33994_34027[(1)] = (6));

} else {
var statearr_33995_34028 = state_33990__$1;
(statearr_33995_34028[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (15))){
var inst_33986 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_33996_34029 = state_33990__$1;
(statearr_33996_34029[(2)] = inst_33986);

(statearr_33996_34029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (13))){
var inst_33979 = cljs.core.async.close_BANG_.call(null,out);
var state_33990__$1 = state_33990;
var statearr_33997_34030 = state_33990__$1;
(statearr_33997_34030[(2)] = inst_33979);

(statearr_33997_34030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (6))){
var state_33990__$1 = state_33990;
var statearr_33998_34031 = state_33990__$1;
(statearr_33998_34031[(2)] = null);

(statearr_33998_34031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (3))){
var inst_33988 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33990__$1,inst_33988);
} else {
if((state_val_33991 === (12))){
var inst_33976 = (state_33990[(8)]);
var inst_33976__$1 = (state_33990[(2)]);
var inst_33977 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33976__$1);
var state_33990__$1 = (function (){var statearr_33999 = state_33990;
(statearr_33999[(8)] = inst_33976__$1);

return statearr_33999;
})();
if(cljs.core.truth_(inst_33977)){
var statearr_34000_34032 = state_33990__$1;
(statearr_34000_34032[(1)] = (13));

} else {
var statearr_34001_34033 = state_33990__$1;
(statearr_34001_34033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (2))){
var inst_33953 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33954 = (0);
var state_33990__$1 = (function (){var statearr_34002 = state_33990;
(statearr_34002[(7)] = inst_33954);

(statearr_34002[(9)] = inst_33953);

return statearr_34002;
})();
var statearr_34003_34034 = state_33990__$1;
(statearr_34003_34034[(2)] = null);

(statearr_34003_34034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (11))){
var inst_33954 = (state_33990[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33990,(10),Object,null,(9));
var inst_33963 = chs__$1.call(null,inst_33954);
var inst_33964 = done.call(null,inst_33954);
var inst_33965 = cljs.core.async.take_BANG_.call(null,inst_33963,inst_33964);
var state_33990__$1 = state_33990;
var statearr_34004_34035 = state_33990__$1;
(statearr_34004_34035[(2)] = inst_33965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33990__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (9))){
var inst_33954 = (state_33990[(7)]);
var inst_33967 = (state_33990[(2)]);
var inst_33968 = (inst_33954 + (1));
var inst_33954__$1 = inst_33968;
var state_33990__$1 = (function (){var statearr_34005 = state_33990;
(statearr_34005[(7)] = inst_33954__$1);

(statearr_34005[(10)] = inst_33967);

return statearr_34005;
})();
var statearr_34006_34036 = state_33990__$1;
(statearr_34006_34036[(2)] = null);

(statearr_34006_34036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (5))){
var inst_33974 = (state_33990[(2)]);
var state_33990__$1 = (function (){var statearr_34007 = state_33990;
(statearr_34007[(11)] = inst_33974);

return statearr_34007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33990__$1,(12),dchan);
} else {
if((state_val_33991 === (14))){
var inst_33976 = (state_33990[(8)]);
var inst_33981 = cljs.core.apply.call(null,f,inst_33976);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33990__$1,(16),out,inst_33981);
} else {
if((state_val_33991 === (16))){
var inst_33983 = (state_33990[(2)]);
var state_33990__$1 = (function (){var statearr_34008 = state_33990;
(statearr_34008[(12)] = inst_33983);

return statearr_34008;
})();
var statearr_34009_34037 = state_33990__$1;
(statearr_34009_34037[(2)] = null);

(statearr_34009_34037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (10))){
var inst_33958 = (state_33990[(2)]);
var inst_33959 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33990__$1 = (function (){var statearr_34010 = state_33990;
(statearr_34010[(13)] = inst_33958);

return statearr_34010;
})();
var statearr_34011_34038 = state_33990__$1;
(statearr_34011_34038[(2)] = inst_33959);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33990__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (8))){
var inst_33972 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34012_34039 = state_33990__$1;
(statearr_34012_34039[(2)] = inst_33972);

(statearr_34012_34039[(1)] = (5));


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
});})(c__31971__auto___34024,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31857__auto__,c__31971__auto___34024,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_34016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34016[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_34016[(1)] = (1));

return statearr_34016;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_33990){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_33990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34017){if((e34017 instanceof Object)){
var ex__31861__auto__ = e34017;
var statearr_34018_34040 = state_33990;
(statearr_34018_34040[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34041 = state_33990;
state_33990 = G__34041;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_33990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_33990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___34024,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31973__auto__ = (function (){var statearr_34019 = f__31972__auto__.call(null);
(statearr_34019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___34024);

return statearr_34019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___34024,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34043 = [];
var len__22773__auto___34101 = arguments.length;
var i__22774__auto___34102 = (0);
while(true){
if((i__22774__auto___34102 < len__22773__auto___34101)){
args34043.push((arguments[i__22774__auto___34102]));

var G__34103 = (i__22774__auto___34102 + (1));
i__22774__auto___34102 = G__34103;
continue;
} else {
}
break;
}

var G__34045 = args34043.length;
switch (G__34045) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34043.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31971__auto___34105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___34105,out){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___34105,out){
return (function (state_34077){
var state_val_34078 = (state_34077[(1)]);
if((state_val_34078 === (7))){
var inst_34057 = (state_34077[(7)]);
var inst_34056 = (state_34077[(8)]);
var inst_34056__$1 = (state_34077[(2)]);
var inst_34057__$1 = cljs.core.nth.call(null,inst_34056__$1,(0),null);
var inst_34058 = cljs.core.nth.call(null,inst_34056__$1,(1),null);
var inst_34059 = (inst_34057__$1 == null);
var state_34077__$1 = (function (){var statearr_34079 = state_34077;
(statearr_34079[(7)] = inst_34057__$1);

(statearr_34079[(8)] = inst_34056__$1);

(statearr_34079[(9)] = inst_34058);

return statearr_34079;
})();
if(cljs.core.truth_(inst_34059)){
var statearr_34080_34106 = state_34077__$1;
(statearr_34080_34106[(1)] = (8));

} else {
var statearr_34081_34107 = state_34077__$1;
(statearr_34081_34107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34078 === (1))){
var inst_34046 = cljs.core.vec.call(null,chs);
var inst_34047 = inst_34046;
var state_34077__$1 = (function (){var statearr_34082 = state_34077;
(statearr_34082[(10)] = inst_34047);

return statearr_34082;
})();
var statearr_34083_34108 = state_34077__$1;
(statearr_34083_34108[(2)] = null);

(statearr_34083_34108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34078 === (4))){
var inst_34047 = (state_34077[(10)]);
var state_34077__$1 = state_34077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34077__$1,(7),inst_34047);
} else {
if((state_val_34078 === (6))){
var inst_34073 = (state_34077[(2)]);
var state_34077__$1 = state_34077;
var statearr_34084_34109 = state_34077__$1;
(statearr_34084_34109[(2)] = inst_34073);

(statearr_34084_34109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34078 === (3))){
var inst_34075 = (state_34077[(2)]);
var state_34077__$1 = state_34077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34077__$1,inst_34075);
} else {
if((state_val_34078 === (2))){
var inst_34047 = (state_34077[(10)]);
var inst_34049 = cljs.core.count.call(null,inst_34047);
var inst_34050 = (inst_34049 > (0));
var state_34077__$1 = state_34077;
if(cljs.core.truth_(inst_34050)){
var statearr_34086_34110 = state_34077__$1;
(statearr_34086_34110[(1)] = (4));

} else {
var statearr_34087_34111 = state_34077__$1;
(statearr_34087_34111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34078 === (11))){
var inst_34047 = (state_34077[(10)]);
var inst_34066 = (state_34077[(2)]);
var tmp34085 = inst_34047;
var inst_34047__$1 = tmp34085;
var state_34077__$1 = (function (){var statearr_34088 = state_34077;
(statearr_34088[(10)] = inst_34047__$1);

(statearr_34088[(11)] = inst_34066);

return statearr_34088;
})();
var statearr_34089_34112 = state_34077__$1;
(statearr_34089_34112[(2)] = null);

(statearr_34089_34112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34078 === (9))){
var inst_34057 = (state_34077[(7)]);
var state_34077__$1 = state_34077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34077__$1,(11),out,inst_34057);
} else {
if((state_val_34078 === (5))){
var inst_34071 = cljs.core.async.close_BANG_.call(null,out);
var state_34077__$1 = state_34077;
var statearr_34090_34113 = state_34077__$1;
(statearr_34090_34113[(2)] = inst_34071);

(statearr_34090_34113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34078 === (10))){
var inst_34069 = (state_34077[(2)]);
var state_34077__$1 = state_34077;
var statearr_34091_34114 = state_34077__$1;
(statearr_34091_34114[(2)] = inst_34069);

(statearr_34091_34114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34078 === (8))){
var inst_34047 = (state_34077[(10)]);
var inst_34057 = (state_34077[(7)]);
var inst_34056 = (state_34077[(8)]);
var inst_34058 = (state_34077[(9)]);
var inst_34061 = (function (){var cs = inst_34047;
var vec__34052 = inst_34056;
var v = inst_34057;
var c = inst_34058;
return ((function (cs,vec__34052,v,c,inst_34047,inst_34057,inst_34056,inst_34058,state_val_34078,c__31971__auto___34105,out){
return (function (p1__34042_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34042_SHARP_);
});
;})(cs,vec__34052,v,c,inst_34047,inst_34057,inst_34056,inst_34058,state_val_34078,c__31971__auto___34105,out))
})();
var inst_34062 = cljs.core.filterv.call(null,inst_34061,inst_34047);
var inst_34047__$1 = inst_34062;
var state_34077__$1 = (function (){var statearr_34092 = state_34077;
(statearr_34092[(10)] = inst_34047__$1);

return statearr_34092;
})();
var statearr_34093_34115 = state_34077__$1;
(statearr_34093_34115[(2)] = null);

(statearr_34093_34115[(1)] = (2));


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
});})(c__31971__auto___34105,out))
;
return ((function (switch__31857__auto__,c__31971__auto___34105,out){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_34097 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34097[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_34097[(1)] = (1));

return statearr_34097;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_34077){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_34077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34098){if((e34098 instanceof Object)){
var ex__31861__auto__ = e34098;
var statearr_34099_34116 = state_34077;
(statearr_34099_34116[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34117 = state_34077;
state_34077 = G__34117;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_34077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_34077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___34105,out))
})();
var state__31973__auto__ = (function (){var statearr_34100 = f__31972__auto__.call(null);
(statearr_34100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___34105);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___34105,out))
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
var args34118 = [];
var len__22773__auto___34167 = arguments.length;
var i__22774__auto___34168 = (0);
while(true){
if((i__22774__auto___34168 < len__22773__auto___34167)){
args34118.push((arguments[i__22774__auto___34168]));

var G__34169 = (i__22774__auto___34168 + (1));
i__22774__auto___34168 = G__34169;
continue;
} else {
}
break;
}

var G__34120 = args34118.length;
switch (G__34120) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34118.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31971__auto___34171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___34171,out){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___34171,out){
return (function (state_34144){
var state_val_34145 = (state_34144[(1)]);
if((state_val_34145 === (7))){
var inst_34126 = (state_34144[(7)]);
var inst_34126__$1 = (state_34144[(2)]);
var inst_34127 = (inst_34126__$1 == null);
var inst_34128 = cljs.core.not.call(null,inst_34127);
var state_34144__$1 = (function (){var statearr_34146 = state_34144;
(statearr_34146[(7)] = inst_34126__$1);

return statearr_34146;
})();
if(inst_34128){
var statearr_34147_34172 = state_34144__$1;
(statearr_34147_34172[(1)] = (8));

} else {
var statearr_34148_34173 = state_34144__$1;
(statearr_34148_34173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (1))){
var inst_34121 = (0);
var state_34144__$1 = (function (){var statearr_34149 = state_34144;
(statearr_34149[(8)] = inst_34121);

return statearr_34149;
})();
var statearr_34150_34174 = state_34144__$1;
(statearr_34150_34174[(2)] = null);

(statearr_34150_34174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (4))){
var state_34144__$1 = state_34144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34144__$1,(7),ch);
} else {
if((state_val_34145 === (6))){
var inst_34139 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34151_34175 = state_34144__$1;
(statearr_34151_34175[(2)] = inst_34139);

(statearr_34151_34175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (3))){
var inst_34141 = (state_34144[(2)]);
var inst_34142 = cljs.core.async.close_BANG_.call(null,out);
var state_34144__$1 = (function (){var statearr_34152 = state_34144;
(statearr_34152[(9)] = inst_34141);

return statearr_34152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34144__$1,inst_34142);
} else {
if((state_val_34145 === (2))){
var inst_34121 = (state_34144[(8)]);
var inst_34123 = (inst_34121 < n);
var state_34144__$1 = state_34144;
if(cljs.core.truth_(inst_34123)){
var statearr_34153_34176 = state_34144__$1;
(statearr_34153_34176[(1)] = (4));

} else {
var statearr_34154_34177 = state_34144__$1;
(statearr_34154_34177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (11))){
var inst_34121 = (state_34144[(8)]);
var inst_34131 = (state_34144[(2)]);
var inst_34132 = (inst_34121 + (1));
var inst_34121__$1 = inst_34132;
var state_34144__$1 = (function (){var statearr_34155 = state_34144;
(statearr_34155[(8)] = inst_34121__$1);

(statearr_34155[(10)] = inst_34131);

return statearr_34155;
})();
var statearr_34156_34178 = state_34144__$1;
(statearr_34156_34178[(2)] = null);

(statearr_34156_34178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (9))){
var state_34144__$1 = state_34144;
var statearr_34157_34179 = state_34144__$1;
(statearr_34157_34179[(2)] = null);

(statearr_34157_34179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (5))){
var state_34144__$1 = state_34144;
var statearr_34158_34180 = state_34144__$1;
(statearr_34158_34180[(2)] = null);

(statearr_34158_34180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (10))){
var inst_34136 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34159_34181 = state_34144__$1;
(statearr_34159_34181[(2)] = inst_34136);

(statearr_34159_34181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (8))){
var inst_34126 = (state_34144[(7)]);
var state_34144__$1 = state_34144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34144__$1,(11),out,inst_34126);
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
});})(c__31971__auto___34171,out))
;
return ((function (switch__31857__auto__,c__31971__auto___34171,out){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_34163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34163[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_34163[(1)] = (1));

return statearr_34163;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_34144){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_34144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34164){if((e34164 instanceof Object)){
var ex__31861__auto__ = e34164;
var statearr_34165_34182 = state_34144;
(statearr_34165_34182[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34183 = state_34144;
state_34144 = G__34183;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_34144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_34144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___34171,out))
})();
var state__31973__auto__ = (function (){var statearr_34166 = f__31972__auto__.call(null);
(statearr_34166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___34171);

return statearr_34166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___34171,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34191 = (function (map_LT_,f,ch,meta34192){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34192 = meta34192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34193,meta34192__$1){
var self__ = this;
var _34193__$1 = this;
return (new cljs.core.async.t_cljs$core$async34191(self__.map_LT_,self__.f,self__.ch,meta34192__$1));
});

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34193){
var self__ = this;
var _34193__$1 = this;
return self__.meta34192;
});

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34194 = (function (map_LT_,f,ch,meta34192,_,fn1,meta34195){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34192 = meta34192;
this._ = _;
this.fn1 = fn1;
this.meta34195 = meta34195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34196,meta34195__$1){
var self__ = this;
var _34196__$1 = this;
return (new cljs.core.async.t_cljs$core$async34194(self__.map_LT_,self__.f,self__.ch,self__.meta34192,self__._,self__.fn1,meta34195__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34196){
var self__ = this;
var _34196__$1 = this;
return self__.meta34195;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34184_SHARP_){
return f1.call(null,(((p1__34184_SHARP_ == null))?null:self__.f.call(null,p1__34184_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34194.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34191","cljs.core.async/t_cljs$core$async34191",1235485391,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34195","meta34195",1859924080,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34194";

cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34194");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34194 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34194(map_LT___$1,f__$1,ch__$1,meta34192__$1,___$2,fn1__$1,meta34195){
return (new cljs.core.async.t_cljs$core$async34194(map_LT___$1,f__$1,ch__$1,meta34192__$1,___$2,fn1__$1,meta34195));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34194(self__.map_LT_,self__.f,self__.ch,self__.meta34192,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null)], null);
});

cljs.core.async.t_cljs$core$async34191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34191";

cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34191");
});

cljs.core.async.__GT_t_cljs$core$async34191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34191(map_LT___$1,f__$1,ch__$1,meta34192){
return (new cljs.core.async.t_cljs$core$async34191(map_LT___$1,f__$1,ch__$1,meta34192));
});

}

return (new cljs.core.async.t_cljs$core$async34191(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34200 = (function (map_GT_,f,ch,meta34201){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34201 = meta34201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34202,meta34201__$1){
var self__ = this;
var _34202__$1 = this;
return (new cljs.core.async.t_cljs$core$async34200(self__.map_GT_,self__.f,self__.ch,meta34201__$1));
});

cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34202){
var self__ = this;
var _34202__$1 = this;
return self__.meta34201;
});

cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34201","meta34201",-985685800,null)], null);
});

cljs.core.async.t_cljs$core$async34200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34200";

cljs.core.async.t_cljs$core$async34200.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34200");
});

cljs.core.async.__GT_t_cljs$core$async34200 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34200(map_GT___$1,f__$1,ch__$1,meta34201){
return (new cljs.core.async.t_cljs$core$async34200(map_GT___$1,f__$1,ch__$1,meta34201));
});

}

return (new cljs.core.async.t_cljs$core$async34200(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34206 = (function (filter_GT_,p,ch,meta34207){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34207 = meta34207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34208,meta34207__$1){
var self__ = this;
var _34208__$1 = this;
return (new cljs.core.async.t_cljs$core$async34206(self__.filter_GT_,self__.p,self__.ch,meta34207__$1));
});

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34208){
var self__ = this;
var _34208__$1 = this;
return self__.meta34207;
});

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34207","meta34207",925678329,null)], null);
});

cljs.core.async.t_cljs$core$async34206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34206";

cljs.core.async.t_cljs$core$async34206.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async34206");
});

cljs.core.async.__GT_t_cljs$core$async34206 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34206(filter_GT___$1,p__$1,ch__$1,meta34207){
return (new cljs.core.async.t_cljs$core$async34206(filter_GT___$1,p__$1,ch__$1,meta34207));
});

}

return (new cljs.core.async.t_cljs$core$async34206(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34209 = [];
var len__22773__auto___34253 = arguments.length;
var i__22774__auto___34254 = (0);
while(true){
if((i__22774__auto___34254 < len__22773__auto___34253)){
args34209.push((arguments[i__22774__auto___34254]));

var G__34255 = (i__22774__auto___34254 + (1));
i__22774__auto___34254 = G__34255;
continue;
} else {
}
break;
}

var G__34211 = args34209.length;
switch (G__34211) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34209.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31971__auto___34257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___34257,out){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___34257,out){
return (function (state_34232){
var state_val_34233 = (state_34232[(1)]);
if((state_val_34233 === (7))){
var inst_34228 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34234_34258 = state_34232__$1;
(statearr_34234_34258[(2)] = inst_34228);

(statearr_34234_34258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (1))){
var state_34232__$1 = state_34232;
var statearr_34235_34259 = state_34232__$1;
(statearr_34235_34259[(2)] = null);

(statearr_34235_34259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (4))){
var inst_34214 = (state_34232[(7)]);
var inst_34214__$1 = (state_34232[(2)]);
var inst_34215 = (inst_34214__$1 == null);
var state_34232__$1 = (function (){var statearr_34236 = state_34232;
(statearr_34236[(7)] = inst_34214__$1);

return statearr_34236;
})();
if(cljs.core.truth_(inst_34215)){
var statearr_34237_34260 = state_34232__$1;
(statearr_34237_34260[(1)] = (5));

} else {
var statearr_34238_34261 = state_34232__$1;
(statearr_34238_34261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (6))){
var inst_34214 = (state_34232[(7)]);
var inst_34219 = p.call(null,inst_34214);
var state_34232__$1 = state_34232;
if(cljs.core.truth_(inst_34219)){
var statearr_34239_34262 = state_34232__$1;
(statearr_34239_34262[(1)] = (8));

} else {
var statearr_34240_34263 = state_34232__$1;
(statearr_34240_34263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (3))){
var inst_34230 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34232__$1,inst_34230);
} else {
if((state_val_34233 === (2))){
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34232__$1,(4),ch);
} else {
if((state_val_34233 === (11))){
var inst_34222 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34241_34264 = state_34232__$1;
(statearr_34241_34264[(2)] = inst_34222);

(statearr_34241_34264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (9))){
var state_34232__$1 = state_34232;
var statearr_34242_34265 = state_34232__$1;
(statearr_34242_34265[(2)] = null);

(statearr_34242_34265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (5))){
var inst_34217 = cljs.core.async.close_BANG_.call(null,out);
var state_34232__$1 = state_34232;
var statearr_34243_34266 = state_34232__$1;
(statearr_34243_34266[(2)] = inst_34217);

(statearr_34243_34266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (10))){
var inst_34225 = (state_34232[(2)]);
var state_34232__$1 = (function (){var statearr_34244 = state_34232;
(statearr_34244[(8)] = inst_34225);

return statearr_34244;
})();
var statearr_34245_34267 = state_34232__$1;
(statearr_34245_34267[(2)] = null);

(statearr_34245_34267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (8))){
var inst_34214 = (state_34232[(7)]);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34232__$1,(11),out,inst_34214);
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
});})(c__31971__auto___34257,out))
;
return ((function (switch__31857__auto__,c__31971__auto___34257,out){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_34249 = [null,null,null,null,null,null,null,null,null];
(statearr_34249[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_34249[(1)] = (1));

return statearr_34249;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_34232){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_34232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34250){if((e34250 instanceof Object)){
var ex__31861__auto__ = e34250;
var statearr_34251_34268 = state_34232;
(statearr_34251_34268[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34269 = state_34232;
state_34232 = G__34269;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_34232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_34232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___34257,out))
})();
var state__31973__auto__ = (function (){var statearr_34252 = f__31972__auto__.call(null);
(statearr_34252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___34257);

return statearr_34252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___34257,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34270 = [];
var len__22773__auto___34273 = arguments.length;
var i__22774__auto___34274 = (0);
while(true){
if((i__22774__auto___34274 < len__22773__auto___34273)){
args34270.push((arguments[i__22774__auto___34274]));

var G__34275 = (i__22774__auto___34274 + (1));
i__22774__auto___34274 = G__34275;
continue;
} else {
}
break;
}

var G__34272 = args34270.length;
switch (G__34272) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34270.length)].join('')));

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
var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__){
return (function (state_34442){
var state_val_34443 = (state_34442[(1)]);
if((state_val_34443 === (7))){
var inst_34438 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34444_34485 = state_34442__$1;
(statearr_34444_34485[(2)] = inst_34438);

(statearr_34444_34485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (20))){
var inst_34408 = (state_34442[(7)]);
var inst_34419 = (state_34442[(2)]);
var inst_34420 = cljs.core.next.call(null,inst_34408);
var inst_34394 = inst_34420;
var inst_34395 = null;
var inst_34396 = (0);
var inst_34397 = (0);
var state_34442__$1 = (function (){var statearr_34445 = state_34442;
(statearr_34445[(8)] = inst_34395);

(statearr_34445[(9)] = inst_34394);

(statearr_34445[(10)] = inst_34396);

(statearr_34445[(11)] = inst_34397);

(statearr_34445[(12)] = inst_34419);

return statearr_34445;
})();
var statearr_34446_34486 = state_34442__$1;
(statearr_34446_34486[(2)] = null);

(statearr_34446_34486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (1))){
var state_34442__$1 = state_34442;
var statearr_34447_34487 = state_34442__$1;
(statearr_34447_34487[(2)] = null);

(statearr_34447_34487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (4))){
var inst_34383 = (state_34442[(13)]);
var inst_34383__$1 = (state_34442[(2)]);
var inst_34384 = (inst_34383__$1 == null);
var state_34442__$1 = (function (){var statearr_34448 = state_34442;
(statearr_34448[(13)] = inst_34383__$1);

return statearr_34448;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34449_34488 = state_34442__$1;
(statearr_34449_34488[(1)] = (5));

} else {
var statearr_34450_34489 = state_34442__$1;
(statearr_34450_34489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (15))){
var state_34442__$1 = state_34442;
var statearr_34454_34490 = state_34442__$1;
(statearr_34454_34490[(2)] = null);

(statearr_34454_34490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (21))){
var state_34442__$1 = state_34442;
var statearr_34455_34491 = state_34442__$1;
(statearr_34455_34491[(2)] = null);

(statearr_34455_34491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (13))){
var inst_34395 = (state_34442[(8)]);
var inst_34394 = (state_34442[(9)]);
var inst_34396 = (state_34442[(10)]);
var inst_34397 = (state_34442[(11)]);
var inst_34404 = (state_34442[(2)]);
var inst_34405 = (inst_34397 + (1));
var tmp34451 = inst_34395;
var tmp34452 = inst_34394;
var tmp34453 = inst_34396;
var inst_34394__$1 = tmp34452;
var inst_34395__$1 = tmp34451;
var inst_34396__$1 = tmp34453;
var inst_34397__$1 = inst_34405;
var state_34442__$1 = (function (){var statearr_34456 = state_34442;
(statearr_34456[(8)] = inst_34395__$1);

(statearr_34456[(9)] = inst_34394__$1);

(statearr_34456[(10)] = inst_34396__$1);

(statearr_34456[(14)] = inst_34404);

(statearr_34456[(11)] = inst_34397__$1);

return statearr_34456;
})();
var statearr_34457_34492 = state_34442__$1;
(statearr_34457_34492[(2)] = null);

(statearr_34457_34492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (22))){
var state_34442__$1 = state_34442;
var statearr_34458_34493 = state_34442__$1;
(statearr_34458_34493[(2)] = null);

(statearr_34458_34493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (6))){
var inst_34383 = (state_34442[(13)]);
var inst_34392 = f.call(null,inst_34383);
var inst_34393 = cljs.core.seq.call(null,inst_34392);
var inst_34394 = inst_34393;
var inst_34395 = null;
var inst_34396 = (0);
var inst_34397 = (0);
var state_34442__$1 = (function (){var statearr_34459 = state_34442;
(statearr_34459[(8)] = inst_34395);

(statearr_34459[(9)] = inst_34394);

(statearr_34459[(10)] = inst_34396);

(statearr_34459[(11)] = inst_34397);

return statearr_34459;
})();
var statearr_34460_34494 = state_34442__$1;
(statearr_34460_34494[(2)] = null);

(statearr_34460_34494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (17))){
var inst_34408 = (state_34442[(7)]);
var inst_34412 = cljs.core.chunk_first.call(null,inst_34408);
var inst_34413 = cljs.core.chunk_rest.call(null,inst_34408);
var inst_34414 = cljs.core.count.call(null,inst_34412);
var inst_34394 = inst_34413;
var inst_34395 = inst_34412;
var inst_34396 = inst_34414;
var inst_34397 = (0);
var state_34442__$1 = (function (){var statearr_34461 = state_34442;
(statearr_34461[(8)] = inst_34395);

(statearr_34461[(9)] = inst_34394);

(statearr_34461[(10)] = inst_34396);

(statearr_34461[(11)] = inst_34397);

return statearr_34461;
})();
var statearr_34462_34495 = state_34442__$1;
(statearr_34462_34495[(2)] = null);

(statearr_34462_34495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (3))){
var inst_34440 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34442__$1,inst_34440);
} else {
if((state_val_34443 === (12))){
var inst_34428 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34463_34496 = state_34442__$1;
(statearr_34463_34496[(2)] = inst_34428);

(statearr_34463_34496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (2))){
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34442__$1,(4),in$);
} else {
if((state_val_34443 === (23))){
var inst_34436 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34464_34497 = state_34442__$1;
(statearr_34464_34497[(2)] = inst_34436);

(statearr_34464_34497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (19))){
var inst_34423 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34465_34498 = state_34442__$1;
(statearr_34465_34498[(2)] = inst_34423);

(statearr_34465_34498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (11))){
var inst_34408 = (state_34442[(7)]);
var inst_34394 = (state_34442[(9)]);
var inst_34408__$1 = cljs.core.seq.call(null,inst_34394);
var state_34442__$1 = (function (){var statearr_34466 = state_34442;
(statearr_34466[(7)] = inst_34408__$1);

return statearr_34466;
})();
if(inst_34408__$1){
var statearr_34467_34499 = state_34442__$1;
(statearr_34467_34499[(1)] = (14));

} else {
var statearr_34468_34500 = state_34442__$1;
(statearr_34468_34500[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (9))){
var inst_34430 = (state_34442[(2)]);
var inst_34431 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34442__$1 = (function (){var statearr_34469 = state_34442;
(statearr_34469[(15)] = inst_34430);

return statearr_34469;
})();
if(cljs.core.truth_(inst_34431)){
var statearr_34470_34501 = state_34442__$1;
(statearr_34470_34501[(1)] = (21));

} else {
var statearr_34471_34502 = state_34442__$1;
(statearr_34471_34502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (5))){
var inst_34386 = cljs.core.async.close_BANG_.call(null,out);
var state_34442__$1 = state_34442;
var statearr_34472_34503 = state_34442__$1;
(statearr_34472_34503[(2)] = inst_34386);

(statearr_34472_34503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (14))){
var inst_34408 = (state_34442[(7)]);
var inst_34410 = cljs.core.chunked_seq_QMARK_.call(null,inst_34408);
var state_34442__$1 = state_34442;
if(inst_34410){
var statearr_34473_34504 = state_34442__$1;
(statearr_34473_34504[(1)] = (17));

} else {
var statearr_34474_34505 = state_34442__$1;
(statearr_34474_34505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (16))){
var inst_34426 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34475_34506 = state_34442__$1;
(statearr_34475_34506[(2)] = inst_34426);

(statearr_34475_34506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (10))){
var inst_34395 = (state_34442[(8)]);
var inst_34397 = (state_34442[(11)]);
var inst_34402 = cljs.core._nth.call(null,inst_34395,inst_34397);
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34442__$1,(13),out,inst_34402);
} else {
if((state_val_34443 === (18))){
var inst_34408 = (state_34442[(7)]);
var inst_34417 = cljs.core.first.call(null,inst_34408);
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34442__$1,(20),out,inst_34417);
} else {
if((state_val_34443 === (8))){
var inst_34396 = (state_34442[(10)]);
var inst_34397 = (state_34442[(11)]);
var inst_34399 = (inst_34397 < inst_34396);
var inst_34400 = inst_34399;
var state_34442__$1 = state_34442;
if(cljs.core.truth_(inst_34400)){
var statearr_34476_34507 = state_34442__$1;
(statearr_34476_34507[(1)] = (10));

} else {
var statearr_34477_34508 = state_34442__$1;
(statearr_34477_34508[(1)] = (11));

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
});})(c__31971__auto__))
;
return ((function (switch__31857__auto__,c__31971__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31858__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31858__auto____0 = (function (){
var statearr_34481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34481[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31858__auto__);

(statearr_34481[(1)] = (1));

return statearr_34481;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31858__auto____1 = (function (state_34442){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_34442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34482){if((e34482 instanceof Object)){
var ex__31861__auto__ = e34482;
var statearr_34483_34509 = state_34442;
(statearr_34483_34509[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34510 = state_34442;
state_34442 = G__34510;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31858__auto__ = function(state_34442){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31858__auto____1.call(this,state_34442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31858__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31858__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__))
})();
var state__31973__auto__ = (function (){var statearr_34484 = f__31972__auto__.call(null);
(statearr_34484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_34484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__))
);

return c__31971__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34511 = [];
var len__22773__auto___34514 = arguments.length;
var i__22774__auto___34515 = (0);
while(true){
if((i__22774__auto___34515 < len__22773__auto___34514)){
args34511.push((arguments[i__22774__auto___34515]));

var G__34516 = (i__22774__auto___34515 + (1));
i__22774__auto___34515 = G__34516;
continue;
} else {
}
break;
}

var G__34513 = args34511.length;
switch (G__34513) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34511.length)].join('')));

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
var args34518 = [];
var len__22773__auto___34521 = arguments.length;
var i__22774__auto___34522 = (0);
while(true){
if((i__22774__auto___34522 < len__22773__auto___34521)){
args34518.push((arguments[i__22774__auto___34522]));

var G__34523 = (i__22774__auto___34522 + (1));
i__22774__auto___34522 = G__34523;
continue;
} else {
}
break;
}

var G__34520 = args34518.length;
switch (G__34520) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34518.length)].join('')));

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
var args34525 = [];
var len__22773__auto___34576 = arguments.length;
var i__22774__auto___34577 = (0);
while(true){
if((i__22774__auto___34577 < len__22773__auto___34576)){
args34525.push((arguments[i__22774__auto___34577]));

var G__34578 = (i__22774__auto___34577 + (1));
i__22774__auto___34577 = G__34578;
continue;
} else {
}
break;
}

var G__34527 = args34525.length;
switch (G__34527) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34525.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31971__auto___34580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___34580,out){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___34580,out){
return (function (state_34551){
var state_val_34552 = (state_34551[(1)]);
if((state_val_34552 === (7))){
var inst_34546 = (state_34551[(2)]);
var state_34551__$1 = state_34551;
var statearr_34553_34581 = state_34551__$1;
(statearr_34553_34581[(2)] = inst_34546);

(statearr_34553_34581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (1))){
var inst_34528 = null;
var state_34551__$1 = (function (){var statearr_34554 = state_34551;
(statearr_34554[(7)] = inst_34528);

return statearr_34554;
})();
var statearr_34555_34582 = state_34551__$1;
(statearr_34555_34582[(2)] = null);

(statearr_34555_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (4))){
var inst_34531 = (state_34551[(8)]);
var inst_34531__$1 = (state_34551[(2)]);
var inst_34532 = (inst_34531__$1 == null);
var inst_34533 = cljs.core.not.call(null,inst_34532);
var state_34551__$1 = (function (){var statearr_34556 = state_34551;
(statearr_34556[(8)] = inst_34531__$1);

return statearr_34556;
})();
if(inst_34533){
var statearr_34557_34583 = state_34551__$1;
(statearr_34557_34583[(1)] = (5));

} else {
var statearr_34558_34584 = state_34551__$1;
(statearr_34558_34584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (6))){
var state_34551__$1 = state_34551;
var statearr_34559_34585 = state_34551__$1;
(statearr_34559_34585[(2)] = null);

(statearr_34559_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (3))){
var inst_34548 = (state_34551[(2)]);
var inst_34549 = cljs.core.async.close_BANG_.call(null,out);
var state_34551__$1 = (function (){var statearr_34560 = state_34551;
(statearr_34560[(9)] = inst_34548);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34551__$1,inst_34549);
} else {
if((state_val_34552 === (2))){
var state_34551__$1 = state_34551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34551__$1,(4),ch);
} else {
if((state_val_34552 === (11))){
var inst_34531 = (state_34551[(8)]);
var inst_34540 = (state_34551[(2)]);
var inst_34528 = inst_34531;
var state_34551__$1 = (function (){var statearr_34561 = state_34551;
(statearr_34561[(10)] = inst_34540);

(statearr_34561[(7)] = inst_34528);

return statearr_34561;
})();
var statearr_34562_34586 = state_34551__$1;
(statearr_34562_34586[(2)] = null);

(statearr_34562_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (9))){
var inst_34531 = (state_34551[(8)]);
var state_34551__$1 = state_34551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34551__$1,(11),out,inst_34531);
} else {
if((state_val_34552 === (5))){
var inst_34528 = (state_34551[(7)]);
var inst_34531 = (state_34551[(8)]);
var inst_34535 = cljs.core._EQ_.call(null,inst_34531,inst_34528);
var state_34551__$1 = state_34551;
if(inst_34535){
var statearr_34564_34587 = state_34551__$1;
(statearr_34564_34587[(1)] = (8));

} else {
var statearr_34565_34588 = state_34551__$1;
(statearr_34565_34588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (10))){
var inst_34543 = (state_34551[(2)]);
var state_34551__$1 = state_34551;
var statearr_34566_34589 = state_34551__$1;
(statearr_34566_34589[(2)] = inst_34543);

(statearr_34566_34589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (8))){
var inst_34528 = (state_34551[(7)]);
var tmp34563 = inst_34528;
var inst_34528__$1 = tmp34563;
var state_34551__$1 = (function (){var statearr_34567 = state_34551;
(statearr_34567[(7)] = inst_34528__$1);

return statearr_34567;
})();
var statearr_34568_34590 = state_34551__$1;
(statearr_34568_34590[(2)] = null);

(statearr_34568_34590[(1)] = (2));


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
});})(c__31971__auto___34580,out))
;
return ((function (switch__31857__auto__,c__31971__auto___34580,out){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_34572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34572[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_34572[(1)] = (1));

return statearr_34572;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_34551){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_34551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34573){if((e34573 instanceof Object)){
var ex__31861__auto__ = e34573;
var statearr_34574_34591 = state_34551;
(statearr_34574_34591[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_34551;
state_34551 = G__34592;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_34551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_34551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___34580,out))
})();
var state__31973__auto__ = (function (){var statearr_34575 = f__31972__auto__.call(null);
(statearr_34575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___34580);

return statearr_34575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___34580,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34593 = [];
var len__22773__auto___34663 = arguments.length;
var i__22774__auto___34664 = (0);
while(true){
if((i__22774__auto___34664 < len__22773__auto___34663)){
args34593.push((arguments[i__22774__auto___34664]));

var G__34665 = (i__22774__auto___34664 + (1));
i__22774__auto___34664 = G__34665;
continue;
} else {
}
break;
}

var G__34595 = args34593.length;
switch (G__34595) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34593.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31971__auto___34667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___34667,out){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___34667,out){
return (function (state_34633){
var state_val_34634 = (state_34633[(1)]);
if((state_val_34634 === (7))){
var inst_34629 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34635_34668 = state_34633__$1;
(statearr_34635_34668[(2)] = inst_34629);

(statearr_34635_34668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (1))){
var inst_34596 = (new Array(n));
var inst_34597 = inst_34596;
var inst_34598 = (0);
var state_34633__$1 = (function (){var statearr_34636 = state_34633;
(statearr_34636[(7)] = inst_34598);

(statearr_34636[(8)] = inst_34597);

return statearr_34636;
})();
var statearr_34637_34669 = state_34633__$1;
(statearr_34637_34669[(2)] = null);

(statearr_34637_34669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (4))){
var inst_34601 = (state_34633[(9)]);
var inst_34601__$1 = (state_34633[(2)]);
var inst_34602 = (inst_34601__$1 == null);
var inst_34603 = cljs.core.not.call(null,inst_34602);
var state_34633__$1 = (function (){var statearr_34638 = state_34633;
(statearr_34638[(9)] = inst_34601__$1);

return statearr_34638;
})();
if(inst_34603){
var statearr_34639_34670 = state_34633__$1;
(statearr_34639_34670[(1)] = (5));

} else {
var statearr_34640_34671 = state_34633__$1;
(statearr_34640_34671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (15))){
var inst_34623 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34641_34672 = state_34633__$1;
(statearr_34641_34672[(2)] = inst_34623);

(statearr_34641_34672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (13))){
var state_34633__$1 = state_34633;
var statearr_34642_34673 = state_34633__$1;
(statearr_34642_34673[(2)] = null);

(statearr_34642_34673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (6))){
var inst_34598 = (state_34633[(7)]);
var inst_34619 = (inst_34598 > (0));
var state_34633__$1 = state_34633;
if(cljs.core.truth_(inst_34619)){
var statearr_34643_34674 = state_34633__$1;
(statearr_34643_34674[(1)] = (12));

} else {
var statearr_34644_34675 = state_34633__$1;
(statearr_34644_34675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (3))){
var inst_34631 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34633__$1,inst_34631);
} else {
if((state_val_34634 === (12))){
var inst_34597 = (state_34633[(8)]);
var inst_34621 = cljs.core.vec.call(null,inst_34597);
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34633__$1,(15),out,inst_34621);
} else {
if((state_val_34634 === (2))){
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34633__$1,(4),ch);
} else {
if((state_val_34634 === (11))){
var inst_34613 = (state_34633[(2)]);
var inst_34614 = (new Array(n));
var inst_34597 = inst_34614;
var inst_34598 = (0);
var state_34633__$1 = (function (){var statearr_34645 = state_34633;
(statearr_34645[(7)] = inst_34598);

(statearr_34645[(10)] = inst_34613);

(statearr_34645[(8)] = inst_34597);

return statearr_34645;
})();
var statearr_34646_34676 = state_34633__$1;
(statearr_34646_34676[(2)] = null);

(statearr_34646_34676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (9))){
var inst_34597 = (state_34633[(8)]);
var inst_34611 = cljs.core.vec.call(null,inst_34597);
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34633__$1,(11),out,inst_34611);
} else {
if((state_val_34634 === (5))){
var inst_34601 = (state_34633[(9)]);
var inst_34598 = (state_34633[(7)]);
var inst_34597 = (state_34633[(8)]);
var inst_34606 = (state_34633[(11)]);
var inst_34605 = (inst_34597[inst_34598] = inst_34601);
var inst_34606__$1 = (inst_34598 + (1));
var inst_34607 = (inst_34606__$1 < n);
var state_34633__$1 = (function (){var statearr_34647 = state_34633;
(statearr_34647[(12)] = inst_34605);

(statearr_34647[(11)] = inst_34606__$1);

return statearr_34647;
})();
if(cljs.core.truth_(inst_34607)){
var statearr_34648_34677 = state_34633__$1;
(statearr_34648_34677[(1)] = (8));

} else {
var statearr_34649_34678 = state_34633__$1;
(statearr_34649_34678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (14))){
var inst_34626 = (state_34633[(2)]);
var inst_34627 = cljs.core.async.close_BANG_.call(null,out);
var state_34633__$1 = (function (){var statearr_34651 = state_34633;
(statearr_34651[(13)] = inst_34626);

return statearr_34651;
})();
var statearr_34652_34679 = state_34633__$1;
(statearr_34652_34679[(2)] = inst_34627);

(statearr_34652_34679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (10))){
var inst_34617 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34653_34680 = state_34633__$1;
(statearr_34653_34680[(2)] = inst_34617);

(statearr_34653_34680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (8))){
var inst_34597 = (state_34633[(8)]);
var inst_34606 = (state_34633[(11)]);
var tmp34650 = inst_34597;
var inst_34597__$1 = tmp34650;
var inst_34598 = inst_34606;
var state_34633__$1 = (function (){var statearr_34654 = state_34633;
(statearr_34654[(7)] = inst_34598);

(statearr_34654[(8)] = inst_34597__$1);

return statearr_34654;
})();
var statearr_34655_34681 = state_34633__$1;
(statearr_34655_34681[(2)] = null);

(statearr_34655_34681[(1)] = (2));


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
});})(c__31971__auto___34667,out))
;
return ((function (switch__31857__auto__,c__31971__auto___34667,out){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_34659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34659[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_34659[(1)] = (1));

return statearr_34659;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_34633){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_34633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34660){if((e34660 instanceof Object)){
var ex__31861__auto__ = e34660;
var statearr_34661_34682 = state_34633;
(statearr_34661_34682[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34683 = state_34633;
state_34633 = G__34683;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_34633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_34633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___34667,out))
})();
var state__31973__auto__ = (function (){var statearr_34662 = f__31972__auto__.call(null);
(statearr_34662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___34667);

return statearr_34662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___34667,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34684 = [];
var len__22773__auto___34758 = arguments.length;
var i__22774__auto___34759 = (0);
while(true){
if((i__22774__auto___34759 < len__22773__auto___34758)){
args34684.push((arguments[i__22774__auto___34759]));

var G__34760 = (i__22774__auto___34759 + (1));
i__22774__auto___34759 = G__34760;
continue;
} else {
}
break;
}

var G__34686 = args34684.length;
switch (G__34686) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34684.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31971__auto___34762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___34762,out){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___34762,out){
return (function (state_34728){
var state_val_34729 = (state_34728[(1)]);
if((state_val_34729 === (7))){
var inst_34724 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34730_34763 = state_34728__$1;
(statearr_34730_34763[(2)] = inst_34724);

(statearr_34730_34763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (1))){
var inst_34687 = [];
var inst_34688 = inst_34687;
var inst_34689 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34728__$1 = (function (){var statearr_34731 = state_34728;
(statearr_34731[(7)] = inst_34689);

(statearr_34731[(8)] = inst_34688);

return statearr_34731;
})();
var statearr_34732_34764 = state_34728__$1;
(statearr_34732_34764[(2)] = null);

(statearr_34732_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (4))){
var inst_34692 = (state_34728[(9)]);
var inst_34692__$1 = (state_34728[(2)]);
var inst_34693 = (inst_34692__$1 == null);
var inst_34694 = cljs.core.not.call(null,inst_34693);
var state_34728__$1 = (function (){var statearr_34733 = state_34728;
(statearr_34733[(9)] = inst_34692__$1);

return statearr_34733;
})();
if(inst_34694){
var statearr_34734_34765 = state_34728__$1;
(statearr_34734_34765[(1)] = (5));

} else {
var statearr_34735_34766 = state_34728__$1;
(statearr_34735_34766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (15))){
var inst_34718 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34736_34767 = state_34728__$1;
(statearr_34736_34767[(2)] = inst_34718);

(statearr_34736_34767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (13))){
var state_34728__$1 = state_34728;
var statearr_34737_34768 = state_34728__$1;
(statearr_34737_34768[(2)] = null);

(statearr_34737_34768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (6))){
var inst_34688 = (state_34728[(8)]);
var inst_34713 = inst_34688.length;
var inst_34714 = (inst_34713 > (0));
var state_34728__$1 = state_34728;
if(cljs.core.truth_(inst_34714)){
var statearr_34738_34769 = state_34728__$1;
(statearr_34738_34769[(1)] = (12));

} else {
var statearr_34739_34770 = state_34728__$1;
(statearr_34739_34770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (3))){
var inst_34726 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34728__$1,inst_34726);
} else {
if((state_val_34729 === (12))){
var inst_34688 = (state_34728[(8)]);
var inst_34716 = cljs.core.vec.call(null,inst_34688);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34728__$1,(15),out,inst_34716);
} else {
if((state_val_34729 === (2))){
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34728__$1,(4),ch);
} else {
if((state_val_34729 === (11))){
var inst_34696 = (state_34728[(10)]);
var inst_34692 = (state_34728[(9)]);
var inst_34706 = (state_34728[(2)]);
var inst_34707 = [];
var inst_34708 = inst_34707.push(inst_34692);
var inst_34688 = inst_34707;
var inst_34689 = inst_34696;
var state_34728__$1 = (function (){var statearr_34740 = state_34728;
(statearr_34740[(7)] = inst_34689);

(statearr_34740[(11)] = inst_34706);

(statearr_34740[(12)] = inst_34708);

(statearr_34740[(8)] = inst_34688);

return statearr_34740;
})();
var statearr_34741_34771 = state_34728__$1;
(statearr_34741_34771[(2)] = null);

(statearr_34741_34771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (9))){
var inst_34688 = (state_34728[(8)]);
var inst_34704 = cljs.core.vec.call(null,inst_34688);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34728__$1,(11),out,inst_34704);
} else {
if((state_val_34729 === (5))){
var inst_34696 = (state_34728[(10)]);
var inst_34689 = (state_34728[(7)]);
var inst_34692 = (state_34728[(9)]);
var inst_34696__$1 = f.call(null,inst_34692);
var inst_34697 = cljs.core._EQ_.call(null,inst_34696__$1,inst_34689);
var inst_34698 = cljs.core.keyword_identical_QMARK_.call(null,inst_34689,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34699 = (inst_34697) || (inst_34698);
var state_34728__$1 = (function (){var statearr_34742 = state_34728;
(statearr_34742[(10)] = inst_34696__$1);

return statearr_34742;
})();
if(cljs.core.truth_(inst_34699)){
var statearr_34743_34772 = state_34728__$1;
(statearr_34743_34772[(1)] = (8));

} else {
var statearr_34744_34773 = state_34728__$1;
(statearr_34744_34773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (14))){
var inst_34721 = (state_34728[(2)]);
var inst_34722 = cljs.core.async.close_BANG_.call(null,out);
var state_34728__$1 = (function (){var statearr_34746 = state_34728;
(statearr_34746[(13)] = inst_34721);

return statearr_34746;
})();
var statearr_34747_34774 = state_34728__$1;
(statearr_34747_34774[(2)] = inst_34722);

(statearr_34747_34774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (10))){
var inst_34711 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34748_34775 = state_34728__$1;
(statearr_34748_34775[(2)] = inst_34711);

(statearr_34748_34775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (8))){
var inst_34696 = (state_34728[(10)]);
var inst_34692 = (state_34728[(9)]);
var inst_34688 = (state_34728[(8)]);
var inst_34701 = inst_34688.push(inst_34692);
var tmp34745 = inst_34688;
var inst_34688__$1 = tmp34745;
var inst_34689 = inst_34696;
var state_34728__$1 = (function (){var statearr_34749 = state_34728;
(statearr_34749[(7)] = inst_34689);

(statearr_34749[(14)] = inst_34701);

(statearr_34749[(8)] = inst_34688__$1);

return statearr_34749;
})();
var statearr_34750_34776 = state_34728__$1;
(statearr_34750_34776[(2)] = null);

(statearr_34750_34776[(1)] = (2));


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
});})(c__31971__auto___34762,out))
;
return ((function (switch__31857__auto__,c__31971__auto___34762,out){
return (function() {
var cljs$core$async$state_machine__31858__auto__ = null;
var cljs$core$async$state_machine__31858__auto____0 = (function (){
var statearr_34754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34754[(0)] = cljs$core$async$state_machine__31858__auto__);

(statearr_34754[(1)] = (1));

return statearr_34754;
});
var cljs$core$async$state_machine__31858__auto____1 = (function (state_34728){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_34728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e34755){if((e34755 instanceof Object)){
var ex__31861__auto__ = e34755;
var statearr_34756_34777 = state_34728;
(statearr_34756_34777[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34778 = state_34728;
state_34728 = G__34778;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
cljs$core$async$state_machine__31858__auto__ = function(state_34728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31858__auto____1.call(this,state_34728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31858__auto____0;
cljs$core$async$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31858__auto____1;
return cljs$core$async$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___34762,out))
})();
var state__31973__auto__ = (function (){var statearr_34757 = f__31972__auto__.call(null);
(statearr_34757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___34762);

return statearr_34757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___34762,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1472129940555