"use client";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ❌ BUG 1 : validation cassée (toujours false)
  const formValid = false; // <-- l'IA devra corriger ça

  // ❌ BUG 2 : wording cassé
  const buttonLabel = "Créeeeer mon compte"; // faute volontaire

  // ❌ BUG 3 : style cassé
  const buttonStyles =
    "w-full mt-[-20px] p-1 bg-blue-600 text-white rounded opacity-40"; // margin-top négatif

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Inscription</h1>

      <label className="block mb-2">Email</label>
      <input
        className="w-full border border-gray-300 rounded p-2 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block mb-2">Mot de passe</label>
      <input
        type="password"
        className="w-full border border-gray-300 rounded p-2 mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={!formValid} className={buttonStyles}>
        {buttonLabel}
      </button>
    </div>
  );
}
