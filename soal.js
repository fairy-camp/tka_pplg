const SOAL = [
  {
    id: 1,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam sebuah tim pengembangan gim, terdapat peran yang bertugas merancang mekanisme permainan, aturan, dan tantangan yang akan dihadapi pemain. Peran tersebut adalah …",
    image: null,
    opsi: [
      "Game Artist",
      "Game Designer",
      "Game Programmer",
      "Quality Assurance",
      "Sound Engineer"
    ],
    jawaban: 1,
    pembahasan: "Game Designer bertugas merancang mekanisme permainan, aturan, alur cerita, level, dan tantangan yang akan dihadapi pemain. Game Artist membuat aset visual (karakter, lingkungan), Game Programmer menulis kode program gim, Quality Assurance menguji kualitas gim, dan Sound Engineer menangani efek suara serta musik."
  },
  {
    id: 2,
    type: "Pilihan Ganda",
    pertanyaan: "Seorang pengembang web ingin menampilkan data dari database ke halaman web. Teknologi yang digunakan untuk menghubungkan kode PHP dengan database MySQL adalah …",
    image: null,
    opsi: ["HTML", "CSS", "JavaScript", "SQL", "PHP Data Objects (PDO)"],
    jawaban: 4,
    pembahasan: "PDO (PHP Data Objects) adalah ekstensi PHP yang menyediakan antarmuka untuk menghubungkan PHP dengan berbagai jenis database, termasuk MySQL. HTML dan CSS digunakan untuk tampilan, JavaScript untuk interaktivitas sisi klien, sedangkan SQL adalah bahasa query untuk mengakses database, bukan penghubungnya."
  },
  {
    id: 3,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\ndef hitung(a, b):\n    hasil = a * b\n    return hasil + 5\n\ndef proses(x):\n    return hitung(x, x - 1) - x\n\nnilai = ...\nprint(nilai)\n\nAgar output program menghasilkan angka 17, maka kode yang harus dilengkapi pada baris nilai = ... adalah …",
    image: null,
    opsi: [
      "nilai = proses(4)",
      "nilai = hitung(3, 2)",
      "nilai = proses(5)",
      "nilai = hitung(4, 3)",
      "nilai = proses(6)"
    ],
    jawaban: 3,
    pembahasan: "Mari uji setiap opsi:\n• proses(4) = hitung(4, 3) − 4 = (4×3+5) − 4 = 17 − 4 = 13\n• hitung(3, 2) = 3×2+5 = 11\n• proses(5) = hitung(5, 4) − 5 = (5×4+5) − 5 = 25 − 5 = 20\n• hitung(4, 3) = 4×3+5 = 12+5 = 17 ✓\n• proses(6) = hitung(6, 5) − 6 = (6×5+5) − 6 = 35 − 6 = 29\nJadi jawaban yang benar adalah nilai = hitung(4, 3)."
  },
  {
    id: 4,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan topologi jaringan berikut! Topologi tersebut menggambarkan jaringan yang menghubungkan beberapa komputer melalui satu perangkat pusat (switch/hub). Topologi tersebut adalah …",
    image: null,
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" width="400" height="340" style="max-width:100%;height:auto;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
        <line x1="200" y1="170" x2="200" y2="50"  stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="320" y2="110" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="320" y2="230" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="200" y2="290" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="80"  y2="230" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="80"  y2="110" stroke="#4f46e5" stroke-width="2"/>

        <rect x="160" y="150" width="80" height="40" rx="6" fill="#4f46e5"/>
        <text x="200" y="175" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">SWITCH</text>

        <rect x="170" y="20" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="180" y="60" width="40" height="6" fill="#7c3aed"/>
        <text x="200" y="45" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 1</text>

        <rect x="290" y="80" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="300" y="120" width="40" height="6" fill="#7c3aed"/>
        <text x="320" y="105" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 2</text>

        <rect x="290" y="200" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="300" y="240" width="40" height="6" fill="#7c3aed"/>
        <text x="320" y="225" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 3</text>

        <rect x="170" y="270" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="180" y="310" width="40" height="6" fill="#7c3aed"/>
        <text x="200" y="295" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 4</text>

        <rect x="50" y="200" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="60" y="240" width="40" height="6" fill="#7c3aed"/>
        <text x="80" y="225" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 5</text>

        <rect x="50" y="80" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="60" y="120" width="40" height="6" fill="#7c3aed"/>
        <text x="80" y="105" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 6</text>
      </svg>
    `,
    opsi: ["Bus", "Ring", "Star", "Mesh", "Tree"],
    jawaban: 2,
    pembahasan: "Gambar menunjukkan topologi Star (bintang), di mana setiap komputer terhubung langsung ke satu perangkat pusat berupa switch/hub. Ciri khas topologi Star: ada perangkat pusat, setiap node punya jalur sendiri, dan jika satu kabel putus, node lain tetap berfungsi. Topologi Bus menggunakan satu kabel utama, Ring membentuk lingkaran, Mesh saling terhubung antar node, dan Tree berbentuk hierarki bertingkat."
  },
  {
    id: 5,
    type: "Benar/Salah",
    pertanyaan: "Diberikan potongan program berikut.\n\nnilai = [60, 75, 80, 55, 90]\njumlah_lulus = 0\nfor n in nilai:\n    if n >= 70:\n        jumlah_lulus += 1\nprint(jumlah_lulus)\n\nTentukan Benar atau Salah setiap pernyataan berikut!",
    image: null,
    pernyataan: [
      { teks: "Perulangan memeriksa setiap nilai dalam daftar.", jawaban: true },
      { teks: "Nilai 70 termasuk kategori lulus.", jawaban: true },
      { teks: "Output program adalah 3.", jawaban: true }
    ],
    pembahasan: "Analisis program:\n1. Perulangan 'for n in nilai' memang memeriksa setiap elemen dalam list nilai (60, 75, 80, 55, 90). → BENAR\n2. Kondisi 'if n >= 70' berarti nilai 70 ke atas dianggap lulus. Jadi 70 termasuk lulus. → BENAR\n3. Nilai yang ≥ 70: 75, 80, 90 → ada 3 nilai. Maka jumlah_lulus = 3. → BENAR"
  },
  {
    id: 6,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pemrograman berorientasi objek, kemampuan suatu objek untuk memiliki bentuk yang berbeda disebut …",
    image: null,
    opsi: ["Enkapsulasi", "Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    jawaban: 2,
    pembahasan: "Polymorphism (polimorfisme) berarti 'banyak bentuk' — kemampuan objek dari class berbeda untuk merespons method yang sama dengan cara yang berbeda. Enkapsulasi = membungkus data & method, Inheritance = pewarisan sifat, Abstraction = menyembunyikan detail implementasi, Encapsulation adalah sinonim enkapsulasi."
  },
  {
    id: 7,
    type: "Pilihan Ganda (Multi Jawaban)",
    pertanyaan: "Perhatikan potongan program berikut.\n\nclass Hewan:\n    def suara(self):\n        return \"Suara hewan\"\n\nclass Kucing(Hewan):\n    def suara(self):\n        return \"Meong\"\n\nclass Anjing(Hewan):\n    def suara(self):\n        return \"Guk\"\n\ndef cetak(obj):\n    return obj.suara()\n\ndata = [Kucing(), Anjing()]\nfor item in data:\n    print(cetak(item))\n\nPernyataan yang benar terkait program tersebut adalah … (Jawaban lebih dari satu)",
    image: null,
    opsi: [
      "Method suara() pada Kucing dan Anjing merupakan overriding.",
      "Fungsi cetak() dapat menerima objek berbeda selama memiliki method suara().",
      "Output selalu sama untuk setiap objek.",
      "Pemanggilan obj.suara() menyesuaikan dengan class objek.",
      "Polymorphism hanya terjadi jika atribut sama."
    ],
    jawaban: [0, 1, 3],
    pembahasan: "Analisis:\n• (A) BENAR — Kucing dan Anjing meng-override method suara() dari parent class Hewan.\n• (B) BENAR — Fungsi cetak() menerima parameter obj apapun yang punya method suara() (duck typing).\n• (C) SALAH — Output berbeda: 'Meong' dan 'Guk', bukan sama.\n• (D) BENAR — obj.suara() akan memanggil method sesuai class objek (Kucing → Meong, Anjing → Guk).\n• (E) SALAH — Polymorphism tidak bergantung pada kesamaan atribut, tetapi pada kesamaan interface/method."
  },
  {
    id: 8,
    type: "Pilihan Ganda",
    pertanyaan: "Sebuah aplikasi mobile memiliki fitur login. Data user disimpan dalam tabel users dengan kolom id, username, password. Perintah SQL untuk menampilkan semua user yang usernya diawali huruf 'A' adalah …",
    image: null,
    opsi: [
      "SELECT * FROM users WHERE username LIKE 'A%';",
      "SELECT * FROM users WHERE username = 'A';",
      "SELECT * FROM users WHERE username LIKE '%A';",
      "SELECT * FROM users WHERE username = 'A%';",
      "SELECT * FROM users WHERE username LIKE 'A_';"
    ],
    jawaban: 0,
    pembahasan: "Untuk mencari data yang diawali huruf 'A', gunakan LIKE dengan wildcard '%' di belakang: 'A%'. Operator '%' mewakili nol atau lebih karakter.\n• LIKE '%A' → diakhiri huruf A\n• LIKE 'A_' → huruf A diikuti tepat satu karakter\n• Tanda '=' tidak cocok untuk pencarian pola, hanya untuk kecocokan persis."
  },
  {
    id: 9,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan gim, proses menguji permainan untuk menemukan bug dan memastikan kualitas disebut …",
    image: null,
    opsi: ["Debugging", "Quality Assurance", "Game Testing", "Playtesting", "Bug Fixing"],
    jawaban: 2,
    pembahasan: "Game Testing adalah proses menguji gim untuk menemukan bug, error, atau masalah kualitas sebelum dirilis. Debugging adalah proses memperbaiki bug, Quality Assurance adalah jaminan kualitas secara keseluruhan, Playtesting adalah pengujian oleh pemain untuk mendapatkan feedback pengalaman bermain, dan Bug Fixing adalah perbaikan bug spesifik."
  },
  {
    id: 10,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\ndef faktorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * faktorial(n-1)\n\nprint(faktorial(4))\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["4", "12", "24", "120", "0"],
    jawaban: 2,
    pembahasan: "Ini adalah fungsi rekursif untuk menghitung faktorial.\nfaktorial(4) = 4 × faktorial(3)\nfaktorial(3) = 3 × faktorial(2)\nfaktorial(2) = 2 × faktorial(1)\nfaktorial(1) = 1 × faktorial(0)\nfaktorial(0) = 1\nMaka: 4×3×2×1×1 = 24. Output = 24."
  },
  {
    id: 11,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam HTML, tag yang digunakan untuk membuat tautan ke halaman lain adalah …",
    image: null,
    opsi: ["<link>", "<a>", "<href>", "<url>", "<p>"],
    jawaban: 1,
    pembahasan: "Tag <a> (anchor) digunakan untuk membuat hyperlink. Atribut href di dalamnya menentukan tujuan tautan, contoh: <a href='https://example.com'>Klik</a>. Tag <link> untuk menghubungkan file eksternal (CSS), <href> dan <url> bukan tag HTML, <p> untuk paragraf."
  },
  {
    id: 12,
    type: "Pilihan Ganda",
    pertanyaan: "Seorang developer ingin menyimpan data sementara di browser pengguna. Teknologi yang tepat digunakan adalah …",
    image: null,
    opsi: ["Session", "Cookie", "Database", "Local Storage", "Server"],
    jawaban: 3,
    pembahasan: "Local Storage adalah penyimpanan sisi klien (browser) yang bersifat persisten, cocok untuk data sementara pengguna tanpa perlu kirim ke server. Session disimpan di server, Cookie ukurannya kecil dan ikut terkirim ke server tiap request, Database dan Server bukan penyimpanan sisi browser."
  },
  {
    id: 13,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan gambar berikut! Gambar tersebut merupakan contoh dari …",
    image: null,
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 320" width="520" height="320" style="max-width:100%;height:auto;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
        <rect x="20" y="40" width="140" height="100" rx="6" fill="#fff" stroke="#4f46e5" stroke-width="2"/>
        <rect x="20" y="40" width="140" height="26" rx="6" fill="#4f46e5"/>
        <text x="90" y="58" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">PELANGGAN</text>
        <text x="30" y="84" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_pelanggan (PK)</text>
        <text x="30" y="100" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">nama</text>
        <text x="30" y="116" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">alamat</text>
        <text x="30" y="132" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">telepon</text>

        <rect x="200" y="40" width="140" height="100" rx="6" fill="#fff" stroke="#4f46e5" stroke-width="2"/>
        <rect x="200" y="40" width="140" height="26" rx="6" fill="#4f46e5"/>
        <text x="270" y="58" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">PESANAN</text>
        <text x="210" y="84" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_pesanan (PK)</text>
        <text x="210" y="100" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">tanggal</text>
        <text x="210" y="116" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">total</text>
        <text x="210" y="132" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_pelanggan (FK)</text>

        <rect x="380" y="40" width="140" height="100" rx="6" fill="#fff" stroke="#4f46e5" stroke-width="2"/>
        <rect x="380" y="40" width="140" height="26" rx="6" fill="#4f46e5"/>
        <text x="450" y="58" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">PRODUK</text>
        <text x="390" y="84" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_produk (PK)</text>
        <text x="390" y="100" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">nama_produk</text>
        <text x="390" y="116" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">harga</text>
        <text x="390" y="132" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">stok</text>

        <line x1="160" y1="90" x2="200" y2="90" stroke="#7c3aed" stroke-width="2"/>
        <text x="165" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">1</text>
        <text x="190" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">N</text>

        <line x1="340" y1="90" x2="380" y2="90" stroke="#7c3aed" stroke-width="2"/>
        <text x="345" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">N</text>
        <text x="370" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">M</text>

        <text x="260" y="200" font-family="Segoe UI, sans-serif" font-size="11" fill="#6b7280" text-anchor="middle">PK = Primary Key | FK = Foreign Key</text>
        <text x="260" y="220" font-family="Segoe UI, sans-serif" font-size="11" fill="#6b7280" text-anchor="middle">Relasi: Pelanggan (1) — (N) Pesanan (N) — (M) Produk</text>
      </svg>
    `,
    opsi: ["DFD", "ERD", "Use Case Diagram", "Class Diagram", "Flowchart"],
    jawaban: 1,
    pembahasan: "Gambar menunjukkan ERD (Entity Relationship Diagram) karena berisi entitas (Pelanggan, Pesanan, Produk) dengan atribut serta relasi antar entitas (1-N, N-M) dan penanda PK (Primary Key) / FK (Foreign Key). DFD fokus pada aliran data, Use Case pada interaksi aktor-sistem, Class Diagram pada struktur class OOP, Flowchart pada alur logika program."
  },
  {
    id: 14,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pemrograman, struktur data yang menggunakan prinsip LIFO (Last In First Out) adalah …",
    image: null,
    opsi: ["Queue", "Stack", "Linked List", "Tree", "Graph"],
    jawaban: 1,
    pembahasan: "Stack (tumpukan) menggunakan prinsip LIFO: data yang terakhir masuk akan pertama keluar. Contoh: tumpukan piring. Queue menggunakan FIFO (First In First Out). Linked List, Tree, dan Graph adalah struktur data dengan aturan berbeda, bukan LIFO."
  },
  {
    id: 15,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan potongan program berikut.\n\nx = 5\ny = 2\nhasil = x // y\nprint(hasil)\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["2.5", "2", "3", "2.0", "0"],
    jawaban: 1,
    pembahasan: "Operator // di Python adalah floor division (pembagian bulat ke bawah). 5 // 2 = 2 (karena 5/2 = 2.5, dibulatkan ke bawah menjadi 2). Berbeda dengan / yang menghasilkan 2.5 (float)."
  },
  {
    id: 16,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan aplikasi, metode pengujian yang dilakukan dengan memasukkan data acak untuk melihat ketahanan sistem disebut …",
    image: null,
    opsi: ["Black Box Testing", "White Box Testing", "Fuzz Testing", "Unit Testing", "Integration Testing"],
    jawaban: 2,
    pembahasan: "Fuzz Testing (fuzzing) adalah teknik pengujian dengan memasukkan data acak/invalid secara masif untuk menemukan kerentanan atau crash pada sistem. Black Box menguji tanpa melihat kode, White Box melihat struktur internal, Unit Testing menguji per unit fungsi, Integration Testing menguji integrasi antar modul."
  },
  {
    id: 17,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\ndef sapa(nama):\n    return \"Halo, \" + nama\n\nprint(sapa(\"Budi\"))\n\nOutput yang dihasilkan adalah …",
    image: null,
    opsi: ["Halo, Budi", "Halo Budi", "Halo, nama", "Budi", "Error"],
    jawaban: 0,
    pembahasan: "Fungsi sapa menerima parameter nama, lalu menggabungkan string 'Halo, ' dengan nilai nama. Saat dipanggil sapa('Budi'), hasilnya 'Halo, ' + 'Budi' = 'Halo, Budi'. Perhatikan ada koma dan spasi setelah 'Halo'."
  },
  {
    id: 18,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam basis data, perintah untuk menghapus tabel adalah …",
    image: null,
    opsi: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE", "CLEAR TABLE"],
    jawaban: 1,
    pembahasan: "DROP TABLE adalah perintah SQL untuk menghapus tabel beserta strukturnya dari database. DELETE adalah perintah untuk menghapus baris data di dalam tabel (tabel tetap ada). REMOVE, ERASE, dan CLEAR bukan perintah SQL standar."
  },
  {
    id: 19,
    type: "Pilihan Ganda",
    pertanyaan: "Sebuah tim pengembang menggunakan Git untuk version control. Perintah untuk menyimpan perubahan ke repositori lokal adalah …",
    image: null,
    opsi: ["git push", "git commit", "git pull", "git clone", "git merge"],
    jawaban: 1,
    pembahasan: "git commit menyimpan perubahan yang sudah di-'git add' ke repositori lokal. git push mengirim commit ke repositori remote, git pull mengambil perubahan dari remote, git clone menyalin repositori, git merge menggabungkan branch."
  },
  {
    id: 20,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\nangka = [1, 2, 3, 4, 5]\nhasil = 0\nfor a in angka:\n    if a % 2 == 0:\n        hasil += a\nprint(hasil)\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["6", "9", "10", "15", "5"],
    jawaban: 0,
    pembahasan: "Program menjumlahkan angka genap dalam list:\n• 1 % 2 = 1 (bukan 0, skip)\n• 2 % 2 = 0 → hasil = 2\n• 3 % 2 = 1 (skip)\n• 4 % 2 = 0 → hasil = 2 + 4 = 6\n• 5 % 2 = 1 (skip)\nOutput = 6."
  },
  {
    id: 21,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan gim, engine yang sering digunakan untuk membuat gim 2D/3D adalah …",
    image: null,
    opsi: ["Unity", "Unreal Engine", "Godot", "Semua benar", "Hanya Unity"],
    jawaban: 3,
    pembahasan: "Unity, Unreal Engine, dan Godot adalah tiga game engine populer yang semuanya bisa digunakan untuk membuat gim 2D maupun 3D. Jadi jawaban yang paling tepat adalah 'Semua benar'."
  },
  {
    id: 22,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan pernyataan berikut!\n1. HTML digunakan untuk struktur halaman web.\n2. CSS digunakan untuk mempercantik tampilan.\n3. JavaScript digunakan untuk interaktivitas.\nPernyataan yang benar adalah …",
    image: null,
    opsi: ["1 dan 2", "1 dan 3", "2 dan 3", "1, 2, dan 3", "Tidak ada yang benar"],
    jawaban: 3,
    pembahasan: "Ketiga pernyataan benar:\n• HTML (HyperText Markup Language) → struktur/kerangka halaman web.\n• CSS (Cascading Style Sheets) → mempercantik tampilan (warna, layout, font).\n• JavaScript → membuat halaman web interaktif (event, animasi, validasi)."
  },
  {
    id: 23,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pemrograman, error yang terjadi karena kesalahan logika program disebut …",
    image: null,
    opsi: ["Syntax Error", "Runtime Error", "Logical Error", "Compilation Error", "System Error"],
    jawaban: 2,
    pembahasan: "Logical Error adalah kesalahan logika di mana program berjalan tanpa crash, tetapi hasilnya tidak sesuai harapan. Syntax Error = kesalahan penulisan kode, Runtime Error = error saat program berjalan, Compilation Error = gagal kompilasi."
  },
  {
    id: 24,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\nclass Mobil:\n    def __init__(self, merk):\n        self.merk = merk\n\nm = Mobil(\"Toyota\")\nprint(m.merk)\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["Toyota", "Mobil", "merk", "Error", "None"],
    jawaban: 0,
    pembahasan: "Class Mobil memiliki constructor __init__ yang menyimpan nilai merk ke atribut self.merk. Saat objek m dibuat dengan Mobil('Toyota'), m.merk bernilai 'Toyota'. Maka print(m.merk) menghasilkan 'Toyota'."
  },
  {
    id: 25,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam jaringan komputer, IP address 192.168.1.1 termasuk dalam kelas …",
    image: null,
    opsi: ["A", "B", "C", "D", "E"],
    jawaban: 2,
    pembahasan: "IP address dikelompokkan menjadi 5 kelas berdasarkan oktet pertama:\n• Kelas A: 1–126\n• Kelas B: 128–191\n• Kelas C: 192–223 ← 192 termasuk di sini\n• Kelas D: 224–239 (multicast)\n• Kelas E: 240–255 (eksperimental)\nKarena oktet pertama 192, maka termasuk Kelas C. 192.168.1.1 juga termasuk IP private."
  },
  {
    id: 26,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan potongan program berikut.\n\ndef cek(n):\n    if n > 0:\n        return \"Positif\"\n    elif n < 0:\n        return \"Negatif\"\n    else:\n        return \"Nol\"\n\nprint(cek(-5))\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["Positif", "Negatif", "Nol", "Error", "Tidak ada output"],
    jawaban: 1,
    pembahasan: "Fungsi cek menerima n = -5. Karena -5 < 0, maka kondisi elif n < 0 terpenuhi dan mengembalikan string 'Negatif'. Output = Negatif."
  },
  {
    id: 27,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan perangkat lunak, model yang menekankan iterasi dan kolaborasi tim disebut …",
    image: null,
    opsi: ["Waterfall", "Agile", "Scrum", "Kanban", "DevOps"],
    jawaban: 1,
    pembahasan: "Agile adalah metodologi pengembangan perangkat lunak yang menekankan iterasi cepat, kolaborasi tim, dan responsif terhadap perubahan. Waterfall bersifat linear/berurutan. Scrum dan Kanban adalah framework spesifik di dalam Agile. DevOps lebih ke budaya kolaborasi dev & ops."
  },
  {
    id: 28,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\ndata = {\"a\": 1, \"b\": 2, \"c\": 3}\nfor key in data:\n    print(key)\n\nOutput yang dihasilkan adalah …",
    image: null,
    opsi: ["a b c", "1 2 3", "a:1 b:2 c:3", "Error", "Tidak ada output"],
    jawaban: 0,
    pembahasan: "Saat melakukan iterasi pada dictionary di Python, secara default yang diiterasi adalah key-nya. Jadi for key in data akan mencetak 'a', 'b', 'c' (masing-masing di baris baru). Untuk mencetak value, gunakan data.values(); untuk pasangan key-value, gunakan data.items()."
  },
  {
    id: 29,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam basis data relasional, kolom yang menjadi kunci unik untuk setiap baris disebut …",
    image: null,
    opsi: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key", "Super Key"],
    jawaban: 1,
    pembahasan: "Primary Key (kunci utama) adalah kolom atau kombinasi kolom yang bersifat unik untuk setiap baris dan tidak boleh NULL. Foreign Key = kunci tamu yang merujuk ke tabel lain. Candidate Key = kandidat yang bisa jadi primary key. Composite Key = primary key dari beberapa kolom. Super Key = himpunan kolom yang bisa mengidentifikasi baris unik."
  },
  {
    id: 30,
    type: "Pilihan Ganda",
    pertanyaan: "Seorang pengembang ingin membuat aplikasi yang dapat berjalan di Android dan iOS dengan satu basis kode. Framework yang tepat adalah …",
    image: null,
    opsi: ["React Native", "Flutter", "Xamarin", "Semua benar", "Hanya Flutter"],
    jawaban: 3,
    pembahasan: "React Native, Flutter, dan Xamarin adalah tiga framework cross-platform yang memungkinkan pembuatan aplikasi Android & iOS dari satu basis kode. Jadi jawaban paling tepat adalah 'Semua benar'. Masing-masing punya kelebihan: React Native (JavaScript), Flutter (Dart), Xamarin (C#)."
  }
];
