<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Lista;
use App\Models\Tarefa;

class DashboardController extends Controller
{
    public function index() {
        $lists = Lista::where('user_id', Auth::id())->get();
        $tasksLists = array();

        foreach ($lists as $list)
        {
            $tasks = Lista::find($list->id)->tasks;
            $tasksLists[$list->id] = $tasks;
        }

        return view('pages.dashboard')
            ->with('lists', $lists)
            ->with('tasks', $tasksLists);
    }

    /**
     * Creates a new list.
     *
     * @return \Illuminate\Http\Response
     */
    public function createList()
    {
        Lista::create([
            'user_id' => Auth::id()
        ]);
        return redirect('/dashboard');
    }

    /**
     * Updates the specified list in storage.
     *
     * @param  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateList(Request $request, $id)
    {
        $list = Lista::find($id);
        $list->name = $request->input('name');
        $list->save();
        return redirect('/dashboard');
    }

    /**
     * Remove the specified list from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteList($id)
    {
        $list = Lista::find($id);
        $list->delete();
        return redirect('/dashboard');
    }

    /**
     * Creates a new task.
     *
     * @param  $request
     * @param  int  $listId
     * @return \Illuminate\Http\Response
     */
    public function createTask(Request $request, $listId)
    {
        Tarefa::create([
            'user_id' => Auth::id(),
            'list_id' => $listId,
            'name' => $request->input('name')
        ]);
        return redirect('/dashboard');
    }

    /**
     * Updates the specified task in storage.
     *
     * @param  $request
     * @param  int  $listId
     * @param  int  $taskId
     * @return \Illuminate\Http\Response
     */
    public function updateTask(Request $request, $listId, $taskId)
    {
        $tasks = Lista::find($listId)->tasks;
        $task = Tarefa::find($taskId);

        $task->name = $request->input('name');
        $task->is_checked = $request->input('isChecked') == null ? 0 : 1;

        $task->save();
        return redirect('/dashboard');
    }

    /**
     * Remove the specified task from storage.
     *
     * @param  int  $listId
     * @param  int  $taskId
     * @return \Illuminate\Http\Response
     */
    public function deleteTask($listId, $taskId)
    {
        $tasks = Lista::find($listId)->tasks;
        $task = Tarefa::find($taskId);
        $task->delete();
        return redirect('/dashboard');
    }
}