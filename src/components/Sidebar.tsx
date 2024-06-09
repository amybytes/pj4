import clsx from 'clsx';

interface SidebarProps {
  className?: string;
}

function Sidebar({className}: SidebarProps) {
  return (
    <div className={clsx(className, 'h-full p-2 border-r-4 border-white')}>
      <div>
        <img
          src="/logo_192.png"
          width="92"
          height="92"
          className="border-white border-2 rounded-md"
        />
      </div>
      <div>
        <h2>February 2024</h2>
        <h2>January 2024</h2>
        <h2>2022</h2>
        <h2>2023</h2>
        <h2>2021</h2>
        <h2>2020</h2>
      </div>
    </div>
  );
}

export default Sidebar;
