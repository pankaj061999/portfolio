"use client";

import { Copy, Mail, Phone } from "lucide-react";
import { useState } from "react";

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";
import Link from "next/link";

let email = "pankajkmeena12@gmail.com";
let phone = "+91 8003356924";

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [emailError, setEmailError] = useState("");

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

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
      alert("Unable to copy!");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "email") {
      setEmailError("");
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("Submitting...");

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      setIsSubmitting(false);

      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "contact_form_submission_error",
          errorMessage: "Invalid email address"
        });
      }

      return;
    }

    try {
      const response = await fetch(
        "https://peerlearnx-be.onrender.com/v1/auth/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setShowModal(true);

        if ((window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "contact_form_submission_success",
            message: "Message sent successfully"
          });
        }
      } else {
        setSubmissionStatus("Failed to send message. Please try again.");

        if ((window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "contact_form_submission_error",
            errorMessage: "Failed to send message"
          });
        }
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("Failed to send message. Please try again.");

      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "contact_form_submission_error",
          errorMessage: error instanceof Error ? error.message : "Unknown error"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-4 md:w-1/2">
          <div className="self-center">
            <Tag label="Get in touch" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            What&apos;s next? Feel free to reach out to me if you are looking
            for a developer, have a query, or simply want to connect.
          </Typography>

          <div className="flex flex-col items-center gap-6 md:gap-12">
            <div className="flex flex-col items-center md:gap-4">
              <div className="flex items-center gap-4 md:gap-5">
                <Link href="mailto:pankajkmeena12@gmail.com">
                  <Mail className="h-6 w-6 md:h-8 md:w-8" />
                </Link>

                <Typography variant="h2">{email}</Typography>
                <IconButton
                  size={width && width < 768 ? "md" : "lg"}
                  onClick={() => handleCopyClick(email, "email")}
                  showTooltip={isCopied && copiedValueType === "email"}
                  tooltipText="Copied!"
                >
                  <Copy />
                </IconButton>
              </div>
              <div className="flex items-center gap-4 md:gap-5">
                <Link
                  href={`tel:${phone.replace(" ", "")}`}
                  className="text-blue-600 hover:underline"
                >
                  <Phone className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Typography variant="h2">{phone}</Typography>
                <IconButton
                  size={width && width < 768 ? "md" : "lg"}
                  onClick={() =>
                    handleCopyClick(phone.replace(" ", ""), "phone")
                  }
                  showTooltip={isCopied && copiedValueType === "phone"}
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
        <div className="flex w-full max-w-xl flex-col items-center gap-6 md:w-1/2">
          <Typography variant="h3">
            Have a question or want to connect?
          </Typography>
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {emailError && (
              <span className="absolute left-3 top-12 text-sm text-red-500">
                {emailError}
              </span>
            )}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="h-32 rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 p-3 text-white transition hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-sm rounded-lg bg-gray p-6 shadow-md">
            <Typography variant="h3" className="mb-4 text-center">
              Success!
            </Typography>
            <Typography variant="body3" className="mb-6 text-center">
              Your message has been sent successfully. I&apos;ll get back to you
              shortly.
            </Typography>
            <button
              onClick={handleModalClose}
              className="w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};
export default ContactSection;
