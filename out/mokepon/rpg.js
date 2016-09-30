// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.rpg');
goog.require('cljs.core');
goog.require('mokepon.locations');
goog.require('mokepon.monsters');
goog.require('clojure.string');
mokepon.rpg.new_game = (function mokepon$rpg$new_game(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"team-at-home","team-at-home",-1793865184),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"cash","cash",181122222),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),new cljs.core.Keyword(null,"locations-seen","locations-seen",-63123011)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You sit outside, unemployed."], null),null,(100),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"mom","mom",-1320393848),new cljs.core.Keyword(null,"text","text",-1790561697),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it.",new cljs.core.Keyword(null,"day","day",-274800446),(0),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"monsters","monsters",-2097589730),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__23942_SHARP_){
return cljs.core.assoc.call(null,p1__23942_SHARP_,new cljs.core.Keyword(null,"captured","captured",704575240),false,new cljs.core.Keyword(null,"encountered","encountered",1052334671),false);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mokepon.monsters.chipu,mokepon.monsters.tirsqule,mokepon.monsters.sulbabaur,mokepon.monsters.deogude], null)))], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"outside","outside",-13164995),null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null),new cljs.core.Keyword(null,"shop","shop",-823644406),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null),new cljs.core.Keyword(null,"canyon","canyon",-310776600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null),new cljs.core.Keyword(null,"forest","forest",278860306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null),new cljs.core.Keyword(null,"lake","lake",805586599),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null)], null)]);
});
mokepon.rpg.apply_to_all_values = (function mokepon$rpg$apply_to_all_values(f,dict){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23947){
var vec__23948 = p__23947;
var k = cljs.core.nth.call(null,vec__23948,(0),null);
var v = cljs.core.nth.call(null,vec__23948,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),dict));
});
mokepon.rpg.filter_key = (function mokepon$rpg$filter_key(predicate,dict){
return cljs.core.map.call(null,(function (p__23959){
var vec__23960 = p__23959;
var k = cljs.core.nth.call(null,vec__23960,(0),null);
var v = cljs.core.nth.call(null,vec__23960,(1),null);
return k;
}),cljs.core.filter.call(null,(function (p__23963){
var vec__23964 = p__23963;
var k = cljs.core.nth.call(null,vec__23964,(0),null);
var v = cljs.core.nth.call(null,vec__23964,(1),null);
return predicate.call(null,v);
}),dict));
});
mokepon.rpg.index_of = (function mokepon$rpg$index_of(predicate,s){
var idx = (0);
var items = s;
while(true){
if(cljs.core.empty_QMARK_.call(null,items)){
return null;
} else {
if(cljs.core.truth_(predicate.call(null,cljs.core.first.call(null,items)))){
return idx;
} else {
var G__23967 = (idx + (1));
var G__23968 = cljs.core.rest.call(null,items);
idx = G__23967;
items = G__23968;
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
mokepon.rpg.conj_play_by_play = (function mokepon$rpg$conj_play_by_play(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23971 = arguments.length;
var i__19540__auto___23972 = (0);
while(true){
if((i__19540__auto___23972 < len__19539__auto___23971)){
args__19546__auto__.push((arguments[i__19540__auto___23972]));

var G__23973 = (i__19540__auto___23972 + (1));
i__19540__auto___23972 = G__23973;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (game_state,strings){
return cljs.core.update.call(null,game_state,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.conj,clojure.string.join.call(null,strings));
});

mokepon.rpg.conj_play_by_play.cljs$lang$maxFixedArity = (1);

mokepon.rpg.conj_play_by_play.cljs$lang$applyTo = (function (seq23969){
var G__23970 = cljs.core.first.call(null,seq23969);
var seq23969__$1 = cljs.core.next.call(null,seq23969);
return mokepon.rpg.conj_play_by_play.cljs$core$IFn$_invoke$arity$variadic(G__23970,seq23969__$1);
});

mokepon.rpg.reset_monster_at = (function mokepon$rpg$reset_monster_at(monster){
return cljs.core.assoc.call(null,monster,new cljs.core.Keyword(null,"at","at",1476951349),(0));
});
mokepon.rpg.reset_team_at = (function mokepon$rpg$reset_team_at(team){
return mokepon.rpg.apply_to_all_values.call(null,mokepon.rpg.reset_monster_at,team);
});
mokepon.rpg.active_turn_percentage = (function mokepon$rpg$active_turn_percentage(p__23974,monster){
var map__23977 = p__23974;
var map__23977__$1 = ((((!((map__23977 == null)))?((((map__23977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23977):map__23977);
var at = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"at","at",1476951349));
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
return cljs.core.update.call(null,monster,new cljs.core.Keyword(null,"at","at",1476951349),cljs.core._PLUS_,new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(monster));
} else {
return monster;
}
});
mokepon.rpg.choose_monster = (function mokepon$rpg$choose_monster(game_state,team_key){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(game_state),team_key)){
return mokepon.rpg.conj_play_by_play.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),team_key),new cljs.core.Keyword(null,"team","team",1355747699),mokepon.rpg.reset_team_at.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(game_state))),"You have chosen ",cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),team_key,new cljs.core.Keyword(null,"name","name",1843675177)], null))," to fight!");
} else {
return game_state;
}
});
mokepon.rpg.chosen_monster = (function mokepon$rpg$chosen_monster(game_state){
return cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)], null))], null));
});
mokepon.rpg.item_count = (function mokepon$rpg$item_count(game_state,item_key){
var or__18464__auto__ = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_key], null));
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
});
mokepon.rpg.use_candy = (function mokepon$rpg$use_candy(game_state){
var temp__4657__auto__ = (mokepon.rpg.item_count.call(null,game_state,new cljs.core.Keyword(null,"candy","candy",-1977730302)) > (0));
if(temp__4657__auto__){
var has_candy_QMARK_ = temp__4657__auto__;
return mokepon.rpg.conj_play_by_play.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)], null)),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (has_candy_QMARK_,temp__4657__auto__){
return (function (p1__23979_SHARP_){
var x__18802__auto__ = new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(mokepon.rpg.chosen_monster.call(null,game_state));
var y__18803__auto__ = (p1__23979_SHARP_ + (10));
return ((x__18802__auto__ < y__18803__auto__) ? x__18802__auto__ : y__18803__auto__);
});})(has_candy_QMARK_,temp__4657__auto__))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"candy","candy",-1977730302)], null),((function (has_candy_QMARK_,temp__4657__auto__){
return (function (p1__23980_SHARP_){
return ((function (){var or__18464__auto__ = p1__23980_SHARP_;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
})() - (1));
});})(has_candy_QMARK_,temp__4657__auto__))
),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(mokepon.rpg.chosen_monster.call(null,game_state))," has eated the delicious candy and was healed for 10 hp.");
} else {
return null;
}
});
mokepon.rpg.mokedex_captured = (function mokepon$rpg$mokedex_captured(game_state,monster_id){
var team_monster = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),monster_id], null));
var mokedex_monsters = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730)], null));
var mokedex_index = mokepon.rpg.index_of.call(null,((function (team_monster,mokedex_monsters){
return (function (p1__23981_SHARP_){
return cljs.core._EQ_.call(null,monster_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__23981_SHARP_));
});})(team_monster,mokedex_monsters))
,mokedex_monsters);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),mokedex_index], null);
if(cljs.core.truth_(mokedex_index)){
return cljs.core.update_in.call(null,game_state,path,((function (team_monster,mokedex_monsters,mokedex_index,path){
return (function (p1__23982_SHARP_){
return cljs.core.assoc.call(null,p1__23982_SHARP_,new cljs.core.Keyword(null,"captured","captured",704575240),true,new cljs.core.Keyword(null,"encountered","encountered",1052334671),true);
});})(team_monster,mokedex_monsters,mokedex_index,path))
);
} else {
console.log([cljs.core.str("WARNING: "),cljs.core.str(monster_id),cljs.core.str(" not in mokedex! Update rpg/new-game to include "),cljs.core.str(monster_id),cljs.core.str(".")].join(''));

return game_state;

}
});
mokepon.rpg.mark_captured_in_mokedex = (function mokepon$rpg$mark_captured_in_mokedex(game_state,monster_ids){
return cljs.core.reduce.call(null,mokepon.rpg.mokedex_captured,game_state,monster_ids);
});
mokepon.rpg.take_chipu = (function mokepon$rpg$take_chipu(game_state){
return mokepon.rpg.mokedex_captured.call(null,cljs.core.assoc_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)], null),mokepon.monsters.chipu),new cljs.core.Keyword(null,"chipu","chipu",516526769));
});
mokepon.rpg.throw_mokebox = (function mokepon$rpg$throw_mokebox(game_state){
var battling = new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(game_state);
var map__23985 = battling;
var map__23985__$1 = ((((!((map__23985 == null)))?((((map__23985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23985):map__23985);
var max_hp = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696));
var hp = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var capture_chance = ((max_hp - hp) / max_hp);
var roll = cljs.core.rand.call(null);
var captured_QMARK_ = (capture_chance > roll);
var has_mokebox_QMARK_ = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)], null));
var game_state_with_used_mokebox = cljs.core.update_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)], null),cljs.core.dec);
var new_team = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(battling),battling);
if(cljs.core.truth_(has_mokebox_QMARK_)){
if(captured_QMARK_){
return mokepon.rpg.mokedex_captured.call(null,mokepon.rpg.conj_play_by_play.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,game_state_with_used_mokebox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"captured","captured",704575240)], null),true),new cljs.core.Keyword(null,"team","team",1355747699),new_team),"The Mok\u00E9box knocks out the ",cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"name","name",1843675177)], null)),". It's been captured."),cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));
} else {
return mokepon.rpg.conj_play_by_play.call(null,game_state_with_used_mokebox,"The Mok\u00E9box bounces off the ",cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"name","name",1843675177)], null)),".");

}
} else {
return game_state;

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
mokepon.rpg.damage_description = (function mokepon$rpg$damage_description(from,to){
if(cljs.core._EQ_.call(null,mokepon.rpg.affinity_lookup.call(null,from,to),(2))){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage.call(null,from,to)),cljs.core.str(". It was super effective.")].join('');
} else {
if(cljs.core._EQ_.call(null,mokepon.rpg.affinity_lookup.call(null,from,to),0.5)){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage.call(null,from,to)),cljs.core.str(". It wasn't very effective.")].join('');
} else {
if((mokepon.rpg.affinity_lookup.call(null,from,to) === (0))){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" is immune to "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str("'s attack. No damage was done.")].join('');
} else {
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(from)),cljs.core.str(" attacks "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" for "),cljs.core.str(mokepon.rpg.attack_damage.call(null,from,to)),cljs.core.str(".")].join('');

}
}
}
});
mokepon.rpg.attack_description = (function mokepon$rpg$attack_description(from,to){
if(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_.call(null,to))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mokepon.rpg.damage_description.call(null,from,to),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(to)),cljs.core.str(" has fallen.")].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mokepon.rpg.damage_description.call(null,from,to)], null);

}
});
mokepon.rpg.apply_player_attack = (function mokepon$rpg$apply_player_attack(chosen,battling,play_by_play){
var map__23989 = mokepon.rpg.try_attack.call(null,chosen,battling);
var map__23989__$1 = ((((!((map__23989 == null)))?((((map__23989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23989):map__23989);
var from = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"to","to",192099007));
var attack_occured_QMARK_ = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"battling","battling",-129800115),to,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),from,new cljs.core.Keyword(null,"cash-reward","cash-reward",-1354225094),(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_.call(null,to))?(3):(0)),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),(cljs.core.truth_(attack_occured_QMARK_)?cljs.core.apply.call(null,cljs.core.conj,play_by_play,mokepon.rpg.attack_description.call(null,from,to)):play_by_play)], null);
});
mokepon.rpg.attack_result_play_by_play = (function mokepon$rpg$attack_result_play_by_play(attack_result,play_by_play){
var map__23993 = attack_result;
var map__23993__$1 = ((((!((map__23993 == null)))?((((map__23993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23993):map__23993);
var from = cljs.core.get.call(null,map__23993__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__23993__$1,new cljs.core.Keyword(null,"to","to",192099007));
var attack_occured_QMARK_ = cljs.core.get.call(null,map__23993__$1,new cljs.core.Keyword(null,"attack-occured?","attack-occured?",-1932217984));
var attack_description = mokepon.rpg.attack_description.call(null,from,to);
if(cljs.core.truth_(attack_occured_QMARK_)){
return cljs.core.apply.call(null,cljs.core.conj,play_by_play,attack_description);
} else {
return play_by_play;
}
});
mokepon.rpg.choosable_monsters = (function mokepon$rpg$choosable_monsters(team){
return mokepon.rpg.filter_key.call(null,(function (p1__23995_SHARP_){
return cljs.core.not.call(null,mokepon.rpg.is_dead_QMARK_.call(null,p1__23995_SHARP_));
}),team);
});
mokepon.rpg.first_live_team_member = (function mokepon$rpg$first_live_team_member(game_state){
return cljs.core.first.call(null,mokepon.rpg.choosable_monsters.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(game_state)));
});
mokepon.rpg.auto_swap_team_member = (function mokepon$rpg$auto_swap_team_member(game_state){
var chosen = mokepon.rpg.chosen_monster.call(null,game_state);
var live_member_key = mokepon.rpg.first_live_team_member.call(null,game_state);
var live_monster_name = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),live_member_key,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var need_to_auto_swap = (function (){var and__18452__auto__ = mokepon.rpg.is_dead_QMARK_.call(null,chosen);
if(cljs.core.truth_(and__18452__auto__)){
return live_member_key;
} else {
return and__18452__auto__;
}
})();
if(cljs.core.truth_(need_to_auto_swap)){
return cljs.core.assoc.call(null,mokepon.rpg.conj_play_by_play.call(null,game_state,live_monster_name," dashes into battle!"),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),live_member_key);
} else {
return game_state;
}
});
mokepon.rpg.tick_battle = (function mokepon$rpg$tick_battle(game_state){
var chosen_ticked = mokepon.rpg.tick_monster.call(null,mokepon.rpg.chosen_monster.call(null,game_state));
var battling_ticked = mokepon.rpg.tick_monster.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(game_state));
var map__23998 = mokepon.rpg.try_attack.call(null,battling_ticked,chosen_ticked);
var map__23998__$1 = ((((!((map__23998 == null)))?((((map__23998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23998):map__23998);
var attack_result = map__23998__$1;
var from = cljs.core.get.call(null,map__23998__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__23998__$1,new cljs.core.Keyword(null,"to","to",192099007));
var new_play_by_play = mokepon.rpg.attack_result_play_by_play.call(null,attack_result,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(game_state));
var need_to_auto_swap = mokepon.rpg.is_dead_QMARK_.call(null,to);
return mokepon.rpg.auto_swap_team_member.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"battling","battling",-129800115),from,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),new_play_by_play),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(game_state)], null),to));
});
mokepon.rpg.dead_team_member_keys = (function mokepon$rpg$dead_team_member_keys(game_state){
return cljs.core.map.call(null,(function (p__24008){
var vec__24009 = p__24008;
var k = cljs.core.nth.call(null,vec__24009,(0),null);
var _ = cljs.core.nth.call(null,vec__24009,(1),null);
return k;
}),cljs.core.filter.call(null,(function (p__24012){
var vec__24013 = p__24012;
var _ = cljs.core.nth.call(null,vec__24013,(0),null);
var v = cljs.core.nth.call(null,vec__24013,(1),null);
return mokepon.rpg.is_dead_QMARK_.call(null,v);
}),new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(game_state)));
});
mokepon.rpg.text_from_mom = (function mokepon$rpg$text_from_mom(game_state,dead_keys){
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chipu","chipu",516526769),null], null), null),dead_keys))){
return cljs.core.update_in.call(null,game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null),(function (p1__24016_SHARP_){
return cljs.core.conj.call(null,p1__24016_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"mom","mom",-1320393848),new cljs.core.Keyword(null,"text","text",-1790561697),"Did your Chipu get killed? Worthless. Come by and I'll give you another one.",new cljs.core.Keyword(null,"day","day",-274800446),(0),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),false], null));
}));
} else {
return game_state;

}
});
mokepon.rpg.remove_dead_team_members = (function mokepon$rpg$remove_dead_team_members(game_state){
var dead_keys = mokepon.rpg.dead_team_member_keys.call(null,game_state);
var new_state = cljs.core.update_in.call(null,game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),((function (dead_keys){
return (function (p1__24017_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__24017_SHARP_,dead_keys);
});})(dead_keys))
);
return mokepon.rpg.text_from_mom.call(null,mokepon.rpg.mark_captured_in_mokedex.call(null,new_state,dead_keys),dead_keys);
});
mokepon.rpg.buy_item = (function mokepon$rpg$buy_item(game_state,item_id,shop_items_lookup){
var item = item_id.call(null,shop_items_lookup);
var current_cash = new cljs.core.Keyword(null,"cash","cash",181122222).cljs$core$IFn$_invoke$arity$1(game_state);
var afford_QMARK_ = (current_cash >= new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item));
var new_cash = (current_cash - new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item));
if(afford_QMARK_){
return mokepon.rpg.conj_play_by_play.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"cash","cash",181122222),new_cash),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null),((function (item,current_cash,afford_QMARK_,new_cash){
return (function (){
return ((function (){var or__18464__auto__ = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null));
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
})() + (1));
});})(item,current_cash,afford_QMARK_,new_cash))
),"Bought ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),".");
} else {
return mokepon.rpg.conj_play_by_play.call(null,game_state,"Can't afford.");
}
});
mokepon.rpg.heal_monster = (function mokepon$rpg$heal_monster(monster){
return cljs.core.assoc.call(null,monster,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(monster));
});
mokepon.rpg.heal_team = (function mokepon$rpg$heal_team(game_state){
var sleep_message = (((cljs.core.count.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(game_state)) > (0)))?"Slept. Team has been healed.":"Slept.");
return cljs.core.assoc.call(null,mokepon.rpg.conj_play_by_play.call(null,game_state,sleep_message),new cljs.core.Keyword(null,"team","team",1355747699),mokepon.rpg.apply_to_all_values.call(null,mokepon.rpg.heal_monster,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(game_state)));
});
mokepon.rpg.mokedex_encountered = (function mokepon$rpg$mokedex_encountered(game_state,monster_id){
var mokedex_monsters = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730)], null));
var mokedex_index = mokepon.rpg.index_of.call(null,((function (mokedex_monsters){
return (function (p1__24018_SHARP_){
return cljs.core._EQ_.call(null,monster_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24018_SHARP_));
});})(mokedex_monsters))
,mokedex_monsters);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),mokedex_index], null);
if(cljs.core.truth_(mokedex_index)){
return cljs.core.update_in.call(null,game_state,path,((function (mokedex_monsters,mokedex_index,path){
return (function (p1__24019_SHARP_){
return cljs.core.assoc.call(null,p1__24019_SHARP_,new cljs.core.Keyword(null,"encountered","encountered",1052334671),true);
});})(mokedex_monsters,mokedex_index,path))
);
} else {
console.log([cljs.core.str("WARNING: "),cljs.core.str(monster_id),cljs.core.str(" not in mokedex! Update rpg/new-game to include "),cljs.core.str(monster_id),cljs.core.str(".")].join(''));

return game_state;

}
});
mokepon.rpg.set_battle = (function mokepon$rpg$set_battle(game_state,chosen_key,battling){
return mokepon.rpg.mokedex_encountered.call(null,mokepon.rpg.conj_play_by_play.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),chosen_key,new cljs.core.Keyword(null,"battling","battling",-129800115),battling),"It has begun! ",cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),chosen_key,new cljs.core.Keyword(null,"name","name",1843675177)], null))," vs ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(battling),"!"),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(battling));
});
mokepon.rpg.find_trouble = (function mokepon$rpg$find_trouble(game_state){
var team = new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(game_state);
var location = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(game_state);
var first_team_member = mokepon.rpg.first_live_team_member.call(null,game_state);
var monster_for_location = location.call(null,mokepon.locations.location_monsters);
if(cljs.core.empty_QMARK_.call(null,team)){
return game_state;
} else {
if(cljs.core.truth_(monster_for_location)){
return mokepon.rpg.set_battle.call(null,game_state,first_team_member,monster_for_location);
} else {
return null;
}
}
});
mokepon.rpg.new_message_count = (function mokepon$rpg$new_message_count(game_state){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__24020_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"seen?","seen?",-1677689856).cljs$core$IFn$_invoke$arity$1(p1__24020_SHARP_));
}),new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(game_state)));
});
mokepon.rpg.mark_messages_as_read = (function mokepon$rpg$mark_messages_as_read(game_state){
return cljs.core.update_in.call(null,game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null),(function (messages){
return cljs.core.map.call(null,(function (p1__24021_SHARP_){
return cljs.core.assoc.call(null,p1__24021_SHARP_,new cljs.core.Keyword(null,"seen?","seen?",-1677689856),true);
}),messages);
}));
});

//# sourceMappingURL=rpg.js.map