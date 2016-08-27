// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.elements');
goog.require('cljs.core');
goog.require('sablono.core');
mokepon.elements.todo = (function mokepon$elements$todo(){
return window.alert("todo");
});
mokepon.elements.a = (function mokepon$elements$a(text,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$on_DASH_click,on_click], null),text], null);
});
mokepon.elements.disabled_a = (function mokepon$elements$disabled_a(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$disabled,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"javascript:;"], null),text], null);
});
mokepon.elements.conditional_a = (function mokepon$elements$conditional_a(predicate,text,on_click){
if(cljs.core.truth_(predicate)){
return mokepon.elements.a(text,on_click);
} else {
return mokepon.elements.disabled_a(text);
}
});
mokepon.elements.section = (function mokepon$elements$section(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37819 = arguments.length;
var i__19540__auto___37820 = (0);
while(true){
if((i__19540__auto___37820 < len__19539__auto___37819)){
args__19546__auto__.push((arguments[i__19540__auto___37820]));

var G__37821 = (i__19540__auto___37820 + (1));
i__19540__auto___37820 = G__37821;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,elements,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null);
});

mokepon.elements.section.cljs$lang$maxFixedArity = (0);

mokepon.elements.section.cljs$lang$applyTo = (function (seq37818){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37818));
});

mokepon.elements.progress_bar = (function mokepon$elements$progress_bar(percentage){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border,"solid 1px black",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,"green",cljs.core.cst$kw$margin,"0px",cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$width,[cljs.core.str(((100) * percentage)),cljs.core.str("%")].join(''),cljs.core.cst$kw$height,"100%"], null)], null)], null)], null);
});
