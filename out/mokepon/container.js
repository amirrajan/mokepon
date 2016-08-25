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
mokepon.container.current_app_state = (function (){var G__37964 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$game], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37964) : cljs.core.atom.call(null,G__37964));
})();
}
if(typeof mokepon.container.game_app_state !== 'undefined'){
} else {
mokepon.container.game_app_state = alandipert.storage_atom.local_storage((function (){var G__37965 = mokepon.rpg.new_game();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37965) : cljs.core.atom.call(null,G__37965));
})(),cljs.core.cst$kw$game);
}
if(typeof mokepon.container.test_app_state !== 'undefined'){
} else {
mokepon.container.test_app_state = (function (){var G__37966 = mokepon.rpg.new_game();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37966) : cljs.core.atom.call(null,G__37966));
})();
}
mokepon.container.app_state = (function mokepon$container$app_state(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mokepon.container.current_app_state) : cljs.core.deref.call(null,mokepon.container.current_app_state))),cljs.core.cst$kw$game)){
return mokepon.container.game_app_state;
} else {
return mokepon.container.test_app_state;
}
});
mokepon.container.get_state = (function mokepon$container$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37969 = arguments.length;
var i__19540__auto___37970 = (0);
while(true){
if((i__19540__auto___37970 < len__19539__auto___37969)){
args__19546__auto__.push((arguments[i__19540__auto___37970]));

var G__37971 = (i__19540__auto___37970 + (1));
i__19540__auto___37970 = G__37971;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__37968 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37968) : cljs.core.deref.call(null,G__37968));
})(),path);
});

mokepon.container.get_state.cljs$lang$maxFixedArity = (0);

mokepon.container.get_state.cljs$lang$applyTo = (function (seq37967){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37967));
});

mokepon.container.log = (function mokepon$container$log(o){
return console.log(cljs.core.clj__GT_js(o));
});
mokepon.container.log_state = (function mokepon$container$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37973 = arguments.length;
var i__19540__auto___37974 = (0);
while(true){
if((i__19540__auto___37974 < len__19539__auto___37973)){
args__19546__auto__.push((arguments[i__19540__auto___37974]));

var G__37975 = (i__19540__auto___37974 + (1));
i__19540__auto___37974 = G__37975;
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

mokepon.container.log_state.cljs$lang$applyTo = (function (seq37972){
return mokepon.container.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37972));
});

mokepon.container.team_count = (function mokepon$container$team_count(){
return cljs.core.count(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0)));
});
mokepon.container.set_battle = (function mokepon$container$set_battle(chosen_key,battling){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__37977 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37977) : cljs.core.deref.call(null,G__37977));
})(),cljs.core.cst$kw$chosen_DASH_key,chosen_key,cljs.core.array_seq([cljs.core.cst$kw$battling,battling], 0));
});
mokepon.container.clear_battle_BANG_ = (function mokepon$container$clear_battle_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.array_seq([cljs.core.cst$kw$battling,null], 0));
});
mokepon.container.update_in_team = (function mokepon$container$update_in_team(monster_key,new_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0)),monster_key,new_value);
});
mokepon.container.add_to_play_by_play = (function mokepon$container$add_to_play_by_play(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37979 = arguments.length;
var i__19540__auto___37980 = (0);
while(true){
if((i__19540__auto___37980 < len__19539__auto___37979)){
args__19546__auto__.push((arguments[i__19540__auto___37980]));

var G__37981 = (i__19540__auto___37980 + (1));
i__19540__auto___37980 = G__37981;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (text){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$play_DASH_by_DASH_play], 0)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text));
});

mokepon.container.add_to_play_by_play.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play.cljs$lang$applyTo = (function (seq37978){
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37978));
});

mokepon.container.decrement_item_BANG_ = (function mokepon$container$decrement_item_BANG_(item_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,item_key], null),(function (p1__37982_SHARP_){
return ((function (){var or__18464__auto__ = p1__37982_SHARP_;
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
mokepon.container.add_to_play_by_play_BANG_ = (function mokepon$container$add_to_play_by_play_BANG_(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37984 = arguments.length;
var i__19540__auto___37985 = (0);
while(true){
if((i__19540__auto___37985 < len__19539__auto___37984)){
args__19546__auto__.push((arguments[i__19540__auto___37985]));

var G__37986 = (i__19540__auto___37985 + (1));
i__19540__auto___37985 = G__37986;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$play_DASH_by_DASH_play,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mokepon.container.add_to_play_by_play,message));
});

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$applyTo = (function (seq37983){
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37983));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team], null),(function (p1__37987_SHARP_){
return mokepon.rpg.reset_team_at(p1__37987_SHARP_);
}));
});
mokepon.container.tick_battle_core_BANG_ = (function mokepon$container$tick_battle_core_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.tick_battle);
});
mokepon.container.remove_dead_team_members_BANG_ = (function mokepon$container$remove_dead_team_members_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.remove_dead_team_members);
});
mokepon.container.count_down_BANG_ = (function mokepon$container$count_down_BANG_(message,callback){
if(cljs.core.truth_(message)){
mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battle_DASH_count_DASH_down,(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$battle_DASH_count_DASH_down], 0)) - (250)));

