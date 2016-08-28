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
var args24324 = [];
var len__22773__auto___24330 = arguments.length;
var i__22774__auto___24331 = (0);
while(true){
if((i__22774__auto___24331 < len__22773__auto___24330)){
args24324.push((arguments[i__22774__auto___24331]));

var G__24332 = (i__22774__auto___24331 + (1));
i__22774__auto___24331 = G__24332;
continue;
} else {
}
break;
}

var G__24326 = args24324.length;
switch (G__24326) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24324.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24327 = (function (f,blockable,meta24328){
this.f = f;
this.blockable = blockable;
this.meta24328 = meta24328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24329,meta24328__$1){
var self__ = this;
var _24329__$1 = this;
return (new cljs.core.async.t_cljs$core$async24327(self__.f,self__.blockable,meta24328__$1));
});

cljs.core.async.t_cljs$core$async24327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24329){
var self__ = this;
var _24329__$1 = this;
return self__.meta24328;
});

cljs.core.async.t_cljs$core$async24327.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24328","meta24328",-67577037,null)], null);
});

cljs.core.async.t_cljs$core$async24327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24327";

cljs.core.async.t_cljs$core$async24327.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async24327");
});

cljs.core.async.__GT_t_cljs$core$async24327 = (function cljs$core$async$__GT_t_cljs$core$async24327(f__$1,blockable__$1,meta24328){
return (new cljs.core.async.t_cljs$core$async24327(f__$1,blockable__$1,meta24328));
});

}

return (new cljs.core.async.t_cljs$core$async24327(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24336 = [];
var len__22773__auto___24339 = arguments.length;
var i__22774__auto___24340 = (0);
while(true){
if((i__22774__auto___24340 < len__22773__auto___24339)){
args24336.push((arguments[i__22774__auto___24340]));

var G__24341 = (i__22774__auto___24340 + (1));
i__22774__auto___24340 = G__24341;
continue;
} else {
}
break;
}

var G__24338 = args24336.length;
switch (G__24338) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24336.length)].join('')));

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
var args24343 = [];
var len__22773__auto___24346 = arguments.length;
var i__22774__auto___24347 = (0);
while(true){
if((i__22774__auto___24347 < len__22773__auto___24346)){
args24343.push((arguments[i__22774__auto___24347]));

var G__24348 = (i__22774__auto___24347 + (1));
i__22774__auto___24347 = G__24348;
continue;
} else {
}
break;
}

var G__24345 = args24343.length;
switch (G__24345) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24343.length)].join('')));

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
var args24350 = [];
var len__22773__auto___24353 = arguments.length;
var i__22774__auto___24354 = (0);
while(true){
if((i__22774__auto___24354 < len__22773__auto___24353)){
args24350.push((arguments[i__22774__auto___24354]));

var G__24355 = (i__22774__auto___24354 + (1));
i__22774__auto___24354 = G__24355;
continue;
} else {
}
break;
}

var G__24352 = args24350.length;
switch (G__24352) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24350.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24357 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24357);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24357,ret){
return (function (){
return fn1.call(null,val_24357);
});})(val_24357,ret))
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
var args24358 = [];
var len__22773__auto___24361 = arguments.length;
var i__22774__auto___24362 = (0);
while(true){
if((i__22774__auto___24362 < len__22773__auto___24361)){
args24358.push((arguments[i__22774__auto___24362]));

var G__24363 = (i__22774__auto___24362 + (1));
i__22774__auto___24362 = G__24363;
continue;
} else {
}
break;
}

var G__24360 = args24358.length;
switch (G__24360) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24358.length)].join('')));

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
var n__22603__auto___24365 = n;
var x_24366 = (0);
while(true){
if((x_24366 < n__22603__auto___24365)){
(a[x_24366] = (0));

var G__24367 = (x_24366 + (1));
x_24366 = G__24367;
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

var G__24368 = (i + (1));
i = G__24368;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24372 = (function (alt_flag,flag,meta24373){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24373 = meta24373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24374,meta24373__$1){
var self__ = this;
var _24374__$1 = this;
return (new cljs.core.async.t_cljs$core$async24372(self__.alt_flag,self__.flag,meta24373__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24374){
var self__ = this;
var _24374__$1 = this;
return self__.meta24373;
});})(flag))
;

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24372.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24373","meta24373",1438986967,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24372";

cljs.core.async.t_cljs$core$async24372.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async24372");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24372 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24372(alt_flag__$1,flag__$1,meta24373){
return (new cljs.core.async.t_cljs$core$async24372(alt_flag__$1,flag__$1,meta24373));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24372(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24378 = (function (alt_handler,flag,cb,meta24379){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24379 = meta24379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24380,meta24379__$1){
var self__ = this;
var _24380__$1 = this;
return (new cljs.core.async.t_cljs$core$async24378(self__.alt_handler,self__.flag,self__.cb,meta24379__$1));
});

cljs.core.async.t_cljs$core$async24378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24380){
var self__ = this;
var _24380__$1 = this;
return self__.meta24379;
});

cljs.core.async.t_cljs$core$async24378.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24379","meta24379",1853956015,null)], null);
});

cljs.core.async.t_cljs$core$async24378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24378";

cljs.core.async.t_cljs$core$async24378.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async24378");
});

cljs.core.async.__GT_t_cljs$core$async24378 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24378(alt_handler__$1,flag__$1,cb__$1,meta24379){
return (new cljs.core.async.t_cljs$core$async24378(alt_handler__$1,flag__$1,cb__$1,meta24379));
});

}

