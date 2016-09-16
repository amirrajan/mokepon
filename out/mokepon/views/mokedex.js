// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.views.mokedex');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.elements');
mokepon.views.mokedex.monster_type_string = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$electric,"Electric",cljs.core.cst$kw$grass,"Grass",cljs.core.cst$kw$water,"Water",cljs.core.cst$kw$ground,"Ground"], null);
mokepon.views.mokedex.captured_view = (function mokepon$views$mokedex$captured_view(captured){
if(cljs.core.truth_(captured)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Captured: Yes"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Captured: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$color,"#CC0000"], null)], null),"No"], null)], null);
}
});
mokepon.views.mokedex.mokedex_item = (function mokepon$views$mokedex$mokedex_item(monster){
var map__69796 = monster;
var map__69796__$1 = ((((!((map__69796 == null)))?((((map__69796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69796):map__69796);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69796__$1,cljs.core.cst$kw$name);
var mokedex_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69796__$1,cljs.core.cst$kw$mokedex_DASH_text);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69796__$1,cljs.core.cst$kw$type);
var captured = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69796__$1,cljs.core.cst$kw$captured);
var encountered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69796__$1,cljs.core.cst$kw$encountered);
if(cljs.core.truth_(encountered)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"info"], null),mokepon.views.mokedex.captured_view(captured),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str("Type: "),cljs.core.str((type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(mokepon.views.mokedex.monster_type_string) : type.call(null,mokepon.views.mokedex.monster_type_string)))].join('')], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"???"], null);

}
});
mokepon.views.mokedex.view = (function mokepon$views$mokedex$view(go_to_location_handler,mokedex){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Mok\u00E9dex"], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$mokedex,(function (){var iter__28792__auto__ = (function mokepon$views$mokedex$view_$_iter__69804(s__69805){
return (new cljs.core.LazySeq(null,(function (){
var s__69805__$1 = s__69805;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__69805__$1);
if(temp__4657__auto__){
var s__69805__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69805__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__69805__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__69807 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__69806 = (0);
while(true){
if((i__69806 < size__28791__auto__)){
var monster = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__69806);
cljs.core.chunk_append(b__69807,mokepon.views.mokedex.mokedex_item(monster));

var G__69810 = (i__69806 + (1));
i__69806 = G__69810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69807),mokepon$views$mokedex$view_$_iter__69804(cljs.core.chunk_rest(s__69805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69807),null);
}
} else {
var monster = cljs.core.first(s__69805__$2);
return cljs.core.cons(mokepon.views.mokedex.mokedex_item(monster),mokepon$views$mokedex$view_$_iter__69804(cljs.core.rest(s__69805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(cljs.core.cst$kw$monsters.cljs$core$IFn$_invoke$arity$1(mokedex));
})()], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phone) : go_to_location_handler.call(null,cljs.core.cst$kw$phone));
}))], 0))], null);
});
