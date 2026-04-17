{[
                { val: "3+", label: "Years Exp." },
                { val: "20+", label: "Projects" },
                { val: "10+", label: "Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white">{s.val}</p>
                  <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                </div>
              ))}