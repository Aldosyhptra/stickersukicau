'use client';
import { useEffect, useState } from 'react';
import { fetchAllData } from '../lib/api';

export default function CollectionCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ambilData = async () => {
      const hasil = await fetchAllData();
      setData(hasil);
    };

    ambilData();
  }, []);

    const handleDownload = (filename) => {
      const downloadUrl = `https://stikersukicau-be-production.up.railway.app/download/${filename}`;
      window.open(downloadUrl, '_blank');
    };

  return (
    <div className='collection py-30 px-5 flex flex-wrap justify-center gap-5'>
        {data && data.length > 0 ? (
            data.map((item, index) => (
            <div
                key={index}
                className="group w-25 md:w-60 aspect-[3/4] relative bg-black rounded-xl overflow-hidden"
            >
                <img
                src={`https://stikersukicau-be-production.up.railway.app/gambar/${item.gambar}`}
                alt={`${item.gambar}`}
                className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                />

                <div className="absolute inset-0 flex items-end p-4">
                    <div className="w-full transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:opacity-0 md:translate-y-4">
                        <button   onClick={() => handleDownload(item.gambar)} className='bg-white/30 py-3 px-2 flex mx-auto border text-white text-xs md:text-base border-white rounded-lg cursor-pointer'>
                        Download
                        </button>
                    </div>
                </div>
            </div>
            ))
        ) : (
            <p>Memuat data...</p>
        )}
    </div>
  );
}
