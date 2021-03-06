(ns taoensso.sente.interfaces
  "Experimental - subject to change!
  Public interfaces / extension points."
                                             
         (:require [taoensso.encore :as enc]))

;;;; Network channels

     
                                 
                                                                            
                               
                                                                       
                                                                     
                                          

                                                    
                                              

     
                                        
                                                                               
                                             
                                                                
                                                                                
                                                                         
                                          

                                                                 
                                                                              
                              
                                                                           
                                                                 
                                                                            
                                                                                     

;;;; Packers

(defprotocol IPacker
  "Extension pt. for client<->server comms data un/packers:
  arbitrary Clojure data <-> serialized strings."
  (pack   [_ x])
  (unpack [_ x]))

(deftype EdnPacker []
  IPacker
  (pack   [_ x] (enc/pr-edn   x))
  (unpack [_ s] (enc/read-edn s)))

(def     edn-packer "Default Edn packer." (->EdnPacker))
(defn coerce-packer [x] (if (= x :edn) edn-packer
                          (do (assert (satisfies? IPacker x)) x)))

;;;;;;;;;;;; This file autogenerated from src/taoensso/sente/interfaces.cljx
