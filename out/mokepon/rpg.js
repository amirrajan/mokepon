// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.rpg');
goog.require('cljs.core');
mokepon.rpg.new_game = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$team_DASH_at_DASH_home,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$team,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$location,cljs.core.cst$kw$outside,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.cst$kw$cash,(100),cljs.core.cst$kw$battling,null,cljs.core.cst$kw$items,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$play_DASH_by_DASH_play,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You sit outside. You needed a break from your mother yelling at you."], null)], null);
mokepon.rpg.apply_to_all_values = (function mokepon$rpg$apply_to_all_values(f,dict){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31131){
var vec__31132 = p__31131;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),dict));
});
mokepon.rpg.filter_key = (function mokepon$rpg$filter_key(predicate,dict){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31143){
var vec__31144 = p__31143;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144,(1),null);
return k;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31147){
var vec__31148 = p__31147;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(1),null);
return (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(v) : predicate.call(null,v));
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
var or__18464__auto____$2 = (cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(chosen) <= (0));
if(or__18464__auto____$2){
return or__18464__auto____$2;
} else {
var or__18464__auto____$3 = (cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(battling) <= (0));
if(or__18464__auto____$3){
return or__18464__auto____$3;
} else {
return cljs.core.cst$kw$captured.cljs$core$IFn$_invoke$arity$1(battling);
}
}
}
}
});
mokepon.rpg.active_turn_threshold = (1800);
mokepon.rpg.conj_play_by_play = (function mokepon$rpg$conj_play_by_play(var_args){
var args__19546__auto__ = [];
var len__19539__auto___31153 = arguments.length;
var i__19540__auto___31154 = (0);
while(true){
if((i__19540__auto___31154 < len__19539__auto___31153)){
args__19546__auto__.push((arguments[i__19540__auto___31154]));

var G__31155 = (i__19540__auto___31154 + (1));
i__19540__auto___31154 = G__31155;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (game_state,strings){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1(game_state),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,strings)));
});

mokepon.rpg.conj_play_by_play.cljs$lang$maxFixedArity = (1);

mokepon.rpg.conj_play_by_play.cljs$lang$applyTo = (function (seq31151){
var G__31152 = cljs.core.first(seq31151);
var seq31151__$1 = cljs.core.next(seq31151);
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(G__31152,seq31151__$1);
});

