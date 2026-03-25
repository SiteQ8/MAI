import { useState, useEffect, useCallback } from "react";

// ═══ BILINGUAL TEXT ═══
const T = {
  ar: {
    appName: 'ماي',
    tagline: 'توصيل مياه الكويت',
    home: 'الرئيسية', companies: 'الشركات', orders: 'طلباتي', profile: 'حسابي',
    search: 'ابحث عن شركة أو منتج...', featured: 'عروض مميزة', topCompanies: 'أفضل الشركات',
    allCompanies: 'جميع الشركات', categories: 'التصنيفات', viewAll: 'عرض الكل',
    addToCart: 'أضف للسلة', kd: 'د.ك', items: 'عناصر', checkout: 'إتمام الطلب',
    total: 'المجموع', delivery: 'التوصيل', free: 'مجاني', subtotal: 'المجموع الفرعي',
    orderNow: 'اطلب الآن', cart: 'السلة', emptyCart: 'سلتك فارغة',
    points: 'نقاط', level: 'المستوى', orders_count: 'طلبات', saved: 'وفّرت',
    goldMember: 'عضو ذهبي', silverMember: 'عضو فضي', bronzeMember: 'عضو برونزي',
    editProfile: 'تعديل الحساب', myAddresses: 'عناويني', notifications: 'الإشعارات',
    helpCenter: 'مركز المساعدة', language: 'English', logout: 'تسجيل الخروج',
    paymentMethod: 'طريقة الدفع', creditCard: 'بطاقة ائتمان', knet: 'كي نت',
    cashOnDelivery: 'الدفع عند الاستلام', applePay: 'Apple Pay',
    deliveryAddress: 'عنوان التوصيل', placeOrder: 'تأكيد الطلب',
    orderPlaced: 'تم الطلب بنجاح!', orderTracking: 'سيتم التوصيل خلال ٣٠-٤٥ دقيقة',
    back: 'رجوع', products: 'المنتجات', aboutCompany: 'عن الشركة',
    rating: 'التقييم', deliveryTime: 'وقت التوصيل', minOrder: 'الحد الأدنى',
    offer: 'عرض', off: 'خصم', new: 'جديد', bestSeller: 'الأكثر مبيعاً',
    bottled: 'مياه معبأة', gallon: 'قوارير', filter: 'فلاتر', dispenser: 'برادات',
    subscription: 'اشتراكات', accessories: 'إكسسوارات',
    earnPoints: 'اكسب نقاط مع كل طلب!', redeemPoints: 'استبدل نقاطك بخصومات',
    noOrders: 'لا توجد طلبات بعد', startOrdering: 'ابدأ الطلب الآن',
    activeOrders: 'طلبات نشطة', pastOrders: 'طلبات سابقة',
    confirmed: 'تم التأكيد', preparing: 'جاري التحضير', onTheWay: 'في الطريق', delivered: 'تم التوصيل',
    qty: 'الكمية', remove: 'حذف', promo: 'كود خصم', apply: 'تطبيق',
    welcomeBack: 'أهلاً بك', goodMorning: 'صباح الخير', goodEvening: 'مساء الخير',
    nearYou: 'بالقرب منك', popular: 'الأكثر طلباً', newArrivals: 'وصل حديثاً',
    discoverTitle: 'اكتشف أفضل مياه الكويت', paySecurely: 'ادفع بأمان',
    cardNumber: 'رقم البطاقة', expiry: 'الانتهاء', cvv: 'CVV',
    orderSummary: 'ملخص الطلب', promoApplied: 'تم تطبيق الخصم',
  },
  en: {
    appName: 'MAI',
    tagline: 'Kuwait Water Delivery',
    home: 'Home', companies: 'Companies', orders: 'Orders', profile: 'Profile',
    search: 'Search companies or products...', featured: 'Featured Offers', topCompanies: 'Top Companies',
    allCompanies: 'All Companies', categories: 'Categories', viewAll: 'View All',
    addToCart: 'Add to Cart', kd: 'KD', items: 'items', checkout: 'Checkout',
    total: 'Total', delivery: 'Delivery', free: 'Free', subtotal: 'Subtotal',
    orderNow: 'Order Now', cart: 'Cart', emptyCart: 'Your cart is empty',
    points: 'Points', level: 'Level', orders_count: 'Orders', saved: 'Saved',
    goldMember: 'Gold Member', silverMember: 'Silver Member', bronzeMember: 'Bronze Member',
    editProfile: 'Edit Profile', myAddresses: 'My Addresses', notifications: 'Notifications',
    helpCenter: 'Help Center', language: 'العربية', logout: 'Log Out',
    paymentMethod: 'Payment Method', creditCard: 'Credit Card', knet: 'KNET',
    cashOnDelivery: 'Cash on Delivery', applePay: 'Apple Pay',
    deliveryAddress: 'Delivery Address', placeOrder: 'Place Order',
    orderPlaced: 'Order Placed!', orderTracking: 'Delivery in 30-45 minutes',
    back: 'Back', products: 'Products', aboutCompany: 'About',
    rating: 'Rating', deliveryTime: 'Delivery', minOrder: 'Min Order',
    offer: 'Offer', off: 'OFF', new: 'New', bestSeller: 'Best Seller',
    bottled: 'Bottled Water', gallon: 'Gallons', filter: 'Filters', dispenser: 'Dispensers',
    subscription: 'Subscriptions', accessories: 'Accessories',
    earnPoints: 'Earn points with every order!', redeemPoints: 'Redeem points for discounts',
    noOrders: 'No orders yet', startOrdering: 'Start ordering now',
    activeOrders: 'Active Orders', pastOrders: 'Past Orders',
    confirmed: 'Confirmed', preparing: 'Preparing', onTheWay: 'On the way', delivered: 'Delivered',
    qty: 'Qty', remove: 'Remove', promo: 'Promo Code', apply: 'Apply',
    welcomeBack: 'Welcome back', goodMorning: 'Good morning', goodEvening: 'Good evening',
    nearYou: 'Near You', popular: 'Most Popular', newArrivals: 'New Arrivals',
    discoverTitle: 'Discover Kuwait\'s Best Water', paySecurely: 'Pay Securely',
    cardNumber: 'Card Number', expiry: 'Expiry', cvv: 'CVV',
    orderSummary: 'Order Summary', promoApplied: 'Promo applied',
  }
};

