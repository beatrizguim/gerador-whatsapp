'use client';

import { useState } from 'react';
import WhatsAppForm from '@/components/WhatsAppForm';
import WhatsAppResult from '@/components/WhatsAppResult';
import { FormData } from '@/types';

export default function Home() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [generatedLink, setGeneratedLink] = useState<string>('');

  const handleFormSubmit = (data: FormData, link: string) => {
    setFormData(data);
    setGeneratedLink(link);
  };

  const handleGenerateNew = () => {
    setFormData(null);
    setGeneratedLink('');
  };

  if (formData && generatedLink) {
    return <WhatsAppResult link={generatedLink} onGenerateNew={handleGenerateNew} />;
  }

  return <WhatsAppForm onSubmit={handleFormSubmit} showFeatures={true} />;
}
