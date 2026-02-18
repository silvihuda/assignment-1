## 1) What is the difference between null and undefined?

**answer:**  

Null: প্রোগ্রামার ইচ্ছা করে সেট করে দেয় যার ডেটা টাইপ হল অব্জেক্ট  

undefined: কোন variable declare করা হয়েছে কিন্তু মান দেওয়া হয়নি। প্রোগ্রামার নিজে দেয়না; ডেটা টাইপ undefined.

## 2) What is the use of the map() function in JavaScript? How is it different from forEach()?

**answer:** 
Map function কোন একটা  array এর উপর লুপ চালায় কাজ করে একটা array return করে।forEach() একই কাজ করলেও কিছু return করে না

## 3) What is the difference between == and ===?

**answer:** 
== শুধু  variable এর মান চেক করে type চেক করে না।type coercion করে।কিন্তু === type coercion করেনা তাই মান এবং type দুইই চেক করে

## 4) What is the significance of async/await in fetching API data?

**answer:** 
API data fetch করার function একটা asynchronous function.async await দিয়ে এই asynchronous function কে synchronous ভাবে লিখা হয় যা fetch. then() এর থেকে বেশি ক্লিন লাগে দেখতে এবং error handle করতে সহজ হয়

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

**answer:** 
scope হল কোন একটা ভেরিয়েবল program এর কোন জায়গা থেকে এক্সেস করা যায় তা ঠিক করে।
Global scope : code এর যে কোন জায়গা থেকে এক্সেস করা যায়।ফাংশন অথবা ব্লক এর বাইরে ডিক্লেয়ার করা হয়
Function Scope: শুধু ফাংশন এর ভেতর থেকে এক্সেস করা যায় যা ফাংশন এর ভিতরে ডিক্লেয়ার করা থাকে
Block scope: কোন if,for,while এসব এর ভিতরে যে ভেরিয়েবল ডিক্লেয়ার করা থাকে যা শুধু if for while মধ্যেই এক্সেসিবল

