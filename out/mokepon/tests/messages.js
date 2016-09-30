// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.messages');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.messages.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.messages.first_message_from_mom = (function mokepon$tests$messages$first_message_from_mom(){
return cljs.test.test_var(mokepon$tests$messages$first_message_from_mom.cljs$lang$var);
});
mokepon.tests.messages.first_message_from_mom.cljs$lang$test = (function (){

var first_message = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(0)], 0));
try{var values__23053__auto___31363 = (function (){var x__19298__auto__ = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),x__19298__auto__);
})();
var result__23054__auto___31364 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31363);
if(cljs.core.truth_(result__23054__auto___31364)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31363),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31363);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31360){var t__23091__auto___31365 = e31360;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),cljs.core.cst$kw$actual,t__23091__auto___31365,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___31366 = (function (){var x__19298__auto__ = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mom),x__19298__auto__);
})();
var result__23054__auto___31367 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31366);
if(cljs.core.truth_(result__23054__auto___31367)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31366),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31366);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31361){var t__23091__auto___31368 = e31361;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,t__23091__auto___31368,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = cljs.core.cst$kw$day.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$first_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$first_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e31362){var t__23091__auto__ = e31362;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$first_DASH_message),(0)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.first_message_from_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_message_from_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_first_DASH_message_DASH_from_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$first_DASH_message_DASH_from_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",32,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_message_from_mom)?mokepon.tests.messages.first_message_from_mom.cljs$lang$test:null)]));
mokepon.tests.messages.losing_chipu_causes_angry_mom = (function mokepon$tests$messages$losing_chipu_causes_angry_mom(){
return cljs.test.test_var(mokepon$tests$messages$losing_chipu_causes_angry_mom.cljs$lang$var);
});
mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test = (function (){

var G__31369_31378 = mokepon.container.app_state();
var G__31370_31379 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31369_31378,G__31370_31379) : cljs.core.reset_BANG_.call(null,G__31369_31378,G__31370_31379));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__23053__auto___31380 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__23054__auto___31381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31380);
if(cljs.core.truth_(result__23054__auto___31381)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31380),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31380);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31371){var t__23091__auto___31382 = e31371;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,t__23091__auto___31382,cljs.core.cst$kw$message,null], null));
}
var G__31372_31383 = mokepon.container.app_state();
var G__31373_31384 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31372_31383,G__31373_31384) : cljs.core.reset_BANG_.call(null,G__31372_31383,G__31373_31384));

mokepon.container.take_chipu_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$hp], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

var angry_message = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1)], 0));
try{var values__23053__auto___31385 = (function (){var x__19298__auto__ = (angry_message.cljs$core$IFn$_invoke$arity$1 ? angry_message.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$text) : angry_message.call(null,cljs.core.cst$kw$text));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),x__19298__auto__);
})();
var result__23054__auto___31386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31385);
if(cljs.core.truth_(result__23054__auto___31386)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$angry_DASH_message,cljs.core.cst$kw$text),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31385),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$angry_DASH_message,cljs.core.cst$kw$text),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31385);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31374){var t__23091__auto___31387 = e31374;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$angry_DASH_message,cljs.core.cst$kw$text),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),cljs.core.cst$kw$actual,t__23091__auto___31387,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___31388 = (function (){var x__19298__auto__ = cljs.core.cst$kw$day.cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___31389 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31388);
if(cljs.core.truth_(result__23054__auto___31389)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$angry_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31388),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$angry_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31388);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31375){var t__23091__auto___31390 = e31375;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$angry_DASH_message),(0)),cljs.core.cst$kw$actual,t__23091__auto___31390,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___31391 = (function (){var x__19298__auto__ = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mom),x__19298__auto__);
})();
var result__23054__auto___31392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31391);
if(cljs.core.truth_(result__23054__auto___31392)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$angry_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31391),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$angry_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31391);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31376){var t__23091__auto___31393 = e31376;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$angry_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,t__23091__auto___31393,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = cljs.core.cst$kw$seen_QMARK_.cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$seen_QMARK_,cljs.core.cst$sym$angry_DASH_message),false),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$seen_QMARK_,cljs.core.cst$sym$angry_DASH_message),false),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e31377){var t__23091__auto__ = e31377;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$seen_QMARK_,cljs.core.cst$sym$angry_DASH_message),false),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.losing_chipu_causes_angry_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",39,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.losing_chipu_causes_angry_mom)?mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test:null)]));
mokepon.tests.messages.checking_messages_marks_them_as_seen = (function mokepon$tests$messages$checking_messages_marks_them_as_seen(){
return cljs.test.test_var(mokepon$tests$messages$checking_messages_marks_them_as_seen.cljs$lang$var);
});
mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test = (function (){
try{var values__23053__auto___31397 = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count();
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___31398 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31397);
if(cljs.core.truth_(result__23054__auto___31398)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31397),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31397);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31394){var t__23091__auto___31399 = e31394;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(1)),cljs.core.cst$kw$actual,t__23091__auto___31399,cljs.core.cst$kw$message,null], null));
}
mokepon.container.view_messages_BANG_();

