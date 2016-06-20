// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22323 = [];
var len__19538__auto___22329 = arguments.length;
var i__19539__auto___22330 = (0);
while(true){
if((i__19539__auto___22330 < len__19538__auto___22329)){
args22323.push((arguments[i__19539__auto___22330]));

var G__22331 = (i__19539__auto___22330 + (1));
i__19539__auto___22330 = G__22331;
continue;
} else {
}
break;
}

var G__22325 = args22323.length;
switch (G__22325) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22323.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22326 = (function (f,blockable,meta22327){
this.f = f;
this.blockable = blockable;
this.meta22327 = meta22327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22328,meta22327__$1){
var self__ = this;
var _22328__$1 = this;
return (new cljs.core.async.t_cljs$core$async22326(self__.f,self__.blockable,meta22327__$1));
});

cljs.core.async.t_cljs$core$async22326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22328){
var self__ = this;
var _22328__$1 = this;
return self__.meta22327;
});

cljs.core.async.t_cljs$core$async22326.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22327","meta22327",-1494882836,null)], null);
});

cljs.core.async.t_cljs$core$async22326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22326";

cljs.core.async.t_cljs$core$async22326.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async22326");
});

cljs.core.async.__GT_t_cljs$core$async22326 = (function cljs$core$async$__GT_t_cljs$core$async22326(f__$1,blockable__$1,meta22327){
return (new cljs.core.async.t_cljs$core$async22326(f__$1,blockable__$1,meta22327));
});

}

return (new cljs.core.async.t_cljs$core$async22326(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22335 = [];
var len__19538__auto___22338 = arguments.length;
var i__19539__auto___22339 = (0);
while(true){
if((i__19539__auto___22339 < len__19538__auto___22338)){
args22335.push((arguments[i__19539__auto___22339]));

var G__22340 = (i__19539__auto___22339 + (1));
i__19539__auto___22339 = G__22340;
continue;
} else {
}
break;
}

var G__22337 = args22335.length;
switch (G__22337) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22335.length)].join('')));

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
var args22342 = [];
var len__19538__auto___22345 = arguments.length;
var i__19539__auto___22346 = (0);
while(true){
if((i__19539__auto___22346 < len__19538__auto___22345)){
args22342.push((arguments[i__19539__auto___22346]));

var G__22347 = (i__19539__auto___22346 + (1));
i__19539__auto___22346 = G__22347;
continue;
} else {
}
break;
}

var G__22344 = args22342.length;
switch (G__22344) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22342.length)].join('')));

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
var args22349 = [];
var len__19538__auto___22352 = arguments.length;
var i__19539__auto___22353 = (0);
while(true){
if((i__19539__auto___22353 < len__19538__auto___22352)){
args22349.push((arguments[i__19539__auto___22353]));

var G__22354 = (i__19539__auto___22353 + (1));
i__19539__auto___22353 = G__22354;
continue;
} else {
}
break;
}

var G__22351 = args22349.length;
switch (G__22351) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22349.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22356 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22356);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22356,ret){
return (function (){
return fn1.call(null,val_22356);
});})(val_22356,ret))
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
var args22357 = [];
var len__19538__auto___22360 = arguments.length;
var i__19539__auto___22361 = (0);
while(true){
if((i__19539__auto___22361 < len__19538__auto___22360)){
args22357.push((arguments[i__19539__auto___22361]));

var G__22362 = (i__19539__auto___22361 + (1));
i__19539__auto___22361 = G__22362;
continue;
} else {
}
break;
}

var G__22359 = args22357.length;
switch (G__22359) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22357.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__19383__auto___22364 = n;
var x_22365 = (0);
while(true){
if((x_22365 < n__19383__auto___22364)){
(a[x_22365] = (0));

var G__22366 = (x_22365 + (1));
x_22365 = G__22366;
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

var G__22367 = (i + (1));
i = G__22367;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22371 = (function (alt_flag,flag,meta22372){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22372 = meta22372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22373,meta22372__$1){
var self__ = this;
var _22373__$1 = this;
return (new cljs.core.async.t_cljs$core$async22371(self__.alt_flag,self__.flag,meta22372__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22373){
var self__ = this;
var _22373__$1 = this;
return self__.meta22372;
});})(flag))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22371.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22372","meta22372",1933239449,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22371";

cljs.core.async.t_cljs$core$async22371.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async22371");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22371 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22371(alt_flag__$1,flag__$1,meta22372){
return (new cljs.core.async.t_cljs$core$async22371(alt_flag__$1,flag__$1,meta22372));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22371(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22377 = (function (alt_handler,flag,cb,meta22378){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22378 = meta22378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22379,meta22378__$1){
var self__ = this;
var _22379__$1 = this;
return (new cljs.core.async.t_cljs$core$async22377(self__.alt_handler,self__.flag,self__.cb,meta22378__$1));
});

cljs.core.async.t_cljs$core$async22377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22379){
var self__ = this;
var _22379__$1 = this;
return self__.meta22378;
});

cljs.core.async.t_cljs$core$async22377.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22378","meta22378",63925665,null)], null);
});

cljs.core.async.t_cljs$core$async22377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22377";

cljs.core.async.t_cljs$core$async22377.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async22377");
});

cljs.core.async.__GT_t_cljs$core$async22377 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22377(alt_handler__$1,flag__$1,cb__$1,meta22378){
return (new cljs.core.async.t_cljs$core$async22377(alt_handler__$1,flag__$1,cb__$1,meta22378));
});

}

