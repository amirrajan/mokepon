// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.container');
goog.require('cljs.core');
goog.require('mokepon.views.mokedex');
goog.require('mokepon.components');
goog.require('mokepon.elements');
goog.require('mokepon.monsters');
goog.require('mokepon.views.shop');
goog.require('sablono.core');
goog.require('cljsjs.react.dom');
goog.require('mokepon.shop');
goog.require('alandipert.storage_atom');
goog.require('cljsjs.react');
goog.require('mokepon.views.battle');
goog.require('clojure.string');
goog.require('mokepon.locations');
goog.require('mokepon.rpg');
mokepon.container.alert = (function mokepon$container$alert(message){
return (function (){
return window.alert(message);
});
});
cljs.core.reset_BANG_.call(null,alandipert.storage_atom.storage_delay,(1000));
if(typeof mokepon.container.current_app_state !== 'undefined'){
} else {
mokepon.container.current_app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"game","game",-441523833)], null));
}
if(typeof mokepon.container.game_app_state !== 'undefined'){
} else {
mokepon.container.game_app_state = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,mokepon.rpg.new_game.call(null)),new cljs.core.Keyword(null,"game","game",-441523833));
}
if(typeof mokepon.container.test_app_state !== 'undefined'){
} else {
mokepon.container.test_app_state = cljs.core.atom.call(null,mokepon.rpg.new_game.call(null));
}
mokepon.container.app_state = (function mokepon$container$app_state(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.current_app_state)),new cljs.core.Keyword(null,"game","game",-441523833))){
return mokepon.container.game_app_state;
} else {
return mokepon.container.test_app_state;
}
});
mokepon.container.reset_game_BANG_ = (function mokepon$container$reset_game_BANG_(){
return cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));
});
mokepon.container.get_state = (function mokepon$container$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___26162 = arguments.length;
var i__19540__auto___26163 = (0);
while(true){
if((i__19540__auto___26163 < len__19539__auto___26162)){
args__19546__auto__.push((arguments[i__19540__auto___26163]));

var G__26164 = (i__19540__auto___26163 + (1));
i__19540__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)),path);
});

mokepon.container.get_state.cljs$lang$maxFixedArity = (0);

mokepon.container.get_state.cljs$lang$applyTo = (function (seq26161){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26161));
});

mokepon.container.log = (function mokepon$container$log(o){
return console.log(cljs.core.clj__GT_js.call(null,o));
});
mokepon.container.log_state = (function mokepon$container$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___26166 = arguments.length;
var i__19540__auto___26167 = (0);
while(true){
if((i__19540__auto___26167 < len__19539__auto___26166)){
args__19546__auto__.push((arguments[i__19540__auto___26167]));

var G__26168 = (i__19540__auto___26167 + (1));
i__19540__auto___26167 = G__26168;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.log_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.log_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return mokepon.container.log.call(null,cljs.core.apply.call(null,mokepon.container.get_state,path));
});

mokepon.container.log_state.cljs$lang$maxFixedArity = (0);

mokepon.container.log_state.cljs$lang$applyTo = (function (seq26165){
return mokepon.container.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26165));
});

