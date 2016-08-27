// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.mokedex');
goog.require('cljs.core');
goog.require('mokepon.monsters');
goog.require('mokepon.items');
goog.require('mokepon.container');
goog.require('mokepon.rpg');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
mokepon.tests.mokedex.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.mokedex.mokedex_captured_encountered = (function mokepon$tests$mokedex$mokedex_captured_encountered(){
return cljs.test.test_var(mokepon$tests$mokedex$mokedex_captured_encountered.cljs$lang$var);
});
mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test = (function (){

try{var values__23053__auto___27501 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$chipu),x__19298__auto__);
})();
var result__23054__auto___27502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27501);
if(cljs.core.truth_(result__23054__auto___27502)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27501),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27501);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27496){var t__23091__auto___27503 = e27496;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,t__23091__auto___27503,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27504 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27505 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27504);
if(cljs.core.truth_(result__23054__auto___27505)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27504),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27504);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27497){var t__23091__auto___27506 = e27497;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27506,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27507 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27508 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27507);
if(cljs.core.truth_(result__23054__auto___27508)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27507),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27507);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27498){var t__23091__auto___27509 = e27498;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23091__auto___27509,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__23053__auto___27510 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27511 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27510);
if(cljs.core.truth_(result__23054__auto___27511)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27510),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27510);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27499){var t__23091__auto___27512 = e27499;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27512,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27500){var t__23091__auto__ = e27500;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_captured_encountered;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_mokedex_DASH_captured_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$mokedex_DASH_captured_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",38,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_captured_encountered)?mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test:null)]));
mokepon.tests.mokedex.mokedex_battle_encountered = (function mokepon$tests$mokedex$mokedex_battle_encountered(){
return cljs.test.test_var(mokepon$tests$mokedex$mokedex_battle_encountered.cljs$lang$var);
});
mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

try{var values__23053__auto___27515 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27515);
if(cljs.core.truth_(result__23054__auto___27516)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27515),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27515);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27513){var t__23091__auto___27517 = e27513;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27517,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27514){var t__23091__auto__ = e27514;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_battle_encountered;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_mokedex_DASH_battle_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$mokedex_DASH_battle_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",36,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_battle_encountered)?mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test:null)]));
mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex = (function mokepon$tests$mokedex$capturing_mokepon_show_up_in_mokedex(){
return cljs.test.test_var(mokepon$tests$mokedex$capturing_mokepon_show_up_in_mokedex.cljs$lang$var);
});
mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test = (function (){

mokepon.tests.core.set_cash((20));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__23053__auto___27521 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$sulbabaur),x__19298__auto__);
})();
var result__23054__auto___27522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27521);
if(cljs.core.truth_(result__23054__auto___27522)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27521),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27521);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27518){var t__23091__auto___27523 = e27518;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,t__23091__auto___27523,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27524 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27524);
if(cljs.core.truth_(result__23054__auto___27525)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27524),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27524);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27519){var t__23091__auto___27526 = e27519;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27526,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27520){var t__23091__auto__ = e27520;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",46,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex)?mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test:null)]));
