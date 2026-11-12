export function WhatsAppLink() {
  const message = encodeURIComponent("I WANT PLAY GAMES");

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/917009784942?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Tiger365Games on WhatsApp about games"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.03 3.2A12.6 12.6 0 0 0 5.16 22.17l-1.6 5.84 6-1.57A12.6 12.6 0 1 0 16.03 3.2Zm0 22.9c-1.9 0-3.76-.51-5.39-1.48l-.39-.23-3.56.93.95-3.46-.25-.4a10.58 10.58 0 1 1 8.64 4.64Zm5.81-7.93c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.6-1.88-1.79-2.2-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.22.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55l-.61-.01c-.22 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.83.76.33 1.36.52 1.83.67.77.24 1.47.2 2.02.12.62-.1 1.9-.78 2.17-1.53.26-.75.26-1.39.18-1.53-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      <span>Chat with us</span>
    </a>
  );
}
