<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.welcome');
});

Route::get('/dashboard', function () {
    return view('pages.dashboard');
})->middleware(['auth'])->name('dashboard');

Route::resource('listas', ListasController::class, ['only' => [
'create', 'store', 'show', 'edit', 'update', 'destroy'
]]);

Route::resource('listas.tarefas', TarefasController::class, ['only' => [
'create', 'store', 'show', 'edit', 'update', 'destroy'
]]);

require __DIR__.'/auth.php';
