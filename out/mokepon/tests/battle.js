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

try{var values__23053__auto__ = (function (){var x__19298__auto__ = cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(mokepon.container.app_state_chosen_monster());
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27596){var t__23091__auto__ = e27596;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
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

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.team_count();
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27597){var t__23091__auto__ = e27597;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.being_killed.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.being_killed;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_being_DASH_killed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$being_DASH_killed,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_killed)?mokepon.tests.battle.being_killed.cljs$lang$test:null)]));
mokepon.tests.battle.capturing_wild_mokepon = (function mokepon$tests$battle$capturing_wild_mokepon(){
return cljs.test.test_var(mokepon$tests$battle$capturing_wild_mokepon.cljs$lang$var);
});
mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$test = (function (){

mokepon.tests.core.set_cash((20));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

try{var values__23053__auto___27605 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27606 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto___27605);
if(cljs.core.truth_(result__23054__auto___27606)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto___27605),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto___27605);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27598){var t__23091__auto___27607 = e27598;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,t__23091__auto___27607,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__23053__auto___27608 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto___27608);
if(cljs.core.truth_(result__23054__auto___27609)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto___27608),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto___27608);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27599){var t__23091__auto___27610 = e27599;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,t__23091__auto___27610,cljs.core.cst$kw$message,null], null));
}
mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

try{var values__23053__auto___27611 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__23054__auto___27612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27611);
if(cljs.core.truth_(result__23054__auto___27612)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27611),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27611);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27600){var t__23091__auto___27613 = e27600;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,t__23091__auto___27613,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__23053__auto___27614 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__23053__auto___27614);
if(cljs.core.truth_(result__23054__auto___27615)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.nil_QMARK_,values__23053__auto___27614),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$nil_QMARK_,values__23053__auto___27614);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27601){var t__23091__auto___27616 = e27601;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,t__23091__auto___27616,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27617 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___27618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27617);
if(cljs.core.truth_(result__23054__auto___27618)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27617),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27617);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27602){var t__23091__auto___27619 = e27602;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,t__23091__auto___27619,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__23053__auto___27620 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)),cljs.core.cst$kw$captured);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto___27621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27620);
if(cljs.core.truth_(result__23054__auto___27621)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27620),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27620);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27603){var t__23091__auto___27622 = e27603;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,t__23091__auto___27622,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27604){var t__23091__auto__ = e27604;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
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

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.rpg.battle_over_QMARK_(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)),mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27623){var t__23091__auto__ = e27623;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.battle_is_over_if_mokepon_is_captured;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",47,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy = (function mokepon$tests$battle$using_candy(){
return cljs.test.test_var(mokepon$tests$battle$using_candy.cljs$lang$var);
});
mokepon.tests.battle.using_candy.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$candy);

try{var values__23053__auto___27628 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___27629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27628);
if(cljs.core.truth_(result__23054__auto___27629)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27628),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27628);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27624){var t__23091__auto___27630 = e27624;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,t__23091__auto___27630,cljs.core.cst$kw$message,null], null));
}
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.tests.core.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

try{var values__23053__auto___27631 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__23054__auto___27632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27631);
if(cljs.core.truth_(result__23054__auto___27632)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27631),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27631);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27625){var t__23091__auto___27633 = e27625;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__23091__auto___27633,cljs.core.cst$kw$message,null], null));
}
mokepon.container.use_candy_BANG_();

mokepon.tests.core.has_play_by_play("Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__23053__auto___27634 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27635 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto___27634);
if(cljs.core.truth_(result__23054__auto___27635)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto___27634),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto___27634);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27626){var t__23091__auto___27636 = e27626;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,t__23091__auto___27636,cljs.core.cst$kw$message,null], null));
}
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
}catch (e27627){var t__23091__auto__ = e27627;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.using_candy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_using_DASH_candy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$using_DASH_candy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",21,1,79,79,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy)?mokepon.tests.battle.using_candy.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy_max_hp = (function mokepon$tests$battle$using_candy_max_hp(){
return cljs.test.test_var(mokepon$tests$battle$using_candy_max_hp.cljs$lang$var);
});
mokepon.tests.battle.using_candy_max_hp.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$candy);

try{var values__23053__auto___27640 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___27641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27640);
if(cljs.core.truth_(result__23054__auto___27641)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27640),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27640);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27637){var t__23091__auto___27642 = e27637;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,t__23091__auto___27642,cljs.core.cst$kw$message,null], null));
}
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.container.use_candy_BANG_();

