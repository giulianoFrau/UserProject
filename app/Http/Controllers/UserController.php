<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function save_user(){
        $user=new User;
        $user->name=request()->name;
        $user->email=request()->email;
        $user->password=request()->password;
        $user->save();
        return redirect('/');
    }


public function all_users(){
    $users=User::paginate(5);
    return response()->json($users); 
}

}
