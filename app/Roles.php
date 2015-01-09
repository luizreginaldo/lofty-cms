<?php namespace App;
/**
 * Created by PhpStorm.
 * User: brunoferreirbrunoa
 * Date: 1/8/15
 * Time: 17:35
 */
use Illuminate\Database\Eloquent\Model;

class Roles extends Model {

    public function users() {

        $this->belongsToMany('\Illuminate\Support\Facades\Config::get(\'auth.table\')', 'roles_assigned');

    }

    public function permissions() {

        return $this->morphMany('\App\Permissions', 'permission_role');

    }


    /**
     * Many-to-Many relations with Permission named perms as permissions is already taken.
     *
     * @return void
     */
    public function perms()
    {
        // To maintain backwards compatibility we'll catch the exception if the Permission table doesn't exist.
        // TODO remove in a future version.
        try {
            return $this->belongsToMany('\App\Permissions', 'permission_role', 'role_id', 'permission_id');
        } catch (Exception $e) {
            // do nothing
        }
    }

}