mokepon.tests.core.has_play_by_play("Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__23053__auto___27643 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto___27643);
if(cljs.core.truth_(result__23054__auto___27644)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto___27643),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto___27643);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27638){var t__23091__auto___27645 = e27638;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy)),cljs.core.cst$kw$actual,t__23091__auto___27645,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27639){var t__23091__auto__ = e27639;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.using_candy_max_hp.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy_max_hp;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_using_DASH_candy_DASH_max_DASH_hp,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$using_DASH_candy_DASH_max_DASH_hp,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",28,1,92,92,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy_max_hp)?mokepon.tests.battle.using_candy_max_hp.cljs$lang$test:null)]));
mokepon.tests.battle.choosing_mokepon_within_battle = (function mokepon$tests$battle$choosing_mokepon_within_battle(){
return cljs.test.test_var(mokepon$tests$battle$choosing_mokepon_within_battle.cljs$lang$var);
});
mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__23053__auto___27651 = (function (){var x__19298__auto__ = mokepon.rpg.choosable_monsters(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0)));
return cljs.core._conj((function (){var x__19298__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto___27652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27651);
if(cljs.core.truth_(result__23054__auto___27652)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27651),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27651);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27646){var t__23091__auto___27653 = e27646;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,t__23091__auto___27653,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__23053__auto___27654 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$chosen_DASH_key], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$sulbabaur),x__19298__auto__);
})();
var result__23054__auto___27655 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27654);
if(cljs.core.truth_(result__23054__auto___27655)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27654),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27654);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27647){var t__23091__auto___27656 = e27647;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,t__23091__auto___27656,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27657 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27658 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto___27657);
if(cljs.core.truth_(result__23054__auto___27658)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto___27657),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto___27657);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27648){var t__23091__auto___27659 = e27648;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,t__23091__auto___27659,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27660 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27661 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto___27660);
if(cljs.core.truth_(result__23054__auto___27661)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto___27660),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto___27660);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27649){var t__23091__auto___27662 = e27649;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at)),cljs.core.cst$kw$actual,t__23091__auto___27662,cljs.core.cst$kw$message,null], null));
}
mokepon.tests.core.has_play_by_play("You have chosen Sulbabaur to fight!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = mokepon.rpg.active_turn_threshold;
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27650){var t__23091__auto__ = e27650;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.choosing_mokepon_within_battle;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_choosing_DASH_mokepon_DASH_within_DASH_battle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$choosing_DASH_mokepon_DASH_within_DASH_battle,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",40,1,102,102,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.choosing_mokepon_within_battle)?mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test:null)]));
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team = (function mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team(){
return cljs.test.test_var(mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var);
});
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__27663_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27663_SHARP_,cljs.core.cst$kw$chipu);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_chosen_monster();
return cljs.core._conj((function (){var x__19298__auto____$1 = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27664){var t__23091__auto__ = e27664;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
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

try{var values__23053__auto___27666 = (function (){var x__19298__auto__ = mokepon.rpg.is_dead_QMARK_(mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27667 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27666);
if(cljs.core.truth_(result__23054__auto___27667)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27666),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27666);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27665){var t__23091__auto___27668 = e27665;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,t__23091__auto___27668,cljs.core.cst$kw$message,null], null));
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

try{var values__23053__auto___27672 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__23053__auto___27672);
if(cljs.core.truth_(result__23054__auto___27673)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__23053__auto___27672),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__23053__auto___27672);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27669){var t__23091__auto___27674 = e27669;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,t__23091__auto___27674,cljs.core.cst$kw$message,null], null));
}
mokepon.tests.core.make_chosen_attack_ready();

mokepon.container.attack_BANG_();

try{var values__23053__auto___27675 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___27676 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.is_dead_QMARK_,values__23053__auto___27675);
if(cljs.core.truth_(result__23054__auto___27676)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,cljs.core.cons(mokepon.rpg.is_dead_QMARK_,values__23053__auto___27675),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,values__23053__auto___27675);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27670){var t__23091__auto___27677 = e27670;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,t__23091__auto___27677,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(3)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27671){var t__23091__auto__ = e27671;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.winning_battle_gives_fiddy;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_winning_DASH_battle_DASH_gives_DASH_fiddy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$winning_DASH_battle_DASH_gives_DASH_fiddy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",36,1,147,147,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.winning_battle_gives_fiddy)?mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$test:null)]));
