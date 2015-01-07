<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use App\User as User;
use \Illuminate\Http\Request;

class AuthToken  {

    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct(Guard $auth, Request $request)
    {
        $this->auth = $auth;
        if ($this->auth->guest()) {

            if ($request->ajax()) {

                if ($request->header('Authorization') && strlen($request->header('Authorization')) > 10) {

                    $user = User::where('access_token', $request->header('Authorization'))->first();

                    if ($user) {

                        $this->auth->setUser($user);

                    }

                }
            }
        }
    }

}
