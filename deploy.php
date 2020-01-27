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
    'deploy:release',
    'deploy:update_code',
    'build',
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
    run('cd {{release_path}} && npm install && npm run build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
