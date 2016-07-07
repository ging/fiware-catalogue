<?php
/**
 * @file
 * Sass Kalatheme's primary theme functions and alterations.
 */

function fiwareSASS_form_alter(&$form, &$form_state, $form_id) {
$form['filter']['#attributes']['placeholder'] = t('Filter...');
$form['filter_bundles']['#attributes']['placeholder'] = t('Filter...');
$form['filter_tools']['#attributes']['placeholder'] = t('Filter...');
if($form_id == 'user_login'){
drupal_set_message(t('Dear user, please note that the registration is required only for editing the contents of the Catalogue (e.g. GE implementation). If your intention is to know how to use FIWARE you don\'t need to create an account because all the information you need is publicly available. The editors of GE implementations on the Catalogue must register on the <a href="forge.fiware.org">FIWARE Forge</a> and then request access to the administrator of the Catalogue'), 'error');
}
drupal_set_message(t(' Account credentials administration must be done via FIWARE Forgue portal'), 'error');
}
