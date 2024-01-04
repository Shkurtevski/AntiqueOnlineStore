import { Link } from 'react-router-dom';
import Animation from './Animation';

interface HomepageCardProps {
  animationPath: string;
  title: string;
  btnText: string;
  right: string;
  textPosition: string;
  positionEnd?: string;
  linkPath: string;
}

const HomepageCard = ({ animationPath, title, btnText, textPosition, positionEnd, right, linkPath }: HomepageCardProps) => {
  return (
    <div style={{ height: 500, position: 'relative' }}>
      <Animation path={animationPath} right={right} />
      <div className={`position-absolute top-0 ${positionEnd} mt-5 ${textPosition} card-text-holder`}>
        <h2 className="d-light">{title}</h2>
        <Link to={linkPath} className="button-cs d-inline-block button-homepage">
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default HomepageCard;
