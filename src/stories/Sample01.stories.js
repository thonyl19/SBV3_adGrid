import Sample01 from './Sample01.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'AdGrid/Sample01',
  component: Sample01,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
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
 
