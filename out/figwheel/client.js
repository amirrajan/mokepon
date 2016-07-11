// Compiled by ClojureScript 1.9.76 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39156 = cljs.core._EQ_;
var expr__39157 = (function (){var or__28012__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39160){if((e39160 instanceof Error)){
var e = e39160;
return false;
} else {
throw e39160;

}
}})();
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39156.call(null,"true",expr__39157))){
return true;
} else {
if(cljs.core.truth_(pred__39156.call(null,"false",expr__39157))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39157)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e39162){if((e39162 instanceof Error)){
var e = e39162;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39162;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__29094__auto__ = [];
var len__29087__auto___39164 = arguments.length;
var i__29088__auto___39165 = (0);
while(true){
if((i__29088__auto___39165 < len__29087__auto___39164)){
args__29094__auto__.push((arguments[i__29088__auto___39165]));

var G__39166 = (i__29088__auto___39165 + (1));
i__29088__auto___39165 = G__39166;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq39163){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39163));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39167){
var map__39170 = p__39167;
var map__39170__$1 = ((((!((map__39170 == null)))?((((map__39170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39170):map__39170);
var message = cljs.core.get.call(null,map__39170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39170__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28012__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28000__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28000__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28000__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30729__auto___39332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___39332,ch){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___39332,ch){
return (function (state_39301){
var state_val_39302 = (state_39301[(1)]);
if((state_val_39302 === (7))){
var inst_39297 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39303_39333 = state_39301__$1;
(statearr_39303_39333[(2)] = inst_39297);

(statearr_39303_39333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (1))){
var state_39301__$1 = state_39301;
var statearr_39304_39334 = state_39301__$1;
(statearr_39304_39334[(2)] = null);

(statearr_39304_39334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (4))){
var inst_39254 = (state_39301[(7)]);
var inst_39254__$1 = (state_39301[(2)]);
var state_39301__$1 = (function (){var statearr_39305 = state_39301;
(statearr_39305[(7)] = inst_39254__$1);

return statearr_39305;
})();
if(cljs.core.truth_(inst_39254__$1)){
var statearr_39306_39335 = state_39301__$1;
(statearr_39306_39335[(1)] = (5));

} else {
var statearr_39307_39336 = state_39301__$1;
(statearr_39307_39336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (15))){
var inst_39261 = (state_39301[(8)]);
var inst_39276 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39261);
var inst_39277 = cljs.core.first.call(null,inst_39276);
var inst_39278 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39277);
var inst_39279 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39278)].join('');
var inst_39280 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39279);
var state_39301__$1 = state_39301;
var statearr_39308_39337 = state_39301__$1;
(statearr_39308_39337[(2)] = inst_39280);

(statearr_39308_39337[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (13))){
var inst_39285 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39309_39338 = state_39301__$1;
(statearr_39309_39338[(2)] = inst_39285);

(statearr_39309_39338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (6))){
var state_39301__$1 = state_39301;
var statearr_39310_39339 = state_39301__$1;
(statearr_39310_39339[(2)] = null);

(statearr_39310_39339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (17))){
var inst_39283 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39311_39340 = state_39301__$1;
(statearr_39311_39340[(2)] = inst_39283);

(statearr_39311_39340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (3))){
var inst_39299 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39301__$1,inst_39299);
} else {
if((state_val_39302 === (12))){
var inst_39260 = (state_39301[(9)]);
var inst_39274 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39260,opts);
var state_39301__$1 = state_39301;
if(cljs.core.truth_(inst_39274)){
var statearr_39312_39341 = state_39301__$1;
(statearr_39312_39341[(1)] = (15));

} else {
var statearr_39313_39342 = state_39301__$1;
(statearr_39313_39342[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (2))){
var state_39301__$1 = state_39301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39301__$1,(4),ch);
} else {
if((state_val_39302 === (11))){
var inst_39261 = (state_39301[(8)]);
var inst_39266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39267 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39261);
var inst_39268 = cljs.core.async.timeout.call(null,(1000));
var inst_39269 = [inst_39267,inst_39268];
var inst_39270 = (new cljs.core.PersistentVector(null,2,(5),inst_39266,inst_39269,null));
var state_39301__$1 = state_39301;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39301__$1,(14),inst_39270);
} else {
if((state_val_39302 === (9))){
var inst_39261 = (state_39301[(8)]);
var inst_39287 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39288 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39261);
var inst_39289 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39288);
var inst_39290 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39289)].join('');
var inst_39291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39290);
var state_39301__$1 = (function (){var statearr_39314 = state_39301;
(statearr_39314[(10)] = inst_39287);

return statearr_39314;
})();
var statearr_39315_39343 = state_39301__$1;
(statearr_39315_39343[(2)] = inst_39291);

(statearr_39315_39343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (5))){
var inst_39254 = (state_39301[(7)]);
var inst_39256 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39257 = (new cljs.core.PersistentArrayMap(null,2,inst_39256,null));
var inst_39258 = (new cljs.core.PersistentHashSet(null,inst_39257,null));
var inst_39259 = figwheel.client.focus_msgs.call(null,inst_39258,inst_39254);
var inst_39260 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39259);
var inst_39261 = cljs.core.first.call(null,inst_39259);
var inst_39262 = figwheel.client.autoload_QMARK_.call(null);
var state_39301__$1 = (function (){var statearr_39316 = state_39301;
(statearr_39316[(9)] = inst_39260);

(statearr_39316[(8)] = inst_39261);

return statearr_39316;
})();
if(cljs.core.truth_(inst_39262)){
var statearr_39317_39344 = state_39301__$1;
(statearr_39317_39344[(1)] = (8));

} else {
var statearr_39318_39345 = state_39301__$1;
(statearr_39318_39345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (14))){
var inst_39272 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39319_39346 = state_39301__$1;
(statearr_39319_39346[(2)] = inst_39272);

(statearr_39319_39346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (16))){
var state_39301__$1 = state_39301;
var statearr_39320_39347 = state_39301__$1;
(statearr_39320_39347[(2)] = null);

(statearr_39320_39347[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (10))){
var inst_39293 = (state_39301[(2)]);
var state_39301__$1 = (function (){var statearr_39321 = state_39301;
(statearr_39321[(11)] = inst_39293);

return statearr_39321;
})();
var statearr_39322_39348 = state_39301__$1;
(statearr_39322_39348[(2)] = null);

(statearr_39322_39348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (8))){
var inst_39260 = (state_39301[(9)]);
var inst_39264 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39260,opts);
var state_39301__$1 = state_39301;
if(cljs.core.truth_(inst_39264)){
var statearr_39323_39349 = state_39301__$1;
(statearr_39323_39349[(1)] = (11));

} else {
var statearr_39324_39350 = state_39301__$1;
(statearr_39324_39350[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30729__auto___39332,ch))
;
return ((function (switch__30708__auto__,c__30729__auto___39332,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30709__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30709__auto____0 = (function (){
var statearr_39328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39328[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30709__auto__);

(statearr_39328[(1)] = (1));

return statearr_39328;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30709__auto____1 = (function (state_39301){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_39301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e39329){if((e39329 instanceof Object)){
var ex__30712__auto__ = e39329;
var statearr_39330_39351 = state_39301;
(statearr_39330_39351[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39352 = state_39301;
state_39301 = G__39352;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30709__auto__ = function(state_39301){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30709__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30709__auto____1.call(this,state_39301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30709__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30709__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___39332,ch))
})();
var state__30731__auto__ = (function (){var statearr_39331 = f__30730__auto__.call(null);
(statearr_39331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___39332);

return statearr_39331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___39332,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39353_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39353_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39360 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39360){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_39358 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_39359 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39359;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39358;
}}catch (e39357){if((e39357 instanceof Error)){
var e = e39357;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39360], null));
} else {
var e = e39357;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39360))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39361){
var map__39370 = p__39361;
var map__39370__$1 = ((((!((map__39370 == null)))?((((map__39370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39370):map__39370);
var opts = map__39370__$1;
var build_id = cljs.core.get.call(null,map__39370__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39370,map__39370__$1,opts,build_id){
return (function (p__39372){
var vec__39373 = p__39372;
var seq__39374 = cljs.core.seq.call(null,vec__39373);
var first__39375 = cljs.core.first.call(null,seq__39374);
var seq__39374__$1 = cljs.core.next.call(null,seq__39374);
var map__39376 = first__39375;
var map__39376__$1 = ((((!((map__39376 == null)))?((((map__39376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39376):map__39376);
var msg = map__39376__$1;
var msg_name = cljs.core.get.call(null,map__39376__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39374__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39373,seq__39374,first__39375,seq__39374__$1,map__39376,map__39376__$1,msg,msg_name,_,map__39370,map__39370__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39373,seq__39374,first__39375,seq__39374__$1,map__39376,map__39376__$1,msg,msg_name,_,map__39370,map__39370__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39370,map__39370__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39384){
var vec__39385 = p__39384;
var seq__39386 = cljs.core.seq.call(null,vec__39385);
var first__39387 = cljs.core.first.call(null,seq__39386);
var seq__39386__$1 = cljs.core.next.call(null,seq__39386);
var map__39388 = first__39387;
var map__39388__$1 = ((((!((map__39388 == null)))?((((map__39388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39388):map__39388);
var msg = map__39388__$1;
var msg_name = cljs.core.get.call(null,map__39388__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39386__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39390){
var map__39402 = p__39390;
var map__39402__$1 = ((((!((map__39402 == null)))?((((map__39402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39402):map__39402);
var on_compile_warning = cljs.core.get.call(null,map__39402__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39402__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39402,map__39402__$1,on_compile_warning,on_compile_fail){
return (function (p__39404){
var vec__39405 = p__39404;
var seq__39406 = cljs.core.seq.call(null,vec__39405);
var first__39407 = cljs.core.first.call(null,seq__39406);
var seq__39406__$1 = cljs.core.next.call(null,seq__39406);
var map__39408 = first__39407;
var map__39408__$1 = ((((!((map__39408 == null)))?((((map__39408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39408):map__39408);
var msg = map__39408__$1;
var msg_name = cljs.core.get.call(null,map__39408__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39406__$1;
var pred__39410 = cljs.core._EQ_;
var expr__39411 = msg_name;
if(cljs.core.truth_(pred__39410.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39411))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39410.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39411))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39402,map__39402__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__,msg_hist,msg_names,msg){
return (function (state_39627){
var state_val_39628 = (state_39627[(1)]);
if((state_val_39628 === (7))){
var inst_39551 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39551)){
var statearr_39629_39675 = state_39627__$1;
(statearr_39629_39675[(1)] = (8));

} else {
var statearr_39630_39676 = state_39627__$1;
(statearr_39630_39676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (20))){
var inst_39621 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39631_39677 = state_39627__$1;
(statearr_39631_39677[(2)] = inst_39621);

(statearr_39631_39677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (27))){
var inst_39617 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39632_39678 = state_39627__$1;
(statearr_39632_39678[(2)] = inst_39617);

(statearr_39632_39678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (1))){
var inst_39544 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39544)){
var statearr_39633_39679 = state_39627__$1;
(statearr_39633_39679[(1)] = (2));

} else {
var statearr_39634_39680 = state_39627__$1;
(statearr_39634_39680[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (24))){
var inst_39619 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39635_39681 = state_39627__$1;
(statearr_39635_39681[(2)] = inst_39619);

(statearr_39635_39681[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (4))){
var inst_39625 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39627__$1,inst_39625);
} else {
if((state_val_39628 === (15))){
var inst_39623 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39636_39682 = state_39627__$1;
(statearr_39636_39682[(2)] = inst_39623);

(statearr_39636_39682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (21))){
var inst_39582 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39637_39683 = state_39627__$1;
(statearr_39637_39683[(2)] = inst_39582);

(statearr_39637_39683[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (31))){
var inst_39606 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39606)){
var statearr_39638_39684 = state_39627__$1;
(statearr_39638_39684[(1)] = (34));

} else {
var statearr_39639_39685 = state_39627__$1;
(statearr_39639_39685[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (32))){
var inst_39615 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39640_39686 = state_39627__$1;
(statearr_39640_39686[(2)] = inst_39615);

(statearr_39640_39686[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (33))){
var inst_39604 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39641_39687 = state_39627__$1;
(statearr_39641_39687[(2)] = inst_39604);

(statearr_39641_39687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (13))){
var inst_39565 = figwheel.client.heads_up.clear.call(null);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(16),inst_39565);
} else {
if((state_val_39628 === (22))){
var inst_39586 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39587 = figwheel.client.heads_up.append_message.call(null,inst_39586);
var state_39627__$1 = state_39627;
var statearr_39642_39688 = state_39627__$1;
(statearr_39642_39688[(2)] = inst_39587);

(statearr_39642_39688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (36))){
var inst_39613 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39643_39689 = state_39627__$1;
(statearr_39643_39689[(2)] = inst_39613);

(statearr_39643_39689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (29))){
var inst_39597 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39644_39690 = state_39627__$1;
(statearr_39644_39690[(2)] = inst_39597);

(statearr_39644_39690[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (6))){
var inst_39546 = (state_39627[(7)]);
var state_39627__$1 = state_39627;
var statearr_39645_39691 = state_39627__$1;
(statearr_39645_39691[(2)] = inst_39546);

(statearr_39645_39691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (28))){
var inst_39593 = (state_39627[(2)]);
var inst_39594 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39595 = figwheel.client.heads_up.display_warning.call(null,inst_39594);
var state_39627__$1 = (function (){var statearr_39646 = state_39627;
(statearr_39646[(8)] = inst_39593);

return statearr_39646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(29),inst_39595);
} else {
if((state_val_39628 === (25))){
var inst_39591 = figwheel.client.heads_up.clear.call(null);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(28),inst_39591);
} else {
if((state_val_39628 === (34))){
var inst_39608 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(37),inst_39608);
} else {
if((state_val_39628 === (17))){
var inst_39573 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39647_39692 = state_39627__$1;
(statearr_39647_39692[(2)] = inst_39573);

(statearr_39647_39692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (3))){
var inst_39563 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39563)){
var statearr_39648_39693 = state_39627__$1;
(statearr_39648_39693[(1)] = (13));

} else {
var statearr_39649_39694 = state_39627__$1;
(statearr_39649_39694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (12))){
var inst_39559 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39650_39695 = state_39627__$1;
(statearr_39650_39695[(2)] = inst_39559);

(statearr_39650_39695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (2))){
var inst_39546 = (state_39627[(7)]);
var inst_39546__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39627__$1 = (function (){var statearr_39651 = state_39627;
(statearr_39651[(7)] = inst_39546__$1);

return statearr_39651;
})();
if(cljs.core.truth_(inst_39546__$1)){
var statearr_39652_39696 = state_39627__$1;
(statearr_39652_39696[(1)] = (5));

} else {
var statearr_39653_39697 = state_39627__$1;
(statearr_39653_39697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (23))){
var inst_39589 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39589)){
var statearr_39654_39698 = state_39627__$1;
(statearr_39654_39698[(1)] = (25));

} else {
var statearr_39655_39699 = state_39627__$1;
(statearr_39655_39699[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (35))){
var state_39627__$1 = state_39627;
var statearr_39656_39700 = state_39627__$1;
(statearr_39656_39700[(2)] = null);

(statearr_39656_39700[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (19))){
var inst_39584 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39584)){
var statearr_39657_39701 = state_39627__$1;
(statearr_39657_39701[(1)] = (22));

} else {
var statearr_39658_39702 = state_39627__$1;
(statearr_39658_39702[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (11))){
var inst_39555 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39659_39703 = state_39627__$1;
(statearr_39659_39703[(2)] = inst_39555);

(statearr_39659_39703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (9))){
var inst_39557 = figwheel.client.heads_up.clear.call(null);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(12),inst_39557);
} else {
if((state_val_39628 === (5))){
var inst_39548 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39627__$1 = state_39627;
var statearr_39660_39704 = state_39627__$1;
(statearr_39660_39704[(2)] = inst_39548);

(statearr_39660_39704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (14))){
var inst_39575 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39575)){
var statearr_39661_39705 = state_39627__$1;
(statearr_39661_39705[(1)] = (18));

} else {
var statearr_39662_39706 = state_39627__$1;
(statearr_39662_39706[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (26))){
var inst_39599 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39627__$1 = state_39627;
if(cljs.core.truth_(inst_39599)){
var statearr_39663_39707 = state_39627__$1;
(statearr_39663_39707[(1)] = (30));

} else {
var statearr_39664_39708 = state_39627__$1;
(statearr_39664_39708[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (16))){
var inst_39567 = (state_39627[(2)]);
var inst_39568 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39569 = figwheel.client.format_messages.call(null,inst_39568);
var inst_39570 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39571 = figwheel.client.heads_up.display_error.call(null,inst_39569,inst_39570);
var state_39627__$1 = (function (){var statearr_39665 = state_39627;
(statearr_39665[(9)] = inst_39567);

return statearr_39665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(17),inst_39571);
} else {
if((state_val_39628 === (30))){
var inst_39601 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39602 = figwheel.client.heads_up.display_warning.call(null,inst_39601);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(33),inst_39602);
} else {
if((state_val_39628 === (10))){
var inst_39561 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39666_39709 = state_39627__$1;
(statearr_39666_39709[(2)] = inst_39561);

(statearr_39666_39709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (18))){
var inst_39577 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39578 = figwheel.client.format_messages.call(null,inst_39577);
var inst_39579 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39580 = figwheel.client.heads_up.display_error.call(null,inst_39578,inst_39579);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(21),inst_39580);
} else {
if((state_val_39628 === (37))){
var inst_39610 = (state_39627[(2)]);
var state_39627__$1 = state_39627;
var statearr_39667_39710 = state_39627__$1;
(statearr_39667_39710[(2)] = inst_39610);

(statearr_39667_39710[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39628 === (8))){
var inst_39553 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39627__$1 = state_39627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39627__$1,(11),inst_39553);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30729__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30708__auto__,c__30729__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto____0 = (function (){
var statearr_39671 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39671[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto__);

(statearr_39671[(1)] = (1));

return statearr_39671;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto____1 = (function (state_39627){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_39627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e39672){if((e39672 instanceof Object)){
var ex__30712__auto__ = e39672;
var statearr_39673_39711 = state_39627;
(statearr_39673_39711[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39712 = state_39627;
state_39627 = G__39712;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto__ = function(state_39627){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto____1.call(this,state_39627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__,msg_hist,msg_names,msg))
})();
var state__30731__auto__ = (function (){var statearr_39674 = f__30730__auto__.call(null);
(statearr_39674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_39674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__,msg_hist,msg_names,msg))
);

return c__30729__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30729__auto___39775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___39775,ch){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___39775,ch){
return (function (state_39758){
var state_val_39759 = (state_39758[(1)]);
if((state_val_39759 === (1))){
var state_39758__$1 = state_39758;
var statearr_39760_39776 = state_39758__$1;
(statearr_39760_39776[(2)] = null);

(statearr_39760_39776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (2))){
var state_39758__$1 = state_39758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39758__$1,(4),ch);
} else {
if((state_val_39759 === (3))){
var inst_39756 = (state_39758[(2)]);
var state_39758__$1 = state_39758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39758__$1,inst_39756);
} else {
if((state_val_39759 === (4))){
var inst_39746 = (state_39758[(7)]);
var inst_39746__$1 = (state_39758[(2)]);
var state_39758__$1 = (function (){var statearr_39761 = state_39758;
(statearr_39761[(7)] = inst_39746__$1);

return statearr_39761;
})();
if(cljs.core.truth_(inst_39746__$1)){
var statearr_39762_39777 = state_39758__$1;
(statearr_39762_39777[(1)] = (5));

} else {
var statearr_39763_39778 = state_39758__$1;
(statearr_39763_39778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (5))){
var inst_39746 = (state_39758[(7)]);
var inst_39748 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39746);
var state_39758__$1 = state_39758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39758__$1,(8),inst_39748);
} else {
if((state_val_39759 === (6))){
var state_39758__$1 = state_39758;
var statearr_39764_39779 = state_39758__$1;
(statearr_39764_39779[(2)] = null);

(statearr_39764_39779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (7))){
var inst_39754 = (state_39758[(2)]);
var state_39758__$1 = state_39758;
var statearr_39765_39780 = state_39758__$1;
(statearr_39765_39780[(2)] = inst_39754);

(statearr_39765_39780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (8))){
var inst_39750 = (state_39758[(2)]);
var state_39758__$1 = (function (){var statearr_39766 = state_39758;
(statearr_39766[(8)] = inst_39750);

return statearr_39766;
})();
var statearr_39767_39781 = state_39758__$1;
(statearr_39767_39781[(2)] = null);

(statearr_39767_39781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30729__auto___39775,ch))
;
return ((function (switch__30708__auto__,c__30729__auto___39775,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30709__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30709__auto____0 = (function (){
var statearr_39771 = [null,null,null,null,null,null,null,null,null];
(statearr_39771[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30709__auto__);

(statearr_39771[(1)] = (1));

return statearr_39771;
});
var figwheel$client$heads_up_plugin_$_state_machine__30709__auto____1 = (function (state_39758){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_39758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e39772){if((e39772 instanceof Object)){
var ex__30712__auto__ = e39772;
var statearr_39773_39782 = state_39758;
(statearr_39773_39782[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39783 = state_39758;
state_39758 = G__39783;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30709__auto__ = function(state_39758){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30709__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30709__auto____1.call(this,state_39758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30709__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30709__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___39775,ch))
})();
var state__30731__auto__ = (function (){var statearr_39774 = f__30730__auto__.call(null);
(statearr_39774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___39775);

return statearr_39774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___39775,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__){
return (function (state_39804){
var state_val_39805 = (state_39804[(1)]);
if((state_val_39805 === (1))){
var inst_39799 = cljs.core.async.timeout.call(null,(3000));
var state_39804__$1 = state_39804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39804__$1,(2),inst_39799);
} else {
if((state_val_39805 === (2))){
var inst_39801 = (state_39804[(2)]);
var inst_39802 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39804__$1 = (function (){var statearr_39806 = state_39804;
(statearr_39806[(7)] = inst_39801);

return statearr_39806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39804__$1,inst_39802);
} else {
return null;
}
}
});})(c__30729__auto__))
;
return ((function (switch__30708__auto__,c__30729__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30709__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30709__auto____0 = (function (){
var statearr_39810 = [null,null,null,null,null,null,null,null];
(statearr_39810[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30709__auto__);

(statearr_39810[(1)] = (1));

return statearr_39810;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30709__auto____1 = (function (state_39804){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_39804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e39811){if((e39811 instanceof Object)){
var ex__30712__auto__ = e39811;
var statearr_39812_39814 = state_39804;
(statearr_39812_39814[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39815 = state_39804;
state_39804 = G__39815;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30709__auto__ = function(state_39804){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30709__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30709__auto____1.call(this,state_39804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30709__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30709__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__))
})();
var state__30731__auto__ = (function (){var statearr_39813 = f__30730__auto__.call(null);
(statearr_39813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_39813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__))
);

return c__30729__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39816){
var map__39823 = p__39816;
var map__39823__$1 = ((((!((map__39823 == null)))?((((map__39823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39823):map__39823);
var ed = map__39823__$1;
var formatted_exception = cljs.core.get.call(null,map__39823__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39823__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39823__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39825_39829 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39826_39830 = null;
var count__39827_39831 = (0);
var i__39828_39832 = (0);
while(true){
if((i__39828_39832 < count__39827_39831)){
var msg_39833 = cljs.core._nth.call(null,chunk__39826_39830,i__39828_39832);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39833);

var G__39834 = seq__39825_39829;
var G__39835 = chunk__39826_39830;
var G__39836 = count__39827_39831;
var G__39837 = (i__39828_39832 + (1));
seq__39825_39829 = G__39834;
chunk__39826_39830 = G__39835;
count__39827_39831 = G__39836;
i__39828_39832 = G__39837;
continue;
} else {
var temp__4657__auto___39838 = cljs.core.seq.call(null,seq__39825_39829);
if(temp__4657__auto___39838){
var seq__39825_39839__$1 = temp__4657__auto___39838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39825_39839__$1)){
var c__28823__auto___39840 = cljs.core.chunk_first.call(null,seq__39825_39839__$1);
var G__39841 = cljs.core.chunk_rest.call(null,seq__39825_39839__$1);
var G__39842 = c__28823__auto___39840;
var G__39843 = cljs.core.count.call(null,c__28823__auto___39840);
var G__39844 = (0);
seq__39825_39829 = G__39841;
chunk__39826_39830 = G__39842;
count__39827_39831 = G__39843;
i__39828_39832 = G__39844;
continue;
} else {
var msg_39845 = cljs.core.first.call(null,seq__39825_39839__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39845);

var G__39846 = cljs.core.next.call(null,seq__39825_39839__$1);
var G__39847 = null;
var G__39848 = (0);
var G__39849 = (0);
seq__39825_39829 = G__39846;
chunk__39826_39830 = G__39847;
count__39827_39831 = G__39848;
i__39828_39832 = G__39849;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39850){
var map__39853 = p__39850;
var map__39853__$1 = ((((!((map__39853 == null)))?((((map__39853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39853):map__39853);
var w = map__39853__$1;
var message = cljs.core.get.call(null,map__39853__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28000__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28000__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28000__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39865 = cljs.core.seq.call(null,plugins);
var chunk__39866 = null;
var count__39867 = (0);
var i__39868 = (0);
while(true){
if((i__39868 < count__39867)){
var vec__39869 = cljs.core._nth.call(null,chunk__39866,i__39868);
var k = cljs.core.nth.call(null,vec__39869,(0),null);
var plugin = cljs.core.nth.call(null,vec__39869,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39875 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39865,chunk__39866,count__39867,i__39868,pl_39875,vec__39869,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39875.call(null,msg_hist);
});})(seq__39865,chunk__39866,count__39867,i__39868,pl_39875,vec__39869,k,plugin))
);
} else {
}

var G__39876 = seq__39865;
var G__39877 = chunk__39866;
var G__39878 = count__39867;
var G__39879 = (i__39868 + (1));
seq__39865 = G__39876;
chunk__39866 = G__39877;
count__39867 = G__39878;
i__39868 = G__39879;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39865);
if(temp__4657__auto__){
var seq__39865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39865__$1)){
var c__28823__auto__ = cljs.core.chunk_first.call(null,seq__39865__$1);
var G__39880 = cljs.core.chunk_rest.call(null,seq__39865__$1);
var G__39881 = c__28823__auto__;
var G__39882 = cljs.core.count.call(null,c__28823__auto__);
var G__39883 = (0);
seq__39865 = G__39880;
chunk__39866 = G__39881;
count__39867 = G__39882;
i__39868 = G__39883;
continue;
} else {
var vec__39872 = cljs.core.first.call(null,seq__39865__$1);
var k = cljs.core.nth.call(null,vec__39872,(0),null);
var plugin = cljs.core.nth.call(null,vec__39872,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39884 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39865,chunk__39866,count__39867,i__39868,pl_39884,vec__39872,k,plugin,seq__39865__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39884.call(null,msg_hist);
});})(seq__39865,chunk__39866,count__39867,i__39868,pl_39884,vec__39872,k,plugin,seq__39865__$1,temp__4657__auto__))
);
} else {
}

var G__39885 = cljs.core.next.call(null,seq__39865__$1);
var G__39886 = null;
var G__39887 = (0);
var G__39888 = (0);
seq__39865 = G__39885;
chunk__39866 = G__39886;
count__39867 = G__39887;
i__39868 = G__39888;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args39889 = [];
var len__29087__auto___39892 = arguments.length;
var i__29088__auto___39893 = (0);
while(true){
if((i__29088__auto___39893 < len__29087__auto___39892)){
args39889.push((arguments[i__29088__auto___39893]));

var G__39894 = (i__29088__auto___39893 + (1));
i__29088__auto___39893 = G__39894;
continue;
} else {
}
break;
}

var G__39891 = args39889.length;
switch (G__39891) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39889.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29094__auto__ = [];
var len__29087__auto___39900 = arguments.length;
var i__29088__auto___39901 = (0);
while(true){
if((i__29088__auto___39901 < len__29087__auto___39900)){
args__29094__auto__.push((arguments[i__29088__auto___39901]));

var G__39902 = (i__29088__auto___39901 + (1));
i__29088__auto___39901 = G__39902;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39897){
var map__39898 = p__39897;
var map__39898__$1 = ((((!((map__39898 == null)))?((((map__39898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39898):map__39898);
var opts = map__39898__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39896){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39896));
});


//# sourceMappingURL=client.js.map