'use client';
import { useState } from 'react';
import { uploadGambar } from '../lib/api';
import Modal from '../components/modal';

export default function UploadField() {
  const [previewImages, setPreviewImages] = useState([]);
  const [kategori, setKategori] = useState('');
  const [gambar, setGambar] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setGambar(files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(imagePreviews);
    setIsUploaded(false);
  };

  const handleUpload = async () => {
    if (gambar.length === 0) {
      alert('Silakan pilih file terlebih dahulu.');
      return;
    }

    try {
      for (const file of gambar) {
        await uploadGambar(file, kategori); 
      }
      openModal()
      setIsUploaded(true);
    } catch (err) {
      alert('Upload gagal.');
      console.error(err);
    }
  };

  return (
    <div   className={`flex flex-col items-center h-screen ${previewImages.length > 0 ? 'mt-40 md:mt-30 h-full' : 'justify-center'}`}>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Form Upload Gambar">
                <p className="mb-4">Foto anda berhasil di upload</p>
                <div className='w-50 flex mx-auto -my-15 '>
                      <img
                        src="/animateicon/checkbox.gif"
                        alt="Checkbox Animation"
                        className="w-full h-full object-contain"
                        />
                </div>
                <div className="flex justify-end">
                <button
                    className="bg-gray-300 px-3 py-2 transition-all rounded hover:bg-gray-400 cursor-pointer"
                    onClick={closeModal}
                >
                    Tutup
                </button>
                </div>
            </Modal>

        <div className="max-w-3xl">

        <label
            htmlFor="File"
            className="flex flex-col w-xs md:w-sm items-center rounded border border-gray-300 p-4 text-gray-900 shadow-sm sm:p-6 cursor-pointer"
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                />
            </svg>

            <span className="mt-4 font-medium">Upload your file(s)</span>
            <span className="mt-2 inline-block rounded border border-gray-200 bg-gray-50 px-3 py-1.5 text-center text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-100">
            Browse files
            </span>

            <input
            multiple
            type="file"
            id="File"
            className="sr-only"
            accept="image/*"
            onChange={handleFileChange}
            />
        </label>

        {/* Preview Area */}
        {previewImages.length > 0 && (
            <div className='mt-10 md:mt-5 mb-20'>
            <p className="text-center text-base md:text-xl">Preview</p>
            <div className="mx-auto max-w-fit border border-gray-300 p-3 shadow-lg rounded-xl flex flex-wrap gap-3 justify-center">
                {previewImages.map((src, idx) => (
                    <img
                    key={idx}
                    src={src}
                    alt={`Preview ${idx}`}
                    className="w-60 md:w-70 h-auto object-cover rounded shadow"
                    />
                ))}
            </div>
            <button
                onClick={handleUpload}
                disabled={isUploaded}
                className="bg-white border border-gray-400 rounded-lg shadow-lg flex mx-auto mt-5 py-2 px-3 transform transition-all duration-200 hover:bg-gray-200 hover:scale-102 cursor-pointer disabled:opacity-50"
                >
                Upload
            </button>
            </div>
        )}
        </div>
    </div>
  );
}
