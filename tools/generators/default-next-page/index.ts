import {
  formatFiles,
  generateFiles,
  getProjects,
  installPackagesTask,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';

interface DefaultNextPageSchemaOptions {
  name: string;
  project: string;
  directory?: string;
}

export default async function (
  tree: Tree,
  schema: DefaultNextPageSchemaOptions
) {
  const project = getProjects(tree).get(schema.project);
  const _directory = schema.directory ? `pages/${schema.directory}` : 'pages';
  const directory = await getDirectory(tree, {
    ...schema,
    directory: _directory,
  });

  const componentDir = joinPathFragments(project.sourceRoot, directory);
  const { className } = names(schema.name);

  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    componentDir,
    { ...schema, tmpl: '', className, fileName: 'index' } // config object to replace variable in file templates
  );
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

async function getDirectory(host: Tree, schema: DefaultNextPageSchemaOptions) {
  const genNames = names(schema.name);
  const fileName = genNames.fileName;
  const workspace = getProjects(host);
  let baseDir: string;
  if (schema.directory) {
    baseDir = schema.directory;
  } else {
    baseDir =
      workspace.get(schema.project).projectType === 'application'
        ? 'app'
        : 'lib';
  }
  return joinPathFragments(baseDir, fileName);
}
