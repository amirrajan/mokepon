// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.views.battle');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.elements');
mokepon.views.battle.battler_view = (function mokepon$views$battle$battler_view(monster,full_active_turn){
return mokepon.elements.section.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"larger","larger",1304935444)], null)], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(" (hp: "),cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),mokepon.elements.progress_bar.call(null,(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(monster) / full_active_turn)));
});
mokepon.views.battle.battle_actions_view = (function mokepon$views$battle$battle_actions_view(team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
return mokepon.elements.section.call(null,mokepon.elements.conditional_a.call(null,chosen_can_attack_QMARK_,"Attack",attack_handler),(cljs.core.truth_(new cljs.core.Keyword(null,"candy","candy",-1977730302).cljs$core$IFn$_invoke$arity$1(items))?mokepon.elements.conditional_a.call(null,(cljs.core.not.call(null,battle_over_QMARK_)) && ((new cljs.core.Keyword(null,"candy","candy",-1977730302).cljs$core$IFn$_invoke$arity$1(items) > (0))),[cljs.core.str("Candy"),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"candy","candy",-1977730302).cljs$core$IFn$_invoke$arity$1(items)),cljs.core.str(")")].join(''),candy_handler):null),(cljs.core.truth_(new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(items))?mokepon.elements.conditional_a.call(null,(cljs.core.not.call(null,battle_over_QMARK_)) && ((new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(items) > (0))),[cljs.core.str("Throw Mok\u00E9box"),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(items)),cljs.core.str(")")].join(''),throw_mokebox_handler):null),(((cljs.core.not.call(null,battle_over_QMARK_)) && ((cljs.core.count.call(null,choosable_monsters) > (1))))?(function (){var iter__19244__auto__ = (function mokepon$views$battle$battle_actions_view_$_iter__25783(s__25784){
return (new cljs.core.LazySeq(null,(function (){
var s__25784__$1 = s__25784;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25784__$1);
if(temp__4657__auto__){
var s__25784__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25784__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25784__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25786 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25785 = (0);
while(true){
if((i__25785 < size__19243__auto__)){
var m = cljs.core._nth.call(null,c__19242__auto__,i__25785);
cljs.core.chunk_append.call(null,b__25786,(function (){var monster = m.call(null,team);
return mokepon.elements.a.call(null,[cljs.core.str("Choose "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(")")].join(''),((function (i__25785,monster,m,c__19242__auto__,size__19243__auto__,b__25786,s__25784__$2,temp__4657__auto__){
return (function (){
return choose_monster_handler.call(null,m);
});})(i__25785,monster,m,c__19242__auto__,size__19243__auto__,b__25786,s__25784__$2,temp__4657__auto__))
);
})());

var G__25787 = (i__25785 + (1));
i__25785 = G__25787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25786),mokepon$views$battle$battle_actions_view_$_iter__25783.call(null,cljs.core.chunk_rest.call(null,s__25784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25786),null);
}
} else {
var m = cljs.core.first.call(null,s__25784__$2);
return cljs.core.cons.call(null,(function (){var monster = m.call(null,team);
return mokepon.elements.a.call(null,[cljs.core.str("Choose "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(")")].join(''),((function (monster,m,s__25784__$2,temp__4657__auto__){
return (function (){
return choose_monster_handler.call(null,m);
});})(monster,m,s__25784__$2,temp__4657__auto__))
);
})(),mokepon$views$battle$battle_actions_view_$_iter__25783.call(null,cljs.core.rest.call(null,s__25784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,choosable_monsters);
})():null));
});
mokepon.views.battle.battle_report_view = (function mokepon$views$battle$battle_report_view(battle_over_QMARK_,go_to_location_handler){
if(cljs.core.truth_(battle_over_QMARK_)){
return mokepon.elements.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The battle has ended."], null),mokepon.elements.a.call(null,"Back",(function (){
return go_to_location_handler.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
})));
} else {
return null;
}
});
mokepon.views.battle.view = (function mokepon$views$battle$view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.views.battle.battler_view.call(null,battling,active_turn_threshold),mokepon.views.battle.battler_view.call(null,chosen,active_turn_threshold),mokepon.views.battle.battle_actions_view.call(null,team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler,candy_handler),mokepon.views.battle.battle_report_view.call(null,battle_over_QMARK_,go_to_location_handler)], null);
});

//# sourceMappingURL=battle.js.map