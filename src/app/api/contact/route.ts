import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const targetEmail = process.env.CONTACT_EMAIL || 'amansharmaradauri@gmail.com';
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

    // 1. Try Web3Forms if WEB3FORMS_ACCESS_KEY is set in .env.local
    if (web3Key && web3Key.trim() !== '') {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key.trim(),
          name,
          email,
          message,
          subject: `New Portfolio Message from ${name}`,
        }),
      });

      const web3Data = await web3Res.json();
      if (web3Res.ok && (web3Data.success || web3Data.success === 'true')) {
        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
      }
    }

    // 2. Fallback to FormSubmit
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Contact Message from ${name}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await formSubmitRes.json();

    if (formSubmitRes.ok || data.success === 'true' || data.success === true) {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 502 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
