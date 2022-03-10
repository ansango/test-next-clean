const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
module.exports = (plop) => {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync("Components", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
  plop.setHelper("splitCapitalize", (text) => {
    return text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  plop.setHelper("lowercase", (text) => text.toLowerCase());
  plop.setGenerator("React Tailwind Blocks CLI", {
    description: "Create a React Tailwind Blocks CLI",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}Styles.ts",
        templateFile: "./templates/component/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./templates/component/test.tsx.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}Props.ts",
        templateFile: "./templates/component/props.ts.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/index.ts",
        templateFile: "./templates/component/index.ts.hbs",
      },
    ],
  });
};
