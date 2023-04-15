import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="vid-parent">
      <img className="vid-icon" alt="" src="/vid@2x.png" />
      <input className="name" type="text" />
      <input className="fname" type="text" />
      <input className="dob" type="text" />
      <img className="photo-icon" alt="" src="/photo@2x.png" />
      <input className="sex" type="text" />
    </div>
  );
};

export default FrameComponent;
