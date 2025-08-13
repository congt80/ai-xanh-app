// Mẫu giao diện đơn giản cho ứng dụng "AI Xanh" cảnh báo bất thường môi trường
// Dữ liệu giả lập nhiệt độ - tiếng ồn - cảm xúc học sinh

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
    <div className="p-4 grid gap-4">
      <h1 className="text-xl font-bold">🌿 AI Xanh – Cảnh báo bất thường</h1>

      <Card>
        <CardContent className="p-4">
          <p>Nhập ngưỡng nhiệt độ cần cảnh báo:</p>
          <div className="flex gap-2 mt-2">
            <Input
              type="number"
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
            />
            <Button onClick={detectAbnormal}>Phát hiện bất thường</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">Biểu đồ dữ liệu môi trường</h2>
          <LineChart width={500} height={250} data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#82ca9d" name="Nhiệt độ" />
            <Line type="monotone" dataKey="noise" stroke="#8884d8" name="Tiếng ồn" />
          </LineChart>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">🔔 Cảnh báo</h2>
          {alerts.length === 0 ? (
            <p>Không có bất thường.</p>
          ) : (
            <ul className="list-disc pl-6">
              {alerts.map((a, i) => (
                <li key={i}>Ngày {a.day}: Nhiệt độ {a.temp}°C, Tiếng ồn {a.noise}dB</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------- README.md ----------------
/*
# 🌿 AI Xanh – Cảnh báo môi trường bất thường với React

Ứng dụng đơn giản để phát hiện và cảnh báo nhiệt độ hoặc tiếng ồn vượt ngưỡng trong môi trường học đường hoặc cộng đồng.

## 🚀 Demo
👉 [https://ai-xanh-app.vercel.app](https://ai-xanh-app.vercel.app) *(sau khi deploy)*

## 🧩 Tính năng
- Nhập ngưỡng nhiệt độ cần cảnh báo
- Biểu đồ trực quan hóa dữ liệu môi trường (nhiệt độ, tiếng ồn)
- Phát hiện bất thường theo thời gian
- Giao diện nhẹ, dễ dùng, viết bằng React + TailwindCSS + Recharts

## 🛠️ Cài đặt
```bash
npm install
npm start
```

## 📦 Triển khai trên Vercel
1. Push project lên GitHub
2. Vào [vercel.com](https://vercel.com), chọn Import → GitHub → chọn repo
3. Giữ config mặc định → Deploy

## 📁 Cấu trúc
```
src/
  App.jsx  // Giao diện chính
  index.js
public/
  index.html
```

---
Made with ❤️ by [Tên bạn] – hướng tới AI vì cộng đồng và Thiên nhiên 🌱
*/

// ---------------- vercel.json ----------------
/*
{
  "builds": [
    { "src": "package.json", "use": "@vercel/static-build" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
*/
