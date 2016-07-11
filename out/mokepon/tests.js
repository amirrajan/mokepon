// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.items');
goog.require('mokepon.container');
mokepon.tests.state = (function mokepon$tests$state(){
var G__30673 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30673) : cljs.core.deref.call(null,G__30673));
});
mokepon.tests.log = (function mokepon$tests$log(o){
return console.log(cljs.core.clj__GT_js(o));
});
mokepon.tests.reset_game = (function mokepon$tests$reset_game(){
var G__30676_30678 = mokepon.container.app_state();
var G__30677_30679 = mokepon.rpg.new_game;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30676_30678,G__30677_30679) : cljs.core.reset_BANG_.call(null,G__30676_30678,G__30677_30679));

return mokepon.container.take_chipu_BANG_();
});
mokepon.tests.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.reset_game], null)], null);
mokepon.tests.make_enemy_attack_ready = (function mokepon$tests$make_enemy_attack_ready(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.set_cash = (function mokepon$tests$set_cash(amount){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$cash,amount);
});
mokepon.tests.has_play_by_play = (function mokepon$tests$has_play_by_play(message){
try{var values__22715__auto__ = (function (){var x__19562__auto__ = cljs.core.PersistentHashSet.fromArray([message], true);
return cljs.core._conj((function (){var x__19562__auto____$1 = cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1(mokepon.tests.state());
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto____$1);
})(),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.some,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$some,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30681){var t__22753__auto__ = e30681;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$message,null], null), null),cljs.core.list(cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.list(cljs.core.cst$sym$state))),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});
mokepon.tests.get_state = (function mokepon$tests$get_state(var_args){
var args__19810__auto__ = [];
var len__19803__auto___30683 = arguments.length;
var i__19804__auto___30684 = (0);
while(true){
if((i__19804__auto___30684 < len__19803__auto___30683)){
args__19810__auto__.push((arguments[i__19804__auto___30684]));

var G__30685 = (i__19804__auto___30684 + (1));
i__19804__auto___30684 = G__30685;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((0) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((0)),(0),null)):null);
return mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19811__auto__);
});

mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mokepon.tests.state(),path);
});

mokepon.tests.get_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.get_state.cljs$lang$applyTo = (function (seq30682){
return mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30682));
});

mokepon.tests.log_state = (function mokepon$tests$log_state(var_args){
var args__19810__auto__ = [];
var len__19803__auto___30687 = arguments.length;
var i__19804__auto___30688 = (0);
while(true){
if((i__19804__auto___30688 < len__19803__auto___30687)){
args__19810__auto__.push((arguments[i__19804__auto___30688]));

var G__30689 = (i__19804__auto___30688 + (1));
i__19804__auto___30688 = G__30689;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((0) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((0)),(0),null)):null);
return mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19811__auto__);
});

mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return mokepon.tests.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.tests.get_state,path));
});

mokepon.tests.log_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.log_state.cljs$lang$applyTo = (function (seq30686){
return mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30686));
});

mokepon.tests.being_attacked = (function mokepon$tests$being_attacked(){
return cljs.test.test_var(mokepon$tests$being_attacked.cljs$lang$var);
});
mokepon.tests.being_attacked.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

mokepon.tests.has_play_by_play("It has begun! Chipu vs Sulbabaur!");

mokepon.tests.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

try{var values__22715__auto__ = (function (){var x__19562__auto__ = cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(mokepon.container.chosen_monster());
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30690){var t__22753__auto__ = e30690;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$hp,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_chosen_DASH_monster)),(40)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.being_attacked.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.being_attacked;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_attacked,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_attacked,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",24,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_attacked)?mokepon.tests.being_attacked.cljs$lang$test:null)]));
mokepon.tests.being_killed = (function mokepon$tests$being_killed(){
return cljs.test.test_var(mokepon$tests$being_killed.cljs$lang$var);
});
mokepon.tests.being_killed.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$hp], null),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], null),(0));

