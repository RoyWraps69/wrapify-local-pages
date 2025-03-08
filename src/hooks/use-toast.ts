
import { useState, useEffect } from "react";
import { toast as sonnerToast } from "sonner";

// Define toast types for consistency
export type ToastProps = {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

// UseToast hook for more controlled toast usage
export function useToast() {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);

  const toast = ({ title, description, action, variant = "default" }: ToastProps) => {
    const id = Date.now().toString();
    const newToast = { id, title, description, action, variant };
    setToasts((currentToasts) => [...currentToasts, newToast]);
    return id;
  };

  const dismissToast = (id: string) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  };

  return { toast, dismissToast, toasts };
}

// Simplified toast function for direct usage
export const toast = (props: ToastProps) => {
  sonnerToast(props.title || "", {
    description: props.description,
    action: props.action,
    className: props.variant === "destructive" ? "bg-red-100" : undefined,
  });
};

// Custom toast with additional options
export const customToast = {
  success: (message: string) => {
    sonnerToast.success(message);
  },
  error: (message: string) => {
    sonnerToast.error(message);
  },
  info: (message: string) => {
    sonnerToast.info(message);
  },
  warning: (message: string) => {
    sonnerToast.warning(message);
  }
};
