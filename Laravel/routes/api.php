<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListasController;
use App\Http\Controllers\TarefasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
  Route::post('/logout', [AuthController::class, 'logout']);
  Route::get('/user', [AuthController::class, 'user']);

  Route::get('/search/{term}', [ListasController::class, 'search']);

  Route::get('/lists', [ListasController::class, 'index']);
  Route::post('/lists/create', [ListasController::class, 'create']);
  Route::match(['put', 'patch'], '/lists/{list}', [ListasController::class, 'update']);
  Route::delete('/lists/{list}', [ListasController::class, 'delete']);

  Route::get('/lists/{list}/tasks', [TarefasController::class, 'index']);
  Route::post('/lists/{list}/tasks/create', [TarefasController::class, 'create']);
  Route::match(['put', 'patch'], '/tasks/{task}', [TarefasController::class, 'update']);
  Route::delete('/tasks/{task}', [TarefasController::class, 'delete']);
});
