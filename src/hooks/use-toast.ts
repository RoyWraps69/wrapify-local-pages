
import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast";
import { useToast as useToastPrimitive } from "@/components/ui/use-toast";

type ToastOptions = Omit<ToastProps, "id"> & {
  action?: ToastActionElement;
};

export function useToast() {
  return useToastPrimitive();
}

export const toast = {
  ...useToastPrimitive().toast,
  // Add custom toast variants if needed
  success: (options: ToastOptions) => {
    return useToastPrimitive().toast({
      ...options,
      variant: "success",
    });
  },
  error: (options: ToastOptions) => {
    return useToastPrimitive().toast({
      ...options,
      variant: "destructive",
    });
  },
  warning: (options: ToastOptions) => {
    return useToastPrimitive().toast({
      ...options,
      variant: "warning",
    });
  },
  info: (options: ToastOptions) => {
    return useToastPrimitive().toast({
      ...options,
    });
  },
};
