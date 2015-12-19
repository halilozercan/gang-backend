// Compiled by ClojureScript 1.7.189 {}
goog.provide('rente.client.repl');
goog.require('cljs.core');
goog.require('rente.client.ws');
goog.require('weasel.repl');
if(cljs.core.truth_(weasel.repl.alive_QMARK_.call(null))){
} else {
weasel.repl.connect.call(null,"ws://localhost:9001");
}

//# sourceMappingURL=repl.js.map