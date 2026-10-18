# Auto Kuesioner Dosen WICIDA 🚀

Ekstensi browser (Google Chrome / Chromium-based) berbasis **Manifest V3** untuk mengisi kuesioner evaluasi dosen/perkuliahan secara otomatis dengan satu kali klik.

Cocok untuk menghemat waktu saat harus mengisi banyak kuesioner yang repetitif.

---

## ✨ Fitur

- **Otomatisasi Dropdown (`<select>`)**: Otomatis memilih opsi terakhir (biasanya nilai tertinggi / opsi paling positif) pada setiap dropdown penilaian.
- **Pengisian Esai / Masukan (`<textarea>`)**: Mengisi saran/masukan otomatis dengan template respon positif:
  > *"Penyampaian materi sudah sangat baik dan jelas. Semoga dapat dipertahankan."*
- **Trigger Event Alami**: Mengirimkan event `change` dan `input` agar form mengenali perubahan nilai secara valid.
- **Notifikasi Ringkasan**: Menampilkan alert popup yang memberi tahu berapa dropdown dan esai yang berhasil diisi.
- **Ringan & Aman**: Berjalan lokal hanya saat icon ekstensi diklik menggunakan izin `activeTab` dan `scripting`.

---

## 📁 Struktur File

```text
AutoKuesioner/
├── manifest.json   # Konfigurasi ekstensi Chrome (Manifest V3)
├── background.js   # Service worker untuk menangani klik ikon ekstensi
├── content.js      # Script otomasi pengisian form DOM
└── README.md       # Dokumentasi proyek
```

---

## 🛠️ Cara Instalasi (Chrome / Edge / Brave)

1. **Clone atau Download** repositori ini ke komputer Anda.
2. Buka browser Chromium (Google Chrome, Microsoft Edge, Brave, dll).
3. Masuk ke halaman pengelolaan ekstensi:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
4. Aktifkan **Developer mode** (Mode Pengembang) di pojok kanan atas.
5. Klik tombol **Load unpacked** (Muat yang belum dibongkar).
6. Pilih folder repositori ini (`AutoKuesioner`).
7. Ekstensi **Auto Kuesioner Yoshua!!!!** siap digunakan.

---

## 📖 Cara Penggunaan

1. Buka halaman kuesioner dosen di browser Anda.
2. Buka menu ekstensi browser (ikon puzzle di pojok kanan atas).
3. Sematkan (pin) ikon ekstensi agar mudah diakses.
4. Klik ikon ekstensi **Auto Kuesioner**.
5. Tunggu notifikasi alert muncul yang mengonfirmasi form telah terisi.
6. Periksa kembali jawaban yang terisi, lalu klik **Simpan / Submit** pada halaman kuesioner.

---

## ⚙️ Kustomisasi Respon Esai

Jika ingin mengubah kalimat masukan/esai otomatis:
1. Buka file [`content.js`](content.js).
2. Ubah teks pada baris berikut:
   ```javascript
   area.value = "Tulis komentar atau masukan kustom Anda di sini.";
   ```
3. Simpan file, lalu klik ikon **Refresh** (reload) pada kartu ekstensi di halaman `chrome://extensions/`.

---

## ⚠️ Disclaimer

Ekstensi ini dibuat untuk tujuan otomasi dan efisiensi waktu. Tetap disarankan untuk membaca dan meninjau kembali isian kuesioner sebelum menekan tombol kirim/simpan agar evaluasi tetap relevan dan akurat.
