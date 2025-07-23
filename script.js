// بيانات الأقسام
const categories = [
  { id: "Fittings", name: "الوصلات", icon: "fa-tools", image: "https://images.unsplash.com/photo-1581091012184-6e30f08302e0" },
  { id: "Pipes", name: "المواسير", icon: "fa-pipe", image: "https://images.unsplash.com/photo-1597071051468-0e4132081115" }
];

// بيانات المنتجات
const products = [
  // قسم الوصلات
  { id: 1, name: "وصلات لزوم الآبار قلوظة من جانب واحد", category: "Fittings", sizes: [{ diameter: 50 }, { diameter: 110 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_PVC_fittings.jpg" },
  { id: 2, name: "أكواع ذات رأس بجوان", category: "Fittings", sizes: [{ diameter: 50 }, { diameter: 75 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_elbow_fitting.jpg" },
  { id: 3, name: "مشتركات لحام مدعمة بالفيبر جلاس", category: "Fittings", sizes: [{ diameter: 63 }, { diameter: 90 }], image: "https://www.fusionaus.com/wp-content/uploads/2018/10/fittings.jpg" },
  { id: 4, name: "جلبة مرملة", category: "Fittings", sizes: [{ diameter: 50 }, { diameter: 110 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_coupling.jpg" },
  { id: 5, name: "أكواع لزوم شركات الغاز", category: "Fittings", sizes: [{ diameter: 32 }, { diameter: 63 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_gas_fittings.jpg" },
  { id: 6, name: "أكواع ضغط ذات رأس وذيل", category: "Fittings", sizes: [{ diameter: 50 }, { diameter: 90 }], image: "https://www.fusionaus.com/wp-content/uploads/2018/10/pressure_fittings.jpg" },
  { id: 7, name: "مساليب لصق", category: "Fittings", sizes: [{ diameter: 50 }, { diameter: 75 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_tee_fitting.jpg" },
  { id: 8, name: "بردات بالفلانشة ذات رأس جوان", category: "Fittings", sizes: [{ diameter: 110 }, { diameter: 160 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_flange_fitting.jpg" },
  // قسم المواسير
  { id: 9, name: "مواسير لزوم مياه الشرب والصرف الصحي", category: "Pipes", sizes: [{ diameter: 110 }, { diameter: 160 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_PVC_pipe.jpg" },
  { id: 10, name: "مواسير سوداء قابلة للقلوظة", category: "Pipes", sizes: [{ diameter: 50 }, { diameter: 110 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_black_pipe.jpg" },
  { id: 11, name: "مواسير بيضاء بخط أزرق", category: "Pipes", sizes: [{ diameter: 20 }, { diameter: 25 }], image: "https://www.fusionaus.com/wp-content/uploads/2018/10/PPR_pipe.jpg" },
  { id: 12, name: "مواسير سوداء للصرف", category: "Pipes", sizes: [{ diameter: 110 }, { diameter: 160 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_sewer_pipe.jpg" },
  { id: 13, name: "مواسير ذات رأس جوان هرمي", category: "Pipes", sizes: [{ diameter: 50 }, { diameter: 75 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_gasket_pipe.jpg" },
  { id: 14, name: "مواسير بيضاء بدون خط", category: "Pipes", sizes: [{ diameter: 20 }, { diameter: 25 }], image: "https://www.fusionaus.com/wp-content/uploads/2018/10/white_pipe.jpg" },
  { id: 15, name: "مواسير ذات ألوان مختلفة للتصدير", category: "Pipes", sizes: [{ diameter: 50 }, { diameter: 110 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_colored_pipe.jpg" },
  { id: 16, name: "مواسير لزوم كابلات التليفونات والكهرباء", category: "Pipes", sizes: [{ diameter: 50 }, { diameter: 90 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_cable_pipe.jpg" },
  { id: 17, name: "مواسير بيضاء برأس جوان وذيل", category: "Pipes", sizes: [{ diameter: 50 }, { diameter: 75 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_gasket_tail_pipe.jpg" },
  { id: 18, name: "مواسير بيضاء برأس لصق وذيل", category: "Pipes", sizes: [{ diameter: 50 }, { diameter: 75 }], image: "https://www.fusionaus.com/wp-content/uploads/2018/10/glue_tail_pipe.jpg" },
  { id: 19, name: "مواسير رمادي ذات رأس لصق", category: "Pipes", sizes: [{ diameter: 50 }, { diameter: 110 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_grey_pipe.jpg" },
  { id: 20, name: "مواسير آبار بسن", category: "Pipes", sizes: [{ diameter: 110 }, { diameter: 160 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_well_pipe.jpg" },
  { id: 21, name: "مواسير آبار ذات جلبة", category: "Pipes", sizes: [{ diameter: 110 }, { diameter: 160 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_well_coupling_pipe.jpg" },
  { id: 22, name: "مواسير آبار مخرمة", category: "Pipes", sizes: [{ diameter: 110 }, { diameter: 160 }], image: "https://www.pipelife.com/fileadmin/user_upload/images/products/Pipelife_perforated_pipe.jpg" }
];

let cart = [];
let selectedCategory = null;

// عرض الأقسام
function displayCategories() {
  const categoryList = document.getElementById("categoryList");
  if (!categoryList) {
    console.error("خطأ: عنصر categoryList غير موجود");
    return;
  }
  console.log("عرض الأقسام...");
  categoryList.innerHTML = "";
  categories.forEach((category) => {
    const card = `
      <div class="category-card bg-white rounded-lg shadow-lg p-4 cursor-pointer" onclick="showProducts('${category.id}')">
        <img src="${category.image}" alt="${category.name}" class="w-full h-32 object-cover rounded-md" onerror="this.src='https://via.placeholder.com/300'">
        <h3 class="text-xl font-bold mt-2"><i class="fas ${category.icon} mr-2"></i>${category.name}</h3>
      </div>
    `;
    categoryList.innerHTML += card;
  });
}

// عرض المنتجات لقسم محدد
function showProducts(categoryId) {
  selectedCategory = categoryId;
  console.log(`عرض المنتجات للقسم: ${categoryId}`);
  document.getElementById("categories").classList.add("hidden");
  const productsSection = document.getElementById("products");
  if (productsSection) {
    productsSection.classList.remove("hidden");
  } else {
    console.error("خطأ: عنصر products غير موجود");
  }
  displayProducts();
}

// عرض المنتجات
function displayProducts() {
  const productList = document.getElementById("productList");
  if (!productList) {
    console.error("خطأ: عنصر productList غير موجود");
    return;
  }
  const diameterFilter = document.getElementById("diameterFilter").value;
  console.log(`تصفية المنتجات بقطر: ${diameterFilter || "الكل"}`);
  productList.innerHTML = "";
  products
    .filter((product) => product.category === selectedCategory)
    .filter((product) => (diameterFilter ? product.sizes.some(size => size.diameter == diameterFilter) : true))
    .forEach((product) => {
      const card = `
        <div class="product-card bg-white shadow-lg rounded-lg p-4">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md" onerror="this.src='https://via.placeholder.com/150'">
          <h3 class="text-xl font-bold mt-2">${product.name}</h3>
          <select id="size-${product.id}" class="mt-2 p-2 border rounded w-full">
            ${product.sizes.map(size => `<option value="${size.diameter}">${size.diameter} مم</option>`).join("")}
          </select>
          <input id="quantity-${product.id}" type="number" min="1" value="1" class="mt-2 p-2 border rounded w-full" placeholder="العدد">
          <button onclick="addToCart(${product.id})" class="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            إضافة إلى العربة
          </button>
        </div>
      `;
      productList.innerHTML += card;
    });
}

// إضافة إلى العربة
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const size = document.getElementById(`size-${productId}`).value;
  const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
  cart.push({ product, size, quantity });
  console.log("تمت إضافة المنتج إلى العربة:", product.name);
  displayCart();
}

// عرض العربة
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  if (!cartItems) {
    console.error("خطأ: عنصر cartItems غير موجود");
    return;
  }
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="flex justify-between p-2 border-b">
        <span>${item.product.name} - ${item.size} مم (العدد: ${item.quantity})</span>
        <button onclick="removeFromCart(${index})" class="text-red-600">حذف</button>
      </div>
    `;
  });
}

// حذف من العربة
function removeFromCart(index) {
  cart.splice(index, 1);
  console.log("تم حذف عنصر من العربة");
  displayCart();
}

// إظهار نموذج الطلب
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("عربة التسوق فارغة!");
    return;
  }
  document.getElementById("orderForm").classList.remove("hidden");
});

// مرشح القطر
document.getElementById("diameterFilter").addEventListener("input", displayProducts);

// مشاركة الموقع
document.getElementById("getLocation").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      document.getElementById("location").innerText = `الموقع: ${latitude}, ${longitude}`;
      console.log("تم مشاركة الموقع:", latitude, longitude);
    }, (error) => {
      console.error("خطأ في مشاركة الموقع:", error);
      alert("فشل في مشاركة الموقع");
    });
  } else {
    alert("مشاركة الموقع غير مدعومة في المتصفح");
  }
});

// إظهار تفاصيل الدفع
document.getElementById("paymentMethod").addEventListener("change", (e) => {
  const paymentDetails = document.getElementById("paymentDetails");
  if (e.target.value === "vodafone" || e.target.value === "instapay") {
    paymentDetails.classList.remove("hidden");
  } else {
    paymentDetails.classList.add("hidden");
  }
});

// إرسال الطلب
document.getElementById("orderFormData").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const location = document.getElementById("location").innerText;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const paymentProof = document.getElementById("paymentProof").files[0];

  // تجميع تفاصيل الطلب
  let orderDetails = `طلب جديد من ${name}\nرقم الهاتف: ${phone}\nالعنوان: ${address}\nالموقع: ${location}\nطريقة الدفع: ${paymentMethod}\n`;
  if (paymentProof) {
    orderDetails += `إثبات الدفع: سيتم إرسال الرابط بعد الرفع\n`;
  }
  orderDetails += "المنتجات:\n";
  cart.forEach((item) => {
    orderDetails += `- ${item.product.name} (القطر: ${item.size} مم، العدد: ${item.quantity})\n`;
  });

  // إرسال إلى واتساب
  const whatsappMessage = encodeURIComponent(orderDetails);
  const whatsappNumber = "01030956097";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  window.open(whatsappUrl, "_blank");
  console.log("تم إرسال الطلب إلى واتساب");

  // إرسال إلى جوجل شيت
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("address", address);
  formData.append("location", location);
  formData.append("paymentMethod", paymentMethod);
  formData.append("orderDetails", JSON.stringify(cart));

  try {
    await fetch("YOUR_GOOGLE_SHEET_API", {
      method: "POST",
      body: formData,
    });
    console.log("تم إرسال البيانات إلى جوجل شيت");
  } catch (error) {
    console.error("خطأ في إرسال البيانات إلى جوجل شيت:", error);
  }

  alert("تم إرسال الطلب بنجاح!");
  document.getElementById("orderFormData").reset();
  cart = [];
  displayCart();
  document.getElementById("orderForm").classList.add("hidden");
});

// تحميل الأقسام عند بدء الصفحة
document.addEventListener("DOMContentLoaded", () => {
  console.log("تحميل الصفحة...");
  displayCategories();
});