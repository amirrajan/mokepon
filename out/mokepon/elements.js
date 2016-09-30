// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.elements');
goog.require('cljs.core');
goog.require('sablono.core');
mokepon.elements.fade_in = (function mokepon$elements$fade_in(elem){
elem.style.transition = "opacity 1000ms";

elem.style._webkit_transition = "opacity 1000ms";

return elem.style.opacity = (1);
});
mokepon.elements.from_component_definition = (function mokepon$elements$from_component_definition(component,props,children){
return React.createElement(component,cljs.core.clj__GT_js.call(null,props),sablono.interpreter.interpret.call(null,children));
});
mokepon.elements.fade_in_component_definition = React.createClass({"render": (function (){
var this$ = this;
return React.createElement("div",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null)], null)),this$.props.children);
}), "componentDidMount": (function (){
var this$ = this;
var elem = this$.getDOMNode();
elem.style.opacity = (0);

return window.setTimeout(((function (elem,this$){
return (function (){
return window.requestAnimationFrame(((function (elem,this$){
return (function (){
if(cljs.core.truth_(this$.props.callback)){
window.setTimeout(this$.props.callback,(2000));
} else {
}

return mokepon.elements.fade_in.call(null,elem);
});})(elem,this$))
);
});})(elem,this$))
,(1000));
})});
mokepon.elements.todo = (function mokepon$elements$todo(){
return window.alert("todo");
});
mokepon.elements.a = (function mokepon$elements$a(text,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),[cljs.core.str("["),cljs.core.str(text),cljs.core.str("]")].join('')], null);
});
mokepon.elements.disabled_a = (function mokepon$elements$disabled_a(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.disabled","a.disabled",-1194531134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;"], null),[cljs.core.str("["),cljs.core.str(text),cljs.core.str("]")].join('')], null);
});
mokepon.elements.conditional_a = (function mokepon$elements$conditional_a(predicate,text,on_click){
if(cljs.core.truth_(predicate)){
return mokepon.elements.a.call(null,text,on_click);
} else {
return mokepon.elements.disabled_a.call(null,text);
}
});
mokepon.elements.section = (function mokepon$elements$section(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23780 = arguments.length;
var i__19540__auto___23781 = (0);
while(true){
if((i__19540__auto___23781 < len__19539__auto___23780)){
args__19546__auto__.push((arguments[i__19540__auto___23781]));

var G__23782 = (i__19540__auto___23781 + (1));
i__19540__auto___23781 = G__23782;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),elements,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
});

mokepon.elements.section.cljs$lang$maxFixedArity = (0);

mokepon.elements.section.cljs$lang$applyTo = (function (seq23779){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23779));
});

mokepon.elements.progress_bar = (function mokepon$elements$progress_bar(percentage){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px black",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"green",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(((100) * percentage)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null)], null);
});

//# sourceMappingURL=elements.js.map