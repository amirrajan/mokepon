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
try{var values__23053__auto___27536 = (function (){var x__19298__auto__ = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),x__19298__auto__);
})();
var result__23054__auto___27537 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27536);
if(cljs.core.truth_(result__23054__auto___27537)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27536),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27536);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27533){var t__23091__auto___27538 = e27533;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),cljs.core.cst$kw$actual,t__23091__auto___27538,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27539 = (function (){var x__19298__auto__ = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mom),x__19298__auto__);
})();
var result__23054__auto___27540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27539);
if(cljs.core.truth_(result__23054__auto___27540)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27539),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27539);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27534){var t__23091__auto___27541 = e27534;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,t__23091__auto___27541,cljs.core.cst$kw$message,null], null));
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
}catch (e27535){var t__23091__auto__ = e27535;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$first_DASH_message),(0)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.first_message_from_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_message_from_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_first_DASH_message_DASH_from_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$first_DASH_message_DASH_from_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",32,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_message_from_mom)?mokepon.tests.messages.first_message_from_mom.cljs$lang$test:null)]));
mokepon.tests.messages.losing_chipu_causes_angry_mom = (function mokepon$tests$messages$losing_chipu_causes_angry_mom(){
return cljs.test.test_var(mokepon$tests$messages$losing_chipu_causes_angry_mom.cljs$lang$var);
});
mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test = (function (){

var G__27542_27551 = mokepon.container.app_state();
var G__27543_27552 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27542_27551,G__27543_27552) : cljs.core.reset_BANG_.call(null,G__27542_27551,G__27543_27552));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__23053__auto___27553 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__23054__auto___27554 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27553);
if(cljs.core.truth_(result__23054__auto___27554)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27553),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27553);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27544){var t__23091__auto___27555 = e27544;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,t__23091__auto___27555,cljs.core.cst$kw$message,null], null));
}
var G__27545_27556 = mokepon.container.app_state();
var G__27546_27557 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27545_27556,G__27546_27557) : cljs.core.reset_BANG_.call(null,G__27545_27556,G__27546_27557));

mokepon.container.take_chipu_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$hp], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

var angry_message = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1)], 0));
try{var values__23053__auto___27558 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),x__19298__auto__);
})();
var result__23054__auto___27559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27558);
if(cljs.core.truth_(result__23054__auto___27559)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27558),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27558);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27547){var t__23091__auto___27560 = e27547;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,t__23091__auto___27560,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27561 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___27562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27561);
if(cljs.core.truth_(result__23054__auto___27562)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27561),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27561);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27548){var t__23091__auto___27563 = e27548;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,t__23091__auto___27563,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto___27564 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$from], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mom),x__19298__auto__);
})();
var result__23054__auto___27565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27564);
if(cljs.core.truth_(result__23054__auto___27565)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$from),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27564),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$from),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27564);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27549){var t__23091__auto___27566 = e27549;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$from),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,t__23091__auto___27566,cljs.core.cst$kw$message,null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$seen_QMARK_], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$seen_QMARK_),false),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$seen_QMARK_),false),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e27550){var t__23091__auto__ = e27550;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$seen_QMARK_),false),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.losing_chipu_causes_angry_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",39,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.losing_chipu_causes_angry_mom)?mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test:null)]));
mokepon.tests.messages.checking_messages_marks_them_as_seen = (function mokepon$tests$messages$checking_messages_marks_them_as_seen(){
return cljs.test.test_var(mokepon$tests$messages$checking_messages_marks_them_as_seen.cljs$lang$var);
});
mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test = (function (){
try{var values__23053__auto___27570 = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count();
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___27571 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27570);
if(cljs.core.truth_(result__23054__auto___27571)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27570),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27570);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27567){var t__23091__auto___27572 = e27567;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(1)),cljs.core.cst$kw$actual,t__23091__auto___27572,cljs.core.cst$kw$message,null], null));
}
mokepon.container.view_messages_BANG_();

try{var values__23053__auto___27573 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$location], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$messages),x__19298__auto__);
})();
var result__23054__auto___27574 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23053__auto___27573);
if(cljs.core.truth_(result__23054__auto___27574)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$location),cljs.core.cst$kw$messages),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23053__auto___27573),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$location),cljs.core.cst$kw$messages),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23053__auto___27573);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27568){var t__23091__auto___27575 = e27568;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$location),cljs.core.cst$kw$messages),cljs.core.cst$kw$actual,t__23091__auto___27575,cljs.core.cst$kw$message,null], null));
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
}catch (e27569){var t__23091__auto__ = e27569;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_new_DASH_message_DASH_count),(0)),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.checking_messages_marks_them_as_seen;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_checking_DASH_messages_DASH_marks_DASH_them_DASH_as_DASH_seen,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$checking_DASH_messages_DASH_marks_DASH_them_DASH_as_DASH_seen,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",46,1,61,61,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.checking_messages_marks_them_as_seen)?mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test:null)]));
