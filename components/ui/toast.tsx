"use client";

import { useState, useEffect, ReactNode } from "react";

type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  children: ReactNode;
  duration?: number;
  onClose?: () => void;
}

const variantStyles: Record<ToastVariant, string> = {
  success: "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950",
  error: "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950",
  warning: "border-yellow-300 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
  info: "border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
};

const iconMap: Record<ToastVariant, ReactNode> = {
  success: (
    <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  error: (
    <svg className="h-5 w-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  info: (
    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 17.25h-.007v-.008h.007v.008zm-.009-4.5h.008v-6.75h-.008v6.75zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function Toast({ variant = "info", title, children, duration = 5000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border p-4 shadow-sm ${variantStyles[variant]}`}
      role="alert"
    >
      <span className="shrink-0">{iconMap[variant]}</span>
      <div className="flex-1">
        {title && (
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </p>
        )}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{children}</p>
      </div>
      <button
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
        className="shrink-0 rounded-md p-0.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
