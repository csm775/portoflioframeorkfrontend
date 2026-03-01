"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function PortfolioScript() {
  useEffect(() => {
   
    const stats = document.querySelectorAll<HTMLDivElement>('.stat__number');

    function animateStats() {
      stats.forEach(stat => {
        const target = parseInt(stat.dataset.count || '0', 10);
        let current = 0;
        const increment = target / 60;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            stat.textContent = target.toString();
            clearInterval(timer);
          } else {
            stat.textContent = Math.floor(current).toString();
          }
        }, 16);
      });
    }

    const aboutSection = document.querySelector('.about__stats');
    if (aboutSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(aboutSection);
    }

    
    const cursor = document.querySelector<HTMLDivElement>('.cursor');
    const cursorFollower = document.querySelector<HTMLDivElement>('.cursor-follower');

    if (cursor && cursorFollower) {
      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
        }, 100);
      };

      document.addEventListener('mousemove', moveCursor);

      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(1.5)';
          cursorFollower.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)';
          cursorFollower.style.transform = 'scale(1.5)';
        });
      });

      
      return () => document.removeEventListener('mousemove', moveCursor);
    }

   
    const form = document.getElementById("contact-form") as HTMLFormElement | null;

    if (form) {
      const handleSubmit = (e: Event) => {
        e.preventDefault();

        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        )
        .then(() => {
          alert("Message envoyé avec succès !");
          form.reset();
        })
        .catch((err) => {
          console.error("Erreur EmailJS :", err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
      };

      form.addEventListener("submit", handleSubmit);

      
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }

  }, []);

  return null;
}