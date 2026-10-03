// ===================== KONFIGURASI GOOGLE SHEETS =====================
// Ganti dengan URL Web App dari Apps Script Anda
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0qgvfMY2mbr46szBYNlrFQbWgE8SRkUo2i6m7G4S2QPEQN_DSfHD9QEDmRYoJSHZdYg/exec";

// ===================== FUNGSI KIRIM KE GOOGLE SHEETS =====================
async function kirimKeSheets(nama, kelas, jumlahBenar, nilai) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        nama: nama,
        kelas: kelas,
        jumlahBenar: jumlahBenar,
        nilai: nilai
      })
    });

    console.log('✅ Hasil terkirim ke Google Sheets');
    return true;
  } catch (err) {
    console.error('❌ Gagal mengirim ke Google Sheets:', err);
    return false;
  }
}

// ===================== STATE =====================
let currentIndex = 0;
let jawabanUser = {}; // { soalId: value }
let raguSet = new Set(); // set soalId yang ditandai ragu-ragu
let sudahKirim = false; // flag untuk mencegah duplikasi pengiriman

// Identitas peserta
let peserta = {
  nama: "",
  kelas: ""
};

// ===================== ELEMEN =====================
const elSoalNumber = document.getElementById('soal-number');
const elSoalType = document.getElementById('soal-type');
const elSoalText = document.getElementById('soal-text');
const elSoalImage = document.getElementById('soal-image-container');
const elSoalOptions = document.getElementById('soal-options');
const elProgressText = document.getElementById('progress-text');
const elProgressPercent = document.getElementById('progress-percent');
const elProgressFill = document.getElementById('progress-fill');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');
const btnRagu = document.getElementById('btn-ragu');
const nomorGrid = document.getElementById('nomor-grid');

const confirmModal = document.getElementById('confirm-modal');
const confirmAnswered = document.getElementById('confirm-answered');
const confirmTotal = document.getElementById('confirm-total');
const confirmWarning = document.getElementById('confirm-warning');
const btnCancelFinish = document.getElementById('btn-cancel-finish');
const btnConfirmFinish = document.getElementById('btn-confirm-finish');

const resultModal = document.getElementById('result-modal');
const scoreValue = document.getElementById('score-value');
const scoreMessage = document.getElementById('score-message');
const resultDetail = document.getElementById('result-detail');
const btnRestart = document.getElementById('btn-restart');
const btnReview = document.getElementById('btn-review');
const btnGantiPeserta = document.getElementById('btn-ganti-peserta');

const reviewModal = document.getElementById('review-modal');
const reviewNav = document.getElementById('review-nav');
const reviewBody = document.getElementById('review-body');
const btnCloseReview = document.getElementById('btn-close-review');

// Elemen Welcome Screen
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const formIdentitas = document.getElementById('form-identitas');
const inputNama = document.getElementById('input-nama');
const inputKelas = document.getElementById('input-kelas');
const subtitlePeserta = document.getElementById('subtitle-peserta');
const pesertaInfoResult = document.getElementById('peserta-info-result');

// ===================== UTIL =====================
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeKeepFormatting(str) {
  if (str === null || str === undefined) return '';
  let s = String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  s = s.replace(/&lt;br\s*\/?&gt;/gi, '<br>');
  s = s.replace(/&lt;strong&gt;/gi, '<strong>');
  s = s.replace(/&lt;\/strong&gt;/gi, '</strong>');
  s = s.replace(/&lt;em&gt;/gi, '<em>');
  s = s.replace(/&lt;\/em&gt;/gi, '</em>');
  s = s.replace(/\n/g, '<br>');
  return s;
}

