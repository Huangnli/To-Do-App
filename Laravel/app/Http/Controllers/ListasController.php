<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Lista;

class ListasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lists = Lista::where('user_id', Auth::id())->get();

        return response()->json($lists);
    }

    /**
     * Creates a resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $list = Lista::create([
            'user_id' => Auth::id()
        ]);

        return response()->json($list);
    }

    /**
     * Updates the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $list = Lista::find($id);
        $list->name = $request->input('name');
        $list->save();

        return response()->json(['success' => 'List updated'], 200);
    }

    /**
     * Deletes the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $list = Lista::find($id);
        $list->delete();
        return response()->json(['success' => 'List deleted'], 200);
    }

    public function search($term)
    {
        $lists = Lista::
            where('name', 'like', '%'. $term .'%')
            ->orWhereHas('tasks', function($query) use ($term) {
                $query->where('name', 'like', '%'. $term .'%');
            })
            ->orderBy('created_at')
            ->get();

        return response()->json($lists);
    }

}
