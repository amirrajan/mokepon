// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.monsters');
goog.require('mokepon.items');
goog.require('alandipert.storage_atom');
goog.require('mokepon.rpg');
goog.require('mokepon.components');
mokepon.core.alert = (function mokepon$core$alert(message){
return (function (){
return window.alert(message);
});
});
cljs.core.reset_BANG_.call(null,alandipert.storage_atom.storage_delay,(1000));
if(typeof mokepon.core.app_state !== 'undefined'){
} else {
mokepon.core.app_state = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,mokepon.rpg.new_game),new cljs.core.Keyword(null,"game","game",-441523833));
}
mokepon.core.team_count = (function mokepon$core$team_count(){
return cljs.core.count.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state))));
});
mokepon.core.chosen_monster = (function mokepon$core$chosen_monster(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)))){
return new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)).call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)));
} else {
return null;
}
});
mokepon.core.set_battle = (function mokepon$core$set_battle(chosen_key,battling){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,mokepon.core.app_state),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),chosen_key,new cljs.core.Keyword(null,"battling","battling",-129800115),battling);
});
mokepon.core.clear_battle = (function mokepon$core$clear_battle(){
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null,new cljs.core.Keyword(null,"battling","battling",-129800115),null);
});
mokepon.core.update_in_team = (function mokepon$core$update_in_team(monster_key,new_value){
return cljs.core.assoc.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),monster_key,new_value);
});
mokepon.core.add_to_play_by_play = (function mokepon$core$add_to_play_by_play(text){
return cljs.core.conj.call(null,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),text);
});
mokepon.core.on_decrement_item = (function mokepon$core$on_decrement_item(item_key){
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_key], null),(function (p1__37470_SHARP_){
return ((function (){var or__28012__auto__ = p1__37470_SHARP_;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return (0);
}
})() - (1));
}));
});
mokepon.core.item_count = (function mokepon$core$item_count(item_key){
var or__28012__auto__ = item_key.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)));
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return (0);
}
});
mokepon.core.on_buy_item = (function mokepon$core$on_buy_item(item){
var item_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var new_item_count = (mokepon.core.item_count.call(null,item_id) + (1));
var current_cash = new cljs.core.Keyword(null,"cash","cash",181122222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state));
var afford_QMARK_ = (current_cash >= new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item));
var new_cash = (current_cash - new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item));
if(afford_QMARK_){
cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"cash","cash",181122222),new_cash,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),mokepon.core.add_to_play_by_play.call(null,[cljs.core.str("You take the "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" from the midget's saggy, squishy hand. He smiles and gives you a tip of his top hat.")].join('')));

return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),((function (item_id,new_item_count,current_cash,afford_QMARK_,new_cash){
return (function (p1__37471_SHARP_){
return cljs.core.assoc.call(null,p1__37471_SHARP_,item_id,new_item_count);
});})(item_id,new_item_count,current_cash,afford_QMARK_,new_cash))
);
} else {
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),mokepon.core.add_to_play_by_play.call(null,"The midget bitch slaps you saying that you can't afford that. He wonders if you were taught common core math."));
}
});
mokepon.core.on_throw_mokebox = (function mokepon$core$on_throw_mokebox(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state))))){
return mokepon.core.on_decrement_item.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
} else {
return null;
}
});
mokepon.core.on_sleep_at_home = (function mokepon$core$on_sleep_at_home(){
cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),mokepon.core.add_to_play_by_play.call(null,"You've slept. Your posse has been healed."));