// ===================== WELCOME SCREEN =====================
formIdentitas.addEventListener('submit', (e) => {
  e.preventDefault();

  const nama = inputNama.value.trim();
  const kelas = inputKelas.value.trim();

  if (!nama || !kelas) {
    alert("Mohon isi Nama dan Kelas terlebih dahulu.");
    return;
  }

  // Simpan ke state
  peserta.nama = nama;
  peserta.kelas = kelas;

  // Simpan ke localStorage (opsional, agar tidak perlu input ulang)
  try {
    localStorage.setItem('tka_peserta', JSON.stringify(peserta));
  } catch (err) {
    console.warn('Tidak bisa menyimpan ke localStorage:', err);
  }

  // Update tampilan
  subtitlePeserta.innerHTML = `Peserta: <strong>${escapeHtml(nama)}</strong> — Kelas <strong>${escapeHtml(kelas)}</strong>`;

  // Sembunyikan welcome, tampilkan quiz
  welcomeScreen.classList.add('hidden');
  quizContainer.classList.remove('hidden');

  // Render soal pertama
  renderSoal();
});

// Auto-fill dari localStorage (jika ada)
(function autoFillPeserta() {
  try {
    const saved = localStorage.getItem('tka_peserta');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.nama) inputNama.value = data.nama;
      if (data.kelas) inputKelas.value = data.kelas;
    }
  } catch (err) {
    // abaikan
  }
})();

// ===================== RENDER =====================
function renderSoal() {
  const soal = SOAL[currentIndex];

  elSoalNumber.textContent = `Soal ${currentIndex + 1}`;
  elSoalType.textContent = soal.type;
  elSoalText.textContent = soal.pertanyaan;

  if (soal.svg) {
    elSoalImage.innerHTML = soal.svg;
  } else if (soal.image) {
    elSoalImage.innerHTML = `<img src="${soal.image}" alt="Ilustrasi soal ${currentIndex + 1}" />`;
  } else {
    elSoalImage.innerHTML = '';
  }

  elSoalOptions.innerHTML = '';

  if (soal.type === "Benar/Salah") {
    renderBenarSalah(soal);
  } else if (soal.type === "Pilihan Ganda (Multi Jawaban)") {
    renderMultiChoice(soal);
  } else {
    renderSingleChoice(soal);
  }

  btnRagu.classList.toggle('active', raguSet.has(soal.id));
  btnRagu.textContent = raguSet.has(soal.id) ? '✓ Ditandai Ragu-ragu' : 'Tandai Ragu-ragu';

  updateProgress();
  renderNomorGrid();

  btnPrev.disabled = currentIndex === 0;
  btnNext.classList.toggle('hidden', currentIndex === SOAL.length - 1);
  btnFinish.classList.toggle('hidden', currentIndex !== SOAL.length - 1);
}

function renderSingleChoice(soal) {
  soal.opsi.forEach((teks, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    if (jawabanUser[soal.id] === i) div.classList.add('selected');

    div.innerHTML = `
      <input type="radio" name="soal-${soal.id}" id="opt-${soal.id}-${i}" value="${i}" ${jawabanUser[soal.id] === i ? 'checked' : ''} />
      <label for="opt-${soal.id}-${i}">${teks}</label>
    `;

    div.addEventListener('click', () => {
      jawabanUser[soal.id] = i;
      renderSoal();
    });

    elSoalOptions.appendChild(div);
  });
}

function renderMultiChoice(soal) {
  const selected = jawabanUser[soal.id] || [];

  soal.opsi.forEach((teks, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    if (selected.includes(i)) div.classList.add('selected');

    div.innerHTML = `
      <input type="checkbox" id="opt-${soal.id}-${i}" value="${i}" ${selected.includes(i) ? 'checked' : ''} />
      <label for="opt-${soal.id}-${i}">${teks}</label>
    `;

    div.addEventListener('click', (e) => {
      e.preventDefault();
      let arr = jawabanUser[soal.id] || [];
      if (arr.includes(i)) {
        arr = arr.filter(x => x !== i);
      } else {
        arr = [...arr, i];
      }
      jawabanUser[soal.id] = arr;
      renderSoal();
    });

    elSoalOptions.appendChild(div);
  });
}

