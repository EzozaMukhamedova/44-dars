// OSON //
// masala1
// class Mashina {
//   constructor(nomi, model, yil) {
//     this.nomi = nomi;
//     this.model = model;
//     this.yil = yil;
//   }

//   dvigatelYoq() {
//     console.log(`${this.nomi} dvigateli ishga tushdi.`);
//   }

//   mashinaMalumoti() {
//     return `Nomi: ${this.nomi}, Model: ${this.model}, Yil: ${this.yil}`;
//   }
// }

// const mashina1 = new Mashina("Toyota", "Tundra", 2024);
// mashina1.dvigatelYoq();
// console.log(mashina1.mashinaMalumoti());

// masala2
// class Kitob {
//   constructor(nomi, muallif, sahifaSoni, malumot) {
//     this.nomi = nomi;
//     this.muallif = muallif;
//     this.sahifaSoni = sahifaSoni;
//     this.malumot = malumot;
//   }

//   sahifaniOch(sahifaRaqami) {
//     if (sahifaRaqami <= 0 || sahifaRaqami > this.sahifaSoni) {
//       console.log("Sahifa raqami noto'g'ri.");
//     } else {
//       console.log(`"${this.nomi}" kitobining ${sahifaRaqami}-sahifasidasiz`);
//     }
//   }

//   kitobMalumoti() {
//     console.log(
//       `Nomi: ${this.nomi}, Muallif: ${this.muallif}, Sahifalar: ${this.sahifaSoni}`
//     );
//     console.log(`Ma'lumot: ${this.malumot}`);
//   }
// }

// let meningKitobim = new Kitob(
//   "Daftar hoshiyasidagi bitiklar",
//   "O'tkir Hoshimov",
//   250,
//   "Insonlarning ma'naviy o'sishini tasvirlovchi roman."
// );
// meningKitobim.sahifaniOch(50);
// meningKitobim.kitobMalumoti();

// masala3
// class Oquvchi {
//   #soatlar = 0;
//   constructor(nomi, yoshi) {
//     this.nomi = nomi;
//     this.yoshi = yoshi;
//   }
//   oquvVaqti(soat) {
//     this.#soatlar += soat;
//     console.log(this.nomi + " " + soat + " soat o'qidi.");
//   }

//   talabaMalumoti() {
//     return (
//       "Talaba ismi: " + this.nomi,
//       "Yoshi: " + this.yoshi,
//       "O'qigan soatlar: " + this.#soatlar
//     );
//   }
// }

// const oquvchi1 = new Oquvchi("Ezoza", 20);
// oquvchi1. oquvVaqti(7);
// console.log(oquvchi1.talabaMalumoti());

// masala4
// class Hayvon {
//   #kayfiyat = "xursand";

//   constructor(nomi, turi) {
//     this.nomi = nomi;
//     this.turi = turi;
//   }

//   ovqatBer(taom) {
//     this.#kayfiyat = "xursand";
//     console.log(this.nomi + " " + taom + "ni yedi va kayfiyati ko'tarildi");
//   }

//   oyinOynash() {
//     if (this.#kayfiyat === "xursand") {
//       console.log(this.nomi + " o'ynadi va yanada xursand bo'ldi");
//     } else {
//       console.log(this.nomi + " hafa, chunki avval ovqatlantirish kerak");
//     }
//   }

//   hayvonMalumoti() {
//     return (
//       "Hayvon nomi: " +
//       this.nomi +
//       ", Turi: " +
//       this.turi +
//       ", Kayfiyati: " +
//       this.#kayfiyat
//     );
//   }
// }

// const hayvon1 = new Hayvon("Hachiko", "Kuchukcha");
// hayvon1.ovqatBer("sosiska");
// hayvon1.oyinOynash();
// console.log(hayvon1.hayvonMalumoti());

// masala 5
// class Savatcha {
//     constructor() {
//       this.mahsulotlar = [];
//     }

