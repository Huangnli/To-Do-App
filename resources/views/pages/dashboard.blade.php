@extends('layouts.app')

@section('metadata')
  <title>Worklist</title>
  <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content')
  <header class="nav-bar">
    <div id="nav-bar-left">
      <label id="icon-menu" for="check">
        <span class="material-icons icon-menu">menu</span>
      </label>
      <img class="logo" src="{{ asset('images/logo.svg') }}" alt="logo">
    </div>

    <div id="search-bar">
      <input id="search" onclick="buscaTarefa(this.id)" type="search" placeholder="Search">
      <span class="material-icons icon-search">search</span>
    </div>

    <div id="nav-bar-right">
      <span class="material-icons">settings</span>
      <span class="material-icons">person</span>
    </div>
  </header>

  <div class="flex">
    <div class="nav">
      <input type="checkbox" id="check">
      <nav>
        <ul>
          <li><button onclick="criaLista()" class="criaLista">Criar lista +</button></li>
          <li><a href="#">Publicar Lista</a></li>
        </ul>
      </nav>
    </div>
  </div>
@endsection
