'use client';

export default function ErrorBoundary({ error, reset }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  );
}