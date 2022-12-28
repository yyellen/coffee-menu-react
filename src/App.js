import './App.css';
import Category from './Category';
import Name from './Name';
import Iced from './Iced'
import Price from './Price';

function App() {
  return (
    <div className="container">
      <div className="wrap">
        <Category title="閃電特調" entitle="SIGNATURE LATTES" />

        <div className="row">
          <Name name="OATLY 燕麥拿鐵" enname="OATLY LATTE" />
          <Iced iced="HOT/ICED"/>
          <Price regular="80" upsize="105" />
        </div>
        <div className="row">
          <Name name="夏威夷果拿鐵" enname="MACADAMIA LATTE" />
          <Iced iced="HOT/ICED"/>
          <Price regular="80" upsize="105" />
          </div>
        <div className="row">
          <Name name="榛心可可拿鐵" enname="NUTELLA LATTE" />
          <Iced iced="HOT/ICED"/>
          <Price regular="80" upsize="105" />
        </div>

          <Name name="桂花拿鐵" enname="OSMANTHUS LATTE" />
          <Iced iced="HOT/ICED"/>
          <Price regular="80" upsize="105" />
          <Name name="沙灘拿鐵" enname="BEACH LATTE" />
          <Iced iced="HOT/ICED"/>
          <Price regular="80" upsize="105" />
          <Name name="冰煉乳拿鐵" enname="ICEPRESSO" />
          <Iced iced="ICED"/>
          <Price regular="80" upsize="105" />

        
        <Category title="歐蕾系列" entitle="MILKS" />
        <Name name="濃郁義式可可" enname="CHOCOLATE" />
        <Iced iced="HOT/ICED"/>
        <Price regular="60" upsize="80" />
        <Name name="抹茶歐蕾" enname="MATCHA LATTE" />
        <Iced iced="HOT/ICED"/>
        <Price regular="70" upsize="90" />
        <Name name="抹茶夏威夷果歐蕾" enname="NUTELLA LATTE" />
        <Iced iced="HOT/ICED"/>
        <Price regular="90" upsize="110" />
        <Upgrades />
      </div>
    </div>
  );
}

export default App;
