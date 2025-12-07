import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, Github } from "lucide-react";

import PageWrapper from "../components/PageWrapper";
import ScrollButtons from "../components/ScrollButtons";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwAG-21ZD952oV7MW9qetXdb1_JwV22wlmrWrWm-In2kaCrBZZdpG957I0hYzmXyDUL/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setStatus("Message Sent Successfully! 🎉");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <PageWrapper>
      <ScrollButtons />

      {/* HERO HEADER */}
      <section className="py-32 gradient-hero relative overflow-hidden text-center">
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-7xl font-black text-gradient mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Get in touch with ACM SIGAI SRM — we’re always excited to connect!
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 gradient-dark relative">
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* CONTACT CARDS */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-3">
                <Mail className="w-8 h-8 text-white" />
                <h2 className="text-2xl font-semibold text-white">Email</h2>
              </div>
              <p className="text-white/70 text-lg">acmcintel@gmail.com</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-3">
                <Phone className="w-8 h-8 text-white" />
                <h2 className="text-2xl font-semibold text-white">Phone</h2>
              </div>
              <p className="text-white/70 text-lg">+91 98106 72587</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-3">
                <MapPin className="w-8 h-8 text-white" />
                <h2 className="text-2xl font-semibold text-white">Location</h2>
              </div>
              <p className="text-white/70 text-lg">
                SRM Institute of Science & Technology, Chennai
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="glass-card-light p-10 rounded-3xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-cyan text-white placeholder-white/40"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-cyan text-white placeholder-white/40"
              />

              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-cyan text-white placeholder-white/40"
              ></textarea>

              {status && (
                <p className="text-white/80 text-center text-sm">{status}</p>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-lg font-bold uppercase tracking-widest gradient-accent shadow-xl hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
<section className="py-24 text-center gradient-hero border-t border-white/10">
  <h2 className="text-4xl font-bold text-gradient mb-10">Connect With Us</h2>
  <div className="flex justify-center gap-10">
    {[
      { Icon: Globe, link: "https://sigai.acm.org/main/" },
      { Icon: Github, link: "https://github.com/SRM-ACM-SIGAI" },
      { Icon: Instagram, link: "https://www.instagram.com/srmsigai/?__d=11" },
      { Icon: Linkedin, link: "https://www.linkedin.com/company/srmist-ktr-acm-sigai/" }
    ].map(({ Icon, link }, index) => (
      <a
        key={index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 flex items-center justify-center rounded-2xl border border-white/20 transition-all hover:border-cyan/80"
      >
        <Icon className="w-10 h-10 text-white hover:text-cyan transition-all" />
      </a>
    ))}
  </div>
</section>

      {/* MAP */}
      <section className="py-24 gradient-dark text-center border-t border-white/10">
        <h2 className="text-4xl font-semibold text-gradient mb-10">Locate Us</h2>
        <div className="rounded-3xl overflow-hidden max-w-5xl mx-auto border border-white/20">
          <iframe
            className="w-full h-[450px]"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.22989193847!2d80.04147687585429!3d12.82302888754198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7bbbcb32d0b%3A0x8d40e2a8b3b062ad!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </div>
      </section>
    </PageWrapper>
  );
}
