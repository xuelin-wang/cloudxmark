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
var args51305 = [];
var len__22773__auto___51311 = arguments.length;
var i__22774__auto___51312 = (0);
while(true){
if((i__22774__auto___51312 < len__22773__auto___51311)){
args51305.push((arguments[i__22774__auto___51312]));

var G__51313 = (i__22774__auto___51312 + (1));
i__22774__auto___51312 = G__51313;
continue;
} else {
}
break;
}

var G__51307 = args51305.length;
switch (G__51307) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51305.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async51308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51308 = (function (f,blockable,meta51309){
this.f = f;
this.blockable = blockable;
this.meta51309 = meta51309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51310,meta51309__$1){
var self__ = this;
var _51310__$1 = this;
return (new cljs.core.async.t_cljs$core$async51308(self__.f,self__.blockable,meta51309__$1));
});

cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51310){
var self__ = this;
var _51310__$1 = this;
return self__.meta51309;
});


cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51309","meta51309",1803949198,null)], null);
});

cljs.core.async.t_cljs$core$async51308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51308";

cljs.core.async.t_cljs$core$async51308.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async51308");
});

cljs.core.async.__GT_t_cljs$core$async51308 = (function cljs$core$async$__GT_t_cljs$core$async51308(f__$1,blockable__$1,meta51309){
return (new cljs.core.async.t_cljs$core$async51308(f__$1,blockable__$1,meta51309));
});

}

return (new cljs.core.async.t_cljs$core$async51308(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args51317 = [];
var len__22773__auto___51320 = arguments.length;
var i__22774__auto___51321 = (0);
while(true){
if((i__22774__auto___51321 < len__22773__auto___51320)){
args51317.push((arguments[i__22774__auto___51321]));

var G__51322 = (i__22774__auto___51321 + (1));
i__22774__auto___51321 = G__51322;
continue;
} else {
}
break;
}

var G__51319 = args51317.length;
switch (G__51319) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51317.length)].join('')));

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
var args51324 = [];
var len__22773__auto___51327 = arguments.length;
var i__22774__auto___51328 = (0);
while(true){
if((i__22774__auto___51328 < len__22773__auto___51327)){
args51324.push((arguments[i__22774__auto___51328]));

var G__51329 = (i__22774__auto___51328 + (1));
i__22774__auto___51328 = G__51329;
continue;
} else {
}
break;
}

var G__51326 = args51324.length;
switch (G__51326) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51324.length)].join('')));

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
var args51331 = [];
var len__22773__auto___51334 = arguments.length;
var i__22774__auto___51335 = (0);
while(true){
if((i__22774__auto___51335 < len__22773__auto___51334)){
args51331.push((arguments[i__22774__auto___51335]));

var G__51336 = (i__22774__auto___51335 + (1));
i__22774__auto___51335 = G__51336;
continue;
} else {
}
break;
}

var G__51333 = args51331.length;
switch (G__51333) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51331.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_51338 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_51338);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_51338,ret){
return (function (){
return fn1.call(null,val_51338);
});})(val_51338,ret))
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
var args51339 = [];
var len__22773__auto___51342 = arguments.length;
var i__22774__auto___51343 = (0);
while(true){
if((i__22774__auto___51343 < len__22773__auto___51342)){
args51339.push((arguments[i__22774__auto___51343]));

var G__51344 = (i__22774__auto___51343 + (1));
i__22774__auto___51343 = G__51344;
continue;
} else {
}
break;
}

var G__51341 = args51339.length;
switch (G__51341) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51339.length)].join('')));

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
var n__22603__auto___51346 = n;
var x_51347 = (0);
while(true){
if((x_51347 < n__22603__auto___51346)){
(a[x_51347] = (0));

var G__51348 = (x_51347 + (1));
x_51347 = G__51348;
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

var G__51349 = (i + (1));
i = G__51349;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async51353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51353 = (function (alt_flag,flag,meta51354){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta51354 = meta51354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51355,meta51354__$1){
var self__ = this;
var _51355__$1 = this;
return (new cljs.core.async.t_cljs$core$async51353(self__.alt_flag,self__.flag,meta51354__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51355){
var self__ = this;
var _51355__$1 = this;
return self__.meta51354;
});})(flag))
;


cljs.core.async.t_cljs$core$async51353.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51353.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51354","meta51354",-1538236578,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51353";

cljs.core.async.t_cljs$core$async51353.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async51353");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async51353 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51353(alt_flag__$1,flag__$1,meta51354){
return (new cljs.core.async.t_cljs$core$async51353(alt_flag__$1,flag__$1,meta51354));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51353(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async51359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51359 = (function (alt_handler,flag,cb,meta51360){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta51360 = meta51360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51361,meta51360__$1){
var self__ = this;
var _51361__$1 = this;
return (new cljs.core.async.t_cljs$core$async51359(self__.alt_handler,self__.flag,self__.cb,meta51360__$1));
});

cljs.core.async.t_cljs$core$async51359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51361){
var self__ = this;
var _51361__$1 = this;
return self__.meta51360;
});


cljs.core.async.t_cljs$core$async51359.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async51359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51360","meta51360",1971290895,null)], null);
});

cljs.core.async.t_cljs$core$async51359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51359";

cljs.core.async.t_cljs$core$async51359.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async51359");
});

cljs.core.async.__GT_t_cljs$core$async51359 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51359(alt_handler__$1,flag__$1,cb__$1,meta51360){
return (new cljs.core.async.t_cljs$core$async51359(alt_handler__$1,flag__$1,cb__$1,meta51360));
});

}

