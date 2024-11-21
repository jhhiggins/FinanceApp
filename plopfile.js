module.exports = (plop) => {

  // Generator for creating a new Page Component
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your page?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/page.hbs',
      },
      {
          type: 'add',
          path: 'src/styles/{{pascalCase name}}.css',
          template: '',
      },
    ],
  });

  // Generator for creating a new Component
  plop.setGenerator('component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
          type: 'add',
          path: 'src/styles/{{pascalCase name}}.css',
          template: '',
      },
    ],
  });
};