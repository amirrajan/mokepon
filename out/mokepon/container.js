// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.container');
goog.require('cljs.core');
goog.require('mokepon.components');
goog.require('mokepon.monsters');
goog.require('alandipert.storage_atom');
goog.require('mokepon.items');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('mokepon.locations');
goog.require('mokepon.rpg');
mokepon.container.alert = (function mokepon$container$alert(message){
return (function (){
return window.alert(message);
});
});
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(alandipert.storage_atom.storage_delay,(1000)) : cljs.core.reset_BANG_.call(null,alandipert.storage_atom.storage_delay,(1000)));
if(typeof mokepon.container.current_app_state !== 'undefined'){
} else {
mokepon.container.current_app_state = (function (){var G__72651 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$game], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72651) : cljs.core.atom.call(null,G__72651));
})();
}
if(typeof mokepon.container.game_app_state !== 'undefined'){
} else {
mokepon.container.game_app_state = alandipert.storage_atom.local_storage((function (){var G__72652 = mokepon.rpg.new_game();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72652) : cljs.core.atom.call(null,G__72652));
})(),cljs.core.cst$kw$game);
}
if(typeof mokepon.container.test_app_state !== 'undefined'){
} else {
mokepon.container.test_app_state = (function (){var G__72653 = mokepon.rpg.new_game();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72653) : cljs.core.atom.call(null,G__72653));
})();
}
mokepon.container.app_state = (function mokepon$container$app_state(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mokepon.container.current_app_state) : cljs.core.deref.call(null,mokepon.container.current_app_state))),cljs.core.cst$kw$game)){
return mokepon.container.game_app_state;
} else {
return mokepon.container.test_app_state;
}
});
mokepon.container.reset_game_BANG_ = (function mokepon$container$reset_game_BANG_(){
var G__72656 = mokepon.container.app_state();
var G__72657 = mokepon.rpg.new_game();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72656,G__72657) : cljs.core.reset_BANG_.call(null,G__72656,G__72657));
});
mokepon.container.get_state = (function mokepon$container$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___72660 = arguments.length;
var i__19540__auto___72661 = (0);
while(true){
if((i__19540__auto___72661 < len__19539__auto___72660)){
args__19546__auto__.push((arguments[i__19540__auto___72661]));

var G__72662 = (i__19540__auto___72661 + (1));
i__19540__auto___72661 = G__72662;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__72659 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72659) : cljs.core.deref.call(null,G__72659));
})(),path);
});

mokepon.container.get_state.cljs$lang$maxFixedArity = (0);

mokepon.container.get_state.cljs$lang$applyTo = (function (seq72658){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72658));
});

mokepon.container.log = (function mokepon$container$log(o){
return console.log(cljs.core.clj__GT_js(o));
});
mokepon.container.log_state = (function mokepon$container$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___72664 = arguments.length;
var i__19540__auto___72665 = (0);
while(true){
if((i__19540__auto___72665 < len__19539__auto___72664)){
args__19546__auto__.push((arguments[i__19540__auto___72665]));

var G__72666 = (i__19540__auto___72665 + (1));
i__19540__auto___72665 = G__72666;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.log_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.log_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return mokepon.container.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state,path));
});

mokepon.container.log_state.cljs$lang$maxFixedArity = (0);

mokepon.container.log_state.cljs$lang$applyTo = (function (seq72663){
return mokepon.container.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72663));
});

mokepon.container.team_count = (function mokepon$container$team_count(){
return cljs.core.count(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0)));
});
mokepon.container.clear_battle_BANG_ = (function mokepon$container$clear_battle_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.array_seq([cljs.core.cst$kw$battling,null], 0));
});
mokepon.container.decrement_item_BANG_ = (function mokepon$container$decrement_item_BANG_(item_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_key], null),(function (p1__72667_SHARP_){
return ((function (){var or__18464__auto__ = p1__72667_SHARP_;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
})() - (1));
}));
});
mokepon.container.item_count = (function mokepon$container$item_count(item_key){
var or__18464__auto__ = mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$items,item_key], 0));
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
});
mokepon.container.add_to_play_by_play = (function mokepon$container$add_to_play_by_play(var_args){
var args__19546__auto__ = [];
var len__19539__auto___72670 = arguments.length;
var i__19540__auto___72671 = (0);
while(true){
if((i__19540__auto___72671 < len__19539__auto___72670)){
args__19546__auto__.push((arguments[i__19540__auto___72671]));

var G__72672 = (i__19540__auto___72671 + (1));
i__19540__auto___72671 = G__72672;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,text){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.conj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.join,text));
});