return (new cljs.core.async.t_cljs$core$async24378(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24381_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24381_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24382_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24382_SHARP_,port], null));
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
var G__24383 = (i + (1));
i = G__24383;
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
var len__22773__auto___24389 = arguments.length;
var i__22774__auto___24390 = (0);
while(true){
if((i__22774__auto___24390 < len__22773__auto___24389)){
args__22780__auto__.push((arguments[i__22774__auto___24390]));

var G__24391 = (i__22774__auto___24390 + (1));
i__22774__auto___24390 = G__24391;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((1) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22781__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24386){
var map__24387 = p__24386;
var map__24387__$1 = ((((!((map__24387 == null)))?((((map__24387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24387):map__24387);
var opts = map__24387__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24384){
var G__24385 = cljs.core.first.call(null,seq24384);
var seq24384__$1 = cljs.core.next.call(null,seq24384);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24385,seq24384__$1);
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
var args24392 = [];
var len__22773__auto___24442 = arguments.length;
var i__22774__auto___24443 = (0);
while(true){
if((i__22774__auto___24443 < len__22773__auto___24442)){
args24392.push((arguments[i__22774__auto___24443]));

var G__24444 = (i__22774__auto___24443 + (1));
i__22774__auto___24443 = G__24444;
continue;
} else {
}
break;
}

var G__24394 = args24392.length;
switch (G__24394) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24392.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24265__auto___24446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___24446){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___24446){
return (function (state_24418){
var state_val_24419 = (state_24418[(1)]);
if((state_val_24419 === (7))){
var inst_24414 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24420_24447 = state_24418__$1;
(statearr_24420_24447[(2)] = inst_24414);

(statearr_24420_24447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (1))){
var state_24418__$1 = state_24418;
var statearr_24421_24448 = state_24418__$1;
(statearr_24421_24448[(2)] = null);

(statearr_24421_24448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (4))){
var inst_24397 = (state_24418[(7)]);
var inst_24397__$1 = (state_24418[(2)]);
var inst_24398 = (inst_24397__$1 == null);
var state_24418__$1 = (function (){var statearr_24422 = state_24418;
(statearr_24422[(7)] = inst_24397__$1);

return statearr_24422;
})();
if(cljs.core.truth_(inst_24398)){
var statearr_24423_24449 = state_24418__$1;
(statearr_24423_24449[(1)] = (5));

} else {
var statearr_24424_24450 = state_24418__$1;
(statearr_24424_24450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (13))){
var state_24418__$1 = state_24418;
var statearr_24425_24451 = state_24418__$1;
(statearr_24425_24451[(2)] = null);

(statearr_24425_24451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (6))){
var inst_24397 = (state_24418[(7)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24418__$1,(11),to,inst_24397);
} else {
if((state_val_24419 === (3))){
var inst_24416 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24418__$1,inst_24416);
} else {
if((state_val_24419 === (12))){
var state_24418__$1 = state_24418;
var statearr_24426_24452 = state_24418__$1;
(statearr_24426_24452[(2)] = null);

(statearr_24426_24452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (2))){
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24418__$1,(4),from);
} else {
if((state_val_24419 === (11))){
var inst_24407 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
if(cljs.core.truth_(inst_24407)){
var statearr_24427_24453 = state_24418__$1;
(statearr_24427_24453[(1)] = (12));

} else {
var statearr_24428_24454 = state_24418__$1;
(statearr_24428_24454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (9))){
var state_24418__$1 = state_24418;
var statearr_24429_24455 = state_24418__$1;
(statearr_24429_24455[(2)] = null);

(statearr_24429_24455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (5))){
var state_24418__$1 = state_24418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24430_24456 = state_24418__$1;
(statearr_24430_24456[(1)] = (8));

} else {
var statearr_24431_24457 = state_24418__$1;
(statearr_24431_24457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (14))){
var inst_24412 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24432_24458 = state_24418__$1;
(statearr_24432_24458[(2)] = inst_24412);

(statearr_24432_24458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (10))){
var inst_24404 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24433_24459 = state_24418__$1;
(statearr_24433_24459[(2)] = inst_24404);

(statearr_24433_24459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (8))){
var inst_24401 = cljs.core.async.close_BANG_.call(null,to);
var state_24418__$1 = state_24418;
var statearr_24434_24460 = state_24418__$1;
(statearr_24434_24460[(2)] = inst_24401);

(statearr_24434_24460[(1)] = (10));


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
});})(c__24265__auto___24446))
;
return ((function (switch__24151__auto__,c__24265__auto___24446){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_24438 = [null,null,null,null,null,null,null,null];
(statearr_24438[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_24438[(1)] = (1));

return statearr_24438;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_24418){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_24418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e24439){if((e24439 instanceof Object)){
var ex__24155__auto__ = e24439;
var statearr_24440_24461 = state_24418;
(statearr_24440_24461[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24462 = state_24418;
state_24418 = G__24462;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_24418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_24418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___24446))
})();
var state__24267__auto__ = (function (){var statearr_24441 = f__24266__auto__.call(null);
(statearr_24441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___24446);

return statearr_24441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___24446))
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
return (function (p__24650){
var vec__24651 = p__24650;
var v = cljs.core.nth.call(null,vec__24651,(0),null);
var p = cljs.core.nth.call(null,vec__24651,(1),null);
var job = vec__24651;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24265__auto___24837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___24837,res,vec__24651,v,p,job,jobs,results){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___24837,res,vec__24651,v,p,job,jobs,results){
return (function (state_24658){
var state_val_24659 = (state_24658[(1)]);
if((state_val_24659 === (1))){
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24658__$1,(2),res,v);
} else {
if((state_val_24659 === (2))){
var inst_24655 = (state_24658[(2)]);
var inst_24656 = cljs.core.async.close_BANG_.call(null,res);
var state_24658__$1 = (function (){var statearr_24660 = state_24658;
(statearr_24660[(7)] = inst_24655);

return statearr_24660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24658__$1,inst_24656);
} else {
return null;
}
}
});})(c__24265__auto___24837,res,vec__24651,v,p,job,jobs,results))
;
return ((function (switch__24151__auto__,c__24265__auto___24837,res,vec__24651,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0 = (function (){
var statearr_24664 = [null,null,null,null,null,null,null,null];
(statearr_24664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__);

(statearr_24664[(1)] = (1));

return statearr_24664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1 = (function (state_24658){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_24658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e24665){if((e24665 instanceof Object)){
var ex__24155__auto__ = e24665;
var statearr_24666_24838 = state_24658;
(statearr_24666_24838[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24839 = state_24658;
state_24658 = G__24839;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = function(state_24658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1.call(this,state_24658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___24837,res,vec__24651,v,p,job,jobs,results))
})();
var state__24267__auto__ = (function (){var statearr_24667 = f__24266__auto__.call(null);
(statearr_24667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___24837);

return statearr_24667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___24837,res,vec__24651,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24668){
var vec__24669 = p__24668;
var v = cljs.core.nth.call(null,vec__24669,(0),null);
var p = cljs.core.nth.call(null,vec__24669,(1),null);
var job = vec__24669;
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
var n__22603__auto___24840 = n;
var __24841 = (0);
while(true){
if((__24841 < n__22603__auto___24840)){
var G__24672_24842 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24672_24842) {
case "compute":
var c__24265__auto___24844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24841,c__24265__auto___24844,G__24672_24842,n__22603__auto___24840,jobs,results,process,async){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (__24841,c__24265__auto___24844,G__24672_24842,n__22603__auto___24840,jobs,results,process,async){
return (function (state_24685){
var state_val_24686 = (state_24685[(1)]);
if((state_val_24686 === (1))){
var state_24685__$1 = state_24685;
var statearr_24687_24845 = state_24685__$1;
(statearr_24687_24845[(2)] = null);

(statearr_24687_24845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (2))){
var state_24685__$1 = state_24685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24685__$1,(4),jobs);
} else {
if((state_val_24686 === (3))){
var inst_24683 = (state_24685[(2)]);
var state_24685__$1 = state_24685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24685__$1,inst_24683);
} else {
if((state_val_24686 === (4))){
var inst_24675 = (state_24685[(2)]);
var inst_24676 = process.call(null,inst_24675);
var state_24685__$1 = state_24685;
if(cljs.core.truth_(inst_24676)){
var statearr_24688_24846 = state_24685__$1;
(statearr_24688_24846[(1)] = (5));

} else {
var statearr_24689_24847 = state_24685__$1;
(statearr_24689_24847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (5))){
var state_24685__$1 = state_24685;
var statearr_24690_24848 = state_24685__$1;
(statearr_24690_24848[(2)] = null);

(statearr_24690_24848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (6))){
var state_24685__$1 = state_24685;
var statearr_24691_24849 = state_24685__$1;
(statearr_24691_24849[(2)] = null);

(statearr_24691_24849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (7))){
var inst_24681 = (state_24685[(2)]);
var state_24685__$1 = state_24685;
var statearr_24692_24850 = state_24685__$1;
(statearr_24692_24850[(2)] = inst_24681);

(statearr_24692_24850[(1)] = (3));


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
});})(__24841,c__24265__auto___24844,G__24672_24842,n__22603__auto___24840,jobs,results,process,async))
;
return ((function (__24841,switch__24151__auto__,c__24265__auto___24844,G__24672_24842,n__22603__auto___24840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0 = (function (){
var statearr_24696 = [null,null,null,null,null,null,null];
(statearr_24696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__);

(statearr_24696[(1)] = (1));

return statearr_24696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1 = (function (state_24685){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_24685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e24697){if((e24697 instanceof Object)){
var ex__24155__auto__ = e24697;
var statearr_24698_24851 = state_24685;
(statearr_24698_24851[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24852 = state_24685;
state_24685 = G__24852;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = function(state_24685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1.call(this,state_24685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__;
})()
;})(__24841,switch__24151__auto__,c__24265__auto___24844,G__24672_24842,n__22603__auto___24840,jobs,results,process,async))
})();
var state__24267__auto__ = (function (){var statearr_24699 = f__24266__auto__.call(null);
(statearr_24699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___24844);

return statearr_24699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(__24841,c__24265__auto___24844,G__24672_24842,n__22603__auto___24840,jobs,results,process,async))
);


break;
case "async":
var c__24265__auto___24853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24841,c__24265__auto___24853,G__24672_24842,n__22603__auto___24840,jobs,results,process,async){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (__24841,c__24265__auto___24853,G__24672_24842,n__22603__auto___24840,jobs,results,process,async){
return (function (state_24712){
var state_val_24713 = (state_24712[(1)]);
if((state_val_24713 === (1))){
var state_24712__$1 = state_24712;
var statearr_24714_24854 = state_24712__$1;
(statearr_24714_24854[(2)] = null);

(statearr_24714_24854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (2))){
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(4),jobs);
} else {
if((state_val_24713 === (3))){
var inst_24710 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24712__$1,inst_24710);
} else {
if((state_val_24713 === (4))){
var inst_24702 = (state_24712[(2)]);
var inst_24703 = async.call(null,inst_24702);
var state_24712__$1 = state_24712;
if(cljs.core.truth_(inst_24703)){
var statearr_24715_24855 = state_24712__$1;
(statearr_24715_24855[(1)] = (5));

} else {
var statearr_24716_24856 = state_24712__$1;
(statearr_24716_24856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (5))){
var state_24712__$1 = state_24712;
var statearr_24717_24857 = state_24712__$1;
(statearr_24717_24857[(2)] = null);

(statearr_24717_24857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (6))){
var state_24712__$1 = state_24712;
var statearr_24718_24858 = state_24712__$1;
(statearr_24718_24858[(2)] = null);

(statearr_24718_24858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (7))){
var inst_24708 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24719_24859 = state_24712__$1;
(statearr_24719_24859[(2)] = inst_24708);

(statearr_24719_24859[(1)] = (3));


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
});})(__24841,c__24265__auto___24853,G__24672_24842,n__22603__auto___24840,jobs,results,process,async))
;
return ((function (__24841,switch__24151__auto__,c__24265__auto___24853,G__24672_24842,n__22603__auto___24840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0 = (function (){
var statearr_24723 = [null,null,null,null,null,null,null];
(statearr_24723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__);

(statearr_24723[(1)] = (1));

return statearr_24723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1 = (function (state_24712){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_24712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e24724){if((e24724 instanceof Object)){
var ex__24155__auto__ = e24724;
var statearr_24725_24860 = state_24712;
(statearr_24725_24860[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24861 = state_24712;
state_24712 = G__24861;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__;
})()
;})(__24841,switch__24151__auto__,c__24265__auto___24853,G__24672_24842,n__22603__auto___24840,jobs,results,process,async))
})();
var state__24267__auto__ = (function (){var statearr_24726 = f__24266__auto__.call(null);
(statearr_24726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___24853);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(__24841,c__24265__auto___24853,G__24672_24842,n__22603__auto___24840,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24862 = (__24841 + (1));
__24841 = G__24862;
continue;
} else {
}
break;
}

var c__24265__auto___24863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___24863,jobs,results,process,async){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___24863,jobs,results,process,async){
return (function (state_24748){
var state_val_24749 = (state_24748[(1)]);
if((state_val_24749 === (1))){
var state_24748__$1 = state_24748;
var statearr_24750_24864 = state_24748__$1;
(statearr_24750_24864[(2)] = null);

(statearr_24750_24864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (2))){
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24748__$1,(4),from);
} else {
if((state_val_24749 === (3))){
var inst_24746 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24748__$1,inst_24746);
} else {
if((state_val_24749 === (4))){
var inst_24729 = (state_24748[(7)]);
var inst_24729__$1 = (state_24748[(2)]);
var inst_24730 = (inst_24729__$1 == null);
var state_24748__$1 = (function (){var statearr_24751 = state_24748;
(statearr_24751[(7)] = inst_24729__$1);

return statearr_24751;
})();
if(cljs.core.truth_(inst_24730)){
var statearr_24752_24865 = state_24748__$1;
(statearr_24752_24865[(1)] = (5));

} else {
var statearr_24753_24866 = state_24748__$1;
(statearr_24753_24866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (5))){
var inst_24732 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24748__$1 = state_24748;
var statearr_24754_24867 = state_24748__$1;
(statearr_24754_24867[(2)] = inst_24732);

(statearr_24754_24867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (6))){
var inst_24734 = (state_24748[(8)]);
var inst_24729 = (state_24748[(7)]);
var inst_24734__$1 = cljs.core.async.chan.call(null,(1));
var inst_24735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24736 = [inst_24729,inst_24734__$1];
var inst_24737 = (new cljs.core.PersistentVector(null,2,(5),inst_24735,inst_24736,null));
var state_24748__$1 = (function (){var statearr_24755 = state_24748;
(statearr_24755[(8)] = inst_24734__$1);

return statearr_24755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24748__$1,(8),jobs,inst_24737);
} else {
if((state_val_24749 === (7))){
var inst_24744 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24756_24868 = state_24748__$1;
(statearr_24756_24868[(2)] = inst_24744);

(statearr_24756_24868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (8))){
var inst_24734 = (state_24748[(8)]);
var inst_24739 = (state_24748[(2)]);
var state_24748__$1 = (function (){var statearr_24757 = state_24748;
(statearr_24757[(9)] = inst_24739);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24748__$1,(9),results,inst_24734);
} else {
if((state_val_24749 === (9))){
var inst_24741 = (state_24748[(2)]);
var state_24748__$1 = (function (){var statearr_24758 = state_24748;
(statearr_24758[(10)] = inst_24741);

return statearr_24758;
})();
var statearr_24759_24869 = state_24748__$1;
(statearr_24759_24869[(2)] = null);

(statearr_24759_24869[(1)] = (2));


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
});})(c__24265__auto___24863,jobs,results,process,async))
;
return ((function (switch__24151__auto__,c__24265__auto___24863,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0 = (function (){
var statearr_24763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__);

(statearr_24763[(1)] = (1));

return statearr_24763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1 = (function (state_24748){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_24748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e24764){if((e24764 instanceof Object)){
var ex__24155__auto__ = e24764;
var statearr_24765_24870 = state_24748;
(statearr_24765_24870[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24871 = state_24748;
state_24748 = G__24871;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = function(state_24748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1.call(this,state_24748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___24863,jobs,results,process,async))
})();
var state__24267__auto__ = (function (){var statearr_24766 = f__24266__auto__.call(null);
(statearr_24766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___24863);

return statearr_24766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___24863,jobs,results,process,async))
);


var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__,jobs,results,process,async){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__,jobs,results,process,async){
return (function (state_24804){
var state_val_24805 = (state_24804[(1)]);
if((state_val_24805 === (7))){
var inst_24800 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24806_24872 = state_24804__$1;
(statearr_24806_24872[(2)] = inst_24800);

(statearr_24806_24872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (20))){
var state_24804__$1 = state_24804;
var statearr_24807_24873 = state_24804__$1;
(statearr_24807_24873[(2)] = null);

(statearr_24807_24873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (1))){
var state_24804__$1 = state_24804;
var statearr_24808_24874 = state_24804__$1;
(statearr_24808_24874[(2)] = null);

(statearr_24808_24874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (4))){
var inst_24769 = (state_24804[(7)]);
var inst_24769__$1 = (state_24804[(2)]);
var inst_24770 = (inst_24769__$1 == null);
var state_24804__$1 = (function (){var statearr_24809 = state_24804;
(statearr_24809[(7)] = inst_24769__$1);

return statearr_24809;
})();
if(cljs.core.truth_(inst_24770)){
var statearr_24810_24875 = state_24804__$1;
(statearr_24810_24875[(1)] = (5));

} else {
var statearr_24811_24876 = state_24804__$1;
(statearr_24811_24876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (15))){
var inst_24782 = (state_24804[(8)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24804__$1,(18),to,inst_24782);
} else {
if((state_val_24805 === (21))){
var inst_24795 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24812_24877 = state_24804__$1;
(statearr_24812_24877[(2)] = inst_24795);

(statearr_24812_24877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (13))){
var inst_24797 = (state_24804[(2)]);
var state_24804__$1 = (function (){var statearr_24813 = state_24804;
(statearr_24813[(9)] = inst_24797);

return statearr_24813;
})();
var statearr_24814_24878 = state_24804__$1;
(statearr_24814_24878[(2)] = null);

(statearr_24814_24878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (6))){
var inst_24769 = (state_24804[(7)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24804__$1,(11),inst_24769);
} else {
if((state_val_24805 === (17))){
var inst_24790 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24790)){
var statearr_24815_24879 = state_24804__$1;
(statearr_24815_24879[(1)] = (19));

} else {
var statearr_24816_24880 = state_24804__$1;
(statearr_24816_24880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (3))){
var inst_24802 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24804__$1,inst_24802);
} else {
if((state_val_24805 === (12))){
var inst_24779 = (state_24804[(10)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24804__$1,(14),inst_24779);
} else {
if((state_val_24805 === (2))){
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24804__$1,(4),results);
} else {
if((state_val_24805 === (19))){
var state_24804__$1 = state_24804;
var statearr_24817_24881 = state_24804__$1;
(statearr_24817_24881[(2)] = null);

(statearr_24817_24881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (11))){
var inst_24779 = (state_24804[(2)]);
var state_24804__$1 = (function (){var statearr_24818 = state_24804;
(statearr_24818[(10)] = inst_24779);

return statearr_24818;
})();
var statearr_24819_24882 = state_24804__$1;
(statearr_24819_24882[(2)] = null);

(statearr_24819_24882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (9))){
var state_24804__$1 = state_24804;
var statearr_24820_24883 = state_24804__$1;
(statearr_24820_24883[(2)] = null);

(statearr_24820_24883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (5))){
var state_24804__$1 = state_24804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24821_24884 = state_24804__$1;
(statearr_24821_24884[(1)] = (8));

} else {
var statearr_24822_24885 = state_24804__$1;
(statearr_24822_24885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (14))){
var inst_24782 = (state_24804[(8)]);
var inst_24784 = (state_24804[(11)]);
var inst_24782__$1 = (state_24804[(2)]);
var inst_24783 = (inst_24782__$1 == null);
var inst_24784__$1 = cljs.core.not.call(null,inst_24783);
var state_24804__$1 = (function (){var statearr_24823 = state_24804;
(statearr_24823[(8)] = inst_24782__$1);

(statearr_24823[(11)] = inst_24784__$1);

return statearr_24823;
})();
if(inst_24784__$1){
var statearr_24824_24886 = state_24804__$1;
(statearr_24824_24886[(1)] = (15));

} else {
var statearr_24825_24887 = state_24804__$1;
(statearr_24825_24887[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (16))){
var inst_24784 = (state_24804[(11)]);
var state_24804__$1 = state_24804;
var statearr_24826_24888 = state_24804__$1;
(statearr_24826_24888[(2)] = inst_24784);

(statearr_24826_24888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (10))){
var inst_24776 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24827_24889 = state_24804__$1;
(statearr_24827_24889[(2)] = inst_24776);

(statearr_24827_24889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (18))){
var inst_24787 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24828_24890 = state_24804__$1;
(statearr_24828_24890[(2)] = inst_24787);

(statearr_24828_24890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (8))){
var inst_24773 = cljs.core.async.close_BANG_.call(null,to);
var state_24804__$1 = state_24804;
var statearr_24829_24891 = state_24804__$1;
(statearr_24829_24891[(2)] = inst_24773);

(statearr_24829_24891[(1)] = (10));


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
});})(c__24265__auto__,jobs,results,process,async))
;
return ((function (switch__24151__auto__,c__24265__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0 = (function (){
var statearr_24833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__);

(statearr_24833[(1)] = (1));

return statearr_24833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1 = (function (state_24804){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_24804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e24834){if((e24834 instanceof Object)){
var ex__24155__auto__ = e24834;
var statearr_24835_24892 = state_24804;
(statearr_24835_24892[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24893 = state_24804;
state_24804 = G__24893;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__ = function(state_24804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1.call(this,state_24804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__,jobs,results,process,async))
})();
var state__24267__auto__ = (function (){var statearr_24836 = f__24266__auto__.call(null);
(statearr_24836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_24836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__,jobs,results,process,async))
);

return c__24265__auto__;
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
var args24894 = [];
var len__22773__auto___24897 = arguments.length;
var i__22774__auto___24898 = (0);
while(true){
if((i__22774__auto___24898 < len__22773__auto___24897)){
args24894.push((arguments[i__22774__auto___24898]));

var G__24899 = (i__22774__auto___24898 + (1));
i__22774__auto___24898 = G__24899;
continue;
} else {
}
break;
}

var G__24896 = args24894.length;
switch (G__24896) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24894.length)].join('')));

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
var args24901 = [];
var len__22773__auto___24904 = arguments.length;
var i__22774__auto___24905 = (0);
while(true){
if((i__22774__auto___24905 < len__22773__auto___24904)){
args24901.push((arguments[i__22774__auto___24905]));

var G__24906 = (i__22774__auto___24905 + (1));
i__22774__auto___24905 = G__24906;
continue;
} else {
}
break;
}

var G__24903 = args24901.length;
switch (G__24903) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24901.length)].join('')));

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
var args24908 = [];
var len__22773__auto___24961 = arguments.length;
var i__22774__auto___24962 = (0);
while(true){
if((i__22774__auto___24962 < len__22773__auto___24961)){
args24908.push((arguments[i__22774__auto___24962]));

var G__24963 = (i__22774__auto___24962 + (1));
i__22774__auto___24962 = G__24963;
continue;
} else {
}
break;
}

var G__24910 = args24908.length;
switch (G__24910) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24908.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24265__auto___24965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___24965,tc,fc){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___24965,tc,fc){
return (function (state_24936){
var state_val_24937 = (state_24936[(1)]);
if((state_val_24937 === (7))){
var inst_24932 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24938_24966 = state_24936__$1;
(statearr_24938_24966[(2)] = inst_24932);

(statearr_24938_24966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (1))){
var state_24936__$1 = state_24936;
var statearr_24939_24967 = state_24936__$1;
(statearr_24939_24967[(2)] = null);

(statearr_24939_24967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (4))){
var inst_24913 = (state_24936[(7)]);
var inst_24913__$1 = (state_24936[(2)]);
var inst_24914 = (inst_24913__$1 == null);
var state_24936__$1 = (function (){var statearr_24940 = state_24936;
(statearr_24940[(7)] = inst_24913__$1);

return statearr_24940;
})();
if(cljs.core.truth_(inst_24914)){
var statearr_24941_24968 = state_24936__$1;
(statearr_24941_24968[(1)] = (5));

} else {
var statearr_24942_24969 = state_24936__$1;
(statearr_24942_24969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (13))){
var state_24936__$1 = state_24936;
var statearr_24943_24970 = state_24936__$1;
(statearr_24943_24970[(2)] = null);

(statearr_24943_24970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (6))){
var inst_24913 = (state_24936[(7)]);
var inst_24919 = p.call(null,inst_24913);
var state_24936__$1 = state_24936;
if(cljs.core.truth_(inst_24919)){
var statearr_24944_24971 = state_24936__$1;
(statearr_24944_24971[(1)] = (9));

} else {
var statearr_24945_24972 = state_24936__$1;
(statearr_24945_24972[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (3))){
var inst_24934 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24936__$1,inst_24934);
} else {
if((state_val_24937 === (12))){
var state_24936__$1 = state_24936;
var statearr_24946_24973 = state_24936__$1;
(statearr_24946_24973[(2)] = null);

(statearr_24946_24973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (2))){
var state_24936__$1 = state_24936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24936__$1,(4),ch);
} else {
if((state_val_24937 === (11))){
var inst_24913 = (state_24936[(7)]);
var inst_24923 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24936__$1,(8),inst_24923,inst_24913);
} else {
if((state_val_24937 === (9))){
var state_24936__$1 = state_24936;
var statearr_24947_24974 = state_24936__$1;
(statearr_24947_24974[(2)] = tc);

(statearr_24947_24974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (5))){
var inst_24916 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24917 = cljs.core.async.close_BANG_.call(null,fc);
var state_24936__$1 = (function (){var statearr_24948 = state_24936;
(statearr_24948[(8)] = inst_24916);

return statearr_24948;
})();
var statearr_24949_24975 = state_24936__$1;
(statearr_24949_24975[(2)] = inst_24917);

(statearr_24949_24975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (14))){
var inst_24930 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24950_24976 = state_24936__$1;
(statearr_24950_24976[(2)] = inst_24930);

(statearr_24950_24976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (10))){
var state_24936__$1 = state_24936;
var statearr_24951_24977 = state_24936__$1;
(statearr_24951_24977[(2)] = fc);

(statearr_24951_24977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (8))){
var inst_24925 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
if(cljs.core.truth_(inst_24925)){
var statearr_24952_24978 = state_24936__$1;
(statearr_24952_24978[(1)] = (12));

} else {
var statearr_24953_24979 = state_24936__$1;
(statearr_24953_24979[(1)] = (13));

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
});})(c__24265__auto___24965,tc,fc))
;
return ((function (switch__24151__auto__,c__24265__auto___24965,tc,fc){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_24957 = [null,null,null,null,null,null,null,null,null];
(statearr_24957[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_24957[(1)] = (1));

return statearr_24957;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_24936){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_24936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e24958){if((e24958 instanceof Object)){
var ex__24155__auto__ = e24958;
var statearr_24959_24980 = state_24936;
(statearr_24959_24980[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24981 = state_24936;
state_24936 = G__24981;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_24936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_24936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___24965,tc,fc))
})();
var state__24267__auto__ = (function (){var statearr_24960 = f__24266__auto__.call(null);
(statearr_24960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___24965);

return statearr_24960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___24965,tc,fc))
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
var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__){
return (function (state_25045){
var state_val_25046 = (state_25045[(1)]);
if((state_val_25046 === (7))){
var inst_25041 = (state_25045[(2)]);
var state_25045__$1 = state_25045;
var statearr_25047_25068 = state_25045__$1;
(statearr_25047_25068[(2)] = inst_25041);

(statearr_25047_25068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (1))){
var inst_25025 = init;
var state_25045__$1 = (function (){var statearr_25048 = state_25045;
(statearr_25048[(7)] = inst_25025);

return statearr_25048;
})();
var statearr_25049_25069 = state_25045__$1;
(statearr_25049_25069[(2)] = null);

(statearr_25049_25069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (4))){
var inst_25028 = (state_25045[(8)]);
var inst_25028__$1 = (state_25045[(2)]);
var inst_25029 = (inst_25028__$1 == null);
var state_25045__$1 = (function (){var statearr_25050 = state_25045;
(statearr_25050[(8)] = inst_25028__$1);

return statearr_25050;
})();
if(cljs.core.truth_(inst_25029)){
var statearr_25051_25070 = state_25045__$1;
(statearr_25051_25070[(1)] = (5));

} else {
var statearr_25052_25071 = state_25045__$1;
(statearr_25052_25071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (6))){
var inst_25028 = (state_25045[(8)]);
var inst_25025 = (state_25045[(7)]);
var inst_25032 = (state_25045[(9)]);
var inst_25032__$1 = f.call(null,inst_25025,inst_25028);
var inst_25033 = cljs.core.reduced_QMARK_.call(null,inst_25032__$1);
var state_25045__$1 = (function (){var statearr_25053 = state_25045;
(statearr_25053[(9)] = inst_25032__$1);

return statearr_25053;
})();
if(inst_25033){
var statearr_25054_25072 = state_25045__$1;
(statearr_25054_25072[(1)] = (8));

} else {
var statearr_25055_25073 = state_25045__$1;
(statearr_25055_25073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (3))){
var inst_25043 = (state_25045[(2)]);
var state_25045__$1 = state_25045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25045__$1,inst_25043);
} else {
if((state_val_25046 === (2))){
var state_25045__$1 = state_25045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25045__$1,(4),ch);
} else {
if((state_val_25046 === (9))){
var inst_25032 = (state_25045[(9)]);
var inst_25025 = inst_25032;
var state_25045__$1 = (function (){var statearr_25056 = state_25045;
(statearr_25056[(7)] = inst_25025);

return statearr_25056;
})();
var statearr_25057_25074 = state_25045__$1;
(statearr_25057_25074[(2)] = null);

(statearr_25057_25074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (5))){
var inst_25025 = (state_25045[(7)]);
var state_25045__$1 = state_25045;
var statearr_25058_25075 = state_25045__$1;
(statearr_25058_25075[(2)] = inst_25025);

(statearr_25058_25075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (10))){
var inst_25039 = (state_25045[(2)]);
var state_25045__$1 = state_25045;
var statearr_25059_25076 = state_25045__$1;
(statearr_25059_25076[(2)] = inst_25039);

(statearr_25059_25076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (8))){
var inst_25032 = (state_25045[(9)]);
var inst_25035 = cljs.core.deref.call(null,inst_25032);
var state_25045__$1 = state_25045;
var statearr_25060_25077 = state_25045__$1;
(statearr_25060_25077[(2)] = inst_25035);

(statearr_25060_25077[(1)] = (10));


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
});})(c__24265__auto__))
;
return ((function (switch__24151__auto__,c__24265__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24152__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24152__auto____0 = (function (){
var statearr_25064 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25064[(0)] = cljs$core$async$reduce_$_state_machine__24152__auto__);

(statearr_25064[(1)] = (1));

return statearr_25064;
});
var cljs$core$async$reduce_$_state_machine__24152__auto____1 = (function (state_25045){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_25045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e25065){if((e25065 instanceof Object)){
var ex__24155__auto__ = e25065;
var statearr_25066_25078 = state_25045;
(statearr_25066_25078[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25079 = state_25045;
state_25045 = G__25079;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24152__auto__ = function(state_25045){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24152__auto____1.call(this,state_25045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24152__auto____0;
cljs$core$async$reduce_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24152__auto____1;
return cljs$core$async$reduce_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__))
})();
var state__24267__auto__ = (function (){var statearr_25067 = f__24266__auto__.call(null);
(statearr_25067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_25067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__))
);

return c__24265__auto__;
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
var args25080 = [];
var len__22773__auto___25132 = arguments.length;
var i__22774__auto___25133 = (0);
while(true){
if((i__22774__auto___25133 < len__22773__auto___25132)){
args25080.push((arguments[i__22774__auto___25133]));

var G__25134 = (i__22774__auto___25133 + (1));
i__22774__auto___25133 = G__25134;
continue;
} else {
}
break;
}

var G__25082 = args25080.length;
switch (G__25082) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25080.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__){
return (function (state_25107){
var state_val_25108 = (state_25107[(1)]);
if((state_val_25108 === (7))){
var inst_25089 = (state_25107[(2)]);
var state_25107__$1 = state_25107;
var statearr_25109_25136 = state_25107__$1;
(statearr_25109_25136[(2)] = inst_25089);

(statearr_25109_25136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (1))){
var inst_25083 = cljs.core.seq.call(null,coll);
var inst_25084 = inst_25083;
var state_25107__$1 = (function (){var statearr_25110 = state_25107;
(statearr_25110[(7)] = inst_25084);

return statearr_25110;
})();
var statearr_25111_25137 = state_25107__$1;
(statearr_25111_25137[(2)] = null);

(statearr_25111_25137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (4))){
var inst_25084 = (state_25107[(7)]);
var inst_25087 = cljs.core.first.call(null,inst_25084);
var state_25107__$1 = state_25107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25107__$1,(7),ch,inst_25087);
} else {
if((state_val_25108 === (13))){
var inst_25101 = (state_25107[(2)]);
var state_25107__$1 = state_25107;
var statearr_25112_25138 = state_25107__$1;
(statearr_25112_25138[(2)] = inst_25101);

(statearr_25112_25138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (6))){
var inst_25092 = (state_25107[(2)]);
var state_25107__$1 = state_25107;
if(cljs.core.truth_(inst_25092)){
var statearr_25113_25139 = state_25107__$1;
(statearr_25113_25139[(1)] = (8));

} else {
var statearr_25114_25140 = state_25107__$1;
(statearr_25114_25140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (3))){
var inst_25105 = (state_25107[(2)]);
var state_25107__$1 = state_25107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25107__$1,inst_25105);
} else {
if((state_val_25108 === (12))){
var state_25107__$1 = state_25107;
var statearr_25115_25141 = state_25107__$1;
(statearr_25115_25141[(2)] = null);

(statearr_25115_25141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (2))){
var inst_25084 = (state_25107[(7)]);
var state_25107__$1 = state_25107;
if(cljs.core.truth_(inst_25084)){
var statearr_25116_25142 = state_25107__$1;
(statearr_25116_25142[(1)] = (4));

} else {
var statearr_25117_25143 = state_25107__$1;
(statearr_25117_25143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (11))){
var inst_25098 = cljs.core.async.close_BANG_.call(null,ch);
var state_25107__$1 = state_25107;
var statearr_25118_25144 = state_25107__$1;
(statearr_25118_25144[(2)] = inst_25098);

(statearr_25118_25144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (9))){
var state_25107__$1 = state_25107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25119_25145 = state_25107__$1;
(statearr_25119_25145[(1)] = (11));

} else {
var statearr_25120_25146 = state_25107__$1;
(statearr_25120_25146[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (5))){
var inst_25084 = (state_25107[(7)]);
var state_25107__$1 = state_25107;
var statearr_25121_25147 = state_25107__$1;
(statearr_25121_25147[(2)] = inst_25084);

(statearr_25121_25147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (10))){
var inst_25103 = (state_25107[(2)]);
var state_25107__$1 = state_25107;
var statearr_25122_25148 = state_25107__$1;
(statearr_25122_25148[(2)] = inst_25103);

(statearr_25122_25148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (8))){
var inst_25084 = (state_25107[(7)]);
var inst_25094 = cljs.core.next.call(null,inst_25084);
var inst_25084__$1 = inst_25094;
var state_25107__$1 = (function (){var statearr_25123 = state_25107;
(statearr_25123[(7)] = inst_25084__$1);

return statearr_25123;
})();
var statearr_25124_25149 = state_25107__$1;
(statearr_25124_25149[(2)] = null);

(statearr_25124_25149[(1)] = (2));


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
});})(c__24265__auto__))
;
return ((function (switch__24151__auto__,c__24265__auto__){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_25128 = [null,null,null,null,null,null,null,null];
(statearr_25128[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_25128[(1)] = (1));

return statearr_25128;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_25107){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_25107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e25129){if((e25129 instanceof Object)){
var ex__24155__auto__ = e25129;
var statearr_25130_25150 = state_25107;
(statearr_25130_25150[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25151 = state_25107;
state_25107 = G__25151;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_25107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_25107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__))
})();
var state__24267__auto__ = (function (){var statearr_25131 = f__24266__auto__.call(null);
(statearr_25131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_25131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__))
);

return c__24265__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25377 = (function (mult,ch,cs,meta25378){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25378 = meta25378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25379,meta25378__$1){
var self__ = this;
var _25379__$1 = this;
return (new cljs.core.async.t_cljs$core$async25377(self__.mult,self__.ch,self__.cs,meta25378__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25379){
var self__ = this;
var _25379__$1 = this;
return self__.meta25378;
});})(cs))
;

cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25377.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25378","meta25378",-1113961480,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25377";

cljs.core.async.t_cljs$core$async25377.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async25377");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25377 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25377(mult__$1,ch__$1,cs__$1,meta25378){
return (new cljs.core.async.t_cljs$core$async25377(mult__$1,ch__$1,cs__$1,meta25378));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25377(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24265__auto___25602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___25602,cs,m,dchan,dctr,done){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___25602,cs,m,dchan,dctr,done){
return (function (state_25514){
var state_val_25515 = (state_25514[(1)]);
if((state_val_25515 === (7))){
var inst_25510 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25516_25603 = state_25514__$1;
(statearr_25516_25603[(2)] = inst_25510);

(statearr_25516_25603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (20))){
var inst_25413 = (state_25514[(7)]);
var inst_25425 = cljs.core.first.call(null,inst_25413);
var inst_25426 = cljs.core.nth.call(null,inst_25425,(0),null);
var inst_25427 = cljs.core.nth.call(null,inst_25425,(1),null);
var state_25514__$1 = (function (){var statearr_25517 = state_25514;
(statearr_25517[(8)] = inst_25426);

return statearr_25517;
})();
if(cljs.core.truth_(inst_25427)){
var statearr_25518_25604 = state_25514__$1;
(statearr_25518_25604[(1)] = (22));

} else {
var statearr_25519_25605 = state_25514__$1;
(statearr_25519_25605[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (27))){
var inst_25455 = (state_25514[(9)]);
var inst_25462 = (state_25514[(10)]);
var inst_25382 = (state_25514[(11)]);
var inst_25457 = (state_25514[(12)]);
var inst_25462__$1 = cljs.core._nth.call(null,inst_25455,inst_25457);
var inst_25463 = cljs.core.async.put_BANG_.call(null,inst_25462__$1,inst_25382,done);
var state_25514__$1 = (function (){var statearr_25520 = state_25514;
(statearr_25520[(10)] = inst_25462__$1);

return statearr_25520;
})();
if(cljs.core.truth_(inst_25463)){
var statearr_25521_25606 = state_25514__$1;
(statearr_25521_25606[(1)] = (30));

} else {
var statearr_25522_25607 = state_25514__$1;
(statearr_25522_25607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (1))){
var state_25514__$1 = state_25514;
var statearr_25523_25608 = state_25514__$1;
(statearr_25523_25608[(2)] = null);

(statearr_25523_25608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (24))){
var inst_25413 = (state_25514[(7)]);
var inst_25432 = (state_25514[(2)]);
var inst_25433 = cljs.core.next.call(null,inst_25413);
var inst_25391 = inst_25433;
var inst_25392 = null;
var inst_25393 = (0);
var inst_25394 = (0);
var state_25514__$1 = (function (){var statearr_25524 = state_25514;
(statearr_25524[(13)] = inst_25432);

(statearr_25524[(14)] = inst_25392);

(statearr_25524[(15)] = inst_25394);

(statearr_25524[(16)] = inst_25391);

(statearr_25524[(17)] = inst_25393);

return statearr_25524;
})();
var statearr_25525_25609 = state_25514__$1;
(statearr_25525_25609[(2)] = null);

(statearr_25525_25609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (39))){
var state_25514__$1 = state_25514;
var statearr_25529_25610 = state_25514__$1;
(statearr_25529_25610[(2)] = null);

(statearr_25529_25610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (4))){
var inst_25382 = (state_25514[(11)]);
var inst_25382__$1 = (state_25514[(2)]);
var inst_25383 = (inst_25382__$1 == null);
var state_25514__$1 = (function (){var statearr_25530 = state_25514;
(statearr_25530[(11)] = inst_25382__$1);

return statearr_25530;
})();
if(cljs.core.truth_(inst_25383)){
var statearr_25531_25611 = state_25514__$1;
(statearr_25531_25611[(1)] = (5));

} else {
var statearr_25532_25612 = state_25514__$1;
(statearr_25532_25612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (15))){
var inst_25392 = (state_25514[(14)]);
var inst_25394 = (state_25514[(15)]);
var inst_25391 = (state_25514[(16)]);
var inst_25393 = (state_25514[(17)]);
var inst_25409 = (state_25514[(2)]);
var inst_25410 = (inst_25394 + (1));
var tmp25526 = inst_25392;
var tmp25527 = inst_25391;
var tmp25528 = inst_25393;
var inst_25391__$1 = tmp25527;
var inst_25392__$1 = tmp25526;
var inst_25393__$1 = tmp25528;
var inst_25394__$1 = inst_25410;
var state_25514__$1 = (function (){var statearr_25533 = state_25514;
(statearr_25533[(14)] = inst_25392__$1);

(statearr_25533[(15)] = inst_25394__$1);

(statearr_25533[(16)] = inst_25391__$1);

(statearr_25533[(18)] = inst_25409);

(statearr_25533[(17)] = inst_25393__$1);

return statearr_25533;
})();
var statearr_25534_25613 = state_25514__$1;
(statearr_25534_25613[(2)] = null);

(statearr_25534_25613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (21))){
var inst_25436 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25538_25614 = state_25514__$1;
(statearr_25538_25614[(2)] = inst_25436);

(statearr_25538_25614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (31))){
var inst_25462 = (state_25514[(10)]);
var inst_25466 = done.call(null,null);
var inst_25467 = cljs.core.async.untap_STAR_.call(null,m,inst_25462);
var state_25514__$1 = (function (){var statearr_25539 = state_25514;
(statearr_25539[(19)] = inst_25466);

return statearr_25539;
})();
var statearr_25540_25615 = state_25514__$1;
(statearr_25540_25615[(2)] = inst_25467);

(statearr_25540_25615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (32))){
var inst_25456 = (state_25514[(20)]);
var inst_25454 = (state_25514[(21)]);
var inst_25455 = (state_25514[(9)]);
var inst_25457 = (state_25514[(12)]);
var inst_25469 = (state_25514[(2)]);
var inst_25470 = (inst_25457 + (1));
var tmp25535 = inst_25456;
var tmp25536 = inst_25454;
var tmp25537 = inst_25455;
var inst_25454__$1 = tmp25536;
var inst_25455__$1 = tmp25537;
var inst_25456__$1 = tmp25535;
var inst_25457__$1 = inst_25470;
var state_25514__$1 = (function (){var statearr_25541 = state_25514;
(statearr_25541[(20)] = inst_25456__$1);

(statearr_25541[(21)] = inst_25454__$1);

(statearr_25541[(9)] = inst_25455__$1);

(statearr_25541[(22)] = inst_25469);

(statearr_25541[(12)] = inst_25457__$1);

return statearr_25541;
})();
var statearr_25542_25616 = state_25514__$1;
(statearr_25542_25616[(2)] = null);

(statearr_25542_25616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (40))){
var inst_25482 = (state_25514[(23)]);
var inst_25486 = done.call(null,null);
var inst_25487 = cljs.core.async.untap_STAR_.call(null,m,inst_25482);
var state_25514__$1 = (function (){var statearr_25543 = state_25514;
(statearr_25543[(24)] = inst_25486);

return statearr_25543;
})();
var statearr_25544_25617 = state_25514__$1;
(statearr_25544_25617[(2)] = inst_25487);

(statearr_25544_25617[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (33))){
var inst_25473 = (state_25514[(25)]);
var inst_25475 = cljs.core.chunked_seq_QMARK_.call(null,inst_25473);
var state_25514__$1 = state_25514;
if(inst_25475){
var statearr_25545_25618 = state_25514__$1;
(statearr_25545_25618[(1)] = (36));

} else {
var statearr_25546_25619 = state_25514__$1;
(statearr_25546_25619[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (13))){
var inst_25403 = (state_25514[(26)]);
var inst_25406 = cljs.core.async.close_BANG_.call(null,inst_25403);
var state_25514__$1 = state_25514;
var statearr_25547_25620 = state_25514__$1;
(statearr_25547_25620[(2)] = inst_25406);

(statearr_25547_25620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (22))){
var inst_25426 = (state_25514[(8)]);
var inst_25429 = cljs.core.async.close_BANG_.call(null,inst_25426);
var state_25514__$1 = state_25514;
var statearr_25548_25621 = state_25514__$1;
(statearr_25548_25621[(2)] = inst_25429);

(statearr_25548_25621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (36))){
var inst_25473 = (state_25514[(25)]);
var inst_25477 = cljs.core.chunk_first.call(null,inst_25473);
var inst_25478 = cljs.core.chunk_rest.call(null,inst_25473);
var inst_25479 = cljs.core.count.call(null,inst_25477);
var inst_25454 = inst_25478;
var inst_25455 = inst_25477;
var inst_25456 = inst_25479;
var inst_25457 = (0);
var state_25514__$1 = (function (){var statearr_25549 = state_25514;
(statearr_25549[(20)] = inst_25456);

(statearr_25549[(21)] = inst_25454);

(statearr_25549[(9)] = inst_25455);

(statearr_25549[(12)] = inst_25457);

return statearr_25549;
})();
var statearr_25550_25622 = state_25514__$1;
(statearr_25550_25622[(2)] = null);

(statearr_25550_25622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (41))){
var inst_25473 = (state_25514[(25)]);
var inst_25489 = (state_25514[(2)]);
var inst_25490 = cljs.core.next.call(null,inst_25473);
var inst_25454 = inst_25490;
var inst_25455 = null;
var inst_25456 = (0);
var inst_25457 = (0);
var state_25514__$1 = (function (){var statearr_25551 = state_25514;
(statearr_25551[(20)] = inst_25456);

(statearr_25551[(21)] = inst_25454);

(statearr_25551[(9)] = inst_25455);

(statearr_25551[(27)] = inst_25489);

(statearr_25551[(12)] = inst_25457);

return statearr_25551;
})();
var statearr_25552_25623 = state_25514__$1;
(statearr_25552_25623[(2)] = null);

(statearr_25552_25623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (43))){
var state_25514__$1 = state_25514;
var statearr_25553_25624 = state_25514__$1;
(statearr_25553_25624[(2)] = null);

(statearr_25553_25624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (29))){
var inst_25498 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25554_25625 = state_25514__$1;
(statearr_25554_25625[(2)] = inst_25498);

(statearr_25554_25625[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (44))){
var inst_25507 = (state_25514[(2)]);
var state_25514__$1 = (function (){var statearr_25555 = state_25514;
(statearr_25555[(28)] = inst_25507);

return statearr_25555;
})();
var statearr_25556_25626 = state_25514__$1;
(statearr_25556_25626[(2)] = null);

(statearr_25556_25626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (6))){
var inst_25446 = (state_25514[(29)]);
var inst_25445 = cljs.core.deref.call(null,cs);
var inst_25446__$1 = cljs.core.keys.call(null,inst_25445);
var inst_25447 = cljs.core.count.call(null,inst_25446__$1);
var inst_25448 = cljs.core.reset_BANG_.call(null,dctr,inst_25447);
var inst_25453 = cljs.core.seq.call(null,inst_25446__$1);
var inst_25454 = inst_25453;
var inst_25455 = null;
var inst_25456 = (0);
var inst_25457 = (0);
var state_25514__$1 = (function (){var statearr_25557 = state_25514;
(statearr_25557[(30)] = inst_25448);

(statearr_25557[(29)] = inst_25446__$1);

(statearr_25557[(20)] = inst_25456);

(statearr_25557[(21)] = inst_25454);

(statearr_25557[(9)] = inst_25455);

(statearr_25557[(12)] = inst_25457);

return statearr_25557;
})();
var statearr_25558_25627 = state_25514__$1;
(statearr_25558_25627[(2)] = null);

(statearr_25558_25627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (28))){
var inst_25454 = (state_25514[(21)]);
var inst_25473 = (state_25514[(25)]);
var inst_25473__$1 = cljs.core.seq.call(null,inst_25454);
var state_25514__$1 = (function (){var statearr_25559 = state_25514;
(statearr_25559[(25)] = inst_25473__$1);

return statearr_25559;
})();
if(inst_25473__$1){
var statearr_25560_25628 = state_25514__$1;
(statearr_25560_25628[(1)] = (33));

} else {
var statearr_25561_25629 = state_25514__$1;
(statearr_25561_25629[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (25))){
var inst_25456 = (state_25514[(20)]);
var inst_25457 = (state_25514[(12)]);
var inst_25459 = (inst_25457 < inst_25456);
var inst_25460 = inst_25459;
var state_25514__$1 = state_25514;
if(cljs.core.truth_(inst_25460)){
var statearr_25562_25630 = state_25514__$1;
(statearr_25562_25630[(1)] = (27));

} else {
var statearr_25563_25631 = state_25514__$1;
(statearr_25563_25631[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (34))){
var state_25514__$1 = state_25514;
var statearr_25564_25632 = state_25514__$1;
(statearr_25564_25632[(2)] = null);

(statearr_25564_25632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (17))){
var state_25514__$1 = state_25514;
var statearr_25565_25633 = state_25514__$1;
(statearr_25565_25633[(2)] = null);

(statearr_25565_25633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (3))){
var inst_25512 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25514__$1,inst_25512);
} else {
if((state_val_25515 === (12))){
var inst_25441 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25566_25634 = state_25514__$1;
(statearr_25566_25634[(2)] = inst_25441);

(statearr_25566_25634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (2))){
var state_25514__$1 = state_25514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25514__$1,(4),ch);
} else {
if((state_val_25515 === (23))){
var state_25514__$1 = state_25514;
var statearr_25567_25635 = state_25514__$1;
(statearr_25567_25635[(2)] = null);

(statearr_25567_25635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (35))){
var inst_25496 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25568_25636 = state_25514__$1;
(statearr_25568_25636[(2)] = inst_25496);

(statearr_25568_25636[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (19))){
var inst_25413 = (state_25514[(7)]);
var inst_25417 = cljs.core.chunk_first.call(null,inst_25413);
var inst_25418 = cljs.core.chunk_rest.call(null,inst_25413);
var inst_25419 = cljs.core.count.call(null,inst_25417);
var inst_25391 = inst_25418;
var inst_25392 = inst_25417;
var inst_25393 = inst_25419;
var inst_25394 = (0);
var state_25514__$1 = (function (){var statearr_25569 = state_25514;
(statearr_25569[(14)] = inst_25392);

(statearr_25569[(15)] = inst_25394);

(statearr_25569[(16)] = inst_25391);

(statearr_25569[(17)] = inst_25393);

return statearr_25569;
})();
var statearr_25570_25637 = state_25514__$1;
(statearr_25570_25637[(2)] = null);

(statearr_25570_25637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (11))){
var inst_25413 = (state_25514[(7)]);
var inst_25391 = (state_25514[(16)]);
var inst_25413__$1 = cljs.core.seq.call(null,inst_25391);
var state_25514__$1 = (function (){var statearr_25571 = state_25514;
(statearr_25571[(7)] = inst_25413__$1);

return statearr_25571;
})();
if(inst_25413__$1){
var statearr_25572_25638 = state_25514__$1;
(statearr_25572_25638[(1)] = (16));

} else {
var statearr_25573_25639 = state_25514__$1;
(statearr_25573_25639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (9))){
var inst_25443 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25574_25640 = state_25514__$1;
(statearr_25574_25640[(2)] = inst_25443);

(statearr_25574_25640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (5))){
var inst_25389 = cljs.core.deref.call(null,cs);
var inst_25390 = cljs.core.seq.call(null,inst_25389);
var inst_25391 = inst_25390;
var inst_25392 = null;
var inst_25393 = (0);
var inst_25394 = (0);
var state_25514__$1 = (function (){var statearr_25575 = state_25514;
(statearr_25575[(14)] = inst_25392);

(statearr_25575[(15)] = inst_25394);

(statearr_25575[(16)] = inst_25391);

(statearr_25575[(17)] = inst_25393);

return statearr_25575;
})();
var statearr_25576_25641 = state_25514__$1;
(statearr_25576_25641[(2)] = null);

(statearr_25576_25641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (14))){
var state_25514__$1 = state_25514;
var statearr_25577_25642 = state_25514__$1;
(statearr_25577_25642[(2)] = null);

(statearr_25577_25642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (45))){
var inst_25504 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25578_25643 = state_25514__$1;
(statearr_25578_25643[(2)] = inst_25504);

(statearr_25578_25643[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (26))){
var inst_25446 = (state_25514[(29)]);
var inst_25500 = (state_25514[(2)]);
var inst_25501 = cljs.core.seq.call(null,inst_25446);
var state_25514__$1 = (function (){var statearr_25579 = state_25514;
(statearr_25579[(31)] = inst_25500);

return statearr_25579;
})();
if(inst_25501){
var statearr_25580_25644 = state_25514__$1;
(statearr_25580_25644[(1)] = (42));

} else {
var statearr_25581_25645 = state_25514__$1;
(statearr_25581_25645[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (16))){
var inst_25413 = (state_25514[(7)]);
var inst_25415 = cljs.core.chunked_seq_QMARK_.call(null,inst_25413);
var state_25514__$1 = state_25514;
if(inst_25415){
var statearr_25582_25646 = state_25514__$1;
(statearr_25582_25646[(1)] = (19));

} else {
var statearr_25583_25647 = state_25514__$1;
(statearr_25583_25647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (38))){
var inst_25493 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25584_25648 = state_25514__$1;
(statearr_25584_25648[(2)] = inst_25493);

(statearr_25584_25648[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (30))){
var state_25514__$1 = state_25514;
var statearr_25585_25649 = state_25514__$1;
(statearr_25585_25649[(2)] = null);

(statearr_25585_25649[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (10))){
var inst_25392 = (state_25514[(14)]);
var inst_25394 = (state_25514[(15)]);
var inst_25402 = cljs.core._nth.call(null,inst_25392,inst_25394);
var inst_25403 = cljs.core.nth.call(null,inst_25402,(0),null);
var inst_25404 = cljs.core.nth.call(null,inst_25402,(1),null);
var state_25514__$1 = (function (){var statearr_25586 = state_25514;
(statearr_25586[(26)] = inst_25403);

return statearr_25586;
})();
if(cljs.core.truth_(inst_25404)){
var statearr_25587_25650 = state_25514__$1;
(statearr_25587_25650[(1)] = (13));

} else {
var statearr_25588_25651 = state_25514__$1;
(statearr_25588_25651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (18))){
var inst_25439 = (state_25514[(2)]);
var state_25514__$1 = state_25514;
var statearr_25589_25652 = state_25514__$1;
(statearr_25589_25652[(2)] = inst_25439);

(statearr_25589_25652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (42))){
var state_25514__$1 = state_25514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25514__$1,(45),dchan);
} else {
if((state_val_25515 === (37))){
var inst_25482 = (state_25514[(23)]);
var inst_25382 = (state_25514[(11)]);
var inst_25473 = (state_25514[(25)]);
var inst_25482__$1 = cljs.core.first.call(null,inst_25473);
var inst_25483 = cljs.core.async.put_BANG_.call(null,inst_25482__$1,inst_25382,done);
var state_25514__$1 = (function (){var statearr_25590 = state_25514;
(statearr_25590[(23)] = inst_25482__$1);

return statearr_25590;
})();
if(cljs.core.truth_(inst_25483)){
var statearr_25591_25653 = state_25514__$1;
(statearr_25591_25653[(1)] = (39));

} else {
var statearr_25592_25654 = state_25514__$1;
(statearr_25592_25654[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25515 === (8))){
var inst_25394 = (state_25514[(15)]);
var inst_25393 = (state_25514[(17)]);
var inst_25396 = (inst_25394 < inst_25393);
var inst_25397 = inst_25396;
var state_25514__$1 = state_25514;
if(cljs.core.truth_(inst_25397)){
var statearr_25593_25655 = state_25514__$1;
(statearr_25593_25655[(1)] = (10));

} else {
var statearr_25594_25656 = state_25514__$1;
(statearr_25594_25656[(1)] = (11));

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
});})(c__24265__auto___25602,cs,m,dchan,dctr,done))
;
return ((function (switch__24151__auto__,c__24265__auto___25602,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24152__auto__ = null;
var cljs$core$async$mult_$_state_machine__24152__auto____0 = (function (){
var statearr_25598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25598[(0)] = cljs$core$async$mult_$_state_machine__24152__auto__);

(statearr_25598[(1)] = (1));

return statearr_25598;
});
var cljs$core$async$mult_$_state_machine__24152__auto____1 = (function (state_25514){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_25514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e25599){if((e25599 instanceof Object)){
var ex__24155__auto__ = e25599;
var statearr_25600_25657 = state_25514;
(statearr_25600_25657[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25658 = state_25514;
state_25514 = G__25658;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24152__auto__ = function(state_25514){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24152__auto____1.call(this,state_25514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24152__auto____0;
cljs$core$async$mult_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24152__auto____1;
return cljs$core$async$mult_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___25602,cs,m,dchan,dctr,done))
})();
var state__24267__auto__ = (function (){var statearr_25601 = f__24266__auto__.call(null);
(statearr_25601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___25602);

return statearr_25601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___25602,cs,m,dchan,dctr,done))
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
var args25659 = [];
var len__22773__auto___25662 = arguments.length;
var i__22774__auto___25663 = (0);
while(true){
if((i__22774__auto___25663 < len__22773__auto___25662)){
args25659.push((arguments[i__22774__auto___25663]));

var G__25664 = (i__22774__auto___25663 + (1));
i__22774__auto___25663 = G__25664;
continue;
} else {
}
break;
}

var G__25661 = args25659.length;
switch (G__25661) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25659.length)].join('')));

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
var len__22773__auto___25676 = arguments.length;
var i__22774__auto___25677 = (0);
while(true){
if((i__22774__auto___25677 < len__22773__auto___25676)){
args__22780__auto__.push((arguments[i__22774__auto___25677]));

var G__25678 = (i__22774__auto___25677 + (1));
i__22774__auto___25677 = G__25678;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25670){
var map__25671 = p__25670;
var map__25671__$1 = ((((!((map__25671 == null)))?((((map__25671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25671):map__25671);
var opts = map__25671__$1;
var statearr_25673_25679 = state;
(statearr_25673_25679[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6552__auto__ = cljs.core.async.do_alts.call(null,((function (map__25671,map__25671__$1,opts){
return (function (val){
var statearr_25674_25680 = state;
(statearr_25674_25680[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25671,map__25671__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6552__auto__)){
var cb = temp__6552__auto__;
var statearr_25675_25681 = state;
(statearr_25675_25681[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25666){
var G__25667 = cljs.core.first.call(null,seq25666);
var seq25666__$1 = cljs.core.next.call(null,seq25666);
var G__25668 = cljs.core.first.call(null,seq25666__$1);
var seq25666__$2 = cljs.core.next.call(null,seq25666__$1);
var G__25669 = cljs.core.first.call(null,seq25666__$2);
var seq25666__$3 = cljs.core.next.call(null,seq25666__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25667,G__25668,G__25669,seq25666__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25847 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25848){
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
this.meta25848 = meta25848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25849,meta25848__$1){
var self__ = this;
var _25849__$1 = this;
return (new cljs.core.async.t_cljs$core$async25847(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25848__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25849){
var self__ = this;
var _25849__$1 = this;
return self__.meta25848;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25847.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25848","meta25848",-899230785,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25847";

cljs.core.async.t_cljs$core$async25847.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async25847");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25847 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25847(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25848){
return (new cljs.core.async.t_cljs$core$async25847(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25848));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25847(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24265__auto___26012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25949){
var state_val_25950 = (state_25949[(1)]);
if((state_val_25950 === (7))){
var inst_25865 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25951_26013 = state_25949__$1;
(statearr_25951_26013[(2)] = inst_25865);

(statearr_25951_26013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (20))){
var inst_25877 = (state_25949[(7)]);
var state_25949__$1 = state_25949;
var statearr_25952_26014 = state_25949__$1;
(statearr_25952_26014[(2)] = inst_25877);

(statearr_25952_26014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (27))){
var state_25949__$1 = state_25949;
var statearr_25953_26015 = state_25949__$1;
(statearr_25953_26015[(2)] = null);

(statearr_25953_26015[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (1))){
var inst_25853 = (state_25949[(8)]);
var inst_25853__$1 = calc_state.call(null);
var inst_25855 = (inst_25853__$1 == null);
var inst_25856 = cljs.core.not.call(null,inst_25855);
var state_25949__$1 = (function (){var statearr_25954 = state_25949;
(statearr_25954[(8)] = inst_25853__$1);

return statearr_25954;
})();
if(inst_25856){
var statearr_25955_26016 = state_25949__$1;
(statearr_25955_26016[(1)] = (2));

} else {
var statearr_25956_26017 = state_25949__$1;
(statearr_25956_26017[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (24))){
var inst_25909 = (state_25949[(9)]);
var inst_25923 = (state_25949[(10)]);
var inst_25900 = (state_25949[(11)]);
var inst_25923__$1 = inst_25900.call(null,inst_25909);
var state_25949__$1 = (function (){var statearr_25957 = state_25949;
(statearr_25957[(10)] = inst_25923__$1);

return statearr_25957;
})();
if(cljs.core.truth_(inst_25923__$1)){
var statearr_25958_26018 = state_25949__$1;
(statearr_25958_26018[(1)] = (29));

} else {
var statearr_25959_26019 = state_25949__$1;
(statearr_25959_26019[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (4))){
var inst_25868 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25868)){
var statearr_25960_26020 = state_25949__$1;
(statearr_25960_26020[(1)] = (8));

} else {
var statearr_25961_26021 = state_25949__$1;
(statearr_25961_26021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (15))){
var inst_25894 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25894)){
var statearr_25962_26022 = state_25949__$1;
(statearr_25962_26022[(1)] = (19));

} else {
var statearr_25963_26023 = state_25949__$1;
(statearr_25963_26023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (21))){
var inst_25899 = (state_25949[(12)]);
var inst_25899__$1 = (state_25949[(2)]);
var inst_25900 = cljs.core.get.call(null,inst_25899__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25901 = cljs.core.get.call(null,inst_25899__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25902 = cljs.core.get.call(null,inst_25899__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25949__$1 = (function (){var statearr_25964 = state_25949;
(statearr_25964[(12)] = inst_25899__$1);

(statearr_25964[(13)] = inst_25901);

(statearr_25964[(11)] = inst_25900);

return statearr_25964;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25949__$1,(22),inst_25902);
} else {
if((state_val_25950 === (31))){
var inst_25931 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25931)){
var statearr_25965_26024 = state_25949__$1;
(statearr_25965_26024[(1)] = (32));

} else {
var statearr_25966_26025 = state_25949__$1;
(statearr_25966_26025[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (32))){
var inst_25908 = (state_25949[(14)]);
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25949__$1,(35),out,inst_25908);
} else {
if((state_val_25950 === (33))){
var inst_25899 = (state_25949[(12)]);
var inst_25877 = inst_25899;
var state_25949__$1 = (function (){var statearr_25967 = state_25949;
(statearr_25967[(7)] = inst_25877);

return statearr_25967;
})();
var statearr_25968_26026 = state_25949__$1;
(statearr_25968_26026[(2)] = null);

(statearr_25968_26026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (13))){
var inst_25877 = (state_25949[(7)]);
var inst_25884 = inst_25877.cljs$lang$protocol_mask$partition0$;
var inst_25885 = (inst_25884 & (64));
var inst_25886 = inst_25877.cljs$core$ISeq$;
var inst_25887 = (inst_25885) || (inst_25886);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25887)){
var statearr_25969_26027 = state_25949__$1;
(statearr_25969_26027[(1)] = (16));

} else {
var statearr_25970_26028 = state_25949__$1;
(statearr_25970_26028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (22))){
var inst_25908 = (state_25949[(14)]);
var inst_25909 = (state_25949[(9)]);
var inst_25907 = (state_25949[(2)]);
var inst_25908__$1 = cljs.core.nth.call(null,inst_25907,(0),null);
var inst_25909__$1 = cljs.core.nth.call(null,inst_25907,(1),null);
var inst_25910 = (inst_25908__$1 == null);
var inst_25911 = cljs.core._EQ_.call(null,inst_25909__$1,change);
var inst_25912 = (inst_25910) || (inst_25911);
var state_25949__$1 = (function (){var statearr_25971 = state_25949;
(statearr_25971[(14)] = inst_25908__$1);

(statearr_25971[(9)] = inst_25909__$1);

return statearr_25971;
})();
if(cljs.core.truth_(inst_25912)){
var statearr_25972_26029 = state_25949__$1;
(statearr_25972_26029[(1)] = (23));

} else {
var statearr_25973_26030 = state_25949__$1;
(statearr_25973_26030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (36))){
var inst_25899 = (state_25949[(12)]);
var inst_25877 = inst_25899;
var state_25949__$1 = (function (){var statearr_25974 = state_25949;
(statearr_25974[(7)] = inst_25877);

return statearr_25974;
})();
var statearr_25975_26031 = state_25949__$1;
(statearr_25975_26031[(2)] = null);

(statearr_25975_26031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (29))){
var inst_25923 = (state_25949[(10)]);
var state_25949__$1 = state_25949;
var statearr_25976_26032 = state_25949__$1;
(statearr_25976_26032[(2)] = inst_25923);

(statearr_25976_26032[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (6))){
var state_25949__$1 = state_25949;
var statearr_25977_26033 = state_25949__$1;
(statearr_25977_26033[(2)] = false);

(statearr_25977_26033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (28))){
var inst_25919 = (state_25949[(2)]);
var inst_25920 = calc_state.call(null);
var inst_25877 = inst_25920;
var state_25949__$1 = (function (){var statearr_25978 = state_25949;
(statearr_25978[(15)] = inst_25919);

(statearr_25978[(7)] = inst_25877);

return statearr_25978;
})();
var statearr_25979_26034 = state_25949__$1;
(statearr_25979_26034[(2)] = null);

(statearr_25979_26034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (25))){
var inst_25945 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25980_26035 = state_25949__$1;
(statearr_25980_26035[(2)] = inst_25945);

(statearr_25980_26035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (34))){
var inst_25943 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25981_26036 = state_25949__$1;
(statearr_25981_26036[(2)] = inst_25943);

(statearr_25981_26036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (17))){
var state_25949__$1 = state_25949;
var statearr_25982_26037 = state_25949__$1;
(statearr_25982_26037[(2)] = false);

(statearr_25982_26037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (3))){
var state_25949__$1 = state_25949;
var statearr_25983_26038 = state_25949__$1;
(statearr_25983_26038[(2)] = false);

(statearr_25983_26038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (12))){
var inst_25947 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25949__$1,inst_25947);
} else {
if((state_val_25950 === (2))){
var inst_25853 = (state_25949[(8)]);
var inst_25858 = inst_25853.cljs$lang$protocol_mask$partition0$;
var inst_25859 = (inst_25858 & (64));
var inst_25860 = inst_25853.cljs$core$ISeq$;
var inst_25861 = (inst_25859) || (inst_25860);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25861)){
var statearr_25984_26039 = state_25949__$1;
(statearr_25984_26039[(1)] = (5));

} else {
var statearr_25985_26040 = state_25949__$1;
(statearr_25985_26040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (23))){
var inst_25908 = (state_25949[(14)]);
var inst_25914 = (inst_25908 == null);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25914)){
var statearr_25986_26041 = state_25949__$1;
(statearr_25986_26041[(1)] = (26));

} else {
var statearr_25987_26042 = state_25949__$1;
(statearr_25987_26042[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (35))){
var inst_25934 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25934)){
var statearr_25988_26043 = state_25949__$1;
(statearr_25988_26043[(1)] = (36));

} else {
var statearr_25989_26044 = state_25949__$1;
(statearr_25989_26044[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (19))){
var inst_25877 = (state_25949[(7)]);
var inst_25896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25877);
var state_25949__$1 = state_25949;
var statearr_25990_26045 = state_25949__$1;
(statearr_25990_26045[(2)] = inst_25896);

(statearr_25990_26045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (11))){
var inst_25877 = (state_25949[(7)]);
var inst_25881 = (inst_25877 == null);
var inst_25882 = cljs.core.not.call(null,inst_25881);
var state_25949__$1 = state_25949;
if(inst_25882){
var statearr_25991_26046 = state_25949__$1;
(statearr_25991_26046[(1)] = (13));

} else {
var statearr_25992_26047 = state_25949__$1;
(statearr_25992_26047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (9))){
var inst_25853 = (state_25949[(8)]);
var state_25949__$1 = state_25949;
var statearr_25993_26048 = state_25949__$1;
(statearr_25993_26048[(2)] = inst_25853);

(statearr_25993_26048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (5))){
var state_25949__$1 = state_25949;
var statearr_25994_26049 = state_25949__$1;
(statearr_25994_26049[(2)] = true);

(statearr_25994_26049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (14))){
var state_25949__$1 = state_25949;
var statearr_25995_26050 = state_25949__$1;
(statearr_25995_26050[(2)] = false);

(statearr_25995_26050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (26))){
var inst_25909 = (state_25949[(9)]);
var inst_25916 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25909);
var state_25949__$1 = state_25949;
var statearr_25996_26051 = state_25949__$1;
(statearr_25996_26051[(2)] = inst_25916);

(statearr_25996_26051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (16))){
var state_25949__$1 = state_25949;
var statearr_25997_26052 = state_25949__$1;
(statearr_25997_26052[(2)] = true);

(statearr_25997_26052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (38))){
var inst_25939 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25998_26053 = state_25949__$1;
(statearr_25998_26053[(2)] = inst_25939);

(statearr_25998_26053[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (30))){
var inst_25901 = (state_25949[(13)]);
var inst_25909 = (state_25949[(9)]);
var inst_25900 = (state_25949[(11)]);
var inst_25926 = cljs.core.empty_QMARK_.call(null,inst_25900);
var inst_25927 = inst_25901.call(null,inst_25909);
var inst_25928 = cljs.core.not.call(null,inst_25927);
var inst_25929 = (inst_25926) && (inst_25928);
var state_25949__$1 = state_25949;
var statearr_25999_26054 = state_25949__$1;
(statearr_25999_26054[(2)] = inst_25929);

(statearr_25999_26054[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (10))){
var inst_25853 = (state_25949[(8)]);
var inst_25873 = (state_25949[(2)]);
var inst_25874 = cljs.core.get.call(null,inst_25873,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25875 = cljs.core.get.call(null,inst_25873,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25876 = cljs.core.get.call(null,inst_25873,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25877 = inst_25853;
var state_25949__$1 = (function (){var statearr_26000 = state_25949;
(statearr_26000[(16)] = inst_25874);

(statearr_26000[(17)] = inst_25875);

(statearr_26000[(18)] = inst_25876);

(statearr_26000[(7)] = inst_25877);

return statearr_26000;
})();
var statearr_26001_26055 = state_25949__$1;
(statearr_26001_26055[(2)] = null);

(statearr_26001_26055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (18))){
var inst_25891 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_26002_26056 = state_25949__$1;
(statearr_26002_26056[(2)] = inst_25891);

(statearr_26002_26056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (37))){
var state_25949__$1 = state_25949;
var statearr_26003_26057 = state_25949__$1;
(statearr_26003_26057[(2)] = null);

(statearr_26003_26057[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (8))){
var inst_25853 = (state_25949[(8)]);
var inst_25870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25853);
var state_25949__$1 = state_25949;
var statearr_26004_26058 = state_25949__$1;
(statearr_26004_26058[(2)] = inst_25870);

(statearr_26004_26058[(1)] = (10));


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
});})(c__24265__auto___26012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24151__auto__,c__24265__auto___26012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24152__auto__ = null;
var cljs$core$async$mix_$_state_machine__24152__auto____0 = (function (){
var statearr_26008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26008[(0)] = cljs$core$async$mix_$_state_machine__24152__auto__);

(statearr_26008[(1)] = (1));

return statearr_26008;
});
var cljs$core$async$mix_$_state_machine__24152__auto____1 = (function (state_25949){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_25949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26009){if((e26009 instanceof Object)){
var ex__24155__auto__ = e26009;
var statearr_26010_26059 = state_25949;
(statearr_26010_26059[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26060 = state_25949;
state_25949 = G__26060;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24152__auto__ = function(state_25949){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24152__auto____1.call(this,state_25949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24152__auto____0;
cljs$core$async$mix_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24152__auto____1;
return cljs$core$async$mix_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24267__auto__ = (function (){var statearr_26011 = f__24266__auto__.call(null);
(statearr_26011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26012);

return statearr_26011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26061 = [];
var len__22773__auto___26064 = arguments.length;
var i__22774__auto___26065 = (0);
while(true){
if((i__22774__auto___26065 < len__22773__auto___26064)){
args26061.push((arguments[i__22774__auto___26065]));

var G__26066 = (i__22774__auto___26065 + (1));
i__22774__auto___26065 = G__26066;
continue;
} else {
}
break;
}

var G__26063 = args26061.length;
switch (G__26063) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26061.length)].join('')));

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
var args26069 = [];
var len__22773__auto___26194 = arguments.length;
var i__22774__auto___26195 = (0);
while(true){
if((i__22774__auto___26195 < len__22773__auto___26194)){
args26069.push((arguments[i__22774__auto___26195]));

var G__26196 = (i__22774__auto___26195 + (1));
i__22774__auto___26195 = G__26196;
continue;
} else {
}
break;
}

var G__26071 = args26069.length;
switch (G__26071) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26069.length)].join('')));

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
return (function (p1__26068_SHARP_){
if(cljs.core.truth_(p1__26068_SHARP_.call(null,topic))){
return p1__26068_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26068_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21590__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26072 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26073){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26073 = meta26073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26074,meta26073__$1){
var self__ = this;
var _26074__$1 = this;
return (new cljs.core.async.t_cljs$core$async26072(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26073__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26074){
var self__ = this;
var _26074__$1 = this;
return self__.meta26073;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26072.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26073","meta26073",333290255,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26072";

cljs.core.async.t_cljs$core$async26072.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async26072");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26072 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26073){
return (new cljs.core.async.t_cljs$core$async26072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26073));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26072(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24265__auto___26198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26198,mults,ensure_mult,p){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26198,mults,ensure_mult,p){
return (function (state_26146){
var state_val_26147 = (state_26146[(1)]);
if((state_val_26147 === (7))){
var inst_26142 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
var statearr_26148_26199 = state_26146__$1;
(statearr_26148_26199[(2)] = inst_26142);

(statearr_26148_26199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (20))){
var state_26146__$1 = state_26146;
var statearr_26149_26200 = state_26146__$1;
(statearr_26149_26200[(2)] = null);

(statearr_26149_26200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (1))){
var state_26146__$1 = state_26146;
var statearr_26150_26201 = state_26146__$1;
(statearr_26150_26201[(2)] = null);

(statearr_26150_26201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (24))){
var inst_26125 = (state_26146[(7)]);
var inst_26134 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26125);
var state_26146__$1 = state_26146;
var statearr_26151_26202 = state_26146__$1;
(statearr_26151_26202[(2)] = inst_26134);

(statearr_26151_26202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (4))){
var inst_26077 = (state_26146[(8)]);
var inst_26077__$1 = (state_26146[(2)]);
var inst_26078 = (inst_26077__$1 == null);
var state_26146__$1 = (function (){var statearr_26152 = state_26146;
(statearr_26152[(8)] = inst_26077__$1);

return statearr_26152;
})();
if(cljs.core.truth_(inst_26078)){
var statearr_26153_26203 = state_26146__$1;
(statearr_26153_26203[(1)] = (5));

} else {
var statearr_26154_26204 = state_26146__$1;
(statearr_26154_26204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (15))){
var inst_26119 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
var statearr_26155_26205 = state_26146__$1;
(statearr_26155_26205[(2)] = inst_26119);

(statearr_26155_26205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (21))){
var inst_26139 = (state_26146[(2)]);
var state_26146__$1 = (function (){var statearr_26156 = state_26146;
(statearr_26156[(9)] = inst_26139);

return statearr_26156;
})();
var statearr_26157_26206 = state_26146__$1;
(statearr_26157_26206[(2)] = null);

(statearr_26157_26206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (13))){
var inst_26101 = (state_26146[(10)]);
var inst_26103 = cljs.core.chunked_seq_QMARK_.call(null,inst_26101);
var state_26146__$1 = state_26146;
if(inst_26103){
var statearr_26158_26207 = state_26146__$1;
(statearr_26158_26207[(1)] = (16));

} else {
var statearr_26159_26208 = state_26146__$1;
(statearr_26159_26208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (22))){
var inst_26131 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
if(cljs.core.truth_(inst_26131)){
var statearr_26160_26209 = state_26146__$1;
(statearr_26160_26209[(1)] = (23));

} else {
var statearr_26161_26210 = state_26146__$1;
(statearr_26161_26210[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (6))){
var inst_26127 = (state_26146[(11)]);
var inst_26077 = (state_26146[(8)]);
var inst_26125 = (state_26146[(7)]);
var inst_26125__$1 = topic_fn.call(null,inst_26077);
var inst_26126 = cljs.core.deref.call(null,mults);
var inst_26127__$1 = cljs.core.get.call(null,inst_26126,inst_26125__$1);
var state_26146__$1 = (function (){var statearr_26162 = state_26146;
(statearr_26162[(11)] = inst_26127__$1);

(statearr_26162[(7)] = inst_26125__$1);

return statearr_26162;
})();
if(cljs.core.truth_(inst_26127__$1)){
var statearr_26163_26211 = state_26146__$1;
(statearr_26163_26211[(1)] = (19));

} else {
var statearr_26164_26212 = state_26146__$1;
(statearr_26164_26212[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (25))){
var inst_26136 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
var statearr_26165_26213 = state_26146__$1;
(statearr_26165_26213[(2)] = inst_26136);

(statearr_26165_26213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (17))){
var inst_26101 = (state_26146[(10)]);
var inst_26110 = cljs.core.first.call(null,inst_26101);
var inst_26111 = cljs.core.async.muxch_STAR_.call(null,inst_26110);
var inst_26112 = cljs.core.async.close_BANG_.call(null,inst_26111);
var inst_26113 = cljs.core.next.call(null,inst_26101);
var inst_26087 = inst_26113;
var inst_26088 = null;
var inst_26089 = (0);
var inst_26090 = (0);
var state_26146__$1 = (function (){var statearr_26166 = state_26146;
(statearr_26166[(12)] = inst_26090);

(statearr_26166[(13)] = inst_26089);

(statearr_26166[(14)] = inst_26088);

(statearr_26166[(15)] = inst_26112);

(statearr_26166[(16)] = inst_26087);

return statearr_26166;
})();
var statearr_26167_26214 = state_26146__$1;
(statearr_26167_26214[(2)] = null);

(statearr_26167_26214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (3))){
var inst_26144 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26146__$1,inst_26144);
} else {
if((state_val_26147 === (12))){
var inst_26121 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
var statearr_26168_26215 = state_26146__$1;
(statearr_26168_26215[(2)] = inst_26121);

(statearr_26168_26215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (2))){
var state_26146__$1 = state_26146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26146__$1,(4),ch);
} else {
if((state_val_26147 === (23))){
var state_26146__$1 = state_26146;
var statearr_26169_26216 = state_26146__$1;
(statearr_26169_26216[(2)] = null);

(statearr_26169_26216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (19))){
var inst_26127 = (state_26146[(11)]);
var inst_26077 = (state_26146[(8)]);
var inst_26129 = cljs.core.async.muxch_STAR_.call(null,inst_26127);
var state_26146__$1 = state_26146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26146__$1,(22),inst_26129,inst_26077);
} else {
if((state_val_26147 === (11))){
var inst_26101 = (state_26146[(10)]);
var inst_26087 = (state_26146[(16)]);
var inst_26101__$1 = cljs.core.seq.call(null,inst_26087);
var state_26146__$1 = (function (){var statearr_26170 = state_26146;
(statearr_26170[(10)] = inst_26101__$1);

return statearr_26170;
})();
if(inst_26101__$1){
var statearr_26171_26217 = state_26146__$1;
(statearr_26171_26217[(1)] = (13));

} else {
var statearr_26172_26218 = state_26146__$1;
(statearr_26172_26218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (9))){
var inst_26123 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
var statearr_26173_26219 = state_26146__$1;
(statearr_26173_26219[(2)] = inst_26123);

(statearr_26173_26219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (5))){
var inst_26084 = cljs.core.deref.call(null,mults);
var inst_26085 = cljs.core.vals.call(null,inst_26084);
var inst_26086 = cljs.core.seq.call(null,inst_26085);
var inst_26087 = inst_26086;
var inst_26088 = null;
var inst_26089 = (0);
var inst_26090 = (0);
var state_26146__$1 = (function (){var statearr_26174 = state_26146;
(statearr_26174[(12)] = inst_26090);

(statearr_26174[(13)] = inst_26089);

(statearr_26174[(14)] = inst_26088);

(statearr_26174[(16)] = inst_26087);

return statearr_26174;
})();
var statearr_26175_26220 = state_26146__$1;
(statearr_26175_26220[(2)] = null);

(statearr_26175_26220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (14))){
var state_26146__$1 = state_26146;
var statearr_26179_26221 = state_26146__$1;
(statearr_26179_26221[(2)] = null);

(statearr_26179_26221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (16))){
var inst_26101 = (state_26146[(10)]);
var inst_26105 = cljs.core.chunk_first.call(null,inst_26101);
var inst_26106 = cljs.core.chunk_rest.call(null,inst_26101);
var inst_26107 = cljs.core.count.call(null,inst_26105);
var inst_26087 = inst_26106;
var inst_26088 = inst_26105;
var inst_26089 = inst_26107;
var inst_26090 = (0);
var state_26146__$1 = (function (){var statearr_26180 = state_26146;
(statearr_26180[(12)] = inst_26090);

(statearr_26180[(13)] = inst_26089);

(statearr_26180[(14)] = inst_26088);

(statearr_26180[(16)] = inst_26087);

return statearr_26180;
})();
var statearr_26181_26222 = state_26146__$1;
(statearr_26181_26222[(2)] = null);

(statearr_26181_26222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (10))){
var inst_26090 = (state_26146[(12)]);
var inst_26089 = (state_26146[(13)]);
var inst_26088 = (state_26146[(14)]);
var inst_26087 = (state_26146[(16)]);
var inst_26095 = cljs.core._nth.call(null,inst_26088,inst_26090);
var inst_26096 = cljs.core.async.muxch_STAR_.call(null,inst_26095);
var inst_26097 = cljs.core.async.close_BANG_.call(null,inst_26096);
var inst_26098 = (inst_26090 + (1));
var tmp26176 = inst_26089;
var tmp26177 = inst_26088;
var tmp26178 = inst_26087;
var inst_26087__$1 = tmp26178;
var inst_26088__$1 = tmp26177;
var inst_26089__$1 = tmp26176;
var inst_26090__$1 = inst_26098;
var state_26146__$1 = (function (){var statearr_26182 = state_26146;
(statearr_26182[(12)] = inst_26090__$1);

(statearr_26182[(13)] = inst_26089__$1);

(statearr_26182[(17)] = inst_26097);

(statearr_26182[(14)] = inst_26088__$1);

(statearr_26182[(16)] = inst_26087__$1);

return statearr_26182;
})();
var statearr_26183_26223 = state_26146__$1;
(statearr_26183_26223[(2)] = null);

(statearr_26183_26223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (18))){
var inst_26116 = (state_26146[(2)]);
var state_26146__$1 = state_26146;
var statearr_26184_26224 = state_26146__$1;
(statearr_26184_26224[(2)] = inst_26116);

(statearr_26184_26224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26147 === (8))){
var inst_26090 = (state_26146[(12)]);
var inst_26089 = (state_26146[(13)]);
var inst_26092 = (inst_26090 < inst_26089);
var inst_26093 = inst_26092;
var state_26146__$1 = state_26146;
if(cljs.core.truth_(inst_26093)){
var statearr_26185_26225 = state_26146__$1;
(statearr_26185_26225[(1)] = (10));

} else {
var statearr_26186_26226 = state_26146__$1;
(statearr_26186_26226[(1)] = (11));

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
});})(c__24265__auto___26198,mults,ensure_mult,p))
;
return ((function (switch__24151__auto__,c__24265__auto___26198,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_26190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26190[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_26190[(1)] = (1));

return statearr_26190;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_26146){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26191){if((e26191 instanceof Object)){
var ex__24155__auto__ = e26191;
var statearr_26192_26227 = state_26146;
(statearr_26192_26227[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26228 = state_26146;
state_26146 = G__26228;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_26146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_26146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26198,mults,ensure_mult,p))
})();
var state__24267__auto__ = (function (){var statearr_26193 = f__24266__auto__.call(null);
(statearr_26193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26198);

return statearr_26193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26198,mults,ensure_mult,p))
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
var args26229 = [];
var len__22773__auto___26232 = arguments.length;
var i__22774__auto___26233 = (0);
while(true){
if((i__22774__auto___26233 < len__22773__auto___26232)){
args26229.push((arguments[i__22774__auto___26233]));

var G__26234 = (i__22774__auto___26233 + (1));
i__22774__auto___26233 = G__26234;
continue;
} else {
}
break;
}

var G__26231 = args26229.length;
switch (G__26231) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26229.length)].join('')));

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
var args26236 = [];
var len__22773__auto___26239 = arguments.length;
var i__22774__auto___26240 = (0);
while(true){
if((i__22774__auto___26240 < len__22773__auto___26239)){
args26236.push((arguments[i__22774__auto___26240]));

var G__26241 = (i__22774__auto___26240 + (1));
i__22774__auto___26240 = G__26241;
continue;
} else {
}
break;
}

var G__26238 = args26236.length;
switch (G__26238) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26236.length)].join('')));

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
var args26243 = [];
var len__22773__auto___26314 = arguments.length;
var i__22774__auto___26315 = (0);
while(true){
if((i__22774__auto___26315 < len__22773__auto___26314)){
args26243.push((arguments[i__22774__auto___26315]));

var G__26316 = (i__22774__auto___26315 + (1));
i__22774__auto___26315 = G__26316;
continue;
} else {
}
break;
}

var G__26245 = args26243.length;
switch (G__26245) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26243.length)].join('')));

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
var c__24265__auto___26318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26284){
var state_val_26285 = (state_26284[(1)]);
if((state_val_26285 === (7))){
var state_26284__$1 = state_26284;
var statearr_26286_26319 = state_26284__$1;
(statearr_26286_26319[(2)] = null);

(statearr_26286_26319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (1))){
var state_26284__$1 = state_26284;
var statearr_26287_26320 = state_26284__$1;
(statearr_26287_26320[(2)] = null);

(statearr_26287_26320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (4))){
var inst_26248 = (state_26284[(7)]);
var inst_26250 = (inst_26248 < cnt);
var state_26284__$1 = state_26284;
if(cljs.core.truth_(inst_26250)){
var statearr_26288_26321 = state_26284__$1;
(statearr_26288_26321[(1)] = (6));

} else {
var statearr_26289_26322 = state_26284__$1;
(statearr_26289_26322[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (15))){
var inst_26280 = (state_26284[(2)]);
var state_26284__$1 = state_26284;
var statearr_26290_26323 = state_26284__$1;
(statearr_26290_26323[(2)] = inst_26280);

(statearr_26290_26323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (13))){
var inst_26273 = cljs.core.async.close_BANG_.call(null,out);
var state_26284__$1 = state_26284;
var statearr_26291_26324 = state_26284__$1;
(statearr_26291_26324[(2)] = inst_26273);

(statearr_26291_26324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (6))){
var state_26284__$1 = state_26284;
var statearr_26292_26325 = state_26284__$1;
(statearr_26292_26325[(2)] = null);

(statearr_26292_26325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (3))){
var inst_26282 = (state_26284[(2)]);
var state_26284__$1 = state_26284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26284__$1,inst_26282);
} else {
if((state_val_26285 === (12))){
var inst_26270 = (state_26284[(8)]);
var inst_26270__$1 = (state_26284[(2)]);
var inst_26271 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26270__$1);
var state_26284__$1 = (function (){var statearr_26293 = state_26284;
(statearr_26293[(8)] = inst_26270__$1);

return statearr_26293;
})();
if(cljs.core.truth_(inst_26271)){
var statearr_26294_26326 = state_26284__$1;
(statearr_26294_26326[(1)] = (13));

} else {
var statearr_26295_26327 = state_26284__$1;
(statearr_26295_26327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (2))){
var inst_26247 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26248 = (0);
var state_26284__$1 = (function (){var statearr_26296 = state_26284;
(statearr_26296[(7)] = inst_26248);

(statearr_26296[(9)] = inst_26247);

return statearr_26296;
})();
var statearr_26297_26328 = state_26284__$1;
(statearr_26297_26328[(2)] = null);

(statearr_26297_26328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (11))){
var inst_26248 = (state_26284[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26284,(10),Object,null,(9));
var inst_26257 = chs__$1.call(null,inst_26248);
var inst_26258 = done.call(null,inst_26248);
var inst_26259 = cljs.core.async.take_BANG_.call(null,inst_26257,inst_26258);
var state_26284__$1 = state_26284;
var statearr_26298_26329 = state_26284__$1;
(statearr_26298_26329[(2)] = inst_26259);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (9))){
var inst_26248 = (state_26284[(7)]);
var inst_26261 = (state_26284[(2)]);
var inst_26262 = (inst_26248 + (1));
var inst_26248__$1 = inst_26262;
var state_26284__$1 = (function (){var statearr_26299 = state_26284;
(statearr_26299[(7)] = inst_26248__$1);

(statearr_26299[(10)] = inst_26261);

return statearr_26299;
})();
var statearr_26300_26330 = state_26284__$1;
(statearr_26300_26330[(2)] = null);

(statearr_26300_26330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (5))){
var inst_26268 = (state_26284[(2)]);
var state_26284__$1 = (function (){var statearr_26301 = state_26284;
(statearr_26301[(11)] = inst_26268);

return statearr_26301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26284__$1,(12),dchan);
} else {
if((state_val_26285 === (14))){
var inst_26270 = (state_26284[(8)]);
var inst_26275 = cljs.core.apply.call(null,f,inst_26270);
var state_26284__$1 = state_26284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26284__$1,(16),out,inst_26275);
} else {
if((state_val_26285 === (16))){
var inst_26277 = (state_26284[(2)]);
var state_26284__$1 = (function (){var statearr_26302 = state_26284;
(statearr_26302[(12)] = inst_26277);

return statearr_26302;
})();
var statearr_26303_26331 = state_26284__$1;
(statearr_26303_26331[(2)] = null);

(statearr_26303_26331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (10))){
var inst_26252 = (state_26284[(2)]);
var inst_26253 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26284__$1 = (function (){var statearr_26304 = state_26284;
(statearr_26304[(13)] = inst_26252);

return statearr_26304;
})();
var statearr_26305_26332 = state_26284__$1;
(statearr_26305_26332[(2)] = inst_26253);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (8))){
var inst_26266 = (state_26284[(2)]);
var state_26284__$1 = state_26284;
var statearr_26306_26333 = state_26284__$1;
(statearr_26306_26333[(2)] = inst_26266);

(statearr_26306_26333[(1)] = (5));


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
});})(c__24265__auto___26318,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24151__auto__,c__24265__auto___26318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_26310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26310[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_26310[(1)] = (1));

return statearr_26310;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_26284){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26311){if((e26311 instanceof Object)){
var ex__24155__auto__ = e26311;
var statearr_26312_26334 = state_26284;
(statearr_26312_26334[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26335 = state_26284;
state_26284 = G__26335;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_26284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_26284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26318,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24267__auto__ = (function (){var statearr_26313 = f__24266__auto__.call(null);
(statearr_26313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26318);

return statearr_26313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26318,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26337 = [];
var len__22773__auto___26395 = arguments.length;
var i__22774__auto___26396 = (0);
while(true){
if((i__22774__auto___26396 < len__22773__auto___26395)){
args26337.push((arguments[i__22774__auto___26396]));

var G__26397 = (i__22774__auto___26396 + (1));
i__22774__auto___26396 = G__26397;
continue;
} else {
}
break;
}

var G__26339 = args26337.length;
switch (G__26339) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26337.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24265__auto___26399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26399,out){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26399,out){
return (function (state_26371){
var state_val_26372 = (state_26371[(1)]);
if((state_val_26372 === (7))){
var inst_26350 = (state_26371[(7)]);
var inst_26351 = (state_26371[(8)]);
var inst_26350__$1 = (state_26371[(2)]);
var inst_26351__$1 = cljs.core.nth.call(null,inst_26350__$1,(0),null);
var inst_26352 = cljs.core.nth.call(null,inst_26350__$1,(1),null);
var inst_26353 = (inst_26351__$1 == null);
var state_26371__$1 = (function (){var statearr_26373 = state_26371;
(statearr_26373[(7)] = inst_26350__$1);

(statearr_26373[(9)] = inst_26352);

(statearr_26373[(8)] = inst_26351__$1);

return statearr_26373;
})();
if(cljs.core.truth_(inst_26353)){
var statearr_26374_26400 = state_26371__$1;
(statearr_26374_26400[(1)] = (8));

} else {
var statearr_26375_26401 = state_26371__$1;
(statearr_26375_26401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (1))){
var inst_26340 = cljs.core.vec.call(null,chs);
var inst_26341 = inst_26340;
var state_26371__$1 = (function (){var statearr_26376 = state_26371;
(statearr_26376[(10)] = inst_26341);

return statearr_26376;
})();
var statearr_26377_26402 = state_26371__$1;
(statearr_26377_26402[(2)] = null);

(statearr_26377_26402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (4))){
var inst_26341 = (state_26371[(10)]);
var state_26371__$1 = state_26371;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26371__$1,(7),inst_26341);
} else {
if((state_val_26372 === (6))){
var inst_26367 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26378_26403 = state_26371__$1;
(statearr_26378_26403[(2)] = inst_26367);

(statearr_26378_26403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (3))){
var inst_26369 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26371__$1,inst_26369);
} else {
if((state_val_26372 === (2))){
var inst_26341 = (state_26371[(10)]);
var inst_26343 = cljs.core.count.call(null,inst_26341);
var inst_26344 = (inst_26343 > (0));
var state_26371__$1 = state_26371;
if(cljs.core.truth_(inst_26344)){
var statearr_26380_26404 = state_26371__$1;
(statearr_26380_26404[(1)] = (4));

} else {
var statearr_26381_26405 = state_26371__$1;
(statearr_26381_26405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (11))){
var inst_26341 = (state_26371[(10)]);
var inst_26360 = (state_26371[(2)]);
var tmp26379 = inst_26341;
var inst_26341__$1 = tmp26379;
var state_26371__$1 = (function (){var statearr_26382 = state_26371;
(statearr_26382[(11)] = inst_26360);

(statearr_26382[(10)] = inst_26341__$1);

return statearr_26382;
})();
var statearr_26383_26406 = state_26371__$1;
(statearr_26383_26406[(2)] = null);

(statearr_26383_26406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (9))){
var inst_26351 = (state_26371[(8)]);
var state_26371__$1 = state_26371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26371__$1,(11),out,inst_26351);
} else {
if((state_val_26372 === (5))){
var inst_26365 = cljs.core.async.close_BANG_.call(null,out);
var state_26371__$1 = state_26371;
var statearr_26384_26407 = state_26371__$1;
(statearr_26384_26407[(2)] = inst_26365);

(statearr_26384_26407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (10))){
var inst_26363 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26385_26408 = state_26371__$1;
(statearr_26385_26408[(2)] = inst_26363);

(statearr_26385_26408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (8))){
var inst_26350 = (state_26371[(7)]);
var inst_26352 = (state_26371[(9)]);
var inst_26351 = (state_26371[(8)]);
var inst_26341 = (state_26371[(10)]);
var inst_26355 = (function (){var cs = inst_26341;
var vec__26346 = inst_26350;
var v = inst_26351;
var c = inst_26352;
return ((function (cs,vec__26346,v,c,inst_26350,inst_26352,inst_26351,inst_26341,state_val_26372,c__24265__auto___26399,out){
return (function (p1__26336_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26336_SHARP_);
});
;})(cs,vec__26346,v,c,inst_26350,inst_26352,inst_26351,inst_26341,state_val_26372,c__24265__auto___26399,out))
})();
var inst_26356 = cljs.core.filterv.call(null,inst_26355,inst_26341);
var inst_26341__$1 = inst_26356;
var state_26371__$1 = (function (){var statearr_26386 = state_26371;
(statearr_26386[(10)] = inst_26341__$1);

return statearr_26386;
})();
var statearr_26387_26409 = state_26371__$1;
(statearr_26387_26409[(2)] = null);

(statearr_26387_26409[(1)] = (2));


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
});})(c__24265__auto___26399,out))
;
return ((function (switch__24151__auto__,c__24265__auto___26399,out){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_26391 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26391[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_26391[(1)] = (1));

return statearr_26391;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_26371){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26392){if((e26392 instanceof Object)){
var ex__24155__auto__ = e26392;
var statearr_26393_26410 = state_26371;
(statearr_26393_26410[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26411 = state_26371;
state_26371 = G__26411;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_26371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_26371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26399,out))
})();
var state__24267__auto__ = (function (){var statearr_26394 = f__24266__auto__.call(null);
(statearr_26394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26399);

return statearr_26394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26399,out))
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
var args26412 = [];
var len__22773__auto___26461 = arguments.length;
var i__22774__auto___26462 = (0);
while(true){
if((i__22774__auto___26462 < len__22773__auto___26461)){
args26412.push((arguments[i__22774__auto___26462]));

var G__26463 = (i__22774__auto___26462 + (1));
i__22774__auto___26462 = G__26463;
continue;
} else {
}
break;
}

var G__26414 = args26412.length;
switch (G__26414) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26412.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24265__auto___26465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26465,out){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26465,out){
return (function (state_26438){
var state_val_26439 = (state_26438[(1)]);
if((state_val_26439 === (7))){
var inst_26420 = (state_26438[(7)]);
var inst_26420__$1 = (state_26438[(2)]);
var inst_26421 = (inst_26420__$1 == null);
var inst_26422 = cljs.core.not.call(null,inst_26421);
var state_26438__$1 = (function (){var statearr_26440 = state_26438;
(statearr_26440[(7)] = inst_26420__$1);

return statearr_26440;
})();
if(inst_26422){
var statearr_26441_26466 = state_26438__$1;
(statearr_26441_26466[(1)] = (8));

} else {
var statearr_26442_26467 = state_26438__$1;
(statearr_26442_26467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (1))){
var inst_26415 = (0);
var state_26438__$1 = (function (){var statearr_26443 = state_26438;
(statearr_26443[(8)] = inst_26415);

return statearr_26443;
})();
var statearr_26444_26468 = state_26438__$1;
(statearr_26444_26468[(2)] = null);

(statearr_26444_26468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (4))){
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26438__$1,(7),ch);
} else {
if((state_val_26439 === (6))){
var inst_26433 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26445_26469 = state_26438__$1;
(statearr_26445_26469[(2)] = inst_26433);

(statearr_26445_26469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (3))){
var inst_26435 = (state_26438[(2)]);
var inst_26436 = cljs.core.async.close_BANG_.call(null,out);
var state_26438__$1 = (function (){var statearr_26446 = state_26438;
(statearr_26446[(9)] = inst_26435);

return statearr_26446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26438__$1,inst_26436);
} else {
if((state_val_26439 === (2))){
var inst_26415 = (state_26438[(8)]);
var inst_26417 = (inst_26415 < n);
var state_26438__$1 = state_26438;
if(cljs.core.truth_(inst_26417)){
var statearr_26447_26470 = state_26438__$1;
(statearr_26447_26470[(1)] = (4));

} else {
var statearr_26448_26471 = state_26438__$1;
(statearr_26448_26471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (11))){
var inst_26415 = (state_26438[(8)]);
var inst_26425 = (state_26438[(2)]);
var inst_26426 = (inst_26415 + (1));
var inst_26415__$1 = inst_26426;
var state_26438__$1 = (function (){var statearr_26449 = state_26438;
(statearr_26449[(10)] = inst_26425);

(statearr_26449[(8)] = inst_26415__$1);

return statearr_26449;
})();
var statearr_26450_26472 = state_26438__$1;
(statearr_26450_26472[(2)] = null);

(statearr_26450_26472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (9))){
var state_26438__$1 = state_26438;
var statearr_26451_26473 = state_26438__$1;
(statearr_26451_26473[(2)] = null);

(statearr_26451_26473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (5))){
var state_26438__$1 = state_26438;
var statearr_26452_26474 = state_26438__$1;
(statearr_26452_26474[(2)] = null);

(statearr_26452_26474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (10))){
var inst_26430 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26453_26475 = state_26438__$1;
(statearr_26453_26475[(2)] = inst_26430);

(statearr_26453_26475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (8))){
var inst_26420 = (state_26438[(7)]);
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26438__$1,(11),out,inst_26420);
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
});})(c__24265__auto___26465,out))
;
return ((function (switch__24151__auto__,c__24265__auto___26465,out){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_26457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26457[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_26457[(1)] = (1));

return statearr_26457;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_26438){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26458){if((e26458 instanceof Object)){
var ex__24155__auto__ = e26458;
var statearr_26459_26476 = state_26438;
(statearr_26459_26476[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26477 = state_26438;
state_26438 = G__26477;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_26438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_26438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26465,out))
})();
var state__24267__auto__ = (function (){var statearr_26460 = f__24266__auto__.call(null);
(statearr_26460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26465);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26465,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26485 = (function (map_LT_,f,ch,meta26486){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26486 = meta26486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26487,meta26486__$1){
var self__ = this;
var _26487__$1 = this;
return (new cljs.core.async.t_cljs$core$async26485(self__.map_LT_,self__.f,self__.ch,meta26486__$1));
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26487){
var self__ = this;
var _26487__$1 = this;
return self__.meta26486;
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26488 = (function (map_LT_,f,ch,meta26486,_,fn1,meta26489){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26486 = meta26486;
this._ = _;
this.fn1 = fn1;
this.meta26489 = meta26489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26490,meta26489__$1){
var self__ = this;
var _26490__$1 = this;
return (new cljs.core.async.t_cljs$core$async26488(self__.map_LT_,self__.f,self__.ch,self__.meta26486,self__._,self__.fn1,meta26489__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26490){
var self__ = this;
var _26490__$1 = this;
return self__.meta26489;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26478_SHARP_){
return f1.call(null,(((p1__26478_SHARP_ == null))?null:self__.f.call(null,p1__26478_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26488.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26486","meta26486",-1683382261,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26485","cljs.core.async/t_cljs$core$async26485",264255544,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26489","meta26489",-847964930,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26488";

cljs.core.async.t_cljs$core$async26488.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async26488");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26488 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26488(map_LT___$1,f__$1,ch__$1,meta26486__$1,___$2,fn1__$1,meta26489){
return (new cljs.core.async.t_cljs$core$async26488(map_LT___$1,f__$1,ch__$1,meta26486__$1,___$2,fn1__$1,meta26489));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26488(self__.map_LT_,self__.f,self__.ch,self__.meta26486,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26486","meta26486",-1683382261,null)], null);
});

cljs.core.async.t_cljs$core$async26485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26485";

cljs.core.async.t_cljs$core$async26485.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async26485");
});

cljs.core.async.__GT_t_cljs$core$async26485 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26485(map_LT___$1,f__$1,ch__$1,meta26486){
return (new cljs.core.async.t_cljs$core$async26485(map_LT___$1,f__$1,ch__$1,meta26486));
});

}

return (new cljs.core.async.t_cljs$core$async26485(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26494 = (function (map_GT_,f,ch,meta26495){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26495 = meta26495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26496,meta26495__$1){
var self__ = this;
var _26496__$1 = this;
return (new cljs.core.async.t_cljs$core$async26494(self__.map_GT_,self__.f,self__.ch,meta26495__$1));
});

cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26496){
var self__ = this;
var _26496__$1 = this;
return self__.meta26495;
});

cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26495","meta26495",517183336,null)], null);
});

cljs.core.async.t_cljs$core$async26494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26494";

cljs.core.async.t_cljs$core$async26494.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async26494");
});

cljs.core.async.__GT_t_cljs$core$async26494 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26494(map_GT___$1,f__$1,ch__$1,meta26495){
return (new cljs.core.async.t_cljs$core$async26494(map_GT___$1,f__$1,ch__$1,meta26495));
});

}

return (new cljs.core.async.t_cljs$core$async26494(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26500 = (function (filter_GT_,p,ch,meta26501){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26501 = meta26501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26502,meta26501__$1){
var self__ = this;
var _26502__$1 = this;
return (new cljs.core.async.t_cljs$core$async26500(self__.filter_GT_,self__.p,self__.ch,meta26501__$1));
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26502){
var self__ = this;
var _26502__$1 = this;
return self__.meta26501;
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26501","meta26501",-2009945563,null)], null);
});

cljs.core.async.t_cljs$core$async26500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26500";

cljs.core.async.t_cljs$core$async26500.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async26500");
});

cljs.core.async.__GT_t_cljs$core$async26500 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26500(filter_GT___$1,p__$1,ch__$1,meta26501){
return (new cljs.core.async.t_cljs$core$async26500(filter_GT___$1,p__$1,ch__$1,meta26501));
});

}

return (new cljs.core.async.t_cljs$core$async26500(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26503 = [];
var len__22773__auto___26547 = arguments.length;
var i__22774__auto___26548 = (0);
while(true){
if((i__22774__auto___26548 < len__22773__auto___26547)){
args26503.push((arguments[i__22774__auto___26548]));

var G__26549 = (i__22774__auto___26548 + (1));
i__22774__auto___26548 = G__26549;
continue;
} else {
}
break;
}

var G__26505 = args26503.length;
switch (G__26505) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26503.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24265__auto___26551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26551,out){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26551,out){
return (function (state_26526){
var state_val_26527 = (state_26526[(1)]);
if((state_val_26527 === (7))){
var inst_26522 = (state_26526[(2)]);
var state_26526__$1 = state_26526;
var statearr_26528_26552 = state_26526__$1;
(statearr_26528_26552[(2)] = inst_26522);

(statearr_26528_26552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (1))){
var state_26526__$1 = state_26526;
var statearr_26529_26553 = state_26526__$1;
(statearr_26529_26553[(2)] = null);

(statearr_26529_26553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (4))){
var inst_26508 = (state_26526[(7)]);
var inst_26508__$1 = (state_26526[(2)]);
var inst_26509 = (inst_26508__$1 == null);
var state_26526__$1 = (function (){var statearr_26530 = state_26526;
(statearr_26530[(7)] = inst_26508__$1);

return statearr_26530;
})();
if(cljs.core.truth_(inst_26509)){
var statearr_26531_26554 = state_26526__$1;
(statearr_26531_26554[(1)] = (5));

} else {
var statearr_26532_26555 = state_26526__$1;
(statearr_26532_26555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (6))){
var inst_26508 = (state_26526[(7)]);
var inst_26513 = p.call(null,inst_26508);
var state_26526__$1 = state_26526;
if(cljs.core.truth_(inst_26513)){
var statearr_26533_26556 = state_26526__$1;
(statearr_26533_26556[(1)] = (8));

} else {
var statearr_26534_26557 = state_26526__$1;
(statearr_26534_26557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (3))){
var inst_26524 = (state_26526[(2)]);
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26526__$1,inst_26524);
} else {
if((state_val_26527 === (2))){
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26526__$1,(4),ch);
} else {
if((state_val_26527 === (11))){
var inst_26516 = (state_26526[(2)]);
var state_26526__$1 = state_26526;
var statearr_26535_26558 = state_26526__$1;
(statearr_26535_26558[(2)] = inst_26516);

(statearr_26535_26558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (9))){
var state_26526__$1 = state_26526;
var statearr_26536_26559 = state_26526__$1;
(statearr_26536_26559[(2)] = null);

(statearr_26536_26559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (5))){
var inst_26511 = cljs.core.async.close_BANG_.call(null,out);
var state_26526__$1 = state_26526;
var statearr_26537_26560 = state_26526__$1;
(statearr_26537_26560[(2)] = inst_26511);

(statearr_26537_26560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (10))){
var inst_26519 = (state_26526[(2)]);
var state_26526__$1 = (function (){var statearr_26538 = state_26526;
(statearr_26538[(8)] = inst_26519);

return statearr_26538;
})();
var statearr_26539_26561 = state_26526__$1;
(statearr_26539_26561[(2)] = null);

(statearr_26539_26561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (8))){
var inst_26508 = (state_26526[(7)]);
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26526__$1,(11),out,inst_26508);
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
});})(c__24265__auto___26551,out))
;
return ((function (switch__24151__auto__,c__24265__auto___26551,out){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_26543 = [null,null,null,null,null,null,null,null,null];
(statearr_26543[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_26543[(1)] = (1));

return statearr_26543;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_26526){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26544){if((e26544 instanceof Object)){
var ex__24155__auto__ = e26544;
var statearr_26545_26562 = state_26526;
(statearr_26545_26562[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26563 = state_26526;
state_26526 = G__26563;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_26526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_26526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26551,out))
})();
var state__24267__auto__ = (function (){var statearr_26546 = f__24266__auto__.call(null);
(statearr_26546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26551);

return statearr_26546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26551,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26564 = [];
var len__22773__auto___26567 = arguments.length;
var i__22774__auto___26568 = (0);
while(true){
if((i__22774__auto___26568 < len__22773__auto___26567)){
args26564.push((arguments[i__22774__auto___26568]));

var G__26569 = (i__22774__auto___26568 + (1));
i__22774__auto___26568 = G__26569;
continue;
} else {
}
break;
}

var G__26566 = args26564.length;
switch (G__26566) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26564.length)].join('')));

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
var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__){
return (function (state_26736){
var state_val_26737 = (state_26736[(1)]);
if((state_val_26737 === (7))){
var inst_26732 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26738_26779 = state_26736__$1;
(statearr_26738_26779[(2)] = inst_26732);

(statearr_26738_26779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (20))){
var inst_26702 = (state_26736[(7)]);
var inst_26713 = (state_26736[(2)]);
var inst_26714 = cljs.core.next.call(null,inst_26702);
var inst_26688 = inst_26714;
var inst_26689 = null;
var inst_26690 = (0);
var inst_26691 = (0);
var state_26736__$1 = (function (){var statearr_26739 = state_26736;
(statearr_26739[(8)] = inst_26691);

(statearr_26739[(9)] = inst_26690);

(statearr_26739[(10)] = inst_26713);

(statearr_26739[(11)] = inst_26689);

(statearr_26739[(12)] = inst_26688);

return statearr_26739;
})();
var statearr_26740_26780 = state_26736__$1;
(statearr_26740_26780[(2)] = null);

(statearr_26740_26780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (1))){
var state_26736__$1 = state_26736;
var statearr_26741_26781 = state_26736__$1;
(statearr_26741_26781[(2)] = null);

(statearr_26741_26781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (4))){
var inst_26677 = (state_26736[(13)]);
var inst_26677__$1 = (state_26736[(2)]);
var inst_26678 = (inst_26677__$1 == null);
var state_26736__$1 = (function (){var statearr_26742 = state_26736;
(statearr_26742[(13)] = inst_26677__$1);

return statearr_26742;
})();
if(cljs.core.truth_(inst_26678)){
var statearr_26743_26782 = state_26736__$1;
(statearr_26743_26782[(1)] = (5));

} else {
var statearr_26744_26783 = state_26736__$1;
(statearr_26744_26783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (15))){
var state_26736__$1 = state_26736;
var statearr_26748_26784 = state_26736__$1;
(statearr_26748_26784[(2)] = null);

(statearr_26748_26784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (21))){
var state_26736__$1 = state_26736;
var statearr_26749_26785 = state_26736__$1;
(statearr_26749_26785[(2)] = null);

(statearr_26749_26785[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (13))){
var inst_26691 = (state_26736[(8)]);
var inst_26690 = (state_26736[(9)]);
var inst_26689 = (state_26736[(11)]);
var inst_26688 = (state_26736[(12)]);
var inst_26698 = (state_26736[(2)]);
var inst_26699 = (inst_26691 + (1));
var tmp26745 = inst_26690;
var tmp26746 = inst_26689;
var tmp26747 = inst_26688;
var inst_26688__$1 = tmp26747;
var inst_26689__$1 = tmp26746;
var inst_26690__$1 = tmp26745;
var inst_26691__$1 = inst_26699;
var state_26736__$1 = (function (){var statearr_26750 = state_26736;
(statearr_26750[(8)] = inst_26691__$1);

(statearr_26750[(9)] = inst_26690__$1);

(statearr_26750[(14)] = inst_26698);

(statearr_26750[(11)] = inst_26689__$1);

(statearr_26750[(12)] = inst_26688__$1);

return statearr_26750;
})();
var statearr_26751_26786 = state_26736__$1;
(statearr_26751_26786[(2)] = null);

(statearr_26751_26786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (22))){
var state_26736__$1 = state_26736;
var statearr_26752_26787 = state_26736__$1;
(statearr_26752_26787[(2)] = null);

(statearr_26752_26787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (6))){
var inst_26677 = (state_26736[(13)]);
var inst_26686 = f.call(null,inst_26677);
var inst_26687 = cljs.core.seq.call(null,inst_26686);
var inst_26688 = inst_26687;
var inst_26689 = null;
var inst_26690 = (0);
var inst_26691 = (0);
var state_26736__$1 = (function (){var statearr_26753 = state_26736;
(statearr_26753[(8)] = inst_26691);

(statearr_26753[(9)] = inst_26690);

(statearr_26753[(11)] = inst_26689);

(statearr_26753[(12)] = inst_26688);

return statearr_26753;
})();
var statearr_26754_26788 = state_26736__$1;
(statearr_26754_26788[(2)] = null);

(statearr_26754_26788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (17))){
var inst_26702 = (state_26736[(7)]);
var inst_26706 = cljs.core.chunk_first.call(null,inst_26702);
var inst_26707 = cljs.core.chunk_rest.call(null,inst_26702);
var inst_26708 = cljs.core.count.call(null,inst_26706);
var inst_26688 = inst_26707;
var inst_26689 = inst_26706;
var inst_26690 = inst_26708;
var inst_26691 = (0);
var state_26736__$1 = (function (){var statearr_26755 = state_26736;
(statearr_26755[(8)] = inst_26691);

(statearr_26755[(9)] = inst_26690);

(statearr_26755[(11)] = inst_26689);

(statearr_26755[(12)] = inst_26688);

return statearr_26755;
})();
var statearr_26756_26789 = state_26736__$1;
(statearr_26756_26789[(2)] = null);

(statearr_26756_26789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (3))){
var inst_26734 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26736__$1,inst_26734);
} else {
if((state_val_26737 === (12))){
var inst_26722 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26757_26790 = state_26736__$1;
(statearr_26757_26790[(2)] = inst_26722);

(statearr_26757_26790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (2))){
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26736__$1,(4),in$);
} else {
if((state_val_26737 === (23))){
var inst_26730 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26758_26791 = state_26736__$1;
(statearr_26758_26791[(2)] = inst_26730);

(statearr_26758_26791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (19))){
var inst_26717 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26759_26792 = state_26736__$1;
(statearr_26759_26792[(2)] = inst_26717);

(statearr_26759_26792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (11))){
var inst_26702 = (state_26736[(7)]);
var inst_26688 = (state_26736[(12)]);
var inst_26702__$1 = cljs.core.seq.call(null,inst_26688);
var state_26736__$1 = (function (){var statearr_26760 = state_26736;
(statearr_26760[(7)] = inst_26702__$1);

return statearr_26760;
})();
if(inst_26702__$1){
var statearr_26761_26793 = state_26736__$1;
(statearr_26761_26793[(1)] = (14));

} else {
var statearr_26762_26794 = state_26736__$1;
(statearr_26762_26794[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (9))){
var inst_26724 = (state_26736[(2)]);
var inst_26725 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26736__$1 = (function (){var statearr_26763 = state_26736;
(statearr_26763[(15)] = inst_26724);

return statearr_26763;
})();
if(cljs.core.truth_(inst_26725)){
var statearr_26764_26795 = state_26736__$1;
(statearr_26764_26795[(1)] = (21));

} else {
var statearr_26765_26796 = state_26736__$1;
(statearr_26765_26796[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (5))){
var inst_26680 = cljs.core.async.close_BANG_.call(null,out);
var state_26736__$1 = state_26736;
var statearr_26766_26797 = state_26736__$1;
(statearr_26766_26797[(2)] = inst_26680);

(statearr_26766_26797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (14))){
var inst_26702 = (state_26736[(7)]);
var inst_26704 = cljs.core.chunked_seq_QMARK_.call(null,inst_26702);
var state_26736__$1 = state_26736;
if(inst_26704){
var statearr_26767_26798 = state_26736__$1;
(statearr_26767_26798[(1)] = (17));

} else {
var statearr_26768_26799 = state_26736__$1;
(statearr_26768_26799[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (16))){
var inst_26720 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26769_26800 = state_26736__$1;
(statearr_26769_26800[(2)] = inst_26720);

(statearr_26769_26800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (10))){
var inst_26691 = (state_26736[(8)]);
var inst_26689 = (state_26736[(11)]);
var inst_26696 = cljs.core._nth.call(null,inst_26689,inst_26691);
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26736__$1,(13),out,inst_26696);
} else {
if((state_val_26737 === (18))){
var inst_26702 = (state_26736[(7)]);
var inst_26711 = cljs.core.first.call(null,inst_26702);
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26736__$1,(20),out,inst_26711);
} else {
if((state_val_26737 === (8))){
var inst_26691 = (state_26736[(8)]);
var inst_26690 = (state_26736[(9)]);
var inst_26693 = (inst_26691 < inst_26690);
var inst_26694 = inst_26693;
var state_26736__$1 = state_26736;
if(cljs.core.truth_(inst_26694)){
var statearr_26770_26801 = state_26736__$1;
(statearr_26770_26801[(1)] = (10));

} else {
var statearr_26771_26802 = state_26736__$1;
(statearr_26771_26802[(1)] = (11));

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
});})(c__24265__auto__))
;
return ((function (switch__24151__auto__,c__24265__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24152__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24152__auto____0 = (function (){
var statearr_26775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26775[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24152__auto__);

(statearr_26775[(1)] = (1));

return statearr_26775;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24152__auto____1 = (function (state_26736){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26776){if((e26776 instanceof Object)){
var ex__24155__auto__ = e26776;
var statearr_26777_26803 = state_26736;
(statearr_26777_26803[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26804 = state_26736;
state_26736 = G__26804;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24152__auto__ = function(state_26736){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24152__auto____1.call(this,state_26736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24152__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24152__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__))
})();
var state__24267__auto__ = (function (){var statearr_26778 = f__24266__auto__.call(null);
(statearr_26778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_26778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__))
);

return c__24265__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26805 = [];
var len__22773__auto___26808 = arguments.length;
var i__22774__auto___26809 = (0);
while(true){
if((i__22774__auto___26809 < len__22773__auto___26808)){
args26805.push((arguments[i__22774__auto___26809]));

var G__26810 = (i__22774__auto___26809 + (1));
i__22774__auto___26809 = G__26810;
continue;
} else {
}
break;
}

var G__26807 = args26805.length;
switch (G__26807) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26805.length)].join('')));

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
var args26812 = [];
var len__22773__auto___26815 = arguments.length;
var i__22774__auto___26816 = (0);
while(true){
if((i__22774__auto___26816 < len__22773__auto___26815)){
args26812.push((arguments[i__22774__auto___26816]));

var G__26817 = (i__22774__auto___26816 + (1));
i__22774__auto___26816 = G__26817;
continue;
} else {
}
break;
}

var G__26814 = args26812.length;
switch (G__26814) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26812.length)].join('')));

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
var args26819 = [];
var len__22773__auto___26870 = arguments.length;
var i__22774__auto___26871 = (0);
while(true){
if((i__22774__auto___26871 < len__22773__auto___26870)){
args26819.push((arguments[i__22774__auto___26871]));

var G__26872 = (i__22774__auto___26871 + (1));
i__22774__auto___26871 = G__26872;
continue;
} else {
}
break;
}

var G__26821 = args26819.length;
switch (G__26821) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26819.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24265__auto___26874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26874,out){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26874,out){
return (function (state_26845){
var state_val_26846 = (state_26845[(1)]);
if((state_val_26846 === (7))){
var inst_26840 = (state_26845[(2)]);
var state_26845__$1 = state_26845;
var statearr_26847_26875 = state_26845__$1;
(statearr_26847_26875[(2)] = inst_26840);

(statearr_26847_26875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (1))){
var inst_26822 = null;
var state_26845__$1 = (function (){var statearr_26848 = state_26845;
(statearr_26848[(7)] = inst_26822);

return statearr_26848;
})();
var statearr_26849_26876 = state_26845__$1;
(statearr_26849_26876[(2)] = null);

(statearr_26849_26876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (4))){
var inst_26825 = (state_26845[(8)]);
var inst_26825__$1 = (state_26845[(2)]);
var inst_26826 = (inst_26825__$1 == null);
var inst_26827 = cljs.core.not.call(null,inst_26826);
var state_26845__$1 = (function (){var statearr_26850 = state_26845;
(statearr_26850[(8)] = inst_26825__$1);

return statearr_26850;
})();
if(inst_26827){
var statearr_26851_26877 = state_26845__$1;
(statearr_26851_26877[(1)] = (5));

} else {
var statearr_26852_26878 = state_26845__$1;
(statearr_26852_26878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (6))){
var state_26845__$1 = state_26845;
var statearr_26853_26879 = state_26845__$1;
(statearr_26853_26879[(2)] = null);

(statearr_26853_26879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (3))){
var inst_26842 = (state_26845[(2)]);
var inst_26843 = cljs.core.async.close_BANG_.call(null,out);
var state_26845__$1 = (function (){var statearr_26854 = state_26845;
(statearr_26854[(9)] = inst_26842);

return statearr_26854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26845__$1,inst_26843);
} else {
if((state_val_26846 === (2))){
var state_26845__$1 = state_26845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26845__$1,(4),ch);
} else {
if((state_val_26846 === (11))){
var inst_26825 = (state_26845[(8)]);
var inst_26834 = (state_26845[(2)]);
var inst_26822 = inst_26825;
var state_26845__$1 = (function (){var statearr_26855 = state_26845;
(statearr_26855[(10)] = inst_26834);

(statearr_26855[(7)] = inst_26822);

return statearr_26855;
})();
var statearr_26856_26880 = state_26845__$1;
(statearr_26856_26880[(2)] = null);

(statearr_26856_26880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (9))){
var inst_26825 = (state_26845[(8)]);
var state_26845__$1 = state_26845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26845__$1,(11),out,inst_26825);
} else {
if((state_val_26846 === (5))){
var inst_26825 = (state_26845[(8)]);
var inst_26822 = (state_26845[(7)]);
var inst_26829 = cljs.core._EQ_.call(null,inst_26825,inst_26822);
var state_26845__$1 = state_26845;
if(inst_26829){
var statearr_26858_26881 = state_26845__$1;
(statearr_26858_26881[(1)] = (8));

} else {
var statearr_26859_26882 = state_26845__$1;
(statearr_26859_26882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (10))){
var inst_26837 = (state_26845[(2)]);
var state_26845__$1 = state_26845;
var statearr_26860_26883 = state_26845__$1;
(statearr_26860_26883[(2)] = inst_26837);

(statearr_26860_26883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (8))){
var inst_26822 = (state_26845[(7)]);
var tmp26857 = inst_26822;
var inst_26822__$1 = tmp26857;
var state_26845__$1 = (function (){var statearr_26861 = state_26845;
(statearr_26861[(7)] = inst_26822__$1);

return statearr_26861;
})();
var statearr_26862_26884 = state_26845__$1;
(statearr_26862_26884[(2)] = null);

(statearr_26862_26884[(1)] = (2));


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
});})(c__24265__auto___26874,out))
;
return ((function (switch__24151__auto__,c__24265__auto___26874,out){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26866[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_26845){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__24155__auto__ = e26867;
var statearr_26868_26885 = state_26845;
(statearr_26868_26885[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26886 = state_26845;
state_26845 = G__26886;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_26845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_26845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26874,out))
})();
var state__24267__auto__ = (function (){var statearr_26869 = f__24266__auto__.call(null);
(statearr_26869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26874);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26874,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26887 = [];
var len__22773__auto___26957 = arguments.length;
var i__22774__auto___26958 = (0);
while(true){
if((i__22774__auto___26958 < len__22773__auto___26957)){
args26887.push((arguments[i__22774__auto___26958]));

var G__26959 = (i__22774__auto___26958 + (1));
i__22774__auto___26958 = G__26959;
continue;
} else {
}
break;
}

var G__26889 = args26887.length;
switch (G__26889) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26887.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24265__auto___26961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___26961,out){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___26961,out){
return (function (state_26927){
var state_val_26928 = (state_26927[(1)]);
if((state_val_26928 === (7))){
var inst_26923 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26929_26962 = state_26927__$1;
(statearr_26929_26962[(2)] = inst_26923);

(statearr_26929_26962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (1))){
var inst_26890 = (new Array(n));
var inst_26891 = inst_26890;
var inst_26892 = (0);
var state_26927__$1 = (function (){var statearr_26930 = state_26927;
(statearr_26930[(7)] = inst_26892);

(statearr_26930[(8)] = inst_26891);

return statearr_26930;
})();
var statearr_26931_26963 = state_26927__$1;
(statearr_26931_26963[(2)] = null);

(statearr_26931_26963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (4))){
var inst_26895 = (state_26927[(9)]);
var inst_26895__$1 = (state_26927[(2)]);
var inst_26896 = (inst_26895__$1 == null);
var inst_26897 = cljs.core.not.call(null,inst_26896);
var state_26927__$1 = (function (){var statearr_26932 = state_26927;
(statearr_26932[(9)] = inst_26895__$1);

return statearr_26932;
})();
if(inst_26897){
var statearr_26933_26964 = state_26927__$1;
(statearr_26933_26964[(1)] = (5));

} else {
var statearr_26934_26965 = state_26927__$1;
(statearr_26934_26965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (15))){
var inst_26917 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26935_26966 = state_26927__$1;
(statearr_26935_26966[(2)] = inst_26917);

(statearr_26935_26966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (13))){
var state_26927__$1 = state_26927;
var statearr_26936_26967 = state_26927__$1;
(statearr_26936_26967[(2)] = null);

(statearr_26936_26967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (6))){
var inst_26892 = (state_26927[(7)]);
var inst_26913 = (inst_26892 > (0));
var state_26927__$1 = state_26927;
if(cljs.core.truth_(inst_26913)){
var statearr_26937_26968 = state_26927__$1;
(statearr_26937_26968[(1)] = (12));

} else {
var statearr_26938_26969 = state_26927__$1;
(statearr_26938_26969[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (3))){
var inst_26925 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26927__$1,inst_26925);
} else {
if((state_val_26928 === (12))){
var inst_26891 = (state_26927[(8)]);
var inst_26915 = cljs.core.vec.call(null,inst_26891);
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26927__$1,(15),out,inst_26915);
} else {
if((state_val_26928 === (2))){
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26927__$1,(4),ch);
} else {
if((state_val_26928 === (11))){
var inst_26907 = (state_26927[(2)]);
var inst_26908 = (new Array(n));
var inst_26891 = inst_26908;
var inst_26892 = (0);
var state_26927__$1 = (function (){var statearr_26939 = state_26927;
(statearr_26939[(7)] = inst_26892);

(statearr_26939[(8)] = inst_26891);

(statearr_26939[(10)] = inst_26907);

return statearr_26939;
})();
var statearr_26940_26970 = state_26927__$1;
(statearr_26940_26970[(2)] = null);

(statearr_26940_26970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (9))){
var inst_26891 = (state_26927[(8)]);
var inst_26905 = cljs.core.vec.call(null,inst_26891);
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26927__$1,(11),out,inst_26905);
} else {
if((state_val_26928 === (5))){
var inst_26892 = (state_26927[(7)]);
var inst_26895 = (state_26927[(9)]);
var inst_26891 = (state_26927[(8)]);
var inst_26900 = (state_26927[(11)]);
var inst_26899 = (inst_26891[inst_26892] = inst_26895);
var inst_26900__$1 = (inst_26892 + (1));
var inst_26901 = (inst_26900__$1 < n);
var state_26927__$1 = (function (){var statearr_26941 = state_26927;
(statearr_26941[(12)] = inst_26899);

(statearr_26941[(11)] = inst_26900__$1);

return statearr_26941;
})();
if(cljs.core.truth_(inst_26901)){
var statearr_26942_26971 = state_26927__$1;
(statearr_26942_26971[(1)] = (8));

} else {
var statearr_26943_26972 = state_26927__$1;
(statearr_26943_26972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (14))){
var inst_26920 = (state_26927[(2)]);
var inst_26921 = cljs.core.async.close_BANG_.call(null,out);
var state_26927__$1 = (function (){var statearr_26945 = state_26927;
(statearr_26945[(13)] = inst_26920);

return statearr_26945;
})();
var statearr_26946_26973 = state_26927__$1;
(statearr_26946_26973[(2)] = inst_26921);

(statearr_26946_26973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (10))){
var inst_26911 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26947_26974 = state_26927__$1;
(statearr_26947_26974[(2)] = inst_26911);

(statearr_26947_26974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (8))){
var inst_26891 = (state_26927[(8)]);
var inst_26900 = (state_26927[(11)]);
var tmp26944 = inst_26891;
var inst_26891__$1 = tmp26944;
var inst_26892 = inst_26900;
var state_26927__$1 = (function (){var statearr_26948 = state_26927;
(statearr_26948[(7)] = inst_26892);

(statearr_26948[(8)] = inst_26891__$1);

return statearr_26948;
})();
var statearr_26949_26975 = state_26927__$1;
(statearr_26949_26975[(2)] = null);

(statearr_26949_26975[(1)] = (2));


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
});})(c__24265__auto___26961,out))
;
return ((function (switch__24151__auto__,c__24265__auto___26961,out){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_26953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26953[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_26953[(1)] = (1));

return statearr_26953;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_26927){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_26927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e26954){if((e26954 instanceof Object)){
var ex__24155__auto__ = e26954;
var statearr_26955_26976 = state_26927;
(statearr_26955_26976[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26977 = state_26927;
state_26927 = G__26977;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_26927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_26927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___26961,out))
})();
var state__24267__auto__ = (function (){var statearr_26956 = f__24266__auto__.call(null);
(statearr_26956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___26961);

return statearr_26956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___26961,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26978 = [];
var len__22773__auto___27052 = arguments.length;
var i__22774__auto___27053 = (0);
while(true){
if((i__22774__auto___27053 < len__22773__auto___27052)){
args26978.push((arguments[i__22774__auto___27053]));

var G__27054 = (i__22774__auto___27053 + (1));
i__22774__auto___27053 = G__27054;
continue;
} else {
}
break;
}

var G__26980 = args26978.length;
switch (G__26980) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26978.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24265__auto___27056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___27056,out){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___27056,out){
return (function (state_27022){
var state_val_27023 = (state_27022[(1)]);
if((state_val_27023 === (7))){
var inst_27018 = (state_27022[(2)]);
var state_27022__$1 = state_27022;
var statearr_27024_27057 = state_27022__$1;
(statearr_27024_27057[(2)] = inst_27018);

(statearr_27024_27057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (1))){
var inst_26981 = [];
var inst_26982 = inst_26981;
var inst_26983 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27022__$1 = (function (){var statearr_27025 = state_27022;
(statearr_27025[(7)] = inst_26982);

(statearr_27025[(8)] = inst_26983);

return statearr_27025;
})();
var statearr_27026_27058 = state_27022__$1;
(statearr_27026_27058[(2)] = null);

(statearr_27026_27058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (4))){
var inst_26986 = (state_27022[(9)]);
var inst_26986__$1 = (state_27022[(2)]);
var inst_26987 = (inst_26986__$1 == null);
var inst_26988 = cljs.core.not.call(null,inst_26987);
var state_27022__$1 = (function (){var statearr_27027 = state_27022;
(statearr_27027[(9)] = inst_26986__$1);

return statearr_27027;
})();
if(inst_26988){
var statearr_27028_27059 = state_27022__$1;
(statearr_27028_27059[(1)] = (5));

} else {
var statearr_27029_27060 = state_27022__$1;
(statearr_27029_27060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (15))){
var inst_27012 = (state_27022[(2)]);
var state_27022__$1 = state_27022;
var statearr_27030_27061 = state_27022__$1;
(statearr_27030_27061[(2)] = inst_27012);

(statearr_27030_27061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (13))){
var state_27022__$1 = state_27022;
var statearr_27031_27062 = state_27022__$1;
(statearr_27031_27062[(2)] = null);

(statearr_27031_27062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (6))){
var inst_26982 = (state_27022[(7)]);
var inst_27007 = inst_26982.length;
var inst_27008 = (inst_27007 > (0));
var state_27022__$1 = state_27022;
if(cljs.core.truth_(inst_27008)){
var statearr_27032_27063 = state_27022__$1;
(statearr_27032_27063[(1)] = (12));

} else {
var statearr_27033_27064 = state_27022__$1;
(statearr_27033_27064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (3))){
var inst_27020 = (state_27022[(2)]);
var state_27022__$1 = state_27022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27022__$1,inst_27020);
} else {
if((state_val_27023 === (12))){
var inst_26982 = (state_27022[(7)]);
var inst_27010 = cljs.core.vec.call(null,inst_26982);
var state_27022__$1 = state_27022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27022__$1,(15),out,inst_27010);
} else {
if((state_val_27023 === (2))){
var state_27022__$1 = state_27022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27022__$1,(4),ch);
} else {
if((state_val_27023 === (11))){
var inst_26990 = (state_27022[(10)]);
var inst_26986 = (state_27022[(9)]);
var inst_27000 = (state_27022[(2)]);
var inst_27001 = [];
var inst_27002 = inst_27001.push(inst_26986);
var inst_26982 = inst_27001;
var inst_26983 = inst_26990;
var state_27022__$1 = (function (){var statearr_27034 = state_27022;
(statearr_27034[(7)] = inst_26982);

(statearr_27034[(11)] = inst_27002);

(statearr_27034[(8)] = inst_26983);

(statearr_27034[(12)] = inst_27000);

return statearr_27034;
})();
var statearr_27035_27065 = state_27022__$1;
(statearr_27035_27065[(2)] = null);

(statearr_27035_27065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (9))){
var inst_26982 = (state_27022[(7)]);
var inst_26998 = cljs.core.vec.call(null,inst_26982);
var state_27022__$1 = state_27022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27022__$1,(11),out,inst_26998);
} else {
if((state_val_27023 === (5))){
var inst_26983 = (state_27022[(8)]);
var inst_26990 = (state_27022[(10)]);
var inst_26986 = (state_27022[(9)]);
var inst_26990__$1 = f.call(null,inst_26986);
var inst_26991 = cljs.core._EQ_.call(null,inst_26990__$1,inst_26983);
var inst_26992 = cljs.core.keyword_identical_QMARK_.call(null,inst_26983,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26993 = (inst_26991) || (inst_26992);
var state_27022__$1 = (function (){var statearr_27036 = state_27022;
(statearr_27036[(10)] = inst_26990__$1);

return statearr_27036;
})();
if(cljs.core.truth_(inst_26993)){
var statearr_27037_27066 = state_27022__$1;
(statearr_27037_27066[(1)] = (8));

} else {
var statearr_27038_27067 = state_27022__$1;
(statearr_27038_27067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (14))){
var inst_27015 = (state_27022[(2)]);
var inst_27016 = cljs.core.async.close_BANG_.call(null,out);
var state_27022__$1 = (function (){var statearr_27040 = state_27022;
(statearr_27040[(13)] = inst_27015);

return statearr_27040;
})();
var statearr_27041_27068 = state_27022__$1;
(statearr_27041_27068[(2)] = inst_27016);

(statearr_27041_27068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (10))){
var inst_27005 = (state_27022[(2)]);
var state_27022__$1 = state_27022;
var statearr_27042_27069 = state_27022__$1;
(statearr_27042_27069[(2)] = inst_27005);

(statearr_27042_27069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (8))){
var inst_26982 = (state_27022[(7)]);
var inst_26990 = (state_27022[(10)]);
var inst_26986 = (state_27022[(9)]);
var inst_26995 = inst_26982.push(inst_26986);
var tmp27039 = inst_26982;
var inst_26982__$1 = tmp27039;
var inst_26983 = inst_26990;
var state_27022__$1 = (function (){var statearr_27043 = state_27022;
(statearr_27043[(7)] = inst_26982__$1);

(statearr_27043[(8)] = inst_26983);

(statearr_27043[(14)] = inst_26995);

return statearr_27043;
})();
var statearr_27044_27070 = state_27022__$1;
(statearr_27044_27070[(2)] = null);

(statearr_27044_27070[(1)] = (2));


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
});})(c__24265__auto___27056,out))
;
return ((function (switch__24151__auto__,c__24265__auto___27056,out){
return (function() {
var cljs$core$async$state_machine__24152__auto__ = null;
var cljs$core$async$state_machine__24152__auto____0 = (function (){
var statearr_27048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27048[(0)] = cljs$core$async$state_machine__24152__auto__);

(statearr_27048[(1)] = (1));

return statearr_27048;
});
var cljs$core$async$state_machine__24152__auto____1 = (function (state_27022){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_27022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e27049){if((e27049 instanceof Object)){
var ex__24155__auto__ = e27049;
var statearr_27050_27071 = state_27022;
(statearr_27050_27071[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27072 = state_27022;
state_27022 = G__27072;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
cljs$core$async$state_machine__24152__auto__ = function(state_27022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24152__auto____1.call(this,state_27022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24152__auto____0;
cljs$core$async$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24152__auto____1;
return cljs$core$async$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___27056,out))
})();
var state__24267__auto__ = (function (){var statearr_27051 = f__24266__auto__.call(null);
(statearr_27051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___27056);

return statearr_27051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___27056,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1472381707143