mokepon.container.remove_dead_team_members_BANG_();

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.container.team_count();
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30691){var t__22753__auto__ = e30691;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_team_DASH_count),(0)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.being_killed.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.being_killed;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_killed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_killed,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_killed)?mokepon.tests.being_killed.cljs$lang$test:null)]));
mokepon.tests.healing_team = (function mokepon$tests$healing_team(){
return cljs.test.test_var(mokepon$tests$healing_team.cljs$lang$var);
});
mokepon.tests.healing_team.cljs$lang$test = (function (){

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.rpg.heal_team(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(10),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(5),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null));
return cljs.core._conj((function (){var x__19562__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto____$1);
})(),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_heal_DASH_team,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(10),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(5),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_heal_DASH_team,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(10),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(5),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30692){var t__22753__auto__ = e30692;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_heal_DASH_team,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(10),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(5),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chipu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(50),cljs.core.cst$kw$max_DASH_hp,(50)], null),cljs.core.cst$kw$deogude,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hp,(100),cljs.core.cst$kw$max_DASH_hp,(100)], null)], null)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.healing_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.healing_team;},cljs.core.cst$sym$mokepon$tests_SLASH_healing_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$healing_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.healing_team)?mokepon.tests.healing_team.cljs$lang$test:null)]));
mokepon.tests.capturing_wild_mokepon = (function mokepon$tests$capturing_wild_mokepon(){
return cljs.test.test_var(mokepon$tests$capturing_wild_mokepon.cljs$lang$var);
});
mokepon.tests.capturing_wild_mokepon.cljs$lang$test = (function (){

mokepon.tests.set_cash((20));

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

try{var values__22715__auto___30700 = (function (){var x__19562__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto___30701 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30700);
if(cljs.core.truth_(result__22716__auto___30701)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30700),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30700);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30693){var t__22753__auto___30702 = e30693;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__22753__auto___30702,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__22715__auto___30703 = (function (){var x__19562__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto___30704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30703);
if(cljs.core.truth_(result__22716__auto___30704)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30703),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30703);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30694){var t__22753__auto___30705 = e30694;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__22753__auto___30705,cljs.core.cst$kw$message,null], null));
}
mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

try{var values__22715__auto___30706 = (function (){var x__19562__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),x__19562__auto__);
})();
var result__22716__auto___30707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30706);
if(cljs.core.truth_(result__22716__auto___30707)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30706),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30706);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30695){var t__22753__auto___30708 = e30695;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(2)),cljs.core.cst$kw$actual,t__22753__auto___30708,cljs.core.cst$kw$message,null], null));
}
mokepon.container.throw_mokebox_BANG_();

try{var values__22715__auto___30709 = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__19562__auto__);
})();
var result__22716__auto___30710 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30709);
if(cljs.core.truth_(result__22716__auto___30710)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),null),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30709),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),null),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30709);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30696){var t__22753__auto___30711 = e30696;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),null),cljs.core.cst$kw$actual,t__22753__auto___30711,cljs.core.cst$kw$message,null], null));
}
try{var values__22715__auto___30712 = (function (){var x__19562__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19562__auto__);
})();
var result__22716__auto___30713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30712);
if(cljs.core.truth_(result__22716__auto___30713)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30712),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30712);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30697){var t__22753__auto___30714 = e30697;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,t__22753__auto___30714,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__22715__auto___30715 = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj((function (){var x__19562__auto____$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)),cljs.core.cst$kw$captured);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto____$1);
})(),x__19562__auto__);
})();
var result__22716__auto___30716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30715);
if(cljs.core.truth_(result__22716__auto___30716)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30715),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30715);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30698){var t__22753__auto___30717 = e30698;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling),cljs.core.cst$kw$captured)),cljs.core.cst$kw$actual,t__22753__auto___30717,cljs.core.cst$kw$message,null], null));
}
try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30699){var t__22753__auto__ = e30699;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.capturing_wild_mokepon.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.capturing_wild_mokepon;},cljs.core.cst$sym$mokepon$tests_SLASH_capturing_DASH_wild_DASH_mokepon,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$capturing_DASH_wild_DASH_mokepon,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",32,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.capturing_wild_mokepon)?mokepon.tests.capturing_wild_mokepon.cljs$lang$test:null)]));
mokepon.tests.battle_is_over_if_mokepon_is_captured = (function mokepon$tests$battle_is_over_if_mokepon_is_captured(){
return cljs.test.test_var(mokepon$tests$battle_is_over_if_mokepon_is_captured.cljs$lang$var);
});
mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$max_DASH_hp], null),(100000000));

