// scripts/parseByString.ts
import * as fs from "fs/promises";
import * as path from "path";

// Многострочная строка с путями к файлам.
// Можно писать одним блоком или с переносами.

// const inputString = String.raw`
// apps\web\src\app\(no-auth)\sign-up-after-story-url\CheckIdFromParams.tsx
// apps\web\src\app\(no-auth)\sign-up-after-story-url\page.tsx
// apps\web\src\app\(no-auth)\sign-up-after-story-url\RegisterForm.tsx
// apps\web\src\app\(no-auth)\sign-up\SignUpForm.tsx
// apps\web\src\app\(no-auth)\sign-up\page.tsx
// apps\web\src\app\(no-auth)\forgot-password\page.tsx
// apps\web\src\app\(no-auth)\forgot-password\ForgotPasswordRequestForm.tsx
// apps\web\src\app\(no-auth)\create-story-from-url\page.tsx
// apps\web\src\app\(no-auth)\create-story-from-url\CreateStoryFromUrlImmediate.tsx
// apps\web\src\app\(no-auth)\create-story-from-url\CreateStoryFromUrlForm.tsx
// apps\web\src\app\(no-auth)\create-story-from-url\CheckIdFromParams.tsx
// apps\web\src\app\(no-auth)\accept-invitation\page.tsx
// apps\web\src\app\(no-auth)\accept-invitation\CheckPasswordStep.tsx
// apps\web\src\app\(no-auth)\accept-invitation\AcceptInvitationForm.tsx

// `
// const inputString = String.raw`
// apps/web/src/app/(story-bar)/OnboardingDialog.tsx
// apps/web/src/app/(story-bar)/layout.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingFillDesignDialog.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingKeyMomentsDialog.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingKeyMomentsDialogWrapper.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingKeyMomentsDialogWrapperTest.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingProcess.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingProcessWrapper.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingStoryAlmostDoneDialog.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingStoryAlmostDoneDialogWrapper.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingStoryCompletedDialog.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingStoryCompletedDialogWrapper.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingUrlInitiatorContinueOrInviteDialog.tsx
// apps/web/src/app/(story-bar)/onboarding/OnboardingUrlInitiatorContinueOrInviteDialogWrapper.tsx


// `
const inputString = String.raw`
pnpm-workspace.yaml
package.json
tsconfig.json
turbo.json
apps\stories\src\app\layout.js
apps\stories\src\app\page.tsx
apps\stories\src\app\Brightr-Showcase\[company]\[storyId]\page.tsx
apps\stories\src\components\StoryPageWrapper\storyPageWrapper.js
apps\stories\src\components\StoriesDetail2\TopBanner\topBanner.js
apps\stories\src\components\StoriesDetail2\TopBanner\topBanner.js
apps\stories\src\components\StoriesDetail2\subComponents\Technologies\technologies.js
apps\stories\src\components\StoriesDetail2\subComponents\MissionSections\missionSection2.js
apps\stories\src\components\StoriesDetail2\subComponents\MissionSections\projectSection.js
apps\stories\src\components\StoriesDetail2\KeyMoments\key_moments.tsx
apps\stories\src\components\StoriesDetail2\KeyMoments\Moment\moment.tsx
apps\stories\src\components\StoriesDetail2\Testimonials\testimonials.js
`
// const inputString = String.raw`
// pnpm-workspace.yaml
// package.json
// tsconfig.json
// turbo.json
// apps\web\package.json
// apps\web\tsconfig.json
// apps\web\turbo.json
// apps\web\src\app\(no-auth)\create-story-from-url\page.tsx
// apps\web\src\app\(no-auth)\create-story-from-url\CheckIdFromParams.tsx
// apps\web\src\app\(no-auth)\create-story-from-url\CreateStoryFromUrlForm.tsx
// apps\web\src\app\(no-auth)\create-story-from-url\CreateStoryFromUrlImmediate.tsx
// apps\web\src\app\(no-auth)\dynamic-story-creation\page.tsx

// packages\e2e\tsconfig.json
// packages\e2e\package.json
// packages\e2e\playwright.config.ts
// packages\e2e\global-setup.ts
// packages\e2e\utils\api.ts
// packages\e2e\utils\email.ts
// packages\e2e\utils\env.ts
// packages\e2e\utils\types.ts
// packages\e2e\utils\urls.ts
// packages\e2e\utils\setupHelpers.ts
// packages\e2e\utils\platformActions.ts
// packages\e2e\utils\performRegistration.ts
// packages\e2e\tests\story-from-url-immediate\base.spec.ts
// packages\e2e\tests\regular-sign-up\create-story-dialog.spec.ts