return window.setTimeout(callback,(250));
});
mokepon.container.app_state_chosen_monster = (function mokepon$container$app_state_chosen_monster(){
return mokepon.rpg.chosen_monster((function (){var G__37989 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37989) : cljs.core.deref.call(null,G__37989));
})());
});
mokepon.container.app_state_battling = (function mokepon$container$app_state_battling(){
return cljs.core.cst$kw$battling.cljs$core$IFn$_invoke$arity$1((function (){var G__37991 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37991) : cljs.core.deref.call(null,G__37991));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mokepon.container.app_state(),mokepon.rpg.take_chipu);
});
mokepon.container.go_to_location_BANG_ = (function mokepon$container$go_to_location_BANG_(loc){
mokepon.container.remove_dead_team_members_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$location,loc,cljs.core.array_seq([cljs.core.cst$kw$battling,null,cljs.core.cst$kw$chosen_DASH_key,null,cljs.core.cst$kw$battle_DASH_count_DASH_down,null], 0));
});
mokepon.container.attack_BANG_ = (function mokepon$container$attack_BANG_(){
var map__37994 = mokepon.rpg.apply_player_attack(mokepon.container.app_state_chosen_monster(),mokepon.container.app_state_battling(),mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$play_DASH_by_DASH_play], 0)));
var map__37994__$1 = ((((!((map__37994 == null)))?((((map__37994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37994):map__37994);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37994__$1,cljs.core.cst$kw$battling);
var chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37994__$1,cljs.core.cst$kw$chosen);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37994__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
var cash_reward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37994__$1,cljs.core.cst$kw$cash_DASH_reward);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$battling,battling,cljs.core.array_seq([cljs.core.cst$kw$team,mokepon.container.update_in_team(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$chosen_DASH_key], 0)),chosen),cljs.core.cst$kw$play_DASH_by_DASH_play,play_by_play,cljs.core.cst$kw$cash,(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0)) + cash_reward)], 0));
});
mokepon.container.set_monsters = (function mokepon$container$set_monsters(chosen_key,battling,play_by_play){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chosen_DASH_key,chosen_key,cljs.core.cst$kw$battling,battling,cljs.core.cst$kw$play_DASH_by_DASH_play,mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["It has begun! ",mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team,chosen_key,cljs.core.cst$kw$name], 0))," vs ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(battling),"!"], 0))], null);
});
mokepon.container.set_battle_BANG_ = (function mokepon$container$set_battle_BANG_(chosen_key,battling){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mokepon.container.app_state(),cljs.core.merge,mokepon.container.set_monsters(chosen_key,battling,mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$play_DASH_by_DASH_play], 0))));
});
mokepon.container.set_cash_BANG_ = (function mokepon$container$set_cash_BANG_(cash){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.app_state(),cljs.core.assoc,cljs.core.cst$kw$cash,cash);
});
mokepon.container.location_monsters = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,mokepon.monsters.sulbabaur,cljs.core.cst$kw$canyon,mokepon.monsters.deogude,cljs.core.cst$kw$pool,mokepon.monsters.tirsqule], null);
mokepon.container.find_trouble_BANG_ = (function mokepon$container$find_trouble_BANG_(kick_off_battle){
var team = mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0));
var location = mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$location], 0));
var first_team_member = mokepon.container.first_live_team_member();
var monster_for_location = (location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(mokepon.container.location_monsters) : location.call(null,mokepon.container.location_monsters));
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
var and__18452__auto__ = mokepon.rpg.can_attack_QMARK_(mokepon.container.app_state_chosen_monster());
if(cljs.core.truth_(and__18452__auto__)){
return cljs.core.not(mokepon.rpg.battle_over_QMARK_(mokepon.container.app_state_chosen_monster(),mokepon.container.app_state_battling()));
} else {
return and__18452__auto__;
}
});
mokepon.container.rpg_container = (function mokepon$container$rpg_container(){
return sablono.interpreter.interpret(mokepon.components.rpg_view((function (){var G__37997 = mokepon.container.app_state();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37997) : cljs.core.deref.call(null,G__37997));
})(),mokepon.container.take_chipu_BANG_,mokepon.container.go_to_location_BANG_,(function (){
return mokepon.container.find_trouble_BANG_(true);
}),mokepon.rpg.choosable_monsters(mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$team], 0))),mokepon.container.app_state_chosen_monster(),mokepon.container.chosen_can_attack_QMARK_(),mokepon.rpg.battle_over_QMARK_(mokepon.container.app_state_chosen_monster(),mokepon.container.app_state_battling()),mokepon.container.attack_BANG_,mokepon.container.sleep_at_home_BANG_,mokepon.rpg.active_turn_threshold,mokepon.items.store_items,mokepon.items.store_items_lookup,mokepon.container.buy_item_BANG_,mokepon.container.throw_mokebox_BANG_,mokepon.container.choose_monster_BANG_,mokepon.container.use_candy_BANG_));
});
mokepon.container.render_BANG_ = (function mokepon$container$render_BANG_(){
return React.render(mokepon.container.rpg_container(),document.getElementById("app"));
});
cljs.core.add_watch(mokepon.container.game_app_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return mokepon.container.render_BANG_();
}));