//     mahsulotQosh(mahsulot) {
//       mahsulot =
//         mahsulot.charAt(0).toUpperCase() + mahsulot.slice(1).toLowerCase();
//       this.mahsulotlar.push(mahsulot);
//       console.log(mahsulot + " savatchaga qo'shildi.");
//     }

//     savatchaHajmi() {
//       return "Savatchadagi mahsulotlar soni: " + this.mahsulotlar.length;
//     }

//     savatchaMalumoti() {
//       return "Savatchadagi mahsulotlar: " + this.mahsulotlar.join(", ");
//     }
//   }

//   const savatcha1 = new Savatcha();

//   savatcha1.mahsulotQosh("apelsin");
//   savatcha1.mahsulotQosh("gilos");

//   console.log(savatcha1.savatchaHajmi());
//   console.log(savatcha1.savatchaMalumoti());

// O'RTACHA //
// masala 1
// class HisobRaqami {
//     constructor() {
//       this.balans = 0;
//     }

//     pulQosh(miQdor) {
//       this.balans += miQdor;
//       console.log(miQdor + " miqdorda pul qo'shildi.");
//     }

//     pulOlish(miQdor) {
//       if (this.balans >= miQdor) {
//         this.balans -= miQdor;
//         console.log(miQdor + " miqdorda pul yechildi.");
//       } else {
//         console.log("Balansda yetarli mablag' yo'q. Hozirgi balans: " + this.balans);
//       }
//     }

//     balansKorish() {
//       console.log("Hozirgi balans: " + this.balans);
//     }
//   }

//   let myHisob = new HisobRaqami();
//   myHisob.pulQosh(1500);
//   myHisob.pulOlish(200);
//   myHisob.balansKorish();

// masala2
// class Kitob {
//   constructor(nomi, muallifi, nashrYili) {
//     this.nomi = nomi;
//     this.muallifi = muallifi;
//     this.nashrYili = nashrYili;
//   }

//   kitobMalumot() {
//     return (
//       this.nomi +
//       " kitobi, muallif: " +
//       this.muallifi +
//       ", nashr yili: " +
//       this.nashrYili
//     );
//   }
// }

// class Kutubxona {
//   static qoshilganKitoblar = 0;
//   static olinganKitoblar = 0;
//   #kitoblar = [];

//   kitobQosh(nomi, muallifi, nashrYili) {
//     const yangiKitob = new Kitob(nomi, muallifi, nashrYili);
//     this.#kitoblar.push(yangiKitob);
//     Kutubxona.qoshilganKitoblar++;
//     console.log(nomi + " kitobi kutubxonaga qo'shildi.");
//   }

//   kitobOlish(nomi) {
//     const index = this.#kitoblar.findIndex((kitob) => kitob.nomi === nomi);
//     if (index !== -1) {
//       this.#kitoblar.splice(index, 1);
//       Kutubxona.olinganKitoblar++;
//       console.log(nomi + " kitobi kutubxonadan olindi.");
//     } else {
//       console.log(nomi + " kitobi kutubxonada topilmadi.");
//     }
//   }

//   static statistikMalumot() {
//     return (
//       "Umumiy qo'shilgan kitoblar: " +
//       Kutubxona.qoshilganKitoblar +
//       ", olingan kitoblar: " +
//       Kutubxona.olinganKitoblar +
//       "."
//     );
//   }

//   kutubxonaMalumot() {
//     return "Hozirgi kutubxonaning kitoblar soni: " + this.#kitoblar.length;
//   }
// }

// const kutubxona = new Kutubxona();
// kutubxona.kitobQosh("Ikki eshik orasi", "Otkir Hoshimov", 1985);
// kutubxona.kitobOlish("Ikki eshik orasi");
// console.log(Kutubxona.statistikMalumot());
// console.log(kutubxona.kutubxonaMalumot());

// masala3
// class Jadval {
//     constructor() {
//         this.tadbirlar = [];
//     }