return (new cljs.core.async.t_cljs$core$async51359(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51362_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51362_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51363_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51363_SHARP_,port], null));
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
var G__51364 = (i + (1));
i = G__51364;
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
var len__22773__auto___51370 = arguments.length;
var i__22774__auto___51371 = (0);
while(true){
if((i__22774__auto___51371 < len__22773__auto___51370)){
args__22780__auto__.push((arguments[i__22774__auto___51371]));

var G__51372 = (i__22774__auto___51371 + (1));
i__22774__auto___51371 = G__51372;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((1) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22781__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51367){
var map__51368 = p__51367;
var map__51368__$1 = ((((!((map__51368 == null)))?((((map__51368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51368):map__51368);
var opts = map__51368__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51365){
var G__51366 = cljs.core.first.call(null,seq51365);
var seq51365__$1 = cljs.core.next.call(null,seq51365);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51366,seq51365__$1);
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
var args51373 = [];
var len__22773__auto___51423 = arguments.length;
var i__22774__auto___51424 = (0);
while(true){
if((i__22774__auto___51424 < len__22773__auto___51423)){
args51373.push((arguments[i__22774__auto___51424]));

var G__51425 = (i__22774__auto___51424 + (1));
i__22774__auto___51424 = G__51425;
continue;
} else {
}
break;
}

var G__51375 = args51373.length;
switch (G__51375) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51373.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28379__auto___51427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___51427){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___51427){
return (function (state_51399){
var state_val_51400 = (state_51399[(1)]);
if((state_val_51400 === (7))){
var inst_51395 = (state_51399[(2)]);
var state_51399__$1 = state_51399;
var statearr_51401_51428 = state_51399__$1;
(statearr_51401_51428[(2)] = inst_51395);

(statearr_51401_51428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (1))){
var state_51399__$1 = state_51399;
var statearr_51402_51429 = state_51399__$1;
(statearr_51402_51429[(2)] = null);

(statearr_51402_51429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (4))){
var inst_51378 = (state_51399[(7)]);
var inst_51378__$1 = (state_51399[(2)]);
var inst_51379 = (inst_51378__$1 == null);
var state_51399__$1 = (function (){var statearr_51403 = state_51399;
(statearr_51403[(7)] = inst_51378__$1);

return statearr_51403;
})();
if(cljs.core.truth_(inst_51379)){
var statearr_51404_51430 = state_51399__$1;
(statearr_51404_51430[(1)] = (5));

} else {
var statearr_51405_51431 = state_51399__$1;
(statearr_51405_51431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (13))){
var state_51399__$1 = state_51399;
var statearr_51406_51432 = state_51399__$1;
(statearr_51406_51432[(2)] = null);

(statearr_51406_51432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (6))){
var inst_51378 = (state_51399[(7)]);
var state_51399__$1 = state_51399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51399__$1,(11),to,inst_51378);
} else {
if((state_val_51400 === (3))){
var inst_51397 = (state_51399[(2)]);
var state_51399__$1 = state_51399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51399__$1,inst_51397);
} else {
if((state_val_51400 === (12))){
var state_51399__$1 = state_51399;
var statearr_51407_51433 = state_51399__$1;
(statearr_51407_51433[(2)] = null);

(statearr_51407_51433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (2))){
var state_51399__$1 = state_51399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51399__$1,(4),from);
} else {
if((state_val_51400 === (11))){
var inst_51388 = (state_51399[(2)]);
var state_51399__$1 = state_51399;
if(cljs.core.truth_(inst_51388)){
var statearr_51408_51434 = state_51399__$1;
(statearr_51408_51434[(1)] = (12));

} else {
var statearr_51409_51435 = state_51399__$1;
(statearr_51409_51435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (9))){
var state_51399__$1 = state_51399;
var statearr_51410_51436 = state_51399__$1;
(statearr_51410_51436[(2)] = null);

(statearr_51410_51436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (5))){
var state_51399__$1 = state_51399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51411_51437 = state_51399__$1;
(statearr_51411_51437[(1)] = (8));

} else {
var statearr_51412_51438 = state_51399__$1;
(statearr_51412_51438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (14))){
var inst_51393 = (state_51399[(2)]);
var state_51399__$1 = state_51399;
var statearr_51413_51439 = state_51399__$1;
(statearr_51413_51439[(2)] = inst_51393);

(statearr_51413_51439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (10))){
var inst_51385 = (state_51399[(2)]);
var state_51399__$1 = state_51399;
var statearr_51414_51440 = state_51399__$1;
(statearr_51414_51440[(2)] = inst_51385);

(statearr_51414_51440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (8))){
var inst_51382 = cljs.core.async.close_BANG_.call(null,to);
var state_51399__$1 = state_51399;
var statearr_51415_51441 = state_51399__$1;
(statearr_51415_51441[(2)] = inst_51382);

(statearr_51415_51441[(1)] = (10));


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
});})(c__28379__auto___51427))
;
return ((function (switch__28356__auto__,c__28379__auto___51427){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_51419 = [null,null,null,null,null,null,null,null];
(statearr_51419[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_51419[(1)] = (1));

return statearr_51419;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_51399){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_51399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e51420){if((e51420 instanceof Object)){
var ex__28360__auto__ = e51420;
var statearr_51421_51442 = state_51399;
(statearr_51421_51442[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51443 = state_51399;
state_51399 = G__51443;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_51399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_51399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___51427))
})();
var state__28381__auto__ = (function (){var statearr_51422 = f__28380__auto__.call(null);
(statearr_51422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___51427);

return statearr_51422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___51427))
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
return (function (p__51631){
var vec__51632 = p__51631;
var v = cljs.core.nth.call(null,vec__51632,(0),null);
var p = cljs.core.nth.call(null,vec__51632,(1),null);
var job = vec__51632;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28379__auto___51818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___51818,res,vec__51632,v,p,job,jobs,results){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___51818,res,vec__51632,v,p,job,jobs,results){
return (function (state_51639){
var state_val_51640 = (state_51639[(1)]);
if((state_val_51640 === (1))){
var state_51639__$1 = state_51639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51639__$1,(2),res,v);
} else {
if((state_val_51640 === (2))){
var inst_51636 = (state_51639[(2)]);
var inst_51637 = cljs.core.async.close_BANG_.call(null,res);
var state_51639__$1 = (function (){var statearr_51641 = state_51639;
(statearr_51641[(7)] = inst_51636);

return statearr_51641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51639__$1,inst_51637);
} else {
return null;
}
}
});})(c__28379__auto___51818,res,vec__51632,v,p,job,jobs,results))
;
return ((function (switch__28356__auto__,c__28379__auto___51818,res,vec__51632,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0 = (function (){
var statearr_51645 = [null,null,null,null,null,null,null,null];
(statearr_51645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__);

(statearr_51645[(1)] = (1));

return statearr_51645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1 = (function (state_51639){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_51639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e51646){if((e51646 instanceof Object)){
var ex__28360__auto__ = e51646;
var statearr_51647_51819 = state_51639;
(statearr_51647_51819[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51820 = state_51639;
state_51639 = G__51820;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = function(state_51639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1.call(this,state_51639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___51818,res,vec__51632,v,p,job,jobs,results))
})();
var state__28381__auto__ = (function (){var statearr_51648 = f__28380__auto__.call(null);
(statearr_51648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___51818);

return statearr_51648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___51818,res,vec__51632,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51649){
var vec__51650 = p__51649;
var v = cljs.core.nth.call(null,vec__51650,(0),null);
var p = cljs.core.nth.call(null,vec__51650,(1),null);
var job = vec__51650;
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
var n__22603__auto___51821 = n;
var __51822 = (0);
while(true){
if((__51822 < n__22603__auto___51821)){
var G__51653_51823 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__51653_51823) {
case "compute":
var c__28379__auto___51825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51822,c__28379__auto___51825,G__51653_51823,n__22603__auto___51821,jobs,results,process,async){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (__51822,c__28379__auto___51825,G__51653_51823,n__22603__auto___51821,jobs,results,process,async){
return (function (state_51666){
var state_val_51667 = (state_51666[(1)]);
if((state_val_51667 === (1))){
var state_51666__$1 = state_51666;
var statearr_51668_51826 = state_51666__$1;
(statearr_51668_51826[(2)] = null);

(statearr_51668_51826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51667 === (2))){
var state_51666__$1 = state_51666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51666__$1,(4),jobs);
} else {
if((state_val_51667 === (3))){
var inst_51664 = (state_51666[(2)]);
var state_51666__$1 = state_51666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51666__$1,inst_51664);
} else {
if((state_val_51667 === (4))){
var inst_51656 = (state_51666[(2)]);
var inst_51657 = process.call(null,inst_51656);
var state_51666__$1 = state_51666;
if(cljs.core.truth_(inst_51657)){
var statearr_51669_51827 = state_51666__$1;
(statearr_51669_51827[(1)] = (5));

} else {
var statearr_51670_51828 = state_51666__$1;
(statearr_51670_51828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51667 === (5))){
var state_51666__$1 = state_51666;
var statearr_51671_51829 = state_51666__$1;
(statearr_51671_51829[(2)] = null);

(statearr_51671_51829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51667 === (6))){
var state_51666__$1 = state_51666;
var statearr_51672_51830 = state_51666__$1;
(statearr_51672_51830[(2)] = null);

(statearr_51672_51830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51667 === (7))){
var inst_51662 = (state_51666[(2)]);
var state_51666__$1 = state_51666;
var statearr_51673_51831 = state_51666__$1;
(statearr_51673_51831[(2)] = inst_51662);

(statearr_51673_51831[(1)] = (3));


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
});})(__51822,c__28379__auto___51825,G__51653_51823,n__22603__auto___51821,jobs,results,process,async))
;
return ((function (__51822,switch__28356__auto__,c__28379__auto___51825,G__51653_51823,n__22603__auto___51821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0 = (function (){
var statearr_51677 = [null,null,null,null,null,null,null];
(statearr_51677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__);

(statearr_51677[(1)] = (1));

return statearr_51677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1 = (function (state_51666){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_51666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e51678){if((e51678 instanceof Object)){
var ex__28360__auto__ = e51678;
var statearr_51679_51832 = state_51666;
(statearr_51679_51832[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51833 = state_51666;
state_51666 = G__51833;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = function(state_51666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1.call(this,state_51666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__;
})()
;})(__51822,switch__28356__auto__,c__28379__auto___51825,G__51653_51823,n__22603__auto___51821,jobs,results,process,async))
})();
var state__28381__auto__ = (function (){var statearr_51680 = f__28380__auto__.call(null);
(statearr_51680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___51825);

return statearr_51680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(__51822,c__28379__auto___51825,G__51653_51823,n__22603__auto___51821,jobs,results,process,async))
);


break;
case "async":
var c__28379__auto___51834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51822,c__28379__auto___51834,G__51653_51823,n__22603__auto___51821,jobs,results,process,async){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (__51822,c__28379__auto___51834,G__51653_51823,n__22603__auto___51821,jobs,results,process,async){
return (function (state_51693){
var state_val_51694 = (state_51693[(1)]);
if((state_val_51694 === (1))){
var state_51693__$1 = state_51693;
var statearr_51695_51835 = state_51693__$1;
(statearr_51695_51835[(2)] = null);

(statearr_51695_51835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (2))){
var state_51693__$1 = state_51693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51693__$1,(4),jobs);
} else {
if((state_val_51694 === (3))){
var inst_51691 = (state_51693[(2)]);
var state_51693__$1 = state_51693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51693__$1,inst_51691);
} else {
if((state_val_51694 === (4))){
var inst_51683 = (state_51693[(2)]);
var inst_51684 = async.call(null,inst_51683);
var state_51693__$1 = state_51693;
if(cljs.core.truth_(inst_51684)){
var statearr_51696_51836 = state_51693__$1;
(statearr_51696_51836[(1)] = (5));

} else {
var statearr_51697_51837 = state_51693__$1;
(statearr_51697_51837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (5))){
var state_51693__$1 = state_51693;
var statearr_51698_51838 = state_51693__$1;
(statearr_51698_51838[(2)] = null);

(statearr_51698_51838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (6))){
var state_51693__$1 = state_51693;
var statearr_51699_51839 = state_51693__$1;
(statearr_51699_51839[(2)] = null);

(statearr_51699_51839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51694 === (7))){
var inst_51689 = (state_51693[(2)]);
var state_51693__$1 = state_51693;
var statearr_51700_51840 = state_51693__$1;
(statearr_51700_51840[(2)] = inst_51689);

(statearr_51700_51840[(1)] = (3));


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
});})(__51822,c__28379__auto___51834,G__51653_51823,n__22603__auto___51821,jobs,results,process,async))
;
return ((function (__51822,switch__28356__auto__,c__28379__auto___51834,G__51653_51823,n__22603__auto___51821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0 = (function (){
var statearr_51704 = [null,null,null,null,null,null,null];
(statearr_51704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__);

(statearr_51704[(1)] = (1));

return statearr_51704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1 = (function (state_51693){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_51693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e51705){if((e51705 instanceof Object)){
var ex__28360__auto__ = e51705;
var statearr_51706_51841 = state_51693;
(statearr_51706_51841[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51842 = state_51693;
state_51693 = G__51842;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = function(state_51693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1.call(this,state_51693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__;
})()
;})(__51822,switch__28356__auto__,c__28379__auto___51834,G__51653_51823,n__22603__auto___51821,jobs,results,process,async))
})();
var state__28381__auto__ = (function (){var statearr_51707 = f__28380__auto__.call(null);
(statearr_51707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___51834);

return statearr_51707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(__51822,c__28379__auto___51834,G__51653_51823,n__22603__auto___51821,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__51843 = (__51822 + (1));
__51822 = G__51843;
continue;
} else {
}
break;
}

var c__28379__auto___51844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___51844,jobs,results,process,async){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___51844,jobs,results,process,async){
return (function (state_51729){
var state_val_51730 = (state_51729[(1)]);
if((state_val_51730 === (1))){
var state_51729__$1 = state_51729;
var statearr_51731_51845 = state_51729__$1;
(statearr_51731_51845[(2)] = null);

(statearr_51731_51845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51730 === (2))){
var state_51729__$1 = state_51729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51729__$1,(4),from);
} else {
if((state_val_51730 === (3))){
var inst_51727 = (state_51729[(2)]);
var state_51729__$1 = state_51729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51729__$1,inst_51727);
} else {
if((state_val_51730 === (4))){
var inst_51710 = (state_51729[(7)]);
var inst_51710__$1 = (state_51729[(2)]);
var inst_51711 = (inst_51710__$1 == null);
var state_51729__$1 = (function (){var statearr_51732 = state_51729;
(statearr_51732[(7)] = inst_51710__$1);

return statearr_51732;
})();
if(cljs.core.truth_(inst_51711)){
var statearr_51733_51846 = state_51729__$1;
(statearr_51733_51846[(1)] = (5));

} else {
var statearr_51734_51847 = state_51729__$1;
(statearr_51734_51847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51730 === (5))){
var inst_51713 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51729__$1 = state_51729;
var statearr_51735_51848 = state_51729__$1;
(statearr_51735_51848[(2)] = inst_51713);

(statearr_51735_51848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51730 === (6))){
var inst_51710 = (state_51729[(7)]);
var inst_51715 = (state_51729[(8)]);
var inst_51715__$1 = cljs.core.async.chan.call(null,(1));
var inst_51716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51717 = [inst_51710,inst_51715__$1];
var inst_51718 = (new cljs.core.PersistentVector(null,2,(5),inst_51716,inst_51717,null));
var state_51729__$1 = (function (){var statearr_51736 = state_51729;
(statearr_51736[(8)] = inst_51715__$1);

return statearr_51736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51729__$1,(8),jobs,inst_51718);
} else {
if((state_val_51730 === (7))){
var inst_51725 = (state_51729[(2)]);
var state_51729__$1 = state_51729;
var statearr_51737_51849 = state_51729__$1;
(statearr_51737_51849[(2)] = inst_51725);

(statearr_51737_51849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51730 === (8))){
var inst_51715 = (state_51729[(8)]);
var inst_51720 = (state_51729[(2)]);
var state_51729__$1 = (function (){var statearr_51738 = state_51729;
(statearr_51738[(9)] = inst_51720);

return statearr_51738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51729__$1,(9),results,inst_51715);
} else {
if((state_val_51730 === (9))){
var inst_51722 = (state_51729[(2)]);
var state_51729__$1 = (function (){var statearr_51739 = state_51729;
(statearr_51739[(10)] = inst_51722);

return statearr_51739;
})();
var statearr_51740_51850 = state_51729__$1;
(statearr_51740_51850[(2)] = null);

(statearr_51740_51850[(1)] = (2));


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
});})(c__28379__auto___51844,jobs,results,process,async))
;
return ((function (switch__28356__auto__,c__28379__auto___51844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0 = (function (){
var statearr_51744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__);

(statearr_51744[(1)] = (1));

return statearr_51744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1 = (function (state_51729){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_51729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e51745){if((e51745 instanceof Object)){
var ex__28360__auto__ = e51745;
var statearr_51746_51851 = state_51729;
(statearr_51746_51851[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51852 = state_51729;
state_51729 = G__51852;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = function(state_51729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1.call(this,state_51729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___51844,jobs,results,process,async))
})();
var state__28381__auto__ = (function (){var statearr_51747 = f__28380__auto__.call(null);
(statearr_51747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___51844);

return statearr_51747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___51844,jobs,results,process,async))
);


var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__,jobs,results,process,async){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__,jobs,results,process,async){
return (function (state_51785){
var state_val_51786 = (state_51785[(1)]);
if((state_val_51786 === (7))){
var inst_51781 = (state_51785[(2)]);
var state_51785__$1 = state_51785;
var statearr_51787_51853 = state_51785__$1;
(statearr_51787_51853[(2)] = inst_51781);

(statearr_51787_51853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (20))){
var state_51785__$1 = state_51785;
var statearr_51788_51854 = state_51785__$1;
(statearr_51788_51854[(2)] = null);

(statearr_51788_51854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (1))){
var state_51785__$1 = state_51785;
var statearr_51789_51855 = state_51785__$1;
(statearr_51789_51855[(2)] = null);

(statearr_51789_51855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (4))){
var inst_51750 = (state_51785[(7)]);
var inst_51750__$1 = (state_51785[(2)]);
var inst_51751 = (inst_51750__$1 == null);
var state_51785__$1 = (function (){var statearr_51790 = state_51785;
(statearr_51790[(7)] = inst_51750__$1);

return statearr_51790;
})();
if(cljs.core.truth_(inst_51751)){
var statearr_51791_51856 = state_51785__$1;
(statearr_51791_51856[(1)] = (5));

} else {
var statearr_51792_51857 = state_51785__$1;
(statearr_51792_51857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (15))){
var inst_51763 = (state_51785[(8)]);
var state_51785__$1 = state_51785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51785__$1,(18),to,inst_51763);
} else {
if((state_val_51786 === (21))){
var inst_51776 = (state_51785[(2)]);
var state_51785__$1 = state_51785;
var statearr_51793_51858 = state_51785__$1;
(statearr_51793_51858[(2)] = inst_51776);

(statearr_51793_51858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (13))){
var inst_51778 = (state_51785[(2)]);
var state_51785__$1 = (function (){var statearr_51794 = state_51785;
(statearr_51794[(9)] = inst_51778);

return statearr_51794;
})();
var statearr_51795_51859 = state_51785__$1;
(statearr_51795_51859[(2)] = null);

(statearr_51795_51859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (6))){
var inst_51750 = (state_51785[(7)]);
var state_51785__$1 = state_51785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51785__$1,(11),inst_51750);
} else {
if((state_val_51786 === (17))){
var inst_51771 = (state_51785[(2)]);
var state_51785__$1 = state_51785;
if(cljs.core.truth_(inst_51771)){
var statearr_51796_51860 = state_51785__$1;
(statearr_51796_51860[(1)] = (19));

} else {
var statearr_51797_51861 = state_51785__$1;
(statearr_51797_51861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (3))){
var inst_51783 = (state_51785[(2)]);
var state_51785__$1 = state_51785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51785__$1,inst_51783);
} else {
if((state_val_51786 === (12))){
var inst_51760 = (state_51785[(10)]);
var state_51785__$1 = state_51785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51785__$1,(14),inst_51760);
} else {
if((state_val_51786 === (2))){
var state_51785__$1 = state_51785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51785__$1,(4),results);
} else {
if((state_val_51786 === (19))){
var state_51785__$1 = state_51785;
var statearr_51798_51862 = state_51785__$1;
(statearr_51798_51862[(2)] = null);

(statearr_51798_51862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (11))){
var inst_51760 = (state_51785[(2)]);
var state_51785__$1 = (function (){var statearr_51799 = state_51785;
(statearr_51799[(10)] = inst_51760);

return statearr_51799;
})();
var statearr_51800_51863 = state_51785__$1;
(statearr_51800_51863[(2)] = null);

(statearr_51800_51863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (9))){
var state_51785__$1 = state_51785;
var statearr_51801_51864 = state_51785__$1;
(statearr_51801_51864[(2)] = null);

(statearr_51801_51864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (5))){
var state_51785__$1 = state_51785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51802_51865 = state_51785__$1;
(statearr_51802_51865[(1)] = (8));

} else {
var statearr_51803_51866 = state_51785__$1;
(statearr_51803_51866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (14))){
var inst_51763 = (state_51785[(8)]);
var inst_51765 = (state_51785[(11)]);
var inst_51763__$1 = (state_51785[(2)]);
var inst_51764 = (inst_51763__$1 == null);
var inst_51765__$1 = cljs.core.not.call(null,inst_51764);
var state_51785__$1 = (function (){var statearr_51804 = state_51785;
(statearr_51804[(8)] = inst_51763__$1);

(statearr_51804[(11)] = inst_51765__$1);

return statearr_51804;
})();
if(inst_51765__$1){
var statearr_51805_51867 = state_51785__$1;
(statearr_51805_51867[(1)] = (15));

} else {
var statearr_51806_51868 = state_51785__$1;
(statearr_51806_51868[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (16))){
var inst_51765 = (state_51785[(11)]);
var state_51785__$1 = state_51785;
var statearr_51807_51869 = state_51785__$1;
(statearr_51807_51869[(2)] = inst_51765);

(statearr_51807_51869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (10))){
var inst_51757 = (state_51785[(2)]);
var state_51785__$1 = state_51785;
var statearr_51808_51870 = state_51785__$1;
(statearr_51808_51870[(2)] = inst_51757);

(statearr_51808_51870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (18))){
var inst_51768 = (state_51785[(2)]);
var state_51785__$1 = state_51785;
var statearr_51809_51871 = state_51785__$1;
(statearr_51809_51871[(2)] = inst_51768);

(statearr_51809_51871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (8))){
var inst_51754 = cljs.core.async.close_BANG_.call(null,to);
var state_51785__$1 = state_51785;
var statearr_51810_51872 = state_51785__$1;
(statearr_51810_51872[(2)] = inst_51754);

(statearr_51810_51872[(1)] = (10));


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
});})(c__28379__auto__,jobs,results,process,async))
;
return ((function (switch__28356__auto__,c__28379__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0 = (function (){
var statearr_51814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__);

(statearr_51814[(1)] = (1));

return statearr_51814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1 = (function (state_51785){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_51785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e51815){if((e51815 instanceof Object)){
var ex__28360__auto__ = e51815;
var statearr_51816_51873 = state_51785;
(statearr_51816_51873[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51874 = state_51785;
state_51785 = G__51874;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__ = function(state_51785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1.call(this,state_51785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28357__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__,jobs,results,process,async))
})();
var state__28381__auto__ = (function (){var statearr_51817 = f__28380__auto__.call(null);
(statearr_51817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_51817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__,jobs,results,process,async))
);

return c__28379__auto__;
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
var args51875 = [];
var len__22773__auto___51878 = arguments.length;
var i__22774__auto___51879 = (0);
while(true){
if((i__22774__auto___51879 < len__22773__auto___51878)){
args51875.push((arguments[i__22774__auto___51879]));

var G__51880 = (i__22774__auto___51879 + (1));
i__22774__auto___51879 = G__51880;
continue;
} else {
}
break;
}

var G__51877 = args51875.length;
switch (G__51877) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51875.length)].join('')));

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
var args51882 = [];
var len__22773__auto___51885 = arguments.length;
var i__22774__auto___51886 = (0);
while(true){
if((i__22774__auto___51886 < len__22773__auto___51885)){
args51882.push((arguments[i__22774__auto___51886]));

var G__51887 = (i__22774__auto___51886 + (1));
i__22774__auto___51886 = G__51887;
continue;
} else {
}
break;
}

var G__51884 = args51882.length;
switch (G__51884) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51882.length)].join('')));

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
var args51889 = [];
var len__22773__auto___51942 = arguments.length;
var i__22774__auto___51943 = (0);
while(true){
if((i__22774__auto___51943 < len__22773__auto___51942)){
args51889.push((arguments[i__22774__auto___51943]));

var G__51944 = (i__22774__auto___51943 + (1));
i__22774__auto___51943 = G__51944;
continue;
} else {
}
break;
}

var G__51891 = args51889.length;
switch (G__51891) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51889.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28379__auto___51946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___51946,tc,fc){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___51946,tc,fc){
return (function (state_51917){
var state_val_51918 = (state_51917[(1)]);
if((state_val_51918 === (7))){
var inst_51913 = (state_51917[(2)]);
var state_51917__$1 = state_51917;
var statearr_51919_51947 = state_51917__$1;
(statearr_51919_51947[(2)] = inst_51913);

(statearr_51919_51947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (1))){
var state_51917__$1 = state_51917;
var statearr_51920_51948 = state_51917__$1;
(statearr_51920_51948[(2)] = null);

(statearr_51920_51948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (4))){
var inst_51894 = (state_51917[(7)]);
var inst_51894__$1 = (state_51917[(2)]);
var inst_51895 = (inst_51894__$1 == null);
var state_51917__$1 = (function (){var statearr_51921 = state_51917;
(statearr_51921[(7)] = inst_51894__$1);

return statearr_51921;
})();
if(cljs.core.truth_(inst_51895)){
var statearr_51922_51949 = state_51917__$1;
(statearr_51922_51949[(1)] = (5));

} else {
var statearr_51923_51950 = state_51917__$1;
(statearr_51923_51950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (13))){
var state_51917__$1 = state_51917;
var statearr_51924_51951 = state_51917__$1;
(statearr_51924_51951[(2)] = null);

(statearr_51924_51951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (6))){
var inst_51894 = (state_51917[(7)]);
var inst_51900 = p.call(null,inst_51894);
var state_51917__$1 = state_51917;
if(cljs.core.truth_(inst_51900)){
var statearr_51925_51952 = state_51917__$1;
(statearr_51925_51952[(1)] = (9));

} else {
var statearr_51926_51953 = state_51917__$1;
(statearr_51926_51953[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (3))){
var inst_51915 = (state_51917[(2)]);
var state_51917__$1 = state_51917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51917__$1,inst_51915);
} else {
if((state_val_51918 === (12))){
var state_51917__$1 = state_51917;
var statearr_51927_51954 = state_51917__$1;
(statearr_51927_51954[(2)] = null);

(statearr_51927_51954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (2))){
var state_51917__$1 = state_51917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51917__$1,(4),ch);
} else {
if((state_val_51918 === (11))){
var inst_51894 = (state_51917[(7)]);
var inst_51904 = (state_51917[(2)]);
var state_51917__$1 = state_51917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51917__$1,(8),inst_51904,inst_51894);
} else {
if((state_val_51918 === (9))){
var state_51917__$1 = state_51917;
var statearr_51928_51955 = state_51917__$1;
(statearr_51928_51955[(2)] = tc);

(statearr_51928_51955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (5))){
var inst_51897 = cljs.core.async.close_BANG_.call(null,tc);
var inst_51898 = cljs.core.async.close_BANG_.call(null,fc);
var state_51917__$1 = (function (){var statearr_51929 = state_51917;
(statearr_51929[(8)] = inst_51897);

return statearr_51929;
})();
var statearr_51930_51956 = state_51917__$1;
(statearr_51930_51956[(2)] = inst_51898);

(statearr_51930_51956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (14))){
var inst_51911 = (state_51917[(2)]);
var state_51917__$1 = state_51917;
var statearr_51931_51957 = state_51917__$1;
(statearr_51931_51957[(2)] = inst_51911);

(statearr_51931_51957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (10))){
var state_51917__$1 = state_51917;
var statearr_51932_51958 = state_51917__$1;
(statearr_51932_51958[(2)] = fc);

(statearr_51932_51958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51918 === (8))){
var inst_51906 = (state_51917[(2)]);
var state_51917__$1 = state_51917;
if(cljs.core.truth_(inst_51906)){
var statearr_51933_51959 = state_51917__$1;
(statearr_51933_51959[(1)] = (12));

} else {
var statearr_51934_51960 = state_51917__$1;
(statearr_51934_51960[(1)] = (13));

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
});})(c__28379__auto___51946,tc,fc))
;
return ((function (switch__28356__auto__,c__28379__auto___51946,tc,fc){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_51938 = [null,null,null,null,null,null,null,null,null];
(statearr_51938[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_51938[(1)] = (1));

return statearr_51938;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_51917){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_51917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e51939){if((e51939 instanceof Object)){
var ex__28360__auto__ = e51939;
var statearr_51940_51961 = state_51917;
(statearr_51940_51961[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51962 = state_51917;
state_51917 = G__51962;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_51917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_51917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___51946,tc,fc))
})();
var state__28381__auto__ = (function (){var statearr_51941 = f__28380__auto__.call(null);
(statearr_51941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___51946);

return statearr_51941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___51946,tc,fc))
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
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_52026){
var state_val_52027 = (state_52026[(1)]);
if((state_val_52027 === (7))){
var inst_52022 = (state_52026[(2)]);
var state_52026__$1 = state_52026;
var statearr_52028_52049 = state_52026__$1;
(statearr_52028_52049[(2)] = inst_52022);

(statearr_52028_52049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52027 === (1))){
var inst_52006 = init;
var state_52026__$1 = (function (){var statearr_52029 = state_52026;
(statearr_52029[(7)] = inst_52006);

return statearr_52029;
})();
var statearr_52030_52050 = state_52026__$1;
(statearr_52030_52050[(2)] = null);

(statearr_52030_52050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52027 === (4))){
var inst_52009 = (state_52026[(8)]);
var inst_52009__$1 = (state_52026[(2)]);
var inst_52010 = (inst_52009__$1 == null);
var state_52026__$1 = (function (){var statearr_52031 = state_52026;
(statearr_52031[(8)] = inst_52009__$1);

return statearr_52031;
})();
if(cljs.core.truth_(inst_52010)){
var statearr_52032_52051 = state_52026__$1;
(statearr_52032_52051[(1)] = (5));

} else {
var statearr_52033_52052 = state_52026__$1;
(statearr_52033_52052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52027 === (6))){
var inst_52013 = (state_52026[(9)]);
var inst_52009 = (state_52026[(8)]);
var inst_52006 = (state_52026[(7)]);
var inst_52013__$1 = f.call(null,inst_52006,inst_52009);
var inst_52014 = cljs.core.reduced_QMARK_.call(null,inst_52013__$1);
var state_52026__$1 = (function (){var statearr_52034 = state_52026;
(statearr_52034[(9)] = inst_52013__$1);

return statearr_52034;
})();
if(inst_52014){
var statearr_52035_52053 = state_52026__$1;
(statearr_52035_52053[(1)] = (8));

} else {
var statearr_52036_52054 = state_52026__$1;
(statearr_52036_52054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52027 === (3))){
var inst_52024 = (state_52026[(2)]);
var state_52026__$1 = state_52026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52026__$1,inst_52024);
} else {
if((state_val_52027 === (2))){
var state_52026__$1 = state_52026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52026__$1,(4),ch);
} else {
if((state_val_52027 === (9))){
var inst_52013 = (state_52026[(9)]);
var inst_52006 = inst_52013;
var state_52026__$1 = (function (){var statearr_52037 = state_52026;
(statearr_52037[(7)] = inst_52006);

return statearr_52037;
})();
var statearr_52038_52055 = state_52026__$1;
(statearr_52038_52055[(2)] = null);

(statearr_52038_52055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52027 === (5))){
var inst_52006 = (state_52026[(7)]);
var state_52026__$1 = state_52026;
var statearr_52039_52056 = state_52026__$1;
(statearr_52039_52056[(2)] = inst_52006);

(statearr_52039_52056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52027 === (10))){
var inst_52020 = (state_52026[(2)]);
var state_52026__$1 = state_52026;
var statearr_52040_52057 = state_52026__$1;
(statearr_52040_52057[(2)] = inst_52020);

(statearr_52040_52057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52027 === (8))){
var inst_52013 = (state_52026[(9)]);
var inst_52016 = cljs.core.deref.call(null,inst_52013);
var state_52026__$1 = state_52026;
var statearr_52041_52058 = state_52026__$1;
(statearr_52041_52058[(2)] = inst_52016);

(statearr_52041_52058[(1)] = (10));


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
});})(c__28379__auto__))
;
return ((function (switch__28356__auto__,c__28379__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28357__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28357__auto____0 = (function (){
var statearr_52045 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52045[(0)] = cljs$core$async$reduce_$_state_machine__28357__auto__);

(statearr_52045[(1)] = (1));

return statearr_52045;
});
var cljs$core$async$reduce_$_state_machine__28357__auto____1 = (function (state_52026){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_52026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e52046){if((e52046 instanceof Object)){
var ex__28360__auto__ = e52046;
var statearr_52047_52059 = state_52026;
(statearr_52047_52059[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52060 = state_52026;
state_52026 = G__52060;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28357__auto__ = function(state_52026){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28357__auto____1.call(this,state_52026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28357__auto____0;
cljs$core$async$reduce_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28357__auto____1;
return cljs$core$async$reduce_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_52048 = f__28380__auto__.call(null);
(statearr_52048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_52048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
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
var args52061 = [];
var len__22773__auto___52113 = arguments.length;
var i__22774__auto___52114 = (0);
while(true){
if((i__22774__auto___52114 < len__22773__auto___52113)){
args52061.push((arguments[i__22774__auto___52114]));

var G__52115 = (i__22774__auto___52114 + (1));
i__22774__auto___52114 = G__52115;
continue;
} else {
}
break;
}

var G__52063 = args52061.length;
switch (G__52063) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52061.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_52088){
var state_val_52089 = (state_52088[(1)]);
if((state_val_52089 === (7))){
var inst_52070 = (state_52088[(2)]);
var state_52088__$1 = state_52088;
var statearr_52090_52117 = state_52088__$1;
(statearr_52090_52117[(2)] = inst_52070);

(statearr_52090_52117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (1))){
var inst_52064 = cljs.core.seq.call(null,coll);
var inst_52065 = inst_52064;
var state_52088__$1 = (function (){var statearr_52091 = state_52088;
(statearr_52091[(7)] = inst_52065);

return statearr_52091;
})();
var statearr_52092_52118 = state_52088__$1;
(statearr_52092_52118[(2)] = null);

(statearr_52092_52118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (4))){
var inst_52065 = (state_52088[(7)]);
var inst_52068 = cljs.core.first.call(null,inst_52065);
var state_52088__$1 = state_52088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52088__$1,(7),ch,inst_52068);
} else {
if((state_val_52089 === (13))){
var inst_52082 = (state_52088[(2)]);
var state_52088__$1 = state_52088;
var statearr_52093_52119 = state_52088__$1;
(statearr_52093_52119[(2)] = inst_52082);

(statearr_52093_52119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (6))){
var inst_52073 = (state_52088[(2)]);
var state_52088__$1 = state_52088;
if(cljs.core.truth_(inst_52073)){
var statearr_52094_52120 = state_52088__$1;
(statearr_52094_52120[(1)] = (8));

} else {
var statearr_52095_52121 = state_52088__$1;
(statearr_52095_52121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (3))){
var inst_52086 = (state_52088[(2)]);
var state_52088__$1 = state_52088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52088__$1,inst_52086);
} else {
if((state_val_52089 === (12))){
var state_52088__$1 = state_52088;
var statearr_52096_52122 = state_52088__$1;
(statearr_52096_52122[(2)] = null);

(statearr_52096_52122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (2))){
var inst_52065 = (state_52088[(7)]);
var state_52088__$1 = state_52088;
if(cljs.core.truth_(inst_52065)){
var statearr_52097_52123 = state_52088__$1;
(statearr_52097_52123[(1)] = (4));

} else {
var statearr_52098_52124 = state_52088__$1;
(statearr_52098_52124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (11))){
var inst_52079 = cljs.core.async.close_BANG_.call(null,ch);
var state_52088__$1 = state_52088;
var statearr_52099_52125 = state_52088__$1;
(statearr_52099_52125[(2)] = inst_52079);

(statearr_52099_52125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (9))){
var state_52088__$1 = state_52088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52100_52126 = state_52088__$1;
(statearr_52100_52126[(1)] = (11));

} else {
var statearr_52101_52127 = state_52088__$1;
(statearr_52101_52127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (5))){
var inst_52065 = (state_52088[(7)]);
var state_52088__$1 = state_52088;
var statearr_52102_52128 = state_52088__$1;
(statearr_52102_52128[(2)] = inst_52065);

(statearr_52102_52128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (10))){
var inst_52084 = (state_52088[(2)]);
var state_52088__$1 = state_52088;
var statearr_52103_52129 = state_52088__$1;
(statearr_52103_52129[(2)] = inst_52084);

(statearr_52103_52129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52089 === (8))){
var inst_52065 = (state_52088[(7)]);
var inst_52075 = cljs.core.next.call(null,inst_52065);
var inst_52065__$1 = inst_52075;
var state_52088__$1 = (function (){var statearr_52104 = state_52088;
(statearr_52104[(7)] = inst_52065__$1);

return statearr_52104;
})();
var statearr_52105_52130 = state_52088__$1;
(statearr_52105_52130[(2)] = null);

(statearr_52105_52130[(1)] = (2));


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
});})(c__28379__auto__))
;
return ((function (switch__28356__auto__,c__28379__auto__){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_52109 = [null,null,null,null,null,null,null,null];
(statearr_52109[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_52109[(1)] = (1));

return statearr_52109;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_52088){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_52088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e52110){if((e52110 instanceof Object)){
var ex__28360__auto__ = e52110;
var statearr_52111_52131 = state_52088;
(statearr_52111_52131[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52132 = state_52088;
state_52088 = G__52132;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_52088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_52088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_52112 = f__28380__auto__.call(null);
(statearr_52112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_52112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async52358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52358 = (function (mult,ch,cs,meta52359){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta52359 = meta52359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52360,meta52359__$1){
var self__ = this;
var _52360__$1 = this;
return (new cljs.core.async.t_cljs$core$async52358(self__.mult,self__.ch,self__.cs,meta52359__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52360){
var self__ = this;
var _52360__$1 = this;
return self__.meta52359;
});})(cs))
;


cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52358.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52358.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52359","meta52359",1742655926,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52358";

cljs.core.async.t_cljs$core$async52358.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async52358");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async52358 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52358(mult__$1,ch__$1,cs__$1,meta52359){
return (new cljs.core.async.t_cljs$core$async52358(mult__$1,ch__$1,cs__$1,meta52359));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52358(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28379__auto___52583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___52583,cs,m,dchan,dctr,done){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___52583,cs,m,dchan,dctr,done){
return (function (state_52495){
var state_val_52496 = (state_52495[(1)]);
if((state_val_52496 === (7))){
var inst_52491 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52497_52584 = state_52495__$1;
(statearr_52497_52584[(2)] = inst_52491);

(statearr_52497_52584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (20))){
var inst_52394 = (state_52495[(7)]);
var inst_52406 = cljs.core.first.call(null,inst_52394);
var inst_52407 = cljs.core.nth.call(null,inst_52406,(0),null);
var inst_52408 = cljs.core.nth.call(null,inst_52406,(1),null);
var state_52495__$1 = (function (){var statearr_52498 = state_52495;
(statearr_52498[(8)] = inst_52407);

return statearr_52498;
})();
if(cljs.core.truth_(inst_52408)){
var statearr_52499_52585 = state_52495__$1;
(statearr_52499_52585[(1)] = (22));

} else {
var statearr_52500_52586 = state_52495__$1;
(statearr_52500_52586[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (27))){
var inst_52443 = (state_52495[(9)]);
var inst_52363 = (state_52495[(10)]);
var inst_52436 = (state_52495[(11)]);
var inst_52438 = (state_52495[(12)]);
var inst_52443__$1 = cljs.core._nth.call(null,inst_52436,inst_52438);
var inst_52444 = cljs.core.async.put_BANG_.call(null,inst_52443__$1,inst_52363,done);
var state_52495__$1 = (function (){var statearr_52501 = state_52495;
(statearr_52501[(9)] = inst_52443__$1);

return statearr_52501;
})();
if(cljs.core.truth_(inst_52444)){
var statearr_52502_52587 = state_52495__$1;
(statearr_52502_52587[(1)] = (30));

} else {
var statearr_52503_52588 = state_52495__$1;
(statearr_52503_52588[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (1))){
var state_52495__$1 = state_52495;
var statearr_52504_52589 = state_52495__$1;
(statearr_52504_52589[(2)] = null);

(statearr_52504_52589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (24))){
var inst_52394 = (state_52495[(7)]);
var inst_52413 = (state_52495[(2)]);
var inst_52414 = cljs.core.next.call(null,inst_52394);
var inst_52372 = inst_52414;
var inst_52373 = null;
var inst_52374 = (0);
var inst_52375 = (0);
var state_52495__$1 = (function (){var statearr_52505 = state_52495;
(statearr_52505[(13)] = inst_52413);

(statearr_52505[(14)] = inst_52373);

(statearr_52505[(15)] = inst_52372);

(statearr_52505[(16)] = inst_52375);

(statearr_52505[(17)] = inst_52374);

return statearr_52505;
})();
var statearr_52506_52590 = state_52495__$1;
(statearr_52506_52590[(2)] = null);

(statearr_52506_52590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (39))){
var state_52495__$1 = state_52495;
var statearr_52510_52591 = state_52495__$1;
(statearr_52510_52591[(2)] = null);

(statearr_52510_52591[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (4))){
var inst_52363 = (state_52495[(10)]);
var inst_52363__$1 = (state_52495[(2)]);
var inst_52364 = (inst_52363__$1 == null);
var state_52495__$1 = (function (){var statearr_52511 = state_52495;
(statearr_52511[(10)] = inst_52363__$1);

return statearr_52511;
})();
if(cljs.core.truth_(inst_52364)){
var statearr_52512_52592 = state_52495__$1;
(statearr_52512_52592[(1)] = (5));

} else {
var statearr_52513_52593 = state_52495__$1;
(statearr_52513_52593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (15))){
var inst_52373 = (state_52495[(14)]);
var inst_52372 = (state_52495[(15)]);
var inst_52375 = (state_52495[(16)]);
var inst_52374 = (state_52495[(17)]);
var inst_52390 = (state_52495[(2)]);
var inst_52391 = (inst_52375 + (1));
var tmp52507 = inst_52373;
var tmp52508 = inst_52372;
var tmp52509 = inst_52374;
var inst_52372__$1 = tmp52508;
var inst_52373__$1 = tmp52507;
var inst_52374__$1 = tmp52509;
var inst_52375__$1 = inst_52391;
var state_52495__$1 = (function (){var statearr_52514 = state_52495;
(statearr_52514[(18)] = inst_52390);

(statearr_52514[(14)] = inst_52373__$1);

(statearr_52514[(15)] = inst_52372__$1);

(statearr_52514[(16)] = inst_52375__$1);

(statearr_52514[(17)] = inst_52374__$1);

return statearr_52514;
})();
var statearr_52515_52594 = state_52495__$1;
(statearr_52515_52594[(2)] = null);

(statearr_52515_52594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (21))){
var inst_52417 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52519_52595 = state_52495__$1;
(statearr_52519_52595[(2)] = inst_52417);

(statearr_52519_52595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (31))){
var inst_52443 = (state_52495[(9)]);
var inst_52447 = done.call(null,null);
var inst_52448 = cljs.core.async.untap_STAR_.call(null,m,inst_52443);
var state_52495__$1 = (function (){var statearr_52520 = state_52495;
(statearr_52520[(19)] = inst_52447);

return statearr_52520;
})();
var statearr_52521_52596 = state_52495__$1;
(statearr_52521_52596[(2)] = inst_52448);

(statearr_52521_52596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (32))){
var inst_52436 = (state_52495[(11)]);
var inst_52437 = (state_52495[(20)]);
var inst_52438 = (state_52495[(12)]);
var inst_52435 = (state_52495[(21)]);
var inst_52450 = (state_52495[(2)]);
var inst_52451 = (inst_52438 + (1));
var tmp52516 = inst_52436;
var tmp52517 = inst_52437;
var tmp52518 = inst_52435;
var inst_52435__$1 = tmp52518;
var inst_52436__$1 = tmp52516;
var inst_52437__$1 = tmp52517;
var inst_52438__$1 = inst_52451;
var state_52495__$1 = (function (){var statearr_52522 = state_52495;
(statearr_52522[(22)] = inst_52450);

(statearr_52522[(11)] = inst_52436__$1);

(statearr_52522[(20)] = inst_52437__$1);

(statearr_52522[(12)] = inst_52438__$1);

(statearr_52522[(21)] = inst_52435__$1);

return statearr_52522;
})();
var statearr_52523_52597 = state_52495__$1;
(statearr_52523_52597[(2)] = null);

(statearr_52523_52597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (40))){
var inst_52463 = (state_52495[(23)]);
var inst_52467 = done.call(null,null);
var inst_52468 = cljs.core.async.untap_STAR_.call(null,m,inst_52463);
var state_52495__$1 = (function (){var statearr_52524 = state_52495;
(statearr_52524[(24)] = inst_52467);

return statearr_52524;
})();
var statearr_52525_52598 = state_52495__$1;
(statearr_52525_52598[(2)] = inst_52468);

(statearr_52525_52598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (33))){
var inst_52454 = (state_52495[(25)]);
var inst_52456 = cljs.core.chunked_seq_QMARK_.call(null,inst_52454);
var state_52495__$1 = state_52495;
if(inst_52456){
var statearr_52526_52599 = state_52495__$1;
(statearr_52526_52599[(1)] = (36));

} else {
var statearr_52527_52600 = state_52495__$1;
(statearr_52527_52600[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (13))){
var inst_52384 = (state_52495[(26)]);
var inst_52387 = cljs.core.async.close_BANG_.call(null,inst_52384);
var state_52495__$1 = state_52495;
var statearr_52528_52601 = state_52495__$1;
(statearr_52528_52601[(2)] = inst_52387);

(statearr_52528_52601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (22))){
var inst_52407 = (state_52495[(8)]);
var inst_52410 = cljs.core.async.close_BANG_.call(null,inst_52407);
var state_52495__$1 = state_52495;
var statearr_52529_52602 = state_52495__$1;
(statearr_52529_52602[(2)] = inst_52410);

(statearr_52529_52602[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (36))){
var inst_52454 = (state_52495[(25)]);
var inst_52458 = cljs.core.chunk_first.call(null,inst_52454);
var inst_52459 = cljs.core.chunk_rest.call(null,inst_52454);
var inst_52460 = cljs.core.count.call(null,inst_52458);
var inst_52435 = inst_52459;
var inst_52436 = inst_52458;
var inst_52437 = inst_52460;
var inst_52438 = (0);
var state_52495__$1 = (function (){var statearr_52530 = state_52495;
(statearr_52530[(11)] = inst_52436);

(statearr_52530[(20)] = inst_52437);

(statearr_52530[(12)] = inst_52438);

(statearr_52530[(21)] = inst_52435);

return statearr_52530;
})();
var statearr_52531_52603 = state_52495__$1;
(statearr_52531_52603[(2)] = null);

(statearr_52531_52603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (41))){
var inst_52454 = (state_52495[(25)]);
var inst_52470 = (state_52495[(2)]);
var inst_52471 = cljs.core.next.call(null,inst_52454);
var inst_52435 = inst_52471;
var inst_52436 = null;
var inst_52437 = (0);
var inst_52438 = (0);
var state_52495__$1 = (function (){var statearr_52532 = state_52495;
(statearr_52532[(27)] = inst_52470);

(statearr_52532[(11)] = inst_52436);

(statearr_52532[(20)] = inst_52437);

(statearr_52532[(12)] = inst_52438);

(statearr_52532[(21)] = inst_52435);

return statearr_52532;
})();
var statearr_52533_52604 = state_52495__$1;
(statearr_52533_52604[(2)] = null);

(statearr_52533_52604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (43))){
var state_52495__$1 = state_52495;
var statearr_52534_52605 = state_52495__$1;
(statearr_52534_52605[(2)] = null);

(statearr_52534_52605[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (29))){
var inst_52479 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52535_52606 = state_52495__$1;
(statearr_52535_52606[(2)] = inst_52479);

(statearr_52535_52606[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (44))){
var inst_52488 = (state_52495[(2)]);
var state_52495__$1 = (function (){var statearr_52536 = state_52495;
(statearr_52536[(28)] = inst_52488);

return statearr_52536;
})();
var statearr_52537_52607 = state_52495__$1;
(statearr_52537_52607[(2)] = null);

(statearr_52537_52607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (6))){
var inst_52427 = (state_52495[(29)]);
var inst_52426 = cljs.core.deref.call(null,cs);
var inst_52427__$1 = cljs.core.keys.call(null,inst_52426);
var inst_52428 = cljs.core.count.call(null,inst_52427__$1);
var inst_52429 = cljs.core.reset_BANG_.call(null,dctr,inst_52428);
var inst_52434 = cljs.core.seq.call(null,inst_52427__$1);
var inst_52435 = inst_52434;
var inst_52436 = null;
var inst_52437 = (0);
var inst_52438 = (0);
var state_52495__$1 = (function (){var statearr_52538 = state_52495;
(statearr_52538[(30)] = inst_52429);

(statearr_52538[(11)] = inst_52436);

(statearr_52538[(20)] = inst_52437);

(statearr_52538[(12)] = inst_52438);

(statearr_52538[(29)] = inst_52427__$1);

(statearr_52538[(21)] = inst_52435);

return statearr_52538;
})();
var statearr_52539_52608 = state_52495__$1;
(statearr_52539_52608[(2)] = null);

(statearr_52539_52608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (28))){
var inst_52435 = (state_52495[(21)]);
var inst_52454 = (state_52495[(25)]);
var inst_52454__$1 = cljs.core.seq.call(null,inst_52435);
var state_52495__$1 = (function (){var statearr_52540 = state_52495;
(statearr_52540[(25)] = inst_52454__$1);

return statearr_52540;
})();
if(inst_52454__$1){
var statearr_52541_52609 = state_52495__$1;
(statearr_52541_52609[(1)] = (33));

} else {
var statearr_52542_52610 = state_52495__$1;
(statearr_52542_52610[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (25))){
var inst_52437 = (state_52495[(20)]);
var inst_52438 = (state_52495[(12)]);
var inst_52440 = (inst_52438 < inst_52437);
var inst_52441 = inst_52440;
var state_52495__$1 = state_52495;
if(cljs.core.truth_(inst_52441)){
var statearr_52543_52611 = state_52495__$1;
(statearr_52543_52611[(1)] = (27));

} else {
var statearr_52544_52612 = state_52495__$1;
(statearr_52544_52612[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (34))){
var state_52495__$1 = state_52495;
var statearr_52545_52613 = state_52495__$1;
(statearr_52545_52613[(2)] = null);

(statearr_52545_52613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (17))){
var state_52495__$1 = state_52495;
var statearr_52546_52614 = state_52495__$1;
(statearr_52546_52614[(2)] = null);

(statearr_52546_52614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (3))){
var inst_52493 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52495__$1,inst_52493);
} else {
if((state_val_52496 === (12))){
var inst_52422 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52547_52615 = state_52495__$1;
(statearr_52547_52615[(2)] = inst_52422);

(statearr_52547_52615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (2))){
var state_52495__$1 = state_52495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52495__$1,(4),ch);
} else {
if((state_val_52496 === (23))){
var state_52495__$1 = state_52495;
var statearr_52548_52616 = state_52495__$1;
(statearr_52548_52616[(2)] = null);

(statearr_52548_52616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (35))){
var inst_52477 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52549_52617 = state_52495__$1;
(statearr_52549_52617[(2)] = inst_52477);

(statearr_52549_52617[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (19))){
var inst_52394 = (state_52495[(7)]);
var inst_52398 = cljs.core.chunk_first.call(null,inst_52394);
var inst_52399 = cljs.core.chunk_rest.call(null,inst_52394);
var inst_52400 = cljs.core.count.call(null,inst_52398);
var inst_52372 = inst_52399;
var inst_52373 = inst_52398;
var inst_52374 = inst_52400;
var inst_52375 = (0);
var state_52495__$1 = (function (){var statearr_52550 = state_52495;
(statearr_52550[(14)] = inst_52373);

(statearr_52550[(15)] = inst_52372);

(statearr_52550[(16)] = inst_52375);

(statearr_52550[(17)] = inst_52374);

return statearr_52550;
})();
var statearr_52551_52618 = state_52495__$1;
(statearr_52551_52618[(2)] = null);

(statearr_52551_52618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (11))){
var inst_52394 = (state_52495[(7)]);
var inst_52372 = (state_52495[(15)]);
var inst_52394__$1 = cljs.core.seq.call(null,inst_52372);
var state_52495__$1 = (function (){var statearr_52552 = state_52495;
(statearr_52552[(7)] = inst_52394__$1);

return statearr_52552;
})();
if(inst_52394__$1){
var statearr_52553_52619 = state_52495__$1;
(statearr_52553_52619[(1)] = (16));

} else {
var statearr_52554_52620 = state_52495__$1;
(statearr_52554_52620[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (9))){
var inst_52424 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52555_52621 = state_52495__$1;
(statearr_52555_52621[(2)] = inst_52424);

(statearr_52555_52621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (5))){
var inst_52370 = cljs.core.deref.call(null,cs);
var inst_52371 = cljs.core.seq.call(null,inst_52370);
var inst_52372 = inst_52371;
var inst_52373 = null;
var inst_52374 = (0);
var inst_52375 = (0);
var state_52495__$1 = (function (){var statearr_52556 = state_52495;
(statearr_52556[(14)] = inst_52373);

(statearr_52556[(15)] = inst_52372);

(statearr_52556[(16)] = inst_52375);

(statearr_52556[(17)] = inst_52374);

return statearr_52556;
})();
var statearr_52557_52622 = state_52495__$1;
(statearr_52557_52622[(2)] = null);

(statearr_52557_52622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (14))){
var state_52495__$1 = state_52495;
var statearr_52558_52623 = state_52495__$1;
(statearr_52558_52623[(2)] = null);

(statearr_52558_52623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (45))){
var inst_52485 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52559_52624 = state_52495__$1;
(statearr_52559_52624[(2)] = inst_52485);

(statearr_52559_52624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (26))){
var inst_52427 = (state_52495[(29)]);
var inst_52481 = (state_52495[(2)]);
var inst_52482 = cljs.core.seq.call(null,inst_52427);
var state_52495__$1 = (function (){var statearr_52560 = state_52495;
(statearr_52560[(31)] = inst_52481);

return statearr_52560;
})();
if(inst_52482){
var statearr_52561_52625 = state_52495__$1;
(statearr_52561_52625[(1)] = (42));

} else {
var statearr_52562_52626 = state_52495__$1;
(statearr_52562_52626[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (16))){
var inst_52394 = (state_52495[(7)]);
var inst_52396 = cljs.core.chunked_seq_QMARK_.call(null,inst_52394);
var state_52495__$1 = state_52495;
if(inst_52396){
var statearr_52563_52627 = state_52495__$1;
(statearr_52563_52627[(1)] = (19));

} else {
var statearr_52564_52628 = state_52495__$1;
(statearr_52564_52628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (38))){
var inst_52474 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52565_52629 = state_52495__$1;
(statearr_52565_52629[(2)] = inst_52474);

(statearr_52565_52629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (30))){
var state_52495__$1 = state_52495;
var statearr_52566_52630 = state_52495__$1;
(statearr_52566_52630[(2)] = null);

(statearr_52566_52630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (10))){
var inst_52373 = (state_52495[(14)]);
var inst_52375 = (state_52495[(16)]);
var inst_52383 = cljs.core._nth.call(null,inst_52373,inst_52375);
var inst_52384 = cljs.core.nth.call(null,inst_52383,(0),null);
var inst_52385 = cljs.core.nth.call(null,inst_52383,(1),null);
var state_52495__$1 = (function (){var statearr_52567 = state_52495;
(statearr_52567[(26)] = inst_52384);

return statearr_52567;
})();
if(cljs.core.truth_(inst_52385)){
var statearr_52568_52631 = state_52495__$1;
(statearr_52568_52631[(1)] = (13));

} else {
var statearr_52569_52632 = state_52495__$1;
(statearr_52569_52632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (18))){
var inst_52420 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52570_52633 = state_52495__$1;
(statearr_52570_52633[(2)] = inst_52420);

(statearr_52570_52633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (42))){
var state_52495__$1 = state_52495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52495__$1,(45),dchan);
} else {
if((state_val_52496 === (37))){
var inst_52363 = (state_52495[(10)]);
var inst_52463 = (state_52495[(23)]);
var inst_52454 = (state_52495[(25)]);
var inst_52463__$1 = cljs.core.first.call(null,inst_52454);
var inst_52464 = cljs.core.async.put_BANG_.call(null,inst_52463__$1,inst_52363,done);
var state_52495__$1 = (function (){var statearr_52571 = state_52495;
(statearr_52571[(23)] = inst_52463__$1);

return statearr_52571;
})();
if(cljs.core.truth_(inst_52464)){
var statearr_52572_52634 = state_52495__$1;
(statearr_52572_52634[(1)] = (39));

} else {
var statearr_52573_52635 = state_52495__$1;
(statearr_52573_52635[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (8))){
var inst_52375 = (state_52495[(16)]);
var inst_52374 = (state_52495[(17)]);
var inst_52377 = (inst_52375 < inst_52374);
var inst_52378 = inst_52377;
var state_52495__$1 = state_52495;
if(cljs.core.truth_(inst_52378)){
var statearr_52574_52636 = state_52495__$1;
(statearr_52574_52636[(1)] = (10));

} else {
var statearr_52575_52637 = state_52495__$1;
(statearr_52575_52637[(1)] = (11));

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
});})(c__28379__auto___52583,cs,m,dchan,dctr,done))
;
return ((function (switch__28356__auto__,c__28379__auto___52583,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28357__auto__ = null;
var cljs$core$async$mult_$_state_machine__28357__auto____0 = (function (){
var statearr_52579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52579[(0)] = cljs$core$async$mult_$_state_machine__28357__auto__);

(statearr_52579[(1)] = (1));

return statearr_52579;
});
var cljs$core$async$mult_$_state_machine__28357__auto____1 = (function (state_52495){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_52495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e52580){if((e52580 instanceof Object)){
var ex__28360__auto__ = e52580;
var statearr_52581_52638 = state_52495;
(statearr_52581_52638[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52639 = state_52495;
state_52495 = G__52639;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28357__auto__ = function(state_52495){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28357__auto____1.call(this,state_52495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28357__auto____0;
cljs$core$async$mult_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28357__auto____1;
return cljs$core$async$mult_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___52583,cs,m,dchan,dctr,done))
})();
var state__28381__auto__ = (function (){var statearr_52582 = f__28380__auto__.call(null);
(statearr_52582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___52583);

return statearr_52582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___52583,cs,m,dchan,dctr,done))
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
var args52640 = [];
var len__22773__auto___52643 = arguments.length;
var i__22774__auto___52644 = (0);
while(true){
if((i__22774__auto___52644 < len__22773__auto___52643)){
args52640.push((arguments[i__22774__auto___52644]));

var G__52645 = (i__22774__auto___52644 + (1));
i__22774__auto___52644 = G__52645;
continue;
} else {
}
break;
}

var G__52642 = args52640.length;
switch (G__52642) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52640.length)].join('')));

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
var len__22773__auto___52657 = arguments.length;
var i__22774__auto___52658 = (0);
while(true){
if((i__22774__auto___52658 < len__22773__auto___52657)){
args__22780__auto__.push((arguments[i__22774__auto___52658]));

var G__52659 = (i__22774__auto___52658 + (1));
i__22774__auto___52658 = G__52659;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52651){
var map__52652 = p__52651;
var map__52652__$1 = ((((!((map__52652 == null)))?((((map__52652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52652):map__52652);
var opts = map__52652__$1;
var statearr_52654_52660 = state;
(statearr_52654_52660[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6552__auto__ = cljs.core.async.do_alts.call(null,((function (map__52652,map__52652__$1,opts){
return (function (val){
var statearr_52655_52661 = state;
(statearr_52655_52661[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__52652,map__52652__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6552__auto__)){
var cb = temp__6552__auto__;
var statearr_52656_52662 = state;
(statearr_52656_52662[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52647){
var G__52648 = cljs.core.first.call(null,seq52647);
var seq52647__$1 = cljs.core.next.call(null,seq52647);
var G__52649 = cljs.core.first.call(null,seq52647__$1);
var seq52647__$2 = cljs.core.next.call(null,seq52647__$1);
var G__52650 = cljs.core.first.call(null,seq52647__$2);
var seq52647__$3 = cljs.core.next.call(null,seq52647__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52648,G__52649,G__52650,seq52647__$3);
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
if(typeof cljs.core.async.t_cljs$core$async52828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52828 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52829){
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
this.meta52829 = meta52829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52830,meta52829__$1){
var self__ = this;
var _52830__$1 = this;
return (new cljs.core.async.t_cljs$core$async52828(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52830){
var self__ = this;
var _52830__$1 = this;
return self__.meta52829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async52828.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52829","meta52829",-1863827103,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52828";

cljs.core.async.t_cljs$core$async52828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async52828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async52828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52829){
return (new cljs.core.async.t_cljs$core$async52828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52828(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28379__auto___52993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___52993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___52993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52930){
var state_val_52931 = (state_52930[(1)]);
if((state_val_52931 === (7))){
var inst_52846 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
var statearr_52932_52994 = state_52930__$1;
(statearr_52932_52994[(2)] = inst_52846);

(statearr_52932_52994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (20))){
var inst_52858 = (state_52930[(7)]);
var state_52930__$1 = state_52930;
var statearr_52933_52995 = state_52930__$1;
(statearr_52933_52995[(2)] = inst_52858);

(statearr_52933_52995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (27))){
var state_52930__$1 = state_52930;
var statearr_52934_52996 = state_52930__$1;
(statearr_52934_52996[(2)] = null);

(statearr_52934_52996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (1))){
var inst_52834 = (state_52930[(8)]);
var inst_52834__$1 = calc_state.call(null);
var inst_52836 = (inst_52834__$1 == null);
var inst_52837 = cljs.core.not.call(null,inst_52836);
var state_52930__$1 = (function (){var statearr_52935 = state_52930;
(statearr_52935[(8)] = inst_52834__$1);

return statearr_52935;
})();
if(inst_52837){
var statearr_52936_52997 = state_52930__$1;
(statearr_52936_52997[(1)] = (2));

} else {
var statearr_52937_52998 = state_52930__$1;
(statearr_52937_52998[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (24))){
var inst_52890 = (state_52930[(9)]);
var inst_52904 = (state_52930[(10)]);
var inst_52881 = (state_52930[(11)]);
var inst_52904__$1 = inst_52881.call(null,inst_52890);
var state_52930__$1 = (function (){var statearr_52938 = state_52930;
(statearr_52938[(10)] = inst_52904__$1);

return statearr_52938;
})();
if(cljs.core.truth_(inst_52904__$1)){
var statearr_52939_52999 = state_52930__$1;
(statearr_52939_52999[(1)] = (29));

} else {
var statearr_52940_53000 = state_52930__$1;
(statearr_52940_53000[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (4))){
var inst_52849 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
if(cljs.core.truth_(inst_52849)){
var statearr_52941_53001 = state_52930__$1;
(statearr_52941_53001[(1)] = (8));

} else {
var statearr_52942_53002 = state_52930__$1;
(statearr_52942_53002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (15))){
var inst_52875 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
if(cljs.core.truth_(inst_52875)){
var statearr_52943_53003 = state_52930__$1;
(statearr_52943_53003[(1)] = (19));

} else {
var statearr_52944_53004 = state_52930__$1;
(statearr_52944_53004[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (21))){
var inst_52880 = (state_52930[(12)]);
var inst_52880__$1 = (state_52930[(2)]);
var inst_52881 = cljs.core.get.call(null,inst_52880__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52882 = cljs.core.get.call(null,inst_52880__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52883 = cljs.core.get.call(null,inst_52880__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52930__$1 = (function (){var statearr_52945 = state_52930;
(statearr_52945[(13)] = inst_52882);

(statearr_52945[(11)] = inst_52881);

(statearr_52945[(12)] = inst_52880__$1);

return statearr_52945;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52930__$1,(22),inst_52883);
} else {
if((state_val_52931 === (31))){
var inst_52912 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
if(cljs.core.truth_(inst_52912)){
var statearr_52946_53005 = state_52930__$1;
(statearr_52946_53005[(1)] = (32));

} else {
var statearr_52947_53006 = state_52930__$1;
(statearr_52947_53006[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (32))){
var inst_52889 = (state_52930[(14)]);
var state_52930__$1 = state_52930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52930__$1,(35),out,inst_52889);
} else {
if((state_val_52931 === (33))){
var inst_52880 = (state_52930[(12)]);
var inst_52858 = inst_52880;
var state_52930__$1 = (function (){var statearr_52948 = state_52930;
(statearr_52948[(7)] = inst_52858);

return statearr_52948;
})();
var statearr_52949_53007 = state_52930__$1;
(statearr_52949_53007[(2)] = null);

(statearr_52949_53007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (13))){
var inst_52858 = (state_52930[(7)]);
var inst_52865 = inst_52858.cljs$lang$protocol_mask$partition0$;
var inst_52866 = (inst_52865 & (64));
var inst_52867 = inst_52858.cljs$core$ISeq$;
var inst_52868 = (inst_52866) || (inst_52867);
var state_52930__$1 = state_52930;
if(cljs.core.truth_(inst_52868)){
var statearr_52950_53008 = state_52930__$1;
(statearr_52950_53008[(1)] = (16));

} else {
var statearr_52951_53009 = state_52930__$1;
(statearr_52951_53009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (22))){
var inst_52889 = (state_52930[(14)]);
var inst_52890 = (state_52930[(9)]);
var inst_52888 = (state_52930[(2)]);
var inst_52889__$1 = cljs.core.nth.call(null,inst_52888,(0),null);
var inst_52890__$1 = cljs.core.nth.call(null,inst_52888,(1),null);
var inst_52891 = (inst_52889__$1 == null);
var inst_52892 = cljs.core._EQ_.call(null,inst_52890__$1,change);
var inst_52893 = (inst_52891) || (inst_52892);
var state_52930__$1 = (function (){var statearr_52952 = state_52930;
(statearr_52952[(14)] = inst_52889__$1);

(statearr_52952[(9)] = inst_52890__$1);

return statearr_52952;
})();
if(cljs.core.truth_(inst_52893)){
var statearr_52953_53010 = state_52930__$1;
(statearr_52953_53010[(1)] = (23));

} else {
var statearr_52954_53011 = state_52930__$1;
(statearr_52954_53011[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (36))){
var inst_52880 = (state_52930[(12)]);
var inst_52858 = inst_52880;
var state_52930__$1 = (function (){var statearr_52955 = state_52930;
(statearr_52955[(7)] = inst_52858);

return statearr_52955;
})();
var statearr_52956_53012 = state_52930__$1;
(statearr_52956_53012[(2)] = null);

(statearr_52956_53012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (29))){
var inst_52904 = (state_52930[(10)]);
var state_52930__$1 = state_52930;
var statearr_52957_53013 = state_52930__$1;
(statearr_52957_53013[(2)] = inst_52904);

(statearr_52957_53013[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (6))){
var state_52930__$1 = state_52930;
var statearr_52958_53014 = state_52930__$1;
(statearr_52958_53014[(2)] = false);

(statearr_52958_53014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (28))){
var inst_52900 = (state_52930[(2)]);
var inst_52901 = calc_state.call(null);
var inst_52858 = inst_52901;
var state_52930__$1 = (function (){var statearr_52959 = state_52930;
(statearr_52959[(15)] = inst_52900);

(statearr_52959[(7)] = inst_52858);

return statearr_52959;
})();
var statearr_52960_53015 = state_52930__$1;
(statearr_52960_53015[(2)] = null);

(statearr_52960_53015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (25))){
var inst_52926 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
var statearr_52961_53016 = state_52930__$1;
(statearr_52961_53016[(2)] = inst_52926);

(statearr_52961_53016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (34))){
var inst_52924 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
var statearr_52962_53017 = state_52930__$1;
(statearr_52962_53017[(2)] = inst_52924);

(statearr_52962_53017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (17))){
var state_52930__$1 = state_52930;
var statearr_52963_53018 = state_52930__$1;
(statearr_52963_53018[(2)] = false);

(statearr_52963_53018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (3))){
var state_52930__$1 = state_52930;
var statearr_52964_53019 = state_52930__$1;
(statearr_52964_53019[(2)] = false);

(statearr_52964_53019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (12))){
var inst_52928 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52930__$1,inst_52928);
} else {
if((state_val_52931 === (2))){
var inst_52834 = (state_52930[(8)]);
var inst_52839 = inst_52834.cljs$lang$protocol_mask$partition0$;
var inst_52840 = (inst_52839 & (64));
var inst_52841 = inst_52834.cljs$core$ISeq$;
var inst_52842 = (inst_52840) || (inst_52841);
var state_52930__$1 = state_52930;
if(cljs.core.truth_(inst_52842)){
var statearr_52965_53020 = state_52930__$1;
(statearr_52965_53020[(1)] = (5));

} else {
var statearr_52966_53021 = state_52930__$1;
(statearr_52966_53021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (23))){
var inst_52889 = (state_52930[(14)]);
var inst_52895 = (inst_52889 == null);
var state_52930__$1 = state_52930;
if(cljs.core.truth_(inst_52895)){
var statearr_52967_53022 = state_52930__$1;
(statearr_52967_53022[(1)] = (26));

} else {
var statearr_52968_53023 = state_52930__$1;
(statearr_52968_53023[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (35))){
var inst_52915 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
if(cljs.core.truth_(inst_52915)){
var statearr_52969_53024 = state_52930__$1;
(statearr_52969_53024[(1)] = (36));

} else {
var statearr_52970_53025 = state_52930__$1;
(statearr_52970_53025[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (19))){
var inst_52858 = (state_52930[(7)]);
var inst_52877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52858);
var state_52930__$1 = state_52930;
var statearr_52971_53026 = state_52930__$1;
(statearr_52971_53026[(2)] = inst_52877);

(statearr_52971_53026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (11))){
var inst_52858 = (state_52930[(7)]);
var inst_52862 = (inst_52858 == null);
var inst_52863 = cljs.core.not.call(null,inst_52862);
var state_52930__$1 = state_52930;
if(inst_52863){
var statearr_52972_53027 = state_52930__$1;
(statearr_52972_53027[(1)] = (13));

} else {
var statearr_52973_53028 = state_52930__$1;
(statearr_52973_53028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (9))){
var inst_52834 = (state_52930[(8)]);
var state_52930__$1 = state_52930;
var statearr_52974_53029 = state_52930__$1;
(statearr_52974_53029[(2)] = inst_52834);

(statearr_52974_53029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (5))){
var state_52930__$1 = state_52930;
var statearr_52975_53030 = state_52930__$1;
(statearr_52975_53030[(2)] = true);

(statearr_52975_53030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (14))){
var state_52930__$1 = state_52930;
var statearr_52976_53031 = state_52930__$1;
(statearr_52976_53031[(2)] = false);

(statearr_52976_53031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (26))){
var inst_52890 = (state_52930[(9)]);
var inst_52897 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_52890);
var state_52930__$1 = state_52930;
var statearr_52977_53032 = state_52930__$1;
(statearr_52977_53032[(2)] = inst_52897);

(statearr_52977_53032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (16))){
var state_52930__$1 = state_52930;
var statearr_52978_53033 = state_52930__$1;
(statearr_52978_53033[(2)] = true);

(statearr_52978_53033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (38))){
var inst_52920 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
var statearr_52979_53034 = state_52930__$1;
(statearr_52979_53034[(2)] = inst_52920);

(statearr_52979_53034[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (30))){
var inst_52882 = (state_52930[(13)]);
var inst_52890 = (state_52930[(9)]);
var inst_52881 = (state_52930[(11)]);
var inst_52907 = cljs.core.empty_QMARK_.call(null,inst_52881);
var inst_52908 = inst_52882.call(null,inst_52890);
var inst_52909 = cljs.core.not.call(null,inst_52908);
var inst_52910 = (inst_52907) && (inst_52909);
var state_52930__$1 = state_52930;
var statearr_52980_53035 = state_52930__$1;
(statearr_52980_53035[(2)] = inst_52910);

(statearr_52980_53035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (10))){
var inst_52834 = (state_52930[(8)]);
var inst_52854 = (state_52930[(2)]);
var inst_52855 = cljs.core.get.call(null,inst_52854,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52856 = cljs.core.get.call(null,inst_52854,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52857 = cljs.core.get.call(null,inst_52854,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52858 = inst_52834;
var state_52930__$1 = (function (){var statearr_52981 = state_52930;
(statearr_52981[(16)] = inst_52857);

(statearr_52981[(17)] = inst_52855);

(statearr_52981[(18)] = inst_52856);

(statearr_52981[(7)] = inst_52858);

return statearr_52981;
})();
var statearr_52982_53036 = state_52930__$1;
(statearr_52982_53036[(2)] = null);

(statearr_52982_53036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (18))){
var inst_52872 = (state_52930[(2)]);
var state_52930__$1 = state_52930;
var statearr_52983_53037 = state_52930__$1;
(statearr_52983_53037[(2)] = inst_52872);

(statearr_52983_53037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (37))){
var state_52930__$1 = state_52930;
var statearr_52984_53038 = state_52930__$1;
(statearr_52984_53038[(2)] = null);

(statearr_52984_53038[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52931 === (8))){
var inst_52834 = (state_52930[(8)]);
var inst_52851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52834);
var state_52930__$1 = state_52930;
var statearr_52985_53039 = state_52930__$1;
(statearr_52985_53039[(2)] = inst_52851);

(statearr_52985_53039[(1)] = (10));


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
});})(c__28379__auto___52993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28356__auto__,c__28379__auto___52993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28357__auto__ = null;
var cljs$core$async$mix_$_state_machine__28357__auto____0 = (function (){
var statearr_52989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52989[(0)] = cljs$core$async$mix_$_state_machine__28357__auto__);

(statearr_52989[(1)] = (1));

return statearr_52989;
});
var cljs$core$async$mix_$_state_machine__28357__auto____1 = (function (state_52930){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_52930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e52990){if((e52990 instanceof Object)){
var ex__28360__auto__ = e52990;
var statearr_52991_53040 = state_52930;
(statearr_52991_53040[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53041 = state_52930;
state_52930 = G__53041;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28357__auto__ = function(state_52930){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28357__auto____1.call(this,state_52930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28357__auto____0;
cljs$core$async$mix_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28357__auto____1;
return cljs$core$async$mix_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___52993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28381__auto__ = (function (){var statearr_52992 = f__28380__auto__.call(null);
(statearr_52992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___52993);

return statearr_52992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___52993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args53042 = [];
var len__22773__auto___53045 = arguments.length;
var i__22774__auto___53046 = (0);
while(true){
if((i__22774__auto___53046 < len__22773__auto___53045)){
args53042.push((arguments[i__22774__auto___53046]));

var G__53047 = (i__22774__auto___53046 + (1));
i__22774__auto___53046 = G__53047;
continue;
} else {
}
break;
}

var G__53044 = args53042.length;
switch (G__53044) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53042.length)].join('')));

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
var args53050 = [];
var len__22773__auto___53175 = arguments.length;
var i__22774__auto___53176 = (0);
while(true){
if((i__22774__auto___53176 < len__22773__auto___53175)){
args53050.push((arguments[i__22774__auto___53176]));

var G__53177 = (i__22774__auto___53176 + (1));
i__22774__auto___53176 = G__53177;
continue;
} else {
}
break;
}

var G__53052 = args53050.length;
switch (G__53052) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53050.length)].join('')));

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
return (function (p1__53049_SHARP_){
if(cljs.core.truth_(p1__53049_SHARP_.call(null,topic))){
return p1__53049_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53049_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21590__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async53053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53053 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53054){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53054 = meta53054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53055,meta53054__$1){
var self__ = this;
var _53055__$1 = this;
return (new cljs.core.async.t_cljs$core$async53053(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53054__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53055){
var self__ = this;
var _53055__$1 = this;
return self__.meta53054;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53053.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53054","meta53054",-429033154,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53053";

cljs.core.async.t_cljs$core$async53053.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async53053");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async53053 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53054){
return (new cljs.core.async.t_cljs$core$async53053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53054));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53053(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28379__auto___53179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___53179,mults,ensure_mult,p){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___53179,mults,ensure_mult,p){
return (function (state_53127){
var state_val_53128 = (state_53127[(1)]);
if((state_val_53128 === (7))){
var inst_53123 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53129_53180 = state_53127__$1;
(statearr_53129_53180[(2)] = inst_53123);

(statearr_53129_53180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (20))){
var state_53127__$1 = state_53127;
var statearr_53130_53181 = state_53127__$1;
(statearr_53130_53181[(2)] = null);

(statearr_53130_53181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (1))){
var state_53127__$1 = state_53127;
var statearr_53131_53182 = state_53127__$1;
(statearr_53131_53182[(2)] = null);

(statearr_53131_53182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (24))){
var inst_53106 = (state_53127[(7)]);
var inst_53115 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53106);
var state_53127__$1 = state_53127;
var statearr_53132_53183 = state_53127__$1;
(statearr_53132_53183[(2)] = inst_53115);

(statearr_53132_53183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (4))){
var inst_53058 = (state_53127[(8)]);
var inst_53058__$1 = (state_53127[(2)]);
var inst_53059 = (inst_53058__$1 == null);
var state_53127__$1 = (function (){var statearr_53133 = state_53127;
(statearr_53133[(8)] = inst_53058__$1);

return statearr_53133;
})();
if(cljs.core.truth_(inst_53059)){
var statearr_53134_53184 = state_53127__$1;
(statearr_53134_53184[(1)] = (5));

} else {
var statearr_53135_53185 = state_53127__$1;
(statearr_53135_53185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (15))){
var inst_53100 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53136_53186 = state_53127__$1;
(statearr_53136_53186[(2)] = inst_53100);

(statearr_53136_53186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (21))){
var inst_53120 = (state_53127[(2)]);
var state_53127__$1 = (function (){var statearr_53137 = state_53127;
(statearr_53137[(9)] = inst_53120);

return statearr_53137;
})();
var statearr_53138_53187 = state_53127__$1;
(statearr_53138_53187[(2)] = null);

(statearr_53138_53187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (13))){
var inst_53082 = (state_53127[(10)]);
var inst_53084 = cljs.core.chunked_seq_QMARK_.call(null,inst_53082);
var state_53127__$1 = state_53127;
if(inst_53084){
var statearr_53139_53188 = state_53127__$1;
(statearr_53139_53188[(1)] = (16));

} else {
var statearr_53140_53189 = state_53127__$1;
(statearr_53140_53189[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (22))){
var inst_53112 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
if(cljs.core.truth_(inst_53112)){
var statearr_53141_53190 = state_53127__$1;
(statearr_53141_53190[(1)] = (23));

} else {
var statearr_53142_53191 = state_53127__$1;
(statearr_53142_53191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (6))){
var inst_53058 = (state_53127[(8)]);
var inst_53108 = (state_53127[(11)]);
var inst_53106 = (state_53127[(7)]);
var inst_53106__$1 = topic_fn.call(null,inst_53058);
var inst_53107 = cljs.core.deref.call(null,mults);
var inst_53108__$1 = cljs.core.get.call(null,inst_53107,inst_53106__$1);
var state_53127__$1 = (function (){var statearr_53143 = state_53127;
(statearr_53143[(11)] = inst_53108__$1);

(statearr_53143[(7)] = inst_53106__$1);

return statearr_53143;
})();
if(cljs.core.truth_(inst_53108__$1)){
var statearr_53144_53192 = state_53127__$1;
(statearr_53144_53192[(1)] = (19));

} else {
var statearr_53145_53193 = state_53127__$1;
(statearr_53145_53193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (25))){
var inst_53117 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53146_53194 = state_53127__$1;
(statearr_53146_53194[(2)] = inst_53117);

(statearr_53146_53194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (17))){
var inst_53082 = (state_53127[(10)]);
var inst_53091 = cljs.core.first.call(null,inst_53082);
var inst_53092 = cljs.core.async.muxch_STAR_.call(null,inst_53091);
var inst_53093 = cljs.core.async.close_BANG_.call(null,inst_53092);
var inst_53094 = cljs.core.next.call(null,inst_53082);
var inst_53068 = inst_53094;
var inst_53069 = null;
var inst_53070 = (0);
var inst_53071 = (0);
var state_53127__$1 = (function (){var statearr_53147 = state_53127;
(statearr_53147[(12)] = inst_53068);

(statearr_53147[(13)] = inst_53093);

(statearr_53147[(14)] = inst_53071);

(statearr_53147[(15)] = inst_53069);

(statearr_53147[(16)] = inst_53070);

return statearr_53147;
})();
var statearr_53148_53195 = state_53127__$1;
(statearr_53148_53195[(2)] = null);

(statearr_53148_53195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (3))){
var inst_53125 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53127__$1,inst_53125);
} else {
if((state_val_53128 === (12))){
var inst_53102 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53149_53196 = state_53127__$1;
(statearr_53149_53196[(2)] = inst_53102);

(statearr_53149_53196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (2))){
var state_53127__$1 = state_53127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53127__$1,(4),ch);
} else {
if((state_val_53128 === (23))){
var state_53127__$1 = state_53127;
var statearr_53150_53197 = state_53127__$1;
(statearr_53150_53197[(2)] = null);

(statearr_53150_53197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (19))){
var inst_53058 = (state_53127[(8)]);
var inst_53108 = (state_53127[(11)]);
var inst_53110 = cljs.core.async.muxch_STAR_.call(null,inst_53108);
var state_53127__$1 = state_53127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53127__$1,(22),inst_53110,inst_53058);
} else {
if((state_val_53128 === (11))){
var inst_53068 = (state_53127[(12)]);
var inst_53082 = (state_53127[(10)]);
var inst_53082__$1 = cljs.core.seq.call(null,inst_53068);
var state_53127__$1 = (function (){var statearr_53151 = state_53127;
(statearr_53151[(10)] = inst_53082__$1);

return statearr_53151;
})();
if(inst_53082__$1){
var statearr_53152_53198 = state_53127__$1;
(statearr_53152_53198[(1)] = (13));

} else {
var statearr_53153_53199 = state_53127__$1;
(statearr_53153_53199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (9))){
var inst_53104 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53154_53200 = state_53127__$1;
(statearr_53154_53200[(2)] = inst_53104);

(statearr_53154_53200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (5))){
var inst_53065 = cljs.core.deref.call(null,mults);
var inst_53066 = cljs.core.vals.call(null,inst_53065);
var inst_53067 = cljs.core.seq.call(null,inst_53066);
var inst_53068 = inst_53067;
var inst_53069 = null;
var inst_53070 = (0);
var inst_53071 = (0);
var state_53127__$1 = (function (){var statearr_53155 = state_53127;
(statearr_53155[(12)] = inst_53068);

(statearr_53155[(14)] = inst_53071);

(statearr_53155[(15)] = inst_53069);

(statearr_53155[(16)] = inst_53070);

return statearr_53155;
})();
var statearr_53156_53201 = state_53127__$1;
(statearr_53156_53201[(2)] = null);

(statearr_53156_53201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (14))){
var state_53127__$1 = state_53127;
var statearr_53160_53202 = state_53127__$1;
(statearr_53160_53202[(2)] = null);

(statearr_53160_53202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (16))){
var inst_53082 = (state_53127[(10)]);
var inst_53086 = cljs.core.chunk_first.call(null,inst_53082);
var inst_53087 = cljs.core.chunk_rest.call(null,inst_53082);
var inst_53088 = cljs.core.count.call(null,inst_53086);
var inst_53068 = inst_53087;
var inst_53069 = inst_53086;
var inst_53070 = inst_53088;
var inst_53071 = (0);
var state_53127__$1 = (function (){var statearr_53161 = state_53127;
(statearr_53161[(12)] = inst_53068);

(statearr_53161[(14)] = inst_53071);

(statearr_53161[(15)] = inst_53069);

(statearr_53161[(16)] = inst_53070);

return statearr_53161;
})();
var statearr_53162_53203 = state_53127__$1;
(statearr_53162_53203[(2)] = null);

(statearr_53162_53203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (10))){
var inst_53068 = (state_53127[(12)]);
var inst_53071 = (state_53127[(14)]);
var inst_53069 = (state_53127[(15)]);
var inst_53070 = (state_53127[(16)]);
var inst_53076 = cljs.core._nth.call(null,inst_53069,inst_53071);
var inst_53077 = cljs.core.async.muxch_STAR_.call(null,inst_53076);
var inst_53078 = cljs.core.async.close_BANG_.call(null,inst_53077);
var inst_53079 = (inst_53071 + (1));
var tmp53157 = inst_53068;
var tmp53158 = inst_53069;
var tmp53159 = inst_53070;
var inst_53068__$1 = tmp53157;
var inst_53069__$1 = tmp53158;
var inst_53070__$1 = tmp53159;
var inst_53071__$1 = inst_53079;
var state_53127__$1 = (function (){var statearr_53163 = state_53127;
(statearr_53163[(12)] = inst_53068__$1);

(statearr_53163[(17)] = inst_53078);

(statearr_53163[(14)] = inst_53071__$1);

(statearr_53163[(15)] = inst_53069__$1);

(statearr_53163[(16)] = inst_53070__$1);

return statearr_53163;
})();
var statearr_53164_53204 = state_53127__$1;
(statearr_53164_53204[(2)] = null);

(statearr_53164_53204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (18))){
var inst_53097 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53165_53205 = state_53127__$1;
(statearr_53165_53205[(2)] = inst_53097);

(statearr_53165_53205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (8))){
var inst_53071 = (state_53127[(14)]);
var inst_53070 = (state_53127[(16)]);
var inst_53073 = (inst_53071 < inst_53070);
var inst_53074 = inst_53073;
var state_53127__$1 = state_53127;
if(cljs.core.truth_(inst_53074)){
var statearr_53166_53206 = state_53127__$1;
(statearr_53166_53206[(1)] = (10));

} else {
var statearr_53167_53207 = state_53127__$1;
(statearr_53167_53207[(1)] = (11));

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
});})(c__28379__auto___53179,mults,ensure_mult,p))
;
return ((function (switch__28356__auto__,c__28379__auto___53179,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_53171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53171[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_53171[(1)] = (1));

return statearr_53171;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_53127){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53172){if((e53172 instanceof Object)){
var ex__28360__auto__ = e53172;
var statearr_53173_53208 = state_53127;
(statearr_53173_53208[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53209 = state_53127;
state_53127 = G__53209;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_53127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_53127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___53179,mults,ensure_mult,p))
})();
var state__28381__auto__ = (function (){var statearr_53174 = f__28380__auto__.call(null);
(statearr_53174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___53179);

return statearr_53174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___53179,mults,ensure_mult,p))
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
var args53210 = [];
var len__22773__auto___53213 = arguments.length;
var i__22774__auto___53214 = (0);
while(true){
if((i__22774__auto___53214 < len__22773__auto___53213)){
args53210.push((arguments[i__22774__auto___53214]));

var G__53215 = (i__22774__auto___53214 + (1));
i__22774__auto___53214 = G__53215;
continue;
} else {
}
break;
}

var G__53212 = args53210.length;
switch (G__53212) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53210.length)].join('')));

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
var args53217 = [];
var len__22773__auto___53220 = arguments.length;
var i__22774__auto___53221 = (0);
while(true){
if((i__22774__auto___53221 < len__22773__auto___53220)){
args53217.push((arguments[i__22774__auto___53221]));

var G__53222 = (i__22774__auto___53221 + (1));
i__22774__auto___53221 = G__53222;
continue;
} else {
}
break;
}

var G__53219 = args53217.length;
switch (G__53219) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53217.length)].join('')));

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
var args53224 = [];
var len__22773__auto___53295 = arguments.length;
var i__22774__auto___53296 = (0);
while(true){
if((i__22774__auto___53296 < len__22773__auto___53295)){
args53224.push((arguments[i__22774__auto___53296]));

var G__53297 = (i__22774__auto___53296 + (1));
i__22774__auto___53296 = G__53297;
continue;
} else {
}
break;
}

var G__53226 = args53224.length;
switch (G__53226) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53224.length)].join('')));

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
var c__28379__auto___53299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___53299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___53299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53265){
var state_val_53266 = (state_53265[(1)]);
if((state_val_53266 === (7))){
var state_53265__$1 = state_53265;
var statearr_53267_53300 = state_53265__$1;
(statearr_53267_53300[(2)] = null);

(statearr_53267_53300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (1))){
var state_53265__$1 = state_53265;
var statearr_53268_53301 = state_53265__$1;
(statearr_53268_53301[(2)] = null);

(statearr_53268_53301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (4))){
var inst_53229 = (state_53265[(7)]);
var inst_53231 = (inst_53229 < cnt);
var state_53265__$1 = state_53265;
if(cljs.core.truth_(inst_53231)){
var statearr_53269_53302 = state_53265__$1;
(statearr_53269_53302[(1)] = (6));

} else {
var statearr_53270_53303 = state_53265__$1;
(statearr_53270_53303[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (15))){
var inst_53261 = (state_53265[(2)]);
var state_53265__$1 = state_53265;
var statearr_53271_53304 = state_53265__$1;
(statearr_53271_53304[(2)] = inst_53261);

(statearr_53271_53304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (13))){
var inst_53254 = cljs.core.async.close_BANG_.call(null,out);
var state_53265__$1 = state_53265;
var statearr_53272_53305 = state_53265__$1;
(statearr_53272_53305[(2)] = inst_53254);

(statearr_53272_53305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (6))){
var state_53265__$1 = state_53265;
var statearr_53273_53306 = state_53265__$1;
(statearr_53273_53306[(2)] = null);

(statearr_53273_53306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (3))){
var inst_53263 = (state_53265[(2)]);
var state_53265__$1 = state_53265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53265__$1,inst_53263);
} else {
if((state_val_53266 === (12))){
var inst_53251 = (state_53265[(8)]);
var inst_53251__$1 = (state_53265[(2)]);
var inst_53252 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53251__$1);
var state_53265__$1 = (function (){var statearr_53274 = state_53265;
(statearr_53274[(8)] = inst_53251__$1);

return statearr_53274;
})();
if(cljs.core.truth_(inst_53252)){
var statearr_53275_53307 = state_53265__$1;
(statearr_53275_53307[(1)] = (13));

} else {
var statearr_53276_53308 = state_53265__$1;
(statearr_53276_53308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (2))){
var inst_53228 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53229 = (0);
var state_53265__$1 = (function (){var statearr_53277 = state_53265;
(statearr_53277[(9)] = inst_53228);

(statearr_53277[(7)] = inst_53229);

return statearr_53277;
})();
var statearr_53278_53309 = state_53265__$1;
(statearr_53278_53309[(2)] = null);

(statearr_53278_53309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (11))){
var inst_53229 = (state_53265[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53265,(10),Object,null,(9));
var inst_53238 = chs__$1.call(null,inst_53229);
var inst_53239 = done.call(null,inst_53229);
var inst_53240 = cljs.core.async.take_BANG_.call(null,inst_53238,inst_53239);
var state_53265__$1 = state_53265;
var statearr_53279_53310 = state_53265__$1;
(statearr_53279_53310[(2)] = inst_53240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (9))){
var inst_53229 = (state_53265[(7)]);
var inst_53242 = (state_53265[(2)]);
var inst_53243 = (inst_53229 + (1));
var inst_53229__$1 = inst_53243;
var state_53265__$1 = (function (){var statearr_53280 = state_53265;
(statearr_53280[(7)] = inst_53229__$1);

(statearr_53280[(10)] = inst_53242);

return statearr_53280;
})();
var statearr_53281_53311 = state_53265__$1;
(statearr_53281_53311[(2)] = null);

(statearr_53281_53311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (5))){
var inst_53249 = (state_53265[(2)]);
var state_53265__$1 = (function (){var statearr_53282 = state_53265;
(statearr_53282[(11)] = inst_53249);

return statearr_53282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53265__$1,(12),dchan);
} else {
if((state_val_53266 === (14))){
var inst_53251 = (state_53265[(8)]);
var inst_53256 = cljs.core.apply.call(null,f,inst_53251);
var state_53265__$1 = state_53265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53265__$1,(16),out,inst_53256);
} else {
if((state_val_53266 === (16))){
var inst_53258 = (state_53265[(2)]);
var state_53265__$1 = (function (){var statearr_53283 = state_53265;
(statearr_53283[(12)] = inst_53258);

return statearr_53283;
})();
var statearr_53284_53312 = state_53265__$1;
(statearr_53284_53312[(2)] = null);

(statearr_53284_53312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (10))){
var inst_53233 = (state_53265[(2)]);
var inst_53234 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_53265__$1 = (function (){var statearr_53285 = state_53265;
(statearr_53285[(13)] = inst_53233);

return statearr_53285;
})();
var statearr_53286_53313 = state_53265__$1;
(statearr_53286_53313[(2)] = inst_53234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53266 === (8))){
var inst_53247 = (state_53265[(2)]);
var state_53265__$1 = state_53265;
var statearr_53287_53314 = state_53265__$1;
(statearr_53287_53314[(2)] = inst_53247);

(statearr_53287_53314[(1)] = (5));


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
});})(c__28379__auto___53299,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28356__auto__,c__28379__auto___53299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_53291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53291[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_53291[(1)] = (1));

return statearr_53291;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_53265){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53292){if((e53292 instanceof Object)){
var ex__28360__auto__ = e53292;
var statearr_53293_53315 = state_53265;
(statearr_53293_53315[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53316 = state_53265;
state_53265 = G__53316;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_53265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_53265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___53299,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28381__auto__ = (function (){var statearr_53294 = f__28380__auto__.call(null);
(statearr_53294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___53299);

return statearr_53294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___53299,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args53318 = [];
var len__22773__auto___53376 = arguments.length;
var i__22774__auto___53377 = (0);
while(true){
if((i__22774__auto___53377 < len__22773__auto___53376)){
args53318.push((arguments[i__22774__auto___53377]));

var G__53378 = (i__22774__auto___53377 + (1));
i__22774__auto___53377 = G__53378;
continue;
} else {
}
break;
}

var G__53320 = args53318.length;
switch (G__53320) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53318.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28379__auto___53380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___53380,out){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___53380,out){
return (function (state_53352){
var state_val_53353 = (state_53352[(1)]);
if((state_val_53353 === (7))){
var inst_53331 = (state_53352[(7)]);
var inst_53332 = (state_53352[(8)]);
var inst_53331__$1 = (state_53352[(2)]);
var inst_53332__$1 = cljs.core.nth.call(null,inst_53331__$1,(0),null);
var inst_53333 = cljs.core.nth.call(null,inst_53331__$1,(1),null);
var inst_53334 = (inst_53332__$1 == null);
var state_53352__$1 = (function (){var statearr_53354 = state_53352;
(statearr_53354[(9)] = inst_53333);

(statearr_53354[(7)] = inst_53331__$1);

(statearr_53354[(8)] = inst_53332__$1);

return statearr_53354;
})();
if(cljs.core.truth_(inst_53334)){
var statearr_53355_53381 = state_53352__$1;
(statearr_53355_53381[(1)] = (8));

} else {
var statearr_53356_53382 = state_53352__$1;
(statearr_53356_53382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53353 === (1))){
var inst_53321 = cljs.core.vec.call(null,chs);
var inst_53322 = inst_53321;
var state_53352__$1 = (function (){var statearr_53357 = state_53352;
(statearr_53357[(10)] = inst_53322);

return statearr_53357;
})();
var statearr_53358_53383 = state_53352__$1;
(statearr_53358_53383[(2)] = null);

(statearr_53358_53383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53353 === (4))){
var inst_53322 = (state_53352[(10)]);
var state_53352__$1 = state_53352;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53352__$1,(7),inst_53322);
} else {
if((state_val_53353 === (6))){
var inst_53348 = (state_53352[(2)]);
var state_53352__$1 = state_53352;
var statearr_53359_53384 = state_53352__$1;
(statearr_53359_53384[(2)] = inst_53348);

(statearr_53359_53384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53353 === (3))){
var inst_53350 = (state_53352[(2)]);
var state_53352__$1 = state_53352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53352__$1,inst_53350);
} else {
if((state_val_53353 === (2))){
var inst_53322 = (state_53352[(10)]);
var inst_53324 = cljs.core.count.call(null,inst_53322);
var inst_53325 = (inst_53324 > (0));
var state_53352__$1 = state_53352;
if(cljs.core.truth_(inst_53325)){
var statearr_53361_53385 = state_53352__$1;
(statearr_53361_53385[(1)] = (4));

} else {
var statearr_53362_53386 = state_53352__$1;
(statearr_53362_53386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53353 === (11))){
var inst_53322 = (state_53352[(10)]);
var inst_53341 = (state_53352[(2)]);
var tmp53360 = inst_53322;
var inst_53322__$1 = tmp53360;
var state_53352__$1 = (function (){var statearr_53363 = state_53352;
(statearr_53363[(10)] = inst_53322__$1);

(statearr_53363[(11)] = inst_53341);

return statearr_53363;
})();
var statearr_53364_53387 = state_53352__$1;
(statearr_53364_53387[(2)] = null);

(statearr_53364_53387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53353 === (9))){
var inst_53332 = (state_53352[(8)]);
var state_53352__$1 = state_53352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53352__$1,(11),out,inst_53332);
} else {
if((state_val_53353 === (5))){
var inst_53346 = cljs.core.async.close_BANG_.call(null,out);
var state_53352__$1 = state_53352;
var statearr_53365_53388 = state_53352__$1;
(statearr_53365_53388[(2)] = inst_53346);

(statearr_53365_53388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53353 === (10))){
var inst_53344 = (state_53352[(2)]);
var state_53352__$1 = state_53352;
var statearr_53366_53389 = state_53352__$1;
(statearr_53366_53389[(2)] = inst_53344);

(statearr_53366_53389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53353 === (8))){
var inst_53333 = (state_53352[(9)]);
var inst_53322 = (state_53352[(10)]);
var inst_53331 = (state_53352[(7)]);
var inst_53332 = (state_53352[(8)]);
var inst_53336 = (function (){var cs = inst_53322;
var vec__53327 = inst_53331;
var v = inst_53332;
var c = inst_53333;
return ((function (cs,vec__53327,v,c,inst_53333,inst_53322,inst_53331,inst_53332,state_val_53353,c__28379__auto___53380,out){
return (function (p1__53317_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__53317_SHARP_);
});
;})(cs,vec__53327,v,c,inst_53333,inst_53322,inst_53331,inst_53332,state_val_53353,c__28379__auto___53380,out))
})();
var inst_53337 = cljs.core.filterv.call(null,inst_53336,inst_53322);
var inst_53322__$1 = inst_53337;
var state_53352__$1 = (function (){var statearr_53367 = state_53352;
(statearr_53367[(10)] = inst_53322__$1);

return statearr_53367;
})();
var statearr_53368_53390 = state_53352__$1;
(statearr_53368_53390[(2)] = null);

(statearr_53368_53390[(1)] = (2));


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
});})(c__28379__auto___53380,out))
;
return ((function (switch__28356__auto__,c__28379__auto___53380,out){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_53372 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53372[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_53372[(1)] = (1));

return statearr_53372;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_53352){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53373){if((e53373 instanceof Object)){
var ex__28360__auto__ = e53373;
var statearr_53374_53391 = state_53352;
(statearr_53374_53391[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53392 = state_53352;
state_53352 = G__53392;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_53352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_53352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___53380,out))
})();
var state__28381__auto__ = (function (){var statearr_53375 = f__28380__auto__.call(null);
(statearr_53375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___53380);

return statearr_53375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___53380,out))
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
var args53393 = [];
var len__22773__auto___53442 = arguments.length;
var i__22774__auto___53443 = (0);
while(true){
if((i__22774__auto___53443 < len__22773__auto___53442)){
args53393.push((arguments[i__22774__auto___53443]));

var G__53444 = (i__22774__auto___53443 + (1));
i__22774__auto___53443 = G__53444;
continue;
} else {
}
break;
}

var G__53395 = args53393.length;
switch (G__53395) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53393.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28379__auto___53446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___53446,out){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___53446,out){
return (function (state_53419){
var state_val_53420 = (state_53419[(1)]);
if((state_val_53420 === (7))){
var inst_53401 = (state_53419[(7)]);
var inst_53401__$1 = (state_53419[(2)]);
var inst_53402 = (inst_53401__$1 == null);
var inst_53403 = cljs.core.not.call(null,inst_53402);
var state_53419__$1 = (function (){var statearr_53421 = state_53419;
(statearr_53421[(7)] = inst_53401__$1);

return statearr_53421;
})();
if(inst_53403){
var statearr_53422_53447 = state_53419__$1;
(statearr_53422_53447[(1)] = (8));

} else {
var statearr_53423_53448 = state_53419__$1;
(statearr_53423_53448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (1))){
var inst_53396 = (0);
var state_53419__$1 = (function (){var statearr_53424 = state_53419;
(statearr_53424[(8)] = inst_53396);

return statearr_53424;
})();
var statearr_53425_53449 = state_53419__$1;
(statearr_53425_53449[(2)] = null);

(statearr_53425_53449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (4))){
var state_53419__$1 = state_53419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53419__$1,(7),ch);
} else {
if((state_val_53420 === (6))){
var inst_53414 = (state_53419[(2)]);
var state_53419__$1 = state_53419;
var statearr_53426_53450 = state_53419__$1;
(statearr_53426_53450[(2)] = inst_53414);

(statearr_53426_53450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (3))){
var inst_53416 = (state_53419[(2)]);
var inst_53417 = cljs.core.async.close_BANG_.call(null,out);
var state_53419__$1 = (function (){var statearr_53427 = state_53419;
(statearr_53427[(9)] = inst_53416);

return statearr_53427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53419__$1,inst_53417);
} else {
if((state_val_53420 === (2))){
var inst_53396 = (state_53419[(8)]);
var inst_53398 = (inst_53396 < n);
var state_53419__$1 = state_53419;
if(cljs.core.truth_(inst_53398)){
var statearr_53428_53451 = state_53419__$1;
(statearr_53428_53451[(1)] = (4));

} else {
var statearr_53429_53452 = state_53419__$1;
(statearr_53429_53452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (11))){
var inst_53396 = (state_53419[(8)]);
var inst_53406 = (state_53419[(2)]);
var inst_53407 = (inst_53396 + (1));
var inst_53396__$1 = inst_53407;
var state_53419__$1 = (function (){var statearr_53430 = state_53419;
(statearr_53430[(10)] = inst_53406);

(statearr_53430[(8)] = inst_53396__$1);

return statearr_53430;
})();
var statearr_53431_53453 = state_53419__$1;
(statearr_53431_53453[(2)] = null);

(statearr_53431_53453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (9))){
var state_53419__$1 = state_53419;
var statearr_53432_53454 = state_53419__$1;
(statearr_53432_53454[(2)] = null);

(statearr_53432_53454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (5))){
var state_53419__$1 = state_53419;
var statearr_53433_53455 = state_53419__$1;
(statearr_53433_53455[(2)] = null);

(statearr_53433_53455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (10))){
var inst_53411 = (state_53419[(2)]);
var state_53419__$1 = state_53419;
var statearr_53434_53456 = state_53419__$1;
(statearr_53434_53456[(2)] = inst_53411);

(statearr_53434_53456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53420 === (8))){
var inst_53401 = (state_53419[(7)]);
var state_53419__$1 = state_53419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53419__$1,(11),out,inst_53401);
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
});})(c__28379__auto___53446,out))
;
return ((function (switch__28356__auto__,c__28379__auto___53446,out){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_53438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53438[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_53438[(1)] = (1));

return statearr_53438;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_53419){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53439){if((e53439 instanceof Object)){
var ex__28360__auto__ = e53439;
var statearr_53440_53457 = state_53419;
(statearr_53440_53457[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53458 = state_53419;
state_53419 = G__53458;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_53419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_53419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___53446,out))
})();
var state__28381__auto__ = (function (){var statearr_53441 = f__28380__auto__.call(null);
(statearr_53441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___53446);

return statearr_53441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___53446,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53466 = (function (map_LT_,f,ch,meta53467){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta53467 = meta53467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53468,meta53467__$1){
var self__ = this;
var _53468__$1 = this;
return (new cljs.core.async.t_cljs$core$async53466(self__.map_LT_,self__.f,self__.ch,meta53467__$1));
});

cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53468){
var self__ = this;
var _53468__$1 = this;
return self__.meta53467;
});


cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async53469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53469 = (function (map_LT_,f,ch,meta53467,_,fn1,meta53470){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta53467 = meta53467;
this._ = _;
this.fn1 = fn1;
this.meta53470 = meta53470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53471,meta53470__$1){
var self__ = this;
var _53471__$1 = this;
return (new cljs.core.async.t_cljs$core$async53469(self__.map_LT_,self__.f,self__.ch,self__.meta53467,self__._,self__.fn1,meta53470__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53471){
var self__ = this;
var _53471__$1 = this;
return self__.meta53470;
});})(___$1))
;


cljs.core.async.t_cljs$core$async53469.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async53469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53469.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53459_SHARP_){
return f1.call(null,(((p1__53459_SHARP_ == null))?null:self__.f.call(null,p1__53459_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53469.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53467","meta53467",1626854290,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53466","cljs.core.async/t_cljs$core$async53466",1984377817,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53470","meta53470",-179551800,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53469";

cljs.core.async.t_cljs$core$async53469.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async53469");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async53469 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53469(map_LT___$1,f__$1,ch__$1,meta53467__$1,___$2,fn1__$1,meta53470){
return (new cljs.core.async.t_cljs$core$async53469(map_LT___$1,f__$1,ch__$1,meta53467__$1,___$2,fn1__$1,meta53470));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53469(self__.map_LT_,self__.f,self__.ch,self__.meta53467,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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


cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53467","meta53467",1626854290,null)], null);
});

cljs.core.async.t_cljs$core$async53466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53466";

cljs.core.async.t_cljs$core$async53466.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async53466");
});

cljs.core.async.__GT_t_cljs$core$async53466 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53466(map_LT___$1,f__$1,ch__$1,meta53467){
return (new cljs.core.async.t_cljs$core$async53466(map_LT___$1,f__$1,ch__$1,meta53467));
});

}

return (new cljs.core.async.t_cljs$core$async53466(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53475 = (function (map_GT_,f,ch,meta53476){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta53476 = meta53476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53477,meta53476__$1){
var self__ = this;
var _53477__$1 = this;
return (new cljs.core.async.t_cljs$core$async53475(self__.map_GT_,self__.f,self__.ch,meta53476__$1));
});

cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53477){
var self__ = this;
var _53477__$1 = this;
return self__.meta53476;
});


cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async53475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53476","meta53476",-1739426453,null)], null);
});

cljs.core.async.t_cljs$core$async53475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53475";

cljs.core.async.t_cljs$core$async53475.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async53475");
});

cljs.core.async.__GT_t_cljs$core$async53475 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53475(map_GT___$1,f__$1,ch__$1,meta53476){
return (new cljs.core.async.t_cljs$core$async53475(map_GT___$1,f__$1,ch__$1,meta53476));
});

}

return (new cljs.core.async.t_cljs$core$async53475(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async53481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53481 = (function (filter_GT_,p,ch,meta53482){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta53482 = meta53482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53483,meta53482__$1){
var self__ = this;
var _53483__$1 = this;
return (new cljs.core.async.t_cljs$core$async53481(self__.filter_GT_,self__.p,self__.ch,meta53482__$1));
});

cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53483){
var self__ = this;
var _53483__$1 = this;
return self__.meta53482;
});


cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53482","meta53482",-639545463,null)], null);
});

cljs.core.async.t_cljs$core$async53481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53481";

cljs.core.async.t_cljs$core$async53481.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async53481");
});

cljs.core.async.__GT_t_cljs$core$async53481 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53481(filter_GT___$1,p__$1,ch__$1,meta53482){
return (new cljs.core.async.t_cljs$core$async53481(filter_GT___$1,p__$1,ch__$1,meta53482));
});

}

return (new cljs.core.async.t_cljs$core$async53481(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args53484 = [];
var len__22773__auto___53528 = arguments.length;
var i__22774__auto___53529 = (0);
while(true){
if((i__22774__auto___53529 < len__22773__auto___53528)){
args53484.push((arguments[i__22774__auto___53529]));

var G__53530 = (i__22774__auto___53529 + (1));
i__22774__auto___53529 = G__53530;
continue;
} else {
}
break;
}

var G__53486 = args53484.length;
switch (G__53486) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53484.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28379__auto___53532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___53532,out){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___53532,out){
return (function (state_53507){
var state_val_53508 = (state_53507[(1)]);
if((state_val_53508 === (7))){
var inst_53503 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
var statearr_53509_53533 = state_53507__$1;
(statearr_53509_53533[(2)] = inst_53503);

(statearr_53509_53533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (1))){
var state_53507__$1 = state_53507;
var statearr_53510_53534 = state_53507__$1;
(statearr_53510_53534[(2)] = null);

(statearr_53510_53534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (4))){
var inst_53489 = (state_53507[(7)]);
var inst_53489__$1 = (state_53507[(2)]);
var inst_53490 = (inst_53489__$1 == null);
var state_53507__$1 = (function (){var statearr_53511 = state_53507;
(statearr_53511[(7)] = inst_53489__$1);

return statearr_53511;
})();
if(cljs.core.truth_(inst_53490)){
var statearr_53512_53535 = state_53507__$1;
(statearr_53512_53535[(1)] = (5));

} else {
var statearr_53513_53536 = state_53507__$1;
(statearr_53513_53536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (6))){
var inst_53489 = (state_53507[(7)]);
var inst_53494 = p.call(null,inst_53489);
var state_53507__$1 = state_53507;
if(cljs.core.truth_(inst_53494)){
var statearr_53514_53537 = state_53507__$1;
(statearr_53514_53537[(1)] = (8));

} else {
var statearr_53515_53538 = state_53507__$1;
(statearr_53515_53538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (3))){
var inst_53505 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53507__$1,inst_53505);
} else {
if((state_val_53508 === (2))){
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53507__$1,(4),ch);
} else {
if((state_val_53508 === (11))){
var inst_53497 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
var statearr_53516_53539 = state_53507__$1;
(statearr_53516_53539[(2)] = inst_53497);

(statearr_53516_53539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (9))){
var state_53507__$1 = state_53507;
var statearr_53517_53540 = state_53507__$1;
(statearr_53517_53540[(2)] = null);

(statearr_53517_53540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (5))){
var inst_53492 = cljs.core.async.close_BANG_.call(null,out);
var state_53507__$1 = state_53507;
var statearr_53518_53541 = state_53507__$1;
(statearr_53518_53541[(2)] = inst_53492);

(statearr_53518_53541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (10))){
var inst_53500 = (state_53507[(2)]);
var state_53507__$1 = (function (){var statearr_53519 = state_53507;
(statearr_53519[(8)] = inst_53500);

return statearr_53519;
})();
var statearr_53520_53542 = state_53507__$1;
(statearr_53520_53542[(2)] = null);

(statearr_53520_53542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (8))){
var inst_53489 = (state_53507[(7)]);
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53507__$1,(11),out,inst_53489);
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
});})(c__28379__auto___53532,out))
;
return ((function (switch__28356__auto__,c__28379__auto___53532,out){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_53524 = [null,null,null,null,null,null,null,null,null];
(statearr_53524[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_53524[(1)] = (1));

return statearr_53524;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_53507){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53525){if((e53525 instanceof Object)){
var ex__28360__auto__ = e53525;
var statearr_53526_53543 = state_53507;
(statearr_53526_53543[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53544 = state_53507;
state_53507 = G__53544;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_53507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_53507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___53532,out))
})();
var state__28381__auto__ = (function (){var statearr_53527 = f__28380__auto__.call(null);
(statearr_53527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___53532);

return statearr_53527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___53532,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args53545 = [];
var len__22773__auto___53548 = arguments.length;
var i__22774__auto___53549 = (0);
while(true){
if((i__22774__auto___53549 < len__22773__auto___53548)){
args53545.push((arguments[i__22774__auto___53549]));

var G__53550 = (i__22774__auto___53549 + (1));
i__22774__auto___53549 = G__53550;
continue;
} else {
}
break;
}

var G__53547 = args53545.length;
switch (G__53547) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53545.length)].join('')));

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
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_53717){
var state_val_53718 = (state_53717[(1)]);
if((state_val_53718 === (7))){
var inst_53713 = (state_53717[(2)]);
var state_53717__$1 = state_53717;
var statearr_53719_53760 = state_53717__$1;
(statearr_53719_53760[(2)] = inst_53713);

(statearr_53719_53760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (20))){
var inst_53683 = (state_53717[(7)]);
var inst_53694 = (state_53717[(2)]);
var inst_53695 = cljs.core.next.call(null,inst_53683);
var inst_53669 = inst_53695;
var inst_53670 = null;
var inst_53671 = (0);
var inst_53672 = (0);
var state_53717__$1 = (function (){var statearr_53720 = state_53717;
(statearr_53720[(8)] = inst_53694);

(statearr_53720[(9)] = inst_53671);

(statearr_53720[(10)] = inst_53669);

(statearr_53720[(11)] = inst_53670);

(statearr_53720[(12)] = inst_53672);

return statearr_53720;
})();
var statearr_53721_53761 = state_53717__$1;
(statearr_53721_53761[(2)] = null);

(statearr_53721_53761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (1))){
var state_53717__$1 = state_53717;
var statearr_53722_53762 = state_53717__$1;
(statearr_53722_53762[(2)] = null);

(statearr_53722_53762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (4))){
var inst_53658 = (state_53717[(13)]);
var inst_53658__$1 = (state_53717[(2)]);
var inst_53659 = (inst_53658__$1 == null);
var state_53717__$1 = (function (){var statearr_53723 = state_53717;
(statearr_53723[(13)] = inst_53658__$1);

return statearr_53723;
})();
if(cljs.core.truth_(inst_53659)){
var statearr_53724_53763 = state_53717__$1;
(statearr_53724_53763[(1)] = (5));

} else {
var statearr_53725_53764 = state_53717__$1;
(statearr_53725_53764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (15))){
var state_53717__$1 = state_53717;
var statearr_53729_53765 = state_53717__$1;
(statearr_53729_53765[(2)] = null);

(statearr_53729_53765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (21))){
var state_53717__$1 = state_53717;
var statearr_53730_53766 = state_53717__$1;
(statearr_53730_53766[(2)] = null);

(statearr_53730_53766[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (13))){
var inst_53671 = (state_53717[(9)]);
var inst_53669 = (state_53717[(10)]);
var inst_53670 = (state_53717[(11)]);
var inst_53672 = (state_53717[(12)]);
var inst_53679 = (state_53717[(2)]);
var inst_53680 = (inst_53672 + (1));
var tmp53726 = inst_53671;
var tmp53727 = inst_53669;
var tmp53728 = inst_53670;
var inst_53669__$1 = tmp53727;
var inst_53670__$1 = tmp53728;
var inst_53671__$1 = tmp53726;
var inst_53672__$1 = inst_53680;
var state_53717__$1 = (function (){var statearr_53731 = state_53717;
(statearr_53731[(14)] = inst_53679);

(statearr_53731[(9)] = inst_53671__$1);

(statearr_53731[(10)] = inst_53669__$1);

(statearr_53731[(11)] = inst_53670__$1);

(statearr_53731[(12)] = inst_53672__$1);

return statearr_53731;
})();
var statearr_53732_53767 = state_53717__$1;
(statearr_53732_53767[(2)] = null);

(statearr_53732_53767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (22))){
var state_53717__$1 = state_53717;
var statearr_53733_53768 = state_53717__$1;
(statearr_53733_53768[(2)] = null);

(statearr_53733_53768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (6))){
var inst_53658 = (state_53717[(13)]);
var inst_53667 = f.call(null,inst_53658);
var inst_53668 = cljs.core.seq.call(null,inst_53667);
var inst_53669 = inst_53668;
var inst_53670 = null;
var inst_53671 = (0);
var inst_53672 = (0);
var state_53717__$1 = (function (){var statearr_53734 = state_53717;
(statearr_53734[(9)] = inst_53671);

(statearr_53734[(10)] = inst_53669);

(statearr_53734[(11)] = inst_53670);

(statearr_53734[(12)] = inst_53672);

return statearr_53734;
})();
var statearr_53735_53769 = state_53717__$1;
(statearr_53735_53769[(2)] = null);

(statearr_53735_53769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (17))){
var inst_53683 = (state_53717[(7)]);
var inst_53687 = cljs.core.chunk_first.call(null,inst_53683);
var inst_53688 = cljs.core.chunk_rest.call(null,inst_53683);
var inst_53689 = cljs.core.count.call(null,inst_53687);
var inst_53669 = inst_53688;
var inst_53670 = inst_53687;
var inst_53671 = inst_53689;
var inst_53672 = (0);
var state_53717__$1 = (function (){var statearr_53736 = state_53717;
(statearr_53736[(9)] = inst_53671);

(statearr_53736[(10)] = inst_53669);

(statearr_53736[(11)] = inst_53670);

(statearr_53736[(12)] = inst_53672);

return statearr_53736;
})();
var statearr_53737_53770 = state_53717__$1;
(statearr_53737_53770[(2)] = null);

(statearr_53737_53770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (3))){
var inst_53715 = (state_53717[(2)]);
var state_53717__$1 = state_53717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53717__$1,inst_53715);
} else {
if((state_val_53718 === (12))){
var inst_53703 = (state_53717[(2)]);
var state_53717__$1 = state_53717;
var statearr_53738_53771 = state_53717__$1;
(statearr_53738_53771[(2)] = inst_53703);

(statearr_53738_53771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (2))){
var state_53717__$1 = state_53717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53717__$1,(4),in$);
} else {
if((state_val_53718 === (23))){
var inst_53711 = (state_53717[(2)]);
var state_53717__$1 = state_53717;
var statearr_53739_53772 = state_53717__$1;
(statearr_53739_53772[(2)] = inst_53711);

(statearr_53739_53772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (19))){
var inst_53698 = (state_53717[(2)]);
var state_53717__$1 = state_53717;
var statearr_53740_53773 = state_53717__$1;
(statearr_53740_53773[(2)] = inst_53698);

(statearr_53740_53773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (11))){
var inst_53683 = (state_53717[(7)]);
var inst_53669 = (state_53717[(10)]);
var inst_53683__$1 = cljs.core.seq.call(null,inst_53669);
var state_53717__$1 = (function (){var statearr_53741 = state_53717;
(statearr_53741[(7)] = inst_53683__$1);

return statearr_53741;
})();
if(inst_53683__$1){
var statearr_53742_53774 = state_53717__$1;
(statearr_53742_53774[(1)] = (14));

} else {
var statearr_53743_53775 = state_53717__$1;
(statearr_53743_53775[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (9))){
var inst_53705 = (state_53717[(2)]);
var inst_53706 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_53717__$1 = (function (){var statearr_53744 = state_53717;
(statearr_53744[(15)] = inst_53705);

return statearr_53744;
})();
if(cljs.core.truth_(inst_53706)){
var statearr_53745_53776 = state_53717__$1;
(statearr_53745_53776[(1)] = (21));

} else {
var statearr_53746_53777 = state_53717__$1;
(statearr_53746_53777[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (5))){
var inst_53661 = cljs.core.async.close_BANG_.call(null,out);
var state_53717__$1 = state_53717;
var statearr_53747_53778 = state_53717__$1;
(statearr_53747_53778[(2)] = inst_53661);

(statearr_53747_53778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (14))){
var inst_53683 = (state_53717[(7)]);
var inst_53685 = cljs.core.chunked_seq_QMARK_.call(null,inst_53683);
var state_53717__$1 = state_53717;
if(inst_53685){
var statearr_53748_53779 = state_53717__$1;
(statearr_53748_53779[(1)] = (17));

} else {
var statearr_53749_53780 = state_53717__$1;
(statearr_53749_53780[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (16))){
var inst_53701 = (state_53717[(2)]);
var state_53717__$1 = state_53717;
var statearr_53750_53781 = state_53717__$1;
(statearr_53750_53781[(2)] = inst_53701);

(statearr_53750_53781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53718 === (10))){
var inst_53670 = (state_53717[(11)]);
var inst_53672 = (state_53717[(12)]);
var inst_53677 = cljs.core._nth.call(null,inst_53670,inst_53672);
var state_53717__$1 = state_53717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53717__$1,(13),out,inst_53677);
} else {
if((state_val_53718 === (18))){
var inst_53683 = (state_53717[(7)]);
var inst_53692 = cljs.core.first.call(null,inst_53683);
var state_53717__$1 = state_53717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53717__$1,(20),out,inst_53692);
} else {
if((state_val_53718 === (8))){
var inst_53671 = (state_53717[(9)]);
var inst_53672 = (state_53717[(12)]);
var inst_53674 = (inst_53672 < inst_53671);
var inst_53675 = inst_53674;
var state_53717__$1 = state_53717;
if(cljs.core.truth_(inst_53675)){
var statearr_53751_53782 = state_53717__$1;
(statearr_53751_53782[(1)] = (10));

} else {
var statearr_53752_53783 = state_53717__$1;
(statearr_53752_53783[(1)] = (11));

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
});})(c__28379__auto__))
;
return ((function (switch__28356__auto__,c__28379__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28357__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28357__auto____0 = (function (){
var statearr_53756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53756[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28357__auto__);

(statearr_53756[(1)] = (1));

return statearr_53756;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28357__auto____1 = (function (state_53717){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53757){if((e53757 instanceof Object)){
var ex__28360__auto__ = e53757;
var statearr_53758_53784 = state_53717;
(statearr_53758_53784[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53785 = state_53717;
state_53717 = G__53785;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28357__auto__ = function(state_53717){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28357__auto____1.call(this,state_53717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28357__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28357__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_53759 = f__28380__auto__.call(null);
(statearr_53759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_53759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args53786 = [];
var len__22773__auto___53789 = arguments.length;
var i__22774__auto___53790 = (0);
while(true){
if((i__22774__auto___53790 < len__22773__auto___53789)){
args53786.push((arguments[i__22774__auto___53790]));

var G__53791 = (i__22774__auto___53790 + (1));
i__22774__auto___53790 = G__53791;
continue;
} else {
}
break;
}

var G__53788 = args53786.length;
switch (G__53788) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53786.length)].join('')));

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
var args53793 = [];
var len__22773__auto___53796 = arguments.length;
var i__22774__auto___53797 = (0);
while(true){
if((i__22774__auto___53797 < len__22773__auto___53796)){
args53793.push((arguments[i__22774__auto___53797]));

var G__53798 = (i__22774__auto___53797 + (1));
i__22774__auto___53797 = G__53798;
continue;
} else {
}
break;
}

var G__53795 = args53793.length;
switch (G__53795) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53793.length)].join('')));

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
var args53800 = [];
var len__22773__auto___53851 = arguments.length;
var i__22774__auto___53852 = (0);
while(true){
if((i__22774__auto___53852 < len__22773__auto___53851)){
args53800.push((arguments[i__22774__auto___53852]));

var G__53853 = (i__22774__auto___53852 + (1));
i__22774__auto___53852 = G__53853;
continue;
} else {
}
break;
}

var G__53802 = args53800.length;
switch (G__53802) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53800.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28379__auto___53855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___53855,out){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___53855,out){
return (function (state_53826){
var state_val_53827 = (state_53826[(1)]);
if((state_val_53827 === (7))){
var inst_53821 = (state_53826[(2)]);
var state_53826__$1 = state_53826;
var statearr_53828_53856 = state_53826__$1;
(statearr_53828_53856[(2)] = inst_53821);

(statearr_53828_53856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53827 === (1))){
var inst_53803 = null;
var state_53826__$1 = (function (){var statearr_53829 = state_53826;
(statearr_53829[(7)] = inst_53803);

return statearr_53829;
})();
var statearr_53830_53857 = state_53826__$1;
(statearr_53830_53857[(2)] = null);

(statearr_53830_53857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53827 === (4))){
var inst_53806 = (state_53826[(8)]);
var inst_53806__$1 = (state_53826[(2)]);
var inst_53807 = (inst_53806__$1 == null);
var inst_53808 = cljs.core.not.call(null,inst_53807);
var state_53826__$1 = (function (){var statearr_53831 = state_53826;
(statearr_53831[(8)] = inst_53806__$1);

return statearr_53831;
})();
if(inst_53808){
var statearr_53832_53858 = state_53826__$1;
(statearr_53832_53858[(1)] = (5));

} else {
var statearr_53833_53859 = state_53826__$1;
(statearr_53833_53859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53827 === (6))){
var state_53826__$1 = state_53826;
var statearr_53834_53860 = state_53826__$1;
(statearr_53834_53860[(2)] = null);

(statearr_53834_53860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53827 === (3))){
var inst_53823 = (state_53826[(2)]);
var inst_53824 = cljs.core.async.close_BANG_.call(null,out);
var state_53826__$1 = (function (){var statearr_53835 = state_53826;
(statearr_53835[(9)] = inst_53823);

return statearr_53835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53826__$1,inst_53824);
} else {
if((state_val_53827 === (2))){
var state_53826__$1 = state_53826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53826__$1,(4),ch);
} else {
if((state_val_53827 === (11))){
var inst_53806 = (state_53826[(8)]);
var inst_53815 = (state_53826[(2)]);
var inst_53803 = inst_53806;
var state_53826__$1 = (function (){var statearr_53836 = state_53826;
(statearr_53836[(7)] = inst_53803);

(statearr_53836[(10)] = inst_53815);

return statearr_53836;
})();
var statearr_53837_53861 = state_53826__$1;
(statearr_53837_53861[(2)] = null);

(statearr_53837_53861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53827 === (9))){
var inst_53806 = (state_53826[(8)]);
var state_53826__$1 = state_53826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53826__$1,(11),out,inst_53806);
} else {
if((state_val_53827 === (5))){
var inst_53803 = (state_53826[(7)]);
var inst_53806 = (state_53826[(8)]);
var inst_53810 = cljs.core._EQ_.call(null,inst_53806,inst_53803);
var state_53826__$1 = state_53826;
if(inst_53810){
var statearr_53839_53862 = state_53826__$1;
(statearr_53839_53862[(1)] = (8));

} else {
var statearr_53840_53863 = state_53826__$1;
(statearr_53840_53863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53827 === (10))){
var inst_53818 = (state_53826[(2)]);
var state_53826__$1 = state_53826;
var statearr_53841_53864 = state_53826__$1;
(statearr_53841_53864[(2)] = inst_53818);

(statearr_53841_53864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53827 === (8))){
var inst_53803 = (state_53826[(7)]);
var tmp53838 = inst_53803;
var inst_53803__$1 = tmp53838;
var state_53826__$1 = (function (){var statearr_53842 = state_53826;
(statearr_53842[(7)] = inst_53803__$1);

return statearr_53842;
})();
var statearr_53843_53865 = state_53826__$1;
(statearr_53843_53865[(2)] = null);

(statearr_53843_53865[(1)] = (2));


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
});})(c__28379__auto___53855,out))
;
return ((function (switch__28356__auto__,c__28379__auto___53855,out){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_53847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53847[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_53847[(1)] = (1));

return statearr_53847;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_53826){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53848){if((e53848 instanceof Object)){
var ex__28360__auto__ = e53848;
var statearr_53849_53866 = state_53826;
(statearr_53849_53866[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53867 = state_53826;
state_53826 = G__53867;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_53826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_53826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___53855,out))
})();
var state__28381__auto__ = (function (){var statearr_53850 = f__28380__auto__.call(null);
(statearr_53850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___53855);

return statearr_53850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___53855,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args53868 = [];
var len__22773__auto___53938 = arguments.length;
var i__22774__auto___53939 = (0);
while(true){
if((i__22774__auto___53939 < len__22773__auto___53938)){
args53868.push((arguments[i__22774__auto___53939]));

var G__53940 = (i__22774__auto___53939 + (1));
i__22774__auto___53939 = G__53940;
continue;
} else {
}
break;
}

var G__53870 = args53868.length;
switch (G__53870) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53868.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28379__auto___53942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___53942,out){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___53942,out){
return (function (state_53908){
var state_val_53909 = (state_53908[(1)]);
if((state_val_53909 === (7))){
var inst_53904 = (state_53908[(2)]);
var state_53908__$1 = state_53908;
var statearr_53910_53943 = state_53908__$1;
(statearr_53910_53943[(2)] = inst_53904);

(statearr_53910_53943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (1))){
var inst_53871 = (new Array(n));
var inst_53872 = inst_53871;
var inst_53873 = (0);
var state_53908__$1 = (function (){var statearr_53911 = state_53908;
(statearr_53911[(7)] = inst_53873);

(statearr_53911[(8)] = inst_53872);

return statearr_53911;
})();
var statearr_53912_53944 = state_53908__$1;
(statearr_53912_53944[(2)] = null);

(statearr_53912_53944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (4))){
var inst_53876 = (state_53908[(9)]);
var inst_53876__$1 = (state_53908[(2)]);
var inst_53877 = (inst_53876__$1 == null);
var inst_53878 = cljs.core.not.call(null,inst_53877);
var state_53908__$1 = (function (){var statearr_53913 = state_53908;
(statearr_53913[(9)] = inst_53876__$1);

return statearr_53913;
})();
if(inst_53878){
var statearr_53914_53945 = state_53908__$1;
(statearr_53914_53945[(1)] = (5));

} else {
var statearr_53915_53946 = state_53908__$1;
(statearr_53915_53946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (15))){
var inst_53898 = (state_53908[(2)]);
var state_53908__$1 = state_53908;
var statearr_53916_53947 = state_53908__$1;
(statearr_53916_53947[(2)] = inst_53898);

(statearr_53916_53947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (13))){
var state_53908__$1 = state_53908;
var statearr_53917_53948 = state_53908__$1;
(statearr_53917_53948[(2)] = null);

(statearr_53917_53948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (6))){
var inst_53873 = (state_53908[(7)]);
var inst_53894 = (inst_53873 > (0));
var state_53908__$1 = state_53908;
if(cljs.core.truth_(inst_53894)){
var statearr_53918_53949 = state_53908__$1;
(statearr_53918_53949[(1)] = (12));

} else {
var statearr_53919_53950 = state_53908__$1;
(statearr_53919_53950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (3))){
var inst_53906 = (state_53908[(2)]);
var state_53908__$1 = state_53908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53908__$1,inst_53906);
} else {
if((state_val_53909 === (12))){
var inst_53872 = (state_53908[(8)]);
var inst_53896 = cljs.core.vec.call(null,inst_53872);
var state_53908__$1 = state_53908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53908__$1,(15),out,inst_53896);
} else {
if((state_val_53909 === (2))){
var state_53908__$1 = state_53908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53908__$1,(4),ch);
} else {
if((state_val_53909 === (11))){
var inst_53888 = (state_53908[(2)]);
var inst_53889 = (new Array(n));
var inst_53872 = inst_53889;
var inst_53873 = (0);
var state_53908__$1 = (function (){var statearr_53920 = state_53908;
(statearr_53920[(10)] = inst_53888);

(statearr_53920[(7)] = inst_53873);

(statearr_53920[(8)] = inst_53872);

return statearr_53920;
})();
var statearr_53921_53951 = state_53908__$1;
(statearr_53921_53951[(2)] = null);

(statearr_53921_53951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (9))){
var inst_53872 = (state_53908[(8)]);
var inst_53886 = cljs.core.vec.call(null,inst_53872);
var state_53908__$1 = state_53908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53908__$1,(11),out,inst_53886);
} else {
if((state_val_53909 === (5))){
var inst_53876 = (state_53908[(9)]);
var inst_53881 = (state_53908[(11)]);
var inst_53873 = (state_53908[(7)]);
var inst_53872 = (state_53908[(8)]);
var inst_53880 = (inst_53872[inst_53873] = inst_53876);
var inst_53881__$1 = (inst_53873 + (1));
var inst_53882 = (inst_53881__$1 < n);
var state_53908__$1 = (function (){var statearr_53922 = state_53908;
(statearr_53922[(12)] = inst_53880);

(statearr_53922[(11)] = inst_53881__$1);

return statearr_53922;
})();
if(cljs.core.truth_(inst_53882)){
var statearr_53923_53952 = state_53908__$1;
(statearr_53923_53952[(1)] = (8));

} else {
var statearr_53924_53953 = state_53908__$1;
(statearr_53924_53953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (14))){
var inst_53901 = (state_53908[(2)]);
var inst_53902 = cljs.core.async.close_BANG_.call(null,out);
var state_53908__$1 = (function (){var statearr_53926 = state_53908;
(statearr_53926[(13)] = inst_53901);

return statearr_53926;
})();
var statearr_53927_53954 = state_53908__$1;
(statearr_53927_53954[(2)] = inst_53902);

(statearr_53927_53954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (10))){
var inst_53892 = (state_53908[(2)]);
var state_53908__$1 = state_53908;
var statearr_53928_53955 = state_53908__$1;
(statearr_53928_53955[(2)] = inst_53892);

(statearr_53928_53955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53909 === (8))){
var inst_53881 = (state_53908[(11)]);
var inst_53872 = (state_53908[(8)]);
var tmp53925 = inst_53872;
var inst_53872__$1 = tmp53925;
var inst_53873 = inst_53881;
var state_53908__$1 = (function (){var statearr_53929 = state_53908;
(statearr_53929[(7)] = inst_53873);

(statearr_53929[(8)] = inst_53872__$1);

return statearr_53929;
})();
var statearr_53930_53956 = state_53908__$1;
(statearr_53930_53956[(2)] = null);

(statearr_53930_53956[(1)] = (2));


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
});})(c__28379__auto___53942,out))
;
return ((function (switch__28356__auto__,c__28379__auto___53942,out){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_53934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53934[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_53934[(1)] = (1));

return statearr_53934;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_53908){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_53908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e53935){if((e53935 instanceof Object)){
var ex__28360__auto__ = e53935;
var statearr_53936_53957 = state_53908;
(statearr_53936_53957[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53958 = state_53908;
state_53908 = G__53958;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_53908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_53908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___53942,out))
})();
var state__28381__auto__ = (function (){var statearr_53937 = f__28380__auto__.call(null);
(statearr_53937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___53942);

return statearr_53937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___53942,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args53959 = [];
var len__22773__auto___54033 = arguments.length;
var i__22774__auto___54034 = (0);
while(true){
if((i__22774__auto___54034 < len__22773__auto___54033)){
args53959.push((arguments[i__22774__auto___54034]));

var G__54035 = (i__22774__auto___54034 + (1));
i__22774__auto___54034 = G__54035;
continue;
} else {
}
break;
}

var G__53961 = args53959.length;
switch (G__53961) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53959.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28379__auto___54037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___54037,out){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___54037,out){
return (function (state_54003){
var state_val_54004 = (state_54003[(1)]);
if((state_val_54004 === (7))){
var inst_53999 = (state_54003[(2)]);
var state_54003__$1 = state_54003;
var statearr_54005_54038 = state_54003__$1;
(statearr_54005_54038[(2)] = inst_53999);

(statearr_54005_54038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (1))){
var inst_53962 = [];
var inst_53963 = inst_53962;
var inst_53964 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54003__$1 = (function (){var statearr_54006 = state_54003;
(statearr_54006[(7)] = inst_53964);

(statearr_54006[(8)] = inst_53963);

return statearr_54006;
})();
var statearr_54007_54039 = state_54003__$1;
(statearr_54007_54039[(2)] = null);

(statearr_54007_54039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (4))){
var inst_53967 = (state_54003[(9)]);
var inst_53967__$1 = (state_54003[(2)]);
var inst_53968 = (inst_53967__$1 == null);
var inst_53969 = cljs.core.not.call(null,inst_53968);
var state_54003__$1 = (function (){var statearr_54008 = state_54003;
(statearr_54008[(9)] = inst_53967__$1);

return statearr_54008;
})();
if(inst_53969){
var statearr_54009_54040 = state_54003__$1;
(statearr_54009_54040[(1)] = (5));

} else {
var statearr_54010_54041 = state_54003__$1;
(statearr_54010_54041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (15))){
var inst_53993 = (state_54003[(2)]);
var state_54003__$1 = state_54003;
var statearr_54011_54042 = state_54003__$1;
(statearr_54011_54042[(2)] = inst_53993);

(statearr_54011_54042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (13))){
var state_54003__$1 = state_54003;
var statearr_54012_54043 = state_54003__$1;
(statearr_54012_54043[(2)] = null);

(statearr_54012_54043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (6))){
var inst_53963 = (state_54003[(8)]);
var inst_53988 = inst_53963.length;
var inst_53989 = (inst_53988 > (0));
var state_54003__$1 = state_54003;
if(cljs.core.truth_(inst_53989)){
var statearr_54013_54044 = state_54003__$1;
(statearr_54013_54044[(1)] = (12));

} else {
var statearr_54014_54045 = state_54003__$1;
(statearr_54014_54045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (3))){
var inst_54001 = (state_54003[(2)]);
var state_54003__$1 = state_54003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54003__$1,inst_54001);
} else {
if((state_val_54004 === (12))){
var inst_53963 = (state_54003[(8)]);
var inst_53991 = cljs.core.vec.call(null,inst_53963);
var state_54003__$1 = state_54003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54003__$1,(15),out,inst_53991);
} else {
if((state_val_54004 === (2))){
var state_54003__$1 = state_54003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54003__$1,(4),ch);
} else {
if((state_val_54004 === (11))){
var inst_53971 = (state_54003[(10)]);
var inst_53967 = (state_54003[(9)]);
var inst_53981 = (state_54003[(2)]);
var inst_53982 = [];
var inst_53983 = inst_53982.push(inst_53967);
var inst_53963 = inst_53982;
var inst_53964 = inst_53971;
var state_54003__$1 = (function (){var statearr_54015 = state_54003;
(statearr_54015[(7)] = inst_53964);

(statearr_54015[(8)] = inst_53963);

(statearr_54015[(11)] = inst_53981);

(statearr_54015[(12)] = inst_53983);

return statearr_54015;
})();
var statearr_54016_54046 = state_54003__$1;
(statearr_54016_54046[(2)] = null);

(statearr_54016_54046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (9))){
var inst_53963 = (state_54003[(8)]);
var inst_53979 = cljs.core.vec.call(null,inst_53963);
var state_54003__$1 = state_54003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54003__$1,(11),out,inst_53979);
} else {
if((state_val_54004 === (5))){
var inst_53964 = (state_54003[(7)]);
var inst_53971 = (state_54003[(10)]);
var inst_53967 = (state_54003[(9)]);
var inst_53971__$1 = f.call(null,inst_53967);
var inst_53972 = cljs.core._EQ_.call(null,inst_53971__$1,inst_53964);
var inst_53973 = cljs.core.keyword_identical_QMARK_.call(null,inst_53964,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53974 = (inst_53972) || (inst_53973);
var state_54003__$1 = (function (){var statearr_54017 = state_54003;
(statearr_54017[(10)] = inst_53971__$1);

return statearr_54017;
})();
if(cljs.core.truth_(inst_53974)){
var statearr_54018_54047 = state_54003__$1;
(statearr_54018_54047[(1)] = (8));

} else {
var statearr_54019_54048 = state_54003__$1;
(statearr_54019_54048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (14))){
var inst_53996 = (state_54003[(2)]);
var inst_53997 = cljs.core.async.close_BANG_.call(null,out);
var state_54003__$1 = (function (){var statearr_54021 = state_54003;
(statearr_54021[(13)] = inst_53996);

return statearr_54021;
})();
var statearr_54022_54049 = state_54003__$1;
(statearr_54022_54049[(2)] = inst_53997);

(statearr_54022_54049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (10))){
var inst_53986 = (state_54003[(2)]);
var state_54003__$1 = state_54003;
var statearr_54023_54050 = state_54003__$1;
(statearr_54023_54050[(2)] = inst_53986);

(statearr_54023_54050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (8))){
var inst_53963 = (state_54003[(8)]);
var inst_53971 = (state_54003[(10)]);
var inst_53967 = (state_54003[(9)]);
var inst_53976 = inst_53963.push(inst_53967);
var tmp54020 = inst_53963;
var inst_53963__$1 = tmp54020;
var inst_53964 = inst_53971;
var state_54003__$1 = (function (){var statearr_54024 = state_54003;
(statearr_54024[(7)] = inst_53964);

(statearr_54024[(8)] = inst_53963__$1);

(statearr_54024[(14)] = inst_53976);

return statearr_54024;
})();
var statearr_54025_54051 = state_54003__$1;
(statearr_54025_54051[(2)] = null);

(statearr_54025_54051[(1)] = (2));


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
});})(c__28379__auto___54037,out))
;
return ((function (switch__28356__auto__,c__28379__auto___54037,out){
return (function() {
var cljs$core$async$state_machine__28357__auto__ = null;
var cljs$core$async$state_machine__28357__auto____0 = (function (){
var statearr_54029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54029[(0)] = cljs$core$async$state_machine__28357__auto__);

(statearr_54029[(1)] = (1));

return statearr_54029;
});
var cljs$core$async$state_machine__28357__auto____1 = (function (state_54003){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_54003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e54030){if((e54030 instanceof Object)){
var ex__28360__auto__ = e54030;
var statearr_54031_54052 = state_54003;
(statearr_54031_54052[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54053 = state_54003;
state_54003 = G__54053;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cljs$core$async$state_machine__28357__auto__ = function(state_54003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28357__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28357__auto____1.call(this,state_54003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28357__auto____0;
cljs$core$async$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28357__auto____1;
return cljs$core$async$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___54037,out))
})();
var state__28381__auto__ = (function (){var statearr_54032 = f__28380__auto__.call(null);
(statearr_54032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___54037);

return statearr_54032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___54037,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471999070813