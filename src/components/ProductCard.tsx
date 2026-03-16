import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div {...fadeInUp}>
      <Link to={`/product/${product.id}`} className="group block product-card rounded-sm overflow-hidden">
        <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            loading="lazy"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm">
              New
            </span>
          )}
        </div>
        <div className="p-4">
          <p className="technical-label mb-1">{product.specs}</p>
          <h3 className="font-mono text-sm font-bold uppercase tracking-tight">{product.name}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="price-display text-sm">GH₵ {product.price}</span>
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color) => (
                <span
                  key={color}
                  className="w-3 h-3 rounded-full border border-foreground/10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
