// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.items');
goog.require('mokepon.container');
mokepon.tests.state = (function mokepon$tests$state(){
var G__38001 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38001) : cljs.core.deref.call(null,G__38001));
});
mokepon.tests.log = (function mokepon$tests$log(o){
return console.log(cljs.core.clj__GT_js(o));
});
mokepon.tests.reset_game = (function mokepon$tests$reset_game(){
var G__38004_38006 = mokepon.container.app_state();
var G__38005_38007 = mokepon.rpg.new_game();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38004_38006,G__38005_38007) : cljs.core.reset_BANG_.call(null,G__38004_38006,G__38005_38007));

return mokepon.container.take_chipu_BANG_();
});
mokepon.tests.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.reset_game], null)], null);
mokepon.tests.make_enemy_attack_ready = (function mokepon$tests$make_enemy_attack_ready(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.make_chosen_attack_ready = (function mokepon$tests$make_chosen_attack_ready(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1(mokepon.tests.state()),cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.set_cash = (function mokepon$tests$set_cash(amount){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$cash,amount);
});
mokepon.tests.has_play_by_play = (function mokepon$tests$has_play_by_play(message){
try{var values__21445__auto__ = (function (){var x__19298__auto__ = cljs.core.PersistentHashSet.fromArray([message], true);
return cljs.core._conj((function (){var x__19298__auto____$1 = cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1(mokepon.tests.state());
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.some,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$some,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38009){var t__21483__auto__ = e38009;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});
mokepon.tests.get_state = (function mokepon$tests$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___38011 = arguments.length;
var i__19540__auto___38012 = (0);
while(true){
if((i__19540__auto___38012 < len__19539__auto___38011)){
args__19546__auto__.push((arguments[i__19540__auto___38012]));

var G__38013 = (i__19540__auto___38012 + (1));
i__19540__auto___38012 = G__38013;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mokepon.tests.state(),path);
});

mokepon.tests.get_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.get_state.cljs$lang$applyTo = (function (seq38010){
return mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38010));
});

mokepon.tests.log_state = (function mokepon$tests$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___38015 = arguments.length;
var i__19540__auto___38016 = (0);
while(true){
if((i__19540__auto___38016 < len__19539__auto___38015)){
args__19546__auto__.push((arguments[i__19540__auto___38016]));

var G__38017 = (i__19540__auto___38016 + (1));
i__19540__auto___38016 = G__38017;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return mokepon.tests.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.tests.get_state,path));
});

mokepon.tests.log_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.log_state.cljs$lang$applyTo = (function (seq38014){
return mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38014));
});

mokepon.tests.being_attacked = (function mokepon$tests$being_attacked(){
return cljs.test.test_var(mokepon$tests$being_attacked.cljs$lang$var);
});
mokepon.tests.being_attacked.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

mokepon.tests.has_play_by_play("It has begun! Chipu vs Sulbabaur!");

mokepon.tests.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

try{var values__21445__auto__ = (function (){var x__19298__auto__ = cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(mokepon.container.app_state_chosen_monster());
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38018){var t__21483__auto__ = e38018;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.being_attacked.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.being_attacked;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_attacked,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_attacked,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",24,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_attacked)?mokepon.tests.being_attacked.cljs$lang$test:null)]));
mokepon.tests.being_killed = (function mokepon$tests$being_killed(){
return cljs.test.test_var(mokepon$tests$being_killed.cljs$lang$var);
});
mokepon.tests.being_killed.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$hp], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.container.team_count();
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38019){var t__21483__auto__ = e38019;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count),(0)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.being_killed.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.being_killed;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_killed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_killed,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_killed)?mokepon.tests.being_killed.cljs$lang$test:null)]));
mokepon.tests.healing_team = (function mokepon$tests$healing_team(){
return cljs.test.test_var(mokepon$tests$healing_team.cljs$lang$var);
});
mokepon.tests.healing_team.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$team,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(10),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(5),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null));

mokepon.container.sleep_at_home_BANG_();