return (new cljs.core.async.t_cljs$core$async22377(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22380_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22380_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22381_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22381_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18468__auto__ = wport;
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22382 = (i + (1));
i = G__22382;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18468__auto__ = ret;
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18456__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__19545__auto__ = [];
var len__19538__auto___22388 = arguments.length;
var i__19539__auto___22389 = (0);
while(true){
if((i__19539__auto___22389 < len__19538__auto___22388)){
args__19545__auto__.push((arguments[i__19539__auto___22389]));

var G__22390 = (i__19539__auto___22389 + (1));
i__19539__auto___22389 = G__22390;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((1) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19546__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22385){
var map__22386 = p__22385;
var map__22386__$1 = ((((!((map__22386 == null)))?((((map__22386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22386):map__22386);
var opts = map__22386__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22383){
var G__22384 = cljs.core.first.call(null,seq22383);
var seq22383__$1 = cljs.core.next.call(null,seq22383);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22384,seq22383__$1);
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
var args22391 = [];
var len__19538__auto___22441 = arguments.length;
var i__19539__auto___22442 = (0);
while(true){
if((i__19539__auto___22442 < len__19538__auto___22441)){
args22391.push((arguments[i__19539__auto___22442]));

var G__22443 = (i__19539__auto___22442 + (1));
i__19539__auto___22442 = G__22443;
continue;
} else {
}
break;
}

var G__22393 = args22391.length;
switch (G__22393) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22391.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22278__auto___22445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___22445){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___22445){
return (function (state_22417){
var state_val_22418 = (state_22417[(1)]);
if((state_val_22418 === (7))){
var inst_22413 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
var statearr_22419_22446 = state_22417__$1;
(statearr_22419_22446[(2)] = inst_22413);

(statearr_22419_22446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (1))){
var state_22417__$1 = state_22417;
var statearr_22420_22447 = state_22417__$1;
(statearr_22420_22447[(2)] = null);

(statearr_22420_22447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (4))){
var inst_22396 = (state_22417[(7)]);
var inst_22396__$1 = (state_22417[(2)]);
var inst_22397 = (inst_22396__$1 == null);
var state_22417__$1 = (function (){var statearr_22421 = state_22417;
(statearr_22421[(7)] = inst_22396__$1);

return statearr_22421;
})();
if(cljs.core.truth_(inst_22397)){
var statearr_22422_22448 = state_22417__$1;
(statearr_22422_22448[(1)] = (5));

} else {
var statearr_22423_22449 = state_22417__$1;
(statearr_22423_22449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (13))){
var state_22417__$1 = state_22417;
var statearr_22424_22450 = state_22417__$1;
(statearr_22424_22450[(2)] = null);

(statearr_22424_22450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (6))){
var inst_22396 = (state_22417[(7)]);
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22417__$1,(11),to,inst_22396);
} else {
if((state_val_22418 === (3))){
var inst_22415 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22417__$1,inst_22415);
} else {
if((state_val_22418 === (12))){
var state_22417__$1 = state_22417;
var statearr_22425_22451 = state_22417__$1;
(statearr_22425_22451[(2)] = null);

(statearr_22425_22451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (2))){
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22417__$1,(4),from);
} else {
if((state_val_22418 === (11))){
var inst_22406 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
if(cljs.core.truth_(inst_22406)){
var statearr_22426_22452 = state_22417__$1;
(statearr_22426_22452[(1)] = (12));

} else {
var statearr_22427_22453 = state_22417__$1;
(statearr_22427_22453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (9))){
var state_22417__$1 = state_22417;
var statearr_22428_22454 = state_22417__$1;
(statearr_22428_22454[(2)] = null);

(statearr_22428_22454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (5))){
var state_22417__$1 = state_22417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22429_22455 = state_22417__$1;
(statearr_22429_22455[(1)] = (8));

} else {
var statearr_22430_22456 = state_22417__$1;
(statearr_22430_22456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (14))){
var inst_22411 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
var statearr_22431_22457 = state_22417__$1;
(statearr_22431_22457[(2)] = inst_22411);

(statearr_22431_22457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (10))){
var inst_22403 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
var statearr_22432_22458 = state_22417__$1;
(statearr_22432_22458[(2)] = inst_22403);

(statearr_22432_22458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (8))){
var inst_22400 = cljs.core.async.close_BANG_.call(null,to);
var state_22417__$1 = state_22417;
var statearr_22433_22459 = state_22417__$1;
(statearr_22433_22459[(2)] = inst_22400);

(statearr_22433_22459[(1)] = (10));


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
});})(c__22278__auto___22445))
;
return ((function (switch__22166__auto__,c__22278__auto___22445){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_22437 = [null,null,null,null,null,null,null,null];
(statearr_22437[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_22437[(1)] = (1));

return statearr_22437;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_22417){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_22417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e22438){if((e22438 instanceof Object)){
var ex__22170__auto__ = e22438;
var statearr_22439_22460 = state_22417;
(statearr_22439_22460[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22461 = state_22417;
state_22417 = G__22461;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_22417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_22417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___22445))
})();
var state__22280__auto__ = (function (){var statearr_22440 = f__22279__auto__.call(null);
(statearr_22440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___22445);

return statearr_22440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___22445))
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
return (function (p__22645){
var vec__22646 = p__22645;
var v = cljs.core.nth.call(null,vec__22646,(0),null);
var p = cljs.core.nth.call(null,vec__22646,(1),null);
var job = vec__22646;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22278__auto___22828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___22828,res,vec__22646,v,p,job,jobs,results){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___22828,res,vec__22646,v,p,job,jobs,results){
return (function (state_22651){
var state_val_22652 = (state_22651[(1)]);
if((state_val_22652 === (1))){
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22651__$1,(2),res,v);
} else {
if((state_val_22652 === (2))){
var inst_22648 = (state_22651[(2)]);
var inst_22649 = cljs.core.async.close_BANG_.call(null,res);
var state_22651__$1 = (function (){var statearr_22653 = state_22651;
(statearr_22653[(7)] = inst_22648);

return statearr_22653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22651__$1,inst_22649);
} else {
return null;
}
}
});})(c__22278__auto___22828,res,vec__22646,v,p,job,jobs,results))
;
return ((function (switch__22166__auto__,c__22278__auto___22828,res,vec__22646,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0 = (function (){
var statearr_22657 = [null,null,null,null,null,null,null,null];
(statearr_22657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__);

(statearr_22657[(1)] = (1));

return statearr_22657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1 = (function (state_22651){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_22651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e22658){if((e22658 instanceof Object)){
var ex__22170__auto__ = e22658;
var statearr_22659_22829 = state_22651;
(statearr_22659_22829[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22830 = state_22651;
state_22651 = G__22830;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = function(state_22651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1.call(this,state_22651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___22828,res,vec__22646,v,p,job,jobs,results))
})();
var state__22280__auto__ = (function (){var statearr_22660 = f__22279__auto__.call(null);
(statearr_22660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___22828);

return statearr_22660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___22828,res,vec__22646,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22661){
var vec__22662 = p__22661;
var v = cljs.core.nth.call(null,vec__22662,(0),null);
var p = cljs.core.nth.call(null,vec__22662,(1),null);
var job = vec__22662;
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
var n__19383__auto___22831 = n;
var __22832 = (0);
while(true){
if((__22832 < n__19383__auto___22831)){
var G__22663_22833 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22663_22833) {
case "compute":
var c__22278__auto___22835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22832,c__22278__auto___22835,G__22663_22833,n__19383__auto___22831,jobs,results,process,async){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (__22832,c__22278__auto___22835,G__22663_22833,n__19383__auto___22831,jobs,results,process,async){
return (function (state_22676){
var state_val_22677 = (state_22676[(1)]);
if((state_val_22677 === (1))){
var state_22676__$1 = state_22676;
var statearr_22678_22836 = state_22676__$1;
(statearr_22678_22836[(2)] = null);

(statearr_22678_22836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (2))){
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22676__$1,(4),jobs);
} else {
if((state_val_22677 === (3))){
var inst_22674 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22676__$1,inst_22674);
} else {
if((state_val_22677 === (4))){
var inst_22666 = (state_22676[(2)]);
var inst_22667 = process.call(null,inst_22666);
var state_22676__$1 = state_22676;
if(cljs.core.truth_(inst_22667)){
var statearr_22679_22837 = state_22676__$1;
(statearr_22679_22837[(1)] = (5));

} else {
var statearr_22680_22838 = state_22676__$1;
(statearr_22680_22838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (5))){
var state_22676__$1 = state_22676;
var statearr_22681_22839 = state_22676__$1;
(statearr_22681_22839[(2)] = null);

(statearr_22681_22839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (6))){
var state_22676__$1 = state_22676;
var statearr_22682_22840 = state_22676__$1;
(statearr_22682_22840[(2)] = null);

(statearr_22682_22840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (7))){
var inst_22672 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22683_22841 = state_22676__$1;
(statearr_22683_22841[(2)] = inst_22672);

(statearr_22683_22841[(1)] = (3));


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
});})(__22832,c__22278__auto___22835,G__22663_22833,n__19383__auto___22831,jobs,results,process,async))
;
return ((function (__22832,switch__22166__auto__,c__22278__auto___22835,G__22663_22833,n__19383__auto___22831,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0 = (function (){
var statearr_22687 = [null,null,null,null,null,null,null];
(statearr_22687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__);

(statearr_22687[(1)] = (1));

return statearr_22687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1 = (function (state_22676){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_22676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e22688){if((e22688 instanceof Object)){
var ex__22170__auto__ = e22688;
var statearr_22689_22842 = state_22676;
(statearr_22689_22842[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22843 = state_22676;
state_22676 = G__22843;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = function(state_22676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1.call(this,state_22676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__;
})()
;})(__22832,switch__22166__auto__,c__22278__auto___22835,G__22663_22833,n__19383__auto___22831,jobs,results,process,async))
})();
var state__22280__auto__ = (function (){var statearr_22690 = f__22279__auto__.call(null);
(statearr_22690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___22835);

return statearr_22690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(__22832,c__22278__auto___22835,G__22663_22833,n__19383__auto___22831,jobs,results,process,async))
);


break;
case "async":
var c__22278__auto___22844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22832,c__22278__auto___22844,G__22663_22833,n__19383__auto___22831,jobs,results,process,async){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (__22832,c__22278__auto___22844,G__22663_22833,n__19383__auto___22831,jobs,results,process,async){
return (function (state_22703){
var state_val_22704 = (state_22703[(1)]);
if((state_val_22704 === (1))){
var state_22703__$1 = state_22703;
var statearr_22705_22845 = state_22703__$1;
(statearr_22705_22845[(2)] = null);

(statearr_22705_22845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22704 === (2))){
var state_22703__$1 = state_22703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22703__$1,(4),jobs);
} else {
if((state_val_22704 === (3))){
var inst_22701 = (state_22703[(2)]);
var state_22703__$1 = state_22703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22703__$1,inst_22701);
} else {
if((state_val_22704 === (4))){
var inst_22693 = (state_22703[(2)]);
var inst_22694 = async.call(null,inst_22693);
var state_22703__$1 = state_22703;
if(cljs.core.truth_(inst_22694)){
var statearr_22706_22846 = state_22703__$1;
(statearr_22706_22846[(1)] = (5));

} else {
var statearr_22707_22847 = state_22703__$1;
(statearr_22707_22847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22704 === (5))){
var state_22703__$1 = state_22703;
var statearr_22708_22848 = state_22703__$1;
(statearr_22708_22848[(2)] = null);

(statearr_22708_22848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22704 === (6))){
var state_22703__$1 = state_22703;
var statearr_22709_22849 = state_22703__$1;
(statearr_22709_22849[(2)] = null);

(statearr_22709_22849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22704 === (7))){
var inst_22699 = (state_22703[(2)]);
var state_22703__$1 = state_22703;
var statearr_22710_22850 = state_22703__$1;
(statearr_22710_22850[(2)] = inst_22699);

(statearr_22710_22850[(1)] = (3));


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
});})(__22832,c__22278__auto___22844,G__22663_22833,n__19383__auto___22831,jobs,results,process,async))
;
return ((function (__22832,switch__22166__auto__,c__22278__auto___22844,G__22663_22833,n__19383__auto___22831,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0 = (function (){
var statearr_22714 = [null,null,null,null,null,null,null];
(statearr_22714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__);

(statearr_22714[(1)] = (1));

return statearr_22714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1 = (function (state_22703){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_22703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e22715){if((e22715 instanceof Object)){
var ex__22170__auto__ = e22715;
var statearr_22716_22851 = state_22703;
(statearr_22716_22851[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22852 = state_22703;
state_22703 = G__22852;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = function(state_22703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1.call(this,state_22703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__;
})()
;})(__22832,switch__22166__auto__,c__22278__auto___22844,G__22663_22833,n__19383__auto___22831,jobs,results,process,async))
})();
var state__22280__auto__ = (function (){var statearr_22717 = f__22279__auto__.call(null);
(statearr_22717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___22844);

return statearr_22717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(__22832,c__22278__auto___22844,G__22663_22833,n__19383__auto___22831,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22853 = (__22832 + (1));
__22832 = G__22853;
continue;
} else {
}
break;
}

var c__22278__auto___22854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___22854,jobs,results,process,async){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___22854,jobs,results,process,async){
return (function (state_22739){
var state_val_22740 = (state_22739[(1)]);
if((state_val_22740 === (1))){
var state_22739__$1 = state_22739;
var statearr_22741_22855 = state_22739__$1;
(statearr_22741_22855[(2)] = null);

(statearr_22741_22855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (2))){
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22739__$1,(4),from);
} else {
if((state_val_22740 === (3))){
var inst_22737 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22739__$1,inst_22737);
} else {
if((state_val_22740 === (4))){
var inst_22720 = (state_22739[(7)]);
var inst_22720__$1 = (state_22739[(2)]);
var inst_22721 = (inst_22720__$1 == null);
var state_22739__$1 = (function (){var statearr_22742 = state_22739;
(statearr_22742[(7)] = inst_22720__$1);

return statearr_22742;
})();
if(cljs.core.truth_(inst_22721)){
var statearr_22743_22856 = state_22739__$1;
(statearr_22743_22856[(1)] = (5));

} else {
var statearr_22744_22857 = state_22739__$1;
(statearr_22744_22857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (5))){
var inst_22723 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22739__$1 = state_22739;
var statearr_22745_22858 = state_22739__$1;
(statearr_22745_22858[(2)] = inst_22723);

(statearr_22745_22858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (6))){
var inst_22720 = (state_22739[(7)]);
var inst_22725 = (state_22739[(8)]);
var inst_22725__$1 = cljs.core.async.chan.call(null,(1));
var inst_22726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22727 = [inst_22720,inst_22725__$1];
var inst_22728 = (new cljs.core.PersistentVector(null,2,(5),inst_22726,inst_22727,null));
var state_22739__$1 = (function (){var statearr_22746 = state_22739;
(statearr_22746[(8)] = inst_22725__$1);

return statearr_22746;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22739__$1,(8),jobs,inst_22728);
} else {
if((state_val_22740 === (7))){
var inst_22735 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22747_22859 = state_22739__$1;
(statearr_22747_22859[(2)] = inst_22735);

(statearr_22747_22859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (8))){
var inst_22725 = (state_22739[(8)]);
var inst_22730 = (state_22739[(2)]);
var state_22739__$1 = (function (){var statearr_22748 = state_22739;
(statearr_22748[(9)] = inst_22730);

return statearr_22748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22739__$1,(9),results,inst_22725);
} else {
if((state_val_22740 === (9))){
var inst_22732 = (state_22739[(2)]);
var state_22739__$1 = (function (){var statearr_22749 = state_22739;
(statearr_22749[(10)] = inst_22732);

return statearr_22749;
})();
var statearr_22750_22860 = state_22739__$1;
(statearr_22750_22860[(2)] = null);

(statearr_22750_22860[(1)] = (2));


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
});})(c__22278__auto___22854,jobs,results,process,async))
;
return ((function (switch__22166__auto__,c__22278__auto___22854,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0 = (function (){
var statearr_22754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__);

(statearr_22754[(1)] = (1));

return statearr_22754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1 = (function (state_22739){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_22739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e22755){if((e22755 instanceof Object)){
var ex__22170__auto__ = e22755;
var statearr_22756_22861 = state_22739;
(statearr_22756_22861[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22862 = state_22739;
state_22739 = G__22862;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = function(state_22739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1.call(this,state_22739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___22854,jobs,results,process,async))
})();
var state__22280__auto__ = (function (){var statearr_22757 = f__22279__auto__.call(null);
(statearr_22757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___22854);

return statearr_22757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___22854,jobs,results,process,async))
);


var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__,jobs,results,process,async){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__,jobs,results,process,async){
return (function (state_22795){
var state_val_22796 = (state_22795[(1)]);
if((state_val_22796 === (7))){
var inst_22791 = (state_22795[(2)]);
var state_22795__$1 = state_22795;
var statearr_22797_22863 = state_22795__$1;
(statearr_22797_22863[(2)] = inst_22791);

(statearr_22797_22863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (20))){
var state_22795__$1 = state_22795;
var statearr_22798_22864 = state_22795__$1;
(statearr_22798_22864[(2)] = null);

(statearr_22798_22864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (1))){
var state_22795__$1 = state_22795;
var statearr_22799_22865 = state_22795__$1;
(statearr_22799_22865[(2)] = null);

(statearr_22799_22865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (4))){
var inst_22760 = (state_22795[(7)]);
var inst_22760__$1 = (state_22795[(2)]);
var inst_22761 = (inst_22760__$1 == null);
var state_22795__$1 = (function (){var statearr_22800 = state_22795;
(statearr_22800[(7)] = inst_22760__$1);

return statearr_22800;
})();
if(cljs.core.truth_(inst_22761)){
var statearr_22801_22866 = state_22795__$1;
(statearr_22801_22866[(1)] = (5));

} else {
var statearr_22802_22867 = state_22795__$1;
(statearr_22802_22867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (15))){
var inst_22773 = (state_22795[(8)]);
var state_22795__$1 = state_22795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22795__$1,(18),to,inst_22773);
} else {
if((state_val_22796 === (21))){
var inst_22786 = (state_22795[(2)]);
var state_22795__$1 = state_22795;
var statearr_22803_22868 = state_22795__$1;
(statearr_22803_22868[(2)] = inst_22786);

(statearr_22803_22868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (13))){
var inst_22788 = (state_22795[(2)]);
var state_22795__$1 = (function (){var statearr_22804 = state_22795;
(statearr_22804[(9)] = inst_22788);

return statearr_22804;
})();
var statearr_22805_22869 = state_22795__$1;
(statearr_22805_22869[(2)] = null);

(statearr_22805_22869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (6))){
var inst_22760 = (state_22795[(7)]);
var state_22795__$1 = state_22795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22795__$1,(11),inst_22760);
} else {
if((state_val_22796 === (17))){
var inst_22781 = (state_22795[(2)]);
var state_22795__$1 = state_22795;
if(cljs.core.truth_(inst_22781)){
var statearr_22806_22870 = state_22795__$1;
(statearr_22806_22870[(1)] = (19));

} else {
var statearr_22807_22871 = state_22795__$1;
(statearr_22807_22871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (3))){
var inst_22793 = (state_22795[(2)]);
var state_22795__$1 = state_22795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22795__$1,inst_22793);
} else {
if((state_val_22796 === (12))){
var inst_22770 = (state_22795[(10)]);
var state_22795__$1 = state_22795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22795__$1,(14),inst_22770);
} else {
if((state_val_22796 === (2))){
var state_22795__$1 = state_22795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22795__$1,(4),results);
} else {
if((state_val_22796 === (19))){
var state_22795__$1 = state_22795;
var statearr_22808_22872 = state_22795__$1;
(statearr_22808_22872[(2)] = null);

(statearr_22808_22872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (11))){
var inst_22770 = (state_22795[(2)]);
var state_22795__$1 = (function (){var statearr_22809 = state_22795;
(statearr_22809[(10)] = inst_22770);

return statearr_22809;
})();
var statearr_22810_22873 = state_22795__$1;
(statearr_22810_22873[(2)] = null);

(statearr_22810_22873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (9))){
var state_22795__$1 = state_22795;
var statearr_22811_22874 = state_22795__$1;
(statearr_22811_22874[(2)] = null);

(statearr_22811_22874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (5))){
var state_22795__$1 = state_22795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22812_22875 = state_22795__$1;
(statearr_22812_22875[(1)] = (8));

} else {
var statearr_22813_22876 = state_22795__$1;
(statearr_22813_22876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (14))){
var inst_22773 = (state_22795[(8)]);
var inst_22775 = (state_22795[(11)]);
var inst_22773__$1 = (state_22795[(2)]);
var inst_22774 = (inst_22773__$1 == null);
var inst_22775__$1 = cljs.core.not.call(null,inst_22774);
var state_22795__$1 = (function (){var statearr_22814 = state_22795;
(statearr_22814[(8)] = inst_22773__$1);

(statearr_22814[(11)] = inst_22775__$1);

return statearr_22814;
})();
if(inst_22775__$1){
var statearr_22815_22877 = state_22795__$1;
(statearr_22815_22877[(1)] = (15));

} else {
var statearr_22816_22878 = state_22795__$1;
(statearr_22816_22878[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (16))){
var inst_22775 = (state_22795[(11)]);
var state_22795__$1 = state_22795;
var statearr_22817_22879 = state_22795__$1;
(statearr_22817_22879[(2)] = inst_22775);

(statearr_22817_22879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (10))){
var inst_22767 = (state_22795[(2)]);
var state_22795__$1 = state_22795;
var statearr_22818_22880 = state_22795__$1;
(statearr_22818_22880[(2)] = inst_22767);

(statearr_22818_22880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (18))){
var inst_22778 = (state_22795[(2)]);
var state_22795__$1 = state_22795;
var statearr_22819_22881 = state_22795__$1;
(statearr_22819_22881[(2)] = inst_22778);

(statearr_22819_22881[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22796 === (8))){
var inst_22764 = cljs.core.async.close_BANG_.call(null,to);
var state_22795__$1 = state_22795;
var statearr_22820_22882 = state_22795__$1;
(statearr_22820_22882[(2)] = inst_22764);

(statearr_22820_22882[(1)] = (10));


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
});})(c__22278__auto__,jobs,results,process,async))
;
return ((function (switch__22166__auto__,c__22278__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0 = (function (){
var statearr_22824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__);

(statearr_22824[(1)] = (1));

return statearr_22824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1 = (function (state_22795){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_22795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e22825){if((e22825 instanceof Object)){
var ex__22170__auto__ = e22825;
var statearr_22826_22883 = state_22795;
(statearr_22826_22883[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22884 = state_22795;
state_22795 = G__22884;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__ = function(state_22795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1.call(this,state_22795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__,jobs,results,process,async))
})();
var state__22280__auto__ = (function (){var statearr_22827 = f__22279__auto__.call(null);
(statearr_22827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__,jobs,results,process,async))
);

return c__22278__auto__;
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
var args22885 = [];
var len__19538__auto___22888 = arguments.length;
var i__19539__auto___22889 = (0);
while(true){
if((i__19539__auto___22889 < len__19538__auto___22888)){
args22885.push((arguments[i__19539__auto___22889]));

var G__22890 = (i__19539__auto___22889 + (1));
i__19539__auto___22889 = G__22890;
continue;
} else {
}
break;
}

var G__22887 = args22885.length;
switch (G__22887) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22885.length)].join('')));

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
var args22892 = [];
var len__19538__auto___22895 = arguments.length;
var i__19539__auto___22896 = (0);
while(true){
if((i__19539__auto___22896 < len__19538__auto___22895)){
args22892.push((arguments[i__19539__auto___22896]));

var G__22897 = (i__19539__auto___22896 + (1));
i__19539__auto___22896 = G__22897;
continue;
} else {
}
break;
}

var G__22894 = args22892.length;
switch (G__22894) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22892.length)].join('')));

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
var args22899 = [];
var len__19538__auto___22952 = arguments.length;
var i__19539__auto___22953 = (0);
while(true){
if((i__19539__auto___22953 < len__19538__auto___22952)){
args22899.push((arguments[i__19539__auto___22953]));

var G__22954 = (i__19539__auto___22953 + (1));
i__19539__auto___22953 = G__22954;
continue;
} else {
}
break;
}

var G__22901 = args22899.length;
switch (G__22901) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22899.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22278__auto___22956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___22956,tc,fc){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___22956,tc,fc){
return (function (state_22927){
var state_val_22928 = (state_22927[(1)]);
if((state_val_22928 === (7))){
var inst_22923 = (state_22927[(2)]);
var state_22927__$1 = state_22927;
var statearr_22929_22957 = state_22927__$1;
(statearr_22929_22957[(2)] = inst_22923);

(statearr_22929_22957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (1))){
var state_22927__$1 = state_22927;
var statearr_22930_22958 = state_22927__$1;
(statearr_22930_22958[(2)] = null);

(statearr_22930_22958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (4))){
var inst_22904 = (state_22927[(7)]);
var inst_22904__$1 = (state_22927[(2)]);
var inst_22905 = (inst_22904__$1 == null);
var state_22927__$1 = (function (){var statearr_22931 = state_22927;
(statearr_22931[(7)] = inst_22904__$1);

return statearr_22931;
})();
if(cljs.core.truth_(inst_22905)){
var statearr_22932_22959 = state_22927__$1;
(statearr_22932_22959[(1)] = (5));

} else {
var statearr_22933_22960 = state_22927__$1;
(statearr_22933_22960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (13))){
var state_22927__$1 = state_22927;
var statearr_22934_22961 = state_22927__$1;
(statearr_22934_22961[(2)] = null);

(statearr_22934_22961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (6))){
var inst_22904 = (state_22927[(7)]);
var inst_22910 = p.call(null,inst_22904);
var state_22927__$1 = state_22927;
if(cljs.core.truth_(inst_22910)){
var statearr_22935_22962 = state_22927__$1;
(statearr_22935_22962[(1)] = (9));

} else {
var statearr_22936_22963 = state_22927__$1;
(statearr_22936_22963[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (3))){
var inst_22925 = (state_22927[(2)]);
var state_22927__$1 = state_22927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22927__$1,inst_22925);
} else {
if((state_val_22928 === (12))){
var state_22927__$1 = state_22927;
var statearr_22937_22964 = state_22927__$1;
(statearr_22937_22964[(2)] = null);

(statearr_22937_22964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (2))){
var state_22927__$1 = state_22927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22927__$1,(4),ch);
} else {
if((state_val_22928 === (11))){
var inst_22904 = (state_22927[(7)]);
var inst_22914 = (state_22927[(2)]);
var state_22927__$1 = state_22927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22927__$1,(8),inst_22914,inst_22904);
} else {
if((state_val_22928 === (9))){
var state_22927__$1 = state_22927;
var statearr_22938_22965 = state_22927__$1;
(statearr_22938_22965[(2)] = tc);

(statearr_22938_22965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (5))){
var inst_22907 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22908 = cljs.core.async.close_BANG_.call(null,fc);
var state_22927__$1 = (function (){var statearr_22939 = state_22927;
(statearr_22939[(8)] = inst_22907);

return statearr_22939;
})();
var statearr_22940_22966 = state_22927__$1;
(statearr_22940_22966[(2)] = inst_22908);

(statearr_22940_22966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (14))){
var inst_22921 = (state_22927[(2)]);
var state_22927__$1 = state_22927;
var statearr_22941_22967 = state_22927__$1;
(statearr_22941_22967[(2)] = inst_22921);

(statearr_22941_22967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (10))){
var state_22927__$1 = state_22927;
var statearr_22942_22968 = state_22927__$1;
(statearr_22942_22968[(2)] = fc);

(statearr_22942_22968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22928 === (8))){
var inst_22916 = (state_22927[(2)]);
var state_22927__$1 = state_22927;
if(cljs.core.truth_(inst_22916)){
var statearr_22943_22969 = state_22927__$1;
(statearr_22943_22969[(1)] = (12));

} else {
var statearr_22944_22970 = state_22927__$1;
(statearr_22944_22970[(1)] = (13));

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
});})(c__22278__auto___22956,tc,fc))
;
return ((function (switch__22166__auto__,c__22278__auto___22956,tc,fc){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_22948 = [null,null,null,null,null,null,null,null,null];
(statearr_22948[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_22948[(1)] = (1));

return statearr_22948;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_22927){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_22927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e22949){if((e22949 instanceof Object)){
var ex__22170__auto__ = e22949;
var statearr_22950_22971 = state_22927;
(statearr_22950_22971[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22972 = state_22927;
state_22927 = G__22972;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_22927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_22927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___22956,tc,fc))
})();
var state__22280__auto__ = (function (){var statearr_22951 = f__22279__auto__.call(null);
(statearr_22951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___22956);

return statearr_22951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___22956,tc,fc))
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
var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__){
return (function (state_23036){
var state_val_23037 = (state_23036[(1)]);
if((state_val_23037 === (7))){
var inst_23032 = (state_23036[(2)]);
var state_23036__$1 = state_23036;
var statearr_23038_23059 = state_23036__$1;
(statearr_23038_23059[(2)] = inst_23032);

(statearr_23038_23059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23037 === (1))){
var inst_23016 = init;
var state_23036__$1 = (function (){var statearr_23039 = state_23036;
(statearr_23039[(7)] = inst_23016);

return statearr_23039;
})();
var statearr_23040_23060 = state_23036__$1;
(statearr_23040_23060[(2)] = null);

(statearr_23040_23060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23037 === (4))){
var inst_23019 = (state_23036[(8)]);
var inst_23019__$1 = (state_23036[(2)]);
var inst_23020 = (inst_23019__$1 == null);
var state_23036__$1 = (function (){var statearr_23041 = state_23036;
(statearr_23041[(8)] = inst_23019__$1);

return statearr_23041;
})();
if(cljs.core.truth_(inst_23020)){
var statearr_23042_23061 = state_23036__$1;
(statearr_23042_23061[(1)] = (5));

} else {
var statearr_23043_23062 = state_23036__$1;
(statearr_23043_23062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23037 === (6))){
var inst_23016 = (state_23036[(7)]);
var inst_23023 = (state_23036[(9)]);
var inst_23019 = (state_23036[(8)]);
var inst_23023__$1 = f.call(null,inst_23016,inst_23019);
var inst_23024 = cljs.core.reduced_QMARK_.call(null,inst_23023__$1);
var state_23036__$1 = (function (){var statearr_23044 = state_23036;
(statearr_23044[(9)] = inst_23023__$1);

return statearr_23044;
})();
if(inst_23024){
var statearr_23045_23063 = state_23036__$1;
(statearr_23045_23063[(1)] = (8));

} else {
var statearr_23046_23064 = state_23036__$1;
(statearr_23046_23064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23037 === (3))){
var inst_23034 = (state_23036[(2)]);
var state_23036__$1 = state_23036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23036__$1,inst_23034);
} else {
if((state_val_23037 === (2))){
var state_23036__$1 = state_23036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23036__$1,(4),ch);
} else {
if((state_val_23037 === (9))){
var inst_23023 = (state_23036[(9)]);
var inst_23016 = inst_23023;
var state_23036__$1 = (function (){var statearr_23047 = state_23036;
(statearr_23047[(7)] = inst_23016);

return statearr_23047;
})();
var statearr_23048_23065 = state_23036__$1;
(statearr_23048_23065[(2)] = null);

(statearr_23048_23065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23037 === (5))){
var inst_23016 = (state_23036[(7)]);
var state_23036__$1 = state_23036;
var statearr_23049_23066 = state_23036__$1;
(statearr_23049_23066[(2)] = inst_23016);

(statearr_23049_23066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23037 === (10))){
var inst_23030 = (state_23036[(2)]);
var state_23036__$1 = state_23036;
var statearr_23050_23067 = state_23036__$1;
(statearr_23050_23067[(2)] = inst_23030);

(statearr_23050_23067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23037 === (8))){
var inst_23023 = (state_23036[(9)]);
var inst_23026 = cljs.core.deref.call(null,inst_23023);
var state_23036__$1 = state_23036;
var statearr_23051_23068 = state_23036__$1;
(statearr_23051_23068[(2)] = inst_23026);

(statearr_23051_23068[(1)] = (10));


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
});})(c__22278__auto__))
;
return ((function (switch__22166__auto__,c__22278__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22167__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22167__auto____0 = (function (){
var statearr_23055 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23055[(0)] = cljs$core$async$reduce_$_state_machine__22167__auto__);

(statearr_23055[(1)] = (1));

return statearr_23055;
});
var cljs$core$async$reduce_$_state_machine__22167__auto____1 = (function (state_23036){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_23036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e23056){if((e23056 instanceof Object)){
var ex__22170__auto__ = e23056;
var statearr_23057_23069 = state_23036;
(statearr_23057_23069[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23070 = state_23036;
state_23036 = G__23070;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22167__auto__ = function(state_23036){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22167__auto____1.call(this,state_23036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22167__auto____0;
cljs$core$async$reduce_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22167__auto____1;
return cljs$core$async$reduce_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__))
})();
var state__22280__auto__ = (function (){var statearr_23058 = f__22279__auto__.call(null);
(statearr_23058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_23058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__))
);

return c__22278__auto__;
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
var args23071 = [];
var len__19538__auto___23123 = arguments.length;
var i__19539__auto___23124 = (0);
while(true){
if((i__19539__auto___23124 < len__19538__auto___23123)){
args23071.push((arguments[i__19539__auto___23124]));

var G__23125 = (i__19539__auto___23124 + (1));
i__19539__auto___23124 = G__23125;
continue;
} else {
}
break;
}

var G__23073 = args23071.length;
switch (G__23073) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23071.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__){
return (function (state_23098){
var state_val_23099 = (state_23098[(1)]);
if((state_val_23099 === (7))){
var inst_23080 = (state_23098[(2)]);
var state_23098__$1 = state_23098;
var statearr_23100_23127 = state_23098__$1;
(statearr_23100_23127[(2)] = inst_23080);

(statearr_23100_23127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (1))){
var inst_23074 = cljs.core.seq.call(null,coll);
var inst_23075 = inst_23074;
var state_23098__$1 = (function (){var statearr_23101 = state_23098;
(statearr_23101[(7)] = inst_23075);

return statearr_23101;
})();
var statearr_23102_23128 = state_23098__$1;
(statearr_23102_23128[(2)] = null);

(statearr_23102_23128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (4))){
var inst_23075 = (state_23098[(7)]);
var inst_23078 = cljs.core.first.call(null,inst_23075);
var state_23098__$1 = state_23098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23098__$1,(7),ch,inst_23078);
} else {
if((state_val_23099 === (13))){
var inst_23092 = (state_23098[(2)]);
var state_23098__$1 = state_23098;
var statearr_23103_23129 = state_23098__$1;
(statearr_23103_23129[(2)] = inst_23092);

(statearr_23103_23129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (6))){
var inst_23083 = (state_23098[(2)]);
var state_23098__$1 = state_23098;
if(cljs.core.truth_(inst_23083)){
var statearr_23104_23130 = state_23098__$1;
(statearr_23104_23130[(1)] = (8));

} else {
var statearr_23105_23131 = state_23098__$1;
(statearr_23105_23131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (3))){
var inst_23096 = (state_23098[(2)]);
var state_23098__$1 = state_23098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23098__$1,inst_23096);
} else {
if((state_val_23099 === (12))){
var state_23098__$1 = state_23098;
var statearr_23106_23132 = state_23098__$1;
(statearr_23106_23132[(2)] = null);

(statearr_23106_23132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (2))){
var inst_23075 = (state_23098[(7)]);
var state_23098__$1 = state_23098;
if(cljs.core.truth_(inst_23075)){
var statearr_23107_23133 = state_23098__$1;
(statearr_23107_23133[(1)] = (4));

} else {
var statearr_23108_23134 = state_23098__$1;
(statearr_23108_23134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (11))){
var inst_23089 = cljs.core.async.close_BANG_.call(null,ch);
var state_23098__$1 = state_23098;
var statearr_23109_23135 = state_23098__$1;
(statearr_23109_23135[(2)] = inst_23089);

(statearr_23109_23135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (9))){
var state_23098__$1 = state_23098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23110_23136 = state_23098__$1;
(statearr_23110_23136[(1)] = (11));

} else {
var statearr_23111_23137 = state_23098__$1;
(statearr_23111_23137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (5))){
var inst_23075 = (state_23098[(7)]);
var state_23098__$1 = state_23098;
var statearr_23112_23138 = state_23098__$1;
(statearr_23112_23138[(2)] = inst_23075);

(statearr_23112_23138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (10))){
var inst_23094 = (state_23098[(2)]);
var state_23098__$1 = state_23098;
var statearr_23113_23139 = state_23098__$1;
(statearr_23113_23139[(2)] = inst_23094);

(statearr_23113_23139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (8))){
var inst_23075 = (state_23098[(7)]);
var inst_23085 = cljs.core.next.call(null,inst_23075);
var inst_23075__$1 = inst_23085;
var state_23098__$1 = (function (){var statearr_23114 = state_23098;
(statearr_23114[(7)] = inst_23075__$1);

return statearr_23114;
})();
var statearr_23115_23140 = state_23098__$1;
(statearr_23115_23140[(2)] = null);

(statearr_23115_23140[(1)] = (2));


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
});})(c__22278__auto__))
;
return ((function (switch__22166__auto__,c__22278__auto__){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_23119 = [null,null,null,null,null,null,null,null];
(statearr_23119[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_23119[(1)] = (1));

return statearr_23119;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_23098){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_23098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e23120){if((e23120 instanceof Object)){
var ex__22170__auto__ = e23120;
var statearr_23121_23141 = state_23098;
(statearr_23121_23141[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23142 = state_23098;
state_23098 = G__23142;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_23098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_23098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__))
})();
var state__22280__auto__ = (function (){var statearr_23122 = f__22279__auto__.call(null);
(statearr_23122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_23122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__))
);

return c__22278__auto__;
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
var x__19131__auto__ = (((_ == null))?null:_);
var m__19132__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,_);
} else {
var m__19132__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,_);
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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19132__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch);
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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m);
} else {
var m__19132__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23364 = (function (mult,ch,cs,meta23365){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23365 = meta23365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23366,meta23365__$1){
var self__ = this;
var _23366__$1 = this;
return (new cljs.core.async.t_cljs$core$async23364(self__.mult,self__.ch,self__.cs,meta23365__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23366){
var self__ = this;
var _23366__$1 = this;
return self__.meta23365;
});})(cs))
;

cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23364.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23364.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23365","meta23365",-1542795246,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23364";

cljs.core.async.t_cljs$core$async23364.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23364");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23364 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23364(mult__$1,ch__$1,cs__$1,meta23365){
return (new cljs.core.async.t_cljs$core$async23364(mult__$1,ch__$1,cs__$1,meta23365));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23364(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22278__auto___23585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___23585,cs,m,dchan,dctr,done){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___23585,cs,m,dchan,dctr,done){
return (function (state_23497){
var state_val_23498 = (state_23497[(1)]);
if((state_val_23498 === (7))){
var inst_23493 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23499_23586 = state_23497__$1;
(statearr_23499_23586[(2)] = inst_23493);

(statearr_23499_23586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (20))){
var inst_23398 = (state_23497[(7)]);
var inst_23408 = cljs.core.first.call(null,inst_23398);
var inst_23409 = cljs.core.nth.call(null,inst_23408,(0),null);
var inst_23410 = cljs.core.nth.call(null,inst_23408,(1),null);
var state_23497__$1 = (function (){var statearr_23500 = state_23497;
(statearr_23500[(8)] = inst_23409);

return statearr_23500;
})();
if(cljs.core.truth_(inst_23410)){
var statearr_23501_23587 = state_23497__$1;
(statearr_23501_23587[(1)] = (22));

} else {
var statearr_23502_23588 = state_23497__$1;
(statearr_23502_23588[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (27))){
var inst_23438 = (state_23497[(9)]);
var inst_23369 = (state_23497[(10)]);
var inst_23440 = (state_23497[(11)]);
var inst_23445 = (state_23497[(12)]);
var inst_23445__$1 = cljs.core._nth.call(null,inst_23438,inst_23440);
var inst_23446 = cljs.core.async.put_BANG_.call(null,inst_23445__$1,inst_23369,done);
var state_23497__$1 = (function (){var statearr_23503 = state_23497;
(statearr_23503[(12)] = inst_23445__$1);

return statearr_23503;
})();
if(cljs.core.truth_(inst_23446)){
var statearr_23504_23589 = state_23497__$1;
(statearr_23504_23589[(1)] = (30));

} else {
var statearr_23505_23590 = state_23497__$1;
(statearr_23505_23590[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (1))){
var state_23497__$1 = state_23497;
var statearr_23506_23591 = state_23497__$1;
(statearr_23506_23591[(2)] = null);

(statearr_23506_23591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (24))){
var inst_23398 = (state_23497[(7)]);
var inst_23415 = (state_23497[(2)]);
var inst_23416 = cljs.core.next.call(null,inst_23398);
var inst_23378 = inst_23416;
var inst_23379 = null;
var inst_23380 = (0);
var inst_23381 = (0);
var state_23497__$1 = (function (){var statearr_23507 = state_23497;
(statearr_23507[(13)] = inst_23379);

(statearr_23507[(14)] = inst_23415);

(statearr_23507[(15)] = inst_23381);

(statearr_23507[(16)] = inst_23380);

(statearr_23507[(17)] = inst_23378);

return statearr_23507;
})();
var statearr_23508_23592 = state_23497__$1;
(statearr_23508_23592[(2)] = null);

(statearr_23508_23592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (39))){
var state_23497__$1 = state_23497;
var statearr_23512_23593 = state_23497__$1;
(statearr_23512_23593[(2)] = null);

(statearr_23512_23593[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (4))){
var inst_23369 = (state_23497[(10)]);
var inst_23369__$1 = (state_23497[(2)]);
var inst_23370 = (inst_23369__$1 == null);
var state_23497__$1 = (function (){var statearr_23513 = state_23497;
(statearr_23513[(10)] = inst_23369__$1);

return statearr_23513;
})();
if(cljs.core.truth_(inst_23370)){
var statearr_23514_23594 = state_23497__$1;
(statearr_23514_23594[(1)] = (5));

} else {
var statearr_23515_23595 = state_23497__$1;
(statearr_23515_23595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (15))){
var inst_23379 = (state_23497[(13)]);
var inst_23381 = (state_23497[(15)]);
var inst_23380 = (state_23497[(16)]);
var inst_23378 = (state_23497[(17)]);
var inst_23394 = (state_23497[(2)]);
var inst_23395 = (inst_23381 + (1));
var tmp23509 = inst_23379;
var tmp23510 = inst_23380;
var tmp23511 = inst_23378;
var inst_23378__$1 = tmp23511;
var inst_23379__$1 = tmp23509;
var inst_23380__$1 = tmp23510;
var inst_23381__$1 = inst_23395;
var state_23497__$1 = (function (){var statearr_23516 = state_23497;
(statearr_23516[(13)] = inst_23379__$1);

(statearr_23516[(18)] = inst_23394);

(statearr_23516[(15)] = inst_23381__$1);

(statearr_23516[(16)] = inst_23380__$1);

(statearr_23516[(17)] = inst_23378__$1);

return statearr_23516;
})();
var statearr_23517_23596 = state_23497__$1;
(statearr_23517_23596[(2)] = null);

(statearr_23517_23596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (21))){
var inst_23419 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23521_23597 = state_23497__$1;
(statearr_23521_23597[(2)] = inst_23419);

(statearr_23521_23597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (31))){
var inst_23445 = (state_23497[(12)]);
var inst_23449 = done.call(null,null);
var inst_23450 = cljs.core.async.untap_STAR_.call(null,m,inst_23445);
var state_23497__$1 = (function (){var statearr_23522 = state_23497;
(statearr_23522[(19)] = inst_23449);

return statearr_23522;
})();
var statearr_23523_23598 = state_23497__$1;
(statearr_23523_23598[(2)] = inst_23450);

(statearr_23523_23598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (32))){
var inst_23437 = (state_23497[(20)]);
var inst_23438 = (state_23497[(9)]);
var inst_23439 = (state_23497[(21)]);
var inst_23440 = (state_23497[(11)]);
var inst_23452 = (state_23497[(2)]);
var inst_23453 = (inst_23440 + (1));
var tmp23518 = inst_23437;
var tmp23519 = inst_23438;
var tmp23520 = inst_23439;
var inst_23437__$1 = tmp23518;
var inst_23438__$1 = tmp23519;
var inst_23439__$1 = tmp23520;
var inst_23440__$1 = inst_23453;
var state_23497__$1 = (function (){var statearr_23524 = state_23497;
(statearr_23524[(20)] = inst_23437__$1);

(statearr_23524[(9)] = inst_23438__$1);

(statearr_23524[(21)] = inst_23439__$1);

(statearr_23524[(11)] = inst_23440__$1);

(statearr_23524[(22)] = inst_23452);

return statearr_23524;
})();
var statearr_23525_23599 = state_23497__$1;
(statearr_23525_23599[(2)] = null);

(statearr_23525_23599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (40))){
var inst_23465 = (state_23497[(23)]);
var inst_23469 = done.call(null,null);
var inst_23470 = cljs.core.async.untap_STAR_.call(null,m,inst_23465);
var state_23497__$1 = (function (){var statearr_23526 = state_23497;
(statearr_23526[(24)] = inst_23469);

return statearr_23526;
})();
var statearr_23527_23600 = state_23497__$1;
(statearr_23527_23600[(2)] = inst_23470);

(statearr_23527_23600[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (33))){
var inst_23456 = (state_23497[(25)]);
var inst_23458 = cljs.core.chunked_seq_QMARK_.call(null,inst_23456);
var state_23497__$1 = state_23497;
if(inst_23458){
var statearr_23528_23601 = state_23497__$1;
(statearr_23528_23601[(1)] = (36));

} else {
var statearr_23529_23602 = state_23497__$1;
(statearr_23529_23602[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (13))){
var inst_23388 = (state_23497[(26)]);
var inst_23391 = cljs.core.async.close_BANG_.call(null,inst_23388);
var state_23497__$1 = state_23497;
var statearr_23530_23603 = state_23497__$1;
(statearr_23530_23603[(2)] = inst_23391);

(statearr_23530_23603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (22))){
var inst_23409 = (state_23497[(8)]);
var inst_23412 = cljs.core.async.close_BANG_.call(null,inst_23409);
var state_23497__$1 = state_23497;
var statearr_23531_23604 = state_23497__$1;
(statearr_23531_23604[(2)] = inst_23412);

(statearr_23531_23604[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (36))){
var inst_23456 = (state_23497[(25)]);
var inst_23460 = cljs.core.chunk_first.call(null,inst_23456);
var inst_23461 = cljs.core.chunk_rest.call(null,inst_23456);
var inst_23462 = cljs.core.count.call(null,inst_23460);
var inst_23437 = inst_23461;
var inst_23438 = inst_23460;
var inst_23439 = inst_23462;
var inst_23440 = (0);
var state_23497__$1 = (function (){var statearr_23532 = state_23497;
(statearr_23532[(20)] = inst_23437);

(statearr_23532[(9)] = inst_23438);

(statearr_23532[(21)] = inst_23439);

(statearr_23532[(11)] = inst_23440);

return statearr_23532;
})();
var statearr_23533_23605 = state_23497__$1;
(statearr_23533_23605[(2)] = null);

(statearr_23533_23605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (41))){
var inst_23456 = (state_23497[(25)]);
var inst_23472 = (state_23497[(2)]);
var inst_23473 = cljs.core.next.call(null,inst_23456);
var inst_23437 = inst_23473;
var inst_23438 = null;
var inst_23439 = (0);
var inst_23440 = (0);
var state_23497__$1 = (function (){var statearr_23534 = state_23497;
(statearr_23534[(20)] = inst_23437);

(statearr_23534[(9)] = inst_23438);

(statearr_23534[(27)] = inst_23472);

(statearr_23534[(21)] = inst_23439);

(statearr_23534[(11)] = inst_23440);

return statearr_23534;
})();
var statearr_23535_23606 = state_23497__$1;
(statearr_23535_23606[(2)] = null);

(statearr_23535_23606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (43))){
var state_23497__$1 = state_23497;
var statearr_23536_23607 = state_23497__$1;
(statearr_23536_23607[(2)] = null);

(statearr_23536_23607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (29))){
var inst_23481 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23537_23608 = state_23497__$1;
(statearr_23537_23608[(2)] = inst_23481);

(statearr_23537_23608[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (44))){
var inst_23490 = (state_23497[(2)]);
var state_23497__$1 = (function (){var statearr_23538 = state_23497;
(statearr_23538[(28)] = inst_23490);

return statearr_23538;
})();
var statearr_23539_23609 = state_23497__$1;
(statearr_23539_23609[(2)] = null);

(statearr_23539_23609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (6))){
var inst_23429 = (state_23497[(29)]);
var inst_23428 = cljs.core.deref.call(null,cs);
var inst_23429__$1 = cljs.core.keys.call(null,inst_23428);
var inst_23430 = cljs.core.count.call(null,inst_23429__$1);
var inst_23431 = cljs.core.reset_BANG_.call(null,dctr,inst_23430);
var inst_23436 = cljs.core.seq.call(null,inst_23429__$1);
var inst_23437 = inst_23436;
var inst_23438 = null;
var inst_23439 = (0);
var inst_23440 = (0);
var state_23497__$1 = (function (){var statearr_23540 = state_23497;
(statearr_23540[(30)] = inst_23431);

(statearr_23540[(20)] = inst_23437);

(statearr_23540[(29)] = inst_23429__$1);

(statearr_23540[(9)] = inst_23438);

(statearr_23540[(21)] = inst_23439);

(statearr_23540[(11)] = inst_23440);

return statearr_23540;
})();
var statearr_23541_23610 = state_23497__$1;
(statearr_23541_23610[(2)] = null);

(statearr_23541_23610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (28))){
var inst_23437 = (state_23497[(20)]);
var inst_23456 = (state_23497[(25)]);
var inst_23456__$1 = cljs.core.seq.call(null,inst_23437);
var state_23497__$1 = (function (){var statearr_23542 = state_23497;
(statearr_23542[(25)] = inst_23456__$1);

return statearr_23542;
})();
if(inst_23456__$1){
var statearr_23543_23611 = state_23497__$1;
(statearr_23543_23611[(1)] = (33));

} else {
var statearr_23544_23612 = state_23497__$1;
(statearr_23544_23612[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (25))){
var inst_23439 = (state_23497[(21)]);
var inst_23440 = (state_23497[(11)]);
var inst_23442 = (inst_23440 < inst_23439);
var inst_23443 = inst_23442;
var state_23497__$1 = state_23497;
if(cljs.core.truth_(inst_23443)){
var statearr_23545_23613 = state_23497__$1;
(statearr_23545_23613[(1)] = (27));

} else {
var statearr_23546_23614 = state_23497__$1;
(statearr_23546_23614[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (34))){
var state_23497__$1 = state_23497;
var statearr_23547_23615 = state_23497__$1;
(statearr_23547_23615[(2)] = null);

(statearr_23547_23615[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (17))){
var state_23497__$1 = state_23497;
var statearr_23548_23616 = state_23497__$1;
(statearr_23548_23616[(2)] = null);

(statearr_23548_23616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (3))){
var inst_23495 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23497__$1,inst_23495);
} else {
if((state_val_23498 === (12))){
var inst_23424 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23549_23617 = state_23497__$1;
(statearr_23549_23617[(2)] = inst_23424);

(statearr_23549_23617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (2))){
var state_23497__$1 = state_23497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23497__$1,(4),ch);
} else {
if((state_val_23498 === (23))){
var state_23497__$1 = state_23497;
var statearr_23550_23618 = state_23497__$1;
(statearr_23550_23618[(2)] = null);

(statearr_23550_23618[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (35))){
var inst_23479 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23551_23619 = state_23497__$1;
(statearr_23551_23619[(2)] = inst_23479);

(statearr_23551_23619[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (19))){
var inst_23398 = (state_23497[(7)]);
var inst_23402 = cljs.core.chunk_first.call(null,inst_23398);
var inst_23403 = cljs.core.chunk_rest.call(null,inst_23398);
var inst_23404 = cljs.core.count.call(null,inst_23402);
var inst_23378 = inst_23403;
var inst_23379 = inst_23402;
var inst_23380 = inst_23404;
var inst_23381 = (0);
var state_23497__$1 = (function (){var statearr_23552 = state_23497;
(statearr_23552[(13)] = inst_23379);

(statearr_23552[(15)] = inst_23381);

(statearr_23552[(16)] = inst_23380);

(statearr_23552[(17)] = inst_23378);

return statearr_23552;
})();
var statearr_23553_23620 = state_23497__$1;
(statearr_23553_23620[(2)] = null);

(statearr_23553_23620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (11))){
var inst_23378 = (state_23497[(17)]);
var inst_23398 = (state_23497[(7)]);
var inst_23398__$1 = cljs.core.seq.call(null,inst_23378);
var state_23497__$1 = (function (){var statearr_23554 = state_23497;
(statearr_23554[(7)] = inst_23398__$1);

return statearr_23554;
})();
if(inst_23398__$1){
var statearr_23555_23621 = state_23497__$1;
(statearr_23555_23621[(1)] = (16));

} else {
var statearr_23556_23622 = state_23497__$1;
(statearr_23556_23622[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (9))){
var inst_23426 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23557_23623 = state_23497__$1;
(statearr_23557_23623[(2)] = inst_23426);

(statearr_23557_23623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (5))){
var inst_23376 = cljs.core.deref.call(null,cs);
var inst_23377 = cljs.core.seq.call(null,inst_23376);
var inst_23378 = inst_23377;
var inst_23379 = null;
var inst_23380 = (0);
var inst_23381 = (0);
var state_23497__$1 = (function (){var statearr_23558 = state_23497;
(statearr_23558[(13)] = inst_23379);

(statearr_23558[(15)] = inst_23381);

(statearr_23558[(16)] = inst_23380);

(statearr_23558[(17)] = inst_23378);

return statearr_23558;
})();
var statearr_23559_23624 = state_23497__$1;
(statearr_23559_23624[(2)] = null);

(statearr_23559_23624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (14))){
var state_23497__$1 = state_23497;
var statearr_23560_23625 = state_23497__$1;
(statearr_23560_23625[(2)] = null);

(statearr_23560_23625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (45))){
var inst_23487 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23561_23626 = state_23497__$1;
(statearr_23561_23626[(2)] = inst_23487);

(statearr_23561_23626[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (26))){
var inst_23429 = (state_23497[(29)]);
var inst_23483 = (state_23497[(2)]);
var inst_23484 = cljs.core.seq.call(null,inst_23429);
var state_23497__$1 = (function (){var statearr_23562 = state_23497;
(statearr_23562[(31)] = inst_23483);

return statearr_23562;
})();
if(inst_23484){
var statearr_23563_23627 = state_23497__$1;
(statearr_23563_23627[(1)] = (42));

} else {
var statearr_23564_23628 = state_23497__$1;
(statearr_23564_23628[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (16))){
var inst_23398 = (state_23497[(7)]);
var inst_23400 = cljs.core.chunked_seq_QMARK_.call(null,inst_23398);
var state_23497__$1 = state_23497;
if(inst_23400){
var statearr_23565_23629 = state_23497__$1;
(statearr_23565_23629[(1)] = (19));

} else {
var statearr_23566_23630 = state_23497__$1;
(statearr_23566_23630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (38))){
var inst_23476 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23567_23631 = state_23497__$1;
(statearr_23567_23631[(2)] = inst_23476);

(statearr_23567_23631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (30))){
var state_23497__$1 = state_23497;
var statearr_23568_23632 = state_23497__$1;
(statearr_23568_23632[(2)] = null);

(statearr_23568_23632[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (10))){
var inst_23379 = (state_23497[(13)]);
var inst_23381 = (state_23497[(15)]);
var inst_23387 = cljs.core._nth.call(null,inst_23379,inst_23381);
var inst_23388 = cljs.core.nth.call(null,inst_23387,(0),null);
var inst_23389 = cljs.core.nth.call(null,inst_23387,(1),null);
var state_23497__$1 = (function (){var statearr_23569 = state_23497;
(statearr_23569[(26)] = inst_23388);

return statearr_23569;
})();
if(cljs.core.truth_(inst_23389)){
var statearr_23570_23633 = state_23497__$1;
(statearr_23570_23633[(1)] = (13));

} else {
var statearr_23571_23634 = state_23497__$1;
(statearr_23571_23634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (18))){
var inst_23422 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
var statearr_23572_23635 = state_23497__$1;
(statearr_23572_23635[(2)] = inst_23422);

(statearr_23572_23635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (42))){
var state_23497__$1 = state_23497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23497__$1,(45),dchan);
} else {
if((state_val_23498 === (37))){
var inst_23369 = (state_23497[(10)]);
var inst_23456 = (state_23497[(25)]);
var inst_23465 = (state_23497[(23)]);
var inst_23465__$1 = cljs.core.first.call(null,inst_23456);
var inst_23466 = cljs.core.async.put_BANG_.call(null,inst_23465__$1,inst_23369,done);
var state_23497__$1 = (function (){var statearr_23573 = state_23497;
(statearr_23573[(23)] = inst_23465__$1);

return statearr_23573;
})();
if(cljs.core.truth_(inst_23466)){
var statearr_23574_23636 = state_23497__$1;
(statearr_23574_23636[(1)] = (39));

} else {
var statearr_23575_23637 = state_23497__$1;
(statearr_23575_23637[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (8))){
var inst_23381 = (state_23497[(15)]);
var inst_23380 = (state_23497[(16)]);
var inst_23383 = (inst_23381 < inst_23380);
var inst_23384 = inst_23383;
var state_23497__$1 = state_23497;
if(cljs.core.truth_(inst_23384)){
var statearr_23576_23638 = state_23497__$1;
(statearr_23576_23638[(1)] = (10));

} else {
var statearr_23577_23639 = state_23497__$1;
(statearr_23577_23639[(1)] = (11));

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
});})(c__22278__auto___23585,cs,m,dchan,dctr,done))
;
return ((function (switch__22166__auto__,c__22278__auto___23585,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22167__auto__ = null;
var cljs$core$async$mult_$_state_machine__22167__auto____0 = (function (){
var statearr_23581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23581[(0)] = cljs$core$async$mult_$_state_machine__22167__auto__);

(statearr_23581[(1)] = (1));

return statearr_23581;
});
var cljs$core$async$mult_$_state_machine__22167__auto____1 = (function (state_23497){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_23497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e23582){if((e23582 instanceof Object)){
var ex__22170__auto__ = e23582;
var statearr_23583_23640 = state_23497;
(statearr_23583_23640[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23641 = state_23497;
state_23497 = G__23641;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22167__auto__ = function(state_23497){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22167__auto____1.call(this,state_23497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22167__auto____0;
cljs$core$async$mult_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22167__auto____1;
return cljs$core$async$mult_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___23585,cs,m,dchan,dctr,done))
})();
var state__22280__auto__ = (function (){var statearr_23584 = f__22279__auto__.call(null);
(statearr_23584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___23585);

return statearr_23584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___23585,cs,m,dchan,dctr,done))
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
var args23642 = [];
var len__19538__auto___23645 = arguments.length;
var i__19539__auto___23646 = (0);
while(true){
if((i__19539__auto___23646 < len__19538__auto___23645)){
args23642.push((arguments[i__19539__auto___23646]));

var G__23647 = (i__19539__auto___23646 + (1));
i__19539__auto___23646 = G__23647;
continue;
} else {
}
break;
}

var G__23644 = args23642.length;
switch (G__23644) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23642.length)].join('')));

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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch);
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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch);
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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m);
} else {
var m__19132__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m);
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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,state_map);
} else {
var m__19132__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,state_map);
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
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,mode);
} else {
var m__19132__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19545__auto__ = [];
var len__19538__auto___23659 = arguments.length;
var i__19539__auto___23660 = (0);
while(true){
if((i__19539__auto___23660 < len__19538__auto___23659)){
args__19545__auto__.push((arguments[i__19539__auto___23660]));

var G__23661 = (i__19539__auto___23660 + (1));
i__19539__auto___23660 = G__23661;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((3) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19546__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23653){
var map__23654 = p__23653;
var map__23654__$1 = ((((!((map__23654 == null)))?((((map__23654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23654):map__23654);
var opts = map__23654__$1;
var statearr_23656_23662 = state;
(statearr_23656_23662[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23654,map__23654__$1,opts){
return (function (val){
var statearr_23657_23663 = state;
(statearr_23657_23663[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23654,map__23654__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23658_23664 = state;
(statearr_23658_23664[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23649){
var G__23650 = cljs.core.first.call(null,seq23649);
var seq23649__$1 = cljs.core.next.call(null,seq23649);
var G__23651 = cljs.core.first.call(null,seq23649__$1);
var seq23649__$2 = cljs.core.next.call(null,seq23649__$1);
var G__23652 = cljs.core.first.call(null,seq23649__$2);
var seq23649__$3 = cljs.core.next.call(null,seq23649__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23650,G__23651,G__23652,seq23649__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23828 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23829){
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
this.meta23829 = meta23829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23830,meta23829__$1){
var self__ = this;
var _23830__$1 = this;
return (new cljs.core.async.t_cljs$core$async23828(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23830){
var self__ = this;
var _23830__$1 = this;
return self__.meta23829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23828.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23829","meta23829",984151816,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23828";

cljs.core.async.t_cljs$core$async23828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23829){
return (new cljs.core.async.t_cljs$core$async23828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23828(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22278__auto___23991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___23991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___23991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23928){
var state_val_23929 = (state_23928[(1)]);
if((state_val_23929 === (7))){
var inst_23846 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23930_23992 = state_23928__$1;
(statearr_23930_23992[(2)] = inst_23846);

(statearr_23930_23992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (20))){
var inst_23858 = (state_23928[(7)]);
var state_23928__$1 = state_23928;
var statearr_23931_23993 = state_23928__$1;
(statearr_23931_23993[(2)] = inst_23858);

(statearr_23931_23993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (27))){
var state_23928__$1 = state_23928;
var statearr_23932_23994 = state_23928__$1;
(statearr_23932_23994[(2)] = null);

(statearr_23932_23994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (1))){
var inst_23834 = (state_23928[(8)]);
var inst_23834__$1 = calc_state.call(null);
var inst_23836 = (inst_23834__$1 == null);
var inst_23837 = cljs.core.not.call(null,inst_23836);
var state_23928__$1 = (function (){var statearr_23933 = state_23928;
(statearr_23933[(8)] = inst_23834__$1);

return statearr_23933;
})();
if(inst_23837){
var statearr_23934_23995 = state_23928__$1;
(statearr_23934_23995[(1)] = (2));

} else {
var statearr_23935_23996 = state_23928__$1;
(statearr_23935_23996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (24))){
var inst_23888 = (state_23928[(9)]);
var inst_23881 = (state_23928[(10)]);
var inst_23902 = (state_23928[(11)]);
var inst_23902__$1 = inst_23881.call(null,inst_23888);
var state_23928__$1 = (function (){var statearr_23936 = state_23928;
(statearr_23936[(11)] = inst_23902__$1);

return statearr_23936;
})();
if(cljs.core.truth_(inst_23902__$1)){
var statearr_23937_23997 = state_23928__$1;
(statearr_23937_23997[(1)] = (29));

} else {
var statearr_23938_23998 = state_23928__$1;
(statearr_23938_23998[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (4))){
var inst_23849 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23849)){
var statearr_23939_23999 = state_23928__$1;
(statearr_23939_23999[(1)] = (8));

} else {
var statearr_23940_24000 = state_23928__$1;
(statearr_23940_24000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (15))){
var inst_23875 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23875)){
var statearr_23941_24001 = state_23928__$1;
(statearr_23941_24001[(1)] = (19));

} else {
var statearr_23942_24002 = state_23928__$1;
(statearr_23942_24002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (21))){
var inst_23880 = (state_23928[(12)]);
var inst_23880__$1 = (state_23928[(2)]);
var inst_23881 = cljs.core.get.call(null,inst_23880__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23882 = cljs.core.get.call(null,inst_23880__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23883 = cljs.core.get.call(null,inst_23880__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23928__$1 = (function (){var statearr_23943 = state_23928;
(statearr_23943[(12)] = inst_23880__$1);

(statearr_23943[(10)] = inst_23881);

(statearr_23943[(13)] = inst_23882);

return statearr_23943;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23928__$1,(22),inst_23883);
} else {
if((state_val_23929 === (31))){
var inst_23910 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23910)){
var statearr_23944_24003 = state_23928__$1;
(statearr_23944_24003[(1)] = (32));

} else {
var statearr_23945_24004 = state_23928__$1;
(statearr_23945_24004[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (32))){
var inst_23887 = (state_23928[(14)]);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23928__$1,(35),out,inst_23887);
} else {
if((state_val_23929 === (33))){
var inst_23880 = (state_23928[(12)]);
var inst_23858 = inst_23880;
var state_23928__$1 = (function (){var statearr_23946 = state_23928;
(statearr_23946[(7)] = inst_23858);

return statearr_23946;
})();
var statearr_23947_24005 = state_23928__$1;
(statearr_23947_24005[(2)] = null);

(statearr_23947_24005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (13))){
var inst_23858 = (state_23928[(7)]);
var inst_23865 = inst_23858.cljs$lang$protocol_mask$partition0$;
var inst_23866 = (inst_23865 & (64));
var inst_23867 = inst_23858.cljs$core$ISeq$;
var inst_23868 = (inst_23866) || (inst_23867);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23868)){
var statearr_23948_24006 = state_23928__$1;
(statearr_23948_24006[(1)] = (16));

} else {
var statearr_23949_24007 = state_23928__$1;
(statearr_23949_24007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (22))){
var inst_23887 = (state_23928[(14)]);
var inst_23888 = (state_23928[(9)]);
var inst_23886 = (state_23928[(2)]);
var inst_23887__$1 = cljs.core.nth.call(null,inst_23886,(0),null);
var inst_23888__$1 = cljs.core.nth.call(null,inst_23886,(1),null);
var inst_23889 = (inst_23887__$1 == null);
var inst_23890 = cljs.core._EQ_.call(null,inst_23888__$1,change);
var inst_23891 = (inst_23889) || (inst_23890);
var state_23928__$1 = (function (){var statearr_23950 = state_23928;
(statearr_23950[(14)] = inst_23887__$1);

(statearr_23950[(9)] = inst_23888__$1);

return statearr_23950;
})();
if(cljs.core.truth_(inst_23891)){
var statearr_23951_24008 = state_23928__$1;
(statearr_23951_24008[(1)] = (23));

} else {
var statearr_23952_24009 = state_23928__$1;
(statearr_23952_24009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (36))){
var inst_23880 = (state_23928[(12)]);
var inst_23858 = inst_23880;
var state_23928__$1 = (function (){var statearr_23953 = state_23928;
(statearr_23953[(7)] = inst_23858);

return statearr_23953;
})();
var statearr_23954_24010 = state_23928__$1;
(statearr_23954_24010[(2)] = null);

(statearr_23954_24010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (29))){
var inst_23902 = (state_23928[(11)]);
var state_23928__$1 = state_23928;
var statearr_23955_24011 = state_23928__$1;
(statearr_23955_24011[(2)] = inst_23902);

(statearr_23955_24011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (6))){
var state_23928__$1 = state_23928;
var statearr_23956_24012 = state_23928__$1;
(statearr_23956_24012[(2)] = false);

(statearr_23956_24012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (28))){
var inst_23898 = (state_23928[(2)]);
var inst_23899 = calc_state.call(null);
var inst_23858 = inst_23899;
var state_23928__$1 = (function (){var statearr_23957 = state_23928;
(statearr_23957[(7)] = inst_23858);

(statearr_23957[(15)] = inst_23898);

return statearr_23957;
})();
var statearr_23958_24013 = state_23928__$1;
(statearr_23958_24013[(2)] = null);

(statearr_23958_24013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (25))){
var inst_23924 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23959_24014 = state_23928__$1;
(statearr_23959_24014[(2)] = inst_23924);

(statearr_23959_24014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (34))){
var inst_23922 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23960_24015 = state_23928__$1;
(statearr_23960_24015[(2)] = inst_23922);

(statearr_23960_24015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (17))){
var state_23928__$1 = state_23928;
var statearr_23961_24016 = state_23928__$1;
(statearr_23961_24016[(2)] = false);

(statearr_23961_24016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (3))){
var state_23928__$1 = state_23928;
var statearr_23962_24017 = state_23928__$1;
(statearr_23962_24017[(2)] = false);

(statearr_23962_24017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (12))){
var inst_23926 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23928__$1,inst_23926);
} else {
if((state_val_23929 === (2))){
var inst_23834 = (state_23928[(8)]);
var inst_23839 = inst_23834.cljs$lang$protocol_mask$partition0$;
var inst_23840 = (inst_23839 & (64));
var inst_23841 = inst_23834.cljs$core$ISeq$;
var inst_23842 = (inst_23840) || (inst_23841);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23842)){
var statearr_23963_24018 = state_23928__$1;
(statearr_23963_24018[(1)] = (5));

} else {
var statearr_23964_24019 = state_23928__$1;
(statearr_23964_24019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (23))){
var inst_23887 = (state_23928[(14)]);
var inst_23893 = (inst_23887 == null);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23893)){
var statearr_23965_24020 = state_23928__$1;
(statearr_23965_24020[(1)] = (26));

} else {
var statearr_23966_24021 = state_23928__$1;
(statearr_23966_24021[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (35))){
var inst_23913 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23913)){
var statearr_23967_24022 = state_23928__$1;
(statearr_23967_24022[(1)] = (36));

} else {
var statearr_23968_24023 = state_23928__$1;
(statearr_23968_24023[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (19))){
var inst_23858 = (state_23928[(7)]);
var inst_23877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23858);
var state_23928__$1 = state_23928;
var statearr_23969_24024 = state_23928__$1;
(statearr_23969_24024[(2)] = inst_23877);

(statearr_23969_24024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (11))){
var inst_23858 = (state_23928[(7)]);
var inst_23862 = (inst_23858 == null);
var inst_23863 = cljs.core.not.call(null,inst_23862);
var state_23928__$1 = state_23928;
if(inst_23863){
var statearr_23970_24025 = state_23928__$1;
(statearr_23970_24025[(1)] = (13));

} else {
var statearr_23971_24026 = state_23928__$1;
(statearr_23971_24026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (9))){
var inst_23834 = (state_23928[(8)]);
var state_23928__$1 = state_23928;
var statearr_23972_24027 = state_23928__$1;
(statearr_23972_24027[(2)] = inst_23834);

(statearr_23972_24027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (5))){
var state_23928__$1 = state_23928;
var statearr_23973_24028 = state_23928__$1;
(statearr_23973_24028[(2)] = true);

(statearr_23973_24028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (14))){
var state_23928__$1 = state_23928;
var statearr_23974_24029 = state_23928__$1;
(statearr_23974_24029[(2)] = false);

(statearr_23974_24029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (26))){
var inst_23888 = (state_23928[(9)]);
var inst_23895 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23888);
var state_23928__$1 = state_23928;
var statearr_23975_24030 = state_23928__$1;
(statearr_23975_24030[(2)] = inst_23895);

(statearr_23975_24030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (16))){
var state_23928__$1 = state_23928;
var statearr_23976_24031 = state_23928__$1;
(statearr_23976_24031[(2)] = true);

(statearr_23976_24031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (38))){
var inst_23918 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23977_24032 = state_23928__$1;
(statearr_23977_24032[(2)] = inst_23918);

(statearr_23977_24032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (30))){
var inst_23888 = (state_23928[(9)]);
var inst_23881 = (state_23928[(10)]);
var inst_23882 = (state_23928[(13)]);
var inst_23905 = cljs.core.empty_QMARK_.call(null,inst_23881);
var inst_23906 = inst_23882.call(null,inst_23888);
var inst_23907 = cljs.core.not.call(null,inst_23906);
var inst_23908 = (inst_23905) && (inst_23907);
var state_23928__$1 = state_23928;
var statearr_23978_24033 = state_23928__$1;
(statearr_23978_24033[(2)] = inst_23908);

(statearr_23978_24033[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (10))){
var inst_23834 = (state_23928[(8)]);
var inst_23854 = (state_23928[(2)]);
var inst_23855 = cljs.core.get.call(null,inst_23854,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23856 = cljs.core.get.call(null,inst_23854,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23857 = cljs.core.get.call(null,inst_23854,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23858 = inst_23834;
var state_23928__$1 = (function (){var statearr_23979 = state_23928;
(statearr_23979[(7)] = inst_23858);

(statearr_23979[(16)] = inst_23856);

(statearr_23979[(17)] = inst_23857);

(statearr_23979[(18)] = inst_23855);

return statearr_23979;
})();
var statearr_23980_24034 = state_23928__$1;
(statearr_23980_24034[(2)] = null);

(statearr_23980_24034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (18))){
var inst_23872 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23981_24035 = state_23928__$1;
(statearr_23981_24035[(2)] = inst_23872);

(statearr_23981_24035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (37))){
var state_23928__$1 = state_23928;
var statearr_23982_24036 = state_23928__$1;
(statearr_23982_24036[(2)] = null);

(statearr_23982_24036[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (8))){
var inst_23834 = (state_23928[(8)]);
var inst_23851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23834);
var state_23928__$1 = state_23928;
var statearr_23983_24037 = state_23928__$1;
(statearr_23983_24037[(2)] = inst_23851);

(statearr_23983_24037[(1)] = (10));


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
});})(c__22278__auto___23991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22166__auto__,c__22278__auto___23991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22167__auto__ = null;
var cljs$core$async$mix_$_state_machine__22167__auto____0 = (function (){
var statearr_23987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23987[(0)] = cljs$core$async$mix_$_state_machine__22167__auto__);

(statearr_23987[(1)] = (1));

return statearr_23987;
});
var cljs$core$async$mix_$_state_machine__22167__auto____1 = (function (state_23928){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_23928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e23988){if((e23988 instanceof Object)){
var ex__22170__auto__ = e23988;
var statearr_23989_24038 = state_23928;
(statearr_23989_24038[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24039 = state_23928;
state_23928 = G__24039;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22167__auto__ = function(state_23928){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22167__auto____1.call(this,state_23928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22167__auto____0;
cljs$core$async$mix_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22167__auto____1;
return cljs$core$async$mix_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___23991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22280__auto__ = (function (){var statearr_23990 = f__22279__auto__.call(null);
(statearr_23990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___23991);

return statearr_23990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___23991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19132__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p,v,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24040 = [];
var len__19538__auto___24043 = arguments.length;
var i__19539__auto___24044 = (0);
while(true){
if((i__19539__auto___24044 < len__19538__auto___24043)){
args24040.push((arguments[i__19539__auto___24044]));

var G__24045 = (i__19539__auto___24044 + (1));
i__19539__auto___24044 = G__24045;
continue;
} else {
}
break;
}

var G__24042 = args24040.length;
switch (G__24042) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24040.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p);
} else {
var m__19132__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p);
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
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p,v);
} else {
var m__19132__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p,v);
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
var args24048 = [];
var len__19538__auto___24173 = arguments.length;
var i__19539__auto___24174 = (0);
while(true){
if((i__19539__auto___24174 < len__19538__auto___24173)){
args24048.push((arguments[i__19539__auto___24174]));

var G__24175 = (i__19539__auto___24174 + (1));
i__19539__auto___24174 = G__24175;
continue;
} else {
}
break;
}

var G__24050 = args24048.length;
switch (G__24050) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24048.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18468__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18468__auto__,mults){
return (function (p1__24047_SHARP_){
if(cljs.core.truth_(p1__24047_SHARP_.call(null,topic))){
return p1__24047_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24047_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18468__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24051 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24052){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24052 = meta24052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24053,meta24052__$1){
var self__ = this;
var _24053__$1 = this;
return (new cljs.core.async.t_cljs$core$async24051(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24052__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24053){
var self__ = this;
var _24053__$1 = this;
return self__.meta24052;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24052","meta24052",878447799,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24051";

cljs.core.async.t_cljs$core$async24051.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24051");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24051 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24052){
return (new cljs.core.async.t_cljs$core$async24051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24052));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24051(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22278__auto___24177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___24177,mults,ensure_mult,p){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___24177,mults,ensure_mult,p){
return (function (state_24125){
var state_val_24126 = (state_24125[(1)]);
if((state_val_24126 === (7))){
var inst_24121 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24127_24178 = state_24125__$1;
(statearr_24127_24178[(2)] = inst_24121);

(statearr_24127_24178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (20))){
var state_24125__$1 = state_24125;
var statearr_24128_24179 = state_24125__$1;
(statearr_24128_24179[(2)] = null);

(statearr_24128_24179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (1))){
var state_24125__$1 = state_24125;
var statearr_24129_24180 = state_24125__$1;
(statearr_24129_24180[(2)] = null);

(statearr_24129_24180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (24))){
var inst_24104 = (state_24125[(7)]);
var inst_24113 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24104);
var state_24125__$1 = state_24125;
var statearr_24130_24181 = state_24125__$1;
(statearr_24130_24181[(2)] = inst_24113);

(statearr_24130_24181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (4))){
var inst_24056 = (state_24125[(8)]);
var inst_24056__$1 = (state_24125[(2)]);
var inst_24057 = (inst_24056__$1 == null);
var state_24125__$1 = (function (){var statearr_24131 = state_24125;
(statearr_24131[(8)] = inst_24056__$1);

return statearr_24131;
})();
if(cljs.core.truth_(inst_24057)){
var statearr_24132_24182 = state_24125__$1;
(statearr_24132_24182[(1)] = (5));

} else {
var statearr_24133_24183 = state_24125__$1;
(statearr_24133_24183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (15))){
var inst_24098 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24134_24184 = state_24125__$1;
(statearr_24134_24184[(2)] = inst_24098);

(statearr_24134_24184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (21))){
var inst_24118 = (state_24125[(2)]);
var state_24125__$1 = (function (){var statearr_24135 = state_24125;
(statearr_24135[(9)] = inst_24118);

return statearr_24135;
})();
var statearr_24136_24185 = state_24125__$1;
(statearr_24136_24185[(2)] = null);

(statearr_24136_24185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (13))){
var inst_24080 = (state_24125[(10)]);
var inst_24082 = cljs.core.chunked_seq_QMARK_.call(null,inst_24080);
var state_24125__$1 = state_24125;
if(inst_24082){
var statearr_24137_24186 = state_24125__$1;
(statearr_24137_24186[(1)] = (16));

} else {
var statearr_24138_24187 = state_24125__$1;
(statearr_24138_24187[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (22))){
var inst_24110 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
if(cljs.core.truth_(inst_24110)){
var statearr_24139_24188 = state_24125__$1;
(statearr_24139_24188[(1)] = (23));

} else {
var statearr_24140_24189 = state_24125__$1;
(statearr_24140_24189[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (6))){
var inst_24056 = (state_24125[(8)]);
var inst_24106 = (state_24125[(11)]);
var inst_24104 = (state_24125[(7)]);
var inst_24104__$1 = topic_fn.call(null,inst_24056);
var inst_24105 = cljs.core.deref.call(null,mults);
var inst_24106__$1 = cljs.core.get.call(null,inst_24105,inst_24104__$1);
var state_24125__$1 = (function (){var statearr_24141 = state_24125;
(statearr_24141[(11)] = inst_24106__$1);

(statearr_24141[(7)] = inst_24104__$1);

return statearr_24141;
})();
if(cljs.core.truth_(inst_24106__$1)){
var statearr_24142_24190 = state_24125__$1;
(statearr_24142_24190[(1)] = (19));

} else {
var statearr_24143_24191 = state_24125__$1;
(statearr_24143_24191[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (25))){
var inst_24115 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24144_24192 = state_24125__$1;
(statearr_24144_24192[(2)] = inst_24115);

(statearr_24144_24192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (17))){
var inst_24080 = (state_24125[(10)]);
var inst_24089 = cljs.core.first.call(null,inst_24080);
var inst_24090 = cljs.core.async.muxch_STAR_.call(null,inst_24089);
var inst_24091 = cljs.core.async.close_BANG_.call(null,inst_24090);
var inst_24092 = cljs.core.next.call(null,inst_24080);
var inst_24066 = inst_24092;
var inst_24067 = null;
var inst_24068 = (0);
var inst_24069 = (0);
var state_24125__$1 = (function (){var statearr_24145 = state_24125;
(statearr_24145[(12)] = inst_24068);

(statearr_24145[(13)] = inst_24069);

(statearr_24145[(14)] = inst_24091);

(statearr_24145[(15)] = inst_24066);

(statearr_24145[(16)] = inst_24067);

return statearr_24145;
})();
var statearr_24146_24193 = state_24125__$1;
(statearr_24146_24193[(2)] = null);

(statearr_24146_24193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (3))){
var inst_24123 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24125__$1,inst_24123);
} else {
if((state_val_24126 === (12))){
var inst_24100 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24147_24194 = state_24125__$1;
(statearr_24147_24194[(2)] = inst_24100);

(statearr_24147_24194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (2))){
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24125__$1,(4),ch);
} else {
if((state_val_24126 === (23))){
var state_24125__$1 = state_24125;
var statearr_24148_24195 = state_24125__$1;
(statearr_24148_24195[(2)] = null);

(statearr_24148_24195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (19))){
var inst_24056 = (state_24125[(8)]);
var inst_24106 = (state_24125[(11)]);
var inst_24108 = cljs.core.async.muxch_STAR_.call(null,inst_24106);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24125__$1,(22),inst_24108,inst_24056);
} else {
if((state_val_24126 === (11))){
var inst_24080 = (state_24125[(10)]);
var inst_24066 = (state_24125[(15)]);
var inst_24080__$1 = cljs.core.seq.call(null,inst_24066);
var state_24125__$1 = (function (){var statearr_24149 = state_24125;
(statearr_24149[(10)] = inst_24080__$1);

return statearr_24149;
})();
if(inst_24080__$1){
var statearr_24150_24196 = state_24125__$1;
(statearr_24150_24196[(1)] = (13));

} else {
var statearr_24151_24197 = state_24125__$1;
(statearr_24151_24197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (9))){
var inst_24102 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24152_24198 = state_24125__$1;
(statearr_24152_24198[(2)] = inst_24102);

(statearr_24152_24198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (5))){
var inst_24063 = cljs.core.deref.call(null,mults);
var inst_24064 = cljs.core.vals.call(null,inst_24063);
var inst_24065 = cljs.core.seq.call(null,inst_24064);
var inst_24066 = inst_24065;
var inst_24067 = null;
var inst_24068 = (0);
var inst_24069 = (0);
var state_24125__$1 = (function (){var statearr_24153 = state_24125;
(statearr_24153[(12)] = inst_24068);

(statearr_24153[(13)] = inst_24069);

(statearr_24153[(15)] = inst_24066);

(statearr_24153[(16)] = inst_24067);

return statearr_24153;
})();
var statearr_24154_24199 = state_24125__$1;
(statearr_24154_24199[(2)] = null);

(statearr_24154_24199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (14))){
var state_24125__$1 = state_24125;
var statearr_24158_24200 = state_24125__$1;
(statearr_24158_24200[(2)] = null);

(statearr_24158_24200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (16))){
var inst_24080 = (state_24125[(10)]);
var inst_24084 = cljs.core.chunk_first.call(null,inst_24080);
var inst_24085 = cljs.core.chunk_rest.call(null,inst_24080);
var inst_24086 = cljs.core.count.call(null,inst_24084);
var inst_24066 = inst_24085;
var inst_24067 = inst_24084;
var inst_24068 = inst_24086;
var inst_24069 = (0);
var state_24125__$1 = (function (){var statearr_24159 = state_24125;
(statearr_24159[(12)] = inst_24068);

(statearr_24159[(13)] = inst_24069);

(statearr_24159[(15)] = inst_24066);

(statearr_24159[(16)] = inst_24067);

return statearr_24159;
})();
var statearr_24160_24201 = state_24125__$1;
(statearr_24160_24201[(2)] = null);

(statearr_24160_24201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (10))){
var inst_24068 = (state_24125[(12)]);
var inst_24069 = (state_24125[(13)]);
var inst_24066 = (state_24125[(15)]);
var inst_24067 = (state_24125[(16)]);
var inst_24074 = cljs.core._nth.call(null,inst_24067,inst_24069);
var inst_24075 = cljs.core.async.muxch_STAR_.call(null,inst_24074);
var inst_24076 = cljs.core.async.close_BANG_.call(null,inst_24075);
var inst_24077 = (inst_24069 + (1));
var tmp24155 = inst_24068;
var tmp24156 = inst_24066;
var tmp24157 = inst_24067;
var inst_24066__$1 = tmp24156;
var inst_24067__$1 = tmp24157;
var inst_24068__$1 = tmp24155;
var inst_24069__$1 = inst_24077;
var state_24125__$1 = (function (){var statearr_24161 = state_24125;
(statearr_24161[(17)] = inst_24076);

(statearr_24161[(12)] = inst_24068__$1);

(statearr_24161[(13)] = inst_24069__$1);

(statearr_24161[(15)] = inst_24066__$1);

(statearr_24161[(16)] = inst_24067__$1);

return statearr_24161;
})();
var statearr_24162_24202 = state_24125__$1;
(statearr_24162_24202[(2)] = null);

(statearr_24162_24202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (18))){
var inst_24095 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24163_24203 = state_24125__$1;
(statearr_24163_24203[(2)] = inst_24095);

(statearr_24163_24203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (8))){
var inst_24068 = (state_24125[(12)]);
var inst_24069 = (state_24125[(13)]);
var inst_24071 = (inst_24069 < inst_24068);
var inst_24072 = inst_24071;
var state_24125__$1 = state_24125;
if(cljs.core.truth_(inst_24072)){
var statearr_24164_24204 = state_24125__$1;
(statearr_24164_24204[(1)] = (10));

} else {
var statearr_24165_24205 = state_24125__$1;
(statearr_24165_24205[(1)] = (11));

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
});})(c__22278__auto___24177,mults,ensure_mult,p))
;
return ((function (switch__22166__auto__,c__22278__auto___24177,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_24169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24169[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_24169[(1)] = (1));

return statearr_24169;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24125){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24170){if((e24170 instanceof Object)){
var ex__22170__auto__ = e24170;
var statearr_24171_24206 = state_24125;
(statearr_24171_24206[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24207 = state_24125;
state_24125 = G__24207;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___24177,mults,ensure_mult,p))
})();
var state__22280__auto__ = (function (){var statearr_24172 = f__22279__auto__.call(null);
(statearr_24172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___24177);

return statearr_24172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___24177,mults,ensure_mult,p))
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
var args24208 = [];
var len__19538__auto___24211 = arguments.length;
var i__19539__auto___24212 = (0);
while(true){
if((i__19539__auto___24212 < len__19538__auto___24211)){
args24208.push((arguments[i__19539__auto___24212]));

var G__24213 = (i__19539__auto___24212 + (1));
i__19539__auto___24212 = G__24213;
continue;
} else {
}
break;
}

var G__24210 = args24208.length;
switch (G__24210) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24208.length)].join('')));

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
var args24215 = [];
var len__19538__auto___24218 = arguments.length;
var i__19539__auto___24219 = (0);
while(true){
if((i__19539__auto___24219 < len__19538__auto___24218)){
args24215.push((arguments[i__19539__auto___24219]));

var G__24220 = (i__19539__auto___24219 + (1));
i__19539__auto___24219 = G__24220;
continue;
} else {
}
break;
}

var G__24217 = args24215.length;
switch (G__24217) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24215.length)].join('')));

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
var args24222 = [];
var len__19538__auto___24293 = arguments.length;
var i__19539__auto___24294 = (0);
while(true){
if((i__19539__auto___24294 < len__19538__auto___24293)){
args24222.push((arguments[i__19539__auto___24294]));

var G__24295 = (i__19539__auto___24294 + (1));
i__19539__auto___24294 = G__24295;
continue;
} else {
}
break;
}

var G__24224 = args24222.length;
switch (G__24224) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24222.length)].join('')));

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
var c__22278__auto___24297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___24297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___24297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24263){
var state_val_24264 = (state_24263[(1)]);
if((state_val_24264 === (7))){
var state_24263__$1 = state_24263;
var statearr_24265_24298 = state_24263__$1;
(statearr_24265_24298[(2)] = null);

(statearr_24265_24298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (1))){
var state_24263__$1 = state_24263;
var statearr_24266_24299 = state_24263__$1;
(statearr_24266_24299[(2)] = null);

(statearr_24266_24299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (4))){
var inst_24227 = (state_24263[(7)]);
var inst_24229 = (inst_24227 < cnt);
var state_24263__$1 = state_24263;
if(cljs.core.truth_(inst_24229)){
var statearr_24267_24300 = state_24263__$1;
(statearr_24267_24300[(1)] = (6));

} else {
var statearr_24268_24301 = state_24263__$1;
(statearr_24268_24301[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (15))){
var inst_24259 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24269_24302 = state_24263__$1;
(statearr_24269_24302[(2)] = inst_24259);

(statearr_24269_24302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (13))){
var inst_24252 = cljs.core.async.close_BANG_.call(null,out);
var state_24263__$1 = state_24263;
var statearr_24270_24303 = state_24263__$1;
(statearr_24270_24303[(2)] = inst_24252);

(statearr_24270_24303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (6))){
var state_24263__$1 = state_24263;
var statearr_24271_24304 = state_24263__$1;
(statearr_24271_24304[(2)] = null);

(statearr_24271_24304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (3))){
var inst_24261 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24263__$1,inst_24261);
} else {
if((state_val_24264 === (12))){
var inst_24249 = (state_24263[(8)]);
var inst_24249__$1 = (state_24263[(2)]);
var inst_24250 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24249__$1);
var state_24263__$1 = (function (){var statearr_24272 = state_24263;
(statearr_24272[(8)] = inst_24249__$1);

return statearr_24272;
})();
if(cljs.core.truth_(inst_24250)){
var statearr_24273_24305 = state_24263__$1;
(statearr_24273_24305[(1)] = (13));

} else {
var statearr_24274_24306 = state_24263__$1;
(statearr_24274_24306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (2))){
var inst_24226 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24227 = (0);
var state_24263__$1 = (function (){var statearr_24275 = state_24263;
(statearr_24275[(9)] = inst_24226);

(statearr_24275[(7)] = inst_24227);

return statearr_24275;
})();
var statearr_24276_24307 = state_24263__$1;
(statearr_24276_24307[(2)] = null);

(statearr_24276_24307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (11))){
var inst_24227 = (state_24263[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24263,(10),Object,null,(9));
var inst_24236 = chs__$1.call(null,inst_24227);
var inst_24237 = done.call(null,inst_24227);
var inst_24238 = cljs.core.async.take_BANG_.call(null,inst_24236,inst_24237);
var state_24263__$1 = state_24263;
var statearr_24277_24308 = state_24263__$1;
(statearr_24277_24308[(2)] = inst_24238);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (9))){
var inst_24227 = (state_24263[(7)]);
var inst_24240 = (state_24263[(2)]);
var inst_24241 = (inst_24227 + (1));
var inst_24227__$1 = inst_24241;
var state_24263__$1 = (function (){var statearr_24278 = state_24263;
(statearr_24278[(10)] = inst_24240);

(statearr_24278[(7)] = inst_24227__$1);

return statearr_24278;
})();
var statearr_24279_24309 = state_24263__$1;
(statearr_24279_24309[(2)] = null);

(statearr_24279_24309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (5))){
var inst_24247 = (state_24263[(2)]);
var state_24263__$1 = (function (){var statearr_24280 = state_24263;
(statearr_24280[(11)] = inst_24247);

return statearr_24280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24263__$1,(12),dchan);
} else {
if((state_val_24264 === (14))){
var inst_24249 = (state_24263[(8)]);
var inst_24254 = cljs.core.apply.call(null,f,inst_24249);
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24263__$1,(16),out,inst_24254);
} else {
if((state_val_24264 === (16))){
var inst_24256 = (state_24263[(2)]);
var state_24263__$1 = (function (){var statearr_24281 = state_24263;
(statearr_24281[(12)] = inst_24256);

return statearr_24281;
})();
var statearr_24282_24310 = state_24263__$1;
(statearr_24282_24310[(2)] = null);

(statearr_24282_24310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (10))){
var inst_24231 = (state_24263[(2)]);
var inst_24232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24263__$1 = (function (){var statearr_24283 = state_24263;
(statearr_24283[(13)] = inst_24231);

return statearr_24283;
})();
var statearr_24284_24311 = state_24263__$1;
(statearr_24284_24311[(2)] = inst_24232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (8))){
var inst_24245 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24285_24312 = state_24263__$1;
(statearr_24285_24312[(2)] = inst_24245);

(statearr_24285_24312[(1)] = (5));


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
});})(c__22278__auto___24297,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22166__auto__,c__22278__auto___24297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_24289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24289[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_24289[(1)] = (1));

return statearr_24289;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24263){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24290){if((e24290 instanceof Object)){
var ex__22170__auto__ = e24290;
var statearr_24291_24313 = state_24263;
(statearr_24291_24313[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24314 = state_24263;
state_24263 = G__24314;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___24297,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22280__auto__ = (function (){var statearr_24292 = f__22279__auto__.call(null);
(statearr_24292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___24297);

return statearr_24292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___24297,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24316 = [];
var len__19538__auto___24372 = arguments.length;
var i__19539__auto___24373 = (0);
while(true){
if((i__19539__auto___24373 < len__19538__auto___24372)){
args24316.push((arguments[i__19539__auto___24373]));

var G__24374 = (i__19539__auto___24373 + (1));
i__19539__auto___24373 = G__24374;
continue;
} else {
}
break;
}

var G__24318 = args24316.length;
switch (G__24318) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24316.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22278__auto___24376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___24376,out){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___24376,out){
return (function (state_24348){
var state_val_24349 = (state_24348[(1)]);
if((state_val_24349 === (7))){
var inst_24327 = (state_24348[(7)]);
var inst_24328 = (state_24348[(8)]);
var inst_24327__$1 = (state_24348[(2)]);
var inst_24328__$1 = cljs.core.nth.call(null,inst_24327__$1,(0),null);
var inst_24329 = cljs.core.nth.call(null,inst_24327__$1,(1),null);
var inst_24330 = (inst_24328__$1 == null);
var state_24348__$1 = (function (){var statearr_24350 = state_24348;
(statearr_24350[(7)] = inst_24327__$1);

(statearr_24350[(8)] = inst_24328__$1);

(statearr_24350[(9)] = inst_24329);

return statearr_24350;
})();
if(cljs.core.truth_(inst_24330)){
var statearr_24351_24377 = state_24348__$1;
(statearr_24351_24377[(1)] = (8));

} else {
var statearr_24352_24378 = state_24348__$1;
(statearr_24352_24378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24349 === (1))){
var inst_24319 = cljs.core.vec.call(null,chs);
var inst_24320 = inst_24319;
var state_24348__$1 = (function (){var statearr_24353 = state_24348;
(statearr_24353[(10)] = inst_24320);

return statearr_24353;
})();
var statearr_24354_24379 = state_24348__$1;
(statearr_24354_24379[(2)] = null);

(statearr_24354_24379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24349 === (4))){
var inst_24320 = (state_24348[(10)]);
var state_24348__$1 = state_24348;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24348__$1,(7),inst_24320);
} else {
if((state_val_24349 === (6))){
var inst_24344 = (state_24348[(2)]);
var state_24348__$1 = state_24348;
var statearr_24355_24380 = state_24348__$1;
(statearr_24355_24380[(2)] = inst_24344);

(statearr_24355_24380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24349 === (3))){
var inst_24346 = (state_24348[(2)]);
var state_24348__$1 = state_24348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24348__$1,inst_24346);
} else {
if((state_val_24349 === (2))){
var inst_24320 = (state_24348[(10)]);
var inst_24322 = cljs.core.count.call(null,inst_24320);
var inst_24323 = (inst_24322 > (0));
var state_24348__$1 = state_24348;
if(cljs.core.truth_(inst_24323)){
var statearr_24357_24381 = state_24348__$1;
(statearr_24357_24381[(1)] = (4));

} else {
var statearr_24358_24382 = state_24348__$1;
(statearr_24358_24382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24349 === (11))){
var inst_24320 = (state_24348[(10)]);
var inst_24337 = (state_24348[(2)]);
var tmp24356 = inst_24320;
var inst_24320__$1 = tmp24356;
var state_24348__$1 = (function (){var statearr_24359 = state_24348;
(statearr_24359[(10)] = inst_24320__$1);

(statearr_24359[(11)] = inst_24337);

return statearr_24359;
})();
var statearr_24360_24383 = state_24348__$1;
(statearr_24360_24383[(2)] = null);

(statearr_24360_24383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24349 === (9))){
var inst_24328 = (state_24348[(8)]);
var state_24348__$1 = state_24348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24348__$1,(11),out,inst_24328);
} else {
if((state_val_24349 === (5))){
var inst_24342 = cljs.core.async.close_BANG_.call(null,out);
var state_24348__$1 = state_24348;
var statearr_24361_24384 = state_24348__$1;
(statearr_24361_24384[(2)] = inst_24342);

(statearr_24361_24384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24349 === (10))){
var inst_24340 = (state_24348[(2)]);
var state_24348__$1 = state_24348;
var statearr_24362_24385 = state_24348__$1;
(statearr_24362_24385[(2)] = inst_24340);

(statearr_24362_24385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24349 === (8))){
var inst_24320 = (state_24348[(10)]);
var inst_24327 = (state_24348[(7)]);
var inst_24328 = (state_24348[(8)]);
var inst_24329 = (state_24348[(9)]);
var inst_24332 = (function (){var cs = inst_24320;
var vec__24325 = inst_24327;
var v = inst_24328;
var c = inst_24329;
return ((function (cs,vec__24325,v,c,inst_24320,inst_24327,inst_24328,inst_24329,state_val_24349,c__22278__auto___24376,out){
return (function (p1__24315_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24315_SHARP_);
});
;})(cs,vec__24325,v,c,inst_24320,inst_24327,inst_24328,inst_24329,state_val_24349,c__22278__auto___24376,out))
})();
var inst_24333 = cljs.core.filterv.call(null,inst_24332,inst_24320);
var inst_24320__$1 = inst_24333;
var state_24348__$1 = (function (){var statearr_24363 = state_24348;
(statearr_24363[(10)] = inst_24320__$1);

return statearr_24363;
})();
var statearr_24364_24386 = state_24348__$1;
(statearr_24364_24386[(2)] = null);

(statearr_24364_24386[(1)] = (2));


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
});})(c__22278__auto___24376,out))
;
return ((function (switch__22166__auto__,c__22278__auto___24376,out){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_24368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24368[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_24368[(1)] = (1));

return statearr_24368;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24348){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24369){if((e24369 instanceof Object)){
var ex__22170__auto__ = e24369;
var statearr_24370_24387 = state_24348;
(statearr_24370_24387[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24388 = state_24348;
state_24348 = G__24388;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___24376,out))
})();
var state__22280__auto__ = (function (){var statearr_24371 = f__22279__auto__.call(null);
(statearr_24371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___24376);

return statearr_24371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___24376,out))
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
var args24389 = [];
var len__19538__auto___24438 = arguments.length;
var i__19539__auto___24439 = (0);
while(true){
if((i__19539__auto___24439 < len__19538__auto___24438)){
args24389.push((arguments[i__19539__auto___24439]));

var G__24440 = (i__19539__auto___24439 + (1));
i__19539__auto___24439 = G__24440;
continue;
} else {
}
break;
}

var G__24391 = args24389.length;
switch (G__24391) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24389.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22278__auto___24442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___24442,out){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___24442,out){
return (function (state_24415){
var state_val_24416 = (state_24415[(1)]);
if((state_val_24416 === (7))){
var inst_24397 = (state_24415[(7)]);
var inst_24397__$1 = (state_24415[(2)]);
var inst_24398 = (inst_24397__$1 == null);
var inst_24399 = cljs.core.not.call(null,inst_24398);
var state_24415__$1 = (function (){var statearr_24417 = state_24415;
(statearr_24417[(7)] = inst_24397__$1);

return statearr_24417;
})();
if(inst_24399){
var statearr_24418_24443 = state_24415__$1;
(statearr_24418_24443[(1)] = (8));

} else {
var statearr_24419_24444 = state_24415__$1;
(statearr_24419_24444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (1))){
var inst_24392 = (0);
var state_24415__$1 = (function (){var statearr_24420 = state_24415;
(statearr_24420[(8)] = inst_24392);

return statearr_24420;
})();
var statearr_24421_24445 = state_24415__$1;
(statearr_24421_24445[(2)] = null);

(statearr_24421_24445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (4))){
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24415__$1,(7),ch);
} else {
if((state_val_24416 === (6))){
var inst_24410 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24422_24446 = state_24415__$1;
(statearr_24422_24446[(2)] = inst_24410);

(statearr_24422_24446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (3))){
var inst_24412 = (state_24415[(2)]);
var inst_24413 = cljs.core.async.close_BANG_.call(null,out);
var state_24415__$1 = (function (){var statearr_24423 = state_24415;
(statearr_24423[(9)] = inst_24412);

return statearr_24423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24415__$1,inst_24413);
} else {
if((state_val_24416 === (2))){
var inst_24392 = (state_24415[(8)]);
var inst_24394 = (inst_24392 < n);
var state_24415__$1 = state_24415;
if(cljs.core.truth_(inst_24394)){
var statearr_24424_24447 = state_24415__$1;
(statearr_24424_24447[(1)] = (4));

} else {
var statearr_24425_24448 = state_24415__$1;
(statearr_24425_24448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (11))){
var inst_24392 = (state_24415[(8)]);
var inst_24402 = (state_24415[(2)]);
var inst_24403 = (inst_24392 + (1));
var inst_24392__$1 = inst_24403;
var state_24415__$1 = (function (){var statearr_24426 = state_24415;
(statearr_24426[(8)] = inst_24392__$1);

(statearr_24426[(10)] = inst_24402);

return statearr_24426;
})();
var statearr_24427_24449 = state_24415__$1;
(statearr_24427_24449[(2)] = null);

(statearr_24427_24449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (9))){
var state_24415__$1 = state_24415;
var statearr_24428_24450 = state_24415__$1;
(statearr_24428_24450[(2)] = null);

(statearr_24428_24450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (5))){
var state_24415__$1 = state_24415;
var statearr_24429_24451 = state_24415__$1;
(statearr_24429_24451[(2)] = null);

(statearr_24429_24451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (10))){
var inst_24407 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24430_24452 = state_24415__$1;
(statearr_24430_24452[(2)] = inst_24407);

(statearr_24430_24452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (8))){
var inst_24397 = (state_24415[(7)]);
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24415__$1,(11),out,inst_24397);
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
});})(c__22278__auto___24442,out))
;
return ((function (switch__22166__auto__,c__22278__auto___24442,out){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_24434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24434[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_24434[(1)] = (1));

return statearr_24434;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24415){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24435){if((e24435 instanceof Object)){
var ex__22170__auto__ = e24435;
var statearr_24436_24453 = state_24415;
(statearr_24436_24453[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24454 = state_24415;
state_24415 = G__24454;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___24442,out))
})();
var state__22280__auto__ = (function (){var statearr_24437 = f__22279__auto__.call(null);
(statearr_24437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___24442);

return statearr_24437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___24442,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24462 = (function (map_LT_,f,ch,meta24463){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24463 = meta24463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24464,meta24463__$1){
var self__ = this;
var _24464__$1 = this;
return (new cljs.core.async.t_cljs$core$async24462(self__.map_LT_,self__.f,self__.ch,meta24463__$1));
});

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24464){
var self__ = this;
var _24464__$1 = this;
return self__.meta24463;
});

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24465 = (function (map_LT_,f,ch,meta24463,_,fn1,meta24466){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24463 = meta24463;
this._ = _;
this.fn1 = fn1;
this.meta24466 = meta24466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24467,meta24466__$1){
var self__ = this;
var _24467__$1 = this;
return (new cljs.core.async.t_cljs$core$async24465(self__.map_LT_,self__.f,self__.ch,self__.meta24463,self__._,self__.fn1,meta24466__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24467){
var self__ = this;
var _24467__$1 = this;
return self__.meta24466;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24465.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24455_SHARP_){
return f1.call(null,(((p1__24455_SHARP_ == null))?null:self__.f.call(null,p1__24455_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24465.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24463","meta24463",714733651,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24462","cljs.core.async/t_cljs$core$async24462",-887032953,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24466","meta24466",-1111456819,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24465";

cljs.core.async.t_cljs$core$async24465.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24465");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24465 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24465(map_LT___$1,f__$1,ch__$1,meta24463__$1,___$2,fn1__$1,meta24466){
return (new cljs.core.async.t_cljs$core$async24465(map_LT___$1,f__$1,ch__$1,meta24463__$1,___$2,fn1__$1,meta24466));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24465(self__.map_LT_,self__.f,self__.ch,self__.meta24463,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18456__auto__ = ret;
if(cljs.core.truth_(and__18456__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18456__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24463","meta24463",714733651,null)], null);
});

cljs.core.async.t_cljs$core$async24462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24462";

cljs.core.async.t_cljs$core$async24462.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24462");
});

cljs.core.async.__GT_t_cljs$core$async24462 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24462(map_LT___$1,f__$1,ch__$1,meta24463){
return (new cljs.core.async.t_cljs$core$async24462(map_LT___$1,f__$1,ch__$1,meta24463));
});

}

return (new cljs.core.async.t_cljs$core$async24462(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24471 = (function (map_GT_,f,ch,meta24472){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24472 = meta24472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24473,meta24472__$1){
var self__ = this;
var _24473__$1 = this;
return (new cljs.core.async.t_cljs$core$async24471(self__.map_GT_,self__.f,self__.ch,meta24472__$1));
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24473){
var self__ = this;
var _24473__$1 = this;
return self__.meta24472;
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24472","meta24472",-1619784605,null)], null);
});

cljs.core.async.t_cljs$core$async24471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24471";

cljs.core.async.t_cljs$core$async24471.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24471");
});

cljs.core.async.__GT_t_cljs$core$async24471 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24471(map_GT___$1,f__$1,ch__$1,meta24472){
return (new cljs.core.async.t_cljs$core$async24471(map_GT___$1,f__$1,ch__$1,meta24472));
});

}

return (new cljs.core.async.t_cljs$core$async24471(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24477 = (function (filter_GT_,p,ch,meta24478){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24478 = meta24478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24479,meta24478__$1){
var self__ = this;
var _24479__$1 = this;
return (new cljs.core.async.t_cljs$core$async24477(self__.filter_GT_,self__.p,self__.ch,meta24478__$1));
});

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24479){
var self__ = this;
var _24479__$1 = this;
return self__.meta24478;
});

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24478","meta24478",2146221739,null)], null);
});

cljs.core.async.t_cljs$core$async24477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24477";

cljs.core.async.t_cljs$core$async24477.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24477");
});

cljs.core.async.__GT_t_cljs$core$async24477 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24477(filter_GT___$1,p__$1,ch__$1,meta24478){
return (new cljs.core.async.t_cljs$core$async24477(filter_GT___$1,p__$1,ch__$1,meta24478));
});

}

return (new cljs.core.async.t_cljs$core$async24477(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24480 = [];
var len__19538__auto___24524 = arguments.length;
var i__19539__auto___24525 = (0);
while(true){
if((i__19539__auto___24525 < len__19538__auto___24524)){
args24480.push((arguments[i__19539__auto___24525]));

var G__24526 = (i__19539__auto___24525 + (1));
i__19539__auto___24525 = G__24526;
continue;
} else {
}
break;
}

var G__24482 = args24480.length;
switch (G__24482) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24480.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22278__auto___24528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___24528,out){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___24528,out){
return (function (state_24503){
var state_val_24504 = (state_24503[(1)]);
if((state_val_24504 === (7))){
var inst_24499 = (state_24503[(2)]);
var state_24503__$1 = state_24503;
var statearr_24505_24529 = state_24503__$1;
(statearr_24505_24529[(2)] = inst_24499);

(statearr_24505_24529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (1))){
var state_24503__$1 = state_24503;
var statearr_24506_24530 = state_24503__$1;
(statearr_24506_24530[(2)] = null);

(statearr_24506_24530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (4))){
var inst_24485 = (state_24503[(7)]);
var inst_24485__$1 = (state_24503[(2)]);
var inst_24486 = (inst_24485__$1 == null);
var state_24503__$1 = (function (){var statearr_24507 = state_24503;
(statearr_24507[(7)] = inst_24485__$1);

return statearr_24507;
})();
if(cljs.core.truth_(inst_24486)){
var statearr_24508_24531 = state_24503__$1;
(statearr_24508_24531[(1)] = (5));

} else {
var statearr_24509_24532 = state_24503__$1;
(statearr_24509_24532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (6))){
var inst_24485 = (state_24503[(7)]);
var inst_24490 = p.call(null,inst_24485);
var state_24503__$1 = state_24503;
if(cljs.core.truth_(inst_24490)){
var statearr_24510_24533 = state_24503__$1;
(statearr_24510_24533[(1)] = (8));

} else {
var statearr_24511_24534 = state_24503__$1;
(statearr_24511_24534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (3))){
var inst_24501 = (state_24503[(2)]);
var state_24503__$1 = state_24503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24503__$1,inst_24501);
} else {
if((state_val_24504 === (2))){
var state_24503__$1 = state_24503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24503__$1,(4),ch);
} else {
if((state_val_24504 === (11))){
var inst_24493 = (state_24503[(2)]);
var state_24503__$1 = state_24503;
var statearr_24512_24535 = state_24503__$1;
(statearr_24512_24535[(2)] = inst_24493);

(statearr_24512_24535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (9))){
var state_24503__$1 = state_24503;
var statearr_24513_24536 = state_24503__$1;
(statearr_24513_24536[(2)] = null);

(statearr_24513_24536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (5))){
var inst_24488 = cljs.core.async.close_BANG_.call(null,out);
var state_24503__$1 = state_24503;
var statearr_24514_24537 = state_24503__$1;
(statearr_24514_24537[(2)] = inst_24488);

(statearr_24514_24537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (10))){
var inst_24496 = (state_24503[(2)]);
var state_24503__$1 = (function (){var statearr_24515 = state_24503;
(statearr_24515[(8)] = inst_24496);

return statearr_24515;
})();
var statearr_24516_24538 = state_24503__$1;
(statearr_24516_24538[(2)] = null);

(statearr_24516_24538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (8))){
var inst_24485 = (state_24503[(7)]);
var state_24503__$1 = state_24503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24503__$1,(11),out,inst_24485);
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
});})(c__22278__auto___24528,out))
;
return ((function (switch__22166__auto__,c__22278__auto___24528,out){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_24520 = [null,null,null,null,null,null,null,null,null];
(statearr_24520[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_24520[(1)] = (1));

return statearr_24520;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24503){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24521){if((e24521 instanceof Object)){
var ex__22170__auto__ = e24521;
var statearr_24522_24539 = state_24503;
(statearr_24522_24539[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24540 = state_24503;
state_24503 = G__24540;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___24528,out))
})();
var state__22280__auto__ = (function (){var statearr_24523 = f__22279__auto__.call(null);
(statearr_24523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___24528);

return statearr_24523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___24528,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24541 = [];
var len__19538__auto___24544 = arguments.length;
var i__19539__auto___24545 = (0);
while(true){
if((i__19539__auto___24545 < len__19538__auto___24544)){
args24541.push((arguments[i__19539__auto___24545]));

var G__24546 = (i__19539__auto___24545 + (1));
i__19539__auto___24545 = G__24546;
continue;
} else {
}
break;
}

var G__24543 = args24541.length;
switch (G__24543) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24541.length)].join('')));

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
var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__){
return (function (state_24713){
var state_val_24714 = (state_24713[(1)]);
if((state_val_24714 === (7))){
var inst_24709 = (state_24713[(2)]);
var state_24713__$1 = state_24713;
var statearr_24715_24756 = state_24713__$1;
(statearr_24715_24756[(2)] = inst_24709);

(statearr_24715_24756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (20))){
var inst_24679 = (state_24713[(7)]);
var inst_24690 = (state_24713[(2)]);
var inst_24691 = cljs.core.next.call(null,inst_24679);
var inst_24665 = inst_24691;
var inst_24666 = null;
var inst_24667 = (0);
var inst_24668 = (0);
var state_24713__$1 = (function (){var statearr_24716 = state_24713;
(statearr_24716[(8)] = inst_24667);

(statearr_24716[(9)] = inst_24690);

(statearr_24716[(10)] = inst_24668);

(statearr_24716[(11)] = inst_24665);

(statearr_24716[(12)] = inst_24666);

return statearr_24716;
})();
var statearr_24717_24757 = state_24713__$1;
(statearr_24717_24757[(2)] = null);

(statearr_24717_24757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (1))){
var state_24713__$1 = state_24713;
var statearr_24718_24758 = state_24713__$1;
(statearr_24718_24758[(2)] = null);

(statearr_24718_24758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (4))){
var inst_24654 = (state_24713[(13)]);
var inst_24654__$1 = (state_24713[(2)]);
var inst_24655 = (inst_24654__$1 == null);
var state_24713__$1 = (function (){var statearr_24719 = state_24713;
(statearr_24719[(13)] = inst_24654__$1);

return statearr_24719;
})();
if(cljs.core.truth_(inst_24655)){
var statearr_24720_24759 = state_24713__$1;
(statearr_24720_24759[(1)] = (5));

} else {
var statearr_24721_24760 = state_24713__$1;
(statearr_24721_24760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (15))){
var state_24713__$1 = state_24713;
var statearr_24725_24761 = state_24713__$1;
(statearr_24725_24761[(2)] = null);

(statearr_24725_24761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (21))){
var state_24713__$1 = state_24713;
var statearr_24726_24762 = state_24713__$1;
(statearr_24726_24762[(2)] = null);

(statearr_24726_24762[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (13))){
var inst_24667 = (state_24713[(8)]);
var inst_24668 = (state_24713[(10)]);
var inst_24665 = (state_24713[(11)]);
var inst_24666 = (state_24713[(12)]);
var inst_24675 = (state_24713[(2)]);
var inst_24676 = (inst_24668 + (1));
var tmp24722 = inst_24667;
var tmp24723 = inst_24665;
var tmp24724 = inst_24666;
var inst_24665__$1 = tmp24723;
var inst_24666__$1 = tmp24724;
var inst_24667__$1 = tmp24722;
var inst_24668__$1 = inst_24676;
var state_24713__$1 = (function (){var statearr_24727 = state_24713;
(statearr_24727[(14)] = inst_24675);

(statearr_24727[(8)] = inst_24667__$1);

(statearr_24727[(10)] = inst_24668__$1);

(statearr_24727[(11)] = inst_24665__$1);

(statearr_24727[(12)] = inst_24666__$1);

return statearr_24727;
})();
var statearr_24728_24763 = state_24713__$1;
(statearr_24728_24763[(2)] = null);

(statearr_24728_24763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (22))){
var state_24713__$1 = state_24713;
var statearr_24729_24764 = state_24713__$1;
(statearr_24729_24764[(2)] = null);

(statearr_24729_24764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (6))){
var inst_24654 = (state_24713[(13)]);
var inst_24663 = f.call(null,inst_24654);
var inst_24664 = cljs.core.seq.call(null,inst_24663);
var inst_24665 = inst_24664;
var inst_24666 = null;
var inst_24667 = (0);
var inst_24668 = (0);
var state_24713__$1 = (function (){var statearr_24730 = state_24713;
(statearr_24730[(8)] = inst_24667);

(statearr_24730[(10)] = inst_24668);

(statearr_24730[(11)] = inst_24665);

(statearr_24730[(12)] = inst_24666);

return statearr_24730;
})();
var statearr_24731_24765 = state_24713__$1;
(statearr_24731_24765[(2)] = null);

(statearr_24731_24765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (17))){
var inst_24679 = (state_24713[(7)]);
var inst_24683 = cljs.core.chunk_first.call(null,inst_24679);
var inst_24684 = cljs.core.chunk_rest.call(null,inst_24679);
var inst_24685 = cljs.core.count.call(null,inst_24683);
var inst_24665 = inst_24684;
var inst_24666 = inst_24683;
var inst_24667 = inst_24685;
var inst_24668 = (0);
var state_24713__$1 = (function (){var statearr_24732 = state_24713;
(statearr_24732[(8)] = inst_24667);

(statearr_24732[(10)] = inst_24668);

(statearr_24732[(11)] = inst_24665);

(statearr_24732[(12)] = inst_24666);

return statearr_24732;
})();
var statearr_24733_24766 = state_24713__$1;
(statearr_24733_24766[(2)] = null);

(statearr_24733_24766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (3))){
var inst_24711 = (state_24713[(2)]);
var state_24713__$1 = state_24713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24713__$1,inst_24711);
} else {
if((state_val_24714 === (12))){
var inst_24699 = (state_24713[(2)]);
var state_24713__$1 = state_24713;
var statearr_24734_24767 = state_24713__$1;
(statearr_24734_24767[(2)] = inst_24699);

(statearr_24734_24767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (2))){
var state_24713__$1 = state_24713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24713__$1,(4),in$);
} else {
if((state_val_24714 === (23))){
var inst_24707 = (state_24713[(2)]);
var state_24713__$1 = state_24713;
var statearr_24735_24768 = state_24713__$1;
(statearr_24735_24768[(2)] = inst_24707);

(statearr_24735_24768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (19))){
var inst_24694 = (state_24713[(2)]);
var state_24713__$1 = state_24713;
var statearr_24736_24769 = state_24713__$1;
(statearr_24736_24769[(2)] = inst_24694);

(statearr_24736_24769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (11))){
var inst_24679 = (state_24713[(7)]);
var inst_24665 = (state_24713[(11)]);
var inst_24679__$1 = cljs.core.seq.call(null,inst_24665);
var state_24713__$1 = (function (){var statearr_24737 = state_24713;
(statearr_24737[(7)] = inst_24679__$1);

return statearr_24737;
})();
if(inst_24679__$1){
var statearr_24738_24770 = state_24713__$1;
(statearr_24738_24770[(1)] = (14));

} else {
var statearr_24739_24771 = state_24713__$1;
(statearr_24739_24771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (9))){
var inst_24701 = (state_24713[(2)]);
var inst_24702 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24713__$1 = (function (){var statearr_24740 = state_24713;
(statearr_24740[(15)] = inst_24701);

return statearr_24740;
})();
if(cljs.core.truth_(inst_24702)){
var statearr_24741_24772 = state_24713__$1;
(statearr_24741_24772[(1)] = (21));

} else {
var statearr_24742_24773 = state_24713__$1;
(statearr_24742_24773[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (5))){
var inst_24657 = cljs.core.async.close_BANG_.call(null,out);
var state_24713__$1 = state_24713;
var statearr_24743_24774 = state_24713__$1;
(statearr_24743_24774[(2)] = inst_24657);

(statearr_24743_24774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (14))){
var inst_24679 = (state_24713[(7)]);
var inst_24681 = cljs.core.chunked_seq_QMARK_.call(null,inst_24679);
var state_24713__$1 = state_24713;
if(inst_24681){
var statearr_24744_24775 = state_24713__$1;
(statearr_24744_24775[(1)] = (17));

} else {
var statearr_24745_24776 = state_24713__$1;
(statearr_24745_24776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (16))){
var inst_24697 = (state_24713[(2)]);
var state_24713__$1 = state_24713;
var statearr_24746_24777 = state_24713__$1;
(statearr_24746_24777[(2)] = inst_24697);

(statearr_24746_24777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24714 === (10))){
var inst_24668 = (state_24713[(10)]);
var inst_24666 = (state_24713[(12)]);
var inst_24673 = cljs.core._nth.call(null,inst_24666,inst_24668);
var state_24713__$1 = state_24713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24713__$1,(13),out,inst_24673);
} else {
if((state_val_24714 === (18))){
var inst_24679 = (state_24713[(7)]);
var inst_24688 = cljs.core.first.call(null,inst_24679);
var state_24713__$1 = state_24713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24713__$1,(20),out,inst_24688);
} else {
if((state_val_24714 === (8))){
var inst_24667 = (state_24713[(8)]);
var inst_24668 = (state_24713[(10)]);
var inst_24670 = (inst_24668 < inst_24667);
var inst_24671 = inst_24670;
var state_24713__$1 = state_24713;
if(cljs.core.truth_(inst_24671)){
var statearr_24747_24778 = state_24713__$1;
(statearr_24747_24778[(1)] = (10));

} else {
var statearr_24748_24779 = state_24713__$1;
(statearr_24748_24779[(1)] = (11));

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
});})(c__22278__auto__))
;
return ((function (switch__22166__auto__,c__22278__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22167__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22167__auto____0 = (function (){
var statearr_24752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24752[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22167__auto__);

(statearr_24752[(1)] = (1));

return statearr_24752;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22167__auto____1 = (function (state_24713){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24753){if((e24753 instanceof Object)){
var ex__22170__auto__ = e24753;
var statearr_24754_24780 = state_24713;
(statearr_24754_24780[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24781 = state_24713;
state_24713 = G__24781;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22167__auto__ = function(state_24713){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22167__auto____1.call(this,state_24713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22167__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22167__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__))
})();
var state__22280__auto__ = (function (){var statearr_24755 = f__22279__auto__.call(null);
(statearr_24755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_24755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__))
);

return c__22278__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24782 = [];
var len__19538__auto___24785 = arguments.length;
var i__19539__auto___24786 = (0);
while(true){
if((i__19539__auto___24786 < len__19538__auto___24785)){
args24782.push((arguments[i__19539__auto___24786]));

var G__24787 = (i__19539__auto___24786 + (1));
i__19539__auto___24786 = G__24787;
continue;
} else {
}
break;
}

var G__24784 = args24782.length;
switch (G__24784) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24782.length)].join('')));

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
var args24789 = [];
var len__19538__auto___24792 = arguments.length;
var i__19539__auto___24793 = (0);
while(true){
if((i__19539__auto___24793 < len__19538__auto___24792)){
args24789.push((arguments[i__19539__auto___24793]));

var G__24794 = (i__19539__auto___24793 + (1));
i__19539__auto___24793 = G__24794;
continue;
} else {
}
break;
}

var G__24791 = args24789.length;
switch (G__24791) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24789.length)].join('')));

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
var args24796 = [];
var len__19538__auto___24847 = arguments.length;
var i__19539__auto___24848 = (0);
while(true){
if((i__19539__auto___24848 < len__19538__auto___24847)){
args24796.push((arguments[i__19539__auto___24848]));

var G__24849 = (i__19539__auto___24848 + (1));
i__19539__auto___24848 = G__24849;
continue;
} else {
}
break;
}

var G__24798 = args24796.length;
switch (G__24798) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24796.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22278__auto___24851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___24851,out){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___24851,out){
return (function (state_24822){
var state_val_24823 = (state_24822[(1)]);
if((state_val_24823 === (7))){
var inst_24817 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24824_24852 = state_24822__$1;
(statearr_24824_24852[(2)] = inst_24817);

(statearr_24824_24852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (1))){
var inst_24799 = null;
var state_24822__$1 = (function (){var statearr_24825 = state_24822;
(statearr_24825[(7)] = inst_24799);

return statearr_24825;
})();
var statearr_24826_24853 = state_24822__$1;
(statearr_24826_24853[(2)] = null);

(statearr_24826_24853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (4))){
var inst_24802 = (state_24822[(8)]);
var inst_24802__$1 = (state_24822[(2)]);
var inst_24803 = (inst_24802__$1 == null);
var inst_24804 = cljs.core.not.call(null,inst_24803);
var state_24822__$1 = (function (){var statearr_24827 = state_24822;
(statearr_24827[(8)] = inst_24802__$1);

return statearr_24827;
})();
if(inst_24804){
var statearr_24828_24854 = state_24822__$1;
(statearr_24828_24854[(1)] = (5));

} else {
var statearr_24829_24855 = state_24822__$1;
(statearr_24829_24855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (6))){
var state_24822__$1 = state_24822;
var statearr_24830_24856 = state_24822__$1;
(statearr_24830_24856[(2)] = null);

(statearr_24830_24856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (3))){
var inst_24819 = (state_24822[(2)]);
var inst_24820 = cljs.core.async.close_BANG_.call(null,out);
var state_24822__$1 = (function (){var statearr_24831 = state_24822;
(statearr_24831[(9)] = inst_24819);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24822__$1,inst_24820);
} else {
if((state_val_24823 === (2))){
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24822__$1,(4),ch);
} else {
if((state_val_24823 === (11))){
var inst_24802 = (state_24822[(8)]);
var inst_24811 = (state_24822[(2)]);
var inst_24799 = inst_24802;
var state_24822__$1 = (function (){var statearr_24832 = state_24822;
(statearr_24832[(7)] = inst_24799);

(statearr_24832[(10)] = inst_24811);

return statearr_24832;
})();
var statearr_24833_24857 = state_24822__$1;
(statearr_24833_24857[(2)] = null);

(statearr_24833_24857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (9))){
var inst_24802 = (state_24822[(8)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24822__$1,(11),out,inst_24802);
} else {
if((state_val_24823 === (5))){
var inst_24802 = (state_24822[(8)]);
var inst_24799 = (state_24822[(7)]);
var inst_24806 = cljs.core._EQ_.call(null,inst_24802,inst_24799);
var state_24822__$1 = state_24822;
if(inst_24806){
var statearr_24835_24858 = state_24822__$1;
(statearr_24835_24858[(1)] = (8));

} else {
var statearr_24836_24859 = state_24822__$1;
(statearr_24836_24859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (10))){
var inst_24814 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24837_24860 = state_24822__$1;
(statearr_24837_24860[(2)] = inst_24814);

(statearr_24837_24860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (8))){
var inst_24799 = (state_24822[(7)]);
var tmp24834 = inst_24799;
var inst_24799__$1 = tmp24834;
var state_24822__$1 = (function (){var statearr_24838 = state_24822;
(statearr_24838[(7)] = inst_24799__$1);

return statearr_24838;
})();
var statearr_24839_24861 = state_24822__$1;
(statearr_24839_24861[(2)] = null);

(statearr_24839_24861[(1)] = (2));


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
});})(c__22278__auto___24851,out))
;
return ((function (switch__22166__auto__,c__22278__auto___24851,out){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_24843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24843[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_24843[(1)] = (1));

return statearr_24843;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24822){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24844){if((e24844 instanceof Object)){
var ex__22170__auto__ = e24844;
var statearr_24845_24862 = state_24822;
(statearr_24845_24862[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24863 = state_24822;
state_24822 = G__24863;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___24851,out))
})();
var state__22280__auto__ = (function (){var statearr_24846 = f__22279__auto__.call(null);
(statearr_24846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___24851);

return statearr_24846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___24851,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24864 = [];
var len__19538__auto___24934 = arguments.length;
var i__19539__auto___24935 = (0);
while(true){
if((i__19539__auto___24935 < len__19538__auto___24934)){
args24864.push((arguments[i__19539__auto___24935]));

var G__24936 = (i__19539__auto___24935 + (1));
i__19539__auto___24935 = G__24936;
continue;
} else {
}
break;
}

var G__24866 = args24864.length;
switch (G__24866) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24864.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22278__auto___24938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___24938,out){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___24938,out){
return (function (state_24904){
var state_val_24905 = (state_24904[(1)]);
if((state_val_24905 === (7))){
var inst_24900 = (state_24904[(2)]);
var state_24904__$1 = state_24904;
var statearr_24906_24939 = state_24904__$1;
(statearr_24906_24939[(2)] = inst_24900);

(statearr_24906_24939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (1))){
var inst_24867 = (new Array(n));
var inst_24868 = inst_24867;
var inst_24869 = (0);
var state_24904__$1 = (function (){var statearr_24907 = state_24904;
(statearr_24907[(7)] = inst_24869);

(statearr_24907[(8)] = inst_24868);

return statearr_24907;
})();
var statearr_24908_24940 = state_24904__$1;
(statearr_24908_24940[(2)] = null);

(statearr_24908_24940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (4))){
var inst_24872 = (state_24904[(9)]);
var inst_24872__$1 = (state_24904[(2)]);
var inst_24873 = (inst_24872__$1 == null);
var inst_24874 = cljs.core.not.call(null,inst_24873);
var state_24904__$1 = (function (){var statearr_24909 = state_24904;
(statearr_24909[(9)] = inst_24872__$1);

return statearr_24909;
})();
if(inst_24874){
var statearr_24910_24941 = state_24904__$1;
(statearr_24910_24941[(1)] = (5));

} else {
var statearr_24911_24942 = state_24904__$1;
(statearr_24911_24942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (15))){
var inst_24894 = (state_24904[(2)]);
var state_24904__$1 = state_24904;
var statearr_24912_24943 = state_24904__$1;
(statearr_24912_24943[(2)] = inst_24894);

(statearr_24912_24943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (13))){
var state_24904__$1 = state_24904;
var statearr_24913_24944 = state_24904__$1;
(statearr_24913_24944[(2)] = null);

(statearr_24913_24944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (6))){
var inst_24869 = (state_24904[(7)]);
var inst_24890 = (inst_24869 > (0));
var state_24904__$1 = state_24904;
if(cljs.core.truth_(inst_24890)){
var statearr_24914_24945 = state_24904__$1;
(statearr_24914_24945[(1)] = (12));

} else {
var statearr_24915_24946 = state_24904__$1;
(statearr_24915_24946[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (3))){
var inst_24902 = (state_24904[(2)]);
var state_24904__$1 = state_24904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24904__$1,inst_24902);
} else {
if((state_val_24905 === (12))){
var inst_24868 = (state_24904[(8)]);
var inst_24892 = cljs.core.vec.call(null,inst_24868);
var state_24904__$1 = state_24904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24904__$1,(15),out,inst_24892);
} else {
if((state_val_24905 === (2))){
var state_24904__$1 = state_24904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24904__$1,(4),ch);
} else {
if((state_val_24905 === (11))){
var inst_24884 = (state_24904[(2)]);
var inst_24885 = (new Array(n));
var inst_24868 = inst_24885;
var inst_24869 = (0);
var state_24904__$1 = (function (){var statearr_24916 = state_24904;
(statearr_24916[(10)] = inst_24884);

(statearr_24916[(7)] = inst_24869);

(statearr_24916[(8)] = inst_24868);

return statearr_24916;
})();
var statearr_24917_24947 = state_24904__$1;
(statearr_24917_24947[(2)] = null);

(statearr_24917_24947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (9))){
var inst_24868 = (state_24904[(8)]);
var inst_24882 = cljs.core.vec.call(null,inst_24868);
var state_24904__$1 = state_24904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24904__$1,(11),out,inst_24882);
} else {
if((state_val_24905 === (5))){
var inst_24872 = (state_24904[(9)]);
var inst_24869 = (state_24904[(7)]);
var inst_24868 = (state_24904[(8)]);
var inst_24877 = (state_24904[(11)]);
var inst_24876 = (inst_24868[inst_24869] = inst_24872);
var inst_24877__$1 = (inst_24869 + (1));
var inst_24878 = (inst_24877__$1 < n);
var state_24904__$1 = (function (){var statearr_24918 = state_24904;
(statearr_24918[(12)] = inst_24876);

(statearr_24918[(11)] = inst_24877__$1);

return statearr_24918;
})();
if(cljs.core.truth_(inst_24878)){
var statearr_24919_24948 = state_24904__$1;
(statearr_24919_24948[(1)] = (8));

} else {
var statearr_24920_24949 = state_24904__$1;
(statearr_24920_24949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (14))){
var inst_24897 = (state_24904[(2)]);
var inst_24898 = cljs.core.async.close_BANG_.call(null,out);
var state_24904__$1 = (function (){var statearr_24922 = state_24904;
(statearr_24922[(13)] = inst_24897);

return statearr_24922;
})();
var statearr_24923_24950 = state_24904__$1;
(statearr_24923_24950[(2)] = inst_24898);

(statearr_24923_24950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (10))){
var inst_24888 = (state_24904[(2)]);
var state_24904__$1 = state_24904;
var statearr_24924_24951 = state_24904__$1;
(statearr_24924_24951[(2)] = inst_24888);

(statearr_24924_24951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24905 === (8))){
var inst_24868 = (state_24904[(8)]);
var inst_24877 = (state_24904[(11)]);
var tmp24921 = inst_24868;
var inst_24868__$1 = tmp24921;
var inst_24869 = inst_24877;
var state_24904__$1 = (function (){var statearr_24925 = state_24904;
(statearr_24925[(7)] = inst_24869);

(statearr_24925[(8)] = inst_24868__$1);

return statearr_24925;
})();
var statearr_24926_24952 = state_24904__$1;
(statearr_24926_24952[(2)] = null);

(statearr_24926_24952[(1)] = (2));


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
});})(c__22278__auto___24938,out))
;
return ((function (switch__22166__auto__,c__22278__auto___24938,out){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_24930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24930[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_24930[(1)] = (1));

return statearr_24930;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24904){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e24931){if((e24931 instanceof Object)){
var ex__22170__auto__ = e24931;
var statearr_24932_24953 = state_24904;
(statearr_24932_24953[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24954 = state_24904;
state_24904 = G__24954;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___24938,out))
})();
var state__22280__auto__ = (function (){var statearr_24933 = f__22279__auto__.call(null);
(statearr_24933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___24938);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___24938,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24955 = [];
var len__19538__auto___25029 = arguments.length;
var i__19539__auto___25030 = (0);
while(true){
if((i__19539__auto___25030 < len__19538__auto___25029)){
args24955.push((arguments[i__19539__auto___25030]));

var G__25031 = (i__19539__auto___25030 + (1));
i__19539__auto___25030 = G__25031;
continue;
} else {
}
break;
}

var G__24957 = args24955.length;
switch (G__24957) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24955.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22278__auto___25033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___25033,out){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___25033,out){
return (function (state_24999){
var state_val_25000 = (state_24999[(1)]);
if((state_val_25000 === (7))){
var inst_24995 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25001_25034 = state_24999__$1;
(statearr_25001_25034[(2)] = inst_24995);

(statearr_25001_25034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (1))){
var inst_24958 = [];
var inst_24959 = inst_24958;
var inst_24960 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24999__$1 = (function (){var statearr_25002 = state_24999;
(statearr_25002[(7)] = inst_24960);

(statearr_25002[(8)] = inst_24959);

return statearr_25002;
})();
var statearr_25003_25035 = state_24999__$1;
(statearr_25003_25035[(2)] = null);

(statearr_25003_25035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (4))){
var inst_24963 = (state_24999[(9)]);
var inst_24963__$1 = (state_24999[(2)]);
var inst_24964 = (inst_24963__$1 == null);
var inst_24965 = cljs.core.not.call(null,inst_24964);
var state_24999__$1 = (function (){var statearr_25004 = state_24999;
(statearr_25004[(9)] = inst_24963__$1);

return statearr_25004;
})();
if(inst_24965){
var statearr_25005_25036 = state_24999__$1;
(statearr_25005_25036[(1)] = (5));

} else {
var statearr_25006_25037 = state_24999__$1;
(statearr_25006_25037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (15))){
var inst_24989 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25007_25038 = state_24999__$1;
(statearr_25007_25038[(2)] = inst_24989);

(statearr_25007_25038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (13))){
var state_24999__$1 = state_24999;
var statearr_25008_25039 = state_24999__$1;
(statearr_25008_25039[(2)] = null);

(statearr_25008_25039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (6))){
var inst_24959 = (state_24999[(8)]);
var inst_24984 = inst_24959.length;
var inst_24985 = (inst_24984 > (0));
var state_24999__$1 = state_24999;
if(cljs.core.truth_(inst_24985)){
var statearr_25009_25040 = state_24999__$1;
(statearr_25009_25040[(1)] = (12));

} else {
var statearr_25010_25041 = state_24999__$1;
(statearr_25010_25041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (3))){
var inst_24997 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24999__$1,inst_24997);
} else {
if((state_val_25000 === (12))){
var inst_24959 = (state_24999[(8)]);
var inst_24987 = cljs.core.vec.call(null,inst_24959);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24999__$1,(15),out,inst_24987);
} else {
if((state_val_25000 === (2))){
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24999__$1,(4),ch);
} else {
if((state_val_25000 === (11))){
var inst_24967 = (state_24999[(10)]);
var inst_24963 = (state_24999[(9)]);
var inst_24977 = (state_24999[(2)]);
var inst_24978 = [];
var inst_24979 = inst_24978.push(inst_24963);
var inst_24959 = inst_24978;
var inst_24960 = inst_24967;
var state_24999__$1 = (function (){var statearr_25011 = state_24999;
(statearr_25011[(11)] = inst_24979);

(statearr_25011[(12)] = inst_24977);

(statearr_25011[(7)] = inst_24960);

(statearr_25011[(8)] = inst_24959);

return statearr_25011;
})();
var statearr_25012_25042 = state_24999__$1;
(statearr_25012_25042[(2)] = null);

(statearr_25012_25042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (9))){
var inst_24959 = (state_24999[(8)]);
var inst_24975 = cljs.core.vec.call(null,inst_24959);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24999__$1,(11),out,inst_24975);
} else {
if((state_val_25000 === (5))){
var inst_24967 = (state_24999[(10)]);
var inst_24963 = (state_24999[(9)]);
var inst_24960 = (state_24999[(7)]);
var inst_24967__$1 = f.call(null,inst_24963);
var inst_24968 = cljs.core._EQ_.call(null,inst_24967__$1,inst_24960);
var inst_24969 = cljs.core.keyword_identical_QMARK_.call(null,inst_24960,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24970 = (inst_24968) || (inst_24969);
var state_24999__$1 = (function (){var statearr_25013 = state_24999;
(statearr_25013[(10)] = inst_24967__$1);

return statearr_25013;
})();
if(cljs.core.truth_(inst_24970)){
var statearr_25014_25043 = state_24999__$1;
(statearr_25014_25043[(1)] = (8));

} else {
var statearr_25015_25044 = state_24999__$1;
(statearr_25015_25044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (14))){
var inst_24992 = (state_24999[(2)]);
var inst_24993 = cljs.core.async.close_BANG_.call(null,out);
var state_24999__$1 = (function (){var statearr_25017 = state_24999;
(statearr_25017[(13)] = inst_24992);

return statearr_25017;
})();
var statearr_25018_25045 = state_24999__$1;
(statearr_25018_25045[(2)] = inst_24993);

(statearr_25018_25045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (10))){
var inst_24982 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25019_25046 = state_24999__$1;
(statearr_25019_25046[(2)] = inst_24982);

(statearr_25019_25046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (8))){
var inst_24967 = (state_24999[(10)]);
var inst_24963 = (state_24999[(9)]);
var inst_24959 = (state_24999[(8)]);
var inst_24972 = inst_24959.push(inst_24963);
var tmp25016 = inst_24959;
var inst_24959__$1 = tmp25016;
var inst_24960 = inst_24967;
var state_24999__$1 = (function (){var statearr_25020 = state_24999;
(statearr_25020[(7)] = inst_24960);

(statearr_25020[(8)] = inst_24959__$1);

(statearr_25020[(14)] = inst_24972);

return statearr_25020;
})();
var statearr_25021_25047 = state_24999__$1;
(statearr_25021_25047[(2)] = null);

(statearr_25021_25047[(1)] = (2));


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
});})(c__22278__auto___25033,out))
;
return ((function (switch__22166__auto__,c__22278__auto___25033,out){
return (function() {
var cljs$core$async$state_machine__22167__auto__ = null;
var cljs$core$async$state_machine__22167__auto____0 = (function (){
var statearr_25025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25025[(0)] = cljs$core$async$state_machine__22167__auto__);

(statearr_25025[(1)] = (1));

return statearr_25025;
});
var cljs$core$async$state_machine__22167__auto____1 = (function (state_24999){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_24999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e25026){if((e25026 instanceof Object)){
var ex__22170__auto__ = e25026;
var statearr_25027_25048 = state_24999;
(statearr_25027_25048[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25049 = state_24999;
state_24999 = G__25049;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
cljs$core$async$state_machine__22167__auto__ = function(state_24999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22167__auto____1.call(this,state_24999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22167__auto____0;
cljs$core$async$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22167__auto____1;
return cljs$core$async$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___25033,out))
})();
var state__22280__auto__ = (function (){var statearr_25028 = f__22279__auto__.call(null);
(statearr_25028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___25033);

return statearr_25028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___25033,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map