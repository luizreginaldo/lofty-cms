<?php

$url = asset('lofty-front/dist/').'/';

echo str_replace(
    [
        'href="',
        'src="'
    ],
    [
        'href="'.$url,
        'src="'.$url
    ],
    File::get(public_path() . '/lofty-front/dist/index.html')
);

?>