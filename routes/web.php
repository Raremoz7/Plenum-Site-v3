<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'));
Route::get('/funcionalidades', fn () => Inertia::render('Funcionalidades'));
Route::get('/modulos/operacao-comercial', fn () => Inertia::render('ModuloOperacaoComercial'));
Route::get('/modulos/comunicacao', fn () => Inertia::render('ModuloComunicacao'));
Route::get('/modulos/inteligencia-ia', fn () => Inertia::render('ModuloIA'));
Route::get('/integracoes', fn () => Inertia::render('Integracoes'));
Route::get('/precos', fn () => Inertia::render('Precos'));
Route::get('/contato', fn () => Inertia::render('Contato'));
Route::post('/contato', [ContactController::class, 'store']);
Route::get('/sitemap.xml', [SitemapController::class, 'index']);
