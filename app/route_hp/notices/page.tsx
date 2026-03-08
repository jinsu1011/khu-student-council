import React from 'react';
import Link from 'next/link';

export default function NoticesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-red-800">공지·소식</h1>
          <Link href="/route_hp" className="bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200 transition font-medium">
            메인으로 돌아가기
          </Link>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-6">
            <h2 className="text-xl font-bold hover:text-red-800 cursor-pointer transition-colors">[공지] 중간고사 간식사업 물품 배부 안내</h2>
            <p className="text-gray-500 text-sm mt-2">작성자: 총학생회 | 작성일: 2026-03-02</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              학우 여러분 안녕하십니까, 제5x대 총학생회입니다. 중간고사 기간을 맞이하여 학우 여러분을 응원하기 위한 간식 배부 사업을 진행합니다.
              학생회비 납부자에 한해 수령 가능하며, 학생증을 필히 지참해 주시기 바랍니다.
            </p>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-bold hover:text-red-800 cursor-pointer transition-colors">[공지] 2026학년도 1학기 사물함 신청 안내</h2>
            <p className="text-gray-500 text-sm mt-2">작성자: 총학생회 | 작성일: 2026-02-28</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              이번 학기 각 단과대별 사물함 신청 기간 및 배정 방식을 안내해 드립니다. 
              모든 신청은 총학생회 홈페이지를 통한 온라인 선착순으로 진행되며, 배정 결과는 개별 문자로 통보됩니다.
            </p>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-bold hover:text-red-800 cursor-pointer transition-colors">[안내] 제1차 정기 운영위원회 결과 보고</h2>
            <p className="text-gray-500 text-sm mt-2">작성자: 총학생회 | 작성일: 2026-02-25</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              지난 2월 25일에 진행된 제1차 정기 운영위원회 회의록 및 주요 의결 사항을 공지합니다.
              상세 회의록 원본은 첨부파일을 통해 확인하실 수 있습니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}