mokepon.tests.has_play_by_play("You've slept. Your posse has been healed.");

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38020){var t__21483__auto__ = e38020;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.healing_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.healing_team;},cljs.core.cst$sym$mokepon$tests_SLASH_healing_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$healing_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.healing_team)?mokepon.tests.healing_team.cljs$lang$test:null)]));
mokepon.tests.capturing_wild_mokepon = (function mokepon$tests$capturing_wild_mokepon(){
return cljs.test.test_var(mokepon$tests$capturing_wild_mokepon.cljs$lang$var);
});
mokepon.tests.capturing_wild_mokepon.cljs$lang$test = (function (){

mokepon.tests.set_cash((20));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

try{var values__21445__auto___38028 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38028);
if(cljs.core.truth_(result__21446__auto___38029)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38028),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38028);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38021){var t__21483__auto___38030 = e38021;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__21483__auto___38030,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__21445__auto___38031 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38032 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38031);
if(cljs.core.truth_(result__21446__auto___38032)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38031),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38031);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38022){var t__21483__auto___38033 = e38022;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__21483__auto___38033,cljs.core.cst$kw$message,null], null));
}
mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

try{var values__21445__auto___38034 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__21446__auto___38035 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38034);
if(cljs.core.truth_(result__21446__auto___38035)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38034),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38034);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38023){var t__21483__auto___38036 = e38023;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,t__21483__auto___38036,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__21445__auto___38037 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__21446__auto___38038 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38037);
if(cljs.core.truth_(result__21446__auto___38038)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),null),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38037),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),null),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38037);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38024){var t__21483__auto___38039 = e38024;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),null),cljs.core.cst$kw$actual,t__21483__auto___38039,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto___38040 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__21446__auto___38041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38040);
if(cljs.core.truth_(result__21446__auto___38041)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38040),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38040);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38025){var t__21483__auto___38042 = e38025;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,t__21483__auto___38042,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__21445__auto___38043 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)),cljs.core.cst$kw$captured);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__21446__auto___38044 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38043);
if(cljs.core.truth_(result__21446__auto___38044)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38043),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38043);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38026){var t__21483__auto___38045 = e38026;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,t__21483__auto___38045,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38027){var t__21483__auto__ = e38027;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.capturing_wild_mokepon.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.capturing_wild_mokepon;},cljs.core.cst$sym$mokepon$tests_SLASH_capturing_DASH_wild_DASH_mokepon,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$capturing_DASH_wild_DASH_mokepon,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",32,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.capturing_wild_mokepon)?mokepon.tests.capturing_wild_mokepon.cljs$lang$test:null)]));
mokepon.tests.battle_is_over_if_mokepon_is_captured = (function mokepon$tests$battle_is_over_if_mokepon_is_captured(){
return cljs.test.test_var(mokepon$tests$battle_is_over_if_mokepon_is_captured.cljs$lang$var);
});
mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.rpg.battle_over_QMARK_(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)),mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38046){var t__21483__auto__ = e38046;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle_is_over_if_mokepon_is_captured;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)]));
mokepon.tests.purchasing_item = (function mokepon$tests$purchasing_item(){
return cljs.test.test_var(mokepon$tests$purchasing_item.cljs$lang$var);
});
mokepon.tests.purchasing_item.cljs$lang$test = (function (){

mokepon.tests.set_cash((10));

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.tests.has_play_by_play([cljs.core.str("You take the Mok\u00E9box "),cljs.core.str("from the midget's saggy, squishy hand. "),cljs.core.str("He smiles and gives you a tip of his top hat.")].join(''));

try{var values__21445__auto___38049 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__21446__auto___38050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38049);
if(cljs.core.truth_(result__21446__auto___38050)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38049),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38049);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38047){var t__21483__auto___38051 = e38047;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,t__21483__auto___38051,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38048){var t__21483__auto__ = e38048;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.purchasing_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.purchasing_item;},cljs.core.cst$sym$mokepon$tests_SLASH_purchasing_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$purchasing_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",25,1,123,123,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.purchasing_item)?mokepon.tests.purchasing_item.cljs$lang$test:null)]));
mokepon.tests.not_enough_cash_to_buy_item = (function mokepon$tests$not_enough_cash_to_buy_item(){
return cljs.test.test_var(mokepon$tests$not_enough_cash_to_buy_item.cljs$lang$var);
});
mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test = (function (){

mokepon.tests.set_cash((0));

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.tests.has_play_by_play([cljs.core.str("The midget bitch slaps you saying that you can't afford that. "),cljs.core.str("He wonders if you were taught common core math.")].join(''));

try{var values__21445__auto___38054 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38055 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38054);
if(cljs.core.truth_(result__21446__auto___38055)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38054),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38054);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38052){var t__21483__auto___38056 = e38052;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__21483__auto___38056,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38053){var t__21483__auto__ = e38053;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.not_enough_cash_to_buy_item;},cljs.core.cst$sym$mokepon$tests_SLASH_not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",37,1,134,134,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.not_enough_cash_to_buy_item)?mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test:null)]));
mokepon.tests.electric_only_does_half_damage_to_grass = (function mokepon$tests$electric_only_does_half_damage_to_grass(){
return cljs.test.test_var(mokepon$tests$electric_only_does_half_damage_to_grass.cljs$lang$var);
});
mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.attack_BANG_();