//     tadbirQosh(nomi, vaqt) {
//         this.tadbirlar.push({ nomi, vaqt });
//         console.log(`Yangi tadbir qo'shildi: ${nomi}, Vaqti: ${vaqt}`);
//     }

//     jadvalKorish() {
//         console.log("Jadval:", this.tadbirlar);
//     }
// }
// const jadval = new Jadval();
// jadval.tadbirQosh("Ilmiy uchrashuv", "18:00");
// jadval.jadvalKorish();

// masala4
// class TashuvTizimi {
//   constructor() {
//     this.buyurtmalar = [];
//   }

//   buyurtmaYarat(mahsulot) {
//     const id = this.buyurtmalar.length + 1;
//     this.buyurtmalar.push({ id, mahsulot, holat: "yaratildi" });
//     console.log(`Yangi buyurtma qo'shildi: ${mahsulot} (ID: ${id})`);
//   }

//   holatTekshir(buyurtmaID) {
//     const buyurtma = this.buyurtmalar.find((b) => b.id === buyurtmaID);
//     if (buyurtma) {
//       console.log(`Buyurtma holati: ${buyurtma.holat}`);
//     } else {
//       console.log(`Buyurtma topilmadi: ID ${buyurtmaID}`);
//     }
//   }
// }
// const tashuvTizimi = new TashuvTizimi();
// tashuvTizimi.buyurtmaYarat("電子辞書");
// tashuvTizimi.holatTekshir(1);

// masala5
// class OyinQahramoni {
//     constructor(ism) {
//         this.ism = ism;
//         this.holat = "kutmoqda";
//     }

//     yonalishgaBor(tomon) {
//         this.holat = `harakatlanmoqda ${tomon} tomonga`;
//         console.log(`${this.ism} ${tomon} tomonga harakat qildi.`);
//     }

//     hujumQil() {
//         this.holat = "hujum qilmoqda";
//         console.log(`${this.ism} hujum qildi!`);
//     }
// }

// const qahramon = new OyinQahramoni("Amir Temur");
// qahramon.yonalishgaBor("shimol");
// qahramon.hujumQil();

// QIYIN //
// masala1
// class Uy {
//   constructor(nomi) {
//     this.nomi = nomi;
//   }

//   uyMalumot() {
//     console.log(`Uy nomi: ${this.nomi}`);
//   }
// }

// class AqlliUy extends Uy {
//   constructor(nomi) {
//     super(nomi);
//     this.qurilmalar = [];
//   }

//   qurilmaQosh(nomi) {
//     super.uyMalumot();
//     this.qurilmalar.push({ nomi, holat: "o'chirilgan" });
//     console.log(`Yangi qurilma qo'shildi: ${nomi}`);
//   }

//   qurilmaBoshqar(nomi, holat) {
//     const qurilma = this.qurilmalar.find((q) => q.nomi === nomi);
//     if (qurilma) {
//       qurilma.holat = holat;
//       console.log(`Qurilma: "${nomi}" ${holat}`);
//     } else {
//       console.log(`Qurilma topilmadi: ${nomi}`);
//     }
//   }
// }

// const uy = new AqlliUy("Villa");
// uy.qurilmaQosh("Kamera");
// uy.qurilmaBoshqar("Kamera", "yoqilgan");

// 2. InternetDars
// class InternetDars {
//   constructor() {
//     this.talabalar = [];
//     this.tamomlanganDarslar = [];
//   }

//   static kursHaqida() {
//     console.log("InternetDars - bu online ta'lim platformasi.");
//   }

//   talabaQosh(ism) {
//     this.talabalar.push(ism);
//     console.log(`Yangi talaba qo'shildi: ${ism}`);
//   }

//   darsTamomla(dars) {
//     this.tamomlanganDarslar.push(dars);
//     console.log(`Dars tamomlandi: ${dars}`);
//   }
// }

// InternetDars.kursHaqida();
// const dars = new InternetDars();
// dars.talabaQosh("Ezoza Mukhammedova");
// dars.darsTamomla("Najot talim(JS)");

