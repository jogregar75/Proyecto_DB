import { useParams } from "react-router-dom";
import StaffSection from "@/components/StaffSection";

const labels: Record<string, string> = {
  "1": "1er Año",
  "2": "2do Año",
  "3": "3er Año",
  "4": "4to Año",
  "5": "5to Año",
};

export default function NivelSecundaria() {
  const { year = "1" } = useParams();
  const label = labels[year] ?? "Bachillerato";
  return <StaffSection title={`Bachillerato - ${label}`} subtitle="Conoce al equipo de coordinación y docentes que, inspirados en los valores de Don Bosco, acompañan a nuestros estudiantes en su crecimiento académico, humano y espiritual." cargo="Coordinador" level="bachillerato" section={year} />;
}
