import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "font-lexend cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xl font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "click border-2 rounded-2xl border-secondary-light shadow-xs text-white font-bold hover:bg-secondary/20",
        primary:
          "click bg-gradient-to-b from-[#4DE4B7] to-[#07CAD1] text-white rounded-2xl font-bold min-w-40",
        secondary:
          "click bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "click hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        card_white:
          "bg-button-card border-2 border-[#0D7AC1] text-[#0D7AC1] rounded-lg hover:scale-105 hover:shadow-lg active:scale-95 transition-all",
        card_blue:
          "bg-[#0D7AC1] text-white rounded-lg hover:scale-105 hover:shadow-lg active:scale-95 transition-all"
      },
      size: {
        default: "h-9 px-8 p-4 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({size, variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
