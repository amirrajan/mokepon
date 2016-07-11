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
mokepon.container.current_app_state = (function (){var G__30566 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$game], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30566) : cljs.core.atom.call(null,G__30566));
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
var args__19810__auto__ = [];
var len__19803__auto___30569 = arguments.length;
var i__19804__auto___30570 = (0);
while(true){
if((i__19804__auto___30570 < len__19803__auto___30569)){
args__19810__auto__.push((arguments[i__19804__auto___30570]));

var G__30571 = (i__19804__auto___30570 + (1));
i__19804__auto___30570 = G__30571;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((0) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((0)),(0),null)):null);
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19811__auto__);
});

mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30568 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30568) : cljs.core.deref.call(null,G__30568));
})(),path);
});

mokepon.container.get_state.cljs$lang$maxFixedArity = (0);

mokepon.container.get_state.cljs$lang$applyTo = (function (seq30567){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30567));
});

mokepon.container.team_count = (function mokepon$container$team_count(){
return cljs.core.count(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__30573 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30573) : cljs.core.deref.call(null,G__30573));
})()));
});
mokepon.container.chosen_monster = (function mokepon$container$chosen_monster(){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1((function (){var G__30575 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30575) : cljs.core.deref.call(null,G__30575));
})())], 0));
});
mokepon.container.set_battle = (function mokepon$container$set_battle(chosen_key,battling){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__30577 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30577) : cljs.core.deref.call(null,G__30577));
})(),cljs.core.cst$kw$chosen_DASH_key,chosen_key,cljs.core.array_seq([cljs.core.cst$kw$battling,battling], 0));
});
mokepon.container.clear_battle_BANG_ = (function mokepon$container$clear_battle_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.array_seq([cljs.core.cst$kw$battling,null], 0));
});
mokepon.container.update_in_team = (function mokepon$container$update_in_team(monster_key,new_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__30579 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30579) : cljs.core.deref.call(null,G__30579));
})()),monster_key,new_value);
});
mokepon.container.add_to_play_by_play = (function mokepon$container$add_to_play_by_play(var_args){
var args__19810__auto__ = [];
var len__19803__auto___30582 = arguments.length;
var i__19804__auto___30583 = (0);
while(true){
if((i__19804__auto___30583 < len__19803__auto___30582)){
args__19810__auto__.push((arguments[i__19804__auto___30583]));

var G__30584 = (i__19804__auto___30583 + (1));
i__19804__auto___30583 = G__30584;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((0) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(argseq__19811__auto__);
});

mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (text){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__30581 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30581) : cljs.core.deref.call(null,G__30581));
})()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text));
});

mokepon.container.add_to_play_by_play.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play.cljs$lang$applyTo = (function (seq30580){
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30580));
});

