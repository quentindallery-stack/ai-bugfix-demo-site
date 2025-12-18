x
"use client";
import { useState } from "react";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailValid = /\S+@\S+\.\S+/.test(email);
  const passwordValid = password.length >= 8;
  const passwordsMatch = password === confirm;
  const nameValid = firstName.trim() !== "" && lastName.trim() !== "";

  const formValid = emailValid && passwordValid && passwordsMatch && nameValid && acceptedTerms;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formValid) return;
    // fake submit for demo
    setSubmitted(true);
    console.log({ firstName, lastName, email, phone, company });
  }

  return (
    <div className="card-split max-w-4xl mx-auto">
      <div className="p-10 bg-white">

        <h1 className="text-3xl font-extrabold mb-2">Inscrivez-vous</h1>
        <p className="text-sm text-muted mb-6">Renseignez le juste nécessaire pour rejoindre une communauté orientée e-sport</p>

        {submitted && (
          <div className="p-4 mb-4 success rounded">
            Merci — votre compte a été créé (demo).
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm label">Email</label>
          <input
            className={`input ${email && !emailValid ? "border-red-400" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email && !emailValid && <p className="text-sm text-red-500 mt-1">Adresse email invalide</p>}

          <label className="block mb-2 mt-4 text-sm label">Mot de passe</label>
          <input
            type="password"
            className={`input ${password && !passwordValid ? "border-red-400" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && !passwordValid && <p className="text-sm text-red-500 mt-1">8 caractères minimum</p>}

          <label className="block mb-2 mt-4 text-sm label">Confirmer mot de passe</label>
          <input
            type="password"
            className={`input ${confirm && !passwordsMatch ? "border-red-400" : ""}`}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {confirm && !passwordsMatch && <p className="text-sm text-red-500 mt-1">Les mots de passe ne correspondent pas</p>}

          <label className="mt-4 flex items-center gap-2 text-sm label">
            <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
            J'accepte les conditions d'utilisation
          </label>

          <button
            type="submit"
            disabled={!formValid}
            className={`btn btn-gradient w-full mt-6 ${formValid ? "" : "opacity-50 cursor-not-allowed"}`}
          >
            Créer mon compte
          </button>
        </form>
      </div>

      <div className="panel-gradient p-10 flex flex-col items-center justify-center gap-6 text-center">
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12C6 8.68629 8.68629 6 12 6s6 2.68629 6 6-2.68629 6-6 6-6-2.68629-6-6z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 14l1.5-1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="text-white font-bold text-xl">SSD siteweb</div>
        <div className="text-white text-sm">Rejoindre la compétition</div>
        <div className="text-white text-xs max-w-[220px]">Partagez vos statistiques, avoir accès aux offres d'emploi ou encore être coaché par des professionnels du milieu</div>

        <div className="flex items-center gap-2 mt-6">
          <div className="decor-dot" />
          <div className="decor-dot opacity-50" />
          <div className="decor-dot opacity-30" />
        </div>
      </div>
    </div>
  );
}