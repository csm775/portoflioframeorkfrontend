"use client";

import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    const name = (form.user_name as HTMLInputElement).value.trim();
    const email = (form.user_email as HTMLInputElement).value.trim();
    const subject = (form.subject as HTMLInputElement).value.trim();
    const message = (form.message as HTMLTextAreaElement).value.trim();

    // Validation simple
    if (!name || !email || !subject || !message) {
      setStatusMessage("Veuillez remplir tous les champs correctement.");
      setStatusType("error");
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage("Email invalide.");
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setIsSubmitting(false);
          setStatusMessage("Message envoyé avec succès !");
          setStatusType("success");
          form.reset();
        },
        (error) => {
          console.error(error);
          setIsSubmitting(false);
          setStatusMessage("Erreur lors de l'envoi. Réessayez.");
          setStatusType("error");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
      <div className="form__row">
        <input type="text" name="user_name" placeholder="Votre nom" required />
        <input type="email" name="user_email" placeholder="Votre email" required />
      </div>
      <input type="text" name="subject" placeholder="Sujet" required />
      <textarea name="message" placeholder="Votre message" rows={5} required />
      <button type="submit" disabled={isSubmitting} className="btn btn--primary btn--full">
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {statusMessage && (
        <p
          className={`form-status ${statusType === "success" ? "success" : "error"}`}
          style={{
            marginTop: "1rem",
            color: statusType === "success" ? "#10b981" : "#ef4444",
            fontWeight: 500,
          }}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}