// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.container');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.monsters');
goog.require('mokepon.items');
goog.require('alandipert.storage_atom');
goog.require('mokepon.rpg');
goog.require('mokepon.components');
mokepon.container.alert = (function mokepon$container$alert(message){
return (function (){
return window.alert(message);
});
});
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(alandipert.storage_atom.storage_delay,(1000)) : cljs.core.reset_BANG_.call(null,alandipert.storage_atom.storage_delay,(1000)));
if(typeof mokepon.container.current_app_state !== 'undefined'){
} else {
mokepon.container.current_app_state = (function (){var G__50404 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$game], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50404) : cljs.core.atom.call(null,G__50404));
})();
}
if(typeof mokepon.container.game_app_state !== 'undefined'){
} else {
mokepon.container.game_app_state = alandipert.storage_atom.local_storage((cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(mokepon.rpg.new_game) : cljs.core.atom.call(null,mokepon.rpg.new_game)),cljs.core.cst$kw$game);
}
if(typeof mokepon.container.test_app_state !== 'undefined'){
} else {
mokepon.container.test_app_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(mokepon.rpg.new_game) : cljs.core.atom.call(null,mokepon.rpg.new_game));
}
mokepon.container.app_state = (function mokepon$container$app_state(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mokepon.container.current_app_state) : cljs.core.deref.call(null,mokepon.container.current_app_state))),cljs.core.cst$kw$game)){
return mokepon.container.game_app_state;
} else {
return mokepon.container.test_app_state;
}
});
mokepon.container.get_state = (function mokepon$container$get_state(var_args){
var args__29094__auto__ = [];
var len__29087__auto___50407 = arguments.length;
var i__29088__auto___50408 = (0);
while(true){
if((i__29088__auto___50408 < len__29087__auto___50407)){
args__29094__auto__.push((arguments[i__29088__auto___50408]));

var G__50409 = (i__29088__auto___50408 + (1));
i__29088__auto___50408 = G__50409;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__50406 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50406) : cljs.core.deref.call(null,G__50406));
})(),path);
});

mokepon.container.get_state.cljs$lang$maxFixedArity = (0);

mokepon.container.get_state.cljs$lang$applyTo = (function (seq50405){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50405));
});

mokepon.container.team_count = (function mokepon$container$team_count(){
return cljs.core.count(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__50411 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50411) : cljs.core.deref.call(null,G__50411));
})()));
});
mokepon.container.chosen_monster = (function mokepon$container$chosen_monster(){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1((function (){var G__50413 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50413) : cljs.core.deref.call(null,G__50413));
})())], 0));
});
mokepon.container.set_battle = (function mokepon$container$set_battle(chosen_key,battling){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50415 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50415) : cljs.core.deref.call(null,G__50415));
})(),cljs.core.cst$kw$chosen_DASH_key,chosen_key,cljs.core.array_seq([cljs.core.cst$kw$battling,battling], 0));
});
mokepon.container.clear_battle_BANG_ = (function mokepon$container$clear_battle_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.array_seq([cljs.core.cst$kw$battling,null], 0));
});
mokepon.container.update_in_team = (function mokepon$container$update_in_team(monster_key,new_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__50417 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50417) : cljs.core.deref.call(null,G__50417));
})()),monster_key,new_value);
});
mokepon.container.add_to_play_by_play = (function mokepon$container$add_to_play_by_play(var_args){
var args__29094__auto__ = [];
var len__29087__auto___50420 = arguments.length;
var i__29088__auto___50421 = (0);
while(true){
if((i__29088__auto___50421 < len__29087__auto___50420)){
args__29094__auto__.push((arguments[i__29088__auto___50421]));

var G__50422 = (i__29088__auto___50421 + (1));
i__29088__auto___50421 = G__50422;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (text){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__50419 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50419) : cljs.core.deref.call(null,G__50419));
})()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text));
});

mokepon.container.add_to_play_by_play.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play.cljs$lang$applyTo = (function (seq50418){
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50418));
});

