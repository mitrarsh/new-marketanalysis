import ArrowLi from "../components/ArrowLi";
import Btn from "../components/btn";
import SliderOption from "../components/SliderOption";

const HomePage = () => {
  return (
    <div>
      <Btn btnClass="btn-secondary">Login</Btn>
      <Btn btnClass="btn-primary">Sign Up</Btn>
      <SliderOption image="business">
        <h3>Market ter</h3>
        <p>
          Mapping market trends can be a game-changer for any business.
          Monitoring changes in the market will help you to identify patterns
          and opportunities.
        </p>
      </SliderOption>
      <ArrowLi>
        Alongside AL, ML statistical learning and historical data, we used the
        strong background of Dr. Keyvan Jafari Tehrani in mineral trade and
        business to model the market behaviors.
      </ArrowLi>
    </div>
  );
};

export default HomePage;
