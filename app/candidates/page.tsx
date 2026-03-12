"use client";
import Link from 'next/link';

export default function Candidates() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-gray-400 font-bold hover:text-black">← BACK</Link>
        <h1 className="text-6xl font-black mt-10 mb-20 italic">CANDIDATES.</h1>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <span className="bg-black text-white px-3 py-1 font-bold text-sm">정후보</span>
            <h2 className="text-4xl font-bold mt-4">김진수</h2>
            <p className="text-gray-500 mt-2 italic">전자공학과 20학번</p>
          </div>
          <div>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 font-bold text-sm">부후보</span>
            <h2 className="text-4xl font-bold mt-4">홍길동</h2>
            <p className="text-gray-500 mt-2 italic">정치외교학과 21학번</p>
          </div>
        </div>
      </div>
    </div>
  );
}