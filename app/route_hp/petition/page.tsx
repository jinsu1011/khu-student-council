"use client";
import React from 'react';
import Link from 'next/link';

export default function PetitionPage() {
  const posts = [
    { id: 45, title: "학관 학생식당 메뉴 개선 요청", date: "2026-03-08", status: "검토중" },
    { id: 44, title: "정문 횡단보도 신호등 시간 연장 건의", date: "2026-03-07", status: "답변완료" },
    { id: 43, title: "도서관 노트북 사용 구역 확대 희망", date: "2026-03-06", status: "답변완료" },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-red-800">학생 신문고</h1>
          <button className="bg-red-800 text-white px-4 py-2 rounded-lg font-bold">건의하기</button>
        </div>
        <div className="border-t border-gray-200">
          {posts.map((p) => (
            <div key={p.id} className="flex justify-between items-center py-6 border-b hover:bg-gray-50 cursor-pointer transition px-4">
              <div>
                <span className="text-xs text-gray-400 font-mono">#{p.id}</span>
                <h3 className="text-lg font-bold mt-1 text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{p.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.status === '답변완료' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}