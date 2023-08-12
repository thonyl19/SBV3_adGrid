import Sample02 from './ToolPanels';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'AdGrid/Sample02',
  component: Sample02,
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      Sample02,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<sample02 />',
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};
 
