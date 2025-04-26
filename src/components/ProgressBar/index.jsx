import { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);
  const [color, setColor] = useState('#FF0000');

  useEffect(() => {
    const duration = 3;
    const incrementSpeed = (duration * 1000) / targetPercentage;

    const interval = targetPercentage && setInterval(() => {
      setPercentage((prev) => {
        const newValue = prev + 1;

        if (newValue < 30) {
          setColor('#FF0000');
        } else if (newValue < 70) {
          setColor('#FFD700');
        } else {
          setColor('#4CAF50');
        }

        if (newValue >= targetPercentage) {
          clearInterval(interval);
          return targetPercentage;
        }
        return newValue;
      });
    }, incrementSpeed);

    return () => clearInterval(interval);
  }, [targetPercentage]);

  return (
    <div style={{ width: 136, height: 136 }} className="mx-auto">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: {
            stroke: color,
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 0.1s ease-out, stroke 0.3s ease-out',
          },
          trail: {
            stroke: '#e0e0e0',
          },
          text: {
            fill: '#333',
            fontSize: '20px',
            fontWeight: 'bold',
          },
        }}
      />
    </div>
  );
};

export default ProgressBar;
