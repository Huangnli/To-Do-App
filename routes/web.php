<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\ListasController;
use App\Http\Controllers\TarefasController;

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

Route::get('/', [PagesController::class, 'index']);
Route::get('/cadastro', [PagesController::class, 'cadastro']);
Route::get('/login', [PagesController::class, 'login']);

Route::resource('listas', ListasController::class, ['only' => [
  'create', 'store', 'show', 'edit', 'update', 'destroy'
]]);
Route::resource('listas.tarefas', TarefasController::class, ['only' => [
  'create', 'store', 'show', 'edit', 'update', 'destroy'
]]);
