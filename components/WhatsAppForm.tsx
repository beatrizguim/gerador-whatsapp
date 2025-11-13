'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { formatPhoneNumber, validatePhoneNumber, generateWhatsAppLink } from '@/lib/utils';
import { WhatsAppFormProps } from '@/types';
import { POSITIONS } from '@/constants/positions';
import PageLayout from './layout/PageLayout';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import TipsSection from './TipsSection';
import ExamplesSection from './ExamplesSection';
import FAQSection from './FAQSection';

export default function WhatsAppForm({ onSubmit, showFeatures = false }: WhatsAppFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!phone.trim()) {
      newErrors.phone = 'Número de WhatsApp é obrigatório';
    } else if (!validatePhoneNumber(phone)) {
      newErrors.phone = 'Número inválido. Use o formato (99) 99999-9999';
    }

    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Nome deve ter no mínimo 2 caracteres';
    }

    if (!position.trim()) {
      newErrors.position = 'Cargo é obrigatório';
    }

    if (!message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const whatsappLink = generateWhatsAppLink(phone, message);

    try {
      await fetch('https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          name,
          phone,
          message,
          position,
        }),
      });
    } catch (error) {
      console.warn('Não foi possível enviar dados para o Zapier:', error);
    }

    onSubmit({ name, phone, message, position }, whatsappLink);
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <main className="main-content">
        <div className="content-grid">
          <section className="tool-hero form">
            <div className="content-wrapper">
              <div className="form-section" id="form">
            <h1 className="form-title">
              Gerador de Link para WhatsApp
            </h1>
            <p className="form-subtitle">
              Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais!
            </p>

            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Nome*
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) {
                        setErrors(prev => ({ ...prev, name: '' }));
                      }
                    }}
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Adicione seu nome"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="error-message" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="phone" className="form-label">
                    Número do WhatsApp*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                    placeholder="(00) 0 0000-0000"
                    maxLength={15}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="error-message" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="position" className="form-label">
                  Cargo*
                </label>
                <select
                  id="position"
                  value={position}
                  onChange={(e) => {
                    setPosition(e.target.value);
                    if (errors.position) {
                      setErrors(prev => ({ ...prev, position: '' }));
                    }
                  }}
                  className={`form-select ${errors.position ? 'form-input-error' : ''} ${position ? 'has-value' : ''}`}
                  aria-invalid={!!errors.position}
                  aria-describedby={errors.position ? 'position-error' : undefined}
                >
                  <option value="">Selecione</option>
                  {POSITIONS.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                {errors.position && (
                  <p id="position-error" className="error-message" role="alert">
                    {errors.position}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Mensagem*
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) {
                      setErrors(prev => ({ ...prev, message: '' }));
                    }
                  }}
                  rows={4}
                  className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                  placeholder="Crie uma mensagem que facilite a interação com os contatos."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="error-message" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="privacy-text privacy-policy">
                <p>Ao preencher o formulário, concordo * em receber comunicações de acordo com meus interesses.</p>
                <p>
                  Ao informar meus dados, eu concordo com a{' '}
                  <a
                    href="https://legal.rdstation.com/pt/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="privacy-link"
                  >
                    Política de privacidade
                  </a>
                </p>
                <p>* Você pode alterar suas permissões de comunicação a qualquer tempo.                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button submit-primary primary mobile-fill-false mobile-size-md"
                aria-label={isSubmitting ? "Gerando link, aguarde..." : "Gerar link grátis do WhatsApp"}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin" aria-hidden="true">⏳</span>
                    <span aria-live="polite">Gerando...</span>
                  </>
                ) : (
                  <>
                    Gerar link grátis
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </form>
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
      {showFeatures && (
        <>
          <FeaturesSection />
          <CTASection />
          <TipsSection />
          <ExamplesSection />
          <FAQSection />
        </>
      )}
    </PageLayout>
  );
}

