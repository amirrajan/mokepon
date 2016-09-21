// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.mokedex');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.mokedex.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.mokedex.mokedex_captured_encountered = (function mokepon$tests$mokedex$mokedex_captured_encountered(){
return cljs.test.test_var(mokepon$tests$mokedex$mokedex_captured_encountered.cljs$lang$var);
});
mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test = (function (){

try{var values__23054__auto___27558 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$chipu),x__19298__auto__);
})();
var result__23055__auto___27559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27558);
if(cljs.core.truth_(result__23055__auto___27559)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27558),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27558);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27553){var t__23092__auto___27560 = e27553;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,t__23092__auto___27560,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto___27561 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23055__auto___27562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27561);
if(cljs.core.truth_(result__23055__auto___27562)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27561),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27561);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27554){var t__23092__auto___27563 = e27554;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23092__auto___27563,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto___27564 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23055__auto___27565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27564);
if(cljs.core.truth_(result__23055__auto___27565)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27564),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27564);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27555){var t__23092__auto___27566 = e27555;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23092__auto___27566,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__23054__auto___27567 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23055__auto___27568 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27567);
if(cljs.core.truth_(result__23055__auto___27568)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27567),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27567);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27556){var t__23092__auto___27569 = e27556;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23092__auto___27569,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto__);
if(cljs.core.truth_(result__23055__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23055__auto__;
}catch (e27557){var t__23092__auto__ = e27557;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23092__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_captured_encountered;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_mokedex_DASH_captured_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$mokedex_DASH_captured_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",38,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_captured_encountered)?mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test:null)]));
mokepon.tests.mokedex.mokedex_battle_encountered = (function mokepon$tests$mokedex$mokedex_battle_encountered(){
return cljs.test.test_var(mokepon$tests$mokedex$mokedex_battle_encountered.cljs$lang$var);
});
mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

try{var values__23054__auto___27572 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23055__auto___27573 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27572);
if(cljs.core.truth_(result__23055__auto___27573)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27572),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27572);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27570){var t__23092__auto___27574 = e27570;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23092__auto___27574,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto__);
if(cljs.core.truth_(result__23055__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23055__auto__;
}catch (e27571){var t__23092__auto__ = e27571;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,t__23092__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_battle_encountered;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_mokedex_DASH_battle_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$mokedex_DASH_battle_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",36,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_battle_encountered)?mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test:null)]));
mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex = (function mokepon$tests$mokedex$capturing_mokepon_show_up_in_mokedex(){
return cljs.test.test_var(mokepon$tests$mokedex$capturing_mokepon_show_up_in_mokedex.cljs$lang$var);
});
mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test = (function (){

mokepon.tests.core.set_cash((20));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__23054__auto___27578 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$sulbabaur),x__19298__auto__);
})();
var result__23055__auto___27579 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27578);
if(cljs.core.truth_(result__23055__auto___27579)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27578),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27578);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27575){var t__23092__auto___27580 = e27575;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,t__23092__auto___27580,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto___27581 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23055__auto___27582 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27581);
if(cljs.core.truth_(result__23055__auto___27582)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27581),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27581);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27576){var t__23092__auto___27583 = e27576;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23092__auto___27583,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto__);
if(cljs.core.truth_(result__23055__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23055__auto__;
}catch (e27577){var t__23092__auto__ = e27577;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23092__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",46,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex)?mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test:null)]));