mokepon.container.decrement_item_BANG_ = (function mokepon$container$decrement_item_BANG_(item_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_key], null),(function (p1__30585_SHARP_){
return ((function (){var or__18728__auto__ = p1__30585_SHARP_;
if(cljs.core.truth_(or__18728__auto__)){
return or__18728__auto__;
} else {
return (0);
}
})() - (1));
}));
});
mokepon.container.item_count = (function mokepon$container$item_count(item_key){
var or__18728__auto__ = mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$items,item_key], 0));
if(cljs.core.truth_(or__18728__auto__)){
return or__18728__auto__;
} else {
return (0);
}
});
mokepon.container.add_to_play_by_play_BANG_ = (function mokepon$container$add_to_play_by_play_BANG_(var_args){
var args__19810__auto__ = [];
var len__19803__auto___30587 = arguments.length;
var i__19804__auto___30588 = (0);
while(true){
if((i__19804__auto___30588 < len__19803__auto___30587)){
args__19810__auto__.push((arguments[i__19804__auto___30588]));

var G__30589 = (i__19804__auto___30588 + (1));
i__19804__auto___30588 = G__30589;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((0) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19811__auto__);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.container.add_to_play_by_play,message));
});

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$applyTo = (function (seq30586){
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30586));
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
var current_cash = cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1((function (){var G__30591 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30591) : cljs.core.deref.call(null,G__30591));
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
var map__30598 = cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__30599 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30599) : cljs.core.deref.call(null,G__30599));
})());
var map__30598__$1 = ((((!((map__30598 == null)))?((((map__30598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30598):map__30598);
var max_hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30598__$1,cljs.core.cst$kw$max_DASH_hp);
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30598__$1,cljs.core.cst$kw$hp);
var capture_chance = ((max_hp - hp) / max_hp);
var roll = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var captured_QMARK_ = (capture_chance > roll);
var has_mokeball_QMARK_ = cljs.core.cst$kw$mokebox.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((function (){var G__30601 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30601) : cljs.core.deref.call(null,G__30601));
})()));
var battling = cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__30602 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30602) : cljs.core.deref.call(null,G__30602));
})());
if(cljs.core.truth_(has_mokeball_QMARK_)){
mokepon.container.decrement_item_BANG_(cljs.core.cst$kw$mokebox);

if(captured_QMARK_){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["The Mok\u00E9box knocks out the ",mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battling,cljs.core.cst$kw$name], 0)),". It's been captured!"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$battling,cljs.core.cst$kw$captured], null),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),((function (map__30598,map__30598__$1,max_hp,hp,capture_chance,roll,captured_QMARK_,has_mokeball_QMARK_,battling){
return (function (p1__30592_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30592_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(battling),battling);
});})(map__30598,map__30598__$1,max_hp,hp,capture_chance,roll,captured_QMARK_,has_mokeball_QMARK_,battling))
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

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__30603_SHARP_){
return mokepon.rpg.heal_team(p1__30603_SHARP_);
}));
});
mokepon.container.reset_team_at_BANG_ = (function mokepon$container$reset_team_at_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__30604_SHARP_){
return mokepon.rpg.reset_team_at(p1__30604_SHARP_);
}));
});
mokepon.container.tick_battle_core_BANG_ = (function mokepon$container$tick_battle_core_BANG_(){
var map__30611 = mokepon.rpg.tick_battle(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__30612 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30612) : cljs.core.deref.call(null,G__30612));
})()),cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__30613 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30613) : cljs.core.deref.call(null,G__30613));
})()));
var map__30611__$1 = ((((!((map__30611 == null)))?((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30611):map__30611);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,cljs.core.cst$kw$battling);
var chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,cljs.core.cst$kw$chosen);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battling,battling,cljs.core.array_seq([cljs.core.cst$kw$team,mokepon.container.update_in_team(cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1((function (){var G__30615 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30615) : cljs.core.deref.call(null,G__30615));
})()),chosen),cljs.core.cst$kw$play_DASH_by_DASH_play,play_by_play], 0));

