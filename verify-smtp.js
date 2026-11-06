require('dotenv').config({ path: '.env.local' });

const nodemailer = require('nodemailer');
(async () => {
  const transporter = nodemailer.createTransport({
    host: process.env.CPANEL_EMAIL_HOST,
    port: parseInt(process.env.CPANEL_EMAIL_PORT || '465'),
    secure: parseInt(process.env.CPANEL_EMAIL_PORT || '465') === 465,
    auth: {
      user: process.env.CPANEL_EMAIL_USER,
      pass: process.env.CPANEL_EMAIL_PASSWORD,
    },
  });
  try {
    await transporter.verify();
    console.log('✅ SMTP connection works!');
  } catch (err) {
    console.error('❌ Verification failed:', err);
  }
})();

