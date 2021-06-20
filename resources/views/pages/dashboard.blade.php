@extends('layouts.app')

@section('metadata')
  <title>WorkList</title>
  <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content')
  <header>
    <div class="bar-container">
      <div class="bar-left">
        <a class="logo" href="{{ route('dashboard') }}">Work<span>List</span></a>
        {!! Form::open(['action' => 'DashboardController@createList', 'method' => 'POST']) !!}
          {{ Form::submit('Criar lista', ['class' => 'create-list']) }}
        {!! Form::close() !!}
      </div>
      <div class="bar-right">
        <span class="material-icons icon-settings">settings</span>
        <span class="material-icons icon-user">person</span>
      </div>
    </div>
  </header>

  <div class="search-bar-container">
    <form class="search-bar">
      @csrf
      <input class="search-bar-input" type="text" placeholder="Buscar">
      <button class="search-bar-btn" type="submit"><span class="material-icons">search</span></button>
    </form>
  </div>

  <main>
    @foreach($lists as $list)
      <div class="list-container">
        <div class="list-info">
          {!! Form::open(['action' => ['DashboardController@updateList', $list->id], 'method' => 'POST']) !!}
            {{ Form::hidden('_method', 'PUT') }}
            {{ Form::text('name', $list->name, ['class' => 'list-name']) }}
            <div class="list-deadline">dd/mm/yyyy</div>
          {!! Form::close() !!}
        </div>
        <div class="task-container">
          @foreach($tasks[$list->id] as $task)
            <div class="task-item-container">
              {!! Form::open(['action' => ['DashboardController@updateTask', $list->id, $task->id], 'method' => 'POST', 'class' => 'task-info']) !!}
                {{ Form::hidden('_method', 'PUT') }}
                {{ Form::checkbox('isChecked', true, $task->is_checked, ['onChange' => "this.form.submit()"]) }}
                {{ Form::text('name', $task->name, ['class' => 'task-name']) }}
              {!! Form::close() !!}
              {!! Form::open(['action' => ['DashboardController@deleteTask', $list->id, $task->id], 'method' => 'POST']) !!}
                {{ Form::hidden('_method', 'DELETE') }}
                {{ Form::button('<span class="material-icons">delete</span>', ['type' => 'submit', 'class' => 'btn-delete'])  }}
              {!! Form::close() !!}
            </div>
          @endforeach
        </div>
        <div class="list-options-container">
          {!! Form::open(['action' => ['DashboardController@createTask', $list->id], 'method' => 'POST', 'class' => 'new-task-input']) !!}
            {{ Form::text('name', '', ['class' => 'name-new-task', 'placeholder' => 'Adicione uma tarefa']) }}
            {{ Form::button('<span class="material-icons">add_box</span>', ['type' => 'submit', 'class' => 'list-btn-add'])  }}
          {!! Form::close() !!}

          {!! Form::open(['action' => ['DashboardController@deleteList', $list->id], 'method' => 'POST']) !!}
            {{ Form::hidden('_method', 'DELETE') }}
            {{ Form::button('<span class="material-icons">delete</span>', ['type' => 'submit', 'class' => 'btn-delete'])  }}
          {!! Form::close() !!}
        </div>
      </div>
    @endforeach
  </main>
@endsection
