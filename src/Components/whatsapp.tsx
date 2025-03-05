
import { Button } from "@/Components/ui/button"; 
import { WhatsappLogo } from "@phosphor-icons/react";

const WhatsAppButton = () => {
  const whatsappNumber = "+2349068941858"; 
  const message = encodeURIComponent("Hello, I need assistance!");

  return (
    <Button
      className="fixed bottom-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all z-[9999]"
      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")}
    >
      <WhatsappLogo size={36} weight="fill" />
    </Button>
  );
};

export default WhatsAppButton;
