export default [
    {
      name: "banner",
      parameters: [{ name: "value", type: "url" }]
    },
    {
      name: "title",
      parameters: [{ name: "value", type: "text" }]
    },
    {
      name: "test avec checkboxes",
      parameters: [
        { name: "value", type: "text" },
        {
          name: "option",
          type: "checkboxes",
          choices: [
            { name: "option 1", id: 0 },
            { name: "option 2", id: 1 },
            { name: "option 3", id: 2 }
          ]
        }
      ]
    },
    {
      name: "test avec select",
      parameters: [
        { name: "value", type: "text" },
        {
          name: "option",
          type: "select",
          choices: [
            { name: "option 1", id: 0 },
            { name: "option 2", id: 1 },
            { name: "option 3", id: 2 }
          ]
        }
      ]
    }
  ];
  