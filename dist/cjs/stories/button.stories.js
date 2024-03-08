"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const __1 = require("../");
exports.default = {
    title: 'My Component/Button',
    component: __1.Button
};
// const Template = (args: any) => ({
//   //👇 Your template goes here
// });
// const PrimaryButton = Template.bind({});
// PrimaryButton.args = {
//   variant: 'primary',
// };
exports.Primary = {
    args: {
        variant: 'primary',
        children: 'My First Button'
    },
};
//# sourceMappingURL=button.stories.js.map