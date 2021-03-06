<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function save_user()
    {
        $user = new User;
        $user->name = request()->name;
        $user->email = request()->email;
        $user->password = request()->password;
        $user->save();
        return redirect('/');
    }


    public function all_users()
    {
        $users = User::paginate(2);
        return response()->json($users);
    }


    public function edit_user($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }


    public function update_user()
    {
        $user = User::find(request()->id);
        $user->name = request()->name;
        $user->email  = request()->email;
        $user->update();
        return 'ok';
    }

    public function delete_user($id)
    {
        $user = User::find($id)->delete();
    }

//metodo view home con impaginazione a 50 (max count in home)
    public function all_usersForHome()
    {
        $users = User::paginate(50);
        return response()->json($users);
    }
}
