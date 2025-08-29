# Emergency Service Website - Assignment 005


## Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## Answer:
-getElementById → কোনো একটি id দিয়ে একটি element খুঁজে বের করে। একবারে শুধু একটি element দেয়।
-getElementsByClassName → কোনো class name দিয়ে সব element খুঁজে বের করে। এটা একটি list আকারে দেয়।
-querySelector → প্রথম যে element selector-এর সাথে মেলে সেটাকে খুঁজে বের করে (id, class বা tag যেকোনো হতে পারে)।
-querySelectorAll → selector-এর সাথে মেলানো সব element খুঁজে বের করে। এটি একটি list আকারে দেয়।
---

### 2. How do you create and insert a new element into the DOM?
## Answer:
-নতুন element বানানো → const li = document.createElement("li");
একটি নতুন <li> element তৈরি করা হলো।

-টেক্সট দেয়া → li.textContent = "Hello";
এই নতুন element-এ "Hello" লেখা যোগ করা হলো।

-পেজে বসানো → document.getElementById("historyList").appendChild(li);
নতুন element-টি পেজের historyList নামের element-এর ভিতরে রাখা হলো।
---

### 3. What is Event Bubbling and how does it work?
## Answer:

-Event Bubbling হলো যখন আপনি কোনো element এ click করেন, সেই event ভিতরের element থেকে বাইরে থাকা parent element-গুলোর দিকে চলে যায়।

উদাহরণ: একটি button click করলে, সেই click parent div-এও কাজ করে, যতক্ষণ না আমরা তা explicitly stop করি।

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

## Answer:
Event Delegation হলো যখন আপনি parent element-এর উপর একটাই event listener বসান, আর সেই listener parent-এর সব child element-এর click handle করতে পারে।

-প্রতিটি child element-এ আলাদা listener দিতে হয় না, তাই memory ও code উভয়ই বাঁচে।
---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

## Answer:
-preventDefault() → ডিফল্ট কাজ থামায়। উদাহরণ: কোনো লিঙ্কে ক্লিক করলে অন্য পেজে যাবে না।

-stopPropagation() → ইভেন্টকে উপরের parent এ পাঠানো বন্ধ করে। উদাহরণ: child এ ব্যবহার করলে parent এর click trigger হবে না।
