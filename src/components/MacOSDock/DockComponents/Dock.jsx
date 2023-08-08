import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { MouseProvider } from '../mouse/MouseProvider.jsx';
import DockItem from './DockItem.jsx';
import DockIcon from './DockIcon.jsx';

const DockContext = createContext(null);

export function useDock() {
  return useContext(DockContext);
}

export default function Dock() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState();

  function openLink(e, link) {
    e.stopPropagation();
    window.open(link);
  }

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, []);

  const dockItemsDesktop = Array.from({ length: 8 }, (_, index) => (
    <DockItem key={index} />
  ));

  const dockItemsMobile = Array.from({ length: 4 }, (_, index) => (
    <DockItem key={index} />
  ));

  return (
    <MouseProvider>
      <div className="relative inset-x-0 z-10 flex justify-center pb-12">
        <div className="flex w-full justify-center">
          <DockContext.Provider value={{ isHovered, width }}>
            <nav
              ref={ref}
              className="flex justify-center rounded-macos bg-macOSBg py-4 px-4 ring-1 ring-macOSBorder rounded-3xl"
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              <ul className="flex h-dockHeight items-end justify-center space-x-3">
                {/* <div className="hidden h-dockHeight items-end justify-center space-x-3 sm:flex">
                  {dockItemsDesktop}
                </div>
                <div className="flex h-dockHeight items-end justify-center space-x-3 sm:hidden">
                  {dockItemsMobile}
                </div> */}

                {/* <li className="self-center" aria-hidden="true">
                  <hr className="!mx-2 block h-10 w-px border-none bg-macOSBorder" />
                </li> */}
                {/* <DockItem
                  onClick={(e) =>
                    openLink(e, 'https://www.facebook.com/')
                  }
                >
                  <DockIcon name="Facebook" />
                </DockItem> */}
                <DockItem
                  onClick={(e) =>
                    openLink(e, 'https://linkedin.com/in/shivxmr/')
                  }
                >
                  <DockIcon name="LinkedIn" />
                </DockItem>
                <DockItem
                  onClick={(e) =>
                    openLink(e, 'https://github.com/shivxmr/')
                  }
                >
                  <DockIcon name="Github" />
                </DockItem>
                <DockItem
                  onClick={(e) =>
                    openLink(e, 'https://twitter.com/shivxmr/')
                  }
                >
                  <DockIcon name="Twitter" />
                </DockItem>
                <DockItem
                  onClick={(e) =>
                    openLink(e, 'https://leetcode.com/shivxmr/')
                  }
                >
                  <DockIcon name="LeetCode" />
                </DockItem>
                <DockItem
                  onClick={(e) =>
                    openLink(e, 'https://instagram.com/shivxmr/')
                  }
                >
                  <DockIcon name="Instagram" />
                </DockItem>
              </ul>
            </nav>
          </DockContext.Provider>
        </div>
      </div>
    </MouseProvider>
  );
}
