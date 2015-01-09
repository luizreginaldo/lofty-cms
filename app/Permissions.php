<?php namespace App;
/**
 * Created by PhpStorm.
 * User: brunoferreirbrunoa
 * Date: 1/8/15
 * Time: 17:35
 */
use Illuminate\Database\Eloquent\Model;

class Permissions extends Model {

    public function roles() {

        return $this->belongsToMany('\App\Roles', 'permission_roles');

    }

    public function permissions() {

        return $this->morphMany('\App\Permissions', 'permission_role');

    }

}