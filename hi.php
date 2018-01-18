<?php

echo $hi ?? 'no hi var';
echo "\n";

$hi = '';
echo $hi ?? 'no hi var';
echo "\n";

$hi = 'good hi';
echo $hi ?? '';
echo "\n";
