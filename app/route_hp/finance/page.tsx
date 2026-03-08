"use client";
import React from 'react';
import Link from 'next/link';

export default function FinancePage() {
  const data = [
    { date: "2026.03.05", desc: "신입생 오리엔테이션 물품 구매", amount: "-1,250,000", balance: "15,400,000" },
    { date: "2026.02.28", desc: "1학기 학생회비 입금 (1차)", amount: "+8,500,000", balance: "16,650,000" },
    { date: "2026.02.15", desc: "학생회실 사무용품 교체", amount: "-150,000", balance: "8,150,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-red-800">자산 운용 내역</h1>
          <Link href="/route_hp" className="text-sm bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">메인으로</Link>
        </div>
        <div className="bg-red-50 p-6 rounded-xl mb-8 flex justify-between items-center">
          <span className="font-bold">현재 잔액</span>
          <span className="text-2xl font-bold text-red-800">15,400,000원</span>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-400 text-sm">
              <th className="py-4">날짜</th>
              <th className="py-4">내역</th>
              <th className="py-4 text-right">금액</th>
              <th className="py-4 text-right">잔액</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-4 text-sm text-gray-500">{d.date}</td>
                <td className="py-4 font-medium">{d.desc}</td>
                <td className={`py-4 text-right font-bold ${d.amount.includes('+') ? 'text-blue-600' : 'text-red-600'}`}>{d.amount}</td>
                <td className="py-4 text-right text-gray-600 font-mono">{d.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}