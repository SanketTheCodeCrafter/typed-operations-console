// import type { FormSchema } from "../formSchema";

// const validForm: FormSchema = {
//   id: "task-form",
//   name: "Task Form",
//   fields: [
//     {
//       id: "title",
//       label: "Title",
//       required: true,
//       type: "text",
//       minLength: 3,
//     },
//     {
//       id: "priority",
//       label: "Priority",
//       required: true,
//       type: "select",
//       options: ["low", "medium", "high"],
//     },
//     {
//       id: "estimate",
//       label: "Estimate",
//       required: false,
//       type: "number",
//       min: 1,
//       max: 40,
//     },
//   ],
// };

// const invalidFieldType: FormSchema = {
//   id: "bad-form",
//   name: "Broken Form",
//   fields: [
//     {
//       id: "email",
//       label: "Email",
//       required: true,
//       type: "email", // ❌ NOT ALLOWED
//     },
//   ],
// };


// const missingOptions: FormSchema = {
//   id: "bad-select",
//   name: "Broken Select",
//   fields: [
//     {
//       id: "status",
//       label: "Status",
//       required: true,
//       type: "select",
//       // ❌ options missing
//     },
//   ],
// };

// const illegalProperty: FormSchema = {
//   id: "bad-field",
//   name: "Broken Field",
//   fields: [
//     {
//       id: "age",
//       label: "Age",
//       required: true,
//       type: "number",
//       min: 1,
//       max: 100,
//       maxLength: 5, // ❌ not allowed on number
//     },
//   ],
// };


// const wrongOptions: FormSchema = {
//   id: "bad-options",
//   name: "Broken Options",
//   fields: [
//     {
//       id: "priority",
//       label: "Priority",
//       required: true,
//       type: "select",
//       options: [1, 2, 3], // ❌ numbers not allowed
//     },
//   ],
// };

