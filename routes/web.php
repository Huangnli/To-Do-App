<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

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

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

Route::post('/lists/create', [DashboardController::class, 'createList']);
Route::match(['put', 'patch'], '/lists/{list}', [DashboardController::class, 'updateList']);
Route::delete('/lists/{list}', [DashboardController::class, 'deleteList']);

Route::post('/lists/{list}/tasks/create', [DashboardController::class, 'createTask']);
Route::match(['put', 'patch'], '/lists/{list}/tasks/{task}', [DashboardController::class, 'updateTask']);
Route::delete('/lists/{list}/tasks/{task}', [DashboardController::class, 'deleteTask']);

require __DIR__.'/auth.php';
