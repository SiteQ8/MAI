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
  { id: 1, name: { ar: 'مياه نوفا', en: 'Nova Water' }, logo: '💧', rating: 4.8, reviews: 2840, delivery: '25 min', minOrder: 2, color: '#0ea5e9', featured: true,
    desc: { ar: 'مياه نقية ١٠٠٪ من أعماق الكويت، معالجة بأحدث التقنيات', en: 'Pure 100% water from Kuwait\'s depths, treated with latest technology' },
    products: [
      { id: 101, name: { ar: 'عبوة ٥٠٠ مل (×٢٤)', en: '500ml Pack (×24)' }, price: 1.250, oldPrice: 1.500, img: '💧', cat: 'bottled', badge: 'offer' },
      { id: 102, name: { ar: 'عبوة ١.٥ لتر (×١٢)', en: '1.5L Pack (×12)' }, price: 1.750, img: '💧', cat: 'bottled', badge: 'bestSeller' },
      { id: 103, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.750, img: '🪣', cat: 'gallon' },
      { id: 104, name: { ar: 'قارورة ١٨.٩ لتر (×٥)', en: '18.9L Gallon (×5)' }, price: 3.250, oldPrice: 3.750, img: '🪣', cat: 'gallon', badge: 'offer' },
      { id: 105, name: { ar: 'برادة مياه ذكية', en: 'Smart Water Dispenser' }, price: 45.000, img: '🚰', cat: 'dispenser', badge: 'new' },
      { id: 106, name: { ar: 'فلتر منزلي ٥ مراحل', en: '5-Stage Home Filter' }, price: 35.000, img: '🔧', cat: 'filter' },
      { id: 107, name: { ar: 'اشتراك شهري — ١٠ قوارير', en: 'Monthly — 10 Gallons' }, price: 6.500, img: '📅', cat: 'subscription', badge: 'bestSeller' },
    ]},
  { id: 2, name: { ar: 'مياه الصفا', en: 'Al Safa Water' }, logo: '🌊', rating: 4.6, reviews: 1950, delivery: '30 min', minOrder: 3, color: '#06b6d4', featured: true,
    desc: { ar: 'مياه طبيعية من ينابيع نقية، خبرة ٢٠ عاماً في الكويت', en: 'Natural spring water, 20 years of experience in Kuwait' },
    products: [
      { id: 201, name: { ar: 'عبوة ٣٣٠ مل (×٤٠)', en: '330ml Pack (×40)' }, price: 1.900, img: '💧', cat: 'bottled' },
      { id: 202, name: { ar: 'عبوة ١ لتر (×١٢)', en: '1L Pack (×12)' }, price: 1.450, img: '💧', cat: 'bottled', badge: 'bestSeller' },
      { id: 203, name: { ar: 'قارورة كبيرة ١٨.٩ لتر', en: '18.9L Large Gallon' }, price: 0.650, img: '🪣', cat: 'gallon' },
      { id: 204, name: { ar: 'برادة ساخن/بارد', en: 'Hot/Cold Dispenser' }, price: 38.000, oldPrice: 45.000, img: '🚰', cat: 'dispenser', badge: 'offer' },
      { id: 205, name: { ar: 'اشتراك أسبوعي — ٣ قوارير', en: 'Weekly — 3 Gallons' }, price: 1.800, img: '📅', cat: 'subscription' },
    ]},
  { id: 3, name: { ar: 'أكوا كويت', en: 'Aqua Kuwait' }, logo: '🏔️', rating: 4.9, reviews: 3200, delivery: '20 min', minOrder: 1.5, color: '#0284c7', featured: true,
    desc: { ar: 'الاختيار الأول في الكويت — توصيل سريع على مدار الساعة', en: 'Kuwait\'s #1 choice — 24/7 fast delivery' },
    products: [
      { id: 301, name: { ar: 'مياه قلوية ٥٠٠ مل (×٢٤)', en: 'Alkaline 500ml (×24)' }, price: 2.250, img: '💎', cat: 'bottled', badge: 'new' },
      { id: 302, name: { ar: 'مياه معدنية ١.٥ لتر (×٦)', en: 'Mineral 1.5L (×6)' }, price: 1.100, img: '💧', cat: 'bottled' },
      { id: 303, name: { ar: 'قارورة بريميوم ١٨.٩ لتر', en: 'Premium 18.9L Gallon' }, price: 0.950, img: '🪣', cat: 'gallon', badge: 'bestSeller' },
      { id: 304, name: { ar: 'فلتر RO ٧ مراحل', en: '7-Stage RO Filter' }, price: 55.000, img: '🔧', cat: 'filter', badge: 'new' },
      { id: 305, name: { ar: 'اشتراك شهري — ٢٠ قارورة', en: 'Monthly — 20 Gallons' }, price: 12.000, oldPrice: 15.000, img: '📅', cat: 'subscription', badge: 'offer' },
      { id: 306, name: { ar: 'حامل قوارير معدني', en: 'Metal Gallon Stand' }, price: 8.500, img: '🗄️', cat: 'accessories' },
    ]},
  { id: 4, name: { ar: 'مياه الخليج', en: 'Gulf Water' }, logo: '🌅', rating: 4.5, reviews: 1200, delivery: '35 min', minOrder: 2, color: '#7c3aed',
    desc: { ar: 'مياه معالجة بتقنية النانو — نقاء لا مثيل له', en: 'Nano-filtered water — unmatched purity' },
    products: [
      { id: 401, name: { ar: 'عبوة ٥٠٠ مل (×٤٨)', en: '500ml Pack (×48)' }, price: 2.400, img: '💧', cat: 'bottled' },
      { id: 402, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.700, img: '🪣', cat: 'gallon' },
      { id: 403, name: { ar: 'فلتر مطبخ ٣ مراحل', en: '3-Stage Kitchen Filter' }, price: 22.000, img: '🔧', cat: 'filter' },
    ]},
  { id: 5, name: { ar: 'بيور لايف', en: 'Pure Life' }, logo: '✨', rating: 4.7, reviews: 2100, delivery: '25 min', minOrder: 1, color: '#059669',
    desc: { ar: 'مياه نقية للحياة — توصيل مجاني للطلبات فوق ٣ د.ك', en: 'Pure water for life — free delivery on orders over 3 KD' },
    products: [
      { id: 501, name: { ar: 'عبوة ٢٠٠ مل (×٣٠)', en: '200ml Pack (×30)' }, price: 0.950, img: '💧', cat: 'bottled' },
      { id: 502, name: { ar: 'عبوة ١ لتر (×٢٤)', en: '1L Pack (×24)' }, price: 2.100, img: '💧', cat: 'bottled', badge: 'bestSeller' },
      { id: 503, name: { ar: 'قارورة ١٠ لتر', en: '10L Gallon' }, price: 0.500, img: '🪣', cat: 'gallon' },
      { id: 504, name: { ar: 'برادة أرضية فاخرة', en: 'Premium Floor Dispenser' }, price: 65.000, oldPrice: 79.000, img: '🚰', cat: 'dispenser', badge: 'offer' },
    ]},
  { id: 6, name: { ar: 'مياه الوطنية', en: 'National Water' }, logo: '🇰🇼', rating: 4.4, reviews: 890, delivery: '40 min', minOrder: 2.5, color: '#dc2626',
    desc: { ar: 'منتج كويتي ١٠٠٪ — فخر الصناعة الوطنية', en: '100% Kuwaiti product — national industry pride' },
    products: [
      { id: 601, name: { ar: 'عبوة ٥٠٠ مل (×٢٤)', en: '500ml Pack (×24)' }, price: 1.100, img: '💧', cat: 'bottled' },
      { id: 602, name: { ar: 'قارورة ١٨.٩ لتر', en: '18.9L Gallon' }, price: 0.600, img: '🪣', cat: 'gallon', badge: 'bestSeller' },
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
              <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 10px', boxShadow: '0 4px 16px rgba(14,165,233,.4)' }}>👤</div>
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
              ['🚪', t.logout, null],
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
