<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('about', 'about')->name('about');
Route::inertia('admission', 'admission')->name('admission');
Route::inertia('academe', 'academe')->name('academe');
Route::inertia('students-alumni', 'students-alumni')->name('students-alumni');
Route::inertia('research-extension', 'research-extension')->name('research-extension');
Route::inertia('announcement', 'announcement')->name('announcement');
Route::inertia('contact-us', 'contact-us')->name('contact-us');
Route::inertia('faq', 'faq')->name('faq');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
