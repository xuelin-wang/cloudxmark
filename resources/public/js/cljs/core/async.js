// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28471 = [];
var len__22628__auto___28477 = arguments.length;
var i__22629__auto___28478 = (0);
while(true){
if((i__22629__auto___28478 < len__22628__auto___28477)){
args28471.push((arguments[i__22629__auto___28478]));

var G__28479 = (i__22629__auto___28478 + (1));
i__22629__auto___28478 = G__28479;
continue;
} else {
}
break;
}

var G__28473 = args28471.length;
switch (G__28473) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28471.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28474 = (function (f,blockable,meta28475){
this.f = f;
this.blockable = blockable;
this.meta28475 = meta28475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28476,meta28475__$1){
var self__ = this;
var _28476__$1 = this;
return (new cljs.core.async.t_cljs$core$async28474(self__.f,self__.blockable,meta28475__$1));
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28476){
var self__ = this;
var _28476__$1 = this;
return self__.meta28475;
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28475","meta28475",-1823000600,null)], null);
});

cljs.core.async.t_cljs$core$async28474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28474";

cljs.core.async.t_cljs$core$async28474.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async28474");
});

cljs.core.async.__GT_t_cljs$core$async28474 = (function cljs$core$async$__GT_t_cljs$core$async28474(f__$1,blockable__$1,meta28475){
return (new cljs.core.async.t_cljs$core$async28474(f__$1,blockable__$1,meta28475));
});

}

return (new cljs.core.async.t_cljs$core$async28474(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28483 = [];
var len__22628__auto___28486 = arguments.length;
var i__22629__auto___28487 = (0);
while(true){
if((i__22629__auto___28487 < len__22628__auto___28486)){
args28483.push((arguments[i__22629__auto___28487]));

var G__28488 = (i__22629__auto___28487 + (1));
i__22629__auto___28487 = G__28488;
continue;
} else {
}
break;
}

var G__28485 = args28483.length;
switch (G__28485) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28483.length)].join('')));

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
var args28490 = [];
var len__22628__auto___28493 = arguments.length;
var i__22629__auto___28494 = (0);
while(true){
if((i__22629__auto___28494 < len__22628__auto___28493)){
args28490.push((arguments[i__22629__auto___28494]));

var G__28495 = (i__22629__auto___28494 + (1));
i__22629__auto___28494 = G__28495;
continue;
} else {
}
break;
}

var G__28492 = args28490.length;
switch (G__28492) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28490.length)].join('')));

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
var args28497 = [];
var len__22628__auto___28500 = arguments.length;
var i__22629__auto___28501 = (0);
while(true){
if((i__22629__auto___28501 < len__22628__auto___28500)){
args28497.push((arguments[i__22629__auto___28501]));

var G__28502 = (i__22629__auto___28501 + (1));
i__22629__auto___28501 = G__28502;
continue;
} else {
}
break;
}

var G__28499 = args28497.length;
switch (G__28499) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28497.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28504 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28504);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28504,ret){
return (function (){
return fn1.call(null,val_28504);
});})(val_28504,ret))
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
var args28505 = [];
var len__22628__auto___28508 = arguments.length;
var i__22629__auto___28509 = (0);
while(true){
if((i__22629__auto___28509 < len__22628__auto___28508)){
args28505.push((arguments[i__22629__auto___28509]));

var G__28510 = (i__22629__auto___28509 + (1));
i__22629__auto___28509 = G__28510;
continue;
} else {
}
break;
}

var G__28507 = args28505.length;
switch (G__28507) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28505.length)].join('')));

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
var n__22458__auto___28512 = n;
var x_28513 = (0);
while(true){
if((x_28513 < n__22458__auto___28512)){
(a[x_28513] = (0));

var G__28514 = (x_28513 + (1));
x_28513 = G__28514;
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

var G__28515 = (i + (1));
i = G__28515;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28519 = (function (alt_flag,flag,meta28520){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28520 = meta28520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28521,meta28520__$1){
var self__ = this;
var _28521__$1 = this;
return (new cljs.core.async.t_cljs$core$async28519(self__.alt_flag,self__.flag,meta28520__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28521){
var self__ = this;
var _28521__$1 = this;
return self__.meta28520;
});})(flag))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28519.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28520","meta28520",175290398,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28519";

cljs.core.async.t_cljs$core$async28519.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async28519");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28519 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28519(alt_flag__$1,flag__$1,meta28520){
return (new cljs.core.async.t_cljs$core$async28519(alt_flag__$1,flag__$1,meta28520));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28519(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28525 = (function (alt_handler,flag,cb,meta28526){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28526 = meta28526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28527,meta28526__$1){
var self__ = this;
var _28527__$1 = this;
return (new cljs.core.async.t_cljs$core$async28525(self__.alt_handler,self__.flag,self__.cb,meta28526__$1));
});

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28527){
var self__ = this;
var _28527__$1 = this;
return self__.meta28526;
});

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28526","meta28526",1287297177,null)], null);
});

cljs.core.async.t_cljs$core$async28525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28525";

cljs.core.async.t_cljs$core$async28525.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async28525");
});

cljs.core.async.__GT_t_cljs$core$async28525 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28525(alt_handler__$1,flag__$1,cb__$1,meta28526){
return (new cljs.core.async.t_cljs$core$async28525(alt_handler__$1,flag__$1,cb__$1,meta28526));
});

}

