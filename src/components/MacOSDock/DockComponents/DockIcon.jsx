import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const Icons = {
  facebook: <BsFacebook color="#2F81F7" size={25} />,
  github: <BsGithub color="#2F81F7" size={25} />,
  instagram: <AiFillInstagram color="#2F81F7" size={25} />,
  leetcode: <SiLeetcode color="#2F81F7" size={25} />,
  twitter: <AiFillTwitterCircle color="#2F81F7" size={25} />,
};

export default function DockIcon({ name }) {
  return <>{Icons[name.toLowerCase()]}</>;
}
