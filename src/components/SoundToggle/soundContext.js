import { createContext, useContext } from 'react';

const SoundContext = createContext();

export const useSoundContext = () => useContext(SoundContext);

export default SoundContext;
