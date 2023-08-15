import { useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import { services } from '../../../constants';
import paperFlipSound from '../../../assets/paperFlipSound.mp3';
import { fadeIn, textVariant } from '../../../utils/motion';
import { styles } from '../../../styles';
import { useSoundContext } from '../../../components/SoundToggle/soundContext.js';

export default function BoxCard({ drag, frontCard, index, setIndex }) {
  const isSoundMuted = useSoundContext();
  const [play] = useSound(paperFlipSound, { volume: isSoundMuted ? 0 : 1 });
  const [horizontalExit, setHorizontalExit] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({ x: custom, opacity: 0, scale: 0.5 }),
  };
  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 45, opacity: 0.5 },
  };

  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setHorizontalExit(-250);
      setIndex(index + 1);
    }
    if (info.offset.x > 100) {
      setHorizontalExit(250);
      setIndex(index + 1);
    }
  }

  return (
    <>
      <motion.div
        className="w-80 h-80 absolute top-0 hover:cursor-grab active:cursor-grabbing"
        style={{
          x,
          rotate,
        }}
        drag={drag}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        onDragStart={play}
        onDragEnd={handleDragEnd}
        variants={frontCard ? variantsFrontCard : variantsBackCard}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={horizontalExit}
        transition={
          frontCard
            ? { type: 'spring', stiffness: 300, damping: 20 }
            : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
        }
      >
        <motion.div
          className="w-72 h-72 bg-light-blue-300 rounded-3xl items-center justify-center flex shadow-card"
          style={{
            scale,
          }}
        >

          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {serviceIndex === index % services.length && (
                <>
                  <div
                    className='text-black font-bold text-lg'
                  >
                    {service.title}
                  </div>
                  <div className=' mt-5 flex justify-center items-center'>
                    {/* Render the PNG icon as an image */}
                    <img src={service.icon} alt={service.title}
                      width="150px"
                      height="100px"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
