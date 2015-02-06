<?php

// get folder based on environment
function getFolder() {
    return (env('APP_ENV') != 'production' ? 'app' : 'dist');
}

// generate default url to frontend assets
$url = asset('lofty-front/'.getFolder()).'/';

// replace links 
$page = str_replace(
    [
        'href="',
        'src="'
    ],
    [
        'href="'.$url,
        'src="'.$url
    ],
    File::get(public_path() . '/lofty-front/'.getFolder().'/index.html') // ge view file
);

// if environment not are production, load custom elements from .tmp
if(env('APP_ENV') != 'production') {
    $page = str_replace(
        [
            'app/styles',
            'app/elements/yo-list',
            'app/elements/yo-greeting'
        ],
        [
            '.tmp/styles',
            '.tmp/elements/yo-list',
            '.tmp/elements/yo-greeting'
        ],
        $page
    );
}

// show html page
echo $page;

?>
<script>
    //set baseurl with value returned from laravel framework using url() method
    window.baseurl = function (url) {
        var base = '<?=url()?>/';
        return base + url;
    };

    // set view function for return view
    window.view = function (file) {
        var file = file.replace('.html', '').replace('index.php', '');
        return baseurl('lofty-front/<?=getFolder()?>/scripts/components/') + file + '.html';
    };
</script>