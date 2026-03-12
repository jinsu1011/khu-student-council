"use client";
import Link from 'next/link';

export default function Candidates() {
  const profile = [
    { role: "정후보", name: "김진수", major: "전자공학과 20학번", history: ["공대 학생회장", "중앙운영위원회 위원"] },
    { role: "부후보", name: "홍길동", major: "정치외교학과 21학번", history: ["정외과 부학생회장", "대외협력국장"] }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <Link href="/" className="text-gray-400 mb-8 inline-block hover:text-black">← HOME</Link>
        <h1 className="text-5xl font-black mb-16 text-blue-600 italic">CANDIDATES.</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {profile.map((p, i) => (
            <div key={i} className="border-t-4 border-black pt-6">
              <span className="text-sm font-bold bg-black text-white px-2 py-1 mb-4 inline-block">{p.role}</span>
              <h2 className="text-4xl font-bold mb-2">{p.name}</h2>
              <p className="text-gray-500 mb-6">{p.major}</p>
              <ul className="space-y-2 text-gray-700">
                {p.history.map((h, idx) => <li key={idx}>• {h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}