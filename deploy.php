<?php
namespace Deployer;

require_once 'recipe/common.php';

// Load config
inventory('deploy.yml');

/**
 * Main task
 */
desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'artisan:storage:link',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);

after('deploy', 'success');

// Tasks
task('test', function () {
    $result = run('pwd');
    writeln("Current dir: $result");
});

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