mokepon.container.team_count = (function mokepon$container$team_count(){
return cljs.core.count.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699)));
});
mokepon.container.clear_battle_BANG_ = (function mokepon$container$clear_battle_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null,new cljs.core.Keyword(null,"battling","battling",-129800115),null);
});
mokepon.container.decrement_item_BANG_ = (function mokepon$container$decrement_item_BANG_(item_key){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_key], null),(function (p1__26169_SHARP_){
return ((function (){var or__18464__auto__ = p1__26169_SHARP_;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
})() - (1));
}));
});
mokepon.container.item_count = (function mokepon$container$item_count(item_key){
var or__18464__auto__ = mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"items","items",1031954938),item_key);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
});
mokepon.container.add_to_play_by_play = (function mokepon$container$add_to_play_by_play(var_args){
var args__19546__auto__ = [];
var len__19539__auto___26172 = arguments.length;
var i__19540__auto___26173 = (0);
while(true){
if((i__19540__auto___26173 < len__19539__auto___26172)){
args__19546__auto__.push((arguments[i__19540__auto___26173]));

var G__26174 = (i__19540__auto___26173 + (1));
i__19540__auto___26173 = G__26174;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,text){
return cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.conj,cljs.core.apply.call(null,clojure.string.join,text));
});

mokepon.container.add_to_play_by_play.cljs$lang$maxFixedArity = (1);

mokepon.container.add_to_play_by_play.cljs$lang$applyTo = (function (seq26170){
var G__26171 = cljs.core.first.call(null,seq26170);
var seq26170__$1 = cljs.core.next.call(null,seq26170);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(G__26171,seq26170__$1);
});

mokepon.container.add_to_play_by_play_BANG_ = (function mokepon$container$add_to_play_by_play_BANG_(var_args){
var args__19546__auto__ = [];
var len__19539__auto___26176 = arguments.length;
var i__19540__auto___26177 = (0);
while(true){
if((i__19540__auto___26177 < len__19539__auto___26176)){
args__19546__auto__.push((arguments[i__19540__auto___26177]));

var G__26178 = (i__19540__auto___26177 + (1));
i__19540__auto___26177 = G__26178;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.container.add_to_play_by_play,message);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$applyTo = (function (seq26175){
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26175));
});

mokepon.container.choose_monster_BANG_ = (function mokepon$container$choose_monster_BANG_(team_key){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.choose_monster,team_key);
});
mokepon.container.first_live_team_member = (function mokepon$container$first_live_team_member(){
return cljs.core.first.call(null,mokepon.rpg.choosable_monsters.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699))));
});
mokepon.container.buy_item_BANG_ = (function mokepon$container$buy_item_BANG_(item_id){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.buy_item,item_id,mokepon.shop.shop_items_lookup.call(null));
});
mokepon.container.throw_mokebox_BANG_ = (function mokepon$container$throw_mokebox_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.throw_mokebox);
});
mokepon.container.use_candy_BANG_ = (function mokepon$container$use_candy_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.use_candy);
});
mokepon.container.sleep_at_home_BANG_ = (function mokepon$container$sleep_at_home_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.heal_team);
});
mokepon.container.reset_team_at_BANG_ = (function mokepon$container$reset_team_at_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update,new cljs.core.Keyword(null,"team","team",1355747699),mokepon.rpg.reset_team_at);
});
mokepon.container.tick_battle_core_BANG_ = (function mokepon$container$tick_battle_core_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.tick_battle);
});
mokepon.container.remove_dead_team_members_BANG_ = (function mokepon$container$remove_dead_team_members_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.remove_dead_team_members);
});
mokepon.container.count_down = (function mokepon$container$count_down(app_state){
return cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345),cljs.core._,(250));
});
mokepon.container.count_down_BANG_ = (function mokepon$container$count_down_BANG_(message,callback){
if(cljs.core.truth_(message)){
mokepon.container.add_to_play_by_play_BANG_.call(null,message);
} else {
}

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.container.count_down);

return window.setTimeout(callback,(250));
});
mokepon.container.app_state_chosen_monster = (function mokepon$container$app_state_chosen_monster(){
return mokepon.rpg.chosen_monster.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
});
mokepon.container.app_state_battling = (function mokepon$container$app_state_battling(){
return new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
});
mokepon.container.tick_battle_BANG_ = (function mokepon$container$tick_battle_BANG_(){
if(cljs.core.not.call(null,mokepon.rpg.battle_over_QMARK_.call(null,mokepon.container.app_state_chosen_monster.call(null),mokepon.container.app_state_battling.call(null)))){
if(cljs.core.not.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)))){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345),(5000));

