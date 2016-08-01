<?php

/**
 * Implements fare_calculator_configuration_form().
 */
function fare_calculator_configuration_form($form, &$form_state) {
  
  $form['api_key'] = array(
    '#type' => 'textfield',
    '#title' => t('API KEY'),
    '#default_value' => variable_get('api_key', ''),
  );
  
  return system_settings_form($form);
}