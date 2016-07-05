// Compiled by ClojureScript 1.9.76 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35333 = arguments.length;
var i__29088__auto___35334 = (0);
while(true){
if((i__29088__auto___35334 < len__29087__auto___35333)){
args__29094__auto__.push((arguments[i__29088__auto___35334]));

var G__35335 = (i__29088__auto___35334 + (1));
i__29088__auto___35334 = G__35335;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35332){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35332));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35337 = arguments.length;
var i__29088__auto___35338 = (0);
while(true){
if((i__29088__auto___35338 < len__29087__auto___35337)){
args__29094__auto__.push((arguments[i__29088__auto___35338]));

var G__35339 = (i__29088__auto___35338 + (1));
i__29088__auto___35338 = G__35339;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35336){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35336));
});

var g_QMARK__35340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35341 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35340){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35340))
,null));
var mkg_35342 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35340,g_35341){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35340,g_35341))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35340,g_35341,mkg_35342){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35340).call(null,x);
});})(g_QMARK__35340,g_35341,mkg_35342))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35340,g_35341,mkg_35342){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35342).call(null,gfn);
});})(g_QMARK__35340,g_35341,mkg_35342))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35340,g_35341,mkg_35342){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35341).call(null,generator);
});})(g_QMARK__35340,g_35341,mkg_35342))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30572__auto___35359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__30572__auto___35359){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35360 = arguments.length;
var i__29088__auto___35361 = (0);
while(true){
if((i__29088__auto___35361 < len__29087__auto___35360)){
args__29094__auto__.push((arguments[i__29088__auto___35361]));

var G__35362 = (i__29088__auto___35361 + (1));
i__29088__auto___35361 = G__35362;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35359))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35359){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35359),args);
});})(g__30572__auto___35359))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__30572__auto___35359){
return (function (seq35343){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35343));
});})(g__30572__auto___35359))
;


var g__30572__auto___35363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__30572__auto___35363){
return (function cljs$spec$impl$gen$list(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35364 = arguments.length;
var i__29088__auto___35365 = (0);
while(true){
if((i__29088__auto___35365 < len__29087__auto___35364)){
args__29094__auto__.push((arguments[i__29088__auto___35365]));

var G__35366 = (i__29088__auto___35365 + (1));
i__29088__auto___35365 = G__35366;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35363))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35363){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35363),args);
});})(g__30572__auto___35363))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__30572__auto___35363){
return (function (seq35344){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35344));
});})(g__30572__auto___35363))
;


var g__30572__auto___35367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__30572__auto___35367){
return (function cljs$spec$impl$gen$map(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35368 = arguments.length;
var i__29088__auto___35369 = (0);
while(true){
if((i__29088__auto___35369 < len__29087__auto___35368)){
args__29094__auto__.push((arguments[i__29088__auto___35369]));

var G__35370 = (i__29088__auto___35369 + (1));
i__29088__auto___35369 = G__35370;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35367))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35367){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35367),args);
});})(g__30572__auto___35367))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__30572__auto___35367){
return (function (seq35345){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35345));
});})(g__30572__auto___35367))
;


var g__30572__auto___35371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__30572__auto___35371){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35372 = arguments.length;
var i__29088__auto___35373 = (0);
while(true){
if((i__29088__auto___35373 < len__29087__auto___35372)){
args__29094__auto__.push((arguments[i__29088__auto___35373]));

var G__35374 = (i__29088__auto___35373 + (1));
i__29088__auto___35373 = G__35374;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35371))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35371){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35371),args);
});})(g__30572__auto___35371))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__30572__auto___35371){
return (function (seq35346){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35346));
});})(g__30572__auto___35371))
;


