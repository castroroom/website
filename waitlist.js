export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Castro Room Waitlist <hello@castroroom.com>',
        to: 'jason@castroroom.com',
        reply_to: email,
        subject: `Teacher Training Waitlist: ${name}`,
        text: `New waitlist signup for the 200-Hour Teacher Training.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message || '(none)'}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', errorText);
      return res.status(502).json({ error: 'Failed to send. Please try again.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Waitlist form error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