try{var values__23053__auto___31400 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$location], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$messages),x__19298__auto__);
})();
var result__23054__auto___31401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31400);
if(cljs.core.truth_(result__23054__auto___31401)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$location),cljs.core.cst$kw$messages),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31400),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$location),cljs.core.cst$kw$messages),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31400);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31395){var t__23091__auto___31402 = e31395;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$location),cljs.core.cst$kw$messages),cljs.core.cst$kw$actual,t__23091__auto___31402,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count();
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e31396){var t__23091__auto__ = e31396;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(0)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.checking_messages_marks_them_as_seen;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_checking_DASH_messages_DASH_marks_DASH_them_DASH_as_DASH_seen,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$checking_DASH_messages_DASH_marks_DASH_them_DASH_as_DASH_seen,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",46,1,61,61,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.checking_messages_marks_them_as_seen)?mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test:null)]));
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget = (function mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget(){
return cljs.test.test_var(mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget.cljs$lang$var);
});
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test = (function (){

var G__31403_31409 = mokepon.container.app_state();
var G__31404_31410 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31403_31409,G__31404_31410) : cljs.core.reset_BANG_.call(null,G__31403_31409,G__31404_31410));

mokepon.container.take_chipu_BANG_();

var midget_message = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1)], 0));
try{var values__23053__auto___31411 = (function (){var x__19298__auto__ = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Hey kid. Your mom told me that I can sell stuff to you. Come by."),x__19298__auto__);
})();
var result__23054__auto___31412 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31411);
if(cljs.core.truth_(result__23054__auto___31412)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$midget_DASH_message),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31411),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$midget_DASH_message),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31411);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31405){var t__23091__auto___31413 = e31405;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$midget_DASH_message),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),cljs.core.cst$kw$actual,t__23091__auto___31413,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___31414 = (function (){var x__19298__auto__ = cljs.core.cst$kw$day.cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___31415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31414);
if(cljs.core.truth_(result__23054__auto___31415)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$midget_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31414),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$midget_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31414);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31406){var t__23091__auto___31416 = e31406;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$midget_DASH_message),(0)),cljs.core.cst$kw$actual,t__23091__auto___31416,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___31417 = (function (){var x__19298__auto__ = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$midget),x__19298__auto__);
})();
var result__23054__auto___31418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___31417);
if(cljs.core.truth_(result__23054__auto___31418)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$midget_DASH_message),cljs.core.cst$kw$midget),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___31417),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$midget_DASH_message),cljs.core.cst$kw$midget),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___31417);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31407){var t__23091__auto___31419 = e31407;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$midget_DASH_message),cljs.core.cst$kw$midget),cljs.core.cst$kw$actual,t__23091__auto___31419,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = cljs.core.cst$kw$seen_QMARK_.cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$seen_QMARK_,cljs.core.cst$sym$midget_DASH_message),false),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$seen_QMARK_,cljs.core.cst$sym$midget_DASH_message),false),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e31408){var t__23091__auto__ = e31408;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$seen_QMARK_,cljs.core.cst$sym$midget_DASH_message),false),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_first_DASH_chipu_DASH_from_DASH_mom_DASH_yields_DASH_message_DASH_from_DASH_midget,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$first_DASH_chipu_DASH_from_DASH_mom_DASH_yields_DASH_message_DASH_from_DASH_midget,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",57,1,71,71,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget)?mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test:null)]));
