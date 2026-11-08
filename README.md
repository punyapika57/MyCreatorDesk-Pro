# MyCreatorDesk Pro v2.0 — The Unified Intelligent Command Center

Aplikasi web SaaS modern berbasis **Next.js 15 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS** sesuai spesifikasi **Product Requirement Document (PRD) v2.0**.

## Cara Menjalankan Aplikasi

```bash
npm.cmd run dev
```

Buka `http://localhost:3000` di browser Anda.

## Ringkasan Implementasi PRD v2.0

1. **Sistem Desain & Arsitektur UI/UX**:
   - **Sidebar (`#111317`)** dengan 10 menu utama, indikator RBAC, serta sakelar instan **Solo Mode** / **Studio Team Mode**.
   - **Kanvas Utama (`#F8FAFC`)**, kartu permukaan bersih (`#FFFFFF`, radius `22px`), aksen **Electric Lime (`#C6F432`)**, dan **Vibrant Aqua (`#00B4D8`)**.
   - **Sub-Header Dinamis** dengan Pill Toggle Selector (`[ Pelacak Operasional | Analisis Performa ]`), 3 Quick KPI Badges (`Skor Produktivitas`, `Waktu Fokus`, `Proyeksi Bulanan`), pengubah kurs (`IDR`, `USD`, `EUR`, `SGD`), dan simulator peran RBAC.
   - **Quick Shortcut Action FAB (`+ Tambah Cepat`)** untuk mencatat ide baru, membuat invoice instan, mencatat transaksi kas, dan menambah jadwal konten.

2. **10 Menu Utama Fungsional**:
   - **1. Beranda**: Dynamic KPI Widgets (MoM/WoW), Card Profil Kreator, Card Analisis Performa (Rounded Bar Chart dengan highlight Lime Green), Segmented Radial Gauge (`Indeks Konsistensi Kreator 0 - 1000 pt`), Card Laporan Pintar (`#00B4D8` Cyan Highlight + Smart Attention Center), dan Card Agenda & Reminder Produksi.
   - **2. Kanal**: Omnichannel Hub terhubung ke YouTube Data API v3, TikTok Creator API, Instagram Graph API, dan Facebook Graph API beserta antrean sinkronisasi status publikasi.
   - **3. Proyek**: Sakelar instan **Kanban Board**, **List View**, dan **Gantt Chart Timeline** untuk 8 tahapan produksi (`Ideasi ➔ Naskah ➔ Pra-Produksi ➔ Shooting ➔ Editing ➔ Review Klien ➔ Terbit ➔ Penagihan`), Log Revisi Berbasis Timestamp, dan Estimator Beban Kerja Tim.
   - **4. Planner**: Kalender Multi-View (`Bulanan`, `Mingguan`, `Harian`), Rekomendasi Waktu Tayang Optimal berbasis AI, Sinkronisasi 2-arah Google Calendar, dan **Time-Tracker Focus Session (Pomodoro)**.
   - **5. Konten**: **A/V Script Editor 2-Kolom** (`Kolom Visual / Kamera` & `Kolom Audio / Voiceover`), **AI Creative Assistant** (5 variasi judul & hook 3 detik pertama + rekomendasi tagar SEO), **Digital Asset Management (DAM)**, dan **Tracking Prasyarat Sponsor & UTM**.
   - **6. Keuangan**: Multi-Mata Uang (`IDR`, `USD`, `EUR`, `SGD`), Segmentasi 5 Pilar Pendapatan, Laporan Laba Rugi (P&L) real-time, dan **Kalkulator Pajak Kreator Indonesia** (`PPh Final UMKM 0.5%` vs `NPPN PPh 21 Norma 50%`).
   - **7. Invoice & Piutang**: Generator Invoice kustom, **QRIS Dinamis & Detail SWIFT Bank**, Ekspor PDF 1-Klik, Pengiriman Webhook WA/Email, **AR Tracker** (`Draft`, `Sent`, `Overdue`, `Paid`) dengan Auto-Reminder, **SHA-256 Anti-Tampering Hash**, dan **Kalkulator Rate Card & UGC Pricing**.
   - **8. Klien**: Pipeline Negosiasi Sponsor 6-Tahap, Direktori Brand & Agensi beserta Lifetime Value (LTV), dan **Live Public Media Kit** dengan sanitasi otomatis data sensitif.
   - **9. Notifikasi**: Pusat Alert Terpadu (`Kritis`, `Tugas Hari Ini`, `Informasi`) dan integrasi pengujian **Webhook Bot WhatsApp & Telegram** berverifikasi HMAC-SHA256.
   - **10. Pengaturan**: Matriks **Role-Based Access Control (RBAC)** (`Owner`, `Content Editor`, `Financial Manager`, `Client Viewer`), Google OAuth 2.0 PKCE + MFA/2FA TOTP, **Remote Session Revocation**, **KMS API Vault**, **Auto-Backup Google Drive/Sheets + Ekspor JSON/CSV**, dan **Immutable Security Audit Trail**.

