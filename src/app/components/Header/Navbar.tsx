import { Menubar } from "primereact/menubar";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import resume from "./BalavamsiMaragani.pdf";

export default function Navbar() {
  const navigate = useNavigate();
  const items = [
    {
      id: "Home",
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: "pi pi-trophy",
      command: () => navigate("/Achievements"),
    },
    {
      id: "LinkedIn",
      label: "LinkedIn",
      icon: "pi pi-linkedin",
      command: () =>
        window.open("https://www.linkedin.com/in/maragani-dev", "_blank"),
    },
    {
      id: "Professional Experience",
      label: "Professional Experience",
      icon: "pi pi-briefcase",
      command: () => navigate("/ProfessionalExperience"),
    },
    {
      id: "Resume Download",
      label: "Download Resume",
      icon: "pi pi-download",
      command: () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Bala_vamsi_Maragani.pdf";
        link.click();
      },
    },
  ];

  // ✅ Add favicon image next to the name
  const start = (
    <div className="logo-container" onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      {/* ✅ Add favicon image */}
      <img
        src="/favicon.png"  // Path from the public folder
        alt="Logo"
        width="40"
        height="40"
        style={{ marginRight: "10px", borderRadius: "50%" }} // Optional styling
      />
      <span className="logo-text">BALA VAMSI MARAGANI</span>
    </div>
  );

  return <Menubar model={items} start={start} />;
}
