<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Response;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;

class SessionsController extends Controller {

	private $auth;

	public function __construct(Guard $auth) {
		$this->auth = $auth;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
		if($this->auth->guest()){

			return Response::json([
				'success'	=> true,
				'user'		=> false
			]);

		} else {

			return Response::json([
				'success'	=> true,
				'user'		=> $this->auth->user()
			]);

		}

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(\App\Http\Requests\SessionsRequest $form, Request $request)
	{
		//
		if($this->auth->guest()) {
			$credentials = $request->only('email', 'password');

			if ($this->auth->attempt($credentials, $request->has('remember'))) {
				$response = Response::json([
					'success'	=> true,
					'user'		=> $this->auth->user()
				]);
			}
		} else {
			$response = Response::json([
				'success'	=> true,
				'user'		=> $this->auth->user()
			]);
		}

		return $response;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id = false)
	{
		//
		$this->auth->logout();
		return view('system');

	}

}
