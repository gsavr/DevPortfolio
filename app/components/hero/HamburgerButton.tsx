import { ToggleTheme } from "../ToggleTheme";

interface HamburgerButtonProps {
  open: string | undefined;
  openMobileMenu: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = (props) => {
  const { open, openMobileMenu } = props;

  return (
    <div className="flex items-center md:hidden">
      <button
        id="menu-btn"
        onClick={openMobileMenu}
        type="button"
        aria-label="Toggle mobile menu"
        className={`${open} hamburger z-[60] block focus:outline-none md:hidden`}
      >
        <span className="hamburger-top bg-black dark:bg-white"></span>
        <span className="hamburger-middle bg-black dark:bg-white"></span>
        <span className="hamburger-bottom bg-black dark:bg-white"></span>
      </button>
      {/* mobile dark theme toggle */}
      <div className="block pr-0 pt-0 md:hidden">
        <ToggleTheme />
      </div>
    </div>
  );
};
