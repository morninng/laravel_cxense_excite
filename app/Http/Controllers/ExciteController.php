<?php namespace App\Http\Controllers;

class ExciteController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Home Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders your application's "dashboard" for users that
	| are authenticated. Of course, you are free to change or remove the
	| controller as you wish. It is just here to get your app started!
	|
	*/

	/**
	 * Create a new controller instance.
	 * @return void
	 */
	public function __construct()
	{

	}
	/**
	 * Show the application dashboard to the user.
	 * @return Response
	 */
	public function index()
	{
		return view('home');
	}

	public function detail($recipe_id)
	{
		echo $recipe_id;
		return view('recipedetail');
	}

}
