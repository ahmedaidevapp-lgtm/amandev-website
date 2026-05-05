import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const homeLinks = [
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          to="/"
          className="font-mono text-sm font-semibold tracking-widest text-primary uppercase"
        >
          amandev <span className="text-foreground">technologies</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {homeLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/app-development"
            className={`text-sm transition-colors duration-300 ${
              location.pathname === "/app-development"
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            App Development
          </Link>
          <a
            href={location.pathname === "/app-development" ? "#cta" : "#contact"}
            className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Book Discovery Call
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border bg-background px-6 py-4 space-y-4"
        >
          {homeLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/app-development"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            App Development
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;