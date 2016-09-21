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
try{var values__23054__auto___27528 = (function (){var x__19298__auto__ = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Where are you? Have you found a job yet?!"),x__19298__auto__);
})();
var result__23055__auto___27529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27528);
if(cljs.core.truth_(result__23055__auto___27529)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?!"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27528),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?!"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27528);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27525){var t__23092__auto___27530 = e27525;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$text,cljs.core.cst$sym$first_DASH_message),"Where are you? Have you found a job yet?!"),cljs.core.cst$kw$actual,t__23092__auto___27530,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto___27531 = (function (){var x__19298__auto__ = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mom),x__19298__auto__);
})();
var result__23055__auto___27532 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27531);
if(cljs.core.truth_(result__23055__auto___27532)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27531),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27531);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27526){var t__23092__auto___27533 = e27526;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$from,cljs.core.cst$sym$first_DASH_message),cljs.core.cst$kw$mom),cljs.core.cst$kw$actual,t__23092__auto___27533,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto__ = (function (){var x__19298__auto__ = cljs.core.cst$kw$day.cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto__);
if(cljs.core.truth_(result__23055__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$first_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$first_DASH_message),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23055__auto__;
}catch (e27527){var t__23092__auto__ = e27527;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$day,cljs.core.cst$sym$first_DASH_message),(0)),cljs.core.cst$kw$actual,t__23092__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.first_message_from_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_message_from_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_first_DASH_message_DASH_from_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$first_DASH_message_DASH_from_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",32,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_message_from_mom)?mokepon.tests.messages.first_message_from_mom.cljs$lang$test:null)]));
mokepon.tests.messages.losing_chipu_causes_angry_mom = (function mokepon$tests$messages$losing_chipu_causes_angry_mom(){
return cljs.test.test_var(mokepon$tests$messages$losing_chipu_causes_angry_mom.cljs$lang$var);
});
mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test = (function (){

var G__27534_27541 = mokepon.container.app_state();
var G__27535_27542 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27534_27541,G__27535_27542) : cljs.core.reset_BANG_.call(null,G__27534_27541,G__27535_27542));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__23054__auto___27543 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__23055__auto___27544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27543);
if(cljs.core.truth_(result__23055__auto___27544)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27543),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27543);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27536){var t__23092__auto___27545 = e27536;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),null),cljs.core.cst$kw$actual,t__23092__auto___27545,cljs.core.cst$kw$message,null], null));
}
var G__27537_27546 = mokepon.container.app_state();
var G__27538_27547 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27537_27546,G__27538_27547) : cljs.core.reset_BANG_.call(null,G__27537_27546,G__27538_27547));

mokepon.container.take_chipu_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$hp], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__23054__auto___27548 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),x__19298__auto__);
})();
var result__23055__auto___27549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto___27548);
if(cljs.core.truth_(result__23055__auto___27549)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto___27548),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto___27548);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e27539){var t__23092__auto___27550 = e27539;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,t__23092__auto___27550,cljs.core.cst$kw$message,null], null));
}
try{var values__23054__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__23054__auto__);
if(cljs.core.truth_(result__23055__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__23054__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__23054__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23055__auto__;
}catch (e27540){var t__23092__auto__ = e27540;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,t__23092__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.losing_chipu_causes_angry_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",39,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.losing_chipu_causes_angry_mom)?mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test:null)]));
