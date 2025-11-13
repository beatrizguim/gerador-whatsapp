'use client';

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-image">
          <img
            src="/image-media-topics.png"
            alt="Mulher usando celular para gerar link do WhatsApp"
            loading="lazy"
          />
        </div>

        <div className="topics-items-container">
          <div className="feature-card topic-item">
            <div className="feature-icon" aria-hidden="true">
              <img
                src="/box-icon-1.png"
                alt=""
                role="presentation"
              />
            </div>
            <h3 className="feature-title">Atalho rumo às vendas</h3>
            <p className="feature-description">
              O Gerador de link do WhatsApp faz com que usuários se transformem em contatos (Leads) e iniciem conversas certeiras com sua marca.
            </p>
          </div>

          <div className="feature-card topic-item">
            <div className="feature-icon" aria-hidden="true">
              <img
                src="/box-icon-2.png"
                alt=""
                role="presentation"
              />
            </div>
            <h3 className="feature-title">Mensagem automática</h3>
            <p className="feature-description">
              Você automatiza mensagens estimulando o início da conversa, o que facilita a vida dos usuários e clientes.
            </p>
          </div>

          <div className="feature-card topic-item">
            <div className="feature-icon" aria-hidden="true">
              <img
                src="/box-icon-3.png"
                alt=""
                role="presentation"
              />
            </div>
            <h3 className="feature-title">Rápido e 100% gratuito</h3>
            <p className="feature-description">
              Não sabe como fazer link de WhatsApp? O Gerador da RD Station é fácil de usar e permite gerar links em segundos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

