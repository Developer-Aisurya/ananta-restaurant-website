import { useState } from "react";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter the name for this reservation.";
  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Enter a phone number.";
  } else if (!/^[0-9+\-()\s]{7,}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.date) {
    errors.date = "Select a date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(values.date) < today) errors.date = "Choose a date from today onward.";
  }
  if (!values.time) errors.time = "Select a time.";
  if (!values.guests || Number(values.guests) < 1) errors.guests = "Enter at least one guest.";
  if (Number(values.guests) > 14)
    errors.guests = "For parties over 14, please call us directly to arrange the Jharokha room.";
  return errors;
}

const TIME_SLOTS = ["12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export default function ReservationForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate({ ...values }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    setTouched({
      name: true,
      email: true,
      phone: true,
      date: true,
      time: true,
      guests: true,
    });

    if (Object.keys(validation).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const reset = () => {
    setValues(INITIAL);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div data-reveal className="border border-gold/40 bg-forest/5 p-8 md:p-12 text-center">
        <span className="eyebrow text-terracotta text-xs">Reservation Requested</span>
        <h3 className="font-display text-3xl md:text-4xl mt-4 text-ink">
          Thank you, {values.name.split(" ")[0]}.
        </h3>
        <p className="mt-4 text-ink/70 max-w-md mx-auto leading-relaxed">
          Your table for {values.guests} on{" "}
          <strong>
            {new Date(values.date).toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </strong>{" "}
          at <strong>{values.time}</strong> has been requested. A member of our host team will
          confirm by email at {values.email} within two hours.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 border border-ink/20 px-6 py-3 text-sm uppercase tracking-wide hover:border-terracotta hover:text-terracotta transition-colors"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  const fieldError = (name) => touched[name] && errors[name];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby={status === "error" ? "form-error-summary" : undefined}>
      {status === "error" && Object.keys(errors).length > 0 && (
        <div
          id="form-error-summary"
          role="alert"
          className="border border-maroon/40 bg-maroon/5 text-maroon px-5 py-4 text-sm"
        >
          Please correct the highlighted fields before submitting.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Full Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldError("name")}
          autoComplete="name"
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldError("email")}
          autoComplete="email"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldError("phone")}
          autoComplete="tel"
        />
        <Field
          label="Number of Guests"
          name="guests"
          type="number"
          min="1"
          max="20"
          value={values.guests}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldError("guests")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Date"
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldError("date")}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-xs uppercase tracking-wide text-ink/55">
            Time
          </label>
          <select
            id="time"
            name="time"
            value={values.time}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-transparent border-b py-3 text-ink focus:outline-none transition-colors ${
              fieldError("time") ? "border-maroon" : "border-ink/20 focus:border-terracotta"
            }`}
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {fieldError("time") && <span className="text-xs text-maroon">{errors.time}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="requests" className="text-xs uppercase tracking-wide text-ink/55">
          Special Requests <span className="text-ink/35 normal-case">(optional)</span>
        </label>
        <textarea
          id="requests"
          name="requests"
          rows={4}
          value={values.requests}
          onChange={handleChange}
          placeholder="Dietary restrictions, celebrations, seating preferences..."
          className="bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-terracotta transition-colors resize-none placeholder:text-ink/30"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-terracotta text-ivory px-10 py-4 text-sm uppercase tracking-widest hover:bg-terracotta-light transition-colors duration-300 disabled:opacity-60"
      >
        {status === "submitting" ? "Requesting..." : "Request Reservation"}
      </button>
    </form>
  );
}

function Field({ label, name, error, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-wide text-ink/55">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`bg-transparent border-b py-3 text-ink focus:outline-none transition-colors placeholder:text-ink/30 ${
          error ? "border-maroon" : "border-ink/20 focus:border-terracotta"
        }`}
        {...props}
      />
      {error && (
        <span id={`${name}-error`} className="text-xs text-maroon">
          {error}
        </span>
      )}
    </div>
  );
}
