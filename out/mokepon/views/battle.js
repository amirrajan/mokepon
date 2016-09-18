// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.views.battle');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.elements');
mokepon.views.battle.battler_view = (function mokepon$views$battle$battler_view(monster,full_active_turn){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$larger], null)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),mokepon.elements.progress_bar((cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(monster) / full_active_turn))], 0));
});
mokepon.views.battle.battle_actions_view = (function mokepon$views$battle$battle_actions_view(team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.conditional_a(chosen_can_attack_QMARK_,"Attack",attack_handler),(cljs.core.truth_(cljs.core.cst$kw$candy.cljs$core$IFn$_invoke$arity$1(items))?mokepon.elements.conditional_a((cljs.core.not(battle_over_QMARK_)) && ((cljs.core.cst$kw$candy.cljs$core$IFn$_invoke$arity$1(items) > (0))),"Candy",candy_handler):null),(cljs.core.truth_(cljs.core.cst$kw$mokebox.cljs$core$IFn$_invoke$arity$1(items))?mokepon.elements.conditional_a((cljs.core.not(battle_over_QMARK_)) && ((cljs.core.cst$kw$mokebox.cljs$core$IFn$_invoke$arity$1(items) > (0))),"Throw Mok\u00E9box",throw_mokebox_handler):null),(((cljs.core.not(battle_over_QMARK_)) && ((cljs.core.count(choosable_monsters) > (1))))?(function (){var iter__19244__auto__ = (function mokepon$views$battle$battle_actions_view_$_iter__27140(s__27141){
return (new cljs.core.LazySeq(null,(function (){
var s__27141__$1 = s__27141;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27141__$1);
if(temp__4657__auto__){
var s__27141__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27141__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__27141__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__27143 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__27142 = (0);
while(true){
if((i__27142 < size__19243__auto__)){
var m = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__27142);
cljs.core.chunk_append(b__27143,mokepon.elements.a([cljs.core.str("Choose "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(team) : m.call(null,team))))].join(''),((function (i__27142,m,c__19242__auto__,size__19243__auto__,b__27143,s__27141__$2,temp__4657__auto__){
return (function (){
return (choose_monster_handler.cljs$core$IFn$_invoke$arity$1 ? choose_monster_handler.cljs$core$IFn$_invoke$arity$1(m) : choose_monster_handler.call(null,m));
});})(i__27142,m,c__19242__auto__,size__19243__auto__,b__27143,s__27141__$2,temp__4657__auto__))
));

var G__27146 = (i__27142 + (1));
i__27142 = G__27146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27143),mokepon$views$battle$battle_actions_view_$_iter__27140(cljs.core.chunk_rest(s__27141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27143),null);
}
} else {
var m = cljs.core.first(s__27141__$2);
return cljs.core.cons(mokepon.elements.a([cljs.core.str("Choose "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(team) : m.call(null,team))))].join(''),((function (m,s__27141__$2,temp__4657__auto__){
return (function (){
return (choose_monster_handler.cljs$core$IFn$_invoke$arity$1 ? choose_monster_handler.cljs$core$IFn$_invoke$arity$1(m) : choose_monster_handler.call(null,m));
});})(m,s__27141__$2,temp__4657__auto__))
),mokepon$views$battle$battle_actions_view_$_iter__27140(cljs.core.rest(s__27141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(choosable_monsters);
})():null)], 0));
});
mokepon.views.battle.battle_report_view = (function mokepon$views$battle$battle_report_view(battle_over_QMARK_,go_to_location_handler){
if(cljs.core.truth_(battle_over_QMARK_)){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The fight has ended."], null),mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0));
} else {
return null;
}
});
mokepon.views.battle.view = (function mokepon$views$battle$view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.views.battle.battler_view(battling,active_turn_threshold),mokepon.views.battle.battler_view(chosen,active_turn_threshold),mokepon.views.battle.battle_actions_view(team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler,candy_handler),mokepon.views.battle.battle_report_view(battle_over_QMARK_,go_to_location_handler)], null);
});