// `
// const inputString = String.raw`
// pnpm-workspace.yaml
// package.json
// tsconfig.json
// turbo.json
// apps\web\package.json
// apps\web\tsconfig.json
// apps\web\turbo.json
// apps\web\tailwind.config.ts
// apps\web\next.config.mjs
// apps\web\svgr.d.ts
// apps\web\src\app\layout.tsx


// apps\api\tsconfig.json
// apps\api\package.json
// apps\api\turbo.json
// apps\api\.swcrc

// apps\admin\package.json
// apps\admin\turbo.json
// apps\admin\tsconfig.json

// packages\ui\package.json
// packages\ui\tsconfig.json
// packages\ui\index.tsx
// packages\ui\components.json
// packages\ui\config\tailwind.config.ts



// packages/utils/turbo.json
// packages/utils/tsup.config.ts
// packages/utils/tsconfig.json
// packages/utils/package.json
// packages/utils/src/index.ts

// packages\database\package.json
// packages\database\turbo.json
// packages\database\tsup.config.ts
// packages\database\tsconfig.json



// `
// const inputString = String.raw`
// pnpm-workspace.yaml
// package.json
// tsconfig.json
// turbo.json
// apps\web\package.json
// apps\web\tsconfig.json
// apps\web\turbo.json
// apps\web\tailwind.config.ts
// apps\web\next.config.mjs
// apps\web\svgr.d.ts
// apps\web\src\app\layout.tsx


// apps\api\tsconfig.json
// apps\api\package.json
// apps\api\turbo.json
// apps\api\.swcrc

// apps\admin\package.json
// apps\admin\turbo.json
// apps\admin\tsconfig.json

// packages\ui\package.json
// packages\ui\tsconfig.json
// packages\ui\index.tsx
// packages\ui\components.json
// packages\ui\config\tailwind.config.ts
// packages\ui\styles\globals.css
// packages\ui\postcss.config.mjs



// packages/utils/turbo.json
// packages/utils/tsup.config.ts
// packages/utils/tsconfig.json
// packages/utils/package.json
// packages/utils/src/index.ts

// packages\database\package.json
// packages\database\turbo.json
// packages\database\tsup.config.ts
// packages\database\tsconfig.json
// packages\database\prisma\schema.prisma
// packages\database\src\types.ts


// `

// packages/tsconfig/base.json
// packages/tsconfig/nest.json
// packages/tsconfig/nextjs.json
// packages/tsconfig/package.json
// packages/tsconfig/react-library.json
// const inputString = String.raw`
// src/preload/api/plugin.api.ts src/preload/preload.ts src/renderer/pages/PageLoader.tsx src/renderer/routes/routes.tsx src/renderer/store/plugins.store.ts
// `;
// const inputString = String.raw`
// apps\web\src\app\providers.tsx
// apps\web\src\app\layout.tsx
// apps\web\src\app\_page.tsx
// apps\web\src\shared\api\slices\authSlice.ts

// `
// const inputString = String.raw`
// apps\api\src\utils\helpers\QueryHelper.ts
// apps\api\src\story\story.service.ts
// apps\api\src\render\render.module.ts
// apps\api\src\render\render.service.ts
// apps\api\src\render\render.controller.ts
// apps\api\src\render\dto\create-render.dto.ts
// apps\api\src\render\dto\update-render.dto.ts
// apps\api\src\render\const\story-render-response.ts
// `
// const inputString = String.raw`
// package.json
// tsconfig.json
// turbo.json
// apps\web\package.json
// apps\web\tsconfig.json
// apps\web\turbo.json
// apps\api\tsconfig.json
// apps\api\package.json
// apps\api\turbo.json
// apps\admin\package.json
// apps\admin\turbo.json
// apps\admin\tsconfig.json
// packages\database\package.json
// packages\database\turbo.json
// packages\database\tsup.config.ts
// packages\database\tsconfig.json
// packages/database/prisma/schema.prisma
// packages/database/src/types.ts
// apps\api\src\make\dto\create-make.dto.ts
// apps\api\src\make\make.module.ts
// apps\api\src\make\make.service.ts
// apps\api\src\make\make.controller.ts


