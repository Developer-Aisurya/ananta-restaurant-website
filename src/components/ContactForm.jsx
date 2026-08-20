import { useState } from "react";

const INITIAL = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Enter a message.";
  else if (values.message.trim().length < 10) errors.message = "Say a little more — at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validation).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1000);
  };

  if (status === "success") {
    return (
      <div data-reveal className="border border-gold/40 bg-forest/5 p-8 text-center">
        <h3 className="font-display text-2xl text-ink">Message received.</h3>
        <p className="mt-3 text-ink/65 leading-relaxed">
          Thank you, {values.name.split(" ")[0]}. Our team replies within one business day.
        </p>
        <button
          onClick={() => {
            setValues(INITIAL);
            setStatus("idle");
            setTouched({});
          }}
          className="mt-6 inline-flex items-center gap-2 border border-ink/20 px-5 py-2.5 text-sm uppercase tracking-wide hover:border-terracotta hover:text-terracotta transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const fieldError = (name) => touched[name] && errors[name];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" && Object.keys(errors).length > 0 && (
        <div role="alert" className="border border-maroon/40 bg-maroon/5 text-maroon px-5 py-4 text-sm">
          Please correct the highlighted fields before sending.
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="c-name" className="text-xs uppercase tracking-wide text-ink/55">Name</label>
          <input
            id="c-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!fieldError("name")}
            className={`bg-transparent border-b py-3 focus:outline-none transition-colors ${
              fieldError("name") ? "border-maroon" : "border-ink/20 focus:border-terracotta"
            }`}
          />
          {fieldError("name") && <span className="text-xs text-maroon">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-email" className="text-xs uppercase tracking-wide text-ink/55">Email</label>
          <input
            id="c-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!fieldError("email")}
            className={`bg-transparent border-b py-3 focus:outline-none transition-colors ${
              fieldError("email") ? "border-maroon" : "border-ink/20 focus:border-terracotta"
            }`}
          />
          {fieldError("email") && <span className="text-xs text-maroon">{errors.email}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-subject" className="text-xs uppercase tracking-wide text-ink/55">
          Subject <span className="text-ink/35 normal-case">(optional)</span>
        </label>
        <input
          id="c-subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          className="bg-transparent border-b border-ink/20 py-3 focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-message" className="text-xs uppercase tracking-wide text-ink/55">Message</label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!fieldError("message")}
          className={`bg-transparent border-b py-3 focus:outline-none transition-colors resize-none ${
            fieldError("message") ? "border-maroon" : "border-ink/20 focus:border-terracotta"
          }`}
        />
        {fieldError("message") && <span className="text-xs text-maroon">{errors.message}</span>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-terracotta text-ivory px-10 py-4 text-sm uppercase tracking-widest hover:bg-terracotta-light transition-colors duration-300 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
