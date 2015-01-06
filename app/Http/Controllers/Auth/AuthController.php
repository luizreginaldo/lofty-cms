<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use App\Http\Requests\Auth\LoginRequest;
use Response;

class AuthController extends Controller {
	/*
	|--------------------------------------------------------------------------
	| Registration & Login Controller
	|--------------------------------------------------------------------------
	|
	| This controller handles the registration of new users, as well as the
	| authentication of existing users. By default, this controller uses
	| a simple trait to add these behaviors. Why don't you explore it?
	|
	*/
	use AuthenticatesAndRegistersUsers;

	public function getLogin() {

		return view('system');

	}

	public function postLogin(LoginRequest $request)
	{

		$credentials = $request->only('email', 'password');

		if ($this->auth->attempt($credentials, $request->has('remember')))
		{
			return Response::json([
				'success'	=> true,
				'user'		=> $this->auth->user()
			]);
		}

		return Response::json([
			'success'	=> false
		]);
	}

	public function getVerify() {

		return Response::json([
			'success'	=> true,
			'user'		=> $this->auth->user()
		]);

	}

}