// `
// const inputString = String.raw`
// package.json
// tsconfig.json
// turbo.json
// apps\web\package.json
// apps\web\tsconfig.json
// apps\web\turbo.json
// apps\api\tsconfig.json
// apps\api\package.json
// apps\api\turbo.json
// apps\admin\package.json
// apps\admin\turbo.json
// apps\admin\tsconfig.json
// packages\database\package.json
// packages\database\turbo.json
// packages\database\tsup.config.ts
// packages\database\tsconfig.json
// packages/database/prisma/schema.prisma
// packages/database/src/types.ts

// apps\web\src\app\providers.tsx
// apps\web\src\shared\store\authStore.ts
// apps\web\src\shared\api\slices\storySlice.ts
// apps/web/src/shared/components/StorySideBar/storyState.ts
// apps\web\src\shared\utils\const\story-wizard\story-step-list.ts
// apps/web/src/shared/components/StorySideBar/StorySideBar2.tsx


// const inputString = String.raw`
// apps/api/src/auth/auth.controller.ts
// apps/api/src/auth/auth.service.ts
// apps/api/src/make/dto/create-make.dto.ts
// apps/api/src/make/dto/update-make.dto.ts 
// apps/api/src/make/make.service.ts
// apps/api/src/make/make.controller.ts
// apps/api/src/story/story.controller.ts
// apps/api/src/story/story.service.ts
// apps/api/src/websocket/websocket.service.ts
// apps/api/src/websocket/websocket.gateway.ts
// apps/web/src/app/(no-auth)/create-story-from-url/page.tsx
// apps/web/src/app/(no-auth)/create-story-from-url/CheckIdFromParams.tsx
// apps/web/src/app/(no-auth)/create-story-from-url/CreateStoryFromUrlForm.tsx
// apps\web\src\app\layout.tsx
// apps\web\src\shared\components\Dialogs\WebSocket.tsx
// apps/web/src/app/(sidebar)/stories/UrlInitiatorOnboardingProcessWrapper.tsx
// apps/web/src/app/(sidebar)/stories/dialogs/onboarding/OnboardingDialog.tsx
// apps/web/src/app/(sidebar)/stories/dialogs/onboarding/OnboardingErrorDialog.tsx
// apps/web/src/app/(sidebar)/stories/dialogs/onboarding/OnboardingInvalidUrlDialog.tsx
// apps/web/src/app/(sidebar)/stories/dialogs/onboarding/OnboardingSuccessDialog.tsx

// `

// const inputString = String.raw`
// apps/api/src/auth/auth.controller.ts
// apps/api/src/auth/auth.service.ts
// apps/api/src/make/dto/create-make.dto.ts
// apps/api/src/make/dto/update-make.dto.ts 
// apps/api/src/make/make.service.ts
// apps/api/src/make/make.controller.ts
// apps/api/src/story/story.controller.ts
// apps/api/src/story/story.service.ts
// apps/api/src/websocket/websocket.service.ts
// apps/api/src/websocket/websocket.gateway.ts
// apps/web/src/app/(no-auth)/create-story-from-url/page.tsx
// apps/web/src/app/(no-auth)/create-story-from-url/CheckIdFromParams.tsx
// apps/web/src/app/(no-auth)/create-story-from-url/CreateStoryFromUrlForm.tsx


// `

// apps\web\src\app\layout.tsx
// apps\web\src\shared\components\Dialogs\WebSocket.tsx
// const inputString = String.raw`
// src/main/main.ts
// src/main/managers/app.manager.ts
// src\main\managers\context.manager.ts
// src/main/managers/command.manager.ts
// src/main/managers/hotkey.manager.ts
// src/main/managers/keybinding.orchestrator.ts
// src/main/managers/plugin.manager.ts
// src/main/managers/extension-host.ts
// src/main/services/extension-process.ts
// src\shared\lib\events\KeybindingEventBus.ts
// src\main\services\watchers\keybindings.watcher.ts
// src\main\services\keybinding-command-provider.ts
// src/main/managers/command.tab.manager.ts
// src/main/managers/command.action.manager.ts
// src/main/managers/program.manager.ts
// src\main\managers\storage.manager.ts
// src/main/managers/state.manager.ts