mokepon.rpg.reset_monster_at = (function mokepon$rpg$reset_monster_at(monster){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(monster,cljs.core.cst$kw$at,(0));
});
mokepon.rpg.reset_team_at = (function mokepon$rpg$reset_team_at(team){
return mokepon.rpg.apply_to_all_values(mokepon.rpg.reset_monster_at,team);
});
mokepon.rpg.active_turn_percentage = (function mokepon$rpg$active_turn_percentage(p__31156,monster){
var map__31159 = p__31156;
var map__31159__$1 = ((((!((map__31159 == null)))?((((map__31159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31159):map__31159);
var at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31159__$1,cljs.core.cst$kw$at);
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
mokepon.rpg.choose_monster = (function mokepon$rpg$choose_monster(game_state,team_key){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1(game_state),team_key)){
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,cljs.core.cst$kw$chosen_DASH_key,team_key),cljs.core.cst$kw$team,mokepon.rpg.reset_team_at(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(game_state))),cljs.core.array_seq(["You have chosen ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,team_key,cljs.core.cst$kw$name], null))," to fight!"], 0));
} else {
return game_state;
}
});
mokepon.rpg.chosen_monster = (function mokepon$rpg$chosen_monster(game_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_key], null))], null));
});
mokepon.rpg.item_count = (function mokepon$rpg$item_count(game_state,item_key){
var or__18464__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_key], null));
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
});
mokepon.rpg.use_candy = (function mokepon$rpg$use_candy(game_state){
var temp__4657__auto__ = (mokepon.rpg.item_count(game_state,cljs.core.cst$kw$candy) > (0));
if(temp__4657__auto__){
var has_candy_QMARK_ = temp__4657__auto__;
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_key], null)),cljs.core.cst$kw$hp], null),((function (has_candy_QMARK_,temp__4657__auto__){
return (function (p1__31161_SHARP_){
var x__18802__auto__ = cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(mokepon.rpg.chosen_monster(game_state));
var y__18803__auto__ = (p1__31161_SHARP_ + (10));
return ((x__18802__auto__ < y__18803__auto__) ? x__18802__auto__ : y__18803__auto__);
});})(has_candy_QMARK_,temp__4657__auto__))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,cljs.core.cst$kw$candy], null),((function (has_candy_QMARK_,temp__4657__auto__){
return (function (p1__31162_SHARP_){
return ((function (){var or__18464__auto__ = p1__31162_SHARP_;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
})() - (1));
});})(has_candy_QMARK_,temp__4657__auto__))
),cljs.core.array_seq([cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(mokepon.rpg.chosen_monster(game_state))," has eated the delicious candy and was healed for 10 hp."], 0));
} else {
return null;
}
});
mokepon.rpg.throw_mokebox = (function mokepon$rpg$throw_mokebox(game_state){
var battling = cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1(game_state);
var map__31165 = battling;
var map__31165__$1 = ((((!((map__31165 == null)))?((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31165):map__31165);
var max_hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31165__$1,cljs.core.cst$kw$max_DASH_hp);
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31165__$1,cljs.core.cst$kw$hp);
var capture_chance = ((max_hp - hp) / max_hp);
var roll = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var captured_QMARK_ = (capture_chance > roll);
var has_mokebox_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,cljs.core.cst$kw$mokebox], null));
var game_state_with_used_mokebox = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,cljs.core.cst$kw$mokebox], null),cljs.core.dec);
var new_team = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(game_state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(battling),battling);
if(cljs.core.truth_(has_mokebox_QMARK_)){
if(captured_QMARK_){
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(game_state_with_used_mokebox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$captured], null),true),cljs.core.cst$kw$team,new_team),cljs.core.array_seq(["The Mok\u00E9box knocks out the ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$name], null)),". It's been captured!"], 0));
} else {
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(game_state_with_used_mokebox,cljs.core.array_seq(["The Mok\u00E9box bounces off ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$name], null)),". It's still too strong!"], 0));
}
} else {
return game_state;
}
});
mokepon.rpg.affinities = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$electric,cljs.core.cst$kw$grass], null),0.5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ground,cljs.core.cst$kw$electric], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$electric,cljs.core.cst$kw$water], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$water,cljs.core.cst$kw$electric], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$electric,cljs.core.cst$kw$ground], null),(0)], true, false);
mokepon.rpg.affinity_lookup = (function mokepon$rpg$affinity_lookup(from,to){
var from_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(from);
var to_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(to);
var or__18464__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.affinities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_type,to_type], null));
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
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
var map__31169 = mokepon.rpg.try_attack(chosen,battling);
var map__31169__$1 = ((((!((map__31169 == null)))?((((map__31169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31169):map__31169);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,cljs.core.cst$kw$to);
var attack_occured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,cljs.core.cst$kw$attack_DASH_occured_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$battling,to,cljs.core.cst$kw$chosen,from,cljs.core.cst$kw$cash_DASH_reward,(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_(to))?(3):(0)),cljs.core.cst$kw$play_DASH_by_DASH_play,(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(play_by_play,mokepon.rpg.attack_description(from,to)):play_by_play)], null);
});
mokepon.rpg.tick_battle = (function mokepon$rpg$tick_battle(chosen,battling,play_by_play){
var chosen_ticked = mokepon.rpg.tick_monster(chosen);
var battling_ticked = mokepon.rpg.tick_monster(battling);
var map__31173 = mokepon.rpg.try_attack(battling_ticked,chosen_ticked);
var map__31173__$1 = ((((!((map__31173 == null)))?((((map__31173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31173):map__31173);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31173__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31173__$1,cljs.core.cst$kw$to);
var attack_occured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31173__$1,cljs.core.cst$kw$attack_DASH_occured_QMARK_);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chosen,to,cljs.core.cst$kw$battling,from,cljs.core.cst$kw$play_DASH_by_DASH_play,(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(play_by_play,mokepon.rpg.attack_description(from,to)):play_by_play)], null);
});
mokepon.rpg.buy_item = (function mokepon$rpg$buy_item(game_state,item_id,store_items_lookup){
var item = (item_id.cljs$core$IFn$_invoke$arity$1 ? item_id.cljs$core$IFn$_invoke$arity$1(store_items_lookup) : item_id.call(null,store_items_lookup));
var current_cash = cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1(game_state);
var afford_QMARK_ = (current_cash >= cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item));
var new_cash = (current_cash - cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item));
if(afford_QMARK_){
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,cljs.core.cst$kw$cash,new_cash),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_id], null),((function (item,current_cash,afford_QMARK_,new_cash){
return (function (){
return ((function (){var or__18464__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_id], null));
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
})() + (1));
});})(item,current_cash,afford_QMARK_,new_cash))
),cljs.core.array_seq(["You take the ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)," from the midget's saggy, squishy hand. ","He smiles and gives you a tip of his top hat."], 0));
} else {
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(game_state,cljs.core.array_seq(["The midget bitch slaps you saying that you can't afford that. ","He wonders if you were taught common core math."], 0));
}
});
mokepon.rpg.heal_monster = (function mokepon$rpg$heal_monster(monster){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(monster,cljs.core.cst$kw$hp,cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(monster));
});
mokepon.rpg.heal_team = (function mokepon$rpg$heal_team(game_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(game_state,cljs.core.array_seq(["You've slept. Your posse has been healed."], 0)),cljs.core.cst$kw$team,mokepon.rpg.apply_to_all_values(mokepon.rpg.heal_monster,cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(game_state)));
});
mokepon.rpg.choosable_monsters = (function mokepon$rpg$choosable_monsters(team){
return mokepon.rpg.filter_key((function (p1__31175_SHARP_){
return cljs.core.not(mokepon.rpg.is_dead_QMARK_(p1__31175_SHARP_));
}),team);
});
