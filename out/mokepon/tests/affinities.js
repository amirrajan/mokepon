// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.affinities');
goog.require('cljs.core');
goog.require('mokepon.monsters');
goog.require('mokepon.items');
goog.require('mokepon.container');
goog.require('mokepon.rpg');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
mokepon.tests.affinities.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.affinities.electric_only_does_half_damage_to_grass = (function mokepon$tests$affinities$electric_only_does_half_damage_to_grass(){
return cljs.test.test_var(mokepon$tests$affinities$electric_only_does_half_damage_to_grass.cljs$lang$var);
});
mokepon.tests.affinities.electric_only_does_half_damage_to_grass.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.attack_BANG_();

mokepon.tests.core.has_play_by_play("Chipu attacks Sulbabaur for 5. It wasn't very effective.");

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(45)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27477){var t__23091__auto__ = e27477;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.affinities.electric_only_does_half_damage_to_grass.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.affinities.electric_only_does_half_damage_to_grass;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",49,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.electric_only_does_half_damage_to_grass)?mokepon.tests.affinities.electric_only_does_half_damage_to_grass.cljs$lang$test:null)]));
mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric = (function mokepon$tests$affinities$ground_mokepon_do_double_damage_to_electric(){
return cljs.test.test_var(mokepon$tests$affinities$ground_mokepon_do_double_damage_to_electric.cljs$lang$var);
});
mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.tests.core.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

mokepon.tests.core.has_play_by_play("It has begun! Chipu vs Deogude!");

mokepon.tests.core.has_play_by_play("Deogude attacks Chipu for 20. It was super effective.");

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27478){var t__23091__auto__ = e27478;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",53,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)]));
mokepon.tests.affinities.ground_mokepon_are_immune_to_electric = (function mokepon$tests$affinities$ground_mokepon_are_immune_to_electric(){
return cljs.test.test_var(mokepon$tests$affinities$ground_mokepon_are_immune_to_electric.cljs$lang$var);
});
mokepon.tests.affinities.ground_mokepon_are_immune_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.container.attack_BANG_();

mokepon.tests.core.has_play_by_play("Deogude is immune to Chipu's attack. No damage was done.");

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27479){var t__23091__auto__ = e27479;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.affinities.ground_mokepon_are_immune_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.affinities.ground_mokepon_are_immune_to_electric;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",47,1,27,27,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.ground_mokepon_are_immune_to_electric)?mokepon.tests.affinities.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)]));
mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water = (function mokepon$tests$affinities$electric_mokepon_do_double_damage_to_water(){
return cljs.test.test_var(mokepon$tests$affinities$electric_mokepon_do_double_damage_to_water.cljs$lang$var);
});
mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.container.attack_BANG_();

mokepon.tests.core.has_play_by_play("Chipu attacks Tirsqule for 20. It was super effective.");

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27480){var t__23091__auto__ = e27480;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",52,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water)?mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)]));
mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric = (function mokepon$tests$affinities$water_mokepon_do_normal_damage_to_electric(){
return cljs.test.test_var(mokepon$tests$affinities$water_mokepon_do_normal_damage_to_electric.cljs$lang$var);
});
mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.tests.core.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

mokepon.tests.core.has_play_by_play("Tirsqule attacks Chipu for 10.");

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27481){var t__23091__auto__ = e27481;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",52,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)]));
