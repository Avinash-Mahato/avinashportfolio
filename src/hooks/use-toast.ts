import { useState } from 'react';

interface ToastOptions {
  title: string;
  description?: string;
  duration?: number;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastOptions | null>(null);

  const showToast = (options: ToastOptions) => {
    setToast(options);
    setTimeout(() => {
      setToast(null);
    }, options.duration || 3000);
  };

  return {
    toast,
    showToast
  };
}; 