function renderBenarSalah(soal) {
  const userAns = jawabanUser[soal.id] || {};

  soal.pernyataan.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'flex-start';

    const val = userAns[i];
    if (val !== undefined) div.classList.add('selected');

    div.innerHTML = `
      <div style="font-weight:600; margin-bottom:8px; color:#374151;">${escapeHtml(p.teks)}</div>
      <div style="display:flex; gap:20px;">
        <label style="cursor:pointer;">
          <input type="radio" name="bs-${soal.id}-${i}" value="true" ${val === true ? 'checked' : ''} /> Benar
        </label>
        <label style="cursor:pointer;">
          <input type="radio" name="bs-${soal.id}-${i}" value="false" ${val === false ? 'checked' : ''} /> Salah
        </label>
      </div>
    `;

    div.querySelectorAll('input').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const v = e.target.value === 'true';
        if (!jawabanUser[soal.id]) jawabanUser[soal.id] = {};
        jawabanUser[soal.id][i] = v;
        renderSoal();
      });
    });

    elSoalOptions.appendChild(div);
  });
}

function isAnswered(soal) {
  const jawab = jawabanUser[soal.id];
  if (soal.type === "Benar/Salah") {
    if (!jawab) return false;
    return soal.pernyataan.every((_, i) => jawab[i] !== undefined);
  } else if (soal.type === "Pilihan Ganda (Multi Jawaban)") {
    return Array.isArray(jawab) && jawab.length > 0;
  } else {
    return jawab !== undefined && jawab !== null;
  }
}

function renderNomorGrid() {
  nomorGrid.innerHTML = '';
  SOAL.forEach((soal, i) => {
    const btn = document.createElement('button');
    btn.className = 'nomor-btn';
    btn.textContent = i + 1;

    if (i === currentIndex) btn.classList.add('active');
    if (raguSet.has(soal.id)) btn.classList.add('ragu');
    else if (isAnswered(soal)) btn.classList.add('answered');

    btn.addEventListener('click', () => {
      currentIndex = i;
      renderSoal();
    });

    nomorGrid.appendChild(btn);
  });
}

function updateProgress() {
  const total = SOAL.length;
  const current = currentIndex + 1;
  const percent = Math.round((current / total) * 100);

  elProgressText.textContent = `Soal ${current} dari ${total}`;
  elProgressPercent.textContent = `${percent}%`;
  elProgressFill.style.width = `${percent}%`;
}

// ===================== NAVIGASI =====================
btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderSoal();
  }
});

btnNext.addEventListener('click', () => {
  if (currentIndex < SOAL.length - 1) {
    currentIndex++;
    renderSoal();
  }
});

btnRagu.addEventListener('click', () => {
  const soalId = SOAL[currentIndex].id;
  if (raguSet.has(soalId)) {
    raguSet.delete(soalId);
  } else {
    raguSet.add(soalId);
  }
  renderSoal();
});

// ===================== FINISH =====================
btnFinish.addEventListener('click', () => {
  const total = SOAL.length;
  let answered = 0;
  SOAL.forEach(s => { if (isAnswered(s)) answered++; });

  confirmAnswered.textContent = answered;
  confirmTotal.textContent = total;

  const belum = total - answered;
  const ragu = raguSet.size;

  let warning = '';
  if (belum > 0) warning += `⚠️ Masih ada ${belum} soal yang belum dijawab. `;
  if (ragu > 0) warning += `🤔 Ada ${ragu} soal yang ditandai ragu-ragu.`;
  confirmWarning.textContent = warning;

  confirmModal.classList.remove('hidden');
});

btnCancelFinish.addEventListener('click', () => {
  confirmModal.classList.add('hidden');
});

btnConfirmFinish.addEventListener('click', () => {
  confirmModal.classList.add('hidden');
  hitungNilai();
});

btnRestart.addEventListener('click', () => {
  currentIndex = 0;
  jawabanUser = {};
  raguSet = new Set();
  sudahKirim = false; // reset flag agar bisa kirim lagi setelah mengulang
  resultModal.classList.add('hidden');
  reviewModal.classList.add('hidden');
  renderSoal();
});

