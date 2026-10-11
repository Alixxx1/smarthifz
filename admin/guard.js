// admin/guard.js
auth.onAuthStateChanged((user) => {
    if (user) {
        db.collection("admins").doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                // أدمن معتمد: إخفاء التحميل وإظهار الصفحة
                const loader = document.getElementById('loader');
                const secureContent = document.getElementById('secureContent');
                if(loader) loader.style.display = 'none';
                if(secureContent) secureContent.style.display = 'block';
            } else {
                // ده مش أدمن (طالب متطفل): اطرد لصفحة دخول الإدارة
                auth.signOut().then(() => {
                    window.location.replace('login.html');
                });
            }
        }).catch((error) => {
            window.location.replace('login.html');
        });
    } else {
        // غير مسجل دخول من الأساس
        window.location.replace('login.html');
    }
});