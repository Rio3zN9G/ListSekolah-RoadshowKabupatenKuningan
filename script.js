const schools = [
  { name: "SMKN 1 KUNINGAN", type: "SMK" },
  { name: "SMKN 2 KUNINGAN", type: "SMK" },
  { name: "SMKN 3 KUNINGAN", type: "SMK" },
  { name: "SMKN 4 KUNINGAN", type: "SMK" },
  { name: "SMKN 5 KUNINGAN", type: "SMK" },
  { name: "SMKN 6 KUNINGAN", type: "SMK" },
  { name: "SMKN 1 CILIMUS", type: "SMK" },
  { name: "SMKN 1 LURAGUNG", type: "SMK" },
  { name: "SMKN 1 JAPARA", type: "SMK" },
  { name: "SMK PERTIWI KUNINGAN", type: "SMK" },
  { name: "SMK PERTIWI CILIMUS", type: "SMK" },
  { name: "SMK PLUS PERTIWI SUKAMULYA", type: "SMK" },
  { name: "SMK KARYA NASIONAL KUNINGAN", type: "SMK" },
  { name: "SMK BHK KUNINGAN", type: "SMK" },
  { name: "SMK BI KUNINGAN", type: "SMK" },
  { name: "SMK MODEL PATRIOT KUNINGAN", type: "SMK" },
  { name: "SMK YAMSIK KUNINGAN", type: "SMK" },
  { name: "SMK PERSADA KUNINGAN", type: "SMK" },
  { name: "SMK AUTO MATSUDA", type: "SMK" },
  { name: "SMK MUHAMADIYAH 1", type: "SMK" },
  { name: "SMK MUHAMADIYAH 2", type: "SMK" },
  { name: "SMK PGRI CIAWIGEBANG", type: "SMK" },
  { name: "SMK CENDIKIA UTAMA", type: "SMK" },
  { name: "SMK CIBENING", type: "SMK" },
  { name: "SMK AL-IHYA SELAJAMBE", type: "SMK" },
  { name: "SMK AL-IHYA CIAWIGEBANG", type: "SMK" },
  { name: "SMK SYNTAX BUSINES SCHOOL", type: "SMK" },
  { name: "SMK IT BINAUL UMMAH", type: "SMK" },
  { name: "SMK IT FATAHILAH", type: "SMK" },
  { name: "SMK HIDAHAYUL ISLAM CIAWIGEBANG", type: "SMK" },
  { name: "SMAN 1 KUNINGAN", type: "SMA" },
  { name: "SMAN 2 KUNINGAN", type: "SMA" },
  { name: "SMAN 3 KUNINGAN", type: "SMA" },
  { name: "SMAN 1 JALAKSANA", type: "SMA" },
  { name: "SMAN 1 CIAWIGEBANG", type: "SMA" },
  { name: "SMAN 1 CIWARU", type: "SMA" },
  { name: "SMAN 1 CINIRU", type: "SMA" },
  { name: "SMAN 1 CIGUGUR", type: "SMA" },
  { name: "SMAN 1 LURAGUNG", type: "SMA" },
  { name: "SMAN 1 CIBINBIN", type: "SMA" },
  { name: "SMAN 1 GARAWANGI", type: "SMA" },
  { name: "SMAN 1 LEBAKWANGI", type: "SMA" },
  { name: "SMAN 1 CIDAHU", type: "SMA" },
  { name: "SMAN 1 KADUGEDE", type: "SMA" },
  { name: "SMAN 1 DARMA", type: "SMA" },
  { name: "SMAN 1 MANDIRANCAN", type: "SMA" },
  { name: "SMAN 1 SUBANG", type: "SMA" },
  { name: "SMA ITUS JALAKSANA", type: "SMA" },
  { name: "SMA IT ALMUTAZAM 1", type: "SMA" },
  { name: "SMA IT ALMUTAZAM 2", type: "SMA" },
  { name: "SMA PUI CIWEDUS", type: "SMA" },
  { name: "SMA BINAUL UMMAH", type: "SMA" },
  { name: "SMA IT AN-NUR DUKUH DALEM", type: "SMA" },
  { name: "MAN 1 KUNINGAN", type: "MA" },
  { name: "MAN 2 KUNINGAB", type: "MA" },
  { name: "MAN 3 KUNINGAN", type: "MA" },
  { name: "MA KHUSNUL KHOTIMAH", type: "MA" },
  { name: "MA PEMBANGUNAN MANDIRANCAN", type: "MA" },
];



const tableBody = document.getElementById('school-list');
const totalData = document.getElementById('total-data');
const searchInput = document.getElementById('search');
const filterInput = document.getElementById('filter');

// Render data
function renderData(data) {
  tableBody.innerHTML = '';
  data.forEach((school, index) => {
    const row = document.createElement('tr');
    row.setAttribute('data-aos', 'fade-up');
    row.innerHTML = `
      <td class="p-4">${index + 1}</td>
      <td class="p-4">${school.name}</td>
      <td class="p-4">${school.type}</td>
      <td class="p-4 text-center">
        <span class="status bg-gray-300 text-gray-600 py-1 px-3 rounded-lg">Belum</span>
      </td>
      <td class="p-4 text-center">
        <button class="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
          onclick="toggleStatus(this)">
          Ubah
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });
  totalData.textContent = `Total data: ${data.length} sekolah`;
}

// Toggle status
function toggleStatus(button) {
  const statusSpan = button.closest('tr').querySelector('.status');
  if (statusSpan.textContent === 'Belum') {
    statusSpan.textContent = 'Sudah';
    statusSpan.classList.remove('bg-gray-300', 'text-gray-600');
    statusSpan.classList.add('bg-green-500', 'text-white');
  } else {
    statusSpan.textContent = 'Belum';
    statusSpan.classList.remove('bg-green-500', 'text-white');
    statusSpan.classList.add('bg-gray-300', 'text-gray-600');
  }
}

// Search function
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredData = schools.filter(school => school.name.toLowerCase().includes(query));
  renderData(filteredData);
});

// Filter by type
filterInput.addEventListener('change', () => {
  const filter = filterInput.value;
  const filteredData = filter === 'all' ? schools : schools.filter(school => school.type === filter);
  renderData(filteredData);
});

// Initial render
renderData(schools);
