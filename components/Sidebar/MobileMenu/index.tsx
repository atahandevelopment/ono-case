import { HambergerMenu } from 'iconsax-react'
import MobileSidebar from './MobileSidebar';
import './MobileSidebar/styles/index.scss';

type Props = {
    setMobileSidebarOpen: (value: boolean) => void;
    mobileSidebarOpen: boolean;
}

const MobileMenu = ({mobileSidebarOpen, setMobileSidebarOpen}: Props) => {
  return (
    <>
      {mobileSidebarOpen ? (
        <div className="menu-mbl">
          <MobileSidebar
            mobileSidebarOpen={mobileSidebarOpen}
            setMobileSidebarOpen={setMobileSidebarOpen}
          />
        </div>
      ) : (
        <></>
      )}
      <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="menu-icon">
        <HambergerMenu
          size={32}
          className={`text-black font-semibold size-5`}
        />
      </button>
    </>
  )
}

export default MobileMenu