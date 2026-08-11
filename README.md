# Weteerbreh — Portfolio Website

Website portfolio fotografi & videografi berbasis HTML + CSS + JavaScript.
Dirancang supaya bisa langsung dipakai di GitHub Pages tanpa hosting berbayar.

## Struktur folder

- `index.html` → halaman utama
- `assets/css/style.css` → desain website
- `assets/js/projects.js` → **FILE UTAMA UNTUK UPDATE PROJECT**
- `assets/js/main.js` → fungsi website
- `assets/images/` → tempat menyimpan foto project

## Cara update project (paling mudah)

Buka:
`assets/js/projects.js`

Di bagian `PROJECTS`, kamu akan melihat data seperti:

```js
{
  title: "Nama Project",
  category: "PRODUCT / COMMERCIAL",
  year: "2026",
  description: "Deskripsi singkat project.",
  image: "assets/images/foto-project.jpg"
}
```

Untuk menambahkan project:
1. Copy satu object project.
2. Ganti judul, kategori, tahun, deskripsi.
3. Masukkan foto ke `assets/images/`.
4. Ganti `image` menjadi contoh: `assets/images/project-baru.jpg`.
5. Simpan dan upload ke GitHub.

## Instagram & Email

Sudah diatur:
- Instagram: @weteerbreh
- Email: waterboys.work@gmail.com

## Behance

Cari bagian paling atas `assets/js/projects.js`:

```js
behance: "https://www.behance.net/USERNAME-BEHANCE"
```

Ganti dengan link Behance kamu yang sebenarnya.

## Upload ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload seluruh isi folder website ini.
3. Pastikan `index.html` berada di folder utama repository.
4. Masuk ke `Settings` → `Pages`.
5. Pilih source/branch yang berisi website.
6. Simpan.
7. GitHub akan memberikan link website.

GitHub Pages dapat menjalankan website statis langsung dari repository GitHub.

## Catatan

Foto demo saat ini menggunakan gambar online agar website langsung terlihat saat pertama dibuka.
Untuk portfolio final, sebaiknya ganti semuanya dengan foto milikmu sendiri di `assets/images/`.
