@extends('layouts.app')

@section('metadata')
  <title>Worklist - Login</title>
  <link href="{{ URL::asset('css/login.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content')
  <div class="main">
    <img src="{{ URL::asset('images/logologin.svg') }}" alt="logo" class="logo">
    <form  class="login" id="form" autocomplete="off">
      <div class="box">
        <div class="wrapper">
          <div class="input-data">
            <input type="text" id="username" required >
            <label><span class="material-icons">email</span> Login</label>
          </div>
        </div>
        <div class="wrapper">
          <div class="input-data">
            <input type="password" id="password" required>
            <label><span class="material-icons">lock</span> Senha</label>
          </div>
        </div>
        <div class="form-row">
          <div class="form-row submit-btn">
            <input class="input-btn" type="submit" value="Logar">
          </div>
          <a class="form-row submit-btn" href="cadastro.html">
            <input class="cadastrar-btn" type="button" value="Cadastrar">
          </a>
        </div>
      </div>
    </form>
  </div>

  <div class="footer">
    <p>© 2021 Worklist 1.0 - Privacy Policy - Terms of Service </p>
  </div>

  <script type="text/javascript" src="{{ URL::asset('js/login.js') }}"></script>
@endsection