// ===================== GANTI PESERTA =====================
btnGantiPeserta.addEventListener('click', () => {
  const konfirmasi = confirm(
    "Selesaikan sesi untuk peserta ini?\n\n" +
    "Nama dan kelas akan dihapus, dan peserta berikutnya\n" +
    "harus mengisi identitas dari awal."
  );

  if (!konfirmasi) return;

  // Hapus data peserta dari localStorage
  try {
    localStorage.removeItem('tka_peserta');
  } catch (err) {
    console.warn('Gagal menghapus localStorage:', err);
  }

  // Reset semua state
  currentIndex = 0;
  jawabanUser = {};
  raguSet = new Set();
  sudahKirim = false;
  peserta.nama = "";
  peserta.kelas = "";

  // Kosongkan input
  inputNama.value = "";
  inputKelas.value = "";

  // Sembunyikan semua modal
  resultModal.classList.add('hidden');
  reviewModal.classList.add('hidden');
  confirmModal.classList.add('hidden');

  // Sembunyikan quiz, tampilkan welcome screen
  quizContainer.classList.add('hidden');
  welcomeScreen.classList.remove('hidden');

  // Fokus ke input nama
  inputNama.focus();
});

// ===================== HITUNG NILAI =====================
function hitungNilai() {
  let benar = 0;
  const detail = [];

  SOAL.forEach((soal) => {
    const jawab = jawabanUser[soal.id];

    if (soal.type === "Benar/Salah") {
      let semuaBenar = true;
      soal.pernyataan.forEach((p, i) => {
        const userVal = jawab ? jawab[i] : undefined;
        if (userVal !== p.jawaban) semuaBenar = false;
      });
      if (semuaBenar) benar++;
      detail.push(`Soal ${soal.id}: ${semuaBenar ? '✅' : '❌'}`);
    } else if (soal.type === "Pilihan Ganda (Multi Jawaban)") {
      const userArr = (jawab || []).slice().sort().join(',');
      const keyArr = soal.jawaban.slice().sort().join(',');
      const isBenar = userArr === keyArr && userArr !== '';
      if (isBenar) benar++;
      detail.push(`Soal ${soal.id}: ${isBenar ? '✅' : '❌'}`);
    } else {
      const isBenar = jawab === soal.jawaban;
      if (isBenar) benar++;
      detail.push(`Soal ${soal.id}: ${isBenar ? '✅' : '❌'}`);
    }
  });

  const total = SOAL.length;
  const nilai = Math.round((benar / total) * 100);

  // Tampilkan info peserta di modal hasil
  pesertaInfoResult.innerHTML = `
    <strong>${escapeHtml(peserta.nama)}</strong><br>
    Kelas: ${escapeHtml(peserta.kelas)}
  `;

  scoreValue.textContent = benar;
  document.querySelector('.score-label').textContent = `/ ${total}`;

  let pesan = '';
  if (nilai >= 90) pesan = 'Luar biasa! Kamu sangat siap untuk TKA PPLG! 🎉';
  else if (nilai >= 75) pesan = 'Bagus! Sedikit lagi menuju sempurna. 💪';
  else if (nilai >= 60) pesan = 'Cukup baik, tapi masih perlu belajar lagi. 📚';
  else pesan = 'Jangan menyerah! Terus berlatih ya. 🚀';

  scoreMessage.textContent = `${pesan} (Nilai: ${nilai})`;
  resultDetail.innerHTML = detail.map(d => `<p>${d}</p>`).join('');

  resultModal.classList.remove('hidden');

  // ===================== KIRIM KE GOOGLE SHEETS =====================
  if (!sudahKirim) {
    kirimKeSheets(peserta.nama, peserta.kelas, benar, nilai);
    sudahKirim = true;
  }
}

// ===================== REVIEW / PEMBAHASAN =====================
btnReview.addEventListener('click', () => {
  resultModal.classList.add('hidden');
  reviewModal.classList.remove('hidden');
  renderReviewNav(0);
});

