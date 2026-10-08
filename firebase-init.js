// إعدادات فايربيز الخاصة بمشروعك (المفاتيح)
const firebaseConfig = {
  apiKey: "AIzaSyCZP39oy-M8WJz5EX2BfsWTeW3mbk2BBf8",
  authDomain: "smarthifz.firebaseapp.com",
  projectId: "smarthifz",
  storageBucket: "smarthifz.firebasestorage.app",
  messagingSenderId: "62813076756",
  appId: "1:62813076756:web:eff0bd669b868cd4999601",
  measurementId: "G-WNHKBFM3NW"
};

// تهيئة فايربيز الأساسي
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// تعريف المتغيرات اللي هنستخدمها في كل الصفحات
const auth = firebase.auth();
const db = firebase.firestore();

// 💡 (تركة برمجية للمحترفين): 
// لما الأدمن ينشئ حساب لطالب، فايربيز بيعمل تسجيل خروج للأدمن ويدخل بحساب الطالب!
// علشان نمنع ده، بنعمل "نسخة تانية وهمية" من فايربيز مخفية، بنستخدمها بس وقت إنشاء الحسابات
const secondaryApp = firebase.initializeApp(firebaseConfig, "Secondary");