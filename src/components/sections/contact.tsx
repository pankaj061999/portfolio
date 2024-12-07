'use client';

import { useState } from 'react';
import { Copy, Mail, Phone } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

let email = 'pankajkmeena12@gmail.com';
let phone = '+91 8003356924';

type CopyValue = 'email' | 'phone';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here (e.g., API call)
    console.log('Form Submitted', formData);
  };

  return (
    <Container id="contact">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-4 md:w-1/2">
          <div className="self-center">
            <Tag label="Get in touch" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            What’s next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </Typography>

          <div className="flex flex-col items-center gap-6 md:gap-12">
            <div className="flex flex-col items-center md:gap-4">
              <div className="flex items-center gap-4 md:gap-5">
                <Mail className="h-6 w-6 md:h-8 md:w-8" />
                <Typography variant="h2">{email}</Typography>
                <IconButton
                  size={width && width < 768 ? 'md' : 'lg'}
                  onClick={() => handleCopyClick(email, 'email')}
                  showTooltip={isCopied && copiedValueType === 'email'}
                  tooltipText="Copied!"
                >
                  <Copy />
                </IconButton>
              </div>
              <div className="flex items-center gap-4 md:gap-5">
                <Phone className="h-6 w-6 md:h-8 md:w-8" />
                <Typography variant="h2">{phone}</Typography>
                <IconButton
                  size={width && width < 768 ? 'md' : 'lg'}
                  onClick={() => handleCopyClick(phone.replace(' ', ''), 'phone')}
                  showTooltip={isCopied && copiedValueType === 'phone'}
                  tooltipText="Copied!"
                >
                  <Copy />
                </IconButton>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Typography className="text-center">
                You may also find me on these platforms!
              </Typography>
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col items-center gap-6 w-full max-w-xl md:w-1/2">
          <Typography variant="h3">Have a question or want to connect?</Typography>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
