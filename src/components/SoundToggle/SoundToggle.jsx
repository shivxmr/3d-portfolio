import React from 'react';
import { BsFillVolumeUpFill } from 'react-icons/bs';
import { BsFillVolumeMuteFill } from 'react-icons/bs';
import { useSoundContext } from './soundContext.js';

import clickSound from '../../assets/clickSound.mp3';
import useSound from 'use-sound';

function SoundToggle({ setIsSoundMuted }) {
  const isSoundMuted = useSoundContext();
  const [play] = useSound(clickSound);

  return (
    <button
      className="border-0 bg-transparent"
      onClick={() => {
        play();
        setIsSoundMuted((prevVal) => !prevVal);
      }}
    >
      {isSoundMuted ? (
        <BsFillVolumeMuteFill
          className="fixed top-10 right-10 inline sm:top-28 sm:right-16 z-40"
          size={50}
          color="white"
        />
      ) : (
        <BsFillVolumeUpFill
          className="fixed top-10 right-10 inline sm:top-28 sm:right-16 z-40"
          size={50}
          color="white"
        />
      )}
    </button>
  );
}

export default SoundToggle;
