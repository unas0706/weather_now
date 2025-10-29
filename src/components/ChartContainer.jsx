import React, { useEffect, useRef } from "react";

const ChartContainer = ({ weatherData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!weatherData) return;

    const daily = weatherData.daily;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Prepare data
    const maxTemps = daily.temperature_2m_max.map((temp) => Math.round(temp));
    const minTemps = daily.temperature_2m_min.map((temp) => Math.round(temp));
    const allTemps = [...maxTemps, ...minTemps];
    const minTemp = Math.min(...allTemps);
    const maxTemp = Math.max(...allTemps);
    const tempRange = maxTemp - minTemp || 1;

    // Draw grid
    ctx.strokeStyle = "rgba(236, 240, 241, 0.1)";
    ctx.lineWidth = 1;

    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw temperature lines
    const drawLine = (data, color) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;

      data.forEach((temp, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y =
          padding + chartHeight - ((temp - minTemp) / tempRange) * chartHeight;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();
    };

    drawLine(maxTemps, "#e74c3c");
    drawLine(minTemps, "#3498db");

    // Draw data points
    const drawPoints = (data, color) => {
      data.forEach((temp, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y =
          padding + chartHeight - ((temp - minTemp) / tempRange) * chartHeight;

        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    };

    drawPoints(maxTemps, "#e74c3c");
    drawPoints(minTemps, "#3498db");

    // Draw labels
    ctx.fillStyle = "#ecf0f1";
    ctx.font = "14px Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
    ctx.textAlign = "center";

    const labels = daily.time.map((date) => {
      const d = new Date(date);
      return d.toLocaleDateString("en-US", { weekday: "short" });
    });

    labels.forEach((label, index) => {
      const x = padding + (chartWidth / (labels.length - 1)) * index;
      const y = height - padding + 20;
      ctx.fillText(label, x, y);
    });

    ctx.textAlign = "right";
    for (let i = 0; i <= 4; i++) {
      const temp = minTemp + (tempRange / 4) * i;
      const y = padding + chartHeight - (chartHeight / 4) * i;
      ctx.fillText(`${Math.round(temp)}°`, padding - 10, y + 4);
    }

    // Draw legend
    ctx.textAlign = "left";
    ctx.font = "bold 14px Segoe UI, Tahoma, Geneva, Verdana, sans-serif";

    ctx.fillStyle = "#e74c3c";
    ctx.fillText("Max Temperature", padding, padding - 10);

    ctx.fillStyle = "#3498db";
    ctx.fillText("Min Temperature", padding + 150, padding - 10);
  }, [weatherData]);

  if (!weatherData) {
    return (
      <div className="chart-container">
        <h2 className="section-title">
          <i className="fas fa-chart-line"></i>
          Temperature Trends
        </h2>
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <h2 className="section-title">
        <i className="fas fa-chart-line"></i>
        Temperature Trends
      </h2>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        style={{
          width: "100%",
          height: "400px",
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

export default ChartContainer;
