"use client";

import { useEffect, useRef, useState } from "react";

const PAYPAL_CLIENT_ID =
  "AVDlbmV_0r6E4OU7DNw1xBwYHDXEdU7nPQUUU4rTq4QZX2OBKqcjOWNAHs1uTGFUsJndxEcDhl2yyt8y";
const PAYPAL_PLAN_ID = "P-1V3107736G8066221NGS42II";

interface PayPalButtonProps {
  onSubscriptionApproved: (subscriptionId: string) => void;
}

export default function PayPalButton({
  onSubscriptionApproved,
}: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;
    renderedRef.current = true;

    const scriptId = "paypal-sdk-script";

    function renderButton() {
      if (
        !containerRef.current ||
        !window.paypal?.Buttons
      )
        return;

      setLoading(false);

      window.paypal
        .Buttons({
          style: {
            shape: "rect" as const,
            color: "gold" as const,
            layout: "vertical" as const,
            label: "subscribe" as const,
          },
          createSubscription: (
            _data: Record<string, unknown>,
            actions: { subscription: { create: (opts: { plan_id: string }) => Promise<string> } }
          ) => {
            return actions.subscription.create({
              plan_id: PAYPAL_PLAN_ID,
            });
          },
          onApprove: (data: { subscriptionID: string }) => {
            onSubscriptionApproved(data.subscriptionID);
          },
          onError: () => {
            setError(true);
          },
        })
        .render(containerRef.current);
    }

    // Check if SDK is already loaded
    if (window.paypal?.Buttons) {
      renderButton();
      return;
    }

    // Check if script tag already exists
    if (document.getElementById(scriptId)) {
      const existing = document.getElementById(scriptId) as HTMLScriptElement;
      existing.addEventListener("load", renderButton);
      return;
    }

    // Load PayPal SDK
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
    script.setAttribute("data-sdk-integration-source", "button-factory");
    script.async = true;
    script.onload = renderButton;
    script.onerror = () => {
      setLoading(false);
      setError(true);
    };
    document.head.appendChild(script);
  }, [onSubscriptionApproved]);

  if (error) {
    return (
      <p className="text-center text-sm text-red-500">
        Failed to load payment. Please try again later.
      </p>
    );
  }

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center py-4">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
          <span className="ml-2 text-sm text-gray-500">
            Loading payment...
          </span>
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}

// Extend Window for PayPal SDK
declare global {
  interface Window {
    paypal?: {
      Buttons: (config: Record<string, unknown>) => {
        render: (container: HTMLElement) => void;
      };
    };
  }
}
