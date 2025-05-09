import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

export type ToastProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Root
>;
export type ToastActionElement = React.ReactElement<
  typeof ToastPrimitives.Action
>;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
      className
    )}
    {...props}
  />
));
Toast.displayName = ToastPrimitives.Root.displayName;

export { Toast };
