/* eslint-disable @typescript-eslint/no-unused-vars */
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./ContactForm.css";
import { FloatLabel } from "primereact/floatlabel";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import resume from "../../../../../app/components/Header/BalavamsiMaragani.pdf";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "31fdd725-6487-47d4-a57f-7e67650b5191";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendDataToWeb3Forms = async () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("❌ Please fill out all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(`❌ Failed to send message: ${result.message}`);
      }
    } catch (error) {
      alert("❌ Network error: Could not send message.");
    } finally {
      setLoading(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "BalavamsiMaragani.pdf";
    link.click();
  };

  return (
    <div className="card contact-card">
      <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-5 flex justify-content-center py-5">
          <div className="flex flex-column align-items-center">
            <div className="profile-picture">
              <img
                src="/assets/profile.jpg"
                alt="Bala Vamsi Maragani"
                className="profile-img"
              />
            </div>
            <h1>Contact me</h1>
            <div>
              <span className="pi pi-envelope mr-3"></span>
              maragani.dev@gmail.com
            </div>
            <div className="mt-3">
              <span className="pi pi-phone mr-3"></span>+1 (757) 757 - 4319
            </div>
            <div className="contact-links mt-3">
              <a
                href="https://www.linkedin.com/in/maragani-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pi pi-linkedin"></span>
              </a>
              <a
                href="https://github.com/imbalavamsi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pi pi-github"></span>
              </a>
              <a
                href="https://imbalavamsi.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pi pi-globe"></span>
              </a>
              <a
                href="https://maps.app.goo.gl/CrxKGsdyaxrZNpvF8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pi pi-map-marker"></span>
              </a>
              <a
                href="https://x.com/imbalavamsi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pi pi-twitter"></span>
              </a>
            </div>
            <Button
              label="Download Resume"
              icon="pi pi-download"
              className="w-14rem mt-5"
              onClick={downloadResume}
            />
          </div>
        </div>
        <div className="w-full md:w-2">
          <Divider layout="vertical" className="hidden md:flex" />
          <Divider
            layout="horizontal"
            className="flex md:hidden"
            align="center"
          />
        </div>
        <div className="w-full md:w-5 flex flex-column gap-3 p-5 contact-form">
          <h3 className="contact-title">
            <i
              className="pi pi-comment"
              style={{ marginRight: "10px", color: "#0077b5" }}
            ></i>
            Let's Talk – Drop a Message!
          </h3>

          <FloatLabel>
            <InputText
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-inputText"
            />
            <label htmlFor="name">Your Name</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-inputText"
            />
            <label htmlFor="email">Your Email</label>
          </FloatLabel>
          <FloatLabel>
            <InputTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={8}
              className="p-inputText"
            />
            <label htmlFor="message">Your Message</label>
          </FloatLabel>
          <Button
            label={loading ? "Sending..." : "Send"}
            icon="pi pi-send"
            className="w-10rem p-button"
            severity="success"
            onClick={sendDataToWeb3Forms}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
}
