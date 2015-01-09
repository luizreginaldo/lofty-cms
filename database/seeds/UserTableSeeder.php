<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder {

    protected $rootUser;
    protected $adminUser;

    protected $rootRole;
    protected $adminRole;

    public function run() {

        DB::table('assigned_roles')->delete();
        DB::table('permission_role')->delete();
        DB::table('permissions')->delete();
        DB::table('roles')->delete();
        DB::table('users')->delete();

        $this->rootRole = new \App\Roles;
        $this->rootRole->name = 'root';
        $this->rootRole->save();

        $this->adminRole = new \App\Roles;
        $this->adminRole->name = 'admin';
        $this->adminRole->save();

        $this->rootUser = new \App\User;
        $this->rootUser->email = 'root@root.com';
        $this->rootUser->password = \Hash::make('root');
        $this->rootUser->name     = 'Root';
        $this->rootUser->save();

        $this->adminUser = new \App\User;
        $this->adminUser->email = 'admin@admin.com';
        $this->adminUser->password = \Hash::make('admin');
        $this->adminUser->name     = 'Admin';
        $this->adminUser->save();

        $this->rootUser->roles()->attach($this->rootRole->id);
        $this->adminUser->roles()->attach($this->adminRole->id);

        $manageUsers = new \App\Permissions;
        $manageUsers->name = 'manage_users';
        $manageUsers->display_name = 'Manage Users';
        $manageUsers->save();

        $this->adminRole->perms()->sync([$manageUsers->id]);

    }
}