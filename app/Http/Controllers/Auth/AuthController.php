<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Http\Request;
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

	public function getLogin(Request $request) {

		return view('system');

	}

	public function postLogin(Request $request)
	{
		/*$this->validate($request, [
			'email' => 'required', 'password' => 'required',
		]);*/

		$credentials = $request->only('email', 'password');

		if ($this->auth->attempt($credentials, $request->has('remember'))) {

			return Response::json([
				'success'	=> true,
				'user'	=> $this->auth->user()
			]);

		} else {

			return Response::json([
				'success'	=> false
			]);

		}
	}

	public function anyLogout() {

		if(!$this->auth->guest()) {
			$this->auth->logout();
		}

		return Response::json([
			'success'	=> true
		]);

	}

}