btnCloseReview.addEventListener('click', () => {
  reviewModal.classList.add('hidden');
  resultModal.classList.remove('hidden');
});

function renderReviewNav(activeIndex) {
  reviewNav.innerHTML = '';
  SOAL.forEach((soal, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;

    const benar = cekBenarSoal(soal);
    btn.classList.add(benar ? 'benar' : 'salah');
    if (i === activeIndex) btn.classList.add('active');

    btn.addEventListener('click', () => {
      renderReviewNav(i);
      renderReviewBody(i);
    });

    reviewNav.appendChild(btn);
  });
  renderReviewBody(activeIndex);
}

function cekBenarSoal(soal) {
  const jawab = jawabanUser[soal.id];
  if (soal.type === "Benar/Salah") {
    if (!jawab) return false;
    return soal.pernyataan.every((p, i) => jawab[i] === p.jawaban);
  } else if (soal.type === "Pilihan Ganda (Multi Jawaban)") {
    const userArr = (jawab || []).slice().sort().join(',');
    const keyArr = soal.jawaban.slice().sort().join(',');
    return userArr === keyArr && userArr !== '';
  } else {
    return jawab === soal.jawaban;
  }
}

function renderReviewBody(index) {
  const soal = SOAL[index];
  const jawab = jawabanUser[soal.id];
  const benar = cekBenarSoal(soal);

  let jawabanUserText = '';
  let jawabanBenarText = '';

  if (soal.type === "Benar/Salah") {
    jawabanUserText = soal.pernyataan.map((p, i) => {
      const v = jawab ? jawab[i] : undefined;
      const label = v === true ? 'Benar' : v === false ? 'Salah' : 'Tidak dijawab';
      return `• ${escapeHtml(p.teks)} → <strong>${label}</strong>`;
    }).join('<br>');
    jawabanBenarText = soal.pernyataan.map((p) => {
      return `• ${escapeHtml(p.teks)} → <strong>${p.jawaban ? 'Benar' : 'Salah'}</strong>`;
    }).join('<br>');
  } else if (soal.type === "Pilihan Ganda (Multi Jawaban)") {
    const userArr = jawab || [];
    jawabanUserText = userArr.length
      ? userArr.slice().sort().map(i => `• ${escapeHtml(soal.opsi[i])}`).join('<br>')
      : 'Tidak dijawab';
    jawabanBenarText = soal.jawaban.slice().sort().map(i => `• ${escapeHtml(soal.opsi[i])}`).join('<br>');
  } else {
    jawabanUserText = jawab !== undefined ? escapeHtml(soal.opsi[jawab]) : 'Tidak dijawab';
    jawabanBenarText = escapeHtml(soal.opsi[soal.jawaban]);
  }

  reviewBody.innerHTML = `
    <div class="review-soal">
      <h4>Soal ${index + 1} — ${soal.type}</h4>
      <p>${escapeHtml(soal.pertanyaan)}</p>
      ${soal.svg ? soal.svg : (soal.image ? `<img src="${soal.image}" style="max-width:100%;border-radius:8px;margin-bottom:10px;" />` : '')}

      <div class="review-answer ${benar ? 'benar' : 'salah'}">
        <strong>${benar ? '✅ Jawaban Anda Benar' : '❌ Jawaban Anda Salah'}</strong><br>
        <em>Jawaban Anda:</em><br>${jawabanUserText}
      </div>

      ${!benar ? `
      <div class="review-answer benar">
        <strong>Jawaban Benar:</strong><br>${jawabanBenarText}
      </div>` : ''}

      <div class="review-pembahasan">
        <strong>💡 Pembahasan:</strong><br>
        ${escapeKeepFormatting(soal.pembahasan) || 'Pembahasan belum tersedia.'}
      </div>
    </div>
  `;
}

// ===================== INIT =====================
// Tidak langsung render soal, tunggu form identitas disubmit.
// renderSoal() dipanggil setelah form disubmit (di handler formIdentitas).
