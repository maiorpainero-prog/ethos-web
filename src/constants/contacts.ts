/**
 * Константы для контактов и интеграций
 * 
 * ВАЖНО: Перед деплоем обновите:
 * 1. GOOGLE_FORM.url - замените YOUR_FORM_ID на реальный ID вашей Google Forms
 * 2. GOOGLE_FORM.fields - замените entry ID на реальные из вашей формы
 * 3. CONTACTS.whatsapp - добавьте ваш номер WhatsApp
 * 4. CONTACTS.telegram - добавьте ваш Telegram
 * 5. CONTACTS.instagram - добавьте ваш Instagram
 * 6. CONTACTS.email - добавьте ваш email
 * 
 * Как получить entry ID для Google Forms:
 * 1. Откройте вашу форму в режиме редактирования
 * 2. Откройте DevTools (F12)
 * 3. Перейдите на вкладку Network
 * 4. Заполните форму и отправьте
 * 5. Найдите запрос к formResponse
 * 6. В Payload увидите entry.XXXXXX - это и есть ID полей
 */

export const GOOGLE_FORM = {
  url: 'https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse',
  fields: {
    name: 'entry.123456789',
    contact: 'entry.987654321'
  }
};

export const CONTACTS = {
  telegram: '@your_telegram',
  whatsapp: '+79999999999',
  email: 'info@ethos.ru',
  instagram: '@ethos_psychology'
};
