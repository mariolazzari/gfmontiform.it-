import Brochure from "@/components/Brochure";
import { BrochureProps } from "@/components/Brochure/BrochureProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochures",
};

function BrochuresPage() {
  const conversations: BrochureProps[] = [
    {
      title: "English conversation",
      subtitle: "Conversazione sabato mattina",
      description: "Migliora il tuo inglese in un'atmosfera rilassata",
      imagePath: "conversation sabato mattina.png",
      href: "conversation sabato mattina.pdf",
    },
    {
      title: "Conversasione spagnola",
      subtitle: "Ogni martedì sera",
      description: "Dalle ore 18:30 alle ore 20:00",
      imagePath: "conversazione spagnola.png",
      href: "conversazione spagnola.pdf",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-4xl text-center">Conversazioni</h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {conversations.map(conv => (
          <Brochure key={conv.title} {...conv} />
        ))}
      </div>
    </div>
  );
}

export default BrochuresPage;
