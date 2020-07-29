<?php
define('ROLE_ADMIN', 1);
define('ROLE_PUBLIC', 10);

define('STATUS_DO', 1);
define('STATUS_DONE', 2);
define('STATUS_PERIOD', 3);

const STATUS = [
    STATUS_DO => 'やること',
    STATUS_DONE => '完了',
    STATUS_PERIOD => '期限切れ'
];
