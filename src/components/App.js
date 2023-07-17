
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <Tooltip text="This is a tooltip">
          <h2 className="tooltip">Hover over me</h2>
        </Tooltip>

        <Tooltip text="This is another tooltip">
          <p className="tooltip">Hover over me to see another tooltip</p>
        </Tooltip>
              
    </div>
  )
}

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {
        showTooltip && <button className="tooltiptext">{text}</button>
      }
    </div>
  );
};

export default App
