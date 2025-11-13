export default function Header() {
  return (
    <header className="page-header" role="banner">
      <a href="/" aria-label="RD Station - Página inicial">
        <img
          src="/rd-station-logo.png"
          alt="RD Station"
          width={143}
          height={32}
          className="logo-image"
          style={{ display: 'block' }}
        />
      </a>
      <p className="header-title">
        Gerador link do WhatsApp
      </p>
    </header>
  );
}

