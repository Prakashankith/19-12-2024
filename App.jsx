

import Chicken from './Chicken';
import Greeter from './Greeter';
import Slots from './slots';
import Clicker from './Clicker';
import Counter from './counter';
import Toggler from './Toggler';
import ColorBoxGrid from './ColorBoxGrid';



const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />


      {/* <Toggler /> */}

      {/* <Chicken />
      <Chicken />
      <Chicken /> */}
      {/* <Greeter person="bill" from="ankith" city="Bangladesh" />
      <Greeter person="bill" from="rajesh" city="india" />
      <Greeter person="bill" from="annya" city="rajesh" /> */}
      {/* <Slots /> */}
      {/* <Clicker /> */}

      {/* <Counter /> */}





    </div>
  );


}


export default App;