var g__30572__auto___35375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__30572__auto___35375){
return (function cljs$spec$impl$gen$set(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35376 = arguments.length;
var i__29088__auto___35377 = (0);
while(true){
if((i__29088__auto___35377 < len__29087__auto___35376)){
args__29094__auto__.push((arguments[i__29088__auto___35377]));

var G__35378 = (i__29088__auto___35377 + (1));
i__29088__auto___35377 = G__35378;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35375))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35375){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35375),args);
});})(g__30572__auto___35375))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__30572__auto___35375){
return (function (seq35347){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35347));
});})(g__30572__auto___35375))
;


var g__30572__auto___35379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__30572__auto___35379){
return (function cljs$spec$impl$gen$vector(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35380 = arguments.length;
var i__29088__auto___35381 = (0);
while(true){
if((i__29088__auto___35381 < len__29087__auto___35380)){
args__29094__auto__.push((arguments[i__29088__auto___35381]));

var G__35382 = (i__29088__auto___35381 + (1));
i__29088__auto___35381 = G__35382;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35379))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35379){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35379),args);
});})(g__30572__auto___35379))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__30572__auto___35379){
return (function (seq35348){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35348));
});})(g__30572__auto___35379))
;


var g__30572__auto___35383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__30572__auto___35383){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35384 = arguments.length;
var i__29088__auto___35385 = (0);
while(true){
if((i__29088__auto___35385 < len__29087__auto___35384)){
args__29094__auto__.push((arguments[i__29088__auto___35385]));

var G__35386 = (i__29088__auto___35385 + (1));
i__29088__auto___35385 = G__35386;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35383))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35383){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35383),args);
});})(g__30572__auto___35383))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__30572__auto___35383){
return (function (seq35349){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35349));
});})(g__30572__auto___35383))
;


var g__30572__auto___35387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__30572__auto___35387){
return (function cljs$spec$impl$gen$elements(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35388 = arguments.length;
var i__29088__auto___35389 = (0);
while(true){
if((i__29088__auto___35389 < len__29087__auto___35388)){
args__29094__auto__.push((arguments[i__29088__auto___35389]));

var G__35390 = (i__29088__auto___35389 + (1));
i__29088__auto___35389 = G__35390;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35387))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35387){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35387),args);
});})(g__30572__auto___35387))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__30572__auto___35387){
return (function (seq35350){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35350));
});})(g__30572__auto___35387))
;


var g__30572__auto___35391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__30572__auto___35391){
return (function cljs$spec$impl$gen$bind(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35392 = arguments.length;
var i__29088__auto___35393 = (0);
while(true){
if((i__29088__auto___35393 < len__29087__auto___35392)){
args__29094__auto__.push((arguments[i__29088__auto___35393]));

var G__35394 = (i__29088__auto___35393 + (1));
i__29088__auto___35393 = G__35394;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35391))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35391){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35391),args);
});})(g__30572__auto___35391))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__30572__auto___35391){
return (function (seq35351){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35351));
});})(g__30572__auto___35391))
;


var g__30572__auto___35395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__30572__auto___35395){
return (function cljs$spec$impl$gen$choose(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35396 = arguments.length;
var i__29088__auto___35397 = (0);
while(true){
if((i__29088__auto___35397 < len__29087__auto___35396)){
args__29094__auto__.push((arguments[i__29088__auto___35397]));

var G__35398 = (i__29088__auto___35397 + (1));
i__29088__auto___35397 = G__35398;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35395))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35395){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35395),args);
});})(g__30572__auto___35395))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__30572__auto___35395){
return (function (seq35352){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35352));
});})(g__30572__auto___35395))
;


var g__30572__auto___35399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__30572__auto___35399){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35400 = arguments.length;
var i__29088__auto___35401 = (0);
while(true){
if((i__29088__auto___35401 < len__29087__auto___35400)){
args__29094__auto__.push((arguments[i__29088__auto___35401]));

var G__35402 = (i__29088__auto___35401 + (1));
i__29088__auto___35401 = G__35402;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35399))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35399){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35399),args);
});})(g__30572__auto___35399))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__30572__auto___35399){
return (function (seq35353){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35353));
});})(g__30572__auto___35399))
;


