// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.views.mokedex');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.elements');
mokepon.views.mokedex.monster_type_string = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"electric","electric",-958910447),"Electric",new cljs.core.Keyword(null,"grass","grass",1213050421),"Grass",new cljs.core.Keyword(null,"water","water",-824098213),"Water",new cljs.core.Keyword(null,"ground","ground",1193572934),"Ground"], null);
mokepon.views.mokedex.captured_view = (function mokepon$views$mokedex$captured_view(captured){
if(cljs.core.truth_(captured)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Captured: Yes"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Captured: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),"#CC0000"], null)], null),"No"], null)], null);
}
});
mokepon.views.mokedex.mokedex_item = (function mokepon$views$mokedex$mokedex_item(monster){
var map__25899 = monster;
var map__25899__$1 = ((((!((map__25899 == null)))?((((map__25899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25899):map__25899);
var name = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var mokedex_text = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"mokedex-text","mokedex-text",-1514539954));
var type = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var captured = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"captured","captured",704575240));
var encountered = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"encountered","encountered",1052334671));
if(cljs.core.truth_(encountered)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"info"], null),mokepon.views.mokedex.captured_view.call(null,captured),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("Type: "),cljs.core.str(type.call(null,mokepon.views.mokedex.monster_type_string))].join('')], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"???"], null);

}
});
mokepon.views.mokedex.view = (function mokepon$views$mokedex$view(go_to_location_handler,mokedex){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.elements.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Mok\u00E9dex"], null)),mokepon.elements.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.mokedex","ol.mokedex",-187214330),(function (){var iter__19244__auto__ = (function mokepon$views$mokedex$view_$_iter__25905(s__25906){
return (new cljs.core.LazySeq(null,(function (){
var s__25906__$1 = s__25906;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25906__$1);
if(temp__4657__auto__){
var s__25906__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25906__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25906__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25908 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25907 = (0);
while(true){
if((i__25907 < size__19243__auto__)){
var monster = cljs.core._nth.call(null,c__19242__auto__,i__25907);
cljs.core.chunk_append.call(null,b__25908,mokepon.views.mokedex.mokedex_item.call(null,monster));

var G__25909 = (i__25907 + (1));
i__25907 = G__25909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25908),mokepon$views$mokedex$view_$_iter__25905.call(null,cljs.core.chunk_rest.call(null,s__25906__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25908),null);
}
} else {
var monster = cljs.core.first.call(null,s__25906__$2);
return cljs.core.cons.call(null,mokepon.views.mokedex.mokedex_item.call(null,monster),mokepon$views$mokedex$view_$_iter__25905.call(null,cljs.core.rest.call(null,s__25906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,new cljs.core.Keyword(null,"monsters","monsters",-2097589730).cljs$core$IFn$_invoke$arity$1(mokedex));
})()], null)),mokepon.elements.section.call(null,mokepon.elements.a.call(null,"Back",(function (){
return go_to_location_handler.call(null,new cljs.core.Keyword(null,"phone","phone",-763596057));
})))], null);
});

//# sourceMappingURL=mokedex.js.map