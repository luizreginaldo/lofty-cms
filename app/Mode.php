<?php namespace App;

class Model extends \Illuminate\Database\Eloquent\Model
{

    public static function updateOrCreate(array $attributes, array $values = array())
    {
    	
        $key = (new static)->getKeyName();
        $instance = static::findOrNew(isset($attributes[$key]) ? $attributes[$key] : null);

        $instance->fill($attributes)->save();

        return $instance;
    }

}