mokepon.container.add_to_play_by_play.cljs$lang$maxFixedArity = (1);

mokepon.container.add_to_play_by_play.cljs$lang$applyTo = (function (seq72668){
var G__72669 = cljs.core.first(seq72668);
var seq72668__$1 = cljs.core.next(seq72668);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(G__72669,seq72668__$1);
});

mokepon.container.add_to_play_by_play_BANG_ = (function mokepon$container$add_to_play_by_play_BANG_(var_args){
var args__19546__auto__ = [];
var len__19539__auto___72674 = arguments.length;
var i__19540__auto___72675 = (0);
while(true){
if((i__19540__auto___72675 < len__19539__auto___72674)){
args__19546__auto__.push((arguments[i__19540__auto___72675]));

var G__72676 = (i__19540__auto___72675 + (1));
i__19540__auto___72675 = G__72676;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mokepon.container.app_state(),mokepon.container.add_to_play_by_play,message);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$applyTo = (function (seq72673){
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72673));
});

mokepon.container.choose_monster_BANG_ = (function mokepon$container$choose_monster_BANG_(team_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mokepon.container.app_state(),mokepon.rpg.choose_monster,team_key);
});
mokepon.container.first_live_team_member = (function mokepon$container$first_live_team_member(){
return cljs.core.first(mokepon.rpg.choosable_monsters(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0))));
});
mokepon.container.buy_item_BANG_ = (function mokepon$container$buy_item_BANG_(item_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),mokepon.rpg.buy_item,item_id,mokepon.items.store_items_lookup);
});
mokepon.container.throw_mokebox_BANG_ = (function mokepon$container$throw_mokebox_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.throw_mokebox);
});
mokepon.container.use_candy_BANG_ = (function mokepon$container$use_candy_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.use_candy);
});
mokepon.container.sleep_at_home_BANG_ = (function mokepon$container$sleep_at_home_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.heal_team);
});
mokepon.container.reset_team_at_BANG_ = (function mokepon$container$reset_team_at_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update,cljs.core.cst$kw$team,mokepon.rpg.reset_team_at);
});
mokepon.container.tick_battle_core_BANG_ = (function mokepon$container$tick_battle_core_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.tick_battle);
});
mokepon.container.remove_dead_team_members_BANG_ = (function mokepon$container$remove_dead_team_members_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.remove_dead_team_members);
});
mokepon.container.count_down = (function mokepon$container$count_down(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.cst$kw$battle_DASH_count_DASH_down,cljs.core._,(250));
});
mokepon.container.count_down_BANG_ = (function mokepon$container$count_down_BANG_(message,callback){
if(cljs.core.truth_(message)){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.container.count_down);

return window.setTimeout(callback,(250));
});
mokepon.container.app_state_chosen_monster = (function mokepon$container$app_state_chosen_monster(){
return mokepon.rpg.chosen_monster((function (){var G__72678 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72678) : cljs.core.deref.call(null,G__72678));
})());
});
mokepon.container.app_state_battling = (function mokepon$container$app_state_battling(){
return cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__72680 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72680) : cljs.core.deref.call(null,G__72680));
})());
});
mokepon.container.tick_battle_BANG_ = (function mokepon$container$tick_battle_BANG_(){
if(cljs.core.not(mokepon.rpg.battle_over_QMARK_(mokepon.container.app_state_chosen_monster(),mokepon.container.app_state_battling()))){
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
if((mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)) === (0))){
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.take_chipu);
});
mokepon.container.go_to_location_BANG_ = (function mokepon$container$go_to_location_BANG_(loc){
mokepon.container.remove_dead_team_members_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$location,loc,cljs.core.array_seq([cljs.core.cst$kw$battling,null,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.cst$kw$battle_DASH_count_DASH_down,null], 0));
});
mokepon.container.attack = (function mokepon$container$attack(app_state,battling,chosen,play_by_play,cash_reward){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app_state,cljs.core.cst$kw$battling,battling,cljs.core.array_seq([cljs.core.cst$kw$team,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(app_state),cljs.core.cst$kw$chosen_DASH_key.cljs$core$IFn$_invoke$arity$1(app_state),chosen),cljs.core.cst$kw$play_DASH_by_DASH_play,play_by_play,cljs.core.cst$kw$cash,(cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1(app_state) + cash_reward)], 0));
});
mokepon.container.attack_BANG_ = (function mokepon$container$attack_BANG_(){
var map__72683 = mokepon.rpg.apply_player_attack(mokepon.container.app_state_chosen_monster(),mokepon.container.app_state_battling(),mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$play_DASH_by_DASH_play], 0)));
var map__72683__$1 = ((((!((map__72683 == null)))?((((map__72683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72683):map__72683);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72683__$1,cljs.core.cst$kw$battling);
var chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72683__$1,cljs.core.cst$kw$chosen);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72683__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
var cash_reward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72683__$1,cljs.core.cst$kw$cash_DASH_reward);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),mokepon.container.attack,battling,chosen,cljs.core.array_seq([play_by_play,cash_reward], 0));
});
mokepon.container.set_battle_BANG_ = (function mokepon$container$set_battle_BANG_(chosen_key,battling){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),mokepon.rpg.set_battle,chosen_key,battling);
});
mokepon.container.set_cash_BANG_ = (function mokepon$container$set_cash_BANG_(cash){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$cash,cash);
});
mokepon.container.location_monsters = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,mokepon.monsters.sulbabaur,cljs.core.cst$kw$canyon,mokepon.monsters.deogude,cljs.core.cst$kw$pool,mokepon.monsters.tirsqule], null);
mokepon.container.find_trouble_BANG_ = (function mokepon$container$find_trouble_BANG_(kick_off_battle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.find_trouble);

if(cljs.core.truth_(kick_off_battle)){
return mokepon.container.tick_battle_BANG_();
} else {
return null;
}
});
mokepon.container.chosen_can_attack_QMARK_ = (function mokepon$container$chosen_can_attack_QMARK_(){
var and__18452__auto__ = mokepon.rpg.can_attack_QMARK_(mokepon.container.app_state_chosen_monster());
if(cljs.core.truth_(and__18452__auto__)){
return cljs.core.not(mokepon.rpg.battle_over_QMARK_(mokepon.container.app_state_chosen_monster(),mokepon.container.app_state_battling()));
} else {
return and__18452__auto__;
}
});
mokepon.container.location_available_QMARK_ = (function mokepon$container$location_available_QMARK_(location){
return cljs.core.cst$kw$available_DASH_if.cljs$core$IFn$_invoke$arity$1((function (){var G__72687 = mokepon.locations.location_info();
return (location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(G__72687) : location.call(null,G__72687));
})()).call(null,(function (){var G__72688 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72688) : cljs.core.deref.call(null,G__72688));
})());
});
mokepon.container.rpg_container = (function mokepon$container$rpg_container(){
return sablono.interpreter.interpret(mokepon.components.rpg_view((function (){var G__72690 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72690) : cljs.core.deref.call(null,G__72690));
})(),mokepon.container.take_chipu_BANG_,mokepon.container.go_to_location_BANG_,(function (){
return mokepon.container.find_trouble_BANG_(true);
}),mokepon.rpg.choosable_monsters(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0))),mokepon.container.app_state_chosen_monster(),mokepon.container.chosen_can_attack_QMARK_(),mokepon.rpg.battle_over_QMARK_(mokepon.container.app_state_chosen_monster(),mokepon.container.app_state_battling()),mokepon.container.attack_BANG_,mokepon.container.sleep_at_home_BANG_,mokepon.rpg.active_turn_threshold,mokepon.items.store_items,mokepon.items.store_items_lookup,mokepon.container.buy_item_BANG_,mokepon.container.throw_mokebox_BANG_,mokepon.container.choose_monster_BANG_,mokepon.container.use_candy_BANG_,mokepon.container.location_available_QMARK_,mokepon.locations.location_info()));
});
mokepon.container.render_BANG_ = (function mokepon$container$render_BANG_(){
return React.render(mokepon.container.rpg_container(),document.getElementById("app"));
});
cljs.core.add_watch(mokepon.container.game_app_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return mokepon.container.render_BANG_();
}));
