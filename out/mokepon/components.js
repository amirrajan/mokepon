// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.views.mokedex');
goog.require('mokepon.views.battle');
goog.require('mokepon.views.shop');
goog.require('mokepon.elements');
mokepon.components.team_view = (function mokepon$components$team_view(team,header,empty_text){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,header], null),((cljs.core.empty_QMARK_(team))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,empty_text], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function mokepon$components$team_view_$_iter__30879(s__30880){
return (new cljs.core.LazySeq(null,(function (){
var s__30880__$1 = s__30880;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30880__$1);
if(temp__4657__auto__){
var s__30880__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30880__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30880__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30882 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30881 = (0);
while(true){
if((i__30881 < size__19243__auto__)){
var vec__30891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30881);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30891,(1),null);
cljs.core.chunk_append(b__30882,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null));

var G__30897 = (i__30881 + (1));
i__30881 = G__30897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30882),mokepon$components$team_view_$_iter__30879(cljs.core.chunk_rest(s__30880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30882),null);
}
} else {
var vec__30894 = cljs.core.first(s__30880__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30894,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null),mokepon$components$team_view_$_iter__30879(cljs.core.rest(s__30880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(team);
})()], null)], 0));
});
mokepon.components.adventure_view = (function mokepon$components$adventure_view(description,action_text,key,go_to_location_handler){
return mokepon.elements.a([cljs.core.str(action_text)].join(''),(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(key) : go_to_location_handler.call(null,key));
}));
});
mokepon.components.play_by_play_view = (function mokepon$components$play_by_play_view(play_by_play){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var iter__19244__auto__ = (function mokepon$components$play_by_play_view_$_iter__30904(s__30905){
return (new cljs.core.LazySeq(null,(function (){
var s__30905__$1 = s__30905;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30905__$1);
if(temp__4657__auto__){
var s__30905__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30905__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30905__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30907 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30906 = (0);
while(true){
if((i__30906 < size__19243__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30906);
cljs.core.chunk_append(b__30907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null));

var G__30910 = (i__30906 + (1));
i__30906 = G__30910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30907),mokepon$components$play_by_play_view_$_iter__30904(cljs.core.chunk_rest(s__30905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30907),null);
}
} else {
var i = cljs.core.first(s__30905__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null),mokepon$components$play_by_play_view_$_iter__30904(cljs.core.rest(s__30905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((25),cljs.core.reverse(play_by_play)));
})()], 0));
});
mokepon.components.location_view = (function mokepon$components$location_view(location_description,team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler__$1,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
if((battling == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,location_description], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.empty_QMARK_(team))?mokepon.elements.disabled_a("Battle"):mokepon.elements.a("Battle",find_trouble_handler)),mokepon.elements.a("Back",(function (){
return (go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler__$1.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,location_description], null)], 0)),mokepon.views.battle.view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler__$1,items,throw_mokebox_handler,choose_monster_handler,candy_handler)], null);

}
});
mokepon.components.home_view = (function mokepon$components$home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler){
var wat = React.createElement("p",null,"Test");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Home"], null)], 0)),null,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.not(cljs.core.cst$kw$chipu.cljs$core$IFn$_invoke$arity$1(team)))?mokepon.elements.a("Take Chipu",take_chipu_handler):null),mokepon.elements.a("Sleep",sleep_at_home_handler),mokepon.elements.a("Back",((function (wat){
return (function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
});})(wat))
)], 0))], null);
});
mokepon.components.message_from = (function mokepon$components$message_from(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mom,"Mom",cljs.core.cst$kw$midget,"The Midget"], null);
});
mokepon.components.messages_view = (function mokepon$components$messages_view(messages,go_to_location_handler){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Messages"], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$messages,(function (){var iter__19244__auto__ = (function mokepon$components$messages_view_$_iter__30921(s__30922){
return (new cljs.core.LazySeq(null,(function (){
var s__30922__$1 = s__30922;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30922__$1);
if(temp__4657__auto__){
var s__30922__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30922__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30922__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30924 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30923 = (0);
while(true){
if((i__30923 < size__19243__auto__)){
var m = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30923);
cljs.core.chunk_append(b__30924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(m).call(null,mokepon.components.message_from())),cljs.core.str(": "),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(m))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$smaller], null)], null),"0 day(s) ago"], null)], null)], null));