// ═══ DEMO DATA ═══
const COMPANIES = [
  { id: 1, name: { ar: 'مياه أبراج', en: 'Abraaj Water' }, logo: '💧', rating: 4.8, reviews: 3200, delivery: '25 min', minOrder: 2, color: '#0ea5e9', featured: true,
    desc: { ar: 'شركة أبراج للمياه — تأسست عام ٢٠٠٢، حاصلة على شهادات ISO 22000 و HACCP و NSF الأمريكية. مياه نقية معالجة بأحدث تقنيات التعبئة', en: 'Abraaj Water — Est. 2002. ISO 22000, HACCP & NSF certified. Pure water with latest bottling technology' },
    hours: { ar: '٢٤ ساعة', en: '24 Hours' }, phone: '1888030', whatsapp: '+96599001111',
    address: { ar: 'الشويخ الصناعية', en: 'Shuwaikh Industrial' },
    certs: ['ISO 22000', 'HACCP', 'NSF', 'GCC Standards'],
    areas: { ar: 'جميع مناطق الكويت', en: 'All Kuwait areas' },
    products: [
      { id: 101, name: { ar: 'أبراج ٥٠٠ مل (كرتون ٢٤)', en: 'Abraaj 500ml (×24)' }, price: 1.250, oldPrice: 1.500, img: '💧', cat: 'bottled', badge: 'offer', desc: { ar: 'حجم مثالي للتنقل والسفر', en: 'Perfect travel size' } },
      { id: 102, name: { ar: 'أبراج ١.٥ لتر (كرتون ١٢)', en: 'Abraaj 1.5L (×12)' }, price: 1.750, img: '💧', cat: 'bottled', badge: 'bestSeller', desc: { ar: 'الاختيار الأول للعائلات', en: 'Families\' #1 choice' } },
      { id: 103, name: { ar: 'أبراج ٣٣٠ مل (كرتون ٤٠)', en: 'Abraaj 330ml (×40)' }, price: 1.650, img: '💧', cat: 'bottled', desc: { ar: 'مثالية للمكاتب والديوانيات', en: 'Perfect for offices' } },
      { id: 104, name: { ar: 'أبراج ٢٠٠ مل كوب (كرتون ٣٦)', en: 'Abraaj 200ml Cup (×36)' }, price: 0.950, img: '💧', cat: 'bottled', desc: { ar: 'أكواب للمناسبات والاجتماعات', en: 'Cups for events' } },
      { id: 105, name: { ar: 'قارورة ١٨.٩ لتر (٥ جالون)', en: '18.9L Gallon (5 Gal)' }, price: 0.750, img: '🪣', cat: 'gallon', badge: 'bestSeller', desc: { ar: 'قارورة كبيرة للبرادة', en: 'Large gallon for dispenser' } },
      { id: 106, name: { ar: 'باقة ٥ قوارير ١٨.٩ لتر', en: '5× Gallon Bundle' }, price: 3.250, oldPrice: 3.750, img: '🪣', cat: 'gallon', badge: 'offer', desc: { ar: 'وفّر ٠.٥٠٠ د.ك', en: 'Save 0.500 KD' } },
      { id: 107, name: { ar: 'برادة ساخن/بارد', en: 'Hot/Cold Dispenser' }, price: 42.000, img: '🚰', cat: 'dispenser', desc: { ar: 'برادة أرضية مع خاصية التبريد والتسخين', en: 'Floor dispenser with cooling & heating' } },
      { id: 108, name: { ar: 'اشتراك شهري — ١٠ قوارير', en: 'Monthly — 10 Gallons' }, price: 6.500, img: '📅', cat: 'subscription', badge: 'bestSeller', desc: { ar: 'توصيل أسبوعي تلقائي', en: 'Auto weekly delivery' } },
      { id: 109, name: { ar: 'أبراج سبورت ٧٥٠ مل (كرتون ٢٤)', en: 'Abraaj Sport 750ml (×24)' }, price: 2.100, img: '💧', cat: 'bottled', badge: 'new', desc: { ar: 'غطاء رياضي — للنوادي واللياقة', en: 'Sport cap — for gyms & fitness' } },
    ]},
  { id: 2, name: { ar: 'الروضتين', en: 'Al Rawdatain' }, logo: '🏔️', rating: 4.9, reviews: 4100, delivery: '20 min', minOrder: 1.5, color: '#0284c7', featured: true,
    desc: { ar: 'الشركة الرائدة في تعبئة المياه في الكويت. مياه الروضتين الطبيعية من أنقى مصادر المياه الجوفية الكويتية', en: 'Kuwait\'s leading water bottling company. Natural underground water from Kuwait\'s purest sources' },
    hours: { ar: '٧ ص - ١٠ م', en: '7AM - 10PM' }, phone: '1828282',
    address: { ar: 'الصليبية', en: 'Sulaibiya' },
    certs: ['ISO 9001', 'ISO 22000', 'KISR Approved'],
    areas: { ar: 'جميع المحافظات', en: 'All governorates' },
    products: [
      { id: 201, name: { ar: 'الروضتين ٥٠٠ مل (٢٤ عبوة)', en: 'Rawdatain 500ml (×24)' }, price: 1.350, img: '💧', cat: 'bottled', badge: 'bestSeller', desc: { ar: 'مياه طبيعية من ينابيع الكويت', en: 'Natural Kuwait spring water' } },
      { id: 202, name: { ar: 'الروضتين ١.٥ لتر (١٢ عبوة)', en: 'Rawdatain 1.5L (×12)' }, price: 1.800, img: '💧', cat: 'bottled', desc: { ar: 'للاستخدام اليومي في المنزل', en: 'For daily home use' } },
      { id: 203, name: { ar: 'الروضتين ٥ لتر (٤ عبوات)', en: 'Rawdatain 5L (×4)' }, price: 1.600, img: '💧', cat: 'bottled', desc: { ar: 'عبوة عائلية كبيرة', en: 'Large family bottle' } },
      { id: 204, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.800, img: '🪣', cat: 'gallon', desc: { ar: 'مياه طبيعية للبرادة', en: 'Natural water for dispenser' } },
      { id: 205, name: { ar: 'باقة ١٠ قوارير', en: '10 Gallon Bundle' }, price: 7.000, oldPrice: 8.000, img: '🪣', cat: 'gallon', badge: 'offer', desc: { ar: 'وفّر ١ د.ك مع الباقة', en: 'Save 1 KD with bundle' } },
      { id: 206, name: { ar: 'برادة ذكية تبريد فوري', en: 'Smart Instant-Cool Dispenser' }, price: 55.000, img: '🚰', cat: 'dispenser', badge: 'new', desc: { ar: 'تبريد فوري خلال ٣ ثوان', en: 'Instant cooling in 3 seconds' } },
      { id: 207, name: { ar: 'اشتراك عائلي — ١٥ قارورة/شهر', en: 'Family Plan — 15 Gal/month' }, price: 10.500, img: '📅', cat: 'subscription', desc: { ar: 'مثالي للعائلات الكبيرة', en: 'Perfect for large families' } },
      { id: 208, name: { ar: 'الروضتين فوّار ٣٣٠ مل (٢٤)', en: 'Rawdatain Sparkling 330ml (×24)' }, price: 2.400, img: '✨', cat: 'bottled', badge: 'new', desc: { ar: 'مياه غازية طبيعية', en: 'Natural sparkling water' } },
    ]},
  { id: 3, name: { ar: 'أكوا كول', en: 'Aqua Cool' }, logo: '🌊', rating: 4.7, reviews: 2500, delivery: '30 min', minOrder: 2, color: '#06b6d4', featured: true,
    desc: { ar: 'أكوا كول — توصيل مجاني لجميع مناطق الكويت. مياه معالجة بتقنية التناضح العكسي مع إضافة المعادن الطبيعية', en: 'Aqua Cool — Free delivery all Kuwait. RO-treated water with natural minerals added' },
    hours: { ar: '٦ ص - ١٢ م', en: '6AM - 12AM' }, phone: '1888030',
    address: { ar: 'الري الصناعية', en: 'Rai Industrial' },
    certs: ['ISO 22000', 'HACCP'],
    areas: { ar: 'توصيل مجاني لجميع المناطق', en: 'Free delivery all areas' },
    products: [
      { id: 301, name: { ar: 'أكوا كول ٥٠٠ مل (٢٤)', en: 'Aqua Cool 500ml (×24)' }, price: 1.100, img: '💧', cat: 'bottled', desc: { ar: 'سعر اقتصادي مع جودة عالية', en: 'Economic price, high quality' } },
      { id: 302, name: { ar: 'أكوا كول ١.٥ لتر (١٢)', en: 'Aqua Cool 1.5L (×12)' }, price: 1.500, img: '💧', cat: 'bottled', badge: 'bestSeller' },
      { id: 303, name: { ar: 'أكوا كول ٣٣٠ مل (٤٠)', en: 'Aqua Cool 330ml (×40)' }, price: 1.400, img: '💧', cat: 'bottled' },
      { id: 304, name: { ar: 'أكوا كول ٢٠٠ مل (٤٨)', en: 'Aqua Cool 200ml (×48)' }, price: 1.200, img: '💧', cat: 'bottled' },
      { id: 305, name: { ar: 'قارورة ٥ جالون', en: '5 Gallon Returnable' }, price: 0.600, img: '🪣', cat: 'gallon', badge: 'bestSeller', desc: { ar: 'أرخص قارورة في الكويت', en: 'Cheapest gallon in Kuwait' } },
      { id: 306, name: { ar: 'باقة ٨ قوارير', en: '8 Gallon Bundle' }, price: 4.200, oldPrice: 4.800, img: '🪣', cat: 'gallon', badge: 'offer' },
      { id: 307, name: { ar: 'برادة طاولة صغيرة', en: 'Countertop Mini Dispenser' }, price: 28.000, img: '🚰', cat: 'dispenser', desc: { ar: 'مثالية للمطبخ الصغير', en: 'Perfect for small kitchens' } },
    ]},
  { id: 4, name: { ar: 'أكوا جلف', en: 'Aqua Gulf' }, logo: '🌅', rating: 4.6, reviews: 1800, delivery: '35 min', minOrder: 2, color: '#7c3aed', featured: true,
    desc: { ar: 'مياه معدنية وقلوية من أكوا جلف — تأسست في الإمارات وتخدم الكويت بأعلى المعايير', en: 'Mineral & alkaline water from Aqua Gulf — UAE-based, serving Kuwait with highest standards' },
    hours: { ar: '٨ ص - ١٠ م', en: '8AM - 10PM' }, phone: '50907710',
    address: { ar: 'الشويخ', en: 'Shuwaikh' },
    certs: ['ISO 22000', 'Emirates Quality Mark'],
    products: [
      { id: 401, name: { ar: 'أكوا جلف معدنية ٥٠٠ مل (٢٤)', en: 'AG Mineral 500ml (×24)' }, price: 1.300, img: '💧', cat: 'bottled' },
      { id: 402, name: { ar: 'أكوا جلف قلوية pH 9.5 (٢٤)', en: 'AG Alkaline pH 9.5 (×24)' }, price: 2.400, img: '💎', cat: 'bottled', badge: 'new', desc: { ar: 'مياه قلوية لصحة أفضل', en: 'Alkaline water for better health' } },
      { id: 403, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.700, img: '🪣', cat: 'gallon' },
      { id: 404, name: { ar: 'فلتر RO ٥ مراحل', en: '5-Stage RO Filter' }, price: 35.000, img: '🔧', cat: 'filter', desc: { ar: 'تركيب مجاني + صيانة سنوية', en: 'Free install + yearly maintenance' } },
      { id: 405, name: { ar: 'اشتراك شهري ٨ قوارير', en: 'Monthly — 8 Gallons' }, price: 5.000, img: '📅', cat: 'subscription' },
    ]},
  { id: 5, name: { ar: 'مياه العين', en: 'Al Ain Water' }, logo: '⛰️', rating: 4.7, reviews: 2200, delivery: '25 min', minOrder: 1, color: '#059669',
    desc: { ar: 'مياه العين — من الإمارات إلى الكويت. مياه طبيعية غنية بالمعادن المتوازنة لترطيب مثالي للجسم', en: 'Al Ain Water — from UAE to Kuwait. Natural water rich in balanced minerals for optimal hydration' },
    hours: { ar: '٢٤ ساعة', en: '24 Hours' }, phone: '60984798',
    certs: ['ISO 22000', 'ESMA'],
    products: [
      { id: 501, name: { ar: 'العين ٥٠٠ مل (كرتون ٢٤)', en: 'Al Ain 500ml (×24)' }, price: 1.200, img: '💧', cat: 'bottled' },
      { id: 502, name: { ar: 'العين ١.٥ لتر (كرتون ١٢)', en: 'Al Ain 1.5L (×12)' }, price: 1.650, img: '💧', cat: 'bottled', badge: 'bestSeller' },
      { id: 503, name: { ar: 'العين ٥ لتر (كرتون ٤)', en: 'Al Ain 5L (×4)' }, price: 1.500, img: '💧', cat: 'bottled' },
      { id: 504, name: { ar: 'العين زيرو صوديوم (٢٤)', en: 'Al Ain Zero Sodium (×24)' }, price: 1.450, img: '💧', cat: 'bottled', badge: 'new', desc: { ar: 'صفر صوديوم لمرضى الضغط', en: 'Zero sodium for BP patients' } },
      { id: 505, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.850, img: '🪣', cat: 'gallon' },
    ]},
  { id: 6, name: { ar: 'كي دي كاو', en: 'KD Cow' }, logo: '🥛', rating: 4.5, reviews: 3800, delivery: '30 min', minOrder: 3, color: '#dc2626',
    desc: { ar: 'كي دي كاو — تأسست ١٩٦٠. من أعرق شركات الألبان والمياه في الكويت. مياه نقية مع توصيل يومي', en: 'KD Cow — Est. 1960. Kuwait\'s oldest dairy & water company. Pure water with daily delivery' },
    hours: { ar: '٦ ص - ١١ م', en: '6AM - 11PM' }, phone: '1800180',
    address: { ar: 'الشويخ', en: 'Shuwaikh' },
    certs: ['HACCP', 'Kuwait Quality'],
    products: [
      { id: 601, name: { ar: 'كي دي مياه ٥٠٠ مل (٢٤)', en: 'KD Water 500ml (×24)' }, price: 1.050, img: '💧', cat: 'bottled', desc: { ar: 'أرخص مياه معبأة في الكويت', en: 'Most affordable bottled water' } },
      { id: 602, name: { ar: 'كي دي مياه ١.٥ لتر (١٢)', en: 'KD Water 1.5L (×12)' }, price: 1.400, img: '💧', cat: 'bottled' },
      { id: 603, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.550, img: '🪣', cat: 'gallon', badge: 'bestSeller', desc: { ar: 'أرخص قارورة — منذ ١٩٦٠', en: 'Cheapest gallon — since 1960' } },
      { id: 604, name: { ar: 'اشتراك يومي — قارورة/يوم', en: 'Daily Plan — 1 Gal/day' }, price: 15.000, img: '📅', cat: 'subscription', badge: 'new' },
    ]},
  { id: 7, name: { ar: 'مياه ماسافي', en: 'Masafi Water' }, logo: '🗻', rating: 4.8, reviews: 5200, delivery: '25 min', minOrder: 2, color: '#1d4ed8',
    desc: { ar: 'ماسافي — مياه معدنية طبيعية من ينابيع جبال الحجر في الإمارات. العلامة التجارية الأكثر ثقة في الخليج', en: 'Masafi — Natural mineral water from UAE\'s Hajar Mountains. The Gulf\'s most trusted brand' },
    hours: { ar: '٢٤ ساعة', en: '24 Hours' }, phone: '22450045',
    certs: ['ISO 22000', 'NSF', 'FDA Compliant'],
    products: [
      { id: 701, name: { ar: 'ماسافي ٥٠٠ مل (كرتون ٢٤)', en: 'Masafi 500ml (×24)' }, price: 1.400, img: '💧', cat: 'bottled', badge: 'bestSeller' },
      { id: 702, name: { ar: 'ماسافي ١.٥ لتر (كرتون ١٢)', en: 'Masafi 1.5L (×12)' }, price: 1.850, img: '💧', cat: 'bottled' },
      { id: 703, name: { ar: 'ماسافي ٣٣٠ مل (كرتون ٤٠)', en: 'Masafi 330ml (×40)' }, price: 1.750, img: '💧', cat: 'bottled' },
      { id: 704, name: { ar: 'ماسافي توتش (نكهات) ٥٠٠ مل', en: 'Masafi Touch (Flavored) 500ml' }, price: 0.250, img: '🍋', cat: 'bottled', badge: 'new', desc: { ar: 'ليمون، توت، فراولة', en: 'Lemon, Berry, Strawberry' } },
      { id: 705, name: { ar: 'قارورة ١٨.٩ لتر ماسافي', en: 'Masafi 18.9L Gallon' }, price: 0.900, img: '🪣', cat: 'gallon' },
    ]},
  { id: 8, name: { ar: 'سوفت ووتر', en: 'Soft Water' }, logo: '🔧', rating: 4.6, reviews: 980, delivery: '2-3 days', minOrder: 15, color: '#8b5cf6',
    desc: { ar: 'سوفت ووتر — الوكيل الحصري لشركة إيكوسوفت البلجيكية في الكويت. متخصصون في أنظمة تنقية وفلترة المياه المنزلية والتجارية', en: 'Soft Water — Exclusive Ecosoft (Belgium) agent in Kuwait. Home & commercial water purification systems' },
    hours: { ar: '٩ ص - ٦ م', en: '9AM - 6PM' }, phone: '22273322',
    address: { ar: 'السالمية', en: 'Salmiya' },
    certs: ['Ecosoft Belgium', 'BWT Group', 'ISO 9001'],
    products: [
      { id: 801, name: { ar: 'فلتر RO ٧ مراحل إيكوسوفت', en: 'Ecosoft 7-Stage RO Filter' }, price: 65.000, img: '🔧', cat: 'filter', badge: 'bestSeller', desc: { ar: 'أفضل فلتر في الكويت — تركيب مجاني', en: 'Kuwait\'s best filter — free install' } },
      { id: 802, name: { ar: 'فلتر ٥ مراحل اقتصادي', en: '5-Stage Economy Filter' }, price: 38.000, img: '🔧', cat: 'filter', desc: { ar: 'مثالي للشقق الصغيرة', en: 'Perfect for small apartments' } },
      { id: 803, name: { ar: 'فلتر ٣ مراحل للمطبخ', en: '3-Stage Kitchen Filter' }, price: 22.000, oldPrice: 28.000, img: '🔧', cat: 'filter', badge: 'offer' },
      { id: 804, name: { ar: 'جهاز تحلية مركزي للفيلا', en: 'Central Desalination (Villa)' }, price: 350.000, img: '🏠', cat: 'filter', badge: 'new', desc: { ar: 'نظام تحلية كامل للفيلا', en: 'Complete villa desalination' } },
      { id: 805, name: { ar: 'صيانة سنوية + فلاتر بديلة', en: 'Annual Maintenance + Filters' }, price: 25.000, img: '📅', cat: 'subscription', desc: { ar: 'تغيير فلاتر كل ٦ أشهر', en: 'Filter replacement every 6 months' } },
      { id: 806, name: { ar: 'حامل قوارير ستانلس ستيل', en: 'Stainless Steel Gallon Stand' }, price: 12.000, img: '🗄️', cat: 'accessories' },
    ]},
  { id: 9, name: { ar: 'وتر سوق', en: 'Watersouq' }, logo: '🛒', rating: 4.5, reviews: 1500, delivery: '4 hours', minOrder: 5, color: '#ea580c',
    desc: { ar: 'وتر سوق — أكبر متجر إلكتروني لتوصيل المياه في الكويت. جميع الماركات العالمية في مكان واحد', en: 'Watersouq — Kuwait\'s largest online water store. All global brands in one place' },
    hours: { ar: '٢٤ ساعة أونلاين', en: '24/7 Online' }, phone: '22250025',
    certs: ['E-commerce License'],
    products: [
      { id: 901, name: { ar: 'فيجي ٥٠٠ مل (كرتون ٢٤)', en: 'Fiji 500ml (×24)' }, price: 4.500, img: '🏝️', cat: 'bottled', badge: 'new', desc: { ar: 'مياه أرتيزية طبيعية من فيجي', en: 'Natural artesian water from Fiji' } },
      { id: 902, name: { ar: 'إيفيان ٥٠٠ مل (كرتون ٢٤)', en: 'Evian 500ml (×24)' }, price: 3.800, img: '🏔️', cat: 'bottled', desc: { ar: 'مياه جبال الألب الفرنسية', en: 'French Alps mineral water' } },
      { id: 903, name: { ar: 'فوس ٨٠٠ مل (كرتون ١٢)', en: 'Voss 800ml (×12)' }, price: 5.500, img: '🇳🇴', cat: 'bottled', desc: { ar: 'مياه نرويجية فاخرة', en: 'Premium Norwegian water' } },
      { id: 904, name: { ar: 'بادويه فوّار ٣٣٠ مل (٢٤)', en: 'Badoit Sparkling 330ml (×24)' }, price: 4.200, img: '✨', cat: 'bottled' },
      { id: 905, name: { ar: 'سان بيليغرينو ٥٠٠ مل (٢٤)', en: 'San Pellegrino 500ml (×24)' }, price: 4.000, img: '🇮🇹', cat: 'bottled', desc: { ar: 'مياه إيطالية فوّارة', en: 'Italian sparkling water' } },
    ]},
  { id: 10, name: { ar: 'مياه ABC', en: 'ABC Water' }, logo: '🇰🇼', rating: 4.4, reviews: 750, delivery: '35 min', minOrder: 2, color: '#16a34a',
    desc: { ar: 'مياه ABC — منتج كويتي ١٠٠٪. أسعار اقتصادية مع جودة عالية ومعايير صارمة', en: 'ABC Water — 100% Kuwaiti product. Economic prices with high quality & strict standards' },
    hours: { ar: '٧ ص - ٩ م', en: '7AM - 9PM' }, phone: '24742666',
    certs: ['Kuwait Quality Mark', 'GCC Standards'],
    products: [
      { id: 1001, name: { ar: 'ABC ٥٠٠ مل (كرتون ٢٤)', en: 'ABC 500ml (×24)' }, price: 0.950, img: '💧', cat: 'bottled', badge: 'bestSeller', desc: { ar: 'أرخص مياه في الكويت', en: 'Kuwait\'s cheapest water' } },
      { id: 1002, name: { ar: 'ABC ١.٥ لتر (كرتون ١٢)', en: 'ABC 1.5L (×12)' }, price: 1.200, img: '💧', cat: 'bottled' },
      { id: 1003, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.500, img: '🪣', cat: 'gallon', badge: 'offer', desc: { ar: 'أرخص قارورة في الكويت!', en: 'Kuwait\'s cheapest gallon!' } },
      { id: 1004, name: { ar: 'باقة ١٠ قوارير', en: '10 Gallon Pack' }, price: 4.500, oldPrice: 5.000, img: '🪣', cat: 'gallon', badge: 'offer' },
    ]},
];