// src\preload\api\general-data.api.ts
//  src\preload\api\global-store.api.ts
//  src\preload\api\command.api.ts
//  src\preload\api\context.api.ts
//  src\preload\api\state.api.ts
//  src\preload\preload.ts
//  src\types.d.ts

//  src/renderer/store/program.store.ts
// src/renderer/store/commandAction.store.ts 
// src/renderer/store/command.tab.store.ts
// src\renderer\store\flow.modal.store.ts
// src/renderer/components/CommandTab.tsx 
// `;

// const inputString = String.raw`
// src/renderer/components/VariableSelector.tsx src/renderer/components/CommandTab.tsx src/renderer/store/flow.modal.store.ts
// `;
// const inputString = String.raw`
// src/main/managers/command.tab.manager.ts src/main/managers/command.action.manager.ts src/main/managers/program.manager.ts src/renderer/components/CommandTab.tsx src/renderer/store/commandAction.store.ts src/renderer/store/command.tab.store.ts src/renderer/store/program.store.ts
// `;
// const inputString = String.raw`
// src/main/services/path-service.ts src/main/services/file-service.ts src/main/main.ts src/main/managers/app.manager.ts src/main/managers/command.manager.ts src/main/managers/hotkey.manager.ts src/main/managers/keybinding.orchestrator.ts src/main/managers/plugin.manager.ts src/main/managers/extension-host.ts src/main/services/extension-process.ts src\shared\lib\events\KeybindingEventBus.ts src\main\services\watchers\keybindings.watcher.ts  src\main\services\keybinding-command-provider.ts
//  src\shared\types\hotkey.types.ts

//  src/main/managers/context.manager.ts src/main/services/context-ipc.ts src/main/managers/path.manager.ts src/main/services/variable-service.ts
// src\main\managers\quick-pick.manager.ts
//  src\preload\api\general-data.api.ts
// src\preload\api\global-store.api.ts
// src\preload\api\command.api.ts
// src\preload\api\context.api.ts
// src\preload\preload.ts
// src\types.d.ts
// src\renderer\store\command.store.ts
// src\renderer\store\state.store.ts
// src\renderer\store\path.store.ts
// src\renderer\store\variable.store.ts
// src\renderer\components\CmdPanel.tsx
// src\renderer\components\QuickPick.tsx
// `;
// const inputString = String.raw`
// src/main/services/path-service.ts src/main/services/file-service.ts src/main/main.ts src/main/managers/app.manager.ts src/main/managers/command.manager.ts src/main/managers/hotkey.manager.ts src/main/managers/keybinding.orchestrator.ts src/main/managers/plugin.manager.ts src/main/managers/extension-host.ts src/main/services/extension-process.ts src\shared\lib\events\KeybindingEventBus.ts src\main\services\watchers\keybindings.watcher.ts  src\main\services\keybinding-command-provider.ts
//  src\shared\types\hotkey.types.ts

// `;

// Читаем файлы параллельно и сохраняем порядок
async function parseByString(input: string): Promise<string> {
  // Разделяем на пути по пробелам/переносам
  const filePaths = input
    .split(/\r?\n/)
    .flatMap((line) => line.trim().split(/\s+/))
    .filter(Boolean);

  // Готовим промисы чтения всех файлов
  const promises = filePaths.map((filePath) => fs.readFile(path.normalize(filePath), "utf-8"));
  // Выполняем чтение параллельно
  const contents = await Promise.all(promises);

  // Склеиваем результаты, сохраняя порядок
  const results: string[] = [];
  for (let i = 0; i < filePaths.length; i++) {
    // Убираем пустые строки
    const lines = contents[i].split(/\r?\n/).filter((line) => line.trim() !== "");

    results.push(
      `#path: ${filePaths[i]}`,
      "#start",
      ...lines,
      "#end",
      "" // Пустая строка-разделитель
    );
  }

  return results.join("\n");
}

async function main() {
  try {
    const parsedContent = await parseByString(inputString);

    // Сохраняем результат в корне проекта
    const outputFile = path.resolve(process.cwd(), "parse_project_by_string.txt");
    await fs.writeFile(outputFile, parsedContent, "utf-8");

    console.log(`Результат успешно записан в ${outputFile}`);
  } catch (error) {
    console.error("Ошибка при парсинге:", error);
    process.exit(1);
  }
}

// Запускаем main(), если файл вызывается напрямую
if (require.main === module) {
  main();
}
