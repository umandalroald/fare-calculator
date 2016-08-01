<div id="map" style="width: 450px; height: 450px"></div>
<div id="right-panel">
    <?php print drupal_render($form['start']); ?>
    <?php print drupal_render($form['end']); ?>
    <?php print drupal_render($form['fare']); ?>
    <?php print drupal_render($form['submit']); ?>
    <?php print drupal_render_children($form); ?>
    <div id="directions-panel">
    </div>
</div>