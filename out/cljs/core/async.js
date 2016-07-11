// Compiled by ClojureScript 1.9.76 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args31320 = [];
var len__29087__auto___31326 = arguments.length;
var i__29088__auto___31327 = (0);
while(true){
if((i__29088__auto___31327 < len__29087__auto___31326)){
args31320.push((arguments[i__29088__auto___31327]));

var G__31328 = (i__29088__auto___31327 + (1));
i__29088__auto___31327 = G__31328;
continue;
} else {
}
break;
}

var G__31322 = args31320.length;
switch (G__31322) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31320.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31323 = (function (f,blockable,meta31324){
this.f = f;
this.blockable = blockable;
this.meta31324 = meta31324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31325,meta31324__$1){
var self__ = this;
var _31325__$1 = this;
return (new cljs.core.async.t_cljs$core$async31323(self__.f,self__.blockable,meta31324__$1));
});

cljs.core.async.t_cljs$core$async31323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31325){
var self__ = this;
var _31325__$1 = this;
return self__.meta31324;
});

cljs.core.async.t_cljs$core$async31323.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31324","meta31324",1358694455,null)], null);
});

cljs.core.async.t_cljs$core$async31323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31323";

cljs.core.async.t_cljs$core$async31323.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async31323");
});

cljs.core.async.__GT_t_cljs$core$async31323 = (function cljs$core$async$__GT_t_cljs$core$async31323(f__$1,blockable__$1,meta31324){
return (new cljs.core.async.t_cljs$core$async31323(f__$1,blockable__$1,meta31324));
});

}

return (new cljs.core.async.t_cljs$core$async31323(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31332 = [];
var len__29087__auto___31335 = arguments.length;
var i__29088__auto___31336 = (0);
while(true){
if((i__29088__auto___31336 < len__29087__auto___31335)){
args31332.push((arguments[i__29088__auto___31336]));

var G__31337 = (i__29088__auto___31336 + (1));
i__29088__auto___31336 = G__31337;
continue;
} else {
}
break;
}

var G__31334 = args31332.length;
switch (G__31334) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31332.length)].join('')));

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
var args31339 = [];
var len__29087__auto___31342 = arguments.length;
var i__29088__auto___31343 = (0);
while(true){
if((i__29088__auto___31343 < len__29087__auto___31342)){
args31339.push((arguments[i__29088__auto___31343]));

var G__31344 = (i__29088__auto___31343 + (1));
i__29088__auto___31343 = G__31344;
continue;
} else {
}
break;
}

var G__31341 = args31339.length;
switch (G__31341) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31339.length)].join('')));

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
var args31346 = [];
var len__29087__auto___31349 = arguments.length;
var i__29088__auto___31350 = (0);
while(true){
if((i__29088__auto___31350 < len__29087__auto___31349)){
args31346.push((arguments[i__29088__auto___31350]));

var G__31351 = (i__29088__auto___31350 + (1));
i__29088__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var G__31348 = args31346.length;
switch (G__31348) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31346.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31353 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31353);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31353,ret){
return (function (){
return fn1.call(null,val_31353);
});})(val_31353,ret))
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
var args31354 = [];
var len__29087__auto___31357 = arguments.length;
var i__29088__auto___31358 = (0);
while(true){
if((i__29088__auto___31358 < len__29087__auto___31357)){
args31354.push((arguments[i__29088__auto___31358]));

var G__31359 = (i__29088__auto___31358 + (1));
i__29088__auto___31358 = G__31359;
continue;
} else {
}
break;
}

var G__31356 = args31354.length;
switch (G__31356) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31354.length)].join('')));

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
var n__28927__auto___31361 = n;
var x_31362 = (0);
while(true){
if((x_31362 < n__28927__auto___31361)){
(a[x_31362] = (0));

var G__31363 = (x_31362 + (1));
x_31362 = G__31363;
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

var G__31364 = (i + (1));
i = G__31364;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31368 = (function (alt_flag,flag,meta31369){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31369 = meta31369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31370,meta31369__$1){
var self__ = this;
var _31370__$1 = this;
return (new cljs.core.async.t_cljs$core$async31368(self__.alt_flag,self__.flag,meta31369__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31370){
var self__ = this;
var _31370__$1 = this;
return self__.meta31369;
});})(flag))
;

cljs.core.async.t_cljs$core$async31368.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31368.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31369","meta31369",287627812,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31368";

cljs.core.async.t_cljs$core$async31368.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async31368");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31368 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31368(alt_flag__$1,flag__$1,meta31369){
return (new cljs.core.async.t_cljs$core$async31368(alt_flag__$1,flag__$1,meta31369));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31368(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31374 = (function (alt_handler,flag,cb,meta31375){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31375 = meta31375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31376,meta31375__$1){
var self__ = this;
var _31376__$1 = this;
return (new cljs.core.async.t_cljs$core$async31374(self__.alt_handler,self__.flag,self__.cb,meta31375__$1));
});

cljs.core.async.t_cljs$core$async31374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31376){
var self__ = this;
var _31376__$1 = this;
return self__.meta31375;
});

cljs.core.async.t_cljs$core$async31374.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31375","meta31375",-1678165868,null)], null);
});

cljs.core.async.t_cljs$core$async31374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31374";

cljs.core.async.t_cljs$core$async31374.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async31374");
});

cljs.core.async.__GT_t_cljs$core$async31374 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31374(alt_handler__$1,flag__$1,cb__$1,meta31375){
return (new cljs.core.async.t_cljs$core$async31374(alt_handler__$1,flag__$1,cb__$1,meta31375));
});

}