mokepon.container.throw_mokebox_BANG_();

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.rpg.battle_over_QMARK_(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)),mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30718){var t__22753__auto__ = e30718;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_battle_DASH_over_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling)),true),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle_is_over_if_mokepon_is_captured;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,94,94,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)]));
mokepon.tests.purchasing_item = (function mokepon$tests$purchasing_item(){
return cljs.test.test_var(mokepon$tests$purchasing_item.cljs$lang$var);
});
mokepon.tests.purchasing_item.cljs$lang$test = (function (){

mokepon.tests.set_cash((10));

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30719){var t__22753__auto__ = e30719;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.purchasing_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.purchasing_item;},cljs.core.cst$sym$mokepon$tests_SLASH_purchasing_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$purchasing_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",25,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.purchasing_item)?mokepon.tests.purchasing_item.cljs$lang$test:null)]));
mokepon.tests.not_enough_cash_to_buy_item = (function mokepon$tests$not_enough_cash_to_buy_item(){
return cljs.test.test_var(mokepon$tests$not_enough_cash_to_buy_item.cljs$lang$var);
});
mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test = (function (){

mokepon.tests.set_cash((0));

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox.cljs$core$IFn$_invoke$arity$1(mokepon.items.store_items_lookup));

try{var values__22715__auto___30722 = (function (){var x__19562__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto___30723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30722);
if(cljs.core.truth_(result__22716__auto___30723)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30722),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30722);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30720){var t__22753__auto___30724 = e30720;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(0)),cljs.core.cst$kw$actual,t__22753__auto___30724,cljs.core.cst$kw$message,null], null));
}
try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30721){var t__22753__auto__ = e30721;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash),(0)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.not_enough_cash_to_buy_item;},cljs.core.cst$sym$mokepon$tests_SLASH_not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",37,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.not_enough_cash_to_buy_item)?mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test:null)]));
mokepon.tests.electric_only_does_half_damage_to_grass = (function mokepon$tests$electric_only_does_half_damage_to_grass(){
return cljs.test.test_var(mokepon$tests$electric_only_does_half_damage_to_grass.cljs$lang$var);
});
mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.attack_BANG_();

mokepon.tests.has_play_by_play("Chipu attacks Sulbabaur for 5. It wasn't very effective.");

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(45)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30725){var t__22753__auto__ = e30725;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(45)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.electric_only_does_half_damage_to_grass;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",49,1,120,120,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_only_does_half_damage_to_grass)?mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test:null)]));
mokepon.tests.ground_mokepon_do_double_damage_to_electric = (function mokepon$tests$ground_mokepon_do_double_damage_to_electric(){
return cljs.test.test_var(mokepon$tests$ground_mokepon_do_double_damage_to_electric.cljs$lang$var);
});
mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

mokepon.tests.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

mokepon.tests.has_play_by_play("It has begun! Chipu vs Deogude!");

mokepon.tests.has_play_by_play("Deogude attacks Chipu for 20. It was super effective.");

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30726){var t__22753__auto__ = e30726;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_do_double_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,128,128,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)]));
mokepon.tests.ground_mokepon_are_immune_to_electric = (function mokepon$tests$ground_mokepon_are_immune_to_electric(){
return cljs.test.test_var(mokepon$tests$ground_mokepon_are_immune_to_electric.cljs$lang$var);
});
mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.deogude);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.container.attack_BANG_();

mokepon.tests.has_play_by_play("Deogude is immune to Chipu's attack. No damage was done.");

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(50)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30727){var t__22753__auto__ = e30727;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(50)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_are_immune_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,136,136,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_are_immune_to_electric)?mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)]));
mokepon.tests.electric_mokepon_do_double_damage_to_water = (function mokepon$tests$electric_mokepon_do_double_damage_to_water(){
return cljs.test.test_var(mokepon$tests$electric_mokepon_do_double_damage_to_water.cljs$lang$var);
});
mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.container.attack_BANG_();

mokepon.tests.has_play_by_play("Chipu attacks Tirsqule for 20. It was super effective.");

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(30)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30728){var t__22753__auto__ = e30728;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$battling,cljs.core.cst$kw$hp),(30)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.electric_mokepon_do_double_damage_to_water;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,143,143,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_mokepon_do_double_damage_to_water)?mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)]));
mokepon.tests.water_mokepon_do_normal_damage_to_electric = (function mokepon$tests$water_mokepon_do_normal_damage_to_electric(){
return cljs.test.test_var(mokepon$tests$water_mokepon_do_normal_damage_to_electric.cljs$lang$var);
});
mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_(cljs.core.cst$kw$chipu,mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),(1800));

mokepon.tests.make_enemy_attack_ready();

mokepon.container.tick_battle_core_BANG_();

