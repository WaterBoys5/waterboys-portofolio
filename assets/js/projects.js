/*
  CARA UPDATE PROJECT:
  1. Duplikat salah satu object di bawah.
  2. Ganti title, category, year, description, dan image.
  3. Simpan file ini.
  4. Upload foto ke folder assets/images jika ingin memakai foto lokal.

  Contoh image lokal:
  image: "assets/images/nama-foto.jpg"

  Untuk sementara contoh di bawah memakai gambar demo online.
*/

const SITE = {
  behance: "https://www.behance.net/waterboys1"
};

const PROJECTS = [
  {
      title: "Stereo Wall",
  category: "STAGE PHOTOGRAPHY",
  year: "2026",
  description: "Stage photography for Stereo Wall.",
  image: "assets/images/stereo-wall-01.jpg"
  },
  {
    title: "TITANS — Creative Campaign",
    category: "CAMPAIGN / VIDEO",
    year: "2026",
    description: "Dokumentasi visual proses kreatif dan campaign untuk brand spray paint.",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1600&q=85"
  },
  {
    title: "Vish — Brand Campaign",
    category: "FASHION / CAMPAIGN",
    year: "2026",
    description: "Campaign photography dengan pendekatan editorial untuk kebutuhan media sosial.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85"
  },
  {
    title: "Creative Documentation",
    category: "DOCUMENTATION / VIDEO",
    year: "2026",
    description: "Visual documentation untuk creative project, event, dan kolaborasi brand.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=85"
  },
  {
    title: "Product Stories",
    category: "PRODUCT / STILL LIFE",
    year: "2026",
    description: "Visual product yang fokus pada bentuk, tekstur, detail, dan pencahayaan.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=85"
  }
];