var g__30572__auto___35403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__30572__auto___35403){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35404 = arguments.length;
var i__29088__auto___35405 = (0);
while(true){
if((i__29088__auto___35405 < len__29087__auto___35404)){
args__29094__auto__.push((arguments[i__29088__auto___35405]));

var G__35406 = (i__29088__auto___35405 + (1));
i__29088__auto___35405 = G__35406;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35403))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35403){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35403),args);
});})(g__30572__auto___35403))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__30572__auto___35403){
return (function (seq35354){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35354));
});})(g__30572__auto___35403))
;


var g__30572__auto___35407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__30572__auto___35407){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35408 = arguments.length;
var i__29088__auto___35409 = (0);
while(true){
if((i__29088__auto___35409 < len__29087__auto___35408)){
args__29094__auto__.push((arguments[i__29088__auto___35409]));

var G__35410 = (i__29088__auto___35409 + (1));
i__29088__auto___35409 = G__35410;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35407))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35407){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35407),args);
});})(g__30572__auto___35407))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__30572__auto___35407){
return (function (seq35355){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35355));
});})(g__30572__auto___35407))
;


var g__30572__auto___35411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__30572__auto___35411){
return (function cljs$spec$impl$gen$sample(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35412 = arguments.length;
var i__29088__auto___35413 = (0);
while(true){
if((i__29088__auto___35413 < len__29087__auto___35412)){
args__29094__auto__.push((arguments[i__29088__auto___35413]));

var G__35414 = (i__29088__auto___35413 + (1));
i__29088__auto___35413 = G__35414;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35411))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35411){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35411),args);
});})(g__30572__auto___35411))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__30572__auto___35411){
return (function (seq35356){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35356));
});})(g__30572__auto___35411))
;


var g__30572__auto___35415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__30572__auto___35415){
return (function cljs$spec$impl$gen$return(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35416 = arguments.length;
var i__29088__auto___35417 = (0);
while(true){
if((i__29088__auto___35417 < len__29087__auto___35416)){
args__29094__auto__.push((arguments[i__29088__auto___35417]));

var G__35418 = (i__29088__auto___35417 + (1));
i__29088__auto___35417 = G__35418;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35415))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35415){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35415),args);
});})(g__30572__auto___35415))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__30572__auto___35415){
return (function (seq35357){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35357));
});})(g__30572__auto___35415))
;


var g__30572__auto___35419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__30572__auto___35419){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35420 = arguments.length;
var i__29088__auto___35421 = (0);
while(true){
if((i__29088__auto___35421 < len__29087__auto___35420)){
args__29094__auto__.push((arguments[i__29088__auto___35421]));

var G__35422 = (i__29088__auto___35421 + (1));
i__29088__auto___35421 = G__35422;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30572__auto___35419))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___35419){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30572__auto___35419),args);
});})(g__30572__auto___35419))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30572__auto___35419){
return (function (seq35358){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35358));
});})(g__30572__auto___35419))
;

var g__30585__auto___35444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__30585__auto___35444){
return (function cljs$spec$impl$gen$any(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35445 = arguments.length;
var i__29088__auto___35446 = (0);
while(true){
if((i__29088__auto___35446 < len__29087__auto___35445)){
args__29094__auto__.push((arguments[i__29088__auto___35446]));

var G__35447 = (i__29088__auto___35446 + (1));
i__29088__auto___35446 = G__35447;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35444))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35444){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35444);
});})(g__30585__auto___35444))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__30585__auto___35444){
return (function (seq35423){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35423));
});})(g__30585__auto___35444))
;


