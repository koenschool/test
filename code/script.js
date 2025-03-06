$veld1 = $("#veld1");
$veld2 = $("#veld2");
$knop = $("#knop");
$tekst = $("#tekst");

$knop.on('click', function() {
    $tekst.html( (
        parseInt($veld1.val()) + parseInt($veld2.val())) );
});