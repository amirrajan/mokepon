// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.rpg');
goog.require('cljs.core');
mokepon.rpg.new_game = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$team_DASH_at_DASH_home,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$team,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$location,cljs.core.cst$kw$outside,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.cst$kw$cash,(100),cljs.core.cst$kw$battling,null,cljs.core.cst$kw$items,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$play_DASH_by_DASH_play,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You sit outside. You needed a break from your mother yelling at you."], null)], null);
mokepon.rpg.apply_to_all_values = (function mokepon$rpg$apply_to_all_values(f,dict){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30530){
var vec__30531 = p__30530;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),dict));
});
mokepon.rpg.filter_key = (function mokepon$rpg$filter_key(predicate,dict){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30542){
var vec__30543 = p__30542;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30543,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30543,(1),null);
return k;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30546){
var vec__30547 = p__30546;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(1),null);
return (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(v) : predicate.call(null,v));
}),dict));
});
mokepon.rpg.battle_over_QMARK_ = (function mokepon$rpg$battle_over_QMARK_(chosen,battling){
var or__18728__auto__ = (chosen == null);
if(or__18728__auto__){
return or__18728__auto__;
} else {
var or__18728__auto____$1 = (battling == null);
if(or__18728__auto____$1){
return or__18728__auto____$1;
} else {
var or__18728__auto____$2 = (cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(chosen) <= (0));
if(or__18728__auto____$2){
return or__18728__auto____$2;
} else {
var or__18728__auto____$3 = (cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(battling) <= (0));
if(or__18728__auto____$3){
return or__18728__auto____$3;
} else {
return cljs.core.cst$kw$captured.cljs$core$IFn$_invoke$arity$1(battling);
}
}
}
}
});
mokepon.rpg.active_turn_threshold = (1800);
mokepon.rpg.active_turn_percentage = (function mokepon$rpg$active_turn_percentage(p__30550,monster){
var map__30553 = p__30550;
var map__30553__$1 = ((((!((map__30553 == null)))?((((map__30553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30553):map__30553);
var at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30553__$1,cljs.core.cst$kw$at);
if((at >= mokepon.rpg.active_turn_threshold)){
return (1);
} else {
return (at / mokepon.rpg.active_turn_threshold);
}
});
mokepon.rpg.is_dead_QMARK_ = (function mokepon$rpg$is_dead_QMARK_(monster){
return (cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(monster) <= (0));
});
mokepon.rpg.can_attack_QMARK_ = (function mokepon$rpg$can_attack_QMARK_(monster){
return (cljs.core.not(mokepon.rpg.is_dead_QMARK_(monster))) && ((cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(monster) >= mokepon.rpg.active_turn_threshold));
});
mokepon.rpg.tick_monster = (function mokepon$rpg$tick_monster(monster){
if(cljs.core.not(mokepon.rpg.can_attack_QMARK_(monster))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(monster,cljs.core.cst$kw$at,(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(monster) + cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(monster)));
} else {
return monster;
}
});
mokepon.rpg.affinities = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$electric,cljs.core.cst$kw$grass], null),0.5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ground,cljs.core.cst$kw$electric], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$electric,cljs.core.cst$kw$water], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$water,cljs.core.cst$kw$electric], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$electric,cljs.core.cst$kw$ground], null),(0)], true, false);
mokepon.rpg.affinity_lookup = (function mokepon$rpg$affinity_lookup(from,to){
var from_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(from);
var to_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(to);
var or__18728__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.affinities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_type,to_type], null));
if(cljs.core.truth_(or__18728__auto__)){
return or__18728__auto__;
} else {
return 1.0;
}
});
mokepon.rpg.attack_damage = (function mokepon$rpg$attack_damage(from,to){
return (cljs.core.cst$kw$power.cljs$core$IFn$_invoke$arity$1(from) * mokepon.rpg.affinity_lookup(from,to));
});
mokepon.rpg.try_attack = (function mokepon$rpg$try_attack(from,to){
if(cljs.core.truth_(mokepon.rpg.can_attack_QMARK_(from))){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$to,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(to,cljs.core.cst$kw$hp,(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(to) - mokepon.rpg.attack_damage(from,to))),cljs.core.cst$kw$from,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(from,cljs.core.cst$kw$at,(0)),cljs.core.cst$kw$attack_DASH_occured_QMARK_,true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$to,to,cljs.core.cst$kw$from,from,cljs.core.cst$kw$attack_DASH_occured_QMARK_,false], null);
}
});
mokepon.rpg.attack_description = (function mokepon$rpg$attack_description(from,to){
if(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_(to))){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" has fallen. Mauled and bloodied.")].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.affinity_lookup(from,to),(2))){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage(from,to)),cljs.core.str(". It was super effective.")].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.affinity_lookup(from,to),0.5)){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage(from,to)),cljs.core.str(". It wasn't very effective.")].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.affinity_lookup(from,to),(0))){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" is immune to "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str("'s attack. No damage was done.")].join('');
} else {
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage(from,to)),cljs.core.str(".")].join('');

}
}
}
}
});
mokepon.rpg.apply_player_attack = (function mokepon$rpg$apply_player_attack(chosen,battling,play_by_play){
var map__30557 = mokepon.rpg.try_attack(chosen,battling);
var map__30557__$1 = ((((!((map__30557 == null)))?((((map__30557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30557):map__30557);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30557__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30557__$1,cljs.core.cst$kw$to);
var attack_occured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30557__$1,cljs.core.cst$kw$attack_DASH_occured_QMARK_);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$battling,to,cljs.core.cst$kw$chosen,from,cljs.core.cst$kw$play_DASH_by_DASH_play,(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(play_by_play,mokepon.rpg.attack_description(from,to)):play_by_play)], null);
});
mokepon.rpg.tick_battle = (function mokepon$rpg$tick_battle(chosen,battling,play_by_play){
var chosen_ticked = mokepon.rpg.tick_monster(chosen);
var battling_ticked = mokepon.rpg.tick_monster(battling);
var map__30561 = mokepon.rpg.try_attack(battling_ticked,chosen_ticked);
var map__30561__$1 = ((((!((map__30561 == null)))?((((map__30561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30561):map__30561);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$to);
var attack_occured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$attack_DASH_occured_QMARK_);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chosen,to,cljs.core.cst$kw$battling,from,cljs.core.cst$kw$play_DASH_by_DASH_play,(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(play_by_play,mokepon.rpg.attack_description(from,to)):play_by_play)], null);
});
mokepon.rpg.heal_monster = (function mokepon$rpg$heal_monster(monster){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(monster,cljs.core.cst$kw$hp,cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(monster));
});
mokepon.rpg.reset_monster_at = (function mokepon$rpg$reset_monster_at(monster){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(monster,cljs.core.cst$kw$at,(0));
});
mokepon.rpg.reset_team_at = (function mokepon$rpg$reset_team_at(team){
return mokepon.rpg.apply_to_all_values(mokepon.rpg.reset_monster_at,team);
});
mokepon.rpg.heal_team = (function mokepon$rpg$heal_team(team){
return mokepon.rpg.apply_to_all_values(mokepon.rpg.heal_monster,team);
});
mokepon.rpg.choosable_monsters = (function mokepon$rpg$choosable_monsters(team){
return mokepon.rpg.filter_key((function (p1__30563_SHARP_){
return cljs.core.not(mokepon.rpg.is_dead_QMARK_(p1__30563_SHARP_));
}),team);
});