// 3. SarmoyaPortfeli
// class SarmoyaPortfeli {
//   constructor() {
//     this.sarmoyalar = [];
//   }

//   static sarmoyaMaslahat() {
//     console.log(
//       "Sarmoyalar portfelini diversifikatsiya qilish orqali xavflarni kamaytiring."
//     );
//   }

//   sarmoyaQosh(turi, miqdor) {
//     this.sarmoyalar.push({ turi, miqdor });
//     console.log(`Yangi sarmoya qo'shildi: ${turi}, Miqdor: ${miqdor}`);
//   }

//   daromadHisobla() {
//     const jamiDaromad = this.sarmoyalar.reduce(
//       (sum, sarmoya) => sum + sarmoya.miqdor,
//       0
//     );
//     console.log(`Jami daromad: ${jamiDaromad}`);
//     return jamiDaromad;
//   }
// }

// SarmoyaPortfeli.sarmoyaMaslahat();

// const portfel = new SarmoyaPortfeli();
// portfel.sarmoyaQosh("Investitsiya", 5000);
// portfel.sarmoyaQosh("Tijorat Mulki", 500);
// portfel.daromadHisobla();

// 4. XabarTizimi
// class XabarTizimi {
//   constructor() {
//     this.xabarlar = [];
//   }

//   static umumiyXabarlar = 0;

//   static umumiyXabarlarSoniniKor() {
//     console.log(`Jami yuborilgan xabarlar soni: ${XabarTizimi.umumiyXabarlar}`);
//   }

//   xabarYubor(foydalanuvchi, xabar) {
//     this.xabarlar.push({ foydalanuvchi, xabar });
//     XabarTizimi.umumiyXabarlar++;
//     console.log(`Xabar yuborildi: ${foydalanuvchi} -> ${xabar}`);
//   }

//   kelganXabarlarniKorish() {
//     console.log("Kelgan xabarlar:");
//     this.xabarlar.forEach((x, index) => {
//       console.log(`${index + 1}. ${x.foydalanuvchi}: ${x.xabar}`);
//     });
//   }
// }

// const xabarTizimi = new XabarTizimi();
// xabarTizimi.xabarYubor("Ezoza", "こんにちは！お元気ですか。");
// xabarTizimi.xabarYubor("Siadaxror", "元気だよー。エゾザちゃんは？");
// // xabarTizimi.kelganXabarlarniKorish();
// XabarTizimi.umumiyXabarlarSoniniKor();

// 5. IshTizimi
// class IshTizimi {
//   static ishlar = [];
//   static arizalar = [];
//   static umumiyIshlarSoniniKor() {
//     console.log(`Jami ish elonlari soni: ${this.ishlar.length}`);
//   }

//   static ishElonQosh(nomi, tafsilotlar) {
//     const id = this.ishlar.length + 1;
//     this.ishlar.push({ id, nomi, tafsilotlar });
//     console.log(`Yangi ish qo'shildi: ${nomi} (ID: ${id})`);
//   }

//   static arizaYubor(ishId, nomzod) {
//     const ish = this.ishlar.find((i) => i.id === ishId);
//     if (ish) {
//       this.arizalar.push({ ishId, nomzod });
//       console.log(
//         `Ariza yuborildi: Ish "${ish.nomi}" uchun nomzod - ${nomzod}`
//       );
//     } else {
//       console.log(`Ish topilmadi: ID ${ishId}`);
//     }
//   }
// }

// IshTizimi.ishElonQosh(
//   "Frontend Developer",
//   "React va JavaScript bo'yicha tajriba talab qilinadi."
// );
// IshTizimi.ishElonQosh(
//   "Backend Developer",
//   "Node.js va MongoDB bo'yicha mahorat talab qilinadi."
// );
// IshTizimi.arizaYubor(1, "Ezoza Mukhammedova");
// IshTizimi.arizaYubor(2, "Saidaxror Botirov");

// IshTizimi.umumiyIshlarSoniniKor();
