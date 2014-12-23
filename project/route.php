<?php
/**
 * Created by PhpStorm.
 * User: brunoferreirbrunoa
 * Date: 12/23/14
 * Time: 16:53
 */

$router->group(['before' => 'auth', 'prefix' => 'api'], function($router)
{

    Route::controllers([
        '/'	=> 'ApiController'
    ]);

});