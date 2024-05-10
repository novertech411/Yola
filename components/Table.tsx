'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

interface TableProps {
  headers: string[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState<string>("")

  const handleRowClick = (farmerId: string) => {
    router.push(`/dashboard/farmers/${farmerId}`);
  };

  return (
    <div className="overflow-x-auto w-[95%] border border-gray-200 -mt-8 rounded">
      <table className="min-w-full bg-white rounded my-6 border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {headers.map(header => (
              <th key={header} className="py-3 px-6 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light cursor-pointer">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100" onClick={() => handleRowClick(item.farmerId || item.extensionId)}>
              <td className="py-3 px-6 text-left font-bold flex items-center gap-3">
                <input type="checkbox" />
                {item.farmerId || item.extensionId}
              </td>
              {Object.keys(item).map((key, idx) => {
                if ((key !== 'id' && key !== 'farmerId') && (key !== 'id' && key !== 'extensionId')) {
                  return <td key={idx} className="py-3 px-6 text-left">{item[key]}</td>;
                }
                return null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
