<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function login() {
        return view('pages.login');
    }

    public function cadastro() {
        return view('pages.cadastro');
    }

    public function index() {
        return view('pages.index');
    }
}
