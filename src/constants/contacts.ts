/**
 * Contact information and social media links for ETHOS
 */
export const CONTACTS = {
  telegram: '@ethos_psychology',
  whatsapp: '+79999999999',
  email: 'info@ethos.ru',
  instagram: '@ethos_psychology'
};

/**
 * Google Forms integration configuration
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
  // Replace with your actual Google Form submission URL
  url: 'https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse',
  fields: {
    // Replace with your actual entry IDs from your Google Form
    name: 'entry.123456789',    // Entry ID for the name field
    contact: 'entry.987654321'   // Entry ID for the contact field
  }
};