return (new cljs.core.async.t_cljs$core$async28525(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28528_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28528_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28529_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28529_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21445__auto__ = wport;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28530 = (i + (1));
i = G__28530;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21445__auto__ = ret;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__21433__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21433__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21433__auto__;
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
var args__22635__auto__ = [];
var len__22628__auto___28536 = arguments.length;
var i__22629__auto___28537 = (0);
while(true){
if((i__22629__auto___28537 < len__22628__auto___28536)){
args__22635__auto__.push((arguments[i__22629__auto___28537]));

var G__28538 = (i__22629__auto___28537 + (1));
i__22629__auto___28537 = G__28538;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28533){
var map__28534 = p__28533;
var map__28534__$1 = ((((!((map__28534 == null)))?((((map__28534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28534):map__28534);
var opts = map__28534__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28531){
var G__28532 = cljs.core.first.call(null,seq28531);
var seq28531__$1 = cljs.core.next.call(null,seq28531);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28532,seq28531__$1);
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
var args28539 = [];
var len__22628__auto___28589 = arguments.length;
var i__22629__auto___28590 = (0);
while(true){
if((i__22629__auto___28590 < len__22628__auto___28589)){
args28539.push((arguments[i__22629__auto___28590]));

var G__28591 = (i__22629__auto___28590 + (1));
i__22629__auto___28590 = G__28591;
continue;
} else {
}
break;
}

var G__28541 = args28539.length;
switch (G__28541) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28539.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28412__auto___28593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___28593){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___28593){
return (function (state_28565){
var state_val_28566 = (state_28565[(1)]);
if((state_val_28566 === (7))){
var inst_28561 = (state_28565[(2)]);
var state_28565__$1 = state_28565;
var statearr_28567_28594 = state_28565__$1;
(statearr_28567_28594[(2)] = inst_28561);

(statearr_28567_28594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (1))){
var state_28565__$1 = state_28565;
var statearr_28568_28595 = state_28565__$1;
(statearr_28568_28595[(2)] = null);

(statearr_28568_28595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (4))){
var inst_28544 = (state_28565[(7)]);
var inst_28544__$1 = (state_28565[(2)]);
var inst_28545 = (inst_28544__$1 == null);
var state_28565__$1 = (function (){var statearr_28569 = state_28565;
(statearr_28569[(7)] = inst_28544__$1);

return statearr_28569;
})();
if(cljs.core.truth_(inst_28545)){
var statearr_28570_28596 = state_28565__$1;
(statearr_28570_28596[(1)] = (5));

} else {
var statearr_28571_28597 = state_28565__$1;
(statearr_28571_28597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (13))){
var state_28565__$1 = state_28565;
var statearr_28572_28598 = state_28565__$1;
(statearr_28572_28598[(2)] = null);

(statearr_28572_28598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (6))){
var inst_28544 = (state_28565[(7)]);
var state_28565__$1 = state_28565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28565__$1,(11),to,inst_28544);
} else {
if((state_val_28566 === (3))){
var inst_28563 = (state_28565[(2)]);
var state_28565__$1 = state_28565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28565__$1,inst_28563);
} else {
if((state_val_28566 === (12))){
var state_28565__$1 = state_28565;
var statearr_28573_28599 = state_28565__$1;
(statearr_28573_28599[(2)] = null);

(statearr_28573_28599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (2))){
var state_28565__$1 = state_28565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28565__$1,(4),from);
} else {
if((state_val_28566 === (11))){
var inst_28554 = (state_28565[(2)]);
var state_28565__$1 = state_28565;
if(cljs.core.truth_(inst_28554)){
var statearr_28574_28600 = state_28565__$1;
(statearr_28574_28600[(1)] = (12));

} else {
var statearr_28575_28601 = state_28565__$1;
(statearr_28575_28601[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (9))){
var state_28565__$1 = state_28565;
var statearr_28576_28602 = state_28565__$1;
(statearr_28576_28602[(2)] = null);

(statearr_28576_28602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (5))){
var state_28565__$1 = state_28565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28577_28603 = state_28565__$1;
(statearr_28577_28603[(1)] = (8));

} else {
var statearr_28578_28604 = state_28565__$1;
(statearr_28578_28604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (14))){
var inst_28559 = (state_28565[(2)]);
var state_28565__$1 = state_28565;
var statearr_28579_28605 = state_28565__$1;
(statearr_28579_28605[(2)] = inst_28559);

(statearr_28579_28605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (10))){
var inst_28551 = (state_28565[(2)]);
var state_28565__$1 = state_28565;
var statearr_28580_28606 = state_28565__$1;
(statearr_28580_28606[(2)] = inst_28551);

(statearr_28580_28606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (8))){
var inst_28548 = cljs.core.async.close_BANG_.call(null,to);
var state_28565__$1 = state_28565;
var statearr_28581_28607 = state_28565__$1;
(statearr_28581_28607[(2)] = inst_28548);

(statearr_28581_28607[(1)] = (10));


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
});})(c__28412__auto___28593))
;
return ((function (switch__28298__auto__,c__28412__auto___28593){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_28585 = [null,null,null,null,null,null,null,null];
(statearr_28585[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_28585[(1)] = (1));

return statearr_28585;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_28565){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_28565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e28586){if((e28586 instanceof Object)){
var ex__28302__auto__ = e28586;
var statearr_28587_28608 = state_28565;
(statearr_28587_28608[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28609 = state_28565;
state_28565 = G__28609;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_28565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_28565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___28593))
})();
var state__28414__auto__ = (function (){var statearr_28588 = f__28413__auto__.call(null);
(statearr_28588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___28593);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___28593))
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
return (function (p__28797){
var vec__28798 = p__28797;
var v = cljs.core.nth.call(null,vec__28798,(0),null);
var p = cljs.core.nth.call(null,vec__28798,(1),null);
var job = vec__28798;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28412__auto___28984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___28984,res,vec__28798,v,p,job,jobs,results){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___28984,res,vec__28798,v,p,job,jobs,results){
return (function (state_28805){
var state_val_28806 = (state_28805[(1)]);
if((state_val_28806 === (1))){
var state_28805__$1 = state_28805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28805__$1,(2),res,v);
} else {
if((state_val_28806 === (2))){
var inst_28802 = (state_28805[(2)]);
var inst_28803 = cljs.core.async.close_BANG_.call(null,res);
var state_28805__$1 = (function (){var statearr_28807 = state_28805;
(statearr_28807[(7)] = inst_28802);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28805__$1,inst_28803);
} else {
return null;
}
}
});})(c__28412__auto___28984,res,vec__28798,v,p,job,jobs,results))
;
return ((function (switch__28298__auto__,c__28412__auto___28984,res,vec__28798,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0 = (function (){
var statearr_28811 = [null,null,null,null,null,null,null,null];
(statearr_28811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__);

(statearr_28811[(1)] = (1));

return statearr_28811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1 = (function (state_28805){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_28805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e28812){if((e28812 instanceof Object)){
var ex__28302__auto__ = e28812;
var statearr_28813_28985 = state_28805;
(statearr_28813_28985[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28986 = state_28805;
state_28805 = G__28986;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = function(state_28805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1.call(this,state_28805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___28984,res,vec__28798,v,p,job,jobs,results))
})();
var state__28414__auto__ = (function (){var statearr_28814 = f__28413__auto__.call(null);
(statearr_28814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___28984);

return statearr_28814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___28984,res,vec__28798,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28815){
var vec__28816 = p__28815;
var v = cljs.core.nth.call(null,vec__28816,(0),null);
var p = cljs.core.nth.call(null,vec__28816,(1),null);
var job = vec__28816;
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
var n__22458__auto___28987 = n;
var __28988 = (0);
while(true){
if((__28988 < n__22458__auto___28987)){
var G__28819_28989 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28819_28989) {
case "compute":
var c__28412__auto___28991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28988,c__28412__auto___28991,G__28819_28989,n__22458__auto___28987,jobs,results,process,async){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (__28988,c__28412__auto___28991,G__28819_28989,n__22458__auto___28987,jobs,results,process,async){
return (function (state_28832){
var state_val_28833 = (state_28832[(1)]);
if((state_val_28833 === (1))){
var state_28832__$1 = state_28832;
var statearr_28834_28992 = state_28832__$1;
(statearr_28834_28992[(2)] = null);

(statearr_28834_28992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28833 === (2))){
var state_28832__$1 = state_28832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28832__$1,(4),jobs);
} else {
if((state_val_28833 === (3))){
var inst_28830 = (state_28832[(2)]);
var state_28832__$1 = state_28832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28832__$1,inst_28830);
} else {
if((state_val_28833 === (4))){
var inst_28822 = (state_28832[(2)]);
var inst_28823 = process.call(null,inst_28822);
var state_28832__$1 = state_28832;
if(cljs.core.truth_(inst_28823)){
var statearr_28835_28993 = state_28832__$1;
(statearr_28835_28993[(1)] = (5));

} else {
var statearr_28836_28994 = state_28832__$1;
(statearr_28836_28994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28833 === (5))){
var state_28832__$1 = state_28832;
var statearr_28837_28995 = state_28832__$1;
(statearr_28837_28995[(2)] = null);

(statearr_28837_28995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28833 === (6))){
var state_28832__$1 = state_28832;
var statearr_28838_28996 = state_28832__$1;
(statearr_28838_28996[(2)] = null);

(statearr_28838_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28833 === (7))){
var inst_28828 = (state_28832[(2)]);
var state_28832__$1 = state_28832;
var statearr_28839_28997 = state_28832__$1;
(statearr_28839_28997[(2)] = inst_28828);

(statearr_28839_28997[(1)] = (3));


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
});})(__28988,c__28412__auto___28991,G__28819_28989,n__22458__auto___28987,jobs,results,process,async))
;
return ((function (__28988,switch__28298__auto__,c__28412__auto___28991,G__28819_28989,n__22458__auto___28987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0 = (function (){
var statearr_28843 = [null,null,null,null,null,null,null];
(statearr_28843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__);

(statearr_28843[(1)] = (1));

return statearr_28843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1 = (function (state_28832){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_28832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e28844){if((e28844 instanceof Object)){
var ex__28302__auto__ = e28844;
var statearr_28845_28998 = state_28832;
(statearr_28845_28998[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28999 = state_28832;
state_28832 = G__28999;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = function(state_28832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1.call(this,state_28832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__;
})()
;})(__28988,switch__28298__auto__,c__28412__auto___28991,G__28819_28989,n__22458__auto___28987,jobs,results,process,async))
})();
var state__28414__auto__ = (function (){var statearr_28846 = f__28413__auto__.call(null);
(statearr_28846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___28991);

return statearr_28846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(__28988,c__28412__auto___28991,G__28819_28989,n__22458__auto___28987,jobs,results,process,async))
);


break;
case "async":
var c__28412__auto___29000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28988,c__28412__auto___29000,G__28819_28989,n__22458__auto___28987,jobs,results,process,async){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (__28988,c__28412__auto___29000,G__28819_28989,n__22458__auto___28987,jobs,results,process,async){
return (function (state_28859){
var state_val_28860 = (state_28859[(1)]);
if((state_val_28860 === (1))){
var state_28859__$1 = state_28859;
var statearr_28861_29001 = state_28859__$1;
(statearr_28861_29001[(2)] = null);

(statearr_28861_29001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (2))){
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28859__$1,(4),jobs);
} else {
if((state_val_28860 === (3))){
var inst_28857 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28859__$1,inst_28857);
} else {
if((state_val_28860 === (4))){
var inst_28849 = (state_28859[(2)]);
var inst_28850 = async.call(null,inst_28849);
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28850)){
var statearr_28862_29002 = state_28859__$1;
(statearr_28862_29002[(1)] = (5));

} else {
var statearr_28863_29003 = state_28859__$1;
(statearr_28863_29003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (5))){
var state_28859__$1 = state_28859;
var statearr_28864_29004 = state_28859__$1;
(statearr_28864_29004[(2)] = null);

(statearr_28864_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (6))){
var state_28859__$1 = state_28859;
var statearr_28865_29005 = state_28859__$1;
(statearr_28865_29005[(2)] = null);

(statearr_28865_29005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (7))){
var inst_28855 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28866_29006 = state_28859__$1;
(statearr_28866_29006[(2)] = inst_28855);

(statearr_28866_29006[(1)] = (3));


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
});})(__28988,c__28412__auto___29000,G__28819_28989,n__22458__auto___28987,jobs,results,process,async))
;
return ((function (__28988,switch__28298__auto__,c__28412__auto___29000,G__28819_28989,n__22458__auto___28987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0 = (function (){
var statearr_28870 = [null,null,null,null,null,null,null];
(statearr_28870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__);

(statearr_28870[(1)] = (1));

return statearr_28870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1 = (function (state_28859){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_28859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e28871){if((e28871 instanceof Object)){
var ex__28302__auto__ = e28871;
var statearr_28872_29007 = state_28859;
(statearr_28872_29007[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29008 = state_28859;
state_28859 = G__29008;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = function(state_28859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1.call(this,state_28859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__;
})()
;})(__28988,switch__28298__auto__,c__28412__auto___29000,G__28819_28989,n__22458__auto___28987,jobs,results,process,async))
})();
var state__28414__auto__ = (function (){var statearr_28873 = f__28413__auto__.call(null);
(statearr_28873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___29000);

return statearr_28873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(__28988,c__28412__auto___29000,G__28819_28989,n__22458__auto___28987,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29009 = (__28988 + (1));
__28988 = G__29009;
continue;
} else {
}
break;
}

var c__28412__auto___29010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___29010,jobs,results,process,async){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___29010,jobs,results,process,async){
return (function (state_28895){
var state_val_28896 = (state_28895[(1)]);
if((state_val_28896 === (1))){
var state_28895__$1 = state_28895;
var statearr_28897_29011 = state_28895__$1;
(statearr_28897_29011[(2)] = null);

(statearr_28897_29011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (2))){
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28895__$1,(4),from);
} else {
if((state_val_28896 === (3))){
var inst_28893 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28895__$1,inst_28893);
} else {
if((state_val_28896 === (4))){
var inst_28876 = (state_28895[(7)]);
var inst_28876__$1 = (state_28895[(2)]);
var inst_28877 = (inst_28876__$1 == null);
var state_28895__$1 = (function (){var statearr_28898 = state_28895;
(statearr_28898[(7)] = inst_28876__$1);

return statearr_28898;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28899_29012 = state_28895__$1;
(statearr_28899_29012[(1)] = (5));

} else {
var statearr_28900_29013 = state_28895__$1;
(statearr_28900_29013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (5))){
var inst_28879 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28895__$1 = state_28895;
var statearr_28901_29014 = state_28895__$1;
(statearr_28901_29014[(2)] = inst_28879);

(statearr_28901_29014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (6))){
var inst_28881 = (state_28895[(8)]);
var inst_28876 = (state_28895[(7)]);
var inst_28881__$1 = cljs.core.async.chan.call(null,(1));
var inst_28882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28883 = [inst_28876,inst_28881__$1];
var inst_28884 = (new cljs.core.PersistentVector(null,2,(5),inst_28882,inst_28883,null));
var state_28895__$1 = (function (){var statearr_28902 = state_28895;
(statearr_28902[(8)] = inst_28881__$1);

return statearr_28902;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(8),jobs,inst_28884);
} else {
if((state_val_28896 === (7))){
var inst_28891 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28903_29015 = state_28895__$1;
(statearr_28903_29015[(2)] = inst_28891);

(statearr_28903_29015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (8))){
var inst_28881 = (state_28895[(8)]);
var inst_28886 = (state_28895[(2)]);
var state_28895__$1 = (function (){var statearr_28904 = state_28895;
(statearr_28904[(9)] = inst_28886);

return statearr_28904;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(9),results,inst_28881);
} else {
if((state_val_28896 === (9))){
var inst_28888 = (state_28895[(2)]);
var state_28895__$1 = (function (){var statearr_28905 = state_28895;
(statearr_28905[(10)] = inst_28888);

return statearr_28905;
})();
var statearr_28906_29016 = state_28895__$1;
(statearr_28906_29016[(2)] = null);

(statearr_28906_29016[(1)] = (2));


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
});})(c__28412__auto___29010,jobs,results,process,async))
;
return ((function (switch__28298__auto__,c__28412__auto___29010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0 = (function (){
var statearr_28910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__);

(statearr_28910[(1)] = (1));

return statearr_28910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1 = (function (state_28895){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_28895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e28911){if((e28911 instanceof Object)){
var ex__28302__auto__ = e28911;
var statearr_28912_29017 = state_28895;
(statearr_28912_29017[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29018 = state_28895;
state_28895 = G__29018;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___29010,jobs,results,process,async))
})();
var state__28414__auto__ = (function (){var statearr_28913 = f__28413__auto__.call(null);
(statearr_28913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___29010);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___29010,jobs,results,process,async))
);


var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__,jobs,results,process,async){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__,jobs,results,process,async){
return (function (state_28951){
var state_val_28952 = (state_28951[(1)]);
if((state_val_28952 === (7))){
var inst_28947 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28953_29019 = state_28951__$1;
(statearr_28953_29019[(2)] = inst_28947);

(statearr_28953_29019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (20))){
var state_28951__$1 = state_28951;
var statearr_28954_29020 = state_28951__$1;
(statearr_28954_29020[(2)] = null);

(statearr_28954_29020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (1))){
var state_28951__$1 = state_28951;
var statearr_28955_29021 = state_28951__$1;
(statearr_28955_29021[(2)] = null);

(statearr_28955_29021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (4))){
var inst_28916 = (state_28951[(7)]);
var inst_28916__$1 = (state_28951[(2)]);
var inst_28917 = (inst_28916__$1 == null);
var state_28951__$1 = (function (){var statearr_28956 = state_28951;
(statearr_28956[(7)] = inst_28916__$1);

return statearr_28956;
})();
if(cljs.core.truth_(inst_28917)){
var statearr_28957_29022 = state_28951__$1;
(statearr_28957_29022[(1)] = (5));

} else {
var statearr_28958_29023 = state_28951__$1;
(statearr_28958_29023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (15))){
var inst_28929 = (state_28951[(8)]);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28951__$1,(18),to,inst_28929);
} else {
if((state_val_28952 === (21))){
var inst_28942 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28959_29024 = state_28951__$1;
(statearr_28959_29024[(2)] = inst_28942);

(statearr_28959_29024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (13))){
var inst_28944 = (state_28951[(2)]);
var state_28951__$1 = (function (){var statearr_28960 = state_28951;
(statearr_28960[(9)] = inst_28944);

return statearr_28960;
})();
var statearr_28961_29025 = state_28951__$1;
(statearr_28961_29025[(2)] = null);

(statearr_28961_29025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (6))){
var inst_28916 = (state_28951[(7)]);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28951__$1,(11),inst_28916);
} else {
if((state_val_28952 === (17))){
var inst_28937 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
if(cljs.core.truth_(inst_28937)){
var statearr_28962_29026 = state_28951__$1;
(statearr_28962_29026[(1)] = (19));

} else {
var statearr_28963_29027 = state_28951__$1;
(statearr_28963_29027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (3))){
var inst_28949 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28951__$1,inst_28949);
} else {
if((state_val_28952 === (12))){
var inst_28926 = (state_28951[(10)]);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28951__$1,(14),inst_28926);
} else {
if((state_val_28952 === (2))){
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28951__$1,(4),results);
} else {
if((state_val_28952 === (19))){
var state_28951__$1 = state_28951;
var statearr_28964_29028 = state_28951__$1;
(statearr_28964_29028[(2)] = null);

(statearr_28964_29028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (11))){
var inst_28926 = (state_28951[(2)]);
var state_28951__$1 = (function (){var statearr_28965 = state_28951;
(statearr_28965[(10)] = inst_28926);

return statearr_28965;
})();
var statearr_28966_29029 = state_28951__$1;
(statearr_28966_29029[(2)] = null);

(statearr_28966_29029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (9))){
var state_28951__$1 = state_28951;
var statearr_28967_29030 = state_28951__$1;
(statearr_28967_29030[(2)] = null);

(statearr_28967_29030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (5))){
var state_28951__$1 = state_28951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28968_29031 = state_28951__$1;
(statearr_28968_29031[(1)] = (8));

} else {
var statearr_28969_29032 = state_28951__$1;
(statearr_28969_29032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (14))){
var inst_28931 = (state_28951[(11)]);
var inst_28929 = (state_28951[(8)]);
var inst_28929__$1 = (state_28951[(2)]);
var inst_28930 = (inst_28929__$1 == null);
var inst_28931__$1 = cljs.core.not.call(null,inst_28930);
var state_28951__$1 = (function (){var statearr_28970 = state_28951;
(statearr_28970[(11)] = inst_28931__$1);

(statearr_28970[(8)] = inst_28929__$1);

return statearr_28970;
})();
if(inst_28931__$1){
var statearr_28971_29033 = state_28951__$1;
(statearr_28971_29033[(1)] = (15));

} else {
var statearr_28972_29034 = state_28951__$1;
(statearr_28972_29034[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (16))){
var inst_28931 = (state_28951[(11)]);
var state_28951__$1 = state_28951;
var statearr_28973_29035 = state_28951__$1;
(statearr_28973_29035[(2)] = inst_28931);

(statearr_28973_29035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (10))){
var inst_28923 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28974_29036 = state_28951__$1;
(statearr_28974_29036[(2)] = inst_28923);

(statearr_28974_29036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (18))){
var inst_28934 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28975_29037 = state_28951__$1;
(statearr_28975_29037[(2)] = inst_28934);

(statearr_28975_29037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (8))){
var inst_28920 = cljs.core.async.close_BANG_.call(null,to);
var state_28951__$1 = state_28951;
var statearr_28976_29038 = state_28951__$1;
(statearr_28976_29038[(2)] = inst_28920);

(statearr_28976_29038[(1)] = (10));


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
});})(c__28412__auto__,jobs,results,process,async))
;
return ((function (switch__28298__auto__,c__28412__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0 = (function (){
var statearr_28980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__);

(statearr_28980[(1)] = (1));

return statearr_28980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1 = (function (state_28951){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_28951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e28981){if((e28981 instanceof Object)){
var ex__28302__auto__ = e28981;
var statearr_28982_29039 = state_28951;
(statearr_28982_29039[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29040 = state_28951;
state_28951 = G__29040;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__ = function(state_28951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1.call(this,state_28951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__,jobs,results,process,async))
})();
var state__28414__auto__ = (function (){var statearr_28983 = f__28413__auto__.call(null);
(statearr_28983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_28983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__,jobs,results,process,async))
);

return c__28412__auto__;
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
var args29041 = [];
var len__22628__auto___29044 = arguments.length;
var i__22629__auto___29045 = (0);
while(true){
if((i__22629__auto___29045 < len__22628__auto___29044)){
args29041.push((arguments[i__22629__auto___29045]));

var G__29046 = (i__22629__auto___29045 + (1));
i__22629__auto___29045 = G__29046;
continue;
} else {
}
break;
}

var G__29043 = args29041.length;
switch (G__29043) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29041.length)].join('')));

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
var args29048 = [];
var len__22628__auto___29051 = arguments.length;
var i__22629__auto___29052 = (0);
while(true){
if((i__22629__auto___29052 < len__22628__auto___29051)){
args29048.push((arguments[i__22629__auto___29052]));

var G__29053 = (i__22629__auto___29052 + (1));
i__22629__auto___29052 = G__29053;
continue;
} else {
}
break;
}

var G__29050 = args29048.length;
switch (G__29050) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29048.length)].join('')));

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
var args29055 = [];
var len__22628__auto___29108 = arguments.length;
var i__22629__auto___29109 = (0);
while(true){
if((i__22629__auto___29109 < len__22628__auto___29108)){
args29055.push((arguments[i__22629__auto___29109]));

var G__29110 = (i__22629__auto___29109 + (1));
i__22629__auto___29109 = G__29110;
continue;
} else {
}
break;
}

var G__29057 = args29055.length;
switch (G__29057) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29055.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28412__auto___29112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___29112,tc,fc){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___29112,tc,fc){
return (function (state_29083){
var state_val_29084 = (state_29083[(1)]);
if((state_val_29084 === (7))){
var inst_29079 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
var statearr_29085_29113 = state_29083__$1;
(statearr_29085_29113[(2)] = inst_29079);

(statearr_29085_29113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (1))){
var state_29083__$1 = state_29083;
var statearr_29086_29114 = state_29083__$1;
(statearr_29086_29114[(2)] = null);

(statearr_29086_29114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (4))){
var inst_29060 = (state_29083[(7)]);
var inst_29060__$1 = (state_29083[(2)]);
var inst_29061 = (inst_29060__$1 == null);
var state_29083__$1 = (function (){var statearr_29087 = state_29083;
(statearr_29087[(7)] = inst_29060__$1);

return statearr_29087;
})();
if(cljs.core.truth_(inst_29061)){
var statearr_29088_29115 = state_29083__$1;
(statearr_29088_29115[(1)] = (5));

} else {
var statearr_29089_29116 = state_29083__$1;
(statearr_29089_29116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (13))){
var state_29083__$1 = state_29083;
var statearr_29090_29117 = state_29083__$1;
(statearr_29090_29117[(2)] = null);

(statearr_29090_29117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (6))){
var inst_29060 = (state_29083[(7)]);
var inst_29066 = p.call(null,inst_29060);
var state_29083__$1 = state_29083;
if(cljs.core.truth_(inst_29066)){
var statearr_29091_29118 = state_29083__$1;
(statearr_29091_29118[(1)] = (9));

} else {
var statearr_29092_29119 = state_29083__$1;
(statearr_29092_29119[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (3))){
var inst_29081 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29083__$1,inst_29081);
} else {
if((state_val_29084 === (12))){
var state_29083__$1 = state_29083;
var statearr_29093_29120 = state_29083__$1;
(statearr_29093_29120[(2)] = null);

(statearr_29093_29120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (2))){
var state_29083__$1 = state_29083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29083__$1,(4),ch);
} else {
if((state_val_29084 === (11))){
var inst_29060 = (state_29083[(7)]);
var inst_29070 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29083__$1,(8),inst_29070,inst_29060);
} else {
if((state_val_29084 === (9))){
var state_29083__$1 = state_29083;
var statearr_29094_29121 = state_29083__$1;
(statearr_29094_29121[(2)] = tc);

(statearr_29094_29121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (5))){
var inst_29063 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29064 = cljs.core.async.close_BANG_.call(null,fc);
var state_29083__$1 = (function (){var statearr_29095 = state_29083;
(statearr_29095[(8)] = inst_29063);

return statearr_29095;
})();
var statearr_29096_29122 = state_29083__$1;
(statearr_29096_29122[(2)] = inst_29064);

(statearr_29096_29122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (14))){
var inst_29077 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
var statearr_29097_29123 = state_29083__$1;
(statearr_29097_29123[(2)] = inst_29077);

(statearr_29097_29123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (10))){
var state_29083__$1 = state_29083;
var statearr_29098_29124 = state_29083__$1;
(statearr_29098_29124[(2)] = fc);

(statearr_29098_29124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (8))){
var inst_29072 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
if(cljs.core.truth_(inst_29072)){
var statearr_29099_29125 = state_29083__$1;
(statearr_29099_29125[(1)] = (12));

} else {
var statearr_29100_29126 = state_29083__$1;
(statearr_29100_29126[(1)] = (13));

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
});})(c__28412__auto___29112,tc,fc))
;
return ((function (switch__28298__auto__,c__28412__auto___29112,tc,fc){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_29104 = [null,null,null,null,null,null,null,null,null];
(statearr_29104[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_29104[(1)] = (1));

return statearr_29104;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_29083){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_29083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e29105){if((e29105 instanceof Object)){
var ex__28302__auto__ = e29105;
var statearr_29106_29127 = state_29083;
(statearr_29106_29127[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29128 = state_29083;
state_29083 = G__29128;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_29083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_29083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___29112,tc,fc))
})();
var state__28414__auto__ = (function (){var statearr_29107 = f__28413__auto__.call(null);
(statearr_29107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___29112);

return statearr_29107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___29112,tc,fc))
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
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__){
return (function (state_29192){
var state_val_29193 = (state_29192[(1)]);
if((state_val_29193 === (7))){
var inst_29188 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29194_29215 = state_29192__$1;
(statearr_29194_29215[(2)] = inst_29188);

(statearr_29194_29215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (1))){
var inst_29172 = init;
var state_29192__$1 = (function (){var statearr_29195 = state_29192;
(statearr_29195[(7)] = inst_29172);

return statearr_29195;
})();
var statearr_29196_29216 = state_29192__$1;
(statearr_29196_29216[(2)] = null);

(statearr_29196_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (4))){
var inst_29175 = (state_29192[(8)]);
var inst_29175__$1 = (state_29192[(2)]);
var inst_29176 = (inst_29175__$1 == null);
var state_29192__$1 = (function (){var statearr_29197 = state_29192;
(statearr_29197[(8)] = inst_29175__$1);

return statearr_29197;
})();
if(cljs.core.truth_(inst_29176)){
var statearr_29198_29217 = state_29192__$1;
(statearr_29198_29217[(1)] = (5));

} else {
var statearr_29199_29218 = state_29192__$1;
(statearr_29199_29218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (6))){
var inst_29172 = (state_29192[(7)]);
var inst_29175 = (state_29192[(8)]);
var inst_29179 = (state_29192[(9)]);
var inst_29179__$1 = f.call(null,inst_29172,inst_29175);
var inst_29180 = cljs.core.reduced_QMARK_.call(null,inst_29179__$1);
var state_29192__$1 = (function (){var statearr_29200 = state_29192;
(statearr_29200[(9)] = inst_29179__$1);

return statearr_29200;
})();
if(inst_29180){
var statearr_29201_29219 = state_29192__$1;
(statearr_29201_29219[(1)] = (8));

} else {
var statearr_29202_29220 = state_29192__$1;
(statearr_29202_29220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (3))){
var inst_29190 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29192__$1,inst_29190);
} else {
if((state_val_29193 === (2))){
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29192__$1,(4),ch);
} else {
if((state_val_29193 === (9))){
var inst_29179 = (state_29192[(9)]);
var inst_29172 = inst_29179;
var state_29192__$1 = (function (){var statearr_29203 = state_29192;
(statearr_29203[(7)] = inst_29172);

return statearr_29203;
})();
var statearr_29204_29221 = state_29192__$1;
(statearr_29204_29221[(2)] = null);

(statearr_29204_29221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (5))){
var inst_29172 = (state_29192[(7)]);
var state_29192__$1 = state_29192;
var statearr_29205_29222 = state_29192__$1;
(statearr_29205_29222[(2)] = inst_29172);

(statearr_29205_29222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (10))){
var inst_29186 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29206_29223 = state_29192__$1;
(statearr_29206_29223[(2)] = inst_29186);

(statearr_29206_29223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (8))){
var inst_29179 = (state_29192[(9)]);
var inst_29182 = cljs.core.deref.call(null,inst_29179);
var state_29192__$1 = state_29192;
var statearr_29207_29224 = state_29192__$1;
(statearr_29207_29224[(2)] = inst_29182);

(statearr_29207_29224[(1)] = (10));


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
});})(c__28412__auto__))
;
return ((function (switch__28298__auto__,c__28412__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28299__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28299__auto____0 = (function (){
var statearr_29211 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29211[(0)] = cljs$core$async$reduce_$_state_machine__28299__auto__);

(statearr_29211[(1)] = (1));

return statearr_29211;
});
var cljs$core$async$reduce_$_state_machine__28299__auto____1 = (function (state_29192){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_29192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e29212){if((e29212 instanceof Object)){
var ex__28302__auto__ = e29212;
var statearr_29213_29225 = state_29192;
(statearr_29213_29225[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29226 = state_29192;
state_29192 = G__29226;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28299__auto__ = function(state_29192){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28299__auto____1.call(this,state_29192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28299__auto____0;
cljs$core$async$reduce_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28299__auto____1;
return cljs$core$async$reduce_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_29214 = f__28413__auto__.call(null);
(statearr_29214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_29214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
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
var args29227 = [];
var len__22628__auto___29279 = arguments.length;
var i__22629__auto___29280 = (0);
while(true){
if((i__22629__auto___29280 < len__22628__auto___29279)){
args29227.push((arguments[i__22629__auto___29280]));

var G__29281 = (i__22629__auto___29280 + (1));
i__22629__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var G__29229 = args29227.length;
switch (G__29229) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29227.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__){
return (function (state_29254){
var state_val_29255 = (state_29254[(1)]);
if((state_val_29255 === (7))){
var inst_29236 = (state_29254[(2)]);
var state_29254__$1 = state_29254;
var statearr_29256_29283 = state_29254__$1;
(statearr_29256_29283[(2)] = inst_29236);

(statearr_29256_29283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (1))){
var inst_29230 = cljs.core.seq.call(null,coll);
var inst_29231 = inst_29230;
var state_29254__$1 = (function (){var statearr_29257 = state_29254;
(statearr_29257[(7)] = inst_29231);

return statearr_29257;
})();
var statearr_29258_29284 = state_29254__$1;
(statearr_29258_29284[(2)] = null);

(statearr_29258_29284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (4))){
var inst_29231 = (state_29254[(7)]);
var inst_29234 = cljs.core.first.call(null,inst_29231);
var state_29254__$1 = state_29254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29254__$1,(7),ch,inst_29234);
} else {
if((state_val_29255 === (13))){
var inst_29248 = (state_29254[(2)]);
var state_29254__$1 = state_29254;
var statearr_29259_29285 = state_29254__$1;
(statearr_29259_29285[(2)] = inst_29248);

(statearr_29259_29285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (6))){
var inst_29239 = (state_29254[(2)]);
var state_29254__$1 = state_29254;
if(cljs.core.truth_(inst_29239)){
var statearr_29260_29286 = state_29254__$1;
(statearr_29260_29286[(1)] = (8));

} else {
var statearr_29261_29287 = state_29254__$1;
(statearr_29261_29287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (3))){
var inst_29252 = (state_29254[(2)]);
var state_29254__$1 = state_29254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29254__$1,inst_29252);
} else {
if((state_val_29255 === (12))){
var state_29254__$1 = state_29254;
var statearr_29262_29288 = state_29254__$1;
(statearr_29262_29288[(2)] = null);

(statearr_29262_29288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (2))){
var inst_29231 = (state_29254[(7)]);
var state_29254__$1 = state_29254;
if(cljs.core.truth_(inst_29231)){
var statearr_29263_29289 = state_29254__$1;
(statearr_29263_29289[(1)] = (4));

} else {
var statearr_29264_29290 = state_29254__$1;
(statearr_29264_29290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (11))){
var inst_29245 = cljs.core.async.close_BANG_.call(null,ch);
var state_29254__$1 = state_29254;
var statearr_29265_29291 = state_29254__$1;
(statearr_29265_29291[(2)] = inst_29245);

(statearr_29265_29291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (9))){
var state_29254__$1 = state_29254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29266_29292 = state_29254__$1;
(statearr_29266_29292[(1)] = (11));

} else {
var statearr_29267_29293 = state_29254__$1;
(statearr_29267_29293[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (5))){
var inst_29231 = (state_29254[(7)]);
var state_29254__$1 = state_29254;
var statearr_29268_29294 = state_29254__$1;
(statearr_29268_29294[(2)] = inst_29231);

(statearr_29268_29294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (10))){
var inst_29250 = (state_29254[(2)]);
var state_29254__$1 = state_29254;
var statearr_29269_29295 = state_29254__$1;
(statearr_29269_29295[(2)] = inst_29250);

(statearr_29269_29295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29255 === (8))){
var inst_29231 = (state_29254[(7)]);
var inst_29241 = cljs.core.next.call(null,inst_29231);
var inst_29231__$1 = inst_29241;
var state_29254__$1 = (function (){var statearr_29270 = state_29254;
(statearr_29270[(7)] = inst_29231__$1);

return statearr_29270;
})();
var statearr_29271_29296 = state_29254__$1;
(statearr_29271_29296[(2)] = null);

(statearr_29271_29296[(1)] = (2));


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
});})(c__28412__auto__))
;
return ((function (switch__28298__auto__,c__28412__auto__){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_29275 = [null,null,null,null,null,null,null,null];
(statearr_29275[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_29275[(1)] = (1));

return statearr_29275;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_29254){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_29254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e29276){if((e29276 instanceof Object)){
var ex__28302__auto__ = e29276;
var statearr_29277_29297 = state_29254;
(statearr_29277_29297[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29298 = state_29254;
state_29254 = G__29298;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_29254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_29254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_29278 = f__28413__auto__.call(null);
(statearr_29278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_29278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
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
var x__22158__auto__ = (((_ == null))?null:_);
var m__22159__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,_);
} else {
var m__22159__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,_);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22159__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m);
} else {
var m__22159__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29524 = (function (mult,ch,cs,meta29525){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29525 = meta29525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29526,meta29525__$1){
var self__ = this;
var _29526__$1 = this;
return (new cljs.core.async.t_cljs$core$async29524(self__.mult,self__.ch,self__.cs,meta29525__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29526){
var self__ = this;
var _29526__$1 = this;
return self__.meta29525;
});})(cs))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29524.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29525","meta29525",-1460357962,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29524";

cljs.core.async.t_cljs$core$async29524.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async29524");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29524 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29524(mult__$1,ch__$1,cs__$1,meta29525){
return (new cljs.core.async.t_cljs$core$async29524(mult__$1,ch__$1,cs__$1,meta29525));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29524(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28412__auto___29749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___29749,cs,m,dchan,dctr,done){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___29749,cs,m,dchan,dctr,done){
return (function (state_29661){
var state_val_29662 = (state_29661[(1)]);
if((state_val_29662 === (7))){
var inst_29657 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29663_29750 = state_29661__$1;
(statearr_29663_29750[(2)] = inst_29657);

(statearr_29663_29750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (20))){
var inst_29560 = (state_29661[(7)]);
var inst_29572 = cljs.core.first.call(null,inst_29560);
var inst_29573 = cljs.core.nth.call(null,inst_29572,(0),null);
var inst_29574 = cljs.core.nth.call(null,inst_29572,(1),null);
var state_29661__$1 = (function (){var statearr_29664 = state_29661;
(statearr_29664[(8)] = inst_29573);

return statearr_29664;
})();
if(cljs.core.truth_(inst_29574)){
var statearr_29665_29751 = state_29661__$1;
(statearr_29665_29751[(1)] = (22));

} else {
var statearr_29666_29752 = state_29661__$1;
(statearr_29666_29752[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (27))){
var inst_29609 = (state_29661[(9)]);
var inst_29529 = (state_29661[(10)]);
var inst_29604 = (state_29661[(11)]);
var inst_29602 = (state_29661[(12)]);
var inst_29609__$1 = cljs.core._nth.call(null,inst_29602,inst_29604);
var inst_29610 = cljs.core.async.put_BANG_.call(null,inst_29609__$1,inst_29529,done);
var state_29661__$1 = (function (){var statearr_29667 = state_29661;
(statearr_29667[(9)] = inst_29609__$1);

return statearr_29667;
})();
if(cljs.core.truth_(inst_29610)){
var statearr_29668_29753 = state_29661__$1;
(statearr_29668_29753[(1)] = (30));

} else {
var statearr_29669_29754 = state_29661__$1;
(statearr_29669_29754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (1))){
var state_29661__$1 = state_29661;
var statearr_29670_29755 = state_29661__$1;
(statearr_29670_29755[(2)] = null);

(statearr_29670_29755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (24))){
var inst_29560 = (state_29661[(7)]);
var inst_29579 = (state_29661[(2)]);
var inst_29580 = cljs.core.next.call(null,inst_29560);
var inst_29538 = inst_29580;
var inst_29539 = null;
var inst_29540 = (0);
var inst_29541 = (0);
var state_29661__$1 = (function (){var statearr_29671 = state_29661;
(statearr_29671[(13)] = inst_29538);

(statearr_29671[(14)] = inst_29539);

(statearr_29671[(15)] = inst_29579);

(statearr_29671[(16)] = inst_29540);

(statearr_29671[(17)] = inst_29541);

return statearr_29671;
})();
var statearr_29672_29756 = state_29661__$1;
(statearr_29672_29756[(2)] = null);

(statearr_29672_29756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (39))){
var state_29661__$1 = state_29661;
var statearr_29676_29757 = state_29661__$1;
(statearr_29676_29757[(2)] = null);

(statearr_29676_29757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (4))){
var inst_29529 = (state_29661[(10)]);
var inst_29529__$1 = (state_29661[(2)]);
var inst_29530 = (inst_29529__$1 == null);
var state_29661__$1 = (function (){var statearr_29677 = state_29661;
(statearr_29677[(10)] = inst_29529__$1);

return statearr_29677;
})();
if(cljs.core.truth_(inst_29530)){
var statearr_29678_29758 = state_29661__$1;
(statearr_29678_29758[(1)] = (5));

} else {
var statearr_29679_29759 = state_29661__$1;
(statearr_29679_29759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (15))){
var inst_29538 = (state_29661[(13)]);
var inst_29539 = (state_29661[(14)]);
var inst_29540 = (state_29661[(16)]);
var inst_29541 = (state_29661[(17)]);
var inst_29556 = (state_29661[(2)]);
var inst_29557 = (inst_29541 + (1));
var tmp29673 = inst_29538;
var tmp29674 = inst_29539;
var tmp29675 = inst_29540;
var inst_29538__$1 = tmp29673;
var inst_29539__$1 = tmp29674;
var inst_29540__$1 = tmp29675;
var inst_29541__$1 = inst_29557;
var state_29661__$1 = (function (){var statearr_29680 = state_29661;
(statearr_29680[(13)] = inst_29538__$1);

(statearr_29680[(14)] = inst_29539__$1);

(statearr_29680[(18)] = inst_29556);

(statearr_29680[(16)] = inst_29540__$1);

(statearr_29680[(17)] = inst_29541__$1);

return statearr_29680;
})();
var statearr_29681_29760 = state_29661__$1;
(statearr_29681_29760[(2)] = null);

(statearr_29681_29760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (21))){
var inst_29583 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29685_29761 = state_29661__$1;
(statearr_29685_29761[(2)] = inst_29583);

(statearr_29685_29761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (31))){
var inst_29609 = (state_29661[(9)]);
var inst_29613 = done.call(null,null);
var inst_29614 = cljs.core.async.untap_STAR_.call(null,m,inst_29609);
var state_29661__$1 = (function (){var statearr_29686 = state_29661;
(statearr_29686[(19)] = inst_29613);

return statearr_29686;
})();
var statearr_29687_29762 = state_29661__$1;
(statearr_29687_29762[(2)] = inst_29614);

(statearr_29687_29762[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (32))){
var inst_29603 = (state_29661[(20)]);
var inst_29604 = (state_29661[(11)]);
var inst_29602 = (state_29661[(12)]);
var inst_29601 = (state_29661[(21)]);
var inst_29616 = (state_29661[(2)]);
var inst_29617 = (inst_29604 + (1));
var tmp29682 = inst_29603;
var tmp29683 = inst_29602;
var tmp29684 = inst_29601;
var inst_29601__$1 = tmp29684;
var inst_29602__$1 = tmp29683;
var inst_29603__$1 = tmp29682;
var inst_29604__$1 = inst_29617;
var state_29661__$1 = (function (){var statearr_29688 = state_29661;
(statearr_29688[(20)] = inst_29603__$1);

(statearr_29688[(11)] = inst_29604__$1);

(statearr_29688[(22)] = inst_29616);

(statearr_29688[(12)] = inst_29602__$1);

(statearr_29688[(21)] = inst_29601__$1);

return statearr_29688;
})();
var statearr_29689_29763 = state_29661__$1;
(statearr_29689_29763[(2)] = null);

(statearr_29689_29763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (40))){
var inst_29629 = (state_29661[(23)]);
var inst_29633 = done.call(null,null);
var inst_29634 = cljs.core.async.untap_STAR_.call(null,m,inst_29629);
var state_29661__$1 = (function (){var statearr_29690 = state_29661;
(statearr_29690[(24)] = inst_29633);

return statearr_29690;
})();
var statearr_29691_29764 = state_29661__$1;
(statearr_29691_29764[(2)] = inst_29634);

(statearr_29691_29764[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (33))){
var inst_29620 = (state_29661[(25)]);
var inst_29622 = cljs.core.chunked_seq_QMARK_.call(null,inst_29620);
var state_29661__$1 = state_29661;
if(inst_29622){
var statearr_29692_29765 = state_29661__$1;
(statearr_29692_29765[(1)] = (36));

} else {
var statearr_29693_29766 = state_29661__$1;
(statearr_29693_29766[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (13))){
var inst_29550 = (state_29661[(26)]);
var inst_29553 = cljs.core.async.close_BANG_.call(null,inst_29550);
var state_29661__$1 = state_29661;
var statearr_29694_29767 = state_29661__$1;
(statearr_29694_29767[(2)] = inst_29553);

(statearr_29694_29767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (22))){
var inst_29573 = (state_29661[(8)]);
var inst_29576 = cljs.core.async.close_BANG_.call(null,inst_29573);
var state_29661__$1 = state_29661;
var statearr_29695_29768 = state_29661__$1;
(statearr_29695_29768[(2)] = inst_29576);

(statearr_29695_29768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (36))){
var inst_29620 = (state_29661[(25)]);
var inst_29624 = cljs.core.chunk_first.call(null,inst_29620);
var inst_29625 = cljs.core.chunk_rest.call(null,inst_29620);
var inst_29626 = cljs.core.count.call(null,inst_29624);
var inst_29601 = inst_29625;
var inst_29602 = inst_29624;
var inst_29603 = inst_29626;
var inst_29604 = (0);
var state_29661__$1 = (function (){var statearr_29696 = state_29661;
(statearr_29696[(20)] = inst_29603);

(statearr_29696[(11)] = inst_29604);

(statearr_29696[(12)] = inst_29602);

(statearr_29696[(21)] = inst_29601);

return statearr_29696;
})();
var statearr_29697_29769 = state_29661__$1;
(statearr_29697_29769[(2)] = null);

(statearr_29697_29769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (41))){
var inst_29620 = (state_29661[(25)]);
var inst_29636 = (state_29661[(2)]);
var inst_29637 = cljs.core.next.call(null,inst_29620);
var inst_29601 = inst_29637;
var inst_29602 = null;
var inst_29603 = (0);
var inst_29604 = (0);
var state_29661__$1 = (function (){var statearr_29698 = state_29661;
(statearr_29698[(20)] = inst_29603);

(statearr_29698[(11)] = inst_29604);

(statearr_29698[(27)] = inst_29636);

(statearr_29698[(12)] = inst_29602);

(statearr_29698[(21)] = inst_29601);

return statearr_29698;
})();
var statearr_29699_29770 = state_29661__$1;
(statearr_29699_29770[(2)] = null);

(statearr_29699_29770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (43))){
var state_29661__$1 = state_29661;
var statearr_29700_29771 = state_29661__$1;
(statearr_29700_29771[(2)] = null);

(statearr_29700_29771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (29))){
var inst_29645 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29701_29772 = state_29661__$1;
(statearr_29701_29772[(2)] = inst_29645);

(statearr_29701_29772[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (44))){
var inst_29654 = (state_29661[(2)]);
var state_29661__$1 = (function (){var statearr_29702 = state_29661;
(statearr_29702[(28)] = inst_29654);

return statearr_29702;
})();
var statearr_29703_29773 = state_29661__$1;
(statearr_29703_29773[(2)] = null);

(statearr_29703_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (6))){
var inst_29593 = (state_29661[(29)]);
var inst_29592 = cljs.core.deref.call(null,cs);
var inst_29593__$1 = cljs.core.keys.call(null,inst_29592);
var inst_29594 = cljs.core.count.call(null,inst_29593__$1);
var inst_29595 = cljs.core.reset_BANG_.call(null,dctr,inst_29594);
var inst_29600 = cljs.core.seq.call(null,inst_29593__$1);
var inst_29601 = inst_29600;
var inst_29602 = null;
var inst_29603 = (0);
var inst_29604 = (0);
var state_29661__$1 = (function (){var statearr_29704 = state_29661;
(statearr_29704[(20)] = inst_29603);

(statearr_29704[(11)] = inst_29604);

(statearr_29704[(29)] = inst_29593__$1);

(statearr_29704[(30)] = inst_29595);

(statearr_29704[(12)] = inst_29602);

(statearr_29704[(21)] = inst_29601);

return statearr_29704;
})();
var statearr_29705_29774 = state_29661__$1;
(statearr_29705_29774[(2)] = null);

(statearr_29705_29774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (28))){
var inst_29620 = (state_29661[(25)]);
var inst_29601 = (state_29661[(21)]);
var inst_29620__$1 = cljs.core.seq.call(null,inst_29601);
var state_29661__$1 = (function (){var statearr_29706 = state_29661;
(statearr_29706[(25)] = inst_29620__$1);

return statearr_29706;
})();
if(inst_29620__$1){
var statearr_29707_29775 = state_29661__$1;
(statearr_29707_29775[(1)] = (33));

} else {
var statearr_29708_29776 = state_29661__$1;
(statearr_29708_29776[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (25))){
var inst_29603 = (state_29661[(20)]);
var inst_29604 = (state_29661[(11)]);
var inst_29606 = (inst_29604 < inst_29603);
var inst_29607 = inst_29606;
var state_29661__$1 = state_29661;
if(cljs.core.truth_(inst_29607)){
var statearr_29709_29777 = state_29661__$1;
(statearr_29709_29777[(1)] = (27));

} else {
var statearr_29710_29778 = state_29661__$1;
(statearr_29710_29778[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (34))){
var state_29661__$1 = state_29661;
var statearr_29711_29779 = state_29661__$1;
(statearr_29711_29779[(2)] = null);

(statearr_29711_29779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (17))){
var state_29661__$1 = state_29661;
var statearr_29712_29780 = state_29661__$1;
(statearr_29712_29780[(2)] = null);

(statearr_29712_29780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (3))){
var inst_29659 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29661__$1,inst_29659);
} else {
if((state_val_29662 === (12))){
var inst_29588 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29713_29781 = state_29661__$1;
(statearr_29713_29781[(2)] = inst_29588);

(statearr_29713_29781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (2))){
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29661__$1,(4),ch);
} else {
if((state_val_29662 === (23))){
var state_29661__$1 = state_29661;
var statearr_29714_29782 = state_29661__$1;
(statearr_29714_29782[(2)] = null);

(statearr_29714_29782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (35))){
var inst_29643 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29715_29783 = state_29661__$1;
(statearr_29715_29783[(2)] = inst_29643);

(statearr_29715_29783[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (19))){
var inst_29560 = (state_29661[(7)]);
var inst_29564 = cljs.core.chunk_first.call(null,inst_29560);
var inst_29565 = cljs.core.chunk_rest.call(null,inst_29560);
var inst_29566 = cljs.core.count.call(null,inst_29564);
var inst_29538 = inst_29565;
var inst_29539 = inst_29564;
var inst_29540 = inst_29566;
var inst_29541 = (0);
var state_29661__$1 = (function (){var statearr_29716 = state_29661;
(statearr_29716[(13)] = inst_29538);

(statearr_29716[(14)] = inst_29539);

(statearr_29716[(16)] = inst_29540);

(statearr_29716[(17)] = inst_29541);

return statearr_29716;
})();
var statearr_29717_29784 = state_29661__$1;
(statearr_29717_29784[(2)] = null);

(statearr_29717_29784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (11))){
var inst_29538 = (state_29661[(13)]);
var inst_29560 = (state_29661[(7)]);
var inst_29560__$1 = cljs.core.seq.call(null,inst_29538);
var state_29661__$1 = (function (){var statearr_29718 = state_29661;
(statearr_29718[(7)] = inst_29560__$1);

return statearr_29718;
})();
if(inst_29560__$1){
var statearr_29719_29785 = state_29661__$1;
(statearr_29719_29785[(1)] = (16));

} else {
var statearr_29720_29786 = state_29661__$1;
(statearr_29720_29786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (9))){
var inst_29590 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29721_29787 = state_29661__$1;
(statearr_29721_29787[(2)] = inst_29590);

(statearr_29721_29787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (5))){
var inst_29536 = cljs.core.deref.call(null,cs);
var inst_29537 = cljs.core.seq.call(null,inst_29536);
var inst_29538 = inst_29537;
var inst_29539 = null;
var inst_29540 = (0);
var inst_29541 = (0);
var state_29661__$1 = (function (){var statearr_29722 = state_29661;
(statearr_29722[(13)] = inst_29538);

(statearr_29722[(14)] = inst_29539);

(statearr_29722[(16)] = inst_29540);

(statearr_29722[(17)] = inst_29541);

return statearr_29722;
})();
var statearr_29723_29788 = state_29661__$1;
(statearr_29723_29788[(2)] = null);

(statearr_29723_29788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (14))){
var state_29661__$1 = state_29661;
var statearr_29724_29789 = state_29661__$1;
(statearr_29724_29789[(2)] = null);

(statearr_29724_29789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (45))){
var inst_29651 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29725_29790 = state_29661__$1;
(statearr_29725_29790[(2)] = inst_29651);

(statearr_29725_29790[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (26))){
var inst_29593 = (state_29661[(29)]);
var inst_29647 = (state_29661[(2)]);
var inst_29648 = cljs.core.seq.call(null,inst_29593);
var state_29661__$1 = (function (){var statearr_29726 = state_29661;
(statearr_29726[(31)] = inst_29647);

return statearr_29726;
})();
if(inst_29648){
var statearr_29727_29791 = state_29661__$1;
(statearr_29727_29791[(1)] = (42));

} else {
var statearr_29728_29792 = state_29661__$1;
(statearr_29728_29792[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (16))){
var inst_29560 = (state_29661[(7)]);
var inst_29562 = cljs.core.chunked_seq_QMARK_.call(null,inst_29560);
var state_29661__$1 = state_29661;
if(inst_29562){
var statearr_29729_29793 = state_29661__$1;
(statearr_29729_29793[(1)] = (19));

} else {
var statearr_29730_29794 = state_29661__$1;
(statearr_29730_29794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (38))){
var inst_29640 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29731_29795 = state_29661__$1;
(statearr_29731_29795[(2)] = inst_29640);

(statearr_29731_29795[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (30))){
var state_29661__$1 = state_29661;
var statearr_29732_29796 = state_29661__$1;
(statearr_29732_29796[(2)] = null);

(statearr_29732_29796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (10))){
var inst_29539 = (state_29661[(14)]);
var inst_29541 = (state_29661[(17)]);
var inst_29549 = cljs.core._nth.call(null,inst_29539,inst_29541);
var inst_29550 = cljs.core.nth.call(null,inst_29549,(0),null);
var inst_29551 = cljs.core.nth.call(null,inst_29549,(1),null);
var state_29661__$1 = (function (){var statearr_29733 = state_29661;
(statearr_29733[(26)] = inst_29550);

return statearr_29733;
})();
if(cljs.core.truth_(inst_29551)){
var statearr_29734_29797 = state_29661__$1;
(statearr_29734_29797[(1)] = (13));

} else {
var statearr_29735_29798 = state_29661__$1;
(statearr_29735_29798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (18))){
var inst_29586 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29736_29799 = state_29661__$1;
(statearr_29736_29799[(2)] = inst_29586);

(statearr_29736_29799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (42))){
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29661__$1,(45),dchan);
} else {
if((state_val_29662 === (37))){
var inst_29529 = (state_29661[(10)]);
var inst_29629 = (state_29661[(23)]);
var inst_29620 = (state_29661[(25)]);
var inst_29629__$1 = cljs.core.first.call(null,inst_29620);
var inst_29630 = cljs.core.async.put_BANG_.call(null,inst_29629__$1,inst_29529,done);
var state_29661__$1 = (function (){var statearr_29737 = state_29661;
(statearr_29737[(23)] = inst_29629__$1);

return statearr_29737;
})();
if(cljs.core.truth_(inst_29630)){
var statearr_29738_29800 = state_29661__$1;
(statearr_29738_29800[(1)] = (39));

} else {
var statearr_29739_29801 = state_29661__$1;
(statearr_29739_29801[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (8))){
var inst_29540 = (state_29661[(16)]);
var inst_29541 = (state_29661[(17)]);
var inst_29543 = (inst_29541 < inst_29540);
var inst_29544 = inst_29543;
var state_29661__$1 = state_29661;
if(cljs.core.truth_(inst_29544)){
var statearr_29740_29802 = state_29661__$1;
(statearr_29740_29802[(1)] = (10));

} else {
var statearr_29741_29803 = state_29661__$1;
(statearr_29741_29803[(1)] = (11));

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
});})(c__28412__auto___29749,cs,m,dchan,dctr,done))
;
return ((function (switch__28298__auto__,c__28412__auto___29749,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28299__auto__ = null;
var cljs$core$async$mult_$_state_machine__28299__auto____0 = (function (){
var statearr_29745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29745[(0)] = cljs$core$async$mult_$_state_machine__28299__auto__);

(statearr_29745[(1)] = (1));

return statearr_29745;
});
var cljs$core$async$mult_$_state_machine__28299__auto____1 = (function (state_29661){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_29661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e29746){if((e29746 instanceof Object)){
var ex__28302__auto__ = e29746;
var statearr_29747_29804 = state_29661;
(statearr_29747_29804[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29805 = state_29661;
state_29661 = G__29805;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28299__auto__ = function(state_29661){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28299__auto____1.call(this,state_29661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28299__auto____0;
cljs$core$async$mult_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28299__auto____1;
return cljs$core$async$mult_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___29749,cs,m,dchan,dctr,done))
})();
var state__28414__auto__ = (function (){var statearr_29748 = f__28413__auto__.call(null);
(statearr_29748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___29749);

return statearr_29748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___29749,cs,m,dchan,dctr,done))
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
var args29806 = [];
var len__22628__auto___29809 = arguments.length;
var i__22629__auto___29810 = (0);
while(true){
if((i__22629__auto___29810 < len__22628__auto___29809)){
args29806.push((arguments[i__22629__auto___29810]));

var G__29811 = (i__22629__auto___29810 + (1));
i__22629__auto___29810 = G__29811;
continue;
} else {
}
break;
}

var G__29808 = args29806.length;
switch (G__29808) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29806.length)].join('')));

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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m);
} else {
var m__22159__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,state_map);
} else {
var m__22159__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,state_map);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,mode);
} else {
var m__22159__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22635__auto__ = [];
var len__22628__auto___29823 = arguments.length;
var i__22629__auto___29824 = (0);
while(true){
if((i__22629__auto___29824 < len__22628__auto___29823)){
args__22635__auto__.push((arguments[i__22629__auto___29824]));

var G__29825 = (i__22629__auto___29824 + (1));
i__22629__auto___29824 = G__29825;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((3) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22636__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29817){
var map__29818 = p__29817;
var map__29818__$1 = ((((!((map__29818 == null)))?((((map__29818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29818):map__29818);
var opts = map__29818__$1;
var statearr_29820_29826 = state;
(statearr_29820_29826[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__29818,map__29818__$1,opts){
return (function (val){
var statearr_29821_29827 = state;
(statearr_29821_29827[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29818,map__29818__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_29822_29828 = state;
(statearr_29822_29828[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29813){
var G__29814 = cljs.core.first.call(null,seq29813);
var seq29813__$1 = cljs.core.next.call(null,seq29813);
var G__29815 = cljs.core.first.call(null,seq29813__$1);
var seq29813__$2 = cljs.core.next.call(null,seq29813__$1);
var G__29816 = cljs.core.first.call(null,seq29813__$2);
var seq29813__$3 = cljs.core.next.call(null,seq29813__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29814,G__29815,G__29816,seq29813__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29994 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29995){
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
this.meta29995 = meta29995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29996,meta29995__$1){
var self__ = this;
var _29996__$1 = this;
return (new cljs.core.async.t_cljs$core$async29994(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29995__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29996){
var self__ = this;
var _29996__$1 = this;
return self__.meta29995;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29994.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29995","meta29995",314610002,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29994";

cljs.core.async.t_cljs$core$async29994.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async29994");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29994 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29994(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29995){
return (new cljs.core.async.t_cljs$core$async29994(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29995));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29994(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28412__auto___30159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___30159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___30159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30096){
var state_val_30097 = (state_30096[(1)]);
if((state_val_30097 === (7))){
var inst_30012 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30098_30160 = state_30096__$1;
(statearr_30098_30160[(2)] = inst_30012);

(statearr_30098_30160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (20))){
var inst_30024 = (state_30096[(7)]);
var state_30096__$1 = state_30096;
var statearr_30099_30161 = state_30096__$1;
(statearr_30099_30161[(2)] = inst_30024);

(statearr_30099_30161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (27))){
var state_30096__$1 = state_30096;
var statearr_30100_30162 = state_30096__$1;
(statearr_30100_30162[(2)] = null);

(statearr_30100_30162[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (1))){
var inst_30000 = (state_30096[(8)]);
var inst_30000__$1 = calc_state.call(null);
var inst_30002 = (inst_30000__$1 == null);
var inst_30003 = cljs.core.not.call(null,inst_30002);
var state_30096__$1 = (function (){var statearr_30101 = state_30096;
(statearr_30101[(8)] = inst_30000__$1);

return statearr_30101;
})();
if(inst_30003){
var statearr_30102_30163 = state_30096__$1;
(statearr_30102_30163[(1)] = (2));

} else {
var statearr_30103_30164 = state_30096__$1;
(statearr_30103_30164[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (24))){
var inst_30056 = (state_30096[(9)]);
var inst_30047 = (state_30096[(10)]);
var inst_30070 = (state_30096[(11)]);
var inst_30070__$1 = inst_30047.call(null,inst_30056);
var state_30096__$1 = (function (){var statearr_30104 = state_30096;
(statearr_30104[(11)] = inst_30070__$1);

return statearr_30104;
})();
if(cljs.core.truth_(inst_30070__$1)){
var statearr_30105_30165 = state_30096__$1;
(statearr_30105_30165[(1)] = (29));

} else {
var statearr_30106_30166 = state_30096__$1;
(statearr_30106_30166[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (4))){
var inst_30015 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30015)){
var statearr_30107_30167 = state_30096__$1;
(statearr_30107_30167[(1)] = (8));

} else {
var statearr_30108_30168 = state_30096__$1;
(statearr_30108_30168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (15))){
var inst_30041 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30041)){
var statearr_30109_30169 = state_30096__$1;
(statearr_30109_30169[(1)] = (19));

} else {
var statearr_30110_30170 = state_30096__$1;
(statearr_30110_30170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (21))){
var inst_30046 = (state_30096[(12)]);
var inst_30046__$1 = (state_30096[(2)]);
var inst_30047 = cljs.core.get.call(null,inst_30046__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30048 = cljs.core.get.call(null,inst_30046__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30049 = cljs.core.get.call(null,inst_30046__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30096__$1 = (function (){var statearr_30111 = state_30096;
(statearr_30111[(10)] = inst_30047);

(statearr_30111[(12)] = inst_30046__$1);

(statearr_30111[(13)] = inst_30048);

return statearr_30111;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30096__$1,(22),inst_30049);
} else {
if((state_val_30097 === (31))){
var inst_30078 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30078)){
var statearr_30112_30171 = state_30096__$1;
(statearr_30112_30171[(1)] = (32));

} else {
var statearr_30113_30172 = state_30096__$1;
(statearr_30113_30172[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (32))){
var inst_30055 = (state_30096[(14)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30096__$1,(35),out,inst_30055);
} else {
if((state_val_30097 === (33))){
var inst_30046 = (state_30096[(12)]);
var inst_30024 = inst_30046;
var state_30096__$1 = (function (){var statearr_30114 = state_30096;
(statearr_30114[(7)] = inst_30024);

return statearr_30114;
})();
var statearr_30115_30173 = state_30096__$1;
(statearr_30115_30173[(2)] = null);

(statearr_30115_30173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (13))){
var inst_30024 = (state_30096[(7)]);
var inst_30031 = inst_30024.cljs$lang$protocol_mask$partition0$;
var inst_30032 = (inst_30031 & (64));
var inst_30033 = inst_30024.cljs$core$ISeq$;
var inst_30034 = (inst_30032) || (inst_30033);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30034)){
var statearr_30116_30174 = state_30096__$1;
(statearr_30116_30174[(1)] = (16));

} else {
var statearr_30117_30175 = state_30096__$1;
(statearr_30117_30175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (22))){
var inst_30056 = (state_30096[(9)]);
var inst_30055 = (state_30096[(14)]);
var inst_30054 = (state_30096[(2)]);
var inst_30055__$1 = cljs.core.nth.call(null,inst_30054,(0),null);
var inst_30056__$1 = cljs.core.nth.call(null,inst_30054,(1),null);
var inst_30057 = (inst_30055__$1 == null);
var inst_30058 = cljs.core._EQ_.call(null,inst_30056__$1,change);
var inst_30059 = (inst_30057) || (inst_30058);
var state_30096__$1 = (function (){var statearr_30118 = state_30096;
(statearr_30118[(9)] = inst_30056__$1);

(statearr_30118[(14)] = inst_30055__$1);

return statearr_30118;
})();
if(cljs.core.truth_(inst_30059)){
var statearr_30119_30176 = state_30096__$1;
(statearr_30119_30176[(1)] = (23));

} else {
var statearr_30120_30177 = state_30096__$1;
(statearr_30120_30177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (36))){
var inst_30046 = (state_30096[(12)]);
var inst_30024 = inst_30046;
var state_30096__$1 = (function (){var statearr_30121 = state_30096;
(statearr_30121[(7)] = inst_30024);

return statearr_30121;
})();
var statearr_30122_30178 = state_30096__$1;
(statearr_30122_30178[(2)] = null);

(statearr_30122_30178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (29))){
var inst_30070 = (state_30096[(11)]);
var state_30096__$1 = state_30096;
var statearr_30123_30179 = state_30096__$1;
(statearr_30123_30179[(2)] = inst_30070);

(statearr_30123_30179[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (6))){
var state_30096__$1 = state_30096;
var statearr_30124_30180 = state_30096__$1;
(statearr_30124_30180[(2)] = false);

(statearr_30124_30180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (28))){
var inst_30066 = (state_30096[(2)]);
var inst_30067 = calc_state.call(null);
var inst_30024 = inst_30067;
var state_30096__$1 = (function (){var statearr_30125 = state_30096;
(statearr_30125[(15)] = inst_30066);

(statearr_30125[(7)] = inst_30024);

return statearr_30125;
})();
var statearr_30126_30181 = state_30096__$1;
(statearr_30126_30181[(2)] = null);

(statearr_30126_30181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (25))){
var inst_30092 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30127_30182 = state_30096__$1;
(statearr_30127_30182[(2)] = inst_30092);

(statearr_30127_30182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (34))){
var inst_30090 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30128_30183 = state_30096__$1;
(statearr_30128_30183[(2)] = inst_30090);

(statearr_30128_30183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (17))){
var state_30096__$1 = state_30096;
var statearr_30129_30184 = state_30096__$1;
(statearr_30129_30184[(2)] = false);

(statearr_30129_30184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (3))){
var state_30096__$1 = state_30096;
var statearr_30130_30185 = state_30096__$1;
(statearr_30130_30185[(2)] = false);

(statearr_30130_30185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (12))){
var inst_30094 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30096__$1,inst_30094);
} else {
if((state_val_30097 === (2))){
var inst_30000 = (state_30096[(8)]);
var inst_30005 = inst_30000.cljs$lang$protocol_mask$partition0$;
var inst_30006 = (inst_30005 & (64));
var inst_30007 = inst_30000.cljs$core$ISeq$;
var inst_30008 = (inst_30006) || (inst_30007);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30008)){
var statearr_30131_30186 = state_30096__$1;
(statearr_30131_30186[(1)] = (5));

} else {
var statearr_30132_30187 = state_30096__$1;
(statearr_30132_30187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (23))){
var inst_30055 = (state_30096[(14)]);
var inst_30061 = (inst_30055 == null);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30061)){
var statearr_30133_30188 = state_30096__$1;
(statearr_30133_30188[(1)] = (26));

} else {
var statearr_30134_30189 = state_30096__$1;
(statearr_30134_30189[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (35))){
var inst_30081 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30081)){
var statearr_30135_30190 = state_30096__$1;
(statearr_30135_30190[(1)] = (36));

} else {
var statearr_30136_30191 = state_30096__$1;
(statearr_30136_30191[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (19))){
var inst_30024 = (state_30096[(7)]);
var inst_30043 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30024);
var state_30096__$1 = state_30096;
var statearr_30137_30192 = state_30096__$1;
(statearr_30137_30192[(2)] = inst_30043);

(statearr_30137_30192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (11))){
var inst_30024 = (state_30096[(7)]);
var inst_30028 = (inst_30024 == null);
var inst_30029 = cljs.core.not.call(null,inst_30028);
var state_30096__$1 = state_30096;
if(inst_30029){
var statearr_30138_30193 = state_30096__$1;
(statearr_30138_30193[(1)] = (13));

} else {
var statearr_30139_30194 = state_30096__$1;
(statearr_30139_30194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (9))){
var inst_30000 = (state_30096[(8)]);
var state_30096__$1 = state_30096;
var statearr_30140_30195 = state_30096__$1;
(statearr_30140_30195[(2)] = inst_30000);

(statearr_30140_30195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (5))){
var state_30096__$1 = state_30096;
var statearr_30141_30196 = state_30096__$1;
(statearr_30141_30196[(2)] = true);

(statearr_30141_30196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (14))){
var state_30096__$1 = state_30096;
var statearr_30142_30197 = state_30096__$1;
(statearr_30142_30197[(2)] = false);

(statearr_30142_30197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (26))){
var inst_30056 = (state_30096[(9)]);
var inst_30063 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30056);
var state_30096__$1 = state_30096;
var statearr_30143_30198 = state_30096__$1;
(statearr_30143_30198[(2)] = inst_30063);

(statearr_30143_30198[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (16))){
var state_30096__$1 = state_30096;
var statearr_30144_30199 = state_30096__$1;
(statearr_30144_30199[(2)] = true);

(statearr_30144_30199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (38))){
var inst_30086 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30145_30200 = state_30096__$1;
(statearr_30145_30200[(2)] = inst_30086);

(statearr_30145_30200[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (30))){
var inst_30056 = (state_30096[(9)]);
var inst_30047 = (state_30096[(10)]);
var inst_30048 = (state_30096[(13)]);
var inst_30073 = cljs.core.empty_QMARK_.call(null,inst_30047);
var inst_30074 = inst_30048.call(null,inst_30056);
var inst_30075 = cljs.core.not.call(null,inst_30074);
var inst_30076 = (inst_30073) && (inst_30075);
var state_30096__$1 = state_30096;
var statearr_30146_30201 = state_30096__$1;
(statearr_30146_30201[(2)] = inst_30076);

(statearr_30146_30201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (10))){
var inst_30000 = (state_30096[(8)]);
var inst_30020 = (state_30096[(2)]);
var inst_30021 = cljs.core.get.call(null,inst_30020,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30022 = cljs.core.get.call(null,inst_30020,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30023 = cljs.core.get.call(null,inst_30020,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30024 = inst_30000;
var state_30096__$1 = (function (){var statearr_30147 = state_30096;
(statearr_30147[(16)] = inst_30022);

(statearr_30147[(17)] = inst_30021);

(statearr_30147[(7)] = inst_30024);

(statearr_30147[(18)] = inst_30023);

return statearr_30147;
})();
var statearr_30148_30202 = state_30096__$1;
(statearr_30148_30202[(2)] = null);

(statearr_30148_30202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (18))){
var inst_30038 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30149_30203 = state_30096__$1;
(statearr_30149_30203[(2)] = inst_30038);

(statearr_30149_30203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (37))){
var state_30096__$1 = state_30096;
var statearr_30150_30204 = state_30096__$1;
(statearr_30150_30204[(2)] = null);

(statearr_30150_30204[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (8))){
var inst_30000 = (state_30096[(8)]);
var inst_30017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30000);
var state_30096__$1 = state_30096;
var statearr_30151_30205 = state_30096__$1;
(statearr_30151_30205[(2)] = inst_30017);

(statearr_30151_30205[(1)] = (10));


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
});})(c__28412__auto___30159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28298__auto__,c__28412__auto___30159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28299__auto__ = null;
var cljs$core$async$mix_$_state_machine__28299__auto____0 = (function (){
var statearr_30155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30155[(0)] = cljs$core$async$mix_$_state_machine__28299__auto__);

(statearr_30155[(1)] = (1));

return statearr_30155;
});
var cljs$core$async$mix_$_state_machine__28299__auto____1 = (function (state_30096){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e30156){if((e30156 instanceof Object)){
var ex__28302__auto__ = e30156;
var statearr_30157_30206 = state_30096;
(statearr_30157_30206[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30207 = state_30096;
state_30096 = G__30207;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28299__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28299__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28299__auto____0;
cljs$core$async$mix_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28299__auto____1;
return cljs$core$async$mix_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___30159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28414__auto__ = (function (){var statearr_30158 = f__28413__auto__.call(null);
(statearr_30158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___30159);

return statearr_30158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___30159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22159__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p,v,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30208 = [];
var len__22628__auto___30211 = arguments.length;
var i__22629__auto___30212 = (0);
while(true){
if((i__22629__auto___30212 < len__22628__auto___30211)){
args30208.push((arguments[i__22629__auto___30212]));

var G__30213 = (i__22629__auto___30212 + (1));
i__22629__auto___30212 = G__30213;
continue;
} else {
}
break;
}

var G__30210 = args30208.length;
switch (G__30210) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30208.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p);
} else {
var m__22159__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p);
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
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p,v);
} else {
var m__22159__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p,v);
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
var args30216 = [];
var len__22628__auto___30341 = arguments.length;
var i__22629__auto___30342 = (0);
while(true){
if((i__22629__auto___30342 < len__22628__auto___30341)){
args30216.push((arguments[i__22629__auto___30342]));

var G__30343 = (i__22629__auto___30342 + (1));
i__22629__auto___30342 = G__30343;
continue;
} else {
}
break;
}

var G__30218 = args30216.length;
switch (G__30218) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30216.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21445__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21445__auto__,mults){
return (function (p1__30215_SHARP_){
if(cljs.core.truth_(p1__30215_SHARP_.call(null,topic))){
return p1__30215_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30215_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21445__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30219 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30220){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30220 = meta30220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30221,meta30220__$1){
var self__ = this;
var _30221__$1 = this;
return (new cljs.core.async.t_cljs$core$async30219(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30220__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30221){
var self__ = this;
var _30221__$1 = this;
return self__.meta30220;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30219.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30220","meta30220",1211794581,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30219";

cljs.core.async.t_cljs$core$async30219.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async30219");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30219 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30219(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30220){
return (new cljs.core.async.t_cljs$core$async30219(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30220));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30219(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28412__auto___30345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___30345,mults,ensure_mult,p){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___30345,mults,ensure_mult,p){
return (function (state_30293){
var state_val_30294 = (state_30293[(1)]);
if((state_val_30294 === (7))){
var inst_30289 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30295_30346 = state_30293__$1;
(statearr_30295_30346[(2)] = inst_30289);

(statearr_30295_30346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (20))){
var state_30293__$1 = state_30293;
var statearr_30296_30347 = state_30293__$1;
(statearr_30296_30347[(2)] = null);

(statearr_30296_30347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (1))){
var state_30293__$1 = state_30293;
var statearr_30297_30348 = state_30293__$1;
(statearr_30297_30348[(2)] = null);

(statearr_30297_30348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (24))){
var inst_30272 = (state_30293[(7)]);
var inst_30281 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30272);
var state_30293__$1 = state_30293;
var statearr_30298_30349 = state_30293__$1;
(statearr_30298_30349[(2)] = inst_30281);

(statearr_30298_30349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (4))){
var inst_30224 = (state_30293[(8)]);
var inst_30224__$1 = (state_30293[(2)]);
var inst_30225 = (inst_30224__$1 == null);
var state_30293__$1 = (function (){var statearr_30299 = state_30293;
(statearr_30299[(8)] = inst_30224__$1);

return statearr_30299;
})();
if(cljs.core.truth_(inst_30225)){
var statearr_30300_30350 = state_30293__$1;
(statearr_30300_30350[(1)] = (5));

} else {
var statearr_30301_30351 = state_30293__$1;
(statearr_30301_30351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (15))){
var inst_30266 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30302_30352 = state_30293__$1;
(statearr_30302_30352[(2)] = inst_30266);

(statearr_30302_30352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (21))){
var inst_30286 = (state_30293[(2)]);
var state_30293__$1 = (function (){var statearr_30303 = state_30293;
(statearr_30303[(9)] = inst_30286);

return statearr_30303;
})();
var statearr_30304_30353 = state_30293__$1;
(statearr_30304_30353[(2)] = null);

(statearr_30304_30353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (13))){
var inst_30248 = (state_30293[(10)]);
var inst_30250 = cljs.core.chunked_seq_QMARK_.call(null,inst_30248);
var state_30293__$1 = state_30293;
if(inst_30250){
var statearr_30305_30354 = state_30293__$1;
(statearr_30305_30354[(1)] = (16));

} else {
var statearr_30306_30355 = state_30293__$1;
(statearr_30306_30355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (22))){
var inst_30278 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
if(cljs.core.truth_(inst_30278)){
var statearr_30307_30356 = state_30293__$1;
(statearr_30307_30356[(1)] = (23));

} else {
var statearr_30308_30357 = state_30293__$1;
(statearr_30308_30357[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (6))){
var inst_30272 = (state_30293[(7)]);
var inst_30274 = (state_30293[(11)]);
var inst_30224 = (state_30293[(8)]);
var inst_30272__$1 = topic_fn.call(null,inst_30224);
var inst_30273 = cljs.core.deref.call(null,mults);
var inst_30274__$1 = cljs.core.get.call(null,inst_30273,inst_30272__$1);
var state_30293__$1 = (function (){var statearr_30309 = state_30293;
(statearr_30309[(7)] = inst_30272__$1);

(statearr_30309[(11)] = inst_30274__$1);

return statearr_30309;
})();
if(cljs.core.truth_(inst_30274__$1)){
var statearr_30310_30358 = state_30293__$1;
(statearr_30310_30358[(1)] = (19));

} else {
var statearr_30311_30359 = state_30293__$1;
(statearr_30311_30359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (25))){
var inst_30283 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30312_30360 = state_30293__$1;
(statearr_30312_30360[(2)] = inst_30283);

(statearr_30312_30360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (17))){
var inst_30248 = (state_30293[(10)]);
var inst_30257 = cljs.core.first.call(null,inst_30248);
var inst_30258 = cljs.core.async.muxch_STAR_.call(null,inst_30257);
var inst_30259 = cljs.core.async.close_BANG_.call(null,inst_30258);
var inst_30260 = cljs.core.next.call(null,inst_30248);
var inst_30234 = inst_30260;
var inst_30235 = null;
var inst_30236 = (0);
var inst_30237 = (0);
var state_30293__$1 = (function (){var statearr_30313 = state_30293;
(statearr_30313[(12)] = inst_30235);

(statearr_30313[(13)] = inst_30236);

(statearr_30313[(14)] = inst_30259);

(statearr_30313[(15)] = inst_30234);

(statearr_30313[(16)] = inst_30237);

return statearr_30313;
})();
var statearr_30314_30361 = state_30293__$1;
(statearr_30314_30361[(2)] = null);

(statearr_30314_30361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (3))){
var inst_30291 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30293__$1,inst_30291);
} else {
if((state_val_30294 === (12))){
var inst_30268 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30315_30362 = state_30293__$1;
(statearr_30315_30362[(2)] = inst_30268);

(statearr_30315_30362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (2))){
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30293__$1,(4),ch);
} else {
if((state_val_30294 === (23))){
var state_30293__$1 = state_30293;
var statearr_30316_30363 = state_30293__$1;
(statearr_30316_30363[(2)] = null);

(statearr_30316_30363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (19))){
var inst_30274 = (state_30293[(11)]);
var inst_30224 = (state_30293[(8)]);
var inst_30276 = cljs.core.async.muxch_STAR_.call(null,inst_30274);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30293__$1,(22),inst_30276,inst_30224);
} else {
if((state_val_30294 === (11))){
var inst_30234 = (state_30293[(15)]);
var inst_30248 = (state_30293[(10)]);
var inst_30248__$1 = cljs.core.seq.call(null,inst_30234);
var state_30293__$1 = (function (){var statearr_30317 = state_30293;
(statearr_30317[(10)] = inst_30248__$1);

return statearr_30317;
})();
if(inst_30248__$1){
var statearr_30318_30364 = state_30293__$1;
(statearr_30318_30364[(1)] = (13));

} else {
var statearr_30319_30365 = state_30293__$1;
(statearr_30319_30365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (9))){
var inst_30270 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30320_30366 = state_30293__$1;
(statearr_30320_30366[(2)] = inst_30270);

(statearr_30320_30366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (5))){
var inst_30231 = cljs.core.deref.call(null,mults);
var inst_30232 = cljs.core.vals.call(null,inst_30231);
var inst_30233 = cljs.core.seq.call(null,inst_30232);
var inst_30234 = inst_30233;
var inst_30235 = null;
var inst_30236 = (0);
var inst_30237 = (0);
var state_30293__$1 = (function (){var statearr_30321 = state_30293;
(statearr_30321[(12)] = inst_30235);

(statearr_30321[(13)] = inst_30236);

(statearr_30321[(15)] = inst_30234);

(statearr_30321[(16)] = inst_30237);

return statearr_30321;
})();
var statearr_30322_30367 = state_30293__$1;
(statearr_30322_30367[(2)] = null);

(statearr_30322_30367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (14))){
var state_30293__$1 = state_30293;
var statearr_30326_30368 = state_30293__$1;
(statearr_30326_30368[(2)] = null);

(statearr_30326_30368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (16))){
var inst_30248 = (state_30293[(10)]);
var inst_30252 = cljs.core.chunk_first.call(null,inst_30248);
var inst_30253 = cljs.core.chunk_rest.call(null,inst_30248);
var inst_30254 = cljs.core.count.call(null,inst_30252);
var inst_30234 = inst_30253;
var inst_30235 = inst_30252;
var inst_30236 = inst_30254;
var inst_30237 = (0);
var state_30293__$1 = (function (){var statearr_30327 = state_30293;
(statearr_30327[(12)] = inst_30235);

(statearr_30327[(13)] = inst_30236);

(statearr_30327[(15)] = inst_30234);

(statearr_30327[(16)] = inst_30237);

return statearr_30327;
})();
var statearr_30328_30369 = state_30293__$1;
(statearr_30328_30369[(2)] = null);

(statearr_30328_30369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (10))){
var inst_30235 = (state_30293[(12)]);
var inst_30236 = (state_30293[(13)]);
var inst_30234 = (state_30293[(15)]);
var inst_30237 = (state_30293[(16)]);
var inst_30242 = cljs.core._nth.call(null,inst_30235,inst_30237);
var inst_30243 = cljs.core.async.muxch_STAR_.call(null,inst_30242);
var inst_30244 = cljs.core.async.close_BANG_.call(null,inst_30243);
var inst_30245 = (inst_30237 + (1));
var tmp30323 = inst_30235;
var tmp30324 = inst_30236;
var tmp30325 = inst_30234;
var inst_30234__$1 = tmp30325;
var inst_30235__$1 = tmp30323;
var inst_30236__$1 = tmp30324;
var inst_30237__$1 = inst_30245;
var state_30293__$1 = (function (){var statearr_30329 = state_30293;
(statearr_30329[(12)] = inst_30235__$1);

(statearr_30329[(13)] = inst_30236__$1);

(statearr_30329[(17)] = inst_30244);

(statearr_30329[(15)] = inst_30234__$1);

(statearr_30329[(16)] = inst_30237__$1);

return statearr_30329;
})();
var statearr_30330_30370 = state_30293__$1;
(statearr_30330_30370[(2)] = null);

(statearr_30330_30370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (18))){
var inst_30263 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30331_30371 = state_30293__$1;
(statearr_30331_30371[(2)] = inst_30263);

(statearr_30331_30371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (8))){
var inst_30236 = (state_30293[(13)]);
var inst_30237 = (state_30293[(16)]);
var inst_30239 = (inst_30237 < inst_30236);
var inst_30240 = inst_30239;
var state_30293__$1 = state_30293;
if(cljs.core.truth_(inst_30240)){
var statearr_30332_30372 = state_30293__$1;
(statearr_30332_30372[(1)] = (10));

} else {
var statearr_30333_30373 = state_30293__$1;
(statearr_30333_30373[(1)] = (11));

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
});})(c__28412__auto___30345,mults,ensure_mult,p))
;
return ((function (switch__28298__auto__,c__28412__auto___30345,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_30337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30337[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_30337[(1)] = (1));

return statearr_30337;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_30293){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e30338){if((e30338 instanceof Object)){
var ex__28302__auto__ = e30338;
var statearr_30339_30374 = state_30293;
(statearr_30339_30374[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30375 = state_30293;
state_30293 = G__30375;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_30293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_30293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___30345,mults,ensure_mult,p))
})();
var state__28414__auto__ = (function (){var statearr_30340 = f__28413__auto__.call(null);
(statearr_30340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___30345);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___30345,mults,ensure_mult,p))
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
var args30376 = [];
var len__22628__auto___30379 = arguments.length;
var i__22629__auto___30380 = (0);
while(true){
if((i__22629__auto___30380 < len__22628__auto___30379)){
args30376.push((arguments[i__22629__auto___30380]));

var G__30381 = (i__22629__auto___30380 + (1));
i__22629__auto___30380 = G__30381;
continue;
} else {
}
break;
}

var G__30378 = args30376.length;
switch (G__30378) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30376.length)].join('')));

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
var args30383 = [];
var len__22628__auto___30386 = arguments.length;
var i__22629__auto___30387 = (0);
while(true){
if((i__22629__auto___30387 < len__22628__auto___30386)){
args30383.push((arguments[i__22629__auto___30387]));

var G__30388 = (i__22629__auto___30387 + (1));
i__22629__auto___30387 = G__30388;
continue;
} else {
}
break;
}

var G__30385 = args30383.length;
switch (G__30385) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30383.length)].join('')));

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
var args30390 = [];
var len__22628__auto___30461 = arguments.length;
var i__22629__auto___30462 = (0);
while(true){
if((i__22629__auto___30462 < len__22628__auto___30461)){
args30390.push((arguments[i__22629__auto___30462]));

var G__30463 = (i__22629__auto___30462 + (1));
i__22629__auto___30462 = G__30463;
continue;
} else {
}
break;
}

var G__30392 = args30390.length;
switch (G__30392) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30390.length)].join('')));

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
var c__28412__auto___30465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___30465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___30465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30431){
var state_val_30432 = (state_30431[(1)]);
if((state_val_30432 === (7))){
var state_30431__$1 = state_30431;
var statearr_30433_30466 = state_30431__$1;
(statearr_30433_30466[(2)] = null);

(statearr_30433_30466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (1))){
var state_30431__$1 = state_30431;
var statearr_30434_30467 = state_30431__$1;
(statearr_30434_30467[(2)] = null);

(statearr_30434_30467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (4))){
var inst_30395 = (state_30431[(7)]);
var inst_30397 = (inst_30395 < cnt);
var state_30431__$1 = state_30431;
if(cljs.core.truth_(inst_30397)){
var statearr_30435_30468 = state_30431__$1;
(statearr_30435_30468[(1)] = (6));

} else {
var statearr_30436_30469 = state_30431__$1;
(statearr_30436_30469[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (15))){
var inst_30427 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30437_30470 = state_30431__$1;
(statearr_30437_30470[(2)] = inst_30427);

(statearr_30437_30470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (13))){
var inst_30420 = cljs.core.async.close_BANG_.call(null,out);
var state_30431__$1 = state_30431;
var statearr_30438_30471 = state_30431__$1;
(statearr_30438_30471[(2)] = inst_30420);

(statearr_30438_30471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (6))){
var state_30431__$1 = state_30431;
var statearr_30439_30472 = state_30431__$1;
(statearr_30439_30472[(2)] = null);

(statearr_30439_30472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (3))){
var inst_30429 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30431__$1,inst_30429);
} else {
if((state_val_30432 === (12))){
var inst_30417 = (state_30431[(8)]);
var inst_30417__$1 = (state_30431[(2)]);
var inst_30418 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30417__$1);
var state_30431__$1 = (function (){var statearr_30440 = state_30431;
(statearr_30440[(8)] = inst_30417__$1);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30418)){
var statearr_30441_30473 = state_30431__$1;
(statearr_30441_30473[(1)] = (13));

} else {
var statearr_30442_30474 = state_30431__$1;
(statearr_30442_30474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (2))){
var inst_30394 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30395 = (0);
var state_30431__$1 = (function (){var statearr_30443 = state_30431;
(statearr_30443[(9)] = inst_30394);

(statearr_30443[(7)] = inst_30395);

return statearr_30443;
})();
var statearr_30444_30475 = state_30431__$1;
(statearr_30444_30475[(2)] = null);

(statearr_30444_30475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (11))){
var inst_30395 = (state_30431[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30431,(10),Object,null,(9));
var inst_30404 = chs__$1.call(null,inst_30395);
var inst_30405 = done.call(null,inst_30395);
var inst_30406 = cljs.core.async.take_BANG_.call(null,inst_30404,inst_30405);
var state_30431__$1 = state_30431;
var statearr_30445_30476 = state_30431__$1;
(statearr_30445_30476[(2)] = inst_30406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (9))){
var inst_30395 = (state_30431[(7)]);
var inst_30408 = (state_30431[(2)]);
var inst_30409 = (inst_30395 + (1));
var inst_30395__$1 = inst_30409;
var state_30431__$1 = (function (){var statearr_30446 = state_30431;
(statearr_30446[(10)] = inst_30408);

(statearr_30446[(7)] = inst_30395__$1);

return statearr_30446;
})();
var statearr_30447_30477 = state_30431__$1;
(statearr_30447_30477[(2)] = null);

(statearr_30447_30477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (5))){
var inst_30415 = (state_30431[(2)]);
var state_30431__$1 = (function (){var statearr_30448 = state_30431;
(statearr_30448[(11)] = inst_30415);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30431__$1,(12),dchan);
} else {
if((state_val_30432 === (14))){
var inst_30417 = (state_30431[(8)]);
var inst_30422 = cljs.core.apply.call(null,f,inst_30417);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30431__$1,(16),out,inst_30422);
} else {
if((state_val_30432 === (16))){
var inst_30424 = (state_30431[(2)]);
var state_30431__$1 = (function (){var statearr_30449 = state_30431;
(statearr_30449[(12)] = inst_30424);

return statearr_30449;
})();
var statearr_30450_30478 = state_30431__$1;
(statearr_30450_30478[(2)] = null);

(statearr_30450_30478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (10))){
var inst_30399 = (state_30431[(2)]);
var inst_30400 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30431__$1 = (function (){var statearr_30451 = state_30431;
(statearr_30451[(13)] = inst_30399);

return statearr_30451;
})();
var statearr_30452_30479 = state_30431__$1;
(statearr_30452_30479[(2)] = inst_30400);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (8))){
var inst_30413 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30453_30480 = state_30431__$1;
(statearr_30453_30480[(2)] = inst_30413);

(statearr_30453_30480[(1)] = (5));


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
});})(c__28412__auto___30465,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28298__auto__,c__28412__auto___30465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_30457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30457[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_30457[(1)] = (1));

return statearr_30457;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_30431){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e30458){if((e30458 instanceof Object)){
var ex__28302__auto__ = e30458;
var statearr_30459_30481 = state_30431;
(statearr_30459_30481[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30482 = state_30431;
state_30431 = G__30482;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_30431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_30431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___30465,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28414__auto__ = (function (){var statearr_30460 = f__28413__auto__.call(null);
(statearr_30460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___30465);

return statearr_30460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___30465,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30484 = [];
var len__22628__auto___30542 = arguments.length;
var i__22629__auto___30543 = (0);
while(true){
if((i__22629__auto___30543 < len__22628__auto___30542)){
args30484.push((arguments[i__22629__auto___30543]));

var G__30544 = (i__22629__auto___30543 + (1));
i__22629__auto___30543 = G__30544;
continue;
} else {
}
break;
}

var G__30486 = args30484.length;
switch (G__30486) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30484.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28412__auto___30546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___30546,out){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___30546,out){
return (function (state_30518){
var state_val_30519 = (state_30518[(1)]);
if((state_val_30519 === (7))){
var inst_30497 = (state_30518[(7)]);
var inst_30498 = (state_30518[(8)]);
var inst_30497__$1 = (state_30518[(2)]);
var inst_30498__$1 = cljs.core.nth.call(null,inst_30497__$1,(0),null);
var inst_30499 = cljs.core.nth.call(null,inst_30497__$1,(1),null);
var inst_30500 = (inst_30498__$1 == null);
var state_30518__$1 = (function (){var statearr_30520 = state_30518;
(statearr_30520[(9)] = inst_30499);

(statearr_30520[(7)] = inst_30497__$1);

(statearr_30520[(8)] = inst_30498__$1);

return statearr_30520;
})();
if(cljs.core.truth_(inst_30500)){
var statearr_30521_30547 = state_30518__$1;
(statearr_30521_30547[(1)] = (8));

} else {
var statearr_30522_30548 = state_30518__$1;
(statearr_30522_30548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (1))){
var inst_30487 = cljs.core.vec.call(null,chs);
var inst_30488 = inst_30487;
var state_30518__$1 = (function (){var statearr_30523 = state_30518;
(statearr_30523[(10)] = inst_30488);

return statearr_30523;
})();
var statearr_30524_30549 = state_30518__$1;
(statearr_30524_30549[(2)] = null);

(statearr_30524_30549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (4))){
var inst_30488 = (state_30518[(10)]);
var state_30518__$1 = state_30518;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30518__$1,(7),inst_30488);
} else {
if((state_val_30519 === (6))){
var inst_30514 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30525_30550 = state_30518__$1;
(statearr_30525_30550[(2)] = inst_30514);

(statearr_30525_30550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (3))){
var inst_30516 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30518__$1,inst_30516);
} else {
if((state_val_30519 === (2))){
var inst_30488 = (state_30518[(10)]);
var inst_30490 = cljs.core.count.call(null,inst_30488);
var inst_30491 = (inst_30490 > (0));
var state_30518__$1 = state_30518;
if(cljs.core.truth_(inst_30491)){
var statearr_30527_30551 = state_30518__$1;
(statearr_30527_30551[(1)] = (4));

} else {
var statearr_30528_30552 = state_30518__$1;
(statearr_30528_30552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (11))){
var inst_30488 = (state_30518[(10)]);
var inst_30507 = (state_30518[(2)]);
var tmp30526 = inst_30488;
var inst_30488__$1 = tmp30526;
var state_30518__$1 = (function (){var statearr_30529 = state_30518;
(statearr_30529[(10)] = inst_30488__$1);

(statearr_30529[(11)] = inst_30507);

return statearr_30529;
})();
var statearr_30530_30553 = state_30518__$1;
(statearr_30530_30553[(2)] = null);

(statearr_30530_30553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (9))){
var inst_30498 = (state_30518[(8)]);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30518__$1,(11),out,inst_30498);
} else {
if((state_val_30519 === (5))){
var inst_30512 = cljs.core.async.close_BANG_.call(null,out);
var state_30518__$1 = state_30518;
var statearr_30531_30554 = state_30518__$1;
(statearr_30531_30554[(2)] = inst_30512);

(statearr_30531_30554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (10))){
var inst_30510 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30532_30555 = state_30518__$1;
(statearr_30532_30555[(2)] = inst_30510);

(statearr_30532_30555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (8))){
var inst_30499 = (state_30518[(9)]);
var inst_30488 = (state_30518[(10)]);
var inst_30497 = (state_30518[(7)]);
var inst_30498 = (state_30518[(8)]);
var inst_30502 = (function (){var cs = inst_30488;
var vec__30493 = inst_30497;
var v = inst_30498;
var c = inst_30499;
return ((function (cs,vec__30493,v,c,inst_30499,inst_30488,inst_30497,inst_30498,state_val_30519,c__28412__auto___30546,out){
return (function (p1__30483_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30483_SHARP_);
});
;})(cs,vec__30493,v,c,inst_30499,inst_30488,inst_30497,inst_30498,state_val_30519,c__28412__auto___30546,out))
})();
var inst_30503 = cljs.core.filterv.call(null,inst_30502,inst_30488);
var inst_30488__$1 = inst_30503;
var state_30518__$1 = (function (){var statearr_30533 = state_30518;
(statearr_30533[(10)] = inst_30488__$1);

return statearr_30533;
})();
var statearr_30534_30556 = state_30518__$1;
(statearr_30534_30556[(2)] = null);

(statearr_30534_30556[(1)] = (2));


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
});})(c__28412__auto___30546,out))
;
return ((function (switch__28298__auto__,c__28412__auto___30546,out){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_30538 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30538[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_30538[(1)] = (1));

return statearr_30538;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_30518){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e30539){if((e30539 instanceof Object)){
var ex__28302__auto__ = e30539;
var statearr_30540_30557 = state_30518;
(statearr_30540_30557[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30558 = state_30518;
state_30518 = G__30558;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_30518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_30518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___30546,out))
})();
var state__28414__auto__ = (function (){var statearr_30541 = f__28413__auto__.call(null);
(statearr_30541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___30546);

return statearr_30541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___30546,out))
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
var args30559 = [];
var len__22628__auto___30608 = arguments.length;
var i__22629__auto___30609 = (0);
while(true){
if((i__22629__auto___30609 < len__22628__auto___30608)){
args30559.push((arguments[i__22629__auto___30609]));

var G__30610 = (i__22629__auto___30609 + (1));
i__22629__auto___30609 = G__30610;
continue;
} else {
}
break;
}

var G__30561 = args30559.length;
switch (G__30561) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30559.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28412__auto___30612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___30612,out){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___30612,out){
return (function (state_30585){
var state_val_30586 = (state_30585[(1)]);
if((state_val_30586 === (7))){
var inst_30567 = (state_30585[(7)]);
var inst_30567__$1 = (state_30585[(2)]);
var inst_30568 = (inst_30567__$1 == null);
var inst_30569 = cljs.core.not.call(null,inst_30568);
var state_30585__$1 = (function (){var statearr_30587 = state_30585;
(statearr_30587[(7)] = inst_30567__$1);

return statearr_30587;
})();
if(inst_30569){
var statearr_30588_30613 = state_30585__$1;
(statearr_30588_30613[(1)] = (8));

} else {
var statearr_30589_30614 = state_30585__$1;
(statearr_30589_30614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (1))){
var inst_30562 = (0);
var state_30585__$1 = (function (){var statearr_30590 = state_30585;
(statearr_30590[(8)] = inst_30562);

return statearr_30590;
})();
var statearr_30591_30615 = state_30585__$1;
(statearr_30591_30615[(2)] = null);

(statearr_30591_30615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (4))){
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30585__$1,(7),ch);
} else {
if((state_val_30586 === (6))){
var inst_30580 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
var statearr_30592_30616 = state_30585__$1;
(statearr_30592_30616[(2)] = inst_30580);

(statearr_30592_30616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (3))){
var inst_30582 = (state_30585[(2)]);
var inst_30583 = cljs.core.async.close_BANG_.call(null,out);
var state_30585__$1 = (function (){var statearr_30593 = state_30585;
(statearr_30593[(9)] = inst_30582);

return statearr_30593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30585__$1,inst_30583);
} else {
if((state_val_30586 === (2))){
var inst_30562 = (state_30585[(8)]);
var inst_30564 = (inst_30562 < n);
var state_30585__$1 = state_30585;
if(cljs.core.truth_(inst_30564)){
var statearr_30594_30617 = state_30585__$1;
(statearr_30594_30617[(1)] = (4));

} else {
var statearr_30595_30618 = state_30585__$1;
(statearr_30595_30618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (11))){
var inst_30562 = (state_30585[(8)]);
var inst_30572 = (state_30585[(2)]);
var inst_30573 = (inst_30562 + (1));
var inst_30562__$1 = inst_30573;
var state_30585__$1 = (function (){var statearr_30596 = state_30585;
(statearr_30596[(8)] = inst_30562__$1);

(statearr_30596[(10)] = inst_30572);

return statearr_30596;
})();
var statearr_30597_30619 = state_30585__$1;
(statearr_30597_30619[(2)] = null);

(statearr_30597_30619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (9))){
var state_30585__$1 = state_30585;
var statearr_30598_30620 = state_30585__$1;
(statearr_30598_30620[(2)] = null);

(statearr_30598_30620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (5))){
var state_30585__$1 = state_30585;
var statearr_30599_30621 = state_30585__$1;
(statearr_30599_30621[(2)] = null);

(statearr_30599_30621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (10))){
var inst_30577 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
var statearr_30600_30622 = state_30585__$1;
(statearr_30600_30622[(2)] = inst_30577);

(statearr_30600_30622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (8))){
var inst_30567 = (state_30585[(7)]);
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30585__$1,(11),out,inst_30567);
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
});})(c__28412__auto___30612,out))
;
return ((function (switch__28298__auto__,c__28412__auto___30612,out){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_30604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30604[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_30604[(1)] = (1));

return statearr_30604;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_30585){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e30605){if((e30605 instanceof Object)){
var ex__28302__auto__ = e30605;
var statearr_30606_30623 = state_30585;
(statearr_30606_30623[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30624 = state_30585;
state_30585 = G__30624;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_30585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_30585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___30612,out))
})();
var state__28414__auto__ = (function (){var statearr_30607 = f__28413__auto__.call(null);
(statearr_30607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___30612);

return statearr_30607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___30612,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30632 = (function (map_LT_,f,ch,meta30633){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30633 = meta30633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30634,meta30633__$1){
var self__ = this;
var _30634__$1 = this;
return (new cljs.core.async.t_cljs$core$async30632(self__.map_LT_,self__.f,self__.ch,meta30633__$1));
});

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30634){
var self__ = this;
var _30634__$1 = this;
return self__.meta30633;
});

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30635 = (function (map_LT_,f,ch,meta30633,_,fn1,meta30636){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30633 = meta30633;
this._ = _;
this.fn1 = fn1;
this.meta30636 = meta30636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30637,meta30636__$1){
var self__ = this;
var _30637__$1 = this;
return (new cljs.core.async.t_cljs$core$async30635(self__.map_LT_,self__.f,self__.ch,self__.meta30633,self__._,self__.fn1,meta30636__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30637){
var self__ = this;
var _30637__$1 = this;
return self__.meta30636;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30625_SHARP_){
return f1.call(null,(((p1__30625_SHARP_ == null))?null:self__.f.call(null,p1__30625_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30635.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30633","meta30633",-477700070,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30632","cljs.core.async/t_cljs$core$async30632",-160577509,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30636","meta30636",-306322962,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30635";

cljs.core.async.t_cljs$core$async30635.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async30635");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30635 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30635(map_LT___$1,f__$1,ch__$1,meta30633__$1,___$2,fn1__$1,meta30636){
return (new cljs.core.async.t_cljs$core$async30635(map_LT___$1,f__$1,ch__$1,meta30633__$1,___$2,fn1__$1,meta30636));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30635(self__.map_LT_,self__.f,self__.ch,self__.meta30633,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21433__auto__ = ret;
if(cljs.core.truth_(and__21433__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21433__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30632.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30633","meta30633",-477700070,null)], null);
});

cljs.core.async.t_cljs$core$async30632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30632";

cljs.core.async.t_cljs$core$async30632.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async30632");
});

cljs.core.async.__GT_t_cljs$core$async30632 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30632(map_LT___$1,f__$1,ch__$1,meta30633){
return (new cljs.core.async.t_cljs$core$async30632(map_LT___$1,f__$1,ch__$1,meta30633));
});

}

return (new cljs.core.async.t_cljs$core$async30632(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30641 = (function (map_GT_,f,ch,meta30642){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30642 = meta30642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30643,meta30642__$1){
var self__ = this;
var _30643__$1 = this;
return (new cljs.core.async.t_cljs$core$async30641(self__.map_GT_,self__.f,self__.ch,meta30642__$1));
});

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30643){
var self__ = this;
var _30643__$1 = this;
return self__.meta30642;
});

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30642","meta30642",-823973381,null)], null);
});

cljs.core.async.t_cljs$core$async30641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30641";

cljs.core.async.t_cljs$core$async30641.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async30641");
});

cljs.core.async.__GT_t_cljs$core$async30641 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30641(map_GT___$1,f__$1,ch__$1,meta30642){
return (new cljs.core.async.t_cljs$core$async30641(map_GT___$1,f__$1,ch__$1,meta30642));
});

}

return (new cljs.core.async.t_cljs$core$async30641(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30647 = (function (filter_GT_,p,ch,meta30648){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30648 = meta30648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30649,meta30648__$1){
var self__ = this;
var _30649__$1 = this;
return (new cljs.core.async.t_cljs$core$async30647(self__.filter_GT_,self__.p,self__.ch,meta30648__$1));
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30649){
var self__ = this;
var _30649__$1 = this;
return self__.meta30648;
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30648","meta30648",-1425907540,null)], null);
});

cljs.core.async.t_cljs$core$async30647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30647";

cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async30647");
});

cljs.core.async.__GT_t_cljs$core$async30647 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30647(filter_GT___$1,p__$1,ch__$1,meta30648){
return (new cljs.core.async.t_cljs$core$async30647(filter_GT___$1,p__$1,ch__$1,meta30648));
});

}

return (new cljs.core.async.t_cljs$core$async30647(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30650 = [];
var len__22628__auto___30694 = arguments.length;
var i__22629__auto___30695 = (0);
while(true){
if((i__22629__auto___30695 < len__22628__auto___30694)){
args30650.push((arguments[i__22629__auto___30695]));

var G__30696 = (i__22629__auto___30695 + (1));
i__22629__auto___30695 = G__30696;
continue;
} else {
}
break;
}

var G__30652 = args30650.length;
switch (G__30652) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30650.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28412__auto___30698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___30698,out){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___30698,out){
return (function (state_30673){
var state_val_30674 = (state_30673[(1)]);
if((state_val_30674 === (7))){
var inst_30669 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30675_30699 = state_30673__$1;
(statearr_30675_30699[(2)] = inst_30669);

(statearr_30675_30699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (1))){
var state_30673__$1 = state_30673;
var statearr_30676_30700 = state_30673__$1;
(statearr_30676_30700[(2)] = null);

(statearr_30676_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (4))){
var inst_30655 = (state_30673[(7)]);
var inst_30655__$1 = (state_30673[(2)]);
var inst_30656 = (inst_30655__$1 == null);
var state_30673__$1 = (function (){var statearr_30677 = state_30673;
(statearr_30677[(7)] = inst_30655__$1);

return statearr_30677;
})();
if(cljs.core.truth_(inst_30656)){
var statearr_30678_30701 = state_30673__$1;
(statearr_30678_30701[(1)] = (5));

} else {
var statearr_30679_30702 = state_30673__$1;
(statearr_30679_30702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (6))){
var inst_30655 = (state_30673[(7)]);
var inst_30660 = p.call(null,inst_30655);
var state_30673__$1 = state_30673;
if(cljs.core.truth_(inst_30660)){
var statearr_30680_30703 = state_30673__$1;
(statearr_30680_30703[(1)] = (8));

} else {
var statearr_30681_30704 = state_30673__$1;
(statearr_30681_30704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (3))){
var inst_30671 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30673__$1,inst_30671);
} else {
if((state_val_30674 === (2))){
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30673__$1,(4),ch);
} else {
if((state_val_30674 === (11))){
var inst_30663 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30682_30705 = state_30673__$1;
(statearr_30682_30705[(2)] = inst_30663);

(statearr_30682_30705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (9))){
var state_30673__$1 = state_30673;
var statearr_30683_30706 = state_30673__$1;
(statearr_30683_30706[(2)] = null);

(statearr_30683_30706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (5))){
var inst_30658 = cljs.core.async.close_BANG_.call(null,out);
var state_30673__$1 = state_30673;
var statearr_30684_30707 = state_30673__$1;
(statearr_30684_30707[(2)] = inst_30658);

(statearr_30684_30707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (10))){
var inst_30666 = (state_30673[(2)]);
var state_30673__$1 = (function (){var statearr_30685 = state_30673;
(statearr_30685[(8)] = inst_30666);

return statearr_30685;
})();
var statearr_30686_30708 = state_30673__$1;
(statearr_30686_30708[(2)] = null);

(statearr_30686_30708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (8))){
var inst_30655 = (state_30673[(7)]);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30673__$1,(11),out,inst_30655);
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
});})(c__28412__auto___30698,out))
;
return ((function (switch__28298__auto__,c__28412__auto___30698,out){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_30690 = [null,null,null,null,null,null,null,null,null];
(statearr_30690[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_30690[(1)] = (1));

return statearr_30690;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_30673){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e30691){if((e30691 instanceof Object)){
var ex__28302__auto__ = e30691;
var statearr_30692_30709 = state_30673;
(statearr_30692_30709[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30710 = state_30673;
state_30673 = G__30710;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_30673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_30673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___30698,out))
})();
var state__28414__auto__ = (function (){var statearr_30693 = f__28413__auto__.call(null);
(statearr_30693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___30698);

return statearr_30693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___30698,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30711 = [];
var len__22628__auto___30714 = arguments.length;
var i__22629__auto___30715 = (0);
while(true){
if((i__22629__auto___30715 < len__22628__auto___30714)){
args30711.push((arguments[i__22629__auto___30715]));

var G__30716 = (i__22629__auto___30715 + (1));
i__22629__auto___30715 = G__30716;
continue;
} else {
}
break;
}

var G__30713 = args30711.length;
switch (G__30713) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30711.length)].join('')));

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
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__){
return (function (state_30883){
var state_val_30884 = (state_30883[(1)]);
if((state_val_30884 === (7))){
var inst_30879 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30885_30926 = state_30883__$1;
(statearr_30885_30926[(2)] = inst_30879);

(statearr_30885_30926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (20))){
var inst_30849 = (state_30883[(7)]);
var inst_30860 = (state_30883[(2)]);
var inst_30861 = cljs.core.next.call(null,inst_30849);
var inst_30835 = inst_30861;
var inst_30836 = null;
var inst_30837 = (0);
var inst_30838 = (0);
var state_30883__$1 = (function (){var statearr_30886 = state_30883;
(statearr_30886[(8)] = inst_30836);

(statearr_30886[(9)] = inst_30837);

(statearr_30886[(10)] = inst_30838);

(statearr_30886[(11)] = inst_30835);

(statearr_30886[(12)] = inst_30860);

return statearr_30886;
})();
var statearr_30887_30927 = state_30883__$1;
(statearr_30887_30927[(2)] = null);

(statearr_30887_30927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (1))){
var state_30883__$1 = state_30883;
var statearr_30888_30928 = state_30883__$1;
(statearr_30888_30928[(2)] = null);

(statearr_30888_30928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (4))){
var inst_30824 = (state_30883[(13)]);
var inst_30824__$1 = (state_30883[(2)]);
var inst_30825 = (inst_30824__$1 == null);
var state_30883__$1 = (function (){var statearr_30889 = state_30883;
(statearr_30889[(13)] = inst_30824__$1);

return statearr_30889;
})();
if(cljs.core.truth_(inst_30825)){
var statearr_30890_30929 = state_30883__$1;
(statearr_30890_30929[(1)] = (5));

} else {
var statearr_30891_30930 = state_30883__$1;
(statearr_30891_30930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (15))){
var state_30883__$1 = state_30883;
var statearr_30895_30931 = state_30883__$1;
(statearr_30895_30931[(2)] = null);

(statearr_30895_30931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (21))){
var state_30883__$1 = state_30883;
var statearr_30896_30932 = state_30883__$1;
(statearr_30896_30932[(2)] = null);

(statearr_30896_30932[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (13))){
var inst_30836 = (state_30883[(8)]);
var inst_30837 = (state_30883[(9)]);
var inst_30838 = (state_30883[(10)]);
var inst_30835 = (state_30883[(11)]);
var inst_30845 = (state_30883[(2)]);
var inst_30846 = (inst_30838 + (1));
var tmp30892 = inst_30836;
var tmp30893 = inst_30837;
var tmp30894 = inst_30835;
var inst_30835__$1 = tmp30894;
var inst_30836__$1 = tmp30892;
var inst_30837__$1 = tmp30893;
var inst_30838__$1 = inst_30846;
var state_30883__$1 = (function (){var statearr_30897 = state_30883;
(statearr_30897[(8)] = inst_30836__$1);

(statearr_30897[(9)] = inst_30837__$1);

(statearr_30897[(10)] = inst_30838__$1);

(statearr_30897[(11)] = inst_30835__$1);

(statearr_30897[(14)] = inst_30845);

return statearr_30897;
})();
var statearr_30898_30933 = state_30883__$1;
(statearr_30898_30933[(2)] = null);

(statearr_30898_30933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (22))){
var state_30883__$1 = state_30883;
var statearr_30899_30934 = state_30883__$1;
(statearr_30899_30934[(2)] = null);

(statearr_30899_30934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (6))){
var inst_30824 = (state_30883[(13)]);
var inst_30833 = f.call(null,inst_30824);
var inst_30834 = cljs.core.seq.call(null,inst_30833);
var inst_30835 = inst_30834;
var inst_30836 = null;
var inst_30837 = (0);
var inst_30838 = (0);
var state_30883__$1 = (function (){var statearr_30900 = state_30883;
(statearr_30900[(8)] = inst_30836);

(statearr_30900[(9)] = inst_30837);

(statearr_30900[(10)] = inst_30838);

(statearr_30900[(11)] = inst_30835);

return statearr_30900;
})();
var statearr_30901_30935 = state_30883__$1;
(statearr_30901_30935[(2)] = null);

(statearr_30901_30935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (17))){
var inst_30849 = (state_30883[(7)]);
var inst_30853 = cljs.core.chunk_first.call(null,inst_30849);
var inst_30854 = cljs.core.chunk_rest.call(null,inst_30849);
var inst_30855 = cljs.core.count.call(null,inst_30853);
var inst_30835 = inst_30854;
var inst_30836 = inst_30853;
var inst_30837 = inst_30855;
var inst_30838 = (0);
var state_30883__$1 = (function (){var statearr_30902 = state_30883;
(statearr_30902[(8)] = inst_30836);

(statearr_30902[(9)] = inst_30837);

(statearr_30902[(10)] = inst_30838);

(statearr_30902[(11)] = inst_30835);

return statearr_30902;
})();
var statearr_30903_30936 = state_30883__$1;
(statearr_30903_30936[(2)] = null);

(statearr_30903_30936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (3))){
var inst_30881 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30883__$1,inst_30881);
} else {
if((state_val_30884 === (12))){
var inst_30869 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30904_30937 = state_30883__$1;
(statearr_30904_30937[(2)] = inst_30869);

(statearr_30904_30937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (2))){
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30883__$1,(4),in$);
} else {
if((state_val_30884 === (23))){
var inst_30877 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30905_30938 = state_30883__$1;
(statearr_30905_30938[(2)] = inst_30877);

(statearr_30905_30938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (19))){
var inst_30864 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30906_30939 = state_30883__$1;
(statearr_30906_30939[(2)] = inst_30864);

(statearr_30906_30939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (11))){
var inst_30849 = (state_30883[(7)]);
var inst_30835 = (state_30883[(11)]);
var inst_30849__$1 = cljs.core.seq.call(null,inst_30835);
var state_30883__$1 = (function (){var statearr_30907 = state_30883;
(statearr_30907[(7)] = inst_30849__$1);

return statearr_30907;
})();
if(inst_30849__$1){
var statearr_30908_30940 = state_30883__$1;
(statearr_30908_30940[(1)] = (14));

} else {
var statearr_30909_30941 = state_30883__$1;
(statearr_30909_30941[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (9))){
var inst_30871 = (state_30883[(2)]);
var inst_30872 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30883__$1 = (function (){var statearr_30910 = state_30883;
(statearr_30910[(15)] = inst_30871);

return statearr_30910;
})();
if(cljs.core.truth_(inst_30872)){
var statearr_30911_30942 = state_30883__$1;
(statearr_30911_30942[(1)] = (21));

} else {
var statearr_30912_30943 = state_30883__$1;
(statearr_30912_30943[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (5))){
var inst_30827 = cljs.core.async.close_BANG_.call(null,out);
var state_30883__$1 = state_30883;
var statearr_30913_30944 = state_30883__$1;
(statearr_30913_30944[(2)] = inst_30827);

(statearr_30913_30944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (14))){
var inst_30849 = (state_30883[(7)]);
var inst_30851 = cljs.core.chunked_seq_QMARK_.call(null,inst_30849);
var state_30883__$1 = state_30883;
if(inst_30851){
var statearr_30914_30945 = state_30883__$1;
(statearr_30914_30945[(1)] = (17));

} else {
var statearr_30915_30946 = state_30883__$1;
(statearr_30915_30946[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (16))){
var inst_30867 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30916_30947 = state_30883__$1;
(statearr_30916_30947[(2)] = inst_30867);

(statearr_30916_30947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (10))){
var inst_30836 = (state_30883[(8)]);
var inst_30838 = (state_30883[(10)]);
var inst_30843 = cljs.core._nth.call(null,inst_30836,inst_30838);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30883__$1,(13),out,inst_30843);
} else {
if((state_val_30884 === (18))){
var inst_30849 = (state_30883[(7)]);
var inst_30858 = cljs.core.first.call(null,inst_30849);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30883__$1,(20),out,inst_30858);
} else {
if((state_val_30884 === (8))){
var inst_30837 = (state_30883[(9)]);
var inst_30838 = (state_30883[(10)]);
var inst_30840 = (inst_30838 < inst_30837);
var inst_30841 = inst_30840;
var state_30883__$1 = state_30883;
if(cljs.core.truth_(inst_30841)){
var statearr_30917_30948 = state_30883__$1;
(statearr_30917_30948[(1)] = (10));

} else {
var statearr_30918_30949 = state_30883__$1;
(statearr_30918_30949[(1)] = (11));

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
});})(c__28412__auto__))
;
return ((function (switch__28298__auto__,c__28412__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28299__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28299__auto____0 = (function (){
var statearr_30922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30922[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28299__auto__);

(statearr_30922[(1)] = (1));

return statearr_30922;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28299__auto____1 = (function (state_30883){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e30923){if((e30923 instanceof Object)){
var ex__28302__auto__ = e30923;
var statearr_30924_30950 = state_30883;
(statearr_30924_30950[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30951 = state_30883;
state_30883 = G__30951;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28299__auto__ = function(state_30883){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28299__auto____1.call(this,state_30883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28299__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28299__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_30925 = f__28413__auto__.call(null);
(statearr_30925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_30925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30952 = [];
var len__22628__auto___30955 = arguments.length;
var i__22629__auto___30956 = (0);
while(true){
if((i__22629__auto___30956 < len__22628__auto___30955)){
args30952.push((arguments[i__22629__auto___30956]));

var G__30957 = (i__22629__auto___30956 + (1));
i__22629__auto___30956 = G__30957;
continue;
} else {
}
break;
}

var G__30954 = args30952.length;
switch (G__30954) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30952.length)].join('')));

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
var args30959 = [];
var len__22628__auto___30962 = arguments.length;
var i__22629__auto___30963 = (0);
while(true){
if((i__22629__auto___30963 < len__22628__auto___30962)){
args30959.push((arguments[i__22629__auto___30963]));

var G__30964 = (i__22629__auto___30963 + (1));
i__22629__auto___30963 = G__30964;
continue;
} else {
}
break;
}

var G__30961 = args30959.length;
switch (G__30961) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30959.length)].join('')));

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
var args30966 = [];
var len__22628__auto___31017 = arguments.length;
var i__22629__auto___31018 = (0);
while(true){
if((i__22629__auto___31018 < len__22628__auto___31017)){
args30966.push((arguments[i__22629__auto___31018]));

var G__31019 = (i__22629__auto___31018 + (1));
i__22629__auto___31018 = G__31019;
continue;
} else {
}
break;
}

var G__30968 = args30966.length;
switch (G__30968) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30966.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28412__auto___31021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___31021,out){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___31021,out){
return (function (state_30992){
var state_val_30993 = (state_30992[(1)]);
if((state_val_30993 === (7))){
var inst_30987 = (state_30992[(2)]);
var state_30992__$1 = state_30992;
var statearr_30994_31022 = state_30992__$1;
(statearr_30994_31022[(2)] = inst_30987);

(statearr_30994_31022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30993 === (1))){
var inst_30969 = null;
var state_30992__$1 = (function (){var statearr_30995 = state_30992;
(statearr_30995[(7)] = inst_30969);

return statearr_30995;
})();
var statearr_30996_31023 = state_30992__$1;
(statearr_30996_31023[(2)] = null);

(statearr_30996_31023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30993 === (4))){
var inst_30972 = (state_30992[(8)]);
var inst_30972__$1 = (state_30992[(2)]);
var inst_30973 = (inst_30972__$1 == null);
var inst_30974 = cljs.core.not.call(null,inst_30973);
var state_30992__$1 = (function (){var statearr_30997 = state_30992;
(statearr_30997[(8)] = inst_30972__$1);

return statearr_30997;
})();
if(inst_30974){
var statearr_30998_31024 = state_30992__$1;
(statearr_30998_31024[(1)] = (5));

} else {
var statearr_30999_31025 = state_30992__$1;
(statearr_30999_31025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30993 === (6))){
var state_30992__$1 = state_30992;
var statearr_31000_31026 = state_30992__$1;
(statearr_31000_31026[(2)] = null);

(statearr_31000_31026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30993 === (3))){
var inst_30989 = (state_30992[(2)]);
var inst_30990 = cljs.core.async.close_BANG_.call(null,out);
var state_30992__$1 = (function (){var statearr_31001 = state_30992;
(statearr_31001[(9)] = inst_30989);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30992__$1,inst_30990);
} else {
if((state_val_30993 === (2))){
var state_30992__$1 = state_30992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30992__$1,(4),ch);
} else {
if((state_val_30993 === (11))){
var inst_30972 = (state_30992[(8)]);
var inst_30981 = (state_30992[(2)]);
var inst_30969 = inst_30972;
var state_30992__$1 = (function (){var statearr_31002 = state_30992;
(statearr_31002[(10)] = inst_30981);

(statearr_31002[(7)] = inst_30969);

return statearr_31002;
})();
var statearr_31003_31027 = state_30992__$1;
(statearr_31003_31027[(2)] = null);

(statearr_31003_31027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30993 === (9))){
var inst_30972 = (state_30992[(8)]);
var state_30992__$1 = state_30992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30992__$1,(11),out,inst_30972);
} else {
if((state_val_30993 === (5))){
var inst_30972 = (state_30992[(8)]);
var inst_30969 = (state_30992[(7)]);
var inst_30976 = cljs.core._EQ_.call(null,inst_30972,inst_30969);
var state_30992__$1 = state_30992;
if(inst_30976){
var statearr_31005_31028 = state_30992__$1;
(statearr_31005_31028[(1)] = (8));

} else {
var statearr_31006_31029 = state_30992__$1;
(statearr_31006_31029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30993 === (10))){
var inst_30984 = (state_30992[(2)]);
var state_30992__$1 = state_30992;
var statearr_31007_31030 = state_30992__$1;
(statearr_31007_31030[(2)] = inst_30984);

(statearr_31007_31030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30993 === (8))){
var inst_30969 = (state_30992[(7)]);
var tmp31004 = inst_30969;
var inst_30969__$1 = tmp31004;
var state_30992__$1 = (function (){var statearr_31008 = state_30992;
(statearr_31008[(7)] = inst_30969__$1);

return statearr_31008;
})();
var statearr_31009_31031 = state_30992__$1;
(statearr_31009_31031[(2)] = null);

(statearr_31009_31031[(1)] = (2));


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
});})(c__28412__auto___31021,out))
;
return ((function (switch__28298__auto__,c__28412__auto___31021,out){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_31013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31013[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_31013[(1)] = (1));

return statearr_31013;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_30992){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_30992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e31014){if((e31014 instanceof Object)){
var ex__28302__auto__ = e31014;
var statearr_31015_31032 = state_30992;
(statearr_31015_31032[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31033 = state_30992;
state_30992 = G__31033;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_30992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_30992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___31021,out))
})();
var state__28414__auto__ = (function (){var statearr_31016 = f__28413__auto__.call(null);
(statearr_31016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___31021);

return statearr_31016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___31021,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31034 = [];
var len__22628__auto___31104 = arguments.length;
var i__22629__auto___31105 = (0);
while(true){
if((i__22629__auto___31105 < len__22628__auto___31104)){
args31034.push((arguments[i__22629__auto___31105]));

var G__31106 = (i__22629__auto___31105 + (1));
i__22629__auto___31105 = G__31106;
continue;
} else {
}
break;
}

var G__31036 = args31034.length;
switch (G__31036) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31034.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28412__auto___31108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___31108,out){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___31108,out){
return (function (state_31074){
var state_val_31075 = (state_31074[(1)]);
if((state_val_31075 === (7))){
var inst_31070 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31076_31109 = state_31074__$1;
(statearr_31076_31109[(2)] = inst_31070);

(statearr_31076_31109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (1))){
var inst_31037 = (new Array(n));
var inst_31038 = inst_31037;
var inst_31039 = (0);
var state_31074__$1 = (function (){var statearr_31077 = state_31074;
(statearr_31077[(7)] = inst_31038);

(statearr_31077[(8)] = inst_31039);

return statearr_31077;
})();
var statearr_31078_31110 = state_31074__$1;
(statearr_31078_31110[(2)] = null);

(statearr_31078_31110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (4))){
var inst_31042 = (state_31074[(9)]);
var inst_31042__$1 = (state_31074[(2)]);
var inst_31043 = (inst_31042__$1 == null);
var inst_31044 = cljs.core.not.call(null,inst_31043);
var state_31074__$1 = (function (){var statearr_31079 = state_31074;
(statearr_31079[(9)] = inst_31042__$1);

return statearr_31079;
})();
if(inst_31044){
var statearr_31080_31111 = state_31074__$1;
(statearr_31080_31111[(1)] = (5));

} else {
var statearr_31081_31112 = state_31074__$1;
(statearr_31081_31112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (15))){
var inst_31064 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31082_31113 = state_31074__$1;
(statearr_31082_31113[(2)] = inst_31064);

(statearr_31082_31113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (13))){
var state_31074__$1 = state_31074;
var statearr_31083_31114 = state_31074__$1;
(statearr_31083_31114[(2)] = null);

(statearr_31083_31114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (6))){
var inst_31039 = (state_31074[(8)]);
var inst_31060 = (inst_31039 > (0));
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_31060)){
var statearr_31084_31115 = state_31074__$1;
(statearr_31084_31115[(1)] = (12));

} else {
var statearr_31085_31116 = state_31074__$1;
(statearr_31085_31116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (3))){
var inst_31072 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31074__$1,inst_31072);
} else {
if((state_val_31075 === (12))){
var inst_31038 = (state_31074[(7)]);
var inst_31062 = cljs.core.vec.call(null,inst_31038);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31074__$1,(15),out,inst_31062);
} else {
if((state_val_31075 === (2))){
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31074__$1,(4),ch);
} else {
if((state_val_31075 === (11))){
var inst_31054 = (state_31074[(2)]);
var inst_31055 = (new Array(n));
var inst_31038 = inst_31055;
var inst_31039 = (0);
var state_31074__$1 = (function (){var statearr_31086 = state_31074;
(statearr_31086[(7)] = inst_31038);

(statearr_31086[(8)] = inst_31039);

(statearr_31086[(10)] = inst_31054);

return statearr_31086;
})();
var statearr_31087_31117 = state_31074__$1;
(statearr_31087_31117[(2)] = null);

(statearr_31087_31117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (9))){
var inst_31038 = (state_31074[(7)]);
var inst_31052 = cljs.core.vec.call(null,inst_31038);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31074__$1,(11),out,inst_31052);
} else {
if((state_val_31075 === (5))){
var inst_31038 = (state_31074[(7)]);
var inst_31039 = (state_31074[(8)]);
var inst_31047 = (state_31074[(11)]);
var inst_31042 = (state_31074[(9)]);
var inst_31046 = (inst_31038[inst_31039] = inst_31042);
var inst_31047__$1 = (inst_31039 + (1));
var inst_31048 = (inst_31047__$1 < n);
var state_31074__$1 = (function (){var statearr_31088 = state_31074;
(statearr_31088[(12)] = inst_31046);

(statearr_31088[(11)] = inst_31047__$1);

return statearr_31088;
})();
if(cljs.core.truth_(inst_31048)){
var statearr_31089_31118 = state_31074__$1;
(statearr_31089_31118[(1)] = (8));

} else {
var statearr_31090_31119 = state_31074__$1;
(statearr_31090_31119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (14))){
var inst_31067 = (state_31074[(2)]);
var inst_31068 = cljs.core.async.close_BANG_.call(null,out);
var state_31074__$1 = (function (){var statearr_31092 = state_31074;
(statearr_31092[(13)] = inst_31067);

return statearr_31092;
})();
var statearr_31093_31120 = state_31074__$1;
(statearr_31093_31120[(2)] = inst_31068);

(statearr_31093_31120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (10))){
var inst_31058 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31094_31121 = state_31074__$1;
(statearr_31094_31121[(2)] = inst_31058);

(statearr_31094_31121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (8))){
var inst_31038 = (state_31074[(7)]);
var inst_31047 = (state_31074[(11)]);
var tmp31091 = inst_31038;
var inst_31038__$1 = tmp31091;
var inst_31039 = inst_31047;
var state_31074__$1 = (function (){var statearr_31095 = state_31074;
(statearr_31095[(7)] = inst_31038__$1);

(statearr_31095[(8)] = inst_31039);

return statearr_31095;
})();
var statearr_31096_31122 = state_31074__$1;
(statearr_31096_31122[(2)] = null);

(statearr_31096_31122[(1)] = (2));


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
});})(c__28412__auto___31108,out))
;
return ((function (switch__28298__auto__,c__28412__auto___31108,out){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_31100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31100[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_31100[(1)] = (1));

return statearr_31100;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_31074){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_31074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e31101){if((e31101 instanceof Object)){
var ex__28302__auto__ = e31101;
var statearr_31102_31123 = state_31074;
(statearr_31102_31123[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31124 = state_31074;
state_31074 = G__31124;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_31074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_31074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___31108,out))
})();
var state__28414__auto__ = (function (){var statearr_31103 = f__28413__auto__.call(null);
(statearr_31103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___31108);

return statearr_31103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___31108,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31125 = [];
var len__22628__auto___31199 = arguments.length;
var i__22629__auto___31200 = (0);
while(true){
if((i__22629__auto___31200 < len__22628__auto___31199)){
args31125.push((arguments[i__22629__auto___31200]));

var G__31201 = (i__22629__auto___31200 + (1));
i__22629__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var G__31127 = args31125.length;
switch (G__31127) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31125.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28412__auto___31203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___31203,out){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___31203,out){
return (function (state_31169){
var state_val_31170 = (state_31169[(1)]);
if((state_val_31170 === (7))){
var inst_31165 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31171_31204 = state_31169__$1;
(statearr_31171_31204[(2)] = inst_31165);

(statearr_31171_31204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (1))){
var inst_31128 = [];
var inst_31129 = inst_31128;
var inst_31130 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31169__$1 = (function (){var statearr_31172 = state_31169;
(statearr_31172[(7)] = inst_31129);

(statearr_31172[(8)] = inst_31130);

return statearr_31172;
})();
var statearr_31173_31205 = state_31169__$1;
(statearr_31173_31205[(2)] = null);

(statearr_31173_31205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (4))){
var inst_31133 = (state_31169[(9)]);
var inst_31133__$1 = (state_31169[(2)]);
var inst_31134 = (inst_31133__$1 == null);
var inst_31135 = cljs.core.not.call(null,inst_31134);
var state_31169__$1 = (function (){var statearr_31174 = state_31169;
(statearr_31174[(9)] = inst_31133__$1);

return statearr_31174;
})();
if(inst_31135){
var statearr_31175_31206 = state_31169__$1;
(statearr_31175_31206[(1)] = (5));

} else {
var statearr_31176_31207 = state_31169__$1;
(statearr_31176_31207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (15))){
var inst_31159 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31177_31208 = state_31169__$1;
(statearr_31177_31208[(2)] = inst_31159);

(statearr_31177_31208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (13))){
var state_31169__$1 = state_31169;
var statearr_31178_31209 = state_31169__$1;
(statearr_31178_31209[(2)] = null);

(statearr_31178_31209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (6))){
var inst_31129 = (state_31169[(7)]);
var inst_31154 = inst_31129.length;
var inst_31155 = (inst_31154 > (0));
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31155)){
var statearr_31179_31210 = state_31169__$1;
(statearr_31179_31210[(1)] = (12));

} else {
var statearr_31180_31211 = state_31169__$1;
(statearr_31180_31211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (3))){
var inst_31167 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31169__$1,inst_31167);
} else {
if((state_val_31170 === (12))){
var inst_31129 = (state_31169[(7)]);
var inst_31157 = cljs.core.vec.call(null,inst_31129);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31169__$1,(15),out,inst_31157);
} else {
if((state_val_31170 === (2))){
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31169__$1,(4),ch);
} else {
if((state_val_31170 === (11))){
var inst_31133 = (state_31169[(9)]);
var inst_31137 = (state_31169[(10)]);
var inst_31147 = (state_31169[(2)]);
var inst_31148 = [];
var inst_31149 = inst_31148.push(inst_31133);
var inst_31129 = inst_31148;
var inst_31130 = inst_31137;
var state_31169__$1 = (function (){var statearr_31181 = state_31169;
(statearr_31181[(7)] = inst_31129);

(statearr_31181[(11)] = inst_31147);

(statearr_31181[(8)] = inst_31130);

(statearr_31181[(12)] = inst_31149);

return statearr_31181;
})();
var statearr_31182_31212 = state_31169__$1;
(statearr_31182_31212[(2)] = null);

(statearr_31182_31212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (9))){
var inst_31129 = (state_31169[(7)]);
var inst_31145 = cljs.core.vec.call(null,inst_31129);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31169__$1,(11),out,inst_31145);
} else {
if((state_val_31170 === (5))){
var inst_31133 = (state_31169[(9)]);
var inst_31137 = (state_31169[(10)]);
var inst_31130 = (state_31169[(8)]);
var inst_31137__$1 = f.call(null,inst_31133);
var inst_31138 = cljs.core._EQ_.call(null,inst_31137__$1,inst_31130);
var inst_31139 = cljs.core.keyword_identical_QMARK_.call(null,inst_31130,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31140 = (inst_31138) || (inst_31139);
var state_31169__$1 = (function (){var statearr_31183 = state_31169;
(statearr_31183[(10)] = inst_31137__$1);

return statearr_31183;
})();
if(cljs.core.truth_(inst_31140)){
var statearr_31184_31213 = state_31169__$1;
(statearr_31184_31213[(1)] = (8));

} else {
var statearr_31185_31214 = state_31169__$1;
(statearr_31185_31214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (14))){
var inst_31162 = (state_31169[(2)]);
var inst_31163 = cljs.core.async.close_BANG_.call(null,out);
var state_31169__$1 = (function (){var statearr_31187 = state_31169;
(statearr_31187[(13)] = inst_31162);

return statearr_31187;
})();
var statearr_31188_31215 = state_31169__$1;
(statearr_31188_31215[(2)] = inst_31163);

(statearr_31188_31215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (10))){
var inst_31152 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31189_31216 = state_31169__$1;
(statearr_31189_31216[(2)] = inst_31152);

(statearr_31189_31216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (8))){
var inst_31133 = (state_31169[(9)]);
var inst_31129 = (state_31169[(7)]);
var inst_31137 = (state_31169[(10)]);
var inst_31142 = inst_31129.push(inst_31133);
var tmp31186 = inst_31129;
var inst_31129__$1 = tmp31186;
var inst_31130 = inst_31137;
var state_31169__$1 = (function (){var statearr_31190 = state_31169;
(statearr_31190[(7)] = inst_31129__$1);

(statearr_31190[(8)] = inst_31130);

(statearr_31190[(14)] = inst_31142);

return statearr_31190;
})();
var statearr_31191_31217 = state_31169__$1;
(statearr_31191_31217[(2)] = null);

(statearr_31191_31217[(1)] = (2));


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
});})(c__28412__auto___31203,out))
;
return ((function (switch__28298__auto__,c__28412__auto___31203,out){
return (function() {
var cljs$core$async$state_machine__28299__auto__ = null;
var cljs$core$async$state_machine__28299__auto____0 = (function (){
var statearr_31195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31195[(0)] = cljs$core$async$state_machine__28299__auto__);

(statearr_31195[(1)] = (1));

return statearr_31195;
});
var cljs$core$async$state_machine__28299__auto____1 = (function (state_31169){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_31169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e31196){if((e31196 instanceof Object)){
var ex__28302__auto__ = e31196;
var statearr_31197_31218 = state_31169;
(statearr_31197_31218[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31219 = state_31169;
state_31169 = G__31219;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
cljs$core$async$state_machine__28299__auto__ = function(state_31169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28299__auto____1.call(this,state_31169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28299__auto____0;
cljs$core$async$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28299__auto____1;
return cljs$core$async$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___31203,out))
})();
var state__28414__auto__ = (function (){var statearr_31198 = f__28413__auto__.call(null);
(statearr_31198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___31203);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___31203,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1470139188809