mokepon.tests.has_play_by_play("Chipu attacks Sulbabaur for 5. It wasn't very effective.");

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(45)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38057){var t__21483__auto__ = e38057;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.electric_only_does_half_damage_to_grass;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",49,1,144,144,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_only_does_half_damage_to_grass)?mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test:null)]));
mokepon.tests.ground_mokepon_do_double_damage_to_electric = (function mokepon$tests$ground_mokepon_do_double_damage_to_electric(){
return cljs.test.test_var(mokepon$tests$ground_mokepon_do_double_damage_to_electric.cljs$lang$var);
});
mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.tests.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

mokepon.tests.has_play_by_play("It has begun! Chipu vs Deogude!");

mokepon.tests.has_play_by_play("Deogude attacks Chipu for 20. It was super effective.");

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38058){var t__21483__auto__ = e38058;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_do_double_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,152,152,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)]));
mokepon.tests.ground_mokepon_are_immune_to_electric = (function mokepon$tests$ground_mokepon_are_immune_to_electric(){
return cljs.test.test_var(mokepon$tests$ground_mokepon_are_immune_to_electric.cljs$lang$var);
});
mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.container.attack_BANG_();

mokepon.tests.has_play_by_play("Deogude is immune to Chipu's attack. No damage was done.");

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38059){var t__21483__auto__ = e38059;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_are_immune_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,160,160,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_are_immune_to_electric)?mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)]));
mokepon.tests.electric_mokepon_do_double_damage_to_water = (function mokepon$tests$electric_mokepon_do_double_damage_to_water(){
return cljs.test.test_var(mokepon$tests$electric_mokepon_do_double_damage_to_water.cljs$lang$var);
});
mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.container.attack_BANG_();

mokepon.tests.has_play_by_play("Chipu attacks Tirsqule for 20. It was super effective.");

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38060){var t__21483__auto__ = e38060;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.electric_mokepon_do_double_damage_to_water;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,167,167,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_mokepon_do_double_damage_to_water)?mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)]));
mokepon.tests.water_mokepon_do_normal_damage_to_electric = (function mokepon$tests$water_mokepon_do_normal_damage_to_electric(){
return cljs.test.test_var(mokepon$tests$water_mokepon_do_normal_damage_to_electric.cljs$lang$var);
});
mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.tests.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

mokepon.tests.has_play_by_play("Tirsqule attacks Chipu for 10.");

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38061){var t__21483__auto__ = e38061;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.water_mokepon_do_normal_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,174,174,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)]));
mokepon.tests.looking_for_trouble_chooses_first_monster_on_team = (function mokepon$tests$looking_for_trouble_chooses_first_monster_on_team(){
return cljs.test.test_var(mokepon$tests$looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var);
});
mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__38062_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38062_SHARP_,cljs.core.cst$kw$chipu);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_chosen_monster();
return cljs.core._conj((function (){var x__19298__auto____$1 = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38063){var t__21483__auto__ = e38063;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_app_DASH_state_DASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.looking_for_trouble_chooses_first_monster_on_team;},cljs.core.cst$sym$mokepon$tests_SLASH_looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",59,1,182,182,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)]));
mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead = (function mokepon$tests$battle_doesnt_end_until_all_of_team_is_dead(){
return cljs.test.test_var(mokepon$tests$battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var);
});
mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

mokepon.tests.make_enemy_attack_ready();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$power], null),(100));

mokepon.container.tick_battle_core_BANG_();

try{var values__21445__auto___38065 = (function (){var x__19298__auto__ = mokepon.rpg.is_dead_QMARK_(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__21446__auto___38066 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38065);
if(cljs.core.truth_(result__21446__auto___38066)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38065),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38065);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38064){var t__21483__auto___38067 = e38064;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,t__21483__auto___38067,cljs.core.cst$kw$message,null], null));
}
mokepon.container.tick_battle_core_BANG_();

return mokepon.tests.has_play_by_play("Sulbabaur dashes into battle!");
});

mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,189,189,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)]));
mokepon.tests.choosing_mokepon_within_battle = (function mokepon$tests$choosing_mokepon_within_battle(){
return cljs.test.test_var(mokepon$tests$choosing_mokepon_within_battle.cljs$lang$var);
});
mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__21445__auto___38073 = (function (){var x__19298__auto__ = mokepon.rpg.choosable_monsters(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0)));
return cljs.core._conj((function (){var x__19298__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__21446__auto___38074 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38073);
if(cljs.core.truth_(result__21446__auto___38074)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38073),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38073);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38068){var t__21483__auto___38075 = e38068;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,t__21483__auto___38075,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__21445__auto___38076 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$chosen_DASH_key], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$sulbabaur),x__19298__auto__);
})();
var result__21446__auto___38077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38076);
if(cljs.core.truth_(result__21446__auto___38077)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38076),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38076);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38069){var t__21483__auto___38078 = e38069;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,t__21483__auto___38078,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto___38079 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38079);
if(cljs.core.truth_(result__21446__auto___38080)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38079),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38079);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38070){var t__21483__auto___38081 = e38070;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,t__21483__auto___38081,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto___38082 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38082);
if(cljs.core.truth_(result__21446__auto___38083)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38082),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38082);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38071){var t__21483__auto___38084 = e38071;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,t__21483__auto___38084,cljs.core.cst$kw$message,null], null));
}
mokepon.tests.has_play_by_play("You have chosen Sulbabaur to fight!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj((function (){var x__19298__auto____$1 = mokepon.rpg.active_turn_threshold;
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38072){var t__21483__auto__ = e38072;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.choosing_mokepon_within_battle.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.choosing_mokepon_within_battle;},cljs.core.cst$sym$mokepon$tests_SLASH_choosing_DASH_mokepon_DASH_within_DASH_battle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$choosing_DASH_mokepon_DASH_within_DASH_battle,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",40,1,208,208,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.choosing_mokepon_within_battle)?mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test:null)]));
mokepon.tests.winning_battle_gives_fiddy = (function mokepon$tests$winning_battle_gives_fiddy(){
return cljs.test.test_var(mokepon$tests$winning_battle_gives_fiddy.cljs$lang$var);
});
mokepon.tests.winning_battle_gives_fiddy.cljs$lang$test = (function (){

mokepon.tests.set_cash((0));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

mokepon.tests.make_chosen_attack_ready();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$power], null),(50));

mokepon.container.attack_BANG_();

try{var values__21445__auto___38088 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38088);
if(cljs.core.truth_(result__21446__auto___38089)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38088),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38088);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38085){var t__21483__auto___38090 = e38085;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,t__21483__auto___38090,cljs.core.cst$kw$message,null], null));
}
mokepon.tests.make_chosen_attack_ready();

mokepon.container.attack_BANG_();

try{var values__21445__auto___38091 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__21446__auto___38092 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.rpg.is_dead_QMARK_,values__21445__auto___38091);
if(cljs.core.truth_(result__21446__auto___38092)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,cljs.core.cons(mokepon.rpg.is_dead_QMARK_,values__21445__auto___38091),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,values__21445__auto___38091);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38086){var t__21483__auto___38093 = e38086;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),cljs.core.cst$kw$actual,t__21483__auto___38093,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(3)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38087){var t__21483__auto__ = e38087;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(3)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.winning_battle_gives_fiddy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.winning_battle_gives_fiddy;},cljs.core.cst$sym$mokepon$tests_SLASH_winning_DASH_battle_DASH_gives_DASH_fiddy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$winning_DASH_battle_DASH_gives_DASH_fiddy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",36,1,229,229,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.winning_battle_gives_fiddy)?mokepon.tests.winning_battle_gives_fiddy.cljs$lang$test:null)]));
mokepon.tests.using_candy = (function mokepon$tests$using_candy(){
return cljs.test.test_var(mokepon$tests$using_candy.cljs$lang$var);
});
mokepon.tests.using_candy.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$candy);

try{var values__21445__auto___38098 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__21446__auto___38099 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38098);
if(cljs.core.truth_(result__21446__auto___38099)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38098),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38098);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38094){var t__21483__auto___38100 = e38094;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,t__21483__auto___38100,cljs.core.cst$kw$message,null], null));
}
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.tests.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

