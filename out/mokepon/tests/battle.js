// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.battle');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.battle.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.battle.being_attacked = (function mokepon$tests$battle$being_attacked(){
return cljs.test.test_var(mokepon$tests$battle$being_attacked.cljs$lang$var);
});
mokepon.tests.battle.being_attacked.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

mokepon.tests.core.has_play_by_play("It has begun! Chipu vs Sulbabaur!");

mokepon.tests.core.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

try{var values__19693__auto__ = (function (){var x__19298__auto__ = cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(mokepon.container.app_state_chosen_monster());
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25468){var t__19731__auto__ = e25468;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.being_attacked.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.being_attacked;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_being_DASH_attacked,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$being_DASH_attacked,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",24,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_attacked)?mokepon.tests.battle.being_attacked.cljs$lang$test:null)]));
mokepon.tests.battle.being_killed = (function mokepon$tests$battle$being_killed(){
return cljs.test.test_var(mokepon$tests$battle$being_killed.cljs$lang$var);
});
mokepon.tests.battle.being_killed.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$hp], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.container.team_count();
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25469){var t__19731__auto__ = e25469;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.being_killed.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.being_killed;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_being_DASH_killed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$being_DASH_killed,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_killed)?mokepon.tests.battle.being_killed.cljs$lang$test:null)]));
mokepon.tests.battle.capturing_wild_mokepon = (function mokepon$tests$battle$capturing_wild_mokepon(){
return cljs.test.test_var(mokepon$tests$battle$capturing_wild_mokepon.cljs$lang$var);
});
mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$test = (function (){

mokepon.tests.core.set_cash((20));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

try{var values__19693__auto___25477 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25477);
if(cljs.core.truth_(result__19694__auto___25478)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25477),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25477);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25470){var t__19731__auto___25479 = e25470;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,t__19731__auto___25479,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__19693__auto___25480 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25480);
if(cljs.core.truth_(result__19694__auto___25481)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25480),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25480);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25471){var t__19731__auto___25482 = e25471;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,t__19731__auto___25482,cljs.core.cst$kw$message,null], null));
}
mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

try{var values__19693__auto___25483 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__19694__auto___25484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25483);
if(cljs.core.truth_(result__19694__auto___25484)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25483),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25483);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25472){var t__19731__auto___25485 = e25472;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,t__19731__auto___25485,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__19693__auto___25486 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25487 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__19693__auto___25486);
if(cljs.core.truth_(result__19694__auto___25487)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.nil_QMARK_,values__19693__auto___25486),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$nil_QMARK_,values__19693__auto___25486);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25473){var t__19731__auto___25488 = e25473;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,t__19731__auto___25488,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto___25489 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___25490 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25489);
if(cljs.core.truth_(result__19694__auto___25490)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25489),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25489);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25474){var t__19731__auto___25491 = e25474;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,t__19731__auto___25491,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__19693__auto___25492 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)),cljs.core.cst$kw$captured);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto___25493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25492);
if(cljs.core.truth_(result__19694__auto___25493)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25492),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25492);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25475){var t__19731__auto___25494 = e25475;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,t__19731__auto___25494,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25476){var t__19731__auto__ = e25476;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.capturing_wild_mokepon;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_capturing_DASH_wild_DASH_mokepon,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$capturing_DASH_wild_DASH_mokepon,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",32,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.capturing_wild_mokepon)?mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$test:null)]));
mokepon.tests.battle.battle_is_over_if_mokepon_is_captured = (function mokepon$tests$battle$battle_is_over_if_mokepon_is_captured(){
return cljs.test.test_var(mokepon$tests$battle$battle_is_over_if_mokepon_is_captured.cljs$lang$var);
});
mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.rpg.battle_over_QMARK_(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)),mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25495){var t__19731__auto__ = e25495;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.battle_is_over_if_mokepon_is_captured;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",47,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy = (function mokepon$tests$battle$using_candy(){
return cljs.test.test_var(mokepon$tests$battle$using_candy.cljs$lang$var);
});
mokepon.tests.battle.using_candy.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$candy);

try{var values__19693__auto___25500 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___25501 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25500);
if(cljs.core.truth_(result__19694__auto___25501)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25500),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25500);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25496){var t__19731__auto___25502 = e25496;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,t__19731__auto___25502,cljs.core.cst$kw$message,null], null));
}
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.tests.core.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

try{var values__19693__auto___25503 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__19694__auto___25504 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25503);
if(cljs.core.truth_(result__19694__auto___25504)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25503),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25503);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25497){var t__19731__auto___25505 = e25497;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__19731__auto___25505,cljs.core.cst$kw$message,null], null));
}
mokepon.container.use_candy_BANG_();

mokepon.tests.core.has_play_by_play("Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__19693__auto___25506 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25507 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25506);
if(cljs.core.truth_(result__19694__auto___25507)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25506),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25506);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25498){var t__19731__auto___25508 = e25498;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,t__19731__auto___25508,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25499){var t__19731__auto__ = e25499;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.using_candy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_using_DASH_candy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$using_DASH_candy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",21,1,79,79,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy)?mokepon.tests.battle.using_candy.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy_max_hp = (function mokepon$tests$battle$using_candy_max_hp(){
return cljs.test.test_var(mokepon$tests$battle$using_candy_max_hp.cljs$lang$var);
});
mokepon.tests.battle.using_candy_max_hp.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$candy);