mokepon.tests.has_play_by_play("Tirsqule attacks Chipu for 10.");

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(40)),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30729){var t__22753__auto__ = e30729;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$hp),(40)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.water_mokepon_do_normal_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)]));
mokepon.tests.looking_for_trouble_chooses_first_monster_on_team = (function mokepon$tests$looking_for_trouble_chooses_first_monster_on_team(){
return cljs.test.test_var(mokepon$tests$looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var);
});
mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__30730_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30730_SHARP_,cljs.core.cst$kw$chipu);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.container.chosen_monster();
return cljs.core._conj((function (){var x__19562__auto____$1 = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto____$1);
})(),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30731){var t__22753__auto__ = e30731;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_chosen_DASH_monster),cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur)),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.looking_for_trouble_chooses_first_monster_on_team;},cljs.core.cst$sym$mokepon$tests_SLASH_looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",59,1,158,158,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)]));
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

try{var values__22715__auto___30733 = (function (){var x__19562__auto__ = mokepon.rpg.is_dead_QMARK_(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__19562__auto__);
})();
var result__22716__auto___30734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30733);
if(cljs.core.truth_(result__22716__auto___30734)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30733),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30733);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30732){var t__22753__auto___30735 = e30732;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_is_DASH_dead_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu)),true),cljs.core.cst$kw$actual,t__22753__auto___30735,cljs.core.cst$kw$message,null], null));
}
mokepon.container.tick_battle_core_BANG_();

return mokepon.tests.has_play_by_play("Sulbabaur dashes into battle!");
});

mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,165,165,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)]));
mokepon.tests.choosing_mokepon_within_battle = (function mokepon$tests$choosing_mokepon_within_battle(){
return cljs.test.test_var(mokepon$tests$choosing_mokepon_within_battle.cljs$lang$var);
});
mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test = (function (){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_(cljs.core.cst$kw$forest);

mokepon.container.find_trouble_BANG_(false);

try{var values__22715__auto___30741 = (function (){var x__19562__auto__ = mokepon.rpg.choosable_monsters(mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0)));
return cljs.core._conj((function (){var x__19562__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto____$1);
})(),x__19562__auto__);
})();
var result__22716__auto___30742 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30741);
if(cljs.core.truth_(result__22716__auto___30742)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30741),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30741);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30736){var t__22753__auto___30743 = e30736;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$rpg_SLASH_choosable_DASH_monsters,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chipu,cljs.core.cst$kw$sulbabaur], null)),cljs.core.cst$kw$actual,t__22753__auto___30743,cljs.core.cst$kw$message,null], null));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__22715__auto___30744 = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$chosen_DASH_key], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$sulbabaur),x__19562__auto__);
})();
var result__22716__auto___30745 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30744);
if(cljs.core.truth_(result__22716__auto___30745)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30744),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30744);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30737){var t__22753__auto___30746 = e30737;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$chosen_DASH_key),cljs.core.cst$kw$sulbabaur),cljs.core.cst$kw$actual,t__22753__auto___30746,cljs.core.cst$kw$message,null], null));
}
try{var values__22715__auto___30747 = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto___30748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30747);
if(cljs.core.truth_(result__22716__auto___30748)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30747),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30747);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30738){var t__22753__auto___30749 = e30738;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$chipu,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,t__22753__auto___30749,cljs.core.cst$kw$message,null], null));
}
try{var values__22715__auto___30750 = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__19562__auto__);
})();
var result__22716__auto___30751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto___30750);
if(cljs.core.truth_(result__22716__auto___30751)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto___30750),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto___30750);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e30739){var t__22753__auto___30752 = e30739;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),(0)),cljs.core.cst$kw$actual,t__22753__auto___30752,cljs.core.cst$kw$message,null], null));
}
mokepon.tests.has_play_by_play("You have chosen Sulbabaur to fight!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_(cljs.core.cst$kw$sulbabaur);

try{var values__22715__auto__ = (function (){var x__19562__auto__ = mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at], 0));
return cljs.core._conj((function (){var x__19562__auto____$1 = mokepon.rpg.active_turn_threshold;
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto____$1);
})(),x__19562__auto__);
})();
var result__22716__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22715__auto__);
if(cljs.core.truth_(result__22716__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__22715__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19562__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22715__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19562__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__22716__auto__;
}catch (e30740){var t__22753__auto__ = e30740;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$team,cljs.core.cst$kw$sulbabaur,cljs.core.cst$kw$at),cljs.core.cst$sym$rpg_SLASH_active_DASH_turn_DASH_threshold),cljs.core.cst$kw$actual,t__22753__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.choosing_mokepon_within_battle.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.choosing_mokepon_within_battle;},cljs.core.cst$sym$mokepon$tests_SLASH_choosing_DASH_mokepon_DASH_within_DASH_battle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$choosing_DASH_mokepon_DASH_within_DASH_battle,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",40,1,184,184,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.choosing_mokepon_within_battle)?mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test:null)]));
mokepon.tests.run_tests = (function mokepon$tests$run_tests(){
console.clear();

return cljs.test.run_block((function (){var env30756 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary30757 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$summary,cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$test,(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env30756,summary30757){
return (function (){
cljs.test.set_env_BANG_(env30756);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests,cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null));

return cljs.test.block((function (){var env__22819__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__22819__auto__,env30756,summary30757){
return (function (){
if((env__22819__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures], null),cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$sym$mokepon$tests,mokepon.tests.cljs_test_each_fixtures], 0));
});})(env__22819__auto__,env30756,summary30757))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.being_attacked;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_attacked,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_attacked,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",24,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_attacked)?mokepon.tests.being_attacked.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.being_killed;},cljs.core.cst$sym$mokepon$tests_SLASH_being_DASH_killed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$being_DASH_killed,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_killed)?mokepon.tests.being_killed.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.healing_team;},cljs.core.cst$sym$mokepon$tests_SLASH_healing_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$healing_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.healing_team)?mokepon.tests.healing_team.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.capturing_wild_mokepon;},cljs.core.cst$sym$mokepon$tests_SLASH_capturing_DASH_wild_DASH_mokepon,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$capturing_DASH_wild_DASH_mokepon,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",32,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.capturing_wild_mokepon)?mokepon.tests.capturing_wild_mokepon.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle_is_over_if_mokepon_is_captured;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_is_DASH_over_DASH_if_DASH_mokepon_DASH_is_DASH_captured,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,94,94,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.purchasing_item;},cljs.core.cst$sym$mokepon$tests_SLASH_purchasing_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$purchasing_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",25,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.purchasing_item)?mokepon.tests.purchasing_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.not_enough_cash_to_buy_item;},cljs.core.cst$sym$mokepon$tests_SLASH_not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",37,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.not_enough_cash_to_buy_item)?mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.electric_only_does_half_damage_to_grass;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_only_DASH_does_DASH_half_DASH_damage_DASH_to_DASH_grass,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",49,1,120,120,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_only_does_half_damage_to_grass)?mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_do_double_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,128,128,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_are_immune_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$ground_DASH_mokepon_DASH_are_DASH_immune_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,136,136,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_are_immune_to_electric)?mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.electric_mokepon_do_double_damage_to_water;},cljs.core.cst$sym$mokepon$tests_SLASH_electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$electric_DASH_mokepon_DASH_do_DASH_double_DASH_damage_DASH_to_DASH_water,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,143,143,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_mokepon_do_double_damage_to_water)?mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.water_mokepon_do_normal_damage_to_electric;},cljs.core.cst$sym$mokepon$tests_SLASH_water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$water_DASH_mokepon_DASH_do_DASH_normal_DASH_damage_DASH_to_DASH_electric,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.looking_for_trouble_chooses_first_monster_on_team;},cljs.core.cst$sym$mokepon$tests_SLASH_looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$looking_DASH_for_DASH_trouble_DASH_chooses_DASH_first_DASH_monster_DASH_on_DASH_team,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",59,1,158,158,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead;},cljs.core.cst$sym$mokepon$tests_SLASH_battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$battle_DASH_doesnt_DASH_end_DASH_until_DASH_all_DASH_of_DASH_team_DASH_is_DASH_dead,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,165,165,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.choosing_mokepon_within_battle;},cljs.core.cst$sym$mokepon$tests_SLASH_choosing_DASH_mokepon_DASH_within_DASH_battle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests,cljs.core.cst$sym$choosing_DASH_mokepon_DASH_within_DASH_battle,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",40,1,184,184,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.choosing_mokepon_within_battle)?mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test:null)]))], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__22819__auto__,env30756,summary30757){
return (function (){
if((env__22819__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__22819__auto__,env30756,summary30757))
], null)], 0));
})());
});})(env30756,summary30757))
,((function (env30756,summary30757){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.cst$sym$mokepon$tests,cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns], null));
});})(env30756,summary30757))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env30756,summary30757){
return (function (){
return cljs.core._vreset_BANG_(summary30757,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref(summary30757),cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
});})(env30756,summary30757))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env30756,summary30757){
return (function (){
cljs.test.set_env_BANG_(env30756);

cljs.test.do_report((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary30757) : cljs.core.deref.call(null,summary30757)));

var G__30758_30759 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(summary30757) : cljs.core.deref.call(null,summary30757)),cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_run_DASH_tests);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__30758_30759) : cljs.test.report.call(null,G__30758_30759));

return cljs.test.clear_env_BANG_();
});})(env30756,summary30757))
], null));
})());
});
