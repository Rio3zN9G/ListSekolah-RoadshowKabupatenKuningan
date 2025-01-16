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
  { name: "MAN 2 KUNINGAN", type: "MA" },
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
     
     
     
    `;
    tableBody.appendChild(row);
  });
  totalData.textContent = `Total data: ${data.length} sekolah`;
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