try{var values__19693__auto___25512 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___25513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25512);
if(cljs.core.truth_(result__19694__auto___25513)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25512),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25512);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25509){var t__19731__auto___25514 = e25509;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,t__19731__auto___25514,cljs.core.cst$kw$message,null], null));
}
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.container.use_candy_BANG_();

mokepon.tests.core.has_play_by_play("Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__19693__auto___25515 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25515);
if(cljs.core.truth_(result__19694__auto___25516)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25515),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25515);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25510){var t__19731__auto___25517 = e25510;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,t__19731__auto___25517,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25511){var t__19731__auto__ = e25511;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.using_candy_max_hp.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy_max_hp;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_using_DASH_candy_DASH_max_DASH_hp,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$using_DASH_candy_DASH_max_DASH_hp,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",28,1,92,92,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy_max_hp)?mokepon.tests.battle.using_candy_max_hp.cljs$lang$test:null)]));
mokepon.tests.battle.choosing_mokepon_within_battle = (function mokepon$tests$battle$choosing_mokepon_within_battle(){
return cljs.test.test_var(mokepon$tests$battle$choosing_mokepon_within_battle.cljs$lang$var);
});
mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__19693__auto___25523 = (function (){var x__19298__auto__ = mokepon.rpg.choosable_monsters(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0)));
return cljs.core._conj((function (){var x__19298__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto___25524 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25523);
if(cljs.core.truth_(result__19694__auto___25524)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25523),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25523);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25518){var t__19731__auto___25525 = e25518;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,t__19731__auto___25525,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__19693__auto___25526 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$chosen_DASH_key], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$sulbabaur),x__19298__auto__);
})();
var result__19694__auto___25527 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25526);
if(cljs.core.truth_(result__19694__auto___25527)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25526),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25526);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25519){var t__19731__auto___25528 = e25519;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,t__19731__auto___25528,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto___25529 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25530 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25529);
if(cljs.core.truth_(result__19694__auto___25530)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25529),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25529);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25520){var t__19731__auto___25531 = e25520;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,t__19731__auto___25531,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto___25532 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25533 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25532);
if(cljs.core.truth_(result__19694__auto___25533)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25532),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25532);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25521){var t__19731__auto___25534 = e25521;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,t__19731__auto___25534,cljs.core.cst$kw$message,null], null));
}
mokepon.tests.core.has_play_by_play("You have chosen Sulbabaur to fight!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = mokepon.rpg.active_turn_threshold;
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25522){var t__19731__auto__ = e25522;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.choosing_mokepon_within_battle;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_choosing_DASH_mokepon_DASH_within_DASH_battle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$choosing_DASH_mokepon_DASH_within_DASH_battle,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",40,1,102,102,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.choosing_mokepon_within_battle)?mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test:null)]));
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team = (function mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team(){
return cljs.test.test_var(mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var);
});
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__25535_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25535_SHARP_,cljs.core.cst$kw$chipu);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_chosen_monster();
return cljs.core._conj((function (){var x__19298__auto____$1 = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25536){var t__19731__auto__ = e25536;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",59,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)]));
mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead = (function mokepon$tests$battle$battle_doesnt_end_until_all_of_team_is_dead(){
return cljs.test.test_var(mokepon$tests$battle$battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var);
});
mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

mokepon.tests.core.make_enemy_attack_ready();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$power], null),(100));

mokepon.container.tick_battle_core_BANG_();

try{var values__19693__auto___25538 = (function (){var x__19298__auto__ = mokepon.rpg.is_dead_QMARK_(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__19694__auto___25539 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25538);
if(cljs.core.truth_(result__19694__auto___25539)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25538),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25538);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25537){var t__19731__auto___25540 = e25537;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,t__19731__auto___25540,cljs.core.cst$kw$message,null], null));
}
mokepon.container.tick_battle_core_BANG_();

return mokepon.tests.core.has_play_by_play("Sulbabaur dashes into battle!");
});

mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",53,1,128,128,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)]));
mokepon.tests.battle.winning_battle_gives_fiddy = (function mokepon$tests$battle$winning_battle_gives_fiddy(){
return cljs.test.test_var(mokepon$tests$battle$winning_battle_gives_fiddy.cljs$lang$var);
});
mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$test = (function (){

mokepon.tests.core.set_cash((0));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

mokepon.tests.core.make_chosen_attack_ready();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$power], null),(50));

mokepon.container.attack_BANG_();

try{var values__19693__auto___25544 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25544);
if(cljs.core.truth_(result__19694__auto___25545)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25544),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25544);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25541){var t__19731__auto___25546 = e25541;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,t__19731__auto___25546,cljs.core.cst$kw$message,null], null));
}
mokepon.tests.core.make_chosen_attack_ready();

mokepon.container.attack_BANG_();

try{var values__19693__auto___25547 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.is_dead_QMARK_,values__19693__auto___25547);
if(cljs.core.truth_(result__19694__auto___25548)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,cljs.core.cons(mokepon.rpg.is_dead_QMARK_,values__19693__auto___25547),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,values__19693__auto___25547);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25542){var t__19731__auto___25549 = e25542;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,t__19731__auto___25549,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(3)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25543){var t__19731__auto__ = e25543;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.winning_battle_gives_fiddy;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_winning_DASH_battle_DASH_gives_DASH_fiddy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$winning_DASH_battle_DASH_gives_DASH_fiddy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",36,1,147,147,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.winning_battle_gives_fiddy)?mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$test:null)]));
