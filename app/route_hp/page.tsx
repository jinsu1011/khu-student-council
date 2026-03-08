"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function RouteHp() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
      
      {/* 상단 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          
          <div className="flex items-center gap-3">
            {/* 로고 이미지 경로가 .jpg 로 수정되었습니다 */}
            <img 
              src="/khu-logo.jpg" 
              alt="경희대 마크" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-bold text-red-800">경희대학교 국제캠퍼스 총학생회</h1>
          </div>

          <nav className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link href="/route_hp/about" className="text-gray-600 hover:text-red-800 font-medium">소개</Link>
            <Link href="/route_hp/notices" className="text-gray-600 hover:text-red-800 font-medium">공지·소식</Link>
            <Link href="/route_hp/pledge" className="text-gray-600 hover:text-red-800 font-medium">정책·사업</Link>
            <Link href="/route_hp/petition" className="text-gray-600 hover:text-red-800 font-medium">신문고</Link>
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900 transition font-medium"
            >
              로그인
            </button>
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* 바로가기 배너 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">총학생회 메뉴 한 눈에 보기</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/route_hp/pledge" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition text-center group block">
              <h3 className="text-lg font-bold group-hover:text-red-800 transition-colors">공약 이행률</h3>
              <p className="text-sm text-gray-500 mt-2">투명한 행정 실천</p>
            </Link>
            <Link href="/route_hp/finance" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition text-center group block">
              <h3 className="text-lg font-bold group-hover:text-red-800 transition-colors">자산 운용</h3>
              <p className="text-sm text-gray-500 mt-2">학생회비 집행 내역</p>
            </Link>
            <Link href="/route_hp/petition" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition text-center group block">
              <h3 className="text-lg font-bold group-hover:text-red-800 transition-colors">학생 건의함</h3>
              <p className="text-sm text-gray-500 mt-2">여러분의 의견을 듣습니다</p>
            </Link>
            <Link href="/route_hp/records" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition text-center group block">
              <h3 className="text-lg font-bold group-hover:text-red-800 transition-colors">회의록 및 공지</h3>
              <p className="text-sm text-gray-500 mt-2">중요 소식 확인</p>
            </Link>
          </div>
        </section>

        {/* 캠퍼스 사진 영역 */}
        <section className="mb-12 rounded-xl overflow-hidden shadow-sm">
          <img 
            src="/khu-campus.jpg" 
            alt="경희대학교 전경" 
            className="w-full h-64 md:h-80 object-cover bg-gray-200"
          />
        </section>

        {/* 공지사항 및 공약 요약 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">총학생회 공지·소식</h2>
              <Link href="/route_hp/notices" className="text-sm text-gray-500 hover:text-gray-800 transition">+ 더보기</Link>
            </div>
            <ul className="space-y-5">
              <li>
                <Link href="/route_hp/notices/1" className="flex justify-between items-center group block">
                  <span className="font-medium group-hover:text-red-800 transition">[공지] 중간고사 간식사업 물품 배부 안내</span>
                  <span className="text-sm text-gray-400">2026-03-02</span>
                </Link>
              </li>
              <li>
                <Link href="/route_hp/notices/2" className="flex justify-between items-center group block">
                  <span className="font-medium group-hover:text-red-800 transition">[공지] 2026학년도 1학기 사물함 신청</span>
                  <span className="text-sm text-gray-400">2026-02-28</span>
                </Link>
              </li>
              <li>
                <Link href="/route_hp/notices/3" className="flex justify-between items-center group block">
                  <span className="font-medium group-hover:text-red-800 transition">[안내] 제1차 정기 운영위원회 결과 보고</span>
                  <span className="text-sm text-gray-400">2026-02-25</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-sm border border-red-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3">총학생회 정책목록</h2>
              <p className="text-gray-600 mb-6">제5x대 총학생회는 더 나은 내일을 만들어 나가고 있습니다.</p>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-gray-700">전체 공약 달성률</span>
                  <span className="font-bold text-red-800">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-800 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <Link href="/route_hp/pledge" className="inline-block mt-4 bg-white border border-red-800 text-red-800 font-bold py-2 px-6 rounded-md hover:bg-red-800 hover:text-white transition w-max">
              View More
            </Link>
          </div>
        </section>
      </main>

      {/* 하단 푸터 (Footer) 영역 */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            {/* 학교 및 학생회 정보 */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">경희대학교 국제캠퍼스 제5x대 총학생회</h2>
              <p className="text-sm text-gray-500 mb-1">
                (17104) 경기도 용인시 기흥구 덕영대로 1732 경희대학교 국제캠퍼스 학생회관 OOO호
              </p>
              <p className="text-sm text-gray-500">
                전화: 031-201-XXXX &nbsp;|&nbsp; 이메일: student_council@khu.ac.kr
              </p>
            </div>

            {/* SNS 링크 등 부가 기능 */}
            <div className="flex gap-4">
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-red-800 transition">
                인스타그램
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-red-800 transition">
                카카오톡 채널
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-red-800 transition">
                개인정보처리방침
              </Link>
            </div>
            
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400">
            Copyright © 2026 Kyung Hee University Global Campus Student Council. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 로그인 팝업 */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm relative">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-center text-red-800 mb-6">학생 인증</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">학교 이메일 (@khu.ac.kr)</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="아이디 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                <input 
                  type="password" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="비밀번호 입력"
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-900 transition mt-4"
              >
                로그인
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-800 underline">비밀번호를 잊으셨나요?</Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}