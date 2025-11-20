"use client";

const sections = [
  { label: "About Me", id: "me-section" },
  { label: "Experiences", id: "experiences-section" },
  { label: "Skills", id: "skills-section" },
  { label: "Projects", id: "projects-section" },
{ label: "Contact Me", id: "contacts-section" }
];

export default function Header() {
    const handleNav = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header style={{
            width: "100%",
            padding: "1rem 0",
            background: "rgba(255, 255, 255, 0.85)",
            textAlign: "center",
            position: "sticky",
            top: 0,
            zIndex: 10,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
        }}>
            {sections.map((section) => (
                <button
                    key={section.id}
                    style={{
                        margin: "0 1rem",
                        padding: "0.75rem 1.5rem",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "6px",
                        background: "none",
                        cursor: "pointer",
                        transition: "background 0.2s, color 0.2s"
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "#545454";
                        (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "none";
                        (e.currentTarget as HTMLButtonElement).style.color = "#000";
                    }}
                    onClick={() => handleNav(section.id)}
                >
                    {section.label}
                </button>
            ))}
        </header>
    );
}