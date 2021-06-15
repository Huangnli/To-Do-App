<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="{{ URL::asset('css/style.css') }}" rel="stylesheet" type="text/css">
    @yield('metadata')
  </head>

  <body>
    @yield('content')
  </body>
</html>
