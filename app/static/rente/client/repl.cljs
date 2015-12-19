(ns rente.client.repl
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [rente.client.ws :as ws]
              [weasel.repl :as repl]))

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))
