<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lista;
use App\Models\Tarefa;

class TarefasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($listId)
    {
        $tasks = Tarefa::where('list_id', $listId)->get();

        return response()->json($tasks);
    }

    /**
     * Creates a new resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, $listId)
    {
        $task = Tarefa::create([
            'list_id' => $listId,
            'name' => $request->input('name')
        ]);

        return response()->json($task);
    }

    /**
     * Updates the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $taskId)
    {
        $task = Tarefa::find($taskId);

        $task->name = $request->input('name');
        $task->is_checked = $request->input('isChecked') == true ? 1 : 0;

        $task->save();
        return response()->json(['success' => 'Task updated'], 200);
    }

    /**
     * Deletes the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $task = Tarefa::find($id);
        $task->delete();
        return response()->json(['success' => 'Task deleted'], 200);
    }
}
