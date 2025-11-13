'use client';

import { useState } from 'react';
import { WhatsAppResultProps } from '@/types';
import PageLayout from './layout/PageLayout';

export default function WhatsAppResult({ link, onGenerateNew }: WhatsAppResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Erro ao copiar link:', error);
      const textArea = document.createElement('textarea');
      textArea.value = link;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <PageLayout>
      <main className="main-content">
        <div className="content-grid">
          <section className="tool-hero form result">
            <div className="content-wrapper">
              <div className="result-section">
                <button
                  onClick={onGenerateNew}
                  className="back-button"
                  aria-label="Voltar para gerar outro link"
                >
                  <svg
                    className="back-chevron"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Gerar outro link</span>
                </button>

                <h1 className="result-title">
                  Seu link de WhatsApp foi gerado com sucesso!
                </h1>

                <div className="result-field">
                  <input
                    type="text"
                    id="generated-link"
                    value={link}
                    readOnly
                    className="generated-link-input"
                    aria-label="Link do WhatsApp gerado"
                  />
                </div>

                <div className="action-buttons">
                  <button
                    onClick={handleCopyLink}
                    className="copy-button"
                    aria-label={copied ? "Link copiado com sucesso" : "Copiar link do WhatsApp para área de transferência"}
                    aria-live="polite"
                  >
                    <svg
                      className="copy-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect x="3.5" y="3.5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <rect x="7.5" y="7.5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
                    </svg>
                    <span className="copy-button-text">{copied ? 'Link copiado!' : 'Copie seu link'}</span>
                  </button>

                  <div className="new-link-button-wrapper">
                    <button
                      onClick={onGenerateNew}
                      className="new-link-button"
                      aria-label="Adicione um Botão de WhatsApp no site"
                    >
                      <span className="new-link-button-text">Adicione um Botão de WhatsApp no site</span>
                      <svg
                        className="new-link-button-arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 4L10 8L6 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <p className="rd-station-marketing-text">
                      Faça isso com o teste grátis do <strong>RD Station Marketing</strong>
                    </p>
                  </div>
                </div>

                <div className="rd-conversas-promo">
                  <h3 className="rd-conversas-title">
                    Quer aumentar em até 56% as suas vendas pelo WhatsApp?
                  </h3>
                  <p className="rd-conversas-text">
                    Conheça o <strong>RD Station Conversas</strong>, uma solução oficial de WhatsApp API que te garante um atendimento mais eficiente, lucrativo e seguro. Com a nossa ferramenta você diminui os riscos de ter seu número bloqueado e ainda melhorar suas taxas de conversão.
                  </p>
                  <p className="rd-conversas-text">
                    Quer ficar por dentro sobre como nossa plataforma pode ajudar a sua empresa?
                  </p>
                  <a href="#" className="rd-conversas-link">
                    Saiba mais
                    <svg
                      className="rd-conversas-chevron"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                {copied && (
                  <div className="success-message" role="alert">
                    ✓ Link copiado para a área de transferência!
                  </div>
                )}
              </div>
              
              <picture className="graphism" aria-hidden="true">
                <img
                  src="/whatsapp-logo.png"
                  alt=""
                  role="presentation"
                />
              </picture>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}

