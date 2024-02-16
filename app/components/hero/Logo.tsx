import logo_light from "../../assets/images/GS_Logo_light.webp";
import logo_dark from "../../assets/images/GS_Logo_dark.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export const Logo: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
    >
      <Image
        src={logo_dark}
        alt="GS Logo"
        priority
        width={50}
        height={50}
        className="z-40 hidden h-12 w-12 rounded-full transition duration-200 hover:scale-110 dark:block "
      />

      <Image
        src={logo_light}
        alt="GS Logo"
        priority
        width={50}
        height={50}
        className="z-40 block h-12 w-12 rounded-full transition duration-200 hover:scale-110 dark:hidden"
      />
    </motion.div>
  );
};
