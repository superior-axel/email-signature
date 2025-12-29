// Get form elements
const previewDiv = document.getElementById('signaturePreview');
const copyButton = document.getElementById('copyButton');
const notification = document.getElementById('notification');

// Form input elements
const nameInput = document.getElementById('name');
const titleInput = document.getElementById('title');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const companyWebsiteInput = document.getElementById('companyWebsite');
const logoUrlInput = document.getElementById('logoUrl');
const secondaryNameInput = document.getElementById('secondaryName');
const secondaryTaglineInput = document.getElementById('secondaryTagline');
const secondaryWebsiteInput = document.getElementById('secondaryWebsite');

/**
 * Creates a highly compatible, table-based HTML signature.
 * Uses inline styles and web-safe font stacks for maximum safety across email clients.
 */
function createSafeSignatureHTML() {
    const name = nameInput.value || 'Sarah Johnson';
    const title = titleInput.value || 'Chief Marketing Officer';
    const email = emailInput.value || 'sarah@briarbear.ai';
    const phone = phoneInput.value || '(415) 789-2468';
    const companyWebsite = companyWebsiteInput.value || 'briarbear.ai';
    const logoUrl = logoUrlInput.value || 'https://yibby.ai/briarbear-logo.png';
    const secondaryName = secondaryNameInput.value || 'Yibby.ai';
    const secondaryTagline = secondaryTaglineInput.value || 'Thoughtful gifting, powered by AI.';
    const secondaryWebsite = secondaryWebsiteInput.value || 'yibby.ai';

    // Helper to format .ai in black
    const formatAiLink = (text, baseColor) => {
        if (text.toLowerCase().endsWith('.ai')) {
            const base = text.substring(0, text.length - 3);
            return `<span style="color: ${baseColor};">${base}</span><span style="color: #000000;">.ai</span>`;
        }
        return `<span style="color: ${baseColor};">${text}</span>`;
    };

    return `
<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #fafafa; border: 1px solid #e5e7eb; border-radius: 12px; width: 600px;">
    <tr>
        <td style="padding: 30px; position: relative; overflow: hidden;">
            <!-- TOP SECTION -->
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-bottom: 1px solid #e5e7eb; padding-bottom: 20px;">
                <tr>
                    <!-- INFO SECTION -->
                    <td align="left" valign="top" style="padding-right: 20px;">
                        <h1 style="margin: 0 0 5px 0; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 28px; font-weight: 700; color: #1f2937; line-height: 1.2;">${name}</h1>
                        <p style="margin: 0 0 20px 0; font-family: Arial, Helvetica, sans-serif; font-size: 18px; color: #6b7280; line-height: 1.4;">${title}</p>
                        
                        <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 8px;">
                            <tr>
                                <td style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #374151; line-height: 1;">
                                    <img src="email_icon.png" width="16" style="display: block; border: 0; margin-right: 8px; float: left;"> <a href="mailto:${email}" style="color: #374151; text-decoration: none; vertical-align: middle; line-height: 16px;" class="signature-link">${email}</a>
                                </td>
                            </tr>
                        </table>
                        
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #374151; line-height: 1;">
                                    <img src="phone_icon.png" width="16" style="display: block; border: 0; margin-right: 8px; float: left;"> <a href="tel:${phone.replace(/\D/g, '')}" style="color: #374151; text-decoration: none; vertical-align: middle; line-height: 16px;" class="signature-link">${phone}</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    
                    <!-- LOGO SECTION -->
                    <td align="right" valign="top" width="140">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td align="center">
                                    <a href="https://${companyWebsite}" target="_blank" rel="noopener" style="text-decoration: none;" class="signature-link-branding">
                                        <img src="${logoUrl}" alt="Logo" width="120" style="display: block; border: 0; margin-bottom: 10px;">
                                    </a>
                                    <a href="https://${companyWebsite}" target="_blank" rel="noopener" style="text-decoration: none; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600;" class="signature-link-branding">
                                        ${formatAiLink(companyWebsite, '#d97706')}
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <!-- BOTTOM SECTION -->
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px;">
                <tr>
                    <td valign="middle" style="width: 75px;">
                        <a href="https://${secondaryWebsite}" target="_blank" rel="noopener" style="text-decoration: none;" class="signature-link-branding">
                            <img src="https://yibby.ai/mascot.png" alt="Mascot" width="60" style="display: block; border: 0;">
                        </a>
                    </td>
                    <td valign="middle" style="padding-left: 15px;">
                        <h2 style="margin: 0 0 5px 0; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 24px; font-weight: 700; color: #d97706;">
                            <a href="https://${secondaryWebsite}" target="_blank" rel="noopener" style="text-decoration: none; color: #d97706;" class="signature-link-branding">
                                ${formatAiLink(secondaryName, '#d97706')}
                            </a>
                        </h2>
                        <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #6b7280;">${secondaryTagline}</p>
                    </td>
                </tr>
            </table>

            <!-- DECORATIVE BLOBS (Note: Background blobs use relative positioning which can be tricky in some Outlook versions, but is the standard for this design) -->
            <div style="position: absolute; right: 0; bottom: 0; z-index: 0; pointer-events: none;">
                <svg width="200" height="100" viewBox="0 0 200 100" preserveAspectRatio="none" style="display: block;">
                    <path d="M0,100 C50,100 120,80 200,10 L200,100 Z" fill="#b7ccb9" />
                    <path d="M0,100 C80,100 140,90 200,50 L200,100 Z" fill="#e9e4d1" />
                </svg>
            </div>
        </td>
    </tr>
</table>`.trim();
}

function generateSignature() {
    previewDiv.innerHTML = createSafeSignatureHTML();
}

function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
}

// Event listeners
[nameInput, titleInput, emailInput, phoneInput, companyWebsiteInput, logoUrlInput,
    secondaryNameInput, secondaryTaglineInput, secondaryWebsiteInput].forEach(input => {
        input.addEventListener('input', generateSignature);
    });

copyButton.addEventListener('click', async () => {
    const signatureHTML = createSafeSignatureHTML();
    try {
        const blob = new Blob([signatureHTML], { type: 'text/html' });
        const clipboardItem = new ClipboardItem({
            'text/html': blob,
            'text/plain': new Blob([previewDiv.innerText], { type: 'text/plain' })
        });
        await navigator.clipboard.write([clipboardItem]);
        showNotification('✓ Signature copied to clipboard!');
    } catch (err) {
        try {
            await navigator.clipboard.writeText(signatureHTML);
            showNotification('✓ HTML copied to clipboard!');
        } catch (fallbackErr) {
            showNotification('❌ Failed to copy');
        }
    }
});

// Initial generation
generateSignature();
