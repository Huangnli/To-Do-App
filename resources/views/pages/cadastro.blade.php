@extends('layouts.app')

@section('metadata')
  <title>Worklist - Cadastro</title>
  <link href="{{ URL::asset('css/cadastro.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content')
  <div class="main">
    <img src="{{ URL::asset('images/logologin.svg') }}" alt="logo" class="logo">
    <form class="login" id="formCadastro" autocomplete="off">
      <div class="box">
        <div class="wrapper">
          <div class="input-data">
            <input type="text" id="username" required>
            <label><span class="material-icons">email</span> Login</label>
          </div>
        </div>
        <div class="wrapper">
          <div class="input-data">
            <input type="password" id="password" required>
            <label><span class="material-icons">lock</span> Senha</label>
          </div>
        </div>
        <div class="wrapper">
          <div class="input-data">
            <input type="password" id="passwordConf" required>
            <label><span class="material-icons">lock</span> Confirmar Senha</label>
          </div>
        </div>
        <div class="form-row">
          <a class="form-row submit-btn">
            <input class="cadastrar-btn" type="submit" value="Cadastrar">
          </a>
        </div>
      </div>
    </form>
  </div>

  <div class="footer">
    <p>© 2021 Worklist 1.0 - Privacy Policy - Terms of Service </p>
  </div>

  <script type="text/javascript" src="{{ URL::asset('js/cadastro.js') }}"></script>
@endsection