var g__30585__auto___35448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__30585__auto___35448){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35449 = arguments.length;
var i__29088__auto___35450 = (0);
while(true){
if((i__29088__auto___35450 < len__29087__auto___35449)){
args__29094__auto__.push((arguments[i__29088__auto___35450]));

var G__35451 = (i__29088__auto___35450 + (1));
i__29088__auto___35450 = G__35451;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35448))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35448){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35448);
});})(g__30585__auto___35448))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__30585__auto___35448){
return (function (seq35424){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35424));
});})(g__30585__auto___35448))
;


var g__30585__auto___35452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__30585__auto___35452){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35453 = arguments.length;
var i__29088__auto___35454 = (0);
while(true){
if((i__29088__auto___35454 < len__29087__auto___35453)){
args__29094__auto__.push((arguments[i__29088__auto___35454]));

var G__35455 = (i__29088__auto___35454 + (1));
i__29088__auto___35454 = G__35455;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35452))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35452){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35452);
});})(g__30585__auto___35452))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__30585__auto___35452){
return (function (seq35425){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35425));
});})(g__30585__auto___35452))
;


var g__30585__auto___35456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__30585__auto___35456){
return (function cljs$spec$impl$gen$char(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35457 = arguments.length;
var i__29088__auto___35458 = (0);
while(true){
if((i__29088__auto___35458 < len__29087__auto___35457)){
args__29094__auto__.push((arguments[i__29088__auto___35458]));

var G__35459 = (i__29088__auto___35458 + (1));
i__29088__auto___35458 = G__35459;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35456))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35456){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35456);
});})(g__30585__auto___35456))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__30585__auto___35456){
return (function (seq35426){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35426));
});})(g__30585__auto___35456))
;


var g__30585__auto___35460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__30585__auto___35460){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35461 = arguments.length;
var i__29088__auto___35462 = (0);
while(true){
if((i__29088__auto___35462 < len__29087__auto___35461)){
args__29094__auto__.push((arguments[i__29088__auto___35462]));

var G__35463 = (i__29088__auto___35462 + (1));
i__29088__auto___35462 = G__35463;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35460))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35460){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35460);
});})(g__30585__auto___35460))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__30585__auto___35460){
return (function (seq35427){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35427));
});})(g__30585__auto___35460))
;


var g__30585__auto___35464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__30585__auto___35464){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35465 = arguments.length;
var i__29088__auto___35466 = (0);
while(true){
if((i__29088__auto___35466 < len__29087__auto___35465)){
args__29094__auto__.push((arguments[i__29088__auto___35466]));

var G__35467 = (i__29088__auto___35466 + (1));
i__29088__auto___35466 = G__35467;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35464))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35464){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35464);
});})(g__30585__auto___35464))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__30585__auto___35464){
return (function (seq35428){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35428));
});})(g__30585__auto___35464))
;


var g__30585__auto___35468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__30585__auto___35468){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35469 = arguments.length;
var i__29088__auto___35470 = (0);
while(true){
if((i__29088__auto___35470 < len__29087__auto___35469)){
args__29094__auto__.push((arguments[i__29088__auto___35470]));

var G__35471 = (i__29088__auto___35470 + (1));
i__29088__auto___35470 = G__35471;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35468))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35468){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35468);
});})(g__30585__auto___35468))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__30585__auto___35468){
return (function (seq35429){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35429));
});})(g__30585__auto___35468))
;


var g__30585__auto___35472 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__30585__auto___35472){
return (function cljs$spec$impl$gen$double(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35473 = arguments.length;
var i__29088__auto___35474 = (0);
while(true){
if((i__29088__auto___35474 < len__29087__auto___35473)){
args__29094__auto__.push((arguments[i__29088__auto___35474]));

var G__35475 = (i__29088__auto___35474 + (1));
i__29088__auto___35474 = G__35475;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35472))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35472){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35472);
});})(g__30585__auto___35472))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__30585__auto___35472){
return (function (seq35430){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35430));
});})(g__30585__auto___35472))
;


