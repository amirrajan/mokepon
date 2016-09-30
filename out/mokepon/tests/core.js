// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.core.state = (function mokepon$tests$core$state(){
var G__31315 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31315) : cljs.core.deref.call(null,G__31315));
});
mokepon.tests.core.log = (function mokepon$tests$core$log(o){
return console.log(cljs.core.clj__GT_js(o));
});
mokepon.tests.core.reset_game = (function mokepon$tests$core$reset_game(){
var G__31318_31320 = mokepon.container.app_state();
var G__31319_31321 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31318_31320,G__31319_31321) : cljs.core.reset_BANG_.call(null,G__31318_31320,G__31319_31321));

return mokepon.container.take_chipu_BANG_();
});
mokepon.tests.core.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.core.make_enemy_attack_ready = (function mokepon$tests$core$make_enemy_attack_ready(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.core.make_chosen_attack_ready = (function mokepon$tests$core$make_chosen_attack_ready(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1(mokepon.tests.core.state()),cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.core.set_cash = (function mokepon$tests$core$set_cash(amount){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$cash,amount);
});
mokepon.tests.core.has_play_by_play = (function mokepon$tests$core$has_play_by_play(message){
try{var values__23053__auto__ = (function (){var x__19298__auto__ = cljs.core.PersistentHashSet.fromArray([message], true);
return cljs.core._conj((function (){var x__19298__auto____$1 = cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1(mokepon.tests.core.state());
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.some,values__23053__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$some,values__23053__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__23054__auto__;
}catch (e31323){var t__23091__auto__ = e31323;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,t__23091__auto__,cljs.core.cst$kw$message,null], null));
}});
mokepon.tests.core.get_state = (function mokepon$tests$core$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___31325 = arguments.length;
var i__19540__auto___31326 = (0);
while(true){
if((i__19540__auto___31326 < len__19539__auto___31325)){
args__19546__auto__.push((arguments[i__19540__auto___31326]));

var G__31327 = (i__19540__auto___31326 + (1));
i__19540__auto___31326 = G__31327;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mokepon.tests.core.state(),path);
});

mokepon.tests.core.get_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.core.get_state.cljs$lang$applyTo = (function (seq31324){
return mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31324));
});

mokepon.tests.core.log_state = (function mokepon$tests$core$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___31329 = arguments.length;
var i__19540__auto___31330 = (0);
while(true){
if((i__19540__auto___31330 < len__19539__auto___31329)){
args__19546__auto__.push((arguments[i__19540__auto___31330]));

var G__31331 = (i__19540__auto___31330 + (1));
i__19540__auto___31330 = G__31331;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.core.log_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.core.log_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return mokepon.tests.core.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.tests.core.get_state,path));
});

mokepon.tests.core.log_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.core.log_state.cljs$lang$applyTo = (function (seq31328){
return mokepon.tests.core.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31328));
});

mokepon.tests.core.run_tests = (function mokepon$tests$core$run_tests(){
console.clear();

return cljs.test.run_block((function (){var env31335 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary31336 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$summary,cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$test,(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31335,summary31336){
return (function (){
cljs.test.set_env_BANG_(env31335);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$core,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__23157__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__23157__auto__,env31335,summary31336){
return (function (){
if((env__23157__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests$core,mokepon.tests.core.cljs_test_each_fixtures], 0));
});})(env__23157__auto__,env31335,summary31336))
], null),cljs.test.test_vars_block(cljs.core.PersistentVector.EMPTY),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__23157__auto__,env31335,summary31336){
return (function (){
if((env__23157__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__23157__auto__,env31335,summary31336))
], null)], 0));
})());
});})(env31335,summary31336))
,((function (env31335,summary31336){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$core,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env31335,summary31336))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31335,summary31336){
return (function (){
return cljs.core._vreset_BANG_(summary31336,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary31336),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env31335,summary31336))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31335,summary31336){
return (function (){
cljs.test.set_env_BANG_(env31335);

cljs.test.do_report((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary31336) : cljs.core.deref.call(null,summary31336)));

var G__31337_31338 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary31336) : cljs.core.deref.call(null,summary31336)),cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_run_DASH_tests);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__31337_31338) : cljs.test.report.call(null,G__31337_31338));

return cljs.test.clear_env_BANG_();
});})(env31335,summary31336))
], null));
})());
});
