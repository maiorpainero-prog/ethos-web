/**
 * Contact information and social media links for ETHOS
 * 
 * ⚠️ IMPORTANT: Replace placeholder values before deploying to production!
 */
export const CONTACTS = {
  telegram: '@ethos_psychology',  // Replace with actual Telegram handle
  whatsapp: '+79999999999',       // ⚠️ REPLACE with actual WhatsApp number
  email: 'info@ethos.ru',
  instagram: '@ethos_psychology'  // Replace with actual Instagram handle
};

/**
 * Google Forms integration configuration
 * 
 * ⚠️ CRITICAL: This configuration MUST be updated before going live!
 * The current values are placeholders and will NOT work.
 * 
 * How to get your Google Form IDs:
 * 1. Create a Google Form at https://forms.google.com/
 * 2. Add your form fields (Name, Contact, etc.)
 * 3. Click "Send" and select the link icon
 * 4. Copy the form URL (e.g., https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform)
 * 5. Replace "viewform" with "formResponse" to get the submission URL
 * 6. To find field entry IDs:
 *    - Open your form in edit mode
 *    - Right-click on each field and select "Inspect" (or press F12)
 *    - Look for "entry.XXXXXXXXX" in the HTML name attribute
 *    - Use these entry IDs in the GOOGLE_FORM.fields object below
 * 
 * Example:
 * - If your form URL is: https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform
 * - Your submission URL should be: https://docs.google.com/forms/d/e/1FAIpQLSd.../formResponse
 * - If name field has name="entry.123456789", use that as the value
 */
export const GOOGLE_FORM = {
  // ⚠️ REPLACE 'YOUR_FORM_ID' with your actual Google Form ID
  url: 'https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse',
  fields: {
    // ⚠️ REPLACE these entry IDs with your actual form field IDs
    name: 'entry.123456789',    // Entry ID for the name field
    contact: 'entry.987654321'   // Entry ID for the contact field
  }
};
