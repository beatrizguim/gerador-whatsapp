"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O que é o Gerador de link para WhatsApp?",
    answer:
      "O plano Light não tem tempo de permanência mínima nem multa por cancelamento. Você pode cancelar quando quiser. Ficaremos tristes, mas você pode cancelar a qualquer momento, com poucos cliques. É só entrar no painel de configurações da sua conta e lá você terá essa opção. O cancelamento da sua conta não acontece de forma automática por falta de uso, por isso, se não quiser mais usar sua conta lembre-se de cancelar para que você não pague se não estiver usando.",
  },
  {
    question: "Onde posso usar o link do WhatsApp?",
    answer:
      "O seu link de Whatsapp pode ser usado no link da bio das suas redes sociais, em mensagens de email, chats e qualquer que você possa usar para compartilhar o link direto para o seu WhatsApp.",
  },
  {
    question: "Quais as vantagens de ter um link do seu WhatsApp?",
    answer:
      "O link do WhatsApp permite que você compartilhe o seu contato de WhatsApp de forma prática, com clientes e pessoas interessadas nos seus produtos ou serviços. Dessa forma, você consegue tirar dúvidas, ajudar no processo de compra e estreitar o relacionamento com essas pessoas.",
  },
  {
    question: "Como gerar link para WhatsApp?",
    answer:
      "Para gerar o seu link no WhatsApp usando o gerador, basta acessar a ferramenta, preencher o seu número de WhatsApp e inserir o seu email e o seu cargo. Depois, caso queira, crie uma mensagem que vai facilitar a interação com seus contatos. As informações de email e cargo não aparecem para quem acessar o seu link de WhatsApp, apenas o seu número e mensagem são compartilhados.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(
    new Set([0, 1, 2, 3])
  );

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const allClosed = openItems.size === 0;
  const allOpen = openItems.size === faqData.length;

  const toggleAll = () => {
    if (allClosed) {
      setOpenItems(new Set([0, 1, 2, 3]));
    } else {
      setOpenItems(new Set());
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-questions-container">
          <h2 className="faq-questions-title">Perguntas mais comuns</h2>

          <div className="faq-questions-wrapper">
            <div className="faq-header">
              <button
                className="faq-close-all-button"
                onClick={toggleAll}
                aria-label={
                  allClosed
                    ? "Abrir todas as perguntas"
                    : "Fechar todas as perguntas"
                }
                aria-expanded={!allClosed}
              >
                {allClosed ? "Abrir todos" : "Fechar todos"}
                <img
                  src="/arrowright.png"
                  alt=""
                  className="faq-arrow-icon"
                  role="presentation"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="faq-questions-list">
              {faqData.map((item, index) => {
                const isOpen = openItems.has(index);
                return (
                  <div
                    key={index}
                    className={`faq-question-item ${
                      isOpen
                        ? "faq-question-item-open"
                        : "faq-question-item-closed"
                    }`}
                  >
                    <button
                      className="faq-question-header"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <h3 className="faq-question-title">{item.question}</h3>
                      <svg
                        className={`faq-question-arrow ${
                          isOpen
                            ? "faq-question-arrow-up"
                            : "faq-question-arrow-down"
                        }`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <p
                        id={`faq-answer-${index}`}
                        className="faq-question-answer"
                        role="region"
                      >
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
