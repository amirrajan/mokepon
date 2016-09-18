// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.views.shop');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.elements');
mokepon.views.shop.shop_item_view = (function mokepon$views$shop$shop_item_view(item,shop_item_available_handler,buy_item_handler){
if(cljs.core.truth_((function (){var G__27117 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (shop_item_available_handler.cljs$core$IFn$_invoke$arity$1 ? shop_item_available_handler.cljs$core$IFn$_invoke$arity$1(G__27117) : shop_item_available_handler.call(null,G__27117));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0)], null),cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$on_DASH_click,(function (){
var G__27118 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (buy_item_handler.cljs$core$IFn$_invoke$arity$1 ? buy_item_handler.cljs$core$IFn$_invoke$arity$1(G__27118) : buy_item_handler.call(null,G__27118));
})], null),[cljs.core.str("[Buy "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" - $"),cljs.core.str(cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("]")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0),cljs.core.cst$kw$margin_DASH_bottom,"10px",cljs.core.cst$kw$font_DASH_size,"90%",cljs.core.cst$kw$padding_DASH_left,"3px"], null)], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item)], null)], null);
} else {
return null;
}
});
mokepon.views.shop.view = (function mokepon$views$shop$view(shop_items,buy_item_handler,go_to_location_handler,shop_item_available_handler){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Shop"], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var iter__19244__auto__ = (function mokepon$views$shop$view_$_iter__27125(s__27126){
return (new cljs.core.LazySeq(null,(function (){
var s__27126__$1 = s__27126;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27126__$1);
if(temp__4657__auto__){
var s__27126__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27126__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__27126__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__27128 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__27127 = (0);
while(true){
if((i__27127 < size__19243__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__27127);
cljs.core.chunk_append(b__27128,mokepon.views.shop.shop_item_view(item,shop_item_available_handler,buy_item_handler));

var G__27131 = (i__27127 + (1));
i__27127 = G__27131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27128),mokepon$views$shop$view_$_iter__27125(cljs.core.chunk_rest(s__27126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27128),null);
}
} else {
var item = cljs.core.first(s__27126__$2);
return cljs.core.cons(mokepon.views.shop.shop_item_view(item,shop_item_available_handler,buy_item_handler),mokepon$views$shop$view_$_iter__27125(cljs.core.rest(s__27126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(shop_items);
})()], 0)),mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0));
});
