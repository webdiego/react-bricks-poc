import { types } from 'react-bricks/frontend';
import website from 'react-bricks-ui/website';
import blog from 'react-bricks-ui/blog';
import HeroUnit from './MyHeroUnit';
import Banner from './Banner';

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit,
  Banner, // Example custom brick
  // Put here your other bricks...
];

export default bricks;
