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
    jawaban: 1
  },
  {
    id: 2,
    type: "Pilihan Ganda",
    pertanyaan: "Seorang pengembang web ingin menampilkan data dari database ke halaman web. Teknologi yang digunakan untuk menghubungkan kode PHP dengan database MySQL adalah …",
    image: null,
    opsi: ["HTML", "CSS", "JavaScript", "SQL", "PHP Data Objects (PDO)"],
    jawaban: 4
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
    jawaban: 0
  },
  {
    id: 4,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan topologi jaringan berikut! Topologi tersebut menggambarkan jaringan yang menghubungkan beberapa komputer melalui satu perangkat pusat (switch/hub). Topologi tersebut adalah …",
    image: null,
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" width="400" height="340" style="max-width:100%;height:auto;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
        <!-- Garis penghubung dari switch ke tiap komputer -->
        <line x1="200" y1="170" x2="200" y2="50"  stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="320" y2="110" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="320" y2="230" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="200" y2="290" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="80"  y2="230" stroke="#4f46e5" stroke-width="2"/>
        <line x1="200" y1="170" x2="80"  y2="110" stroke="#4f46e5" stroke-width="2"/>

        <!-- Switch pusat -->
        <rect x="160" y="150" width="80" height="40" rx="6" fill="#4f46e5"/>
        <text x="200" y="175" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">SWITCH</text>

        <!-- Komputer 1 (atas) -->
        <rect x="170" y="20" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="180" y="60" width="40" height="6" fill="#7c3aed"/>
        <text x="200" y="45" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 1</text>

        <!-- Komputer 2 (kanan atas) -->
        <rect x="290" y="80" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="300" y="120" width="40" height="6" fill="#7c3aed"/>
        <text x="320" y="105" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 2</text>

        <!-- Komputer 3 (kanan bawah) -->
        <rect x="290" y="200" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="300" y="240" width="40" height="6" fill="#7c3aed"/>
        <text x="320" y="225" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 3</text>

        <!-- Komputer 4 (bawah) -->
        <rect x="170" y="270" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="180" y="310" width="40" height="6" fill="#7c3aed"/>
        <text x="200" y="295" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 4</text>

        <!-- Komputer 5 (kiri bawah) -->
        <rect x="50" y="200" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="60" y="240" width="40" height="6" fill="#7c3aed"/>
        <text x="80" y="225" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 5</text>

        <!-- Komputer 6 (kiri atas) -->
        <rect x="50" y="80" width="60" height="40" rx="6" fill="#7c3aed"/>
        <rect x="60" y="120" width="40" height="6" fill="#7c3aed"/>
        <text x="80" y="105" font-family="Segoe UI, sans-serif" font-size="11" fill="#fff" text-anchor="middle">PC 6</text>
      </svg>
    `,
    opsi: ["Bus", "Ring", "Star", "Mesh", "Tree"],
    jawaban: 2
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
    ]
  },
  {
    id: 6,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pemrograman berorientasi objek, kemampuan suatu objek untuk memiliki bentuk yang berbeda disebut …",
    image: null,
    opsi: ["Enkapsulasi", "Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    jawaban: 2
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
    jawaban: [0, 1, 3]
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
    jawaban: 0
  },
  {
    id: 9,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan gim, proses menguji permainan untuk menemukan bug dan memastikan kualitas disebut …",
    image: null,
    opsi: ["Debugging", "Quality Assurance", "Game Testing", "Playtesting", "Bug Fixing"],
    jawaban: 2
  },
  {
    id: 10,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\ndef faktorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * faktorial(n-1)\n\nprint(faktorial(4))\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["4", "12", "24", "120", "0"],
    jawaban: 2
  },
  {
    id: 11,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam HTML, tag yang digunakan untuk membuat tautan ke halaman lain adalah …",
    image: null,
    opsi: ["<link>", "<a>", "<href>", "<url>", "<p>"],
    jawaban: 1
  },
  {
    id: 12,
    type: "Pilihan Ganda",
    pertanyaan: "Seorang developer ingin menyimpan data sementara di browser pengguna. Teknologi yang tepat digunakan adalah …",
    image: null,
    opsi: ["Session", "Cookie", "Database", "Local Storage", "Server"],
    jawaban: 3
  },
  {
    id: 13,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan gambar berikut! Gambar tersebut merupakan contoh dari …",
    image: null,
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 320" width="520" height="320" style="max-width:100%;height:auto;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
        <!-- Entitas Pelanggan -->
        <rect x="20" y="40" width="140" height="100" rx="6" fill="#fff" stroke="#4f46e5" stroke-width="2"/>
        <rect x="20" y="40" width="140" height="26" rx="6" fill="#4f46e5"/>
        <text x="90" y="58" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">PELANGGAN</text>
        <text x="30" y="84" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_pelanggan (PK)</text>
        <text x="30" y="100" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">nama</text>
        <text x="30" y="116" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">alamat</text>
        <text x="30" y="132" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">telepon</text>

        <!-- Entitas Pesanan -->
        <rect x="200" y="40" width="140" height="100" rx="6" fill="#fff" stroke="#4f46e5" stroke-width="2"/>
        <rect x="200" y="40" width="140" height="26" rx="6" fill="#4f46e5"/>
        <text x="270" y="58" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">PESANAN</text>
        <text x="210" y="84" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_pesanan (PK)</text>
        <text x="210" y="100" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">tanggal</text>
        <text x="210" y="116" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">total</text>
        <text x="210" y="132" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_pelanggan (FK)</text>

        <!-- Entitas Produk -->
        <rect x="380" y="40" width="140" height="100" rx="6" fill="#fff" stroke="#4f46e5" stroke-width="2"/>
        <rect x="380" y="40" width="140" height="26" rx="6" fill="#4f46e5"/>
        <text x="450" y="58" font-family="Segoe UI, sans-serif" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">PRODUK</text>
        <text x="390" y="84" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">id_produk (PK)</text>
        <text x="390" y="100" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">nama_produk</text>
        <text x="390" y="116" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">harga</text>
        <text x="390" y="132" font-family="Segoe UI, sans-serif" font-size="10" fill="#374151">stok</text>

        <!-- Relasi Pelanggan - Pesanan -->
        <line x1="160" y1="90" x2="200" y2="90" stroke="#7c3aed" stroke-width="2"/>
        <text x="165" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">1</text>
        <text x="190" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">N</text>

        <!-- Relasi Pesanan - Produk -->
        <line x1="340" y1="90" x2="380" y2="90" stroke="#7c3aed" stroke-width="2"/>
        <text x="345" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">N</text>
        <text x="370" y="82" font-family="Segoe UI, sans-serif" font-size="9" fill="#7c3aed">M</text>

        <!-- Keterangan -->
        <text x="260" y="200" font-family="Segoe UI, sans-serif" font-size="11" fill="#6b7280" text-anchor="middle">PK = Primary Key | FK = Foreign Key</text>
        <text x="260" y="220" font-family="Segoe UI, sans-serif" font-size="11" fill="#6b7280" text-anchor="middle">Relasi: Pelanggan (1) — (N) Pesanan (N) — (M) Produk</text>
      </svg>
    `,
    opsi: ["DFD", "ERD", "Use Case Diagram", "Class Diagram", "Flowchart"],
    jawaban: 1
  },
  {
    id: 14,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pemrograman, struktur data yang menggunakan prinsip LIFO (Last In First Out) adalah …",
    image: null,
    opsi: ["Queue", "Stack", "Linked List", "Tree", "Graph"],
    jawaban: 1
  },
  {
    id: 15,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan potongan program berikut.\n\nx = 5\ny = 2\nhasil = x // y\nprint(hasil)\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["2.5", "2", "3", "2.0", "0"],
    jawaban: 1
  },
  {
    id: 16,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan aplikasi, metode pengujian yang dilakukan dengan memasukkan data acak untuk melihat ketahanan sistem disebut …",
    image: null,
    opsi: ["Black Box Testing", "White Box Testing", "Fuzz Testing", "Unit Testing", "Integration Testing"],
    jawaban: 2
  },
  {
    id: 17,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\ndef sapa(nama):\n    return \"Halo, \" + nama\n\nprint(sapa(\"Budi\"))\n\nOutput yang dihasilkan adalah …",
    image: null,
    opsi: ["Halo, Budi", "Halo Budi", "Halo, nama", "Budi", "Error"],
    jawaban: 0
  },
  {
    id: 18,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam basis data, perintah untuk menghapus tabel adalah …",
    image: null,
    opsi: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE", "CLEAR TABLE"],
    jawaban: 1
  },
  {
    id: 19,
    type: "Pilihan Ganda",
    pertanyaan: "Sebuah tim pengembang menggunakan Git untuk version control. Perintah untuk menyimpan perubahan ke repositori lokal adalah …",
    image: null,
    opsi: ["git push", "git commit", "git pull", "git clone", "git merge"],
    jawaban: 1
  },
  {
    id: 20,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\nangka = [1, 2, 3, 4, 5]\nhasil = 0\nfor a in angka:\n    if a % 2 == 0:\n        hasil += a\nprint(hasil)\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["6", "9", "10", "15", "5"],
    jawaban: 0
  },
  {
    id: 21,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan gim, engine yang sering digunakan untuk membuat gim 2D/3D adalah …",
    image: null,
    opsi: ["Unity", "Unreal Engine", "Godot", "Semua benar", "Hanya Unity"],
    jawaban: 3
  },
  {
    id: 22,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan pernyataan berikut!\n1. HTML digunakan untuk struktur halaman web.\n2. CSS digunakan untuk mempercantik tampilan.\n3. JavaScript digunakan untuk interaktivitas.\nPernyataan yang benar adalah …",
    image: null,
    opsi: ["1 dan 2", "1 dan 3", "2 dan 3", "1, 2, dan 3", "Tidak ada yang benar"],
    jawaban: 3
  },
  {
    id: 23,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pemrograman, error yang terjadi karena kesalahan logika program disebut …",
    image: null,
    opsi: ["Syntax Error", "Runtime Error", "Logical Error", "Compilation Error", "System Error"],
    jawaban: 2
  },
  {
    id: 24,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\nclass Mobil:\n    def __init__(self, merk):\n        self.merk = merk\n\nm = Mobil(\"Toyota\")\nprint(m.merk)\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["Toyota", "Mobil", "merk", "Error", "None"],
    jawaban: 0
  },
  {
    id: 25,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam jaringan komputer, IP address 192.168.1.1 termasuk dalam kelas …",
    image: null,
    opsi: ["A", "B", "C", "D", "E"],
    jawaban: 2
  },
  {
    id: 26,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan potongan program berikut.\n\ndef cek(n):\n    if n > 0:\n        return \"Positif\"\n    elif n < 0:\n        return \"Negatif\"\n    else:\n        return \"Nol\"\n\nprint(cek(-5))\n\nOutput dari program tersebut adalah …",
    image: null,
    opsi: ["Positif", "Negatif", "Nol", "Error", "Tidak ada output"],
    jawaban: 1
  },
  {
    id: 27,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam pengembangan perangkat lunak, model yang menekankan iterasi dan kolaborasi tim disebut …",
    image: null,
    opsi: ["Waterfall", "Agile", "Scrum", "Kanban", "DevOps"],
    jawaban: 1
  },
  {
    id: 28,
    type: "Pilihan Ganda",
    pertanyaan: "Perhatikan kode berikut!\n\ndata = {\"a\": 1, \"b\": 2, \"c\": 3}\nfor key in data:\n    print(key)\n\nOutput yang dihasilkan adalah …",
    image: null,
    opsi: ["a b c", "1 2 3", "a:1 b:2 c:3", "Error", "Tidak ada output"],
    jawaban: 0
  },
  {
    id: 29,
    type: "Pilihan Ganda",
    pertanyaan: "Dalam basis data relasional, kolom yang menjadi kunci unik untuk setiap baris disebut …",
    image: null,
    opsi: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key", "Super Key"],
    jawaban: 1
  },
  {
    id: 30,
    type: "Pilihan Ganda",
    pertanyaan: "Seorang pengembang ingin membuat aplikasi yang dapat berjalan di Android dan iOS dengan satu basis kode. Framework yang tepat adalah …",
    image: null,
    opsi: ["React Native", "Flutter", "Xamarin", "Semua benar", "Hanya Flutter"],
    jawaban: 3
  }
];