mokepon.container.decrement_item_BANG_ = (function mokepon$container$decrement_item_BANG_(item_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_key], null),(function (p1__50423_SHARP_){
return ((function (){var or__28012__auto__ = p1__50423_SHARP_;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return (0);
}
})() - (1));
}));
});
mokepon.container.item_count = (function mokepon$container$item_count(item_key){
var or__28012__auto__ = mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$items,item_key], 0));
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return (0);
}
});
mokepon.container.add_to_play_by_play_BANG_ = (function mokepon$container$add_to_play_by_play_BANG_(var_args){
var args__29094__auto__ = [];
var len__29087__auto___50425 = arguments.length;
var i__29088__auto___50426 = (0);
while(true){
if((i__29088__auto___50426 < len__29087__auto___50425)){
args__29094__auto__.push((arguments[i__29088__auto___50426]));

var G__50427 = (i__29088__auto___50426 + (1));
i__29088__auto___50426 = G__50427;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.container.add_to_play_by_play,message));
});

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$applyTo = (function (seq50424){
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50424));
});

mokepon.container.choose_monster_BANG_ = (function mokepon$container$choose_monster_BANG_(team_key){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$chosen_DASH_key], 0)),team_key)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$chosen_DASH_key,team_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$team,mokepon.rpg.reset_team_at(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0))));

return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["You have chosen ",mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,team_key,cljs.core.cst$kw$name], 0))," to fight!"], 0));
} else {
return null;
}
});
mokepon.container.first_live_team_member = (function mokepon$container$first_live_team_member(){
return cljs.core.first(mokepon.rpg.choosable_monsters(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0))));
});
mokepon.container.buy_item_BANG_ = (function mokepon$container$buy_item_BANG_(item_id){
var item = (item_id.cljs$core$IFn$_invoke$arity$1 ? item_id.cljs$core$IFn$_invoke$arity$1(mokepon.items.store_items_lookup) : item_id.call(null,mokepon.items.store_items_lookup));
var current_cash = cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1((function (){var G__50429 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50429) : cljs.core.deref.call(null,G__50429));
})());
var afford_QMARK_ = (current_cash >= cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item));
var new_cash = (current_cash - cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item));
if(afford_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$cash,new_cash);

mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["You take the ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)," from the midget's saggy, squishy hand. ","He smiles and gives you a tip of his top hat."], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_id], null),((function (item,current_cash,afford_QMARK_,new_cash){
return (function (){
return (mokepon.container.item_count(item_id) + (1));
});})(item,current_cash,afford_QMARK_,new_cash))
);
} else {
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["The midget bitch slaps you saying that you can't afford that. ","He wonders if you were taught common core math."], 0));
}
});
mokepon.container.throw_mokebox_BANG_ = (function mokepon$container$throw_mokebox_BANG_(){
var map__50436 = cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__50437 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50437) : cljs.core.deref.call(null,G__50437));
})());
var map__50436__$1 = ((((!((map__50436 == null)))?((((map__50436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50436):map__50436);
var max_hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50436__$1,cljs.core.cst$kw$max_DASH_hp);
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50436__$1,cljs.core.cst$kw$hp);
var capture_chance = ((max_hp - hp) / max_hp);
var roll = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var captured_QMARK_ = (capture_chance > roll);
var has_mokeball_QMARK_ = cljs.core.cst$kw$mokebox.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((function (){var G__50439 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50439) : cljs.core.deref.call(null,G__50439));
})()));
var battling = cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__50440 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50440) : cljs.core.deref.call(null,G__50440));
})());
if(cljs.core.truth_(has_mokeball_QMARK_)){
mokepon.container.decrement_item_BANG_(cljs.core.cst$kw$mokebox);

if(captured_QMARK_){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["The Mok\u00E9box knocks out the ",mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$name], 0)),". It's been captured!"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$captured], null),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),((function (map__50436,map__50436__$1,max_hp,hp,capture_chance,roll,captured_QMARK_,has_mokeball_QMARK_,battling){
return (function (p1__50430_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50430_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(battling),battling);
});})(map__50436,map__50436__$1,max_hp,hp,capture_chance,roll,captured_QMARK_,has_mokeball_QMARK_,battling))
);
} else {
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["The Mok\u00E9box bounces off ",mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$name], 0)),". It's still too strong!"], 0));
}
} else {
return null;
}
});
mokepon.container.sleep_at_home_BANG_ = (function mokepon$container$sleep_at_home_BANG_(){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["You've slept. Your posse has been healed."], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__50441_SHARP_){
return mokepon.rpg.heal_team(p1__50441_SHARP_);
}));
});
mokepon.container.reset_team_at_BANG_ = (function mokepon$container$reset_team_at_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__50442_SHARP_){
return mokepon.rpg.reset_team_at(p1__50442_SHARP_);
}));
});
mokepon.container.tick_battle_core_BANG_ = (function mokepon$container$tick_battle_core_BANG_(){
var map__50449 = mokepon.rpg.tick_battle(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__50450 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50450) : cljs.core.deref.call(null,G__50450));
})()),cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__50451 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50451) : cljs.core.deref.call(null,G__50451));
})()));
var map__50449__$1 = ((((!((map__50449 == null)))?((((map__50449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50449):map__50449);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50449__$1,cljs.core.cst$kw$battling);
var chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50449__$1,cljs.core.cst$kw$chosen);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50449__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battling,battling,cljs.core.array_seq([cljs.core.cst$kw$team,mokepon.container.update_in_team(cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1((function (){var G__50453 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50453) : cljs.core.deref.call(null,G__50453));
})()),chosen),cljs.core.cst$kw$play_DASH_by_DASH_play,play_by_play], 0));

