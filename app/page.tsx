"use client";
import React from 'react';
import Link from 'next/link';

export default function CampaignHome() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 히어로 섹션 */}
      <section className="h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] mb-4 text-blue-500">제58대 총학생회 선본</h2>
        <h1 className="text-8xl md:text-[12rem] font-black italic tracking-tighter mb-8">route</h1>
        <p className="text-lg md:text-2xl font-light opacity-70 mb-12">당신이 그리는 경희의 새로운 길</p>
        <div className="flex gap-4">
          <Link href="/candidates" className="px-8 py-4 bg-blue-600 font-bold rounded-full hover:bg-blue-700 transition">후보자 보기</Link>
          <Link href="/pledges" className="px-8 py-4 border border-white font-bold rounded-full hover:bg-white hover:text-black transition">공약 확인</Link>
        </div>
      </section>

      {/* 하단 퀵 내비 */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full flex gap-10 text-sm font-bold">
        <Link href="/candidates" className="hover:text-blue-400">후보자</Link>
        <Link href="/pledges" className="hover:text-blue-400">공약</Link>
        <Link href="/structure" className="hover:text-blue-400">조직도</Link>
      </nav>
    </div>
  );
}