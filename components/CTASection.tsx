'use client';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-headline">
          <h2 className="cta-title">
            Acelere suas<br />
            conversas com o<br />
            <span className="cta-highlight-blue">Gerador de link de</span><br />
            <span className="cta-highlight-green">WhatsApp</span>
          </h2>
        </div>

        <div className="cta-content">
          <p className="cta-intro">
            O WhatsApp é uma das plataformas preferidas pelos brasileiros — <strong>são mais de 165 milhões de usuários*</strong> (ou 96,4% da população que faz uso das redes sociais). Quando você traz um link de WhatsApp nas redes sociais ou site da sua empresa, só tem vantagens:
          </p>
          <p className="cta-source">*Dados da pesquisa Digital 2022: Brazil</p>

          <ul className="cta-advantages">
            <li>
              <img
                src="/blue-check.png"
                alt=""
                className="cta-check-icon"
                role="presentation"
                aria-hidden="true"
              />
              <span>Otimiza a geração de Leads.</span>
            </li>
            <li>
              <img
                src="/blue-check.png"
                alt=""
                className="cta-check-icon"
                role="presentation"
                aria-hidden="true"
              />
              <span>Ofereça uma opção rápida e prática para tirar dúvidas sobre produtos e serviços.</span>
            </li>
            <li>
              <img
                src="/blue-check.png"
                alt=""
                className="cta-check-icon"
                role="presentation"
                aria-hidden="true"
              />
              <span>Oferece uma ótima experiência ao usuário.</span>
            </li>
          </ul>

          <a href="#form" className="cta-button">
            Gere seu link grátis
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

