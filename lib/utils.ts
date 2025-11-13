export function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/\D/g, "");
  const limited = numbers.slice(0, 11);

  if (limited.length <= 2) {
    return limited;
  } else if (limited.length <= 7) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
  } else if (limited.length <= 10) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 6)}-${limited.slice(
      6
    )}`;
  } else {
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(
      7,
      11
    )}`;
  }
}

export function unformatPhoneNumber(value: string): string {
  return value.replace(/\D/g, "");
}

export function validatePhoneNumber(phone: string): boolean {
  const numbers = unformatPhoneNumber(phone);
  return numbers.length === 10 || numbers.length === 11;
}

export function formatPhoneForWhatsApp(phone: string): string {
  const numbers = unformatPhoneNumber(phone);
  const cleaned = numbers.startsWith("0") ? numbers.slice(1) : numbers;
  return `55${cleaned}`;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function generateWhatsAppLink(phone: string, message: string): string {
  const formattedPhone = formatPhoneForWhatsApp(phone);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}