return window.setTimeout((function (){
return mokepon$container$tick_battle_BANG_.call(null);
}),(250));
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(5000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 5...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(4000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 4...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(3000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 3...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(2000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 2...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(1000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 1...",mokepon$container$tick_battle_BANG_);
} else {
if((mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)) === (0))){
mokepon.container.tick_battle_core_BANG_.call(null);

return window.setTimeout((function (){
return mokepon$container$tick_battle_BANG_.call(null);
}),(300));
} else {
return mokepon.container.count_down_BANG_.call(null,null,mokepon$container$tick_battle_BANG_);

}
}
}
}
}
}
}
} else {
return mokepon.container.reset_team_at_BANG_.call(null);
}
});
mokepon.container.take_chipu_BANG_ = (function mokepon$container$take_chipu_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.take_chipu);
});
mokepon.container.go_to_location_BANG_ = (function mokepon$container$go_to_location_BANG_(loc){
mokepon.container.remove_dead_team_members_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"location","location",1815599388),loc,new cljs.core.Keyword(null,"battling","battling",-129800115),null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345),null);
});
mokepon.container.attack = (function mokepon$container$attack(app_state,battling,chosen,play_by_play,cash_reward){
return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"battling","battling",-129800115),battling,new cljs.core.Keyword(null,"team","team",1355747699),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(app_state),chosen),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),play_by_play,new cljs.core.Keyword(null,"cash","cash",181122222),(new cljs.core.Keyword(null,"cash","cash",181122222).cljs$core$IFn$_invoke$arity$1(app_state) + cash_reward));
});
mokepon.container.attack_BANG_ = (function mokepon$container$attack_BANG_(){
var map__26181 = mokepon.rpg.apply_player_attack.call(null,mokepon.container.app_state_chosen_monster.call(null),mokepon.container.app_state_battling.call(null),mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732)));
var map__26181__$1 = ((((!((map__26181 == null)))?((((map__26181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26181):map__26181);
var battling = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"battling","battling",-129800115));
var chosen = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"chosen","chosen",-1422409985));
var play_by_play = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732));
var cash_reward = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"cash-reward","cash-reward",-1354225094));
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.container.attack,battling,chosen,play_by_play,cash_reward);
});
mokepon.container.set_battle_BANG_ = (function mokepon$container$set_battle_BANG_(chosen_key,battling){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.set_battle,chosen_key,battling);
});
mokepon.container.set_cash_BANG_ = (function mokepon$container$set_cash_BANG_(cash){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"cash","cash",181122222),cash);
});
mokepon.container.location_monsters = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forest","forest",278860306),mokepon.monsters.sulbabaur,new cljs.core.Keyword(null,"canyon","canyon",-310776600),mokepon.monsters.deogude,new cljs.core.Keyword(null,"pool","pool",-1814211613),mokepon.monsters.tirsqule], null);
mokepon.container.find_trouble_BANG_ = (function mokepon$container$find_trouble_BANG_(kick_off_battle){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.find_trouble);

if(cljs.core.truth_(kick_off_battle)){
return mokepon.container.tick_battle_BANG_.call(null);
} else {
return null;
}
});
mokepon.container.chosen_can_attack_QMARK_ = (function mokepon$container$chosen_can_attack_QMARK_(){
var and__18452__auto__ = mokepon.rpg.can_attack_QMARK_.call(null,mokepon.container.app_state_chosen_monster.call(null));
if(cljs.core.truth_(and__18452__auto__)){
return cljs.core.not.call(null,mokepon.rpg.battle_over_QMARK_.call(null,mokepon.container.app_state_chosen_monster.call(null),mokepon.container.app_state_battling.call(null)));
} else {
return and__18452__auto__;
}
});
mokepon.container.location_available_QMARK_ = (function mokepon$container$location_available_QMARK_(location){
return new cljs.core.Keyword(null,"available-if","available-if",-1775710480).cljs$core$IFn$_invoke$arity$1(location.call(null,mokepon.locations.location_info.call(null))).call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
});
mokepon.container.shop_item_available_QMARK_ = (function mokepon$container$shop_item_available_QMARK_(item){
return new cljs.core.Keyword(null,"available-if","available-if",-1775710480).cljs$core$IFn$_invoke$arity$1(item.call(null,mokepon.shop.shop_items_lookup.call(null))).call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
});
mokepon.container.app_state_new_message_count = (function mokepon$container$app_state_new_message_count(){
return mokepon.rpg.new_message_count.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
});
mokepon.container.view_messages_BANG_ = (function mokepon$container$view_messages_BANG_(){
mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"messages","messages",345434482));