var live_member_key = mokepon.container.first_live_team_member();
var live_monster = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__50454 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50454) : cljs.core.deref.call(null,G__50454));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,live_member_key], null));
if(cljs.core.truth_((function (){var and__28000__auto__ = mokepon.rpg.is_dead_QMARK_(chosen);
if(cljs.core.truth_(and__28000__auto__)){
return live_member_key;
} else {
return and__28000__auto__;
}
})())){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(live_monster)),cljs.core.str(" dashes into battle!")].join('')], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$chosen_DASH_key,live_member_key);
} else {
return null;
}
});
mokepon.container.dead_team_member_keys = (function mokepon$container$dead_team_member_keys(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50464){
var vec__50465 = p__50464;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50465,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50465,(1),null);
return k;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50468){
var vec__50469 = p__50468;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50469,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50469,(1),null);
return mokepon.rpg.is_dead_QMARK_(v);
}),cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__50472 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50472) : cljs.core.deref.call(null,G__50472));
})())));
});
mokepon.container.remove_dead_team_members_BANG_ = (function mokepon$container$remove_dead_team_members_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__50473_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__50473_SHARP_,mokepon.container.dead_team_member_keys());
}));
});
mokepon.container.count_down_BANG_ = (function mokepon$container$count_down_BANG_(message,callback){
if(cljs.core.truth_(message)){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battle_DASH_count_DASH_down,(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)) - (250)));

