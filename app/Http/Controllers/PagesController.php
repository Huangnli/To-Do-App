<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lista;

class PagesController extends Controller
{
    public function login() {
        return view('pages.login');
    }

    public function cadastro() {
        return view('pages.cadastro');
    }

    public function index() {
        $listas = Lista::all();
        return view('pages.index')->with('listas', $listas);
    }
}
