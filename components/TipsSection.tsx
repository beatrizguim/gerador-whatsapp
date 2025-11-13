'use client';

export default function TipsSection() {
  return (
    <section className="tips-section">
      <div className="tips-container">
        <h2 className="tips-title">
          Como criar mensagens automáticas para o WhatsApp
        </h2>
        <p className="tips-intro">
          Agora que você viu como fazer link do WhatsApp é fácil, confira algumas ideias para mensagens que agilizam a comunicação!
        </p>

        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon" aria-hidden="true">
              <img
                src="/purple-check.png"
                alt=""
                className="tip-check-icon"
                role="presentation"
              />
            </div>
            <p className="tip-text">
              Deixe bem claro de qual empresa se trata, mencione o nome do seu negócio logo na mensagem para reforçar a identificação com a marca.
            </p>
          </div>

          <div className="tip-card">
            <div className="tip-icon" aria-hidden="true">
              <img
                src="/purple-check.png"
                alt=""
                className="tip-check-icon"
                role="presentation"
              />
            </div>
            <p className="tip-text">
              Informe claramente os próximos passos para evitar ansiedade. Por exemplo, um vendedor entrará em contato? Quanto tempo isso demora?
            </p>
          </div>

          <div className="tip-card">
            <div className="tip-icon" aria-hidden="true">
              <img
                src="/purple-check.png"
                alt=""
                className="tip-check-icon"
                role="presentation"
              />
            </div>
            <p className="tip-text">
              Faça uma comunicação humanizada, ou seja, escreva como você estivesse falando com outra pessoa (até porque, está mesmo!), seguindo os padrões da sua marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

