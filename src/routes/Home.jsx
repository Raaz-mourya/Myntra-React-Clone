import Homeitem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector(store => store.items);

  return (
    <main>
      <div className='items-container'>
        {items.map(item => <Homeitem item={item} key={item.id} />)}
      </div>
    </main>
  );
};

export default Home;
