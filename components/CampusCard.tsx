import { campusData } from '@/lib/data';

export default function CampusCard() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {campusData.map((campus) => (
        <div
          key={campus.name}
          className={`flex flex-col gap-2 rounded-2xl border border-[#F0F1F3] px-5 py-3 shadow ${campus.style}`}
        >
          <div className="flex items-center gap-2">
            <div className="text-md text-[#383E49]">{campus.name}</div>
            <div className="h-fit w-fit rounded-full bg-[#2D8E84] px-2 py-1 text-[12px] text-white">
              Active
            </div>
          </div>
          <div className="text-[12px] text-[#5D6679]">
            🌏 Region: {campus.region} | 🏢 City: {campus.city}
          </div>
          <div className="text-[12px] text-[#5D6679]">📍 {campus.location}</div>
        </div>
      ))}
    </div>
  );
}
