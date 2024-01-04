import Lottie from 'react-lottie-player';

interface AnimationProps {
  path: string;
  right?: string;
}

const Animation: React.FC<AnimationProps> = ({ path, right }: AnimationProps) => {
  return <Lottie loop path={path} play style={{ width: '100%', height: '100%', position: 'absolute', right: right }} />;
};

export default Animation;
