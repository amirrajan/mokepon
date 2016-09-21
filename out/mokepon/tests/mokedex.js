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

try{var values__23053__auto___27583 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$chipu),x__19298__auto__);
})();
var result__23054__auto___27584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27583);
if(cljs.core.truth_(result__23054__auto___27584)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27583),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27583);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27578){var t__23091__auto___27585 = e27578;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,t__23091__auto___27585,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27586 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27586);
if(cljs.core.truth_(result__23054__auto___27587)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27586),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27586);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27579){var t__23091__auto___27588 = e27579;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27588,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27589 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27590 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27589);
if(cljs.core.truth_(result__23054__auto___27590)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27589),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27589);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27580){var t__23091__auto___27591 = e27580;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23091__auto___27591,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__23053__auto___27592 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27592);
if(cljs.core.truth_(result__23054__auto___27593)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27592),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27592);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27581){var t__23091__auto___27594 = e27581;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27594,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27582){var t__23091__auto__ = e27582;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_captured_encountered;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_mokedex_DASH_captured_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$mokedex_DASH_captured_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",38,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_captured_encountered)?mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test:null)]));
mokepon.tests.mokedex.mokedex_battle_encountered = (function mokepon$tests$mokedex$mokedex_battle_encountered(){
return cljs.test.test_var(mokepon$tests$mokedex$mokedex_battle_encountered.cljs$lang$var);
});
mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

try{var values__23053__auto___27597 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27597);
if(cljs.core.truth_(result__23054__auto___27598)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27597),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27597);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27595){var t__23091__auto___27599 = e27595;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27599,cljs.core.cst$kw$message,null], null));
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
}catch (e27596){var t__23091__auto__ = e27596;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
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

try{var values__23053__auto___27603 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$sulbabaur),x__19298__auto__);
})();
var result__23054__auto___27604 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27603);
if(cljs.core.truth_(result__23054__auto___27604)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27603),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27603);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27600){var t__23091__auto___27605 = e27600;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$id),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,t__23091__auto___27605,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27606 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___27607 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27606);
if(cljs.core.truth_(result__23054__auto___27607)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27606),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27606);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27601){var t__23091__auto___27608 = e27601;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__23091__auto___27608,cljs.core.cst$kw$message,null], null));
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
}catch (e27602){var t__23091__auto__ = e27602;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(2),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",46,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex)?mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test:null)]));
