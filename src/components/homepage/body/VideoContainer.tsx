import ArrowLi from "./ArrowLi";

const VideoContainer = () => {
  return (
    <div className="video-container">
      <h2>Video on NEW</h2>
      <div className="video-content-container flex flex-col">
        <div className="video-box flex flex-col">
          <video controls>
            <source src="assets/videos/sample.mp4" type="video/mp4" />
          </video>
          <p>Please click on this video to see more.</p>
        </div>
        <div className="video-content flex flex-col">
          <p>
            NEW, a novel AI model that uses cutting-edge machine learning
            techniques to predict Iron ore prices. NEW is revolutionizing AI
            technology in business at all levels. Your AI partner that predicts
            Iron ore prices for develop and transfer your business.
          </p>
          <p>Here are some advantages choosing NEW as your AI partner:</p>
          <ul>
            <ArrowLi>
              <h4>
                Alongside AL, ML statistical learning and historical data, we
                used the strong background of Dr. Keyvan Jafari Tehrani in
                mineral trade and business to model the market behaviors.
              </h4>
            </ArrowLi>
            <ArrowLi>
              <h4>
                NEW is adjusted to the market movements, therefore, it will help
                you grow your business by finding opportunities and managing
                risks.
              </h4>
            </ArrowLi>
            <ArrowLi>
              <h4>NEW will warn you if there is a risk of sudden fluctuation.</h4>
            </ArrowLi>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