return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.mark_messages_as_read);
});
mokepon.container.mark_location_as_seen_BANG_ = (function mokepon$container$mark_location_as_seen_BANG_(loc){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locations-seen","locations-seen",-63123011),loc,new cljs.core.Keyword(null,"seen?","seen?",-1677689856)], null),true);
});
mokepon.container.app_state_location_seen_QMARK_ = (function mokepon$container$app_state_location_seen_QMARK_(loc){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locations-seen","locations-seen",-63123011),loc,new cljs.core.Keyword(null,"seen?","seen?",-1677689856)], null));
});
mokepon.container.rpg_container = (function mokepon$container$rpg_container(){
var map__26185 = cljs.core.deref.call(null,mokepon.container.app_state.call(null));
var map__26185__$1 = ((((!((map__26185 == null)))?((((map__26185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26185):map__26185);
var location = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var team = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var team_at_home = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"team-at-home","team-at-home",-1793865184));
var battling = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"battling","battling",-129800115));
var cash = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"cash","cash",181122222));
var items = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var play_by_play = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732));
var mokedex = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182));
var messages = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var top_level_battle_locations = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forest","forest",278860306),new cljs.core.Keyword(null,"canyon","canyon",-310776600),new cljs.core.Keyword(null,"pool","pool",-1814211613)], null);
return React.createElement("div",null,React.createElement("div",{"style": {"float": "right", "fontWeight": "bold", "fontSize": "larger"}},"Cash: $",sablono.interpreter.interpret.call(null,cash)),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"outside","outside",-13164995)))?mokepon.components.outside_view.call(null,location,team,mokepon.container.go_to_location_BANG_,mokepon.container.location_available_QMARK_,mokepon.locations.location_info.call(null),mokepon.container.app_state_new_message_count.call(null),mokepon.container.mark_location_as_seen_BANG_,mokepon.container.app_state_location_seen_QMARK_):(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([location], true),top_level_battle_locations))?mokepon.components.location_view.call(null,new cljs.core.Keyword(null,"awesome-text","awesome-text",-462971013).cljs$core$IFn$_invoke$arity$1(location.call(null,mokepon.locations.location_info.call(null))),team,((function (map__26185,map__26185__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations){
return (function (){
return mokepon.container.find_trouble_BANG_.call(null,true);
});})(map__26185,map__26185__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations))
,mokepon.rpg.choosable_monsters.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699))),mokepon.container.app_state_chosen_monster.call(null),mokepon.container.chosen_can_attack_QMARK_.call(null),mokepon.rpg.battle_over_QMARK_.call(null,mokepon.container.app_state_chosen_monster.call(null),mokepon.container.app_state_battling.call(null)),battling,mokepon.container.go_to_location_BANG_,mokepon.container.attack_BANG_,mokepon.rpg.active_turn_threshold,items,mokepon.container.throw_mokebox_BANG_,mokepon.container.choose_monster_BANG_,mokepon.container.use_candy_BANG_):((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"home","home",-74557309)))?mokepon.components.home_view.call(null,team,team_at_home,mokepon.container.take_chipu_BANG_,mokepon.container.go_to_location_BANG_,mokepon.container.sleep_at_home_BANG_):((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"shop","shop",-823644406)))?mokepon.views.shop.view.call(null,mokepon.shop.shop_items.call(null),mokepon.container.buy_item_BANG_,mokepon.container.go_to_location_BANG_,mokepon.container.shop_item_available_QMARK_):((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"phone","phone",-763596057)))?mokepon.components.phone_view.call(null,mokepon.container.go_to_location_BANG_,mokepon.container.view_messages_BANG_):((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"messages","messages",345434482)))?mokepon.components.messages_view.call(null,messages,mokepon.container.go_to_location_BANG_):((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182)))?mokepon.views.mokedex.view.call(null,mokepon.container.go_to_location_BANG_,mokedex):mokepon.elements.section.call(null,[cljs.core.str("Location "),cljs.core.str(location),cljs.core.str(" not handled.")].join(''),mokepon.elements.a.call(null,"Go back.",((function (map__26185,map__26185__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations){
return (function (){
return mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
});})(map__26185,map__26185__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations))
))
)))))))),sablono.interpreter.interpret.call(null,mokepon.components.status_view.call(null,items,mokepon.shop.shop_items_lookup.call(null),team,play_by_play,mokepon.container.reset_game_BANG_)));
});
mokepon.container.render_BANG_ = (function mokepon$container$render_BANG_(){
return ReactDOM.render.call(null,mokepon.container.rpg_container.call(null),document.getElementById("app"));
});
cljs.core.add_watch.call(null,mokepon.container.game_app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return mokepon.container.render_BANG_.call(null);
}));

//# sourceMappingURL=container.js.map