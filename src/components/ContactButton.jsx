import { useModal } from "../context/ModalContext";
import { CircleArrowOutUpRight } from "lucide-react";

const ContactButton = () => {
  const { setIsOpen } = useModal();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="px-7 py-2 rounded-full bg-black text-white flex gap-2"
    >
      Let's Talk <CircleArrowOutUpRight />
    </button>
  );
};

export default ContactButton;