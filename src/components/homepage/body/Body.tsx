import Slider from "./Slider"
import VideoContainer from "./VideoContainer"

const Body = () => {
  return (
    <div className="body layout-section">
        <div className="body-slider-container">
          <h2>NEW knows what you are looking for</h2>
          <Slider/>
        </div>
        <VideoContainer/>
    </div>
  )
}

export default Body