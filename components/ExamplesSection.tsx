'use client';

export default function ExamplesSection() {
  return (
    <section className="examples-section">
      <div className="examples-container">
        <h2 className="examples-title">
          Exemplos de mensagem para WhatsApp
        </h2>

        <div className="examples-grid">
          <div className="example-card">
            <h3 className="example-card-title">Opção 1</h3>
            <p className="example-card-text">
              Olá! Obrigado por seu interesse em falar com [Nome da Empresa]. Me conta qual é a sua dúvida para eu lhe fornecer as melhores informações!
            </p>
          </div>

          <div className="example-card">
            <h3 className="example-card-title">Opção 2</h3>
            <p className="example-card-text">
              Oi, tudo bem? Obrigado por entrar em contato com [Nome da Empresa]. Qual é a sua dúvida? Assim, eu consigo ajudar você rapidamente.
            </p>
          </div>

          <div className="example-card">
            <h3 className="example-card-title">Opção 3</h3>
            <p className="example-card-text">
              Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome do Atendente], irei fazer o seu atendimento hoje. Me conta como posso ajudar você!  😍
            </p>
          </div>
        </div>

        <div className="examples-cta">
          <a href="#form" className="examples-button">
            Gere seu link grátis
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}


