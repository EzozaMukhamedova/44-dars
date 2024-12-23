// OOP/CLASS
// OOP (Object-Oriented Programming) - obyektga yonaltirilgan dasturlash. OOP dastur tuzishda murakkablikni kamaytiradi. Kodni qayta ishlatish imkonini beradi.

// class (sinf) - obyektlarni yaratish uchun shablon. class orqali bir xil xususiyatga ega bo'lgan obyektlarni yaratish mumkin. class kalit sozidan foydalanamiz. class ichida consturctor metodini elon qilib obyektning boshlangich qiymatlarini belgilashimiz mumkin.

// Classlarda meros olish- extends kalit so'zi orqali metos olinadi. Bir sinf boshqa sinf xususiyat va metodlarini meros olishi mumkin.

// Prototiplar va metodlar - classdan foydalanilganda JS avtomatik prototipga metod qoshadi.

// Private Properties (Xususiy xususiyatlar) - # belgisidan keyin yoziladi. classdan tashqariga murojat qila olmaydi. (himoyalangan)

// Static methods - classga tegishli metod. class orqali chaiqriladi, obyekt orqali emas. bu metod asosan yordamchi funksiyalarni o'z ichiga oladi.

// constructor overloading - konstructor ichida har xil paramatrlar  bn ishlash imkoniyatini taminlaydi. JS da bir class uchun bir nechta constructor berib bolmaydi.

// encapsulotion(inkapsulatsiya) - obyekt xususiyatlari va metodlarini toplash imkonini beradi. bunda malumotlar himoya qiladi, faqat kerakli joydan foydalanish imkonini beradi. #

// abstraksiya - malumotni muhim jihatlarini korsatish va otriqchasini yashirish imkonini beradi. Sodda dastur uchun yordam beradi.

// inheritance(meros olish) - classlar ortasida boglash imkonini beradi. boshqa classdan xususiyat va metodlarini olishi mumkin.

//Polymorphism(Polimorfizm) - bu bir xil interfeysga ega bolgan turli xil obyektlarni ifodalaydi. bir xil metodlarni turli xil sinflarda ishlatishda imkon beradi.

//Composition(Kompozitsiya) - obyektlerni birlashtirib yangi obyekt yaratish jarayoni. xususiyat va metodlarni bir joyga jamlab, ularni koproq funksional va moslashuvchan qiladi.

// LEXICAL SCOPE //
// Aniqlash joyi: Har bir funksiya yoki blok o'zgaruvchilarni e'lon qilgan joyida aniqlanadi.
// O'zgaruvchilarga kirish: Faqat funksiya yoki blok ichida e'lon qilingan o'zgaruvchilarga kirish mumkin, tashqi funksiyalar ularni to'g'ridan-to'g'ri ko'ra olmaydi.
// Dasturda ishlatilishi: JavaScript'da o'zgaruvchilarning ko'rish doirasini aniqlash uchun asosiy usuldir.

// Lexical Environment
// Aniqlash joyi: Funksiya chaqirilganda, yangi muhit yaratiladi.
// O'zgaruvchilarga kirish: O'zgaruvchilarni saqlaydi va tashqi muhitga bog'lanadi.
// Yaratilishi: Funksiya chaqirilganda yaratiladi, bu vaqtida uning ichidagi o'zgaruvchilar va funksiyalarni saqlaydi.
// Dasturda ishlatilishi: Har bir funksiya uchun alohida muhit hosil bo'ladi.

// Dynamic Scope
// Aniqlash joyi: Funksiya chaqirilganda mavjud o'zgaruvchilarni qidiradi.
// O'zgaruvchilarga kirish: Chaqirilgan kontekstdan o'zgaruvchilarni qidiradi, bu ularning aniqlanish joyidan mustaqil.
// Dasturda ishlatilishi: Ba'zi dasturlash tillarida, masalan Perl yoki Ruby'da ko'rinadi.

// CLOSURE //
// Bir funksiya yaratilgan leksik muhitdagi o'zgaruvchilarga doimiy kirish huquqini saqlab qoladigan funksiyadir.
// Foydalanish: Ichki funksiyalar tashqi funksiyaning o'zgaruvchilariga kirish huquqini saqlab qolish orqali yopiq o'zgaruvchilarni "yashirish" va saqlash imkonini beradi.

// Scope Chaining
// O'zgaruvchi yoki funksiya nomi izlanayotganda, JavaScript dastlab joriy leksik muhitda qidiradi, topilmasa, tashqi muhitga o'tadi va bu jarayon eng tashqi muhitga yetguncha davom etadi.

// HOSTING & TDZ (Temporal Dead Zone)

// Hosting: JavaScript o'zgaruvchilarni va funksiyalarni kodi ishga tushirilishidan oldin "ko'tarib" oladi, ya'ni ularga kodning yuqori qismlarida murojaat qilish mumkin.

// TDZ: let va const bilan e'lon qilingan o'zgaruvchilar ularning deklaratsiyasi kodda qayerda joylashgan bo'lsa, shu joydan boshlab ishlatilishi mumkun. Deklaratsiyadan oldin ularni ishlatish xato qaytaradi.
