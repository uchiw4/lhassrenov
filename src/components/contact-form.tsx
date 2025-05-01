"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      firstName: form["first-name"].value,
      lastName: form["last-name"].value,
      email: form["email"].value,
      phone: form["phone"].value,
      service: form["service"].value,
      message: form["message"].value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        alert("Votre message a bien été envoyé !");
        form.reset();
      } else {
        const err = await res.json();
        console.error("Erreur API :", err);
        alert("Erreur lors de l'envoi : " + (err?.error || "inconnue"));
      }
      
    } catch (error) {
      alert("Erreur réseau"+ (error || "inconnue"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulaire de contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <Input id="first-name" name="first-name" type="text" required className="w-full" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <Input id="last-name" name="last-name" type="text" required className="w-full" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
            <Input id="email" name="email" type="email" required className="w-full" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
            <Input id="phone" name="phone" type="tel" required className="w-full" />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service souhaité</label>
            <select
              id="service"
              name="service"
              className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500"
              required
            >
              <option value="">Sélectionnez un service</option>
              <option value="bathroom">Rénovation de salle de bain</option>
              <option value="apartment">Rénovation appartement</option>
              <option value="house">Rénovation maison</option>
              <option value="heating">Rénovation Chauffage et Climatisation</option>
              <option value="electricity">Rénovation Électricité</option>
              <option value="plumbing">Rénovation Plomberie</option>
              <option value="ac">Installation climatisation</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500"
              placeholder="Décrivez votre projet..."
            ></textarea>
          </div>

          <div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={loading}>
              {loading ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
