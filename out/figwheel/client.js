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
var pred__22206 = cljs.core._EQ_;
var expr__22207 = (function (){var or__18464__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__22206.call(null,"true",expr__22207))){
return true;
} else {
if(cljs.core.truth_(pred__22206.call(null,"false",expr__22207))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22207)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22209__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22210__i = 0, G__22210__a = new Array(arguments.length -  0);
while (G__22210__i < G__22210__a.length) {G__22210__a[G__22210__i] = arguments[G__22210__i + 0]; ++G__22210__i;}
  args = new cljs.core.IndexedSeq(G__22210__a,0);
} 
return G__22209__delegate.call(this,args);};
G__22209.cljs$lang$maxFixedArity = 0;
G__22209.cljs$lang$applyTo = (function (arglist__22211){
var args = cljs.core.seq(arglist__22211);
return G__22209__delegate(args);
});
G__22209.cljs$core$IFn$_invoke$arity$variadic = G__22209__delegate;
return G__22209;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22212){
var map__22215 = p__22212;
var map__22215__$1 = ((((!((map__22215 == null)))?((((map__22215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22215):map__22215);
var message = cljs.core.get.call(null,map__22215__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22215__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18464__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18452__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18452__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18452__auto__;
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
var c__20519__auto___22377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___22377,ch){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___22377,ch){
return (function (state_22346){
var state_val_22347 = (state_22346[(1)]);
if((state_val_22347 === (7))){
var inst_22342 = (state_22346[(2)]);
var state_22346__$1 = state_22346;
var statearr_22348_22378 = state_22346__$1;
(statearr_22348_22378[(2)] = inst_22342);

(statearr_22348_22378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (1))){
var state_22346__$1 = state_22346;
var statearr_22349_22379 = state_22346__$1;
(statearr_22349_22379[(2)] = null);

(statearr_22349_22379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (4))){
var inst_22299 = (state_22346[(7)]);
var inst_22299__$1 = (state_22346[(2)]);
var state_22346__$1 = (function (){var statearr_22350 = state_22346;
(statearr_22350[(7)] = inst_22299__$1);

return statearr_22350;
})();
if(cljs.core.truth_(inst_22299__$1)){
var statearr_22351_22380 = state_22346__$1;
(statearr_22351_22380[(1)] = (5));

} else {
var statearr_22352_22381 = state_22346__$1;
(statearr_22352_22381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (15))){
var inst_22306 = (state_22346[(8)]);
var inst_22321 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22306);
var inst_22322 = cljs.core.first.call(null,inst_22321);
var inst_22323 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22322);
var inst_22324 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_22323)].join('');
var inst_22325 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_22324);
var state_22346__$1 = state_22346;
var statearr_22353_22382 = state_22346__$1;
(statearr_22353_22382[(2)] = inst_22325);

(statearr_22353_22382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (13))){
var inst_22330 = (state_22346[(2)]);
var state_22346__$1 = state_22346;
var statearr_22354_22383 = state_22346__$1;
(statearr_22354_22383[(2)] = inst_22330);

(statearr_22354_22383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (6))){
var state_22346__$1 = state_22346;
var statearr_22355_22384 = state_22346__$1;
(statearr_22355_22384[(2)] = null);

(statearr_22355_22384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (17))){
var inst_22328 = (state_22346[(2)]);
var state_22346__$1 = state_22346;
var statearr_22356_22385 = state_22346__$1;
(statearr_22356_22385[(2)] = inst_22328);

(statearr_22356_22385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (3))){
var inst_22344 = (state_22346[(2)]);
var state_22346__$1 = state_22346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22346__$1,inst_22344);
} else {
if((state_val_22347 === (12))){
var inst_22305 = (state_22346[(9)]);
var inst_22319 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22305,opts);
var state_22346__$1 = state_22346;
if(cljs.core.truth_(inst_22319)){
var statearr_22357_22386 = state_22346__$1;
(statearr_22357_22386[(1)] = (15));

} else {
var statearr_22358_22387 = state_22346__$1;
(statearr_22358_22387[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (2))){
var state_22346__$1 = state_22346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22346__$1,(4),ch);
} else {
if((state_val_22347 === (11))){
var inst_22306 = (state_22346[(8)]);
var inst_22311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22312 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22306);
var inst_22313 = cljs.core.async.timeout.call(null,(1000));
var inst_22314 = [inst_22312,inst_22313];
var inst_22315 = (new cljs.core.PersistentVector(null,2,(5),inst_22311,inst_22314,null));
var state_22346__$1 = state_22346;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22346__$1,(14),inst_22315);
} else {
if((state_val_22347 === (9))){
var inst_22306 = (state_22346[(8)]);
var inst_22332 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_22333 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22306);
var inst_22334 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22333);
var inst_22335 = [cljs.core.str("Not loading: "),cljs.core.str(inst_22334)].join('');
var inst_22336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_22335);
var state_22346__$1 = (function (){var statearr_22359 = state_22346;
(statearr_22359[(10)] = inst_22332);

return statearr_22359;
})();
var statearr_22360_22388 = state_22346__$1;
(statearr_22360_22388[(2)] = inst_22336);

(statearr_22360_22388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (5))){
var inst_22299 = (state_22346[(7)]);
var inst_22301 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22302 = (new cljs.core.PersistentArrayMap(null,2,inst_22301,null));
var inst_22303 = (new cljs.core.PersistentHashSet(null,inst_22302,null));
var inst_22304 = figwheel.client.focus_msgs.call(null,inst_22303,inst_22299);
var inst_22305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22304);
var inst_22306 = cljs.core.first.call(null,inst_22304);
var inst_22307 = figwheel.client.autoload_QMARK_.call(null);
var state_22346__$1 = (function (){var statearr_22361 = state_22346;
(statearr_22361[(9)] = inst_22305);

(statearr_22361[(8)] = inst_22306);

return statearr_22361;
})();
if(cljs.core.truth_(inst_22307)){
var statearr_22362_22389 = state_22346__$1;
(statearr_22362_22389[(1)] = (8));

} else {
var statearr_22363_22390 = state_22346__$1;
(statearr_22363_22390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (14))){
var inst_22317 = (state_22346[(2)]);
var state_22346__$1 = state_22346;
var statearr_22364_22391 = state_22346__$1;
(statearr_22364_22391[(2)] = inst_22317);

(statearr_22364_22391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (16))){
var state_22346__$1 = state_22346;
var statearr_22365_22392 = state_22346__$1;
(statearr_22365_22392[(2)] = null);

(statearr_22365_22392[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (10))){
var inst_22338 = (state_22346[(2)]);
var state_22346__$1 = (function (){var statearr_22366 = state_22346;
(statearr_22366[(11)] = inst_22338);

return statearr_22366;
})();
var statearr_22367_22393 = state_22346__$1;
(statearr_22367_22393[(2)] = null);

(statearr_22367_22393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (8))){
var inst_22305 = (state_22346[(9)]);
var inst_22309 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22305,opts);
var state_22346__$1 = state_22346;
if(cljs.core.truth_(inst_22309)){
var statearr_22368_22394 = state_22346__$1;
(statearr_22368_22394[(1)] = (11));

} else {
var statearr_22369_22395 = state_22346__$1;
(statearr_22369_22395[(1)] = (12));

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
});})(c__20519__auto___22377,ch))
;
return ((function (switch__20498__auto__,c__20519__auto___22377,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____0 = (function (){
var statearr_22373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22373[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__);

(statearr_22373[(1)] = (1));

return statearr_22373;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____1 = (function (state_22346){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_22346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e22374){if((e22374 instanceof Object)){
var ex__20502__auto__ = e22374;
var statearr_22375_22396 = state_22346;
(statearr_22375_22396[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22397 = state_22346;
state_22346 = G__22397;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__ = function(state_22346){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____1.call(this,state_22346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___22377,ch))
})();
var state__20521__auto__ = (function (){var statearr_22376 = f__20520__auto__.call(null);
(statearr_22376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___22377);

return statearr_22376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___22377,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22398_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22398_SHARP_));
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
var base_path_22405 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22405){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22403 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22404 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22403,_STAR_print_newline_STAR_22404,base_path_22405){
return (function() { 
var G__22406__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22407__i = 0, G__22407__a = new Array(arguments.length -  0);
while (G__22407__i < G__22407__a.length) {G__22407__a[G__22407__i] = arguments[G__22407__i + 0]; ++G__22407__i;}
  args = new cljs.core.IndexedSeq(G__22407__a,0);
} 
return G__22406__delegate.call(this,args);};
G__22406.cljs$lang$maxFixedArity = 0;
G__22406.cljs$lang$applyTo = (function (arglist__22408){
var args = cljs.core.seq(arglist__22408);
return G__22406__delegate(args);
});
G__22406.cljs$core$IFn$_invoke$arity$variadic = G__22406__delegate;
return G__22406;
})()
;})(_STAR_print_fn_STAR_22403,_STAR_print_newline_STAR_22404,base_path_22405))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22404;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22403;
}}catch (e22402){if((e22402 instanceof Error)){
var e = e22402;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22405], null));
} else {
var e = e22402;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22405))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22409){
var map__22418 = p__22409;
var map__22418__$1 = ((((!((map__22418 == null)))?((((map__22418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22418):map__22418);
var opts = map__22418__$1;
var build_id = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22418,map__22418__$1,opts,build_id){
return (function (p__22420){
var vec__22421 = p__22420;
var seq__22422 = cljs.core.seq.call(null,vec__22421);
var first__22423 = cljs.core.first.call(null,seq__22422);
var seq__22422__$1 = cljs.core.next.call(null,seq__22422);
var map__22424 = first__22423;
var map__22424__$1 = ((((!((map__22424 == null)))?((((map__22424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22424):map__22424);
var msg = map__22424__$1;
var msg_name = cljs.core.get.call(null,map__22424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22422__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22421,seq__22422,first__22423,seq__22422__$1,map__22424,map__22424__$1,msg,msg_name,_,map__22418,map__22418__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22421,seq__22422,first__22423,seq__22422__$1,map__22424,map__22424__$1,msg,msg_name,_,map__22418,map__22418__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22418,map__22418__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22432){
var vec__22433 = p__22432;
var seq__22434 = cljs.core.seq.call(null,vec__22433);
var first__22435 = cljs.core.first.call(null,seq__22434);
var seq__22434__$1 = cljs.core.next.call(null,seq__22434);
var map__22436 = first__22435;
var map__22436__$1 = ((((!((map__22436 == null)))?((((map__22436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22436):map__22436);
var msg = map__22436__$1;
var msg_name = cljs.core.get.call(null,map__22436__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22434__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22438){
var map__22450 = p__22438;
var map__22450__$1 = ((((!((map__22450 == null)))?((((map__22450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22450):map__22450);
var on_compile_warning = cljs.core.get.call(null,map__22450__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22450__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22450,map__22450__$1,on_compile_warning,on_compile_fail){
return (function (p__22452){
var vec__22453 = p__22452;
var seq__22454 = cljs.core.seq.call(null,vec__22453);
var first__22455 = cljs.core.first.call(null,seq__22454);
var seq__22454__$1 = cljs.core.next.call(null,seq__22454);
var map__22456 = first__22455;
var map__22456__$1 = ((((!((map__22456 == null)))?((((map__22456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22456):map__22456);
var msg = map__22456__$1;
var msg_name = cljs.core.get.call(null,map__22456__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22454__$1;
var pred__22458 = cljs.core._EQ_;
var expr__22459 = msg_name;
if(cljs.core.truth_(pred__22458.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22459))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22458.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22459))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22450,map__22450__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__,msg_hist,msg_names,msg){
return (function (state_22675){
var state_val_22676 = (state_22675[(1)]);
if((state_val_22676 === (7))){
var inst_22599 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22599)){
var statearr_22677_22723 = state_22675__$1;
(statearr_22677_22723[(1)] = (8));

} else {
var statearr_22678_22724 = state_22675__$1;
(statearr_22678_22724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (20))){
var inst_22669 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22679_22725 = state_22675__$1;
(statearr_22679_22725[(2)] = inst_22669);

(statearr_22679_22725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (27))){
var inst_22665 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22680_22726 = state_22675__$1;
(statearr_22680_22726[(2)] = inst_22665);

(statearr_22680_22726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (1))){
var inst_22592 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22592)){
var statearr_22681_22727 = state_22675__$1;
(statearr_22681_22727[(1)] = (2));

} else {
var statearr_22682_22728 = state_22675__$1;
(statearr_22682_22728[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (24))){
var inst_22667 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22683_22729 = state_22675__$1;
(statearr_22683_22729[(2)] = inst_22667);

(statearr_22683_22729[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (4))){
var inst_22673 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22675__$1,inst_22673);
} else {
if((state_val_22676 === (15))){
var inst_22671 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22684_22730 = state_22675__$1;
(statearr_22684_22730[(2)] = inst_22671);

(statearr_22684_22730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (21))){
var inst_22630 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22685_22731 = state_22675__$1;
(statearr_22685_22731[(2)] = inst_22630);

(statearr_22685_22731[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (31))){
var inst_22654 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22654)){
var statearr_22686_22732 = state_22675__$1;
(statearr_22686_22732[(1)] = (34));

} else {
var statearr_22687_22733 = state_22675__$1;
(statearr_22687_22733[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (32))){
var inst_22663 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22688_22734 = state_22675__$1;
(statearr_22688_22734[(2)] = inst_22663);

(statearr_22688_22734[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (33))){
var inst_22652 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22689_22735 = state_22675__$1;
(statearr_22689_22735[(2)] = inst_22652);

(statearr_22689_22735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (13))){
var inst_22613 = figwheel.client.heads_up.clear.call(null);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(16),inst_22613);
} else {
if((state_val_22676 === (22))){
var inst_22634 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22635 = figwheel.client.heads_up.append_message.call(null,inst_22634);
var state_22675__$1 = state_22675;
var statearr_22690_22736 = state_22675__$1;
(statearr_22690_22736[(2)] = inst_22635);

(statearr_22690_22736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (36))){
var inst_22661 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22691_22737 = state_22675__$1;
(statearr_22691_22737[(2)] = inst_22661);

(statearr_22691_22737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (29))){
var inst_22645 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22692_22738 = state_22675__$1;
(statearr_22692_22738[(2)] = inst_22645);

(statearr_22692_22738[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (6))){
var inst_22594 = (state_22675[(7)]);
var state_22675__$1 = state_22675;
var statearr_22693_22739 = state_22675__$1;
(statearr_22693_22739[(2)] = inst_22594);

(statearr_22693_22739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (28))){
var inst_22641 = (state_22675[(2)]);
var inst_22642 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22643 = figwheel.client.heads_up.display_warning.call(null,inst_22642);
var state_22675__$1 = (function (){var statearr_22694 = state_22675;
(statearr_22694[(8)] = inst_22641);

return statearr_22694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(29),inst_22643);
} else {
if((state_val_22676 === (25))){
var inst_22639 = figwheel.client.heads_up.clear.call(null);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(28),inst_22639);
} else {
if((state_val_22676 === (34))){
var inst_22656 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(37),inst_22656);
} else {
if((state_val_22676 === (17))){
var inst_22621 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22695_22740 = state_22675__$1;
(statearr_22695_22740[(2)] = inst_22621);

(statearr_22695_22740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (3))){
var inst_22611 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22611)){
var statearr_22696_22741 = state_22675__$1;
(statearr_22696_22741[(1)] = (13));

} else {
var statearr_22697_22742 = state_22675__$1;
(statearr_22697_22742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (12))){
var inst_22607 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22698_22743 = state_22675__$1;
(statearr_22698_22743[(2)] = inst_22607);

(statearr_22698_22743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (2))){
var inst_22594 = (state_22675[(7)]);
var inst_22594__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22675__$1 = (function (){var statearr_22699 = state_22675;
(statearr_22699[(7)] = inst_22594__$1);

return statearr_22699;
})();
if(cljs.core.truth_(inst_22594__$1)){
var statearr_22700_22744 = state_22675__$1;
(statearr_22700_22744[(1)] = (5));

} else {
var statearr_22701_22745 = state_22675__$1;
(statearr_22701_22745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (23))){
var inst_22637 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22637)){
var statearr_22702_22746 = state_22675__$1;
(statearr_22702_22746[(1)] = (25));

} else {
var statearr_22703_22747 = state_22675__$1;
(statearr_22703_22747[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (35))){
var state_22675__$1 = state_22675;
var statearr_22704_22748 = state_22675__$1;
(statearr_22704_22748[(2)] = null);

(statearr_22704_22748[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (19))){
var inst_22632 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22632)){
var statearr_22705_22749 = state_22675__$1;
(statearr_22705_22749[(1)] = (22));

} else {
var statearr_22706_22750 = state_22675__$1;
(statearr_22706_22750[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (11))){
var inst_22603 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22707_22751 = state_22675__$1;
(statearr_22707_22751[(2)] = inst_22603);

(statearr_22707_22751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (9))){
var inst_22605 = figwheel.client.heads_up.clear.call(null);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(12),inst_22605);
} else {
if((state_val_22676 === (5))){
var inst_22596 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22675__$1 = state_22675;
var statearr_22708_22752 = state_22675__$1;
(statearr_22708_22752[(2)] = inst_22596);

(statearr_22708_22752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (14))){
var inst_22623 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22623)){
var statearr_22709_22753 = state_22675__$1;
(statearr_22709_22753[(1)] = (18));

} else {
var statearr_22710_22754 = state_22675__$1;
(statearr_22710_22754[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (26))){
var inst_22647 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22647)){
var statearr_22711_22755 = state_22675__$1;
(statearr_22711_22755[(1)] = (30));

} else {
var statearr_22712_22756 = state_22675__$1;
(statearr_22712_22756[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (16))){
var inst_22615 = (state_22675[(2)]);
var inst_22616 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22617 = figwheel.client.format_messages.call(null,inst_22616);
var inst_22618 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22619 = figwheel.client.heads_up.display_error.call(null,inst_22617,inst_22618);
var state_22675__$1 = (function (){var statearr_22713 = state_22675;
(statearr_22713[(9)] = inst_22615);

return statearr_22713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(17),inst_22619);
} else {
if((state_val_22676 === (30))){
var inst_22649 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22650 = figwheel.client.heads_up.display_warning.call(null,inst_22649);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(33),inst_22650);
} else {
if((state_val_22676 === (10))){
var inst_22609 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22714_22757 = state_22675__$1;
(statearr_22714_22757[(2)] = inst_22609);

(statearr_22714_22757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (18))){
var inst_22625 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22626 = figwheel.client.format_messages.call(null,inst_22625);
var inst_22627 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22628 = figwheel.client.heads_up.display_error.call(null,inst_22626,inst_22627);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(21),inst_22628);
} else {
if((state_val_22676 === (37))){
var inst_22658 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22715_22758 = state_22675__$1;
(statearr_22715_22758[(2)] = inst_22658);

(statearr_22715_22758[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (8))){
var inst_22601 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(11),inst_22601);
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
});})(c__20519__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20498__auto__,c__20519__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____0 = (function (){
var statearr_22719 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22719[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__);

(statearr_22719[(1)] = (1));

return statearr_22719;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____1 = (function (state_22675){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_22675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e22720){if((e22720 instanceof Object)){
var ex__20502__auto__ = e22720;
var statearr_22721_22759 = state_22675;
(statearr_22721_22759[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22760 = state_22675;
state_22675 = G__22760;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__ = function(state_22675){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____1.call(this,state_22675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__,msg_hist,msg_names,msg))
})();
var state__20521__auto__ = (function (){var statearr_22722 = f__20520__auto__.call(null);
(statearr_22722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_22722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__,msg_hist,msg_names,msg))
);

return c__20519__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20519__auto___22823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___22823,ch){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___22823,ch){
return (function (state_22806){
var state_val_22807 = (state_22806[(1)]);
if((state_val_22807 === (1))){
var state_22806__$1 = state_22806;
var statearr_22808_22824 = state_22806__$1;
(statearr_22808_22824[(2)] = null);

(statearr_22808_22824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (2))){
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22806__$1,(4),ch);
} else {
if((state_val_22807 === (3))){
var inst_22804 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22806__$1,inst_22804);
} else {
if((state_val_22807 === (4))){
var inst_22794 = (state_22806[(7)]);
var inst_22794__$1 = (state_22806[(2)]);
var state_22806__$1 = (function (){var statearr_22809 = state_22806;
(statearr_22809[(7)] = inst_22794__$1);

return statearr_22809;
})();
if(cljs.core.truth_(inst_22794__$1)){
var statearr_22810_22825 = state_22806__$1;
(statearr_22810_22825[(1)] = (5));

} else {
var statearr_22811_22826 = state_22806__$1;
(statearr_22811_22826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (5))){
var inst_22794 = (state_22806[(7)]);
var inst_22796 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22794);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22806__$1,(8),inst_22796);
} else {
if((state_val_22807 === (6))){
var state_22806__$1 = state_22806;
var statearr_22812_22827 = state_22806__$1;
(statearr_22812_22827[(2)] = null);

(statearr_22812_22827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (7))){
var inst_22802 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22813_22828 = state_22806__$1;
(statearr_22813_22828[(2)] = inst_22802);

(statearr_22813_22828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (8))){
var inst_22798 = (state_22806[(2)]);
var state_22806__$1 = (function (){var statearr_22814 = state_22806;
(statearr_22814[(8)] = inst_22798);

return statearr_22814;
})();
var statearr_22815_22829 = state_22806__$1;
(statearr_22815_22829[(2)] = null);

(statearr_22815_22829[(1)] = (2));


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
});})(c__20519__auto___22823,ch))
;
return ((function (switch__20498__auto__,c__20519__auto___22823,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20499__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20499__auto____0 = (function (){
var statearr_22819 = [null,null,null,null,null,null,null,null,null];
(statearr_22819[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20499__auto__);

(statearr_22819[(1)] = (1));

return statearr_22819;
});
var figwheel$client$heads_up_plugin_$_state_machine__20499__auto____1 = (function (state_22806){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_22806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e22820){if((e22820 instanceof Object)){
var ex__20502__auto__ = e22820;
var statearr_22821_22830 = state_22806;
(statearr_22821_22830[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22831 = state_22806;
state_22806 = G__22831;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20499__auto__ = function(state_22806){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20499__auto____1.call(this,state_22806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20499__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20499__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___22823,ch))
})();
var state__20521__auto__ = (function (){var statearr_22822 = f__20520__auto__.call(null);
(statearr_22822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___22823);

return statearr_22822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___22823,ch))
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
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_22852){
var state_val_22853 = (state_22852[(1)]);
if((state_val_22853 === (1))){
var inst_22847 = cljs.core.async.timeout.call(null,(3000));
var state_22852__$1 = state_22852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22852__$1,(2),inst_22847);
} else {
if((state_val_22853 === (2))){
var inst_22849 = (state_22852[(2)]);
var inst_22850 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22852__$1 = (function (){var statearr_22854 = state_22852;
(statearr_22854[(7)] = inst_22849);

return statearr_22854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22852__$1,inst_22850);
} else {
return null;
}
}
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____0 = (function (){
var statearr_22858 = [null,null,null,null,null,null,null,null];
(statearr_22858[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__);

(statearr_22858[(1)] = (1));

return statearr_22858;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____1 = (function (state_22852){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_22852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e22859){if((e22859 instanceof Object)){
var ex__20502__auto__ = e22859;
var statearr_22860_22862 = state_22852;
(statearr_22860_22862[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22863 = state_22852;
state_22852 = G__22863;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__ = function(state_22852){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____1.call(this,state_22852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_22861 = f__20520__auto__.call(null);
(statearr_22861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_22861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22864){
var map__22871 = p__22864;
var map__22871__$1 = ((((!((map__22871 == null)))?((((map__22871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22871):map__22871);
var ed = map__22871__$1;
var formatted_exception = cljs.core.get.call(null,map__22871__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22871__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22871__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22873_22877 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22874_22878 = null;
var count__22875_22879 = (0);
var i__22876_22880 = (0);
while(true){
if((i__22876_22880 < count__22875_22879)){
var msg_22881 = cljs.core._nth.call(null,chunk__22874_22878,i__22876_22880);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22881);

var G__22882 = seq__22873_22877;
var G__22883 = chunk__22874_22878;
var G__22884 = count__22875_22879;
var G__22885 = (i__22876_22880 + (1));
seq__22873_22877 = G__22882;
chunk__22874_22878 = G__22883;
count__22875_22879 = G__22884;
i__22876_22880 = G__22885;
continue;
} else {
var temp__4657__auto___22886 = cljs.core.seq.call(null,seq__22873_22877);
if(temp__4657__auto___22886){
var seq__22873_22887__$1 = temp__4657__auto___22886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22873_22887__$1)){
var c__19275__auto___22888 = cljs.core.chunk_first.call(null,seq__22873_22887__$1);
var G__22889 = cljs.core.chunk_rest.call(null,seq__22873_22887__$1);
var G__22890 = c__19275__auto___22888;
var G__22891 = cljs.core.count.call(null,c__19275__auto___22888);
var G__22892 = (0);
seq__22873_22877 = G__22889;
chunk__22874_22878 = G__22890;
count__22875_22879 = G__22891;
i__22876_22880 = G__22892;
continue;
} else {
var msg_22893 = cljs.core.first.call(null,seq__22873_22887__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22893);

var G__22894 = cljs.core.next.call(null,seq__22873_22887__$1);
var G__22895 = null;
var G__22896 = (0);
var G__22897 = (0);
seq__22873_22877 = G__22894;
chunk__22874_22878 = G__22895;
count__22875_22879 = G__22896;
i__22876_22880 = G__22897;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22898){
var map__22901 = p__22898;
var map__22901__$1 = ((((!((map__22901 == null)))?((((map__22901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22901):map__22901);
var w = map__22901__$1;
var message = cljs.core.get.call(null,map__22901__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18452__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18452__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18452__auto__;
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
var seq__22913 = cljs.core.seq.call(null,plugins);
var chunk__22914 = null;
var count__22915 = (0);
var i__22916 = (0);
while(true){
if((i__22916 < count__22915)){
var vec__22917 = cljs.core._nth.call(null,chunk__22914,i__22916);
var k = cljs.core.nth.call(null,vec__22917,(0),null);
var plugin = cljs.core.nth.call(null,vec__22917,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22923 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22913,chunk__22914,count__22915,i__22916,pl_22923,vec__22917,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22923.call(null,msg_hist);
});})(seq__22913,chunk__22914,count__22915,i__22916,pl_22923,vec__22917,k,plugin))
);
} else {
}

var G__22924 = seq__22913;
var G__22925 = chunk__22914;
var G__22926 = count__22915;
var G__22927 = (i__22916 + (1));
seq__22913 = G__22924;
chunk__22914 = G__22925;
count__22915 = G__22926;
i__22916 = G__22927;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22913);
if(temp__4657__auto__){
var seq__22913__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22913__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__22913__$1);
var G__22928 = cljs.core.chunk_rest.call(null,seq__22913__$1);
var G__22929 = c__19275__auto__;
var G__22930 = cljs.core.count.call(null,c__19275__auto__);
var G__22931 = (0);
seq__22913 = G__22928;
chunk__22914 = G__22929;
count__22915 = G__22930;
i__22916 = G__22931;
continue;
} else {
var vec__22920 = cljs.core.first.call(null,seq__22913__$1);
var k = cljs.core.nth.call(null,vec__22920,(0),null);
var plugin = cljs.core.nth.call(null,vec__22920,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22932 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22913,chunk__22914,count__22915,i__22916,pl_22932,vec__22920,k,plugin,seq__22913__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22932.call(null,msg_hist);
});})(seq__22913,chunk__22914,count__22915,i__22916,pl_22932,vec__22920,k,plugin,seq__22913__$1,temp__4657__auto__))
);
} else {
}

var G__22933 = cljs.core.next.call(null,seq__22913__$1);
var G__22934 = null;
var G__22935 = (0);
var G__22936 = (0);
seq__22913 = G__22933;
chunk__22914 = G__22934;
count__22915 = G__22935;
i__22916 = G__22936;
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
var args22937 = [];
var len__19539__auto___22940 = arguments.length;
var i__19540__auto___22941 = (0);
while(true){
if((i__19540__auto___22941 < len__19539__auto___22940)){
args22937.push((arguments[i__19540__auto___22941]));

var G__22942 = (i__19540__auto___22941 + (1));
i__19540__auto___22941 = G__22942;
continue;
} else {
}
break;
}

var G__22939 = args22937.length;
switch (G__22939) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22937.length)].join('')));

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
var args__19546__auto__ = [];
var len__19539__auto___22948 = arguments.length;
var i__19540__auto___22949 = (0);
while(true){
if((i__19540__auto___22949 < len__19539__auto___22948)){
args__19546__auto__.push((arguments[i__19540__auto___22949]));

var G__22950 = (i__19540__auto___22949 + (1));
i__19540__auto___22949 = G__22950;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22945){
var map__22946 = p__22945;
var map__22946__$1 = ((((!((map__22946 == null)))?((((map__22946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22946):map__22946);
var opts = map__22946__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22944){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22944));
});


//# sourceMappingURL=client.js.map