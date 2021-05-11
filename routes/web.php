<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//crud user
Route::post('save_user', [UserController::class, 'save_user']);
Route::get('all_users', [UserController::class, 'all_users']);
Route::get('edit_user/{id}', [UserController::class, 'edit_user']);
Route::put('update_user', [UserController::class, 'update_user']);
Route::delete('delete_user/{id}', [UserController::class, 'delete_user']);

//crud role
Route::post('save_role', [RoleController::class, 'save_role']);
Route::get('all_roles', [RoleController::class, 'all_roles']);
Route::get('edit_role/{id}', [RoleController::class, 'edit_role']);
Route::put('update_role', [RoleController::class, 'update_role']);
Route::delete('delete_role/{id}', [RoleController::class, 'delete_role']);

