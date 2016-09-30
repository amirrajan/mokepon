// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.views.shop');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.elements');
mokepon.views.shop.shop_item_view = (function mokepon$views$shop$shop_item_view(item,shop_item_available_handler,buy_item_handler){
if(cljs.core.truth_(shop_item_available_handler.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return buy_item_handler.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
})], null),[cljs.core.str("[Buy "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" - $"),cljs.core.str(new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("]")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"90%",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"3px"], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
} else {
return null;
}
});
mokepon.views.shop.view = (function mokepon$views$shop$view(shop_items,buy_item_handler,go_to_location_handler,shop_item_available_handler){
return mokepon.elements.section.call(null,mokepon.elements.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Shop"], null)),mokepon.elements.section.call(null,(function (){var iter__19244__auto__ = (function mokepon$views$shop$view_$_iter__23789(s__23790){
return (new cljs.core.LazySeq(null,(function (){
var s__23790__$1 = s__23790;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23790__$1);
if(temp__4657__auto__){
var s__23790__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23790__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23790__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23792 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23791 = (0);
while(true){
if((i__23791 < size__19243__auto__)){
var item = cljs.core._nth.call(null,c__19242__auto__,i__23791);
cljs.core.chunk_append.call(null,b__23792,mokepon.views.shop.shop_item_view.call(null,item,shop_item_available_handler,buy_item_handler));

var G__23793 = (i__23791 + (1));
i__23791 = G__23793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23792),mokepon$views$shop$view_$_iter__23789.call(null,cljs.core.chunk_rest.call(null,s__23790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23792),null);
}
} else {
var item = cljs.core.first.call(null,s__23790__$2);
return cljs.core.cons.call(null,mokepon.views.shop.shop_item_view.call(null,item,shop_item_available_handler,buy_item_handler),mokepon$views$shop$view_$_iter__23789.call(null,cljs.core.rest.call(null,s__23790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,shop_items);
})()),mokepon.elements.a.call(null,"Back",(function (){
return go_to_location_handler.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
})));
});

//# sourceMappingURL=shop.js.map