const CATEGORIES = [
  { id: 'bottled', icon: '💧', color: '#0ea5e9' },
  { id: 'gallon', icon: '🪣', color: '#06b6d4' },
  { id: 'filter', icon: '🔧', color: '#8b5cf6' },
  { id: 'dispenser', icon: '🚰', color: '#f59e0b' },
  { id: 'subscription', icon: '📅', color: '#10b981' },
  { id: 'accessories', icon: '🗄️', color: '#6366f1' },
];

const DEMO_ORDERS = [
  { id: 'ORD-2847', company: 'مياه نوفا', items: 3, total: 4.750, status: 'onTheWay', date: '2026-03-24', progress: 75 },
  { id: 'ORD-2831', company: 'أكوا كويت', items: 1, total: 12.000, status: 'delivered', date: '2026-03-22', progress: 100 },
  { id: 'ORD-2815', company: 'مياه الصفا', items: 5, total: 8.250, status: 'delivered', date: '2026-03-18', progress: 100 },
];


const WATER_TIPS = [
  { ar: 'اشرب ٨ أكواب ماء يومياً على الأقل للحفاظ على صحتك', en: 'Drink at least 8 glasses of water daily for good health', icon: '💧' },
  { ar: 'الماء البارد يساعد على حرق السعرات الحرارية', en: 'Cold water helps burn calories', icon: '❄️' },
  { ar: 'اشرب كوب ماء قبل كل وجبة لتحسين الهضم', en: 'Drink a glass of water before each meal for better digestion', icon: '🍽️' },
  { ar: 'الجفاف يسبب الصداع — اشرب الماء بانتظام', en: 'Dehydration causes headaches — drink water regularly', icon: '🤕' },
  { ar: 'المياه القلوية تساعد على توازن حموضة الجسم', en: 'Alkaline water helps balance body pH', icon: '⚗️' },
  { ar: 'اشرب الماء فور الاستيقاظ لتنشيط الجسم', en: 'Drink water right after waking up to activate your body', icon: '☀️' },
  { ar: 'الفلاتر المنزلية تزيل ٩٩٪ من الملوثات', en: 'Home filters remove 99% of contaminants', icon: '🔧' },
  { ar: 'استبدل المشروبات الغازية بالماء لصحة أفضل', en: 'Replace sodas with water for better health', icon: '🥤' },
];

