export async function fetchAllData() {
  try {
    const response = await fetch('https://stikersukicau-be-production.up.railway.app/api/read_all');
    console.log('fetch terpanggil');

    if (!response.ok) {
      throw new Error('Gagal mengambil data');
    }

    const json = await response.json();
    console.log('data diterima:', json);
    return json.data;
  } catch (err) {
    console.error('Error:', err);
    return [];
  }
}

export async function uploadGambar(file, kategori = '') {
  const formData = new FormData();

  // Sesuai controller, hanya satu file gambar
  formData.append('gambar', file); 

  if (kategori) {
    formData.append('kategori', kategori); 
  }

  try {
    const response = await fetch('https://stikersukicau-be-production.up.railway.app/api/uploadgambar', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Upload gagal');
    }

    return result;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}