var G__30927 = (i__30923 + (1));
i__30923 = G__30927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30924),mokepon$components$messages_view_$_iter__30921(cljs.core.chunk_rest(s__30922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30924),null);
}
} else {
var m = cljs.core.first(s__30922__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(m).call(null,mokepon.components.message_from())),cljs.core.str(": "),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(m))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$smaller], null)], null),"0 day(s) ago"], null)], null)], null),mokepon$components$messages_view_$_iter__30921(cljs.core.rest(s__30922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(messages);
})()], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phone) : go_to_location_handler.call(null,cljs.core.cst$kw$phone));
}))], 0))], null);
});
mokepon.components.phone_view = (function mokepon$components$phone_view(go_to_location_handler,view_messages_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Phone"], null)], 0)),mokepon.components.adventure_view("","Mok\u00E9dex",cljs.core.cst$kw$mokedex,go_to_location_handler),mokepon.components.adventure_view("","Messages",cljs.core.cst$kw$messages,view_messages_handler),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
});
mokepon.components.outside_view = (function mokepon$components$outside_view(location,team,go_to_location_handler,location_available_handler,location_info,new_message_count,mark_location_as_seen_handler,location_seen_QMARK__handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Outside"], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.components.adventure_view("",(((new_message_count > (0)))?"Phone: You have new messages.":"Phone"),cljs.core.cst$kw$phone,go_to_location_handler),mokepon.components.adventure_view(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$home.cljs$core$IFn$_invoke$arity$1(location_info)),cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$home.cljs$core$IFn$_invoke$arity$1(location_info)),cljs.core.cst$kw$home,go_to_location_handler),(function (){var iter__19244__auto__ = (function mokepon$components$outside_view_$_iter__30934(s__30935){
return (new cljs.core.LazySeq(null,(function (){
var s__30935__$1 = s__30935;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30935__$1);
if(temp__4657__auto__){
var s__30935__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30935__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30935__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30937 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30936 = (0);
while(true){
if((i__30936 < size__19243__auto__)){
var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30936);
cljs.core.chunk_append(b__30937,(cljs.core.truth_((location_available_handler.cljs$core$IFn$_invoke$arity$1 ? location_available_handler.cljs$core$IFn$_invoke$arity$1(loc) : location_available_handler.call(null,loc)))?(cljs.core.truth_((location_seen_QMARK__handler.cljs$core$IFn$_invoke$arity$1 ? location_seen_QMARK__handler.cljs$core$IFn$_invoke$arity$1(loc) : location_seen_QMARK__handler.call(null,loc)))?mokepon.components.adventure_view(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),loc,go_to_location_handler):mokepon.elements.from_component_definition(mokepon.elements.fade_in_component_definition,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,loc,cljs.core.cst$kw$callback,((function (i__30936,loc,c__19242__auto__,size__19243__auto__,b__30937,s__30935__$2,temp__4657__auto__){
return (function (){
return (mark_location_as_seen_handler.cljs$core$IFn$_invoke$arity$1 ? mark_location_as_seen_handler.cljs$core$IFn$_invoke$arity$1(loc) : mark_location_as_seen_handler.call(null,loc));
});})(i__30936,loc,c__19242__auto__,size__19243__auto__,b__30937,s__30935__$2,temp__4657__auto__))
], null),mokepon.components.adventure_view(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),loc,go_to_location_handler))
):null));

var G__30940 = (i__30936 + (1));
i__30936 = G__30940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30937),mokepon$components$outside_view_$_iter__30934(cljs.core.chunk_rest(s__30935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30937),null);
}
} else {
var loc = cljs.core.first(s__30935__$2);
return cljs.core.cons((cljs.core.truth_((location_available_handler.cljs$core$IFn$_invoke$arity$1 ? location_available_handler.cljs$core$IFn$_invoke$arity$1(loc) : location_available_handler.call(null,loc)))?(cljs.core.truth_((location_seen_QMARK__handler.cljs$core$IFn$_invoke$arity$1 ? location_seen_QMARK__handler.cljs$core$IFn$_invoke$arity$1(loc) : location_seen_QMARK__handler.call(null,loc)))?mokepon.components.adventure_view(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),loc,go_to_location_handler):mokepon.elements.from_component_definition(mokepon.elements.fade_in_component_definition,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,loc,cljs.core.cst$kw$callback,((function (loc,s__30935__$2,temp__4657__auto__){
return (function (){
return (mark_location_as_seen_handler.cljs$core$IFn$_invoke$arity$1 ? mark_location_as_seen_handler.cljs$core$IFn$_invoke$arity$1(loc) : mark_location_as_seen_handler.call(null,loc));
});})(loc,s__30935__$2,temp__4657__auto__))
], null),mokepon.components.adventure_view(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),loc,go_to_location_handler))
):null),mokepon$components$outside_view_$_iter__30934(cljs.core.rest(s__30935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shop,cljs.core.cst$kw$canyon,cljs.core.cst$kw$forest,cljs.core.cst$kw$pool], null));
})()], 0))], null);
});
mokepon.components.title_view = (function mokepon$components$title_view(){
return null;
});
mokepon.components.status_view = (function mokepon$components$status_view(items,shop_items_lookup,team,play_by_play,restart_game_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.team_view(team,"Team:","None"),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Items:"], null),((cljs.core.empty_QMARK_(items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"None"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function mokepon$components$status_view_$_iter__30959(s__30960){
return (new cljs.core.LazySeq(null,(function (){
var s__30960__$1 = s__30960;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30960__$1);
if(temp__4657__auto__){
var s__30960__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30960__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30960__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30962 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30961 = (0);
while(true){
if((i__30961 < size__19243__auto__)){
var vec__30971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30961);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30971,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30971,(1),null);
cljs.core.chunk_append(b__30962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(shop_items_lookup) : k.call(null,shop_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null));

var G__30977 = (i__30961 + (1));
i__30961 = G__30977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30962),mokepon$components$status_view_$_iter__30959(cljs.core.chunk_rest(s__30960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30962),null);
}
} else {
var vec__30974 = cljs.core.first(s__30960__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30974,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(shop_items_lookup) : k.call(null,shop_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null),mokepon$components$status_view_$_iter__30959(cljs.core.rest(s__30960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(items);
})()], null))], 0)),mokepon.components.play_by_play_view(play_by_play),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$smaller,cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$margin_DASH_top,"100px"], null),cljs.core.cst$kw$on_DASH_click,restart_game_handler,cljs.core.cst$kw$href,"javascript:;"], null),"[restart game]"], null)], null);
});
mokepon.components.rpg_view = (function mokepon$components$rpg_view(game_state,take_chipu_handler,go_to_location_handler,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,attack_handler,sleep_at_home_handler,active_turn_threshold,shop_items,shop_items_lookup,buy_item_handler,throw_mokebox_handler,choose_monster_handler,candy_handler,location_available_handler,location_info,shop_item_available_handler,restart_game_handler,new_message_count,view_messages_handler,mark_location_as_seen_handler,location_seen_QMARK__handler){
var map__30980 = game_state;
var map__30980__$1 = ((((!((map__30980 == null)))?((((map__30980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30980):map__30980);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$location);
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$team);
var team_at_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$team_DASH_at_DASH_home);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$battling);
var cash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$cash);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$items);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
var mokedex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$mokedex);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,cljs.core.cst$kw$messages);
var top_level_battle_locations = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$forest,cljs.core.cst$kw$canyon,cljs.core.cst$kw$pool], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$float,"right",cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$larger], null)], null),"Cash: $",cash], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$outside))?mokepon.components.outside_view(location,team,go_to_location_handler,location_available_handler,location_info,new_message_count,mark_location_as_seen_handler,location_seen_QMARK__handler):(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([location], true),top_level_battle_locations))?mokepon.components.location_view(cljs.core.cst$kw$awesome_DASH_text.cljs$core$IFn$_invoke$arity$1((location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(location_info) : location.call(null,location_info))),team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$home))?mokepon.components.home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$shop))?mokepon.views.shop.view(shop_items,buy_item_handler,go_to_location_handler,shop_item_available_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$phone))?mokepon.components.phone_view(go_to_location_handler,view_messages_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$messages))?mokepon.components.messages_view(messages,go_to_location_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$mokedex))?mokepon.views.mokedex.view(go_to_location_handler,mokedex):mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Location "),cljs.core.str(location),cljs.core.str(" not handled.")].join(''),mokepon.elements.a("Go back.",((function (map__30980,map__30980__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations){
return (function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
});})(map__30980,map__30980__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations))
)], 0))
))))))),mokepon.components.status_view(items,shop_items_lookup,team,play_by_play,restart_game_handler)], null);
});
