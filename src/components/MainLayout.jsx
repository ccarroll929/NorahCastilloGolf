import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import StatTracker from './StatTracker';
import Film from './Film';

const MainLayout = () => {
  return (
    <>
      <PlayerBio />
      <Film />
      <PlayerCards />
      <StatTracker />
      <Contact />
    </>
  );
};

export default MainLayout;