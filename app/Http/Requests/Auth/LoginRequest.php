<?php namespace App\Http\Requests\Auth;

use App\Http\Requests\Request;
use Illuminate\Http\JsonResponse;

class LoginRequest extends Request {

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email', 'password' => 'required',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function response(array $errors) {
        return new JsonResponse([
            'errors'    => $errors
        ]);
    }

}
