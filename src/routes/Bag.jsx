import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag); // replace store by state
  const items = useSelector((store) => store.items); // replace store by state

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className='bag-page'>
        <div className='bag-items-container'>
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary finalItems={finalItems} />
      </div>
    </main>
  );
};

export default Bag;