var live_member_key = mokepon.container.first_live_team_member();
var live_monster = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30616 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30616) : cljs.core.deref.call(null,G__30616));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,live_member_key], null));
if(cljs.core.truth_((function (){var and__18716__auto__ = mokepon.rpg.is_dead_QMARK_(chosen);
if(cljs.core.truth_(and__18716__auto__)){
return live_member_key;
} else {
return and__18716__auto__;
}
})())){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(live_monster)),cljs.core.str(" dashes into battle!")].join('')], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$chosen_DASH_key,live_member_key);
} else {
return null;
}
});
mokepon.container.dead_team_member_keys = (function mokepon$container$dead_team_member_keys(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30626){
var vec__30627 = p__30626;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30627,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30627,(1),null);
return k;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30630){
var vec__30631 = p__30630;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30631,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30631,(1),null);
return mokepon.rpg.is_dead_QMARK_(v);
}),cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__30634 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30634) : cljs.core.deref.call(null,G__30634));
})())));
});
mokepon.container.remove_dead_team_members_BANG_ = (function mokepon$container$remove_dead_team_members_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__30635_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__30635_SHARP_,mokepon.container.dead_team_member_keys());
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
if(cljs.core.not(mokepon.rpg.battle_over_QMARK_(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__30637 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30637) : cljs.core.deref.call(null,G__30637));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$team,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__30639 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30639) : cljs.core.deref.call(null,G__30639));
})()),cljs.core.cst$kw$chipu,mokepon.monsters.chipu));
});
mokepon.container.go_to_location_BANG_ = (function mokepon$container$go_to_location_BANG_(loc){
mokepon.container.remove_dead_team_members_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$location,loc,cljs.core.array_seq([cljs.core.cst$kw$battling,null,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.cst$kw$battle_DASH_count_DASH_down,null], 0));
});
mokepon.container.attack_BANG_ = (function mokepon$container$attack_BANG_(){
var map__30645 = mokepon.rpg.apply_player_attack(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__30646 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30646) : cljs.core.deref.call(null,G__30646));
})()),cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__30647 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30647) : cljs.core.deref.call(null,G__30647));
})()));
var map__30645__$1 = ((((!((map__30645 == null)))?((((map__30645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30645):map__30645);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30645__$1,cljs.core.cst$kw$battling);
var chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30645__$1,cljs.core.cst$kw$chosen);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30645__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battling,battling,cljs.core.array_seq([cljs.core.cst$kw$team,mokepon.container.update_in_team(cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1((function (){var G__30649 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30649) : cljs.core.deref.call(null,G__30649));
})()),chosen),cljs.core.cst$kw$play_DASH_by_DASH_play,play_by_play], 0));
});
mokepon.container.set_monsters = (function mokepon$container$set_monsters(chosen_key,battling,play_by_play){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chosen_DASH_key,chosen_key,cljs.core.cst$kw$battling,battling,cljs.core.cst$kw$play_DASH_by_DASH_play,mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["It has begun! ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((function (){var G__30654 = cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__30655 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30655) : cljs.core.deref.call(null,G__30655));
})());
return (chosen_key.cljs$core$IFn$_invoke$arity$1 ? chosen_key.cljs$core$IFn$_invoke$arity$1(G__30654) : chosen_key.call(null,G__30654));
})())," vs ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(battling),"!"], 0))], null);
});
mokepon.container.set_battle_BANG_ = (function mokepon$container$set_battle_BANG_(chosen_key,battling){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mokepon.container.app_state(),cljs.core.merge,mokepon.container.set_monsters(chosen_key,battling,cljs.core.cst$kw$play_DASH_by_DASH_play.cljs$core$IFn$_invoke$arity$1((function (){var G__30657 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30657) : cljs.core.deref.call(null,G__30657));
})())));
});
mokepon.container.location_monsters = (function mokepon$container$location_monsters(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,mokepon.monsters.sulbabaur,cljs.core.cst$kw$canyon,mokepon.monsters.deogude,cljs.core.cst$kw$pool,mokepon.monsters.tirsqule], null);
});
mokepon.container.find_trouble_BANG_ = (function mokepon$container$find_trouble_BANG_(kick_off_battle){
var team = cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1((function (){var G__30661 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30661) : cljs.core.deref.call(null,G__30661));
})());
var location = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1((function (){var G__30662 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30662) : cljs.core.deref.call(null,G__30662));
})());
var first_team_member = mokepon.container.first_live_team_member();
var monster_for_location = (function (){var G__30663 = mokepon.container.location_monsters();
return (location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(G__30663) : location.call(null,G__30663));
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
var and__18716__auto__ = mokepon.rpg.can_attack_QMARK_(mokepon.container.chosen_monster());
if(cljs.core.truth_(and__18716__auto__)){
return cljs.core.not(mokepon.rpg.battle_over_QMARK_(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__30665 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30665) : cljs.core.deref.call(null,G__30665));
})())));
} else {
return and__18716__auto__;
}
});
mokepon.container.rpg_container = (function mokepon$container$rpg_container(){
return sablono.interpreter.interpret(mokepon.components.rpg_view((function (){var G__30668 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30668) : cljs.core.deref.call(null,G__30668));
})(),mokepon.container.take_chipu_BANG_,mokepon.container.go_to_location_BANG_,(function (){
return mokepon.container.find_trouble_BANG_(true);
}),mokepon.rpg.choosable_monsters(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0))),mokepon.container.chosen_monster(),mokepon.container.chosen_can_attack_QMARK_(),mokepon.rpg.battle_over_QMARK_(mokepon.container.chosen_monster(),cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__30669 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30669) : cljs.core.deref.call(null,G__30669));
})())),mokepon.container.attack_BANG_,mokepon.container.sleep_at_home_BANG_,mokepon.rpg.active_turn_threshold,mokepon.items.store_items,mokepon.items.store_items_lookup,mokepon.container.buy_item_BANG_,mokepon.container.throw_mokebox_BANG_,mokepon.container.choose_monster_BANG_));
});
mokepon.container.render_BANG_ = (function mokepon$container$render_BANG_(){
return React.render(mokepon.container.rpg_container(),document.getElementById("app"));
});
cljs.core.add_watch(mokepon.container.game_app_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return mokepon.container.render_BANG_();
}));