var g__30585__auto___35476 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__30585__auto___35476){
return (function cljs$spec$impl$gen$int(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35477 = arguments.length;
var i__29088__auto___35478 = (0);
while(true){
if((i__29088__auto___35478 < len__29087__auto___35477)){
args__29094__auto__.push((arguments[i__29088__auto___35478]));

var G__35479 = (i__29088__auto___35478 + (1));
i__29088__auto___35478 = G__35479;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35476))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35476){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35476);
});})(g__30585__auto___35476))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__30585__auto___35476){
return (function (seq35431){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35431));
});})(g__30585__auto___35476))
;


var g__30585__auto___35480 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__30585__auto___35480){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35481 = arguments.length;
var i__29088__auto___35482 = (0);
while(true){
if((i__29088__auto___35482 < len__29087__auto___35481)){
args__29094__auto__.push((arguments[i__29088__auto___35482]));

var G__35483 = (i__29088__auto___35482 + (1));
i__29088__auto___35482 = G__35483;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35480))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35480){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35480);
});})(g__30585__auto___35480))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__30585__auto___35480){
return (function (seq35432){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35432));
});})(g__30585__auto___35480))
;


var g__30585__auto___35484 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__30585__auto___35484){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35485 = arguments.length;
var i__29088__auto___35486 = (0);
while(true){
if((i__29088__auto___35486 < len__29087__auto___35485)){
args__29094__auto__.push((arguments[i__29088__auto___35486]));

var G__35487 = (i__29088__auto___35486 + (1));
i__29088__auto___35486 = G__35487;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35484))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35484){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35484);
});})(g__30585__auto___35484))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__30585__auto___35484){
return (function (seq35433){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35433));
});})(g__30585__auto___35484))
;


var g__30585__auto___35488 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__30585__auto___35488){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35489 = arguments.length;
var i__29088__auto___35490 = (0);
while(true){
if((i__29088__auto___35490 < len__29087__auto___35489)){
args__29094__auto__.push((arguments[i__29088__auto___35490]));

var G__35491 = (i__29088__auto___35490 + (1));
i__29088__auto___35490 = G__35491;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35488))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35488){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35488);
});})(g__30585__auto___35488))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__30585__auto___35488){
return (function (seq35434){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35434));
});})(g__30585__auto___35488))
;


var g__30585__auto___35492 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__30585__auto___35492){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35493 = arguments.length;
var i__29088__auto___35494 = (0);
while(true){
if((i__29088__auto___35494 < len__29087__auto___35493)){
args__29094__auto__.push((arguments[i__29088__auto___35494]));

var G__35495 = (i__29088__auto___35494 + (1));
i__29088__auto___35494 = G__35495;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35492))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35492){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35492);
});})(g__30585__auto___35492))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__30585__auto___35492){
return (function (seq35435){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35435));
});})(g__30585__auto___35492))
;


var g__30585__auto___35496 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__30585__auto___35496){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35497 = arguments.length;
var i__29088__auto___35498 = (0);
while(true){
if((i__29088__auto___35498 < len__29087__auto___35497)){
args__29094__auto__.push((arguments[i__29088__auto___35498]));

var G__35499 = (i__29088__auto___35498 + (1));
i__29088__auto___35498 = G__35499;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35496))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35496){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35496);
});})(g__30585__auto___35496))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__30585__auto___35496){
return (function (seq35436){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35436));
});})(g__30585__auto___35496))
;


var g__30585__auto___35500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__30585__auto___35500){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35501 = arguments.length;
var i__29088__auto___35502 = (0);
while(true){
if((i__29088__auto___35502 < len__29087__auto___35501)){
args__29094__auto__.push((arguments[i__29088__auto___35502]));

var G__35503 = (i__29088__auto___35502 + (1));
i__29088__auto___35502 = G__35503;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35500))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35500){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35500);
});})(g__30585__auto___35500))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__30585__auto___35500){
return (function (seq35437){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35437));
});})(g__30585__auto___35500))
;


