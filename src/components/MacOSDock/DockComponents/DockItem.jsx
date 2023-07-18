import { useEffect, useRef, useState } from 'react';
import { useEvent } from 'react-use';
import {
  motion,
  useSpring,
  useTransform,
  useAnimationControls,
} from 'framer-motion';
import useSound from 'use-sound';
import { useMouse } from '../mouse/MouseProvider.jsx';
import { useDock } from './Dock.jsx';
import PropTypes from 'prop-types';

import boopSound from '../../../assets/boopSound.mp3';

import { useSoundContext } from '../../../components/SoundToggle/soundContext.js';

const DOCK_ITEM_SIZE = 50;
const INCREASE_AMP_BY = 40;

export default function DockItem({ children, onClick }) {
  const isSoundMuted = useSoundContext();

  const ref = useRef(null);
  const mouse = useMouse();
  const dock = useDock();
  const [dockCenterX, setDockCenterX] = useState(null);
  const [isDockItemOpened, setIsDockItemOpened] = useState(false);
  const controls = useAnimationControls();
  const [play] = useSound(boopSound, { volume: isSoundMuted ? 0 : 1 });

  //As the mouse moves horizontally over the element,
  //the dimension value will change based on a curve that rises and
  //falls according to a cosine function. The curve will be steeper
  //(and therefore the change in dimension more pronounced) the farther
  //the mouse is from the center of the dock. The DOCK_ITEM_SIZE constant
  //determines the minimum size of the dock, and the INCREASE_AMP_BY constant
  //determines how much the size will increase at the peak of the curve.
  const dimension = useTransform(mouse.position.x, (mousePositionX) => {
    return (
      DOCK_ITEM_SIZE +
      INCREASE_AMP_BY *
      Math.cos(
        (((mousePositionX - dockCenterX) / dock.width) * Math.PI) / 2
      ) **
      8
    );
  });

  const spring = useSpring(DOCK_ITEM_SIZE, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  useEffect(() => {
    return dimension.on('change', (val) => {
      if (dock.isHovered) {
        spring.set(val);
      } else {
        spring.set(DOCK_ITEM_SIZE);
      }
    });
  }, [spring, dimension, dock.isHovered]);

  useEffect(() => {
    const rectangle = ref.current.getBoundingClientRect();
    setDockCenterX(rectangle.x + rectangle.width / 2);
  }, []);

  useEvent('resize', () => {
    const rectangle = ref.current.getBoundingClientRect();
    setDockCenterX(rectangle.x + rectangle.width / 2);
  });

  return (
    <motion.li
      className="relative"
      onClick={() => {
        play();
        if (!isDockItemOpened) {
          setIsDockItemOpened(true);
          controls.start(() => ({ translateY: [0, -20, 0] }));
        } else {
          setIsDockItemOpened(false);
          controls.start(() => ({ translateY: [0, -20, 0] }));
        }
      }}
    >
      <motion.button
        ref={ref}
        className="flex flex-none select-none items-center justify-center rounded-3xl
        bg-macOSDockItems outline-none ring-1 ring-white/10 focus-visible:ring-4"
        style={{
          height: spring,
          width: spring,
          transition: 'filter .50s',
        }}
        animate={controls}
        whileHover={{ backgroundColor: '#30363D', borderRadius: '15%' }}
        whileFocus={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={onClick}
      >
        {children}
      </motion.button>
      {isDockItemOpened && (
        <span
          className="absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-macOSClickedDockItem"
          aria-hidden="true"
        />
      )}
    </motion.li>
  );
}

DockItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
