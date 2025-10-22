import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              <span className="text-slate-100">Vexella</span>{" "}
              <span className="text-blue-400">Pharmaceuticals Pvt Ltd</span>
            </h3>
            <p className="mt-2 text-slate-400">Your health, our commitment.</p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <h4 className="text-sm font-semibold text-slate-300">Navigate</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#home" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#product" className="hover:text-white">Product</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">About</a>
              </li>
            </ul>
          </nav>

          <div className="space-y-3 md:justify-self-end">
            <h4 className="text-sm font-semibold text-slate-300">Contact</h4>

            <address className="not-italic text-slate-300">
              <span className="font-medium text-slate-100">Address:</span>{" "}
              A/401, Raj Anmol 2, L.M Road, Borivali (W), Mumbai — 400103
            </address>

            <address className="not-italic text-slate-300">
              <span className="font-medium text-slate-100">Administrative:</span>{" "}
              Plot 84/7A, Talab Tillo, Bohri, Jammu — 180002
            </address>

            <p className="text-slate-300">
              <span className="font-medium text-slate-100">Email:</span>{" "}
              <a
                className="underline underline-offset-2 hover:text-white"
                href="mailto:vexellapharmaceuticals@gmail.com"
              >
                vexellapharmaceuticals@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Vexella Pharmaceuticals Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              aria-label="Email"
              href="mailto:vexellapharmaceuticals@gmail.com"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
              title="Email us"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-200">
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a
              aria-label="Location"
              href="https://maps.google.com/?q=Raj%20Anmol%202,%20L.M%20Road,%20Borivali%20West,%20Mumbai%20400103"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
              title="View on Maps"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-200">
                <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a href="#home" className="p-2 rounded-lg bg-white/5 hover:bg-white/10" title="Back to top" aria-label="Back to top">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-200">
                <path d="M12 5l-7 7m7-7l7 7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