return (new cljs.core.async.t_cljs$core$async31374(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31377_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31377_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31378_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31378_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28012__auto__ = wport;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31379 = (i + (1));
i = G__31379;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28012__auto__ = ret;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28000__auto__;
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
var args__29094__auto__ = [];
var len__29087__auto___31385 = arguments.length;
var i__29088__auto___31386 = (0);
while(true){
if((i__29088__auto___31386 < len__29087__auto___31385)){
args__29094__auto__.push((arguments[i__29088__auto___31386]));

var G__31387 = (i__29088__auto___31386 + (1));
i__29088__auto___31386 = G__31387;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31382){
var map__31383 = p__31382;
var map__31383__$1 = ((((!((map__31383 == null)))?((((map__31383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31383):map__31383);
var opts = map__31383__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31380){
var G__31381 = cljs.core.first.call(null,seq31380);
var seq31380__$1 = cljs.core.next.call(null,seq31380);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31381,seq31380__$1);
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
var args31388 = [];
var len__29087__auto___31438 = arguments.length;
var i__29088__auto___31439 = (0);
while(true){
if((i__29088__auto___31439 < len__29087__auto___31438)){
args31388.push((arguments[i__29088__auto___31439]));

var G__31440 = (i__29088__auto___31439 + (1));
i__29088__auto___31439 = G__31440;
continue;
} else {
}
break;
}

var G__31390 = args31388.length;
switch (G__31390) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31388.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30729__auto___31442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___31442){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___31442){
return (function (state_31414){
var state_val_31415 = (state_31414[(1)]);
if((state_val_31415 === (7))){
var inst_31410 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31416_31443 = state_31414__$1;
(statearr_31416_31443[(2)] = inst_31410);

(statearr_31416_31443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (1))){
var state_31414__$1 = state_31414;
var statearr_31417_31444 = state_31414__$1;
(statearr_31417_31444[(2)] = null);

(statearr_31417_31444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (4))){
var inst_31393 = (state_31414[(7)]);
var inst_31393__$1 = (state_31414[(2)]);
var inst_31394 = (inst_31393__$1 == null);
var state_31414__$1 = (function (){var statearr_31418 = state_31414;
(statearr_31418[(7)] = inst_31393__$1);

return statearr_31418;
})();
if(cljs.core.truth_(inst_31394)){
var statearr_31419_31445 = state_31414__$1;
(statearr_31419_31445[(1)] = (5));

} else {
var statearr_31420_31446 = state_31414__$1;
(statearr_31420_31446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (13))){
var state_31414__$1 = state_31414;
var statearr_31421_31447 = state_31414__$1;
(statearr_31421_31447[(2)] = null);

(statearr_31421_31447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (6))){
var inst_31393 = (state_31414[(7)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31414__$1,(11),to,inst_31393);
} else {
if((state_val_31415 === (3))){
var inst_31412 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31414__$1,inst_31412);
} else {
if((state_val_31415 === (12))){
var state_31414__$1 = state_31414;
var statearr_31422_31448 = state_31414__$1;
(statearr_31422_31448[(2)] = null);

(statearr_31422_31448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (2))){
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(4),from);
} else {
if((state_val_31415 === (11))){
var inst_31403 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31403)){
var statearr_31423_31449 = state_31414__$1;
(statearr_31423_31449[(1)] = (12));

} else {
var statearr_31424_31450 = state_31414__$1;
(statearr_31424_31450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (9))){
var state_31414__$1 = state_31414;
var statearr_31425_31451 = state_31414__$1;
(statearr_31425_31451[(2)] = null);

(statearr_31425_31451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (5))){
var state_31414__$1 = state_31414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31426_31452 = state_31414__$1;
(statearr_31426_31452[(1)] = (8));

} else {
var statearr_31427_31453 = state_31414__$1;
(statearr_31427_31453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (14))){
var inst_31408 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31428_31454 = state_31414__$1;
(statearr_31428_31454[(2)] = inst_31408);

(statearr_31428_31454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (10))){
var inst_31400 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31429_31455 = state_31414__$1;
(statearr_31429_31455[(2)] = inst_31400);

(statearr_31429_31455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (8))){
var inst_31397 = cljs.core.async.close_BANG_.call(null,to);
var state_31414__$1 = state_31414;
var statearr_31430_31456 = state_31414__$1;
(statearr_31430_31456[(2)] = inst_31397);

(statearr_31430_31456[(1)] = (10));


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
});})(c__30729__auto___31442))
;
return ((function (switch__30708__auto__,c__30729__auto___31442){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_31434 = [null,null,null,null,null,null,null,null];
(statearr_31434[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_31434[(1)] = (1));

return statearr_31434;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_31414){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_31414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31435){if((e31435 instanceof Object)){
var ex__30712__auto__ = e31435;
var statearr_31436_31457 = state_31414;
(statearr_31436_31457[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31458 = state_31414;
state_31414 = G__31458;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___31442))
})();
var state__30731__auto__ = (function (){var statearr_31437 = f__30730__auto__.call(null);
(statearr_31437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___31442);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___31442))
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
return (function (p__31646){
var vec__31647 = p__31646;
var v = cljs.core.nth.call(null,vec__31647,(0),null);
var p = cljs.core.nth.call(null,vec__31647,(1),null);
var job = vec__31647;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30729__auto___31833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___31833,res,vec__31647,v,p,job,jobs,results){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___31833,res,vec__31647,v,p,job,jobs,results){
return (function (state_31654){
var state_val_31655 = (state_31654[(1)]);
if((state_val_31655 === (1))){
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31654__$1,(2),res,v);
} else {
if((state_val_31655 === (2))){
var inst_31651 = (state_31654[(2)]);
var inst_31652 = cljs.core.async.close_BANG_.call(null,res);
var state_31654__$1 = (function (){var statearr_31656 = state_31654;
(statearr_31656[(7)] = inst_31651);

return statearr_31656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31654__$1,inst_31652);
} else {
return null;
}
}
});})(c__30729__auto___31833,res,vec__31647,v,p,job,jobs,results))
;
return ((function (switch__30708__auto__,c__30729__auto___31833,res,vec__31647,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31660 = [null,null,null,null,null,null,null,null];
(statearr_31660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31660[(1)] = (1));

return statearr_31660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31654){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_31654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31661){if((e31661 instanceof Object)){
var ex__30712__auto__ = e31661;
var statearr_31662_31834 = state_31654;
(statearr_31662_31834[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31835 = state_31654;
state_31654 = G__31835;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___31833,res,vec__31647,v,p,job,jobs,results))
})();
var state__30731__auto__ = (function (){var statearr_31663 = f__30730__auto__.call(null);
(statearr_31663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___31833);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___31833,res,vec__31647,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31664){
var vec__31665 = p__31664;
var v = cljs.core.nth.call(null,vec__31665,(0),null);
var p = cljs.core.nth.call(null,vec__31665,(1),null);
var job = vec__31665;
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
var n__28927__auto___31836 = n;
var __31837 = (0);
while(true){
if((__31837 < n__28927__auto___31836)){
var G__31668_31838 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31668_31838) {
case "compute":
var c__30729__auto___31840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31837,c__30729__auto___31840,G__31668_31838,n__28927__auto___31836,jobs,results,process,async){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (__31837,c__30729__auto___31840,G__31668_31838,n__28927__auto___31836,jobs,results,process,async){
return (function (state_31681){
var state_val_31682 = (state_31681[(1)]);
if((state_val_31682 === (1))){
var state_31681__$1 = state_31681;
var statearr_31683_31841 = state_31681__$1;
(statearr_31683_31841[(2)] = null);

(statearr_31683_31841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (2))){
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31681__$1,(4),jobs);
} else {
if((state_val_31682 === (3))){
var inst_31679 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31681__$1,inst_31679);
} else {
if((state_val_31682 === (4))){
var inst_31671 = (state_31681[(2)]);
var inst_31672 = process.call(null,inst_31671);
var state_31681__$1 = state_31681;
if(cljs.core.truth_(inst_31672)){
var statearr_31684_31842 = state_31681__$1;
(statearr_31684_31842[(1)] = (5));

} else {
var statearr_31685_31843 = state_31681__$1;
(statearr_31685_31843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (5))){
var state_31681__$1 = state_31681;
var statearr_31686_31844 = state_31681__$1;
(statearr_31686_31844[(2)] = null);

(statearr_31686_31844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (6))){
var state_31681__$1 = state_31681;
var statearr_31687_31845 = state_31681__$1;
(statearr_31687_31845[(2)] = null);

(statearr_31687_31845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (7))){
var inst_31677 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31688_31846 = state_31681__$1;
(statearr_31688_31846[(2)] = inst_31677);

(statearr_31688_31846[(1)] = (3));


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
});})(__31837,c__30729__auto___31840,G__31668_31838,n__28927__auto___31836,jobs,results,process,async))
;
return ((function (__31837,switch__30708__auto__,c__30729__auto___31840,G__31668_31838,n__28927__auto___31836,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31692 = [null,null,null,null,null,null,null];
(statearr_31692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31692[(1)] = (1));

return statearr_31692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31681){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_31681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31693){if((e31693 instanceof Object)){
var ex__30712__auto__ = e31693;
var statearr_31694_31847 = state_31681;
(statearr_31694_31847[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31848 = state_31681;
state_31681 = G__31848;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(__31837,switch__30708__auto__,c__30729__auto___31840,G__31668_31838,n__28927__auto___31836,jobs,results,process,async))
})();
var state__30731__auto__ = (function (){var statearr_31695 = f__30730__auto__.call(null);
(statearr_31695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___31840);

return statearr_31695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(__31837,c__30729__auto___31840,G__31668_31838,n__28927__auto___31836,jobs,results,process,async))
);


break;
case "async":
var c__30729__auto___31849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31837,c__30729__auto___31849,G__31668_31838,n__28927__auto___31836,jobs,results,process,async){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (__31837,c__30729__auto___31849,G__31668_31838,n__28927__auto___31836,jobs,results,process,async){
return (function (state_31708){
var state_val_31709 = (state_31708[(1)]);
if((state_val_31709 === (1))){
var state_31708__$1 = state_31708;
var statearr_31710_31850 = state_31708__$1;
(statearr_31710_31850[(2)] = null);

(statearr_31710_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (2))){
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31708__$1,(4),jobs);
} else {
if((state_val_31709 === (3))){
var inst_31706 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31708__$1,inst_31706);
} else {
if((state_val_31709 === (4))){
var inst_31698 = (state_31708[(2)]);
var inst_31699 = async.call(null,inst_31698);
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31699)){
var statearr_31711_31851 = state_31708__$1;
(statearr_31711_31851[(1)] = (5));

} else {
var statearr_31712_31852 = state_31708__$1;
(statearr_31712_31852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (5))){
var state_31708__$1 = state_31708;
var statearr_31713_31853 = state_31708__$1;
(statearr_31713_31853[(2)] = null);

(statearr_31713_31853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (6))){
var state_31708__$1 = state_31708;
var statearr_31714_31854 = state_31708__$1;
(statearr_31714_31854[(2)] = null);

(statearr_31714_31854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (7))){
var inst_31704 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31715_31855 = state_31708__$1;
(statearr_31715_31855[(2)] = inst_31704);

(statearr_31715_31855[(1)] = (3));


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
});})(__31837,c__30729__auto___31849,G__31668_31838,n__28927__auto___31836,jobs,results,process,async))
;
return ((function (__31837,switch__30708__auto__,c__30729__auto___31849,G__31668_31838,n__28927__auto___31836,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31719 = [null,null,null,null,null,null,null];
(statearr_31719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31719[(1)] = (1));

return statearr_31719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31708){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_31708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31720){if((e31720 instanceof Object)){
var ex__30712__auto__ = e31720;
var statearr_31721_31856 = state_31708;
(statearr_31721_31856[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31857 = state_31708;
state_31708 = G__31857;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(__31837,switch__30708__auto__,c__30729__auto___31849,G__31668_31838,n__28927__auto___31836,jobs,results,process,async))
})();
var state__30731__auto__ = (function (){var statearr_31722 = f__30730__auto__.call(null);
(statearr_31722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___31849);

return statearr_31722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(__31837,c__30729__auto___31849,G__31668_31838,n__28927__auto___31836,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31858 = (__31837 + (1));
__31837 = G__31858;
continue;
} else {
}
break;
}

var c__30729__auto___31859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___31859,jobs,results,process,async){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___31859,jobs,results,process,async){
return (function (state_31744){
var state_val_31745 = (state_31744[(1)]);
if((state_val_31745 === (1))){
var state_31744__$1 = state_31744;
var statearr_31746_31860 = state_31744__$1;
(statearr_31746_31860[(2)] = null);

(statearr_31746_31860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (2))){
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(4),from);
} else {
if((state_val_31745 === (3))){
var inst_31742 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31744__$1,inst_31742);
} else {
if((state_val_31745 === (4))){
var inst_31725 = (state_31744[(7)]);
var inst_31725__$1 = (state_31744[(2)]);
var inst_31726 = (inst_31725__$1 == null);
var state_31744__$1 = (function (){var statearr_31747 = state_31744;
(statearr_31747[(7)] = inst_31725__$1);

return statearr_31747;
})();
if(cljs.core.truth_(inst_31726)){
var statearr_31748_31861 = state_31744__$1;
(statearr_31748_31861[(1)] = (5));

} else {
var statearr_31749_31862 = state_31744__$1;
(statearr_31749_31862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (5))){
var inst_31728 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31744__$1 = state_31744;
var statearr_31750_31863 = state_31744__$1;
(statearr_31750_31863[(2)] = inst_31728);

(statearr_31750_31863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (6))){
var inst_31725 = (state_31744[(7)]);
var inst_31730 = (state_31744[(8)]);
var inst_31730__$1 = cljs.core.async.chan.call(null,(1));
var inst_31731 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31732 = [inst_31725,inst_31730__$1];
var inst_31733 = (new cljs.core.PersistentVector(null,2,(5),inst_31731,inst_31732,null));
var state_31744__$1 = (function (){var statearr_31751 = state_31744;
(statearr_31751[(8)] = inst_31730__$1);

return statearr_31751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31744__$1,(8),jobs,inst_31733);
} else {
if((state_val_31745 === (7))){
var inst_31740 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31752_31864 = state_31744__$1;
(statearr_31752_31864[(2)] = inst_31740);

(statearr_31752_31864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (8))){
var inst_31730 = (state_31744[(8)]);
var inst_31735 = (state_31744[(2)]);
var state_31744__$1 = (function (){var statearr_31753 = state_31744;
(statearr_31753[(9)] = inst_31735);

return statearr_31753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31744__$1,(9),results,inst_31730);
} else {
if((state_val_31745 === (9))){
var inst_31737 = (state_31744[(2)]);
var state_31744__$1 = (function (){var statearr_31754 = state_31744;
(statearr_31754[(10)] = inst_31737);

return statearr_31754;
})();
var statearr_31755_31865 = state_31744__$1;
(statearr_31755_31865[(2)] = null);

(statearr_31755_31865[(1)] = (2));


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
});})(c__30729__auto___31859,jobs,results,process,async))
;
return ((function (switch__30708__auto__,c__30729__auto___31859,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31759[(1)] = (1));

return statearr_31759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31744){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_31744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31760){if((e31760 instanceof Object)){
var ex__30712__auto__ = e31760;
var statearr_31761_31866 = state_31744;
(statearr_31761_31866[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31867 = state_31744;
state_31744 = G__31867;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___31859,jobs,results,process,async))
})();
var state__30731__auto__ = (function (){var statearr_31762 = f__30730__auto__.call(null);
(statearr_31762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___31859);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___31859,jobs,results,process,async))
);


var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__,jobs,results,process,async){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__,jobs,results,process,async){
return (function (state_31800){
var state_val_31801 = (state_31800[(1)]);
if((state_val_31801 === (7))){
var inst_31796 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31802_31868 = state_31800__$1;
(statearr_31802_31868[(2)] = inst_31796);

(statearr_31802_31868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (20))){
var state_31800__$1 = state_31800;
var statearr_31803_31869 = state_31800__$1;
(statearr_31803_31869[(2)] = null);

(statearr_31803_31869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (1))){
var state_31800__$1 = state_31800;
var statearr_31804_31870 = state_31800__$1;
(statearr_31804_31870[(2)] = null);

(statearr_31804_31870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (4))){
var inst_31765 = (state_31800[(7)]);
var inst_31765__$1 = (state_31800[(2)]);
var inst_31766 = (inst_31765__$1 == null);
var state_31800__$1 = (function (){var statearr_31805 = state_31800;
(statearr_31805[(7)] = inst_31765__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31766)){
var statearr_31806_31871 = state_31800__$1;
(statearr_31806_31871[(1)] = (5));

} else {
var statearr_31807_31872 = state_31800__$1;
(statearr_31807_31872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (15))){
var inst_31778 = (state_31800[(8)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31800__$1,(18),to,inst_31778);
} else {
if((state_val_31801 === (21))){
var inst_31791 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31808_31873 = state_31800__$1;
(statearr_31808_31873[(2)] = inst_31791);

(statearr_31808_31873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (13))){
var inst_31793 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31809 = state_31800;
(statearr_31809[(9)] = inst_31793);

return statearr_31809;
})();
var statearr_31810_31874 = state_31800__$1;
(statearr_31810_31874[(2)] = null);

(statearr_31810_31874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (6))){
var inst_31765 = (state_31800[(7)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31800__$1,(11),inst_31765);
} else {
if((state_val_31801 === (17))){
var inst_31786 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31786)){
var statearr_31811_31875 = state_31800__$1;
(statearr_31811_31875[(1)] = (19));

} else {
var statearr_31812_31876 = state_31800__$1;
(statearr_31812_31876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (3))){
var inst_31798 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31800__$1,inst_31798);
} else {
if((state_val_31801 === (12))){
var inst_31775 = (state_31800[(10)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31800__$1,(14),inst_31775);
} else {
if((state_val_31801 === (2))){
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31800__$1,(4),results);
} else {
if((state_val_31801 === (19))){
var state_31800__$1 = state_31800;
var statearr_31813_31877 = state_31800__$1;
(statearr_31813_31877[(2)] = null);

(statearr_31813_31877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (11))){
var inst_31775 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31814 = state_31800;
(statearr_31814[(10)] = inst_31775);

return statearr_31814;
})();
var statearr_31815_31878 = state_31800__$1;
(statearr_31815_31878[(2)] = null);

(statearr_31815_31878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (9))){
var state_31800__$1 = state_31800;
var statearr_31816_31879 = state_31800__$1;
(statearr_31816_31879[(2)] = null);

(statearr_31816_31879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (5))){
var state_31800__$1 = state_31800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31817_31880 = state_31800__$1;
(statearr_31817_31880[(1)] = (8));

} else {
var statearr_31818_31881 = state_31800__$1;
(statearr_31818_31881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (14))){
var inst_31778 = (state_31800[(8)]);
var inst_31780 = (state_31800[(11)]);
var inst_31778__$1 = (state_31800[(2)]);
var inst_31779 = (inst_31778__$1 == null);
var inst_31780__$1 = cljs.core.not.call(null,inst_31779);
var state_31800__$1 = (function (){var statearr_31819 = state_31800;
(statearr_31819[(8)] = inst_31778__$1);

(statearr_31819[(11)] = inst_31780__$1);

return statearr_31819;
})();
if(inst_31780__$1){
var statearr_31820_31882 = state_31800__$1;
(statearr_31820_31882[(1)] = (15));

} else {
var statearr_31821_31883 = state_31800__$1;
(statearr_31821_31883[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (16))){
var inst_31780 = (state_31800[(11)]);
var state_31800__$1 = state_31800;
var statearr_31822_31884 = state_31800__$1;
(statearr_31822_31884[(2)] = inst_31780);

(statearr_31822_31884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (10))){
var inst_31772 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31823_31885 = state_31800__$1;
(statearr_31823_31885[(2)] = inst_31772);

(statearr_31823_31885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (18))){
var inst_31783 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31824_31886 = state_31800__$1;
(statearr_31824_31886[(2)] = inst_31783);

(statearr_31824_31886[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (8))){
var inst_31769 = cljs.core.async.close_BANG_.call(null,to);
var state_31800__$1 = state_31800;
var statearr_31825_31887 = state_31800__$1;
(statearr_31825_31887[(2)] = inst_31769);

(statearr_31825_31887[(1)] = (10));


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
});})(c__30729__auto__,jobs,results,process,async))
;
return ((function (switch__30708__auto__,c__30729__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31829[(1)] = (1));

return statearr_31829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31800){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_31800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31830){if((e31830 instanceof Object)){
var ex__30712__auto__ = e31830;
var statearr_31831_31888 = state_31800;
(statearr_31831_31888[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31889 = state_31800;
state_31800 = G__31889;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__,jobs,results,process,async))
})();
var state__30731__auto__ = (function (){var statearr_31832 = f__30730__auto__.call(null);
(statearr_31832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_31832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__,jobs,results,process,async))
);

return c__30729__auto__;
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
var args31890 = [];
var len__29087__auto___31893 = arguments.length;
var i__29088__auto___31894 = (0);
while(true){
if((i__29088__auto___31894 < len__29087__auto___31893)){
args31890.push((arguments[i__29088__auto___31894]));

var G__31895 = (i__29088__auto___31894 + (1));
i__29088__auto___31894 = G__31895;
continue;
} else {
}
break;
}

var G__31892 = args31890.length;
switch (G__31892) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31890.length)].join('')));

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
var args31897 = [];
var len__29087__auto___31900 = arguments.length;
var i__29088__auto___31901 = (0);
while(true){
if((i__29088__auto___31901 < len__29087__auto___31900)){
args31897.push((arguments[i__29088__auto___31901]));

var G__31902 = (i__29088__auto___31901 + (1));
i__29088__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var G__31899 = args31897.length;
switch (G__31899) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31897.length)].join('')));

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
var args31904 = [];
var len__29087__auto___31957 = arguments.length;
var i__29088__auto___31958 = (0);
while(true){
if((i__29088__auto___31958 < len__29087__auto___31957)){
args31904.push((arguments[i__29088__auto___31958]));

var G__31959 = (i__29088__auto___31958 + (1));
i__29088__auto___31958 = G__31959;
continue;
} else {
}
break;
}

var G__31906 = args31904.length;
switch (G__31906) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31904.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30729__auto___31961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___31961,tc,fc){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___31961,tc,fc){
return (function (state_31932){
var state_val_31933 = (state_31932[(1)]);
if((state_val_31933 === (7))){
var inst_31928 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31934_31962 = state_31932__$1;
(statearr_31934_31962[(2)] = inst_31928);

(statearr_31934_31962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (1))){
var state_31932__$1 = state_31932;
var statearr_31935_31963 = state_31932__$1;
(statearr_31935_31963[(2)] = null);

(statearr_31935_31963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (4))){
var inst_31909 = (state_31932[(7)]);
var inst_31909__$1 = (state_31932[(2)]);
var inst_31910 = (inst_31909__$1 == null);
var state_31932__$1 = (function (){var statearr_31936 = state_31932;
(statearr_31936[(7)] = inst_31909__$1);

return statearr_31936;
})();
if(cljs.core.truth_(inst_31910)){
var statearr_31937_31964 = state_31932__$1;
(statearr_31937_31964[(1)] = (5));

} else {
var statearr_31938_31965 = state_31932__$1;
(statearr_31938_31965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (13))){
var state_31932__$1 = state_31932;
var statearr_31939_31966 = state_31932__$1;
(statearr_31939_31966[(2)] = null);

(statearr_31939_31966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (6))){
var inst_31909 = (state_31932[(7)]);
var inst_31915 = p.call(null,inst_31909);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31915)){
var statearr_31940_31967 = state_31932__$1;
(statearr_31940_31967[(1)] = (9));

} else {
var statearr_31941_31968 = state_31932__$1;
(statearr_31941_31968[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (3))){
var inst_31930 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31932__$1,inst_31930);
} else {
if((state_val_31933 === (12))){
var state_31932__$1 = state_31932;
var statearr_31942_31969 = state_31932__$1;
(statearr_31942_31969[(2)] = null);

(statearr_31942_31969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (2))){
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(4),ch);
} else {
if((state_val_31933 === (11))){
var inst_31909 = (state_31932[(7)]);
var inst_31919 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31932__$1,(8),inst_31919,inst_31909);
} else {
if((state_val_31933 === (9))){
var state_31932__$1 = state_31932;
var statearr_31943_31970 = state_31932__$1;
(statearr_31943_31970[(2)] = tc);

(statearr_31943_31970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (5))){
var inst_31912 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31913 = cljs.core.async.close_BANG_.call(null,fc);
var state_31932__$1 = (function (){var statearr_31944 = state_31932;
(statearr_31944[(8)] = inst_31912);

return statearr_31944;
})();
var statearr_31945_31971 = state_31932__$1;
(statearr_31945_31971[(2)] = inst_31913);

(statearr_31945_31971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (14))){
var inst_31926 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31946_31972 = state_31932__$1;
(statearr_31946_31972[(2)] = inst_31926);

(statearr_31946_31972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (10))){
var state_31932__$1 = state_31932;
var statearr_31947_31973 = state_31932__$1;
(statearr_31947_31973[(2)] = fc);

(statearr_31947_31973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (8))){
var inst_31921 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31921)){
var statearr_31948_31974 = state_31932__$1;
(statearr_31948_31974[(1)] = (12));

} else {
var statearr_31949_31975 = state_31932__$1;
(statearr_31949_31975[(1)] = (13));

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
});})(c__30729__auto___31961,tc,fc))
;
return ((function (switch__30708__auto__,c__30729__auto___31961,tc,fc){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_31953 = [null,null,null,null,null,null,null,null,null];
(statearr_31953[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_31953[(1)] = (1));

return statearr_31953;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_31932){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_31932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31954){if((e31954 instanceof Object)){
var ex__30712__auto__ = e31954;
var statearr_31955_31976 = state_31932;
(statearr_31955_31976[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31977 = state_31932;
state_31932 = G__31977;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_31932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_31932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___31961,tc,fc))
})();
var state__30731__auto__ = (function (){var statearr_31956 = f__30730__auto__.call(null);
(statearr_31956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___31961);

return statearr_31956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___31961,tc,fc))
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
var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__){
return (function (state_32041){
var state_val_32042 = (state_32041[(1)]);
if((state_val_32042 === (7))){
var inst_32037 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32043_32064 = state_32041__$1;
(statearr_32043_32064[(2)] = inst_32037);

(statearr_32043_32064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (1))){
var inst_32021 = init;
var state_32041__$1 = (function (){var statearr_32044 = state_32041;
(statearr_32044[(7)] = inst_32021);

return statearr_32044;
})();
var statearr_32045_32065 = state_32041__$1;
(statearr_32045_32065[(2)] = null);

(statearr_32045_32065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (4))){
var inst_32024 = (state_32041[(8)]);
var inst_32024__$1 = (state_32041[(2)]);
var inst_32025 = (inst_32024__$1 == null);
var state_32041__$1 = (function (){var statearr_32046 = state_32041;
(statearr_32046[(8)] = inst_32024__$1);

return statearr_32046;
})();
if(cljs.core.truth_(inst_32025)){
var statearr_32047_32066 = state_32041__$1;
(statearr_32047_32066[(1)] = (5));

} else {
var statearr_32048_32067 = state_32041__$1;
(statearr_32048_32067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (6))){
var inst_32024 = (state_32041[(8)]);
var inst_32021 = (state_32041[(7)]);
var inst_32028 = (state_32041[(9)]);
var inst_32028__$1 = f.call(null,inst_32021,inst_32024);
var inst_32029 = cljs.core.reduced_QMARK_.call(null,inst_32028__$1);
var state_32041__$1 = (function (){var statearr_32049 = state_32041;
(statearr_32049[(9)] = inst_32028__$1);

return statearr_32049;
})();
if(inst_32029){
var statearr_32050_32068 = state_32041__$1;
(statearr_32050_32068[(1)] = (8));

} else {
var statearr_32051_32069 = state_32041__$1;
(statearr_32051_32069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (3))){
var inst_32039 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32041__$1,inst_32039);
} else {
if((state_val_32042 === (2))){
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32041__$1,(4),ch);
} else {
if((state_val_32042 === (9))){
var inst_32028 = (state_32041[(9)]);
var inst_32021 = inst_32028;
var state_32041__$1 = (function (){var statearr_32052 = state_32041;
(statearr_32052[(7)] = inst_32021);

return statearr_32052;
})();
var statearr_32053_32070 = state_32041__$1;
(statearr_32053_32070[(2)] = null);

(statearr_32053_32070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (5))){
var inst_32021 = (state_32041[(7)]);
var state_32041__$1 = state_32041;
var statearr_32054_32071 = state_32041__$1;
(statearr_32054_32071[(2)] = inst_32021);

(statearr_32054_32071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (10))){
var inst_32035 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32055_32072 = state_32041__$1;
(statearr_32055_32072[(2)] = inst_32035);

(statearr_32055_32072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (8))){
var inst_32028 = (state_32041[(9)]);
var inst_32031 = cljs.core.deref.call(null,inst_32028);
var state_32041__$1 = state_32041;
var statearr_32056_32073 = state_32041__$1;
(statearr_32056_32073[(2)] = inst_32031);

(statearr_32056_32073[(1)] = (10));


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
});})(c__30729__auto__))
;
return ((function (switch__30708__auto__,c__30729__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30709__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30709__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = cljs$core$async$reduce_$_state_machine__30709__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var cljs$core$async$reduce_$_state_machine__30709__auto____1 = (function (state_32041){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_32041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32061){if((e32061 instanceof Object)){
var ex__30712__auto__ = e32061;
var statearr_32062_32074 = state_32041;
(statearr_32062_32074[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32075 = state_32041;
state_32041 = G__32075;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30709__auto__ = function(state_32041){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30709__auto____1.call(this,state_32041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30709__auto____0;
cljs$core$async$reduce_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30709__auto____1;
return cljs$core$async$reduce_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__))
})();
var state__30731__auto__ = (function (){var statearr_32063 = f__30730__auto__.call(null);
(statearr_32063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_32063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__))
);

return c__30729__auto__;
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
var args32076 = [];
var len__29087__auto___32128 = arguments.length;
var i__29088__auto___32129 = (0);
while(true){
if((i__29088__auto___32129 < len__29087__auto___32128)){
args32076.push((arguments[i__29088__auto___32129]));

var G__32130 = (i__29088__auto___32129 + (1));
i__29088__auto___32129 = G__32130;
continue;
} else {
}
break;
}

var G__32078 = args32076.length;
switch (G__32078) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32076.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__){
return (function (state_32103){
var state_val_32104 = (state_32103[(1)]);
if((state_val_32104 === (7))){
var inst_32085 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32105_32132 = state_32103__$1;
(statearr_32105_32132[(2)] = inst_32085);

(statearr_32105_32132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (1))){
var inst_32079 = cljs.core.seq.call(null,coll);
var inst_32080 = inst_32079;
var state_32103__$1 = (function (){var statearr_32106 = state_32103;
(statearr_32106[(7)] = inst_32080);

return statearr_32106;
})();
var statearr_32107_32133 = state_32103__$1;
(statearr_32107_32133[(2)] = null);

(statearr_32107_32133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (4))){
var inst_32080 = (state_32103[(7)]);
var inst_32083 = cljs.core.first.call(null,inst_32080);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32103__$1,(7),ch,inst_32083);
} else {
if((state_val_32104 === (13))){
var inst_32097 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32108_32134 = state_32103__$1;
(statearr_32108_32134[(2)] = inst_32097);

(statearr_32108_32134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (6))){
var inst_32088 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
if(cljs.core.truth_(inst_32088)){
var statearr_32109_32135 = state_32103__$1;
(statearr_32109_32135[(1)] = (8));

} else {
var statearr_32110_32136 = state_32103__$1;
(statearr_32110_32136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (3))){
var inst_32101 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32103__$1,inst_32101);
} else {
if((state_val_32104 === (12))){
var state_32103__$1 = state_32103;
var statearr_32111_32137 = state_32103__$1;
(statearr_32111_32137[(2)] = null);

(statearr_32111_32137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (2))){
var inst_32080 = (state_32103[(7)]);
var state_32103__$1 = state_32103;
if(cljs.core.truth_(inst_32080)){
var statearr_32112_32138 = state_32103__$1;
(statearr_32112_32138[(1)] = (4));

} else {
var statearr_32113_32139 = state_32103__$1;
(statearr_32113_32139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (11))){
var inst_32094 = cljs.core.async.close_BANG_.call(null,ch);
var state_32103__$1 = state_32103;
var statearr_32114_32140 = state_32103__$1;
(statearr_32114_32140[(2)] = inst_32094);

(statearr_32114_32140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (9))){
var state_32103__$1 = state_32103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32115_32141 = state_32103__$1;
(statearr_32115_32141[(1)] = (11));

} else {
var statearr_32116_32142 = state_32103__$1;
(statearr_32116_32142[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (5))){
var inst_32080 = (state_32103[(7)]);
var state_32103__$1 = state_32103;
var statearr_32117_32143 = state_32103__$1;
(statearr_32117_32143[(2)] = inst_32080);

(statearr_32117_32143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (10))){
var inst_32099 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32118_32144 = state_32103__$1;
(statearr_32118_32144[(2)] = inst_32099);

(statearr_32118_32144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (8))){
var inst_32080 = (state_32103[(7)]);
var inst_32090 = cljs.core.next.call(null,inst_32080);
var inst_32080__$1 = inst_32090;
var state_32103__$1 = (function (){var statearr_32119 = state_32103;
(statearr_32119[(7)] = inst_32080__$1);

return statearr_32119;
})();
var statearr_32120_32145 = state_32103__$1;
(statearr_32120_32145[(2)] = null);

(statearr_32120_32145[(1)] = (2));


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
});})(c__30729__auto__))
;
return ((function (switch__30708__auto__,c__30729__auto__){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32124 = [null,null,null,null,null,null,null,null];
(statearr_32124[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32124[(1)] = (1));

return statearr_32124;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32103){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_32103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32125){if((e32125 instanceof Object)){
var ex__30712__auto__ = e32125;
var statearr_32126_32146 = state_32103;
(statearr_32126_32146[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32147 = state_32103;
state_32103 = G__32147;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__))
})();
var state__30731__auto__ = (function (){var statearr_32127 = f__30730__auto__.call(null);
(statearr_32127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_32127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__))
);

return c__30729__auto__;
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
var x__28675__auto__ = (((_ == null))?null:_);
var m__28676__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,_);
} else {
var m__28676__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,_);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28676__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m);
} else {
var m__28676__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32373 = (function (mult,ch,cs,meta32374){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32374 = meta32374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32375,meta32374__$1){
var self__ = this;
var _32375__$1 = this;
return (new cljs.core.async.t_cljs$core$async32373(self__.mult,self__.ch,self__.cs,meta32374__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32375){
var self__ = this;
var _32375__$1 = this;
return self__.meta32374;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32374","meta32374",-1932036164,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32373";

cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async32373");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32373 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32373(mult__$1,ch__$1,cs__$1,meta32374){
return (new cljs.core.async.t_cljs$core$async32373(mult__$1,ch__$1,cs__$1,meta32374));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32373(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30729__auto___32598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___32598,cs,m,dchan,dctr,done){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___32598,cs,m,dchan,dctr,done){
return (function (state_32510){
var state_val_32511 = (state_32510[(1)]);
if((state_val_32511 === (7))){
var inst_32506 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32512_32599 = state_32510__$1;
(statearr_32512_32599[(2)] = inst_32506);

(statearr_32512_32599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (20))){
var inst_32409 = (state_32510[(7)]);
var inst_32421 = cljs.core.first.call(null,inst_32409);
var inst_32422 = cljs.core.nth.call(null,inst_32421,(0),null);
var inst_32423 = cljs.core.nth.call(null,inst_32421,(1),null);
var state_32510__$1 = (function (){var statearr_32513 = state_32510;
(statearr_32513[(8)] = inst_32422);

return statearr_32513;
})();
if(cljs.core.truth_(inst_32423)){
var statearr_32514_32600 = state_32510__$1;
(statearr_32514_32600[(1)] = (22));

} else {
var statearr_32515_32601 = state_32510__$1;
(statearr_32515_32601[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (27))){
var inst_32458 = (state_32510[(9)]);
var inst_32378 = (state_32510[(10)]);
var inst_32453 = (state_32510[(11)]);
var inst_32451 = (state_32510[(12)]);
var inst_32458__$1 = cljs.core._nth.call(null,inst_32451,inst_32453);
var inst_32459 = cljs.core.async.put_BANG_.call(null,inst_32458__$1,inst_32378,done);
var state_32510__$1 = (function (){var statearr_32516 = state_32510;
(statearr_32516[(9)] = inst_32458__$1);

return statearr_32516;
})();
if(cljs.core.truth_(inst_32459)){
var statearr_32517_32602 = state_32510__$1;
(statearr_32517_32602[(1)] = (30));

} else {
var statearr_32518_32603 = state_32510__$1;
(statearr_32518_32603[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (1))){
var state_32510__$1 = state_32510;
var statearr_32519_32604 = state_32510__$1;
(statearr_32519_32604[(2)] = null);

(statearr_32519_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (24))){
var inst_32409 = (state_32510[(7)]);
var inst_32428 = (state_32510[(2)]);
var inst_32429 = cljs.core.next.call(null,inst_32409);
var inst_32387 = inst_32429;
var inst_32388 = null;
var inst_32389 = (0);
var inst_32390 = (0);
var state_32510__$1 = (function (){var statearr_32520 = state_32510;
(statearr_32520[(13)] = inst_32388);

(statearr_32520[(14)] = inst_32387);

(statearr_32520[(15)] = inst_32428);

(statearr_32520[(16)] = inst_32390);

(statearr_32520[(17)] = inst_32389);

return statearr_32520;
})();
var statearr_32521_32605 = state_32510__$1;
(statearr_32521_32605[(2)] = null);

(statearr_32521_32605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (39))){
var state_32510__$1 = state_32510;
var statearr_32525_32606 = state_32510__$1;
(statearr_32525_32606[(2)] = null);

(statearr_32525_32606[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (4))){
var inst_32378 = (state_32510[(10)]);
var inst_32378__$1 = (state_32510[(2)]);
var inst_32379 = (inst_32378__$1 == null);
var state_32510__$1 = (function (){var statearr_32526 = state_32510;
(statearr_32526[(10)] = inst_32378__$1);

return statearr_32526;
})();
if(cljs.core.truth_(inst_32379)){
var statearr_32527_32607 = state_32510__$1;
(statearr_32527_32607[(1)] = (5));

} else {
var statearr_32528_32608 = state_32510__$1;
(statearr_32528_32608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (15))){
var inst_32388 = (state_32510[(13)]);
var inst_32387 = (state_32510[(14)]);
var inst_32390 = (state_32510[(16)]);
var inst_32389 = (state_32510[(17)]);
var inst_32405 = (state_32510[(2)]);
var inst_32406 = (inst_32390 + (1));
var tmp32522 = inst_32388;
var tmp32523 = inst_32387;
var tmp32524 = inst_32389;
var inst_32387__$1 = tmp32523;
var inst_32388__$1 = tmp32522;
var inst_32389__$1 = tmp32524;
var inst_32390__$1 = inst_32406;
var state_32510__$1 = (function (){var statearr_32529 = state_32510;
(statearr_32529[(13)] = inst_32388__$1);

(statearr_32529[(14)] = inst_32387__$1);

(statearr_32529[(16)] = inst_32390__$1);

(statearr_32529[(18)] = inst_32405);

(statearr_32529[(17)] = inst_32389__$1);

return statearr_32529;
})();
var statearr_32530_32609 = state_32510__$1;
(statearr_32530_32609[(2)] = null);

(statearr_32530_32609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (21))){
var inst_32432 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32534_32610 = state_32510__$1;
(statearr_32534_32610[(2)] = inst_32432);

(statearr_32534_32610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (31))){
var inst_32458 = (state_32510[(9)]);
var inst_32462 = done.call(null,null);
var inst_32463 = cljs.core.async.untap_STAR_.call(null,m,inst_32458);
var state_32510__$1 = (function (){var statearr_32535 = state_32510;
(statearr_32535[(19)] = inst_32462);

return statearr_32535;
})();
var statearr_32536_32611 = state_32510__$1;
(statearr_32536_32611[(2)] = inst_32463);

(statearr_32536_32611[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (32))){
var inst_32453 = (state_32510[(11)]);
var inst_32451 = (state_32510[(12)]);
var inst_32452 = (state_32510[(20)]);
var inst_32450 = (state_32510[(21)]);
var inst_32465 = (state_32510[(2)]);
var inst_32466 = (inst_32453 + (1));
var tmp32531 = inst_32451;
var tmp32532 = inst_32452;
var tmp32533 = inst_32450;
var inst_32450__$1 = tmp32533;
var inst_32451__$1 = tmp32531;
var inst_32452__$1 = tmp32532;
var inst_32453__$1 = inst_32466;
var state_32510__$1 = (function (){var statearr_32537 = state_32510;
(statearr_32537[(22)] = inst_32465);

(statearr_32537[(11)] = inst_32453__$1);

(statearr_32537[(12)] = inst_32451__$1);

(statearr_32537[(20)] = inst_32452__$1);

(statearr_32537[(21)] = inst_32450__$1);

return statearr_32537;
})();
var statearr_32538_32612 = state_32510__$1;
(statearr_32538_32612[(2)] = null);

(statearr_32538_32612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (40))){
var inst_32478 = (state_32510[(23)]);
var inst_32482 = done.call(null,null);
var inst_32483 = cljs.core.async.untap_STAR_.call(null,m,inst_32478);
var state_32510__$1 = (function (){var statearr_32539 = state_32510;
(statearr_32539[(24)] = inst_32482);

return statearr_32539;
})();
var statearr_32540_32613 = state_32510__$1;
(statearr_32540_32613[(2)] = inst_32483);

(statearr_32540_32613[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (33))){
var inst_32469 = (state_32510[(25)]);
var inst_32471 = cljs.core.chunked_seq_QMARK_.call(null,inst_32469);
var state_32510__$1 = state_32510;
if(inst_32471){
var statearr_32541_32614 = state_32510__$1;
(statearr_32541_32614[(1)] = (36));

} else {
var statearr_32542_32615 = state_32510__$1;
(statearr_32542_32615[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (13))){
var inst_32399 = (state_32510[(26)]);
var inst_32402 = cljs.core.async.close_BANG_.call(null,inst_32399);
var state_32510__$1 = state_32510;
var statearr_32543_32616 = state_32510__$1;
(statearr_32543_32616[(2)] = inst_32402);

(statearr_32543_32616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (22))){
var inst_32422 = (state_32510[(8)]);
var inst_32425 = cljs.core.async.close_BANG_.call(null,inst_32422);
var state_32510__$1 = state_32510;
var statearr_32544_32617 = state_32510__$1;
(statearr_32544_32617[(2)] = inst_32425);

(statearr_32544_32617[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (36))){
var inst_32469 = (state_32510[(25)]);
var inst_32473 = cljs.core.chunk_first.call(null,inst_32469);
var inst_32474 = cljs.core.chunk_rest.call(null,inst_32469);
var inst_32475 = cljs.core.count.call(null,inst_32473);
var inst_32450 = inst_32474;
var inst_32451 = inst_32473;
var inst_32452 = inst_32475;
var inst_32453 = (0);
var state_32510__$1 = (function (){var statearr_32545 = state_32510;
(statearr_32545[(11)] = inst_32453);

(statearr_32545[(12)] = inst_32451);

(statearr_32545[(20)] = inst_32452);

(statearr_32545[(21)] = inst_32450);

return statearr_32545;
})();
var statearr_32546_32618 = state_32510__$1;
(statearr_32546_32618[(2)] = null);

(statearr_32546_32618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (41))){
var inst_32469 = (state_32510[(25)]);
var inst_32485 = (state_32510[(2)]);
var inst_32486 = cljs.core.next.call(null,inst_32469);
var inst_32450 = inst_32486;
var inst_32451 = null;
var inst_32452 = (0);
var inst_32453 = (0);
var state_32510__$1 = (function (){var statearr_32547 = state_32510;
(statearr_32547[(27)] = inst_32485);

(statearr_32547[(11)] = inst_32453);

(statearr_32547[(12)] = inst_32451);

(statearr_32547[(20)] = inst_32452);

(statearr_32547[(21)] = inst_32450);

return statearr_32547;
})();
var statearr_32548_32619 = state_32510__$1;
(statearr_32548_32619[(2)] = null);

(statearr_32548_32619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (43))){
var state_32510__$1 = state_32510;
var statearr_32549_32620 = state_32510__$1;
(statearr_32549_32620[(2)] = null);

(statearr_32549_32620[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (29))){
var inst_32494 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32550_32621 = state_32510__$1;
(statearr_32550_32621[(2)] = inst_32494);

(statearr_32550_32621[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (44))){
var inst_32503 = (state_32510[(2)]);
var state_32510__$1 = (function (){var statearr_32551 = state_32510;
(statearr_32551[(28)] = inst_32503);

return statearr_32551;
})();
var statearr_32552_32622 = state_32510__$1;
(statearr_32552_32622[(2)] = null);

(statearr_32552_32622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (6))){
var inst_32442 = (state_32510[(29)]);
var inst_32441 = cljs.core.deref.call(null,cs);
var inst_32442__$1 = cljs.core.keys.call(null,inst_32441);
var inst_32443 = cljs.core.count.call(null,inst_32442__$1);
var inst_32444 = cljs.core.reset_BANG_.call(null,dctr,inst_32443);
var inst_32449 = cljs.core.seq.call(null,inst_32442__$1);
var inst_32450 = inst_32449;
var inst_32451 = null;
var inst_32452 = (0);
var inst_32453 = (0);
var state_32510__$1 = (function (){var statearr_32553 = state_32510;
(statearr_32553[(29)] = inst_32442__$1);

(statearr_32553[(30)] = inst_32444);

(statearr_32553[(11)] = inst_32453);

(statearr_32553[(12)] = inst_32451);

(statearr_32553[(20)] = inst_32452);

(statearr_32553[(21)] = inst_32450);

return statearr_32553;
})();
var statearr_32554_32623 = state_32510__$1;
(statearr_32554_32623[(2)] = null);

(statearr_32554_32623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (28))){
var inst_32450 = (state_32510[(21)]);
var inst_32469 = (state_32510[(25)]);
var inst_32469__$1 = cljs.core.seq.call(null,inst_32450);
var state_32510__$1 = (function (){var statearr_32555 = state_32510;
(statearr_32555[(25)] = inst_32469__$1);

return statearr_32555;
})();
if(inst_32469__$1){
var statearr_32556_32624 = state_32510__$1;
(statearr_32556_32624[(1)] = (33));

} else {
var statearr_32557_32625 = state_32510__$1;
(statearr_32557_32625[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (25))){
var inst_32453 = (state_32510[(11)]);
var inst_32452 = (state_32510[(20)]);
var inst_32455 = (inst_32453 < inst_32452);
var inst_32456 = inst_32455;
var state_32510__$1 = state_32510;
if(cljs.core.truth_(inst_32456)){
var statearr_32558_32626 = state_32510__$1;
(statearr_32558_32626[(1)] = (27));

} else {
var statearr_32559_32627 = state_32510__$1;
(statearr_32559_32627[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (34))){
var state_32510__$1 = state_32510;
var statearr_32560_32628 = state_32510__$1;
(statearr_32560_32628[(2)] = null);

(statearr_32560_32628[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (17))){
var state_32510__$1 = state_32510;
var statearr_32561_32629 = state_32510__$1;
(statearr_32561_32629[(2)] = null);

(statearr_32561_32629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (3))){
var inst_32508 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32510__$1,inst_32508);
} else {
if((state_val_32511 === (12))){
var inst_32437 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32562_32630 = state_32510__$1;
(statearr_32562_32630[(2)] = inst_32437);

(statearr_32562_32630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (2))){
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32510__$1,(4),ch);
} else {
if((state_val_32511 === (23))){
var state_32510__$1 = state_32510;
var statearr_32563_32631 = state_32510__$1;
(statearr_32563_32631[(2)] = null);

(statearr_32563_32631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (35))){
var inst_32492 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32564_32632 = state_32510__$1;
(statearr_32564_32632[(2)] = inst_32492);

(statearr_32564_32632[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (19))){
var inst_32409 = (state_32510[(7)]);
var inst_32413 = cljs.core.chunk_first.call(null,inst_32409);
var inst_32414 = cljs.core.chunk_rest.call(null,inst_32409);
var inst_32415 = cljs.core.count.call(null,inst_32413);
var inst_32387 = inst_32414;
var inst_32388 = inst_32413;
var inst_32389 = inst_32415;
var inst_32390 = (0);
var state_32510__$1 = (function (){var statearr_32565 = state_32510;
(statearr_32565[(13)] = inst_32388);

(statearr_32565[(14)] = inst_32387);

(statearr_32565[(16)] = inst_32390);

(statearr_32565[(17)] = inst_32389);

return statearr_32565;
})();
var statearr_32566_32633 = state_32510__$1;
(statearr_32566_32633[(2)] = null);

(statearr_32566_32633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (11))){
var inst_32387 = (state_32510[(14)]);
var inst_32409 = (state_32510[(7)]);
var inst_32409__$1 = cljs.core.seq.call(null,inst_32387);
var state_32510__$1 = (function (){var statearr_32567 = state_32510;
(statearr_32567[(7)] = inst_32409__$1);

return statearr_32567;
})();
if(inst_32409__$1){
var statearr_32568_32634 = state_32510__$1;
(statearr_32568_32634[(1)] = (16));

} else {
var statearr_32569_32635 = state_32510__$1;
(statearr_32569_32635[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (9))){
var inst_32439 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32570_32636 = state_32510__$1;
(statearr_32570_32636[(2)] = inst_32439);

(statearr_32570_32636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (5))){
var inst_32385 = cljs.core.deref.call(null,cs);
var inst_32386 = cljs.core.seq.call(null,inst_32385);
var inst_32387 = inst_32386;
var inst_32388 = null;
var inst_32389 = (0);
var inst_32390 = (0);
var state_32510__$1 = (function (){var statearr_32571 = state_32510;
(statearr_32571[(13)] = inst_32388);

(statearr_32571[(14)] = inst_32387);

(statearr_32571[(16)] = inst_32390);

(statearr_32571[(17)] = inst_32389);

return statearr_32571;
})();
var statearr_32572_32637 = state_32510__$1;
(statearr_32572_32637[(2)] = null);

(statearr_32572_32637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (14))){
var state_32510__$1 = state_32510;
var statearr_32573_32638 = state_32510__$1;
(statearr_32573_32638[(2)] = null);

(statearr_32573_32638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (45))){
var inst_32500 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32574_32639 = state_32510__$1;
(statearr_32574_32639[(2)] = inst_32500);

(statearr_32574_32639[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (26))){
var inst_32442 = (state_32510[(29)]);
var inst_32496 = (state_32510[(2)]);
var inst_32497 = cljs.core.seq.call(null,inst_32442);
var state_32510__$1 = (function (){var statearr_32575 = state_32510;
(statearr_32575[(31)] = inst_32496);

return statearr_32575;
})();
if(inst_32497){
var statearr_32576_32640 = state_32510__$1;
(statearr_32576_32640[(1)] = (42));

} else {
var statearr_32577_32641 = state_32510__$1;
(statearr_32577_32641[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (16))){
var inst_32409 = (state_32510[(7)]);
var inst_32411 = cljs.core.chunked_seq_QMARK_.call(null,inst_32409);
var state_32510__$1 = state_32510;
if(inst_32411){
var statearr_32578_32642 = state_32510__$1;
(statearr_32578_32642[(1)] = (19));

} else {
var statearr_32579_32643 = state_32510__$1;
(statearr_32579_32643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (38))){
var inst_32489 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32580_32644 = state_32510__$1;
(statearr_32580_32644[(2)] = inst_32489);

(statearr_32580_32644[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (30))){
var state_32510__$1 = state_32510;
var statearr_32581_32645 = state_32510__$1;
(statearr_32581_32645[(2)] = null);

(statearr_32581_32645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (10))){
var inst_32388 = (state_32510[(13)]);
var inst_32390 = (state_32510[(16)]);
var inst_32398 = cljs.core._nth.call(null,inst_32388,inst_32390);
var inst_32399 = cljs.core.nth.call(null,inst_32398,(0),null);
var inst_32400 = cljs.core.nth.call(null,inst_32398,(1),null);
var state_32510__$1 = (function (){var statearr_32582 = state_32510;
(statearr_32582[(26)] = inst_32399);

return statearr_32582;
})();
if(cljs.core.truth_(inst_32400)){
var statearr_32583_32646 = state_32510__$1;
(statearr_32583_32646[(1)] = (13));

} else {
var statearr_32584_32647 = state_32510__$1;
(statearr_32584_32647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (18))){
var inst_32435 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32585_32648 = state_32510__$1;
(statearr_32585_32648[(2)] = inst_32435);

(statearr_32585_32648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (42))){
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32510__$1,(45),dchan);
} else {
if((state_val_32511 === (37))){
var inst_32478 = (state_32510[(23)]);
var inst_32378 = (state_32510[(10)]);
var inst_32469 = (state_32510[(25)]);
var inst_32478__$1 = cljs.core.first.call(null,inst_32469);
var inst_32479 = cljs.core.async.put_BANG_.call(null,inst_32478__$1,inst_32378,done);
var state_32510__$1 = (function (){var statearr_32586 = state_32510;
(statearr_32586[(23)] = inst_32478__$1);

return statearr_32586;
})();
if(cljs.core.truth_(inst_32479)){
var statearr_32587_32649 = state_32510__$1;
(statearr_32587_32649[(1)] = (39));

} else {
var statearr_32588_32650 = state_32510__$1;
(statearr_32588_32650[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (8))){
var inst_32390 = (state_32510[(16)]);
var inst_32389 = (state_32510[(17)]);
var inst_32392 = (inst_32390 < inst_32389);
var inst_32393 = inst_32392;
var state_32510__$1 = state_32510;
if(cljs.core.truth_(inst_32393)){
var statearr_32589_32651 = state_32510__$1;
(statearr_32589_32651[(1)] = (10));

} else {
var statearr_32590_32652 = state_32510__$1;
(statearr_32590_32652[(1)] = (11));

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
});})(c__30729__auto___32598,cs,m,dchan,dctr,done))
;
return ((function (switch__30708__auto__,c__30729__auto___32598,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30709__auto__ = null;
var cljs$core$async$mult_$_state_machine__30709__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32594[(0)] = cljs$core$async$mult_$_state_machine__30709__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var cljs$core$async$mult_$_state_machine__30709__auto____1 = (function (state_32510){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_32510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32595){if((e32595 instanceof Object)){
var ex__30712__auto__ = e32595;
var statearr_32596_32653 = state_32510;
(statearr_32596_32653[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32654 = state_32510;
state_32510 = G__32654;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30709__auto__ = function(state_32510){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30709__auto____1.call(this,state_32510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30709__auto____0;
cljs$core$async$mult_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30709__auto____1;
return cljs$core$async$mult_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___32598,cs,m,dchan,dctr,done))
})();
var state__30731__auto__ = (function (){var statearr_32597 = f__30730__auto__.call(null);
(statearr_32597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___32598);

return statearr_32597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___32598,cs,m,dchan,dctr,done))
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
var args32655 = [];
var len__29087__auto___32658 = arguments.length;
var i__29088__auto___32659 = (0);
while(true){
if((i__29088__auto___32659 < len__29087__auto___32658)){
args32655.push((arguments[i__29088__auto___32659]));

var G__32660 = (i__29088__auto___32659 + (1));
i__29088__auto___32659 = G__32660;
continue;
} else {
}
break;
}

var G__32657 = args32655.length;
switch (G__32657) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32655.length)].join('')));

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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m);
} else {
var m__28676__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,state_map);
} else {
var m__28676__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,state_map);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,mode);
} else {
var m__28676__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29094__auto__ = [];
var len__29087__auto___32672 = arguments.length;
var i__29088__auto___32673 = (0);
while(true){
if((i__29088__auto___32673 < len__29087__auto___32672)){
args__29094__auto__.push((arguments[i__29088__auto___32673]));

var G__32674 = (i__29088__auto___32673 + (1));
i__29088__auto___32673 = G__32674;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((3) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32666){
var map__32667 = p__32666;
var map__32667__$1 = ((((!((map__32667 == null)))?((((map__32667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32667):map__32667);
var opts = map__32667__$1;
var statearr_32669_32675 = state;
(statearr_32669_32675[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32667,map__32667__$1,opts){
return (function (val){
var statearr_32670_32676 = state;
(statearr_32670_32676[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32667,map__32667__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32671_32677 = state;
(statearr_32671_32677[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32662){
var G__32663 = cljs.core.first.call(null,seq32662);
var seq32662__$1 = cljs.core.next.call(null,seq32662);
var G__32664 = cljs.core.first.call(null,seq32662__$1);
var seq32662__$2 = cljs.core.next.call(null,seq32662__$1);
var G__32665 = cljs.core.first.call(null,seq32662__$2);
var seq32662__$3 = cljs.core.next.call(null,seq32662__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32663,G__32664,G__32665,seq32662__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32843 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32844){
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
this.meta32844 = meta32844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32845,meta32844__$1){
var self__ = this;
var _32845__$1 = this;
return (new cljs.core.async.t_cljs$core$async32843(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32844__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32845){
var self__ = this;
var _32845__$1 = this;
return self__.meta32844;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32843.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32844","meta32844",-1511274291,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32843";

cljs.core.async.t_cljs$core$async32843.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async32843");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32843 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32843(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32844){
return (new cljs.core.async.t_cljs$core$async32843(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32844));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32843(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30729__auto___33008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32945){
var state_val_32946 = (state_32945[(1)]);
if((state_val_32946 === (7))){
var inst_32861 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32947_33009 = state_32945__$1;
(statearr_32947_33009[(2)] = inst_32861);

(statearr_32947_33009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (20))){
var inst_32873 = (state_32945[(7)]);
var state_32945__$1 = state_32945;
var statearr_32948_33010 = state_32945__$1;
(statearr_32948_33010[(2)] = inst_32873);

(statearr_32948_33010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (27))){
var state_32945__$1 = state_32945;
var statearr_32949_33011 = state_32945__$1;
(statearr_32949_33011[(2)] = null);

(statearr_32949_33011[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (1))){
var inst_32849 = (state_32945[(8)]);
var inst_32849__$1 = calc_state.call(null);
var inst_32851 = (inst_32849__$1 == null);
var inst_32852 = cljs.core.not.call(null,inst_32851);
var state_32945__$1 = (function (){var statearr_32950 = state_32945;
(statearr_32950[(8)] = inst_32849__$1);

return statearr_32950;
})();
if(inst_32852){
var statearr_32951_33012 = state_32945__$1;
(statearr_32951_33012[(1)] = (2));

} else {
var statearr_32952_33013 = state_32945__$1;
(statearr_32952_33013[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (24))){
var inst_32919 = (state_32945[(9)]);
var inst_32905 = (state_32945[(10)]);
var inst_32896 = (state_32945[(11)]);
var inst_32919__$1 = inst_32896.call(null,inst_32905);
var state_32945__$1 = (function (){var statearr_32953 = state_32945;
(statearr_32953[(9)] = inst_32919__$1);

return statearr_32953;
})();
if(cljs.core.truth_(inst_32919__$1)){
var statearr_32954_33014 = state_32945__$1;
(statearr_32954_33014[(1)] = (29));

} else {
var statearr_32955_33015 = state_32945__$1;
(statearr_32955_33015[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (4))){
var inst_32864 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32864)){
var statearr_32956_33016 = state_32945__$1;
(statearr_32956_33016[(1)] = (8));

} else {
var statearr_32957_33017 = state_32945__$1;
(statearr_32957_33017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (15))){
var inst_32890 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32890)){
var statearr_32958_33018 = state_32945__$1;
(statearr_32958_33018[(1)] = (19));

} else {
var statearr_32959_33019 = state_32945__$1;
(statearr_32959_33019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (21))){
var inst_32895 = (state_32945[(12)]);
var inst_32895__$1 = (state_32945[(2)]);
var inst_32896 = cljs.core.get.call(null,inst_32895__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32897 = cljs.core.get.call(null,inst_32895__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32898 = cljs.core.get.call(null,inst_32895__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32945__$1 = (function (){var statearr_32960 = state_32945;
(statearr_32960[(13)] = inst_32897);

(statearr_32960[(12)] = inst_32895__$1);

(statearr_32960[(11)] = inst_32896);

return statearr_32960;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32945__$1,(22),inst_32898);
} else {
if((state_val_32946 === (31))){
var inst_32927 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32927)){
var statearr_32961_33020 = state_32945__$1;
(statearr_32961_33020[(1)] = (32));

} else {
var statearr_32962_33021 = state_32945__$1;
(statearr_32962_33021[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (32))){
var inst_32904 = (state_32945[(14)]);
var state_32945__$1 = state_32945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32945__$1,(35),out,inst_32904);
} else {
if((state_val_32946 === (33))){
var inst_32895 = (state_32945[(12)]);
var inst_32873 = inst_32895;
var state_32945__$1 = (function (){var statearr_32963 = state_32945;
(statearr_32963[(7)] = inst_32873);

return statearr_32963;
})();
var statearr_32964_33022 = state_32945__$1;
(statearr_32964_33022[(2)] = null);

(statearr_32964_33022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (13))){
var inst_32873 = (state_32945[(7)]);
var inst_32880 = inst_32873.cljs$lang$protocol_mask$partition0$;
var inst_32881 = (inst_32880 & (64));
var inst_32882 = inst_32873.cljs$core$ISeq$;
var inst_32883 = (inst_32881) || (inst_32882);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32883)){
var statearr_32965_33023 = state_32945__$1;
(statearr_32965_33023[(1)] = (16));

} else {
var statearr_32966_33024 = state_32945__$1;
(statearr_32966_33024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (22))){
var inst_32904 = (state_32945[(14)]);
var inst_32905 = (state_32945[(10)]);
var inst_32903 = (state_32945[(2)]);
var inst_32904__$1 = cljs.core.nth.call(null,inst_32903,(0),null);
var inst_32905__$1 = cljs.core.nth.call(null,inst_32903,(1),null);
var inst_32906 = (inst_32904__$1 == null);
var inst_32907 = cljs.core._EQ_.call(null,inst_32905__$1,change);
var inst_32908 = (inst_32906) || (inst_32907);
var state_32945__$1 = (function (){var statearr_32967 = state_32945;
(statearr_32967[(14)] = inst_32904__$1);

(statearr_32967[(10)] = inst_32905__$1);

return statearr_32967;
})();
if(cljs.core.truth_(inst_32908)){
var statearr_32968_33025 = state_32945__$1;
(statearr_32968_33025[(1)] = (23));

} else {
var statearr_32969_33026 = state_32945__$1;
(statearr_32969_33026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (36))){
var inst_32895 = (state_32945[(12)]);
var inst_32873 = inst_32895;
var state_32945__$1 = (function (){var statearr_32970 = state_32945;
(statearr_32970[(7)] = inst_32873);

return statearr_32970;
})();
var statearr_32971_33027 = state_32945__$1;
(statearr_32971_33027[(2)] = null);

(statearr_32971_33027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (29))){
var inst_32919 = (state_32945[(9)]);
var state_32945__$1 = state_32945;
var statearr_32972_33028 = state_32945__$1;
(statearr_32972_33028[(2)] = inst_32919);

(statearr_32972_33028[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (6))){
var state_32945__$1 = state_32945;
var statearr_32973_33029 = state_32945__$1;
(statearr_32973_33029[(2)] = false);

(statearr_32973_33029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (28))){
var inst_32915 = (state_32945[(2)]);
var inst_32916 = calc_state.call(null);
var inst_32873 = inst_32916;
var state_32945__$1 = (function (){var statearr_32974 = state_32945;
(statearr_32974[(15)] = inst_32915);

(statearr_32974[(7)] = inst_32873);

return statearr_32974;
})();
var statearr_32975_33030 = state_32945__$1;
(statearr_32975_33030[(2)] = null);

(statearr_32975_33030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (25))){
var inst_32941 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32976_33031 = state_32945__$1;
(statearr_32976_33031[(2)] = inst_32941);

(statearr_32976_33031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (34))){
var inst_32939 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32977_33032 = state_32945__$1;
(statearr_32977_33032[(2)] = inst_32939);

(statearr_32977_33032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (17))){
var state_32945__$1 = state_32945;
var statearr_32978_33033 = state_32945__$1;
(statearr_32978_33033[(2)] = false);

(statearr_32978_33033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (3))){
var state_32945__$1 = state_32945;
var statearr_32979_33034 = state_32945__$1;
(statearr_32979_33034[(2)] = false);

(statearr_32979_33034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (12))){
var inst_32943 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32945__$1,inst_32943);
} else {
if((state_val_32946 === (2))){
var inst_32849 = (state_32945[(8)]);
var inst_32854 = inst_32849.cljs$lang$protocol_mask$partition0$;
var inst_32855 = (inst_32854 & (64));
var inst_32856 = inst_32849.cljs$core$ISeq$;
var inst_32857 = (inst_32855) || (inst_32856);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32857)){
var statearr_32980_33035 = state_32945__$1;
(statearr_32980_33035[(1)] = (5));

} else {
var statearr_32981_33036 = state_32945__$1;
(statearr_32981_33036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (23))){
var inst_32904 = (state_32945[(14)]);
var inst_32910 = (inst_32904 == null);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32910)){
var statearr_32982_33037 = state_32945__$1;
(statearr_32982_33037[(1)] = (26));

} else {
var statearr_32983_33038 = state_32945__$1;
(statearr_32983_33038[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (35))){
var inst_32930 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32930)){
var statearr_32984_33039 = state_32945__$1;
(statearr_32984_33039[(1)] = (36));

} else {
var statearr_32985_33040 = state_32945__$1;
(statearr_32985_33040[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (19))){
var inst_32873 = (state_32945[(7)]);
var inst_32892 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32873);
var state_32945__$1 = state_32945;
var statearr_32986_33041 = state_32945__$1;
(statearr_32986_33041[(2)] = inst_32892);

(statearr_32986_33041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (11))){
var inst_32873 = (state_32945[(7)]);
var inst_32877 = (inst_32873 == null);
var inst_32878 = cljs.core.not.call(null,inst_32877);
var state_32945__$1 = state_32945;
if(inst_32878){
var statearr_32987_33042 = state_32945__$1;
(statearr_32987_33042[(1)] = (13));

} else {
var statearr_32988_33043 = state_32945__$1;
(statearr_32988_33043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (9))){
var inst_32849 = (state_32945[(8)]);
var state_32945__$1 = state_32945;
var statearr_32989_33044 = state_32945__$1;
(statearr_32989_33044[(2)] = inst_32849);

(statearr_32989_33044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (5))){
var state_32945__$1 = state_32945;
var statearr_32990_33045 = state_32945__$1;
(statearr_32990_33045[(2)] = true);

(statearr_32990_33045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (14))){
var state_32945__$1 = state_32945;
var statearr_32991_33046 = state_32945__$1;
(statearr_32991_33046[(2)] = false);

(statearr_32991_33046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (26))){
var inst_32905 = (state_32945[(10)]);
var inst_32912 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32905);
var state_32945__$1 = state_32945;
var statearr_32992_33047 = state_32945__$1;
(statearr_32992_33047[(2)] = inst_32912);

(statearr_32992_33047[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (16))){
var state_32945__$1 = state_32945;
var statearr_32993_33048 = state_32945__$1;
(statearr_32993_33048[(2)] = true);

(statearr_32993_33048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (38))){
var inst_32935 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32994_33049 = state_32945__$1;
(statearr_32994_33049[(2)] = inst_32935);

(statearr_32994_33049[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (30))){
var inst_32897 = (state_32945[(13)]);
var inst_32905 = (state_32945[(10)]);
var inst_32896 = (state_32945[(11)]);
var inst_32922 = cljs.core.empty_QMARK_.call(null,inst_32896);
var inst_32923 = inst_32897.call(null,inst_32905);
var inst_32924 = cljs.core.not.call(null,inst_32923);
var inst_32925 = (inst_32922) && (inst_32924);
var state_32945__$1 = state_32945;
var statearr_32995_33050 = state_32945__$1;
(statearr_32995_33050[(2)] = inst_32925);

(statearr_32995_33050[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (10))){
var inst_32849 = (state_32945[(8)]);
var inst_32869 = (state_32945[(2)]);
var inst_32870 = cljs.core.get.call(null,inst_32869,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32871 = cljs.core.get.call(null,inst_32869,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32872 = cljs.core.get.call(null,inst_32869,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32873 = inst_32849;
var state_32945__$1 = (function (){var statearr_32996 = state_32945;
(statearr_32996[(16)] = inst_32870);

(statearr_32996[(17)] = inst_32871);

(statearr_32996[(18)] = inst_32872);

(statearr_32996[(7)] = inst_32873);

return statearr_32996;
})();
var statearr_32997_33051 = state_32945__$1;
(statearr_32997_33051[(2)] = null);

(statearr_32997_33051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (18))){
var inst_32887 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32998_33052 = state_32945__$1;
(statearr_32998_33052[(2)] = inst_32887);

(statearr_32998_33052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (37))){
var state_32945__$1 = state_32945;
var statearr_32999_33053 = state_32945__$1;
(statearr_32999_33053[(2)] = null);

(statearr_32999_33053[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (8))){
var inst_32849 = (state_32945[(8)]);
var inst_32866 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32849);
var state_32945__$1 = state_32945;
var statearr_33000_33054 = state_32945__$1;
(statearr_33000_33054[(2)] = inst_32866);

(statearr_33000_33054[(1)] = (10));


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
});})(c__30729__auto___33008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30708__auto__,c__30729__auto___33008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30709__auto__ = null;
var cljs$core$async$mix_$_state_machine__30709__auto____0 = (function (){
var statearr_33004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33004[(0)] = cljs$core$async$mix_$_state_machine__30709__auto__);

(statearr_33004[(1)] = (1));

return statearr_33004;
});
var cljs$core$async$mix_$_state_machine__30709__auto____1 = (function (state_32945){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_32945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33005){if((e33005 instanceof Object)){
var ex__30712__auto__ = e33005;
var statearr_33006_33055 = state_32945;
(statearr_33006_33055[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33056 = state_32945;
state_32945 = G__33056;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30709__auto__ = function(state_32945){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30709__auto____1.call(this,state_32945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30709__auto____0;
cljs$core$async$mix_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30709__auto____1;
return cljs$core$async$mix_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30731__auto__ = (function (){var statearr_33007 = f__30730__auto__.call(null);
(statearr_33007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33008);

return statearr_33007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28676__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p,v,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33057 = [];
var len__29087__auto___33060 = arguments.length;
var i__29088__auto___33061 = (0);
while(true){
if((i__29088__auto___33061 < len__29087__auto___33060)){
args33057.push((arguments[i__29088__auto___33061]));

var G__33062 = (i__29088__auto___33061 + (1));
i__29088__auto___33061 = G__33062;
continue;
} else {
}
break;
}

var G__33059 = args33057.length;
switch (G__33059) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33057.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p);
} else {
var m__28676__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p);
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
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p,v);
} else {
var m__28676__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p,v);
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
var args33065 = [];
var len__29087__auto___33190 = arguments.length;
var i__29088__auto___33191 = (0);
while(true){
if((i__29088__auto___33191 < len__29087__auto___33190)){
args33065.push((arguments[i__29088__auto___33191]));

var G__33192 = (i__29088__auto___33191 + (1));
i__29088__auto___33191 = G__33192;
continue;
} else {
}
break;
}

var G__33067 = args33065.length;
switch (G__33067) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33065.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28012__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28012__auto__,mults){
return (function (p1__33064_SHARP_){
if(cljs.core.truth_(p1__33064_SHARP_.call(null,topic))){
return p1__33064_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33064_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28012__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33068 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33069){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33069 = meta33069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33070,meta33069__$1){
var self__ = this;
var _33070__$1 = this;
return (new cljs.core.async.t_cljs$core$async33068(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33069__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33070){
var self__ = this;
var _33070__$1 = this;
return self__.meta33069;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33068.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33069","meta33069",-574687806,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33068";

cljs.core.async.t_cljs$core$async33068.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33068");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33068 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33068(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33069){
return (new cljs.core.async.t_cljs$core$async33068(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33069));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33068(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30729__auto___33194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33194,mults,ensure_mult,p){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33194,mults,ensure_mult,p){
return (function (state_33142){
var state_val_33143 = (state_33142[(1)]);
if((state_val_33143 === (7))){
var inst_33138 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33144_33195 = state_33142__$1;
(statearr_33144_33195[(2)] = inst_33138);

(statearr_33144_33195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (20))){
var state_33142__$1 = state_33142;
var statearr_33145_33196 = state_33142__$1;
(statearr_33145_33196[(2)] = null);

(statearr_33145_33196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (1))){
var state_33142__$1 = state_33142;
var statearr_33146_33197 = state_33142__$1;
(statearr_33146_33197[(2)] = null);

(statearr_33146_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (24))){
var inst_33121 = (state_33142[(7)]);
var inst_33130 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33121);
var state_33142__$1 = state_33142;
var statearr_33147_33198 = state_33142__$1;
(statearr_33147_33198[(2)] = inst_33130);

(statearr_33147_33198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (4))){
var inst_33073 = (state_33142[(8)]);
var inst_33073__$1 = (state_33142[(2)]);
var inst_33074 = (inst_33073__$1 == null);
var state_33142__$1 = (function (){var statearr_33148 = state_33142;
(statearr_33148[(8)] = inst_33073__$1);

return statearr_33148;
})();
if(cljs.core.truth_(inst_33074)){
var statearr_33149_33199 = state_33142__$1;
(statearr_33149_33199[(1)] = (5));

} else {
var statearr_33150_33200 = state_33142__$1;
(statearr_33150_33200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (15))){
var inst_33115 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33151_33201 = state_33142__$1;
(statearr_33151_33201[(2)] = inst_33115);

(statearr_33151_33201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (21))){
var inst_33135 = (state_33142[(2)]);
var state_33142__$1 = (function (){var statearr_33152 = state_33142;
(statearr_33152[(9)] = inst_33135);

return statearr_33152;
})();
var statearr_33153_33202 = state_33142__$1;
(statearr_33153_33202[(2)] = null);

(statearr_33153_33202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (13))){
var inst_33097 = (state_33142[(10)]);
var inst_33099 = cljs.core.chunked_seq_QMARK_.call(null,inst_33097);
var state_33142__$1 = state_33142;
if(inst_33099){
var statearr_33154_33203 = state_33142__$1;
(statearr_33154_33203[(1)] = (16));

} else {
var statearr_33155_33204 = state_33142__$1;
(statearr_33155_33204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (22))){
var inst_33127 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33127)){
var statearr_33156_33205 = state_33142__$1;
(statearr_33156_33205[(1)] = (23));

} else {
var statearr_33157_33206 = state_33142__$1;
(statearr_33157_33206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (6))){
var inst_33073 = (state_33142[(8)]);
var inst_33123 = (state_33142[(11)]);
var inst_33121 = (state_33142[(7)]);
var inst_33121__$1 = topic_fn.call(null,inst_33073);
var inst_33122 = cljs.core.deref.call(null,mults);
var inst_33123__$1 = cljs.core.get.call(null,inst_33122,inst_33121__$1);
var state_33142__$1 = (function (){var statearr_33158 = state_33142;
(statearr_33158[(11)] = inst_33123__$1);

(statearr_33158[(7)] = inst_33121__$1);

return statearr_33158;
})();
if(cljs.core.truth_(inst_33123__$1)){
var statearr_33159_33207 = state_33142__$1;
(statearr_33159_33207[(1)] = (19));

} else {
var statearr_33160_33208 = state_33142__$1;
(statearr_33160_33208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (25))){
var inst_33132 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33161_33209 = state_33142__$1;
(statearr_33161_33209[(2)] = inst_33132);

(statearr_33161_33209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (17))){
var inst_33097 = (state_33142[(10)]);
var inst_33106 = cljs.core.first.call(null,inst_33097);
var inst_33107 = cljs.core.async.muxch_STAR_.call(null,inst_33106);
var inst_33108 = cljs.core.async.close_BANG_.call(null,inst_33107);
var inst_33109 = cljs.core.next.call(null,inst_33097);
var inst_33083 = inst_33109;
var inst_33084 = null;
var inst_33085 = (0);
var inst_33086 = (0);
var state_33142__$1 = (function (){var statearr_33162 = state_33142;
(statearr_33162[(12)] = inst_33086);

(statearr_33162[(13)] = inst_33083);

(statearr_33162[(14)] = inst_33084);

(statearr_33162[(15)] = inst_33108);

(statearr_33162[(16)] = inst_33085);

return statearr_33162;
})();
var statearr_33163_33210 = state_33142__$1;
(statearr_33163_33210[(2)] = null);

(statearr_33163_33210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (3))){
var inst_33140 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33142__$1,inst_33140);
} else {
if((state_val_33143 === (12))){
var inst_33117 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33164_33211 = state_33142__$1;
(statearr_33164_33211[(2)] = inst_33117);

(statearr_33164_33211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (2))){
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33142__$1,(4),ch);
} else {
if((state_val_33143 === (23))){
var state_33142__$1 = state_33142;
var statearr_33165_33212 = state_33142__$1;
(statearr_33165_33212[(2)] = null);

(statearr_33165_33212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (19))){
var inst_33073 = (state_33142[(8)]);
var inst_33123 = (state_33142[(11)]);
var inst_33125 = cljs.core.async.muxch_STAR_.call(null,inst_33123);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33142__$1,(22),inst_33125,inst_33073);
} else {
if((state_val_33143 === (11))){
var inst_33083 = (state_33142[(13)]);
var inst_33097 = (state_33142[(10)]);
var inst_33097__$1 = cljs.core.seq.call(null,inst_33083);
var state_33142__$1 = (function (){var statearr_33166 = state_33142;
(statearr_33166[(10)] = inst_33097__$1);

return statearr_33166;
})();
if(inst_33097__$1){
var statearr_33167_33213 = state_33142__$1;
(statearr_33167_33213[(1)] = (13));

} else {
var statearr_33168_33214 = state_33142__$1;
(statearr_33168_33214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (9))){
var inst_33119 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33169_33215 = state_33142__$1;
(statearr_33169_33215[(2)] = inst_33119);

(statearr_33169_33215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (5))){
var inst_33080 = cljs.core.deref.call(null,mults);
var inst_33081 = cljs.core.vals.call(null,inst_33080);
var inst_33082 = cljs.core.seq.call(null,inst_33081);
var inst_33083 = inst_33082;
var inst_33084 = null;
var inst_33085 = (0);
var inst_33086 = (0);
var state_33142__$1 = (function (){var statearr_33170 = state_33142;
(statearr_33170[(12)] = inst_33086);

(statearr_33170[(13)] = inst_33083);

(statearr_33170[(14)] = inst_33084);

(statearr_33170[(16)] = inst_33085);

return statearr_33170;
})();
var statearr_33171_33216 = state_33142__$1;
(statearr_33171_33216[(2)] = null);

(statearr_33171_33216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (14))){
var state_33142__$1 = state_33142;
var statearr_33175_33217 = state_33142__$1;
(statearr_33175_33217[(2)] = null);

(statearr_33175_33217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (16))){
var inst_33097 = (state_33142[(10)]);
var inst_33101 = cljs.core.chunk_first.call(null,inst_33097);
var inst_33102 = cljs.core.chunk_rest.call(null,inst_33097);
var inst_33103 = cljs.core.count.call(null,inst_33101);
var inst_33083 = inst_33102;
var inst_33084 = inst_33101;
var inst_33085 = inst_33103;
var inst_33086 = (0);
var state_33142__$1 = (function (){var statearr_33176 = state_33142;
(statearr_33176[(12)] = inst_33086);

(statearr_33176[(13)] = inst_33083);

(statearr_33176[(14)] = inst_33084);

(statearr_33176[(16)] = inst_33085);

return statearr_33176;
})();
var statearr_33177_33218 = state_33142__$1;
(statearr_33177_33218[(2)] = null);

(statearr_33177_33218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (10))){
var inst_33086 = (state_33142[(12)]);
var inst_33083 = (state_33142[(13)]);
var inst_33084 = (state_33142[(14)]);
var inst_33085 = (state_33142[(16)]);
var inst_33091 = cljs.core._nth.call(null,inst_33084,inst_33086);
var inst_33092 = cljs.core.async.muxch_STAR_.call(null,inst_33091);
var inst_33093 = cljs.core.async.close_BANG_.call(null,inst_33092);
var inst_33094 = (inst_33086 + (1));
var tmp33172 = inst_33083;
var tmp33173 = inst_33084;
var tmp33174 = inst_33085;
var inst_33083__$1 = tmp33172;
var inst_33084__$1 = tmp33173;
var inst_33085__$1 = tmp33174;
var inst_33086__$1 = inst_33094;
var state_33142__$1 = (function (){var statearr_33178 = state_33142;
(statearr_33178[(12)] = inst_33086__$1);

(statearr_33178[(13)] = inst_33083__$1);

(statearr_33178[(14)] = inst_33084__$1);

(statearr_33178[(17)] = inst_33093);

(statearr_33178[(16)] = inst_33085__$1);

return statearr_33178;
})();
var statearr_33179_33219 = state_33142__$1;
(statearr_33179_33219[(2)] = null);

(statearr_33179_33219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (18))){
var inst_33112 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33180_33220 = state_33142__$1;
(statearr_33180_33220[(2)] = inst_33112);

(statearr_33180_33220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (8))){
var inst_33086 = (state_33142[(12)]);
var inst_33085 = (state_33142[(16)]);
var inst_33088 = (inst_33086 < inst_33085);
var inst_33089 = inst_33088;
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33089)){
var statearr_33181_33221 = state_33142__$1;
(statearr_33181_33221[(1)] = (10));

} else {
var statearr_33182_33222 = state_33142__$1;
(statearr_33182_33222[(1)] = (11));

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
});})(c__30729__auto___33194,mults,ensure_mult,p))
;
return ((function (switch__30708__auto__,c__30729__auto___33194,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_33186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33186[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_33186[(1)] = (1));

return statearr_33186;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_33142){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33187){if((e33187 instanceof Object)){
var ex__30712__auto__ = e33187;
var statearr_33188_33223 = state_33142;
(statearr_33188_33223[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33224 = state_33142;
state_33142 = G__33224;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_33142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_33142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33194,mults,ensure_mult,p))
})();
var state__30731__auto__ = (function (){var statearr_33189 = f__30730__auto__.call(null);
(statearr_33189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33194);

return statearr_33189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33194,mults,ensure_mult,p))
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
var args33225 = [];
var len__29087__auto___33228 = arguments.length;
var i__29088__auto___33229 = (0);
while(true){
if((i__29088__auto___33229 < len__29087__auto___33228)){
args33225.push((arguments[i__29088__auto___33229]));

var G__33230 = (i__29088__auto___33229 + (1));
i__29088__auto___33229 = G__33230;
continue;
} else {
}
break;
}

var G__33227 = args33225.length;
switch (G__33227) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33225.length)].join('')));

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
var args33232 = [];
var len__29087__auto___33235 = arguments.length;
var i__29088__auto___33236 = (0);
while(true){
if((i__29088__auto___33236 < len__29087__auto___33235)){
args33232.push((arguments[i__29088__auto___33236]));

var G__33237 = (i__29088__auto___33236 + (1));
i__29088__auto___33236 = G__33237;
continue;
} else {
}
break;
}

var G__33234 = args33232.length;
switch (G__33234) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33232.length)].join('')));

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
var args33239 = [];
var len__29087__auto___33310 = arguments.length;
var i__29088__auto___33311 = (0);
while(true){
if((i__29088__auto___33311 < len__29087__auto___33310)){
args33239.push((arguments[i__29088__auto___33311]));

var G__33312 = (i__29088__auto___33311 + (1));
i__29088__auto___33311 = G__33312;
continue;
} else {
}
break;
}

var G__33241 = args33239.length;
switch (G__33241) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33239.length)].join('')));

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
var c__30729__auto___33314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33280){
var state_val_33281 = (state_33280[(1)]);
if((state_val_33281 === (7))){
var state_33280__$1 = state_33280;
var statearr_33282_33315 = state_33280__$1;
(statearr_33282_33315[(2)] = null);

(statearr_33282_33315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (1))){
var state_33280__$1 = state_33280;
var statearr_33283_33316 = state_33280__$1;
(statearr_33283_33316[(2)] = null);

(statearr_33283_33316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (4))){
var inst_33244 = (state_33280[(7)]);
var inst_33246 = (inst_33244 < cnt);
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33246)){
var statearr_33284_33317 = state_33280__$1;
(statearr_33284_33317[(1)] = (6));

} else {
var statearr_33285_33318 = state_33280__$1;
(statearr_33285_33318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (15))){
var inst_33276 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33286_33319 = state_33280__$1;
(statearr_33286_33319[(2)] = inst_33276);

(statearr_33286_33319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (13))){
var inst_33269 = cljs.core.async.close_BANG_.call(null,out);
var state_33280__$1 = state_33280;
var statearr_33287_33320 = state_33280__$1;
(statearr_33287_33320[(2)] = inst_33269);

(statearr_33287_33320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (6))){
var state_33280__$1 = state_33280;
var statearr_33288_33321 = state_33280__$1;
(statearr_33288_33321[(2)] = null);

(statearr_33288_33321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (3))){
var inst_33278 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33280__$1,inst_33278);
} else {
if((state_val_33281 === (12))){
var inst_33266 = (state_33280[(8)]);
var inst_33266__$1 = (state_33280[(2)]);
var inst_33267 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33266__$1);
var state_33280__$1 = (function (){var statearr_33289 = state_33280;
(statearr_33289[(8)] = inst_33266__$1);

return statearr_33289;
})();
if(cljs.core.truth_(inst_33267)){
var statearr_33290_33322 = state_33280__$1;
(statearr_33290_33322[(1)] = (13));

} else {
var statearr_33291_33323 = state_33280__$1;
(statearr_33291_33323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (2))){
var inst_33243 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33244 = (0);
var state_33280__$1 = (function (){var statearr_33292 = state_33280;
(statearr_33292[(9)] = inst_33243);

(statearr_33292[(7)] = inst_33244);

return statearr_33292;
})();
var statearr_33293_33324 = state_33280__$1;
(statearr_33293_33324[(2)] = null);

(statearr_33293_33324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (11))){
var inst_33244 = (state_33280[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33280,(10),Object,null,(9));
var inst_33253 = chs__$1.call(null,inst_33244);
var inst_33254 = done.call(null,inst_33244);
var inst_33255 = cljs.core.async.take_BANG_.call(null,inst_33253,inst_33254);
var state_33280__$1 = state_33280;
var statearr_33294_33325 = state_33280__$1;
(statearr_33294_33325[(2)] = inst_33255);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (9))){
var inst_33244 = (state_33280[(7)]);
var inst_33257 = (state_33280[(2)]);
var inst_33258 = (inst_33244 + (1));
var inst_33244__$1 = inst_33258;
var state_33280__$1 = (function (){var statearr_33295 = state_33280;
(statearr_33295[(10)] = inst_33257);

(statearr_33295[(7)] = inst_33244__$1);

return statearr_33295;
})();
var statearr_33296_33326 = state_33280__$1;
(statearr_33296_33326[(2)] = null);

(statearr_33296_33326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (5))){
var inst_33264 = (state_33280[(2)]);
var state_33280__$1 = (function (){var statearr_33297 = state_33280;
(statearr_33297[(11)] = inst_33264);

return statearr_33297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33280__$1,(12),dchan);
} else {
if((state_val_33281 === (14))){
var inst_33266 = (state_33280[(8)]);
var inst_33271 = cljs.core.apply.call(null,f,inst_33266);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33280__$1,(16),out,inst_33271);
} else {
if((state_val_33281 === (16))){
var inst_33273 = (state_33280[(2)]);
var state_33280__$1 = (function (){var statearr_33298 = state_33280;
(statearr_33298[(12)] = inst_33273);

return statearr_33298;
})();
var statearr_33299_33327 = state_33280__$1;
(statearr_33299_33327[(2)] = null);

(statearr_33299_33327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (10))){
var inst_33248 = (state_33280[(2)]);
var inst_33249 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33280__$1 = (function (){var statearr_33300 = state_33280;
(statearr_33300[(13)] = inst_33248);

return statearr_33300;
})();
var statearr_33301_33328 = state_33280__$1;
(statearr_33301_33328[(2)] = inst_33249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (8))){
var inst_33262 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33302_33329 = state_33280__$1;
(statearr_33302_33329[(2)] = inst_33262);

(statearr_33302_33329[(1)] = (5));


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
});})(c__30729__auto___33314,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30708__auto__,c__30729__auto___33314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_33306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33306[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_33306[(1)] = (1));

return statearr_33306;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_33280){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33307){if((e33307 instanceof Object)){
var ex__30712__auto__ = e33307;
var statearr_33308_33330 = state_33280;
(statearr_33308_33330[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33331 = state_33280;
state_33280 = G__33331;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_33280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_33280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33314,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30731__auto__ = (function (){var statearr_33309 = f__30730__auto__.call(null);
(statearr_33309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33314);

return statearr_33309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33314,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33333 = [];
var len__29087__auto___33391 = arguments.length;
var i__29088__auto___33392 = (0);
while(true){
if((i__29088__auto___33392 < len__29087__auto___33391)){
args33333.push((arguments[i__29088__auto___33392]));

var G__33393 = (i__29088__auto___33392 + (1));
i__29088__auto___33392 = G__33393;
continue;
} else {
}
break;
}

var G__33335 = args33333.length;
switch (G__33335) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33333.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30729__auto___33395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33395,out){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33395,out){
return (function (state_33367){
var state_val_33368 = (state_33367[(1)]);
if((state_val_33368 === (7))){
var inst_33347 = (state_33367[(7)]);
var inst_33346 = (state_33367[(8)]);
var inst_33346__$1 = (state_33367[(2)]);
var inst_33347__$1 = cljs.core.nth.call(null,inst_33346__$1,(0),null);
var inst_33348 = cljs.core.nth.call(null,inst_33346__$1,(1),null);
var inst_33349 = (inst_33347__$1 == null);
var state_33367__$1 = (function (){var statearr_33369 = state_33367;
(statearr_33369[(7)] = inst_33347__$1);

(statearr_33369[(8)] = inst_33346__$1);

(statearr_33369[(9)] = inst_33348);

return statearr_33369;
})();
if(cljs.core.truth_(inst_33349)){
var statearr_33370_33396 = state_33367__$1;
(statearr_33370_33396[(1)] = (8));

} else {
var statearr_33371_33397 = state_33367__$1;
(statearr_33371_33397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33368 === (1))){
var inst_33336 = cljs.core.vec.call(null,chs);
var inst_33337 = inst_33336;
var state_33367__$1 = (function (){var statearr_33372 = state_33367;
(statearr_33372[(10)] = inst_33337);

return statearr_33372;
})();
var statearr_33373_33398 = state_33367__$1;
(statearr_33373_33398[(2)] = null);

(statearr_33373_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33368 === (4))){
var inst_33337 = (state_33367[(10)]);
var state_33367__$1 = state_33367;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33367__$1,(7),inst_33337);
} else {
if((state_val_33368 === (6))){
var inst_33363 = (state_33367[(2)]);
var state_33367__$1 = state_33367;
var statearr_33374_33399 = state_33367__$1;
(statearr_33374_33399[(2)] = inst_33363);

(statearr_33374_33399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33368 === (3))){
var inst_33365 = (state_33367[(2)]);
var state_33367__$1 = state_33367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33367__$1,inst_33365);
} else {
if((state_val_33368 === (2))){
var inst_33337 = (state_33367[(10)]);
var inst_33339 = cljs.core.count.call(null,inst_33337);
var inst_33340 = (inst_33339 > (0));
var state_33367__$1 = state_33367;
if(cljs.core.truth_(inst_33340)){
var statearr_33376_33400 = state_33367__$1;
(statearr_33376_33400[(1)] = (4));

} else {
var statearr_33377_33401 = state_33367__$1;
(statearr_33377_33401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33368 === (11))){
var inst_33337 = (state_33367[(10)]);
var inst_33356 = (state_33367[(2)]);
var tmp33375 = inst_33337;
var inst_33337__$1 = tmp33375;
var state_33367__$1 = (function (){var statearr_33378 = state_33367;
(statearr_33378[(10)] = inst_33337__$1);

(statearr_33378[(11)] = inst_33356);

return statearr_33378;
})();
var statearr_33379_33402 = state_33367__$1;
(statearr_33379_33402[(2)] = null);

(statearr_33379_33402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33368 === (9))){
var inst_33347 = (state_33367[(7)]);
var state_33367__$1 = state_33367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33367__$1,(11),out,inst_33347);
} else {
if((state_val_33368 === (5))){
var inst_33361 = cljs.core.async.close_BANG_.call(null,out);
var state_33367__$1 = state_33367;
var statearr_33380_33403 = state_33367__$1;
(statearr_33380_33403[(2)] = inst_33361);

(statearr_33380_33403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33368 === (10))){
var inst_33359 = (state_33367[(2)]);
var state_33367__$1 = state_33367;
var statearr_33381_33404 = state_33367__$1;
(statearr_33381_33404[(2)] = inst_33359);

(statearr_33381_33404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33368 === (8))){
var inst_33337 = (state_33367[(10)]);
var inst_33347 = (state_33367[(7)]);
var inst_33346 = (state_33367[(8)]);
var inst_33348 = (state_33367[(9)]);
var inst_33351 = (function (){var cs = inst_33337;
var vec__33342 = inst_33346;
var v = inst_33347;
var c = inst_33348;
return ((function (cs,vec__33342,v,c,inst_33337,inst_33347,inst_33346,inst_33348,state_val_33368,c__30729__auto___33395,out){
return (function (p1__33332_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33332_SHARP_);
});
;})(cs,vec__33342,v,c,inst_33337,inst_33347,inst_33346,inst_33348,state_val_33368,c__30729__auto___33395,out))
})();
var inst_33352 = cljs.core.filterv.call(null,inst_33351,inst_33337);
var inst_33337__$1 = inst_33352;
var state_33367__$1 = (function (){var statearr_33382 = state_33367;
(statearr_33382[(10)] = inst_33337__$1);

return statearr_33382;
})();
var statearr_33383_33405 = state_33367__$1;
(statearr_33383_33405[(2)] = null);

(statearr_33383_33405[(1)] = (2));


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
});})(c__30729__auto___33395,out))
;
return ((function (switch__30708__auto__,c__30729__auto___33395,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_33387 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33387[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_33387[(1)] = (1));

return statearr_33387;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_33367){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33388){if((e33388 instanceof Object)){
var ex__30712__auto__ = e33388;
var statearr_33389_33406 = state_33367;
(statearr_33389_33406[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33407 = state_33367;
state_33367 = G__33407;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_33367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_33367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33395,out))
})();
var state__30731__auto__ = (function (){var statearr_33390 = f__30730__auto__.call(null);
(statearr_33390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33395);

return statearr_33390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33395,out))
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
var args33408 = [];
var len__29087__auto___33457 = arguments.length;
var i__29088__auto___33458 = (0);
while(true){
if((i__29088__auto___33458 < len__29087__auto___33457)){
args33408.push((arguments[i__29088__auto___33458]));

var G__33459 = (i__29088__auto___33458 + (1));
i__29088__auto___33458 = G__33459;
continue;
} else {
}
break;
}

var G__33410 = args33408.length;
switch (G__33410) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33408.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30729__auto___33461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33461,out){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33461,out){
return (function (state_33434){
var state_val_33435 = (state_33434[(1)]);
if((state_val_33435 === (7))){
var inst_33416 = (state_33434[(7)]);
var inst_33416__$1 = (state_33434[(2)]);
var inst_33417 = (inst_33416__$1 == null);
var inst_33418 = cljs.core.not.call(null,inst_33417);
var state_33434__$1 = (function (){var statearr_33436 = state_33434;
(statearr_33436[(7)] = inst_33416__$1);

return statearr_33436;
})();
if(inst_33418){
var statearr_33437_33462 = state_33434__$1;
(statearr_33437_33462[(1)] = (8));

} else {
var statearr_33438_33463 = state_33434__$1;
(statearr_33438_33463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (1))){
var inst_33411 = (0);
var state_33434__$1 = (function (){var statearr_33439 = state_33434;
(statearr_33439[(8)] = inst_33411);

return statearr_33439;
})();
var statearr_33440_33464 = state_33434__$1;
(statearr_33440_33464[(2)] = null);

(statearr_33440_33464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (4))){
var state_33434__$1 = state_33434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33434__$1,(7),ch);
} else {
if((state_val_33435 === (6))){
var inst_33429 = (state_33434[(2)]);
var state_33434__$1 = state_33434;
var statearr_33441_33465 = state_33434__$1;
(statearr_33441_33465[(2)] = inst_33429);

(statearr_33441_33465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (3))){
var inst_33431 = (state_33434[(2)]);
var inst_33432 = cljs.core.async.close_BANG_.call(null,out);
var state_33434__$1 = (function (){var statearr_33442 = state_33434;
(statearr_33442[(9)] = inst_33431);

return statearr_33442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33434__$1,inst_33432);
} else {
if((state_val_33435 === (2))){
var inst_33411 = (state_33434[(8)]);
var inst_33413 = (inst_33411 < n);
var state_33434__$1 = state_33434;
if(cljs.core.truth_(inst_33413)){
var statearr_33443_33466 = state_33434__$1;
(statearr_33443_33466[(1)] = (4));

} else {
var statearr_33444_33467 = state_33434__$1;
(statearr_33444_33467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (11))){
var inst_33411 = (state_33434[(8)]);
var inst_33421 = (state_33434[(2)]);
var inst_33422 = (inst_33411 + (1));
var inst_33411__$1 = inst_33422;
var state_33434__$1 = (function (){var statearr_33445 = state_33434;
(statearr_33445[(8)] = inst_33411__$1);

(statearr_33445[(10)] = inst_33421);

return statearr_33445;
})();
var statearr_33446_33468 = state_33434__$1;
(statearr_33446_33468[(2)] = null);

(statearr_33446_33468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (9))){
var state_33434__$1 = state_33434;
var statearr_33447_33469 = state_33434__$1;
(statearr_33447_33469[(2)] = null);

(statearr_33447_33469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (5))){
var state_33434__$1 = state_33434;
var statearr_33448_33470 = state_33434__$1;
(statearr_33448_33470[(2)] = null);

(statearr_33448_33470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (10))){
var inst_33426 = (state_33434[(2)]);
var state_33434__$1 = state_33434;
var statearr_33449_33471 = state_33434__$1;
(statearr_33449_33471[(2)] = inst_33426);

(statearr_33449_33471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (8))){
var inst_33416 = (state_33434[(7)]);
var state_33434__$1 = state_33434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33434__$1,(11),out,inst_33416);
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
});})(c__30729__auto___33461,out))
;
return ((function (switch__30708__auto__,c__30729__auto___33461,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_33453 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33453[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_33453[(1)] = (1));

return statearr_33453;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_33434){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33454){if((e33454 instanceof Object)){
var ex__30712__auto__ = e33454;
var statearr_33455_33472 = state_33434;
(statearr_33455_33472[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33473 = state_33434;
state_33434 = G__33473;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_33434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_33434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33461,out))
})();
var state__30731__auto__ = (function (){var statearr_33456 = f__30730__auto__.call(null);
(statearr_33456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33461);

return statearr_33456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33461,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33481 = (function (map_LT_,f,ch,meta33482){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33482 = meta33482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33483,meta33482__$1){
var self__ = this;
var _33483__$1 = this;
return (new cljs.core.async.t_cljs$core$async33481(self__.map_LT_,self__.f,self__.ch,meta33482__$1));
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33483){
var self__ = this;
var _33483__$1 = this;
return self__.meta33482;
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33484 = (function (map_LT_,f,ch,meta33482,_,fn1,meta33485){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33482 = meta33482;
this._ = _;
this.fn1 = fn1;
this.meta33485 = meta33485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33486,meta33485__$1){
var self__ = this;
var _33486__$1 = this;
return (new cljs.core.async.t_cljs$core$async33484(self__.map_LT_,self__.f,self__.ch,self__.meta33482,self__._,self__.fn1,meta33485__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33486){
var self__ = this;
var _33486__$1 = this;
return self__.meta33485;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33474_SHARP_){
return f1.call(null,(((p1__33474_SHARP_ == null))?null:self__.f.call(null,p1__33474_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33484.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33482","meta33482",1688915827,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33481","cljs.core.async/t_cljs$core$async33481",187995421,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33485","meta33485",-1731575258,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33484";

cljs.core.async.t_cljs$core$async33484.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33484");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33484 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33484(map_LT___$1,f__$1,ch__$1,meta33482__$1,___$2,fn1__$1,meta33485){
return (new cljs.core.async.t_cljs$core$async33484(map_LT___$1,f__$1,ch__$1,meta33482__$1,___$2,fn1__$1,meta33485));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33484(self__.map_LT_,self__.f,self__.ch,self__.meta33482,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28000__auto__ = ret;
if(cljs.core.truth_(and__28000__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28000__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33482","meta33482",1688915827,null)], null);
});

cljs.core.async.t_cljs$core$async33481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33481";

cljs.core.async.t_cljs$core$async33481.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33481");
});

cljs.core.async.__GT_t_cljs$core$async33481 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33481(map_LT___$1,f__$1,ch__$1,meta33482){
return (new cljs.core.async.t_cljs$core$async33481(map_LT___$1,f__$1,ch__$1,meta33482));
});

}

return (new cljs.core.async.t_cljs$core$async33481(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33490 = (function (map_GT_,f,ch,meta33491){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33491 = meta33491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33492,meta33491__$1){
var self__ = this;
var _33492__$1 = this;
return (new cljs.core.async.t_cljs$core$async33490(self__.map_GT_,self__.f,self__.ch,meta33491__$1));
});

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33492){
var self__ = this;
var _33492__$1 = this;
return self__.meta33491;
});

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33491","meta33491",83284319,null)], null);
});

cljs.core.async.t_cljs$core$async33490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33490";

cljs.core.async.t_cljs$core$async33490.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33490");
});

cljs.core.async.__GT_t_cljs$core$async33490 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33490(map_GT___$1,f__$1,ch__$1,meta33491){
return (new cljs.core.async.t_cljs$core$async33490(map_GT___$1,f__$1,ch__$1,meta33491));
});

}

return (new cljs.core.async.t_cljs$core$async33490(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33496 = (function (filter_GT_,p,ch,meta33497){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33497 = meta33497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33498,meta33497__$1){
var self__ = this;
var _33498__$1 = this;
return (new cljs.core.async.t_cljs$core$async33496(self__.filter_GT_,self__.p,self__.ch,meta33497__$1));
});

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33498){
var self__ = this;
var _33498__$1 = this;
return self__.meta33497;
});

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33496.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33497","meta33497",-158342464,null)], null);
});

cljs.core.async.t_cljs$core$async33496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33496";

cljs.core.async.t_cljs$core$async33496.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33496");
});

cljs.core.async.__GT_t_cljs$core$async33496 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33496(filter_GT___$1,p__$1,ch__$1,meta33497){
return (new cljs.core.async.t_cljs$core$async33496(filter_GT___$1,p__$1,ch__$1,meta33497));
});

}

return (new cljs.core.async.t_cljs$core$async33496(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33499 = [];
var len__29087__auto___33543 = arguments.length;
var i__29088__auto___33544 = (0);
while(true){
if((i__29088__auto___33544 < len__29087__auto___33543)){
args33499.push((arguments[i__29088__auto___33544]));

var G__33545 = (i__29088__auto___33544 + (1));
i__29088__auto___33544 = G__33545;
continue;
} else {
}
break;
}

var G__33501 = args33499.length;
switch (G__33501) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33499.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30729__auto___33547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33547,out){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33547,out){
return (function (state_33522){
var state_val_33523 = (state_33522[(1)]);
if((state_val_33523 === (7))){
var inst_33518 = (state_33522[(2)]);
var state_33522__$1 = state_33522;
var statearr_33524_33548 = state_33522__$1;
(statearr_33524_33548[(2)] = inst_33518);

(statearr_33524_33548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (1))){
var state_33522__$1 = state_33522;
var statearr_33525_33549 = state_33522__$1;
(statearr_33525_33549[(2)] = null);

(statearr_33525_33549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (4))){
var inst_33504 = (state_33522[(7)]);
var inst_33504__$1 = (state_33522[(2)]);
var inst_33505 = (inst_33504__$1 == null);
var state_33522__$1 = (function (){var statearr_33526 = state_33522;
(statearr_33526[(7)] = inst_33504__$1);

return statearr_33526;
})();
if(cljs.core.truth_(inst_33505)){
var statearr_33527_33550 = state_33522__$1;
(statearr_33527_33550[(1)] = (5));

} else {
var statearr_33528_33551 = state_33522__$1;
(statearr_33528_33551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (6))){
var inst_33504 = (state_33522[(7)]);
var inst_33509 = p.call(null,inst_33504);
var state_33522__$1 = state_33522;
if(cljs.core.truth_(inst_33509)){
var statearr_33529_33552 = state_33522__$1;
(statearr_33529_33552[(1)] = (8));

} else {
var statearr_33530_33553 = state_33522__$1;
(statearr_33530_33553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (3))){
var inst_33520 = (state_33522[(2)]);
var state_33522__$1 = state_33522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33522__$1,inst_33520);
} else {
if((state_val_33523 === (2))){
var state_33522__$1 = state_33522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33522__$1,(4),ch);
} else {
if((state_val_33523 === (11))){
var inst_33512 = (state_33522[(2)]);
var state_33522__$1 = state_33522;
var statearr_33531_33554 = state_33522__$1;
(statearr_33531_33554[(2)] = inst_33512);

(statearr_33531_33554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (9))){
var state_33522__$1 = state_33522;
var statearr_33532_33555 = state_33522__$1;
(statearr_33532_33555[(2)] = null);

(statearr_33532_33555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (5))){
var inst_33507 = cljs.core.async.close_BANG_.call(null,out);
var state_33522__$1 = state_33522;
var statearr_33533_33556 = state_33522__$1;
(statearr_33533_33556[(2)] = inst_33507);

(statearr_33533_33556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (10))){
var inst_33515 = (state_33522[(2)]);
var state_33522__$1 = (function (){var statearr_33534 = state_33522;
(statearr_33534[(8)] = inst_33515);

return statearr_33534;
})();
var statearr_33535_33557 = state_33522__$1;
(statearr_33535_33557[(2)] = null);

(statearr_33535_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33523 === (8))){
var inst_33504 = (state_33522[(7)]);
var state_33522__$1 = state_33522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33522__$1,(11),out,inst_33504);
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
});})(c__30729__auto___33547,out))
;
return ((function (switch__30708__auto__,c__30729__auto___33547,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_33539 = [null,null,null,null,null,null,null,null,null];
(statearr_33539[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_33539[(1)] = (1));

return statearr_33539;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_33522){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33540){if((e33540 instanceof Object)){
var ex__30712__auto__ = e33540;
var statearr_33541_33558 = state_33522;
(statearr_33541_33558[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33559 = state_33522;
state_33522 = G__33559;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_33522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_33522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33547,out))
})();
var state__30731__auto__ = (function (){var statearr_33542 = f__30730__auto__.call(null);
(statearr_33542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33547);

return statearr_33542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33547,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33560 = [];
var len__29087__auto___33563 = arguments.length;
var i__29088__auto___33564 = (0);
while(true){
if((i__29088__auto___33564 < len__29087__auto___33563)){
args33560.push((arguments[i__29088__auto___33564]));

var G__33565 = (i__29088__auto___33564 + (1));
i__29088__auto___33564 = G__33565;
continue;
} else {
}
break;
}

var G__33562 = args33560.length;
switch (G__33562) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33560.length)].join('')));

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
var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__){
return (function (state_33732){
var state_val_33733 = (state_33732[(1)]);
if((state_val_33733 === (7))){
var inst_33728 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33734_33775 = state_33732__$1;
(statearr_33734_33775[(2)] = inst_33728);

(statearr_33734_33775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (20))){
var inst_33698 = (state_33732[(7)]);
var inst_33709 = (state_33732[(2)]);
var inst_33710 = cljs.core.next.call(null,inst_33698);
var inst_33684 = inst_33710;
var inst_33685 = null;
var inst_33686 = (0);
var inst_33687 = (0);
var state_33732__$1 = (function (){var statearr_33735 = state_33732;
(statearr_33735[(8)] = inst_33687);

(statearr_33735[(9)] = inst_33709);

(statearr_33735[(10)] = inst_33685);

(statearr_33735[(11)] = inst_33686);

(statearr_33735[(12)] = inst_33684);

return statearr_33735;
})();
var statearr_33736_33776 = state_33732__$1;
(statearr_33736_33776[(2)] = null);

(statearr_33736_33776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (1))){
var state_33732__$1 = state_33732;
var statearr_33737_33777 = state_33732__$1;
(statearr_33737_33777[(2)] = null);

(statearr_33737_33777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (4))){
var inst_33673 = (state_33732[(13)]);
var inst_33673__$1 = (state_33732[(2)]);
var inst_33674 = (inst_33673__$1 == null);
var state_33732__$1 = (function (){var statearr_33738 = state_33732;
(statearr_33738[(13)] = inst_33673__$1);

return statearr_33738;
})();
if(cljs.core.truth_(inst_33674)){
var statearr_33739_33778 = state_33732__$1;
(statearr_33739_33778[(1)] = (5));

} else {
var statearr_33740_33779 = state_33732__$1;
(statearr_33740_33779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (15))){
var state_33732__$1 = state_33732;
var statearr_33744_33780 = state_33732__$1;
(statearr_33744_33780[(2)] = null);

(statearr_33744_33780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (21))){
var state_33732__$1 = state_33732;
var statearr_33745_33781 = state_33732__$1;
(statearr_33745_33781[(2)] = null);

(statearr_33745_33781[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (13))){
var inst_33687 = (state_33732[(8)]);
var inst_33685 = (state_33732[(10)]);
var inst_33686 = (state_33732[(11)]);
var inst_33684 = (state_33732[(12)]);
var inst_33694 = (state_33732[(2)]);
var inst_33695 = (inst_33687 + (1));
var tmp33741 = inst_33685;
var tmp33742 = inst_33686;
var tmp33743 = inst_33684;
var inst_33684__$1 = tmp33743;
var inst_33685__$1 = tmp33741;
var inst_33686__$1 = tmp33742;
var inst_33687__$1 = inst_33695;
var state_33732__$1 = (function (){var statearr_33746 = state_33732;
(statearr_33746[(8)] = inst_33687__$1);

(statearr_33746[(10)] = inst_33685__$1);

(statearr_33746[(11)] = inst_33686__$1);

(statearr_33746[(14)] = inst_33694);

(statearr_33746[(12)] = inst_33684__$1);

return statearr_33746;
})();
var statearr_33747_33782 = state_33732__$1;
(statearr_33747_33782[(2)] = null);

(statearr_33747_33782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (22))){
var state_33732__$1 = state_33732;
var statearr_33748_33783 = state_33732__$1;
(statearr_33748_33783[(2)] = null);

(statearr_33748_33783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (6))){
var inst_33673 = (state_33732[(13)]);
var inst_33682 = f.call(null,inst_33673);
var inst_33683 = cljs.core.seq.call(null,inst_33682);
var inst_33684 = inst_33683;
var inst_33685 = null;
var inst_33686 = (0);
var inst_33687 = (0);
var state_33732__$1 = (function (){var statearr_33749 = state_33732;
(statearr_33749[(8)] = inst_33687);

(statearr_33749[(10)] = inst_33685);

(statearr_33749[(11)] = inst_33686);

(statearr_33749[(12)] = inst_33684);

return statearr_33749;
})();
var statearr_33750_33784 = state_33732__$1;
(statearr_33750_33784[(2)] = null);

(statearr_33750_33784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (17))){
var inst_33698 = (state_33732[(7)]);
var inst_33702 = cljs.core.chunk_first.call(null,inst_33698);
var inst_33703 = cljs.core.chunk_rest.call(null,inst_33698);
var inst_33704 = cljs.core.count.call(null,inst_33702);
var inst_33684 = inst_33703;
var inst_33685 = inst_33702;
var inst_33686 = inst_33704;
var inst_33687 = (0);
var state_33732__$1 = (function (){var statearr_33751 = state_33732;
(statearr_33751[(8)] = inst_33687);

(statearr_33751[(10)] = inst_33685);

(statearr_33751[(11)] = inst_33686);

(statearr_33751[(12)] = inst_33684);

return statearr_33751;
})();
var statearr_33752_33785 = state_33732__$1;
(statearr_33752_33785[(2)] = null);

(statearr_33752_33785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (3))){
var inst_33730 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33732__$1,inst_33730);
} else {
if((state_val_33733 === (12))){
var inst_33718 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33753_33786 = state_33732__$1;
(statearr_33753_33786[(2)] = inst_33718);

(statearr_33753_33786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (2))){
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33732__$1,(4),in$);
} else {
if((state_val_33733 === (23))){
var inst_33726 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33754_33787 = state_33732__$1;
(statearr_33754_33787[(2)] = inst_33726);

(statearr_33754_33787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (19))){
var inst_33713 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33755_33788 = state_33732__$1;
(statearr_33755_33788[(2)] = inst_33713);

(statearr_33755_33788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (11))){
var inst_33698 = (state_33732[(7)]);
var inst_33684 = (state_33732[(12)]);
var inst_33698__$1 = cljs.core.seq.call(null,inst_33684);
var state_33732__$1 = (function (){var statearr_33756 = state_33732;
(statearr_33756[(7)] = inst_33698__$1);

return statearr_33756;
})();
if(inst_33698__$1){
var statearr_33757_33789 = state_33732__$1;
(statearr_33757_33789[(1)] = (14));

} else {
var statearr_33758_33790 = state_33732__$1;
(statearr_33758_33790[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (9))){
var inst_33720 = (state_33732[(2)]);
var inst_33721 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33732__$1 = (function (){var statearr_33759 = state_33732;
(statearr_33759[(15)] = inst_33720);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33721)){
var statearr_33760_33791 = state_33732__$1;
(statearr_33760_33791[(1)] = (21));

} else {
var statearr_33761_33792 = state_33732__$1;
(statearr_33761_33792[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (5))){
var inst_33676 = cljs.core.async.close_BANG_.call(null,out);
var state_33732__$1 = state_33732;
var statearr_33762_33793 = state_33732__$1;
(statearr_33762_33793[(2)] = inst_33676);

(statearr_33762_33793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (14))){
var inst_33698 = (state_33732[(7)]);
var inst_33700 = cljs.core.chunked_seq_QMARK_.call(null,inst_33698);
var state_33732__$1 = state_33732;
if(inst_33700){
var statearr_33763_33794 = state_33732__$1;
(statearr_33763_33794[(1)] = (17));

} else {
var statearr_33764_33795 = state_33732__$1;
(statearr_33764_33795[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (16))){
var inst_33716 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33765_33796 = state_33732__$1;
(statearr_33765_33796[(2)] = inst_33716);

(statearr_33765_33796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (10))){
var inst_33687 = (state_33732[(8)]);
var inst_33685 = (state_33732[(10)]);
var inst_33692 = cljs.core._nth.call(null,inst_33685,inst_33687);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33732__$1,(13),out,inst_33692);
} else {
if((state_val_33733 === (18))){
var inst_33698 = (state_33732[(7)]);
var inst_33707 = cljs.core.first.call(null,inst_33698);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33732__$1,(20),out,inst_33707);
} else {
if((state_val_33733 === (8))){
var inst_33687 = (state_33732[(8)]);
var inst_33686 = (state_33732[(11)]);
var inst_33689 = (inst_33687 < inst_33686);
var inst_33690 = inst_33689;
var state_33732__$1 = state_33732;
if(cljs.core.truth_(inst_33690)){
var statearr_33766_33797 = state_33732__$1;
(statearr_33766_33797[(1)] = (10));

} else {
var statearr_33767_33798 = state_33732__$1;
(statearr_33767_33798[(1)] = (11));

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
});})(c__30729__auto__))
;
return ((function (switch__30708__auto__,c__30729__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_33771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33771[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__);

(statearr_33771[(1)] = (1));

return statearr_33771;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____1 = (function (state_33732){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33772){if((e33772 instanceof Object)){
var ex__30712__auto__ = e33772;
var statearr_33773_33799 = state_33732;
(statearr_33773_33799[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33800 = state_33732;
state_33732 = G__33800;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__ = function(state_33732){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____1.call(this,state_33732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__))
})();
var state__30731__auto__ = (function (){var statearr_33774 = f__30730__auto__.call(null);
(statearr_33774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__))
);

return c__30729__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33801 = [];
var len__29087__auto___33804 = arguments.length;
var i__29088__auto___33805 = (0);
while(true){
if((i__29088__auto___33805 < len__29087__auto___33804)){
args33801.push((arguments[i__29088__auto___33805]));

var G__33806 = (i__29088__auto___33805 + (1));
i__29088__auto___33805 = G__33806;
continue;
} else {
}
break;
}

var G__33803 = args33801.length;
switch (G__33803) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33801.length)].join('')));

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
var args33808 = [];
var len__29087__auto___33811 = arguments.length;
var i__29088__auto___33812 = (0);
while(true){
if((i__29088__auto___33812 < len__29087__auto___33811)){
args33808.push((arguments[i__29088__auto___33812]));

var G__33813 = (i__29088__auto___33812 + (1));
i__29088__auto___33812 = G__33813;
continue;
} else {
}
break;
}

var G__33810 = args33808.length;
switch (G__33810) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33808.length)].join('')));

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
var args33815 = [];
var len__29087__auto___33866 = arguments.length;
var i__29088__auto___33867 = (0);
while(true){
if((i__29088__auto___33867 < len__29087__auto___33866)){
args33815.push((arguments[i__29088__auto___33867]));

var G__33868 = (i__29088__auto___33867 + (1));
i__29088__auto___33867 = G__33868;
continue;
} else {
}
break;
}

var G__33817 = args33815.length;
switch (G__33817) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33815.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30729__auto___33870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33870,out){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33870,out){
return (function (state_33841){
var state_val_33842 = (state_33841[(1)]);
if((state_val_33842 === (7))){
var inst_33836 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
var statearr_33843_33871 = state_33841__$1;
(statearr_33843_33871[(2)] = inst_33836);

(statearr_33843_33871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (1))){
var inst_33818 = null;
var state_33841__$1 = (function (){var statearr_33844 = state_33841;
(statearr_33844[(7)] = inst_33818);

return statearr_33844;
})();
var statearr_33845_33872 = state_33841__$1;
(statearr_33845_33872[(2)] = null);

(statearr_33845_33872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (4))){
var inst_33821 = (state_33841[(8)]);
var inst_33821__$1 = (state_33841[(2)]);
var inst_33822 = (inst_33821__$1 == null);
var inst_33823 = cljs.core.not.call(null,inst_33822);
var state_33841__$1 = (function (){var statearr_33846 = state_33841;
(statearr_33846[(8)] = inst_33821__$1);

return statearr_33846;
})();
if(inst_33823){
var statearr_33847_33873 = state_33841__$1;
(statearr_33847_33873[(1)] = (5));

} else {
var statearr_33848_33874 = state_33841__$1;
(statearr_33848_33874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (6))){
var state_33841__$1 = state_33841;
var statearr_33849_33875 = state_33841__$1;
(statearr_33849_33875[(2)] = null);

(statearr_33849_33875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (3))){
var inst_33838 = (state_33841[(2)]);
var inst_33839 = cljs.core.async.close_BANG_.call(null,out);
var state_33841__$1 = (function (){var statearr_33850 = state_33841;
(statearr_33850[(9)] = inst_33838);

return statearr_33850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33841__$1,inst_33839);
} else {
if((state_val_33842 === (2))){
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33841__$1,(4),ch);
} else {
if((state_val_33842 === (11))){
var inst_33821 = (state_33841[(8)]);
var inst_33830 = (state_33841[(2)]);
var inst_33818 = inst_33821;
var state_33841__$1 = (function (){var statearr_33851 = state_33841;
(statearr_33851[(7)] = inst_33818);

(statearr_33851[(10)] = inst_33830);

return statearr_33851;
})();
var statearr_33852_33876 = state_33841__$1;
(statearr_33852_33876[(2)] = null);

(statearr_33852_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (9))){
var inst_33821 = (state_33841[(8)]);
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33841__$1,(11),out,inst_33821);
} else {
if((state_val_33842 === (5))){
var inst_33818 = (state_33841[(7)]);
var inst_33821 = (state_33841[(8)]);
var inst_33825 = cljs.core._EQ_.call(null,inst_33821,inst_33818);
var state_33841__$1 = state_33841;
if(inst_33825){
var statearr_33854_33877 = state_33841__$1;
(statearr_33854_33877[(1)] = (8));

} else {
var statearr_33855_33878 = state_33841__$1;
(statearr_33855_33878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (10))){
var inst_33833 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
var statearr_33856_33879 = state_33841__$1;
(statearr_33856_33879[(2)] = inst_33833);

(statearr_33856_33879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (8))){
var inst_33818 = (state_33841[(7)]);
var tmp33853 = inst_33818;
var inst_33818__$1 = tmp33853;
var state_33841__$1 = (function (){var statearr_33857 = state_33841;
(statearr_33857[(7)] = inst_33818__$1);

return statearr_33857;
})();
var statearr_33858_33880 = state_33841__$1;
(statearr_33858_33880[(2)] = null);

(statearr_33858_33880[(1)] = (2));


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
});})(c__30729__auto___33870,out))
;
return ((function (switch__30708__auto__,c__30729__auto___33870,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_33862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33862[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_33862[(1)] = (1));

return statearr_33862;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_33841){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33863){if((e33863 instanceof Object)){
var ex__30712__auto__ = e33863;
var statearr_33864_33881 = state_33841;
(statearr_33864_33881[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33882 = state_33841;
state_33841 = G__33882;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_33841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_33841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33870,out))
})();
var state__30731__auto__ = (function (){var statearr_33865 = f__30730__auto__.call(null);
(statearr_33865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33870);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33870,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33883 = [];
var len__29087__auto___33953 = arguments.length;
var i__29088__auto___33954 = (0);
while(true){
if((i__29088__auto___33954 < len__29087__auto___33953)){
args33883.push((arguments[i__29088__auto___33954]));

var G__33955 = (i__29088__auto___33954 + (1));
i__29088__auto___33954 = G__33955;
continue;
} else {
}
break;
}

var G__33885 = args33883.length;
switch (G__33885) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33883.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30729__auto___33957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___33957,out){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___33957,out){
return (function (state_33923){
var state_val_33924 = (state_33923[(1)]);
if((state_val_33924 === (7))){
var inst_33919 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33925_33958 = state_33923__$1;
(statearr_33925_33958[(2)] = inst_33919);

(statearr_33925_33958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (1))){
var inst_33886 = (new Array(n));
var inst_33887 = inst_33886;
var inst_33888 = (0);
var state_33923__$1 = (function (){var statearr_33926 = state_33923;
(statearr_33926[(7)] = inst_33887);

(statearr_33926[(8)] = inst_33888);

return statearr_33926;
})();
var statearr_33927_33959 = state_33923__$1;
(statearr_33927_33959[(2)] = null);

(statearr_33927_33959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (4))){
var inst_33891 = (state_33923[(9)]);
var inst_33891__$1 = (state_33923[(2)]);
var inst_33892 = (inst_33891__$1 == null);
var inst_33893 = cljs.core.not.call(null,inst_33892);
var state_33923__$1 = (function (){var statearr_33928 = state_33923;
(statearr_33928[(9)] = inst_33891__$1);

return statearr_33928;
})();
if(inst_33893){
var statearr_33929_33960 = state_33923__$1;
(statearr_33929_33960[(1)] = (5));

} else {
var statearr_33930_33961 = state_33923__$1;
(statearr_33930_33961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (15))){
var inst_33913 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33931_33962 = state_33923__$1;
(statearr_33931_33962[(2)] = inst_33913);

(statearr_33931_33962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (13))){
var state_33923__$1 = state_33923;
var statearr_33932_33963 = state_33923__$1;
(statearr_33932_33963[(2)] = null);

(statearr_33932_33963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (6))){
var inst_33888 = (state_33923[(8)]);
var inst_33909 = (inst_33888 > (0));
var state_33923__$1 = state_33923;
if(cljs.core.truth_(inst_33909)){
var statearr_33933_33964 = state_33923__$1;
(statearr_33933_33964[(1)] = (12));

} else {
var statearr_33934_33965 = state_33923__$1;
(statearr_33934_33965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (3))){
var inst_33921 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33923__$1,inst_33921);
} else {
if((state_val_33924 === (12))){
var inst_33887 = (state_33923[(7)]);
var inst_33911 = cljs.core.vec.call(null,inst_33887);
var state_33923__$1 = state_33923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33923__$1,(15),out,inst_33911);
} else {
if((state_val_33924 === (2))){
var state_33923__$1 = state_33923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33923__$1,(4),ch);
} else {
if((state_val_33924 === (11))){
var inst_33903 = (state_33923[(2)]);
var inst_33904 = (new Array(n));
var inst_33887 = inst_33904;
var inst_33888 = (0);
var state_33923__$1 = (function (){var statearr_33935 = state_33923;
(statearr_33935[(7)] = inst_33887);

(statearr_33935[(8)] = inst_33888);

(statearr_33935[(10)] = inst_33903);

return statearr_33935;
})();
var statearr_33936_33966 = state_33923__$1;
(statearr_33936_33966[(2)] = null);

(statearr_33936_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (9))){
var inst_33887 = (state_33923[(7)]);
var inst_33901 = cljs.core.vec.call(null,inst_33887);
var state_33923__$1 = state_33923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33923__$1,(11),out,inst_33901);
} else {
if((state_val_33924 === (5))){
var inst_33887 = (state_33923[(7)]);
var inst_33888 = (state_33923[(8)]);
var inst_33891 = (state_33923[(9)]);
var inst_33896 = (state_33923[(11)]);
var inst_33895 = (inst_33887[inst_33888] = inst_33891);
var inst_33896__$1 = (inst_33888 + (1));
var inst_33897 = (inst_33896__$1 < n);
var state_33923__$1 = (function (){var statearr_33937 = state_33923;
(statearr_33937[(12)] = inst_33895);

(statearr_33937[(11)] = inst_33896__$1);

return statearr_33937;
})();
if(cljs.core.truth_(inst_33897)){
var statearr_33938_33967 = state_33923__$1;
(statearr_33938_33967[(1)] = (8));

} else {
var statearr_33939_33968 = state_33923__$1;
(statearr_33939_33968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (14))){
var inst_33916 = (state_33923[(2)]);
var inst_33917 = cljs.core.async.close_BANG_.call(null,out);
var state_33923__$1 = (function (){var statearr_33941 = state_33923;
(statearr_33941[(13)] = inst_33916);

return statearr_33941;
})();
var statearr_33942_33969 = state_33923__$1;
(statearr_33942_33969[(2)] = inst_33917);

(statearr_33942_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (10))){
var inst_33907 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33943_33970 = state_33923__$1;
(statearr_33943_33970[(2)] = inst_33907);

(statearr_33943_33970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (8))){
var inst_33887 = (state_33923[(7)]);
var inst_33896 = (state_33923[(11)]);
var tmp33940 = inst_33887;
var inst_33887__$1 = tmp33940;
var inst_33888 = inst_33896;
var state_33923__$1 = (function (){var statearr_33944 = state_33923;
(statearr_33944[(7)] = inst_33887__$1);

(statearr_33944[(8)] = inst_33888);

return statearr_33944;
})();
var statearr_33945_33971 = state_33923__$1;
(statearr_33945_33971[(2)] = null);

(statearr_33945_33971[(1)] = (2));


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
});})(c__30729__auto___33957,out))
;
return ((function (switch__30708__auto__,c__30729__auto___33957,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_33949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33949[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_33949[(1)] = (1));

return statearr_33949;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_33923){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_33923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33950){if((e33950 instanceof Object)){
var ex__30712__auto__ = e33950;
var statearr_33951_33972 = state_33923;
(statearr_33951_33972[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33973 = state_33923;
state_33923 = G__33973;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_33923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_33923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___33957,out))
})();
var state__30731__auto__ = (function (){var statearr_33952 = f__30730__auto__.call(null);
(statearr_33952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___33957);

return statearr_33952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___33957,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33974 = [];
var len__29087__auto___34048 = arguments.length;
var i__29088__auto___34049 = (0);
while(true){
if((i__29088__auto___34049 < len__29087__auto___34048)){
args33974.push((arguments[i__29088__auto___34049]));

var G__34050 = (i__29088__auto___34049 + (1));
i__29088__auto___34049 = G__34050;
continue;
} else {
}
break;
}

var G__33976 = args33974.length;
switch (G__33976) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33974.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30729__auto___34052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___34052,out){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___34052,out){
return (function (state_34018){
var state_val_34019 = (state_34018[(1)]);
if((state_val_34019 === (7))){
var inst_34014 = (state_34018[(2)]);
var state_34018__$1 = state_34018;
var statearr_34020_34053 = state_34018__$1;
(statearr_34020_34053[(2)] = inst_34014);

(statearr_34020_34053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (1))){
var inst_33977 = [];
var inst_33978 = inst_33977;
var inst_33979 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34018__$1 = (function (){var statearr_34021 = state_34018;
(statearr_34021[(7)] = inst_33978);

(statearr_34021[(8)] = inst_33979);

return statearr_34021;
})();
var statearr_34022_34054 = state_34018__$1;
(statearr_34022_34054[(2)] = null);

(statearr_34022_34054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (4))){
var inst_33982 = (state_34018[(9)]);
var inst_33982__$1 = (state_34018[(2)]);
var inst_33983 = (inst_33982__$1 == null);
var inst_33984 = cljs.core.not.call(null,inst_33983);
var state_34018__$1 = (function (){var statearr_34023 = state_34018;
(statearr_34023[(9)] = inst_33982__$1);

return statearr_34023;
})();
if(inst_33984){
var statearr_34024_34055 = state_34018__$1;
(statearr_34024_34055[(1)] = (5));

} else {
var statearr_34025_34056 = state_34018__$1;
(statearr_34025_34056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (15))){
var inst_34008 = (state_34018[(2)]);
var state_34018__$1 = state_34018;
var statearr_34026_34057 = state_34018__$1;
(statearr_34026_34057[(2)] = inst_34008);

(statearr_34026_34057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (13))){
var state_34018__$1 = state_34018;
var statearr_34027_34058 = state_34018__$1;
(statearr_34027_34058[(2)] = null);

(statearr_34027_34058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (6))){
var inst_33978 = (state_34018[(7)]);
var inst_34003 = inst_33978.length;
var inst_34004 = (inst_34003 > (0));
var state_34018__$1 = state_34018;
if(cljs.core.truth_(inst_34004)){
var statearr_34028_34059 = state_34018__$1;
(statearr_34028_34059[(1)] = (12));

} else {
var statearr_34029_34060 = state_34018__$1;
(statearr_34029_34060[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (3))){
var inst_34016 = (state_34018[(2)]);
var state_34018__$1 = state_34018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34018__$1,inst_34016);
} else {
if((state_val_34019 === (12))){
var inst_33978 = (state_34018[(7)]);
var inst_34006 = cljs.core.vec.call(null,inst_33978);
var state_34018__$1 = state_34018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34018__$1,(15),out,inst_34006);
} else {
if((state_val_34019 === (2))){
var state_34018__$1 = state_34018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34018__$1,(4),ch);
} else {
if((state_val_34019 === (11))){
var inst_33982 = (state_34018[(9)]);
var inst_33986 = (state_34018[(10)]);
var inst_33996 = (state_34018[(2)]);
var inst_33997 = [];
var inst_33998 = inst_33997.push(inst_33982);
var inst_33978 = inst_33997;
var inst_33979 = inst_33986;
var state_34018__$1 = (function (){var statearr_34030 = state_34018;
(statearr_34030[(11)] = inst_33998);

(statearr_34030[(12)] = inst_33996);

(statearr_34030[(7)] = inst_33978);

(statearr_34030[(8)] = inst_33979);

return statearr_34030;
})();
var statearr_34031_34061 = state_34018__$1;
(statearr_34031_34061[(2)] = null);

(statearr_34031_34061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (9))){
var inst_33978 = (state_34018[(7)]);
var inst_33994 = cljs.core.vec.call(null,inst_33978);
var state_34018__$1 = state_34018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34018__$1,(11),out,inst_33994);
} else {
if((state_val_34019 === (5))){
var inst_33982 = (state_34018[(9)]);
var inst_33986 = (state_34018[(10)]);
var inst_33979 = (state_34018[(8)]);
var inst_33986__$1 = f.call(null,inst_33982);
var inst_33987 = cljs.core._EQ_.call(null,inst_33986__$1,inst_33979);
var inst_33988 = cljs.core.keyword_identical_QMARK_.call(null,inst_33979,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33989 = (inst_33987) || (inst_33988);
var state_34018__$1 = (function (){var statearr_34032 = state_34018;
(statearr_34032[(10)] = inst_33986__$1);

return statearr_34032;
})();
if(cljs.core.truth_(inst_33989)){
var statearr_34033_34062 = state_34018__$1;
(statearr_34033_34062[(1)] = (8));

} else {
var statearr_34034_34063 = state_34018__$1;
(statearr_34034_34063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (14))){
var inst_34011 = (state_34018[(2)]);
var inst_34012 = cljs.core.async.close_BANG_.call(null,out);
var state_34018__$1 = (function (){var statearr_34036 = state_34018;
(statearr_34036[(13)] = inst_34011);

return statearr_34036;
})();
var statearr_34037_34064 = state_34018__$1;
(statearr_34037_34064[(2)] = inst_34012);

(statearr_34037_34064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (10))){
var inst_34001 = (state_34018[(2)]);
var state_34018__$1 = state_34018;
var statearr_34038_34065 = state_34018__$1;
(statearr_34038_34065[(2)] = inst_34001);

(statearr_34038_34065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34019 === (8))){
var inst_33982 = (state_34018[(9)]);
var inst_33986 = (state_34018[(10)]);
var inst_33978 = (state_34018[(7)]);
var inst_33991 = inst_33978.push(inst_33982);
var tmp34035 = inst_33978;
var inst_33978__$1 = tmp34035;
var inst_33979 = inst_33986;
var state_34018__$1 = (function (){var statearr_34039 = state_34018;
(statearr_34039[(14)] = inst_33991);

(statearr_34039[(7)] = inst_33978__$1);

(statearr_34039[(8)] = inst_33979);

return statearr_34039;
})();
var statearr_34040_34066 = state_34018__$1;
(statearr_34040_34066[(2)] = null);

(statearr_34040_34066[(1)] = (2));


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
});})(c__30729__auto___34052,out))
;
return ((function (switch__30708__auto__,c__30729__auto___34052,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_34044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34044[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_34044[(1)] = (1));

return statearr_34044;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_34018){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_34018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e34045){if((e34045 instanceof Object)){
var ex__30712__auto__ = e34045;
var statearr_34046_34067 = state_34018;
(statearr_34046_34067[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34068 = state_34018;
state_34018 = G__34068;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_34018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_34018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___34052,out))
})();
var state__30731__auto__ = (function (){var statearr_34047 = f__30730__auto__.call(null);
(statearr_34047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___34052);

return statearr_34047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___34052,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map