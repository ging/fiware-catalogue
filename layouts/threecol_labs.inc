<?php

// Plugin definition
$plugin = array(
  'title' => t('Three column Labs layout'),
  'category' => t('Columns: 3'),
  'icon' => 'threecol_labs.png',
  'theme' => 'threecol_labs',
  'css' => 'threecol_labs.css',
  'regions' => array(
    'top' => t('Top'),
    'left' => t('Left side'),
    'middle' => t('Middle column'),
    'right' => t('Right side'),
    'bottom' => t('Bottom'),
  ),
);
