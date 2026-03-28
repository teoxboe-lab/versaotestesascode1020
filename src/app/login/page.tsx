'use client';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="border-2 border-black bg-white shadow-brutal-xl p-8 w-full max-w-sm text-center">
        <div className="text-4xl mb-4">⚡</div>
        <h2 className="font-black text-2xl uppercase mb-1">Funnel 1.0</h2>
        <p className="text-gray-600 text-sm mb-8">Entre para criar seus funis com IA</p>
        <button
          onClick={() => signIn("google")}
          className="w-full btn-brutal bg-white border-2 border-black py-3 font-black uppercase flex items-center justify-center gap-3 hover:bg-brand-yellow transition-colors"
        >
          Entrar com Google
        </button>
        <p className="mt-6 text-xs text-gray-400">Ao entrar você concorda com nossos termos de uso</p>
      </div>
    </main>
  );
}