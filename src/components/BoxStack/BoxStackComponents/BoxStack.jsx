import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BoxCard from './BoxCard.jsx';

export default function BoxStack() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <motion.div className="w-52 h-52 relative flex items-center justify-center">
        <AnimatePresence initial={false}>
          <BoxCard key={index + 1} frontCard={false} />
          <BoxCard
            key={index}
            frontCard={true}
            index={index}
            setIndex={setIndex}
            drag="x"
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
