// ===================== STATE =====================
let currentIndex = 0;
let jawabanUser = {}; // { soalId: value }

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
const resultModal = document.getElementById('result-modal');
const scoreValue = document.getElementById('score-value');
const scoreMessage = document.getElementById('score-message');
const resultDetail = document.getElementById('result-detail');
const btnRestart = document.getElementById('btn-restart');

// ===================== RENDER =====================
function renderSoal() {
  const soal = SOAL[currentIndex];

  // Header
  elSoalNumber.textContent = `Soal ${currentIndex + 1}`;
  elSoalType.textContent = soal.type;

  // Pertanyaan
  elSoalText.textContent = soal.pertanyaan;

  // Gambar / SVG
  if (soal.svg) {
    elSoalImage.innerHTML = soal.svg;
  } else if (soal.image) {
    elSoalImage.innerHTML = `<img src="${soal.image}" alt="Ilustrasi soal ${currentIndex + 1}" />`;
  } else {
    elSoalImage.innerHTML = '';
  }

  // Opsi jawaban
  elSoalOptions.innerHTML = '';

  if (soal.type === "Benar/Salah") {
    renderBenarSalah(soal);
  } else if (soal.type === "Pilihan Ganda (Multi Jawaban)") {
    renderMultiChoice(soal);
  } else {
    renderSingleChoice(soal);
  }

  // Progress
  updateProgress();

  // Navigasi
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
      <div style="font-weight:600; margin-bottom:8px; color:#374151;">${p.teks}</div>
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

btnFinish.addEventListener('click', () => {
  hitungNilai();
});

btnRestart.addEventListener('click', () => {
  currentIndex = 0;
  jawabanUser = {};
  resultModal.classList.add('hidden');
  renderSoal();
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
}

// ===================== INIT =====================
renderSoal();