return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__37472_SHARP_){
return mokepon.rpg.heal_team.call(null,p1__37472_SHARP_);
}));
});
mokepon.core.on_tick_battle_core = (function mokepon$core$on_tick_battle_core(){
var map__37475 = mokepon.rpg.tick_battle.call(null,mokepon.core.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)));
var map__37475__$1 = ((((!((map__37475 == null)))?((((map__37475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37475):map__37475);
var battling = cljs.core.get.call(null,map__37475__$1,new cljs.core.Keyword(null,"battling","battling",-129800115));
var chosen = cljs.core.get.call(null,map__37475__$1,new cljs.core.Keyword(null,"chosen","chosen",-1422409985));
var play_by_play = cljs.core.get.call(null,map__37475__$1,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732));
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"battling","battling",-129800115),battling,new cljs.core.Keyword(null,"team","team",1355747699),mokepon.core.update_in_team.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),chosen),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),play_by_play);
});
mokepon.core.remove_dead_team_members = (function mokepon$core$remove_dead_team_members(){
if(cljs.core.truth_(mokepon.rpg.is_dead_QMARK_.call(null,mokepon.core.chosen_monster.call(null)))){
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__37477_SHARP_){
return cljs.core.dissoc.call(null,p1__37477_SHARP_,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)));
}));
} else {
return null;
}
});
mokepon.core.on_tick_battle = (function mokepon$core$on_tick_battle(){
if(cljs.core.not.call(null,mokepon.rpg.battle_over_QMARK_.call(null,mokepon.core.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state))))){
mokepon.core.on_tick_battle_core.call(null);

return window.setTimeout((function (){
return mokepon$core$on_tick_battle.call(null);
}),(250));
} else {
return null;
}
});
mokepon.core.on_take_chikapu = (function mokepon$core$on_take_chikapu(){
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"team","team",1355747699),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),new cljs.core.Keyword(null,"chikapu","chikapu",933426503),mokepon.monsters.chikapu));
});
mokepon.core.on_go_to_location = (function mokepon$core$on_go_to_location(loc){
mokepon.core.remove_dead_team_members.call(null);

return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"location","location",1815599388),loc,new cljs.core.Keyword(null,"battling","battling",-129800115),null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null);
});
mokepon.core.on_attack = (function mokepon$core$on_attack(){
var map__37480 = mokepon.rpg.apply_player_attack.call(null,mokepon.core.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)));
var map__37480__$1 = ((((!((map__37480 == null)))?((((map__37480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37480):map__37480);
var battling = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"battling","battling",-129800115));
var chosen = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"chosen","chosen",-1422409985));
var play_by_play = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732));
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"battling","battling",-129800115),battling,new cljs.core.Keyword(null,"team","team",1355747699),mokepon.core.update_in_team.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),chosen),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),play_by_play);
});
mokepon.core.set_monsters = (function mokepon$core$set_monsters(chosen_key,battling,play_by_play){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),chosen_key,new cljs.core.Keyword(null,"battling","battling",-129800115),battling,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),mokepon.core.add_to_play_by_play.call(null,[cljs.core.str("It has begun! "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(chosen_key.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state))))),cljs.core.str(" vs "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(battling)),cljs.core.str("!")].join(''))], null);
});
mokepon.core.on_set_battle = (function mokepon$core$on_set_battle(chosen_key,battling){
return cljs.core.swap_BANG_.call(null,mokepon.core.app_state,cljs.core.merge,mokepon.core.set_monsters.call(null,chosen_key,battling,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state))));
});
mokepon.core.on_find_trouble = (function mokepon$core$on_find_trouble(){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)))){
return false;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),new cljs.core.Keyword(null,"forest","forest",278860306))){
return (function (){
mokepon.core.on_set_battle.call(null,new cljs.core.Keyword(null,"chikapu","chikapu",933426503),mokepon.monsters.sulbabaur);

return mokepon.core.on_tick_battle.call(null);
})()
.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state)),new cljs.core.Keyword(null,"canyon","canyon",-310776600))){
mokepon.core.on_set_battle.call(null,new cljs.core.Keyword(null,"chikapu","chikapu",933426503),mokepon.monsters.deogude);

return mokepon.core.on_tick_battle.call(null);
} else {
return null;
}
}
}
});
mokepon.core.rpg_container = (function mokepon$core$rpg_container(){
return sablono.interpreter.interpret.call(null,mokepon.components.rpg_view.call(null,cljs.core.deref.call(null,mokepon.core.app_state),mokepon.core.on_take_chikapu,mokepon.core.on_go_to_location,mokepon.core.on_find_trouble,mokepon.core.chosen_monster.call(null),(function (){var and__28000__auto__ = mokepon.rpg.can_attack_QMARK_.call(null,mokepon.core.chosen_monster.call(null));
if(cljs.core.truth_(and__28000__auto__)){
return cljs.core.not.call(null,mokepon.rpg.battle_over_QMARK_.call(null,mokepon.core.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state))));
} else {
return and__28000__auto__;
}
})(),mokepon.rpg.battle_over_QMARK_.call(null,mokepon.core.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.core.app_state))),mokepon.core.on_attack,mokepon.core.on_sleep_at_home,mokepon.rpg.active_turn_threshold,mokepon.items.store_items,mokepon.items.store_items_lookup,mokepon.core.on_buy_item,mokepon.core.on_throw_mokebox));
});
mokepon.core.render_BANG_ = (function mokepon$core$render_BANG_(){
return React.render(mokepon.core.rpg_container.call(null),document.getElementById("app"));
});
cljs.core.add_watch.call(null,mokepon.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return mokepon.core.render_BANG_.call(null);
}));
mokepon.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map