try{var values__21445__auto___38101 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__21446__auto___38102 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38101);
if(cljs.core.truth_(result__21446__auto___38102)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38101),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38101);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38095){var t__21483__auto___38103 = e38095;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__21483__auto___38103,cljs.core.cst$kw$message,null], null));
}
mokepon.container.use_candy_BANG_();

mokepon.tests.has_play_by_play("Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__21445__auto___38104 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38105 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38104);
if(cljs.core.truth_(result__21446__auto___38105)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38104),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38104);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38096){var t__21483__auto___38106 = e38096;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(0)),cljs.core.cst$kw$actual,t__21483__auto___38106,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38097){var t__21483__auto__ = e38097;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.using_candy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.using_candy;},cljs.core.cst$sym$mokepon$tests_SLASH_using_DASH_candy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$using_DASH_candy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",21,1,245,245,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.using_candy)?mokepon.tests.using_candy.cljs$lang$test:null)]));
mokepon.tests.using_candy_max_hp = (function mokepon$tests$using_candy_max_hp(){
return cljs.test.test_var(mokepon$tests$using_candy_max_hp.cljs$lang$var);
});
mokepon.tests.using_candy_max_hp.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$candy);

try{var values__21445__auto___38110 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__21446__auto___38111 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38110);
if(cljs.core.truth_(result__21446__auto___38111)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38110),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38110);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38107){var t__21483__auto___38112 = e38107;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(1)),cljs.core.cst$kw$actual,t__21483__auto___38112,cljs.core.cst$kw$message,null], null));
}
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.container.use_candy_BANG_();

