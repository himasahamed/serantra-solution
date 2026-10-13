import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "94771472539";

  const message =
    "Hello Serantra Solutions, I would like to know more about your services.";

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-button"
      aria-label="Chat with Serantra Solutions on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-pulse" />

      <svg
        className="whatsapp-icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.04 3C8.85 3 3 8.76 3 15.84c0 2.26.6 4.47 1.74 6.41L3 29l6.94-1.8a13.2 13.2 0 0 0 6.1 1.49h.01C23.24 28.69 29 22.93 29 15.84S23.23 3 16.04 3Zm0 23.5h-.01a11.02 11.02 0 0 1-5.61-1.53l-.4-.24-4.12 1.07 1.1-3.99-.26-.41a10.56 10.56 0 0 1-1.65-5.56c0-5.87 4.91-10.65 10.95-10.65 2.92 0 5.67 1.12 7.73 3.16a10.42 10.42 0 0 1 3.2 7.49c0 5.88-4.9 10.66-10.93 10.66Zm6-7.98c-.33-.16-1.95-.95-2.25-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.39-.5-2.64-1.6a9.87 9.87 0 0 1-1.83-2.24c-.19-.32-.02-.5.14-.66.15-.15.33-.38.49-.57.17-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.75-1.01-2.4-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.1-1.14 2.68s1.17 3.11 1.34 3.33c.16.21 2.3 3.46 5.58 4.85.78.33 1.39.53 1.87.68.78.24 1.49.21 2.05.13.62-.09 1.95-.79 2.22-1.55.27-.76.27-1.41.19-1.55-.08-.13-.3-.21-.63-.37Z"
        />
      </svg>
    </a>
  );
}