import "./Vid.css";

const FrameComponent = () => {
  return (
    <div className="vid-1-parent">
      <img className="vid-1-icon" alt="" src="/vid.png" />
      <input className="name" type="text" />
      <input className="fname" type="text" />
      <input className="dob" type="text" />
      <img className="photo-icon" alt="" src="/photo@2x.png" />
    </div>
  );
};

export default FrameComponent;
