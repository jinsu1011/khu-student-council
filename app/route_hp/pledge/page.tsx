"use client";
import React from 'react';
import Link from 'next/link';

export default function PledgePage() {
  const pledges = [
    { category: "복지", title: "학생회관 노후 시설 리모델링", status: "완료", rate: 100 },
    { category: "학습", title: "중앙도서관 24시간 열람실 확대", status: "진행중", rate: 80 },
    { category: "문화", title: "경희대학교 대동제 라인업 강화", status: "진행중", rate: 60 },
    { category: "소통", title: "찾아가는 총학생회 민원실", status: "대기", rate: 15 },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b-2 border-red-800 pb-4">
          <h1 className="text-3xl font-bold text-red-800">공약 이행 현황</h1>
          <Link href="/route_hp" className="text-sm bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">← 메인</Link>
        </div>
        <div className="grid gap-6">
          {pledges.map((p, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-red-800 bg-red-50 px-2 py-1 rounded">{p.category}</span>
                <span className={`text-sm font-bold ${p.status === '완료' ? 'text-green-600' : 'text-blue-600'}`}>{p.status}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-red-800 h-3 rounded-full transition-all" style={{ width: `${p.rate}%` }}></div>
              </div>
              <p className="text-right text-xs text-gray-400 mt-2">{p.rate}% 완료</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}