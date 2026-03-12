"use client";
import React from 'react';
import Link from 'next/link';

export default function CampaignHome() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-xl tracking-[0.4em] mb-4 text-blue-500 font-light">제58대 총학생회 선본</h2>
      <h1 className="text-9xl font-black italic tracking-tighter mb-10">route</h1>
      <p className="text-xl opacity-60 mb-12 text-center">우리가 그리는 새로운 길, 당신과 함께 걷겠습니다.</p>
      
      <div className="flex gap-6">
        <Link href="/candidates" className="px-10 py-4 bg-blue-600 font-extrabold rounded-full hover:bg-blue-700 transition">후보자</Link>
        <Link href="/pledges" className="px-10 py-4 border border-white font-extrabold rounded-full hover:bg-white hover:text-black transition">공약</Link>
        <Link href="/structure" className="px-10 py-4 border border-white/30 text-white/50 font-extrabold rounded-full hover:border-white hover:text-white transition">조직도</Link>
      </div>
    </div>
  );
}