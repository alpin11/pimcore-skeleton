// webpack.config.js
var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');

Encore
// directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // enable vue template compilation
    .enableVueLoader()

    // enable TypeScript
    .enableTypeScriptLoader()

    // will output as web/build/app.js
    .addEntry('project-name-scripts', './assets/js/app.js')
    .addEntry('project-name-edit', './assets/js/edit.js')

    // will output as web/build/global.css
    .addStyleEntry('project-name-styles', './assets/css/site.scss')
    .addStyleEntry('project-name-editmode', './assets/css/editmode.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .copyFiles([
        {
            from: './assets/images',
            to: 'images/[path][name].[ext]',
        },
        {
            from: './assets/fonts',
            to: 'fonts/[path][name].[ext]',
        }
    ])

    .addPlugin(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    }))

    .enablePostCssLoader((options) => {
        options.config = {
            path: 'postcss.config.js'
        };
    })
    .enableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
