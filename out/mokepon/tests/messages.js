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

try{var values__32604__auto___70174 = (function (){var x__28846__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$text], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Where are you? Have you found a job yet?!"),x__28846__auto__);
})();
var result__32605__auto___70175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__32604__auto___70174);
if(cljs.core.truth_(result__32605__auto___70175)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$text),"Where are you? Have you found a job yet?!"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__32604__auto___70174),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$text),"Where are you? Have you found a job yet?!"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__28846__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__32604__auto___70174);
return cljs.core._conj(cljs.core.List.EMPTY,x__28846__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e70172){var t__32642__auto___70176 = e70172;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$text),"Where are you? Have you found a job yet?!"),cljs.core.cst$kw$actual,t__32642__auto___70176,cljs.core.cst$kw$message,null], null));
}
try{var values__32604__auto__ = (function (){var x__28846__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$day], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__28846__auto__);
})();
var result__32605__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__32604__auto__);
if(cljs.core.truth_(result__32605__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__32604__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__28846__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__32604__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__28846__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__32605__auto__;
}catch (e70173){var t__32642__auto__ = e70173;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(0),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,t__32642__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.first_message_from_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_message_from_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_first_DASH_message_DASH_from_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$first_DASH_message_DASH_from_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",32,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_message_from_mom)?mokepon.tests.messages.first_message_from_mom.cljs$lang$test:null)]));
mokepon.tests.messages.losing_chipu_causes_angry_mom = (function mokepon$tests$messages$losing_chipu_causes_angry_mom(){
return cljs.test.test_var(mokepon$tests$messages$losing_chipu_causes_angry_mom.cljs$lang$var);
});
mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$hp], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__32604__auto___70179 = (function (){var x__28846__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$text], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),x__28846__auto__);
})();
var result__32605__auto___70180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__32604__auto___70179);
if(cljs.core.truth_(result__32605__auto___70180)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__32604__auto___70179),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__28846__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__32604__auto___70179);
return cljs.core._conj(cljs.core.List.EMPTY,x__28846__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e70177){var t__32642__auto___70181 = e70177;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$text),"You lost all of your Mok\u00E9pon didn't you? Worthless. Come by and I'll give you another Chipu."),cljs.core.cst$kw$actual,t__32642__auto___70181,cljs.core.cst$kw$message,null], null));
}
try{var values__32604__auto__ = (function (){var x__28846__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$day], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__28846__auto__);
})();
var result__32605__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__32604__auto__);
if(cljs.core.truth_(result__32605__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__32604__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__28846__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__32604__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__28846__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__32605__auto__;
}catch (e70178){var t__32642__auto__ = e70178;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$messages,cljs.core.cst$kw$mom,(1),cljs.core.cst$kw$day),(0)),cljs.core.cst$kw$actual,t__32642__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.losing_chipu_causes_angry_mom;},cljs.core.cst$sym$mokepon$tests$messages_SLASH_losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$messages,cljs.core.cst$sym$losing_DASH_chipu_DASH_causes_DASH_angry_DASH_mom,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",39,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.losing_chipu_causes_angry_mom)?mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test:null)]));
