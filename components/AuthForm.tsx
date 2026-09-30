"use client";
import Link from "next/link";
import { useState } from "react";

type Mode = "signup" | "login";
const field = "mt-3 h-16 w-full rounded-2xl border border-line bg-white px-6 text-lg outline-none placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15";

export default function AuthForm({ mode }: { mode: Mode }) {
  const signup = mode === "signup";
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const password = String(d.get("password") ?? "");
    const next: Record<string, string> = {};
    if (signup && name.length < 2) next.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 8) next.password = "Use at least 8 characters.";
    setErrors(next);
    if (!Object.keys(next).length) setDone(true); // TODO: call your Express API here
  }

  const Field = ({ id, label, type = "text", ph, auto }: { id: string; label: string; type?: string; ph: string; auto: string }) => (
    <div className="mt-8 first:mt-0">
      <label htmlFor={id} className="text-lg">{label}</label>
      <input id={id} name={id} type={type} placeholder={ph} autoComplete={auto} className={field}
        aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      {errors[id] && <p id={`${id}-err`} role="alert" className="mt-2 text-sm text-red-600">{errors[id]}</p>}
    </div>
  );

  return (
    <>
      <p className="text-xl text-brand">{signup ? "Create an Account" : "Sign In"}</p>
      <h1 className="mt-2 font-display text-5xl font-semibold leading-tight sm:text-[56px]">{signup ? "Welcome to ByteSpace" : "Welcome Back"}</h1>
      <form onSubmit={onSubmit} noValidate className="mt-14">
        {signup && <Field id="name" label="Full Name" ph="Jamie Davis" auto="name" />}
        <Field id="email" label="Email" type="email" ph="designer@example.com" auto="email" />
        <Field id="password" label="Password" type="password" ph="********" auto={signup ? "new-password" : "current-password"} />
        <div className="mt-10 flex justify-end"><button className="btn">{signup ? "Continue" : "Sign In"}</button></div>
        {done && <p role="status" className="mt-4 text-right text-brand">Form is valid. Connect it to your API to finish.</p>}
      </form>
      {!signup && (
        <>
          <div className="mt-16 flex items-center gap-4 text-body" role="separator"><span className="h-px flex-1 bg-line" />or<span className="h-px flex-1 bg-line" /></div>
          <div className="mt-12 flex justify-center gap-5">
            <button type="button" aria-label="Continue with Facebook" className="grid h-[90px] w-[90px] place-items-center rounded-3xl border border-line transition hover:border-brand">
              <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" /></svg>
            </button>
            <button type="button" aria-label="Continue with Google" className="grid h-[90px] w-[90px] place-items-center rounded-3xl border border-line font-display text-5xl font-bold transition hover:border-brand">G</button>
          </div>
        </>
      )}
      <p className={`${signup ? "mt-20" : "mt-14"} text-center text-lg text-body`}>
        {signup ? "Already have an account? " : "New user? "}
        <Link href={signup ? "/login" : "/signup"} className="text-brand">{signup ? "Login" : "Create an account"}</Link>
      </p>
    </>
  );
}
