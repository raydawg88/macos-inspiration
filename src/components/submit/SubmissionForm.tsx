'use client';

import { useState } from 'react';
import { ClassicButton, ClassicInput, ClassicTextarea } from '@/components/ui';

export function SubmissionForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        {/* Happy Mac Icon */}
        <div className="mb-4">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="currentColor"
            className="mx-auto"
          >
            <rect x="16" y="8" width="32" height="48" fill="#DDDDDD" stroke="black" strokeWidth="2" />
            <rect x="20" y="12" width="24" height="20" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="26" cy="20" r="2" fill="black" />
            <circle cx="38" cy="20" r="2" fill="black" />
            <path d="M26 26 Q32 30 38 26" stroke="black" strokeWidth="2" fill="none" />
            <rect x="24" y="36" width="16" height="4" fill="black" />
          </svg>
        </div>
        <h2
          className="text-lg mb-2"
          style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
        >
          Thank You!
        </h2>
        <p
          className="text-sm text-[#666666] mb-4"
          style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
        >
          Your app has been submitted for review.
          <br />
          We&apos;ll take a look and add it to the gallery if it&apos;s a good fit!
        </p>
        <ClassicButton onClick={() => setIsSuccess(false)}>
          Submit Another
        </ClassicButton>
      </div>
    );
  }

  return (
    <form
      name="app-submission"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={() => setIsSuccess(true)}
      className="space-y-4"
    >
      {/* Netlify form name */}
      <input type="hidden" name="form-name" value="app-submission" />

      {/* Honeypot field for spam prevention */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ClassicInput
          label="Your Name"
          name="submitter_name"
          required
          placeholder="John Appleseed"
        />
        <ClassicInput
          label="Your Email"
          name="submitter_email"
          type="email"
          required
          placeholder="john@example.com"
        />
      </div>

      <ClassicInput
        label="App Name"
        name="app_name"
        required
        placeholder="My Amazing App"
      />

      <ClassicInput
        label="App URL (Website or App Store)"
        name="app_url"
        type="url"
        required
        placeholder="https://myapp.com or App Store URL"
      />

      <ClassicTextarea
        label="Description"
        name="description"
        required
        placeholder="Tell us about this app and what makes its UI special..."
        rows={5}
      />

      <div
        className="text-xs text-[#666666] p-2 bg-[#EEEEEE] border border-[#AAAAAA]"
        style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
      >
        <strong>Note:</strong> We review all submissions manually. We&apos;re looking for
        macOS apps with beautiful, thoughtful UI design. Not all submissions will
        be added to the gallery.
      </div>

      <div className="flex justify-end gap-2">
        <ClassicButton type="button" onClick={() => window.history.back()}>
          Cancel
        </ClassicButton>
        <ClassicButton type="submit" variant="primary">
          Submit App
        </ClassicButton>
      </div>
    </form>
  );
}
