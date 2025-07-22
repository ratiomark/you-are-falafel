import * as fs from 'fs'
import * as path from 'path'

// Функция для поиска корневой директории проекта
function findRootDir(currentDir: string): string {
	// Проверяем наличие pnpm-lock.yaml или pnpm-workspace.yaml
	if (fs.existsSync(path.join(currentDir, 'pnpm-lock.yaml')) || fs.existsSync(path.join(currentDir, 'pnpm-workspace.yaml'))) {
		return currentDir
	}

	const parentDir = path.dirname(currentDir)

	// Если мы достигли корня файловой системы, выбрасываем ошибку
	if (parentDir === currentDir) {
		throw new Error('Корневая директория проекта не найдена')
	}

	// Рекурсивно проверяем родительскую директорию
	return findRootDir(parentDir)
}

// Находим корневую директорию проекта
const rootDir = findRootDir(__dirname)
// console.log('rootDir', rootDir)
// Путь к pnpm-lock.yaml
const lockFilePath = path.join(rootDir, 'pnpm-lock.yaml')
// console.log('Updating pnpm-lock.yaml to use HTTPS instead of SSH...', lockFilePath)


// / Чтение содержимого файла
let content: string;
try {
  content = fs.readFileSync(lockFilePath, 'utf8');
} catch (error) {
  console.error('Ошибка при чтении pnpm-lock.yaml:', error);
  process.exit(1);
}

// Заменяем SSH-ссылки на HTTPS
// content = content.replace(/git@github\.com:/g, 'https://github.com/');
content = content.replace(/git@github\.com:leonardiwagner\/js-function-reflector\.git/g, 'https://github.com/leonardiwagner/js-function-reflector.git')
// Заменяем git+ssh:// на git+https://
// content = content.replace(/git\+ssh:\/\/git@github\.com\//g, 'git+https://github.com/');

// Записываем обновленное содержимое обратно в файл
try {
  fs.writeFileSync(lockFilePath, content);
  console.log('pnpm-lock.yaml успешно обновлен для использования HTTPS вместо SSH.');
} catch (error) {
  console.error('Ошибка при записи обновленного pnpm-lock.yaml:', error);
  process.exit(1);
}
// console.log('Updating pnpm-lock.yaml to use HTTPS instead of SSH...', absoluteEntryPoint)
// let content = fs.readFileSync(lockFilePath, 'utf8')
//
//// Заменяем SSH-ссылки на HTTPS
// content = content.replace(/git@github\.com:/g, 'https://github.com/')
//
//// Заменяем git+ssh:// на git+https://
// content = content.replace(/git\+ssh:\/\/git@github\.com\//g, 'git+https://github.com/')
//
// fs.writeFileSync(lockFilePath, content)
// console.log('pnpm-lock.yaml has been updated to use HTTPS instead of SSH.')
//
