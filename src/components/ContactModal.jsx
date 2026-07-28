import { useState } from "react";
import { useModal } from "../context/ModalContext";
import { X, Check, Loader2, Camera, UserSquare2, Film, Megaphone } from "lucide-react";

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL";

const SERVICES = [
  { id: "product-shooting", label: "Product Shooting", icon: Camera },
  { id: "personal-brand-shoot", label: "Personal Brand Shoot", icon: UserSquare2 },
  { id: "video-editing", label: "Video Editing", icon: Film },
  { id: "social-media-management", label: "Social Media Management", icon: Megaphone },
];

export default function ContactModal() {
  const { isOpen, setIsOpen } = useModal();

  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  if (!isOpen) return null;

  const close = () => {
    if (status === "submitting") return;
    setIsOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", phone: "", email: "", service: "" });
      setErrors({});
    }, 200);
  };

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Enter name";
    if (!form.phone) e.phone = "Enter phone";
    if (!form.email) e.email = "Enter email";
    if (!form.service) e.service = "Select service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      });

      setStatus("success");
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
      
      {/* 🔥 BLUR BACKGROUND */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={close}
      />

      {/* 💎 MODAL */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 animate-[fadeIn_.25s]">

        {/* CLOSE */}
        {status !== "success" && (
          <button onClick={close} className="absolute top-4 right-4 text-black border-2 rounded-2xl border-olive-950">
            <X />
          </button>
        )}

        {/* ✅ SUCCESS */}
        {status === "success" ? (
          <div className="text-center py-10">
            <Check className="mx-auto mb-4" size={40} />
            <h2 className="text-2xl font-bold text-black">Successfully Submitted!</h2>
            <p className="text-xl text-black">Thank You! for submitting form, Our team will contact in 1-2 working days</p>
            <button onClick={close} className="mt-4 bg-black text-white px-4 py-2 rounded-xl">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-black">

            <h2 className="text-xl font-bold text-black">Let's work together</h2>

            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded bg-gray-200"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-3 rounded bg-gray-100 text-black"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded bg-gray-100"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            {/* SERVICES */}
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setForm({ ...form, service: s.id })}
                    className={`p-3 rounded-xl border ${
                      form.service === s.id ? "bg-black text-white" : ""
                    }`}
                  >
                    <Icon size={16} />
                    <p className="text-xs">{s.label}</p>
                  </button>
                );
              })}
            </div>

            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl flex justify-center"
            >
              {status === "submitting" ? <Loader2 className="animate-spin" /> : "Submit"}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}