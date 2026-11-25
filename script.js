// मोबाइल मेन्यू खोलना और बंद करना
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer में वर्तमान साल
document.getElementById('year').textContent = new Date().getFullYear();

// अपना असली WhatsApp नंबर यहाँ डालें: भारत के नंबर के आगे 91 लगाएँ, + या space नहीं।
const WHATSAPP_NUMBER = '919450057477';

document.getElementById('enquiryForm').addEventListener('submit', (event) => {
  event.preventDefault();

  if (WHATSAPP_NUMBER.includes('X')) {
    alert('WhatsApp नंबर सेट नहीं है। कृपया वेबसाइट बनाने वाले से संपर्क करें।');
    return;
  }

  const form = new FormData(event.target);
  const message = [
    'नमस्ते Maurya Catering, मुझे Catering की जानकारी चाहिए।',
    `नाम: ${form.get('customerName')}`,
    `कार्यक्रम: ${form.get('eventType')}`,
    `तारीख: ${form.get('eventDate') || 'अभी तय नहीं'}`,
    `मेहमान: ${form.get('guestCount') || 'अभी तय नहीं'}`,
    `अन्य जानकारी: ${form.get('message') || 'नहीं'}`
  ].join('\n');

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank', 'noopener,noreferrer');
});
