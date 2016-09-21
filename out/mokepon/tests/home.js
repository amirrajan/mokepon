// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.home');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.home.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.home.healing_team = (function mokepon$tests$home$healing_team(){
return cljs.test.test_var(mokepon$tests$home$healing_team.cljs$lang$var);
});
mokepon.tests.home.healing_team.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$team,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(10),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(5),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null));

mokepon.container.sleep_at_home_BANG_();

mokepon.tests.core.has_play_by_play("Slept. Team has been healed.");

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27695){var t__23091__auto__ = e27695;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.home.healing_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.home.healing_team;},cljs.core.cst$sym$mokepon$tests$home_SLASH_healing_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$home,cljs.core.cst$sym$healing_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/home.cljs",22,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.home.healing_team)?mokepon.tests.home.healing_team.cljs$lang$test:null)]));
