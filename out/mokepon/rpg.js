// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.rpg');
goog.require('cljs.core');
goog.require('mokepon.monsters');
mokepon.rpg.new_game = (function mokepon$rpg$new_game(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$team_DASH_at_DASH_home,cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.cst$kw$battling,cljs.core.cst$kw$cash,cljs.core.cst$kw$team,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$items,cljs.core.cst$kw$location,cljs.core.cst$kw$chosen_DASH_key],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You sit outside. You needed a break from your mother yelling at you."], null),null,(100),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$monsters,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37896_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__37896_SHARP_,cljs.core.cst$kw$captured,false,cljs.core.array_seq([cljs.core.cst$kw$encountered,false], 0));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mokepon.monsters.chipu,mokepon.monsters.tirsqule,mokepon.monsters.sulbabaur,mokepon.monsters.deogude], null)))], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$outside,null]);
});
mokepon.rpg.apply_to_all_values = (function mokepon$rpg$apply_to_all_values(f,dict){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37901){
var vec__37902 = p__37901;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),dict));
});
mokepon.rpg.filter_key = (function mokepon$rpg$filter_key(predicate,dict){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37913){
var vec__37914 = p__37913;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37914,(1),null);
return k;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37917){
var vec__37918 = p__37917;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37918,(1),null);
return (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(v) : predicate.call(null,v));
}),dict));
});
mokepon.rpg.index_of = (function mokepon$rpg$index_of(predicate,s){
var idx = (0);
var items = s;
while(true){
if(cljs.core.empty_QMARK_(items)){
return null;
} else {
if(cljs.core.truth_((function (){var G__37922 = cljs.core.first(items);
return (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(G__37922) : predicate.call(null,G__37922));
})())){
return idx;
} else {
var G__37923 = (idx + (1));
var G__37924 = cljs.core.rest(items);
idx = G__37923;
items = G__37924;
continue;

}
}
break;
}
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
var len__19539__auto___37927 = arguments.length;
var i__19540__auto___37928 = (0);
while(true){
if((i__19540__auto___37928 < len__19539__auto___37927)){
args__19546__auto__.push((arguments[i__19540__auto___37928]));

var G__37929 = (i__19540__auto___37928 + (1));
i__19540__auto___37928 = G__37929;
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

mokepon.rpg.conj_play_by_play.cljs$lang$applyTo = (function (seq37925){
var G__37926 = cljs.core.first(seq37925);
var seq37925__$1 = cljs.core.next(seq37925);
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(G__37926,seq37925__$1);
});

mokepon.rpg.reset_monster_at = (function mokepon$rpg$reset_monster_at(monster){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(monster,cljs.core.cst$kw$at,(0));
});
mokepon.rpg.reset_team_at = (function mokepon$rpg$reset_team_at(team){
return mokepon.rpg.apply_to_all_values(mokepon.rpg.reset_monster_at,team);
});
mokepon.rpg.active_turn_percentage = (function mokepon$rpg$active_turn_percentage(p__37930,monster){
var map__37933 = p__37930;
var map__37933__$1 = ((((!((map__37933 == null)))?((((map__37933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37933):map__37933);
var at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37933__$1,cljs.core.cst$kw$at);
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
return (function (p1__37935_SHARP_){
var x__18802__auto__ = cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(mokepon.rpg.chosen_monster(game_state));
var y__18803__auto__ = (p1__37935_SHARP_ + (10));
return ((x__18802__auto__ < y__18803__auto__) ? x__18802__auto__ : y__18803__auto__);
});})(has_candy_QMARK_,temp__4657__auto__))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,cljs.core.cst$kw$candy], null),((function (has_candy_QMARK_,temp__4657__auto__){
return (function (p1__37936_SHARP_){
return ((function (){var or__18464__auto__ = p1__37936_SHARP_;
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
mokepon.rpg.mokedex_captured = (function mokepon$rpg$mokedex_captured(game_state,monster_id){
var team_monster = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,monster_id], null));
var mokedex_monsters = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters], null));
var mokedex_index = mokepon.rpg.index_of(((function (team_monster,mokedex_monsters){
return (function (p1__37937_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(monster_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__37937_SHARP_));
});})(team_monster,mokedex_monsters))
,mokedex_monsters);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,mokedex_index], null);
if(cljs.core.truth_(mokedex_index)){
if(cljs.core.truth_(team_monster)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game_state,path,((function (team_monster,mokedex_monsters,mokedex_index,path){
return (function (p1__37938_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__37938_SHARP_,cljs.core.cst$kw$captured,true,cljs.core.array_seq([cljs.core.cst$kw$encountered,true], 0));
});})(team_monster,mokedex_monsters,mokedex_index,path))
);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game_state,path,((function (team_monster,mokedex_monsters,mokedex_index,path){
return (function (p1__37939_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__37939_SHARP_,cljs.core.cst$kw$captured,false,cljs.core.array_seq([cljs.core.cst$kw$encountered,true], 0));
});})(team_monster,mokedex_monsters,mokedex_index,path))
);

}
} else {
console.log([cljs.core.str("WARNING: "),cljs.core.str(monster_id),cljs.core.str(" not in mokedex! Update rpg/new-game to include "),cljs.core.str(monster_id),cljs.core.str(".")].join(''));

return game_state;

}
});
mokepon.rpg.take_chipu = (function mokepon$rpg$take_chipu(game_state){
return mokepon.rpg.mokedex_captured(cljs.core.assoc_in(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], null),mokepon.monsters.chipu),cljs.core.cst$kw$chipu);
});
mokepon.rpg.throw_mokebox = (function mokepon$rpg$throw_mokebox(game_state){
var battling = cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1(game_state);
var map__37942 = battling;
var map__37942__$1 = ((((!((map__37942 == null)))?((((map__37942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37942):map__37942);
var max_hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,cljs.core.cst$kw$max_DASH_hp);
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,cljs.core.cst$kw$hp);
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
var map__37946 = mokepon.rpg.try_attack(chosen,battling);
var map__37946__$1 = ((((!((map__37946 == null)))?((((map__37946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37946):map__37946);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,cljs.core.cst$kw$to);
var attack_occured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,cljs.core.cst$kw$attack_DASH_occured_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$battling,to,cljs.core.cst$kw$chosen,from,cljs.core.cst$kw$cash_DASH_reward,(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_(to))?(3):(0)),cljs.core.cst$kw$play_DASH_by_DASH_play,(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(play_by_play,mokepon.rpg.attack_description(from,to)):play_by_play)], null);
});
mokepon.rpg.attack_result_play_by_play = (function mokepon$rpg$attack_result_play_by_play(attack_result,play_by_play){
var map__37950 = attack_result;
var map__37950__$1 = ((((!((map__37950 == null)))?((((map__37950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37950):map__37950);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,cljs.core.cst$kw$to);
var attack_occured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,cljs.core.cst$kw$attack_DASH_occured_QMARK_);
var attack_description = mokepon.rpg.attack_description(from,to);
if(cljs.core.truth_(attack_occured_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(play_by_play,attack_description);
} else {
return play_by_play;
}
});
mokepon.rpg.choosable_monsters = (function mokepon$rpg$choosable_monsters(team){
return mokepon.rpg.filter_key((function (p1__37952_SHARP_){
return cljs.core.not(mokepon.rpg.is_dead_QMARK_(p1__37952_SHARP_));
}),team);
});
mokepon.rpg.first_live_team_member = (function mokepon$rpg$first_live_team_member(game_state){
return cljs.core.first(mokepon.rpg.choosable_monsters(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(game_state)));
});
mokepon.rpg.auto_swap_team_member = (function mokepon$rpg$auto_swap_team_member(game_state){
var chosen = mokepon.rpg.chosen_monster(game_state);
var live_member_key = mokepon.rpg.first_live_team_member(game_state);
var live_monster_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,live_member_key,cljs.core.cst$kw$name], null));
var need_to_auto_swap = (function (){var and__18452__auto__ = mokepon.rpg.is_dead_QMARK_(chosen);
if(cljs.core.truth_(and__18452__auto__)){
return live_member_key;
} else {
return and__18452__auto__;
}
})();
if(cljs.core.truth_(need_to_auto_swap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(game_state,cljs.core.array_seq([live_monster_name," dashes into battle!"], 0)),cljs.core.cst$kw$chosen_DASH_key,live_member_key);
} else {
return game_state;
}
});
mokepon.rpg.tick_battle = (function mokepon$rpg$tick_battle(game_state){
var chosen_ticked = mokepon.rpg.tick_monster(mokepon.rpg.chosen_monster(game_state));
var battling_ticked = mokepon.rpg.tick_monster(cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1(game_state));
var map__37955 = mokepon.rpg.try_attack(battling_ticked,chosen_ticked);
var map__37955__$1 = ((((!((map__37955 == null)))?((((map__37955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37955):map__37955);
var attack_result = map__37955__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,cljs.core.cst$kw$to);
var new_play_by_play = mokepon.rpg.attack_result_play_by_play(attack_result,cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1(game_state));
var need_to_auto_swap = mokepon.rpg.is_dead_QMARK_(to);
return mokepon.rpg.auto_swap_team_member(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game_state,cljs.core.cst$kw$battling,from,cljs.core.array_seq([cljs.core.cst$kw$play_DASH_by_DASH_play,new_play_by_play], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1(game_state)], null),to));
});
mokepon.rpg.dead_team_member_keys = (function mokepon$rpg$dead_team_member_keys(game_state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37965){
var vec__37966 = p__37965;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(1),null);
return k;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37969){
var vec__37970 = p__37969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37970,(1),null);
return mokepon.rpg.is_dead_QMARK_(v);
}),cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(game_state)));
});
mokepon.rpg.remove_dead_team_members = (function mokepon$rpg$remove_dead_team_members(game_state){
var dead_keys = mokepon.rpg.dead_team_member_keys(game_state);
var new_state = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),((function (dead_keys){
return (function (p1__37973_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__37973_SHARP_,dead_keys);
});})(dead_keys))
);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dead_keys,new_state){
return (function (gs,key){
return mokepon.rpg.mokedex_captured(gs,key);
});})(dead_keys,new_state))
,new_state,dead_keys);
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
mokepon.rpg.location_monsters = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,mokepon.monsters.sulbabaur,cljs.core.cst$kw$canyon,mokepon.monsters.deogude,cljs.core.cst$kw$pool,mokepon.monsters.tirsqule], null);
mokepon.rpg.mokedex_encountered = (function mokepon$rpg$mokedex_encountered(game_state,monster_id){
var mokedex_monsters = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters], null));
var mokedex_index = mokepon.rpg.index_of(((function (mokedex_monsters){
return (function (p1__37974_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(monster_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__37974_SHARP_));
});})(mokedex_monsters))
,mokedex_monsters);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,mokedex_index], null);
if(cljs.core.truth_(mokedex_index)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game_state,path,((function (mokedex_monsters,mokedex_index,path){
return (function (p1__37975_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37975_SHARP_,cljs.core.cst$kw$encountered,true);
});})(mokedex_monsters,mokedex_index,path))
);
} else {
console.log([cljs.core.str("WARNING: "),cljs.core.str(monster_id),cljs.core.str(" not in mokedex! Update rpg/new-game to include "),cljs.core.str(monster_id),cljs.core.str(".")].join(''));

return game_state;

}
});
mokepon.rpg.set_battle = (function mokepon$rpg$set_battle(game_state,chosen_key,battling){
return mokepon.rpg.mokedex_encountered(mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game_state,cljs.core.cst$kw$chosen_DASH_key,chosen_key,cljs.core.array_seq([cljs.core.cst$kw$battling,battling], 0)),cljs.core.array_seq(["It has begun! ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,chosen_key,cljs.core.cst$kw$name], null))," vs ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(battling),"!"], 0)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(battling));
});
mokepon.rpg.find_trouble = (function mokepon$rpg$find_trouble(game_state){
var team = cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(game_state);
var location = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(game_state);
var first_team_member = mokepon.rpg.first_live_team_member(game_state);
var monster_for_location = (location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(mokepon.rpg.location_monsters) : location.call(null,mokepon.rpg.location_monsters));
if(cljs.core.empty_QMARK_(team)){
return game_state;
} else {
if(cljs.core.truth_(monster_for_location)){
return mokepon.rpg.set_battle(game_state,first_team_member,monster_for_location);
} else {
return null;
}
}
});
