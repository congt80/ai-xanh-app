import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const mockData = [
  { day: "Mon", temp: 30, noise: 40 },
  { day: "Tue", temp: 31, noise: 41 },
  { day: "Wed", temp: 35, noise: 70 },
  { day: "Thu", temp: 30, noise: 40 },
  { day: "Fri", temp: 29, noise: 39 },
];

export default function AIXanhApp() {
  const [threshold, setThreshold] = useState(33);
  const [alerts, setAlerts] = useState([]);

  const detectAbnormal = () => {
    const result = mockData.filter((d) => d.temp > threshold || d.noise > 60);
    setAlerts(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🌿 AI Xanh – Cảnh báo bất thường</h1>
      <p>Nhập ngưỡng nhiệt độ cần cảnh báo:</p>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        style={{ marginRight: 10 }}
      />
      <button onClick={detectAbnormal}>Phát hiện bất thường</button>

      <h2>Biểu đồ dữ liệu môi trường</h2>
      <LineChart width={500} height={250} data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="#82ca9d" name="Nhiệt độ" />
        <Line type="monotone" dataKey="noise" stroke="#8884d8" name="Tiếng ồn" />
      </LineChart>

      <h2>🔔 Cảnh báo</h2>
      {alerts.length === 0 ? (
        <p>Không có bất thường.</p>
      ) : (
        <ul>
          {alerts.map((a, i) => (
            <li key={i}>
              Ngày {a.day}: Nhiệt độ {a.temp}°C, Tiếng ồn {a.noise}dB
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
