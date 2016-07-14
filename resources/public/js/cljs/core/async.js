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
var args28426 = [];
var len__22617__auto___28432 = arguments.length;
var i__22618__auto___28433 = (0);
while(true){
if((i__22618__auto___28433 < len__22617__auto___28432)){
args28426.push((arguments[i__22618__auto___28433]));

var G__28434 = (i__22618__auto___28433 + (1));
i__22618__auto___28433 = G__28434;
continue;
} else {
}
break;
}

var G__28428 = args28426.length;
switch (G__28428) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28426.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28429 = (function (f,blockable,meta28430){
this.f = f;
this.blockable = blockable;
this.meta28430 = meta28430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28431,meta28430__$1){
var self__ = this;
var _28431__$1 = this;
return (new cljs.core.async.t_cljs$core$async28429(self__.f,self__.blockable,meta28430__$1));
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28431){
var self__ = this;
var _28431__$1 = this;
return self__.meta28430;
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28430","meta28430",-1657478422,null)], null);
});

cljs.core.async.t_cljs$core$async28429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28429";

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async28429");
});

cljs.core.async.__GT_t_cljs$core$async28429 = (function cljs$core$async$__GT_t_cljs$core$async28429(f__$1,blockable__$1,meta28430){
return (new cljs.core.async.t_cljs$core$async28429(f__$1,blockable__$1,meta28430));
});

}

return (new cljs.core.async.t_cljs$core$async28429(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28438 = [];
var len__22617__auto___28441 = arguments.length;
var i__22618__auto___28442 = (0);
while(true){
if((i__22618__auto___28442 < len__22617__auto___28441)){
args28438.push((arguments[i__22618__auto___28442]));

var G__28443 = (i__22618__auto___28442 + (1));
i__22618__auto___28442 = G__28443;
continue;
} else {
}
break;
}

var G__28440 = args28438.length;
switch (G__28440) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28438.length)].join('')));

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
var args28445 = [];
var len__22617__auto___28448 = arguments.length;
var i__22618__auto___28449 = (0);
while(true){
if((i__22618__auto___28449 < len__22617__auto___28448)){
args28445.push((arguments[i__22618__auto___28449]));

var G__28450 = (i__22618__auto___28449 + (1));
i__22618__auto___28449 = G__28450;
continue;
} else {
}
break;
}

var G__28447 = args28445.length;
switch (G__28447) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28445.length)].join('')));

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
var args28452 = [];
var len__22617__auto___28455 = arguments.length;
var i__22618__auto___28456 = (0);
while(true){
if((i__22618__auto___28456 < len__22617__auto___28455)){
args28452.push((arguments[i__22618__auto___28456]));

var G__28457 = (i__22618__auto___28456 + (1));
i__22618__auto___28456 = G__28457;
continue;
} else {
}
break;
}

var G__28454 = args28452.length;
switch (G__28454) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28452.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28459 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28459);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28459,ret){
return (function (){
return fn1.call(null,val_28459);
});})(val_28459,ret))
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
var args28460 = [];
var len__22617__auto___28463 = arguments.length;
var i__22618__auto___28464 = (0);
while(true){
if((i__22618__auto___28464 < len__22617__auto___28463)){
args28460.push((arguments[i__22618__auto___28464]));

var G__28465 = (i__22618__auto___28464 + (1));
i__22618__auto___28464 = G__28465;
continue;
} else {
}
break;
}

var G__28462 = args28460.length;
switch (G__28462) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28460.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6367__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6367__auto__)){
var ret = temp__6367__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6367__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6367__auto__)){
var retb = temp__6367__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6367__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6367__auto__))
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
var n__22447__auto___28467 = n;
var x_28468 = (0);
while(true){
if((x_28468 < n__22447__auto___28467)){
(a[x_28468] = (0));

var G__28469 = (x_28468 + (1));
x_28468 = G__28469;
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

var G__28470 = (i + (1));
i = G__28470;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28474 = (function (alt_flag,flag,meta28475){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28475 = meta28475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28476,meta28475__$1){
var self__ = this;
var _28476__$1 = this;
return (new cljs.core.async.t_cljs$core$async28474(self__.alt_flag,self__.flag,meta28475__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28476){
var self__ = this;
var _28476__$1 = this;
return self__.meta28475;
});})(flag))
;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28474.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28475","meta28475",-1823000600,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28474";

cljs.core.async.t_cljs$core$async28474.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async28474");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28474 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28474(alt_flag__$1,flag__$1,meta28475){
return (new cljs.core.async.t_cljs$core$async28474(alt_flag__$1,flag__$1,meta28475));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28474(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28480 = (function (alt_handler,flag,cb,meta28481){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28481 = meta28481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28482,meta28481__$1){
var self__ = this;
var _28482__$1 = this;
return (new cljs.core.async.t_cljs$core$async28480(self__.alt_handler,self__.flag,self__.cb,meta28481__$1));
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28482){
var self__ = this;
var _28482__$1 = this;
return self__.meta28481;
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28481","meta28481",425943498,null)], null);
});

cljs.core.async.t_cljs$core$async28480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28480";

cljs.core.async.t_cljs$core$async28480.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async28480");
});

cljs.core.async.__GT_t_cljs$core$async28480 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28480(alt_handler__$1,flag__$1,cb__$1,meta28481){
return (new cljs.core.async.t_cljs$core$async28480(alt_handler__$1,flag__$1,cb__$1,meta28481));
});

}

