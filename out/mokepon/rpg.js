// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.rpg');
goog.require('cljs.core');
mokepon.rpg.new_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"team-at-home","team-at-home",-1793865184),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"team","team",1355747699),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"outside","outside",-13164995),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null,new cljs.core.Keyword(null,"cash","cash",181122222),(10),new cljs.core.Keyword(null,"battling","battling",-129800115),null,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You sit outside. You needed a break from your mother yelling at you."], null)], null);
mokepon.rpg.battle_over_QMARK_ = (function mokepon$rpg$battle_over_QMARK_(chosen,battling){
var or__28012__auto__ = (chosen == null);
if(or__28012__auto__){
return or__28012__auto__;
} else {
var or__28012__auto____$1 = (battling == null);
if(or__28012__auto____$1){
return or__28012__auto____$1;
} else {
var or__28012__auto____$2 = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(chosen) <= (0));
if(or__28012__auto____$2){
return or__28012__auto____$2;
} else {
var or__28012__auto____$3 = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(battling) <= (0));
if(or__28012__auto____$3){
return or__28012__auto____$3;
} else {
return new cljs.core.Keyword(null,"captured","captured",704575240).cljs$core$IFn$_invoke$arity$1(battling);
}
}
}
}
});
mokepon.rpg.active_turn_threshold = (1800);
mokepon.rpg.active_turn_percentage = (function mokepon$rpg$active_turn_percentage(p__36637,monster){
var map__36640 = p__36637;
var map__36640__$1 = ((((!((map__36640 == null)))?((((map__36640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36640):map__36640);
var at = cljs.core.get.call(null,map__36640__$1,new cljs.core.Keyword(null,"at","at",1476951349));
if((at >= mokepon.rpg.active_turn_threshold)){
return (1);
} else {
return (at / mokepon.rpg.active_turn_threshold);
}
});
mokepon.rpg.is_dead_QMARK_ = (function mokepon$rpg$is_dead_QMARK_(monster){
return (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(monster) <= (0));
});
mokepon.rpg.can_attack_QMARK_ = (function mokepon$rpg$can_attack_QMARK_(monster){
return (cljs.core.not.call(null,mokepon.rpg.is_dead_QMARK_.call(null,monster))) && ((new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(monster) >= mokepon.rpg.active_turn_threshold));
});
mokepon.rpg.tick_monster = (function mokepon$rpg$tick_monster(monster){
if(cljs.core.not.call(null,mokepon.rpg.can_attack_QMARK_.call(null,monster))){
return cljs.core.assoc.call(null,monster,new cljs.core.Keyword(null,"at","at",1476951349),(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(monster) + new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(monster)));
} else {
return monster;
}
});
mokepon.rpg.try_attack = (function mokepon$rpg$try_attack(from,to){
if(cljs.core.truth_(mokepon.rpg.can_attack_QMARK_.call(null,from))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.assoc.call(null,to,new cljs.core.Keyword(null,"hp","hp",-1541237831),(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(to) - (10))),new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"at","at",1476951349),(0)),new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984),false], null);
}
});
mokepon.rpg.attack_description = (function mokepon$rpg$attack_description(from,to){
if(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_.call(null,to))){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" has fallen. Mauled and bloodied.")].join('');
} else {
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for 10.")].join('');
}
});
mokepon.rpg.apply_player_attack = (function mokepon$rpg$apply_player_attack(chosen,battling,play_by_play){
var map__36644 = mokepon.rpg.try_attack.call(null,chosen,battling);
var map__36644__$1 = ((((!((map__36644 == null)))?((((map__36644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36644):map__36644);
var from = cljs.core.get.call(null,map__36644__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__36644__$1,new cljs.core.Keyword(null,"to","to",192099007));
var attack_occured_QMARK_ = cljs.core.get.call(null,map__36644__$1,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"battling","battling",-129800115),to,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),from,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.call(null,play_by_play,mokepon.rpg.attack_description.call(null,from,to)):play_by_play)], null);
});
mokepon.rpg.tick_battle = (function mokepon$rpg$tick_battle(chosen,battling,play_by_play){
var chosen_ticked = mokepon.rpg.tick_monster.call(null,chosen);
var battling_ticked = mokepon.rpg.tick_monster.call(null,battling);
var map__36648 = mokepon.rpg.try_attack.call(null,battling_ticked,chosen_ticked);
var map__36648__$1 = ((((!((map__36648 == null)))?((((map__36648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36648):map__36648);
var from = cljs.core.get.call(null,map__36648__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__36648__$1,new cljs.core.Keyword(null,"to","to",192099007));
var attack_occured_QMARK_ = cljs.core.get.call(null,map__36648__$1,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chosen","chosen",-1422409985),to,new cljs.core.Keyword(null,"battling","battling",-129800115),from,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.call(null,play_by_play,mokepon.rpg.attack_description.call(null,from,to)):play_by_play)], null);
});
mokepon.rpg.heal_monster = (function mokepon$rpg$heal_monster(monster){
return cljs.core.assoc.call(null,monster,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(monster));
});
mokepon.rpg.heal_team = (function mokepon$rpg$heal_team(team){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__36654){
var vec__36655 = p__36654;
var key = cljs.core.nth.call(null,vec__36655,(0),null);
var value = cljs.core.nth.call(null,vec__36655,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,mokepon.rpg.heal_monster.call(null,value)], null);
}),team));
});

//# sourceMappingURL=rpg.js.map