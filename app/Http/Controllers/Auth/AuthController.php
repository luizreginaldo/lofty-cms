<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use App\Http\Requests\Auth\LoginRequest;
use Response;
use App\User as User;
use \Illuminate\Http\Request;

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
			$this->auth->user()->access_token = \Crypt::encrypt(str_random(30));
			$this->auth->user()->save();

			return $this->successAuth();

		}

		return \Response::json(['password'	=> [\Lang::get('messages.invalid_password')]], 422);
	}

	public function getLogout(Request $request) {
		if($request->ajax()) {
			$this->auth->logout();
			return $this->successAuth();
		} else {
			return redirect('/admin');
		}
	}

	public function postGuest(Request $request) {

		return $this->successAuth();
	}

	public function successAuth() {
		return Response::json([
			'success'	=> true,
			'user'		=> $this->auth->user(),
			'access_token'	=> $this->auth->user() ? $this->auth->user()->access_token : ''
		]);
	}

}