const DELIVERY_AREAS = [
  { ar: 'العاصمة', en: 'Capital', time: '20-30', areas: { ar: 'الشرق، المرقاب، دسمان، المدينة', en: 'Sharq, Mirqab, Dasman, Kuwait City' } },
  { ar: 'حولي', en: 'Hawalli', time: '25-35', areas: { ar: 'السالمية، حولي، الجابرية، مشرف، بيان', en: 'Salmiya, Hawalli, Jabriya, Mishref, Bayan' } },
  { ar: 'الفروانية', en: 'Farwaniya', time: '30-40', areas: { ar: 'الفروانية، خيطان، جليب الشيوخ، العارضية', en: 'Farwaniya, Khaitan, Jleeb, Ardiya' } },
  { ar: 'الأحمدي', en: 'Ahmadi', time: '30-45', areas: { ar: 'المنقف، المهبولة، الفنطاس، أبو حليفة', en: 'Mangaf, Mahboula, Fintas, Abu Halifa' } },
  { ar: 'الجهراء', en: 'Jahra', time: '35-50', areas: { ar: 'الجهراء، صليبية، الدوحة، النسيم', en: 'Jahra, Sulaibiya, Doha, Naseem' } },
  { ar: 'مبارك الكبير', en: 'Mubarak Al-Kabeer', time: '25-40', areas: { ar: 'صباح السالم، القرين، العدان', en: 'Sabah Al-Salem, Qurain, Adan' } },
];

const NOTIFICATIONS = [
  { id: 1, type: 'order', title: { ar: 'طلبك في الطريق!', en: 'Your order is on the way!' }, body: { ar: 'السائق أحمد على بعد ١٠ دقائق', en: 'Driver Ahmad is 10 minutes away' }, time: '5 min', read: false },
  { id: 2, type: 'offer', title: { ar: 'عرض خاص — خصم ٢٠٪', en: 'Special offer — 20% OFF' }, body: { ar: 'على جميع القوارير من مياه نوفا', en: 'On all gallons from Nova Water' }, time: '1h', read: false },
  { id: 3, type: 'points', title: { ar: 'ربحت ٥٠ نقطة!', en: 'You earned 50 points!' }, body: { ar: 'شكراً لطلبك الأخير — رصيدك ٢,٤٥٠ نقطة', en: 'Thanks for your last order — balance: 2,450 points' }, time: '2h', read: true },
  { id: 4, type: 'info', title: { ar: 'مياه الصفا — منتج جديد', en: 'Al Safa — New product' }, body: { ar: 'جرّب مياهنا القلوية الجديدة pH 9.5', en: 'Try our new alkaline water pH 9.5' }, time: '1d', read: true },
];

const PROMO_BANNERS = [
  { id: 1, title: { ar: 'وفّر ٢٠٪ على أول طلب', en: 'Save 20% on first order' }, sub: { ar: 'كود: FIRST', en: 'Code: FIRST' }, bg: 'linear-gradient(135deg, #0ea5e9, #6366f1)', icon: '🎉' },
  { id: 2, title: { ar: 'اشتراك شهري — وفّر أكثر', en: 'Monthly plan — Save more' }, sub: { ar: 'توصيل أسبوعي تلقائي', en: 'Auto weekly delivery' }, bg: 'linear-gradient(135deg, #059669, #10b981)', icon: '📅' },
  { id: 3, title: { ar: 'ادعو صديق واربح ٥٠٠ نقطة', en: 'Refer a friend, earn 500 pts' }, sub: { ar: 'كودك: ALI2026', en: 'Your code: ALI2026' }, bg: 'linear-gradient(135deg, #f59e0b, #ef4444)', icon: '🎁' },
];

const USER = { name: { ar: 'علي العنزي', en: 'Ali AlEnezi' }, phone: '+965 9xxx xxxx', email: 'ali@example.com', points: 2450, level: 2, totalOrders: 47, saved: 28.750, address: { ar: 'السالمية، قطعة ١٢، شارع عمان', en: 'Salmiya, Block 12, Oman Street' } };

// ═══ SVG LOGO COMPONENT ═══
function MaiLogo({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} style={{ filter: 'drop-shadow(0 8px 24px rgba(3,105,161,.25))' }}>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity=".95" />
          <stop offset="100%" stopColor="#e0f2fe" stopOpacity=".85" />
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <circle cx="60" cy="60" r="56" fill="url(#logoGrad)" />
      <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
      {/* Water drop */}
      <path d="M60 22C60 22 36 50 36 66C36 80 47 90 60 90C73 90 84 80 84 66C84 50 60 22 60 22Z" fill="url(#dropGrad)" opacity=".92" />
      {/* Waves inside drop */}
      <path d="M42 68C47 63 53 70 60 66C67 62 73 68 78 64" fill="none" stroke="#0ea5e9" strokeWidth="2.2" strokeLinecap="round" opacity=".45" filter="url(#glow)" />
      <path d="M44 74C48 70 54 76 60 72C66 68 72 74 76 70" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" opacity=".25" />
      {/* MAI text */}
      <text x="60" y="63" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="22" fontWeight="900" fill="#0369a1" letterSpacing="-1">MAI</text>
      {/* Arabic ماي */}
      <text x="60" y="82" textAnchor="middle" fontFamily="Tajawal,sans-serif" fontSize="15" fontWeight="700" fill="#0284c7" opacity=".65">ماي</text>
      {/* Sparkle dots */}
      <circle cx="72" cy="38" r="2" fill="#fff" opacity=".7" />
      <circle cx="78" cy="44" r="1.2" fill="#fff" opacity=".5" />
      <circle cx="68" cy="32" r="1" fill="#fff" opacity=".4" />
    </svg>
  );
}

