import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Icons = {
  facebook: <BsFacebook color="#2F81F7" size={25} />,
  github: <BsGithub color="#2F81F7" size={25} />,
};

export default function DockIcon({ name }) {
  return <>{Icons[name.toLowerCase()]}</>;
}
