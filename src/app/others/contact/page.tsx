'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import { useState } from 'react';
import './contact.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://my-api-h54h.onrender.com/contact/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <KabuchanIcon emotion="littlehappy" size={350} />
        <OptionBubble title="お問い合わせはこちら！" options={[]} backLink={true}>
          <form onSubmit={handleSubmit} className="form">
            <label className="label">
              お名前：
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="input"
              />
            </label>
            <label className="label">
              メールアドレス：
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="input"
              />
            </label>
            <label className="label">
              お問い合わせ内容：
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="textarea"
              />
            </label>
            <button type="submit" className="button">
              送信する
            </button>
            {status === 'success' && <p className="success">送信が完了しました！</p>}
            {status === 'error' && <p className="error">送信に失敗しました…もう一度お試しください。</p>}
          </form>
        </OptionBubble>
      </div>
    </div>
  );
}