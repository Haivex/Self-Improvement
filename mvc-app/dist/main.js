"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const hbs = require("hbs");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    hbs.registerPartials(path_1.join(__dirname, '..', 'views/partials'));
    app.setViewEngine('hbs');
    app.set('view options', {
        layout: 'layouts/index',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map