return window.setTimeout(callback,(250));
});
mokepon.container.tick_battle_BANG_ = (function mokepon$container$tick_battle_BANG_(){
if(cljs.core.not(mokepon.rpg.battle_over_QMARK_(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__50475 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50475) : cljs.core.deref.call(null,G__50475));
})())))){
if(cljs.core.not(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battle_DASH_count_DASH_down,(5000));

return window.setTimeout((function (){
return mokepon$container$tick_battle_BANG_();
}),(250));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)),(5000))){
return mokepon.container.count_down_BANG_("Battle starts in 5...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)),(4000))){
return mokepon.container.count_down_BANG_("Battle starts in 4...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)),(3000))){
return mokepon.container.count_down_BANG_("Battle starts in 3...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)),(2000))){
return mokepon.container.count_down_BANG_("Battle starts in 2...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)),(1000))){
return mokepon.container.count_down_BANG_("Battle starts in 1...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)),(0))){
mokepon.container.tick_battle_core_BANG_();

return window.setTimeout((function (){
return mokepon$container$tick_battle_BANG_();
}),(300));
} else {
return mokepon.container.count_down_BANG_(null,mokepon$container$tick_battle_BANG_);

}
}
}
}
}
}
}
} else {
return mokepon.container.reset_team_at_BANG_();
}
});
mokepon.container.take_chipu_BANG_ = (function mokepon$container$take_chipu_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$team,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__50477 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50477) : cljs.core.deref.call(null,G__50477));
})()),cljs.core.cst$kw$chipu,mokepon.monsters.chipu));
});
mokepon.container.go_to_location_BANG_ = (function mokepon$container$go_to_location_BANG_(loc){
mokepon.container.remove_dead_team_members_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$location,loc,cljs.core.array_seq([cljs.core.cst$kw$battling,null,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.cst$kw$battle_DASH_count_DASH_down,null], 0));
});
mokepon.container.attack_BANG_ = (function mokepon$container$attack_BANG_(){
var map__50484 = mokepon.rpg.apply_player_attack(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__50485 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50485) : cljs.core.deref.call(null,G__50485));
})()),cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__50486 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50486) : cljs.core.deref.call(null,G__50486));
})()));
var map__50484__$1 = ((((!((map__50484 == null)))?((((map__50484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50484):map__50484);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50484__$1,cljs.core.cst$kw$battling);
var chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50484__$1,cljs.core.cst$kw$chosen);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50484__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
var cash_reward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50484__$1,cljs.core.cst$kw$cash_DASH_reward);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battling,battling,cljs.core.array_seq([cljs.core.cst$kw$team,mokepon.container.update_in_team(cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1((function (){var G__50488 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50488) : cljs.core.deref.call(null,G__50488));
})()),chosen),cljs.core.cst$kw$play_DASH_by_DASH_play,play_by_play,cljs.core.cst$kw$cash,(cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1((function (){var G__50489 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50489) : cljs.core.deref.call(null,G__50489));
})()) + cash_reward)], 0));
});
mokepon.container.set_monsters = (function mokepon$container$set_monsters(chosen_key,battling,play_by_play){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chosen_DASH_key,chosen_key,cljs.core.cst$kw$battling,battling,cljs.core.cst$kw$play_DASH_by_DASH_play,mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["It has begun! ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((function (){var G__50494 = cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__50495 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50495) : cljs.core.deref.call(null,G__50495));
})());
return (chosen_key.cljs$core$IFn$_invoke$arity$1 ? chosen_key.cljs$core$IFn$_invoke$arity$1(G__50494) : chosen_key.call(null,G__50494));
})())," vs ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(battling),"!"], 0))], null);
});
mokepon.container.set_battle_BANG_ = (function mokepon$container$set_battle_BANG_(chosen_key,battling){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mokepon.container.app_state(),cljs.core.merge,mokepon.container.set_monsters(chosen_key,battling,cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__50497 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50497) : cljs.core.deref.call(null,G__50497));
})())));
});
mokepon.container.location_monsters = (function mokepon$container$location_monsters(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,mokepon.monsters.sulbabaur,cljs.core.cst$kw$canyon,mokepon.monsters.deogude,cljs.core.cst$kw$pool,mokepon.monsters.tirsqule], null);
});
mokepon.container.find_trouble_BANG_ = (function mokepon$container$find_trouble_BANG_(kick_off_battle){
var team = cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__50501 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50501) : cljs.core.deref.call(null,G__50501));
})());
var location = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1((function (){var G__50502 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50502) : cljs.core.deref.call(null,G__50502));
})());
var first_team_member = mokepon.container.first_live_team_member();
var monster_for_location = (function (){var G__50503 = mokepon.container.location_monsters();
return (location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(G__50503) : location.call(null,G__50503));
})();
if(cljs.core.empty_QMARK_(team)){
return false;
} else {
if(cljs.core.truth_(monster_for_location)){
mokepon.container.set_battle_BANG_(first_team_member,monster_for_location);

if(cljs.core.truth_(kick_off_battle)){
return mokepon.container.tick_battle_BANG_();
} else {
return null;
}
} else {
return null;
}
}
});
mokepon.container.chosen_can_attack_QMARK_ = (function mokepon$container$chosen_can_attack_QMARK_(){
var and__28000__auto__ = mokepon.rpg.can_attack_QMARK_(mokepon.container.chosen_monster());
if(cljs.core.truth_(and__28000__auto__)){
return cljs.core.not(mokepon.rpg.battle_over_QMARK_(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__50505 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50505) : cljs.core.deref.call(null,G__50505));
})())));
} else {
return and__28000__auto__;
}
});
mokepon.container.rpg_container = (function mokepon$container$rpg_container(){
return sablono.interpreter.interpret(mokepon.components.rpg_view((function (){var G__50508 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50508) : cljs.core.deref.call(null,G__50508));
})(),mokepon.container.take_chipu_BANG_,mokepon.container.go_to_location_BANG_,(function (){
return mokepon.container.find_trouble_BANG_(true);
}),mokepon.rpg.choosable_monsters(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0))),mokepon.container.chosen_monster(),mokepon.container.chosen_can_attack_QMARK_(),mokepon.rpg.battle_over_QMARK_(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__50509 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50509) : cljs.core.deref.call(null,G__50509));
})())),mokepon.container.attack_BANG_,mokepon.container.sleep_at_home_BANG_,mokepon.rpg.active_turn_threshold,mokepon.items.store_items,mokepon.items.store_items_lookup,mokepon.container.buy_item_BANG_,mokepon.container.throw_mokebox_BANG_,mokepon.container.choose_monster_BANG_));
});
mokepon.container.render_BANG_ = (function mokepon$container$render_BANG_(){
return React.render(mokepon.container.rpg_container(),document.getElementById("app"));
});
cljs.core.add_watch(mokepon.container.game_app_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return mokepon.container.render_BANG_();
}));
