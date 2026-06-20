import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle,
  Mail,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SocialLinks from "./SocialLinks";
import { EMAIL } from "../data/contact";
import { submitEnquiry } from "../utils/submitEnquiry";

const serviceOptions = [
  "Tensile Roofing",
  "General Roofing Works",
  "Polycarbonate Roofing",
  "Stonecoated Roof",
  "UPVC Roof",
  "PUF Roof",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitEnquiry(form);
      setStatus("success");
      setForm({ name: "", phone: "", service: "", message: "" });
      showToast(
        "success",
        "Enquiry Submitted!",
        "Your request has been sent. We'll get back to you shortly."
      );
    } catch {
      setStatus("error");
      showToast(
        "error",
        "Submission Failed",
        "Please try again or call us directly at +91 73977 98007."
      );
    } finally {
      setStatus("idle");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="relative section-padding bg-steel-dark diagonal-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-space">
          <span className="reveal text-brand font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mt-2">
            Contact <span className="text-brand">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="reveal reveal-delay-2 space-y-6">
            <div className="flex items-start gap-4 p-5 bg-steel border border-white/5 rounded-sm">
              <div className="w-12 h-12 bg-brand/10 rounded-sm flex items-center justify-center shrink-0">
                <MapPin className="text-brand" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white uppercase">
                  Address
                </h3>
                <p className="text-slate-400 mt-1">
                  62/19, 10th Ave, Ashok Nagar,
                  <br />
                  Chennai, Tamil Nadu – 600083
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-steel border border-white/5 rounded-sm">
              <div className="w-12 h-12 bg-brand/10 rounded-sm flex items-center justify-center shrink-0">
                <Phone className="text-brand" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white uppercase">
                  Phone
                </h3>
                <a
                  href="tel:+917397798007"
                  className="text-brand hover:text-brand-light mt-1 inline-block font-semibold"
                >
                  +91 73977 98007
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-steel border border-white/5 rounded-sm">
              <div className="w-12 h-12 bg-brand/10 rounded-sm flex items-center justify-center shrink-0">
                <Clock className="text-brand" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white uppercase">
                  Working Hours
                </h3>
                <p className="text-slate-400 mt-1">
                  Monday – Saturday: 10:00 AM – 7:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-steel border border-white/5 rounded-sm">
              <div className="w-12 h-12 bg-brand/10 rounded-sm flex items-center justify-center shrink-0">
                <Mail className="text-brand" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white uppercase">
                  Email
                </h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-brand hover:text-brand-light mt-1 inline-block font-semibold break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="p-5 bg-steel border border-white/5 rounded-sm">
              <h3 className="font-heading font-bold text-white uppercase mb-1">
                Follow Us
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Connect with us on social media for project updates and offers.
              </p>
              <SocialLinks />
            </div>

            <div className="rounded-sm overflow-hidden border border-white/5 h-56 sm:h-64 lg:h-80">
              <iframe
                title="Seyon Structures Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.2089!3d13.0051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669e8e5c0001%3A0x0!2sAshok%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <form
              onSubmit={handleSubmit}
              className="bg-steel border border-white/5 rounded-sm p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-5"
            >
              <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                Send an Enquiry
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-steel-dark border border-white/10 rounded-sm px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors disabled:opacity-60"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  disabled={isSubmitting}
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-steel-dark border border-white/10 rounded-sm px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors disabled:opacity-60"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  disabled={isSubmitting}
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-steel-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none disabled:opacity-60"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  disabled={isSubmitting}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-steel-dark border border-white/10 rounded-sm px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors resize-none disabled:opacity-60"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-shimmer w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:bg-brand/70 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-4 rounded-sm transition-colors duration-200"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 toast-enter flex items-center gap-3 border text-white px-5 sm:px-6 py-4 rounded-sm shadow-xl ${
            toast.type === "success"
              ? "bg-steel border-brand/30"
              : "bg-steel border-red-500/40"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="text-brand shrink-0" size={22} />
          ) : (
            <AlertCircle className="text-red-400 shrink-0" size={22} />
          )}
          <div>
            <p className="font-semibold">{toast.title}</p>
            <p className="text-sm text-slate-400">{toast.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
