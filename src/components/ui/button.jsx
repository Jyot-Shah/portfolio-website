import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * @typedef {import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
 *   variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "hero-outline" | "glass" | "accent";
 *   size?: "default" | "sm" | "lg" | "xl" | "icon";
 *   asChild?: boolean;
 * }} ButtonProps
 */
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.3)]",
      ghost: "hover:bg-muted hover:text-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      hero: "bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] hover:scale-105",
      "hero-outline": "border-2 border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:scale-105",
      glass: "bg-muted/50 backdrop-blur-sm border border-border text-foreground hover:bg-muted hover:border-primary/30",
      accent: "bg-accent text-accent-foreground hover:bg-accent/80 shadow-[0_0_30px_-5px_hsl(var(--accent)/0.3)]"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-lg px-6 text-base",
      xl: "h-14 rounded-xl px-8 text-lg",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = React.forwardRef(
/**
 * @param {ButtonProps} props
 * @param {React.ForwardedRef<HTMLButtonElement>} ref
 */
({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({
    variant,
    size,
    className
  }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
export { Button, buttonVariants };