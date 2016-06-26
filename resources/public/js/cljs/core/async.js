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
var args22250 = [];
var len__19538__auto___22256 = arguments.length;
var i__19539__auto___22257 = (0);
while(true){
if((i__19539__auto___22257 < len__19538__auto___22256)){
args22250.push((arguments[i__19539__auto___22257]));

var G__22258 = (i__19539__auto___22257 + (1));
i__19539__auto___22257 = G__22258;
continue;
} else {
}
break;
}

var G__22252 = args22250.length;
switch (G__22252) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22250.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22253 = (function (f,blockable,meta22254){
this.f = f;
this.blockable = blockable;
this.meta22254 = meta22254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22255,meta22254__$1){
var self__ = this;
var _22255__$1 = this;
return (new cljs.core.async.t_cljs$core$async22253(self__.f,self__.blockable,meta22254__$1));
});

cljs.core.async.t_cljs$core$async22253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22255){
var self__ = this;
var _22255__$1 = this;
return self__.meta22254;
});

cljs.core.async.t_cljs$core$async22253.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22254","meta22254",-1291220596,null)], null);
});

cljs.core.async.t_cljs$core$async22253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22253";

cljs.core.async.t_cljs$core$async22253.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async22253");
});

cljs.core.async.__GT_t_cljs$core$async22253 = (function cljs$core$async$__GT_t_cljs$core$async22253(f__$1,blockable__$1,meta22254){
return (new cljs.core.async.t_cljs$core$async22253(f__$1,blockable__$1,meta22254));
});

}

return (new cljs.core.async.t_cljs$core$async22253(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22262 = [];
var len__19538__auto___22265 = arguments.length;
var i__19539__auto___22266 = (0);
while(true){
if((i__19539__auto___22266 < len__19538__auto___22265)){
args22262.push((arguments[i__19539__auto___22266]));

var G__22267 = (i__19539__auto___22266 + (1));
i__19539__auto___22266 = G__22267;
continue;
} else {
}
break;
}

var G__22264 = args22262.length;
switch (G__22264) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22262.length)].join('')));

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
var args22269 = [];
var len__19538__auto___22272 = arguments.length;
var i__19539__auto___22273 = (0);
while(true){
if((i__19539__auto___22273 < len__19538__auto___22272)){
args22269.push((arguments[i__19539__auto___22273]));

var G__22274 = (i__19539__auto___22273 + (1));
i__19539__auto___22273 = G__22274;
continue;
} else {
}
break;
}

var G__22271 = args22269.length;
switch (G__22271) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22269.length)].join('')));

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
var args22276 = [];
var len__19538__auto___22279 = arguments.length;
var i__19539__auto___22280 = (0);
while(true){
if((i__19539__auto___22280 < len__19538__auto___22279)){
args22276.push((arguments[i__19539__auto___22280]));

var G__22281 = (i__19539__auto___22280 + (1));
i__19539__auto___22280 = G__22281;
continue;
} else {
}
break;
}

var G__22278 = args22276.length;
switch (G__22278) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22276.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22283 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22283);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22283,ret){
return (function (){
return fn1.call(null,val_22283);
});})(val_22283,ret))
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
var args22284 = [];
var len__19538__auto___22287 = arguments.length;
var i__19539__auto___22288 = (0);
while(true){
if((i__19539__auto___22288 < len__19538__auto___22287)){
args22284.push((arguments[i__19539__auto___22288]));

var G__22289 = (i__19539__auto___22288 + (1));
i__19539__auto___22288 = G__22289;
continue;
} else {
}
break;
}

var G__22286 = args22284.length;
switch (G__22286) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22284.length)].join('')));

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
var n__19383__auto___22291 = n;
var x_22292 = (0);
while(true){
if((x_22292 < n__19383__auto___22291)){
(a[x_22292] = (0));

var G__22293 = (x_22292 + (1));
x_22292 = G__22293;
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

var G__22294 = (i + (1));
i = G__22294;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22298 = (function (alt_flag,flag,meta22299){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22299 = meta22299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22300,meta22299__$1){
var self__ = this;
var _22300__$1 = this;
return (new cljs.core.async.t_cljs$core$async22298(self__.alt_flag,self__.flag,meta22299__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22300){
var self__ = this;
var _22300__$1 = this;
return self__.meta22299;
});})(flag))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22298.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22299","meta22299",1283863201,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22298";

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async22298");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22298 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22298(alt_flag__$1,flag__$1,meta22299){
return (new cljs.core.async.t_cljs$core$async22298(alt_flag__$1,flag__$1,meta22299));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22298(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22304 = (function (alt_handler,flag,cb,meta22305){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22305 = meta22305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22306,meta22305__$1){
var self__ = this;
var _22306__$1 = this;
return (new cljs.core.async.t_cljs$core$async22304(self__.alt_handler,self__.flag,self__.cb,meta22305__$1));
});

cljs.core.async.t_cljs$core$async22304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22306){
var self__ = this;
var _22306__$1 = this;
return self__.meta22305;
});

cljs.core.async.t_cljs$core$async22304.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22305","meta22305",492399707,null)], null);
});

cljs.core.async.t_cljs$core$async22304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22304";

cljs.core.async.t_cljs$core$async22304.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async22304");
});

cljs.core.async.__GT_t_cljs$core$async22304 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22304(alt_handler__$1,flag__$1,cb__$1,meta22305){
return (new cljs.core.async.t_cljs$core$async22304(alt_handler__$1,flag__$1,cb__$1,meta22305));
});

}

