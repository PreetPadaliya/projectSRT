export default function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 bg-linear-to-r from-transparent to-gold" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2c1.8 4 4.2 6.4 8.2 8.2-4 1.8-6.4 4.2-8.2 8.2-1.8-4-4.2-6.4-8.2-8.2C7.8 8.4 10.2 6 12 2Z"
          fill="var(--gold)"
        />
      </svg>
      <span className="h-px w-12 bg-linear-to-l from-transparent to-gold" />
    </div>
  );
}
