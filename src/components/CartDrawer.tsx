import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col"
            style={{ boxShadow: "-4px 0 20px rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-center justify-between p-6" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08)" }}>
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-mono text-sm font-bold uppercase tracking-tight">
                  Cart ({totalItems})
                </span>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-1 transition-transform active:scale-90">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 mb-4" strokeWidth={1} />
                  <p className="font-mono text-sm uppercase tracking-widest">Cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={`${item.product.id}-${item.size}-${item.color}`}
                        layout
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-24 object-cover rounded-sm bg-secondary"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-mono text-xs font-bold uppercase tracking-tight truncate">
                            {item.product.name}
                          </p>
                          <p className="technical-label mt-1">
                            Size: {item.size} · {item.color}
                          </p>
                          <p className="price-display text-sm mt-1">GH₵ {item.product.price}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center border rounded-sm transition-colors hover:bg-secondary"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs tabular-nums">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center border rounded-sm transition-colors hover:bg-secondary"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => removeItem(item.product.id, item.size, item.color)}
                              className="ml-auto technical-label hover:text-foreground transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6" style={{ boxShadow: "0 -1px 0 0 rgba(0,0,0,0.08)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="technical-label">Total</span>
                  <span className="font-mono text-lg font-bold tabular-nums">GH₵ {totalPrice}</span>
                </div>
                <button className="w-full h-12 bg-foreground text-background font-mono text-sm font-bold uppercase tracking-tight rounded-sm transition-colors hover:bg-primary active:scale-[0.98]">
                  Checkout
                </button>
                <p className="technical-label text-center mt-3">Free delivery in Accra</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
