(ns rente.client.views
  (:require [reagent.core :as r]
            [rente.client.ws :as socket]
            [taoensso.sente :as sente]))

;; States
(defonce messages (r/atom (sorted-map)))

(defonce counter (r/atom 0))

(defonce active-gang (r/atom nil))

(defonce gangs (r/atom (sorted-map)))

(defonce active-thread (r/atom nil))

(defonce threads (r/atom (sorted-map)))

;;;;;;;;;;;;
;; States ;;
;;;;;;;;;;;;


(defn new-message [content]
  (let [timestamp (.getTime (js/Date.))]
    {:thread-id 42 :content content :timestamp timestamp}))

(defn add-message! [message]
  (swap! messages assoc (:timestamp message) message))

; this function could be improved with assoc-in
(defn update-message! [message]
  (swap! messages dissoc (:client-timestamp message))
  (add-message! message)
  (js/console.log messages))

(defn post-message! [value]
  (when-not (or (= nil @value) (= "" @value) (clojure.string/blank? @value))
    (let [content (clojure.string/trim @value)
          message (new-message content)
          timestamp (:timestamp message)
          callback (fn [edn-reply]
                    (when-not (sente/cb-success? edn-reply) ; Checks for :chsk/closed, :chsk/timeout, :chsk/error
                      (update-message! edn-reply)))] ; edn reply contains the full message response + client-timestamp 
      (add-message! message)
      (socket/post-message! message callback))
      (reset! value "")))

(def initial-focus-wrapper
  (with-meta identity
    {:component-did-mount #(.focus (r/dom-node %))}))

(defn form-input [value]
  (fn []
    [initial-focus-wrapper
      [:input.form-input
        {:type "text"
         :value @value
         :placeholder "new message"
         :autofocus "autofocus"
         :on-change #(reset! value (-> % .-target .-value))
         :on-key-down #(case (.-which %)
                               13 (post-message! value)
                               nil)}]]))

(defn form-button [input]
  [:input.form-button {:type "button" :value "  ➤  " :on-click #(post-message! input)}])

(defn form []
  (let [input (r/atom "")]
    (fn []
      [:div.form
        [form-input input]
        [form-button input]])))

(defn self-message-element [message]
  [:li.self
   [:div.avatar
    [:img {:src "https://lh6.googleusercontent.com/-uNweYsvOk5M/AAAAAAAAAAI/AAAAAAAAA1s/cfG2h-9woZs/photo.jpg?sz=64"}]]
   [:div.message 
    [:p (:content message)]
    [:time "Emrehan • 10min"]]])

(defn other-message-element [message]
  [:li.other
   [:div.avatar
    [:img {:src "https://lh6.googleusercontent.com/-uNweYsvOk5M/AAAAAAAAAAI/AAAAAAAAA1s/cfG2h-9woZs/photo.jpg?sz=64"}]]
   [:div.message 
    [:p (:content message)]
    [:time "Emrehan • 10min"]]])


(defn messages-component [data]
  [:div.messages-component
   [:ul.discussion
    (for [message @messages]
      ^{:key (first message)} [other-message-element (second message)])]
   [form]])

(defn card-element [{:keys [img title] :as m}]
  (js/console.log "m is" m)
  (js/console.log "img is" img)
  (js/console.log "title is" title)
  [:li.card
    (when img
      [:img {:src img}])
    [:h2 title]])

; experimental
(defn- image [n] (str "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image" n ".jpg"))

; experimental
(defn- populate-gangs []
  (swap! gangs assoc 1 {:img (image 1) :title "Gang of bastards!"})
  (swap! gangs assoc 2 {:img (image 2) :title "Such a cool class"}))

; experimental
(defn- populate-threads []
  (swap! threads assoc 1 {:img (image 5) :title "Thread number one"})
  (swap! threads assoc 2 {:img (image 4) :title "The best cat video"}))

(defn new-gang []
  (js/console.log "going to create a new gang")
  (populate-gangs))

(defn new-thread []
  (js/console.log "going to create a new thread")
  (populate-threads))

(defn gangs-component []
  [:div.gangs-component  
    [:ul.gangs-component 
     (for [[timestamp data] @gangs]
       ^{:key timestamp} [card-element data])]
    [:input.create-gang-button {:type "button" :value "Create a new gang" :on-click new-gang}]])

(defn threads-component []
  [:div.threads-component  
    [:ul.threads-component 
     (for [[timestamp data] @threads]
       ^{:key timestamp} [card-element data])]
    [:input.create-thread-button {:type "button" :value "Create a new thread" :on-click new-thread}]])

(defn main [data]
  [:div.app
    [:header.header "GANG"]
    [:div.main-container
      [gangs-component]
      [threads-component]
      [messages-component data]]])

