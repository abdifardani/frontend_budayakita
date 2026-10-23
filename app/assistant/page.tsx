"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  Bot,
  Send,
  Sparkles,
  UserRound,
  LoaderCircle,
} from "lucide-react";
import { API_URL } from "@/lib/api";

type Message = {
  role: "assistant" | "user";
  content: string;
  sources?: { label: string; url: string }[];
  mode?: string;
};

function AssistantUI() {
  const params = useSearchParams();
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Halo, selamat datang di BudayaKita. Saya siap menemani kamu mengenal budaya Sumatera Selatan—mulai dari tradisi, kuliner, seni, bahasa, hingga sejarah. Apa yang ingin kamu ketahui?",
    },
  ]);

  useEffect(() => {
    const q = params.get("q");
    if (q) setInput(q);
  }, [params]);

  async function send(e?: FormEvent) {
    e?.preventDefault();

    const text = input.trim();
    if (!text || busy) return;

    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setBusy(true);

    try {
      // API_URL berasal dari NEXT_PUBLIC_API_URL di file .env
      const baseUrl = API_URL.replace(/\/+$/, "");
      const endpoint = `${baseUrl}/assistant`;

      console.log("Assistant API endpoint:", endpoint);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || `Request gagal dengan status ${response.status}`,
        );
      }

      if (typeof data?.answer !== "string") {
        throw new Error("Respons backend tidak memiliki properti answer.");
      }

      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.answer,
          sources: data.sources,
          mode: data.mode,
        },
      ]);
    } catch (error) {
      console.error("AI Assistant error:", error);

      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Maaf, layanan AI belum dapat diakses. Silakan periksa koneksi backend.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  const prompts = [
    "Apa keunikan kain songket Palembang?",
    "Ceritakan tentang Rumah Limas",
    "Apa yang membuat pempek khas Palembang?",
    "Bagaimana sejarah Sriwijaya?",
  ];

  return (
    <main className="assistant-page">
      <section className="assistant-intro">
        <span className="eyebrow dark-eyebrow">
          BUDAYAKITA INTELLIGENCE
        </span>

        <div className="assistant-symbol">
          <Sparkles size={29} />
        </div>

        <h1>
          Rasa ingin tahu
          <br />
          <em>adalah awal pelestarian.</em>
        </h1>

        <p>
          Tempat bertanya dan memahami warisan budaya Sumatera Selatan. Mulai
          dari satu pertanyaan kecil.
        </p>
      </section>

      <section className="chat-shell">
        <div className="chat-header">
          <div className="chat-avatar">
            <Bot />
          </div>

          <div>
            <strong>AI Culture Assistant</strong>
            <span>
              <i /> Asisten budaya · Bahasa Indonesia
            </span>
          </div>

          <span className="beta-pill">BETA</span>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div className={`message ${m.role}`} key={i}>
              <span className="message-avatar">
                {m.role === "assistant" ? (
                  <Bot size={17} />
                ) : (
                  <UserRound size={17} />
                )}
              </span>

              <div className="message-body">
                <p>{m.content}</p>

                {m.mode === "fallback" ? (
                  <span className="mode-note">
                    Mode demo — konfigurasi AI untuk jawaban generatif.
                  </span>
                ) : null}

                {m.sources?.length ? (
                  <div className="message-sources">
                    <strong>Referensi terkait</strong>

                    {m.sources.map((s) => (
                      <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {s.label} <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}

          {busy ? (
            <div className="message assistant">
              <span className="message-avatar">
                <Bot size={17} />
              </span>

              <div className="message-body typing">
                <LoaderCircle className="spin" size={16} /> Menyiapkan
                jawaban...
              </div>
            </div>
          ) : null}
        </div>

        <div className="suggested-prompts">
          <span>Coba tanyakan</span>

          <div>
            {prompts.map((p) => (
              <button key={p} onClick={() => setInput(p)}>
                {p} <ArrowUpRight size={13} />
              </button>
            ))}
          </div>
        </div>

        <form className="chat-input-row" onSubmit={send}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan sesuatu tentang budaya..."
            maxLength={1200}
            aria-label="Tulis pertanyaan"
          />

          <button
            type="submit"
            aria-label="Kirim pesan"
            disabled={!input.trim() || busy}
          >
            <Send size={18} />
          </button>
        </form>

        <p className="chat-disclaimer">
          Jawaban AI dapat keliru. Verifikasi informasi budaya melalui sumber
          tepercaya.
        </p>
      </section>
    </main>
  );
}

export default function AssistantPage() {
  return (
    <Suspense
      fallback={
        <main className="assistant-page">
          <p>Memuat AI Culture Assistant...</p>
        </main>
      }
    >
      <AssistantUI />
    </Suspense>
  );
}
