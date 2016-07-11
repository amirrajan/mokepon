// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.rpg');
goog.require('cljs.core');
mokepon.rpg.new_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"team-at-home","team-at-home",-1793865184),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"team","team",1355747699),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"outside","outside",-13164995),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null,new cljs.core.Keyword(null,"cash","cash",181122222),(100),new cljs.core.Keyword(null,"battling","battling",-129800115),null,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You sit outside. You needed a break from your mother yelling at you."], null)], null);
mokepon.rpg.apply_to_all_values = (function mokepon$rpg$apply_to_all_values(f,dict){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20776){
var vec__20777 = p__20776;
var k = cljs.core.nth.call(null,vec__20777,(0),null);
var v = cljs.core.nth.call(null,vec__20777,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),dict));
});
mokepon.rpg.filter_key = (function mokepon$rpg$filter_key(predicate,dict){
return cljs.core.map.call(null,(function (p__20788){
var vec__20789 = p__20788;
var k = cljs.core.nth.call(null,vec__20789,(0),null);
var v = cljs.core.nth.call(null,vec__20789,(1),null);
return k;
}),cljs.core.filter.call(null,(function (p__20792){
var vec__20793 = p__20792;
var k = cljs.core.nth.call(null,vec__20793,(0),null);
var v = cljs.core.nth.call(null,vec__20793,(1),null);
return predicate.call(null,v);
}),dict));
});
mokepon.rpg.battle_over_QMARK_ = (function mokepon$rpg$battle_over_QMARK_(chosen,battling){
var or__18464__auto__ = (chosen == null);
if(or__18464__auto__){
return or__18464__auto__;
} else {
var or__18464__auto____$1 = (battling == null);
if(or__18464__auto____$1){
return or__18464__auto____$1;
} else {
var or__18464__auto____$2 = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(chosen) <= (0));
if(or__18464__auto____$2){
return or__18464__auto____$2;
} else {
var or__18464__auto____$3 = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(battling) <= (0));
if(or__18464__auto____$3){
return or__18464__auto____$3;
} else {
return new cljs.core.Keyword(null,"captured","captured",704575240).cljs$core$IFn$_invoke$arity$1(battling);
}
}
}
}
});
mokepon.rpg.active_turn_threshold = (1800);
mokepon.rpg.active_turn_percentage = (function mokepon$rpg$active_turn_percentage(p__20796,monster){
var map__20799 = p__20796;
var map__20799__$1 = ((((!((map__20799 == null)))?((((map__20799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20799):map__20799);
var at = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"at","at",1476951349));
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
mokepon.rpg.affinities = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"electric","electric",-958910447),new cljs.core.Keyword(null,"grass","grass",1213050421)], null),0.5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"electric","electric",-958910447)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"electric","electric",-958910447),new cljs.core.Keyword(null,"water","water",-824098213)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"electric","electric",-958910447)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"electric","electric",-958910447),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),(0)], true, false);
mokepon.rpg.affinity_lookup = (function mokepon$rpg$affinity_lookup(from,to){
var from_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(from);
var to_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(to);
var or__18464__auto__ = cljs.core.get.call(null,mokepon.rpg.affinities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_type,to_type], null));
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return 1.0;
}
});
mokepon.rpg.attack_damage = (function mokepon$rpg$attack_damage(from,to){
return (new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(from) * mokepon.rpg.affinity_lookup.call(null,from,to));
});
mokepon.rpg.try_attack = (function mokepon$rpg$try_attack(from,to){
if(cljs.core.truth_(mokepon.rpg.can_attack_QMARK_.call(null,from))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.assoc.call(null,to,new cljs.core.Keyword(null,"hp","hp",-1541237831),(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(to) - mokepon.rpg.attack_damage.call(null,from,to))),new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.assoc.call(null,from,new cljs.core.Keyword(null,"at","at",1476951349),(0)),new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984),false], null);
}
});
mokepon.rpg.attack_description = (function mokepon$rpg$attack_description(from,to){
if(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_.call(null,to))){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" has fallen. Mauled and bloodied.")].join('');
} else {
if(cljs.core._EQ_.call(null,mokepon.rpg.affinity_lookup.call(null,from,to),(2))){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage.call(null,from,to)),cljs.core.str(". It was super effective.")].join('');
} else {
if(cljs.core._EQ_.call(null,mokepon.rpg.affinity_lookup.call(null,from,to),0.5)){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage.call(null,from,to)),cljs.core.str(". It wasn't very effective.")].join('');
} else {
if(cljs.core._EQ_.call(null,mokepon.rpg.affinity_lookup.call(null,from,to),(0))){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" is immune to "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str("'s attack. No damage was done.")].join('');
} else {
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage.call(null,from,to)),cljs.core.str(".")].join('');

}
}
}
}
});
mokepon.rpg.apply_player_attack = (function mokepon$rpg$apply_player_attack(chosen,battling,play_by_play){
var map__20803 = mokepon.rpg.try_attack.call(null,chosen,battling);
var map__20803__$1 = ((((!((map__20803 == null)))?((((map__20803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20803):map__20803);
var from = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"to","to",192099007));
var attack_occured_QMARK_ = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"battling","battling",-129800115),to,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),from,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.call(null,play_by_play,mokepon.rpg.attack_description.call(null,from,to)):play_by_play)], null);
});
mokepon.rpg.tick_battle = (function mokepon$rpg$tick_battle(chosen,battling,play_by_play){
var chosen_ticked = mokepon.rpg.tick_monster.call(null,chosen);
var battling_ticked = mokepon.rpg.tick_monster.call(null,battling);
var map__20807 = mokepon.rpg.try_attack.call(null,battling_ticked,chosen_ticked);
var map__20807__$1 = ((((!((map__20807 == null)))?((((map__20807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20807):map__20807);
var from = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"to","to",192099007));
var attack_occured_QMARK_ = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chosen","chosen",-1422409985),to,new cljs.core.Keyword(null,"battling","battling",-129800115),from,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.call(null,play_by_play,mokepon.rpg.attack_description.call(null,from,to)):play_by_play)], null);
});
mokepon.rpg.heal_monster = (function mokepon$rpg$heal_monster(monster){
return cljs.core.assoc.call(null,monster,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(monster));
});
mokepon.rpg.reset_monster_at = (function mokepon$rpg$reset_monster_at(monster){
return cljs.core.assoc.call(null,monster,new cljs.core.Keyword(null,"at","at",1476951349),(0));
});
mokepon.rpg.reset_team_at = (function mokepon$rpg$reset_team_at(team){
return mokepon.rpg.apply_to_all_values.call(null,mokepon.rpg.reset_monster_at,team);
});
mokepon.rpg.heal_team = (function mokepon$rpg$heal_team(team){
return mokepon.rpg.apply_to_all_values.call(null,mokepon.rpg.heal_monster,team);
});
mokepon.rpg.choosable_monsters = (function mokepon$rpg$choosable_monsters(team){
return mokepon.rpg.filter_key.call(null,(function (p1__20809_SHARP_){
return cljs.core.not.call(null,mokepon.rpg.is_dead_QMARK_.call(null,p1__20809_SHARP_));
}),team);
});

//# sourceMappingURL=rpg.js.map