export default function MAI() {
  const [lang, setLang] = useState('ar');
  const [page, setPage] = useState('home');
  const [tab, setTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [payMethod, setPayMethod] = useState('knet');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const t = T[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  const addToCart = useCallback((product, company) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, company, qty: 1 }];
    });
  }, []);

  const removeFromCart = (productId) => setCart(prev => prev.filter(i => i.product.id !== productId));
  const updateQty = (productId, delta) => setCart(prev => prev.map(i => i.product.id === productId ? { ...i, qty: Math.max(1, i.qty + delta) } : i));

  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const discount = promoApplied ? cartTotal * 0.1 : 0;
  const finalTotal = cartTotal - discount;

  const openCompany = (c) => { setSelectedCompany(c); setPage('company'); };
  const goHome = () => { setPage('home'); setSelectedCompany(null); setShowCart(false); setShowCheckout(false); setOrderPlaced(false); };

  const greeting = new Date().getHours() < 12 ? t.goodMorning : t.goodEvening;
  const levelName = USER.level >= 3 ? t.goldMember : USER.level >= 2 ? t.silverMember : t.bronzeMember;
  const levelColor = USER.level >= 3 ? '#f59e0b' : USER.level >= 2 ? '#94a3b8' : '#cd7f32';

  const containerStyle = { maxWidth: 430, margin: '0 auto', minHeight: '100vh', background: '#f8fafc', fontFamily: "'Segoe UI', Tahoma, sans-serif", direction: isRtl ? 'rtl' : 'ltr', position: 'relative', overflow: 'hidden' };

  const doLogin = () => {
    const ph = loginPhone.replace(/\s/g, '');
    if (!ph || !loginPass) { setLoginError(isRtl ? 'يرجى إدخال رقم الهاتف وكلمة المرور' : 'Please enter phone and password'); return; }
    if ((ph === '+96599999999' && loginPass === 'mai2026') || (ph === 'demo' && loginPass === 'demo')) {
      setLoginLoading(true); setLoginError('');
      setTimeout(() => { setLoggedIn(true); setLoginLoading(false); }, 800);
      return;
    }
    setLoginError(isRtl ? 'رقم الهاتف أو كلمة المرور غير صحيحة' : 'Invalid phone number or password');
  };

  const doLogout = () => { setLoggedIn(false); setCart([]); setTab('home'); setPage('home'); setLoginPhone(''); setLoginPass(''); setLoginError(''); };

  // ═══ LOGIN SCREEN ═══
  if (!loggedIn) return (
    <div style={{ maxWidth: 430, margin: '0 auto', minHeight: '100vh', background: 'linear-gradient(165deg, #0c4a6e 0%, #0369a1 30%, #0ea5e9 55%, #38bdf8 100%)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px 24px' }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -100, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,.03)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,.02)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 60, left: 30, width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,.15)' }} />
      <div style={{ position: 'absolute', top: 120, right: 50, width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,.1)' }} />
      <div style={{ position: 'absolute', bottom: 200, left: 60, width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,.12)' }} />

      {/* Language toggle */}
      <button onClick={toggleLang} style={{ position: 'absolute', top: 16, [isRtl ? 'left' : 'right']: 16, background: 'rgba(255,255,255,.12)', border: 'none', borderRadius: 8, padding: '6px 14px', color: 'rgba(255,255,255,.75)', fontSize: '.72rem', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, backdropFilter: 'blur(4px)', zIndex: 5 }}>
        {isRtl ? 'English' : 'العربية'}
      </button>

      {/* Logo */}
      <div style={{ marginBottom: 10, animation: 'fadeDown .7s ease both' }}>
        <MaiLogo size={110} />
      </div>

      {/* App name */}
      <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#fff', letterSpacing: -1, animation: 'fadeDown .7s ease .1s both', fontFamily: "'Inter', sans-serif" }}>MAI</div>
      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'rgba(255,255,255,.6)', marginBottom: 4, animation: 'fadeDown .7s ease .15s both', fontFamily: "'Tajawal', sans-serif" }}>ماي</div>
      <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.45)', marginBottom: 28, textAlign: 'center', animation: 'fadeDown .7s ease .2s both' }}>
        {isRtl ? 'تطبيق توصيل المياه في الكويت 🇰🇼' : 'Kuwait Water Delivery App 🇰🇼'}
      </div>

      {/* Login card */}
      <div style={{ width: '100%', background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 24, padding: '28px 22px', border: '1px solid rgba(255,255,255,.15)', boxShadow: '0 20px 60px rgba(0,0,0,.15)', animation: 'fadeUp .6s ease .3s both' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: 18, textAlign: 'center' }}>
          {isRtl ? 'تسجيل الدخول' : 'Sign In'}
        </div>

        {/* Phone */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.55)', marginBottom: 5, display: 'block', fontWeight: 600 }}>
            {isRtl ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <input value={loginPhone} onChange={e => { setLoginPhone(e.target.value); setLoginError(''); }}
            onKeyDown={e => e.key === 'Enter' && doLogin()}
            type="tel" dir="ltr" placeholder="+965 9999 9999"
            style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,.15)', background: 'rgba(255,255,255,.08)', color: '#fff', fontSize: '.88rem', outline: 'none', fontFamily: "'Inter', monospace", transition: 'border-color .2s' }} />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.55)', marginBottom: 5, display: 'block', fontWeight: 600 }}>
            {isRtl ? 'كلمة المرور' : 'Password'}
          </label>
          <input value={loginPass} onChange={e => { setLoginPass(e.target.value); setLoginError(''); }}
            onKeyDown={e => e.key === 'Enter' && doLogin()}
            type="password" placeholder="••••••••"
            style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,.15)', background: 'rgba(255,255,255,.08)', color: '#fff', fontSize: '.88rem', outline: 'none', fontFamily: 'inherit', transition: 'border-color .2s' }} />
        </div>

        {/* Remember + Forgot */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '.72rem', color: 'rgba(255,255,255,.45)', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked style={{ accentColor: '#fff' }} />
            {isRtl ? 'تذكرني' : 'Remember me'}
          </label>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>
            {isRtl ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
          </a>
        </div>

        {/* Error */}
        {loginError && <div style={{ color: '#fca5a5', fontSize: '.72rem', textAlign: 'center', marginBottom: 8, padding: '6px 10px', background: 'rgba(239,68,68,.1)', borderRadius: 8 }}>⚠️ {loginError}</div>}

        {/* Login button */}
        <button onClick={doLogin} disabled={loginLoading}
          style={{ width: '100%', padding: 15, borderRadius: 14, border: 'none', background: loginLoading ? 'rgba(255,255,255,.6)' : '#fff', color: '#0284c7', fontSize: '1rem', fontWeight: 800, cursor: loginLoading ? 'wait' : 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 16px rgba(0,0,0,.1)', transition: 'transform .1s' }}>
          {loginLoading ? (isRtl ? 'جاري الدخول...' : 'Signing in...') : (isRtl ? 'دخول' : 'Sign In')}
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '18px 0', color: 'rgba(255,255,255,.25)', fontSize: '.65rem' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
          {isRtl ? 'أو' : 'or'}
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
        </div>

        {/* Social login */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => { setLoginLoading(true); setTimeout(() => { setLoggedIn(true); setLoginLoading(false); }, 600); }}
            style={{ flex: 1, padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.05)', color: '#fff', fontSize: '.78rem', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
             Apple
          </button>
          <button onClick={() => { setLoginLoading(true); setTimeout(() => { setLoggedIn(true); setLoginLoading(false); }, 600); }}
            style={{ flex: 1, padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.05)', color: '#fff', fontSize: '.78rem', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            📱 {isRtl ? 'رمز SMS' : 'SMS Code'}
          </button>
        </div>
      </div>

      {/* Demo credentials */}
      <div style={{ marginTop: 18, width: '100%', textAlign: 'center', animation: 'fadeUp .5s ease .5s both' }}>
        <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 700 }}>
          {isRtl ? 'بيانات تجريبية للدخول' : 'Demo Login Credentials'}
        </div>
        <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 14, padding: '14px 18px', border: '1px dashed rgba(255,255,255,.12)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '.75rem' }}>
            <span style={{ color: 'rgba(255,255,255,.4)' }}>{isRtl ? 'الهاتف' : 'Phone'}</span>
            <b style={{ color: 'rgba(255,255,255,.85)', fontFamily: "'Inter', monospace", direction: 'ltr' }}>+965 9999 9999</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '.75rem' }}>
            <span style={{ color: 'rgba(255,255,255,.4)' }}>{isRtl ? 'كلمة المرور' : 'Password'}</span>
            <b style={{ color: 'rgba(255,255,255,.85)', fontFamily: "'Inter', monospace" }}>mai2026</b>
          </div>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,.08)', marginTop: 4, paddingTop: 6, display: 'flex', justifyContent: 'space-between', fontSize: '.72rem' }}>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>{isRtl ? 'دخول سريع' : 'Quick login'}</span>
            <b style={{ color: 'rgba(255,255,255,.7)', fontFamily: "'Inter', monospace" }}>demo / demo</b>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 20, fontSize: '.58rem', color: 'rgba(255,255,255,.22)', textAlign: 'center' }}>
        MAI v1.0 — <a href="https://github.com/SiteQ8" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none' }}>@SiteQ8</a> · Ali AlEnezi
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );

  // ═══ ORDER PLACED SCREEN ═══
  if (orderPlaced) return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 40, textAlign: 'center', background: 'linear-gradient(135deg, #ecfdf5, #f0f9ff)' }}>
        <div style={{ fontSize: 80, marginBottom: 20, animation: 'bounce 0.6s ease' }}>✅</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#059669', marginBottom: 8 }}>{t.orderPlaced}</h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 30 }}>{t.orderTracking}</p>
        <div style={{ background: '#fff', borderRadius: 16, padding: 20, width: '100%', boxShadow: '0 2px 12px rgba(0,0,0,.06)', marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}><span style={{ color: '#9ca3af', fontSize: 13 }}>Order ID</span><span style={{ fontWeight: 700, fontFamily: 'monospace' }}>ORD-{Math.floor(Math.random() * 9000 + 1000)}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}><span style={{ color: '#9ca3af', fontSize: 13 }}>{t.total}</span><span style={{ fontWeight: 800, color: '#059669' }}>{finalTotal.toFixed(3)} {t.kd}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#9ca3af', fontSize: 13 }}>{t.points}</span><span style={{ fontWeight: 700, color: '#f59e0b' }}>+{Math.floor(finalTotal * 10)} ⭐</span></div>
        </div>
        <button onClick={() => { setOrderPlaced(false); setShowCheckout(false); setShowCart(false); setCart([]); setTab('home'); setPage('home'); }} style={{ padding: '14px 40px', borderRadius: 12, background: '#059669', color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>{t.home}</button>
      </div>
    </div>
  );

  // ═══ CHECKOUT SCREEN ═══
  if (showCheckout) return (
    <div style={containerStyle}>
      <div style={{ padding: '16px 16px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <button onClick={() => setShowCheckout(false)} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#374151' }}>←</button>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>{t.checkout}</h2>
        </div>

        {/* Delivery Address */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: '0 1px 6px rgba(0,0,0,.04)' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', marginBottom: 10 }}>📍 {t.deliveryAddress}</h3>
          <p style={{ fontSize: 14, fontWeight: 600 }}>{USER.address[lang]}</p>
        </div>

        {/* Payment Method */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: '0 1px 6px rgba(0,0,0,.04)' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>💳 {t.paymentMethod}</h3>
          {[['knet', '🏧', t.knet], ['creditCard', '💳', t.creditCard], ['applePay', '', t.applePay], ['cashOnDelivery', '💵', t.cashOnDelivery]].map(([id, icon, label]) => (
            <div key={id} onClick={() => setPayMethod(id)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: payMethod === id ? '#eff6ff' : '#f9fafb', border: `2px solid ${payMethod === id ? '#3b82f6' : '#f3f4f6'}`, marginBottom: 6, cursor: 'pointer' }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, flex: 1 }}>{label}</span>
              <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${payMethod === id ? '#3b82f6' : '#d1d5db'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {payMethod === id && <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3b82f6' }} />}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: '0 1px 6px rgba(0,0,0,.04)' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>📋 {t.orderSummary}</h3>
          {cart.map(item => (
            <div key={item.product.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f3f4f6', fontSize: 13 }}>
              <span>{item.product.name[lang]} ×{item.qty}</span>
              <span style={{ fontWeight: 600 }}>{(item.product.price * item.qty).toFixed(3)} {t.kd}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13, color: '#6b7280' }}><span>{t.delivery}</span><span style={{ color: '#059669', fontWeight: 600 }}>{t.free} ✓</span></div>
          {promoApplied && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13, color: '#059669' }}><span>{t.promoApplied} (10%)</span><span>-{discount.toFixed(3)} {t.kd}</span></div>}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 0', fontSize: 16, fontWeight: 800, borderTop: '2px solid #f3f4f6', marginTop: 6 }}><span>{t.total}</span><span>{finalTotal.toFixed(3)} {t.kd}</span></div>
        </div>

        <div style={{ background: '#fef3c7', borderRadius: 12, padding: 12, textAlign: 'center', fontSize: 13, color: '#92400e', marginBottom: 12 }}>⭐ {t.earnPoints} +{Math.floor(finalTotal * 10)} {t.points}</div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 430, padding: '12px 16px', background: '#fff', borderTop: '1px solid #e5e7eb' }}>
        <button onClick={() => setOrderPlaced(true)} style={{ width: '100%', padding: 16, borderRadius: 14, background: 'linear-gradient(135deg, #059669, #10b981)', color: '#fff', border: 'none', fontSize: 16, fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 16px rgba(5,150,105,.3)' }}>{t.placeOrder} — {finalTotal.toFixed(3)} {t.kd}</button>
      </div>
    </div>
  );

  // ═══ CART SCREEN ═══
  if (showCart) return (
    <div style={containerStyle}>
      <div style={{ padding: '16px 16px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <button onClick={() => setShowCart(false)} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#374151' }}>←</button>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>{t.cart} ({cartCount})</h2>
        </div>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#9ca3af' }}>
            <div style={{ fontSize: 60, marginBottom: 12 }}>🛒</div>
            <p style={{ fontSize: 15, fontWeight: 600 }}>{t.emptyCart}</p>
          </div>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.product.id} style={{ background: '#fff', borderRadius: 14, padding: 14, marginBottom: 8, boxShadow: '0 1px 6px rgba(0,0,0,.04)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 28 }}>{item.product.img}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{item.product.name[lang]}</div>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>{item.company.name[lang]}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0ea5e9', marginTop: 2 }}>{item.product.price.toFixed(3)} {t.kd}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => updateQty(item.product.id, -1)} style={{ width: 30, height: 30, borderRadius: 8, background: '#f3f4f6', border: 'none', fontSize: 16, cursor: 'pointer' }}>−</button>
                  <span style={{ fontWeight: 700, fontSize: 14, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.product.id, 1)} style={{ width: 30, height: 30, borderRadius: 8, background: '#eff6ff', border: 'none', fontSize: 16, cursor: 'pointer', color: '#3b82f6' }}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.product.id)} style={{ background: 'none', border: 'none', fontSize: 16, cursor: 'pointer', color: '#ef4444' }}>✕</button>
              </div>
            ))}
            {/* Promo */}
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <input value={promoCode} onChange={e => setPromoCode(e.target.value)} placeholder={t.promo} style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1.5px solid #e5e7eb', fontSize: 13, fontFamily: 'inherit', direction: isRtl ? 'rtl' : 'ltr' }} />
              <button onClick={() => { if (promoCode.toUpperCase() === 'MAI10') setPromoApplied(true) }} style={{ padding: '10px 18px', borderRadius: 10, background: '#3b82f6', color: '#fff', border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{t.apply}</button>
            </div>
            {promoApplied && <div style={{ color: '#059669', fontSize: 12, marginTop: 6 }}>✓ {t.promoApplied} — MAI10 (10% {t.off})</div>}
          </>
        )}
      </div>
      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 430, padding: '12px 16px', background: '#fff', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}><span style={{ color: '#6b7280' }}>{t.subtotal}</span><span style={{ fontWeight: 700 }}>{cartTotal.toFixed(3)} {t.kd}</span></div>
          <button onClick={() => setShowCheckout(true)} style={{ width: '100%', padding: 15, borderRadius: 14, background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)', color: '#fff', border: 'none', fontSize: 15, fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 16px rgba(14,165,233,.3)' }}>{t.checkout} — {finalTotal.toFixed(3)} {t.kd}</button>
        </div>
      )}
    </div>
  );

  // ═══ COMPANY DETAIL ═══
  if (page === 'company' && selectedCompany) {
    const c = selectedCompany;
    const filteredProducts = selectedCat ? c.products.filter(p => p.cat === selectedCat) : c.products;
    return (
      <div style={containerStyle}>
        <div style={{ padding: '0 0 100px' }}>
          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}dd)`, padding: '20px 16px', color: '#fff', position: 'relative' }}>
            <button onClick={goHome} style={{ background: 'rgba(255,255,255,.15)', border: 'none', borderRadius: 8, padding: '6px 12px', color: '#fff', fontSize: 13, cursor: 'pointer', marginBottom: 12 }}>← {t.back}</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontSize: 42 }}>{c.logo}</div>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 900 }}>{c.name[lang]}</h2>
                <p style={{ fontSize: 12, opacity: .85, marginTop: 2 }}>{c.desc[lang]}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 14, fontSize: 12 }}>
              <span>⭐ {c.rating} ({c.reviews.toLocaleString()})</span>
              <span>🕐 {c.delivery}</span>
              <span>📦 {t.minOrder}: {c.minOrder} {t.kd}</span>
            </div>
          </div>

          
          {/* Company Info Cards */}
          <div style={{ display: 'flex', gap: 8, padding: '12px 16px', overflowX: 'auto' }}>
            <div style={{ flex: '0 0 auto', background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 1px 4px rgba(0,0,0,.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>🕐</span>
              <div><div style={{ fontSize: 10, color: '#9ca3af' }}>{lang === 'ar' ? 'ساعات العمل' : 'Working Hours'}</div><div style={{ fontSize: 12, fontWeight: 700 }}>{c.hours ? c.hours[lang] : '24/7'}</div></div>
            </div>
            <div style={{ flex: '0 0 auto', background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 1px 4px rgba(0,0,0,.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>📞</span>
              <div><div style={{ fontSize: 10, color: '#9ca3af' }}>{lang === 'ar' ? 'اتصل بنا' : 'Contact'}</div><div style={{ fontSize: 12, fontWeight: 700, direction: 'ltr' }}>{c.phone || '+965 xxxx xxxx'}</div></div>
            </div>
            <div style={{ flex: '0 0 auto', background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 1px 4px rgba(0,0,0,.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>📍</span>
              <div><div style={{ fontSize: 10, color: '#9ca3af' }}>{lang === 'ar' ? 'المنطقة' : 'Coverage'}</div><div style={{ fontSize: 12, fontWeight: 700 }}>{c.areas ? c.areas[lang] : (lang === 'ar' ? 'جميع الكويت' : 'All Kuwait')}</div></div>
            </div>
          </div>
          {/* Certifications */}
          {c.certs && <div style={{ display: 'flex', gap: 6, padding: '4px 16px 8px', flexWrap: 'wrap' }}>
            {c.certs.map((cert, i) => (
              <span key={i} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 20, background: '#ecfdf5', color: '#059669', fontWeight: 600, border: '1px solid #d1fae5' }}>✓ {cert}</span>
            ))}
          </div>}

{/* Category filter */}
          <div style={{ display: 'flex', gap: 6, padding: '12px 16px', overflowX: 'auto' }}>
            <button onClick={() => setSelectedCat(null)} style={{ padding: '6px 14px', borderRadius: 20, background: !selectedCat ? '#0ea5e9' : '#fff', color: !selectedCat ? '#fff' : '#6b7280', border: '1px solid #e5e7eb', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>{t.viewAll}</button>
            {CATEGORIES.filter(cat => c.products.some(p => p.cat === cat.id)).map(cat => (
              <button key={cat.id} onClick={() => setSelectedCat(cat.id)} style={{ padding: '6px 14px', borderRadius: 20, background: selectedCat === cat.id ? cat.color : '#fff', color: selectedCat === cat.id ? '#fff' : '#6b7280', border: '1px solid #e5e7eb', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>{cat.icon} {t[cat.id]}</button>
            ))}
          </div>

          {/* Products */}
          <div style={{ padding: '0 16px' }}>
            {filteredProducts.map(p => (
              <div key={p.id} style={{ background: '#fff', borderRadius: 14, padding: 14, marginBottom: 8, boxShadow: '0 1px 6px rgba(0,0,0,.04)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 32, width: 48, textAlign: 'center' }}>{p.img}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 700 }}>{p.name[lang]}</span>
                    {p.badge && <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 4, background: p.badge === 'offer' ? '#fef2f2' : p.badge === 'new' ? '#ecfdf5' : '#eff6ff', color: p.badge === 'offer' ? '#dc2626' : p.badge === 'new' ? '#059669' : '#2563eb', fontWeight: 700 }}>{t[p.badge]}</span>}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: '#0ea5e9' }}>{p.price.toFixed(3)} {t.kd}</span>
                    {p.oldPrice && <span style={{ fontSize: 12, color: '#9ca3af', textDecoration: 'line-through' }}>{p.oldPrice.toFixed(3)}</span>}
                  </div>
                </div>
                <button onClick={() => addToCart(p, c)} style={{ padding: '8px 14px', borderRadius: 10, background: '#0ea5e9', color: '#fff', border: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>+</button>
              </div>
            ))}
          </div>
        </div>
        {/* Floating cart */}
        {cartCount > 0 && (
          <div style={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 32px)', maxWidth: 398, padding: '12px 16px', background: '#0ea5e9', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', cursor: 'pointer', boxShadow: '0 8px 24px rgba(14,165,233,.35)' }} onClick={() => setShowCart(true)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ background: 'rgba(255,255,255,.25)', borderRadius: 8, padding: '2px 8px', fontSize: 13, fontWeight: 700 }}>{cartCount}</span><span style={{ fontSize: 14, fontWeight: 700 }}>{t.cart}</span></div>
            <span style={{ fontSize: 15, fontWeight: 800 }}>{cartTotal.toFixed(3)} {t.kd}</span>
          </div>
        )}
      </div>
    );
  }

  // ═══ MAIN APP ═══
  return (
    <div style={containerStyle}>
      <div style={{ paddingBottom: 70 }}>

        {/* ═══ HOME TAB ═══ */}
        {tab === 'home' && (
          <>
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', padding: '20px 16px 24px', color: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 13, opacity: .8 }}>{greeting} 👋</div>
                  <div style={{ fontSize: 20, fontWeight: 900 }}>{USER.name[lang]}</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={toggleLang} style={{ background: 'rgba(255,255,255,.15)', border: 'none', borderRadius: 8, padding: '6px 10px', color: '#fff', fontSize: 11, cursor: 'pointer', fontWeight: 600 }}>{t.language}</button>
                  <div onClick={() => setShowCart(true)} style={{ background: 'rgba(255,255,255,.15)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', position: 'relative' }}>
                    🛒 {cartCount > 0 && <span style={{ position: 'absolute', top: -4, right: -4, background: '#ef4444', color: '#fff', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{cartCount}</span>}
                  </div>
                </div>
              </div>
              {/* Search */}
              <div style={{ position: 'relative' }}>
                <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder={t.search} style={{ width: '100%', padding: '12px 16px', paddingRight: isRtl ? 40 : 16, paddingLeft: isRtl ? 16 : 40, borderRadius: 12, border: 'none', background: 'rgba(255,255,255,.2)', color: '#fff', fontSize: 14, outline: 'none', fontFamily: 'inherit', direction: isRtl ? 'rtl' : 'ltr', backdropFilter: 'blur(8px)' }} />
                <span style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', [isRtl ? 'right' : 'left']: 14, fontSize: 16 }}>🔍</span>
              </div>
              {/* Points banner */}
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.12)', borderRadius: 10, padding: '10px 12px', backdropFilter: 'blur(4px)' }}>
                  <div style={{ fontSize: 11, opacity: .7 }}>{t.points}</div>
                  <div style={{ fontSize: 18, fontWeight: 900 }}>⭐ {USER.points.toLocaleString()}</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.12)', borderRadius: 10, padding: '10px 12px', backdropFilter: 'blur(4px)' }}>
                  <div style={{ fontSize: 11, opacity: .7 }}>{t.saved}</div>
                  <div style={{ fontSize: 18, fontWeight: 900 }}>{USER.saved.toFixed(3)} <span style={{ fontSize: 11 }}>{t.kd}</span></div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div style={{ padding: '16px 16px 8px' }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{t.categories}</h3>
              <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
                {CATEGORIES.map(cat => (
                  <div key={cat.id} style={{ flex: '0 0 auto', width: 70, textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ width: 50, height: 50, borderRadius: 14, background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, margin: '0 auto 4px' }}>{cat.icon}</div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: '#6b7280' }}>{t[cat.id]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Offers */}
            <div style={{ padding: '8px 16px' }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{t.featured} 🔥</h3>
              <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6 }}>
                {COMPANIES.filter(c => c.featured).map(c => {
                  const offer = c.products.find(p => p.badge === 'offer');
                  return offer ? (
                    <div key={c.id} onClick={() => openCompany(c)} style={{ flex: '0 0 auto', width: 220, background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)`, borderRadius: 16, padding: 16, color: '#fff', cursor: 'pointer', boxShadow: `0 4px 16px ${c.color}30` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: 28 }}>{c.logo}</span>
                        <span style={{ background: 'rgba(255,255,255,.2)', padding: '2px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700 }}>-{Math.round((1 - offer.price / offer.oldPrice) * 100)}%</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{offer.name[lang]}</div>
                      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <span style={{ fontSize: 16, fontWeight: 900 }}>{offer.price.toFixed(3)} {t.kd}</span>
                        <span style={{ fontSize: 11, textDecoration: 'line-through', opacity: .7 }}>{offer.oldPrice.toFixed(3)}</span>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            
            {/* Promo Banners */}
            <div style={{ padding: '8px 16px' }}>
              <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6 }}>
                {PROMO_BANNERS.map(b => (
                  <div key={b.id} style={{ flex: '0 0 auto', width: 260, background: b.bg, borderRadius: 16, padding: 18, color: '#fff', cursor: 'pointer' }}>
                    <div style={{ fontSize: 28, marginBottom: 6 }}>{b.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>{b.title[lang]}</div>
                    <div style={{ fontSize: 12, opacity: .8, marginTop: 4 }}>{b.sub[lang]}</div>
                  </div>
                ))}
              </div>
            </div>

{/* Top Companies */}
            <div style={{ padding: '12px 16px' }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{t.topCompanies}</h3>
              {COMPANIES.filter(c => !searchQuery || c.name[lang].includes(searchQuery) || c.name[lang === 'ar' ? 'en' : 'ar'].toLowerCase().includes(searchQuery.toLowerCase())).map(c => (
                <div key={c.id} onClick={() => openCompany(c)} style={{ background: '#fff', borderRadius: 14, padding: 14, marginBottom: 8, boxShadow: '0 1px 6px rgba(0,0,0,.04)', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${c.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{c.logo}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{c.name[lang]}</div>
                    <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>⭐ {c.rating} · 🕐 {c.delivery} · {c.products.length} {t.products}</div>
                  </div>
                  <span style={{ fontSize: 18, color: '#d1d5db' }}>←</span>
                </div>
              ))}
            </div>
          
            {/* Water Tips */}
            <div style={{ padding: '12px 16px' }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{lang === 'ar' ? '💡 نصائح مائية' : '💡 Water Tips'}</h3>
              <div style={{ background: 'linear-gradient(135deg, #ecfdf5, #f0f9ff)', borderRadius: 16, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 32 }}>{WATER_TIPS[new Date().getDate() % WATER_TIPS.length].icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.6 }}>{WATER_TIPS[new Date().getDate() % WATER_TIPS.length][lang]}</div>
                    <div style={{ fontSize: 10, color: '#6b7280', marginTop: 4 }}>{lang === 'ar' ? 'نصيحة اليوم' : 'Tip of the day'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Areas */}
            <div style={{ padding: '8px 16px 16px' }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{lang === 'ar' ? '🗺️ مناطق التوصيل' : '🗺️ Delivery Areas'}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
                {DELIVERY_AREAS.map((a, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 1px 4px rgba(0,0,0,.04)', textAlign: 'center' }}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{a[lang]}</div>
                    <div style={{ fontSize: 11, color: '#0ea5e9', fontWeight: 600, marginTop: 2 }}>🕐 {a.time} min</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ padding: '0 16px 16px' }}>
              <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', borderRadius: 16, padding: 18, color: '#fff', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                <div><div style={{ fontSize: 22, fontWeight: 900 }}>6</div><div style={{ fontSize: 10, opacity: .6 }}>{lang === 'ar' ? 'شركات' : 'Companies'}</div></div>
                <div style={{ width: 1, background: 'rgba(255,255,255,.15)' }}></div>
                <div><div style={{ fontSize: 22, fontWeight: 900 }}>38+</div><div style={{ fontSize: 10, opacity: .6 }}>{lang === 'ar' ? 'منتج' : 'Products'}</div></div>
                <div style={{ width: 1, background: 'rgba(255,255,255,.15)' }}></div>
                <div><div style={{ fontSize: 22, fontWeight: 900 }}>24/7</div><div style={{ fontSize: 10, opacity: .6 }}>{lang === 'ar' ? 'توصيل' : 'Delivery'}</div></div>
                <div style={{ width: 1, background: 'rgba(255,255,255,.15)' }}></div>
                <div><div style={{ fontSize: 22, fontWeight: 900 }}>6</div><div style={{ fontSize: 10, opacity: .6 }}>{lang === 'ar' ? 'محافظات' : 'Governorates'}</div></div>
              </div>
            </div>
          </>
        )}


                {/* ═══ COMPANIES TAB ═══ */}
        {tab === 'companies' && (
          <div style={{ padding: 16 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 14 }}>{t.allCompanies}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {COMPANIES.map(c => (
                <div key={c.id} onClick={() => openCompany(c)} style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,.04)', cursor: 'pointer', textAlign: 'center' }}>
                  <div style={{ fontSize: 38, marginBottom: 6 }}>{c.logo}</div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{c.name[lang]}</div>
                  <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>⭐ {c.rating}</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>{c.products.length} {t.products}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ ORDERS TAB ═══ */}
        {tab === 'orders' && (
          <div style={{ padding: 16 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 14 }}>{t.orders}</h2>
            {DEMO_ORDERS.map(o => (
              <div key={o.id} style={{ background: '#fff', borderRadius: 14, padding: 14, marginBottom: 10, boxShadow: '0 1px 6px rgba(0,0,0,.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: '#6b7280' }}>{o.id}</span>
                  <span style={{ fontSize: 11, color: o.status === 'delivered' ? '#059669' : '#f59e0b', fontWeight: 700, background: o.status === 'delivered' ? '#ecfdf5' : '#fefce8', padding: '2px 8px', borderRadius: 6 }}>{t[o.status]}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{o.company}</div>
                <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{o.items} {t.items} · {o.total.toFixed(3)} {t.kd}</div>
                {o.status !== 'delivered' && (
                  <div style={{ marginTop: 10, background: '#f3f4f6', borderRadius: 6, height: 6, overflow: 'hidden' }}>
                    <div style={{ width: `${o.progress}%`, height: '100%', background: 'linear-gradient(90deg, #0ea5e9, #3b82f6)', borderRadius: 6 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ═══ PROFILE TAB ═══ */}
        {tab === 'profile' && (
          <div style={{ padding: 16 }}>
            {/* Profile header */}
            <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', borderRadius: 20, padding: 24, color: '#fff', marginBottom: 16, textAlign: 'center' }}>
              <div style={{ margin: '0 auto 10px' }}><MaiLogo size={70} /></div>
              <h2 style={{ fontSize: 20, fontWeight: 900 }}>{USER.name[lang]}</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: `${levelColor}25`, border: `1px solid ${levelColor}50`, padding: '3px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, color: levelColor, marginTop: 6 }}>👑 {levelName}</div>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
                {[[USER.points.toLocaleString(), t.points, '⭐'], [USER.totalOrders, t.orders_count, '📦'], [`${USER.saved.toFixed(1)} ${t.kd}`, t.saved, '💰']].map(([val, label, icon], i) => (
                  <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,.08)', borderRadius: 12, padding: 10 }}>
                    <div style={{ fontSize: 16, fontWeight: 900 }}>{icon} {val}</div>
                    <div style={{ fontSize: 10, opacity: .6, marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Points progress */}
            <div style={{ background: '#fff', borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: '0 1px 6px rgba(0,0,0,.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{t.points}</span>
                <span style={{ fontSize: 12, color: '#f59e0b', fontWeight: 700 }}>⭐ {USER.points} / 5000</span>
              </div>
              <div style={{ background: '#f3f4f6', borderRadius: 6, height: 8, overflow: 'hidden' }}>
                <div style={{ width: `${(USER.points / 5000) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #f59e0b, #eab308)', borderRadius: 6 }} />
              </div>
              <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 6 }}>{t.redeemPoints}</div>
            </div>

            
            {/* Referral Card */}
            <div style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius: 14, padding: 16, marginBottom: 12, border: '1px solid #fcd34d' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 28 }}>🎁</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#92400e' }}>{lang === 'ar' ? 'ادعو أصدقاءك' : 'Invite Friends'}</div>
                  <div style={{ fontSize: 11, color: '#a16207', marginTop: 2 }}>{lang === 'ar' ? 'اربح ٥٠٠ نقطة لكل صديق يسجل!' : 'Earn 500 points for each friend!'}</div>
                </div>
              </div>
              <div style={{ marginTop: 10, background: '#fff', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: '#92400e', letterSpacing: 2 }}>ALI2026</span>
                <button style={{ padding: '6px 14px', borderRadius: 8, background: '#f59e0b', color: '#fff', border: 'none', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>{lang === 'ar' ? 'نسخ الكود' : 'Copy Code'}</button>
              </div>
            </div>

            {/* Notifications */}
            <div style={{ background: '#fff', borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: '0 1px 6px rgba(0,0,0,.04)' }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>🔔 {t.notifications} <span style={{ background: '#ef4444', color: '#fff', fontSize: 10, padding: '1px 6px', borderRadius: 10, fontWeight: 700 }}>{NOTIFICATIONS.filter(n => !n.read).length}</span></h3>
              {NOTIFICATIONS.slice(0, 3).map(n => (
                <div key={n.id} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid #f3f4f6', opacity: n.read ? 0.6 : 1 }}>
                  <span style={{ fontSize: 20 }}>{n.type === 'order' ? '📦' : n.type === 'offer' ? '🏷️' : n.type === 'points' ? '⭐' : 'ℹ️'}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 700 }}>{n.title[lang]}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', marginTop: 1 }}>{n.body[lang]}</div>
                  </div>
                  <span style={{ fontSize: 10, color: '#9ca3af', whiteSpace: 'nowrap' }}>{n.time}</span>
                </div>
              ))}
            </div>

{/* Menu items */}
            {[
              ['📝', t.editProfile, null],
              ['📍', t.myAddresses, null],
              ['🔔', t.notifications, null],
              ['❓', t.helpCenter, null],
              ['🌐', t.language, toggleLang],
              ['🚪', t.logout, doLogout],
            ].map(([icon, label, action], i) => (
              <div key={i} onClick={action} style={{ background: '#fff', borderRadius: 12, padding: '14px 16px', marginBottom: 6, boxShadow: '0 1px 4px rgba(0,0,0,.03)', display: 'flex', alignItems: 'center', gap: 10, cursor: action ? 'pointer' : 'default' }}>
                <span style={{ fontSize: 18 }}>{icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, flex: 1 }}>{label}</span>
                {i < 5 && <span style={{ color: '#d1d5db' }}>←</span>}
              </div>
            ))}

            <div style={{ textAlign: 'center', padding: 16, fontSize: 11, color: '#9ca3af' }}>MAI v1.0 — Ali AlEnezi · @SiteQ8</div>
          </div>
        )}
      </div>

      {/* ═══ BOTTOM NAV ═══ */}
      <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 430, background: '#fff', borderTop: '1px solid #e5e7eb', display: 'flex', padding: '6px 0 env(safe-area-inset-bottom)', zIndex: 100 }}>
        {[['home', '🏠', t.home], ['companies', '🏢', t.companies], ['orders', '📦', t.orders], ['profile', '👤', t.profile]].map(([id, icon, label]) => (
          <div key={id} onClick={() => { setTab(id); setPage('home'); setSelectedCompany(null); }} style={{ flex: 1, textAlign: 'center', padding: '6px 0', cursor: 'pointer' }}>
            <div style={{ fontSize: 20, marginBottom: 1, transition: 'transform .1s', transform: tab === id ? 'scale(1.1)' : 'scale(1)' }}>{icon}</div>
            <div style={{ fontSize: 10, fontWeight: tab === id ? 700 : 400, color: tab === id ? '#0ea5e9' : '#9ca3af' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Floating cart button */}
      {cartCount > 0 && tab !== 'profile' && tab !== 'orders' && !showCart && (
        <div onClick={() => setShowCart(true)} style={{ position: 'fixed', bottom: 72, [isRtl ? 'left' : 'right']: 'calc(50% - 195px)', background: '#0ea5e9', color: '#fff', borderRadius: 14, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', boxShadow: '0 4px 20px rgba(14,165,233,.35)', zIndex: 99, maxWidth: 'fit-content' }}>
          <span style={{ fontSize: 16 }}>🛒</span>
          <span style={{ fontWeight: 700, fontSize: 13 }}>{cartCount} {t.items}</span>
          <span style={{ fontWeight: 800, fontSize: 14 }}>{cartTotal.toFixed(3)} {t.kd}</span>
        </div>
      )}
    </div>
  );
}