return (new cljs.core.async.t_cljs$core$async22304(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22307_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22307_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22308_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22308_SHARP_,port], null));
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
var G__22309 = (i + (1));
i = G__22309;
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
var len__19538__auto___22315 = arguments.length;
var i__19539__auto___22316 = (0);
while(true){
if((i__19539__auto___22316 < len__19538__auto___22315)){
args__19545__auto__.push((arguments[i__19539__auto___22316]));

var G__22317 = (i__19539__auto___22316 + (1));
i__19539__auto___22316 = G__22317;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((1) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19546__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22312){
var map__22313 = p__22312;
var map__22313__$1 = ((((!((map__22313 == null)))?((((map__22313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22313):map__22313);
var opts = map__22313__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22310){
var G__22311 = cljs.core.first.call(null,seq22310);
var seq22310__$1 = cljs.core.next.call(null,seq22310);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22311,seq22310__$1);
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
var args22318 = [];
var len__19538__auto___22368 = arguments.length;
var i__19539__auto___22369 = (0);
while(true){
if((i__19539__auto___22369 < len__19538__auto___22368)){
args22318.push((arguments[i__19539__auto___22369]));

var G__22370 = (i__19539__auto___22369 + (1));
i__19539__auto___22369 = G__22370;
continue;
} else {
}
break;
}

var G__22320 = args22318.length;
switch (G__22320) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22318.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22205__auto___22372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___22372){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___22372){
return (function (state_22344){
var state_val_22345 = (state_22344[(1)]);
if((state_val_22345 === (7))){
var inst_22340 = (state_22344[(2)]);
var state_22344__$1 = state_22344;
var statearr_22346_22373 = state_22344__$1;
(statearr_22346_22373[(2)] = inst_22340);

(statearr_22346_22373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (1))){
var state_22344__$1 = state_22344;
var statearr_22347_22374 = state_22344__$1;
(statearr_22347_22374[(2)] = null);

(statearr_22347_22374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (4))){
var inst_22323 = (state_22344[(7)]);
var inst_22323__$1 = (state_22344[(2)]);
var inst_22324 = (inst_22323__$1 == null);
var state_22344__$1 = (function (){var statearr_22348 = state_22344;
(statearr_22348[(7)] = inst_22323__$1);

return statearr_22348;
})();
if(cljs.core.truth_(inst_22324)){
var statearr_22349_22375 = state_22344__$1;
(statearr_22349_22375[(1)] = (5));

} else {
var statearr_22350_22376 = state_22344__$1;
(statearr_22350_22376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (13))){
var state_22344__$1 = state_22344;
var statearr_22351_22377 = state_22344__$1;
(statearr_22351_22377[(2)] = null);

(statearr_22351_22377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (6))){
var inst_22323 = (state_22344[(7)]);
var state_22344__$1 = state_22344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22344__$1,(11),to,inst_22323);
} else {
if((state_val_22345 === (3))){
var inst_22342 = (state_22344[(2)]);
var state_22344__$1 = state_22344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22344__$1,inst_22342);
} else {
if((state_val_22345 === (12))){
var state_22344__$1 = state_22344;
var statearr_22352_22378 = state_22344__$1;
(statearr_22352_22378[(2)] = null);

(statearr_22352_22378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (2))){
var state_22344__$1 = state_22344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22344__$1,(4),from);
} else {
if((state_val_22345 === (11))){
var inst_22333 = (state_22344[(2)]);
var state_22344__$1 = state_22344;
if(cljs.core.truth_(inst_22333)){
var statearr_22353_22379 = state_22344__$1;
(statearr_22353_22379[(1)] = (12));

} else {
var statearr_22354_22380 = state_22344__$1;
(statearr_22354_22380[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (9))){
var state_22344__$1 = state_22344;
var statearr_22355_22381 = state_22344__$1;
(statearr_22355_22381[(2)] = null);

(statearr_22355_22381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (5))){
var state_22344__$1 = state_22344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22356_22382 = state_22344__$1;
(statearr_22356_22382[(1)] = (8));

} else {
var statearr_22357_22383 = state_22344__$1;
(statearr_22357_22383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (14))){
var inst_22338 = (state_22344[(2)]);
var state_22344__$1 = state_22344;
var statearr_22358_22384 = state_22344__$1;
(statearr_22358_22384[(2)] = inst_22338);

(statearr_22358_22384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (10))){
var inst_22330 = (state_22344[(2)]);
var state_22344__$1 = state_22344;
var statearr_22359_22385 = state_22344__$1;
(statearr_22359_22385[(2)] = inst_22330);

(statearr_22359_22385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22345 === (8))){
var inst_22327 = cljs.core.async.close_BANG_.call(null,to);
var state_22344__$1 = state_22344;
var statearr_22360_22386 = state_22344__$1;
(statearr_22360_22386[(2)] = inst_22327);

(statearr_22360_22386[(1)] = (10));


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
});})(c__22205__auto___22372))
;
return ((function (switch__22093__auto__,c__22205__auto___22372){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_22364 = [null,null,null,null,null,null,null,null];
(statearr_22364[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_22364[(1)] = (1));

return statearr_22364;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_22344){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22365){if((e22365 instanceof Object)){
var ex__22097__auto__ = e22365;
var statearr_22366_22387 = state_22344;
(statearr_22366_22387[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22388 = state_22344;
state_22344 = G__22388;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_22344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_22344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___22372))
})();
var state__22207__auto__ = (function (){var statearr_22367 = f__22206__auto__.call(null);
(statearr_22367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___22372);

return statearr_22367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___22372))
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
return (function (p__22572){
var vec__22573 = p__22572;
var v = cljs.core.nth.call(null,vec__22573,(0),null);
var p = cljs.core.nth.call(null,vec__22573,(1),null);
var job = vec__22573;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22205__auto___22755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___22755,res,vec__22573,v,p,job,jobs,results){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___22755,res,vec__22573,v,p,job,jobs,results){
return (function (state_22578){
var state_val_22579 = (state_22578[(1)]);
if((state_val_22579 === (1))){
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22578__$1,(2),res,v);
} else {
if((state_val_22579 === (2))){
var inst_22575 = (state_22578[(2)]);
var inst_22576 = cljs.core.async.close_BANG_.call(null,res);
var state_22578__$1 = (function (){var statearr_22580 = state_22578;
(statearr_22580[(7)] = inst_22575);

return statearr_22580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22578__$1,inst_22576);
} else {
return null;
}
}
});})(c__22205__auto___22755,res,vec__22573,v,p,job,jobs,results))
;
return ((function (switch__22093__auto__,c__22205__auto___22755,res,vec__22573,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0 = (function (){
var statearr_22584 = [null,null,null,null,null,null,null,null];
(statearr_22584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__);

(statearr_22584[(1)] = (1));

return statearr_22584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1 = (function (state_22578){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22585){if((e22585 instanceof Object)){
var ex__22097__auto__ = e22585;
var statearr_22586_22756 = state_22578;
(statearr_22586_22756[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22757 = state_22578;
state_22578 = G__22757;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = function(state_22578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1.call(this,state_22578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___22755,res,vec__22573,v,p,job,jobs,results))
})();
var state__22207__auto__ = (function (){var statearr_22587 = f__22206__auto__.call(null);
(statearr_22587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___22755);

return statearr_22587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___22755,res,vec__22573,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22588){
var vec__22589 = p__22588;
var v = cljs.core.nth.call(null,vec__22589,(0),null);
var p = cljs.core.nth.call(null,vec__22589,(1),null);
var job = vec__22589;
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
var n__19383__auto___22758 = n;
var __22759 = (0);
while(true){
if((__22759 < n__19383__auto___22758)){
var G__22590_22760 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22590_22760) {
case "compute":
var c__22205__auto___22762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22759,c__22205__auto___22762,G__22590_22760,n__19383__auto___22758,jobs,results,process,async){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (__22759,c__22205__auto___22762,G__22590_22760,n__19383__auto___22758,jobs,results,process,async){
return (function (state_22603){
var state_val_22604 = (state_22603[(1)]);
if((state_val_22604 === (1))){
var state_22603__$1 = state_22603;
var statearr_22605_22763 = state_22603__$1;
(statearr_22605_22763[(2)] = null);

(statearr_22605_22763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22604 === (2))){
var state_22603__$1 = state_22603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22603__$1,(4),jobs);
} else {
if((state_val_22604 === (3))){
var inst_22601 = (state_22603[(2)]);
var state_22603__$1 = state_22603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22603__$1,inst_22601);
} else {
if((state_val_22604 === (4))){
var inst_22593 = (state_22603[(2)]);
var inst_22594 = process.call(null,inst_22593);
var state_22603__$1 = state_22603;
if(cljs.core.truth_(inst_22594)){
var statearr_22606_22764 = state_22603__$1;
(statearr_22606_22764[(1)] = (5));

} else {
var statearr_22607_22765 = state_22603__$1;
(statearr_22607_22765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22604 === (5))){
var state_22603__$1 = state_22603;
var statearr_22608_22766 = state_22603__$1;
(statearr_22608_22766[(2)] = null);

(statearr_22608_22766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22604 === (6))){
var state_22603__$1 = state_22603;
var statearr_22609_22767 = state_22603__$1;
(statearr_22609_22767[(2)] = null);

(statearr_22609_22767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22604 === (7))){
var inst_22599 = (state_22603[(2)]);
var state_22603__$1 = state_22603;
var statearr_22610_22768 = state_22603__$1;
(statearr_22610_22768[(2)] = inst_22599);

(statearr_22610_22768[(1)] = (3));


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
});})(__22759,c__22205__auto___22762,G__22590_22760,n__19383__auto___22758,jobs,results,process,async))
;
return ((function (__22759,switch__22093__auto__,c__22205__auto___22762,G__22590_22760,n__19383__auto___22758,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0 = (function (){
var statearr_22614 = [null,null,null,null,null,null,null];
(statearr_22614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__);

(statearr_22614[(1)] = (1));

return statearr_22614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1 = (function (state_22603){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22615){if((e22615 instanceof Object)){
var ex__22097__auto__ = e22615;
var statearr_22616_22769 = state_22603;
(statearr_22616_22769[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22770 = state_22603;
state_22603 = G__22770;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = function(state_22603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1.call(this,state_22603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__;
})()
;})(__22759,switch__22093__auto__,c__22205__auto___22762,G__22590_22760,n__19383__auto___22758,jobs,results,process,async))
})();
var state__22207__auto__ = (function (){var statearr_22617 = f__22206__auto__.call(null);
(statearr_22617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___22762);

return statearr_22617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(__22759,c__22205__auto___22762,G__22590_22760,n__19383__auto___22758,jobs,results,process,async))
);


break;
case "async":
var c__22205__auto___22771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22759,c__22205__auto___22771,G__22590_22760,n__19383__auto___22758,jobs,results,process,async){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (__22759,c__22205__auto___22771,G__22590_22760,n__19383__auto___22758,jobs,results,process,async){
return (function (state_22630){
var state_val_22631 = (state_22630[(1)]);
if((state_val_22631 === (1))){
var state_22630__$1 = state_22630;
var statearr_22632_22772 = state_22630__$1;
(statearr_22632_22772[(2)] = null);

(statearr_22632_22772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22631 === (2))){
var state_22630__$1 = state_22630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22630__$1,(4),jobs);
} else {
if((state_val_22631 === (3))){
var inst_22628 = (state_22630[(2)]);
var state_22630__$1 = state_22630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22630__$1,inst_22628);
} else {
if((state_val_22631 === (4))){
var inst_22620 = (state_22630[(2)]);
var inst_22621 = async.call(null,inst_22620);
var state_22630__$1 = state_22630;
if(cljs.core.truth_(inst_22621)){
var statearr_22633_22773 = state_22630__$1;
(statearr_22633_22773[(1)] = (5));

} else {
var statearr_22634_22774 = state_22630__$1;
(statearr_22634_22774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22631 === (5))){
var state_22630__$1 = state_22630;
var statearr_22635_22775 = state_22630__$1;
(statearr_22635_22775[(2)] = null);

(statearr_22635_22775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22631 === (6))){
var state_22630__$1 = state_22630;
var statearr_22636_22776 = state_22630__$1;
(statearr_22636_22776[(2)] = null);

(statearr_22636_22776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22631 === (7))){
var inst_22626 = (state_22630[(2)]);
var state_22630__$1 = state_22630;
var statearr_22637_22777 = state_22630__$1;
(statearr_22637_22777[(2)] = inst_22626);

(statearr_22637_22777[(1)] = (3));


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
});})(__22759,c__22205__auto___22771,G__22590_22760,n__19383__auto___22758,jobs,results,process,async))
;
return ((function (__22759,switch__22093__auto__,c__22205__auto___22771,G__22590_22760,n__19383__auto___22758,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0 = (function (){
var statearr_22641 = [null,null,null,null,null,null,null];
(statearr_22641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__);

(statearr_22641[(1)] = (1));

return statearr_22641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1 = (function (state_22630){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22642){if((e22642 instanceof Object)){
var ex__22097__auto__ = e22642;
var statearr_22643_22778 = state_22630;
(statearr_22643_22778[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22779 = state_22630;
state_22630 = G__22779;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = function(state_22630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1.call(this,state_22630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__;
})()
;})(__22759,switch__22093__auto__,c__22205__auto___22771,G__22590_22760,n__19383__auto___22758,jobs,results,process,async))
})();
var state__22207__auto__ = (function (){var statearr_22644 = f__22206__auto__.call(null);
(statearr_22644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___22771);

return statearr_22644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(__22759,c__22205__auto___22771,G__22590_22760,n__19383__auto___22758,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22780 = (__22759 + (1));
__22759 = G__22780;
continue;
} else {
}
break;
}

var c__22205__auto___22781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___22781,jobs,results,process,async){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___22781,jobs,results,process,async){
return (function (state_22666){
var state_val_22667 = (state_22666[(1)]);
if((state_val_22667 === (1))){
var state_22666__$1 = state_22666;
var statearr_22668_22782 = state_22666__$1;
(statearr_22668_22782[(2)] = null);

(statearr_22668_22782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (2))){
var state_22666__$1 = state_22666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22666__$1,(4),from);
} else {
if((state_val_22667 === (3))){
var inst_22664 = (state_22666[(2)]);
var state_22666__$1 = state_22666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22666__$1,inst_22664);
} else {
if((state_val_22667 === (4))){
var inst_22647 = (state_22666[(7)]);
var inst_22647__$1 = (state_22666[(2)]);
var inst_22648 = (inst_22647__$1 == null);
var state_22666__$1 = (function (){var statearr_22669 = state_22666;
(statearr_22669[(7)] = inst_22647__$1);

return statearr_22669;
})();
if(cljs.core.truth_(inst_22648)){
var statearr_22670_22783 = state_22666__$1;
(statearr_22670_22783[(1)] = (5));

} else {
var statearr_22671_22784 = state_22666__$1;
(statearr_22671_22784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (5))){
var inst_22650 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22666__$1 = state_22666;
var statearr_22672_22785 = state_22666__$1;
(statearr_22672_22785[(2)] = inst_22650);

(statearr_22672_22785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (6))){
var inst_22647 = (state_22666[(7)]);
var inst_22652 = (state_22666[(8)]);
var inst_22652__$1 = cljs.core.async.chan.call(null,(1));
var inst_22653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22654 = [inst_22647,inst_22652__$1];
var inst_22655 = (new cljs.core.PersistentVector(null,2,(5),inst_22653,inst_22654,null));
var state_22666__$1 = (function (){var statearr_22673 = state_22666;
(statearr_22673[(8)] = inst_22652__$1);

return statearr_22673;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22666__$1,(8),jobs,inst_22655);
} else {
if((state_val_22667 === (7))){
var inst_22662 = (state_22666[(2)]);
var state_22666__$1 = state_22666;
var statearr_22674_22786 = state_22666__$1;
(statearr_22674_22786[(2)] = inst_22662);

(statearr_22674_22786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (8))){
var inst_22652 = (state_22666[(8)]);
var inst_22657 = (state_22666[(2)]);
var state_22666__$1 = (function (){var statearr_22675 = state_22666;
(statearr_22675[(9)] = inst_22657);

return statearr_22675;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22666__$1,(9),results,inst_22652);
} else {
if((state_val_22667 === (9))){
var inst_22659 = (state_22666[(2)]);
var state_22666__$1 = (function (){var statearr_22676 = state_22666;
(statearr_22676[(10)] = inst_22659);

return statearr_22676;
})();
var statearr_22677_22787 = state_22666__$1;
(statearr_22677_22787[(2)] = null);

(statearr_22677_22787[(1)] = (2));


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
});})(c__22205__auto___22781,jobs,results,process,async))
;
return ((function (switch__22093__auto__,c__22205__auto___22781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0 = (function (){
var statearr_22681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__);

(statearr_22681[(1)] = (1));

return statearr_22681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1 = (function (state_22666){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22682){if((e22682 instanceof Object)){
var ex__22097__auto__ = e22682;
var statearr_22683_22788 = state_22666;
(statearr_22683_22788[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22789 = state_22666;
state_22666 = G__22789;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = function(state_22666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1.call(this,state_22666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___22781,jobs,results,process,async))
})();
var state__22207__auto__ = (function (){var statearr_22684 = f__22206__auto__.call(null);
(statearr_22684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___22781);

return statearr_22684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___22781,jobs,results,process,async))
);


var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__,jobs,results,process,async){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__,jobs,results,process,async){
return (function (state_22722){
var state_val_22723 = (state_22722[(1)]);
if((state_val_22723 === (7))){
var inst_22718 = (state_22722[(2)]);
var state_22722__$1 = state_22722;
var statearr_22724_22790 = state_22722__$1;
(statearr_22724_22790[(2)] = inst_22718);

(statearr_22724_22790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (20))){
var state_22722__$1 = state_22722;
var statearr_22725_22791 = state_22722__$1;
(statearr_22725_22791[(2)] = null);

(statearr_22725_22791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (1))){
var state_22722__$1 = state_22722;
var statearr_22726_22792 = state_22722__$1;
(statearr_22726_22792[(2)] = null);

(statearr_22726_22792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (4))){
var inst_22687 = (state_22722[(7)]);
var inst_22687__$1 = (state_22722[(2)]);
var inst_22688 = (inst_22687__$1 == null);
var state_22722__$1 = (function (){var statearr_22727 = state_22722;
(statearr_22727[(7)] = inst_22687__$1);

return statearr_22727;
})();
if(cljs.core.truth_(inst_22688)){
var statearr_22728_22793 = state_22722__$1;
(statearr_22728_22793[(1)] = (5));

} else {
var statearr_22729_22794 = state_22722__$1;
(statearr_22729_22794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (15))){
var inst_22700 = (state_22722[(8)]);
var state_22722__$1 = state_22722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22722__$1,(18),to,inst_22700);
} else {
if((state_val_22723 === (21))){
var inst_22713 = (state_22722[(2)]);
var state_22722__$1 = state_22722;
var statearr_22730_22795 = state_22722__$1;
(statearr_22730_22795[(2)] = inst_22713);

(statearr_22730_22795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (13))){
var inst_22715 = (state_22722[(2)]);
var state_22722__$1 = (function (){var statearr_22731 = state_22722;
(statearr_22731[(9)] = inst_22715);

return statearr_22731;
})();
var statearr_22732_22796 = state_22722__$1;
(statearr_22732_22796[(2)] = null);

(statearr_22732_22796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (6))){
var inst_22687 = (state_22722[(7)]);
var state_22722__$1 = state_22722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22722__$1,(11),inst_22687);
} else {
if((state_val_22723 === (17))){
var inst_22708 = (state_22722[(2)]);
var state_22722__$1 = state_22722;
if(cljs.core.truth_(inst_22708)){
var statearr_22733_22797 = state_22722__$1;
(statearr_22733_22797[(1)] = (19));

} else {
var statearr_22734_22798 = state_22722__$1;
(statearr_22734_22798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (3))){
var inst_22720 = (state_22722[(2)]);
var state_22722__$1 = state_22722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22722__$1,inst_22720);
} else {
if((state_val_22723 === (12))){
var inst_22697 = (state_22722[(10)]);
var state_22722__$1 = state_22722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22722__$1,(14),inst_22697);
} else {
if((state_val_22723 === (2))){
var state_22722__$1 = state_22722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22722__$1,(4),results);
} else {
if((state_val_22723 === (19))){
var state_22722__$1 = state_22722;
var statearr_22735_22799 = state_22722__$1;
(statearr_22735_22799[(2)] = null);

(statearr_22735_22799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (11))){
var inst_22697 = (state_22722[(2)]);
var state_22722__$1 = (function (){var statearr_22736 = state_22722;
(statearr_22736[(10)] = inst_22697);

return statearr_22736;
})();
var statearr_22737_22800 = state_22722__$1;
(statearr_22737_22800[(2)] = null);

(statearr_22737_22800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (9))){
var state_22722__$1 = state_22722;
var statearr_22738_22801 = state_22722__$1;
(statearr_22738_22801[(2)] = null);

(statearr_22738_22801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (5))){
var state_22722__$1 = state_22722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22739_22802 = state_22722__$1;
(statearr_22739_22802[(1)] = (8));

} else {
var statearr_22740_22803 = state_22722__$1;
(statearr_22740_22803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (14))){
var inst_22702 = (state_22722[(11)]);
var inst_22700 = (state_22722[(8)]);
var inst_22700__$1 = (state_22722[(2)]);
var inst_22701 = (inst_22700__$1 == null);
var inst_22702__$1 = cljs.core.not.call(null,inst_22701);
var state_22722__$1 = (function (){var statearr_22741 = state_22722;
(statearr_22741[(11)] = inst_22702__$1);

(statearr_22741[(8)] = inst_22700__$1);

return statearr_22741;
})();
if(inst_22702__$1){
var statearr_22742_22804 = state_22722__$1;
(statearr_22742_22804[(1)] = (15));

} else {
var statearr_22743_22805 = state_22722__$1;
(statearr_22743_22805[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (16))){
var inst_22702 = (state_22722[(11)]);
var state_22722__$1 = state_22722;
var statearr_22744_22806 = state_22722__$1;
(statearr_22744_22806[(2)] = inst_22702);

(statearr_22744_22806[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (10))){
var inst_22694 = (state_22722[(2)]);
var state_22722__$1 = state_22722;
var statearr_22745_22807 = state_22722__$1;
(statearr_22745_22807[(2)] = inst_22694);

(statearr_22745_22807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (18))){
var inst_22705 = (state_22722[(2)]);
var state_22722__$1 = state_22722;
var statearr_22746_22808 = state_22722__$1;
(statearr_22746_22808[(2)] = inst_22705);

(statearr_22746_22808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22723 === (8))){
var inst_22691 = cljs.core.async.close_BANG_.call(null,to);
var state_22722__$1 = state_22722;
var statearr_22747_22809 = state_22722__$1;
(statearr_22747_22809[(2)] = inst_22691);

(statearr_22747_22809[(1)] = (10));


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
});})(c__22205__auto__,jobs,results,process,async))
;
return ((function (switch__22093__auto__,c__22205__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0 = (function (){
var statearr_22751 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__);

(statearr_22751[(1)] = (1));

return statearr_22751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1 = (function (state_22722){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22752){if((e22752 instanceof Object)){
var ex__22097__auto__ = e22752;
var statearr_22753_22810 = state_22722;
(statearr_22753_22810[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22811 = state_22722;
state_22722 = G__22811;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__ = function(state_22722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1.call(this,state_22722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__,jobs,results,process,async))
})();
var state__22207__auto__ = (function (){var statearr_22754 = f__22206__auto__.call(null);
(statearr_22754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_22754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__,jobs,results,process,async))
);

return c__22205__auto__;
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
var args22812 = [];
var len__19538__auto___22815 = arguments.length;
var i__19539__auto___22816 = (0);
while(true){
if((i__19539__auto___22816 < len__19538__auto___22815)){
args22812.push((arguments[i__19539__auto___22816]));

var G__22817 = (i__19539__auto___22816 + (1));
i__19539__auto___22816 = G__22817;
continue;
} else {
}
break;
}

var G__22814 = args22812.length;
switch (G__22814) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22812.length)].join('')));

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
var args22819 = [];
var len__19538__auto___22822 = arguments.length;
var i__19539__auto___22823 = (0);
while(true){
if((i__19539__auto___22823 < len__19538__auto___22822)){
args22819.push((arguments[i__19539__auto___22823]));

var G__22824 = (i__19539__auto___22823 + (1));
i__19539__auto___22823 = G__22824;
continue;
} else {
}
break;
}

var G__22821 = args22819.length;
switch (G__22821) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22819.length)].join('')));

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
var args22826 = [];
var len__19538__auto___22879 = arguments.length;
var i__19539__auto___22880 = (0);
while(true){
if((i__19539__auto___22880 < len__19538__auto___22879)){
args22826.push((arguments[i__19539__auto___22880]));

var G__22881 = (i__19539__auto___22880 + (1));
i__19539__auto___22880 = G__22881;
continue;
} else {
}
break;
}

var G__22828 = args22826.length;
switch (G__22828) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22826.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22205__auto___22883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___22883,tc,fc){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___22883,tc,fc){
return (function (state_22854){
var state_val_22855 = (state_22854[(1)]);
if((state_val_22855 === (7))){
var inst_22850 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
var statearr_22856_22884 = state_22854__$1;
(statearr_22856_22884[(2)] = inst_22850);

(statearr_22856_22884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (1))){
var state_22854__$1 = state_22854;
var statearr_22857_22885 = state_22854__$1;
(statearr_22857_22885[(2)] = null);

(statearr_22857_22885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (4))){
var inst_22831 = (state_22854[(7)]);
var inst_22831__$1 = (state_22854[(2)]);
var inst_22832 = (inst_22831__$1 == null);
var state_22854__$1 = (function (){var statearr_22858 = state_22854;
(statearr_22858[(7)] = inst_22831__$1);

return statearr_22858;
})();
if(cljs.core.truth_(inst_22832)){
var statearr_22859_22886 = state_22854__$1;
(statearr_22859_22886[(1)] = (5));

} else {
var statearr_22860_22887 = state_22854__$1;
(statearr_22860_22887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (13))){
var state_22854__$1 = state_22854;
var statearr_22861_22888 = state_22854__$1;
(statearr_22861_22888[(2)] = null);

(statearr_22861_22888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (6))){
var inst_22831 = (state_22854[(7)]);
var inst_22837 = p.call(null,inst_22831);
var state_22854__$1 = state_22854;
if(cljs.core.truth_(inst_22837)){
var statearr_22862_22889 = state_22854__$1;
(statearr_22862_22889[(1)] = (9));

} else {
var statearr_22863_22890 = state_22854__$1;
(statearr_22863_22890[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (3))){
var inst_22852 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22854__$1,inst_22852);
} else {
if((state_val_22855 === (12))){
var state_22854__$1 = state_22854;
var statearr_22864_22891 = state_22854__$1;
(statearr_22864_22891[(2)] = null);

(statearr_22864_22891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (2))){
var state_22854__$1 = state_22854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22854__$1,(4),ch);
} else {
if((state_val_22855 === (11))){
var inst_22831 = (state_22854[(7)]);
var inst_22841 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22854__$1,(8),inst_22841,inst_22831);
} else {
if((state_val_22855 === (9))){
var state_22854__$1 = state_22854;
var statearr_22865_22892 = state_22854__$1;
(statearr_22865_22892[(2)] = tc);

(statearr_22865_22892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (5))){
var inst_22834 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22835 = cljs.core.async.close_BANG_.call(null,fc);
var state_22854__$1 = (function (){var statearr_22866 = state_22854;
(statearr_22866[(8)] = inst_22834);

return statearr_22866;
})();
var statearr_22867_22893 = state_22854__$1;
(statearr_22867_22893[(2)] = inst_22835);

(statearr_22867_22893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (14))){
var inst_22848 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
var statearr_22868_22894 = state_22854__$1;
(statearr_22868_22894[(2)] = inst_22848);

(statearr_22868_22894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (10))){
var state_22854__$1 = state_22854;
var statearr_22869_22895 = state_22854__$1;
(statearr_22869_22895[(2)] = fc);

(statearr_22869_22895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22855 === (8))){
var inst_22843 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
if(cljs.core.truth_(inst_22843)){
var statearr_22870_22896 = state_22854__$1;
(statearr_22870_22896[(1)] = (12));

} else {
var statearr_22871_22897 = state_22854__$1;
(statearr_22871_22897[(1)] = (13));

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
});})(c__22205__auto___22883,tc,fc))
;
return ((function (switch__22093__auto__,c__22205__auto___22883,tc,fc){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_22875 = [null,null,null,null,null,null,null,null,null];
(statearr_22875[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_22875[(1)] = (1));

return statearr_22875;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_22854){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22876){if((e22876 instanceof Object)){
var ex__22097__auto__ = e22876;
var statearr_22877_22898 = state_22854;
(statearr_22877_22898[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22899 = state_22854;
state_22854 = G__22899;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_22854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_22854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___22883,tc,fc))
})();
var state__22207__auto__ = (function (){var statearr_22878 = f__22206__auto__.call(null);
(statearr_22878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___22883);

return statearr_22878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___22883,tc,fc))
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
var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__){
return (function (state_22963){
var state_val_22964 = (state_22963[(1)]);
if((state_val_22964 === (7))){
var inst_22959 = (state_22963[(2)]);
var state_22963__$1 = state_22963;
var statearr_22965_22986 = state_22963__$1;
(statearr_22965_22986[(2)] = inst_22959);

(statearr_22965_22986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22964 === (1))){
var inst_22943 = init;
var state_22963__$1 = (function (){var statearr_22966 = state_22963;
(statearr_22966[(7)] = inst_22943);

return statearr_22966;
})();
var statearr_22967_22987 = state_22963__$1;
(statearr_22967_22987[(2)] = null);

(statearr_22967_22987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22964 === (4))){
var inst_22946 = (state_22963[(8)]);
var inst_22946__$1 = (state_22963[(2)]);
var inst_22947 = (inst_22946__$1 == null);
var state_22963__$1 = (function (){var statearr_22968 = state_22963;
(statearr_22968[(8)] = inst_22946__$1);

return statearr_22968;
})();
if(cljs.core.truth_(inst_22947)){
var statearr_22969_22988 = state_22963__$1;
(statearr_22969_22988[(1)] = (5));

} else {
var statearr_22970_22989 = state_22963__$1;
(statearr_22970_22989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22964 === (6))){
var inst_22946 = (state_22963[(8)]);
var inst_22950 = (state_22963[(9)]);
var inst_22943 = (state_22963[(7)]);
var inst_22950__$1 = f.call(null,inst_22943,inst_22946);
var inst_22951 = cljs.core.reduced_QMARK_.call(null,inst_22950__$1);
var state_22963__$1 = (function (){var statearr_22971 = state_22963;
(statearr_22971[(9)] = inst_22950__$1);

return statearr_22971;
})();
if(inst_22951){
var statearr_22972_22990 = state_22963__$1;
(statearr_22972_22990[(1)] = (8));

} else {
var statearr_22973_22991 = state_22963__$1;
(statearr_22973_22991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22964 === (3))){
var inst_22961 = (state_22963[(2)]);
var state_22963__$1 = state_22963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22963__$1,inst_22961);
} else {
if((state_val_22964 === (2))){
var state_22963__$1 = state_22963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22963__$1,(4),ch);
} else {
if((state_val_22964 === (9))){
var inst_22950 = (state_22963[(9)]);
var inst_22943 = inst_22950;
var state_22963__$1 = (function (){var statearr_22974 = state_22963;
(statearr_22974[(7)] = inst_22943);

return statearr_22974;
})();
var statearr_22975_22992 = state_22963__$1;
(statearr_22975_22992[(2)] = null);

(statearr_22975_22992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22964 === (5))){
var inst_22943 = (state_22963[(7)]);
var state_22963__$1 = state_22963;
var statearr_22976_22993 = state_22963__$1;
(statearr_22976_22993[(2)] = inst_22943);

(statearr_22976_22993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22964 === (10))){
var inst_22957 = (state_22963[(2)]);
var state_22963__$1 = state_22963;
var statearr_22977_22994 = state_22963__$1;
(statearr_22977_22994[(2)] = inst_22957);

(statearr_22977_22994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22964 === (8))){
var inst_22950 = (state_22963[(9)]);
var inst_22953 = cljs.core.deref.call(null,inst_22950);
var state_22963__$1 = state_22963;
var statearr_22978_22995 = state_22963__$1;
(statearr_22978_22995[(2)] = inst_22953);

(statearr_22978_22995[(1)] = (10));


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
});})(c__22205__auto__))
;
return ((function (switch__22093__auto__,c__22205__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22094__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22094__auto____0 = (function (){
var statearr_22982 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22982[(0)] = cljs$core$async$reduce_$_state_machine__22094__auto__);

(statearr_22982[(1)] = (1));

return statearr_22982;
});
var cljs$core$async$reduce_$_state_machine__22094__auto____1 = (function (state_22963){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_22963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e22983){if((e22983 instanceof Object)){
var ex__22097__auto__ = e22983;
var statearr_22984_22996 = state_22963;
(statearr_22984_22996[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22997 = state_22963;
state_22963 = G__22997;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22094__auto__ = function(state_22963){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22094__auto____1.call(this,state_22963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22094__auto____0;
cljs$core$async$reduce_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22094__auto____1;
return cljs$core$async$reduce_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__))
})();
var state__22207__auto__ = (function (){var statearr_22985 = f__22206__auto__.call(null);
(statearr_22985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__))
);

return c__22205__auto__;
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
var args22998 = [];
var len__19538__auto___23050 = arguments.length;
var i__19539__auto___23051 = (0);
while(true){
if((i__19539__auto___23051 < len__19538__auto___23050)){
args22998.push((arguments[i__19539__auto___23051]));

var G__23052 = (i__19539__auto___23051 + (1));
i__19539__auto___23051 = G__23052;
continue;
} else {
}
break;
}

var G__23000 = args22998.length;
switch (G__23000) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22998.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__){
return (function (state_23025){
var state_val_23026 = (state_23025[(1)]);
if((state_val_23026 === (7))){
var inst_23007 = (state_23025[(2)]);
var state_23025__$1 = state_23025;
var statearr_23027_23054 = state_23025__$1;
(statearr_23027_23054[(2)] = inst_23007);

(statearr_23027_23054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (1))){
var inst_23001 = cljs.core.seq.call(null,coll);
var inst_23002 = inst_23001;
var state_23025__$1 = (function (){var statearr_23028 = state_23025;
(statearr_23028[(7)] = inst_23002);

return statearr_23028;
})();
var statearr_23029_23055 = state_23025__$1;
(statearr_23029_23055[(2)] = null);

(statearr_23029_23055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (4))){
var inst_23002 = (state_23025[(7)]);
var inst_23005 = cljs.core.first.call(null,inst_23002);
var state_23025__$1 = state_23025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23025__$1,(7),ch,inst_23005);
} else {
if((state_val_23026 === (13))){
var inst_23019 = (state_23025[(2)]);
var state_23025__$1 = state_23025;
var statearr_23030_23056 = state_23025__$1;
(statearr_23030_23056[(2)] = inst_23019);

(statearr_23030_23056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (6))){
var inst_23010 = (state_23025[(2)]);
var state_23025__$1 = state_23025;
if(cljs.core.truth_(inst_23010)){
var statearr_23031_23057 = state_23025__$1;
(statearr_23031_23057[(1)] = (8));

} else {
var statearr_23032_23058 = state_23025__$1;
(statearr_23032_23058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (3))){
var inst_23023 = (state_23025[(2)]);
var state_23025__$1 = state_23025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23025__$1,inst_23023);
} else {
if((state_val_23026 === (12))){
var state_23025__$1 = state_23025;
var statearr_23033_23059 = state_23025__$1;
(statearr_23033_23059[(2)] = null);

(statearr_23033_23059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (2))){
var inst_23002 = (state_23025[(7)]);
var state_23025__$1 = state_23025;
if(cljs.core.truth_(inst_23002)){
var statearr_23034_23060 = state_23025__$1;
(statearr_23034_23060[(1)] = (4));

} else {
var statearr_23035_23061 = state_23025__$1;
(statearr_23035_23061[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (11))){
var inst_23016 = cljs.core.async.close_BANG_.call(null,ch);
var state_23025__$1 = state_23025;
var statearr_23036_23062 = state_23025__$1;
(statearr_23036_23062[(2)] = inst_23016);

(statearr_23036_23062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (9))){
var state_23025__$1 = state_23025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23037_23063 = state_23025__$1;
(statearr_23037_23063[(1)] = (11));

} else {
var statearr_23038_23064 = state_23025__$1;
(statearr_23038_23064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (5))){
var inst_23002 = (state_23025[(7)]);
var state_23025__$1 = state_23025;
var statearr_23039_23065 = state_23025__$1;
(statearr_23039_23065[(2)] = inst_23002);

(statearr_23039_23065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (10))){
var inst_23021 = (state_23025[(2)]);
var state_23025__$1 = state_23025;
var statearr_23040_23066 = state_23025__$1;
(statearr_23040_23066[(2)] = inst_23021);

(statearr_23040_23066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (8))){
var inst_23002 = (state_23025[(7)]);
var inst_23012 = cljs.core.next.call(null,inst_23002);
var inst_23002__$1 = inst_23012;
var state_23025__$1 = (function (){var statearr_23041 = state_23025;
(statearr_23041[(7)] = inst_23002__$1);

return statearr_23041;
})();
var statearr_23042_23067 = state_23025__$1;
(statearr_23042_23067[(2)] = null);

(statearr_23042_23067[(1)] = (2));


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
});})(c__22205__auto__))
;
return ((function (switch__22093__auto__,c__22205__auto__){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_23046 = [null,null,null,null,null,null,null,null];
(statearr_23046[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_23046[(1)] = (1));

return statearr_23046;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_23025){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_23025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e23047){if((e23047 instanceof Object)){
var ex__22097__auto__ = e23047;
var statearr_23048_23068 = state_23025;
(statearr_23048_23068[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23069 = state_23025;
state_23025 = G__23069;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_23025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_23025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__))
})();
var state__22207__auto__ = (function (){var statearr_23049 = f__22206__auto__.call(null);
(statearr_23049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_23049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__))
);

return c__22205__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23291 = (function (mult,ch,cs,meta23292){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23292 = meta23292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23293,meta23292__$1){
var self__ = this;
var _23293__$1 = this;
return (new cljs.core.async.t_cljs$core$async23291(self__.mult,self__.ch,self__.cs,meta23292__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23293){
var self__ = this;
var _23293__$1 = this;
return self__.meta23292;
});})(cs))
;

cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23291.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23291.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23292","meta23292",-1861343533,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23291";

cljs.core.async.t_cljs$core$async23291.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23291");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23291 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23291(mult__$1,ch__$1,cs__$1,meta23292){
return (new cljs.core.async.t_cljs$core$async23291(mult__$1,ch__$1,cs__$1,meta23292));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23291(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22205__auto___23512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___23512,cs,m,dchan,dctr,done){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___23512,cs,m,dchan,dctr,done){
return (function (state_23424){
var state_val_23425 = (state_23424[(1)]);
if((state_val_23425 === (7))){
var inst_23420 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23426_23513 = state_23424__$1;
(statearr_23426_23513[(2)] = inst_23420);

(statearr_23426_23513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (20))){
var inst_23325 = (state_23424[(7)]);
var inst_23335 = cljs.core.first.call(null,inst_23325);
var inst_23336 = cljs.core.nth.call(null,inst_23335,(0),null);
var inst_23337 = cljs.core.nth.call(null,inst_23335,(1),null);
var state_23424__$1 = (function (){var statearr_23427 = state_23424;
(statearr_23427[(8)] = inst_23336);

return statearr_23427;
})();
if(cljs.core.truth_(inst_23337)){
var statearr_23428_23514 = state_23424__$1;
(statearr_23428_23514[(1)] = (22));

} else {
var statearr_23429_23515 = state_23424__$1;
(statearr_23429_23515[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (27))){
var inst_23367 = (state_23424[(9)]);
var inst_23296 = (state_23424[(10)]);
var inst_23365 = (state_23424[(11)]);
var inst_23372 = (state_23424[(12)]);
var inst_23372__$1 = cljs.core._nth.call(null,inst_23365,inst_23367);
var inst_23373 = cljs.core.async.put_BANG_.call(null,inst_23372__$1,inst_23296,done);
var state_23424__$1 = (function (){var statearr_23430 = state_23424;
(statearr_23430[(12)] = inst_23372__$1);

return statearr_23430;
})();
if(cljs.core.truth_(inst_23373)){
var statearr_23431_23516 = state_23424__$1;
(statearr_23431_23516[(1)] = (30));

} else {
var statearr_23432_23517 = state_23424__$1;
(statearr_23432_23517[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (1))){
var state_23424__$1 = state_23424;
var statearr_23433_23518 = state_23424__$1;
(statearr_23433_23518[(2)] = null);

(statearr_23433_23518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (24))){
var inst_23325 = (state_23424[(7)]);
var inst_23342 = (state_23424[(2)]);
var inst_23343 = cljs.core.next.call(null,inst_23325);
var inst_23305 = inst_23343;
var inst_23306 = null;
var inst_23307 = (0);
var inst_23308 = (0);
var state_23424__$1 = (function (){var statearr_23434 = state_23424;
(statearr_23434[(13)] = inst_23307);

(statearr_23434[(14)] = inst_23342);

(statearr_23434[(15)] = inst_23308);

(statearr_23434[(16)] = inst_23306);

(statearr_23434[(17)] = inst_23305);

return statearr_23434;
})();
var statearr_23435_23519 = state_23424__$1;
(statearr_23435_23519[(2)] = null);

(statearr_23435_23519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (39))){
var state_23424__$1 = state_23424;
var statearr_23439_23520 = state_23424__$1;
(statearr_23439_23520[(2)] = null);

(statearr_23439_23520[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (4))){
var inst_23296 = (state_23424[(10)]);
var inst_23296__$1 = (state_23424[(2)]);
var inst_23297 = (inst_23296__$1 == null);
var state_23424__$1 = (function (){var statearr_23440 = state_23424;
(statearr_23440[(10)] = inst_23296__$1);

return statearr_23440;
})();
if(cljs.core.truth_(inst_23297)){
var statearr_23441_23521 = state_23424__$1;
(statearr_23441_23521[(1)] = (5));

} else {
var statearr_23442_23522 = state_23424__$1;
(statearr_23442_23522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (15))){
var inst_23307 = (state_23424[(13)]);
var inst_23308 = (state_23424[(15)]);
var inst_23306 = (state_23424[(16)]);
var inst_23305 = (state_23424[(17)]);
var inst_23321 = (state_23424[(2)]);
var inst_23322 = (inst_23308 + (1));
var tmp23436 = inst_23307;
var tmp23437 = inst_23306;
var tmp23438 = inst_23305;
var inst_23305__$1 = tmp23438;
var inst_23306__$1 = tmp23437;
var inst_23307__$1 = tmp23436;
var inst_23308__$1 = inst_23322;
var state_23424__$1 = (function (){var statearr_23443 = state_23424;
(statearr_23443[(13)] = inst_23307__$1);

(statearr_23443[(18)] = inst_23321);

(statearr_23443[(15)] = inst_23308__$1);

(statearr_23443[(16)] = inst_23306__$1);

(statearr_23443[(17)] = inst_23305__$1);

return statearr_23443;
})();
var statearr_23444_23523 = state_23424__$1;
(statearr_23444_23523[(2)] = null);

(statearr_23444_23523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (21))){
var inst_23346 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23448_23524 = state_23424__$1;
(statearr_23448_23524[(2)] = inst_23346);

(statearr_23448_23524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (31))){
var inst_23372 = (state_23424[(12)]);
var inst_23376 = done.call(null,null);
var inst_23377 = cljs.core.async.untap_STAR_.call(null,m,inst_23372);
var state_23424__$1 = (function (){var statearr_23449 = state_23424;
(statearr_23449[(19)] = inst_23376);

return statearr_23449;
})();
var statearr_23450_23525 = state_23424__$1;
(statearr_23450_23525[(2)] = inst_23377);

(statearr_23450_23525[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (32))){
var inst_23364 = (state_23424[(20)]);
var inst_23367 = (state_23424[(9)]);
var inst_23365 = (state_23424[(11)]);
var inst_23366 = (state_23424[(21)]);
var inst_23379 = (state_23424[(2)]);
var inst_23380 = (inst_23367 + (1));
var tmp23445 = inst_23364;
var tmp23446 = inst_23365;
var tmp23447 = inst_23366;
var inst_23364__$1 = tmp23445;
var inst_23365__$1 = tmp23446;
var inst_23366__$1 = tmp23447;
var inst_23367__$1 = inst_23380;
var state_23424__$1 = (function (){var statearr_23451 = state_23424;
(statearr_23451[(20)] = inst_23364__$1);

(statearr_23451[(22)] = inst_23379);

(statearr_23451[(9)] = inst_23367__$1);

(statearr_23451[(11)] = inst_23365__$1);

(statearr_23451[(21)] = inst_23366__$1);

return statearr_23451;
})();
var statearr_23452_23526 = state_23424__$1;
(statearr_23452_23526[(2)] = null);

(statearr_23452_23526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (40))){
var inst_23392 = (state_23424[(23)]);
var inst_23396 = done.call(null,null);
var inst_23397 = cljs.core.async.untap_STAR_.call(null,m,inst_23392);
var state_23424__$1 = (function (){var statearr_23453 = state_23424;
(statearr_23453[(24)] = inst_23396);

return statearr_23453;
})();
var statearr_23454_23527 = state_23424__$1;
(statearr_23454_23527[(2)] = inst_23397);

(statearr_23454_23527[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (33))){
var inst_23383 = (state_23424[(25)]);
var inst_23385 = cljs.core.chunked_seq_QMARK_.call(null,inst_23383);
var state_23424__$1 = state_23424;
if(inst_23385){
var statearr_23455_23528 = state_23424__$1;
(statearr_23455_23528[(1)] = (36));

} else {
var statearr_23456_23529 = state_23424__$1;
(statearr_23456_23529[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (13))){
var inst_23315 = (state_23424[(26)]);
var inst_23318 = cljs.core.async.close_BANG_.call(null,inst_23315);
var state_23424__$1 = state_23424;
var statearr_23457_23530 = state_23424__$1;
(statearr_23457_23530[(2)] = inst_23318);

(statearr_23457_23530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (22))){
var inst_23336 = (state_23424[(8)]);
var inst_23339 = cljs.core.async.close_BANG_.call(null,inst_23336);
var state_23424__$1 = state_23424;
var statearr_23458_23531 = state_23424__$1;
(statearr_23458_23531[(2)] = inst_23339);

(statearr_23458_23531[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (36))){
var inst_23383 = (state_23424[(25)]);
var inst_23387 = cljs.core.chunk_first.call(null,inst_23383);
var inst_23388 = cljs.core.chunk_rest.call(null,inst_23383);
var inst_23389 = cljs.core.count.call(null,inst_23387);
var inst_23364 = inst_23388;
var inst_23365 = inst_23387;
var inst_23366 = inst_23389;
var inst_23367 = (0);
var state_23424__$1 = (function (){var statearr_23459 = state_23424;
(statearr_23459[(20)] = inst_23364);

(statearr_23459[(9)] = inst_23367);

(statearr_23459[(11)] = inst_23365);

(statearr_23459[(21)] = inst_23366);

return statearr_23459;
})();
var statearr_23460_23532 = state_23424__$1;
(statearr_23460_23532[(2)] = null);

(statearr_23460_23532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (41))){
var inst_23383 = (state_23424[(25)]);
var inst_23399 = (state_23424[(2)]);
var inst_23400 = cljs.core.next.call(null,inst_23383);
var inst_23364 = inst_23400;
var inst_23365 = null;
var inst_23366 = (0);
var inst_23367 = (0);
var state_23424__$1 = (function (){var statearr_23461 = state_23424;
(statearr_23461[(20)] = inst_23364);

(statearr_23461[(9)] = inst_23367);

(statearr_23461[(11)] = inst_23365);

(statearr_23461[(21)] = inst_23366);

(statearr_23461[(27)] = inst_23399);

return statearr_23461;
})();
var statearr_23462_23533 = state_23424__$1;
(statearr_23462_23533[(2)] = null);

(statearr_23462_23533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (43))){
var state_23424__$1 = state_23424;
var statearr_23463_23534 = state_23424__$1;
(statearr_23463_23534[(2)] = null);

(statearr_23463_23534[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (29))){
var inst_23408 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23464_23535 = state_23424__$1;
(statearr_23464_23535[(2)] = inst_23408);

(statearr_23464_23535[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (44))){
var inst_23417 = (state_23424[(2)]);
var state_23424__$1 = (function (){var statearr_23465 = state_23424;
(statearr_23465[(28)] = inst_23417);

return statearr_23465;
})();
var statearr_23466_23536 = state_23424__$1;
(statearr_23466_23536[(2)] = null);

(statearr_23466_23536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (6))){
var inst_23356 = (state_23424[(29)]);
var inst_23355 = cljs.core.deref.call(null,cs);
var inst_23356__$1 = cljs.core.keys.call(null,inst_23355);
var inst_23357 = cljs.core.count.call(null,inst_23356__$1);
var inst_23358 = cljs.core.reset_BANG_.call(null,dctr,inst_23357);
var inst_23363 = cljs.core.seq.call(null,inst_23356__$1);
var inst_23364 = inst_23363;
var inst_23365 = null;
var inst_23366 = (0);
var inst_23367 = (0);
var state_23424__$1 = (function (){var statearr_23467 = state_23424;
(statearr_23467[(20)] = inst_23364);

(statearr_23467[(9)] = inst_23367);

(statearr_23467[(11)] = inst_23365);

(statearr_23467[(29)] = inst_23356__$1);

(statearr_23467[(30)] = inst_23358);

(statearr_23467[(21)] = inst_23366);

return statearr_23467;
})();
var statearr_23468_23537 = state_23424__$1;
(statearr_23468_23537[(2)] = null);

(statearr_23468_23537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (28))){
var inst_23364 = (state_23424[(20)]);
var inst_23383 = (state_23424[(25)]);
var inst_23383__$1 = cljs.core.seq.call(null,inst_23364);
var state_23424__$1 = (function (){var statearr_23469 = state_23424;
(statearr_23469[(25)] = inst_23383__$1);

return statearr_23469;
})();
if(inst_23383__$1){
var statearr_23470_23538 = state_23424__$1;
(statearr_23470_23538[(1)] = (33));

} else {
var statearr_23471_23539 = state_23424__$1;
(statearr_23471_23539[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (25))){
var inst_23367 = (state_23424[(9)]);
var inst_23366 = (state_23424[(21)]);
var inst_23369 = (inst_23367 < inst_23366);
var inst_23370 = inst_23369;
var state_23424__$1 = state_23424;
if(cljs.core.truth_(inst_23370)){
var statearr_23472_23540 = state_23424__$1;
(statearr_23472_23540[(1)] = (27));

} else {
var statearr_23473_23541 = state_23424__$1;
(statearr_23473_23541[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (34))){
var state_23424__$1 = state_23424;
var statearr_23474_23542 = state_23424__$1;
(statearr_23474_23542[(2)] = null);

(statearr_23474_23542[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (17))){
var state_23424__$1 = state_23424;
var statearr_23475_23543 = state_23424__$1;
(statearr_23475_23543[(2)] = null);

(statearr_23475_23543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (3))){
var inst_23422 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23424__$1,inst_23422);
} else {
if((state_val_23425 === (12))){
var inst_23351 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23476_23544 = state_23424__$1;
(statearr_23476_23544[(2)] = inst_23351);

(statearr_23476_23544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (2))){
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23424__$1,(4),ch);
} else {
if((state_val_23425 === (23))){
var state_23424__$1 = state_23424;
var statearr_23477_23545 = state_23424__$1;
(statearr_23477_23545[(2)] = null);

(statearr_23477_23545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (35))){
var inst_23406 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23478_23546 = state_23424__$1;
(statearr_23478_23546[(2)] = inst_23406);

(statearr_23478_23546[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (19))){
var inst_23325 = (state_23424[(7)]);
var inst_23329 = cljs.core.chunk_first.call(null,inst_23325);
var inst_23330 = cljs.core.chunk_rest.call(null,inst_23325);
var inst_23331 = cljs.core.count.call(null,inst_23329);
var inst_23305 = inst_23330;
var inst_23306 = inst_23329;
var inst_23307 = inst_23331;
var inst_23308 = (0);
var state_23424__$1 = (function (){var statearr_23479 = state_23424;
(statearr_23479[(13)] = inst_23307);

(statearr_23479[(15)] = inst_23308);

(statearr_23479[(16)] = inst_23306);

(statearr_23479[(17)] = inst_23305);

return statearr_23479;
})();
var statearr_23480_23547 = state_23424__$1;
(statearr_23480_23547[(2)] = null);

(statearr_23480_23547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (11))){
var inst_23305 = (state_23424[(17)]);
var inst_23325 = (state_23424[(7)]);
var inst_23325__$1 = cljs.core.seq.call(null,inst_23305);
var state_23424__$1 = (function (){var statearr_23481 = state_23424;
(statearr_23481[(7)] = inst_23325__$1);

return statearr_23481;
})();
if(inst_23325__$1){
var statearr_23482_23548 = state_23424__$1;
(statearr_23482_23548[(1)] = (16));

} else {
var statearr_23483_23549 = state_23424__$1;
(statearr_23483_23549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (9))){
var inst_23353 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23484_23550 = state_23424__$1;
(statearr_23484_23550[(2)] = inst_23353);

(statearr_23484_23550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (5))){
var inst_23303 = cljs.core.deref.call(null,cs);
var inst_23304 = cljs.core.seq.call(null,inst_23303);
var inst_23305 = inst_23304;
var inst_23306 = null;
var inst_23307 = (0);
var inst_23308 = (0);
var state_23424__$1 = (function (){var statearr_23485 = state_23424;
(statearr_23485[(13)] = inst_23307);

(statearr_23485[(15)] = inst_23308);

(statearr_23485[(16)] = inst_23306);

(statearr_23485[(17)] = inst_23305);

return statearr_23485;
})();
var statearr_23486_23551 = state_23424__$1;
(statearr_23486_23551[(2)] = null);

(statearr_23486_23551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (14))){
var state_23424__$1 = state_23424;
var statearr_23487_23552 = state_23424__$1;
(statearr_23487_23552[(2)] = null);

(statearr_23487_23552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (45))){
var inst_23414 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23488_23553 = state_23424__$1;
(statearr_23488_23553[(2)] = inst_23414);

(statearr_23488_23553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (26))){
var inst_23356 = (state_23424[(29)]);
var inst_23410 = (state_23424[(2)]);
var inst_23411 = cljs.core.seq.call(null,inst_23356);
var state_23424__$1 = (function (){var statearr_23489 = state_23424;
(statearr_23489[(31)] = inst_23410);

return statearr_23489;
})();
if(inst_23411){
var statearr_23490_23554 = state_23424__$1;
(statearr_23490_23554[(1)] = (42));

} else {
var statearr_23491_23555 = state_23424__$1;
(statearr_23491_23555[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (16))){
var inst_23325 = (state_23424[(7)]);
var inst_23327 = cljs.core.chunked_seq_QMARK_.call(null,inst_23325);
var state_23424__$1 = state_23424;
if(inst_23327){
var statearr_23492_23556 = state_23424__$1;
(statearr_23492_23556[(1)] = (19));

} else {
var statearr_23493_23557 = state_23424__$1;
(statearr_23493_23557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (38))){
var inst_23403 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23494_23558 = state_23424__$1;
(statearr_23494_23558[(2)] = inst_23403);

(statearr_23494_23558[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (30))){
var state_23424__$1 = state_23424;
var statearr_23495_23559 = state_23424__$1;
(statearr_23495_23559[(2)] = null);

(statearr_23495_23559[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (10))){
var inst_23308 = (state_23424[(15)]);
var inst_23306 = (state_23424[(16)]);
var inst_23314 = cljs.core._nth.call(null,inst_23306,inst_23308);
var inst_23315 = cljs.core.nth.call(null,inst_23314,(0),null);
var inst_23316 = cljs.core.nth.call(null,inst_23314,(1),null);
var state_23424__$1 = (function (){var statearr_23496 = state_23424;
(statearr_23496[(26)] = inst_23315);

return statearr_23496;
})();
if(cljs.core.truth_(inst_23316)){
var statearr_23497_23560 = state_23424__$1;
(statearr_23497_23560[(1)] = (13));

} else {
var statearr_23498_23561 = state_23424__$1;
(statearr_23498_23561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (18))){
var inst_23349 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23499_23562 = state_23424__$1;
(statearr_23499_23562[(2)] = inst_23349);

(statearr_23499_23562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (42))){
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23424__$1,(45),dchan);
} else {
if((state_val_23425 === (37))){
var inst_23392 = (state_23424[(23)]);
var inst_23296 = (state_23424[(10)]);
var inst_23383 = (state_23424[(25)]);
var inst_23392__$1 = cljs.core.first.call(null,inst_23383);
var inst_23393 = cljs.core.async.put_BANG_.call(null,inst_23392__$1,inst_23296,done);
var state_23424__$1 = (function (){var statearr_23500 = state_23424;
(statearr_23500[(23)] = inst_23392__$1);

return statearr_23500;
})();
if(cljs.core.truth_(inst_23393)){
var statearr_23501_23563 = state_23424__$1;
(statearr_23501_23563[(1)] = (39));

} else {
var statearr_23502_23564 = state_23424__$1;
(statearr_23502_23564[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (8))){
var inst_23307 = (state_23424[(13)]);
var inst_23308 = (state_23424[(15)]);
var inst_23310 = (inst_23308 < inst_23307);
var inst_23311 = inst_23310;
var state_23424__$1 = state_23424;
if(cljs.core.truth_(inst_23311)){
var statearr_23503_23565 = state_23424__$1;
(statearr_23503_23565[(1)] = (10));

} else {
var statearr_23504_23566 = state_23424__$1;
(statearr_23504_23566[(1)] = (11));

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
});})(c__22205__auto___23512,cs,m,dchan,dctr,done))
;
return ((function (switch__22093__auto__,c__22205__auto___23512,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22094__auto__ = null;
var cljs$core$async$mult_$_state_machine__22094__auto____0 = (function (){
var statearr_23508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23508[(0)] = cljs$core$async$mult_$_state_machine__22094__auto__);

(statearr_23508[(1)] = (1));

return statearr_23508;
});
var cljs$core$async$mult_$_state_machine__22094__auto____1 = (function (state_23424){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_23424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e23509){if((e23509 instanceof Object)){
var ex__22097__auto__ = e23509;
var statearr_23510_23567 = state_23424;
(statearr_23510_23567[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23568 = state_23424;
state_23424 = G__23568;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22094__auto__ = function(state_23424){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22094__auto____1.call(this,state_23424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22094__auto____0;
cljs$core$async$mult_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22094__auto____1;
return cljs$core$async$mult_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___23512,cs,m,dchan,dctr,done))
})();
var state__22207__auto__ = (function (){var statearr_23511 = f__22206__auto__.call(null);
(statearr_23511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___23512);

return statearr_23511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___23512,cs,m,dchan,dctr,done))
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
var args23569 = [];
var len__19538__auto___23572 = arguments.length;
var i__19539__auto___23573 = (0);
while(true){
if((i__19539__auto___23573 < len__19538__auto___23572)){
args23569.push((arguments[i__19539__auto___23573]));

var G__23574 = (i__19539__auto___23573 + (1));
i__19539__auto___23573 = G__23574;
continue;
} else {
}
break;
}

var G__23571 = args23569.length;
switch (G__23571) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23569.length)].join('')));

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
var len__19538__auto___23586 = arguments.length;
var i__19539__auto___23587 = (0);
while(true){
if((i__19539__auto___23587 < len__19538__auto___23586)){
args__19545__auto__.push((arguments[i__19539__auto___23587]));

var G__23588 = (i__19539__auto___23587 + (1));
i__19539__auto___23587 = G__23588;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((3) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19546__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23580){
var map__23581 = p__23580;
var map__23581__$1 = ((((!((map__23581 == null)))?((((map__23581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23581):map__23581);
var opts = map__23581__$1;
var statearr_23583_23589 = state;
(statearr_23583_23589[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23581,map__23581__$1,opts){
return (function (val){
var statearr_23584_23590 = state;
(statearr_23584_23590[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23581,map__23581__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23585_23591 = state;
(statearr_23585_23591[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23576){
var G__23577 = cljs.core.first.call(null,seq23576);
var seq23576__$1 = cljs.core.next.call(null,seq23576);
var G__23578 = cljs.core.first.call(null,seq23576__$1);
var seq23576__$2 = cljs.core.next.call(null,seq23576__$1);
var G__23579 = cljs.core.first.call(null,seq23576__$2);
var seq23576__$3 = cljs.core.next.call(null,seq23576__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23577,G__23578,G__23579,seq23576__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23755 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23756){
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
this.meta23756 = meta23756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23757,meta23756__$1){
var self__ = this;
var _23757__$1 = this;
return (new cljs.core.async.t_cljs$core$async23755(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23756__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23757){
var self__ = this;
var _23757__$1 = this;
return self__.meta23756;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23755.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23756","meta23756",-767222193,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23755";

cljs.core.async.t_cljs$core$async23755.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23755");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23755 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23755(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23756){
return (new cljs.core.async.t_cljs$core$async23755(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23756));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23755(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22205__auto___23918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___23918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___23918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23855){
var state_val_23856 = (state_23855[(1)]);
if((state_val_23856 === (7))){
var inst_23773 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23857_23919 = state_23855__$1;
(statearr_23857_23919[(2)] = inst_23773);

(statearr_23857_23919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (20))){
var inst_23785 = (state_23855[(7)]);
var state_23855__$1 = state_23855;
var statearr_23858_23920 = state_23855__$1;
(statearr_23858_23920[(2)] = inst_23785);

(statearr_23858_23920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (27))){
var state_23855__$1 = state_23855;
var statearr_23859_23921 = state_23855__$1;
(statearr_23859_23921[(2)] = null);

(statearr_23859_23921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (1))){
var inst_23761 = (state_23855[(8)]);
var inst_23761__$1 = calc_state.call(null);
var inst_23763 = (inst_23761__$1 == null);
var inst_23764 = cljs.core.not.call(null,inst_23763);
var state_23855__$1 = (function (){var statearr_23860 = state_23855;
(statearr_23860[(8)] = inst_23761__$1);

return statearr_23860;
})();
if(inst_23764){
var statearr_23861_23922 = state_23855__$1;
(statearr_23861_23922[(1)] = (2));

} else {
var statearr_23862_23923 = state_23855__$1;
(statearr_23862_23923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (24))){
var inst_23815 = (state_23855[(9)]);
var inst_23829 = (state_23855[(10)]);
var inst_23808 = (state_23855[(11)]);
var inst_23829__$1 = inst_23808.call(null,inst_23815);
var state_23855__$1 = (function (){var statearr_23863 = state_23855;
(statearr_23863[(10)] = inst_23829__$1);

return statearr_23863;
})();
if(cljs.core.truth_(inst_23829__$1)){
var statearr_23864_23924 = state_23855__$1;
(statearr_23864_23924[(1)] = (29));

} else {
var statearr_23865_23925 = state_23855__$1;
(statearr_23865_23925[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (4))){
var inst_23776 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23776)){
var statearr_23866_23926 = state_23855__$1;
(statearr_23866_23926[(1)] = (8));

} else {
var statearr_23867_23927 = state_23855__$1;
(statearr_23867_23927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (15))){
var inst_23802 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23802)){
var statearr_23868_23928 = state_23855__$1;
(statearr_23868_23928[(1)] = (19));

} else {
var statearr_23869_23929 = state_23855__$1;
(statearr_23869_23929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (21))){
var inst_23807 = (state_23855[(12)]);
var inst_23807__$1 = (state_23855[(2)]);
var inst_23808 = cljs.core.get.call(null,inst_23807__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23809 = cljs.core.get.call(null,inst_23807__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23810 = cljs.core.get.call(null,inst_23807__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23855__$1 = (function (){var statearr_23870 = state_23855;
(statearr_23870[(12)] = inst_23807__$1);

(statearr_23870[(11)] = inst_23808);

(statearr_23870[(13)] = inst_23809);

return statearr_23870;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23855__$1,(22),inst_23810);
} else {
if((state_val_23856 === (31))){
var inst_23837 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23837)){
var statearr_23871_23930 = state_23855__$1;
(statearr_23871_23930[(1)] = (32));

} else {
var statearr_23872_23931 = state_23855__$1;
(statearr_23872_23931[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (32))){
var inst_23814 = (state_23855[(14)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23855__$1,(35),out,inst_23814);
} else {
if((state_val_23856 === (33))){
var inst_23807 = (state_23855[(12)]);
var inst_23785 = inst_23807;
var state_23855__$1 = (function (){var statearr_23873 = state_23855;
(statearr_23873[(7)] = inst_23785);

return statearr_23873;
})();
var statearr_23874_23932 = state_23855__$1;
(statearr_23874_23932[(2)] = null);

(statearr_23874_23932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (13))){
var inst_23785 = (state_23855[(7)]);
var inst_23792 = inst_23785.cljs$lang$protocol_mask$partition0$;
var inst_23793 = (inst_23792 & (64));
var inst_23794 = inst_23785.cljs$core$ISeq$;
var inst_23795 = (inst_23793) || (inst_23794);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23795)){
var statearr_23875_23933 = state_23855__$1;
(statearr_23875_23933[(1)] = (16));

} else {
var statearr_23876_23934 = state_23855__$1;
(statearr_23876_23934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (22))){
var inst_23814 = (state_23855[(14)]);
var inst_23815 = (state_23855[(9)]);
var inst_23813 = (state_23855[(2)]);
var inst_23814__$1 = cljs.core.nth.call(null,inst_23813,(0),null);
var inst_23815__$1 = cljs.core.nth.call(null,inst_23813,(1),null);
var inst_23816 = (inst_23814__$1 == null);
var inst_23817 = cljs.core._EQ_.call(null,inst_23815__$1,change);
var inst_23818 = (inst_23816) || (inst_23817);
var state_23855__$1 = (function (){var statearr_23877 = state_23855;
(statearr_23877[(14)] = inst_23814__$1);

(statearr_23877[(9)] = inst_23815__$1);

return statearr_23877;
})();
if(cljs.core.truth_(inst_23818)){
var statearr_23878_23935 = state_23855__$1;
(statearr_23878_23935[(1)] = (23));

} else {
var statearr_23879_23936 = state_23855__$1;
(statearr_23879_23936[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (36))){
var inst_23807 = (state_23855[(12)]);
var inst_23785 = inst_23807;
var state_23855__$1 = (function (){var statearr_23880 = state_23855;
(statearr_23880[(7)] = inst_23785);

return statearr_23880;
})();
var statearr_23881_23937 = state_23855__$1;
(statearr_23881_23937[(2)] = null);

(statearr_23881_23937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (29))){
var inst_23829 = (state_23855[(10)]);
var state_23855__$1 = state_23855;
var statearr_23882_23938 = state_23855__$1;
(statearr_23882_23938[(2)] = inst_23829);

(statearr_23882_23938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (6))){
var state_23855__$1 = state_23855;
var statearr_23883_23939 = state_23855__$1;
(statearr_23883_23939[(2)] = false);

(statearr_23883_23939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (28))){
var inst_23825 = (state_23855[(2)]);
var inst_23826 = calc_state.call(null);
var inst_23785 = inst_23826;
var state_23855__$1 = (function (){var statearr_23884 = state_23855;
(statearr_23884[(7)] = inst_23785);

(statearr_23884[(15)] = inst_23825);

return statearr_23884;
})();
var statearr_23885_23940 = state_23855__$1;
(statearr_23885_23940[(2)] = null);

(statearr_23885_23940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (25))){
var inst_23851 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23886_23941 = state_23855__$1;
(statearr_23886_23941[(2)] = inst_23851);

(statearr_23886_23941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (34))){
var inst_23849 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23887_23942 = state_23855__$1;
(statearr_23887_23942[(2)] = inst_23849);

(statearr_23887_23942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (17))){
var state_23855__$1 = state_23855;
var statearr_23888_23943 = state_23855__$1;
(statearr_23888_23943[(2)] = false);

(statearr_23888_23943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (3))){
var state_23855__$1 = state_23855;
var statearr_23889_23944 = state_23855__$1;
(statearr_23889_23944[(2)] = false);

(statearr_23889_23944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (12))){
var inst_23853 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23855__$1,inst_23853);
} else {
if((state_val_23856 === (2))){
var inst_23761 = (state_23855[(8)]);
var inst_23766 = inst_23761.cljs$lang$protocol_mask$partition0$;
var inst_23767 = (inst_23766 & (64));
var inst_23768 = inst_23761.cljs$core$ISeq$;
var inst_23769 = (inst_23767) || (inst_23768);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23769)){
var statearr_23890_23945 = state_23855__$1;
(statearr_23890_23945[(1)] = (5));

} else {
var statearr_23891_23946 = state_23855__$1;
(statearr_23891_23946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (23))){
var inst_23814 = (state_23855[(14)]);
var inst_23820 = (inst_23814 == null);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23820)){
var statearr_23892_23947 = state_23855__$1;
(statearr_23892_23947[(1)] = (26));

} else {
var statearr_23893_23948 = state_23855__$1;
(statearr_23893_23948[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (35))){
var inst_23840 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23840)){
var statearr_23894_23949 = state_23855__$1;
(statearr_23894_23949[(1)] = (36));

} else {
var statearr_23895_23950 = state_23855__$1;
(statearr_23895_23950[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (19))){
var inst_23785 = (state_23855[(7)]);
var inst_23804 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23785);
var state_23855__$1 = state_23855;
var statearr_23896_23951 = state_23855__$1;
(statearr_23896_23951[(2)] = inst_23804);

(statearr_23896_23951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (11))){
var inst_23785 = (state_23855[(7)]);
var inst_23789 = (inst_23785 == null);
var inst_23790 = cljs.core.not.call(null,inst_23789);
var state_23855__$1 = state_23855;
if(inst_23790){
var statearr_23897_23952 = state_23855__$1;
(statearr_23897_23952[(1)] = (13));

} else {
var statearr_23898_23953 = state_23855__$1;
(statearr_23898_23953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (9))){
var inst_23761 = (state_23855[(8)]);
var state_23855__$1 = state_23855;
var statearr_23899_23954 = state_23855__$1;
(statearr_23899_23954[(2)] = inst_23761);

(statearr_23899_23954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (5))){
var state_23855__$1 = state_23855;
var statearr_23900_23955 = state_23855__$1;
(statearr_23900_23955[(2)] = true);

(statearr_23900_23955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (14))){
var state_23855__$1 = state_23855;
var statearr_23901_23956 = state_23855__$1;
(statearr_23901_23956[(2)] = false);

(statearr_23901_23956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (26))){
var inst_23815 = (state_23855[(9)]);
var inst_23822 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23815);
var state_23855__$1 = state_23855;
var statearr_23902_23957 = state_23855__$1;
(statearr_23902_23957[(2)] = inst_23822);

(statearr_23902_23957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (16))){
var state_23855__$1 = state_23855;
var statearr_23903_23958 = state_23855__$1;
(statearr_23903_23958[(2)] = true);

(statearr_23903_23958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (38))){
var inst_23845 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23904_23959 = state_23855__$1;
(statearr_23904_23959[(2)] = inst_23845);

(statearr_23904_23959[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (30))){
var inst_23815 = (state_23855[(9)]);
var inst_23808 = (state_23855[(11)]);
var inst_23809 = (state_23855[(13)]);
var inst_23832 = cljs.core.empty_QMARK_.call(null,inst_23808);
var inst_23833 = inst_23809.call(null,inst_23815);
var inst_23834 = cljs.core.not.call(null,inst_23833);
var inst_23835 = (inst_23832) && (inst_23834);
var state_23855__$1 = state_23855;
var statearr_23905_23960 = state_23855__$1;
(statearr_23905_23960[(2)] = inst_23835);

(statearr_23905_23960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (10))){
var inst_23761 = (state_23855[(8)]);
var inst_23781 = (state_23855[(2)]);
var inst_23782 = cljs.core.get.call(null,inst_23781,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23783 = cljs.core.get.call(null,inst_23781,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23784 = cljs.core.get.call(null,inst_23781,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23785 = inst_23761;
var state_23855__$1 = (function (){var statearr_23906 = state_23855;
(statearr_23906[(7)] = inst_23785);

(statearr_23906[(16)] = inst_23784);

(statearr_23906[(17)] = inst_23783);

(statearr_23906[(18)] = inst_23782);

return statearr_23906;
})();
var statearr_23907_23961 = state_23855__$1;
(statearr_23907_23961[(2)] = null);

(statearr_23907_23961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (18))){
var inst_23799 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23908_23962 = state_23855__$1;
(statearr_23908_23962[(2)] = inst_23799);

(statearr_23908_23962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (37))){
var state_23855__$1 = state_23855;
var statearr_23909_23963 = state_23855__$1;
(statearr_23909_23963[(2)] = null);

(statearr_23909_23963[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (8))){
var inst_23761 = (state_23855[(8)]);
var inst_23778 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23761);
var state_23855__$1 = state_23855;
var statearr_23910_23964 = state_23855__$1;
(statearr_23910_23964[(2)] = inst_23778);

(statearr_23910_23964[(1)] = (10));


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
});})(c__22205__auto___23918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22093__auto__,c__22205__auto___23918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22094__auto__ = null;
var cljs$core$async$mix_$_state_machine__22094__auto____0 = (function (){
var statearr_23914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23914[(0)] = cljs$core$async$mix_$_state_machine__22094__auto__);

(statearr_23914[(1)] = (1));

return statearr_23914;
});
var cljs$core$async$mix_$_state_machine__22094__auto____1 = (function (state_23855){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_23855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e23915){if((e23915 instanceof Object)){
var ex__22097__auto__ = e23915;
var statearr_23916_23965 = state_23855;
(statearr_23916_23965[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23966 = state_23855;
state_23855 = G__23966;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22094__auto__ = function(state_23855){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22094__auto____1.call(this,state_23855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22094__auto____0;
cljs$core$async$mix_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22094__auto____1;
return cljs$core$async$mix_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___23918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22207__auto__ = (function (){var statearr_23917 = f__22206__auto__.call(null);
(statearr_23917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___23918);

return statearr_23917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___23918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23967 = [];
var len__19538__auto___23970 = arguments.length;
var i__19539__auto___23971 = (0);
while(true){
if((i__19539__auto___23971 < len__19538__auto___23970)){
args23967.push((arguments[i__19539__auto___23971]));

var G__23972 = (i__19539__auto___23971 + (1));
i__19539__auto___23971 = G__23972;
continue;
} else {
}
break;
}

var G__23969 = args23967.length;
switch (G__23969) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23967.length)].join('')));

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
var args23975 = [];
var len__19538__auto___24100 = arguments.length;
var i__19539__auto___24101 = (0);
while(true){
if((i__19539__auto___24101 < len__19538__auto___24100)){
args23975.push((arguments[i__19539__auto___24101]));

var G__24102 = (i__19539__auto___24101 + (1));
i__19539__auto___24101 = G__24102;
continue;
} else {
}
break;
}

var G__23977 = args23975.length;
switch (G__23977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23975.length)].join('')));

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
return (function (p1__23974_SHARP_){
if(cljs.core.truth_(p1__23974_SHARP_.call(null,topic))){
return p1__23974_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23974_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18468__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23979 = meta23979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23980,meta23979__$1){
var self__ = this;
var _23980__$1 = this;
return (new cljs.core.async.t_cljs$core$async23978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23979__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23980){
var self__ = this;
var _23980__$1 = this;
return self__.meta23979;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23978.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23979","meta23979",1415578600,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23978";

cljs.core.async.t_cljs$core$async23978.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23978");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23978 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23979){
return (new cljs.core.async.t_cljs$core$async23978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23979));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22205__auto___24104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24104,mults,ensure_mult,p){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24104,mults,ensure_mult,p){
return (function (state_24052){
var state_val_24053 = (state_24052[(1)]);
if((state_val_24053 === (7))){
var inst_24048 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24054_24105 = state_24052__$1;
(statearr_24054_24105[(2)] = inst_24048);

(statearr_24054_24105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (20))){
var state_24052__$1 = state_24052;
var statearr_24055_24106 = state_24052__$1;
(statearr_24055_24106[(2)] = null);

(statearr_24055_24106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (1))){
var state_24052__$1 = state_24052;
var statearr_24056_24107 = state_24052__$1;
(statearr_24056_24107[(2)] = null);

(statearr_24056_24107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (24))){
var inst_24031 = (state_24052[(7)]);
var inst_24040 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24031);
var state_24052__$1 = state_24052;
var statearr_24057_24108 = state_24052__$1;
(statearr_24057_24108[(2)] = inst_24040);

(statearr_24057_24108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (4))){
var inst_23983 = (state_24052[(8)]);
var inst_23983__$1 = (state_24052[(2)]);
var inst_23984 = (inst_23983__$1 == null);
var state_24052__$1 = (function (){var statearr_24058 = state_24052;
(statearr_24058[(8)] = inst_23983__$1);

return statearr_24058;
})();
if(cljs.core.truth_(inst_23984)){
var statearr_24059_24109 = state_24052__$1;
(statearr_24059_24109[(1)] = (5));

} else {
var statearr_24060_24110 = state_24052__$1;
(statearr_24060_24110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (15))){
var inst_24025 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24061_24111 = state_24052__$1;
(statearr_24061_24111[(2)] = inst_24025);

(statearr_24061_24111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (21))){
var inst_24045 = (state_24052[(2)]);
var state_24052__$1 = (function (){var statearr_24062 = state_24052;
(statearr_24062[(9)] = inst_24045);

return statearr_24062;
})();
var statearr_24063_24112 = state_24052__$1;
(statearr_24063_24112[(2)] = null);

(statearr_24063_24112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (13))){
var inst_24007 = (state_24052[(10)]);
var inst_24009 = cljs.core.chunked_seq_QMARK_.call(null,inst_24007);
var state_24052__$1 = state_24052;
if(inst_24009){
var statearr_24064_24113 = state_24052__$1;
(statearr_24064_24113[(1)] = (16));

} else {
var statearr_24065_24114 = state_24052__$1;
(statearr_24065_24114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (22))){
var inst_24037 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
if(cljs.core.truth_(inst_24037)){
var statearr_24066_24115 = state_24052__$1;
(statearr_24066_24115[(1)] = (23));

} else {
var statearr_24067_24116 = state_24052__$1;
(statearr_24067_24116[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (6))){
var inst_24031 = (state_24052[(7)]);
var inst_24033 = (state_24052[(11)]);
var inst_23983 = (state_24052[(8)]);
var inst_24031__$1 = topic_fn.call(null,inst_23983);
var inst_24032 = cljs.core.deref.call(null,mults);
var inst_24033__$1 = cljs.core.get.call(null,inst_24032,inst_24031__$1);
var state_24052__$1 = (function (){var statearr_24068 = state_24052;
(statearr_24068[(7)] = inst_24031__$1);

(statearr_24068[(11)] = inst_24033__$1);

return statearr_24068;
})();
if(cljs.core.truth_(inst_24033__$1)){
var statearr_24069_24117 = state_24052__$1;
(statearr_24069_24117[(1)] = (19));

} else {
var statearr_24070_24118 = state_24052__$1;
(statearr_24070_24118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (25))){
var inst_24042 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24071_24119 = state_24052__$1;
(statearr_24071_24119[(2)] = inst_24042);

(statearr_24071_24119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (17))){
var inst_24007 = (state_24052[(10)]);
var inst_24016 = cljs.core.first.call(null,inst_24007);
var inst_24017 = cljs.core.async.muxch_STAR_.call(null,inst_24016);
var inst_24018 = cljs.core.async.close_BANG_.call(null,inst_24017);
var inst_24019 = cljs.core.next.call(null,inst_24007);
var inst_23993 = inst_24019;
var inst_23994 = null;
var inst_23995 = (0);
var inst_23996 = (0);
var state_24052__$1 = (function (){var statearr_24072 = state_24052;
(statearr_24072[(12)] = inst_24018);

(statearr_24072[(13)] = inst_23996);

(statearr_24072[(14)] = inst_23993);

(statearr_24072[(15)] = inst_23994);

(statearr_24072[(16)] = inst_23995);

return statearr_24072;
})();
var statearr_24073_24120 = state_24052__$1;
(statearr_24073_24120[(2)] = null);

(statearr_24073_24120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (3))){
var inst_24050 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24052__$1,inst_24050);
} else {
if((state_val_24053 === (12))){
var inst_24027 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24074_24121 = state_24052__$1;
(statearr_24074_24121[(2)] = inst_24027);

(statearr_24074_24121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (2))){
var state_24052__$1 = state_24052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24052__$1,(4),ch);
} else {
if((state_val_24053 === (23))){
var state_24052__$1 = state_24052;
var statearr_24075_24122 = state_24052__$1;
(statearr_24075_24122[(2)] = null);

(statearr_24075_24122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (19))){
var inst_24033 = (state_24052[(11)]);
var inst_23983 = (state_24052[(8)]);
var inst_24035 = cljs.core.async.muxch_STAR_.call(null,inst_24033);
var state_24052__$1 = state_24052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24052__$1,(22),inst_24035,inst_23983);
} else {
if((state_val_24053 === (11))){
var inst_23993 = (state_24052[(14)]);
var inst_24007 = (state_24052[(10)]);
var inst_24007__$1 = cljs.core.seq.call(null,inst_23993);
var state_24052__$1 = (function (){var statearr_24076 = state_24052;
(statearr_24076[(10)] = inst_24007__$1);

return statearr_24076;
})();
if(inst_24007__$1){
var statearr_24077_24123 = state_24052__$1;
(statearr_24077_24123[(1)] = (13));

} else {
var statearr_24078_24124 = state_24052__$1;
(statearr_24078_24124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (9))){
var inst_24029 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24079_24125 = state_24052__$1;
(statearr_24079_24125[(2)] = inst_24029);

(statearr_24079_24125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (5))){
var inst_23990 = cljs.core.deref.call(null,mults);
var inst_23991 = cljs.core.vals.call(null,inst_23990);
var inst_23992 = cljs.core.seq.call(null,inst_23991);
var inst_23993 = inst_23992;
var inst_23994 = null;
var inst_23995 = (0);
var inst_23996 = (0);
var state_24052__$1 = (function (){var statearr_24080 = state_24052;
(statearr_24080[(13)] = inst_23996);

(statearr_24080[(14)] = inst_23993);

(statearr_24080[(15)] = inst_23994);

(statearr_24080[(16)] = inst_23995);

return statearr_24080;
})();
var statearr_24081_24126 = state_24052__$1;
(statearr_24081_24126[(2)] = null);

(statearr_24081_24126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (14))){
var state_24052__$1 = state_24052;
var statearr_24085_24127 = state_24052__$1;
(statearr_24085_24127[(2)] = null);

(statearr_24085_24127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (16))){
var inst_24007 = (state_24052[(10)]);
var inst_24011 = cljs.core.chunk_first.call(null,inst_24007);
var inst_24012 = cljs.core.chunk_rest.call(null,inst_24007);
var inst_24013 = cljs.core.count.call(null,inst_24011);
var inst_23993 = inst_24012;
var inst_23994 = inst_24011;
var inst_23995 = inst_24013;
var inst_23996 = (0);
var state_24052__$1 = (function (){var statearr_24086 = state_24052;
(statearr_24086[(13)] = inst_23996);

(statearr_24086[(14)] = inst_23993);

(statearr_24086[(15)] = inst_23994);

(statearr_24086[(16)] = inst_23995);

return statearr_24086;
})();
var statearr_24087_24128 = state_24052__$1;
(statearr_24087_24128[(2)] = null);

(statearr_24087_24128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (10))){
var inst_23996 = (state_24052[(13)]);
var inst_23993 = (state_24052[(14)]);
var inst_23994 = (state_24052[(15)]);
var inst_23995 = (state_24052[(16)]);
var inst_24001 = cljs.core._nth.call(null,inst_23994,inst_23996);
var inst_24002 = cljs.core.async.muxch_STAR_.call(null,inst_24001);
var inst_24003 = cljs.core.async.close_BANG_.call(null,inst_24002);
var inst_24004 = (inst_23996 + (1));
var tmp24082 = inst_23993;
var tmp24083 = inst_23994;
var tmp24084 = inst_23995;
var inst_23993__$1 = tmp24082;
var inst_23994__$1 = tmp24083;
var inst_23995__$1 = tmp24084;
var inst_23996__$1 = inst_24004;
var state_24052__$1 = (function (){var statearr_24088 = state_24052;
(statearr_24088[(17)] = inst_24003);

(statearr_24088[(13)] = inst_23996__$1);

(statearr_24088[(14)] = inst_23993__$1);

(statearr_24088[(15)] = inst_23994__$1);

(statearr_24088[(16)] = inst_23995__$1);

return statearr_24088;
})();
var statearr_24089_24129 = state_24052__$1;
(statearr_24089_24129[(2)] = null);

(statearr_24089_24129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (18))){
var inst_24022 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24090_24130 = state_24052__$1;
(statearr_24090_24130[(2)] = inst_24022);

(statearr_24090_24130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (8))){
var inst_23996 = (state_24052[(13)]);
var inst_23995 = (state_24052[(16)]);
var inst_23998 = (inst_23996 < inst_23995);
var inst_23999 = inst_23998;
var state_24052__$1 = state_24052;
if(cljs.core.truth_(inst_23999)){
var statearr_24091_24131 = state_24052__$1;
(statearr_24091_24131[(1)] = (10));

} else {
var statearr_24092_24132 = state_24052__$1;
(statearr_24092_24132[(1)] = (11));

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
});})(c__22205__auto___24104,mults,ensure_mult,p))
;
return ((function (switch__22093__auto__,c__22205__auto___24104,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24096[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24096[(1)] = (1));

return statearr_24096;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24052){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24097){if((e24097 instanceof Object)){
var ex__22097__auto__ = e24097;
var statearr_24098_24133 = state_24052;
(statearr_24098_24133[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24134 = state_24052;
state_24052 = G__24134;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24104,mults,ensure_mult,p))
})();
var state__22207__auto__ = (function (){var statearr_24099 = f__22206__auto__.call(null);
(statearr_24099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24104);

return statearr_24099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24104,mults,ensure_mult,p))
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
var args24135 = [];
var len__19538__auto___24138 = arguments.length;
var i__19539__auto___24139 = (0);
while(true){
if((i__19539__auto___24139 < len__19538__auto___24138)){
args24135.push((arguments[i__19539__auto___24139]));

var G__24140 = (i__19539__auto___24139 + (1));
i__19539__auto___24139 = G__24140;
continue;
} else {
}
break;
}

var G__24137 = args24135.length;
switch (G__24137) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24135.length)].join('')));

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
var args24142 = [];
var len__19538__auto___24145 = arguments.length;
var i__19539__auto___24146 = (0);
while(true){
if((i__19539__auto___24146 < len__19538__auto___24145)){
args24142.push((arguments[i__19539__auto___24146]));

var G__24147 = (i__19539__auto___24146 + (1));
i__19539__auto___24146 = G__24147;
continue;
} else {
}
break;
}

var G__24144 = args24142.length;
switch (G__24144) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24142.length)].join('')));

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
var args24149 = [];
var len__19538__auto___24220 = arguments.length;
var i__19539__auto___24221 = (0);
while(true){
if((i__19539__auto___24221 < len__19538__auto___24220)){
args24149.push((arguments[i__19539__auto___24221]));

var G__24222 = (i__19539__auto___24221 + (1));
i__19539__auto___24221 = G__24222;
continue;
} else {
}
break;
}

var G__24151 = args24149.length;
switch (G__24151) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24149.length)].join('')));

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
var c__22205__auto___24224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24190){
var state_val_24191 = (state_24190[(1)]);
if((state_val_24191 === (7))){
var state_24190__$1 = state_24190;
var statearr_24192_24225 = state_24190__$1;
(statearr_24192_24225[(2)] = null);

(statearr_24192_24225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (1))){
var state_24190__$1 = state_24190;
var statearr_24193_24226 = state_24190__$1;
(statearr_24193_24226[(2)] = null);

(statearr_24193_24226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (4))){
var inst_24154 = (state_24190[(7)]);
var inst_24156 = (inst_24154 < cnt);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24156)){
var statearr_24194_24227 = state_24190__$1;
(statearr_24194_24227[(1)] = (6));

} else {
var statearr_24195_24228 = state_24190__$1;
(statearr_24195_24228[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (15))){
var inst_24186 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24196_24229 = state_24190__$1;
(statearr_24196_24229[(2)] = inst_24186);

(statearr_24196_24229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (13))){
var inst_24179 = cljs.core.async.close_BANG_.call(null,out);
var state_24190__$1 = state_24190;
var statearr_24197_24230 = state_24190__$1;
(statearr_24197_24230[(2)] = inst_24179);

(statearr_24197_24230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (6))){
var state_24190__$1 = state_24190;
var statearr_24198_24231 = state_24190__$1;
(statearr_24198_24231[(2)] = null);

(statearr_24198_24231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (3))){
var inst_24188 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24190__$1,inst_24188);
} else {
if((state_val_24191 === (12))){
var inst_24176 = (state_24190[(8)]);
var inst_24176__$1 = (state_24190[(2)]);
var inst_24177 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24176__$1);
var state_24190__$1 = (function (){var statearr_24199 = state_24190;
(statearr_24199[(8)] = inst_24176__$1);

return statearr_24199;
})();
if(cljs.core.truth_(inst_24177)){
var statearr_24200_24232 = state_24190__$1;
(statearr_24200_24232[(1)] = (13));

} else {
var statearr_24201_24233 = state_24190__$1;
(statearr_24201_24233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (2))){
var inst_24153 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24154 = (0);
var state_24190__$1 = (function (){var statearr_24202 = state_24190;
(statearr_24202[(9)] = inst_24153);

(statearr_24202[(7)] = inst_24154);

return statearr_24202;
})();
var statearr_24203_24234 = state_24190__$1;
(statearr_24203_24234[(2)] = null);

(statearr_24203_24234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (11))){
var inst_24154 = (state_24190[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24190,(10),Object,null,(9));
var inst_24163 = chs__$1.call(null,inst_24154);
var inst_24164 = done.call(null,inst_24154);
var inst_24165 = cljs.core.async.take_BANG_.call(null,inst_24163,inst_24164);
var state_24190__$1 = state_24190;
var statearr_24204_24235 = state_24190__$1;
(statearr_24204_24235[(2)] = inst_24165);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24190__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (9))){
var inst_24154 = (state_24190[(7)]);
var inst_24167 = (state_24190[(2)]);
var inst_24168 = (inst_24154 + (1));
var inst_24154__$1 = inst_24168;
var state_24190__$1 = (function (){var statearr_24205 = state_24190;
(statearr_24205[(10)] = inst_24167);

(statearr_24205[(7)] = inst_24154__$1);

return statearr_24205;
})();
var statearr_24206_24236 = state_24190__$1;
(statearr_24206_24236[(2)] = null);

(statearr_24206_24236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (5))){
var inst_24174 = (state_24190[(2)]);
var state_24190__$1 = (function (){var statearr_24207 = state_24190;
(statearr_24207[(11)] = inst_24174);

return statearr_24207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(12),dchan);
} else {
if((state_val_24191 === (14))){
var inst_24176 = (state_24190[(8)]);
var inst_24181 = cljs.core.apply.call(null,f,inst_24176);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24190__$1,(16),out,inst_24181);
} else {
if((state_val_24191 === (16))){
var inst_24183 = (state_24190[(2)]);
var state_24190__$1 = (function (){var statearr_24208 = state_24190;
(statearr_24208[(12)] = inst_24183);

return statearr_24208;
})();
var statearr_24209_24237 = state_24190__$1;
(statearr_24209_24237[(2)] = null);

(statearr_24209_24237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (10))){
var inst_24158 = (state_24190[(2)]);
var inst_24159 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24190__$1 = (function (){var statearr_24210 = state_24190;
(statearr_24210[(13)] = inst_24158);

return statearr_24210;
})();
var statearr_24211_24238 = state_24190__$1;
(statearr_24211_24238[(2)] = inst_24159);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24190__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (8))){
var inst_24172 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24212_24239 = state_24190__$1;
(statearr_24212_24239[(2)] = inst_24172);

(statearr_24212_24239[(1)] = (5));


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
});})(c__22205__auto___24224,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22093__auto__,c__22205__auto___24224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24216[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24216[(1)] = (1));

return statearr_24216;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24190){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24217){if((e24217 instanceof Object)){
var ex__22097__auto__ = e24217;
var statearr_24218_24240 = state_24190;
(statearr_24218_24240[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24241 = state_24190;
state_24190 = G__24241;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24224,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22207__auto__ = (function (){var statearr_24219 = f__22206__auto__.call(null);
(statearr_24219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24224);

return statearr_24219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24224,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24243 = [];
var len__19538__auto___24299 = arguments.length;
var i__19539__auto___24300 = (0);
while(true){
if((i__19539__auto___24300 < len__19538__auto___24299)){
args24243.push((arguments[i__19539__auto___24300]));

var G__24301 = (i__19539__auto___24300 + (1));
i__19539__auto___24300 = G__24301;
continue;
} else {
}
break;
}

var G__24245 = args24243.length;
switch (G__24245) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24243.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22205__auto___24303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24303,out){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24303,out){
return (function (state_24275){
var state_val_24276 = (state_24275[(1)]);
if((state_val_24276 === (7))){
var inst_24255 = (state_24275[(7)]);
var inst_24254 = (state_24275[(8)]);
var inst_24254__$1 = (state_24275[(2)]);
var inst_24255__$1 = cljs.core.nth.call(null,inst_24254__$1,(0),null);
var inst_24256 = cljs.core.nth.call(null,inst_24254__$1,(1),null);
var inst_24257 = (inst_24255__$1 == null);
var state_24275__$1 = (function (){var statearr_24277 = state_24275;
(statearr_24277[(7)] = inst_24255__$1);

(statearr_24277[(9)] = inst_24256);

(statearr_24277[(8)] = inst_24254__$1);

return statearr_24277;
})();
if(cljs.core.truth_(inst_24257)){
var statearr_24278_24304 = state_24275__$1;
(statearr_24278_24304[(1)] = (8));

} else {
var statearr_24279_24305 = state_24275__$1;
(statearr_24279_24305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (1))){
var inst_24246 = cljs.core.vec.call(null,chs);
var inst_24247 = inst_24246;
var state_24275__$1 = (function (){var statearr_24280 = state_24275;
(statearr_24280[(10)] = inst_24247);

return statearr_24280;
})();
var statearr_24281_24306 = state_24275__$1;
(statearr_24281_24306[(2)] = null);

(statearr_24281_24306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (4))){
var inst_24247 = (state_24275[(10)]);
var state_24275__$1 = state_24275;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24275__$1,(7),inst_24247);
} else {
if((state_val_24276 === (6))){
var inst_24271 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24282_24307 = state_24275__$1;
(statearr_24282_24307[(2)] = inst_24271);

(statearr_24282_24307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (3))){
var inst_24273 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24275__$1,inst_24273);
} else {
if((state_val_24276 === (2))){
var inst_24247 = (state_24275[(10)]);
var inst_24249 = cljs.core.count.call(null,inst_24247);
var inst_24250 = (inst_24249 > (0));
var state_24275__$1 = state_24275;
if(cljs.core.truth_(inst_24250)){
var statearr_24284_24308 = state_24275__$1;
(statearr_24284_24308[(1)] = (4));

} else {
var statearr_24285_24309 = state_24275__$1;
(statearr_24285_24309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (11))){
var inst_24247 = (state_24275[(10)]);
var inst_24264 = (state_24275[(2)]);
var tmp24283 = inst_24247;
var inst_24247__$1 = tmp24283;
var state_24275__$1 = (function (){var statearr_24286 = state_24275;
(statearr_24286[(11)] = inst_24264);

(statearr_24286[(10)] = inst_24247__$1);

return statearr_24286;
})();
var statearr_24287_24310 = state_24275__$1;
(statearr_24287_24310[(2)] = null);

(statearr_24287_24310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (9))){
var inst_24255 = (state_24275[(7)]);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24275__$1,(11),out,inst_24255);
} else {
if((state_val_24276 === (5))){
var inst_24269 = cljs.core.async.close_BANG_.call(null,out);
var state_24275__$1 = state_24275;
var statearr_24288_24311 = state_24275__$1;
(statearr_24288_24311[(2)] = inst_24269);

(statearr_24288_24311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (10))){
var inst_24267 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24289_24312 = state_24275__$1;
(statearr_24289_24312[(2)] = inst_24267);

(statearr_24289_24312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (8))){
var inst_24255 = (state_24275[(7)]);
var inst_24247 = (state_24275[(10)]);
var inst_24256 = (state_24275[(9)]);
var inst_24254 = (state_24275[(8)]);
var inst_24259 = (function (){var cs = inst_24247;
var vec__24252 = inst_24254;
var v = inst_24255;
var c = inst_24256;
return ((function (cs,vec__24252,v,c,inst_24255,inst_24247,inst_24256,inst_24254,state_val_24276,c__22205__auto___24303,out){
return (function (p1__24242_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24242_SHARP_);
});
;})(cs,vec__24252,v,c,inst_24255,inst_24247,inst_24256,inst_24254,state_val_24276,c__22205__auto___24303,out))
})();
var inst_24260 = cljs.core.filterv.call(null,inst_24259,inst_24247);
var inst_24247__$1 = inst_24260;
var state_24275__$1 = (function (){var statearr_24290 = state_24275;
(statearr_24290[(10)] = inst_24247__$1);

return statearr_24290;
})();
var statearr_24291_24313 = state_24275__$1;
(statearr_24291_24313[(2)] = null);

(statearr_24291_24313[(1)] = (2));


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
});})(c__22205__auto___24303,out))
;
return ((function (switch__22093__auto__,c__22205__auto___24303,out){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24295[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24295[(1)] = (1));

return statearr_24295;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24275){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24296){if((e24296 instanceof Object)){
var ex__22097__auto__ = e24296;
var statearr_24297_24314 = state_24275;
(statearr_24297_24314[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24315 = state_24275;
state_24275 = G__24315;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24303,out))
})();
var state__22207__auto__ = (function (){var statearr_24298 = f__22206__auto__.call(null);
(statearr_24298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24303);

return statearr_24298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24303,out))
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
var args24316 = [];
var len__19538__auto___24365 = arguments.length;
var i__19539__auto___24366 = (0);
while(true){
if((i__19539__auto___24366 < len__19538__auto___24365)){
args24316.push((arguments[i__19539__auto___24366]));

var G__24367 = (i__19539__auto___24366 + (1));
i__19539__auto___24366 = G__24367;
continue;
} else {
}
break;
}

var G__24318 = args24316.length;
switch (G__24318) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24316.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22205__auto___24369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24369,out){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24369,out){
return (function (state_24342){
var state_val_24343 = (state_24342[(1)]);
if((state_val_24343 === (7))){
var inst_24324 = (state_24342[(7)]);
var inst_24324__$1 = (state_24342[(2)]);
var inst_24325 = (inst_24324__$1 == null);
var inst_24326 = cljs.core.not.call(null,inst_24325);
var state_24342__$1 = (function (){var statearr_24344 = state_24342;
(statearr_24344[(7)] = inst_24324__$1);

return statearr_24344;
})();
if(inst_24326){
var statearr_24345_24370 = state_24342__$1;
(statearr_24345_24370[(1)] = (8));

} else {
var statearr_24346_24371 = state_24342__$1;
(statearr_24346_24371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (1))){
var inst_24319 = (0);
var state_24342__$1 = (function (){var statearr_24347 = state_24342;
(statearr_24347[(8)] = inst_24319);

return statearr_24347;
})();
var statearr_24348_24372 = state_24342__$1;
(statearr_24348_24372[(2)] = null);

(statearr_24348_24372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (4))){
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24342__$1,(7),ch);
} else {
if((state_val_24343 === (6))){
var inst_24337 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24349_24373 = state_24342__$1;
(statearr_24349_24373[(2)] = inst_24337);

(statearr_24349_24373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (3))){
var inst_24339 = (state_24342[(2)]);
var inst_24340 = cljs.core.async.close_BANG_.call(null,out);
var state_24342__$1 = (function (){var statearr_24350 = state_24342;
(statearr_24350[(9)] = inst_24339);

return statearr_24350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24342__$1,inst_24340);
} else {
if((state_val_24343 === (2))){
var inst_24319 = (state_24342[(8)]);
var inst_24321 = (inst_24319 < n);
var state_24342__$1 = state_24342;
if(cljs.core.truth_(inst_24321)){
var statearr_24351_24374 = state_24342__$1;
(statearr_24351_24374[(1)] = (4));

} else {
var statearr_24352_24375 = state_24342__$1;
(statearr_24352_24375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (11))){
var inst_24319 = (state_24342[(8)]);
var inst_24329 = (state_24342[(2)]);
var inst_24330 = (inst_24319 + (1));
var inst_24319__$1 = inst_24330;
var state_24342__$1 = (function (){var statearr_24353 = state_24342;
(statearr_24353[(8)] = inst_24319__$1);

(statearr_24353[(10)] = inst_24329);

return statearr_24353;
})();
var statearr_24354_24376 = state_24342__$1;
(statearr_24354_24376[(2)] = null);

(statearr_24354_24376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (9))){
var state_24342__$1 = state_24342;
var statearr_24355_24377 = state_24342__$1;
(statearr_24355_24377[(2)] = null);

(statearr_24355_24377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (5))){
var state_24342__$1 = state_24342;
var statearr_24356_24378 = state_24342__$1;
(statearr_24356_24378[(2)] = null);

(statearr_24356_24378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (10))){
var inst_24334 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24357_24379 = state_24342__$1;
(statearr_24357_24379[(2)] = inst_24334);

(statearr_24357_24379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (8))){
var inst_24324 = (state_24342[(7)]);
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24342__$1,(11),out,inst_24324);
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
});})(c__22205__auto___24369,out))
;
return ((function (switch__22093__auto__,c__22205__auto___24369,out){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24361[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24361[(1)] = (1));

return statearr_24361;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24342){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24362){if((e24362 instanceof Object)){
var ex__22097__auto__ = e24362;
var statearr_24363_24380 = state_24342;
(statearr_24363_24380[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24381 = state_24342;
state_24342 = G__24381;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24369,out))
})();
var state__22207__auto__ = (function (){var statearr_24364 = f__22206__auto__.call(null);
(statearr_24364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24369);

return statearr_24364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24369,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24389 = (function (map_LT_,f,ch,meta24390){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24390 = meta24390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24391,meta24390__$1){
var self__ = this;
var _24391__$1 = this;
return (new cljs.core.async.t_cljs$core$async24389(self__.map_LT_,self__.f,self__.ch,meta24390__$1));
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24391){
var self__ = this;
var _24391__$1 = this;
return self__.meta24390;
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24392 = (function (map_LT_,f,ch,meta24390,_,fn1,meta24393){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24390 = meta24390;
this._ = _;
this.fn1 = fn1;
this.meta24393 = meta24393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24394,meta24393__$1){
var self__ = this;
var _24394__$1 = this;
return (new cljs.core.async.t_cljs$core$async24392(self__.map_LT_,self__.f,self__.ch,self__.meta24390,self__._,self__.fn1,meta24393__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24394){
var self__ = this;
var _24394__$1 = this;
return self__.meta24393;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24382_SHARP_){
return f1.call(null,(((p1__24382_SHARP_ == null))?null:self__.f.call(null,p1__24382_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24392.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24390","meta24390",1573897092,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24389","cljs.core.async/t_cljs$core$async24389",-2026898464,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24393","meta24393",2005012077,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24392";

cljs.core.async.t_cljs$core$async24392.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24392");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24392 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24392(map_LT___$1,f__$1,ch__$1,meta24390__$1,___$2,fn1__$1,meta24393){
return (new cljs.core.async.t_cljs$core$async24392(map_LT___$1,f__$1,ch__$1,meta24390__$1,___$2,fn1__$1,meta24393));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24392(self__.map_LT_,self__.f,self__.ch,self__.meta24390,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24390","meta24390",1573897092,null)], null);
});

cljs.core.async.t_cljs$core$async24389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24389";

cljs.core.async.t_cljs$core$async24389.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24389");
});

cljs.core.async.__GT_t_cljs$core$async24389 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24389(map_LT___$1,f__$1,ch__$1,meta24390){
return (new cljs.core.async.t_cljs$core$async24389(map_LT___$1,f__$1,ch__$1,meta24390));
});

}

return (new cljs.core.async.t_cljs$core$async24389(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24398 = (function (map_GT_,f,ch,meta24399){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24399 = meta24399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24400,meta24399__$1){
var self__ = this;
var _24400__$1 = this;
return (new cljs.core.async.t_cljs$core$async24398(self__.map_GT_,self__.f,self__.ch,meta24399__$1));
});

cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24400){
var self__ = this;
var _24400__$1 = this;
return self__.meta24399;
});

cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24399","meta24399",314646387,null)], null);
});

cljs.core.async.t_cljs$core$async24398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24398";

cljs.core.async.t_cljs$core$async24398.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24398");
});

cljs.core.async.__GT_t_cljs$core$async24398 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24398(map_GT___$1,f__$1,ch__$1,meta24399){
return (new cljs.core.async.t_cljs$core$async24398(map_GT___$1,f__$1,ch__$1,meta24399));
});

}

return (new cljs.core.async.t_cljs$core$async24398(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24404 = (function (filter_GT_,p,ch,meta24405){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24405 = meta24405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24406,meta24405__$1){
var self__ = this;
var _24406__$1 = this;
return (new cljs.core.async.t_cljs$core$async24404(self__.filter_GT_,self__.p,self__.ch,meta24405__$1));
});

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24406){
var self__ = this;
var _24406__$1 = this;
return self__.meta24405;
});

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24405","meta24405",573353461,null)], null);
});

cljs.core.async.t_cljs$core$async24404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24404";

cljs.core.async.t_cljs$core$async24404.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24404");
});

cljs.core.async.__GT_t_cljs$core$async24404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24404(filter_GT___$1,p__$1,ch__$1,meta24405){
return (new cljs.core.async.t_cljs$core$async24404(filter_GT___$1,p__$1,ch__$1,meta24405));
});

}

return (new cljs.core.async.t_cljs$core$async24404(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24407 = [];
var len__19538__auto___24451 = arguments.length;
var i__19539__auto___24452 = (0);
while(true){
if((i__19539__auto___24452 < len__19538__auto___24451)){
args24407.push((arguments[i__19539__auto___24452]));

var G__24453 = (i__19539__auto___24452 + (1));
i__19539__auto___24452 = G__24453;
continue;
} else {
}
break;
}

var G__24409 = args24407.length;
switch (G__24409) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24407.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22205__auto___24455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24455,out){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24455,out){
return (function (state_24430){
var state_val_24431 = (state_24430[(1)]);
if((state_val_24431 === (7))){
var inst_24426 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24432_24456 = state_24430__$1;
(statearr_24432_24456[(2)] = inst_24426);

(statearr_24432_24456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (1))){
var state_24430__$1 = state_24430;
var statearr_24433_24457 = state_24430__$1;
(statearr_24433_24457[(2)] = null);

(statearr_24433_24457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (4))){
var inst_24412 = (state_24430[(7)]);
var inst_24412__$1 = (state_24430[(2)]);
var inst_24413 = (inst_24412__$1 == null);
var state_24430__$1 = (function (){var statearr_24434 = state_24430;
(statearr_24434[(7)] = inst_24412__$1);

return statearr_24434;
})();
if(cljs.core.truth_(inst_24413)){
var statearr_24435_24458 = state_24430__$1;
(statearr_24435_24458[(1)] = (5));

} else {
var statearr_24436_24459 = state_24430__$1;
(statearr_24436_24459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (6))){
var inst_24412 = (state_24430[(7)]);
var inst_24417 = p.call(null,inst_24412);
var state_24430__$1 = state_24430;
if(cljs.core.truth_(inst_24417)){
var statearr_24437_24460 = state_24430__$1;
(statearr_24437_24460[(1)] = (8));

} else {
var statearr_24438_24461 = state_24430__$1;
(statearr_24438_24461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (3))){
var inst_24428 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24430__$1,inst_24428);
} else {
if((state_val_24431 === (2))){
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24430__$1,(4),ch);
} else {
if((state_val_24431 === (11))){
var inst_24420 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24439_24462 = state_24430__$1;
(statearr_24439_24462[(2)] = inst_24420);

(statearr_24439_24462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (9))){
var state_24430__$1 = state_24430;
var statearr_24440_24463 = state_24430__$1;
(statearr_24440_24463[(2)] = null);

(statearr_24440_24463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (5))){
var inst_24415 = cljs.core.async.close_BANG_.call(null,out);
var state_24430__$1 = state_24430;
var statearr_24441_24464 = state_24430__$1;
(statearr_24441_24464[(2)] = inst_24415);

(statearr_24441_24464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (10))){
var inst_24423 = (state_24430[(2)]);
var state_24430__$1 = (function (){var statearr_24442 = state_24430;
(statearr_24442[(8)] = inst_24423);

return statearr_24442;
})();
var statearr_24443_24465 = state_24430__$1;
(statearr_24443_24465[(2)] = null);

(statearr_24443_24465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (8))){
var inst_24412 = (state_24430[(7)]);
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24430__$1,(11),out,inst_24412);
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
});})(c__22205__auto___24455,out))
;
return ((function (switch__22093__auto__,c__22205__auto___24455,out){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24447 = [null,null,null,null,null,null,null,null,null];
(statearr_24447[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24447[(1)] = (1));

return statearr_24447;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24430){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24448){if((e24448 instanceof Object)){
var ex__22097__auto__ = e24448;
var statearr_24449_24466 = state_24430;
(statearr_24449_24466[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24467 = state_24430;
state_24430 = G__24467;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24455,out))
})();
var state__22207__auto__ = (function (){var statearr_24450 = f__22206__auto__.call(null);
(statearr_24450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24455);

return statearr_24450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24455,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24468 = [];
var len__19538__auto___24471 = arguments.length;
var i__19539__auto___24472 = (0);
while(true){
if((i__19539__auto___24472 < len__19538__auto___24471)){
args24468.push((arguments[i__19539__auto___24472]));

var G__24473 = (i__19539__auto___24472 + (1));
i__19539__auto___24472 = G__24473;
continue;
} else {
}
break;
}

var G__24470 = args24468.length;
switch (G__24470) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24468.length)].join('')));

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
var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__){
return (function (state_24640){
var state_val_24641 = (state_24640[(1)]);
if((state_val_24641 === (7))){
var inst_24636 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
var statearr_24642_24683 = state_24640__$1;
(statearr_24642_24683[(2)] = inst_24636);

(statearr_24642_24683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (20))){
var inst_24606 = (state_24640[(7)]);
var inst_24617 = (state_24640[(2)]);
var inst_24618 = cljs.core.next.call(null,inst_24606);
var inst_24592 = inst_24618;
var inst_24593 = null;
var inst_24594 = (0);
var inst_24595 = (0);
var state_24640__$1 = (function (){var statearr_24643 = state_24640;
(statearr_24643[(8)] = inst_24617);

(statearr_24643[(9)] = inst_24592);

(statearr_24643[(10)] = inst_24594);

(statearr_24643[(11)] = inst_24593);

(statearr_24643[(12)] = inst_24595);

return statearr_24643;
})();
var statearr_24644_24684 = state_24640__$1;
(statearr_24644_24684[(2)] = null);

(statearr_24644_24684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (1))){
var state_24640__$1 = state_24640;
var statearr_24645_24685 = state_24640__$1;
(statearr_24645_24685[(2)] = null);

(statearr_24645_24685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (4))){
var inst_24581 = (state_24640[(13)]);
var inst_24581__$1 = (state_24640[(2)]);
var inst_24582 = (inst_24581__$1 == null);
var state_24640__$1 = (function (){var statearr_24646 = state_24640;
(statearr_24646[(13)] = inst_24581__$1);

return statearr_24646;
})();
if(cljs.core.truth_(inst_24582)){
var statearr_24647_24686 = state_24640__$1;
(statearr_24647_24686[(1)] = (5));

} else {
var statearr_24648_24687 = state_24640__$1;
(statearr_24648_24687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (15))){
var state_24640__$1 = state_24640;
var statearr_24652_24688 = state_24640__$1;
(statearr_24652_24688[(2)] = null);

(statearr_24652_24688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (21))){
var state_24640__$1 = state_24640;
var statearr_24653_24689 = state_24640__$1;
(statearr_24653_24689[(2)] = null);

(statearr_24653_24689[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (13))){
var inst_24592 = (state_24640[(9)]);
var inst_24594 = (state_24640[(10)]);
var inst_24593 = (state_24640[(11)]);
var inst_24595 = (state_24640[(12)]);
var inst_24602 = (state_24640[(2)]);
var inst_24603 = (inst_24595 + (1));
var tmp24649 = inst_24592;
var tmp24650 = inst_24594;
var tmp24651 = inst_24593;
var inst_24592__$1 = tmp24649;
var inst_24593__$1 = tmp24651;
var inst_24594__$1 = tmp24650;
var inst_24595__$1 = inst_24603;
var state_24640__$1 = (function (){var statearr_24654 = state_24640;
(statearr_24654[(9)] = inst_24592__$1);

(statearr_24654[(10)] = inst_24594__$1);

(statearr_24654[(11)] = inst_24593__$1);

(statearr_24654[(14)] = inst_24602);

(statearr_24654[(12)] = inst_24595__$1);

return statearr_24654;
})();
var statearr_24655_24690 = state_24640__$1;
(statearr_24655_24690[(2)] = null);

(statearr_24655_24690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (22))){
var state_24640__$1 = state_24640;
var statearr_24656_24691 = state_24640__$1;
(statearr_24656_24691[(2)] = null);

(statearr_24656_24691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (6))){
var inst_24581 = (state_24640[(13)]);
var inst_24590 = f.call(null,inst_24581);
var inst_24591 = cljs.core.seq.call(null,inst_24590);
var inst_24592 = inst_24591;
var inst_24593 = null;
var inst_24594 = (0);
var inst_24595 = (0);
var state_24640__$1 = (function (){var statearr_24657 = state_24640;
(statearr_24657[(9)] = inst_24592);

(statearr_24657[(10)] = inst_24594);

(statearr_24657[(11)] = inst_24593);

(statearr_24657[(12)] = inst_24595);

return statearr_24657;
})();
var statearr_24658_24692 = state_24640__$1;
(statearr_24658_24692[(2)] = null);

(statearr_24658_24692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (17))){
var inst_24606 = (state_24640[(7)]);
var inst_24610 = cljs.core.chunk_first.call(null,inst_24606);
var inst_24611 = cljs.core.chunk_rest.call(null,inst_24606);
var inst_24612 = cljs.core.count.call(null,inst_24610);
var inst_24592 = inst_24611;
var inst_24593 = inst_24610;
var inst_24594 = inst_24612;
var inst_24595 = (0);
var state_24640__$1 = (function (){var statearr_24659 = state_24640;
(statearr_24659[(9)] = inst_24592);

(statearr_24659[(10)] = inst_24594);

(statearr_24659[(11)] = inst_24593);

(statearr_24659[(12)] = inst_24595);

return statearr_24659;
})();
var statearr_24660_24693 = state_24640__$1;
(statearr_24660_24693[(2)] = null);

(statearr_24660_24693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (3))){
var inst_24638 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24640__$1,inst_24638);
} else {
if((state_val_24641 === (12))){
var inst_24626 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
var statearr_24661_24694 = state_24640__$1;
(statearr_24661_24694[(2)] = inst_24626);

(statearr_24661_24694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (2))){
var state_24640__$1 = state_24640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24640__$1,(4),in$);
} else {
if((state_val_24641 === (23))){
var inst_24634 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
var statearr_24662_24695 = state_24640__$1;
(statearr_24662_24695[(2)] = inst_24634);

(statearr_24662_24695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (19))){
var inst_24621 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
var statearr_24663_24696 = state_24640__$1;
(statearr_24663_24696[(2)] = inst_24621);

(statearr_24663_24696[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (11))){
var inst_24592 = (state_24640[(9)]);
var inst_24606 = (state_24640[(7)]);
var inst_24606__$1 = cljs.core.seq.call(null,inst_24592);
var state_24640__$1 = (function (){var statearr_24664 = state_24640;
(statearr_24664[(7)] = inst_24606__$1);

return statearr_24664;
})();
if(inst_24606__$1){
var statearr_24665_24697 = state_24640__$1;
(statearr_24665_24697[(1)] = (14));

} else {
var statearr_24666_24698 = state_24640__$1;
(statearr_24666_24698[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (9))){
var inst_24628 = (state_24640[(2)]);
var inst_24629 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24640__$1 = (function (){var statearr_24667 = state_24640;
(statearr_24667[(15)] = inst_24628);

return statearr_24667;
})();
if(cljs.core.truth_(inst_24629)){
var statearr_24668_24699 = state_24640__$1;
(statearr_24668_24699[(1)] = (21));

} else {
var statearr_24669_24700 = state_24640__$1;
(statearr_24669_24700[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (5))){
var inst_24584 = cljs.core.async.close_BANG_.call(null,out);
var state_24640__$1 = state_24640;
var statearr_24670_24701 = state_24640__$1;
(statearr_24670_24701[(2)] = inst_24584);

(statearr_24670_24701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (14))){
var inst_24606 = (state_24640[(7)]);
var inst_24608 = cljs.core.chunked_seq_QMARK_.call(null,inst_24606);
var state_24640__$1 = state_24640;
if(inst_24608){
var statearr_24671_24702 = state_24640__$1;
(statearr_24671_24702[(1)] = (17));

} else {
var statearr_24672_24703 = state_24640__$1;
(statearr_24672_24703[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (16))){
var inst_24624 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
var statearr_24673_24704 = state_24640__$1;
(statearr_24673_24704[(2)] = inst_24624);

(statearr_24673_24704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24641 === (10))){
var inst_24593 = (state_24640[(11)]);
var inst_24595 = (state_24640[(12)]);
var inst_24600 = cljs.core._nth.call(null,inst_24593,inst_24595);
var state_24640__$1 = state_24640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24640__$1,(13),out,inst_24600);
} else {
if((state_val_24641 === (18))){
var inst_24606 = (state_24640[(7)]);
var inst_24615 = cljs.core.first.call(null,inst_24606);
var state_24640__$1 = state_24640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24640__$1,(20),out,inst_24615);
} else {
if((state_val_24641 === (8))){
var inst_24594 = (state_24640[(10)]);
var inst_24595 = (state_24640[(12)]);
var inst_24597 = (inst_24595 < inst_24594);
var inst_24598 = inst_24597;
var state_24640__$1 = state_24640;
if(cljs.core.truth_(inst_24598)){
var statearr_24674_24705 = state_24640__$1;
(statearr_24674_24705[(1)] = (10));

} else {
var statearr_24675_24706 = state_24640__$1;
(statearr_24675_24706[(1)] = (11));

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
});})(c__22205__auto__))
;
return ((function (switch__22093__auto__,c__22205__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22094__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22094__auto____0 = (function (){
var statearr_24679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24679[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22094__auto__);

(statearr_24679[(1)] = (1));

return statearr_24679;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22094__auto____1 = (function (state_24640){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24680){if((e24680 instanceof Object)){
var ex__22097__auto__ = e24680;
var statearr_24681_24707 = state_24640;
(statearr_24681_24707[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24708 = state_24640;
state_24640 = G__24708;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22094__auto__ = function(state_24640){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22094__auto____1.call(this,state_24640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22094__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22094__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__))
})();
var state__22207__auto__ = (function (){var statearr_24682 = f__22206__auto__.call(null);
(statearr_24682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__))
);

return c__22205__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24709 = [];
var len__19538__auto___24712 = arguments.length;
var i__19539__auto___24713 = (0);
while(true){
if((i__19539__auto___24713 < len__19538__auto___24712)){
args24709.push((arguments[i__19539__auto___24713]));

var G__24714 = (i__19539__auto___24713 + (1));
i__19539__auto___24713 = G__24714;
continue;
} else {
}
break;
}

var G__24711 = args24709.length;
switch (G__24711) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24709.length)].join('')));

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
var args24716 = [];
var len__19538__auto___24719 = arguments.length;
var i__19539__auto___24720 = (0);
while(true){
if((i__19539__auto___24720 < len__19538__auto___24719)){
args24716.push((arguments[i__19539__auto___24720]));

var G__24721 = (i__19539__auto___24720 + (1));
i__19539__auto___24720 = G__24721;
continue;
} else {
}
break;
}

var G__24718 = args24716.length;
switch (G__24718) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24716.length)].join('')));

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
var args24723 = [];
var len__19538__auto___24774 = arguments.length;
var i__19539__auto___24775 = (0);
while(true){
if((i__19539__auto___24775 < len__19538__auto___24774)){
args24723.push((arguments[i__19539__auto___24775]));

var G__24776 = (i__19539__auto___24775 + (1));
i__19539__auto___24775 = G__24776;
continue;
} else {
}
break;
}

var G__24725 = args24723.length;
switch (G__24725) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24723.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22205__auto___24778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24778,out){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24778,out){
return (function (state_24749){
var state_val_24750 = (state_24749[(1)]);
if((state_val_24750 === (7))){
var inst_24744 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24751_24779 = state_24749__$1;
(statearr_24751_24779[(2)] = inst_24744);

(statearr_24751_24779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24750 === (1))){
var inst_24726 = null;
var state_24749__$1 = (function (){var statearr_24752 = state_24749;
(statearr_24752[(7)] = inst_24726);

return statearr_24752;
})();
var statearr_24753_24780 = state_24749__$1;
(statearr_24753_24780[(2)] = null);

(statearr_24753_24780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24750 === (4))){
var inst_24729 = (state_24749[(8)]);
var inst_24729__$1 = (state_24749[(2)]);
var inst_24730 = (inst_24729__$1 == null);
var inst_24731 = cljs.core.not.call(null,inst_24730);
var state_24749__$1 = (function (){var statearr_24754 = state_24749;
(statearr_24754[(8)] = inst_24729__$1);

return statearr_24754;
})();
if(inst_24731){
var statearr_24755_24781 = state_24749__$1;
(statearr_24755_24781[(1)] = (5));

} else {
var statearr_24756_24782 = state_24749__$1;
(statearr_24756_24782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24750 === (6))){
var state_24749__$1 = state_24749;
var statearr_24757_24783 = state_24749__$1;
(statearr_24757_24783[(2)] = null);

(statearr_24757_24783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24750 === (3))){
var inst_24746 = (state_24749[(2)]);
var inst_24747 = cljs.core.async.close_BANG_.call(null,out);
var state_24749__$1 = (function (){var statearr_24758 = state_24749;
(statearr_24758[(9)] = inst_24746);

return statearr_24758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24749__$1,inst_24747);
} else {
if((state_val_24750 === (2))){
var state_24749__$1 = state_24749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24749__$1,(4),ch);
} else {
if((state_val_24750 === (11))){
var inst_24729 = (state_24749[(8)]);
var inst_24738 = (state_24749[(2)]);
var inst_24726 = inst_24729;
var state_24749__$1 = (function (){var statearr_24759 = state_24749;
(statearr_24759[(10)] = inst_24738);

(statearr_24759[(7)] = inst_24726);

return statearr_24759;
})();
var statearr_24760_24784 = state_24749__$1;
(statearr_24760_24784[(2)] = null);

(statearr_24760_24784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24750 === (9))){
var inst_24729 = (state_24749[(8)]);
var state_24749__$1 = state_24749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24749__$1,(11),out,inst_24729);
} else {
if((state_val_24750 === (5))){
var inst_24726 = (state_24749[(7)]);
var inst_24729 = (state_24749[(8)]);
var inst_24733 = cljs.core._EQ_.call(null,inst_24729,inst_24726);
var state_24749__$1 = state_24749;
if(inst_24733){
var statearr_24762_24785 = state_24749__$1;
(statearr_24762_24785[(1)] = (8));

} else {
var statearr_24763_24786 = state_24749__$1;
(statearr_24763_24786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24750 === (10))){
var inst_24741 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24764_24787 = state_24749__$1;
(statearr_24764_24787[(2)] = inst_24741);

(statearr_24764_24787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24750 === (8))){
var inst_24726 = (state_24749[(7)]);
var tmp24761 = inst_24726;
var inst_24726__$1 = tmp24761;
var state_24749__$1 = (function (){var statearr_24765 = state_24749;
(statearr_24765[(7)] = inst_24726__$1);

return statearr_24765;
})();
var statearr_24766_24788 = state_24749__$1;
(statearr_24766_24788[(2)] = null);

(statearr_24766_24788[(1)] = (2));


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
});})(c__22205__auto___24778,out))
;
return ((function (switch__22093__auto__,c__22205__auto___24778,out){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24770[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24770[(1)] = (1));

return statearr_24770;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24749){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24771){if((e24771 instanceof Object)){
var ex__22097__auto__ = e24771;
var statearr_24772_24789 = state_24749;
(statearr_24772_24789[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24790 = state_24749;
state_24749 = G__24790;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24778,out))
})();
var state__22207__auto__ = (function (){var statearr_24773 = f__22206__auto__.call(null);
(statearr_24773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24778);

return statearr_24773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24778,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24791 = [];
var len__19538__auto___24861 = arguments.length;
var i__19539__auto___24862 = (0);
while(true){
if((i__19539__auto___24862 < len__19538__auto___24861)){
args24791.push((arguments[i__19539__auto___24862]));

var G__24863 = (i__19539__auto___24862 + (1));
i__19539__auto___24862 = G__24863;
continue;
} else {
}
break;
}

var G__24793 = args24791.length;
switch (G__24793) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24791.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22205__auto___24865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24865,out){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24865,out){
return (function (state_24831){
var state_val_24832 = (state_24831[(1)]);
if((state_val_24832 === (7))){
var inst_24827 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24833_24866 = state_24831__$1;
(statearr_24833_24866[(2)] = inst_24827);

(statearr_24833_24866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (1))){
var inst_24794 = (new Array(n));
var inst_24795 = inst_24794;
var inst_24796 = (0);
var state_24831__$1 = (function (){var statearr_24834 = state_24831;
(statearr_24834[(7)] = inst_24795);

(statearr_24834[(8)] = inst_24796);

return statearr_24834;
})();
var statearr_24835_24867 = state_24831__$1;
(statearr_24835_24867[(2)] = null);

(statearr_24835_24867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (4))){
var inst_24799 = (state_24831[(9)]);
var inst_24799__$1 = (state_24831[(2)]);
var inst_24800 = (inst_24799__$1 == null);
var inst_24801 = cljs.core.not.call(null,inst_24800);
var state_24831__$1 = (function (){var statearr_24836 = state_24831;
(statearr_24836[(9)] = inst_24799__$1);

return statearr_24836;
})();
if(inst_24801){
var statearr_24837_24868 = state_24831__$1;
(statearr_24837_24868[(1)] = (5));

} else {
var statearr_24838_24869 = state_24831__$1;
(statearr_24838_24869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (15))){
var inst_24821 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24839_24870 = state_24831__$1;
(statearr_24839_24870[(2)] = inst_24821);

(statearr_24839_24870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (13))){
var state_24831__$1 = state_24831;
var statearr_24840_24871 = state_24831__$1;
(statearr_24840_24871[(2)] = null);

(statearr_24840_24871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (6))){
var inst_24796 = (state_24831[(8)]);
var inst_24817 = (inst_24796 > (0));
var state_24831__$1 = state_24831;
if(cljs.core.truth_(inst_24817)){
var statearr_24841_24872 = state_24831__$1;
(statearr_24841_24872[(1)] = (12));

} else {
var statearr_24842_24873 = state_24831__$1;
(statearr_24842_24873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (3))){
var inst_24829 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24831__$1,inst_24829);
} else {
if((state_val_24832 === (12))){
var inst_24795 = (state_24831[(7)]);
var inst_24819 = cljs.core.vec.call(null,inst_24795);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24831__$1,(15),out,inst_24819);
} else {
if((state_val_24832 === (2))){
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24831__$1,(4),ch);
} else {
if((state_val_24832 === (11))){
var inst_24811 = (state_24831[(2)]);
var inst_24812 = (new Array(n));
var inst_24795 = inst_24812;
var inst_24796 = (0);
var state_24831__$1 = (function (){var statearr_24843 = state_24831;
(statearr_24843[(7)] = inst_24795);

(statearr_24843[(8)] = inst_24796);

(statearr_24843[(10)] = inst_24811);

return statearr_24843;
})();
var statearr_24844_24874 = state_24831__$1;
(statearr_24844_24874[(2)] = null);

(statearr_24844_24874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (9))){
var inst_24795 = (state_24831[(7)]);
var inst_24809 = cljs.core.vec.call(null,inst_24795);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24831__$1,(11),out,inst_24809);
} else {
if((state_val_24832 === (5))){
var inst_24804 = (state_24831[(11)]);
var inst_24795 = (state_24831[(7)]);
var inst_24799 = (state_24831[(9)]);
var inst_24796 = (state_24831[(8)]);
var inst_24803 = (inst_24795[inst_24796] = inst_24799);
var inst_24804__$1 = (inst_24796 + (1));
var inst_24805 = (inst_24804__$1 < n);
var state_24831__$1 = (function (){var statearr_24845 = state_24831;
(statearr_24845[(11)] = inst_24804__$1);

(statearr_24845[(12)] = inst_24803);

return statearr_24845;
})();
if(cljs.core.truth_(inst_24805)){
var statearr_24846_24875 = state_24831__$1;
(statearr_24846_24875[(1)] = (8));

} else {
var statearr_24847_24876 = state_24831__$1;
(statearr_24847_24876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (14))){
var inst_24824 = (state_24831[(2)]);
var inst_24825 = cljs.core.async.close_BANG_.call(null,out);
var state_24831__$1 = (function (){var statearr_24849 = state_24831;
(statearr_24849[(13)] = inst_24824);

return statearr_24849;
})();
var statearr_24850_24877 = state_24831__$1;
(statearr_24850_24877[(2)] = inst_24825);

(statearr_24850_24877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (10))){
var inst_24815 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24851_24878 = state_24831__$1;
(statearr_24851_24878[(2)] = inst_24815);

(statearr_24851_24878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (8))){
var inst_24804 = (state_24831[(11)]);
var inst_24795 = (state_24831[(7)]);
var tmp24848 = inst_24795;
var inst_24795__$1 = tmp24848;
var inst_24796 = inst_24804;
var state_24831__$1 = (function (){var statearr_24852 = state_24831;
(statearr_24852[(7)] = inst_24795__$1);

(statearr_24852[(8)] = inst_24796);

return statearr_24852;
})();
var statearr_24853_24879 = state_24831__$1;
(statearr_24853_24879[(2)] = null);

(statearr_24853_24879[(1)] = (2));


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
});})(c__22205__auto___24865,out))
;
return ((function (switch__22093__auto__,c__22205__auto___24865,out){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24857[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24857[(1)] = (1));

return statearr_24857;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24831){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24858){if((e24858 instanceof Object)){
var ex__22097__auto__ = e24858;
var statearr_24859_24880 = state_24831;
(statearr_24859_24880[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24881 = state_24831;
state_24831 = G__24881;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24865,out))
})();
var state__22207__auto__ = (function (){var statearr_24860 = f__22206__auto__.call(null);
(statearr_24860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24865);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24865,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24882 = [];
var len__19538__auto___24956 = arguments.length;
var i__19539__auto___24957 = (0);
while(true){
if((i__19539__auto___24957 < len__19538__auto___24956)){
args24882.push((arguments[i__19539__auto___24957]));

var G__24958 = (i__19539__auto___24957 + (1));
i__19539__auto___24957 = G__24958;
continue;
} else {
}
break;
}

var G__24884 = args24882.length;
switch (G__24884) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24882.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22205__auto___24960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___24960,out){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___24960,out){
return (function (state_24926){
var state_val_24927 = (state_24926[(1)]);
if((state_val_24927 === (7))){
var inst_24922 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24928_24961 = state_24926__$1;
(statearr_24928_24961[(2)] = inst_24922);

(statearr_24928_24961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (1))){
var inst_24885 = [];
var inst_24886 = inst_24885;
var inst_24887 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24926__$1 = (function (){var statearr_24929 = state_24926;
(statearr_24929[(7)] = inst_24887);

(statearr_24929[(8)] = inst_24886);

return statearr_24929;
})();
var statearr_24930_24962 = state_24926__$1;
(statearr_24930_24962[(2)] = null);

(statearr_24930_24962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (4))){
var inst_24890 = (state_24926[(9)]);
var inst_24890__$1 = (state_24926[(2)]);
var inst_24891 = (inst_24890__$1 == null);
var inst_24892 = cljs.core.not.call(null,inst_24891);
var state_24926__$1 = (function (){var statearr_24931 = state_24926;
(statearr_24931[(9)] = inst_24890__$1);

return statearr_24931;
})();
if(inst_24892){
var statearr_24932_24963 = state_24926__$1;
(statearr_24932_24963[(1)] = (5));

} else {
var statearr_24933_24964 = state_24926__$1;
(statearr_24933_24964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (15))){
var inst_24916 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24934_24965 = state_24926__$1;
(statearr_24934_24965[(2)] = inst_24916);

(statearr_24934_24965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (13))){
var state_24926__$1 = state_24926;
var statearr_24935_24966 = state_24926__$1;
(statearr_24935_24966[(2)] = null);

(statearr_24935_24966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (6))){
var inst_24886 = (state_24926[(8)]);
var inst_24911 = inst_24886.length;
var inst_24912 = (inst_24911 > (0));
var state_24926__$1 = state_24926;
if(cljs.core.truth_(inst_24912)){
var statearr_24936_24967 = state_24926__$1;
(statearr_24936_24967[(1)] = (12));

} else {
var statearr_24937_24968 = state_24926__$1;
(statearr_24937_24968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (3))){
var inst_24924 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24926__$1,inst_24924);
} else {
if((state_val_24927 === (12))){
var inst_24886 = (state_24926[(8)]);
var inst_24914 = cljs.core.vec.call(null,inst_24886);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24926__$1,(15),out,inst_24914);
} else {
if((state_val_24927 === (2))){
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24926__$1,(4),ch);
} else {
if((state_val_24927 === (11))){
var inst_24894 = (state_24926[(10)]);
var inst_24890 = (state_24926[(9)]);
var inst_24904 = (state_24926[(2)]);
var inst_24905 = [];
var inst_24906 = inst_24905.push(inst_24890);
var inst_24886 = inst_24905;
var inst_24887 = inst_24894;
var state_24926__$1 = (function (){var statearr_24938 = state_24926;
(statearr_24938[(7)] = inst_24887);

(statearr_24938[(11)] = inst_24906);

(statearr_24938[(8)] = inst_24886);

(statearr_24938[(12)] = inst_24904);

return statearr_24938;
})();
var statearr_24939_24969 = state_24926__$1;
(statearr_24939_24969[(2)] = null);

(statearr_24939_24969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (9))){
var inst_24886 = (state_24926[(8)]);
var inst_24902 = cljs.core.vec.call(null,inst_24886);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24926__$1,(11),out,inst_24902);
} else {
if((state_val_24927 === (5))){
var inst_24894 = (state_24926[(10)]);
var inst_24887 = (state_24926[(7)]);
var inst_24890 = (state_24926[(9)]);
var inst_24894__$1 = f.call(null,inst_24890);
var inst_24895 = cljs.core._EQ_.call(null,inst_24894__$1,inst_24887);
var inst_24896 = cljs.core.keyword_identical_QMARK_.call(null,inst_24887,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24897 = (inst_24895) || (inst_24896);
var state_24926__$1 = (function (){var statearr_24940 = state_24926;
(statearr_24940[(10)] = inst_24894__$1);

return statearr_24940;
})();
if(cljs.core.truth_(inst_24897)){
var statearr_24941_24970 = state_24926__$1;
(statearr_24941_24970[(1)] = (8));

} else {
var statearr_24942_24971 = state_24926__$1;
(statearr_24942_24971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (14))){
var inst_24919 = (state_24926[(2)]);
var inst_24920 = cljs.core.async.close_BANG_.call(null,out);
var state_24926__$1 = (function (){var statearr_24944 = state_24926;
(statearr_24944[(13)] = inst_24919);

return statearr_24944;
})();
var statearr_24945_24972 = state_24926__$1;
(statearr_24945_24972[(2)] = inst_24920);

(statearr_24945_24972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (10))){
var inst_24909 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24946_24973 = state_24926__$1;
(statearr_24946_24973[(2)] = inst_24909);

(statearr_24946_24973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (8))){
var inst_24894 = (state_24926[(10)]);
var inst_24890 = (state_24926[(9)]);
var inst_24886 = (state_24926[(8)]);
var inst_24899 = inst_24886.push(inst_24890);
var tmp24943 = inst_24886;
var inst_24886__$1 = tmp24943;
var inst_24887 = inst_24894;
var state_24926__$1 = (function (){var statearr_24947 = state_24926;
(statearr_24947[(7)] = inst_24887);

(statearr_24947[(8)] = inst_24886__$1);

(statearr_24947[(14)] = inst_24899);

return statearr_24947;
})();
var statearr_24948_24974 = state_24926__$1;
(statearr_24948_24974[(2)] = null);

(statearr_24948_24974[(1)] = (2));


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
});})(c__22205__auto___24960,out))
;
return ((function (switch__22093__auto__,c__22205__auto___24960,out){
return (function() {
var cljs$core$async$state_machine__22094__auto__ = null;
var cljs$core$async$state_machine__22094__auto____0 = (function (){
var statearr_24952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24952[(0)] = cljs$core$async$state_machine__22094__auto__);

(statearr_24952[(1)] = (1));

return statearr_24952;
});
var cljs$core$async$state_machine__22094__auto____1 = (function (state_24926){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_24926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e24953){if((e24953 instanceof Object)){
var ex__22097__auto__ = e24953;
var statearr_24954_24975 = state_24926;
(statearr_24954_24975[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24976 = state_24926;
state_24926 = G__24976;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
cljs$core$async$state_machine__22094__auto__ = function(state_24926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22094__auto____1.call(this,state_24926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22094__auto____0;
cljs$core$async$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22094__auto____1;
return cljs$core$async$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___24960,out))
})();
var state__22207__auto__ = (function (){var statearr_24955 = f__22206__auto__.call(null);
(statearr_24955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___24960);

return statearr_24955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___24960,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map