mokepon.tests.has_play_by_play("Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__21445__auto___38113 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$candy);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__21446__auto___38114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38113);
if(cljs.core.truth_(result__21446__auto___38114)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38113),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38113);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38108){var t__21483__auto___38115 = e38108;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$candy),(0)),cljs.core.cst$kw$actual,t__21483__auto___38115,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38109){var t__21483__auto__ = e38109;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.using_candy_max_hp.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.using_candy_max_hp;},cljs.core.cst$sym$mokepon$tests_SLASH_using_DASH_candy_DASH_max_DASH_hp,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$using_DASH_candy_DASH_max_DASH_hp,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",28,1,258,258,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.using_candy_max_hp)?mokepon.tests.using_candy_max_hp.cljs$lang$test:null)]));
mokepon.tests.mokedex_captured_encountered = (function mokepon$tests$mokedex_captured_encountered(){
return cljs.test.test_var(mokepon$tests$mokedex_captured_encountered.cljs$lang$var);
});
mokepon.tests.mokedex_captured_encountered.cljs$lang$test = (function (){

try{var values__21445__auto___38121 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$chipu),x__19298__auto__);
})();
var result__21446__auto___38122 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38121);
if(cljs.core.truth_(result__21446__auto___38122)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38121),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38121);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38116){var t__21483__auto___38123 = e38116;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$id),cljs.core.cst$kw$chipu),cljs.core.cst$kw$actual,t__21483__auto___38123,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto___38124 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__21446__auto___38125 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38124);
if(cljs.core.truth_(result__21446__auto___38125)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38124),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38124);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38117){var t__21483__auto___38126 = e38117;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__21483__auto___38126,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto___38127 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__21446__auto___38128 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38127);
if(cljs.core.truth_(result__21446__auto___38128)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38127),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38127);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38118){var t__21483__auto___38129 = e38118;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),true),cljs.core.cst$kw$actual,t__21483__auto___38129,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__21445__auto___38130 = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__21446__auto___38131 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto___38130);
if(cljs.core.truth_(result__21446__auto___38131)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto___38130),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto___38130);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e38119){var t__21483__auto___38132 = e38119;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$encountered),true),cljs.core.cst$kw$actual,t__21483__auto___38132,cljs.core.cst$kw$message,null], null));
}
try{var values__21445__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__21446__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21445__auto__);
if(cljs.core.truth_(result__21446__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21445__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21445__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21446__auto__;
}catch (e38120){var t__21483__auto__ = e38120;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters,(0),cljs.core.cst$kw$captured),false),cljs.core.cst$kw$actual,t__21483__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.mokedex_captured_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex_captured_encountered;},cljs.core.cst$sym$mokepon$tests_SLASH_mokedex_DASH_captured_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$mokedex_DASH_captured_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",38,1,268,268,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex_captured_encountered)?mokepon.tests.mokedex_captured_encountered.cljs$lang$test:null)]));
mokepon.tests.run_tests = (function mokepon$tests$run_tests(){
console.clear();

return cljs.test.run_block((function (){var env38136 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary38137 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$summary,cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$test,(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env38136,summary38137){
return (function (){
cljs.test.set_env_BANG_(env38136);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__21549__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21549__auto__,env38136,summary38137){
return (function (){
if((env__21549__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests,mokepon.tests.cljs_test_each_fixtures], 0));
});})(env__21549__auto__,env38136,summary38137))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.being_attacked;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_attacked,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_attacked,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",24,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_attacked)?mokepon.tests.being_attacked.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.being_killed;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_killed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_killed,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_killed)?mokepon.tests.being_killed.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.healing_team;},cljs.core.cst$sym$mokepon$tests_SLASH_healing_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$healing_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.healing_team)?mokepon.tests.healing_team.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.capturing_wild_mokepon;},cljs.core.cst$sym$mokepon$tests_SLASH_capturing_DASH_wild_DASH_mokepon,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$capturing_DASH_wild_DASH_mokepon,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",32,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.capturing_wild_mokepon)?mokepon.tests.capturing_wild_mokepon.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle_is_over_if_mokepon_is_captured;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.purchasing_item;},cljs.core.cst$sym$mokepon$tests_SLASH_purchasing_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$purchasing_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",25,1,123,123,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.purchasing_item)?mokepon.tests.purchasing_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.not_enough_cash_to_buy_item;},cljs.core.cst$sym$mokepon$tests_SLASH_not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",37,1,134,134,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.not_enough_cash_to_buy_item)?mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.electric_only_does_half_damage_to_grass;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",49,1,144,144,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_only_does_half_damage_to_grass)?mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_do_double_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,152,152,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_are_immune_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,160,160,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_are_immune_to_electric)?mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.electric_mokepon_do_double_damage_to_water;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,167,167,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_mokepon_do_double_damage_to_water)?mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.water_mokepon_do_normal_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,174,174,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.looking_for_trouble_chooses_first_monster_on_team;},cljs.core.cst$sym$mokepon$tests_SLASH_looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",59,1,182,182,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,189,189,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.choosing_mokepon_within_battle;},cljs.core.cst$sym$mokepon$tests_SLASH_choosing_DASH_mokepon_DASH_within_DASH_battle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$choosing_DASH_mokepon_DASH_within_DASH_battle,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",40,1,208,208,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.choosing_mokepon_within_battle)?mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.winning_battle_gives_fiddy;},cljs.core.cst$sym$mokepon$tests_SLASH_winning_DASH_battle_DASH_gives_DASH_fiddy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$winning_DASH_battle_DASH_gives_DASH_fiddy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",36,1,229,229,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.winning_battle_gives_fiddy)?mokepon.tests.winning_battle_gives_fiddy.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.using_candy;},cljs.core.cst$sym$mokepon$tests_SLASH_using_DASH_candy,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$using_DASH_candy,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",21,1,245,245,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.using_candy)?mokepon.tests.using_candy.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.using_candy_max_hp;},cljs.core.cst$sym$mokepon$tests_SLASH_using_DASH_candy_DASH_max_DASH_hp,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$using_DASH_candy_DASH_max_DASH_hp,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",28,1,258,258,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.using_candy_max_hp)?mokepon.tests.using_candy_max_hp.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.mokedex_captured_encountered;},cljs.core.cst$sym$mokepon$tests_SLASH_mokedex_DASH_captured_DASH_encountered,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$mokedex_DASH_captured_DASH_encountered,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",38,1,268,268,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex_captured_encountered)?mokepon.tests.mokedex_captured_encountered.cljs$lang$test:null)]))], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__21549__auto__,env38136,summary38137){
return (function (){
if((env__21549__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__21549__auto__,env38136,summary38137))
], null)], 0));
})());
});})(env38136,summary38137))
,((function (env38136,summary38137){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env38136,summary38137))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env38136,summary38137){
return (function (){
return cljs.core._vreset_BANG_(summary38137,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary38137),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env38136,summary38137))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env38136,summary38137){
return (function (){
cljs.test.set_env_BANG_(env38136);

cljs.test.do_report((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary38137) : cljs.core.deref.call(null,summary38137)));

var G__38138_38139 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary38137) : cljs.core.deref.call(null,summary38137)),cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_run_DASH_tests);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__38138_38139) : cljs.test.report.call(null,G__38138_38139));

return cljs.test.clear_env_BANG_();
});})(env38136,summary38137))
], null));
})());
});
