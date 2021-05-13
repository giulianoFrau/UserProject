<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function save_role()
    {
        $role = new Role;
        $role->nome = request()->nome;
        $role->permessi = request()->permessi;
        $role->descrizione = request()->descrizione;
        $role->save();
        return 'ok';
    }


    public function all_roles()
    {
        $roles = Role::paginate(2);
        return response()->json($roles);
    }

    public function edit_role($id)
    {
        $role = Role::find($id);
        return response()->json($role);
    }


    public function update_role()
    {
        $role = Role::find(request()->id);
        $role->nome = request()->nome;
        $role->permessi  = request()->permessi;
        $role->update();
        return 'ok';
    }

    public function delete_role($id)
    {
        $role = Role::find($id)->delete();
    }

//metodo view lista con impaginazione a 50 (max count in home)

    public function all_permissions()
    {
        $roles = Role::paginate(50);
        return response()->json($roles);
    }
}
