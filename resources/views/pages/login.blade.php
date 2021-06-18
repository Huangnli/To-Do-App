@extends('layouts.app')

@section('metadata')
  <title>Worklist - Login</title>
  <link href="{{ asset('css/login.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content')
  <div class="main">
    <img src="{{ asset('images/logo.svg') }}" alt="logo" class="logo">

    <!-- Em caso de erros, informar ao usuário -->
    <!-- TODO: Precisa formatar e estilizar essa seção -->
    <!-- Deixei aqui só para usar de exemplo -->
    @if ($errors->any())
      <div>
        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
          @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
          @endforeach
        </ul>
      </div>
    @endif

    <form class="login" id="formCadastro" autocomplete="off" method="post" action="{{ route('login') }}">
      @csrf
      <div class="box">
        <div class="wrapper">
          <div class="input-data">
            <input type="email" id="email" name="email" required>
            <label><span class="material-icons">email</span> Login</label>
          </div>
        </div>
        <div class="wrapper">
          <div class="input-data">
            <input type="password" id="password" name="password" required>
            <label><span class="material-icons">lock</span> Senha</label>
          </div>
        </div>
        <div class="form-row">
          <div class="form-row submit-btn">
            <input class="input-btn" type="submit" value="Logar">
          </div>
          <a class="form-row submit-btn" href="{{ route('register') }}">
            <input class="cadastrar-btn" type="button" value="Cadastrar">
          </a>
        </div>
      </div>
    </form>
  </div>

  <div class="footer">
    <p>© 2021 Worklist 1.0 - Privacy Policy - Terms of Service</p>
  </div>
@endsection