var g__30585__auto___35504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__30585__auto___35504){
return (function cljs$spec$impl$gen$string(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35505 = arguments.length;
var i__29088__auto___35506 = (0);
while(true){
if((i__29088__auto___35506 < len__29087__auto___35505)){
args__29094__auto__.push((arguments[i__29088__auto___35506]));

var G__35507 = (i__29088__auto___35506 + (1));
i__29088__auto___35506 = G__35507;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35504))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35504){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35504);
});})(g__30585__auto___35504))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__30585__auto___35504){
return (function (seq35438){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35438));
});})(g__30585__auto___35504))
;


var g__30585__auto___35508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__30585__auto___35508){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35509 = arguments.length;
var i__29088__auto___35510 = (0);
while(true){
if((i__29088__auto___35510 < len__29087__auto___35509)){
args__29094__auto__.push((arguments[i__29088__auto___35510]));

var G__35511 = (i__29088__auto___35510 + (1));
i__29088__auto___35510 = G__35511;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35508))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35508){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35508);
});})(g__30585__auto___35508))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__30585__auto___35508){
return (function (seq35439){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35439));
});})(g__30585__auto___35508))
;


var g__30585__auto___35512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__30585__auto___35512){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35513 = arguments.length;
var i__29088__auto___35514 = (0);
while(true){
if((i__29088__auto___35514 < len__29087__auto___35513)){
args__29094__auto__.push((arguments[i__29088__auto___35514]));

var G__35515 = (i__29088__auto___35514 + (1));
i__29088__auto___35514 = G__35515;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35512))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35512){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35512);
});})(g__30585__auto___35512))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__30585__auto___35512){
return (function (seq35440){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35440));
});})(g__30585__auto___35512))
;


var g__30585__auto___35516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__30585__auto___35516){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35517 = arguments.length;
var i__29088__auto___35518 = (0);
while(true){
if((i__29088__auto___35518 < len__29087__auto___35517)){
args__29094__auto__.push((arguments[i__29088__auto___35518]));

var G__35519 = (i__29088__auto___35518 + (1));
i__29088__auto___35518 = G__35519;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35516))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35516){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35516);
});})(g__30585__auto___35516))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__30585__auto___35516){
return (function (seq35441){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35441));
});})(g__30585__auto___35516))
;


var g__30585__auto___35520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__30585__auto___35520){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35521 = arguments.length;
var i__29088__auto___35522 = (0);
while(true){
if((i__29088__auto___35522 < len__29087__auto___35521)){
args__29094__auto__.push((arguments[i__29088__auto___35522]));

var G__35523 = (i__29088__auto___35522 + (1));
i__29088__auto___35522 = G__35523;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35520))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35520){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35520);
});})(g__30585__auto___35520))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__30585__auto___35520){
return (function (seq35442){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35442));
});})(g__30585__auto___35520))
;


var g__30585__auto___35524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__30585__auto___35524){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35525 = arguments.length;
var i__29088__auto___35526 = (0);
while(true){
if((i__29088__auto___35526 < len__29087__auto___35525)){
args__29094__auto__.push((arguments[i__29088__auto___35526]));

var G__35527 = (i__29088__auto___35526 + (1));
i__29088__auto___35526 = G__35527;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});})(g__30585__auto___35524))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30585__auto___35524){
return (function (args){
return cljs.core.deref.call(null,g__30585__auto___35524);
});})(g__30585__auto___35524))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__30585__auto___35524){
return (function (seq35443){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35443));
});})(g__30585__auto___35524))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35530 = arguments.length;
var i__29088__auto___35531 = (0);
while(true){
if((i__29088__auto___35531 < len__29087__auto___35530)){
args__29094__auto__.push((arguments[i__29088__auto___35531]));

var G__35532 = (i__29088__auto___35531 + (1));
i__29088__auto___35531 = G__35532;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35528_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35528_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35529){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35529));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35533_SHARP_){
return (new Date(p1__35533_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map