<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use App\User as User;
use \Illuminate\Http\Request;

class Authenticate extends  AuthToken {

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
		parent::__construct($auth, $request);
	}

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{

		if ($this->auth->guest())
		{

			if ($request->ajax()){

				return response('Unauthorized.', 401);

			}
			else{

				return redirect()->guest('auth/login');

			}

		}

		return $next($request);

	}

}
