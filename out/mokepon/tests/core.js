// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.items');
goog.require('mokepon.container');
mokepon.tests.core.state = (function mokepon$tests$core$state(){
var G__72694 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72694) : cljs.core.deref.call(null,G__72694));
});
mokepon.tests.core.log = (function mokepon$tests$core$log(o){
return console.log(cljs.core.clj__GT_js(o));
});
mokepon.tests.core.reset_game = (function mokepon$tests$core$reset_game(){
var G__72697_72699 = mokepon.container.app_state();
var G__72698_72700 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72697_72699,G__72698_72700) : cljs.core.reset_BANG_.call(null,G__72697_72699,G__72698_72700));

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
try{var values__21236__auto__ = (function (){var x__19298__auto__ = cljs.core.PersistentHashSet.fromArray([message], true);
return cljs.core._conj((function (){var x__19298__auto____$1 = cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1(mokepon.tests.core.state());
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__21237__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__21236__auto__);
if(cljs.core.truth_(result__21237__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.some,values__21236__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$some,values__21236__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21237__auto__;
}catch (e72702){var t__21274__auto__ = e72702;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,t__21274__auto__,cljs.core.cst$kw$message,null], null));
}});
mokepon.tests.core.get_state = (function mokepon$tests$core$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___72704 = arguments.length;
var i__19540__auto___72705 = (0);
while(true){
if((i__19540__auto___72705 < len__19539__auto___72704)){
args__19546__auto__.push((arguments[i__19540__auto___72705]));

var G__72706 = (i__19540__auto___72705 + (1));
i__19540__auto___72705 = G__72706;
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

mokepon.tests.core.get_state.cljs$lang$applyTo = (function (seq72703){
return mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72703));
});

mokepon.tests.core.log_state = (function mokepon$tests$core$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___72708 = arguments.length;
var i__19540__auto___72709 = (0);
while(true){
if((i__19540__auto___72709 < len__19539__auto___72708)){
args__19546__auto__.push((arguments[i__19540__auto___72709]));

var G__72710 = (i__19540__auto___72709 + (1));
i__19540__auto___72709 = G__72710;
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

mokepon.tests.core.log_state.cljs$lang$applyTo = (function (seq72707){
return mokepon.tests.core.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72707));
});

mokepon.tests.core.run_tests = (function mokepon$tests$core$run_tests(){
console.clear();

return cljs.test.run_block((function (){var env72714 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary72715 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$summary,cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$test,(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
cljs.test.set_env_BANG_(env72714);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__21340__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests$affinities,mokepon.tests.affinities.cljs_test_each_fixtures], 0));
});})(env__21340__auto__,env72714,summary72715))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.affinities.electric_only_does_half_damage_to_grass;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",49,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.electric_only_does_half_damage_to_grass)?mokepon.tests.affinities.electric_only_does_half_damage_to_grass.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",53,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.affinities.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.affinities.ground_mokepon_are_immune_to_electric;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",47,1,27,27,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.ground_mokepon_are_immune_to_electric)?mokepon.tests.affinities.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",52,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water)?mokepon.tests.affinities.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric;},cljs.core.cst$sym$mokepon$tests$affinities_SLASH_water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$sym$water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/affinities.cljs",52,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.affinities.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)]))], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__21340__auto__,env72714,summary72715))
], null)], 0));
})());
});})(env72714,summary72715))
,((function (env72714,summary72715){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$affinities,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env72714,summary72715))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
return cljs.core._vreset_BANG_(summary72715,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary72715),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env72714,summary72715))
], null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
cljs.test.set_env_BANG_(env72714);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$store,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__21340__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests$store,mokepon.tests.store.cljs_test_each_fixtures], 0));
});})(env__21340__auto__,env72714,summary72715))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.store.purchasing_item;},cljs.core.cst$sym$mokepon$tests$store_SLASH_purchasing_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$store,cljs.core.cst$sym$purchasing_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/store.cljs",25,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.store.purchasing_item)?mokepon.tests.store.purchasing_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.store.not_enough_cash_to_buy_item;},cljs.core.cst$sym$mokepon$tests$store_SLASH_not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$store,cljs.core.cst$sym$not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/store.cljs",37,1,27,27,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.store.not_enough_cash_to_buy_item)?mokepon.tests.store.not_enough_cash_to_buy_item.cljs$lang$test:null)]))], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__21340__auto__,env72714,summary72715))
], null)], 0));
})());
});})(env72714,summary72715))
,((function (env72714,summary72715){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$store,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env72714,summary72715))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
return cljs.core._vreset_BANG_(summary72715,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary72715),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env72714,summary72715))
], null)),cljs.core.array_seq([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
cljs.test.set_env_BANG_(env72714);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__21340__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests$mokedex,mokepon.tests.mokedex.cljs_test_each_fixtures], 0));
});})(env__21340__auto__,env72714,summary72715))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_captured_encountered;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_mokedex_DASH_captured_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$mokedex_DASH_captured_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",38,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_captured_encountered)?mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_battle_encountered;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_mokedex_DASH_battle_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$mokedex_DASH_battle_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",36,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_battle_encountered)?mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex;},cljs.core.cst$sym$mokepon$tests$mokedex_SLASH_capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$sym$capturing_DASH_mokepon_DASH_show_DASH_up_DASH_in_DASH_mokedex,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",46,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex)?mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test:null)]))], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__21340__auto__,env72714,summary72715))
], null)], 0));
})());
});})(env72714,summary72715))
,((function (env72714,summary72715){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$mokedex,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env72714,summary72715))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
return cljs.core._vreset_BANG_(summary72715,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary72715),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env72714,summary72715))
], null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
cljs.test.set_env_BANG_(env72714);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__21340__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests$battle,mokepon.tests.battle.cljs_test_each_fixtures], 0));
});})(env__21340__auto__,env72714,summary72715))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.battle.being_attacked;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_being_DASH_attacked,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$being_DASH_attacked,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",24,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_attacked)?mokepon.tests.battle.being_attacked.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.being_killed;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_being_DASH_killed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$being_DASH_killed,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",22,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_killed)?mokepon.tests.battle.being_killed.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.capturing_wild_mokepon;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_capturing_DASH_wild_DASH_mokepon,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$capturing_DASH_wild_DASH_mokepon,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",32,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.capturing_wild_mokepon)?mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.battle_is_over_if_mokepon_is_captured;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",47,1,67,67,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.using_candy;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_using_DASH_candy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$using_DASH_candy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",21,1,80,80,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy)?mokepon.tests.battle.using_candy.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.using_candy_max_hp;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_using_DASH_candy_DASH_max_DASH_hp,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$using_DASH_candy_DASH_max_DASH_hp,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",28,1,93,93,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy_max_hp)?mokepon.tests.battle.using_candy_max_hp.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.choosing_mokepon_within_battle;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_choosing_DASH_mokepon_DASH_within_DASH_battle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$choosing_DASH_mokepon_DASH_within_DASH_battle,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",40,1,103,103,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.choosing_mokepon_within_battle)?mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",59,1,122,122,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",53,1,129,129,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle.winning_battle_gives_fiddy;},cljs.core.cst$sym$mokepon$tests$battle_SLASH_winning_DASH_battle_DASH_gives_DASH_fiddy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$sym$winning_DASH_battle_DASH_gives_DASH_fiddy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/battle.cljs",36,1,148,148,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.winning_battle_gives_fiddy)?mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$test:null)]))], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__21340__auto__,env72714,summary72715))
], null)], 0));
})());
});})(env72714,summary72715))
,((function (env72714,summary72715){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$battle,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env72714,summary72715))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
return cljs.core._vreset_BANG_(summary72715,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary72715),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env72714,summary72715))
], null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
cljs.test.set_env_BANG_(env72714);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$home,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__21340__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests$home,mokepon.tests.home.cljs_test_each_fixtures], 0));
});})(env__21340__auto__,env72714,summary72715))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.home.healing_team;},cljs.core.cst$sym$mokepon$tests$home_SLASH_healing_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$home,cljs.core.cst$sym$healing_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/home.cljs",22,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.home.healing_team)?mokepon.tests.home.healing_team.cljs$lang$test:null)]))], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__21340__auto__,env72714,summary72715))
], null)], 0));
})());
});})(env72714,summary72715))
,((function (env72714,summary72715){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$home,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env72714,summary72715))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
return cljs.core._vreset_BANG_(summary72715,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary72715),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env72714,summary72715))
], null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
cljs.test.set_env_BANG_(env72714);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$core,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__21340__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests$core,mokepon.tests.core.cljs_test_each_fixtures], 0));
});})(env__21340__auto__,env72714,summary72715))
], null),cljs.test.test_vars_block(cljs.core.PersistentVector.EMPTY),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21340__auto__,env72714,summary72715){
return (function (){
if((env__21340__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__21340__auto__,env72714,summary72715))
], null)], 0));
})());
});})(env72714,summary72715))
,((function (env72714,summary72715){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests$core,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env72714,summary72715))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
return cljs.core._vreset_BANG_(summary72715,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary72715),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env72714,summary72715))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env72714,summary72715){
return (function (){
cljs.test.set_env_BANG_(env72714);

cljs.test.do_report((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary72715) : cljs.core.deref.call(null,summary72715)));

var G__72716_72717 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary72715) : cljs.core.deref.call(null,summary72715)),cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_run_DASH_tests);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__72716_72717) : cljs.test.report.call(null,G__72716_72717));

return cljs.test.clear_env_BANG_();
});})(env72714,summary72715))
], null)], 0));
})());
});