return (new cljs.core.async.t_cljs$core$async28480(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28483_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28483_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28484_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21434__auto__ = wport;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28485 = (i + (1));
i = G__28485;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21434__auto__ = ret;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6369__auto__ = (function (){var and__21422__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(temp__6369__auto__)){
var got = temp__6369__auto__;
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
var args__22624__auto__ = [];
var len__22617__auto___28491 = arguments.length;
var i__22618__auto___28492 = (0);
while(true){
if((i__22618__auto___28492 < len__22617__auto___28491)){
args__22624__auto__.push((arguments[i__22618__auto___28492]));

var G__28493 = (i__22618__auto___28492 + (1));
i__22618__auto___28492 = G__28493;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((1) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22625__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28488){
var map__28489 = p__28488;
var map__28489__$1 = ((((!((map__28489 == null)))?((((map__28489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);
var opts = map__28489__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28486){
var G__28487 = cljs.core.first.call(null,seq28486);
var seq28486__$1 = cljs.core.next.call(null,seq28486);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28487,seq28486__$1);
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
var args28494 = [];
var len__22617__auto___28544 = arguments.length;
var i__22618__auto___28545 = (0);
while(true){
if((i__22618__auto___28545 < len__22617__auto___28544)){
args28494.push((arguments[i__22618__auto___28545]));

var G__28546 = (i__22618__auto___28545 + (1));
i__22618__auto___28545 = G__28546;
continue;
} else {
}
break;
}

var G__28496 = args28494.length;
switch (G__28496) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28494.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28367__auto___28548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___28548){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___28548){
return (function (state_28520){
var state_val_28521 = (state_28520[(1)]);
if((state_val_28521 === (7))){
var inst_28516 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28522_28549 = state_28520__$1;
(statearr_28522_28549[(2)] = inst_28516);

(statearr_28522_28549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (1))){
var state_28520__$1 = state_28520;
var statearr_28523_28550 = state_28520__$1;
(statearr_28523_28550[(2)] = null);

(statearr_28523_28550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (4))){
var inst_28499 = (state_28520[(7)]);
var inst_28499__$1 = (state_28520[(2)]);
var inst_28500 = (inst_28499__$1 == null);
var state_28520__$1 = (function (){var statearr_28524 = state_28520;
(statearr_28524[(7)] = inst_28499__$1);

return statearr_28524;
})();
if(cljs.core.truth_(inst_28500)){
var statearr_28525_28551 = state_28520__$1;
(statearr_28525_28551[(1)] = (5));

} else {
var statearr_28526_28552 = state_28520__$1;
(statearr_28526_28552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (13))){
var state_28520__$1 = state_28520;
var statearr_28527_28553 = state_28520__$1;
(statearr_28527_28553[(2)] = null);

(statearr_28527_28553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (6))){
var inst_28499 = (state_28520[(7)]);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28520__$1,(11),to,inst_28499);
} else {
if((state_val_28521 === (3))){
var inst_28518 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28520__$1,inst_28518);
} else {
if((state_val_28521 === (12))){
var state_28520__$1 = state_28520;
var statearr_28528_28554 = state_28520__$1;
(statearr_28528_28554[(2)] = null);

(statearr_28528_28554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (2))){
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(4),from);
} else {
if((state_val_28521 === (11))){
var inst_28509 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28509)){
var statearr_28529_28555 = state_28520__$1;
(statearr_28529_28555[(1)] = (12));

} else {
var statearr_28530_28556 = state_28520__$1;
(statearr_28530_28556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (9))){
var state_28520__$1 = state_28520;
var statearr_28531_28557 = state_28520__$1;
(statearr_28531_28557[(2)] = null);

(statearr_28531_28557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (5))){
var state_28520__$1 = state_28520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28532_28558 = state_28520__$1;
(statearr_28532_28558[(1)] = (8));

} else {
var statearr_28533_28559 = state_28520__$1;
(statearr_28533_28559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (14))){
var inst_28514 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28534_28560 = state_28520__$1;
(statearr_28534_28560[(2)] = inst_28514);

(statearr_28534_28560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (10))){
var inst_28506 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28535_28561 = state_28520__$1;
(statearr_28535_28561[(2)] = inst_28506);

(statearr_28535_28561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (8))){
var inst_28503 = cljs.core.async.close_BANG_.call(null,to);
var state_28520__$1 = state_28520;
var statearr_28536_28562 = state_28520__$1;
(statearr_28536_28562[(2)] = inst_28503);

(statearr_28536_28562[(1)] = (10));


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
});})(c__28367__auto___28548))
;
return ((function (switch__28253__auto__,c__28367__auto___28548){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_28540 = [null,null,null,null,null,null,null,null];
(statearr_28540[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_28540[(1)] = (1));

return statearr_28540;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_28520){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_28520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e28541){if((e28541 instanceof Object)){
var ex__28257__auto__ = e28541;
var statearr_28542_28563 = state_28520;
(statearr_28542_28563[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28564 = state_28520;
state_28520 = G__28564;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_28520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_28520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___28548))
})();
var state__28369__auto__ = (function (){var statearr_28543 = f__28368__auto__.call(null);
(statearr_28543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___28548);

return statearr_28543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___28548))
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
return (function (p__28753){
var vec__28754 = p__28753;
var v = cljs.core.nth.call(null,vec__28754,(0),null);
var p = cljs.core.nth.call(null,vec__28754,(1),null);
var job = vec__28754;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28367__auto___28940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___28940,res,vec__28754,v,p,job,jobs,results){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___28940,res,vec__28754,v,p,job,jobs,results){
return (function (state_28761){
var state_val_28762 = (state_28761[(1)]);
if((state_val_28762 === (1))){
var state_28761__$1 = state_28761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28761__$1,(2),res,v);
} else {
if((state_val_28762 === (2))){
var inst_28758 = (state_28761[(2)]);
var inst_28759 = cljs.core.async.close_BANG_.call(null,res);
var state_28761__$1 = (function (){var statearr_28763 = state_28761;
(statearr_28763[(7)] = inst_28758);

return statearr_28763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28761__$1,inst_28759);
} else {
return null;
}
}
});})(c__28367__auto___28940,res,vec__28754,v,p,job,jobs,results))
;
return ((function (switch__28253__auto__,c__28367__auto___28940,res,vec__28754,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0 = (function (){
var statearr_28767 = [null,null,null,null,null,null,null,null];
(statearr_28767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__);

(statearr_28767[(1)] = (1));

return statearr_28767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1 = (function (state_28761){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_28761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e28768){if((e28768 instanceof Object)){
var ex__28257__auto__ = e28768;
var statearr_28769_28941 = state_28761;
(statearr_28769_28941[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28942 = state_28761;
state_28761 = G__28942;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = function(state_28761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1.call(this,state_28761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___28940,res,vec__28754,v,p,job,jobs,results))
})();
var state__28369__auto__ = (function (){var statearr_28770 = f__28368__auto__.call(null);
(statearr_28770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___28940);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___28940,res,vec__28754,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28771){
var vec__28772 = p__28771;
var v = cljs.core.nth.call(null,vec__28772,(0),null);
var p = cljs.core.nth.call(null,vec__28772,(1),null);
var job = vec__28772;
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
var n__22447__auto___28943 = n;
var __28944 = (0);
while(true){
if((__28944 < n__22447__auto___28943)){
var G__28775_28945 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28775_28945) {
case "compute":
var c__28367__auto___28947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28944,c__28367__auto___28947,G__28775_28945,n__22447__auto___28943,jobs,results,process,async){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (__28944,c__28367__auto___28947,G__28775_28945,n__22447__auto___28943,jobs,results,process,async){
return (function (state_28788){
var state_val_28789 = (state_28788[(1)]);
if((state_val_28789 === (1))){
var state_28788__$1 = state_28788;
var statearr_28790_28948 = state_28788__$1;
(statearr_28790_28948[(2)] = null);

(statearr_28790_28948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (2))){
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28788__$1,(4),jobs);
} else {
if((state_val_28789 === (3))){
var inst_28786 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28788__$1,inst_28786);
} else {
if((state_val_28789 === (4))){
var inst_28778 = (state_28788[(2)]);
var inst_28779 = process.call(null,inst_28778);
var state_28788__$1 = state_28788;
if(cljs.core.truth_(inst_28779)){
var statearr_28791_28949 = state_28788__$1;
(statearr_28791_28949[(1)] = (5));

} else {
var statearr_28792_28950 = state_28788__$1;
(statearr_28792_28950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (5))){
var state_28788__$1 = state_28788;
var statearr_28793_28951 = state_28788__$1;
(statearr_28793_28951[(2)] = null);

(statearr_28793_28951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (6))){
var state_28788__$1 = state_28788;
var statearr_28794_28952 = state_28788__$1;
(statearr_28794_28952[(2)] = null);

(statearr_28794_28952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (7))){
var inst_28784 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
var statearr_28795_28953 = state_28788__$1;
(statearr_28795_28953[(2)] = inst_28784);

(statearr_28795_28953[(1)] = (3));


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
});})(__28944,c__28367__auto___28947,G__28775_28945,n__22447__auto___28943,jobs,results,process,async))
;
return ((function (__28944,switch__28253__auto__,c__28367__auto___28947,G__28775_28945,n__22447__auto___28943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0 = (function (){
var statearr_28799 = [null,null,null,null,null,null,null];
(statearr_28799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__);

(statearr_28799[(1)] = (1));

return statearr_28799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1 = (function (state_28788){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_28788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e28800){if((e28800 instanceof Object)){
var ex__28257__auto__ = e28800;
var statearr_28801_28954 = state_28788;
(statearr_28801_28954[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28955 = state_28788;
state_28788 = G__28955;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = function(state_28788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1.call(this,state_28788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__;
})()
;})(__28944,switch__28253__auto__,c__28367__auto___28947,G__28775_28945,n__22447__auto___28943,jobs,results,process,async))
})();
var state__28369__auto__ = (function (){var statearr_28802 = f__28368__auto__.call(null);
(statearr_28802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___28947);

return statearr_28802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(__28944,c__28367__auto___28947,G__28775_28945,n__22447__auto___28943,jobs,results,process,async))
);


break;
case "async":
var c__28367__auto___28956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28944,c__28367__auto___28956,G__28775_28945,n__22447__auto___28943,jobs,results,process,async){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (__28944,c__28367__auto___28956,G__28775_28945,n__22447__auto___28943,jobs,results,process,async){
return (function (state_28815){
var state_val_28816 = (state_28815[(1)]);
if((state_val_28816 === (1))){
var state_28815__$1 = state_28815;
var statearr_28817_28957 = state_28815__$1;
(statearr_28817_28957[(2)] = null);

(statearr_28817_28957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (2))){
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28815__$1,(4),jobs);
} else {
if((state_val_28816 === (3))){
var inst_28813 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28815__$1,inst_28813);
} else {
if((state_val_28816 === (4))){
var inst_28805 = (state_28815[(2)]);
var inst_28806 = async.call(null,inst_28805);
var state_28815__$1 = state_28815;
if(cljs.core.truth_(inst_28806)){
var statearr_28818_28958 = state_28815__$1;
(statearr_28818_28958[(1)] = (5));

} else {
var statearr_28819_28959 = state_28815__$1;
(statearr_28819_28959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (5))){
var state_28815__$1 = state_28815;
var statearr_28820_28960 = state_28815__$1;
(statearr_28820_28960[(2)] = null);

(statearr_28820_28960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (6))){
var state_28815__$1 = state_28815;
var statearr_28821_28961 = state_28815__$1;
(statearr_28821_28961[(2)] = null);

(statearr_28821_28961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (7))){
var inst_28811 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28822_28962 = state_28815__$1;
(statearr_28822_28962[(2)] = inst_28811);

(statearr_28822_28962[(1)] = (3));


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
});})(__28944,c__28367__auto___28956,G__28775_28945,n__22447__auto___28943,jobs,results,process,async))
;
return ((function (__28944,switch__28253__auto__,c__28367__auto___28956,G__28775_28945,n__22447__auto___28943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0 = (function (){
var statearr_28826 = [null,null,null,null,null,null,null];
(statearr_28826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__);

(statearr_28826[(1)] = (1));

return statearr_28826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1 = (function (state_28815){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_28815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e28827){if((e28827 instanceof Object)){
var ex__28257__auto__ = e28827;
var statearr_28828_28963 = state_28815;
(statearr_28828_28963[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28964 = state_28815;
state_28815 = G__28964;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = function(state_28815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1.call(this,state_28815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__;
})()
;})(__28944,switch__28253__auto__,c__28367__auto___28956,G__28775_28945,n__22447__auto___28943,jobs,results,process,async))
})();
var state__28369__auto__ = (function (){var statearr_28829 = f__28368__auto__.call(null);
(statearr_28829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___28956);

return statearr_28829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(__28944,c__28367__auto___28956,G__28775_28945,n__22447__auto___28943,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28965 = (__28944 + (1));
__28944 = G__28965;
continue;
} else {
}
break;
}

var c__28367__auto___28966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___28966,jobs,results,process,async){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___28966,jobs,results,process,async){
return (function (state_28851){
var state_val_28852 = (state_28851[(1)]);
if((state_val_28852 === (1))){
var state_28851__$1 = state_28851;
var statearr_28853_28967 = state_28851__$1;
(statearr_28853_28967[(2)] = null);

(statearr_28853_28967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (2))){
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28851__$1,(4),from);
} else {
if((state_val_28852 === (3))){
var inst_28849 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28851__$1,inst_28849);
} else {
if((state_val_28852 === (4))){
var inst_28832 = (state_28851[(7)]);
var inst_28832__$1 = (state_28851[(2)]);
var inst_28833 = (inst_28832__$1 == null);
var state_28851__$1 = (function (){var statearr_28854 = state_28851;
(statearr_28854[(7)] = inst_28832__$1);

return statearr_28854;
})();
if(cljs.core.truth_(inst_28833)){
var statearr_28855_28968 = state_28851__$1;
(statearr_28855_28968[(1)] = (5));

} else {
var statearr_28856_28969 = state_28851__$1;
(statearr_28856_28969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (5))){
var inst_28835 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28851__$1 = state_28851;
var statearr_28857_28970 = state_28851__$1;
(statearr_28857_28970[(2)] = inst_28835);

(statearr_28857_28970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (6))){
var inst_28837 = (state_28851[(8)]);
var inst_28832 = (state_28851[(7)]);
var inst_28837__$1 = cljs.core.async.chan.call(null,(1));
var inst_28838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28839 = [inst_28832,inst_28837__$1];
var inst_28840 = (new cljs.core.PersistentVector(null,2,(5),inst_28838,inst_28839,null));
var state_28851__$1 = (function (){var statearr_28858 = state_28851;
(statearr_28858[(8)] = inst_28837__$1);

return statearr_28858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28851__$1,(8),jobs,inst_28840);
} else {
if((state_val_28852 === (7))){
var inst_28847 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28859_28971 = state_28851__$1;
(statearr_28859_28971[(2)] = inst_28847);

(statearr_28859_28971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (8))){
var inst_28837 = (state_28851[(8)]);
var inst_28842 = (state_28851[(2)]);
var state_28851__$1 = (function (){var statearr_28860 = state_28851;
(statearr_28860[(9)] = inst_28842);

return statearr_28860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28851__$1,(9),results,inst_28837);
} else {
if((state_val_28852 === (9))){
var inst_28844 = (state_28851[(2)]);
var state_28851__$1 = (function (){var statearr_28861 = state_28851;
(statearr_28861[(10)] = inst_28844);

return statearr_28861;
})();
var statearr_28862_28972 = state_28851__$1;
(statearr_28862_28972[(2)] = null);

(statearr_28862_28972[(1)] = (2));


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
});})(c__28367__auto___28966,jobs,results,process,async))
;
return ((function (switch__28253__auto__,c__28367__auto___28966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0 = (function (){
var statearr_28866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__);

(statearr_28866[(1)] = (1));

return statearr_28866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1 = (function (state_28851){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_28851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e28867){if((e28867 instanceof Object)){
var ex__28257__auto__ = e28867;
var statearr_28868_28973 = state_28851;
(statearr_28868_28973[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28974 = state_28851;
state_28851 = G__28974;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = function(state_28851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1.call(this,state_28851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___28966,jobs,results,process,async))
})();
var state__28369__auto__ = (function (){var statearr_28869 = f__28368__auto__.call(null);
(statearr_28869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___28966);

return statearr_28869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___28966,jobs,results,process,async))
);


var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__,jobs,results,process,async){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__,jobs,results,process,async){
return (function (state_28907){
var state_val_28908 = (state_28907[(1)]);
if((state_val_28908 === (7))){
var inst_28903 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
var statearr_28909_28975 = state_28907__$1;
(statearr_28909_28975[(2)] = inst_28903);

(statearr_28909_28975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (20))){
var state_28907__$1 = state_28907;
var statearr_28910_28976 = state_28907__$1;
(statearr_28910_28976[(2)] = null);

(statearr_28910_28976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (1))){
var state_28907__$1 = state_28907;
var statearr_28911_28977 = state_28907__$1;
(statearr_28911_28977[(2)] = null);

(statearr_28911_28977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (4))){
var inst_28872 = (state_28907[(7)]);
var inst_28872__$1 = (state_28907[(2)]);
var inst_28873 = (inst_28872__$1 == null);
var state_28907__$1 = (function (){var statearr_28912 = state_28907;
(statearr_28912[(7)] = inst_28872__$1);

return statearr_28912;
})();
if(cljs.core.truth_(inst_28873)){
var statearr_28913_28978 = state_28907__$1;
(statearr_28913_28978[(1)] = (5));

} else {
var statearr_28914_28979 = state_28907__$1;
(statearr_28914_28979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (15))){
var inst_28885 = (state_28907[(8)]);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28907__$1,(18),to,inst_28885);
} else {
if((state_val_28908 === (21))){
var inst_28898 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
var statearr_28915_28980 = state_28907__$1;
(statearr_28915_28980[(2)] = inst_28898);

(statearr_28915_28980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (13))){
var inst_28900 = (state_28907[(2)]);
var state_28907__$1 = (function (){var statearr_28916 = state_28907;
(statearr_28916[(9)] = inst_28900);

return statearr_28916;
})();
var statearr_28917_28981 = state_28907__$1;
(statearr_28917_28981[(2)] = null);

(statearr_28917_28981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (6))){
var inst_28872 = (state_28907[(7)]);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28907__$1,(11),inst_28872);
} else {
if((state_val_28908 === (17))){
var inst_28893 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
if(cljs.core.truth_(inst_28893)){
var statearr_28918_28982 = state_28907__$1;
(statearr_28918_28982[(1)] = (19));

} else {
var statearr_28919_28983 = state_28907__$1;
(statearr_28919_28983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (3))){
var inst_28905 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28907__$1,inst_28905);
} else {
if((state_val_28908 === (12))){
var inst_28882 = (state_28907[(10)]);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28907__$1,(14),inst_28882);
} else {
if((state_val_28908 === (2))){
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28907__$1,(4),results);
} else {
if((state_val_28908 === (19))){
var state_28907__$1 = state_28907;
var statearr_28920_28984 = state_28907__$1;
(statearr_28920_28984[(2)] = null);

(statearr_28920_28984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (11))){
var inst_28882 = (state_28907[(2)]);
var state_28907__$1 = (function (){var statearr_28921 = state_28907;
(statearr_28921[(10)] = inst_28882);

return statearr_28921;
})();
var statearr_28922_28985 = state_28907__$1;
(statearr_28922_28985[(2)] = null);

(statearr_28922_28985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (9))){
var state_28907__$1 = state_28907;
var statearr_28923_28986 = state_28907__$1;
(statearr_28923_28986[(2)] = null);

(statearr_28923_28986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (5))){
var state_28907__$1 = state_28907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28924_28987 = state_28907__$1;
(statearr_28924_28987[(1)] = (8));

} else {
var statearr_28925_28988 = state_28907__$1;
(statearr_28925_28988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (14))){
var inst_28885 = (state_28907[(8)]);
var inst_28887 = (state_28907[(11)]);
var inst_28885__$1 = (state_28907[(2)]);
var inst_28886 = (inst_28885__$1 == null);
var inst_28887__$1 = cljs.core.not.call(null,inst_28886);
var state_28907__$1 = (function (){var statearr_28926 = state_28907;
(statearr_28926[(8)] = inst_28885__$1);

(statearr_28926[(11)] = inst_28887__$1);

return statearr_28926;
})();
if(inst_28887__$1){
var statearr_28927_28989 = state_28907__$1;
(statearr_28927_28989[(1)] = (15));

} else {
var statearr_28928_28990 = state_28907__$1;
(statearr_28928_28990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (16))){
var inst_28887 = (state_28907[(11)]);
var state_28907__$1 = state_28907;
var statearr_28929_28991 = state_28907__$1;
(statearr_28929_28991[(2)] = inst_28887);

(statearr_28929_28991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (10))){
var inst_28879 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
var statearr_28930_28992 = state_28907__$1;
(statearr_28930_28992[(2)] = inst_28879);

(statearr_28930_28992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (18))){
var inst_28890 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
var statearr_28931_28993 = state_28907__$1;
(statearr_28931_28993[(2)] = inst_28890);

(statearr_28931_28993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (8))){
var inst_28876 = cljs.core.async.close_BANG_.call(null,to);
var state_28907__$1 = state_28907;
var statearr_28932_28994 = state_28907__$1;
(statearr_28932_28994[(2)] = inst_28876);

(statearr_28932_28994[(1)] = (10));


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
});})(c__28367__auto__,jobs,results,process,async))
;
return ((function (switch__28253__auto__,c__28367__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0 = (function (){
var statearr_28936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__);

(statearr_28936[(1)] = (1));

return statearr_28936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1 = (function (state_28907){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_28907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e28937){if((e28937 instanceof Object)){
var ex__28257__auto__ = e28937;
var statearr_28938_28995 = state_28907;
(statearr_28938_28995[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28996 = state_28907;
state_28907 = G__28996;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__ = function(state_28907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1.call(this,state_28907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28254__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__,jobs,results,process,async))
})();
var state__28369__auto__ = (function (){var statearr_28939 = f__28368__auto__.call(null);
(statearr_28939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__,jobs,results,process,async))
);

return c__28367__auto__;
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
var args28997 = [];
var len__22617__auto___29000 = arguments.length;
var i__22618__auto___29001 = (0);
while(true){
if((i__22618__auto___29001 < len__22617__auto___29000)){
args28997.push((arguments[i__22618__auto___29001]));

var G__29002 = (i__22618__auto___29001 + (1));
i__22618__auto___29001 = G__29002;
continue;
} else {
}
break;
}

var G__28999 = args28997.length;
switch (G__28999) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28997.length)].join('')));

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
var args29004 = [];
var len__22617__auto___29007 = arguments.length;
var i__22618__auto___29008 = (0);
while(true){
if((i__22618__auto___29008 < len__22617__auto___29007)){
args29004.push((arguments[i__22618__auto___29008]));

var G__29009 = (i__22618__auto___29008 + (1));
i__22618__auto___29008 = G__29009;
continue;
} else {
}
break;
}

var G__29006 = args29004.length;
switch (G__29006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29004.length)].join('')));

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
var args29011 = [];
var len__22617__auto___29064 = arguments.length;
var i__22618__auto___29065 = (0);
while(true){
if((i__22618__auto___29065 < len__22617__auto___29064)){
args29011.push((arguments[i__22618__auto___29065]));

var G__29066 = (i__22618__auto___29065 + (1));
i__22618__auto___29065 = G__29066;
continue;
} else {
}
break;
}

var G__29013 = args29011.length;
switch (G__29013) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29011.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28367__auto___29068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___29068,tc,fc){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___29068,tc,fc){
return (function (state_29039){
var state_val_29040 = (state_29039[(1)]);
if((state_val_29040 === (7))){
var inst_29035 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29041_29069 = state_29039__$1;
(statearr_29041_29069[(2)] = inst_29035);

(statearr_29041_29069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (1))){
var state_29039__$1 = state_29039;
var statearr_29042_29070 = state_29039__$1;
(statearr_29042_29070[(2)] = null);

(statearr_29042_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (4))){
var inst_29016 = (state_29039[(7)]);
var inst_29016__$1 = (state_29039[(2)]);
var inst_29017 = (inst_29016__$1 == null);
var state_29039__$1 = (function (){var statearr_29043 = state_29039;
(statearr_29043[(7)] = inst_29016__$1);

return statearr_29043;
})();
if(cljs.core.truth_(inst_29017)){
var statearr_29044_29071 = state_29039__$1;
(statearr_29044_29071[(1)] = (5));

} else {
var statearr_29045_29072 = state_29039__$1;
(statearr_29045_29072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (13))){
var state_29039__$1 = state_29039;
var statearr_29046_29073 = state_29039__$1;
(statearr_29046_29073[(2)] = null);

(statearr_29046_29073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (6))){
var inst_29016 = (state_29039[(7)]);
var inst_29022 = p.call(null,inst_29016);
var state_29039__$1 = state_29039;
if(cljs.core.truth_(inst_29022)){
var statearr_29047_29074 = state_29039__$1;
(statearr_29047_29074[(1)] = (9));

} else {
var statearr_29048_29075 = state_29039__$1;
(statearr_29048_29075[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (3))){
var inst_29037 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29039__$1,inst_29037);
} else {
if((state_val_29040 === (12))){
var state_29039__$1 = state_29039;
var statearr_29049_29076 = state_29039__$1;
(statearr_29049_29076[(2)] = null);

(statearr_29049_29076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (2))){
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29039__$1,(4),ch);
} else {
if((state_val_29040 === (11))){
var inst_29016 = (state_29039[(7)]);
var inst_29026 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29039__$1,(8),inst_29026,inst_29016);
} else {
if((state_val_29040 === (9))){
var state_29039__$1 = state_29039;
var statearr_29050_29077 = state_29039__$1;
(statearr_29050_29077[(2)] = tc);

(statearr_29050_29077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (5))){
var inst_29019 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29020 = cljs.core.async.close_BANG_.call(null,fc);
var state_29039__$1 = (function (){var statearr_29051 = state_29039;
(statearr_29051[(8)] = inst_29019);

return statearr_29051;
})();
var statearr_29052_29078 = state_29039__$1;
(statearr_29052_29078[(2)] = inst_29020);

(statearr_29052_29078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (14))){
var inst_29033 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29053_29079 = state_29039__$1;
(statearr_29053_29079[(2)] = inst_29033);

(statearr_29053_29079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (10))){
var state_29039__$1 = state_29039;
var statearr_29054_29080 = state_29039__$1;
(statearr_29054_29080[(2)] = fc);

(statearr_29054_29080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (8))){
var inst_29028 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
if(cljs.core.truth_(inst_29028)){
var statearr_29055_29081 = state_29039__$1;
(statearr_29055_29081[(1)] = (12));

} else {
var statearr_29056_29082 = state_29039__$1;
(statearr_29056_29082[(1)] = (13));

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
});})(c__28367__auto___29068,tc,fc))
;
return ((function (switch__28253__auto__,c__28367__auto___29068,tc,fc){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_29060 = [null,null,null,null,null,null,null,null,null];
(statearr_29060[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_29060[(1)] = (1));

return statearr_29060;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_29039){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_29039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e29061){if((e29061 instanceof Object)){
var ex__28257__auto__ = e29061;
var statearr_29062_29083 = state_29039;
(statearr_29062_29083[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29084 = state_29039;
state_29039 = G__29084;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_29039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_29039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___29068,tc,fc))
})();
var state__28369__auto__ = (function (){var statearr_29063 = f__28368__auto__.call(null);
(statearr_29063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___29068);

return statearr_29063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___29068,tc,fc))
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
var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__){
return (function (state_29148){
var state_val_29149 = (state_29148[(1)]);
if((state_val_29149 === (7))){
var inst_29144 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
var statearr_29150_29171 = state_29148__$1;
(statearr_29150_29171[(2)] = inst_29144);

(statearr_29150_29171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (1))){
var inst_29128 = init;
var state_29148__$1 = (function (){var statearr_29151 = state_29148;
(statearr_29151[(7)] = inst_29128);

return statearr_29151;
})();
var statearr_29152_29172 = state_29148__$1;
(statearr_29152_29172[(2)] = null);

(statearr_29152_29172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (4))){
var inst_29131 = (state_29148[(8)]);
var inst_29131__$1 = (state_29148[(2)]);
var inst_29132 = (inst_29131__$1 == null);
var state_29148__$1 = (function (){var statearr_29153 = state_29148;
(statearr_29153[(8)] = inst_29131__$1);

return statearr_29153;
})();
if(cljs.core.truth_(inst_29132)){
var statearr_29154_29173 = state_29148__$1;
(statearr_29154_29173[(1)] = (5));

} else {
var statearr_29155_29174 = state_29148__$1;
(statearr_29155_29174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (6))){
var inst_29128 = (state_29148[(7)]);
var inst_29131 = (state_29148[(8)]);
var inst_29135 = (state_29148[(9)]);
var inst_29135__$1 = f.call(null,inst_29128,inst_29131);
var inst_29136 = cljs.core.reduced_QMARK_.call(null,inst_29135__$1);
var state_29148__$1 = (function (){var statearr_29156 = state_29148;
(statearr_29156[(9)] = inst_29135__$1);

return statearr_29156;
})();
if(inst_29136){
var statearr_29157_29175 = state_29148__$1;
(statearr_29157_29175[(1)] = (8));

} else {
var statearr_29158_29176 = state_29148__$1;
(statearr_29158_29176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (3))){
var inst_29146 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29148__$1,inst_29146);
} else {
if((state_val_29149 === (2))){
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29148__$1,(4),ch);
} else {
if((state_val_29149 === (9))){
var inst_29135 = (state_29148[(9)]);
var inst_29128 = inst_29135;
var state_29148__$1 = (function (){var statearr_29159 = state_29148;
(statearr_29159[(7)] = inst_29128);

return statearr_29159;
})();
var statearr_29160_29177 = state_29148__$1;
(statearr_29160_29177[(2)] = null);

(statearr_29160_29177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (5))){
var inst_29128 = (state_29148[(7)]);
var state_29148__$1 = state_29148;
var statearr_29161_29178 = state_29148__$1;
(statearr_29161_29178[(2)] = inst_29128);

(statearr_29161_29178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (10))){
var inst_29142 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
var statearr_29162_29179 = state_29148__$1;
(statearr_29162_29179[(2)] = inst_29142);

(statearr_29162_29179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (8))){
var inst_29135 = (state_29148[(9)]);
var inst_29138 = cljs.core.deref.call(null,inst_29135);
var state_29148__$1 = state_29148;
var statearr_29163_29180 = state_29148__$1;
(statearr_29163_29180[(2)] = inst_29138);

(statearr_29163_29180[(1)] = (10));


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
});})(c__28367__auto__))
;
return ((function (switch__28253__auto__,c__28367__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28254__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28254__auto____0 = (function (){
var statearr_29167 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29167[(0)] = cljs$core$async$reduce_$_state_machine__28254__auto__);

(statearr_29167[(1)] = (1));

return statearr_29167;
});
var cljs$core$async$reduce_$_state_machine__28254__auto____1 = (function (state_29148){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_29148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e29168){if((e29168 instanceof Object)){
var ex__28257__auto__ = e29168;
var statearr_29169_29181 = state_29148;
(statearr_29169_29181[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29182 = state_29148;
state_29148 = G__29182;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28254__auto__ = function(state_29148){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28254__auto____1.call(this,state_29148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28254__auto____0;
cljs$core$async$reduce_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28254__auto____1;
return cljs$core$async$reduce_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__))
})();
var state__28369__auto__ = (function (){var statearr_29170 = f__28368__auto__.call(null);
(statearr_29170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_29170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__))
);

return c__28367__auto__;
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
var args29183 = [];
var len__22617__auto___29235 = arguments.length;
var i__22618__auto___29236 = (0);
while(true){
if((i__22618__auto___29236 < len__22617__auto___29235)){
args29183.push((arguments[i__22618__auto___29236]));

var G__29237 = (i__22618__auto___29236 + (1));
i__22618__auto___29236 = G__29237;
continue;
} else {
}
break;
}

var G__29185 = args29183.length;
switch (G__29185) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29183.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__){
return (function (state_29210){
var state_val_29211 = (state_29210[(1)]);
if((state_val_29211 === (7))){
var inst_29192 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29212_29239 = state_29210__$1;
(statearr_29212_29239[(2)] = inst_29192);

(statearr_29212_29239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (1))){
var inst_29186 = cljs.core.seq.call(null,coll);
var inst_29187 = inst_29186;
var state_29210__$1 = (function (){var statearr_29213 = state_29210;
(statearr_29213[(7)] = inst_29187);

return statearr_29213;
})();
var statearr_29214_29240 = state_29210__$1;
(statearr_29214_29240[(2)] = null);

(statearr_29214_29240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (4))){
var inst_29187 = (state_29210[(7)]);
var inst_29190 = cljs.core.first.call(null,inst_29187);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29210__$1,(7),ch,inst_29190);
} else {
if((state_val_29211 === (13))){
var inst_29204 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29215_29241 = state_29210__$1;
(statearr_29215_29241[(2)] = inst_29204);

(statearr_29215_29241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (6))){
var inst_29195 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
if(cljs.core.truth_(inst_29195)){
var statearr_29216_29242 = state_29210__$1;
(statearr_29216_29242[(1)] = (8));

} else {
var statearr_29217_29243 = state_29210__$1;
(statearr_29217_29243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (3))){
var inst_29208 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29210__$1,inst_29208);
} else {
if((state_val_29211 === (12))){
var state_29210__$1 = state_29210;
var statearr_29218_29244 = state_29210__$1;
(statearr_29218_29244[(2)] = null);

(statearr_29218_29244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (2))){
var inst_29187 = (state_29210[(7)]);
var state_29210__$1 = state_29210;
if(cljs.core.truth_(inst_29187)){
var statearr_29219_29245 = state_29210__$1;
(statearr_29219_29245[(1)] = (4));

} else {
var statearr_29220_29246 = state_29210__$1;
(statearr_29220_29246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (11))){
var inst_29201 = cljs.core.async.close_BANG_.call(null,ch);
var state_29210__$1 = state_29210;
var statearr_29221_29247 = state_29210__$1;
(statearr_29221_29247[(2)] = inst_29201);

(statearr_29221_29247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (9))){
var state_29210__$1 = state_29210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29222_29248 = state_29210__$1;
(statearr_29222_29248[(1)] = (11));

} else {
var statearr_29223_29249 = state_29210__$1;
(statearr_29223_29249[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (5))){
var inst_29187 = (state_29210[(7)]);
var state_29210__$1 = state_29210;
var statearr_29224_29250 = state_29210__$1;
(statearr_29224_29250[(2)] = inst_29187);

(statearr_29224_29250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (10))){
var inst_29206 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29225_29251 = state_29210__$1;
(statearr_29225_29251[(2)] = inst_29206);

(statearr_29225_29251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (8))){
var inst_29187 = (state_29210[(7)]);
var inst_29197 = cljs.core.next.call(null,inst_29187);
var inst_29187__$1 = inst_29197;
var state_29210__$1 = (function (){var statearr_29226 = state_29210;
(statearr_29226[(7)] = inst_29187__$1);

return statearr_29226;
})();
var statearr_29227_29252 = state_29210__$1;
(statearr_29227_29252[(2)] = null);

(statearr_29227_29252[(1)] = (2));


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
});})(c__28367__auto__))
;
return ((function (switch__28253__auto__,c__28367__auto__){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_29231 = [null,null,null,null,null,null,null,null];
(statearr_29231[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_29231[(1)] = (1));

return statearr_29231;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_29210){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_29210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e29232){if((e29232 instanceof Object)){
var ex__28257__auto__ = e29232;
var statearr_29233_29253 = state_29210;
(statearr_29233_29253[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29254 = state_29210;
state_29210 = G__29254;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_29210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__))
})();
var state__28369__auto__ = (function (){var statearr_29234 = f__28368__auto__.call(null);
(statearr_29234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_29234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__))
);

return c__28367__auto__;
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
var x__22147__auto__ = (((_ == null))?null:_);
var m__22148__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,_);
} else {
var m__22148__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,_);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22148__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m);
} else {
var m__22148__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29480 = (function (mult,ch,cs,meta29481){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29481 = meta29481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29482,meta29481__$1){
var self__ = this;
var _29482__$1 = this;
return (new cljs.core.async.t_cljs$core$async29480(self__.mult,self__.ch,self__.cs,meta29481__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29482){
var self__ = this;
var _29482__$1 = this;
return self__.meta29481;
});})(cs))
;

cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29480.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29481","meta29481",-1611547607,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29480";

cljs.core.async.t_cljs$core$async29480.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async29480");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29480 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29480(mult__$1,ch__$1,cs__$1,meta29481){
return (new cljs.core.async.t_cljs$core$async29480(mult__$1,ch__$1,cs__$1,meta29481));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29480(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28367__auto___29705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___29705,cs,m,dchan,dctr,done){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___29705,cs,m,dchan,dctr,done){
return (function (state_29617){
var state_val_29618 = (state_29617[(1)]);
if((state_val_29618 === (7))){
var inst_29613 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29619_29706 = state_29617__$1;
(statearr_29619_29706[(2)] = inst_29613);

(statearr_29619_29706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (20))){
var inst_29516 = (state_29617[(7)]);
var inst_29528 = cljs.core.first.call(null,inst_29516);
var inst_29529 = cljs.core.nth.call(null,inst_29528,(0),null);
var inst_29530 = cljs.core.nth.call(null,inst_29528,(1),null);
var state_29617__$1 = (function (){var statearr_29620 = state_29617;
(statearr_29620[(8)] = inst_29529);

return statearr_29620;
})();
if(cljs.core.truth_(inst_29530)){
var statearr_29621_29707 = state_29617__$1;
(statearr_29621_29707[(1)] = (22));

} else {
var statearr_29622_29708 = state_29617__$1;
(statearr_29622_29708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (27))){
var inst_29560 = (state_29617[(9)]);
var inst_29485 = (state_29617[(10)]);
var inst_29565 = (state_29617[(11)]);
var inst_29558 = (state_29617[(12)]);
var inst_29565__$1 = cljs.core._nth.call(null,inst_29558,inst_29560);
var inst_29566 = cljs.core.async.put_BANG_.call(null,inst_29565__$1,inst_29485,done);
var state_29617__$1 = (function (){var statearr_29623 = state_29617;
(statearr_29623[(11)] = inst_29565__$1);

return statearr_29623;
})();
if(cljs.core.truth_(inst_29566)){
var statearr_29624_29709 = state_29617__$1;
(statearr_29624_29709[(1)] = (30));

} else {
var statearr_29625_29710 = state_29617__$1;
(statearr_29625_29710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (1))){
var state_29617__$1 = state_29617;
var statearr_29626_29711 = state_29617__$1;
(statearr_29626_29711[(2)] = null);

(statearr_29626_29711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (24))){
var inst_29516 = (state_29617[(7)]);
var inst_29535 = (state_29617[(2)]);
var inst_29536 = cljs.core.next.call(null,inst_29516);
var inst_29494 = inst_29536;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29617__$1 = (function (){var statearr_29627 = state_29617;
(statearr_29627[(13)] = inst_29497);

(statearr_29627[(14)] = inst_29495);

(statearr_29627[(15)] = inst_29496);

(statearr_29627[(16)] = inst_29535);

(statearr_29627[(17)] = inst_29494);

return statearr_29627;
})();
var statearr_29628_29712 = state_29617__$1;
(statearr_29628_29712[(2)] = null);

(statearr_29628_29712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (39))){
var state_29617__$1 = state_29617;
var statearr_29632_29713 = state_29617__$1;
(statearr_29632_29713[(2)] = null);

(statearr_29632_29713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (4))){
var inst_29485 = (state_29617[(10)]);
var inst_29485__$1 = (state_29617[(2)]);
var inst_29486 = (inst_29485__$1 == null);
var state_29617__$1 = (function (){var statearr_29633 = state_29617;
(statearr_29633[(10)] = inst_29485__$1);

return statearr_29633;
})();
if(cljs.core.truth_(inst_29486)){
var statearr_29634_29714 = state_29617__$1;
(statearr_29634_29714[(1)] = (5));

} else {
var statearr_29635_29715 = state_29617__$1;
(statearr_29635_29715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (15))){
var inst_29497 = (state_29617[(13)]);
var inst_29495 = (state_29617[(14)]);
var inst_29496 = (state_29617[(15)]);
var inst_29494 = (state_29617[(17)]);
var inst_29512 = (state_29617[(2)]);
var inst_29513 = (inst_29497 + (1));
var tmp29629 = inst_29495;
var tmp29630 = inst_29496;
var tmp29631 = inst_29494;
var inst_29494__$1 = tmp29631;
var inst_29495__$1 = tmp29629;
var inst_29496__$1 = tmp29630;
var inst_29497__$1 = inst_29513;
var state_29617__$1 = (function (){var statearr_29636 = state_29617;
(statearr_29636[(13)] = inst_29497__$1);

(statearr_29636[(14)] = inst_29495__$1);

(statearr_29636[(18)] = inst_29512);

(statearr_29636[(15)] = inst_29496__$1);

(statearr_29636[(17)] = inst_29494__$1);

return statearr_29636;
})();
var statearr_29637_29716 = state_29617__$1;
(statearr_29637_29716[(2)] = null);

(statearr_29637_29716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (21))){
var inst_29539 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29641_29717 = state_29617__$1;
(statearr_29641_29717[(2)] = inst_29539);

(statearr_29641_29717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (31))){
var inst_29565 = (state_29617[(11)]);
var inst_29569 = done.call(null,null);
var inst_29570 = cljs.core.async.untap_STAR_.call(null,m,inst_29565);
var state_29617__$1 = (function (){var statearr_29642 = state_29617;
(statearr_29642[(19)] = inst_29569);

return statearr_29642;
})();
var statearr_29643_29718 = state_29617__$1;
(statearr_29643_29718[(2)] = inst_29570);

(statearr_29643_29718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (32))){
var inst_29560 = (state_29617[(9)]);
var inst_29558 = (state_29617[(12)]);
var inst_29557 = (state_29617[(20)]);
var inst_29559 = (state_29617[(21)]);
var inst_29572 = (state_29617[(2)]);
var inst_29573 = (inst_29560 + (1));
var tmp29638 = inst_29558;
var tmp29639 = inst_29557;
var tmp29640 = inst_29559;
var inst_29557__$1 = tmp29639;
var inst_29558__$1 = tmp29638;
var inst_29559__$1 = tmp29640;
var inst_29560__$1 = inst_29573;
var state_29617__$1 = (function (){var statearr_29644 = state_29617;
(statearr_29644[(9)] = inst_29560__$1);

(statearr_29644[(22)] = inst_29572);

(statearr_29644[(12)] = inst_29558__$1);

(statearr_29644[(20)] = inst_29557__$1);

(statearr_29644[(21)] = inst_29559__$1);

return statearr_29644;
})();
var statearr_29645_29719 = state_29617__$1;
(statearr_29645_29719[(2)] = null);

(statearr_29645_29719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (40))){
var inst_29585 = (state_29617[(23)]);
var inst_29589 = done.call(null,null);
var inst_29590 = cljs.core.async.untap_STAR_.call(null,m,inst_29585);
var state_29617__$1 = (function (){var statearr_29646 = state_29617;
(statearr_29646[(24)] = inst_29589);

return statearr_29646;
})();
var statearr_29647_29720 = state_29617__$1;
(statearr_29647_29720[(2)] = inst_29590);

(statearr_29647_29720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (33))){
var inst_29576 = (state_29617[(25)]);
var inst_29578 = cljs.core.chunked_seq_QMARK_.call(null,inst_29576);
var state_29617__$1 = state_29617;
if(inst_29578){
var statearr_29648_29721 = state_29617__$1;
(statearr_29648_29721[(1)] = (36));

} else {
var statearr_29649_29722 = state_29617__$1;
(statearr_29649_29722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (13))){
var inst_29506 = (state_29617[(26)]);
var inst_29509 = cljs.core.async.close_BANG_.call(null,inst_29506);
var state_29617__$1 = state_29617;
var statearr_29650_29723 = state_29617__$1;
(statearr_29650_29723[(2)] = inst_29509);

(statearr_29650_29723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (22))){
var inst_29529 = (state_29617[(8)]);
var inst_29532 = cljs.core.async.close_BANG_.call(null,inst_29529);
var state_29617__$1 = state_29617;
var statearr_29651_29724 = state_29617__$1;
(statearr_29651_29724[(2)] = inst_29532);

(statearr_29651_29724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (36))){
var inst_29576 = (state_29617[(25)]);
var inst_29580 = cljs.core.chunk_first.call(null,inst_29576);
var inst_29581 = cljs.core.chunk_rest.call(null,inst_29576);
var inst_29582 = cljs.core.count.call(null,inst_29580);
var inst_29557 = inst_29581;
var inst_29558 = inst_29580;
var inst_29559 = inst_29582;
var inst_29560 = (0);
var state_29617__$1 = (function (){var statearr_29652 = state_29617;
(statearr_29652[(9)] = inst_29560);

(statearr_29652[(12)] = inst_29558);

(statearr_29652[(20)] = inst_29557);

(statearr_29652[(21)] = inst_29559);

return statearr_29652;
})();
var statearr_29653_29725 = state_29617__$1;
(statearr_29653_29725[(2)] = null);

(statearr_29653_29725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (41))){
var inst_29576 = (state_29617[(25)]);
var inst_29592 = (state_29617[(2)]);
var inst_29593 = cljs.core.next.call(null,inst_29576);
var inst_29557 = inst_29593;
var inst_29558 = null;
var inst_29559 = (0);
var inst_29560 = (0);
var state_29617__$1 = (function (){var statearr_29654 = state_29617;
(statearr_29654[(9)] = inst_29560);

(statearr_29654[(27)] = inst_29592);

(statearr_29654[(12)] = inst_29558);

(statearr_29654[(20)] = inst_29557);

(statearr_29654[(21)] = inst_29559);

return statearr_29654;
})();
var statearr_29655_29726 = state_29617__$1;
(statearr_29655_29726[(2)] = null);

(statearr_29655_29726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (43))){
var state_29617__$1 = state_29617;
var statearr_29656_29727 = state_29617__$1;
(statearr_29656_29727[(2)] = null);

(statearr_29656_29727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (29))){
var inst_29601 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29657_29728 = state_29617__$1;
(statearr_29657_29728[(2)] = inst_29601);

(statearr_29657_29728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (44))){
var inst_29610 = (state_29617[(2)]);
var state_29617__$1 = (function (){var statearr_29658 = state_29617;
(statearr_29658[(28)] = inst_29610);

return statearr_29658;
})();
var statearr_29659_29729 = state_29617__$1;
(statearr_29659_29729[(2)] = null);

(statearr_29659_29729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (6))){
var inst_29549 = (state_29617[(29)]);
var inst_29548 = cljs.core.deref.call(null,cs);
var inst_29549__$1 = cljs.core.keys.call(null,inst_29548);
var inst_29550 = cljs.core.count.call(null,inst_29549__$1);
var inst_29551 = cljs.core.reset_BANG_.call(null,dctr,inst_29550);
var inst_29556 = cljs.core.seq.call(null,inst_29549__$1);
var inst_29557 = inst_29556;
var inst_29558 = null;
var inst_29559 = (0);
var inst_29560 = (0);
var state_29617__$1 = (function (){var statearr_29660 = state_29617;
(statearr_29660[(29)] = inst_29549__$1);

(statearr_29660[(9)] = inst_29560);

(statearr_29660[(12)] = inst_29558);

(statearr_29660[(30)] = inst_29551);

(statearr_29660[(20)] = inst_29557);

(statearr_29660[(21)] = inst_29559);

return statearr_29660;
})();
var statearr_29661_29730 = state_29617__$1;
(statearr_29661_29730[(2)] = null);

(statearr_29661_29730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (28))){
var inst_29557 = (state_29617[(20)]);
var inst_29576 = (state_29617[(25)]);
var inst_29576__$1 = cljs.core.seq.call(null,inst_29557);
var state_29617__$1 = (function (){var statearr_29662 = state_29617;
(statearr_29662[(25)] = inst_29576__$1);

return statearr_29662;
})();
if(inst_29576__$1){
var statearr_29663_29731 = state_29617__$1;
(statearr_29663_29731[(1)] = (33));

} else {
var statearr_29664_29732 = state_29617__$1;
(statearr_29664_29732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (25))){
var inst_29560 = (state_29617[(9)]);
var inst_29559 = (state_29617[(21)]);
var inst_29562 = (inst_29560 < inst_29559);
var inst_29563 = inst_29562;
var state_29617__$1 = state_29617;
if(cljs.core.truth_(inst_29563)){
var statearr_29665_29733 = state_29617__$1;
(statearr_29665_29733[(1)] = (27));

} else {
var statearr_29666_29734 = state_29617__$1;
(statearr_29666_29734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (34))){
var state_29617__$1 = state_29617;
var statearr_29667_29735 = state_29617__$1;
(statearr_29667_29735[(2)] = null);

(statearr_29667_29735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (17))){
var state_29617__$1 = state_29617;
var statearr_29668_29736 = state_29617__$1;
(statearr_29668_29736[(2)] = null);

(statearr_29668_29736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (3))){
var inst_29615 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29617__$1,inst_29615);
} else {
if((state_val_29618 === (12))){
var inst_29544 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29669_29737 = state_29617__$1;
(statearr_29669_29737[(2)] = inst_29544);

(statearr_29669_29737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (2))){
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29617__$1,(4),ch);
} else {
if((state_val_29618 === (23))){
var state_29617__$1 = state_29617;
var statearr_29670_29738 = state_29617__$1;
(statearr_29670_29738[(2)] = null);

(statearr_29670_29738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (35))){
var inst_29599 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29671_29739 = state_29617__$1;
(statearr_29671_29739[(2)] = inst_29599);

(statearr_29671_29739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (19))){
var inst_29516 = (state_29617[(7)]);
var inst_29520 = cljs.core.chunk_first.call(null,inst_29516);
var inst_29521 = cljs.core.chunk_rest.call(null,inst_29516);
var inst_29522 = cljs.core.count.call(null,inst_29520);
var inst_29494 = inst_29521;
var inst_29495 = inst_29520;
var inst_29496 = inst_29522;
var inst_29497 = (0);
var state_29617__$1 = (function (){var statearr_29672 = state_29617;
(statearr_29672[(13)] = inst_29497);

(statearr_29672[(14)] = inst_29495);

(statearr_29672[(15)] = inst_29496);

(statearr_29672[(17)] = inst_29494);

return statearr_29672;
})();
var statearr_29673_29740 = state_29617__$1;
(statearr_29673_29740[(2)] = null);

(statearr_29673_29740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (11))){
var inst_29494 = (state_29617[(17)]);
var inst_29516 = (state_29617[(7)]);
var inst_29516__$1 = cljs.core.seq.call(null,inst_29494);
var state_29617__$1 = (function (){var statearr_29674 = state_29617;
(statearr_29674[(7)] = inst_29516__$1);

return statearr_29674;
})();
if(inst_29516__$1){
var statearr_29675_29741 = state_29617__$1;
(statearr_29675_29741[(1)] = (16));

} else {
var statearr_29676_29742 = state_29617__$1;
(statearr_29676_29742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (9))){
var inst_29546 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29677_29743 = state_29617__$1;
(statearr_29677_29743[(2)] = inst_29546);

(statearr_29677_29743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (5))){
var inst_29492 = cljs.core.deref.call(null,cs);
var inst_29493 = cljs.core.seq.call(null,inst_29492);
var inst_29494 = inst_29493;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29617__$1 = (function (){var statearr_29678 = state_29617;
(statearr_29678[(13)] = inst_29497);

(statearr_29678[(14)] = inst_29495);

(statearr_29678[(15)] = inst_29496);

(statearr_29678[(17)] = inst_29494);

return statearr_29678;
})();
var statearr_29679_29744 = state_29617__$1;
(statearr_29679_29744[(2)] = null);

(statearr_29679_29744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (14))){
var state_29617__$1 = state_29617;
var statearr_29680_29745 = state_29617__$1;
(statearr_29680_29745[(2)] = null);

(statearr_29680_29745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (45))){
var inst_29607 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29681_29746 = state_29617__$1;
(statearr_29681_29746[(2)] = inst_29607);

(statearr_29681_29746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (26))){
var inst_29549 = (state_29617[(29)]);
var inst_29603 = (state_29617[(2)]);
var inst_29604 = cljs.core.seq.call(null,inst_29549);
var state_29617__$1 = (function (){var statearr_29682 = state_29617;
(statearr_29682[(31)] = inst_29603);

return statearr_29682;
})();
if(inst_29604){
var statearr_29683_29747 = state_29617__$1;
(statearr_29683_29747[(1)] = (42));

} else {
var statearr_29684_29748 = state_29617__$1;
(statearr_29684_29748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (16))){
var inst_29516 = (state_29617[(7)]);
var inst_29518 = cljs.core.chunked_seq_QMARK_.call(null,inst_29516);
var state_29617__$1 = state_29617;
if(inst_29518){
var statearr_29685_29749 = state_29617__$1;
(statearr_29685_29749[(1)] = (19));

} else {
var statearr_29686_29750 = state_29617__$1;
(statearr_29686_29750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (38))){
var inst_29596 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29687_29751 = state_29617__$1;
(statearr_29687_29751[(2)] = inst_29596);

(statearr_29687_29751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (30))){
var state_29617__$1 = state_29617;
var statearr_29688_29752 = state_29617__$1;
(statearr_29688_29752[(2)] = null);

(statearr_29688_29752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (10))){
var inst_29497 = (state_29617[(13)]);
var inst_29495 = (state_29617[(14)]);
var inst_29505 = cljs.core._nth.call(null,inst_29495,inst_29497);
var inst_29506 = cljs.core.nth.call(null,inst_29505,(0),null);
var inst_29507 = cljs.core.nth.call(null,inst_29505,(1),null);
var state_29617__$1 = (function (){var statearr_29689 = state_29617;
(statearr_29689[(26)] = inst_29506);

return statearr_29689;
})();
if(cljs.core.truth_(inst_29507)){
var statearr_29690_29753 = state_29617__$1;
(statearr_29690_29753[(1)] = (13));

} else {
var statearr_29691_29754 = state_29617__$1;
(statearr_29691_29754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (18))){
var inst_29542 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29692_29755 = state_29617__$1;
(statearr_29692_29755[(2)] = inst_29542);

(statearr_29692_29755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (42))){
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29617__$1,(45),dchan);
} else {
if((state_val_29618 === (37))){
var inst_29585 = (state_29617[(23)]);
var inst_29485 = (state_29617[(10)]);
var inst_29576 = (state_29617[(25)]);
var inst_29585__$1 = cljs.core.first.call(null,inst_29576);
var inst_29586 = cljs.core.async.put_BANG_.call(null,inst_29585__$1,inst_29485,done);
var state_29617__$1 = (function (){var statearr_29693 = state_29617;
(statearr_29693[(23)] = inst_29585__$1);

return statearr_29693;
})();
if(cljs.core.truth_(inst_29586)){
var statearr_29694_29756 = state_29617__$1;
(statearr_29694_29756[(1)] = (39));

} else {
var statearr_29695_29757 = state_29617__$1;
(statearr_29695_29757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (8))){
var inst_29497 = (state_29617[(13)]);
var inst_29496 = (state_29617[(15)]);
var inst_29499 = (inst_29497 < inst_29496);
var inst_29500 = inst_29499;
var state_29617__$1 = state_29617;
if(cljs.core.truth_(inst_29500)){
var statearr_29696_29758 = state_29617__$1;
(statearr_29696_29758[(1)] = (10));

} else {
var statearr_29697_29759 = state_29617__$1;
(statearr_29697_29759[(1)] = (11));

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
});})(c__28367__auto___29705,cs,m,dchan,dctr,done))
;
return ((function (switch__28253__auto__,c__28367__auto___29705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28254__auto__ = null;
var cljs$core$async$mult_$_state_machine__28254__auto____0 = (function (){
var statearr_29701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29701[(0)] = cljs$core$async$mult_$_state_machine__28254__auto__);

(statearr_29701[(1)] = (1));

return statearr_29701;
});
var cljs$core$async$mult_$_state_machine__28254__auto____1 = (function (state_29617){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_29617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e29702){if((e29702 instanceof Object)){
var ex__28257__auto__ = e29702;
var statearr_29703_29760 = state_29617;
(statearr_29703_29760[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29761 = state_29617;
state_29617 = G__29761;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28254__auto__ = function(state_29617){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28254__auto____1.call(this,state_29617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28254__auto____0;
cljs$core$async$mult_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28254__auto____1;
return cljs$core$async$mult_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___29705,cs,m,dchan,dctr,done))
})();
var state__28369__auto__ = (function (){var statearr_29704 = f__28368__auto__.call(null);
(statearr_29704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___29705);

return statearr_29704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___29705,cs,m,dchan,dctr,done))
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
var args29762 = [];
var len__22617__auto___29765 = arguments.length;
var i__22618__auto___29766 = (0);
while(true){
if((i__22618__auto___29766 < len__22617__auto___29765)){
args29762.push((arguments[i__22618__auto___29766]));

var G__29767 = (i__22618__auto___29766 + (1));
i__22618__auto___29766 = G__29767;
continue;
} else {
}
break;
}

var G__29764 = args29762.length;
switch (G__29764) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29762.length)].join('')));

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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m);
} else {
var m__22148__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,state_map);
} else {
var m__22148__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,state_map);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,mode);
} else {
var m__22148__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22624__auto__ = [];
var len__22617__auto___29779 = arguments.length;
var i__22618__auto___29780 = (0);
while(true){
if((i__22618__auto___29780 < len__22617__auto___29779)){
args__22624__auto__.push((arguments[i__22618__auto___29780]));

var G__29781 = (i__22618__auto___29780 + (1));
i__22618__auto___29780 = G__29781;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((3) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22625__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29773){
var map__29774 = p__29773;
var map__29774__$1 = ((((!((map__29774 == null)))?((((map__29774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29774):map__29774);
var opts = map__29774__$1;
var statearr_29776_29782 = state;
(statearr_29776_29782[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6369__auto__ = cljs.core.async.do_alts.call(null,((function (map__29774,map__29774__$1,opts){
return (function (val){
var statearr_29777_29783 = state;
(statearr_29777_29783[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29774,map__29774__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6369__auto__)){
var cb = temp__6369__auto__;
var statearr_29778_29784 = state;
(statearr_29778_29784[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29769){
var G__29770 = cljs.core.first.call(null,seq29769);
var seq29769__$1 = cljs.core.next.call(null,seq29769);
var G__29771 = cljs.core.first.call(null,seq29769__$1);
var seq29769__$2 = cljs.core.next.call(null,seq29769__$1);
var G__29772 = cljs.core.first.call(null,seq29769__$2);
var seq29769__$3 = cljs.core.next.call(null,seq29769__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29770,G__29771,G__29772,seq29769__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29950 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29951){
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
this.meta29951 = meta29951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29952,meta29951__$1){
var self__ = this;
var _29952__$1 = this;
return (new cljs.core.async.t_cljs$core$async29950(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29951__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29952){
var self__ = this;
var _29952__$1 = this;
return self__.meta29951;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29950.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29951","meta29951",830920518,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29950";

cljs.core.async.t_cljs$core$async29950.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async29950");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29950 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29950(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29951){
return (new cljs.core.async.t_cljs$core$async29950(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29951));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29950(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28367__auto___30115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___30115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___30115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30052){
var state_val_30053 = (state_30052[(1)]);
if((state_val_30053 === (7))){
var inst_29968 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30054_30116 = state_30052__$1;
(statearr_30054_30116[(2)] = inst_29968);

(statearr_30054_30116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (20))){
var inst_29980 = (state_30052[(7)]);
var state_30052__$1 = state_30052;
var statearr_30055_30117 = state_30052__$1;
(statearr_30055_30117[(2)] = inst_29980);

(statearr_30055_30117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (27))){
var state_30052__$1 = state_30052;
var statearr_30056_30118 = state_30052__$1;
(statearr_30056_30118[(2)] = null);

(statearr_30056_30118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (1))){
var inst_29956 = (state_30052[(8)]);
var inst_29956__$1 = calc_state.call(null);
var inst_29958 = (inst_29956__$1 == null);
var inst_29959 = cljs.core.not.call(null,inst_29958);
var state_30052__$1 = (function (){var statearr_30057 = state_30052;
(statearr_30057[(8)] = inst_29956__$1);

return statearr_30057;
})();
if(inst_29959){
var statearr_30058_30119 = state_30052__$1;
(statearr_30058_30119[(1)] = (2));

} else {
var statearr_30059_30120 = state_30052__$1;
(statearr_30059_30120[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (24))){
var inst_30026 = (state_30052[(9)]);
var inst_30012 = (state_30052[(10)]);
var inst_30003 = (state_30052[(11)]);
var inst_30026__$1 = inst_30003.call(null,inst_30012);
var state_30052__$1 = (function (){var statearr_30060 = state_30052;
(statearr_30060[(9)] = inst_30026__$1);

return statearr_30060;
})();
if(cljs.core.truth_(inst_30026__$1)){
var statearr_30061_30121 = state_30052__$1;
(statearr_30061_30121[(1)] = (29));

} else {
var statearr_30062_30122 = state_30052__$1;
(statearr_30062_30122[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (4))){
var inst_29971 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_29971)){
var statearr_30063_30123 = state_30052__$1;
(statearr_30063_30123[(1)] = (8));

} else {
var statearr_30064_30124 = state_30052__$1;
(statearr_30064_30124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (15))){
var inst_29997 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_29997)){
var statearr_30065_30125 = state_30052__$1;
(statearr_30065_30125[(1)] = (19));

} else {
var statearr_30066_30126 = state_30052__$1;
(statearr_30066_30126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (21))){
var inst_30002 = (state_30052[(12)]);
var inst_30002__$1 = (state_30052[(2)]);
var inst_30003 = cljs.core.get.call(null,inst_30002__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30004 = cljs.core.get.call(null,inst_30002__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30005 = cljs.core.get.call(null,inst_30002__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30052__$1 = (function (){var statearr_30067 = state_30052;
(statearr_30067[(13)] = inst_30004);

(statearr_30067[(12)] = inst_30002__$1);

(statearr_30067[(11)] = inst_30003);

return statearr_30067;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30052__$1,(22),inst_30005);
} else {
if((state_val_30053 === (31))){
var inst_30034 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_30034)){
var statearr_30068_30127 = state_30052__$1;
(statearr_30068_30127[(1)] = (32));

} else {
var statearr_30069_30128 = state_30052__$1;
(statearr_30069_30128[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (32))){
var inst_30011 = (state_30052[(14)]);
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30052__$1,(35),out,inst_30011);
} else {
if((state_val_30053 === (33))){
var inst_30002 = (state_30052[(12)]);
var inst_29980 = inst_30002;
var state_30052__$1 = (function (){var statearr_30070 = state_30052;
(statearr_30070[(7)] = inst_29980);

return statearr_30070;
})();
var statearr_30071_30129 = state_30052__$1;
(statearr_30071_30129[(2)] = null);

(statearr_30071_30129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (13))){
var inst_29980 = (state_30052[(7)]);
var inst_29987 = inst_29980.cljs$lang$protocol_mask$partition0$;
var inst_29988 = (inst_29987 & (64));
var inst_29989 = inst_29980.cljs$core$ISeq$;
var inst_29990 = (inst_29988) || (inst_29989);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_29990)){
var statearr_30072_30130 = state_30052__$1;
(statearr_30072_30130[(1)] = (16));

} else {
var statearr_30073_30131 = state_30052__$1;
(statearr_30073_30131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (22))){
var inst_30011 = (state_30052[(14)]);
var inst_30012 = (state_30052[(10)]);
var inst_30010 = (state_30052[(2)]);
var inst_30011__$1 = cljs.core.nth.call(null,inst_30010,(0),null);
var inst_30012__$1 = cljs.core.nth.call(null,inst_30010,(1),null);
var inst_30013 = (inst_30011__$1 == null);
var inst_30014 = cljs.core._EQ_.call(null,inst_30012__$1,change);
var inst_30015 = (inst_30013) || (inst_30014);
var state_30052__$1 = (function (){var statearr_30074 = state_30052;
(statearr_30074[(14)] = inst_30011__$1);

(statearr_30074[(10)] = inst_30012__$1);

return statearr_30074;
})();
if(cljs.core.truth_(inst_30015)){
var statearr_30075_30132 = state_30052__$1;
(statearr_30075_30132[(1)] = (23));

} else {
var statearr_30076_30133 = state_30052__$1;
(statearr_30076_30133[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (36))){
var inst_30002 = (state_30052[(12)]);
var inst_29980 = inst_30002;
var state_30052__$1 = (function (){var statearr_30077 = state_30052;
(statearr_30077[(7)] = inst_29980);

return statearr_30077;
})();
var statearr_30078_30134 = state_30052__$1;
(statearr_30078_30134[(2)] = null);

(statearr_30078_30134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (29))){
var inst_30026 = (state_30052[(9)]);
var state_30052__$1 = state_30052;
var statearr_30079_30135 = state_30052__$1;
(statearr_30079_30135[(2)] = inst_30026);

(statearr_30079_30135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (6))){
var state_30052__$1 = state_30052;
var statearr_30080_30136 = state_30052__$1;
(statearr_30080_30136[(2)] = false);

(statearr_30080_30136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (28))){
var inst_30022 = (state_30052[(2)]);
var inst_30023 = calc_state.call(null);
var inst_29980 = inst_30023;
var state_30052__$1 = (function (){var statearr_30081 = state_30052;
(statearr_30081[(15)] = inst_30022);

(statearr_30081[(7)] = inst_29980);

return statearr_30081;
})();
var statearr_30082_30137 = state_30052__$1;
(statearr_30082_30137[(2)] = null);

(statearr_30082_30137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (25))){
var inst_30048 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30083_30138 = state_30052__$1;
(statearr_30083_30138[(2)] = inst_30048);

(statearr_30083_30138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (34))){
var inst_30046 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30084_30139 = state_30052__$1;
(statearr_30084_30139[(2)] = inst_30046);

(statearr_30084_30139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (17))){
var state_30052__$1 = state_30052;
var statearr_30085_30140 = state_30052__$1;
(statearr_30085_30140[(2)] = false);

(statearr_30085_30140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (3))){
var state_30052__$1 = state_30052;
var statearr_30086_30141 = state_30052__$1;
(statearr_30086_30141[(2)] = false);

(statearr_30086_30141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (12))){
var inst_30050 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30052__$1,inst_30050);
} else {
if((state_val_30053 === (2))){
var inst_29956 = (state_30052[(8)]);
var inst_29961 = inst_29956.cljs$lang$protocol_mask$partition0$;
var inst_29962 = (inst_29961 & (64));
var inst_29963 = inst_29956.cljs$core$ISeq$;
var inst_29964 = (inst_29962) || (inst_29963);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_29964)){
var statearr_30087_30142 = state_30052__$1;
(statearr_30087_30142[(1)] = (5));

} else {
var statearr_30088_30143 = state_30052__$1;
(statearr_30088_30143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (23))){
var inst_30011 = (state_30052[(14)]);
var inst_30017 = (inst_30011 == null);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_30017)){
var statearr_30089_30144 = state_30052__$1;
(statearr_30089_30144[(1)] = (26));

} else {
var statearr_30090_30145 = state_30052__$1;
(statearr_30090_30145[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (35))){
var inst_30037 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_30037)){
var statearr_30091_30146 = state_30052__$1;
(statearr_30091_30146[(1)] = (36));

} else {
var statearr_30092_30147 = state_30052__$1;
(statearr_30092_30147[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (19))){
var inst_29980 = (state_30052[(7)]);
var inst_29999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29980);
var state_30052__$1 = state_30052;
var statearr_30093_30148 = state_30052__$1;
(statearr_30093_30148[(2)] = inst_29999);

(statearr_30093_30148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (11))){
var inst_29980 = (state_30052[(7)]);
var inst_29984 = (inst_29980 == null);
var inst_29985 = cljs.core.not.call(null,inst_29984);
var state_30052__$1 = state_30052;
if(inst_29985){
var statearr_30094_30149 = state_30052__$1;
(statearr_30094_30149[(1)] = (13));

} else {
var statearr_30095_30150 = state_30052__$1;
(statearr_30095_30150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (9))){
var inst_29956 = (state_30052[(8)]);
var state_30052__$1 = state_30052;
var statearr_30096_30151 = state_30052__$1;
(statearr_30096_30151[(2)] = inst_29956);

(statearr_30096_30151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (5))){
var state_30052__$1 = state_30052;
var statearr_30097_30152 = state_30052__$1;
(statearr_30097_30152[(2)] = true);

(statearr_30097_30152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (14))){
var state_30052__$1 = state_30052;
var statearr_30098_30153 = state_30052__$1;
(statearr_30098_30153[(2)] = false);

(statearr_30098_30153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (26))){
var inst_30012 = (state_30052[(10)]);
var inst_30019 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30012);
var state_30052__$1 = state_30052;
var statearr_30099_30154 = state_30052__$1;
(statearr_30099_30154[(2)] = inst_30019);

(statearr_30099_30154[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (16))){
var state_30052__$1 = state_30052;
var statearr_30100_30155 = state_30052__$1;
(statearr_30100_30155[(2)] = true);

(statearr_30100_30155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (38))){
var inst_30042 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30101_30156 = state_30052__$1;
(statearr_30101_30156[(2)] = inst_30042);

(statearr_30101_30156[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (30))){
var inst_30004 = (state_30052[(13)]);
var inst_30012 = (state_30052[(10)]);
var inst_30003 = (state_30052[(11)]);
var inst_30029 = cljs.core.empty_QMARK_.call(null,inst_30003);
var inst_30030 = inst_30004.call(null,inst_30012);
var inst_30031 = cljs.core.not.call(null,inst_30030);
var inst_30032 = (inst_30029) && (inst_30031);
var state_30052__$1 = state_30052;
var statearr_30102_30157 = state_30052__$1;
(statearr_30102_30157[(2)] = inst_30032);

(statearr_30102_30157[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (10))){
var inst_29956 = (state_30052[(8)]);
var inst_29976 = (state_30052[(2)]);
var inst_29977 = cljs.core.get.call(null,inst_29976,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29978 = cljs.core.get.call(null,inst_29976,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29979 = cljs.core.get.call(null,inst_29976,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29980 = inst_29956;
var state_30052__$1 = (function (){var statearr_30103 = state_30052;
(statearr_30103[(7)] = inst_29980);

(statearr_30103[(16)] = inst_29978);

(statearr_30103[(17)] = inst_29979);

(statearr_30103[(18)] = inst_29977);

return statearr_30103;
})();
var statearr_30104_30158 = state_30052__$1;
(statearr_30104_30158[(2)] = null);

(statearr_30104_30158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (18))){
var inst_29994 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30105_30159 = state_30052__$1;
(statearr_30105_30159[(2)] = inst_29994);

(statearr_30105_30159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (37))){
var state_30052__$1 = state_30052;
var statearr_30106_30160 = state_30052__$1;
(statearr_30106_30160[(2)] = null);

(statearr_30106_30160[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (8))){
var inst_29956 = (state_30052[(8)]);
var inst_29973 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29956);
var state_30052__$1 = state_30052;
var statearr_30107_30161 = state_30052__$1;
(statearr_30107_30161[(2)] = inst_29973);

(statearr_30107_30161[(1)] = (10));


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
});})(c__28367__auto___30115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28253__auto__,c__28367__auto___30115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28254__auto__ = null;
var cljs$core$async$mix_$_state_machine__28254__auto____0 = (function (){
var statearr_30111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30111[(0)] = cljs$core$async$mix_$_state_machine__28254__auto__);

(statearr_30111[(1)] = (1));

return statearr_30111;
});
var cljs$core$async$mix_$_state_machine__28254__auto____1 = (function (state_30052){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30112){if((e30112 instanceof Object)){
var ex__28257__auto__ = e30112;
var statearr_30113_30162 = state_30052;
(statearr_30113_30162[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30163 = state_30052;
state_30052 = G__30163;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28254__auto__ = function(state_30052){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28254__auto____1.call(this,state_30052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28254__auto____0;
cljs$core$async$mix_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28254__auto____1;
return cljs$core$async$mix_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___30115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28369__auto__ = (function (){var statearr_30114 = f__28368__auto__.call(null);
(statearr_30114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___30115);

return statearr_30114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___30115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22148__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p,v,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30164 = [];
var len__22617__auto___30167 = arguments.length;
var i__22618__auto___30168 = (0);
while(true){
if((i__22618__auto___30168 < len__22617__auto___30167)){
args30164.push((arguments[i__22618__auto___30168]));

var G__30169 = (i__22618__auto___30168 + (1));
i__22618__auto___30168 = G__30169;
continue;
} else {
}
break;
}

var G__30166 = args30164.length;
switch (G__30166) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30164.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p);
} else {
var m__22148__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p);
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
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p,v);
} else {
var m__22148__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p,v);
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
var args30172 = [];
var len__22617__auto___30297 = arguments.length;
var i__22618__auto___30298 = (0);
while(true){
if((i__22618__auto___30298 < len__22617__auto___30297)){
args30172.push((arguments[i__22618__auto___30298]));

var G__30299 = (i__22618__auto___30298 + (1));
i__22618__auto___30298 = G__30299;
continue;
} else {
}
break;
}

var G__30174 = args30172.length;
switch (G__30174) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30172.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21434__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21434__auto__,mults){
return (function (p1__30171_SHARP_){
if(cljs.core.truth_(p1__30171_SHARP_.call(null,topic))){
return p1__30171_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30171_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21434__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30175 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30176){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30176 = meta30176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30177,meta30176__$1){
var self__ = this;
var _30177__$1 = this;
return (new cljs.core.async.t_cljs$core$async30175(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30176__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30177){
var self__ = this;
var _30177__$1 = this;
return self__.meta30176;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6369__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6369__auto__)){
var m = temp__6369__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30176","meta30176",-94195733,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30175";

cljs.core.async.t_cljs$core$async30175.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async30175");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30175 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30176){
return (new cljs.core.async.t_cljs$core$async30175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30176));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30175(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28367__auto___30301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___30301,mults,ensure_mult,p){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___30301,mults,ensure_mult,p){
return (function (state_30249){
var state_val_30250 = (state_30249[(1)]);
if((state_val_30250 === (7))){
var inst_30245 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30251_30302 = state_30249__$1;
(statearr_30251_30302[(2)] = inst_30245);

(statearr_30251_30302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (20))){
var state_30249__$1 = state_30249;
var statearr_30252_30303 = state_30249__$1;
(statearr_30252_30303[(2)] = null);

(statearr_30252_30303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (1))){
var state_30249__$1 = state_30249;
var statearr_30253_30304 = state_30249__$1;
(statearr_30253_30304[(2)] = null);

(statearr_30253_30304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (24))){
var inst_30228 = (state_30249[(7)]);
var inst_30237 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30228);
var state_30249__$1 = state_30249;
var statearr_30254_30305 = state_30249__$1;
(statearr_30254_30305[(2)] = inst_30237);

(statearr_30254_30305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (4))){
var inst_30180 = (state_30249[(8)]);
var inst_30180__$1 = (state_30249[(2)]);
var inst_30181 = (inst_30180__$1 == null);
var state_30249__$1 = (function (){var statearr_30255 = state_30249;
(statearr_30255[(8)] = inst_30180__$1);

return statearr_30255;
})();
if(cljs.core.truth_(inst_30181)){
var statearr_30256_30306 = state_30249__$1;
(statearr_30256_30306[(1)] = (5));

} else {
var statearr_30257_30307 = state_30249__$1;
(statearr_30257_30307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (15))){
var inst_30222 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30258_30308 = state_30249__$1;
(statearr_30258_30308[(2)] = inst_30222);

(statearr_30258_30308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (21))){
var inst_30242 = (state_30249[(2)]);
var state_30249__$1 = (function (){var statearr_30259 = state_30249;
(statearr_30259[(9)] = inst_30242);

return statearr_30259;
})();
var statearr_30260_30309 = state_30249__$1;
(statearr_30260_30309[(2)] = null);

(statearr_30260_30309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (13))){
var inst_30204 = (state_30249[(10)]);
var inst_30206 = cljs.core.chunked_seq_QMARK_.call(null,inst_30204);
var state_30249__$1 = state_30249;
if(inst_30206){
var statearr_30261_30310 = state_30249__$1;
(statearr_30261_30310[(1)] = (16));

} else {
var statearr_30262_30311 = state_30249__$1;
(statearr_30262_30311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (22))){
var inst_30234 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
if(cljs.core.truth_(inst_30234)){
var statearr_30263_30312 = state_30249__$1;
(statearr_30263_30312[(1)] = (23));

} else {
var statearr_30264_30313 = state_30249__$1;
(statearr_30264_30313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (6))){
var inst_30230 = (state_30249[(11)]);
var inst_30180 = (state_30249[(8)]);
var inst_30228 = (state_30249[(7)]);
var inst_30228__$1 = topic_fn.call(null,inst_30180);
var inst_30229 = cljs.core.deref.call(null,mults);
var inst_30230__$1 = cljs.core.get.call(null,inst_30229,inst_30228__$1);
var state_30249__$1 = (function (){var statearr_30265 = state_30249;
(statearr_30265[(11)] = inst_30230__$1);

(statearr_30265[(7)] = inst_30228__$1);

return statearr_30265;
})();
if(cljs.core.truth_(inst_30230__$1)){
var statearr_30266_30314 = state_30249__$1;
(statearr_30266_30314[(1)] = (19));

} else {
var statearr_30267_30315 = state_30249__$1;
(statearr_30267_30315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (25))){
var inst_30239 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30268_30316 = state_30249__$1;
(statearr_30268_30316[(2)] = inst_30239);

(statearr_30268_30316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (17))){
var inst_30204 = (state_30249[(10)]);
var inst_30213 = cljs.core.first.call(null,inst_30204);
var inst_30214 = cljs.core.async.muxch_STAR_.call(null,inst_30213);
var inst_30215 = cljs.core.async.close_BANG_.call(null,inst_30214);
var inst_30216 = cljs.core.next.call(null,inst_30204);
var inst_30190 = inst_30216;
var inst_30191 = null;
var inst_30192 = (0);
var inst_30193 = (0);
var state_30249__$1 = (function (){var statearr_30269 = state_30249;
(statearr_30269[(12)] = inst_30193);

(statearr_30269[(13)] = inst_30192);

(statearr_30269[(14)] = inst_30191);

(statearr_30269[(15)] = inst_30190);

(statearr_30269[(16)] = inst_30215);

return statearr_30269;
})();
var statearr_30270_30317 = state_30249__$1;
(statearr_30270_30317[(2)] = null);

(statearr_30270_30317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (3))){
var inst_30247 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30249__$1,inst_30247);
} else {
if((state_val_30250 === (12))){
var inst_30224 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30271_30318 = state_30249__$1;
(statearr_30271_30318[(2)] = inst_30224);

(statearr_30271_30318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (2))){
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30249__$1,(4),ch);
} else {
if((state_val_30250 === (23))){
var state_30249__$1 = state_30249;
var statearr_30272_30319 = state_30249__$1;
(statearr_30272_30319[(2)] = null);

(statearr_30272_30319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (19))){
var inst_30230 = (state_30249[(11)]);
var inst_30180 = (state_30249[(8)]);
var inst_30232 = cljs.core.async.muxch_STAR_.call(null,inst_30230);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30249__$1,(22),inst_30232,inst_30180);
} else {
if((state_val_30250 === (11))){
var inst_30204 = (state_30249[(10)]);
var inst_30190 = (state_30249[(15)]);
var inst_30204__$1 = cljs.core.seq.call(null,inst_30190);
var state_30249__$1 = (function (){var statearr_30273 = state_30249;
(statearr_30273[(10)] = inst_30204__$1);

return statearr_30273;
})();
if(inst_30204__$1){
var statearr_30274_30320 = state_30249__$1;
(statearr_30274_30320[(1)] = (13));

} else {
var statearr_30275_30321 = state_30249__$1;
(statearr_30275_30321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (9))){
var inst_30226 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30276_30322 = state_30249__$1;
(statearr_30276_30322[(2)] = inst_30226);

(statearr_30276_30322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (5))){
var inst_30187 = cljs.core.deref.call(null,mults);
var inst_30188 = cljs.core.vals.call(null,inst_30187);
var inst_30189 = cljs.core.seq.call(null,inst_30188);
var inst_30190 = inst_30189;
var inst_30191 = null;
var inst_30192 = (0);
var inst_30193 = (0);
var state_30249__$1 = (function (){var statearr_30277 = state_30249;
(statearr_30277[(12)] = inst_30193);

(statearr_30277[(13)] = inst_30192);

(statearr_30277[(14)] = inst_30191);

(statearr_30277[(15)] = inst_30190);

return statearr_30277;
})();
var statearr_30278_30323 = state_30249__$1;
(statearr_30278_30323[(2)] = null);

(statearr_30278_30323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (14))){
var state_30249__$1 = state_30249;
var statearr_30282_30324 = state_30249__$1;
(statearr_30282_30324[(2)] = null);

(statearr_30282_30324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (16))){
var inst_30204 = (state_30249[(10)]);
var inst_30208 = cljs.core.chunk_first.call(null,inst_30204);
var inst_30209 = cljs.core.chunk_rest.call(null,inst_30204);
var inst_30210 = cljs.core.count.call(null,inst_30208);
var inst_30190 = inst_30209;
var inst_30191 = inst_30208;
var inst_30192 = inst_30210;
var inst_30193 = (0);
var state_30249__$1 = (function (){var statearr_30283 = state_30249;
(statearr_30283[(12)] = inst_30193);

(statearr_30283[(13)] = inst_30192);

(statearr_30283[(14)] = inst_30191);

(statearr_30283[(15)] = inst_30190);

return statearr_30283;
})();
var statearr_30284_30325 = state_30249__$1;
(statearr_30284_30325[(2)] = null);

(statearr_30284_30325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (10))){
var inst_30193 = (state_30249[(12)]);
var inst_30192 = (state_30249[(13)]);
var inst_30191 = (state_30249[(14)]);
var inst_30190 = (state_30249[(15)]);
var inst_30198 = cljs.core._nth.call(null,inst_30191,inst_30193);
var inst_30199 = cljs.core.async.muxch_STAR_.call(null,inst_30198);
var inst_30200 = cljs.core.async.close_BANG_.call(null,inst_30199);
var inst_30201 = (inst_30193 + (1));
var tmp30279 = inst_30192;
var tmp30280 = inst_30191;
var tmp30281 = inst_30190;
var inst_30190__$1 = tmp30281;
var inst_30191__$1 = tmp30280;
var inst_30192__$1 = tmp30279;
var inst_30193__$1 = inst_30201;
var state_30249__$1 = (function (){var statearr_30285 = state_30249;
(statearr_30285[(12)] = inst_30193__$1);

(statearr_30285[(13)] = inst_30192__$1);

(statearr_30285[(14)] = inst_30191__$1);

(statearr_30285[(15)] = inst_30190__$1);

(statearr_30285[(17)] = inst_30200);

return statearr_30285;
})();
var statearr_30286_30326 = state_30249__$1;
(statearr_30286_30326[(2)] = null);

(statearr_30286_30326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (18))){
var inst_30219 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30287_30327 = state_30249__$1;
(statearr_30287_30327[(2)] = inst_30219);

(statearr_30287_30327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (8))){
var inst_30193 = (state_30249[(12)]);
var inst_30192 = (state_30249[(13)]);
var inst_30195 = (inst_30193 < inst_30192);
var inst_30196 = inst_30195;
var state_30249__$1 = state_30249;
if(cljs.core.truth_(inst_30196)){
var statearr_30288_30328 = state_30249__$1;
(statearr_30288_30328[(1)] = (10));

} else {
var statearr_30289_30329 = state_30249__$1;
(statearr_30289_30329[(1)] = (11));

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
});})(c__28367__auto___30301,mults,ensure_mult,p))
;
return ((function (switch__28253__auto__,c__28367__auto___30301,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_30293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30293[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_30293[(1)] = (1));

return statearr_30293;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_30249){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30294){if((e30294 instanceof Object)){
var ex__28257__auto__ = e30294;
var statearr_30295_30330 = state_30249;
(statearr_30295_30330[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30331 = state_30249;
state_30249 = G__30331;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_30249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_30249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___30301,mults,ensure_mult,p))
})();
var state__28369__auto__ = (function (){var statearr_30296 = f__28368__auto__.call(null);
(statearr_30296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___30301);

return statearr_30296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___30301,mults,ensure_mult,p))
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
var args30332 = [];
var len__22617__auto___30335 = arguments.length;
var i__22618__auto___30336 = (0);
while(true){
if((i__22618__auto___30336 < len__22617__auto___30335)){
args30332.push((arguments[i__22618__auto___30336]));

var G__30337 = (i__22618__auto___30336 + (1));
i__22618__auto___30336 = G__30337;
continue;
} else {
}
break;
}

var G__30334 = args30332.length;
switch (G__30334) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30332.length)].join('')));

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
var args30339 = [];
var len__22617__auto___30342 = arguments.length;
var i__22618__auto___30343 = (0);
while(true){
if((i__22618__auto___30343 < len__22617__auto___30342)){
args30339.push((arguments[i__22618__auto___30343]));

var G__30344 = (i__22618__auto___30343 + (1));
i__22618__auto___30343 = G__30344;
continue;
} else {
}
break;
}

var G__30341 = args30339.length;
switch (G__30341) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30339.length)].join('')));

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
var args30346 = [];
var len__22617__auto___30417 = arguments.length;
var i__22618__auto___30418 = (0);
while(true){
if((i__22618__auto___30418 < len__22617__auto___30417)){
args30346.push((arguments[i__22618__auto___30418]));

var G__30419 = (i__22618__auto___30418 + (1));
i__22618__auto___30418 = G__30419;
continue;
} else {
}
break;
}

var G__30348 = args30346.length;
switch (G__30348) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30346.length)].join('')));

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
var c__28367__auto___30421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___30421,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___30421,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30387){
var state_val_30388 = (state_30387[(1)]);
if((state_val_30388 === (7))){
var state_30387__$1 = state_30387;
var statearr_30389_30422 = state_30387__$1;
(statearr_30389_30422[(2)] = null);

(statearr_30389_30422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (1))){
var state_30387__$1 = state_30387;
var statearr_30390_30423 = state_30387__$1;
(statearr_30390_30423[(2)] = null);

(statearr_30390_30423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (4))){
var inst_30351 = (state_30387[(7)]);
var inst_30353 = (inst_30351 < cnt);
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30353)){
var statearr_30391_30424 = state_30387__$1;
(statearr_30391_30424[(1)] = (6));

} else {
var statearr_30392_30425 = state_30387__$1;
(statearr_30392_30425[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (15))){
var inst_30383 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30393_30426 = state_30387__$1;
(statearr_30393_30426[(2)] = inst_30383);

(statearr_30393_30426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (13))){
var inst_30376 = cljs.core.async.close_BANG_.call(null,out);
var state_30387__$1 = state_30387;
var statearr_30394_30427 = state_30387__$1;
(statearr_30394_30427[(2)] = inst_30376);

(statearr_30394_30427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (6))){
var state_30387__$1 = state_30387;
var statearr_30395_30428 = state_30387__$1;
(statearr_30395_30428[(2)] = null);

(statearr_30395_30428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (3))){
var inst_30385 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30387__$1,inst_30385);
} else {
if((state_val_30388 === (12))){
var inst_30373 = (state_30387[(8)]);
var inst_30373__$1 = (state_30387[(2)]);
var inst_30374 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30373__$1);
var state_30387__$1 = (function (){var statearr_30396 = state_30387;
(statearr_30396[(8)] = inst_30373__$1);

return statearr_30396;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30397_30429 = state_30387__$1;
(statearr_30397_30429[(1)] = (13));

} else {
var statearr_30398_30430 = state_30387__$1;
(statearr_30398_30430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (2))){
var inst_30350 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30351 = (0);
var state_30387__$1 = (function (){var statearr_30399 = state_30387;
(statearr_30399[(7)] = inst_30351);

(statearr_30399[(9)] = inst_30350);

return statearr_30399;
})();
var statearr_30400_30431 = state_30387__$1;
(statearr_30400_30431[(2)] = null);

(statearr_30400_30431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (11))){
var inst_30351 = (state_30387[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30387,(10),Object,null,(9));
var inst_30360 = chs__$1.call(null,inst_30351);
var inst_30361 = done.call(null,inst_30351);
var inst_30362 = cljs.core.async.take_BANG_.call(null,inst_30360,inst_30361);
var state_30387__$1 = state_30387;
var statearr_30401_30432 = state_30387__$1;
(statearr_30401_30432[(2)] = inst_30362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (9))){
var inst_30351 = (state_30387[(7)]);
var inst_30364 = (state_30387[(2)]);
var inst_30365 = (inst_30351 + (1));
var inst_30351__$1 = inst_30365;
var state_30387__$1 = (function (){var statearr_30402 = state_30387;
(statearr_30402[(7)] = inst_30351__$1);

(statearr_30402[(10)] = inst_30364);

return statearr_30402;
})();
var statearr_30403_30433 = state_30387__$1;
(statearr_30403_30433[(2)] = null);

(statearr_30403_30433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (5))){
var inst_30371 = (state_30387[(2)]);
var state_30387__$1 = (function (){var statearr_30404 = state_30387;
(statearr_30404[(11)] = inst_30371);

return statearr_30404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30387__$1,(12),dchan);
} else {
if((state_val_30388 === (14))){
var inst_30373 = (state_30387[(8)]);
var inst_30378 = cljs.core.apply.call(null,f,inst_30373);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30387__$1,(16),out,inst_30378);
} else {
if((state_val_30388 === (16))){
var inst_30380 = (state_30387[(2)]);
var state_30387__$1 = (function (){var statearr_30405 = state_30387;
(statearr_30405[(12)] = inst_30380);

return statearr_30405;
})();
var statearr_30406_30434 = state_30387__$1;
(statearr_30406_30434[(2)] = null);

(statearr_30406_30434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (10))){
var inst_30355 = (state_30387[(2)]);
var inst_30356 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30387__$1 = (function (){var statearr_30407 = state_30387;
(statearr_30407[(13)] = inst_30355);

return statearr_30407;
})();
var statearr_30408_30435 = state_30387__$1;
(statearr_30408_30435[(2)] = inst_30356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (8))){
var inst_30369 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30409_30436 = state_30387__$1;
(statearr_30409_30436[(2)] = inst_30369);

(statearr_30409_30436[(1)] = (5));


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
});})(c__28367__auto___30421,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28253__auto__,c__28367__auto___30421,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_30413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30413[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_30413[(1)] = (1));

return statearr_30413;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_30387){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30414){if((e30414 instanceof Object)){
var ex__28257__auto__ = e30414;
var statearr_30415_30437 = state_30387;
(statearr_30415_30437[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30438 = state_30387;
state_30387 = G__30438;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___30421,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28369__auto__ = (function (){var statearr_30416 = f__28368__auto__.call(null);
(statearr_30416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___30421);

return statearr_30416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___30421,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30440 = [];
var len__22617__auto___30498 = arguments.length;
var i__22618__auto___30499 = (0);
while(true){
if((i__22618__auto___30499 < len__22617__auto___30498)){
args30440.push((arguments[i__22618__auto___30499]));

var G__30500 = (i__22618__auto___30499 + (1));
i__22618__auto___30499 = G__30500;
continue;
} else {
}
break;
}

var G__30442 = args30440.length;
switch (G__30442) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30440.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28367__auto___30502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___30502,out){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___30502,out){
return (function (state_30474){
var state_val_30475 = (state_30474[(1)]);
if((state_val_30475 === (7))){
var inst_30453 = (state_30474[(7)]);
var inst_30454 = (state_30474[(8)]);
var inst_30453__$1 = (state_30474[(2)]);
var inst_30454__$1 = cljs.core.nth.call(null,inst_30453__$1,(0),null);
var inst_30455 = cljs.core.nth.call(null,inst_30453__$1,(1),null);
var inst_30456 = (inst_30454__$1 == null);
var state_30474__$1 = (function (){var statearr_30476 = state_30474;
(statearr_30476[(7)] = inst_30453__$1);

(statearr_30476[(9)] = inst_30455);

(statearr_30476[(8)] = inst_30454__$1);

return statearr_30476;
})();
if(cljs.core.truth_(inst_30456)){
var statearr_30477_30503 = state_30474__$1;
(statearr_30477_30503[(1)] = (8));

} else {
var statearr_30478_30504 = state_30474__$1;
(statearr_30478_30504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (1))){
var inst_30443 = cljs.core.vec.call(null,chs);
var inst_30444 = inst_30443;
var state_30474__$1 = (function (){var statearr_30479 = state_30474;
(statearr_30479[(10)] = inst_30444);

return statearr_30479;
})();
var statearr_30480_30505 = state_30474__$1;
(statearr_30480_30505[(2)] = null);

(statearr_30480_30505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (4))){
var inst_30444 = (state_30474[(10)]);
var state_30474__$1 = state_30474;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30474__$1,(7),inst_30444);
} else {
if((state_val_30475 === (6))){
var inst_30470 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30481_30506 = state_30474__$1;
(statearr_30481_30506[(2)] = inst_30470);

(statearr_30481_30506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (3))){
var inst_30472 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30474__$1,inst_30472);
} else {
if((state_val_30475 === (2))){
var inst_30444 = (state_30474[(10)]);
var inst_30446 = cljs.core.count.call(null,inst_30444);
var inst_30447 = (inst_30446 > (0));
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30447)){
var statearr_30483_30507 = state_30474__$1;
(statearr_30483_30507[(1)] = (4));

} else {
var statearr_30484_30508 = state_30474__$1;
(statearr_30484_30508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (11))){
var inst_30444 = (state_30474[(10)]);
var inst_30463 = (state_30474[(2)]);
var tmp30482 = inst_30444;
var inst_30444__$1 = tmp30482;
var state_30474__$1 = (function (){var statearr_30485 = state_30474;
(statearr_30485[(11)] = inst_30463);

(statearr_30485[(10)] = inst_30444__$1);

return statearr_30485;
})();
var statearr_30486_30509 = state_30474__$1;
(statearr_30486_30509[(2)] = null);

(statearr_30486_30509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (9))){
var inst_30454 = (state_30474[(8)]);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30474__$1,(11),out,inst_30454);
} else {
if((state_val_30475 === (5))){
var inst_30468 = cljs.core.async.close_BANG_.call(null,out);
var state_30474__$1 = state_30474;
var statearr_30487_30510 = state_30474__$1;
(statearr_30487_30510[(2)] = inst_30468);

(statearr_30487_30510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (10))){
var inst_30466 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30488_30511 = state_30474__$1;
(statearr_30488_30511[(2)] = inst_30466);

(statearr_30488_30511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (8))){
var inst_30453 = (state_30474[(7)]);
var inst_30455 = (state_30474[(9)]);
var inst_30444 = (state_30474[(10)]);
var inst_30454 = (state_30474[(8)]);
var inst_30458 = (function (){var cs = inst_30444;
var vec__30449 = inst_30453;
var v = inst_30454;
var c = inst_30455;
return ((function (cs,vec__30449,v,c,inst_30453,inst_30455,inst_30444,inst_30454,state_val_30475,c__28367__auto___30502,out){
return (function (p1__30439_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30439_SHARP_);
});
;})(cs,vec__30449,v,c,inst_30453,inst_30455,inst_30444,inst_30454,state_val_30475,c__28367__auto___30502,out))
})();
var inst_30459 = cljs.core.filterv.call(null,inst_30458,inst_30444);
var inst_30444__$1 = inst_30459;
var state_30474__$1 = (function (){var statearr_30489 = state_30474;
(statearr_30489[(10)] = inst_30444__$1);

return statearr_30489;
})();
var statearr_30490_30512 = state_30474__$1;
(statearr_30490_30512[(2)] = null);

(statearr_30490_30512[(1)] = (2));


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
});})(c__28367__auto___30502,out))
;
return ((function (switch__28253__auto__,c__28367__auto___30502,out){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30494[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_30474){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30495){if((e30495 instanceof Object)){
var ex__28257__auto__ = e30495;
var statearr_30496_30513 = state_30474;
(statearr_30496_30513[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30514 = state_30474;
state_30474 = G__30514;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_30474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_30474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___30502,out))
})();
var state__28369__auto__ = (function (){var statearr_30497 = f__28368__auto__.call(null);
(statearr_30497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___30502);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___30502,out))
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
var args30515 = [];
var len__22617__auto___30564 = arguments.length;
var i__22618__auto___30565 = (0);
while(true){
if((i__22618__auto___30565 < len__22617__auto___30564)){
args30515.push((arguments[i__22618__auto___30565]));

var G__30566 = (i__22618__auto___30565 + (1));
i__22618__auto___30565 = G__30566;
continue;
} else {
}
break;
}

var G__30517 = args30515.length;
switch (G__30517) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30515.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28367__auto___30568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___30568,out){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___30568,out){
return (function (state_30541){
var state_val_30542 = (state_30541[(1)]);
if((state_val_30542 === (7))){
var inst_30523 = (state_30541[(7)]);
var inst_30523__$1 = (state_30541[(2)]);
var inst_30524 = (inst_30523__$1 == null);
var inst_30525 = cljs.core.not.call(null,inst_30524);
var state_30541__$1 = (function (){var statearr_30543 = state_30541;
(statearr_30543[(7)] = inst_30523__$1);

return statearr_30543;
})();
if(inst_30525){
var statearr_30544_30569 = state_30541__$1;
(statearr_30544_30569[(1)] = (8));

} else {
var statearr_30545_30570 = state_30541__$1;
(statearr_30545_30570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (1))){
var inst_30518 = (0);
var state_30541__$1 = (function (){var statearr_30546 = state_30541;
(statearr_30546[(8)] = inst_30518);

return statearr_30546;
})();
var statearr_30547_30571 = state_30541__$1;
(statearr_30547_30571[(2)] = null);

(statearr_30547_30571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (4))){
var state_30541__$1 = state_30541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30541__$1,(7),ch);
} else {
if((state_val_30542 === (6))){
var inst_30536 = (state_30541[(2)]);
var state_30541__$1 = state_30541;
var statearr_30548_30572 = state_30541__$1;
(statearr_30548_30572[(2)] = inst_30536);

(statearr_30548_30572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (3))){
var inst_30538 = (state_30541[(2)]);
var inst_30539 = cljs.core.async.close_BANG_.call(null,out);
var state_30541__$1 = (function (){var statearr_30549 = state_30541;
(statearr_30549[(9)] = inst_30538);

return statearr_30549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30541__$1,inst_30539);
} else {
if((state_val_30542 === (2))){
var inst_30518 = (state_30541[(8)]);
var inst_30520 = (inst_30518 < n);
var state_30541__$1 = state_30541;
if(cljs.core.truth_(inst_30520)){
var statearr_30550_30573 = state_30541__$1;
(statearr_30550_30573[(1)] = (4));

} else {
var statearr_30551_30574 = state_30541__$1;
(statearr_30551_30574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (11))){
var inst_30518 = (state_30541[(8)]);
var inst_30528 = (state_30541[(2)]);
var inst_30529 = (inst_30518 + (1));
var inst_30518__$1 = inst_30529;
var state_30541__$1 = (function (){var statearr_30552 = state_30541;
(statearr_30552[(8)] = inst_30518__$1);

(statearr_30552[(10)] = inst_30528);

return statearr_30552;
})();
var statearr_30553_30575 = state_30541__$1;
(statearr_30553_30575[(2)] = null);

(statearr_30553_30575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (9))){
var state_30541__$1 = state_30541;
var statearr_30554_30576 = state_30541__$1;
(statearr_30554_30576[(2)] = null);

(statearr_30554_30576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (5))){
var state_30541__$1 = state_30541;
var statearr_30555_30577 = state_30541__$1;
(statearr_30555_30577[(2)] = null);

(statearr_30555_30577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (10))){
var inst_30533 = (state_30541[(2)]);
var state_30541__$1 = state_30541;
var statearr_30556_30578 = state_30541__$1;
(statearr_30556_30578[(2)] = inst_30533);

(statearr_30556_30578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30542 === (8))){
var inst_30523 = (state_30541[(7)]);
var state_30541__$1 = state_30541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30541__$1,(11),out,inst_30523);
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
});})(c__28367__auto___30568,out))
;
return ((function (switch__28253__auto__,c__28367__auto___30568,out){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_30560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30560[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_30560[(1)] = (1));

return statearr_30560;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_30541){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30561){if((e30561 instanceof Object)){
var ex__28257__auto__ = e30561;
var statearr_30562_30579 = state_30541;
(statearr_30562_30579[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30580 = state_30541;
state_30541 = G__30580;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_30541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_30541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___30568,out))
})();
var state__28369__auto__ = (function (){var statearr_30563 = f__28368__auto__.call(null);
(statearr_30563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___30568);

return statearr_30563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___30568,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30588 = (function (map_LT_,f,ch,meta30589){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30589 = meta30589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30590,meta30589__$1){
var self__ = this;
var _30590__$1 = this;
return (new cljs.core.async.t_cljs$core$async30588(self__.map_LT_,self__.f,self__.ch,meta30589__$1));
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30590){
var self__ = this;
var _30590__$1 = this;
return self__.meta30589;
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30591 = (function (map_LT_,f,ch,meta30589,_,fn1,meta30592){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30589 = meta30589;
this._ = _;
this.fn1 = fn1;
this.meta30592 = meta30592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30593,meta30592__$1){
var self__ = this;
var _30593__$1 = this;
return (new cljs.core.async.t_cljs$core$async30591(self__.map_LT_,self__.f,self__.ch,self__.meta30589,self__._,self__.fn1,meta30592__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30593){
var self__ = this;
var _30593__$1 = this;
return self__.meta30592;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30581_SHARP_){
return f1.call(null,(((p1__30581_SHARP_ == null))?null:self__.f.call(null,p1__30581_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30591.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30589","meta30589",648919454,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30588","cljs.core.async/t_cljs$core$async30588",-1741027659,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30592","meta30592",-1618730939,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30591";

cljs.core.async.t_cljs$core$async30591.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async30591");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30591 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30591(map_LT___$1,f__$1,ch__$1,meta30589__$1,___$2,fn1__$1,meta30592){
return (new cljs.core.async.t_cljs$core$async30591(map_LT___$1,f__$1,ch__$1,meta30589__$1,___$2,fn1__$1,meta30592));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30591(self__.map_LT_,self__.f,self__.ch,self__.meta30589,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21422__auto__ = ret;
if(cljs.core.truth_(and__21422__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21422__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30589","meta30589",648919454,null)], null);
});

cljs.core.async.t_cljs$core$async30588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30588";

cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async30588");
});

cljs.core.async.__GT_t_cljs$core$async30588 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30588(map_LT___$1,f__$1,ch__$1,meta30589){
return (new cljs.core.async.t_cljs$core$async30588(map_LT___$1,f__$1,ch__$1,meta30589));
});

}

return (new cljs.core.async.t_cljs$core$async30588(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30597 = (function (map_GT_,f,ch,meta30598){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30598 = meta30598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30599,meta30598__$1){
var self__ = this;
var _30599__$1 = this;
return (new cljs.core.async.t_cljs$core$async30597(self__.map_GT_,self__.f,self__.ch,meta30598__$1));
});

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30599){
var self__ = this;
var _30599__$1 = this;
return self__.meta30598;
});

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30598","meta30598",664939474,null)], null);
});

cljs.core.async.t_cljs$core$async30597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30597";

cljs.core.async.t_cljs$core$async30597.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async30597");
});

cljs.core.async.__GT_t_cljs$core$async30597 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30597(map_GT___$1,f__$1,ch__$1,meta30598){
return (new cljs.core.async.t_cljs$core$async30597(map_GT___$1,f__$1,ch__$1,meta30598));
});

}

return (new cljs.core.async.t_cljs$core$async30597(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30603 = (function (filter_GT_,p,ch,meta30604){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30604 = meta30604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30605,meta30604__$1){
var self__ = this;
var _30605__$1 = this;
return (new cljs.core.async.t_cljs$core$async30603(self__.filter_GT_,self__.p,self__.ch,meta30604__$1));
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30605){
var self__ = this;
var _30605__$1 = this;
return self__.meta30604;
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30604","meta30604",740128331,null)], null);
});

cljs.core.async.t_cljs$core$async30603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30603";

cljs.core.async.t_cljs$core$async30603.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async30603");
});

cljs.core.async.__GT_t_cljs$core$async30603 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30603(filter_GT___$1,p__$1,ch__$1,meta30604){
return (new cljs.core.async.t_cljs$core$async30603(filter_GT___$1,p__$1,ch__$1,meta30604));
});

}

return (new cljs.core.async.t_cljs$core$async30603(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30606 = [];
var len__22617__auto___30650 = arguments.length;
var i__22618__auto___30651 = (0);
while(true){
if((i__22618__auto___30651 < len__22617__auto___30650)){
args30606.push((arguments[i__22618__auto___30651]));

var G__30652 = (i__22618__auto___30651 + (1));
i__22618__auto___30651 = G__30652;
continue;
} else {
}
break;
}

var G__30608 = args30606.length;
switch (G__30608) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30606.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28367__auto___30654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___30654,out){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___30654,out){
return (function (state_30629){
var state_val_30630 = (state_30629[(1)]);
if((state_val_30630 === (7))){
var inst_30625 = (state_30629[(2)]);
var state_30629__$1 = state_30629;
var statearr_30631_30655 = state_30629__$1;
(statearr_30631_30655[(2)] = inst_30625);

(statearr_30631_30655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (1))){
var state_30629__$1 = state_30629;
var statearr_30632_30656 = state_30629__$1;
(statearr_30632_30656[(2)] = null);

(statearr_30632_30656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (4))){
var inst_30611 = (state_30629[(7)]);
var inst_30611__$1 = (state_30629[(2)]);
var inst_30612 = (inst_30611__$1 == null);
var state_30629__$1 = (function (){var statearr_30633 = state_30629;
(statearr_30633[(7)] = inst_30611__$1);

return statearr_30633;
})();
if(cljs.core.truth_(inst_30612)){
var statearr_30634_30657 = state_30629__$1;
(statearr_30634_30657[(1)] = (5));

} else {
var statearr_30635_30658 = state_30629__$1;
(statearr_30635_30658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (6))){
var inst_30611 = (state_30629[(7)]);
var inst_30616 = p.call(null,inst_30611);
var state_30629__$1 = state_30629;
if(cljs.core.truth_(inst_30616)){
var statearr_30636_30659 = state_30629__$1;
(statearr_30636_30659[(1)] = (8));

} else {
var statearr_30637_30660 = state_30629__$1;
(statearr_30637_30660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (3))){
var inst_30627 = (state_30629[(2)]);
var state_30629__$1 = state_30629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30629__$1,inst_30627);
} else {
if((state_val_30630 === (2))){
var state_30629__$1 = state_30629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30629__$1,(4),ch);
} else {
if((state_val_30630 === (11))){
var inst_30619 = (state_30629[(2)]);
var state_30629__$1 = state_30629;
var statearr_30638_30661 = state_30629__$1;
(statearr_30638_30661[(2)] = inst_30619);

(statearr_30638_30661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (9))){
var state_30629__$1 = state_30629;
var statearr_30639_30662 = state_30629__$1;
(statearr_30639_30662[(2)] = null);

(statearr_30639_30662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (5))){
var inst_30614 = cljs.core.async.close_BANG_.call(null,out);
var state_30629__$1 = state_30629;
var statearr_30640_30663 = state_30629__$1;
(statearr_30640_30663[(2)] = inst_30614);

(statearr_30640_30663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (10))){
var inst_30622 = (state_30629[(2)]);
var state_30629__$1 = (function (){var statearr_30641 = state_30629;
(statearr_30641[(8)] = inst_30622);

return statearr_30641;
})();
var statearr_30642_30664 = state_30629__$1;
(statearr_30642_30664[(2)] = null);

(statearr_30642_30664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30630 === (8))){
var inst_30611 = (state_30629[(7)]);
var state_30629__$1 = state_30629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30629__$1,(11),out,inst_30611);
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
});})(c__28367__auto___30654,out))
;
return ((function (switch__28253__auto__,c__28367__auto___30654,out){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_30646 = [null,null,null,null,null,null,null,null,null];
(statearr_30646[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_30646[(1)] = (1));

return statearr_30646;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_30629){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30647){if((e30647 instanceof Object)){
var ex__28257__auto__ = e30647;
var statearr_30648_30665 = state_30629;
(statearr_30648_30665[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30666 = state_30629;
state_30629 = G__30666;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_30629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_30629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___30654,out))
})();
var state__28369__auto__ = (function (){var statearr_30649 = f__28368__auto__.call(null);
(statearr_30649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___30654);

return statearr_30649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___30654,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30667 = [];
var len__22617__auto___30670 = arguments.length;
var i__22618__auto___30671 = (0);
while(true){
if((i__22618__auto___30671 < len__22617__auto___30670)){
args30667.push((arguments[i__22618__auto___30671]));

var G__30672 = (i__22618__auto___30671 + (1));
i__22618__auto___30671 = G__30672;
continue;
} else {
}
break;
}

var G__30669 = args30667.length;
switch (G__30669) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30667.length)].join('')));

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
var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__){
return (function (state_30839){
var state_val_30840 = (state_30839[(1)]);
if((state_val_30840 === (7))){
var inst_30835 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30841_30882 = state_30839__$1;
(statearr_30841_30882[(2)] = inst_30835);

(statearr_30841_30882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (20))){
var inst_30805 = (state_30839[(7)]);
var inst_30816 = (state_30839[(2)]);
var inst_30817 = cljs.core.next.call(null,inst_30805);
var inst_30791 = inst_30817;
var inst_30792 = null;
var inst_30793 = (0);
var inst_30794 = (0);
var state_30839__$1 = (function (){var statearr_30842 = state_30839;
(statearr_30842[(8)] = inst_30794);

(statearr_30842[(9)] = inst_30816);

(statearr_30842[(10)] = inst_30791);

(statearr_30842[(11)] = inst_30792);

(statearr_30842[(12)] = inst_30793);

return statearr_30842;
})();
var statearr_30843_30883 = state_30839__$1;
(statearr_30843_30883[(2)] = null);

(statearr_30843_30883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (1))){
var state_30839__$1 = state_30839;
var statearr_30844_30884 = state_30839__$1;
(statearr_30844_30884[(2)] = null);

(statearr_30844_30884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (4))){
var inst_30780 = (state_30839[(13)]);
var inst_30780__$1 = (state_30839[(2)]);
var inst_30781 = (inst_30780__$1 == null);
var state_30839__$1 = (function (){var statearr_30845 = state_30839;
(statearr_30845[(13)] = inst_30780__$1);

return statearr_30845;
})();
if(cljs.core.truth_(inst_30781)){
var statearr_30846_30885 = state_30839__$1;
(statearr_30846_30885[(1)] = (5));

} else {
var statearr_30847_30886 = state_30839__$1;
(statearr_30847_30886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (15))){
var state_30839__$1 = state_30839;
var statearr_30851_30887 = state_30839__$1;
(statearr_30851_30887[(2)] = null);

(statearr_30851_30887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (21))){
var state_30839__$1 = state_30839;
var statearr_30852_30888 = state_30839__$1;
(statearr_30852_30888[(2)] = null);

(statearr_30852_30888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (13))){
var inst_30794 = (state_30839[(8)]);
var inst_30791 = (state_30839[(10)]);
var inst_30792 = (state_30839[(11)]);
var inst_30793 = (state_30839[(12)]);
var inst_30801 = (state_30839[(2)]);
var inst_30802 = (inst_30794 + (1));
var tmp30848 = inst_30791;
var tmp30849 = inst_30792;
var tmp30850 = inst_30793;
var inst_30791__$1 = tmp30848;
var inst_30792__$1 = tmp30849;
var inst_30793__$1 = tmp30850;
var inst_30794__$1 = inst_30802;
var state_30839__$1 = (function (){var statearr_30853 = state_30839;
(statearr_30853[(8)] = inst_30794__$1);

(statearr_30853[(10)] = inst_30791__$1);

(statearr_30853[(11)] = inst_30792__$1);

(statearr_30853[(14)] = inst_30801);

(statearr_30853[(12)] = inst_30793__$1);

return statearr_30853;
})();
var statearr_30854_30889 = state_30839__$1;
(statearr_30854_30889[(2)] = null);

(statearr_30854_30889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (22))){
var state_30839__$1 = state_30839;
var statearr_30855_30890 = state_30839__$1;
(statearr_30855_30890[(2)] = null);

(statearr_30855_30890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (6))){
var inst_30780 = (state_30839[(13)]);
var inst_30789 = f.call(null,inst_30780);
var inst_30790 = cljs.core.seq.call(null,inst_30789);
var inst_30791 = inst_30790;
var inst_30792 = null;
var inst_30793 = (0);
var inst_30794 = (0);
var state_30839__$1 = (function (){var statearr_30856 = state_30839;
(statearr_30856[(8)] = inst_30794);

(statearr_30856[(10)] = inst_30791);

(statearr_30856[(11)] = inst_30792);

(statearr_30856[(12)] = inst_30793);

return statearr_30856;
})();
var statearr_30857_30891 = state_30839__$1;
(statearr_30857_30891[(2)] = null);

(statearr_30857_30891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (17))){
var inst_30805 = (state_30839[(7)]);
var inst_30809 = cljs.core.chunk_first.call(null,inst_30805);
var inst_30810 = cljs.core.chunk_rest.call(null,inst_30805);
var inst_30811 = cljs.core.count.call(null,inst_30809);
var inst_30791 = inst_30810;
var inst_30792 = inst_30809;
var inst_30793 = inst_30811;
var inst_30794 = (0);
var state_30839__$1 = (function (){var statearr_30858 = state_30839;
(statearr_30858[(8)] = inst_30794);

(statearr_30858[(10)] = inst_30791);

(statearr_30858[(11)] = inst_30792);

(statearr_30858[(12)] = inst_30793);

return statearr_30858;
})();
var statearr_30859_30892 = state_30839__$1;
(statearr_30859_30892[(2)] = null);

(statearr_30859_30892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (3))){
var inst_30837 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30839__$1,inst_30837);
} else {
if((state_val_30840 === (12))){
var inst_30825 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30860_30893 = state_30839__$1;
(statearr_30860_30893[(2)] = inst_30825);

(statearr_30860_30893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (2))){
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30839__$1,(4),in$);
} else {
if((state_val_30840 === (23))){
var inst_30833 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30861_30894 = state_30839__$1;
(statearr_30861_30894[(2)] = inst_30833);

(statearr_30861_30894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (19))){
var inst_30820 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30862_30895 = state_30839__$1;
(statearr_30862_30895[(2)] = inst_30820);

(statearr_30862_30895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (11))){
var inst_30791 = (state_30839[(10)]);
var inst_30805 = (state_30839[(7)]);
var inst_30805__$1 = cljs.core.seq.call(null,inst_30791);
var state_30839__$1 = (function (){var statearr_30863 = state_30839;
(statearr_30863[(7)] = inst_30805__$1);

return statearr_30863;
})();
if(inst_30805__$1){
var statearr_30864_30896 = state_30839__$1;
(statearr_30864_30896[(1)] = (14));

} else {
var statearr_30865_30897 = state_30839__$1;
(statearr_30865_30897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (9))){
var inst_30827 = (state_30839[(2)]);
var inst_30828 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30839__$1 = (function (){var statearr_30866 = state_30839;
(statearr_30866[(15)] = inst_30827);

return statearr_30866;
})();
if(cljs.core.truth_(inst_30828)){
var statearr_30867_30898 = state_30839__$1;
(statearr_30867_30898[(1)] = (21));

} else {
var statearr_30868_30899 = state_30839__$1;
(statearr_30868_30899[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (5))){
var inst_30783 = cljs.core.async.close_BANG_.call(null,out);
var state_30839__$1 = state_30839;
var statearr_30869_30900 = state_30839__$1;
(statearr_30869_30900[(2)] = inst_30783);

(statearr_30869_30900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (14))){
var inst_30805 = (state_30839[(7)]);
var inst_30807 = cljs.core.chunked_seq_QMARK_.call(null,inst_30805);
var state_30839__$1 = state_30839;
if(inst_30807){
var statearr_30870_30901 = state_30839__$1;
(statearr_30870_30901[(1)] = (17));

} else {
var statearr_30871_30902 = state_30839__$1;
(statearr_30871_30902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (16))){
var inst_30823 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30872_30903 = state_30839__$1;
(statearr_30872_30903[(2)] = inst_30823);

(statearr_30872_30903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (10))){
var inst_30794 = (state_30839[(8)]);
var inst_30792 = (state_30839[(11)]);
var inst_30799 = cljs.core._nth.call(null,inst_30792,inst_30794);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30839__$1,(13),out,inst_30799);
} else {
if((state_val_30840 === (18))){
var inst_30805 = (state_30839[(7)]);
var inst_30814 = cljs.core.first.call(null,inst_30805);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30839__$1,(20),out,inst_30814);
} else {
if((state_val_30840 === (8))){
var inst_30794 = (state_30839[(8)]);
var inst_30793 = (state_30839[(12)]);
var inst_30796 = (inst_30794 < inst_30793);
var inst_30797 = inst_30796;
var state_30839__$1 = state_30839;
if(cljs.core.truth_(inst_30797)){
var statearr_30873_30904 = state_30839__$1;
(statearr_30873_30904[(1)] = (10));

} else {
var statearr_30874_30905 = state_30839__$1;
(statearr_30874_30905[(1)] = (11));

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
});})(c__28367__auto__))
;
return ((function (switch__28253__auto__,c__28367__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28254__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28254__auto____0 = (function (){
var statearr_30878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30878[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28254__auto__);

(statearr_30878[(1)] = (1));

return statearr_30878;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28254__auto____1 = (function (state_30839){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30879){if((e30879 instanceof Object)){
var ex__28257__auto__ = e30879;
var statearr_30880_30906 = state_30839;
(statearr_30880_30906[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30907 = state_30839;
state_30839 = G__30907;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28254__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28254__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28254__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28254__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__))
})();
var state__28369__auto__ = (function (){var statearr_30881 = f__28368__auto__.call(null);
(statearr_30881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_30881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__))
);

return c__28367__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30908 = [];
var len__22617__auto___30911 = arguments.length;
var i__22618__auto___30912 = (0);
while(true){
if((i__22618__auto___30912 < len__22617__auto___30911)){
args30908.push((arguments[i__22618__auto___30912]));

var G__30913 = (i__22618__auto___30912 + (1));
i__22618__auto___30912 = G__30913;
continue;
} else {
}
break;
}

var G__30910 = args30908.length;
switch (G__30910) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30908.length)].join('')));

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
var args30915 = [];
var len__22617__auto___30918 = arguments.length;
var i__22618__auto___30919 = (0);
while(true){
if((i__22618__auto___30919 < len__22617__auto___30918)){
args30915.push((arguments[i__22618__auto___30919]));

var G__30920 = (i__22618__auto___30919 + (1));
i__22618__auto___30919 = G__30920;
continue;
} else {
}
break;
}

var G__30917 = args30915.length;
switch (G__30917) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30915.length)].join('')));

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
var args30922 = [];
var len__22617__auto___30973 = arguments.length;
var i__22618__auto___30974 = (0);
while(true){
if((i__22618__auto___30974 < len__22617__auto___30973)){
args30922.push((arguments[i__22618__auto___30974]));

var G__30975 = (i__22618__auto___30974 + (1));
i__22618__auto___30974 = G__30975;
continue;
} else {
}
break;
}

var G__30924 = args30922.length;
switch (G__30924) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30922.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28367__auto___30977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___30977,out){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___30977,out){
return (function (state_30948){
var state_val_30949 = (state_30948[(1)]);
if((state_val_30949 === (7))){
var inst_30943 = (state_30948[(2)]);
var state_30948__$1 = state_30948;
var statearr_30950_30978 = state_30948__$1;
(statearr_30950_30978[(2)] = inst_30943);

(statearr_30950_30978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (1))){
var inst_30925 = null;
var state_30948__$1 = (function (){var statearr_30951 = state_30948;
(statearr_30951[(7)] = inst_30925);

return statearr_30951;
})();
var statearr_30952_30979 = state_30948__$1;
(statearr_30952_30979[(2)] = null);

(statearr_30952_30979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (4))){
var inst_30928 = (state_30948[(8)]);
var inst_30928__$1 = (state_30948[(2)]);
var inst_30929 = (inst_30928__$1 == null);
var inst_30930 = cljs.core.not.call(null,inst_30929);
var state_30948__$1 = (function (){var statearr_30953 = state_30948;
(statearr_30953[(8)] = inst_30928__$1);

return statearr_30953;
})();
if(inst_30930){
var statearr_30954_30980 = state_30948__$1;
(statearr_30954_30980[(1)] = (5));

} else {
var statearr_30955_30981 = state_30948__$1;
(statearr_30955_30981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (6))){
var state_30948__$1 = state_30948;
var statearr_30956_30982 = state_30948__$1;
(statearr_30956_30982[(2)] = null);

(statearr_30956_30982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (3))){
var inst_30945 = (state_30948[(2)]);
var inst_30946 = cljs.core.async.close_BANG_.call(null,out);
var state_30948__$1 = (function (){var statearr_30957 = state_30948;
(statearr_30957[(9)] = inst_30945);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30948__$1,inst_30946);
} else {
if((state_val_30949 === (2))){
var state_30948__$1 = state_30948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30948__$1,(4),ch);
} else {
if((state_val_30949 === (11))){
var inst_30928 = (state_30948[(8)]);
var inst_30937 = (state_30948[(2)]);
var inst_30925 = inst_30928;
var state_30948__$1 = (function (){var statearr_30958 = state_30948;
(statearr_30958[(7)] = inst_30925);

(statearr_30958[(10)] = inst_30937);

return statearr_30958;
})();
var statearr_30959_30983 = state_30948__$1;
(statearr_30959_30983[(2)] = null);

(statearr_30959_30983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (9))){
var inst_30928 = (state_30948[(8)]);
var state_30948__$1 = state_30948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30948__$1,(11),out,inst_30928);
} else {
if((state_val_30949 === (5))){
var inst_30925 = (state_30948[(7)]);
var inst_30928 = (state_30948[(8)]);
var inst_30932 = cljs.core._EQ_.call(null,inst_30928,inst_30925);
var state_30948__$1 = state_30948;
if(inst_30932){
var statearr_30961_30984 = state_30948__$1;
(statearr_30961_30984[(1)] = (8));

} else {
var statearr_30962_30985 = state_30948__$1;
(statearr_30962_30985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (10))){
var inst_30940 = (state_30948[(2)]);
var state_30948__$1 = state_30948;
var statearr_30963_30986 = state_30948__$1;
(statearr_30963_30986[(2)] = inst_30940);

(statearr_30963_30986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (8))){
var inst_30925 = (state_30948[(7)]);
var tmp30960 = inst_30925;
var inst_30925__$1 = tmp30960;
var state_30948__$1 = (function (){var statearr_30964 = state_30948;
(statearr_30964[(7)] = inst_30925__$1);

return statearr_30964;
})();
var statearr_30965_30987 = state_30948__$1;
(statearr_30965_30987[(2)] = null);

(statearr_30965_30987[(1)] = (2));


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
});})(c__28367__auto___30977,out))
;
return ((function (switch__28253__auto__,c__28367__auto___30977,out){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_30969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30969[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_30969[(1)] = (1));

return statearr_30969;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_30948){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_30948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e30970){if((e30970 instanceof Object)){
var ex__28257__auto__ = e30970;
var statearr_30971_30988 = state_30948;
(statearr_30971_30988[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30989 = state_30948;
state_30948 = G__30989;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_30948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_30948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___30977,out))
})();
var state__28369__auto__ = (function (){var statearr_30972 = f__28368__auto__.call(null);
(statearr_30972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___30977);

return statearr_30972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___30977,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30990 = [];
var len__22617__auto___31060 = arguments.length;
var i__22618__auto___31061 = (0);
while(true){
if((i__22618__auto___31061 < len__22617__auto___31060)){
args30990.push((arguments[i__22618__auto___31061]));

var G__31062 = (i__22618__auto___31061 + (1));
i__22618__auto___31061 = G__31062;
continue;
} else {
}
break;
}

var G__30992 = args30990.length;
switch (G__30992) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30990.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28367__auto___31064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___31064,out){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___31064,out){
return (function (state_31030){
var state_val_31031 = (state_31030[(1)]);
if((state_val_31031 === (7))){
var inst_31026 = (state_31030[(2)]);
var state_31030__$1 = state_31030;
var statearr_31032_31065 = state_31030__$1;
(statearr_31032_31065[(2)] = inst_31026);

(statearr_31032_31065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (1))){
var inst_30993 = (new Array(n));
var inst_30994 = inst_30993;
var inst_30995 = (0);
var state_31030__$1 = (function (){var statearr_31033 = state_31030;
(statearr_31033[(7)] = inst_30994);

(statearr_31033[(8)] = inst_30995);

return statearr_31033;
})();
var statearr_31034_31066 = state_31030__$1;
(statearr_31034_31066[(2)] = null);

(statearr_31034_31066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (4))){
var inst_30998 = (state_31030[(9)]);
var inst_30998__$1 = (state_31030[(2)]);
var inst_30999 = (inst_30998__$1 == null);
var inst_31000 = cljs.core.not.call(null,inst_30999);
var state_31030__$1 = (function (){var statearr_31035 = state_31030;
(statearr_31035[(9)] = inst_30998__$1);

return statearr_31035;
})();
if(inst_31000){
var statearr_31036_31067 = state_31030__$1;
(statearr_31036_31067[(1)] = (5));

} else {
var statearr_31037_31068 = state_31030__$1;
(statearr_31037_31068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (15))){
var inst_31020 = (state_31030[(2)]);
var state_31030__$1 = state_31030;
var statearr_31038_31069 = state_31030__$1;
(statearr_31038_31069[(2)] = inst_31020);

(statearr_31038_31069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (13))){
var state_31030__$1 = state_31030;
var statearr_31039_31070 = state_31030__$1;
(statearr_31039_31070[(2)] = null);

(statearr_31039_31070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (6))){
var inst_30995 = (state_31030[(8)]);
var inst_31016 = (inst_30995 > (0));
var state_31030__$1 = state_31030;
if(cljs.core.truth_(inst_31016)){
var statearr_31040_31071 = state_31030__$1;
(statearr_31040_31071[(1)] = (12));

} else {
var statearr_31041_31072 = state_31030__$1;
(statearr_31041_31072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (3))){
var inst_31028 = (state_31030[(2)]);
var state_31030__$1 = state_31030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31030__$1,inst_31028);
} else {
if((state_val_31031 === (12))){
var inst_30994 = (state_31030[(7)]);
var inst_31018 = cljs.core.vec.call(null,inst_30994);
var state_31030__$1 = state_31030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31030__$1,(15),out,inst_31018);
} else {
if((state_val_31031 === (2))){
var state_31030__$1 = state_31030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31030__$1,(4),ch);
} else {
if((state_val_31031 === (11))){
var inst_31010 = (state_31030[(2)]);
var inst_31011 = (new Array(n));
var inst_30994 = inst_31011;
var inst_30995 = (0);
var state_31030__$1 = (function (){var statearr_31042 = state_31030;
(statearr_31042[(10)] = inst_31010);

(statearr_31042[(7)] = inst_30994);

(statearr_31042[(8)] = inst_30995);

return statearr_31042;
})();
var statearr_31043_31073 = state_31030__$1;
(statearr_31043_31073[(2)] = null);

(statearr_31043_31073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (9))){
var inst_30994 = (state_31030[(7)]);
var inst_31008 = cljs.core.vec.call(null,inst_30994);
var state_31030__$1 = state_31030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31030__$1,(11),out,inst_31008);
} else {
if((state_val_31031 === (5))){
var inst_30994 = (state_31030[(7)]);
var inst_30998 = (state_31030[(9)]);
var inst_30995 = (state_31030[(8)]);
var inst_31003 = (state_31030[(11)]);
var inst_31002 = (inst_30994[inst_30995] = inst_30998);
var inst_31003__$1 = (inst_30995 + (1));
var inst_31004 = (inst_31003__$1 < n);
var state_31030__$1 = (function (){var statearr_31044 = state_31030;
(statearr_31044[(12)] = inst_31002);

(statearr_31044[(11)] = inst_31003__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_31004)){
var statearr_31045_31074 = state_31030__$1;
(statearr_31045_31074[(1)] = (8));

} else {
var statearr_31046_31075 = state_31030__$1;
(statearr_31046_31075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (14))){
var inst_31023 = (state_31030[(2)]);
var inst_31024 = cljs.core.async.close_BANG_.call(null,out);
var state_31030__$1 = (function (){var statearr_31048 = state_31030;
(statearr_31048[(13)] = inst_31023);

return statearr_31048;
})();
var statearr_31049_31076 = state_31030__$1;
(statearr_31049_31076[(2)] = inst_31024);

(statearr_31049_31076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (10))){
var inst_31014 = (state_31030[(2)]);
var state_31030__$1 = state_31030;
var statearr_31050_31077 = state_31030__$1;
(statearr_31050_31077[(2)] = inst_31014);

(statearr_31050_31077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (8))){
var inst_30994 = (state_31030[(7)]);
var inst_31003 = (state_31030[(11)]);
var tmp31047 = inst_30994;
var inst_30994__$1 = tmp31047;
var inst_30995 = inst_31003;
var state_31030__$1 = (function (){var statearr_31051 = state_31030;
(statearr_31051[(7)] = inst_30994__$1);

(statearr_31051[(8)] = inst_30995);

return statearr_31051;
})();
var statearr_31052_31078 = state_31030__$1;
(statearr_31052_31078[(2)] = null);

(statearr_31052_31078[(1)] = (2));


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
});})(c__28367__auto___31064,out))
;
return ((function (switch__28253__auto__,c__28367__auto___31064,out){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_31056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31056[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_31056[(1)] = (1));

return statearr_31056;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_31030){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_31030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e31057){if((e31057 instanceof Object)){
var ex__28257__auto__ = e31057;
var statearr_31058_31079 = state_31030;
(statearr_31058_31079[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31080 = state_31030;
state_31030 = G__31080;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_31030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_31030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___31064,out))
})();
var state__28369__auto__ = (function (){var statearr_31059 = f__28368__auto__.call(null);
(statearr_31059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___31064);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___31064,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31081 = [];
var len__22617__auto___31155 = arguments.length;
var i__22618__auto___31156 = (0);
while(true){
if((i__22618__auto___31156 < len__22617__auto___31155)){
args31081.push((arguments[i__22618__auto___31156]));

var G__31157 = (i__22618__auto___31156 + (1));
i__22618__auto___31156 = G__31157;
continue;
} else {
}
break;
}

var G__31083 = args31081.length;
switch (G__31083) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31081.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28367__auto___31159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___31159,out){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___31159,out){
return (function (state_31125){
var state_val_31126 = (state_31125[(1)]);
if((state_val_31126 === (7))){
var inst_31121 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31127_31160 = state_31125__$1;
(statearr_31127_31160[(2)] = inst_31121);

(statearr_31127_31160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (1))){
var inst_31084 = [];
var inst_31085 = inst_31084;
var inst_31086 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31125__$1 = (function (){var statearr_31128 = state_31125;
(statearr_31128[(7)] = inst_31086);

(statearr_31128[(8)] = inst_31085);

return statearr_31128;
})();
var statearr_31129_31161 = state_31125__$1;
(statearr_31129_31161[(2)] = null);

(statearr_31129_31161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (4))){
var inst_31089 = (state_31125[(9)]);
var inst_31089__$1 = (state_31125[(2)]);
var inst_31090 = (inst_31089__$1 == null);
var inst_31091 = cljs.core.not.call(null,inst_31090);
var state_31125__$1 = (function (){var statearr_31130 = state_31125;
(statearr_31130[(9)] = inst_31089__$1);

return statearr_31130;
})();
if(inst_31091){
var statearr_31131_31162 = state_31125__$1;
(statearr_31131_31162[(1)] = (5));

} else {
var statearr_31132_31163 = state_31125__$1;
(statearr_31132_31163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (15))){
var inst_31115 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31133_31164 = state_31125__$1;
(statearr_31133_31164[(2)] = inst_31115);

(statearr_31133_31164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (13))){
var state_31125__$1 = state_31125;
var statearr_31134_31165 = state_31125__$1;
(statearr_31134_31165[(2)] = null);

(statearr_31134_31165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (6))){
var inst_31085 = (state_31125[(8)]);
var inst_31110 = inst_31085.length;
var inst_31111 = (inst_31110 > (0));
var state_31125__$1 = state_31125;
if(cljs.core.truth_(inst_31111)){
var statearr_31135_31166 = state_31125__$1;
(statearr_31135_31166[(1)] = (12));

} else {
var statearr_31136_31167 = state_31125__$1;
(statearr_31136_31167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (3))){
var inst_31123 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31125__$1,inst_31123);
} else {
if((state_val_31126 === (12))){
var inst_31085 = (state_31125[(8)]);
var inst_31113 = cljs.core.vec.call(null,inst_31085);
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31125__$1,(15),out,inst_31113);
} else {
if((state_val_31126 === (2))){
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31125__$1,(4),ch);
} else {
if((state_val_31126 === (11))){
var inst_31089 = (state_31125[(9)]);
var inst_31093 = (state_31125[(10)]);
var inst_31103 = (state_31125[(2)]);
var inst_31104 = [];
var inst_31105 = inst_31104.push(inst_31089);
var inst_31085 = inst_31104;
var inst_31086 = inst_31093;
var state_31125__$1 = (function (){var statearr_31137 = state_31125;
(statearr_31137[(11)] = inst_31103);

(statearr_31137[(7)] = inst_31086);

(statearr_31137[(12)] = inst_31105);

(statearr_31137[(8)] = inst_31085);

return statearr_31137;
})();
var statearr_31138_31168 = state_31125__$1;
(statearr_31138_31168[(2)] = null);

(statearr_31138_31168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (9))){
var inst_31085 = (state_31125[(8)]);
var inst_31101 = cljs.core.vec.call(null,inst_31085);
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31125__$1,(11),out,inst_31101);
} else {
if((state_val_31126 === (5))){
var inst_31086 = (state_31125[(7)]);
var inst_31089 = (state_31125[(9)]);
var inst_31093 = (state_31125[(10)]);
var inst_31093__$1 = f.call(null,inst_31089);
var inst_31094 = cljs.core._EQ_.call(null,inst_31093__$1,inst_31086);
var inst_31095 = cljs.core.keyword_identical_QMARK_.call(null,inst_31086,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31096 = (inst_31094) || (inst_31095);
var state_31125__$1 = (function (){var statearr_31139 = state_31125;
(statearr_31139[(10)] = inst_31093__$1);

return statearr_31139;
})();
if(cljs.core.truth_(inst_31096)){
var statearr_31140_31169 = state_31125__$1;
(statearr_31140_31169[(1)] = (8));

} else {
var statearr_31141_31170 = state_31125__$1;
(statearr_31141_31170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (14))){
var inst_31118 = (state_31125[(2)]);
var inst_31119 = cljs.core.async.close_BANG_.call(null,out);
var state_31125__$1 = (function (){var statearr_31143 = state_31125;
(statearr_31143[(13)] = inst_31118);

return statearr_31143;
})();
var statearr_31144_31171 = state_31125__$1;
(statearr_31144_31171[(2)] = inst_31119);

(statearr_31144_31171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (10))){
var inst_31108 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31145_31172 = state_31125__$1;
(statearr_31145_31172[(2)] = inst_31108);

(statearr_31145_31172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (8))){
var inst_31089 = (state_31125[(9)]);
var inst_31093 = (state_31125[(10)]);
var inst_31085 = (state_31125[(8)]);
var inst_31098 = inst_31085.push(inst_31089);
var tmp31142 = inst_31085;
var inst_31085__$1 = tmp31142;
var inst_31086 = inst_31093;
var state_31125__$1 = (function (){var statearr_31146 = state_31125;
(statearr_31146[(7)] = inst_31086);

(statearr_31146[(14)] = inst_31098);

(statearr_31146[(8)] = inst_31085__$1);

return statearr_31146;
})();
var statearr_31147_31173 = state_31125__$1;
(statearr_31147_31173[(2)] = null);

(statearr_31147_31173[(1)] = (2));


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
});})(c__28367__auto___31159,out))
;
return ((function (switch__28253__auto__,c__28367__auto___31159,out){
return (function() {
var cljs$core$async$state_machine__28254__auto__ = null;
var cljs$core$async$state_machine__28254__auto____0 = (function (){
var statearr_31151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31151[(0)] = cljs$core$async$state_machine__28254__auto__);

(statearr_31151[(1)] = (1));

return statearr_31151;
});
var cljs$core$async$state_machine__28254__auto____1 = (function (state_31125){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_31125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e31152){if((e31152 instanceof Object)){
var ex__28257__auto__ = e31152;
var statearr_31153_31174 = state_31125;
(statearr_31153_31174[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31175 = state_31125;
state_31125 = G__31175;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
cljs$core$async$state_machine__28254__auto__ = function(state_31125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28254__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28254__auto____1.call(this,state_31125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28254__auto____0;
cljs$core$async$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28254__auto____1;
return cljs$core$async$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___31159,out))
})();
var state__28369__auto__ = (function (){var statearr_31154 = f__28368__auto__.call(null);
(statearr_31154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___31159);

return statearr_31154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___31159,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1468449912563