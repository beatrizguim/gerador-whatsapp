export interface FormData {
  name: string;
  phone: string;
  message: string;
  position: string;
}

export interface WhatsAppFormProps {
  onSubmit: (data: FormData, link: string) => void;
  showFeatures?: boolean;
}

export interface WhatsAppResultProps {
  link: string;
  onGenerateNew: () => void;
}
