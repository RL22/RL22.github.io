"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const FORM_ID = "xyegprkr";

const fieldClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors duration-200";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  const successRef = useRef<HTMLDivElement>(null);
  const nameInvalid = Boolean(state.errors?.getFieldErrors("name").length);
  const emailInvalid = Boolean(state.errors?.getFieldErrors("email").length);
  const messageInvalid = Boolean(state.errors?.getFieldErrors("message").length);

  useEffect(() => {
    if (state.succeeded) {
      successRef.current?.focus();
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="rounded-lg border border-brand/30 bg-brand/5 px-5 py-4 text-sm text-gray-700"
      >
        Thanks, that went through. I reply within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Name <span className="text-red-600" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          aria-invalid={nameInvalid}
          aria-describedby={nameInvalid ? "name-error" : undefined}
          className={fieldClass}
        />
        <ValidationError id="name-error" prefix="Name" field="name" errors={state.errors} className="text-sm text-red-600 mt-1" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email <span className="text-red-600" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-invalid={emailInvalid}
          aria-describedby={emailInvalid ? "email-error" : undefined}
          className={fieldClass}
        />
        <ValidationError id="email-error" prefix="Email" field="email" errors={state.errors} className="text-sm text-red-600 mt-1" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-red-600" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          aria-invalid={messageInvalid}
          aria-describedby={messageInvalid ? "message-error" : undefined}
          className={`${fieldClass} resize-none`}
        />
        <ValidationError id="message-error" prefix="Message" field="message" errors={state.errors} className="text-sm text-red-600 mt-1" />
      </div>

      <button type="submit" disabled={state.submitting} className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60">
        {state.submitting ? "Sending…" : "Send message"} <Mail className="w-4 h-4" />
      </button>
    </form>
  );
}
