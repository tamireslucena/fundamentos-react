// containers
import Clock from '../../containers/Home/Clock';
import ItemsHandler from '../../containers/Home/ItemsHandler';
import ShyBall from '../../containers/Home/ShyBall';

// styles
import './index.css';

function Home() {
  return (
    <div className='Home'>
      <div className='Column'>
        <Clock/>
        <ItemsHandler/>
      </div>
      <ShyBall/>
    </div>
  );
}

export default Home;
